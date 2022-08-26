import React from "react"
import tw, { styled, theme } from "twin.macro"
import { StaticImage } from "gatsby-plugin-image"
import { Fade, Slide } from "react-awesome-reveal"

import Seo from "../../components/seo"
import { H1, Quote, Subtitle, Overline1, Body } from "../../components/typography"
import { PageContainer, PageHeader, Section2, Images, Blobs } from "../../components/containers"
import { List, BulletedList } from "../../components/lists"
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

const TigerbookPage = ({ data }) => {
  return (
    <PageContainer>
      <Seo title="Tigerbook" />
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
              transform: "rotate(-45deg) scale(1.2)",
              margin: "0 0 12rem -36vw",
            }}
          />
        </Slide>
        <Slide direction="right" duration={750} triggerOnce>
          <Blob1
            fill={theme("colors.purple.DEFAULT")}
            style={{
              transform: "rotate(158deg) scale(1.2)",
              margin: "0 0 0 76vw",
            }}
          />
        </Slide>
      </Blobs>
      <PageHeader>
        <Fade cascade direction="up" duration={750} triggerOnce>
          <H1>Tigerbook</H1>
          <Body>
            Tigerbook is a directory application that allows students to learn
            more about and to connect with their peers. Tigerbook has stored
            student information like hometowns, roommates, and dorm room
            numbers, enabling students to find shared backgrounds and locate one
            another to drop off care packages. However, in September 2019 a
            major privacy update where most student information was removed was
            implemented after many students expressed privacy concerns. With
            only student names and photos left, Tigerbook lost most of its value
            as a student resource for social connection, so ResInDe came in with
            the goal of restoring its initial value while also addressing
            student concerns. As much of what made Tigerbook so useful was the
            information it contained, the now bare-bone version of Tigerbook has
            lost much of its value among students. Our goal was understanding
            how we can bring back the value to the application.
          </Body>
        </Fade>
      </PageHeader>
      <AtAGlance>
        <HiddenTitle>At A Glance</HiddenTitle>
        <Fade cascade direction="up" duration={750} delay={750} triggerOnce>
          <div>
            <Subtitle>Team</Subtitle>
            <List>
              <li>Manasseh Alexander '21</li>
              <li>Ashley To '22</li>
              <li>Sophie Torres '21</li>
              <li>Ameya Vaidya '24</li>
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
              <li>Brainwriting</li>
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
            How might we provide engaging information & capabilities while
            balancing privacy concerns?
          </Quote>
        </Fade>
      </Section2>
      <Section2>
        <Fade cascade direction="up" duration={750} triggerOnce>
          <Overline1>Solution</Overline1>
          <Quote style={{ maxWidth: "800px" }}>
            Reflecting themes of reliability and connectivity.
          </Quote>
          <Body>
            Our solution to restore Tigerbook’s core value of allowing students
            to build and foster connection was to provide student information
            under an opt-in condition. We also focused on creating a welcoming
            user experience to reflect its themes of reliability and
            connectivity.
          </Body>
        </Fade>
      </Section2>
      <Fade direction="up" duration={750} triggerOnce>
        <StaticImage
          src="../../images/projects/tigerbook/tigerbook.png"
          alt="Landing page of Tigerbook"
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
          <Overline1>Research</Overline1>
          <Quote>Putting faces to names.</Quote>
          <Images cols="1">
            <StaticImage
              src="../../images/projects/tigerbook/research-journey.png"
              alt="Collection of digital sticky notes forming a journey map"
              objectFit="cover"
              objectPosition="center"
              height={400}
              style={{
                borderRadius: "25px",
              }}
            />
          </Images>
          <Images cols="3">
            <StaticImage
              src="../../images/projects/tigerbook/research-persona1.png"
              alt="Persona for Fresh Fred"
              objectFit="cover"
              objectPosition="top"
              height={400}
              style={{
                borderRadius: "25px",
              }}
            />
            <StaticImage
              src="../../images/projects/tigerbook/research-persona2.png"
              alt="Persona for Privacy Pauline"
              objectFit="cover"
              objectPosition="top"
              height={400}
              style={{
                borderRadius: "25px",
              }}
            />
            <StaticImage
              src="../../images/projects/tigerbook/research-persona3.png"
              alt="Persona for Roomdraw Riley"
              objectFit="cover"
              objectPosition="top"
              height={400}
              style={{
                borderRadius: "25px",
              }}
            />
          </Images>
          <DescriptionContainer>
            <p>
              In our initial phase, we conducted eight user interviews and spoke
              with students about their experience to learn more about
              Tigerbook’s value. To get a comprehensive picture, we made sure to
              speak with students who had experience with the previous Tigerbook
              as well as first-years who only knew of it post-update. We
              synthesized these interviews using affinity maps and journey maps.
            </p>
            <p>The most popular use cases from these interviews were:</p>
            <BulletedList>
              <li>Attributing faces to names</li>
              <li>
                Contacting someone for permissions to look at their room before
                room draw
              </li>
              <li>
                Finding someone’s room to drop off a gift or for club pick-ups
              </li>
              <li>
                Finding useful information about peers out of curiosity or to
                connect with based on similar interests
              </li>
            </BulletedList>
            <p>
              Our research findings highlighted that Tigerbook’s value was more
              than the information it provided—it was also how that information
              acted as a stepping stone to support other activities.
              Understanding what students found useful shed light on how we
              could re-design Tigerbook to fit those needs without overstepping
              privacy boundaries.
            </p>
            <p>
              After the user interviews, we wanted to gain a wider perspective
              on what information users would find valuable. We sent out a
              school-wide survey asking students what information they would
              find valuable and received over 75 responses. This survey
              solidified the features we were considering while helping weed out
              unnecessary ones.
            </p>
          </DescriptionContainer>
        </Fade>
      </Section2>
      <Section2>
        <Fade cascade direction="up" duration={750} triggerOnce>
          <Overline1>Ideation</Overline1>
          <Quote style={{ maxWidth: "700px" }}>
            Not a social network, but a student resource.
          </Quote>
          <DescriptionContainer>
            <p>
              We ideated different approaches from a social media approach with
              friends-only profile visibility to adding interest outside of
              academics. Each idea had their pros and cons, but we ultimately
              decided to approach the major use case of Tigerbook as a student
              resource. This helped shape the pathway we wanted by avoiding the
              exclusive nature of the social media, friend-reliant idea and
              remaining centralized on Princeton-specific interests.
            </p>
            <p>
              As a core piece to this project was privacy, we balanced privacy
              and valuable information through an opt-in system. This way,
              consent by the user is required before any information is shared.
            </p>
          </DescriptionContainer>
        </Fade>
      </Section2>
      <Section2>
        <Fade cascade direction="up" duration={750} triggerOnce>
          <Overline1>Prototypes</Overline1>
          <Quote>Getting the details right.</Quote>
          <DescriptionContainer>
            <p>In our design, we implemented four main features:</p>
            <BulletedList>
              <li>Control and access to more information</li>
              <li>A new search bar that supports the additional information</li>
              <li>A flexible profile</li>
              <li>A fresh, welcoming design</li>
            </BulletedList>
          </DescriptionContainer>
        </Fade>
      </Section2>
      <Section2>
        <Fade cascade direction="up" duration={750} triggerOnce>
          <Quote style={{ maxWidth: "700px" }}>
            Control and access to more information.
          </Quote>
          <Images>
            <StaticImage
              src="../../images/projects/tigerbook/prototype-form.png"
              alt="Profile setup form for Tigerbook"
              objectFit="cover"
              objectPosition="top"
              height={1000}
              style={{
                borderRadius: "25px",
              }}
            />
          </Images>
          <Body>
            We open the app with a mandatory, one-time only form where the user
            fills out information they want shown on their profile. Every
            student must go through the form once before they can access
            Tigerbook, as this is the central solution we created to address
            privacy concerns.
          </Body>
        </Fade>
      </Section2>
      <Section2>
        <Fade cascade direction="up" duration={750} triggerOnce>
          <Quote style={{ maxWidth: "800px" }}>
            A search bar that supports the new information.
          </Quote>
          <Images cols="2">
            <StaticImage
              src="../../images/projects/tigerbook/prototype-search1.png"
              alt="Tigerbook search results with filter dropdown expanded"
              objectFit="cover"
              objectPosition="center"
              height={600}
              style={{
                borderRadius: "25px",
              }}
            />
            <StaticImage
              src="../../images/projects/tigerbook/prototype-search2.png"
              alt="Tigerbook search results"
              objectFit="cover"
              objectPosition="center"
              height={600}
              style={{
                borderRadius: "25px",
              }}
            />
          </Images>
          <DescriptionContainer>
            <p>
              With new, additional information, our design requires a smooth
              experience for the user to search by that information. To best
              support Tigerbook’s value of fostering connections, we created a
              filter to more efficiently find others with similar interests. The
              search bar in our design visually shows all the available filters
              allowing the user to easily and more precisely find who they are
              looking for. As easily as it shows filters, we provide the option
              for users to hide these filters if they prefer to use search words
              instead.
            </p>
            <p>
              With each selection made in the filter, the selection is clearly
              displayed at the top of the search bar by an orange pill and each
              menu is activated with color to indicate that there is an active
              filter. This provides clear system visibility to the user as they
              do not have to recall which filters are active and can delete an
              active filter with ease.
            </p>
            <p>
              Once the user reaches the search results page, the filters adjust
              to follow a vertical layout on the left hand side of the screen in
              order to maximize the screen space while still remaining
              accessible to the user.
            </p>
          </DescriptionContainer>
        </Fade>
      </Section2>
      <Section2>
        <Fade cascade direction="up" duration={750} triggerOnce>
          <Quote>A flexible profile.</Quote>
          <Images cols="2">
            <StaticImage
              src="../../images/projects/tigerbook/prototype-profile1.png"
              alt="Tigerbook profile quick look for John Doe"
              objectFit="cover"
              objectPosition="center"
              height={500}
              style={{
                borderRadius: "25px",
              }}
            />
            <StaticImage
              src="../../images/projects/tigerbook/prototype-profile2.png"
              alt="Tigerbook profile for John Doe"
              objectFit="cover"
              objectPosition="center"
              height={500}
              style={{
                borderRadius: "25px",
              }}
            />
          </Images>
          <DescriptionContainer>
            <p>
              The core of Tigerbook boils down to the profile. Whether it’s
              putting names to faces or looking up an email, the profile is the
              end goal for our users. Thus, it brings the question: how can we
              design the best profile page that attains the user’s goal?
            </p>
            <p>
              Our design mimics a “prox” which is the student ID card on campus.
              The card itself displays the core information that each user has
              (class year, netID, residential college, major). Additionally, if
              the user fills out optional information such as pronunciation or
              nicknames, those will appear here.
            </p>
          </DescriptionContainer>
        </Fade>
      </Section2>
      <Section2>
        <Fade cascade direction="up" duration={750} triggerOnce>
          <Quote>A fresh face for Tigerbook.</Quote>
          <DescriptionContainer>
            <p>
              As our central re-design is to balance privacy with valuable
              information, we wanted to reflect this in the visual design. We
              focused on the core adjectives of:
            </p>
            <BulletedList>
              <li>Welcoming</li>
              <li>Simple</li>
              <li>Informative</li>
              <li>Safe</li>
              <li>Reliable</li>
            </BulletedList>
            <p>
              We did so by using rounder assets and fonts, icons, and warmer
              colors. Our team member, Sophie Torres ‘21, redesigned the new
              logo for Tigerbook to emulate this vision as well.
            </p>
          </DescriptionContainer>
        </Fade>
      </Section2>
      <Section2>
        <Fade cascade direction="up" duration={750} triggerOnce>
          <Overline1>Reflection</Overline1>
          <Quote style={{ maxWidth: "700px" }}>
            Considering privacy from the start.
          </Quote>
          <Body>
            Privacy is a growing concern in the rapidly evolving tech world.
            Backtracking a product due to privacy concerns, especially one as
            reliant on personal information as Tigerbook, could be avoided had
            privacy been considered from the start. Backtracking is never easy
            because the value of information itself cannot be replaced, but
            understanding why and how that information is useful allows us to
            explore opportunities to bring back that value ethically.
          </Body>
        </Fade>
      </Section2>
      <Fade cascade direction="up" delay={750} duration={750} triggerOnce>
        <BottomNav next="Course Selection" />
      </Fade>
    </PageContainer>
  )
}

export default TigerbookPage