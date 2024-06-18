"use strict";
n.d(t, {
  Z: function() {
    return _
  }
});
var i = n(735250);
n(470079);
var r = n(442837),
  s = n(231757),
  o = n(553795),
  a = n(915863),
  l = n(689938),
  u = n(605690);

function _(e) {
  let {
    platform: t,
    color: n,
    look: _,
    onAction: d
  } = e;
  return (0, r.e7)([o.Z], () => o.Z.getAccounts().some(e => e.type === t.type)) ? null : (0, i.jsx)(a.Z, {
    onClick: () => {
      null == d || d(), (0, s.Z)({
        platformType: t.type,
        location: "Activity Action"
      })
    },
    color: n,
    look: _,
    fullWidth: !0,
    children: (0, i.jsxs)("div", {
      className: u.flex,
      children: [(0, i.jsx)("img", {
        alt: "",
        className: u.platformIcon,
        src: t.icon.whiteSVG
      }), l.Z.Messages.USER_ACTIVITY_CONNECT_PLATFORM.format({
        platform: t.name
      })]
    })
  }, "connect-platform-activity")
}