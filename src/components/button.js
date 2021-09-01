import { Link } from "gatsby"
import tw, { styled } from "twin.macro"
import React from "react"

const StyledButton = styled(props => <Link {...props} />)`
  ${tw`text-white py-2 px-6 border transition capitalize`}
  border-radius: 25px;
  ${props => {
    if (props.magenta) return tw`border-magenta bg-magenta`
    else if (props.purple) return tw`border-purple bg-purple`
    else if (props.blue) return tw`border-blue bg-blue`
    else if (props.yellow) return tw`border-yellow bg-yellow`
    else return tw`border-white bg-white text-magenta`
  }}
  &:hover {
    ${tw`bg-white border`}
    ${props => {
      if (props.magenta) return tw`text-magenta`
      else if (props.purple) return tw`text-purple`
      else if (props.blue) return tw`text-blue`
      else if (props.yellow) return tw`text-yellow`
      else return tw`bg-magenta text-white`
    }}
  }
`

const Button = props => {
  return <StyledButton {...props}>{props.children}</StyledButton>
}

export default Button
