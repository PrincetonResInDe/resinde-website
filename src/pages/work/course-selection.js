import React from "react"
import tw, { styled, theme } from "twin.macro"
import { StaticImage } from "gatsby-plugin-image"
import { Fade, Slide } from "react-awesome-reveal"

import Seo from "../../components/seo"
import { H1, Quote, Subtitle, Overline1, Body } from "../../components/typography"
import { PageContainer, PageHeader, Section2, Images, Blobs } from "../../components/containers"
import { List } from "../../components/lists"
import BottomNav from "../../components/bottom-nav"
import Blob1 from "../../images/blobs/blob1.svg"
import Blob2 from "../../images/blobs/blob2.svg"

const AtAGlance = tw.div`
  flex flex-wrap gap-x-24 lg:gap-x-16 gap-y-1
`

/* Visually hides a title, but still appears for screen readers */
const HiddenTitle = styled.h2`
  clip: rect(0 0 0 0);
  clip-path: inset(50%);
  height: 1px;
  overflow: hidden;
  position: absolute;
  white-space: nowrap;
  width: 1px;
`

const CourseSelectionPage = () => {
  return (
    <PageContainer>
      <Seo title="Course Selection" />
      <Blobs>
        <Slide direction="right" duration={750} triggerOnce>
          <Blob1
            fill={theme("colors.blue.DEFAULT")}
            style={{
              transform: "rotate(-85deg) scale(0.95)",
              margin: "-3rem 0 30rem 64vw",
            }}
          />
        </Slide>
        <Slide direction="left" duration={750} triggerOnce>
          <Blob2
            fill={theme("colors.pink.DEFAULT")}
            style={{
              transform: "rotate(-131deg)",
              margin: "0 0 30rem -37vw",
            }}
          />
        </Slide>
        <Slide direction="right" duration={750} triggerOnce>
          <Blob2
            fill={theme("colors.purple.DEFAULT")}
            style={{
              transform: "rotate(60deg)",
              margin: "0 0 42rem 68vw",
            }}
          />
        </Slide>
        <Slide direction="left" duration={750} triggerOnce>
          <Blob1
            fill={theme("colors.yellow.DEFAULT")}
            style={{
              transform: "rotate(-45deg) scale(1.2)",
              margin: "0 0 28rem -27vw",
            }}
          />
        </Slide>
        <Slide direction="right" duration={750} triggerOnce>
          <Blob1
            fill={theme("colors.blue.DEFAULT")}
            style={{
              transform: "rotate(158deg) scale(1.2)",
              margin: "0 0 0 76vw",
            }}
          />
        </Slide>
      </Blobs>
      <PageHeader>
        <Fade cascade direction="up" duration={750} triggerOnce>
          <H1>Course Selection</H1>
          <Body>
            The course selection process, which occurs bi-annually at Princeton
            is oftentimes a very stressful time for students. From making sure
            they are taking the right classes to fulfill requirements to finding
            interesting classes, many students rely on three different
            applications to decide their classes — TigerPath, Princeton Courses,
            and ReCal.
          </Body>
        </Fade>
      </PageHeader>
      <AtAGlance>
        <HiddenTitle>At A Glance</HiddenTitle>
        <Fade cascade direction="up" duration={750} delay={750} triggerOnce>
          <div>
            <Subtitle>Team</Subtitle>
            <List>
              <li>Joanna Kuo '22</li>
              <li>Begum Ortaoglu '22</li>
              <li>Ameya Vaidya '24</li>
              <li>Jacqueline Xu '22</li>
              <li>Howard Yen '23</li>
              <li>Cheyenne Zhang '22</li>
            </List>
            <Subtitle>Collaborators</Subtitle>
            <List>
              <li>TigerApps</li>
            </List>
          </div>
          <div>
            <Subtitle>Tools</Subtitle>
            <List>
              <li>Figma</li>
              <li>Miro</li>
              <li>React</li>
            </List>
            <Subtitle>Methods</Subtitle>
            <List>
              <li>User Interviews</li>
              <li>User Testing</li>
              <li>User Surveys</li>
              <li>Affinity Mapping</li>
              <li>User Journey Mapping</li>
              <li>Feasibility vs. Priority Graph</li>
              <li>User Personas</li>
              <li>Mindmapping</li>
            </List>
          </div>
          <div>
            <Subtitle>Timeline</Subtitle>
            <p>Ongoing</p>
          </div>
        </Fade>
      </AtAGlance>
      <Section2>
        <Fade cascade direction="up" duration={750} triggerOnce>
          <Overline1>Problem</Overline1>
          <Quote style={{ maxWidth: "850px" }}>
            How might we better facilitate the course selection process?
          </Quote>
          <Body>
            The Princeton Course Selection process is oftentimes a stressful
            time for students because they are unsure what classes to take.
            Currently there are three applications that facilitate this process
            — TigerPath, Princeton Courses, and ReCal. However, because they are
            three separate applications the process to select courses is not
            efficient. As a result, in this project, we aim to combine these
            products into one to better facilitate the course selection process.
          </Body>
        </Fade>
      </Section2>
      <Section2>
        <Fade cascade direction="up" duration={750} triggerOnce>
          <Overline1>Solution</Overline1>
          <Quote style={{ maxWidth: "800px" }}>
            Resolving pain points across three course selection applications.
          </Quote>
          <Body>
            As a result, ResInDe teamed up with TigerApps (the club that
            maintains these applications) to design a new application that not
            only combines TigerPath, Princeton Courses, and ReCal, but also
            streamlines the course selection process for all students’
            undergraduate career. Our plan was to first conduct extensive user
            research through surveys and interviews to collect pain points
            associated with the existing applications and then embark on an
            iterative design process to create a high-fidelity prototype before
            diving into the development of the application.
          </Body>
        </Fade>
      </Section2>
      <Fade direction="up" duration={750} triggerOnce>
        <StaticImage
          src="../../images/projects/course-selection/course-selection.png"
          alt="Landing page of Princeton Courses"
          objectFit="cover"
          objectPosition="center"
          width={1200}
          style={{
            marginTop: "24rem",
            borderRadius: "25px",
          }}
        />
      </Fade>
      <Section2>
        <Fade cascade direction="up" duration={750} triggerOnce>
          <Overline1>Research</Overline1>
          <Quote style={{ maxWidth: "800px" }}>
            Students start planning their four years long before looking for
            courses.
          </Quote>
          <Images cols="2">
            <StaticImage
              src="../../images/projects/course-selection/research-journey.jpg"
              alt="Collection of sticky notes composing a journey map"
              objectFit="cover"
              objectPosition="center"
              height={600}
              style={{
                borderRadius: "25px",
              }}
            />
            <StaticImage
              src="../../images/projects/course-selection/research-personas.jpg"
              alt="Collection of sticky notes outlining personas"
              objectFit="cover"
              objectPosition="top"
              height={600}
              style={{
                borderRadius: "25px",
              }}
            />
          </Images>
          <Images cols="3">
            <StaticImage
              src="../../images/projects/course-selection/research-effort.jpg"
              alt="Collection of sticky notes on an effort-impact matrix"
              objectFit="cover"
              objectPosition="top"
              height={400}
              style={{
                borderRadius: "25px",
              }}
            />
            <StaticImage
              src="../../images/projects/course-selection/research-hmws.jpg"
              alt="Collection of sticky notes for 'How Might We?' questions"
              objectFit="cover"
              objectPosition="top"
              height={400}
              style={{
                borderRadius: "25px",
              }}
            />
            <StaticImage
              src="../../images/projects/course-selection/research-affinity.jpg"
              alt="Collection of sticky notes forming an affinity map"
              objectFit="cover"
              objectPosition="center"
              height={400}
              style={{
                borderRadius: "25px",
              }}
            />
          </Images>
          <Body>
            We learned students start planning their four years before looking
            at specific courses. We also learned students trust Student Comments
            and Professor ratings from students. Students also take many class
            recommendations from friends and peers.
          </Body>
        </Fade>
      </Section2>
      <Section2>
        <Fade cascade direction="up" duration={750} triggerOnce>
          <Overline1>Ideation</Overline1>
          <Quote style={{ maxWidth: "759px" }}>
            Combining three widely used applications.
          </Quote>
          <Body>
            Our initial idea was to have all three applications to continue to
            remain separate. However, after prototyping different versions, we
            realized it was more user friendly to only have the TigerPath and
            ReCal application and have Princeton Courses be imbedded into both.
          </Body>
        </Fade>
      </Section2>
      <Section2>
        <Fade cascade direction="up" duration={750} triggerOnce>
          <Overline1>Prototypes</Overline1>
          <Quote>Mapping out the course selection process.</Quote>
          <Images cols="2">
            <StaticImage
              src="../../images/projects/course-selection/prototype-schedule.png"
              alt="Agenda view of Princeton Courses"
              objectFit="cover"
              objectPosition="center"
              height={600}
              style={{
                borderRadius: "25px",
              }}
            />
            <StaticImage
              src="../../images/projects/course-selection/prototype-search.png"
              alt="Search results and four year view of Princeton Courses"
              objectFit="cover"
              objectPosition="center"
              height={600}
              style={{
                borderRadius: "25px",
              }}
            />
          </Images>
          <Body>
            During the prototyping process, we focused on mapping out the course
            selection process for users. We realized the best way to address
            this problem was to only have TigerPath and Recal and having
            Princeton Courses be embedded. To facilitate the relationship
            between the two, we also added a bookmark feature that will remain
            consistent in both applications.
          </Body>
        </Fade>
      </Section2>
      <Section2>
        <Fade cascade direction="up" duration={750} triggerOnce>
          <Overline1>Reflection</Overline1>
          <Quote style={{ maxWidth: "700px" }}>
            Not the first step in selecting courses.
          </Quote>
          <Body>
            From our user research interviews we learned that users start out
            planning their four years before looking at different specific
            courses.
          </Body>
        </Fade>
      </Section2>
      <Fade cascade direction="up" delay={750} duration={750} triggerOnce>
        <BottomNav prev="Tigerbook" />
      </Fade>
    </PageContainer>
  )
}

export default CourseSelectionPage