import React from "react"
import { Link } from "gatsby"
import tw, { styled } from "twin.macro"

// For links to pages on the site (hence internal)
export const InternalLink = styled(props => <Link {...props} />)`
  position: relative;
  transition: color 0.3s ease-in-out;
  &:before {
    ${props => {
      if (props.pink) return tw`bg-pink`
      else if (props.purple) return tw`bg-purple`
      else if (props.yellow) return tw`bg-yellow`
      else if (props.white) return tw`bg-white`
      else return tw`bg-blue`
    }}
    content: "";
    position: absolute;
    width: 0;
    height: 2px;
    bottom: -2px;
    left: 0;
    visibility: hidden;
    transition: all 0.3s ease-in-out;
    transition-duration: 0.5s;
  }
  &:hover:before {
    visibility: visible;
    width: 100%;
  }
  &:hover {
    ${props => {
      if (props.pink) return tw`text-pink`
      else if (props.purple) return tw`text-purple`
      else if (props.yellow) return tw`text-yellow`
      else if (props.white) return tw`text-white`
      else return tw`text-blue`
    }}
  }
`

// For links to external sites/pages
export const ExternalLink = styled.a`
  position: relative;
  transition: color 0.3s ease-in-out;
  &:before {
    ${props => {
      if (props.pink) return tw`bg-pink`
      else if (props.purple) return tw`bg-purple`
      else if (props.yellow) return tw`bg-yellow`
      else if (props.white) return tw`bg-white`
      else return tw`bg-blue`
    }}
    content: "";
    position: absolute;
    width: 0;
    height: 2px;
    bottom: -2px;
    left: 0;
    visibility: hidden;
    transition: all 0.3s ease-in-out;
    transition-duration: 0.5s;
  }
  &:hover:before {
    visibility: visible;
    width: 100%;
  }
  &:hover {
    ${props => {
      if (props.pink) return tw`text-pink`
      else if (props.purple) return tw`text-purple`
      else if (props.yellow) return tw`text-yellow`
      else if (props.white) return tw`text-white`
      else return tw`text-blue`
    }}
  }
`
