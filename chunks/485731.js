n.d(t, {
  J1: function() {
return i;
  },
  cD: function() {
return l;
  },
  hP: function() {
return a;
  },
  j$: function() {
return r;
  },
  pM: function() {
return o;
  },
  qA: function() {
return s;
  }
});
let r = (0, n(652874).Z)(() => ({
  hqStreamingFrameAnimationPlayed: !1,
  hqStreamingPopoutDismissed: !1,
  hqStreamingOptInPopoutDismissed: !1,
  hqStreamingIsEnabled: !1,
  hqStreamingDidEnable: !1,
  hqStreamingOptOutPopoutShouldShow: !1
}));

function i(e) {
  let {
hqStreamingDidEnable: t
  } = r.getState();
  r.setState({
hqStreamingIsEnabled: e,
hqStreamingDidEnable: e || t
  });
}

function a(e) {
  r.setState({
hqStreamingFrameAnimationPlayed: e
  });
}

function o(e) {
  r.setState({
hqStreamingPopoutDismissed: e
  });
}

function s(e) {
  r.setState({
hqStreamingOptInPopoutDismissed: e
  });
}

function l(e) {
  r.setState({
hqStreamingOptOutPopoutShouldShow: e
  });
}