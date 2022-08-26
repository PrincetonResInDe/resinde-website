import tw, { styled } from "twin.macro"

// For page titles (e.g. About Us, Our Work)
export const H1 = styled.h1`
  ${tw`mb-6 leading-tight`}
  font-size: 4rem;

  @media (max-width: 1023px) {
    font-size: 3.5rem;
  }

  @media (max-width: 767px) {
    font-size: 3rem;
  }
`

// For page section names, if not using an overline
export const H2 = styled.h2`
  ${tw`mb-10 leading-tight max-w-prose`}
  font-size: 3.5rem;

  @media (max-width: 1023px) {
    font-size: 3rem;
  }

  @media (max-width: 767px) {
    font-size: 2.25rem;
  }
`

// For project and team member names
export const H3 = styled.h3`
  ${tw`leading-tight`}
  font-size: 2.25rem;

  @media (max-width: 1023px) {
    font-size: 2rem;
  }

  @media (max-width: 767px) {
    font-size: 27px;
  }
`

// For eye-catching descriptions of page sections
// (e.g. "The people who believe in us." for Partners on About page)
// Stylistically the same as an h2, but without semantic significance
export const Quote = styled.p`
  ${tw`mb-4 leading-tight max-w-prose`}
  font-family: "Montserrat", sans-serif;
  font-weight: 700;
  font-size: 3.5rem;

  @media (max-width: 1023px) {
    font-size: 3rem;
  }

  @media (max-width: 767px) {
    font-size: 2.25rem;
  }
`

// For service names on about page or carousel item names
export const Subtitle = styled.h3`
  ${tw`leading-tight mt-5 mb-2`}
  font-size: 1.75rem;

  @media (max-width: 1023px) {
    font-size: 1.5rem;
  }

  @media (max-width: 767px) {
    font-size: 21px;
  }
`

// For uppercase names of sections (e.g. ABOUT US, SERVICES)
export const Overline1 = styled.h2`
  ${tw`uppercase mb-4 tracking-wide`}
  font-family: "Muli", sans-serif;
  font-size: 21px;
`
export const Overline2 = styled.p`
  ${tw`uppercase font-bold tracking-wide`}
`

// For page descriptions
export const Body = styled.p`
  ${tw`max-w-prose`}
`
