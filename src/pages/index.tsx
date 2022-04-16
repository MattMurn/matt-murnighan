import * as React from "react"
import { Name } from "../components/Name"
import { Projects } from "../components/Projects"

// styles
const pageStyles = {
  color: "#232129",
  padding: 96,
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
}
const headingStyles = {
  marginTop: 0,
  marginBottom: 64,
  maxWidth: 320,
}

const IndexPage = () => {
  return (
    <main style={pageStyles}>
      <title>Matt Murnighan</title>
      <Name />
      <Projects />
    </main>
  )
}

export default IndexPage
