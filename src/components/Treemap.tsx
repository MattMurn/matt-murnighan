import React, { useEffect } from "react"
import { select, treemap, hierarchy, type HierarchyNode } from 'd3'
import type { Skills, Nullable } from './Projects'

type SkillsUsed = {
    skillsUsed: Array<Skills>
}
export const Treemap = ({ skillsUsed }: SkillsUsed) => {

    const margin: number = 5;
    const height: number = 600;
    const width: number = 800;
    const svg = React.useRef<Nullable<HTMLDivElement>>(null);

    useEffect(() => {
        svg.current = select("#project_treemap")
            .append("svg")
            .attr("width", width + margin + margin)
            .attr("height", height + margin + margin)
            .append("g")
            .attr("transform",
                "translate(" + margin + "," + margin + ")");
    }, [])
    useEffect(() => {
        const serial =
        {
            name: "root",
            children: [...skillsUsed]
        };
        if (svg.current) {
            svg.current.selectAll('rect').remove();
            svg.current.selectAll('text').remove();
        }
        const root = hierarchy(serial).sum((d) => d.value)


        treemap()
            .size([width, height])
            .padding(2)
            (root)

        svg.current
            .selectAll("rect")
            .data(root.leaves())
            .enter()
            .append("rect")
            .attr('x', d => d.x0)
            .attr('y', d => d.y0)
            .attr('width', d => d.x1 - d.x0)
            .attr('height', d => d.y1 - d.y0)
            .style("stroke", "black")
            .style("fill", "rgb(60, 59, 59)")

        svg.current
            .selectAll("text")
            .data(root.leaves())
            .enter()
            .append("text")
            .attr("x", d => d.x0 + 5)
            .attr("y", d => d.y0 + 20)
            .text(d => d.data.skill)
            .attr("font-size", "15px")
            .attr("fill", "white")
    }, [skillsUsed])

    return <div id="project_treemap"></div>
}