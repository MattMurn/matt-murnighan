import React, { useEffect } from "react"
import { select, treemap, hierarchy } from 'd3'
import { type Skills } from './Projects'

type SkillsUsed = {
    skillsUsed: Array<Skills>
}
export const Treemap = ({ skillsUsed }: SkillsUsed) => {
    const margin: number = 5;
    const height: number = 600;
    const width: number = 800;
    let svg;
    let root;
    let serial;
    const serializeData = () => {
        return {
            name: "root",
            children: [...skillsUsed]
        }
    }
    serial = serializeData();
    root = hierarchy(serial).sum((d) => d.value)
    React.useEffect(() => {
        svg = select("#project_treemap")
            .append("svg")
            .attr("width", width + margin + margin)
            .attr("height", height + margin + margin)
            .append("g")
            .attr("transform",
                "translate(" + margin + "," + margin + ")");

        svg
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

        // and to add the text labels
        svg
            .selectAll("text")
            .data(root.leaves())
            .enter()
            .append("text")
            .attr("x", d => d.x0 + 5)
            .attr("y", d => d.y0 + 20)
            .text(d => d.data.skill)
            .attr("font-size", "15px")
            .attr("fill", "white")
    }, []) // Here the size of each leave is given in the 'value' field in input data
    useEffect(() => {



        console.log('update hit')
        serial = serializeData();
        root = hierarchy(serial).sum((d) => d.value)
        console.log(root)
    }, [skillsUsed])
    treemap()
        .size([width, height])
        .padding(2)
        (root)

    return <div id="project_treemap"></div>
}