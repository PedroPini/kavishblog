import React from "react"
import * as S from "./styled"
import propTypes from "prop-types"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import getThemeColor from "../../utils/getThemeColor"
const Pagination = ({ isFirst, isLast, currentPage, numPages, prevPage, nextPage }) => (
  <S.PaginationWrapper>
  {!isFirst &&
    <AniLink cover direction="left" bg={getThemeColor()} duration={0.6} to="{prevPage}">← previous page</AniLink>
  }
  <p>
    current page {currentPage} of {numPages}
  </p>
  {!isLast &&
    <AniLink cover direction="right" bg={getThemeColor()} duration={0.6} to="{nextPage}">next page →</AniLink>
  }

  </S.PaginationWrapper>
)

Pagination.propTypes = {
  isFirst: propTypes.bool.isRequired,
  isLast: propTypes.bool.isRequired,
  currentPage: propTypes.number.isRequired,
  numPages: propTypes.number.isRequired,
  prevPage: propTypes.string,
  nextPage: propTypes.string

}

export default Pagination