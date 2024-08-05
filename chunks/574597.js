t.d(n, {
  Z: function() {
return T;
  }
});
var l = t(735250),
  r = t(470079),
  i = t(866442),
  a = t(481060),
  o = t(129861),
  s = t(829883),
  c = t(518738),
  u = t(14263),
  d = t(592125),
  m = t(430824),
  f = t(158776),
  _ = t(594174),
  p = t(176278),
  v = t(970184),
  C = t(280501),
  h = t(811654),
  x = t(344991),
  I = t(981631),
  E = t(56816);

function T(e) {
  var n;
  let t = (0, v.CJ)(),
T = null == t ? void 0 : null === (n = t.message) || void 0 === n ? void 0 : n.getChannelId(),
N = d.Z.getChannel(T),
g = m.Z.getGuild(null == N ? void 0 : N.getGuildId()),
S = (0, u.Z)(null == g ? void 0 : g.id, h.HI),
b = r.useMemo(() => (0, h.tx)(e.defaultValues, null == g ? void 0 : g.id), [
  e.defaultValues,
  g
]);
  return (0, l.jsx)(x.ZP, {
selectActionComponent: e,
queryOptions: n => (0, h._H)(e.type, n, T),
renderIcon: (e, n) => {
  let t = n === x.tE.PILL_ICON_SIZE;
  if ((null == e ? void 0 : e.type) === C.tM.USER) {
    let r = _.default.getUser(e.value);
    if (null == r)
      return;
    return (0, l.jsx)(a.Avatar, {
      size: t ? a.AvatarSizes.SIZE_16 : a.AvatarSizes.SIZE_24,
      src: r.getAvatarURL(null == g ? void 0 : g.id, n),
      status: t ? null : f.Z.getStatus(r.id),
      'aria-hidden': !0
    });
  }
  if ((null == e ? void 0 : e.type) === C.tM.ROLE) {
    var r;
    let t = null != g ? m.Z.getRole(g.id, e.value) : void 0;
    if (null == t || null == g)
      return;
    let o = (0, s._b)(g, t) ? (0, c.Kz)(t, n) : null;
    return null != o ? (0, l.jsx)(p.Z, {
      ...o
    }) : (0, l.jsx)(a.ShieldUserIcon, {
      size: 'custom',
      color: null !== (r = t.colorString) && void 0 !== r ? r : (0, i.Rf)(I.p6O),
      height: n,
      width: n
    });
  }
},
renderOptionLabel: e => {
  let n = null;
  if (e.type === C.tM.USER) {
    let t = _.default.getUser(e.value);
    null != t && (n = (0, l.jsx)(o.Z, {
      className: E.tag,
      usernameClass: E.username,
      discriminatorClass: E.discriminator,
      botClass: E.bot,
      user: t,
      forceUsername: !0
    }));
  } else if (e.type === C.tM.ROLE) {
    let t = null != g ? m.Z.getRole(g.id, e.value) : void 0,
      r = null == t ? null : null == S ? void 0 : S[t.id];
    null != r && (n = (0, l.jsxs)('div', {
      className: E.roleCountContainer,
      children: [
        (0, l.jsx)(a.UserIcon, {
          size: 'sm',
          color: 'currentColor',
          className: E.roleCountIcon
        }),
        (0, l.jsx)('span', {
          className: E.roleCountText,
          children: r
        })
      ]
    }));
  }
  return (0, l.jsxs)('span', {
    className: E.label,
    children: [
      (0, l.jsx)('span', {
        className: E.labelText,
        children: e.label
      }),
      n
    ]
  });
},
defaultValues: b
  });
}