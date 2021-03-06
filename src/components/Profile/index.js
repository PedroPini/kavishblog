import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Avatar from "../Avatar"
import * as S from "./styled"
import getThemeColor from "../../utils/getThemeColor"
const Profile = () => {
  const {
    site: {
      siteMetadata: {title, position, description },
    },
  } = useStaticQuery(graphql`
    query MySiteMetadata {
      site {
        siteMetadata {
          author
          description
          title
          position
          }
        }
      }
    `)

    return (
      <S.ProfileWrapper>
          <S.ProfileLink cover direction="left" bg={getThemeColor()} duration={0.6} to="/">
            <Avatar />
            <S.ProfileAuthor>
              {title}
                <S.ProfilePosition>{position}</S.ProfilePosition>
            </S.ProfileAuthor>
            <S.ProfileDescription>{description}</S.ProfileDescription>
          </S.ProfileLink>
      </S.ProfileWrapper>
    )
}

export default Profile
