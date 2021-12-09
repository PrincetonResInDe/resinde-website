import React, { useState } from "react"
import tw, { styled } from "twin.macro"
import { graphql, Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { Fade } from "react-awesome-reveal";

import Seo from "../../components/seo"
import { InternalLink } from "../../components/links"
import { H1, Subtitle } from "../../components/typography"
import { PageContainer, PageHeader } from "../../components/containers"

const Filters = tw.div`
  flex flex-row space-x-8 font-bold mb-6 hidden
`

const Filter = styled.p`
  position: relative;
  transition: color 0.3s ease-in-out;
  &:before {
    ${props => {
      if (props.pink) return tw`bg-pink`
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
      if (props.pink) return tw`text-pink`
      if (props.purple) return tw`text-purple`
      if (props.blue) return tw`text-blue`
    }}
  }
`

const Projects = tw.div`
  grid grid-cols-2 mobile:grid-cols-1 gap-x-8 sm:gap-x-0 gap-y-14
`

const CoverLink = styled(props => <Link {...props} />)`
  &:hover + h2 a {
    ${props => {
      if (props.purple) return tw`text-purple`
      if (props.blue) return tw`text-blue`
    }}
    &:before {
      visibility: visible;
      width: 100%;
    }
  }
`

const PlaceholderDiv = styled("div")`
  ${props => {
    if (props.blue) return tw`bg-blue`
    else return tw`bg-purple`
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

const Title = styled.h2`
  ${tw`leading-tight`}
  font-size: 2.25rem;

  @media (max-width: 1023px) {
    font-size: 2rem;
  }

  @media (max-width: 767px) {
    font-size: 27px;
  }
`

const Tagline = tw.p`
  mt-1
`

const Project = ({ project }) => {
  const isPurple = project.type === "Project"
  const isBlue = project.type === "Case Study"

  return (
    <div>
      <CoverLink
        to={project.slug}
        purple={isPurple}
        blue={isBlue}
        title={project.title}
      >
        {project.featuredImgPath ? (
          <GatsbyImage
            image={getImage(project.featuredImgPath)}
            alt={project.featuredImgAlt}
            objectFit="cover"
            objectPosition="center"
            backgroundColor={isPurple ? "#7d71f2" : "#0148e8"}
            style={{
              height: "350px",
              borderRadius: "25px",
              marginBottom: "15px",
            }}
          />
        ) : (
          <PlaceholderDiv purple={isPurple} blue={isBlue}>
            <Subtitle>Coming Soon</Subtitle>
          </PlaceholderDiv>
        )}
      </CoverLink>
      <Title>
        <InternalLink to={project.slug} purple={isPurple} blue={isBlue}>
          {project.title}
        </InternalLink>
      </Title>
      <Tagline>{project.tagline}</Tagline>
    </div>
  )
}

const WorkPage = ({ data }) => {
  const all = data.allProjectsJson.edges
  const [edges, setEdges] = useState(all)
  const projects = all.filter(edge => edge.node.type === "Project")
  const caseStudies = all.filter(edge => edge.node.type === "Case Study")

  return (
    <PageContainer>
      <Seo title="Work" />
      <PageHeader>
        <Fade direction="up" duration={750} triggerOnce>
          <H1>Our Work</H1>
          <Filters>
            <Filter pink="true" onClick={() => setEdges(all)}>
              All
            </Filter>
            <Filter purple="true" onClick={() => setEdges(projects)}>
              Projects
            </Filter>
            <Filter blue="true" onClick={() => setEdges(caseStudies)}>
              Case Studies
            </Filter>
          </Filters>
        </Fade>
      </PageHeader>
        <Projects>
          <Fade delay={800} duration={750} triggerOnce>
          {edges.map(({ node }) => (
            <Project project={node} />
          ))}
          </Fade>
        </Projects>
    </PageContainer>
  )
}

export default WorkPage

export const query = graphql`
  query {
    allProjectsJson {
      edges {
        node {
          title
          type
          featuredImgPath {
            childImageSharp {
              gatsbyImageData(height: 500)
            }
          }
          featuredImgAlt
          tagline
          slug
        }
      }
    }
  }
`
