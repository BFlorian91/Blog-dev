import React from 'react'

const Badge = ({ tags }) => {
  return (
    <div style={{ cursor: `pointer`, display: `inline-block` }}>
      <div style={{
        display: `flex`,
        justifyContent: `center`,
        alignItems: `center`,
        height: 26,
        background: _gettingColorFromTags(tags),
        color: `white`,
        borderRadius: 5,
        fontFamily: `Roboto, sans-serif`,
        padding: `6px`
      }}>
        {tags}
      </div>
    </div>
  )
}

const _gettingColorFromTags = (tags) => {
  // List of Tags Available ...
  const colorByLanguage = [
    {language: 'flutter', color: `#44BFF3`},
    {language: 'dart', color: `#00B4A9`},
    {language: 'javascript', color: `#ffc478`},
    {language: 'react', color: `#01D5F7`},
    {language: 'design', color: `#0E0627`}
  ]

  for(let index = 0; index < colorByLanguage.length; index++) {
    if (colorByLanguage[index].language == tags) {
      return colorByLanguage[index].color
    }
  }
  return `#017acc`
}

export default Badge