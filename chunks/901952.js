n.d(t, {
  Z: function() {
return L;
  }
}), n(411104), n(47120);
var r = n(735250),
  i = n(470079),
  a = n(120356),
  o = n.n(a),
  s = n(481060),
  l = n(493683),
  u = n(904245),
  c = n(906732),
  d = n(541716),
  _ = n(752305),
  E = n(893718),
  f = n(957730),
  h = n(131704),
  p = n(592125),
  m = n(5192),
  I = n(838440),
  T = n(785717),
  g = n(910128),
  S = n(261253),
  A = n(7242),
  N = n(934861),
  v = n(981631),
  O = n(689938),
  R = n(663054),
  C = n(589273);
let y = (0, h.kt)({
id: '1',
type: v.d4z.DM
  }),
  D = async e => {
let {
  userId: t,
  content: n,
  location: r
} = e, {
  valid: i,
  failureReason: a
} = await (0, I.v)({
  type: d.I.NORMAL,
  content: n,
  channel: null
});
if (!i)
  throw Error(a);
let o = await l.Z.openPrivateChannel(t, !1, !1, r),
  s = p.Z.getChannel(o);
if (null == s)
  throw Error('Failed to open private channel');
let c = f.ZP.parse(s, n);
return u.Z.sendMessage(s.id, c);
  };

function L(e) {
  let {
user: t,
guildId: n,
channelId: a,
onClose: l
  } = e, {
newestAnalyticsLocation: u
  } = (0, c.ZP)(), {
trackUserProfileAction: f
  } = (0, T.KZ)(), {
messageCtaEnabled: h,
activeInviteToCallCtaEnabled: p,
persistentCallCtaEnabled: I
  } = (0, g.l)({
location: 'BiteSizeProfileDirectMessageSection'
  }), [v, L] = i.useState(''), [b, M] = i.useState((0, _.JM)(v)), P = i.useRef(!1);
  if (h) {
let e = (0, r.jsx)(A.Z, {
  user: t,
  className: C.biteSizeButton
});
return p && null != e ? (0, r.jsxs)('div', {
  className: C.ctaRow,
  children: [
    (0, r.jsx)(N.c, {
      userId: t.id,
      fullWidth: !0,
      color: C.engagementExpButton,
      className: C.biteSizeButton,
      onClose: l
    }),
    e
  ]
}) : I ? (0, r.jsxs)('div', {
  className: C.ctaRow,
  children: [
    (0, r.jsx)(N.c, {
      userId: t.id,
      fullWidth: !0,
      color: o()(s.Button.Colors.BRAND, R.color),
      className: C.biteSizeButton,
      onClose: l
    }),
    (0, r.jsx)(S.Z, {
      user: t,
      onClose: l,
      className: o()(C.engagementExpButton, C.biteSizeIconButton)
    })
  ]
}) : (0, r.jsx)(N.c, {
  userId: t.id,
  fullWidth: !0,
  className: C.biteSizeButton,
  color: o()(s.Button.Colors.BRAND, R.color),
  onClose: l
});
  }
  return (0, r.jsx)(E.Z, {
innerClassName: C.inner,
editorClassName: C.editor,
type: d.I.USER_PROFILE,
placeholder: O.Z.Messages.QUICK_DM_USER.format({
  name: m.ZP.getName(n, a, t)
}),
channel: y,
textValue: v,
richValue: b,
onChange: (e, t, n) => {
  if (t !== v)
    L(t), M(n);
},
focused: P.current,
onFocus: () => {
  P.current = !0;
},
onBlur: () => {
  P.current = !1;
},
onSubmit: async e => {
  let {
    value: n
  } = e;
  try {
    return f({
      action: 'SEND_DIRECT_MESSAGE'
    }), await D({
      userId: t.id,
      content: n.trim(),
      location: u
    }), null == l || l(), {
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