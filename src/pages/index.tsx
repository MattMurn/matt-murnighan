import * as React from "react"
import { Name } from "../components/Name"
import { Projects } from "../components/Projects"
import './main.scss'

const IndexPage = () => {
  return (
    <main className="main">
      <title>Matt Murnighan</title>
      <Name />
      <Projects />
    </main>
  )
}

export default IndexPage
