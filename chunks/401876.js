l.d(n, {
  Z: function() {
return c;
  }
});
var s = l(735250),
  a = l(470079),
  t = l(481060),
  i = l(377171),
  r = l(854698),
  o = l(689938),
  d = l(694738);

function c(e) {
  let {
startDate: n,
recurrenceRule: l,
onRecurrenceChange: c
  } = e, u = a.useMemo(() => (0, r.zi)(n, l), [
l,
n
  ]), E = (0, r.P8)(n), _ = e => e.toString(), I = (0, s.jsxs)('div', {
className: d.title,
children: [
  o.Z.Messages.CREATE_EVENT_RECUR_LABEL,
  (0, s.jsx)(t.TextBadge, {
    text: o.Z.Messages.NEW,
    color: i.Z.BG_BRAND
  })
]
  });
  return (0, s.jsx)(t.FormItem, {
title: I,
required: !0,
children: (0, s.jsx)(t.Select, {
  placeholder: 'gaming',
  options: E,
  select: c,
  serialize: _,
  isSelected: e => null != u && _(e) === _(u)
})
  });
}