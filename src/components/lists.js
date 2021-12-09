import tw, { styled } from "twin.macro"

// A list without bullets or numbering
export const List = styled.ul`
  font-size: 1.125rem;
`

export const BulletedList = tw.ul`
  list-disc list-inside pl-4 -mt-2 text-lg
`

export const NumberedList = tw.ol`
  list-decimal list-inside pl-4 -mt-2 text-lg
`
