import React from "react"

var scale = (size, maxSize) => {
    var scale = maxSize[0] / size[0]
    return scale * size[1] > maxSize[1] ? maxSize[1] / size[1]
                                        : scale
}

export var AutoScaleView = (props) =>
    <div {...props}
      style={{
          zoom: scale(
              [560, 315],
              [document.documentElement.width, document.documentElement.height]
          )
      }} />
