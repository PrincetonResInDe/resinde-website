import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import tw, { styled } from "twin.macro"
import Button from "../components/button"
import Img from "gatsby-image"

const StyledP = styled.p`
  ${tw`text-center`}
`
const Wrapper = tw.div`
  flex flex-col min-h-screen max-w-max justify-center mobile:px-8 px-48
`

const TextContainer = tw.div`
  flex flex-col self-center
`

const StyledDiv = tw.div`
  flex space-x-8
`

const NotFoundPage = () => {
  const data = useStaticQuery(graphql`
    query {
      file: file(relativePath: { eq: "grey-resinde-logo.png" }) {
        childImageSharp {
          # Specify the image processing specifications right in the query.
          fixed(width: 400, height: 492) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

  return (
    <Wrapper>
      <StyledDiv>
        <div>
          <Img
            fixed={data.file.childImageSharp.fixed}
            alt="grey ResInDe logo"
          />
        </div>
        <TextContainer>
          <h1>WHOOPS</h1>
          <br></br>
          <StyledP>It seems like we've encountered an error!</StyledP>
          <br></br>
          <StyledP>
            We apologize for that!
            <br></br>
            <br></br>
            <br></br>
            <Button to="/" blue="true">
              GO HOME
            </Button>
          </StyledP>
          <br></br>
        </TextContainer>
      </StyledDiv>
    </Wrapper>
  )
}

export default NotFoundPage
