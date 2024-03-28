"use strict";
n.r(t), n.d(t, {
  default: function() {
    return u
  }
});
var o = n("735250");
n("470079");
var s = n("199202"),
  i = n("63063"),
  r = n("921869"),
  a = n("514161"),
  l = n("981631"),
  d = n("689938"),
  C = n("233820");

function c() {
  return (0, o.jsx)(a.ValuePropContainer, {
    children: (0, o.jsx)(a.ValueProp, {
      text: d.default.Messages.CONNECT_CRUNCHYROLL_DISPLAY_SHOW_VALUE_PROP,
      children: (0, o.jsx)(s.default, {})
    })
  })
}

function u(e) {
  let {
    onContinue: t,
    onClose: n
  } = e, s = i.default.getArticleURL(l.HelpdeskArticles.CRUNCHYROLL_CONNECTION);
  return (0, o.jsx)(r.TwoWayLinkLanding, {
    platformType: l.PlatformTypes.CRUNCHYROLL,
    headerConnect: d.default.Messages.CONNECT_CRUNCHYROLL_LANDING_TITLE,
    body: d.default.Messages.CONNECT_CRUNCHYROLL_LANDING_BODY,
    learnMoreLink: s,
    onClose: n,
    onContinue: t,
    img: (0, o.jsx)("img", {
      src: C,
      width: 234,
      height: 152,
      alt: ""
    }),
    valueProps: (0, o.jsx)(c, {})
  })
}