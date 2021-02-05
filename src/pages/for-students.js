import React from "react"
import SEO from "../components/seo"

import { useStaticQuery, graphql } from "gatsby"
import tw, { styled } from "twin.macro"
import Img from "gatsby-image"
import { Link } from "gatsby"

const StyledH1 = styled.h1`
  ${tw`text-white text-7xl absolute text-right pr-48`}
  top: 260px;
`

const StyledH12 = styled.h1`
  ${tw`text-white text-7xl absolute px-48`}
  top: 260px;
`

const StyledH1Workshops = styled.h1`
  ${tw`text-white text-7xl absolute px-48 text-right`}
  top: 220px;
`

const StyledHeader = styled.h1`
  ${tw`mobile:pl-8 pl-48 mt-48`}
`

const StyledPLeft = styled.p`
  ${tw`mobile:pl-8 pl-48`}
`
const StyledPRight = styled.p`
  ${tw`mobile:pr-8 pr-48`}
`

const StyledDiv = styled.div`
  ${tw`flex`}
`

const Sections = styled.div`
  ${tw`space-y-32`}
`

const SectionText = styled.div`
  ${tw`self-center flex-grow`}
`

const StyledList = tw.ul`
  list-disc list-inside
`

const NumberedList = tw.ul`
  list-decimal list-inside
`

const ButtonDiv = styled.div`
  ${tw`text-center mt-8`}
`

const Events = tw.div`
  flex flex-col space-y-8 pr-16 pt-8
`

const EventCard = styled.div`
  ${tw`border-2 border-purple rounded p-8 hover:animate-pulse flex`}
`

const StyledButton = styled(props => <Link {...props} />)`
  ${tw`border border-blue rounded-full text-blue py-2 px-8 uppercase hover:bg-blue hover:text-white transition`}
`

const StyledLink = styled(props => <Link {...props} />)`
  ${tw`mr-8`}
  position: relative;
  transition: color 0.3s ease-in-out;
  &:before {
    ${tw`bg-blue`}
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
  ${tw`text-blue`}
`

const ForStudentsPage = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "yellow-blob-2.png" }) {
        childImageSharp {
          fixed(width: 1000) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      blueBlob: file(relativePath: { eq: "blue-blob-2.png" }) {
        childImageSharp {
          fixed(width: 1000) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      purpleBlob: file(relativePath: { eq: "purple-blob-2.png" }) {
        childImageSharp {
          fixed(width: 1000) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

  if (!data?.placeholderImage?.childImageSharp?.fixed) {
    return <div>Picture not found</div>
  }

  return (
    <div>
      <SEO title="For Students" />
      <StyledHeader>For Students</StyledHeader>
      <Sections>
        <StyledDiv>
          <SectionText>
            <StyledPLeft>
              Human-Centered Design (HCD) is an emerging practice
              and is becoming an increasingly valued and sought-after skill in
              all industries. In short, it is a framework for problem solving that revolves
              around, well, humans. While Princeton doesn’t offer a
              clear academic path for design, it houses designers from far and
              wide, and ResInDe provides the space for them to work together.
            </StyledPLeft>
          </SectionText>
          <div style={{ position: "relative", width: "800px" }}>
            <Img fixed={data.placeholderImage.childImageSharp.fixed} />
            <StyledH1>Human-Centered Design</StyledH1>
          </div>
        </StyledDiv>
        <StyledDiv>
          <div style={{ position: "relative" }}>
            <Img fixed={data.blueBlob.childImageSharp.fixed} />
            <StyledH12>Join Us</StyledH12>
          </div>
          <SectionText>
            <StyledPRight>
              Princeton ResInDe is founded to bring value to you in several
              ways:
              <NumberedList>
                <li>
                  To immerse yourself in the world of practical and design
                  thinking.
                </li>
                <li>
                  To work on meaningful projects that generate a lasting impact
                  on local communities.
                </li>
                <li>
                  To amp up your resume and portfolio.
                </li>
                <li>
                  To join a community of designers, entrepreneurs, and innovative thinkers.
                </li>
              </NumberedList>
              <br />
              In addition to working on projects, you’ll join a community of designers,
              entrepreneurs, and innovative thinkers that:
              <StyledList>
                <li>Gets excited about innovation</li>
                <li>Constantly brainstorms new ways to better our communities</li>
                <li>Attends fun social events!</li>
              </StyledList>
              <br />
              If you're interested, we'd love to meet you! Come join us at our Spring 2021 Open House.
              <ButtonDiv>
                <StyledButton to="https://forms.gle/6YrcssGhsisKTE9m7">
                  apply today
                </StyledButton>
              </ButtonDiv>
            </StyledPRight>
          </SectionText>
        </StyledDiv>
        <StyledDiv>
          <SectionText>
            <StyledPLeft>
              ResInDe's long-term goal is to cultivate a conversation around design and innovative
              thinking at Princeton, so we offer opportunities for all students to gain exposure into the design world.
              Check out our past events below, and subscribe to our newsletter to receive updates about our future
              events!
              <br />
              <div>
                <h2>Past Workshops</h2>
                <StyledList>
                  <li>
                    <StyledLink to="https://drive.google.com/drive/u/2/folders/1eDNLrpn7Jz1cWsiQolwJ0Yk22FM-jTey">
                      Visual Design
                    </StyledLink>
                  </li>
                  <li>
                    <StyledLink to="https://drive.google.com/drive/u/2/folders/19h6dT3UTpupxzF5vaFHIO5VjZvpPHqSL">
                      Design Thinking
                    </StyledLink>
                  </li>
                  <li>
                    <StyledLink to="https://drive.google.com/drive/u/2/folders/1iA-D3wU1KtkYDbZOXE2BjctJFlPUH3u8">
                      Figma
                    </StyledLink>
                  </li>
                  <li>
                    <StyledLink to="https://drive.google.com/drive/u/2/folders/10dBm7SI-da4mufos9JzC8FmbxNOToLUl">
                      React + Backend
                    </StyledLink>
                  </li>
                </StyledList>
              </div>
              <a
            href="https://google.us2.list-manage.com/subscribe?u=f742a956f5b0d1eca7c1703e3&id=59b6bf43e4"
            target="_blank"
            rel="noopener noreferrer"
          >
            <StyledButton>subscribe to newsletter</StyledButton>
          </a>
            </StyledPLeft>
          </SectionText>
          <div style={{ position: "relative" }}>
            <Img fixed={data.purpleBlob.childImageSharp.fixed} />
            <StyledH1Workshops>ResInDe Events</StyledH1Workshops>
          </div>
        </StyledDiv>
      </Sections>
    </div>
  )
}

export default ForStudentsPage
