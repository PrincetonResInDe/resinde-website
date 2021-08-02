import React from "react"
import tw, { styled } from "twin.macro"
import Seo from "../components/seo"
import { Link } from "gatsby"
import Button from "../components/button"

const StyledP = styled.p`
  ${tw`text-center`}
`

const StyledLink = styled(props => <Link {...props} />)`
  ${tw`text-blue`}
`

const HeroContainer = tw.div`
  flex flex-col min-h-screen max-w-max justify-center mobile:px-8 px-48
`

const NotFoundPage = () => (
  <HeroContainer>
    <Seo title="404: Not found" />
    <h1>WHOOPS</h1>
    <br></br>
    <StyledP>It seems like we've encountered an error!</StyledP>
    <br></br>
    <StyledP>We apologize for that!
    <br></br>
    <br></br>
    <br></br>
    <Button to="/" blue="true">GO HOME</Button>
    </StyledP>
    <br></br>
  </HeroContainer>
)

export default NotFoundPage
