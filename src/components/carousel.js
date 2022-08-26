import React from "react"
import tw, { styled } from "twin.macro"
import { Link } from "gatsby"

import { Subtitle } from "../components/typography"
import { ExternalLink, InternalLink } from "../components/links"

// Text and image of a carousel item using an internal link
const InternalLinkCarouselCover = styled(props => <Link {...props} />)`
  ${tw`flex xl:flex-grow items-end relative`}
  flex: 0 0 auto;
  width: 325px;
  height: 325px;
  border-radius: 25px;
  background-size: cover;
  background-position: center;
  background-image: ${props => {
    return `url(${props.img})`
  }};

  &:hover a:before {
    visibility: visible;
    width: 100%;
  }

  @media (max-width: 767px) {
    width: 250px;
    height: 250px;
  }
`

// Text and image of a carousel item using an external link
const ExternalLinkCarouselCover = styled.a`
  ${tw`flex xl:flex-grow items-end relative`}
  flex: 0 0 auto;
  width: 325px;
  height: 325px;
  border-radius: 25px;
  background-size: cover;
  background-position: center;
  background-image: ${props => {
    return `url(${props.img})`
  }};

  &:hover a:before {
    visibility: visible;
    width: 100%;
  }
  
  @media (max-width: 767px) {
    width: 250px;
    height: 250px;
  }
`

// Color overlay on carousel item image
const Background = styled.div`
  ${tw`absolute top-0 left-0 w-full h-full`}
  ${props => {
    if (props.pink) return tw`bg-pink`
    else if (props.purple) return tw`bg-purple`
    else if (props.yellow) return tw`bg-yellow`
    else return tw`bg-blue`
  }}
  border-radius: 25px;
  opacity: ${props => { return props.opacity }};
`

// Items composing the carousel, using the above components
export const CarouselItem = props => {
  if (props.internal) {
    return (
      <InternalLinkCarouselCover to={props.to} img={props.img}>
        <Background
          pink={props.pink}
          purple={props.purple}
          yellow={props.yellow}
          blue={props.blue}
          opacity={props.img ? 0.85 : 1}
        />
        <Subtitle style={{ padding: "0 0 15px 30px" }}>
          <InternalLink white="true" to={props.to}>
            {props.name}
          </InternalLink>
        </Subtitle>
      </InternalLinkCarouselCover>
    )
  } else {
    return (
      <ExternalLinkCarouselCover
        href={props.to}
        target="_blank"
        rel="noopener noreferrer"
        img={props.img}
      >
        <Background
          pink={props.pink}
          purple={props.purple}
          yellow={props.yellow}
          blue={props.blue}
        />
        <Subtitle style={{ padding: "0 0 15px 30px" }}>
          <ExternalLink
            white="true"
            href={props.to}
            target="_blank"
            rel="noopener noreferrer"
          >
            {props.name}
          </ExternalLink>
        </Subtitle>
      </ExternalLinkCarouselCover>
    )
  }
}

// The actual carousel, composed of carousel items
export const Carousel = styled.div`
  ${tw`flex flex-nowrap gap-4 text-white my-7 -mx-16 mobile:-mx-0 lg:-mx-6 xl:-mx-12`}
  overflow-x: scroll;
  -ms-overflow-style: none;  /* IE and Edge */
  scrollbar-width: none;  /* Firefox */

  &::-webkit-scrollbar {
    display: none;
  }
`
