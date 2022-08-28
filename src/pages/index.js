import React from "react"
import Seo from "../components/seo"
import tw, { styled, theme } from "twin.macro"
import { Link, graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { Fade, Slide } from "react-awesome-reveal"

import { H1, Quote, Overline1, Body } from "../components/typography"
import {
  PageContainer as PageWrapper,
  Section2,
  Images,
  Blobs,
} from "../components/containers"
import { InternalLinkButton } from "../components/buttons"
import { ExternalLink, InternalLink } from "../components/links"
import { Carousel, CarouselItem } from "../components/carousel"
import { BulletedList } from "../components/lists"
import Blob2 from "../images/blobs/blob2.svg"
import Blob3 from "../images/blobs/blob3.svg"

const PageContainer = styled(PageWrapper)`
  ${tw`mt-0 lg:mt-48 mobile:mt-12`}
`

const HeroSection = styled.div`
  ${tw`flex flex-col h-screen lg:h-auto max-w-full mobile:block`}

  p {
    ${tw`mt-0 mb-6`}
  }
`

const HeroContent = styled.div`
  ${tw`flex flex-col flex-grow justify-center mobile:mt-12 lg:mb-12`}
`

const HeroAction = styled(InternalLink)`
  ${tw`text-pink font-bold`}
  font-size: 1.125rem;
`

const HeroLink = styled(ExternalLink)`
  ${tw`text-purple font-bold`}
  font-size: 1.125rem;
`

const HeroArrow = styled(props => <Link {...props} />)`
  ${tw`self-center justify-end pb-24 hover:text-purple animate-bounce
       transition mobile:hidden`}
`

const DescriptionContainer = tw.div`
  max-w-prose mb-10
`

const Description = styled(Body)`
  ${tw`mb-10`}
`

const IndexPage = ({ data }) => {
  return (
    <PageContainer>
      <Seo title="Home" />
      <Blobs>
        <Slide direction="right" duration={750} triggerOnce>
          <Blob2
            fill={theme("colors.blue.DEFAULT")}
            style={{
              transform: "rotate(-65deg) scaleY(-1) scale(0.75)",
              margin: "100vh 0 24rem 60vw",
            }}
          />
        </Slide>
        <Slide direction="left" duration={750} triggerOnce>
          <Blob2
            fill={theme("colors.yellow.DEFAULT")}
            style={{
              transform: "rotate(140deg) scaleY(-1) scale(0.75)",
              margin: "0 0 16rem -33vw",
            }}
          />
        </Slide>
        <Slide direction="right" duration={750} triggerOnce>
          <Blob3
            fill={theme("colors.purple.DEFAULT")}
            style={{
              transform: "scale(0.75)",
              margin: "0 0 0 48vw",
            }}
          />
        </Slide>
      </Blobs>
      <HeroSection>
        <HeroContent>
          <Fade cascade direction="up" duration={750} triggerOnce>
            <H1>We are ResInDe.</H1>
            <Body>
              We are a group of innovators dedicated to employing human-centered
              design to create impactful solutions.
            </Body>
            <HeroAction to="/work" pink="true">
              Check out our recent work →
            </HeroAction>
            <HeroLink href="https://docs.google.com/forms/d/e/1FAIpQLSfohZVM3jJ_RzY5isGpVzXTjtDYfpHSpeKu0JuwJfvyvxACZw/viewform?usp=sf_link" purple="true" target="_blank">
              Apply to join our team →
            </HeroLink>
          </Fade>
        </HeroContent>
        <HeroArrow to="#about-us">
          <Fade delay={850} direction="up" duration={750} triggerOnce>
            <svg width="64" height="64" viewBox="0 0 16 16">
              <title>Go to About Us</title>
              <path
                fill="currentColor"
                d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
              />
            </svg>
          </Fade>
        </HeroArrow>
      </HeroSection>
      <Section2
        style={{ marginTop: "4rem", paddingTop: "5.5rem" }}
        id="about-us"
      >
        <Fade cascade direction="up" duration={750} triggerOnce>
          <Overline1>About Us</Overline1>
          <Quote style={{ maxWidth: "759px" }}>
            Princeton University's premier student-run design consultancy.
          </Quote>
          <Images cols="2">
            <StaticImage
              src="../images/group-spr21.jpg"
              alt="Group of students posing for picture while wearing masks outside"
              objectFit="cover"
              objectPosition="center"
              width={600}
              style={{
                borderRadius: "25px",
              }}
            />
            <StaticImage
              src="../images/group-fall21.jpg"
              alt="Group of students posing for picture inside of a classroom"
              objectFit="cover"
              objectPosition="center"
              width={600}
              style={{
                borderRadius: "25px",
              }}
            />
          </Images>
          <DescriptionContainer>
            <p>
              Short for Research, Innovation, and Design, ResInDe is Princeton
              University's premier student-run design consultancy. We are a
              group of designers, developers, and innovators who convene to
              design great experiences for Princeton's student and local
              community. We understand the value of problem-solving and
              innovating with intention, and our mission is to provide impactful
              solutions through user research and digital implementation.
            </p>
            <p>We currently specialize in: </p>
            <BulletedList>
              <li>User Research</li>
              <li>Product Strategy</li>
              <li>UI/UX Design</li>
              <li>Web Development</li>
            </BulletedList>
          </DescriptionContainer>
          <InternalLinkButton to="/about" blue="true">
            About Us
          </InternalLinkButton>
        </Fade>
      </Section2>
      <Section2>
        <Fade cascade direction="up" duration={750} triggerOnce>
          <Overline1>Current Projects</Overline1>
          <Quote style={{ maxWidth: "759px" }}>
            Redesiging Princeton student applications.
          </Quote>
          <Carousel>
            <CarouselItem
              name="Tigerbook"
              to="/work/tigerbook"
              purple="true"
              img={data.tigerbookImg.publicURL}
              internal="true"
            />
            <CarouselItem
              name="Course Selection"
              to="/work/course-selection"
              pink="true"
              img={data.courseSelectionImg.publicURL}
              internal="true"
            />
          </Carousel>
          <Description>
            Recently, we partnered with Princeton TigerApps to redesign the
            course selection experience for Princeton students. We are also
            redesigning Tigerbook, Princeton's unified directory of
            undergraduates.
          </Description>
          <InternalLinkButton to="/work" yellow="true">
            More Of Our Work
          </InternalLinkButton>
        </Fade>
      </Section2>
      <Section2>
        <Fade cascade direction="up" duration={750} triggerOnce>
          <Overline1>Contact Us</Overline1>
          <Quote style={{ maxWidth: "450px" }}>
            We’d love to hear from you.
          </Quote>
          <Description>
            Want to partner with us? Curious about joining?
          </Description>
          <InternalLinkButton to="/contact" purple="true">
            Contact Us
          </InternalLinkButton>
        </Fade>
      </Section2>
    </PageContainer>
  )
}

export const query = graphql`
  query {
    courseSelectionImg: file(relativePath: { eq: "projects/course-selection/course-selection.png" }) {
      publicURL
    }
    tigerbookImg: file(relativePath: { eq: "projects/tigerbook/tigerbook.png" }) {
      publicURL
    }
  }
`

export default IndexPage
