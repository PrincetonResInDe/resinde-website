import React from "react"
import tw, { styled } from "twin.macro"
import { StaticImage } from "gatsby-plugin-image"

import Seo from "../components/seo.js"
import { H1, Body } from "../components/typography"
import { PageContainer as PageWrapper } from "../components/containers"
import { InternalLinkButton } from "../components/buttons"

const PageContainer = styled(PageWrapper)`
  ${tw`flex flex-row items-center gap-12 justify-center mobile:flex-col`}
`

const NotFoundPage = () => {
  return (
    <PageContainer>
      <Seo title="404" />
      <div>
        <StaticImage
          src="../images/logos/grey-resinde-logo.png"
          alt="Grey ResInDe logo"
          backgroundColor="transparent"
          placeholder="blurred"
          width={400}
          height={492}
        />
      </div>
      <div>
        <H1>Oops</H1>
        <Body style={{ marginBottom: "2.5rem" }}>We couldn't find the page you were looking for.</Body>
        <InternalLinkButton to="/" pink="true">
          Go Home
        </InternalLinkButton>
      </div>
    </PageContainer>
  )
}

export default NotFoundPage
