"use strict";
n.d(t, {
  I5: function() {
    return s
  },
  M5: function() {
    return o
  },
  yd: function() {
    return r
  }
});
var i = n(474936);

function r(e, t) {
  return null == t || null != e && i.$e[e] >= i.$e[t]
}

function s(e, t) {
  return null != e && null != e.premiumType && r(e.premiumType, t)
}

function o(e, t) {
  return null != e && e.premiumType === t
}