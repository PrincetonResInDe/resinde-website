import { Link } from "gatsby"
import tw, { styled } from "twin.macro"
import PropTypes from "prop-types"
import React from "react"
import Wave from "../images/footer-wave.svg"

const ContentWrapper = tw.div`
  bg-magenta text-white absolute top-24 px-48 flex justify-between
`

const StyledDiv = tw.div`
  flex
`
const FooterWrapper = tw.div`
  relative
`

const WaveWrapper = tw.div`
`

const Footer = () => {
  return (
    <FooterWrapper>
      <WaveWrapper>
        <Wave fill="#F12E65" />
      </WaveWrapper>
      <ContentWrapper>
        <div>
          <StyledDiv>
            <div>About</div>
            <div>Team</div>
            <div>Services</div>
          </StyledDiv>
          <StyledDiv>
            <div>About</div>
            <div>Team</div>
            <div>Services</div>
          </StyledDiv>
        </div>
        <div>Join Our Newsletter</div>
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
