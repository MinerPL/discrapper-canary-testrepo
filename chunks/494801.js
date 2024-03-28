"use strict";
n.r(t), n.d(t, {
  default: function() {
    return u
  }
});
var s = n("735250");
n("470079");
var o = n("212598"),
  i = n("981631"),
  r = n("927923"),
  a = n("689938"),
  l = n("397995"),
  d = n("848499");

function u(e) {
  let {
    isWaitingForConnection: t,
    onWaitingForConnection: n,
    expectedCallbackState: u,
    onAuthToken: c,
    onError: f,
    onClose: C
  } = e, T = t ? (0, s.jsx)("img", {
    src: d,
    width: "168",
    height: "124",
    alt: ""
  }) : (0, s.jsx)("img", {
    src: l,
    width: "152",
    height: "124",
    alt: ""
  }), _ = t ? a.default.Messages.XBOX_DETAILS_TITLE_WAITING : a.default.Messages.XBOX_DETAILS_TITLE, O = t ? a.default.Messages.XBOX_DETAILS_BODY_WAITING : a.default.Messages.XBOX_DETAILS_BODY;
  return (0, s.jsx)(o.TwoWayLinkPreConnect, {
    platformType: i.PlatformTypes.XBOX,
    isWaitingForConnection: t,
    onWaitingForConnection: n,
    expectedCallbackState: u,
    onAuthToken: c,
    onError: f,
    onClose: C,
    img: T,
    title: _,
    body: O,
    redirectDestination: r.XBOX_LINK_DEST_ORIGIN
  })
}