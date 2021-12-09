import React from "react"
import tw, { styled, theme } from "twin.macro"
import PropTypes from "prop-types"

import { InternalLink } from "./links"
import { ExternalLinkButton } from "./buttons"
import WaveSVG from "../images/footer-wave.svg"
import InstagramLogo from "../images/icons/instagram-icon.svg"
import LinkedInLogo from "../images/icons/linkedin-icon.svg"
import FacebookLogo from "../images/icons/facebook-icon.svg"
import HeartSVG from "../images/icons/heart-icon.svg"

const FooterContainer = tw.footer`
  text-sm w-full overflow-hidden
`

const Wave = styled(WaveSVG)`
  ${tw`relative`}
  top: 165px;
  z-index: -1;

  @media (min-width: 1279px) {
    width: 100%;
  }
`

const Content = tw.div`
  flex flex-wrap sm:flex-col sm:gap-y-10 justify-between w-full bg-pink
  text-white pb-8 mobile:px-8 lg:px-24 xl:px-48 px-48
`

const Links = tw.div`
  flex gap-x-20 lg:gap-x-16 mobile:gap-x-12
`

const LinksColumn = tw.div`
  flex flex-col gap-y-2
`

const Link = styled(InternalLink)`
  width: fit-content;
`

const Heading = tw.p`
  font-bold text-base my-0
`

const Newsletter = styled.div`
  ${tw`flex flex-col gap-y-3 items-end sm:items-start text-right
       sm:text-left`}
  max-width: 315px;
`

const Small = tw.p`
  text-sm my-0
`

const SubscribeButton = styled(ExternalLinkButton)`
  display: block;
  width: fit-content;
`

const Attribution = tw.div`
  mt-8 sm:mt-0 space-y-1 w-full
`

const Socials = tw.div`
  flex space-x-2
`

const Heart = styled(HeartSVG)`
  display: inline;
  margin-bottom: 2px;
`

const Footer = () => {
  return (
    <FooterContainer>
      <Wave fill={theme("colors.pink.DEFAULT")} />
      <Content>
        <Links>
          <LinksColumn>
            <Heading>
              <Link to="/about" white="true">
                About
              </Link>
            </Heading>
            <Link to="/team" white="true">
              Team
            </Link>
            <Link to="/about#services" white="true">
              Services
            </Link>
            <Link to="/about#partners" white="true">
              Partners
            </Link>
            <Link to="/contact" white="true">
              Contact
            </Link>
          </LinksColumn>
          <LinksColumn>
            <Heading>
              <Link to="/work" white="true">
                Work
              </Link>
            </Heading>
            <Heading>
              <Link to="/for-students" white="true">
                For Students
              </Link>
            </Heading>
            <Link to="/for-students#join" white="true">
              Reasons to Join
            </Link>
            <Link to="/for-students#events" white="true">
              Events & Workshops
            </Link>
          </LinksColumn>
        </Links>
        <Newsletter>
          <Heading>Join Our Newsletter</Heading>
          <Small>
            A monthly dose of events, articles, and resources in design & tech
            straight to your mailbox.
          </Small>
          <SubscribeButton
            href="https://google.us2.list-manage.com/track/click?u=f742a956f5b0d1eca7c1703e3&id=bd846e1424&e=a5fba362fe"
            target="_blank"
            rel="noopener noreferrer"
          >
            Subscribe
          </SubscribeButton>
        </Newsletter>
        <Attribution>
          <Socials>
            <a
              href="https://www.facebook.com/princetonresinde"
              target="_blank"
              rel="noopener noreferrer"
              title="Facebook"
            >
              <FacebookLogo width="32" height="32" />
            </a>
            <a
              href="https://www.instagram.com/princetonresinde/"
              target="_blank"
              rel="noopener noreferrer"
              title="Instagram"
            >
              <InstagramLogo width="32" height="32" />
            </a>
            <a
              href="https://www.linkedin.com/company/princetonresinde"
              target="_blank"
              rel="noopener noreferrer"
              title="LinkedIn"
            >
              <LinkedInLogo width="32" height="32" />
            </a>
          </Socials>
          <Small>
            Made with <Heart width="16" height="16" /> by ResInDe.
          </Small>
          <Small>© 2021 ResInDe. All rights reserved.</Small>
        </Attribution>
      </Content>
    </FooterContainer>
  )
}

Footer.propTypes = {
  siteTitle: PropTypes.string,
}

Footer.defaultProps = {
  siteTitle: ``,
}

export default Footer
