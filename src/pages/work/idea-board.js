import React from "react"
import tw, { styled, theme } from "twin.macro"
import { StaticImage } from "gatsby-plugin-image"
import { Fade, Slide } from "react-awesome-reveal"

import Seo from "../../components/seo"
import { H1, Quote, Subtitle, Overline1, Body } from "../../components/typography"
import { PageContainer, PageHeader, Section2, Blobs } from "../../components/containers"
import { List } from "../../components/lists"
import BottomNav from "../../components/bottom-nav"
import Blob1 from "../../images/blobs/blob1.svg"
import Blob2 from "../../images/blobs/blob2.svg"

const DescriptionContainer = tw.div`
  max-w-prose mb-10
`

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

const IdeaBoardPage = ({ data }) => {
  return (
    <PageContainer>
      <Seo title="Idea Board" />
      <Blobs>
        <Slide direction="right" duration={750} triggerOnce>
          <Blob1
            fill={theme("colors.purple.DEFAULT")}
            style={{
              transform: "rotate(-60deg) scale(0.85)",
              margin: "-3rem 0 30rem 60vw",
            }}
          />
        </Slide>
        <Slide direction="left" duration={750} triggerOnce>
          <Blob2
            fill={theme("colors.yellow.DEFAULT")}
            style={{
              transform: "rotate(-131deg)",
              margin: "0 0 30rem -37vw",
            }}
          />
        </Slide>
        <Slide direction="right" duration={750} triggerOnce>
          <Blob2
            fill={theme("colors.blue.DEFAULT")}
            style={{
              transform: "rotate(60deg)",
              margin: "0 0 42rem 68vw",
            }}
          />
        </Slide>
      </Blobs>
      <PageHeader>
        <Fade cascade direction="up" duration={750} triggerOnce>
          <H1>Idea Board</H1>
          <Body>
            Idea Board is a more exploratory project that started with the vision 
            of a physical sticky-board space for Princeton affiliates to post ideas 
            and collaborate. The aim was to boost entrepreneurship on campus and 
            facilitate collaboration on projects. It balances the needs of students, 
            professors and alumni along with the vision of the Keller Center and 
            Prospect Student Ventures. 
          </Body>
        </Fade>
      </PageHeader>
      <AtAGlance>
        <HiddenTitle>At A Glance</HiddenTitle>
        <Fade cascade direction="up" duration={750} delay={750} triggerOnce>
          <div>
            <Subtitle>Team</Subtitle>
            <List>
              <li>Jane Castleman '24</li>
              <li>Catherine Chen '23</li>
              <li>Audrey Laude '22</li>
              <li>Warren Quan '25</li>
            </List>
            <Subtitle>Collaborators</Subtitle>
            <List>
              <li>Keller Center</li>
              <li>Prospect Student Ventures</li>
            </List>
          </div>
          <div>
            <Subtitle>Tools</Subtitle>
            <List>
              <li>Figma</li>
            </List>
            <Subtitle>Methods</Subtitle>
            <List>
              <li>User Interviews</li>
              <li>User Surveys</li>
              <li>User Personas</li>
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
            How can we create a sustainable idea board where Princeton 
            students can pursue and complete their ventures?
          </Quote>
        </Fade>
      </Section2>
      <Section2>
        <Fade cascade direction="up" duration={750} triggerOnce>
          <Overline1>Research</Overline1>
          <Quote style={{ maxWidth: "800px" }}>
            Speaking with students and professors.
          </Quote>
          <Body>
            We received funding from the Keller Center to perform user research 
            with a focus on user interviews. In order to incentivize students 
            from all across campus to participate in our process, we used our 
            funding to co-run an event with the Coffee Club, offering 6 dollar 
            coffee vouchers to students willing to participate in a 15-minute 
            interview. Our script aimed to address three main questions: (1) 
            What would motivate students to use the Idea Board? (2) Which part 
            would they be most interested in (learning / collaborating / finding 
            ideas, which stage of a project, etc.) (3) How much of a concern is 
            intellectual property / how could we mitigate this? We interviewed 
            around 20 students and used our findings to present to the Keller 
            Center and inform our ideation process. We also spoke with Prospect 
            Student Ventures and Professor Danner (a professor in entrepreneurship) 
            to gather further insights. 

            From these findings, we decided to narrow our scope to focus on a 
            digital space to help connect people to people and people to ideas 
            (with ideation as a secondary priority). This way, students can 
            connect with new group members or find projects, as well as receive 
            feedback from alumni or participants for user testing. 
          </Body>
        </Fade>
      </Section2>
      <Section2>
        <Fade cascade direction="up" duration={750} triggerOnce>
          <Overline1>Ideation</Overline1>
          <Quote style={{ maxWidth: "700px" }}>
            Exploring different layouts.
          </Quote>
          <DescriptionContainer>
            <p>
                We ideated different layouts for the two main use cases: people 
                with ideas searching for people, and people searching for ideas 
                to work on. To serve this need, we decided to have a space to post 
                ideas (in a “sticky note” or lit format) and also have a space for 
                students to make “profiles” where they can provide information 
                about themselves and what they are interested in working on. 
            </p>
            <p>
                We conducted market research on platforms including Google Keep, 
                Milanote, Trello, and LinkedIn Jobs to compare how they employ 
                card-based content displays. These sites have different methods 
                of creating cards, searching for cards, and static versus dynamic 
                card organizations. Using this research as well as feedback from 
                our design crit, we thought about the most effective way to organize 
                our sticky notes given the purpose of the Idea Board.
            </p>
          </DescriptionContainer>
        </Fade>
      </Section2>
      <Fade direction="up" duration={750} triggerOnce>
        <StaticImage
          src="../../images/projects/idea-board/prototype2.png"
          alt="Early prototype of the Idea Board."
          objectFit="cover"
          objectPosition="center"
          style={{
            marginTop: "24rem",
            borderRadius: "25px",
          }}
        />
      </Fade>
      <Section2>
        <Fade cascade direction="up" duration={750} triggerOnce>
          <Overline1>Reflection</Overline1>
          <Quote style={{ maxWidth: "700px" }}>
            Gaining inspiration.
          </Quote>
          <Body>
            The main challenge in this project was taking the influx of information 
            and narrowing down the scope. Furthermore, because there were no existing 
            solutions, we had to draw on similar products (but not perfect matches) 
            for market research and complete many iterations of designs in order to 
            build a solution. 
          </Body>
        </Fade>
      </Section2>
      <Fade cascade direction="up" delay={750} duration={750} triggerOnce>
        <BottomNav next="Room Draw" />
      </Fade>
    </PageContainer>
  )
}

export default IdeaBoardPage