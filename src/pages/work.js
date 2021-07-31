import React, { useState } from "react"
import tw, { styled } from "twin.macro"
import { graphql, Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

import Seo from "../components/seo"
import StyledLink from "../components/styled-link"
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

const Filters = tw.div`
  flex flex-row space-x-8 font-bold hidden
`

const Filter = styled("p")`
  position: relative;
  transition: color 0.3s ease-in-out;
  &:before {
    ${props => {
      if (props.magenta) return tw`bg-magenta`
      if (props.purple) return tw`bg-purple`
      if (props.blue) return tw`bg-blue`
    }}
    content: "";
    position: absolute;
    width: 0;
    height: 2px;
    bottom: -2px;
    left: 0;
    visibility: hidden;
    transition: all 0.3s ease-in-out;
    transition-duration: 0.5s;
  }
  &:hover:before {
    visibility: visible;
    width: 100%;
  }
  &:hover {
    ${props => {
      if (props.magenta) return tw`text-magenta`
      if (props.purple) return tw`text-purple`
      if (props.blue) return tw`text-blue`
    }}
  }
`

const Projects = tw.div`
  grid grid-cols-2 mobile:grid-cols-1 gap-x-8 sm:gap-x-0 gap-y-14
`

const CoverLink = styled(props => <Link {...props} />)`
  &:hover {
    + h3 a {
      ${tw`text-purple`}
      &:before {
        visibility: visible;
        width: 100%;
      }
    }
  }
`

const PlaceholderDiv = styled("div")`
  ${props => {
    if (props.purple) return tw`bg-purple`
    if (props.blue) return tw`bg-blue`
  }}
  display: flex;
  align-items: center;
  justify-content: center;
  height: 350px;
  border-radius: 25px;
  margin-bottom: 15px;
  color: white;
  text-align: center;
`

const PlaceholderText = styled("h3")`
  font-size: 36px;
`

const Placeholder = props => (
  <PlaceholderDiv purple={props.purple} blue={props.blue}>
    <PlaceholderText>Coming Soon</PlaceholderText>
  </PlaceholderDiv>
)

const Project = props => {
  const project = props.project
  const isPurple = project.frontmatter.type === "Project"
  const isBlue = project.frontmatter.type === "Case Study"

  return (
    <div>
      <CoverLink to={project.fields.slug}>
        {project.frontmatter.featuredImg ? 
          <GatsbyImage
            image={getImage(project.frontmatter.featuredImage)}
            alt={project.frontmatter.featuredImageAlt}
            objectFit="cover"
            objectPosition="center"
            backgroundColor={isPurple ? "#7d71f2" : "#0148e8"}
            style={{
              height: "350px",
              borderRadius: "25px",
              marginBottom: "15px",
            }}
          /> : <Placeholder purple={isPurple} blue={isBlue} />
        }
      </CoverLink>
      <h3>
        <StyledLink to={project.fields.slug} purple={isPurple} blue={isBlue}>
          {project.frontmatter.title}
        </StyledLink>
      </h3>
      <p>{props.project.excerpt}</p>
    </div>
  )
}

const WorkPage = ({ data }) => {
  const all = data.all.edges
  const [edges, setEdges] = useState(all)
  const projects = all.filter(edge => edge.node.frontmatter.type === "Project")
  const caseStudies = all.filter(
    edge => edge.node.frontmatter.type === "Case Study"
  )

  return (
    <PageContainer>
      <Seo title="Work" />
      <StyledHeaderDiv>
        <Heading>Our Work</Heading>
        <Filters>
          <Filter magenta="true" onClick={() => setEdges(all)}>
            All
          </Filter>
          <Filter purple="true" onClick={() => setEdges(projects)}>
            Projects
          </Filter>
          <Filter blue="true" onClick={() => setEdges(caseStudies)}>
            Case Studies
          </Filter>
        </Filters>
      </StyledHeaderDiv>
      <Projects>
        {edges.map(({ node }) => (
          <Project project={node} />
        ))}
      </Projects>
    </PageContainer>
  )
}

export default WorkPage

export const query = graphql`
  query {
    all: allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { fileAbsolutePath: { regex: "/(markdown-pages/projects)/" } }
    ) {
      edges {
        node {
          frontmatter {
            title
            type
            featuredImage {
              childImageSharp {
                gatsbyImageData(height: 500)
              }
            }
          }
          fields {
            slug
          }
          excerpt
        }
      }
    }
  }
`
