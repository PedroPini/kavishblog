import React from "react"
import PostItem from "../PostItem"
const Hit = ({ hit }) => (
  <PostItem
    slug={hit.fields.slug}
    background={hit.background}
    title={hit.title}
    description={hit.description}
    date={hit.date}
    category={hit.category}
  />

)

export default Hit
