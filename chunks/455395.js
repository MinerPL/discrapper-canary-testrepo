t.d(n, {
  i: function() {
return o;
  }
});
var i = t(735250);
t(470079);
var a = t(481060),
  l = t(359119),
  r = t(832239),
  u = t(100932),
  s = t(689938);

function o(e) {
  let n = (0, u.x)(e);
  if (null === n)
return null;
  let {
isTier1: t,
isTier2: o
  } = n;
  return (0, i.jsxs)(i.Fragment, {
children: [
  !t && (0, i.jsx)(a.MenuItem, {
    id: 'mark-as-tier-1-inappro',
    label: s.Z.Messages.INAPPROPRIATE_CONVERSATION_MARK_AS_TIER_1,
    action: () => (0, r.KK)(e.id, l.pj.INAPPROPRIATE_CONVERSATION_TIER_1)
  }),
  !o && (0, i.jsx)(a.MenuItem, {
    id: 'mark-as-tier-2-inappro',
    label: s.Z.Messages.INAPPROPRIATE_CONVERSATION_MARK_AS_TIER_2,
    action: () => (0, r.KK)(e.id, l.pj.INAPPROPRIATE_CONVERSATION_TIER_2)
  })
]
  });
}