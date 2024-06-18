"use strict";
n.d(t, {
  R: function() {
    return s
  },
  W: function() {
    return r
  }
}), n(411104);
var i = n(356659);

function r(e) {
  let t = document.createElement("canvas");
  t.width = e.width, t.height = e.height;
  let n = t.getContext("2d");
  if (null == n) throw Error("Could not create canvas context");
  return n.putImageData(new ImageData(e.data, e.width, e.height), 0, 0), t.toDataURL("image/jpeg", .9)
}
async function s(e, t) {
  let n = document.createElement("video");
  n.muted = !0, n.src = e, n.currentTime = t, await n.play(), n.pause();
  let r = i.f_ / n.videoWidth,
    s = Math.min(r, i.wD / n.videoHeight),
    o = n.videoWidth * s,
    a = n.videoHeight * s,
    l = document.createElement("canvas");
  l.width = o, l.height = a;
  let u = l.getContext("2d");
  if (null == u) throw Error("Could not create canvas context");
  return u.drawImage(n, 0, 0, n.videoWidth, n.videoHeight, 0, 0, o, a), l.toDataURL("image/jpeg", .9)
}