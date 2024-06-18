"use strict";
n.d(t, {
  Vb: function() {
    return o
  },
  Yk: function() {
    return r
  },
  oU: function() {
    return i
  },
  zP: function() {
    return s
  }
});
let i = (0, n(652874).Z)(e => ({
  inDndMode: !1
}));

function r(e) {
  i.setState({
    inDndMode: e
  })
}

function s() {
  return i(e => e.inDndMode)
}

function o() {
  return i.getState().inDndMode
}