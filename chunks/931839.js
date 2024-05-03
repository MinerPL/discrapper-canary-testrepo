"use strict";
t.r(s), t.d(s, {
  Tab: function() {
    return l
  },
  default: function() {
    return u
  }
});
var a, l, i = t("735250");
t("470079");
var n = t("120356"),
  d = t.n(n),
  r = t("481060"),
  c = t("689938"),
  o = t("553401");

function u(e) {
  let {
    selectedTab: s,
    onClick: t,
    submitted: a
  } = e;
  return (0, i.jsxs)("div", {
    className: o.tabs,
    children: [(0, i.jsx)(h, {
      tab: 0,
      selectedTab: s,
      label: c.default.Messages.NOTIF_MIGRATION_INTRO_TAB,
      disabled: a,
      onClick: t
    }), (0, i.jsx)(h, {
      tab: 1,
      selectedTab: s,
      label: c.default.Messages.NOTIF_MIGRATION_CUSTOMIZE_TAB,
      disabled: a,
      onClick: t
    }), (0, i.jsx)(h, {
      tab: 2,
      selectedTab: s,
      label: c.default.Messages.NOTIF_MIGRATION_TIPS_TAB,
      disabled: !a,
      onClick: t
    })]
  })
}

function h(e) {
  let {
    tab: s,
    selectedTab: t,
    label: a,
    disabled: l,
    onClick: n
  } = e;
  return l ? (0, i.jsxs)("div", {
    className: d()(o.tab, {
      [o.current]: t === s
    }),
    children: [(0, i.jsx)("div", {
      className: o.progressBar
    }), (0, i.jsx)(r.Text, {
      variant: "text-xs/medium",
      color: t === s ? "text-brand" : "text-muted",
      children: a
    })]
  }) : (0, i.jsxs)(r.Clickable, {
    onClick: () => n(s),
    className: d()(o.tab, {
      [o.current]: t === s
    }),
    children: [(0, i.jsx)("div", {
      className: o.progressBar
    }), (0, i.jsx)(r.Text, {
      variant: "text-xs/medium",
      color: t === s ? "text-brand" : "text-muted",
      children: a
    })]
  })
}(a = l || (l = {}))[a.Intro = 0] = "Intro", a[a.Customize = 1] = "Customize", a[a.Tips = 2] = "Tips"