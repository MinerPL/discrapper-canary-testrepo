"use strict";

function r(e) {
  return Object.entries(e).filter(function(e) {
    e[0];
    var t = e[1];
    return t || !1 === t
  }).map(function(e) {
    var t = e[0],
      n = e[1];
    return encodeURIComponent(t) + "=" + encodeURIComponent(n)
  }).join("&")
}

function a(e) {
  var t = e && e.ownerDocument || document,
    n = t.defaultView || t.parentWindow || window;
  return {
    document: t,
    window: n
  }
}

function i(e) {
  return e || document.head
}
n.r(t), n.d(t, {
  generateQuery: function() {
    return r
  },
  getFrame: function() {
    return a
  },
  getMountElement: function() {
    return i
  }
})