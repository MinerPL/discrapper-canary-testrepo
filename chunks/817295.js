"use strict";

function l() {
  return n.el("225629").then(n.bind(n, "225629"))
}
async function i(e, t, n, i, r) {
  let a = await l();
  return a.crop_gif(e, t, n, i, r)
}
n.r(t), n.d(t, {
  default: function() {
    return l
  },
  wasmCropGIF: function() {
    return i
  }
})