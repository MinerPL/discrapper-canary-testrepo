l.d(n, {
  Z: function() {
return p;
  }
});
var t = l(735250),
  r = l(470079),
  i = l(481060),
  a = l(471445),
  u = l(592125),
  s = l(430824),
  o = l(970184),
  c = l(811654),
  d = l(344991),
  m = l(981631),
  f = l(296555);

function p(e) {
  var n;
  let {
channelTypes: l
  } = e, p = (0, o.CJ)(), E = null == p ? void 0 : null === (n = p.message) || void 0 === n ? void 0 : n.getChannelId(), v = u.Z.getChannel(E), C = s.Z.getGuild(null == v ? void 0 : v.getGuildId()), h = r.useMemo(() => (0, c.tx)(e.defaultValues, null == C ? void 0 : C.id, l), [
e.defaultValues,
C,
l
  ]);
  return (0, t.jsx)(d.ZP, {
selectActionComponent: e,
queryOptions: e => (0, c.af)(e, E, l),
renderIcon: (e, n) => {
  let l = u.Z.getChannel(null == e ? void 0 : e.value);
  if (null == l)
    return null;
  let r = l.type === m.d4z.GUILD_CATEGORY ? i.FolderIcon : (0, a.KS)(l);
  return null != r ? (0, t.jsx)(r, {
    size: 'custom',
    color: 'currentColor',
    width: n,
    height: n
  }) : null;
},
renderOptionLabel: e => (0, t.jsx)('span', {
  className: f.label,
  children: e.label
}),
defaultValues: h
  });
}