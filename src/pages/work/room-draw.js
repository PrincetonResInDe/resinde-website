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

const RoomDrawPage = ({ data }) => {
  return (
    <PageContainer>
      <Seo title="Room Draw" />
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
        <Slide direction="left" duration={750} triggerOnce>
          <Blob1
            fill={theme("colors.pink.DEFAULT")}
            style={{
              transform: "rotate(-30deg) scale(1.2)",
              margin: "0 0 28rem -42vw",
            }}
          />
        </Slide>
        <Slide direction="right" duration={750} triggerOnce>
          <Blob1
            fill={theme("colors.purple.DEFAULT")}
            style={{
              transform: "rotate(158deg) scale(1.2)",
              margin: "0 0 36rem 76vw",
            }}
          />
        </Slide>
      </Blobs>
      <PageHeader>
        <Fade cascade direction="up" duration={750} triggerOnce>
          <H1>Room Draw</H1>
          <Body>
            TigerDraw is the current Princeton room draw solution, allowing students 
            to favorite rooms and create groups in preparation for room draw. 
            The existing TigerDraw version lacks features of the previous room 
            draw app that allowed users to explore rooms. Reviews, floor plans, 
            and details of each room beyond square footage and occupancy allowed 
            students to better understand what made a room unique. The new version 
            of TigerDraw will integrate the features that worked well from previous 
            versions and build onto them with an in-depth review form. The review 
            form will crowdsource information to allow users to access a detailed 
            overview of a room and make a better-informed decision come room draw. 
          </Body>
        </Fade>
      </PageHeader>
      <AtAGlance>
        <HiddenTitle>At A Glance</HiddenTitle>
        <Fade cascade direction="up" duration={750} delay={750} triggerOnce>
          <div>
            <Subtitle>Team</Subtitle>
            <List>
              <li>Chloe Chen '23</li>
              <li>Jayson Wu '23 </li>
              <li>Katie McLaughlin '23</li>
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
              <li>Visual Studio Code</li>
              <li>Python</li>
              <li>HTML/CSS/JS</li>
              <li>Heroku</li>
              <li>PostgreSQL</li>
            </List>
            <Subtitle>Methods</Subtitle>
            <List>
              <li>User Interviews/Focus Group</li>
              <li>User Testing</li>
              <li>Feasibility vs. Priority Graph</li>
              <li>Affinity Mapping</li>
              <li>User Flow</li>
              <li>Prototypes</li>
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
            How might we improve the existing room draw website to better help 
            students explore and compare rooms in preparation for room draw? 
          </Quote>
        </Fade>
      </Section2>
      <Section2>
        <Fade cascade direction="up" duration={750} triggerOnce>
          <Overline1>Research</Overline1>
          <Quote style={{ maxWidth: "800px" }}>
            Formulating Questions to Ask and Student Participation.
          </Quote>
          <Body>
            We built off of last semester's progress by conducting our own user 
            research. We gathered a group of 9 Princeton students and spoke to 
            them about their past room draw experiences. We prepared a few 
            questions as a starting point for the group interview but allowed 
            the discussion to take the conversation in different directions, 
            highlighting important points and reoccurring themes. A good portion 
            of the conversation centered on important room features to consider 
            when picking desirable rooms.

            Our user research also exposed an issue with the past review system. 
            Seeing as the review form will be such a central part of our design, 
            how can we try to ensure all rooms get a review? It turns out this 
            might have a simple solution, as our focus group said they would have 
            filled out a review if they had just been prompted or reminded. 
          </Body>
        </Fade>
      </Section2>
      <Section2>
        <Fade cascade direction="up" duration={750} triggerOnce>
          <Overline1>Ideation</Overline1>
          <Quote style={{ maxWidth: "700px" }}>
            Integrating and Iterating
          </Quote>
          <DescriptionContainer>
            <p>
                We ideated different ways to display information to students in an 
                interactive way by combining the good parts of previous sites and 
                building new features to fill in the gaps. For example, the current 
                TigerDraw version features historical draw times as a key point. 
                Our user research found this is not a priority when weighing rooms. 
                The review form we created based on our user research drove a lot 
                of this ideation. With more information, what key details do we want 
                to feature with the rooms table? Market research of how Airbnb and 
                Zillow also assisted in looking at different ways to display content, 
                but the main difference was our lack of images and visuals. Thus, a 
                lot of the work centered on how we could emphasize factual details 
                and room characteristics to fill in the details.
            </p>
          </DescriptionContainer>
        </Fade>
      </Section2>
      <Section2>
        <Fade cascade direction="up" duration={750} triggerOnce>
          <Overline1>Prototyping</Overline1>
          <Quote style={{ maxWidth: "700px" }}>
            The Review Form as the Catalyst
          </Quote>
          <DescriptionContainer>
            <p>
                Our prototyping process centered on information from the review form that 
                we wanted to include. A lot of these changes would be accessible either 
                on or from the rooms page. The first focus was deciding based on the review 
                form, what columns to include in the rooms table. This offshoot into what 
                filters to display and how to display them. The current TigerDraw version 
                only lets the user set Building, College, Occupancy, and “Ranking Range” 
                (historical draw time based on a specific year's room draw).
            </p>
            <p>
                By clicking a row in the room list, we bring back the room details page 
                from old TigerDraw - but new and improved! We moved away from a chart 
                like display to more of a vertical scroll with a map at the top, somewhat 
                similar to Airbnb and Google Reviews. Integrating the floorplans at the 
                top made sense so users don't have to toggle between the map on a different 
                page and the details.
            </p>
            <p>
                We also streamlined the group and favorites situation, as that was a point 
                of confusion for students in the focus group. It also takes up two columns 
                on the table when the action is very similar. Thus, we combined favorites 
                + groups to Lists. Students can make multiple lists and decide who to share 
                it with. This also allows for multiple personal lists, useful for if a student 
                is participating in multiple draws (e.g. res college and upperclassmen)
            </p>
          </DescriptionContainer>
        </Fade>
      </Section2>
      <Fade direction="up" duration={750} triggerOnce>
        <StaticImage
          src="../../images/projects/room-draw/prototype2.png"
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
            The Need for Others.
          </Quote>
          <Body>
            Even though we were users ourselves and brought our own experiences 
            with room draw into the design process, we found that having a fresh 
            set of eyes on our ideas and designs really helped drive the process 
            with new perspectives. 

            With such a limited team size and busy schedules, market research can 
            be a valuable source of inspiration for tried and tested methods of 
            displaying information rather than solely relying on user research. 
            On the topic of team size, we believe it would be beneficial to have 
            a team larger than three for support and accountability purposes.
          </Body>
        </Fade>
      </Section2>
      <Fade cascade direction="up" delay={750} duration={750} triggerOnce>
        <BottomNav next="WhenIsGood" />
      </Fade>
    </PageContainer>
  )
}

export default RoomDrawPage