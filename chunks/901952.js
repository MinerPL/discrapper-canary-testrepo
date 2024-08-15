n.d(t, {
  Z: function() {
return v;
  }
}), n(47120);
var r = n(735250),
  i = n(470079),
  a = n(120356),
  s = n.n(a),
  o = n(481060),
  l = n(906732),
  u = n(541716),
  c = n(752305),
  d = n(893718),
  _ = n(131704),
  E = n(5192),
  f = n(785717),
  h = n(910128),
  p = n(485216),
  m = n(261253),
  I = n(7242),
  T = n(934861),
  g = n(981631),
  S = n(689938),
  A = n(764771);
let N = (0, _.kt)({
  id: '1',
  type: g.d4z.DM
});

function v(e) {
  let {
user: t,
guildId: n,
channelId: a,
onClose: _
  } = e, {
newestAnalyticsLocation: g
  } = (0, l.ZP)(), {
trackUserProfileAction: v
  } = (0, f.KZ)(), {
messageCtaEnabled: O,
activeInviteToCallCtaEnabled: R,
persistentCallCtaEnabled: C
  } = (0, h.l)({
location: 'BiteSizeProfileDirectMessageSection'
  }), [y, D] = i.useState(''), [L, b] = i.useState((0, c.JM)(y)), M = i.useRef(!1);
  if (O) {
let e = (0, r.jsx)(I.Z, {
  user: t,
  className: A.biteSizeButton
});
return R && null != e ? (0, r.jsxs)('div', {
  className: A.ctaRow,
  children: [
    (0, r.jsx)(T.c, {
      userId: t.id,
      fullWidth: !0,
      color: A.engagementExpButton,
      themeColor: 'none',
      className: A.biteSizeButton,
      onClose: _
    }),
    e
  ]
}) : C ? (0, r.jsxs)('div', {
  className: A.ctaRow,
  children: [
    (0, r.jsx)(T.c, {
      userId: t.id,
      fullWidth: !0,
      color: o.Button.Colors.BRAND,
      className: A.biteSizeButton,
      onClose: _
    }),
    (0, r.jsx)(m.Z, {
      user: t,
      onClose: _,
      className: s()(A.engagementExpButton, A.biteSizeIconButton)
    })
  ]
}) : (0, r.jsx)(T.c, {
  userId: t.id,
  fullWidth: !0,
  className: A.biteSizeButton,
  color: o.Button.Colors.BRAND,
  onClose: _
});
  }
  return (0, r.jsx)(d.Z, {
innerClassName: A.inner,
editorClassName: A.editor,
type: u.I.USER_PROFILE,
placeholder: S.Z.Messages.QUICK_DM_USER.format({
  name: E.ZP.getName(n, a, t)
}),
channel: N,
textValue: y,
richValue: L,
onChange: (e, t, n) => {
  if (t !== y)
    D(t), b(n);
},
focused: M.current,
onFocus: () => {
  M.current = !0;
},
onBlur: () => {
  M.current = !1;
},
onSubmit: async e => {
  let {
    value: n
  } = e;
  try {
    return v({
      action: 'SEND_DIRECT_MESSAGE'
    }), await (0, p.Z)({
      userId: t.id,
      content: n.trim(),
      location: g
    }), null == _ || _(), {
      shouldClear: !0,
      shouldRefocus: !1
    };
  } catch {
    return {
      shouldClear: !1,
      shouldRefocus: !1
    };
  }
}
  });
}