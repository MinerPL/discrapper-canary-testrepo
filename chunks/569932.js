"use strict";
t.r(n), t.d(n, {
  PlayStationLinkLanding: function() {
    return T
  }
});
var i = t("735250");
t("470079");
var o = t("362470"),
  s = t("961842"),
  a = t("63063"),
  r = t("921869"),
  l = t("514161"),
  d = t("981631"),
  u = t("689938"),
  C = t("913045");

function c() {
  let e = [u.default.Messages.PS_VALUE_PROP_VOICE, u.default.Messages.PS_VALUE_PROP_GAME],
    n = [u.default.Messages.PS_VALUE_PROP_GAME];
  return (0, i.jsxs)(i.Fragment, {
    children: [(0, i.jsx)(l.ValuePropContainer, {
      children: (0, i.jsx)(l.BulletedValueProp, {
        icon: (0, i.jsx)(s.default, {}),
        title: u.default.Messages.PS5,
        bulletPoints: e
      })
    }), (0, i.jsx)(l.ValuePropContainer, {
      children: (0, i.jsx)(l.BulletedValueProp, {
        icon: (0, i.jsx)(o.default, {}),
        title: u.default.Messages.PS4,
        bulletPoints: n
      })
    })]
  })
}

function T(e) {
  let {
    platformType: n,
    onContinue: t,
    onClose: o
  } = e;
  return (0, i.jsx)(r.TwoWayLinkLanding, {
    platformType: n,
    headerConnect: u.default.Messages.CONNECT_PS_LANDING_TITLE,
    headerReconnect: u.default.Messages.RECONNECT_PS_LANDING_TITLE,
    body: u.default.Messages.CONNECT_PS_LANDING_BODY,
    onClose: o,
    onContinue: t,
    img: (0, i.jsx)("img", {
      src: C,
      width: 230,
      height: 138,
      alt: ""
    }),
    valueProps: (0, i.jsx)(c, {}),
    learnMoreLink: a.default.getArticleURL(d.HelpdeskArticles.PS_CONNECTION)
  })
}