import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import tw, { styled } from "twin.macro"
import Img from "gatsby-image"
import { SectionTextRight } from "../components/padding"
import Button from "../components/button"

const StyledH1 = styled.h1`
  ${tw`mobile:text-black text-white text-7xl items-center absolute mobile:pl-8 pl-48`}
  top: 40%;
`

const StyledP = styled.p`
  ${tw`text-center`}
`

const StyledDiv = styled.div`
  ${tw`flex`}
`
const StyledList = tw.ul`
  list-disc list-inside py-8
`

const AboutSection = props => {
  const data = useStaticQuery(graphql`
    query {
      blob: file(relativePath: { eq: "blue-blob.png" }) {
        childImageSharp {
          fixed(width: 700) {
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
      <div id={props.id} style={{ position: "relative" }}>
        <Img fixed={data.blob.childImageSharp.fixed} />
        <StyledH1>About Us</StyledH1>
      </div>
      <SectionTextRight>
        <StyledP>
          ResInDe is Princeton University's premier student-run design
          consultancy. Short for Research, Innovation, and Design, ResInDe is
          founded on the core design principles of empathy and human-centered
          design. Our team understands the value of problem-solving and
          innovating with intention, and our mission is to provide impactful
          user experience solutions to the Princeton student and local community
          through user research and digital implementation. We currently
          specialize in the following areas:
        </StyledP>
        <StyledList>
          <li>User Research</li>
          <li>Product Strategy</li>
          <li>UI/UX Design</li>
          <li>Web Development</li>
        </StyledList>

        <Button to="/about" blue="true">
          learn more
        </Button>
      </SectionTextRight>
    </StyledDiv>
  )
}

export default AboutSection
