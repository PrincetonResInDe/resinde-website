import React from "react"
import tw, { styled, theme } from "twin.macro"

import Seo from "../../components/seo.js"
import { H1, Body } from "../../components/typography"
import { PageContainer as PageWrapper } from "../../components/containers"
import { InternalLinkButton } from "../../components/buttons"
import Blob3 from "../../images/blobs/blob3.svg"

const PageContainer = styled(PageWrapper)`
  ${tw`flex flex-row items-center gap-12 justify-center`}
`

const BlobContainer = tw.div`
  sm:hidden
`

const ThanksPage = () => {
  return (
    <PageContainer>
      <Seo title="Thank You" />
      <div>
        <H1>Thank You</H1>
        <Body style={{ marginBottom: "2.5rem" }}>
          We've recieved your inquiry.
        </Body>
        <InternalLinkButton to="/work" pink="true">
          Check Out Our Work
        </InternalLinkButton>
      </div>
      <BlobContainer>
        <Blob3
          fill={theme("colors.pink.DEFAULT")}
          width={300}
          style={{ transform: "rotate(45deg)" }}
        />
      </BlobContainer>
    </PageContainer>
  )
}

export default ThanksPage