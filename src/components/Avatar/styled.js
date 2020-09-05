import styled from "styled-components"
import media from "styled-media-query"
import Img from "gatsby-image"

export const AvatarWrapper = styled(Img)`
  border-radius:50%;
  heigth: 3.75rem;
  margin: auto;
  width: 3.75rem;

  ${media.lessThan("large")`
    heigth: 1.875rem;
    width: 1.875rem;
  `}
`
