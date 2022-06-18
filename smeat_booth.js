export function beforeRender(delta) {
  t1 = time(.05)
}

var length = 38
var width = 26

// 38x26

function offset(index, pixels) {
  index = mod(index - pixels, pixelCount)
  return index
}

function mirrorSymetry(index) {
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

function diagonalSymetry2(xIn, ratio) {
  xIn = mod(xIn, 1)
  sideA = ratio/(2*ratio + 2)
  if (xIn < sideA) {
    xOut = xIn*(ratio + 1)/ratio
  } else if (xIn < 1/2) {
    xOut = xIn*(ratio + 1) - ratio/2 - 3/2
  } else if (xIn < 1/2 + sideA) {
    xOut = 1 - ((xIn - 1/2)*(ratio + 1)/ratio)
  } else {
    xOut = 1 - ((xIn - 1/2)*(ratio + 1) - ratio/2 - 3/2)
  }
  
  return xOut
}

export function render(index) {
  index = offset(index, length)
  // index = mirrorSymetry(index)
  index = diagonalSymetry2(index/pixelCount, width/length) * pixelCount

  h = index/pixelCount + t1
  s = 1
  v = mod(index/pixelCount - t1, 1) < 24/pixelCount
  hsv(h, s, 1)
}
