t.d(n, {
  Z: function() {
return _;
  }
});
var l = t(735250),
  r = t(470079),
  i = t(481060),
  a = t(471445),
  o = t(592125),
  s = t(430824),
  c = t(970184),
  u = t(811654),
  d = t(344991),
  m = t(981631),
  f = t(56816);

function _(e) {
  var n;
  let {
channelTypes: t
  } = e, _ = (0, c.CJ)(), p = null == _ ? void 0 : null === (n = _.message) || void 0 === n ? void 0 : n.getChannelId(), v = o.Z.getChannel(p), C = s.Z.getGuild(null == v ? void 0 : v.getGuildId()), h = r.useMemo(() => (0, u.tx)(e.defaultValues, null == C ? void 0 : C.id, t), [
e.defaultValues,
C,
t
  ]);
  return (0, l.jsx)(d.ZP, {
selectActionComponent: e,
queryOptions: e => (0, u.af)(e, p, t),
renderIcon: (e, n) => {
  let t = o.Z.getChannel(null == e ? void 0 : e.value);
  if (null == t)
    return null;
  let r = t.type === m.d4z.GUILD_CATEGORY ? i.FolderIcon : (0, a.KS)(t);
  return null != r ? (0, l.jsx)(r, {
    size: 'custom',
    color: 'currentColor',
    width: n,
    height: n
  }) : null;
},
renderOptionLabel: e => (0, l.jsx)('span', {
  className: f.label,
  children: e.label
}),
defaultValues: h
  });
}