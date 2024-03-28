"use strict";
s.r(t);
var a = s("735250");
s("470079");
var n = s("803997"),
  l = s.n(n),
  i = s("780384"),
  r = s("481060"),
  o = s("410030"),
  d = s("726542"),
  u = s("122021"),
  c = s("231757"),
  S = s("626135"),
  E = s("981631"),
  T = s("836979");
t.default = e => {
  let {
    disabled: t = !1,
    type: s,
    className: n,
    innerClassName: _,
    onConnect: f
  } = e, m = (0, o.default)(), g = d.default.get((0, u.useLegacyPlatformType)(s));
  return (0, a.jsx)(r.Tooltip, {
    text: g.name,
    children: e => {
      let {
        onMouseEnter: o,
        onMouseLeave: u
      } = e;
      return (0, a.jsx)("div", {
        className: l()(T.wrapper, n),
        children: (0, a.jsx)(r.FocusRing, {
          children: (0, a.jsx)("button", {
            onMouseEnter: o,
            onMouseLeave: u,
            className: l()(T.inner, _),
            type: "button",
            disabled: t,
            style: {
              backgroundImage: "url('".concat((0, i.isThemeDark)(m) ? g.icon.darkSVG : g.icon.lightSVG, "')")
            },
            onClick: null != f ? f : () => (function(e) {
              let t = d.default.get(e);
              (0, c.default)({
                platformType: t.type,
                location: "Friends List"
              }), S.default.track(E.AnalyticEvents.ACCOUNT_LINK_STEP, {
                previous_step: "desktop connections",
                current_step: "desktop oauth",
                platform_type: t.type
              })
            })(s),
            "aria-label": g.name
          })
        })
      })
    }
  })
}