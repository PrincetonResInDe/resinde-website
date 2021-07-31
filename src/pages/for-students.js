import React from "react"
import Seo from "../components/seo"

import { graphql } from "gatsby"
import tw, { styled } from "twin.macro"
import Img from "gatsby-image"
import { Link } from "gatsby"
import {
  PaddingLeft,
  SectionTextLeft,
  SectionTextRight,
} from "../components/padding"
import Button from "../components/button"

const StyledA = styled.a`
  ${tw`text-blue`}
`

const StyledH1 = styled.h1`
  ${tw`text-white text-7xl absolute text-right pr-48`}
  top: 260px;
`

const StyledH12 = styled.h1`
  ${tw`text-white text-7xl absolute px-48`}
  top: 360px;
`

const StyledH2 = styled.h2`
  ${tw`pt-8`}
`

const StyledH1Workshops = styled.h1`
  ${tw`text-white text-7xl absolute px-48 text-right`}
  top: 220px;
`

const StyledHeader = styled(PaddingLeft)`
  ${tw`mt-48`}
`

const StyledP = styled.p`
  ${tw`text-center`}
`

const StyledDiv = styled.div`
  ${tw`flex`}
`

const Sections = styled.div`
  ${tw`space-y-32`}
`

const StyledList = tw.ul`
  list-disc list-inside pl-8 text-lg
`

const NumberedList = tw.ul`
  list-decimal list-inside pl-8 text-lg
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

const ForStudentsPage = ({ data }) => {
  return (
    <div>
      <Seo title="For Students" />
      <StyledHeader>
        <h1>For Students</h1>
      </StyledHeader>
      <Sections>
        <StyledDiv>
          <SectionTextLeft>
            <StyledP>
              Human-Centered Design (HCD) is an emerging practice and is
              becoming an increasingly valued and sought-after skill in all
              industries. In short, it is a framework for problem solving that
              revolves around, well, humans. While Princeton doesn’t offer a
              clear academic path for design, it houses designers from far and
              wide, and ResInDe provides the space for them to work together.
            </StyledP>
          </SectionTextLeft>
          <div style={{ position: "relative", width: "800px" }}>
            <Img fixed={data.yellowBlob.childImageSharp.fixed} />
            <StyledH1>Human-Centered Design</StyledH1>
          </div>
        </StyledDiv>
        <StyledDiv>
          <div style={{ position: "relative" }}>
            <Img fixed={data.blueBlob.childImageSharp.fixed} />
            <StyledH12>Join Us</StyledH12>
          </div>
          <SectionTextRight>
            <StyledP>
              Princeton ResInDe is founded to bring value to you in several
              ways:
            </StyledP>
            <NumberedList>
              <li>
                To immerse yourself in the world of practical and design
                thinking.
              </li>
              <li>
                To work on meaningful projects that generate a lasting impact on
                local communities.
              </li>
              <li>To amp up your resume and portfolio.</li>
              <li>
                To join a community of designers, entrepreneurs, and innovative
                thinkers.
              </li>
            </NumberedList>
            <StyledP>
              In addition to working on projects, you’ll join a community of
              designers, entrepreneurs, and innovative thinkers that:
            </StyledP>
            <StyledList>
              <li>Gets excited about innovation</li>
              <li>Constantly brainstorms new ways to better our communities</li>
              <li>Attends fun social events!</li>
            </StyledList>
            <Button
              to="https://docs.google.com/forms/d/e/1FAIpQLSefvNUo-nYvVbaGatCi5z8URA9WmKqLhjfhBizIxmAj8YtAFQ/viewform"
              blue="true"
            >
              apply today
            </Button>
          </SectionTextRight>
        </StyledDiv>
        <StyledDiv>
          <SectionTextLeft>
            <StyledP>
              ResInDe is committed to an ongoing mission of cultivating a
              conversation around design and innovative thinking at Princeton,
              so we offer opportunities for all students to gain exposure into
              the design world. Check out our past events below, and{" "}
              <StyledA
                href="https://google.us2.list-manage.com/subscribe?u=f742a956f5b0d1eca7c1703e3&id=59b6bf43e4"
                target="_blank"
                rel="noopener noreferrer"
              >
                subscribe to our newsletter
              </StyledA>{" "}
              to receive updates about our future events!
            </StyledP>

            <div>
              <StyledH2>Past Workshops</StyledH2>
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
          </SectionTextLeft>
          <div style={{ position: "relative" }}>
            <Img fixed={data.purpleBlob.childImageSharp.fixed} />
            <StyledH1Workshops>ResInDe Events</StyledH1Workshops>
          </div>
        </StyledDiv>
      </Sections>
    </div>
  )
}

export const query = graphql`
  query {
    yellowBlob: file(relativePath: { eq: "yellow-blob-2.png" }) {
      childImageSharp {
        fixed(width: 1000) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    blueBlob: file(relativePath: { eq: "blue-blob-2.png" }) {
      childImageSharp {
        fixed(width: 750) {
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
`

export default ForStudentsPage
