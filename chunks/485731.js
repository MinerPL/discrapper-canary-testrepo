"use strict";
n.d(t, {
  J1: function() {
    return r
  },
  dE: function() {
    return o
  },
  hP: function() {
    return s
  },
  j$: function() {
    return i
  },
  pM: function() {
    return a
  }
});
let i = (0, n(652874).Z)(() => ({
  hqStreamingFrameAnimationPlayed: !1,
  hqStreamingUnlockAnimationPlayed: !1,
  hqStreamingPopoutDismissed: !1,
  hqStreamingIsEnabled: !1,
  hqStreamingDidEnable: !1
}));

function r(e) {
  let {
    hqStreamingDidEnable: t
  } = i.getState();
  i.setState({
    hqStreamingIsEnabled: e,
    hqStreamingDidEnable: e || t
  })
}

function s(e) {
  i.setState({
    hqStreamingFrameAnimationPlayed: e
  })
}

function o(e) {
  i.setState({
    hqStreamingUnlockAnimationPlayed: e
  })
}

function a(e) {
  i.setState({
    hqStreamingPopoutDismissed: e
  })
}