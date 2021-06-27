import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import tw, { styled } from "twin.macro"
import Img from "gatsby-image"
import Button from "../components/button"
import { SectionTextLeft } from "../components/padding"

const StyledH1 = styled.h1`
  ${tw`text-white text-7xl items-center absolute px-48 text-right`}
  top: 260px;
`

const StyledDiv = styled.div`
  ${tw`flex`}
`

const CenteredP = styled.p`
  ${tw`text-center`}
`

const ContactSection = props => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "purple-blob.png" }) {
        childImageSharp {
          fixed(width: 800) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

  if (!data?.placeholderImage?.childImageSharp?.fixed) {
    return <div>Picture not found</div>
  }

  return (
    <StyledDiv>
      <SectionTextLeft>
        <CenteredP>
          Want to partner together? Curious to join? Contact us!
        </CenteredP>
        <Button to="/contact" purple="true">
          Contact Us
        </Button>
      </SectionTextLeft>
      <div id={props.id} style={{ position: "relative" }}>
        <Img fixed={data.placeholderImage.childImageSharp.fixed} />
        <StyledH1>Contact Us</StyledH1>
      </div>
    </StyledDiv>
  )
}

export default ContactSection
