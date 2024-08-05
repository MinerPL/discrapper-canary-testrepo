n.d(t, {
  J1: function() {
return s;
  },
  cD: function() {
return c;
  },
  hP: function() {
return o;
  },
  j$: function() {
return a;
  },
  pM: function() {
return l;
  },
  qA: function() {
return u;
  }
});
var r = n(652874),
  i = n(731965);
let a = (0, r.Z)(() => ({
  hqStreamingFrameAnimationPlayed: !1,
  hqStreamingPopoutDismissed: !1,
  hqStreamingOptInPopoutDismissed: !1,
  hqStreamingIsEnabled: !1,
  hqStreamingDidEnable: !1,
  hqStreamingOptOutPopoutShouldShow: !1
}));

function s(e) {
  let {
hqStreamingDidEnable: t
  } = a.getState();
  (0, i.j)(() => {
a.setState({
  hqStreamingIsEnabled: e,
  hqStreamingDidEnable: e || t
});
  });
}

function o(e) {
  (0, i.j)(() => a.setState({
hqStreamingFrameAnimationPlayed: e
  }));
}

function l(e) {
  (0, i.j)(() => a.setState({
hqStreamingPopoutDismissed: e
  }));
}

function u(e) {
  (0, i.j)(() => a.setState({
hqStreamingOptInPopoutDismissed: e
  }));
}

function c(e) {
  (0, i.j)(() => a.setState({
hqStreamingOptOutPopoutShouldShow: e
  }));
}