"use strict";
n.r(t), n.d(t, {
  default: function() {
    return u
  }
}), n("47120");
var l = n("735250");
n("470079");
var a = n("481060"),
  s = n("619915"),
  i = n("737592"),
  r = n("561788"),
  o = n("890108");

function u(e) {
  let {
    channel: t,
    onAction: n
  } = e, u = (0, s.default)(t), d = Array.from((0, s.useEmbeddedAppsWithPresence)(u).values());
  return 0 === d.length ? null : (0, l.jsxs)(a.Scroller, {
    className: o.container,
    children: [(0, l.jsx)("div", {
      className: o.popoutHeaderContainer,
      children: (0, l.jsx)(r.default, {
        channel: t
      })
    }), (0, l.jsx)("div", {
      className: o.headerDivider
    }), d.map((e, a) => {
      var s;
      return (0, l.jsx)(i.default, {
        embeddedApp: e,
        presenceActivity: null !== (s = e.presenceActivity) && void 0 !== s ? s : void 0,
        channel: t,
        onAction: n
      }, a)
    })]
  })
}