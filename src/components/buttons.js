import { Link } from "gatsby"
import tw, { styled } from "twin.macro"
import React from "react"

// For buttons that link to pages on the site (hence internal)
export const InternalLinkButton = styled(props => <Link {...props} />)`
  ${tw`text-white py-2 px-6 border transition capitalize font-bold`}
  border-radius: 25px;
  ${props => {
    if (props.pink) return tw`border-pink bg-pink`
    else if (props.purple) return tw`border-purple bg-purple`
    else if (props.blue) return tw`border-blue bg-blue`
    else if (props.yellow) return tw`border-yellow bg-yellow`
    else return tw`border-white bg-white text-pink`
  }}
  &:hover {
    ${tw`bg-white border`}
    ${props => {
      if (props.pink) return tw`text-pink`
      else if (props.purple) return tw`text-purple`
      else if (props.blue) return tw`text-blue`
      else if (props.yellow) return tw`text-yellow`
      else return tw`bg-pink text-white`
    }}
  }
`

// For buttons that link to external sites/pages
export const ExternalLinkButton = styled.a`
  ${tw`text-white py-2 px-6 border transition capitalize font-bold`}
  border-radius: 25px;
  ${props => {
    if (props.pink) return tw`border-pink bg-pink`
    else if (props.purple) return tw`border-purple bg-purple`
    else if (props.blue) return tw`border-blue bg-blue`
    else if (props.yellow) return tw`border-yellow bg-yellow`
    else return tw`border-white bg-white text-pink`
  }}
  &:hover {
    ${tw`bg-white border`}
    ${props => {
      if (props.pink) return tw`text-pink`
      else if (props.purple) return tw`text-purple`
      else if (props.blue) return tw`text-blue`
      else if (props.yellow) return tw`text-yellow`
      else return tw`bg-pink text-white`
    }}
  }
`

// For buttons meant to submit a form
export const SubmitButton = styled.button`
  ${tw`text-white py-2 px-6 border transition capitalize font-bold`}
  border-radius: 25px;
  ${props => {
    if (props.pink) return tw`border-pink bg-pink`
    else if (props.purple) return tw`border-purple bg-purple`
    else if (props.blue) return tw`border-blue bg-blue`
    else if (props.yellow) return tw`border-yellow bg-yellow`
    else return tw`border-white bg-white text-pink`
  }}
  &:hover {
    ${tw`bg-white border`}
    ${props => {
      if (props.pink) return tw`text-pink`
      else if (props.purple) return tw`text-purple`
      else if (props.blue) return tw`text-blue`
      else if (props.yellow) return tw`text-yellow`
      else return tw`bg-pink text-white`
    }}
  }
`