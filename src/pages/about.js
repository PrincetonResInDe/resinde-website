import React from "react"
import Seo from "../components/seo"
import tw, { styled, theme } from "twin.macro"
import { useStaticQuery, graphql } from "gatsby"
import ReactTooltip from "react-tooltip"
import { StaticImage } from "gatsby-plugin-image"

import { Padding } from "../components/padding"
import Blob1 from "../images/blobs/blob1.svg"
import Blob2 from "../images/blobs/blob2.svg"
import StrategyIcon from "../images/icons/strategy-icon.svg"
import ResearchIcon from "../images/icons/research-icon.svg"
import DesignIcon from "../images/icons/design-icon.svg"

const Blobs = styled.div`
  ${tw`absolute w-full left-0`}
  z-index: -1;
  overflow-x: clip;
`

const PageContainer = styled(Padding)`
  ${tw`flex flex-col mt-36 mobile:mt-6`}
`

const StyledHeaderDiv = styled.div`
  ${tw`mt-16 space-y-8`}
`

const Heading = tw.h1`
  leading-none
`

const CapHeading = styled.h2`
  ${tw`uppercase mb-3`}
  font-family: "Muli", sans-serif;
  font-size: 21px;
`

const Headline = styled.h3`
  ${tw`mb-10 max-w-prose`}
  font-size: 54px;
  line-height: 1.2;
`

const Description = tw.p`
  max-w-prose
`

const Section = styled.div`
  ${tw`mt-96`}
`

const Services = styled.div`
  ${tw`flex space-x-28 mobile:flex-col mobile:space-x-0 mobile:space-y-10`}
`

const ServiceName = styled.h4`
  ${tw`leading-none mt-5 mb-2`}
`

const Logos = styled.div`
  ${tw`flex space-x-14 mobile:flex-col mobile:space-x-0 mobile:space-y-10`}
`

const AboutPage = () => {
  const data = useStaticQuery(graphql`
    query {
      cstLogo: file(relativePath: { eq: "logos/cst-logo.svg" }) {
        publicURL
      }
    }
  `)

  return (
    <PageContainer>
      <Seo title="About" />
      <Blobs>
        <Blob2
          style={{
            transform: "rotate(-45deg) scaleY(-1) scale(0.75)",
            margin: "-3rem 0 10rem 55vw",
          }}
        />
        <Blob1 
          fill= {theme("colors.yellow.DEFAULT")}
          style={{ transform: "rotate(-45deg)  scale(0.75)", marginLeft: "-33vw" }}
        />
      </Blobs>
      <StyledHeaderDiv>
        <Heading>About Us</Heading>
        <Description>
          ResInDe is Princeton University's premier student-run design
          consultancy. Short for Research, Innovation, and Design, ResInDe is
          Princeton University's premier student-run design consultancy. We are
          a group of designers, developers, and innovators who convene to design
          great experiences for Princeton's student and local community. We
          understand the value of problem-solving and innovating with intention,
          and our mission is to provide impactful solutions through user
          research and digital implementation.
        </Description>
      </StyledHeaderDiv>
      <Section>
        <CapHeading>Services</CapHeading>
        <Headline style={{ width: "759px" }}>
          From user research to digital implementation, we’re here to help.
        </Headline>
        <Services>
          <div>
            <StrategyIcon />
            <ServiceName>Product Strategy</ServiceName>
            <p>
              We offer consultations to demonstrate the value design could bring
              to your product.
            </p>
          </div>
          <div>
            <ResearchIcon />
            <ServiceName>User Research</ServiceName>
            <p>
              We begin our creative process by developing a strong understanding
              of the user base.
            </p>
          </div>
          <div>
            <DesignIcon />
            <ServiceName>UI/UX Design</ServiceName>
            <p>
              After synthesizing our research, we design and prototype powerful
              solutions before implementing.
            </p>
          </div>
        </Services>
      </Section>
      <Section>
        <CapHeading>Partners</CapHeading>
        <Headline>The people who believe in us.</Headline>
        <Logos>
          <a
            href="https://www.tigerapps.org/"
            target="_blank"
            rel="noreferrer"
            data-tip
            data-for="tiger-apps"
          >
            <StaticImage
              src="../images/logos/usg-logo.png"
              alt="Undergraduate Student Government"
              width={130}
            />
          </a>
          <ReactTooltip id="tiger-apps" place="top">
            ResInDe is working with USG Tiger Apps on a redesign of TigerBook
            and Princeton Courses.
          </ReactTooltip>

          <a
            href="https://www.princetoncoscouncil.com/"
            target="_blank"
            rel="noreferrer"
            data-tip
            data-for="cos-council"
          >
            <StaticImage
              src="../images/logos/cos-council-logo.jpg"
              alt="COS Council"
              width={130}
              style={{ borderRadius: 999 }}
            />
          </a>
          <ReactTooltip id="cos-council" place="top">
            ResInDe has partnered with Princeton COS Council on a workshop
            series.
          </ReactTooltip>

          <a
            href="https://www.tigerlaunch.com/"
            target="_blank"
            rel="noreferrer"
            data-tip
            data-for="tiger-launch"
          >
            <StaticImage
              src="../images/logos/tiger-launch-logo.png"
              alt="Tiger Launch"
              width={130}
            />
          </a>
          <ReactTooltip id="tiger-launch" place="top">
            Tiger Launch
          </ReactTooltip>

          <a
            href="https://cst.princeton.edu/"
            target="_blank"
            rel="noreferrer"
            data-tip
            data-for="cst"
          >
            <img
              src={data.cstLogo.publicURL}
              alt="Council on Science and Technology"
            />
          </a>
          <ReactTooltip id="cst" place="top">
            Council on Science and Technology
          </ReactTooltip>
        </Logos>
      </Section>
    </PageContainer>
  )
}

export default AboutPage
