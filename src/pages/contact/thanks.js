import React from "react"
import tw, { styled } from "twin.macro"
import { Link } from "gatsby"
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"

const StyledLink = styled(props => <Link {...props} />)`
  ${tw`text-blue`}
`

const MagentaBlob = styled(Img)`
  left: -12em;
  top: 8em;
  z-index: -1;
  @media (max-width: 639px) {
    left: -60px;
  }
`
const Header1 = styled.h1`
  ${tw`text-white text-7xl absolute pl-48`}
  top: 300px;
`

const HeroContainer = tw.div`
  flex flex-col min-h-screen max-w-max justify-center mobile:px-8 px-48
`

const NotFoundPage = () => {
  const data = useStaticQuery(graphql`
    query {
      pinkBlob: file(relativePath: { eq: "pink-blob.png" }) {
        childImageSharp {
          fixed(width: 1025) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)
  return (
  <HeroContainer >
    <MagentaBlob fixed={data.pinkBlob.childImageSharp.fixed} style={{position: "relative", width: "1025px"}}/>
    <Header1><br></br>Your inquiry <br></br><br></br> has been <br></br><br></br>received!</Header1>
  </HeroContainer>
  )
}

export default NotFoundPage
