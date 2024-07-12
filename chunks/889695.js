t.d(n, {
  Z: function() {
return N;
  }
}), t(47120), t(724458), t(653041);
var i = t(735250),
  r = t(470079),
  o = t(658722),
  l = t.n(o),
  u = t(392711),
  s = t.n(u),
  a = t(149765),
  c = t(442837),
  d = t(481060),
  _ = t(271383),
  f = t(430824),
  E = t(594174),
  I = t(700785),
  g = t(709054),
  p = t(962086),
  S = t(160404),
  C = t(225675),
  m = t(981631),
  T = t(689938),
  h = t(821492);

function A(e) {
  var n;
  return (0, i.jsx)('span', {
style: {
  color: null !== (n = e.colorString) && void 0 !== n ? n : 'currentColor'
},
children: e.name
  });
}

function N(e) {
  let {
guildId: n
  } = e, t = (0, c.e7)([E.default], () => E.default.getCurrentUser()), o = (0, c.e7)([f.Z], () => f.Z.getGuild(n)), u = (0, c.e7)([f.Z], () => f.Z.getRoles(n)), {
impersonateType: N,
viewingRoles: v
  } = (0, c.cj)([S.Z], () => ({
impersonateType: S.Z.getImpersonateType(n),
viewingRoles: S.Z.getViewingRoles(n)
  })), R = N === C.z.SERVER_SHOP, L = (0, c.e7)([_.ZP], () => null != t ? _.ZP.getTrueMember(n, t.id) : null), [b, O] = (0, d.useMultiSelect)(null == v ? [] : g.default.keys(v)), M = r.useRef(o);
  r.useEffect(() => {
let e = {},
  n = M.current;
if (null != n && null != N) {
  for (let n of b) {
    let t = u[n];
    null != t && (e[n] = t);
  }
  (0, p.Zm)(n.id, {
    type: N,
    roles: e
  });
}
  }, [
b,
N,
u
  ]);
  let Z = null != o && null != t && null != L ? s()(u).filter(e => -1 !== L.roles.indexOf(e.id)).sortBy(e => -e.position).first() : void 0,
D = r.useMemo(() => null != o && null != t ? Object.values(u).filter(e => e.id !== o.id).filter(e => {
  var n;
  return !R || (null === (n = e.tags) || void 0 === n ? void 0 : n.subscription_listing_id) != null;
}).filter(e => (null == Z ? void 0 : Z.id) === e.id || I.r6(o, t.id, Z, e)) : [], [
  o,
  t,
  R,
  Z,
  u
]);
  if (null == t || null == o || null == L)
return null;
  let U = {};
  return (L.roles.forEach(e => {
let n = u[e];
null != n && (U[n.id] = n);
  }), a.e$(I.I0({
forceRoles: U,
context: o
  }), a.$e(m.Plq.MANAGE_GUILD, m.Plq.MANAGE_ROLES)) || o.isOwner(t.id)) ? (0, i.jsx)('div', {
className: h.container,
children: (0, i.jsx)(d.Combobox, {
  placeholder: T.Z.Messages.SEARCH_ROLES,
  value: b,
  onChange: O,
  autoFocus: !0,
  children: e => {
    let n = D.reduce((n, t) => (l()(e.toLowerCase(), t.name.toLowerCase()) && n.push((0, i.jsxs)(d.ComboboxItem, {
        value: t.id,
        children: [
          (0, i.jsx)(d.ComboboxItem.Label, {
            children: A(t)
          }),
          (0, i.jsx)(d.ComboboxItem.Checkbox, {})
        ]
      }, t.id)), n), []),
      t = u[o.getEveryoneRoleId()];
    return null != t && n.push((0, i.jsxs)(d.ComboboxItem, {
      value: t.id,
      disabled: !0,
      children: [
        (0, i.jsx)(d.ComboboxItem.Label, {
          children: A(t)
        }),
        (0, i.jsx)(d.ComboboxItem.Checkbox, {
          checked: !0
        })
      ]
    }, t.id)), n;
  }
})
  }) : (0, i.jsx)(d.Text, {
variant: 'text-md/medium',
children: T.Z.Messages.VIEW_AS_ROLES_NO_ACCESS
  });
}