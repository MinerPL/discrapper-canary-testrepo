"use strict";
a.r(t), a.d(t, {
  default: function() {
    return f
  }
}), a("47120");
var l = a("735250"),
  n = a("470079"),
  i = a("442837"),
  r = a("481060"),
  s = a("835473"),
  u = a("706454"),
  o = a("366695"),
  d = a("709054"),
  c = a("689938"),
  m = a("942461");

function f(e) {
  var t, a;
  let {
    clip: f
  } = e, [v] = (0, s.default)([null !== (t = f.applicationId) && void 0 !== t ? t : ""]), p = (0, i.useStateFromStores)([u.default], () => u.default.locale), h = n.useMemo(() => new Date(d.default.extractTimestamp(f.id)), [f.id]);
  return (0, l.jsxs)("div", {
    className: m.root,
    children: [(0, l.jsxs)("div", {
      className: m.nameSection,
      children: [(0, l.jsx)(o.default, {
        game: v
      }), (0, l.jsx)(r.Text, {
        className: m.name,
        variant: "text-md/medium",
        color: "interactive-active",
        children: null !== (a = null == v ? void 0 : v.name) && void 0 !== a ? a : f.applicationName
      })]
    }), (0, l.jsxs)("div", {
      className: m.timeContainer,
      children: [(0, l.jsxs)("div", {
        children: [(0, l.jsx)(r.FormTitle, {
          className: m.timeTitle,
          children: c.default.Messages.CLIPS_EDIT_DATE_TITLE
        }), (0, l.jsx)(r.Text, {
          variant: "text-sm/normal",
          color: "interactive-active",
          children: h.toLocaleDateString(p, {
            year: "2-digit",
            month: "2-digit",
            day: "2-digit"
          })
        })]
      }), (0, l.jsxs)("div", {
        children: [(0, l.jsx)(r.FormTitle, {
          className: m.timeTitle,
          children: c.default.Messages.CLIPS_EDIT_TIME_TITLE
        }), (0, l.jsx)(r.Text, {
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