import React from "react"
import tw, { styled } from "twin.macro"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import PropTypes from "prop-types"

import MobileNav from "./mobile-nav"
import { InternalLink } from "./links"
import { InternalLinkButton } from "./buttons"

const NavLink = styled(InternalLink)`
  ${tw`mr-8`}
`

const HeaderContainer = tw.header`
  pt-2 mobile:px-8 px-20 mobile:static fixed mobile:top-auto top-0 w-full bg-white z-50 bg-opacity-90
`

const NavContainer = tw.nav`
  flex justify-between items-center text-lg
`
const DesktopNav = tw.div`
  mobile:hidden block  
`

const Header = ({ navLinks }) => {
  const colors = ["pink", "purple", "blue", "yellow"]

  return (
    <HeaderContainer>
      <NavContainer>
        <div>
          <Link to="/">
            <StaticImage
              src="../images/logos/resinde-logo-square.png"
              alt="ResInDe logo"
              backgroundColor="transparent"
              placeholder="blurred"
              width={70}
              height={70}
            />
          </Link>
        </div>
        <MobileNav navLinks={navLinks} />
        <DesktopNav>
          {navLinks.map((item, index) => {
            if (item.name === "Contact Us") {
              return (
                <InternalLinkButton
                  to="/contact"
                  key={item.name}
                  pink="true"
                >
                  Contact Us
                </InternalLinkButton>
              )
            } else {
              let linkProps = { to: item.link }
              linkProps[colors[index % colors.length]] = "true"
              return (
                <NavLink {...linkProps} key={item.name}>
                  {item.name}
                </NavLink>
              )
            }
          })}
        </DesktopNav>
      </NavContainer>
    </HeaderContainer>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
