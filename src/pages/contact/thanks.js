import React from "react"
import tw, { styled } from "twin.macro"
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"
import { Padding } from "../../components/padding"

const MagentaBlob = styled(Img)`
  left: -12em;
  top: 8em;
  z-index: -1;
  @media (max-width: 639px) {
    left: -60px;
  }
`
const Text = styled.h1`
  ${tw`text-white absolute text-center`}
  top: 600px;
  width: 700px;
`
const Heading = tw.h1`
  leading-none
`

const PageContainer = styled(Padding)`
  ${tw`flex flex-col mt-36 mobile:mt-6`}
`

const ThanksPage = () => {
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
    <PageContainer>
      <Heading>Thank You!</Heading>
      <MagentaBlob
        fixed={data.pinkBlob.childImageSharp.fixed}
        style={{ position: "relative", width: "1025px" }}
      />
      <Text>Your inquiry has been received!</Text>
    </PageContainer>
  )
}

export default ThanksPage
