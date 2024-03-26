"use strict";
n.r(t), n.d(t, {
  default: function() {
    return S
  }
}), n("222007");
var a = n("37983"),
  s = n("884691"),
  l = n("414456"),
  i = n.n(l),
  r = n("446674"),
  o = n("95410"),
  u = n("77078"),
  d = n("489740"),
  c = n("355025"),
  f = n("945330"),
  E = n("50647"),
  h = n("782340"),
  _ = n("531639");
let C = "isHideDevBanner";
var S = () => {
  var e;
  let [t, n] = (0, s.useState)((null === (e = o.Storage.get(C, "false")) || void 0 === e ? void 0 : e.toString()) === "true"), l = (0, r.useStateFromStores)([d.default], () => {
    var e;
    return (0, c.probablyHasBuildOverride)() ? null === (e = d.default.getCurrentBuildOverride().overrides) || void 0 === e ? void 0 : e.discord_web : null
  });
  if (t) return null;
  let S = () => {
      o.Storage.set(C, !0), n(!0)
    },
    I = () => (0, a.jsx)(u.Clickable, {
      onClick: S,
      className: _.closeButton,
      "aria-label": h.default.Messages.DISMISS,
      children: (0, a.jsx)(f.default, {
        className: _.closeIcon
      })
    });
  if (null != l) return (0, a.jsxs)("div", {
    className: i(_.devBanner, _.buildOverride),
    children: [(0, a.jsx)(E.default, {
      className: _.icon
    }), h.default.Messages.BUILD_OVERRIDE, (0, a.jsx)(I, {})]
  });
  let m = window.GLOBAL_ENV.RELEASE_CHANNEL;
  return "staging" === m ? (0, a.jsxs)("div", {
    className: i(_.devBanner, _.staging),
    children: [(0, a.jsx)(E.default, {
      className: _.icon
    }), h.default.Messages.DEV_NOTICE_STAGING.format({
      buildNumber: "278528"
    }), (0, a.jsx)(I, {})]
  }) : null
}