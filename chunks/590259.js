"use strict";
s.r(t), s.d(t, {
  createLayer: function() {
    return i
  },
  exportConfig: function() {
    return o
  },
  patchAndroid: function() {
    return r
  }
});
var a = s("392711"),
  n = s("423891"),
  l = s.n(n);
let i = async (e, t, s) => {
  var a;
  return {
    src: e,
    loop: !1,
    loopDelay: 0,
    duration: (a = await t.arrayBuffer(), l().decode(a).frames.length * 80),
    start: 0,
    position: {
      x: 0,
      y: 0
    },
    zIndex: 100 + s,
    height: 880,
    width: 450,
    name: t.name
  }
}, r = e => {
  let t = (0, a.cloneDeep)(e),
    s = Math.floor(101 * Math.random()) + 150;
  return t.forEach((e, t) => {
    0 !== t && (e.start += s)
  }), t
}, o = function(e) {
  let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "json",
    s = "\n[";
  return "json" === t && e.forEach((e, t) => {
    s += '\n              {\n                  "src": "file-'.concat(t, '.png",\n                  "start": ').concat(e.start, ',\n                  "duration": ').concat(e.duration, ',\n                  "height": ').concat(e.height, ',\n                  "width": ').concat(e.width, ',\n                  "zIndex": ').concat(e.zIndex, ',\n                  "loop": ').concat(e.loop, ",\n              },\n          ")
  }), "proto" === t && e.forEach((e, t) => {
    s += "\n              ProfileEffectKeyFrame(\n                  src='file-".concat(t, ".png',\n                  loop=").concat(e.loop, ",\n                  width=").concat(e.width, ",\n                  height=").concat(e.height, ",\n                  duration=").concat(e.duration, ",\n                  start=").concat(e.start, ",\n                  loop_delay=0,\n                  position=Point(x=0, y=0),\n                  z_index=").concat(e.zIndex, ",\n              ),\n          ")
  }), s += "\n]"
}