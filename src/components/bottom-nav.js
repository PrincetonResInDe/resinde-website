import React from "react"
import tw, { styled } from "twin.macro"

import { InternalLink } from "./links"

const BottomNavContainer = styled.div`
  ${tw`flex w-full mt-24`}
  ${props => {
    if (props.prev && props.next) return tw`justify-between`
    else if (!props.prev) return tw`justify-end`
    else if (!props.next) return tw`justify-start`
  }}
`

const BottomNavLink = styled(InternalLink)`
  ${tw`font-bold`}
  font-size: 1.5rem;

  @media (max-width: 1023px) {
    font-size: 1.25rem;
  }

  @media (max-width: 639px) {
    font-size: 1rem;
  }
`

const BottomNav = props => {
  return (
    <BottomNavContainer prev={props.prev} next={props.next}>
      {props.prev && (
        <BottomNavLink
          to={`/work/${props.prev.replace(/ /, "-").toLowerCase()}`}
          pink="true"
        >
          ← {props.prev}
        </BottomNavLink>
      )}
      {props.next && (
        <BottomNavLink
          to={`/work/${props.next.replace(/ /, "-").toLowerCase()}`}
        >
          {props.next} →
        </BottomNavLink>
      )}
    </BottomNavContainer>
  )
}

export default BottomNav
