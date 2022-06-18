export function beforeRender(delta) {
  t1 = time(.05)
}

// 38x26
var length = 38
var width = (pixelCount/2) - length

function mirrorSymetry(index, offset) {
  index = mod(index - offset, pixelCount)
  index = triangle(index/pixelCount) * pixelCount

  return index
}

function diagonalSymetry(index) {
  if (index < length) {
    index = (index/(2*length)) * pixelCount
  } else if (index < (length + width)) {
    index = ((index - length)/(2*width) + 1/2) * pixelCount
  } else if (index < (2*length + width)) {
    index = ((width - index)/(2*length) + 3/2) * pixelCount
  } else {
    index = ((2*length - index)/(2*width) + 1) * pixelCount
  }

  return index
}

export function render(index) {
  offset = pixelCount * 2/8
  // index = mirrorSymetry(index, 0)
  index = diagonalSymetry(index)

  h = index/pixelCount
  s = 1
  v = mod(index/pixelCount - t1, 1) < 24/pixelCount
  hsv(h, s, v)
}
