"use strict";
s.r(t), s.d(t, {
  default: function() {
    return i
  }
});
var a = s("735250");
s("470079");
var u = s("613828"),
  n = s("765717"),
  o = s("384666"),
  c = s("69580"),
  r = s("397394"),
  h = s("981631");

function i() {
  return (0, a.jsxs)(u.Switch, {
    children: [(0, a.jsx)(n.default, {
      path: h.Routes.OAUTH2_AUTHORIZED,
      component: r.OAuth2AuthorizedPage
    }), (0, a.jsx)(n.default, {
      path: h.Routes.OAUTH2_AUTHORIZE,
      component: c.OAuth2AuthorizePage
    }), (0, a.jsx)(n.default, {
      path: h.Routes.OAUTH2_ERROR,
      component: r.OAuth2ErrorPage
    }), (0, a.jsx)(n.default, {
      path: [h.Routes.OAUTH2_WHITELIST_ACCEPT, "/oauth2/whitelist/accept"],
      component: o.default
    })]
  })
}