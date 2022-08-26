import React from "react"
import tw, { styled, theme } from "twin.macro"
import { graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { Fade } from "react-awesome-reveal";

import Seo from "../components/seo"
import { H1, Subtitle, Overline2 } from "../components/typography"
import { PageContainer, PageHeader } from "../components/containers"

const Members = tw.div`
  grid grid-cols-3 sm:grid-cols-1 lg:grid-cols-2 gap-x-8 sm:gap-x-0
  gap-y-14 sm:gap-y-8 self-start
`

const PhotoMemberDetails = tw.div`
  text-center sm:text-left
`

const Name = styled.h2`
  ${tw`leading-tight mt-5 mb-2`}
  font-size: 1.75rem;

  @media (max-width: 1023px) {
    font-size: 1.5rem;
  }

  @media (max-width: 767px) {
    font-size: 21px;
  }
`

const Role = tw.p`
  mt-1
`

const PhotoMember = props => {
  const colors = [
    theme("colors.pink.DEFAULT"),
    theme("colors.yellow.DEFAULT"),
    theme("colors.blue.DEFAULT"),
    theme("colors.purple.DEFAULT"),
  ]

  return (
    <div>
      <GatsbyImage
        image={getImage(props.member.imgPath)}
        alt={props.member.imgAlt}
        objectFit="cover"
        objectPosition="center"
        backgroundColor={colors[props.index % 4]}
        style={{
          height: "425px",
          borderRadius: "25px"
        }}
      />
      <PhotoMemberDetails>
        <Name style={{ marginBottom: 0 }}>
          {props.member.name}
        </Name>
        <Role>{props.member.role}</Role>
      </PhotoMemberDetails>
    </div>
  )
}

const NoPhotoMembersContainer = tw.div`
  text-center sm:text-left
`

const NoPhotoMember = tw.div`
  mb-4
`
const NoPhotoMembers = props => {
  return (
    <NoPhotoMembersContainer>
      <Overline2>Not Pictured</Overline2>
      {props.noPhotoMembers.map(member => {
        return (
          <NoPhotoMember>
            <Subtitle style={{ marginBottom: 0 }}>
              {member.name}
            </Subtitle>
            <Role>{member.role}</Role>
          </NoPhotoMember>
        )
      })}
    </NoPhotoMembersContainer>
  )
}

const TeamPage = ({ data }) => {
  let noPhotoMembers = []
  let index = -1;

  return (
    <PageContainer>
      <Seo title="Our Team" />
      <PageHeader>
        <Fade direction="up" duration={750} triggerOnce>
          <H1>Meet The Team</H1>
        </Fade>
      </PageHeader>
      <Fade delay={800} duration={750} triggerOnce>
      <Members>
          {data.allMembersJson.edges.map(({ node }) => {
            if (node.imgPath) {
              index++
              return <PhotoMember member={node} index={index} />
            } else {
              noPhotoMembers.push(node)
              return null
            }
          })}
          <NoPhotoMembers noPhotoMembers={noPhotoMembers} />
      </Members>
      </Fade>
    </PageContainer>
  )
}

export default TeamPage

export const query = graphql`
  query {
    allMembersJson {
      edges {
        node {
          name
          role
          imgPath {
            childImageSharp {
              gatsbyImageData(width: 337)
            }
          }
          imgAlt
        }
      }
    }
  }
`
