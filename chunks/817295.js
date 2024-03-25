"use strict";

function r() {
  return n.el("225629").then(n.bind(n, "225629"))
}
async function i(e, t, n, i, a) {
  let l = await r();
  return l.crop_gif(e, t, n, i, a)
}
n.r(t), n.d(t, {
  default: function() {
    return r
  },
  wasmCropGIF: function() {
    return i
  }
})