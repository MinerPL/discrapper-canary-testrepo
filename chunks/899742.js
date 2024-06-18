"use strict";
n.d(t, {
  Vb: function() {
    return l
  },
  Yz: function() {
    return o
  },
  by: function() {
    return a
  },
  is: function() {
    return r
  },
  lx: function() {
    return s
  }
});
var i = n(570140);

function r() {
  let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1e4;
  i.Z.dispatch({
    type: "BROWSER_HANDOFF_BEGIN",
    timeout: e
  })
}

function s(e, t) {
  i.Z.dispatch({
    type: "BROWSER_HANDOFF_END",
    handoffToken: e,
    fingerprint: t
  })
}

function o(e) {
  let {
    handoffKey: t,
    handoffToken: n,
    handoffSource: r,
    timeout: s = 1e4
  } = e;
  i.Z.dispatch({
    type: "BROWSER_HANDOFF_FROM_APP",
    handoffKey: t,
    handoffToken: n,
    handoffSource: r,
    timeout: s
  })
}

function a() {
  i.Z.dispatch({
    type: "BROWSER_HANDOFF_UNAVAILABLE"
  })
}

function l(e) {
  i.Z.dispatch({
    type: "BROWSER_HANDOFF_SET_USER",
    user: e
  })
}