import tw, { styled } from "twin.macro"

// For wrapping all elements of a page so that margins are consistent
export const PageContainer = styled.div`
  ${tw`flex flex-col mt-36 mobile:mt-6 mobile:px-8 lg:px-24 xl:px-48 px-48`}
`

// For wrapping page title and description
export const PageHeader = styled.header`
  ${tw`mt-16 mobile:mt-6 mb-6`}
`

// For sections of a page without images or carousel
export const Section1 = styled.section`
  ${tw`mt-96 mobile:mt-56`}
`

// For sections of a page with image or carousel
export const Section2 = styled.section`
  ${tw`mt-96 mobile:mt-56 mx-16 mobile:mx-0 lg:mx-6 xl:mx-12`}
`

// For images
export const Images = styled.div`
  ${tw`grid lg:grid-cols-1 gap-4
  -mx-16 mobile:-mx-0 lg:-mx-6 xl:-mx-12 my-6`}

  grid-template-columns: repeat(${props => props.cols}, minmax(0, 1fr));
`

// For blobs going in the background
export const Blobs = styled.div`
  ${tw`absolute w-full left-0 mobile:hidden`}
  z-index: -1;
  overflow-x: clip;
`