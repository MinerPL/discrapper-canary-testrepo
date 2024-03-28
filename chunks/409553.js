"use strict";
n.r(t), n.d(t, {
  default: function() {
    return C
  }
});
var s = n("735250");
n("470079");
var o = n("737688"),
  i = n("632184"),
  r = n("63063"),
  a = n("921869"),
  l = n("514161"),
  d = n("981631"),
  u = n("689938"),
  c = n("932508");

function f() {
  return (0, s.jsxs)(l.ValuePropContainer, {
    children: [(0, s.jsx)(l.ValueProp, {
      text: u.default.Messages.CONNECT_XBOX_TRANSFER_VOICE_VALUE_PROP,
      children: (0, s.jsx)(i.default, {})
    }), (0, s.jsx)(l.ValueProp, {
      text: u.default.Messages.CONNECT_XBOX_DISPLAY_GAME_VALUE_PROP,
      children: (0, s.jsx)(o.default, {})
    })]
  })
}

function C(e) {
  let {
    onContinue: t,
    onClose: n
  } = e, o = r.default.getArticleURL(d.HelpdeskArticles.XBOX_CONNECTION);
  return (0, s.jsx)(a.TwoWayLinkLanding, {
    platformType: d.PlatformTypes.XBOX,
    headerConnect: u.default.Messages.CONNECT_XBOX_LANDING_TITLE,
    headerReconnect: u.default.Messages.RECONNECT_XBOX_LANDING_TITLE,
    body: u.default.Messages.CONNECT_XBOX_LANDING_BODY,
    learnMoreLink: o,
    onClose: n,
    onContinue: t,
    img: (0, s.jsx)("img", {
      src: c,
      width: 234,
      height: 152,
      alt: ""
    }),
    valueProps: (0, s.jsx)(f, {})
  })
}