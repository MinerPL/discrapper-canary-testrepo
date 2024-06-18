"use strict";
n.d(t, {
  Z: function() {
    return c
  }
}), n(47120), n(653041);
var i = n(735250);
n(470079);
var r = n(442837),
  s = n(481060),
  o = n(857192),
  a = n(517100),
  l = n(594174),
  u = n(153850),
  _ = n(231338),
  d = n(75798);

function c() {
  var e;
  let t = (0, r.e7)([o.default], () => o.default.isIdleStatusIndicatorEnabled),
    n = (0, r.e7)([l.default], () => {
      var e, t;
      return null !== (t = null === (e = l.default.getCurrentUser()) || void 0 === e ? void 0 : e.isStaff()) && void 0 !== t && t
    }),
    [c, E] = (0, r.Wu)([a.Z], () => [a.Z.isIdle(), a.Z.isAFK()]),
    I = [];
  return !c && !E && I.push("ACTIVE"), c && I.push("IDLE"), E && I.push("AFK"), n && t ? (0, i.jsx)(u.ZP, {
    children: (0, i.jsxs)("div", {
      className: d.container,
      children: [(0, i.jsxs)("div", {
        className: d.status,
        children: [(0, i.jsx)(s.Status, {
          status: I.includes("ACTIVE") ? _.Sk.ONLINE : _.Sk.IDLE,
          className: d.statusIndicator
        }), (0, i.jsx)(s.Text, {
          variant: "text-md/normal",
          children: "IDLE STATUS:"
        }), (0, i.jsx)("div", {
          className: d.statusText,
          children: (0, i.jsx)(s.Text, {
            variant: "text-md/bold",
            children: I.join(" + ")
          })
        })]
      }), c && (0, i.jsxs)(s.Text, {
        variant: "text-md/normal",
        children: ["Idle since:", " ", new Date(null !== (e = a.Z.getIdleSince()) && void 0 !== e ? e : 0).toLocaleDateString(void 0, {
          year: "numeric",
          day: "numeric",
          month: "numeric",
          hour: "numeric",
          minute: "numeric",
          second: "numeric"
        })]
      })]
    })
  }) : null
}