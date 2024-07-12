var a = n(735250),
  t = n(470079),
  r = n(481060),
  l = n(246364),
  i = n(689938);
s.Z = function(e) {
  let {
className: s,
sortOrder: n,
onSortChange: o
  } = e, c = t.useMemo(() => [{
  value: l.Nw.TIMESTAMP_DESC,
  label: i.Z.Messages.GUILD_SETTINGS_MEMBER_VERIFICATION_SORT_NEWEST
},
{
  value: l.Nw.TIMESTAMP_ASC,
  label: i.Z.Messages.GUILD_SETTINGS_MEMBER_VERIFICATION_SORT_OLDEST
}
  ], []);
  return (0, a.jsx)(r.SingleSelect, {
className: s,
onChange: o,
value: n,
options: c
  });
};