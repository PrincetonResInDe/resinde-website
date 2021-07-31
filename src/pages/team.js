import React from "react"
import tw, { styled } from "twin.macro"
import { graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

import Seo from "../components/seo"
import StyledLink from "../components/styled-link"
import { Padding } from "../components/padding"

const StyledHeaderDiv = tw.div`
  mt-16 space-y-4
`

const Heading = tw.h1`
  leading-none
`

const PageContainer = styled(Padding)`
  ${tw`flex flex-col space-y-14 mt-36 mobile:mt-6`}
`

const Members = tw.div`
  grid grid-cols-3 sm:grid-cols-1 lg:grid-cols-2 gap-x-8 sm:gap-x-0
  gap-y-14 self-center
`

const PhotoMember = props => {
  return (
    <div>
      <GatsbyImage
        image={getImage(props.member.imgPath)}
        alt={props.member.imgAlt}
        objectFit="cover"
        objectPosition="center"
        backgroundColor="#0148e8"
        style={{
          height: "425px",
          borderRadius: "25px",
          marginBottom: "10px",
        }}
      />
      <h3>
        <StyledLink blue="true">{props.member.name}</StyledLink>
      </h3>
      <p>{props.member.role}</p>
    </div>
  )
}

const NoPhotoMember = tw.div`
  mb-4
`
const NoPhotoMembers = props => {
  return (
    <div>
      {props.noPhotoMembers.map(member => {
        return (
          <NoPhotoMember>
            <h3>
              <StyledLink blue="true">{member.name}</StyledLink>
            </h3>
            <p>{member.role}</p>
          </NoPhotoMember>
        )
      })}
    </div>
  )
}

const TeamPage = ({ data }) => {
  let noPhotoMembers = []

  return (
    <PageContainer>
      <Seo title="Our Team" />
      <StyledHeaderDiv>
        <Heading>Meet The Team</Heading>
      </StyledHeaderDiv>
      <Members>
        {data.allMembersJson.edges.map(({ node }) => {
          if (node.imgPath) {
            return <PhotoMember member={node} />
          } else {
            noPhotoMembers.push(node)
            return null
          }
        })}
        <NoPhotoMembers noPhotoMembers={noPhotoMembers} />
      </Members>
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
