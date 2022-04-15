import * as React from "react"

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
      <h1>Matt Murnighan</h1>
      <h2 style={headingStyles}>
        New Site coming...
      </h2>
    </main>
  )
}

export default IndexPage
