"use strict";
n.r(t), n.d(t, {
  default: function() {
    return c
  }
});
var a = n("735250"),
  s = n("470079"),
  l = n("481060"),
  i = n("377171"),
  r = n("26290"),
  d = n("854698"),
  u = n("689938"),
  o = n("718149");

function c(e) {
  let {
    startDate: t,
    recurrenceRule: n,
    onRecurrenceChange: c
  } = e, E = s.useMemo(() => (0, d.recurrenceRuleToOption)(t, n), [n, t]), f = (0, d.getRecurrenceOptions)(t), h = e => e.toString(), _ = (0, a.jsxs)("div", {
    className: o.title,
    children: [u.default.Messages.CREATE_EVENT_RECUR_LABEL, (0, a.jsx)(r.TextBadge, {
      text: u.default.Messages.NEW,
      color: i.default.BG_BRAND
    })]
  });
  return (0, a.jsx)(l.FormItem, {
    title: _,
    required: !0,
    children: (0, a.jsx)(l.Select, {
      placeholder: "gaming",
      options: f,
      select: c,
      serialize: h,
      isSelected: e => null != E && h(e) === h(E)
    })
  })
}