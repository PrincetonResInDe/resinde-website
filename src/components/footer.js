import { Link } from "gatsby"
import tw, { styled } from "twin.macro"
import PropTypes from "prop-types"
import React from "react"
import Wave from "../images/footer-wave.svg"
import InstagramLogo from "../images/instagram-logo.svg"
import LinkedInLogo from "../images/linkedin-logo.svg"
import FacebookLogo from "../images/facebook-logo.svg"
import Heart from "../images/heart.svg"
import Button from "./button"

const FooterWrapper = tw.div`
  relative text-sm mt-32
`
const ContentWrapper = tw.div`
  bg-magenta text-white absolute top-24 px-48 flex justify-between w-full pb-8 mobile:px-8
`
const LeftContent = tw.div``

const RightContent = tw.div`
  flex flex-col text-right w-2/5 mobile:w-3/5
`

const LinksWrapper = tw.div`
  flex space-x-20 lg:grid lg:space-x-0 lg:gap-8 lg:grid-cols-2 sm:grid-cols-1
`
const PageLinksWrapper = tw.div`
  flex flex-col space-y-2
`
const PageTitleLink = styled(props => <Link {...props} />)`
  ${tw`font-bold text-base`}
`
const BottomLeftDiv = tw.div`
  mt-8 space-y-2
`
const SocialsWrapper = tw.div`
  flex space-x-2
`
const JoinText = tw.div`
  font-bold text-base
`
const NewsletterDiv = tw.div`
  space-y-2
`
const ButtonDiv = tw.div`
  pt-4
`
const MadeWithLoveDiv = tw.div`
  flex space-x-1
`
const HeartDiv = tw.div`
  top-0.5 relative
`

const Footer = () => {
  return (
    <FooterWrapper>
      <Wave fill="#F12E65" />
      <ContentWrapper>
        <LeftContent>
          <LinksWrapper>
            <PageLinksWrapper>
              <PageTitleLink to="/about">About</PageTitleLink>
              <Link to="/team">Team</Link>
              <Link to="/about#services">Services</Link>
              <Link to="/about#partners">Partners</Link>
              <Link to="/contact">Contact</Link>
            </PageLinksWrapper>
            <PageLinksWrapper>
              <PageTitleLink to="/work">Work</PageTitleLink>
              <div>Projects</div>
              <div>Case Studies</div>
            </PageLinksWrapper>
            <PageLinksWrapper>
              <PageTitleLink to="/for-students">For Students</PageTitleLink>
              <Link to="/for-students#join">Reasons to Join</Link>
              <Link to="/for-students#events">Upcoming Events</Link>
              <Link to="/for-students#workshops">Past Workshops</Link>
            </PageLinksWrapper>
          </LinksWrapper>
          <BottomLeftDiv>
            <SocialsWrapper>
              <a
                href="https://www.facebook.com/princetonresinde"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FacebookLogo width="32" height="32" />
              </a>
              <a
                href="https://www.instagram.com/princetonresinde/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <InstagramLogo width="32" height="32" />
              </a>
              <a
                href="https://www.linkedin.com/company/princetonresinde"
                target="_blank"
                rel="noopener noreferrer"
              >
                <LinkedInLogo width="32" height="32" />
              </a>
            </SocialsWrapper>
            <MadeWithLoveDiv>
              <div>Made with</div>
              <HeartDiv>
                <Heart width="16" height="16" />
              </HeartDiv>
              <div>by ResInDe.</div>
            </MadeWithLoveDiv>
            <div>© 2021 ResInDe. All rights reserved.</div>
          </BottomLeftDiv>
        </LeftContent>
        <RightContent>
          <NewsletterDiv>
            <JoinText>Join Our Newsletter</JoinText>
            <div>
              A monthly dose of events, articles, and resources in design & tech
              straight to your mailbox.
            </div>
            <ButtonDiv>
              <a
                href="https://google.us2.list-manage.com/subscribe?u=f742a956f5b0d1eca7c1703e3&id=59b6bf43e4"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button>Subscribe</Button>
              </a>
            </ButtonDiv>
          </NewsletterDiv>
        </RightContent>
      </ContentWrapper>
    </FooterWrapper>
  )
}

Footer.propTypes = {
  siteTitle: PropTypes.string,
}

Footer.defaultProps = {
  siteTitle: ``,
}

export default Footer
