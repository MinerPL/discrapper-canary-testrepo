"use strict";
n.d(t, {
  VK: function() {
    return s
  },
  qu: function() {
    return o
  }
}), n(47120), n(524437);
var i = n(44315);
n(469115);
var r = n(231338);

function s(e) {
  let {
    angle: t,
    colors: n
  } = e;
  return "linear-gradient(".concat(t, "deg, ").concat(n.map(e => {
    let {
      token: t,
      stop: n
    } = e;
    return "".concat((0, i.Lq)(t), " ").concat(n, "%")
  }).join(", "), ")")
}

function o(e, t) {
  return e === t || e === r.BR.DARK && t === r.BR.DARKER || e === r.BR.DARKER && t === r.BR.DARK || !1
}