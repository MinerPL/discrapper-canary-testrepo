"use strict";
n.d(t, {
  EY: function() {
    return o
  },
  Vh: function() {
    return s
  },
  Yh: function() {
    return r
  }
});
var i = n(118139);
let r = 4;

function s(e) {
  var t, n;
  if (null == e) return;
  let {
    thumbnail: i,
    image: r
  } = e;
  return null != i ? null !== (t = i.proxy_url) && void 0 !== t ? t : i.url : null != r ? null !== (n = r.proxy_url) && void 0 !== n ? n : r.url : void 0
}

function o(e) {
  if (null == e) return;
  let {
    url: t,
    proxy_url: n
  } = e;
  return null != t && null != n ? (0, i.cb)(t) ? "".concat(n, "?format=jpeg") : n : t
}