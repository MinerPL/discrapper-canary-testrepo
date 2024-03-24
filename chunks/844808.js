"use strict";
n.r(t), n.d(t, {
  default: function() {
    return d
  }
});
var l = n("37983"),
  a = n("884691"),
  r = n("77078"),
  s = n("20606"),
  i = n("956089"),
  u = n("822516"),
  o = n("782340"),
  c = n("850793");

function d(e) {
  let {
    startDate: t,
    recurrenceRule: n,
    onRecurrenceChange: d
  } = e, f = a.useMemo(() => (0, u.recurrenceRuleToOption)(t, n), [n, t]), E = (0, u.getRecurrenceOptions)(t), h = e => e.toString(), g = (0, l.jsxs)("div", {
    className: c.title,
    children: [o.default.Messages.CREATE_EVENT_RECUR_LABEL, (0, l.jsx)(i.TextBadge, {
      text: o.default.Messages.NEW,
      color: s.default.BG_BRAND
    })]
  });
  return (0, l.jsx)(r.FormItem, {
    title: g,
    required: !0,
    children: (0, l.jsx)(r.Select, {
      placeholder: "gaming",
      options: E,
      select: d,
      serialize: h,
      isSelected: e => null != f && h(e) === h(f)
    })
  })
}