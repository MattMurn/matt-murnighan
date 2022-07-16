import * as React from "react"
import { Name } from "../components"
// @ts-ignore
import { Projects } from "../components"
// @ts-ignore
import { TechnicalSkills } from '../components';
import './main.scss'

const IndexPage = () => {
  return (
    <main className="main">
      <title>Matt Murnighan</title>
      <Name />
      <Projects />
      <TechnicalSkills />
    </main>
  )
}

export default IndexPage
