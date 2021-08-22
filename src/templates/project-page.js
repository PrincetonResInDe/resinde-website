import React from "react"
import tw, { styled, theme } from "twin.macro"
import { graphql } from "gatsby"

import { Padding } from "../components/padding"
import Blob1 from "../images/blobs/blob1.svg"
import Blob2 from "../images/blobs/blob2.svg"

const Blobs = styled.div`
  ${tw`absolute w-full`}
  z-index: -1;
  overflow-x: clip;

  svg {
    margin-bottom: 21rem;
  }
  
  svg:nth-child(odd) {
    margin-left: 68vw;
  }

  svg:nth-child(even) {
    margin-left: -35vw;
  }

  /* Display only numOfBlobs number of blobs, as given in the .md file */
  svg:not(svg:nth-child(-n + ${props => props.numOfBlobs ? props.numOfBlobs : 0})) {
    display: none;
  }
`

const PageContainer = styled(Padding)`
  ${tw`flex flex-col mt-36 mobile:mt-6`}

  header {
    ${tw`mt-16 space-y-6 mb-16`}
  }

  h1 {
    ${tw`leading-none max-w-prose`}
  }

  .description {
    ${tw`max-w-prose`}
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
    ${tw`list-disc ml-4`}
    font-size: 18px;
  }

  img {
    border-radius: 25px;
  }

  section {
    ${tw`flex flex-col px-24`}
    margin-top: 24rem; /* Update this along with featured-img margin-top */

    > * {
      ${tw`mb-3`}
    }

    h3 {
      max-width: 800px;
    }

    .body {
      p {
        ${tw`mb-5`}
      }
      
      ul {
        ${tw`mb-0 -mt-3`}
      }
    }

    figure {
      ${tw`mt-4 mb-5`}
    }
  }

  .featured-img {
    margin-top: 24rem;
  }

  .imgs-2 {
    ${tw`-mx-24 flex gap-x-4`}

    figure {
      display: inline;
      width: 50%;
    }
  }

  .imgs-3 {
    ${tw`-mx-24 flex gap-x-4`}

    figure {
      display: inline;
      width: calc(100% / 3);
    }
  }
`

const ProjectPage = ({data}) => {
  const page = data.markdownRemark
  return (
    <>
      <Blobs numOfBlobs={data.markdownRemark.frontmatter.numOfBlobs}>
        <Blob1 style={{ transform: "rotate(-85deg)" }} />
        <Blob2 style={{ transform: "rotate(-132deg)" }} />
        <Blob2
          style={{ transform: "rotate(60deg)" }} 
          fill= {theme("colors.purple.DEFAULT")}
        />
        <Blob1
          style={{ transform: "rotate(-45deg)", marginLeft: "-25vw" }} 
          fill= {theme("colors.yellow.DEFAULT")}
        />
        <Blob1
          style={{ transform: "rotate(157deg)", marginLeft: "75vw" }} 
        />
        <Blob2 style={{ transform: "rotate(-132deg)" }} />
      </Blobs>
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
        numOfBlobs
      }
    }
  }
`