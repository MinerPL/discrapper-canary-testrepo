"use strict";
n.r(t), n("47120");
var a = n("735250"),
  s = n("470079"),
  l = n("803997"),
  i = n.n(l),
  r = n("442837"),
  o = n("433517"),
  u = n("481060"),
  d = n("304761"),
  c = n("865427"),
  f = n("465670"),
  E = n("820254"),
  h = n("689938"),
  _ = n("101111");
let C = "isHideDevBanner";
t.default = () => {
  var e;
  let [t, n] = (0, s.useState)((null === (e = o.Storage.get(C, "false")) || void 0 === e ? void 0 : e.toString()) === "true"), l = (0, r.useStateFromStores)([d.default], () => {
    var e;
    return (0, c.probablyHasBuildOverride)() ? null === (e = d.default.getCurrentBuildOverride().overrides) || void 0 === e ? void 0 : e.discord_web : null
  });
  if (t) return null;
  let m = () => {
      o.Storage.set(C, !0), n(!0)
    },
    S = () => (0, a.jsx)(u.Clickable, {
      onClick: m,
      className: _.closeButton,
      "aria-label": h.default.Messages.DISMISS,
      children: (0, a.jsx)(f.default, {
        className: _.closeIcon
      })
    });
  return null != l ? (0, a.jsxs)("div", {
    className: i()(_.devBanner, _.buildOverride),
    children: [(0, a.jsx)(E.default, {
      className: _.icon
    }), h.default.Messages.BUILD_OVERRIDE, (0, a.jsx)(S, {})]
  }) : "staging" === window.GLOBAL_ENV.RELEASE_CHANNEL ? (0, a.jsxs)("div", {
    className: i()(_.devBanner, _.staging),
    children: [(0, a.jsx)(E.default, {
      className: _.icon
    }), h.default.Messages.DEV_NOTICE_STAGING.format({
      buildNumber: "279519"
    }), (0, a.jsx)(S, {})]
  }) : null
}