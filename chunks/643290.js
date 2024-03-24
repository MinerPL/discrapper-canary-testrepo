"use strict";
a.r(t), a.d(t, {
  default: function() {
    return m
  }
}), a("222007");
var l = a("37983"),
  n = a("884691"),
  r = a("446674"),
  i = a("77078"),
  s = a("442939"),
  u = a("915639"),
  o = a("953109"),
  d = a("299039"),
  c = a("782340"),
  f = a("16194");

function m(e) {
  var t, a;
  let {
    clip: m
  } = e, [v] = (0, s.default)([null !== (t = m.applicationId) && void 0 !== t ? t : ""]), p = (0, r.useStateFromStores)([u.default], () => u.default.locale), h = n.useMemo(() => new Date(d.default.extractTimestamp(m.id)), [m.id]);
  return (0, l.jsxs)("div", {
    className: f.root,
    children: [(0, l.jsxs)("div", {
      className: f.nameSection,
      children: [(0, l.jsx)(o.default, {
        game: v
      }), (0, l.jsx)(i.Text, {
        className: f.name,
        variant: "text-md/medium",
        color: "interactive-active",
        children: null !== (a = null == v ? void 0 : v.name) && void 0 !== a ? a : m.applicationName
      })]
    }), (0, l.jsxs)("div", {
      className: f.timeContainer,
      children: [(0, l.jsxs)("div", {
        children: [(0, l.jsx)(i.FormTitle, {
          className: f.timeTitle,
          children: c.default.Messages.CLIPS_EDIT_DATE_TITLE
        }), (0, l.jsx)(i.Text, {
          variant: "text-sm/normal",
          color: "interactive-active",
          children: h.toLocaleDateString(p, {
            year: "2-digit",
            month: "2-digit",
            day: "2-digit"
          })
        })]
      }), (0, l.jsxs)("div", {
        children: [(0, l.jsx)(i.FormTitle, {
          className: f.timeTitle,
          children: c.default.Messages.CLIPS_EDIT_TIME_TITLE
        }), (0, l.jsx)(i.Text, {
          variant: "text-sm/normal",
          color: "interactive-active",
          children: h.toLocaleTimeString(p, {
            hour: "numeric",
            minute: "numeric"
          })
        })]
      })]
    })]
  })
}