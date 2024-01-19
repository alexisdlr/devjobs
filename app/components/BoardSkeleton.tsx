import React from 'react'
import ContentLoader from 'react-content-loader'

const BoardSkeleton = ({
  isDarkMode = false,
  heading = { width: 350, height: 24 },
  row = 4,
  column = 3,
  width = 1024,
  padding = 10,
  borderRadius = 4,
  ...props
}) => {
  const list = []

  let height

  for (let i = 1; i <= row; i++) {
    const itemWidth = (width - padding * (column + 1)) / column

    const height1 = (itemWidth * 9) / 16

    const height2 = 20

    const height3 = 20

    const headingWidth = heading.width

    const headingHeight = heading.height

    const space =
      padding +
      headingHeight +
      (padding + height1) +
      (padding / 2 + height2) +
      height3 +
      padding * 6

    const yHeading = padding + space * (i - 1)

    for (let j = 0; j < column; j++) {
      const x = padding + j * (itemWidth + padding)

      const y1 = yHeading + headingHeight + (padding * 3) / 2

      const y2 = y1 + padding + height1

      const y3 = y2 + padding / 2 + height2

      list.push(
        <>
          <rect
            x={x}
            y={y1}
            rx={borderRadius}
            ry={borderRadius}
            width={itemWidth}
            height={height1}
          />
          <rect x={x} y={y2} rx={4} ry={4} width={itemWidth} height={height2} />
        
        </>
      )

      if (i === row) {
        height = y3 + height3
      }
    }
  }

  return (
    <ContentLoader
      viewBox={`0 0 ${width} ${height}`}
      width={width}
      height={height}
      foregroundColor={isDarkMode ? '#9DAEC2' : '#ecebeb'}
      backgroundColor={isDarkMode ? '#1f2937' : '#f3f3f3'}
      className={`${isDarkMode ? 'bg-gray-800' : ''}`}
      {...props}
    >
      {list}
    </ContentLoader>
  )
}


export default BoardSkeleton