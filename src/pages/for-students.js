import React from "react"
import tw, { styled, theme } from "twin.macro"
import { StaticImage } from "gatsby-plugin-image"
import { Fade, Slide } from "react-awesome-reveal"

import Seo from "../components/seo"
import { H1, Quote, Overline1, Body } from "../components/typography"
import { PageContainer, PageHeader, Section2, Images, Blobs } from "../components/containers"
import { ExternalLinkButton } from "../components/buttons"
import { Carousel, CarouselItem } from "../components/carousel"
import { NumberedList } from "../components/lists"
import Blob1 from "../images/blobs/blob1.svg"

const DescriptionContainer = tw.div`
  max-w-prose mb-10
`

const Description = styled(Body)`
  ${tw`mb-10`}
`

const ForStudentsPage = () => {
  return (
    <PageContainer>
      <Seo title="For Students" />
      <Blobs>
        <Slide direction="right" duration={750} triggerOnce>
          <Blob1
            fill={theme("colors.yellow.DEFAULT")}
            style={{
              transform: "rotate(50deg) scaleY(-1) scale(0.95)",
              margin: "-3rem 0 28rem 58vw",
            }}
          />
        </Slide>
        <Slide direction="left" duration={750} triggerOnce>
          <Blob1
            fill={theme("colors.blue.DEFAULT")}
            style={{
              transform: "rotate(-125deg) scaleY(-1) scale(0.85)",
              margin: "0 0 28rem -33vw",
            }}
          />
        </Slide>
        <Slide direction="right" duration={750} triggerOnce>
          <Blob1
            fill={theme("colors.purple.DEFAULT")}
            style={{
              transform: "rotate(75deg) scaleY(-1)",
              margin: "-3rem 0 10rem 70vw",
            }}
          />
        </Slide>
      </Blobs>
      <PageHeader>
        <Fade cascade direction="up" duration={750} triggerOnce>
          <H1>For Students</H1>
          <Body>Join our team of designers, engineers, and innovators!</Body>
        </Fade>
      </PageHeader>
      <Section2>
        <Fade cascade direction="up" duration={750} triggerOnce>
          <Overline1>Human Centered Design</Overline1>
          <Quote style={{ maxWidth: "759px" }}>
            Problem solving that revolves around humans.
          </Quote>
          <Body>
            Human-Centered Design (HCD) is an emerging problem-solving approach
            and an increasingly valued skill centered around, well, humans.
            While Princeton doesn’t offer a clear academic path for design
            today, it houses designers of all backgrounds and experiences.
            ResInDe provides the space for us to grow and create together.
          </Body>
        </Fade>
      </Section2>
      <Section2 id="join">
        <Fade cascade direction="up" duration={750} triggerOnce>
          <Overline1>Join Us</Overline1>
          <Quote style={{ maxWidth: "759px" }}>
            Join a community of designers, entrepreneurs, & innovative thinkers.
          </Quote>
          <Images>
            <StaticImage
              src="../images/group-fall21.jpg"
              alt="Group of students posing for picture inside of a classroom"
              objectFit="cover"
              objectPosition="50% 75%"
              height={500}
              style={{
                borderRadius: "25px",
              }}
            />
          </Images>
          <DescriptionContainer>
            <p>Princeton ResInDe exists to provide you value! Join us to: </p>
            <NumberedList>
              <li>
                Immerse yourself in the world of practical and design thinking.
              </li>
              <li>
                Work on meaningful projects that impact our local communities.
              </li>
              <li>Experience professional growth in your craft.</li>
            </NumberedList>
            <p>
              Not only will you be working on projects, you'll join a fun-loving
              community of designers, entrepreneurs, and innovative thinkers who
              are motivated to better our communities! Interested? Join us!
            </p>
          </DescriptionContainer>
          <ExternalLinkButton
            href="https://docs.google.com/forms/d/e/1FAIpQLSefvNUo-nYvVbaGatCi5z8URA9WmKqLhjfhBizIxmAj8YtAFQ/viewform"
            target="_blank"
            rel="noopener noreferrer"
            blue="true"
          >
            Apply Today
          </ExternalLinkButton>
        </Fade>
      </Section2>
      <Section2 id="events">
        <Fade cascade direction="up" duration={750} triggerOnce>
          <Overline1>Events & Workshops</Overline1>
          <Quote style={{ maxWidth: "773px" }}>
            Cultivating a conversation around design & innovative thinking.
          </Quote>
          <Carousel>
            <CarouselItem
              name="Visual Design"
              to="https://drive.google.com/drive/u/2/folders/1eDNLrpn7Jz1cWsiQolwJ0Yk22FM-jTey"
              pink="true"
            />
            <CarouselItem
              name="Design Thinking"
              to="https://drive.google.com/drive/u/2/folders/19h6dT3UTpupxzF5vaFHIO5VjZvpPHqSL"
              purple="true"
            />
            <CarouselItem
              name="Figma"
              to="https://drive.google.com/drive/u/2/folders/1iA-D3wU1KtkYDbZOXE2BjctJFlPUH3u8"
              blue="true"
            />
            <CarouselItem
              name="React + Backend"
              to="https://drive.google.com/drive/u/2/folders/10dBm7SI-da4mufos9JzC8FmbxNOToLUl"
              yellow="true"
            />
          </Carousel>
          <Description>
            ResInDe is committed to cultivating conversations around innovative
            thinking at Princeton, so we offer opportunities for all students to
            get exposure into the design world. Check out our past events above,
            and subscribe to our newsletter to receive updates about our future
            events!
          </Description>
          <ExternalLinkButton
            href="https://google.us2.list-manage.com/subscribe?u=f742a956f5b0d1eca7c1703e3&id=59b6bf43e4"
            target="_blank"
            rel="noopener noreferrer"
            purple="true"
          >
            Subscribe
          </ExternalLinkButton>
        </Fade>
      </Section2>
    </PageContainer>
  )
}

export default ForStudentsPage
