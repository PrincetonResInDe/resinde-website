import React from "react"
import tw, { styled, theme } from "twin.macro"
import { graphql } from "gatsby"

import { Padding } from "../components/padding"
import Blob1 from "../images/blobs/blob1.svg"

const Blobs = styled.div`
  svg:nth-child(1) {
  }
`

const PageContainer = styled(Padding)`
  ${tw`flex flex-col mt-36 mobile:mt-6`}

  header {
    ${tw`mt-16 space-y-6 mb-16`}
  }

  h1 {
    ${tw`leading-none`}
  }

  .description {
    width: 650px;
  }

  .at-a-glance {
    ${tw`flex space-x-32`}

    > div {
      ${tw`flex flex-col space-y-6`}
    }

    ul {
      ${tw`list-none ml-0`}
    }
  }

  h2 {
    ${tw`uppercase`}
    font-family: "Muli", sans-serif;
    font-size: 21px;
  }

  h3 {
    font-size: 54px;
    line-height: 1.2;
  }

  ul {
    ${tw`list-disc`}
    font-size: 18px;
    margin-left: 1rem;
  }

  section {
    ${tw`flex flex-col space-y-2 mx-24 mt-80`}

    h3 {
      width: 800px;
    }

    .body {
      p {
        ${tw`mb-5`}
      }
      
      ul {
        ${tw`mb-0`}
        margin-top: -0.75rem;
      }
    }
  }

  .problem h3 {
    width: 850px;
  }

  .ideation h3 {
    width: 700px;
  }
`

const ProjectPage = ({data}) => {
  const page = data.markdownRemark
  return (
    <>
      <Blob1 
        fill={theme('colors.blue.DEFAULT')} 
        style={{ "transform": "rotate(45deg) scaleX(-1)" }}
      />
      <PageContainer dangerouslySetInnerHTML={{ __html: page.html }} />
    </>
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