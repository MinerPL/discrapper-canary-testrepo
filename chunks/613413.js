"use strict";
n.d(t, {
  Z: function() {
    return f
  }
}), n(47120);
var i = n(735250),
  r = n(470079),
  s = n(120356),
  o = n.n(s),
  a = n(442837),
  l = n(481060),
  u = n(906467),
  _ = n(857192),
  d = n(441674),
  c = n(696202),
  E = n(835225),
  I = n(117795),
  T = n(153850),
  h = n(565384),
  S = n(169703);

function f() {
  let {
    debugTrackedData: e,
    impressions: t
  } = (0, h.Xo)(e => ({
    debugTrackedData: e.debugTrackedData,
    impressions: e.impressions
  })), n = (0, a.e7)([_.default], () => _.default.isAnalyticsDebuggerEnabled), s = (0, a.e7)([u.Z], () => u.Z.isDeveloper), [f, N] = r.useState(!1), {
    name: A,
    ...m
  } = null != e ? e : {}, O = null != A;
  return s && n ? (0, i.jsx)(T.ZP, {
    children: (0, i.jsxs)("div", {
      className: o()(S.container, {
        [S.containerMinimized]: f,
        [S.notTracked]: !O
      }),
      children: [(0, i.jsx)(l.Clickable, {
        className: S.minimizeButton,
        onClick: () => {
          N(!f)
        },
        children: f ? (0, i.jsx)(E.Z, {}) : (0, i.jsx)(I.Z, {})
      }), (0, i.jsxs)("div", {
        className: o()(S.content, {
          [S.contentMinimized]: f
        }),
        children: [(0, i.jsxs)(l.Text, {
          className: o()(S.label, {
            [S.notTracked]: !O
          }),
          variant: "text-xxs/normal",
          children: [O ? (0, i.jsx)(d.Z, {
            className: S.iconTracked
          }) : (0, i.jsx)(c.Z, {
            className: S.iconNotTracked
          }), null != A ? A : "(untracked)"]
        }), (0, i.jsx)("div", {
          className: S.current,
          children: JSON.stringify(m, void 0, 2)
        }), (0, i.jsx)(l.Text, {
          className: o()(S.label, {
            [S.notTracked]: !O
          }),
          variant: "text-xxs/normal",
          children: "impressions stack"
        }), (0, i.jsx)("div", {
          className: S.stack,
          children: JSON.stringify(t, void 0, 2)
        })]
      })]
    })
  }) : null
}