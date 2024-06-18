"use strict";
n.d(t, {
  Bw: function() {
    return o
  },
  px: function() {
    return a
  },
  rY: function() {
    return s
  }
});
let i = {},
  r = null;

function s(e) {
  var t;
  let n = null !== (t = i[e]) && void 0 !== t ? t : 0;
  0 === n && (null == r || r(e, !0)), i[e] = n + 1
}

function o(e) {
  i[e]--, 0 === i[e] && (null == r || r(e, !1))
}

function a(e) {
  r = null != e ? e : null
}