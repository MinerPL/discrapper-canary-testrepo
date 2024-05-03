"use strict";
n.r(t), n.d(t, {
  default: function() {
    return d
  }
});
var i = n("735250");
n("470079");
var r = n("442837"),
  a = n("231757"),
  s = n("553795"),
  o = n("915863"),
  l = n("689938"),
  u = n("346452");

function d(e) {
  let {
    platform: t,
    color: n,
    look: d,
    onAction: _
  } = e;
  return (0, r.useStateFromStores)([s.default], () => s.default.getAccounts().some(e => e.type === t.type)) ? null : (0, i.jsx)(o.default, {
    onClick: () => {
      null == _ || _(), (0, a.default)({
        platformType: t.type,
        location: "Activity Action"
      })
    },
    color: n,
    look: d,
    fullWidth: !0,
    children: (0, i.jsxs)("div", {
      className: u.flex,
      children: [(0, i.jsx)("img", {
        alt: "",
        className: u.platformIcon,
        src: t.icon.whiteSVG
      }), l.default.Messages.USER_ACTIVITY_CONNECT_PLATFORM.format({
        platform: t.name
      })]
    })
  }, "connect-platform-activity")
}