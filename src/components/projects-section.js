import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import tw, { styled } from "twin.macro"
import Img from "gatsby-image"
import Button from "../components/button"
import { SectionTextLeft } from "../components/padding"

const StyledH1 = styled.h1`
  ${tw`text-white text-7xl items-center absolute text-right px-48`}
  top: 260px;
`

const StyledTextDiv = styled.p`
  ${tw`text-center`}
`

const StyledDiv = styled.div`
  ${tw`flex`}
`

const StyledA = styled.a`
  ${tw`text-blue`}
`

const ProjectsSection = props => {
  const data = useStaticQuery(graphql`
    query {
      blob: file(relativePath: { eq: "yellow-blob.png" }) {
        childImageSharp {
          fixed(width: 800) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

  if (!data?.blob?.childImageSharp?.fixed) {
    return <div>Picture not found</div>
  }

  return (
    <StyledDiv>
      <SectionTextLeft>
        <StyledTextDiv>
          <div>
            ResInDe is currently partnering with{" "}
            <StyledA target="_blank" href="https://www.tigerapps.org/">
              TigerApps
            </StyledA>{" "}
            to redesign the course selection experience for Princeton students—
            through streamlining the integration of three widely used tools,{" "}
            <StyledA target="_blank" href="https://www.princetoncourses.com">
              Princeton Courses
            </StyledA>
            {", "}
            <StyledA target="_blank" href="https://recal.io/">
              ReCal
            </StyledA>
            {", "}and{" "}
            <StyledA target="_blank" href="https://www.tigerpath.io/">
              TigerPath
            </StyledA>{" "}
            into one clean and concise app. We are also working on a redesign of{" "}
            <StyledA target="_blank" href="https://tigerbook.herokuapp.com/">
              Tigerbook
            </StyledA>
            .
          </div>
        </StyledTextDiv>
        <Button to="/work" yellow="true">
          learn more
        </Button>
      </SectionTextLeft>
      <div id={props.id} style={{ position: "relative" }}>
        <Img fixed={data.blob.childImageSharp.fixed} />
        <StyledH1>Current Projects</StyledH1>
      </div>
    </StyledDiv>
  )
}

export default ProjectsSection
