t.d(n, {
  Z: function() {
return x;
  },
  q: function() {
return _;
  }
}), t(733860);
var r = t(735250),
  i = t(470079),
  o = t(120356),
  l = t.n(o),
  a = t(442837),
  d = t(481060),
  c = t(565138),
  s = t(993413),
  u = t(430824),
  m = t(771845),
  h = t(823379),
  f = t(778825),
  g = t(689938),
  v = t(124618);

function x(e) {
  let {
guildId: n,
className: t,
globalOption: i,
hideDivider: o = !1,
onChange: a,
renderOptionSuffix: d
  } = e;
  return (0, r.jsx)(s.Z, {
className: l()(v.section, t),
title: g.Z.Messages.PROFILE_CUSTOMIZATION_GUILD_SELECT_TITLE,
hideDivider: o,
forcedDivider: !0,
children: (0, r.jsx)(_, {
  guildId: n,
  onChange: a,
  renderOptionSuffix: d,
  globalOption: i
})
  });
}

function _(e) {
  let {
guildId: n,
globalOption: t,
onChange: o,
renderOptionSuffix: l
  } = e, s = (0, a.e7)([f.Z], () => f.Z.showNotice()), x = (0, a.e7)([m.ZP], () => m.ZP.getFlattenedGuildIds()), _ = (0, a.e7)([u.Z], () => u.Z.getGuilds()), p = i.useMemo(() => {
let e = x.map(e => {
  let n = _[e];
  return null == n ? null : {
    label: n.name,
    value: n.id
  };
}).filter(h.lm);
return null != t && e.unshift(t), e;
  }, [
x,
_,
t
  ]), C = i.useCallback(e => {
let n = (null == e ? void 0 : e.label) === (null == t ? void 0 : t.label) && (null == e ? void 0 : e.value) === (null == t ? void 0 : t.value);
return null == e || '' === e.value || n ? null : (0, r.jsx)(c.Z, {
  className: v.guildSelectOptionIcon,
  guild: _[e.value],
  size: c.Z.Sizes.SMOL,
  active: !0
});
  }, [
_,
t
  ]);
  return (0, r.jsx)(d.SearchableSelect, {
isDisabled: s,
onChange: e => {
  if ('' === e || e === (null == t ? void 0 : t.value)) {
    o(null);
    return;
  }
  let n = _[e];
  null != n && o(n);
},
value: n,
options: p,
renderOptionPrefix: C,
renderOptionSuffix: l,
placeholder: g.Z.Messages.PROFILE_CUSTOMIZATION_GUILD_SELECT_PLACEHOLDER
  });
}