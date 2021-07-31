import React from "react"
import { graphql } from "gatsby"
import tw, { styled } from "twin.macro"
import { Padding } from "../components/padding"

const StyledHeaderDiv = tw.div`
  mt-16 space-y-8
`

const Heading = tw.h1`
  leading-none
`

const PageContainer = styled(Padding)`
  ${tw`flex flex-col space-y-14 mt-36 mobile:mt-6`}
`

const ProjectPage = ({data}) => {
  const page = data.markdownRemark
  return (
    <PageContainer>
      <h1>{page.frontmatter.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: page.html }} />
    </PageContainer>
  )
}

export default ProjectPage

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
    }
  }
`