import React from "react"
import Seo from "../components/seo"
import tw, { styled, theme } from "twin.macro"
import { useStaticQuery, graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import ReactTooltip from "react-tooltip"
import { Fade, Slide } from "react-awesome-reveal";

import { H1, Quote, Subtitle, Overline1, Body } from "../components/typography"
import { PageContainer, PageHeader, Section1, Blobs } from "../components/containers"
import Blob1 from "../images/blobs/blob1.svg"
import Blob2 from "../images/blobs/blob2.svg"
import StrategyIcon from "../images/icons/strategy-icon.svg"
import ResearchIcon from "../images/icons/research-icon.svg"
import DesignIcon from "../images/icons/design-icon.svg"

const Services = styled.div`
  ${tw`flex gap-24 xl:gap-12 lg:gap-8 sm:flex-col mt-8`}
  max-width: 1100px;
`

const Logos = tw.div`
  flex flex-wrap gap-x-10 gap-y-6 mt-8
`

const AboutPage = () => {
  const data = useStaticQuery(graphql`
    query {
      cstLogo: file(relativePath: { eq: "logos/cst-logo.svg" }) {
        publicURL
      }
    }
  `)
  const logosHeight = 105;

  return (
    <PageContainer>
      <Seo title="About" />
      <Blobs>
        <Slide direction="right" duration={750} triggerOnce>
          <Blob2
            style={{
              transform: "rotate(-45deg) scaleY(-1) scale(0.75)",
              margin: "-3rem 0 10rem 55vw",
            }}
          />
        </Slide>
        <Slide direction="left" duration={750} triggerOnce>
          <Blob1
            fill={theme("colors.yellow.DEFAULT")}
            style={{
              transform: "rotate(-45deg) scale(0.75)",
              marginLeft: "-33vw",
            }}
          />
        </Slide>
      </Blobs>
      <PageHeader>
        <Fade cascade direction="up" duration={750} triggerOnce>
          <H1>About Us</H1>
          <Body>
            ResInDe is Princeton University's premier student-run design
            consultancy. Short for Research, Innovation, and Design, ResInDe is
            Princeton University's premier student-run design consultancy. We
            are a group of designers, developers, and innovators who convene to
            design great experiences for Princeton's student and local
            community. We understand the value of problem-solving and innovating
            with intention, and our mission is to provide impactful solutions
            through user research and digital implementation.
          </Body>
        </Fade>
      </PageHeader>
      <Section1 id="services">
        <Fade cascade direction="up" duration={750} triggerOnce>
          <Overline1>Services</Overline1>
          <Quote style={{ maxWidth: "759px" }}>
            From user research to digital implementation, we’re here to help.
          </Quote>
        </Fade>
        <Services>
          <Fade cascade direction="up" delay={950} duration={750} triggerOnce>
            <div>
              <StrategyIcon />
              <Subtitle>Product Strategy</Subtitle>
              <p>
                We offer consultations to demonstrate the value design could
                bring to your product.
              </p>
            </div>
            <div>
              <ResearchIcon />
              <Subtitle>User Research</Subtitle>
              <p>
                We begin our creative process by developing a strong
                understanding of the user base.
              </p>
            </div>
            <div>
              <DesignIcon />
              <Subtitle>UI/UX Design</Subtitle>
              <p>
                After synthesizing our research, we design and prototype
                powerful solutions before implementing.
              </p>
            </div>
          </Fade>
        </Services>
      </Section1>
      <Section1 id="partners">
        <Fade cascade direction="up" duration={750} triggerOnce>
          <Overline1>Partners</Overline1>
          <Quote>The people who believe in us.</Quote>
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
                height={logosHeight}
              />
            </a>
            <ReactTooltip id="tiger-apps" place="top">
              USG TigerApps
              {/* ResInDe is working with USG Tiger Apps on a redesign of TigerBook
            and Princeton Courses. */}
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
                height={logosHeight}
                style={{ borderRadius: 999 }}
              />
            </a>
            <ReactTooltip id="cos-council" place="top">
              COS Council
              {/* ResInDe has partnered with Princeton COS Council on a workshop
            series. */}
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
                alt="TigerLaunch"
                height={logosHeight}
              />
            </a>
            <ReactTooltip id="tiger-launch" place="top">
              TigerLaunch
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
                style={{ height: logosHeight }}
              />
            </a>
            <ReactTooltip id="cst" place="top">
              Council on Science and Technology
            </ReactTooltip>
          </Logos>
        </Fade>
      </Section1>
    </PageContainer>
  )
}

export default AboutPage
