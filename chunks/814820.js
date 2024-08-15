n.d(t, {
  f: function() {
return C;
  }
}), n(47120);
var i = n(735250),
  a = n(470079),
  s = n(442837),
  r = n(481060),
  l = n(541716),
  o = n(419922),
  c = n(665906),
  u = n(271383),
  d = n(430824),
  _ = n(496675),
  E = n(594174),
  I = n(838440),
  m = n(779139),
  T = n(981631),
  h = n(689938),
  N = n(298226);
let f = e => {
let {
  channel: t,
  message: n
} = e, [s, c] = a.useState(!1), u = (0, m.y6)(n.id), d = a.useCallback(() => {
  (0, I.v)({
    type: l.I.FORM,
    content: '',
    channel: t
  }).then(e => {
    let {
      valid: i
    } = e;
    if (!!i)
      (0, m.TZ)(t, n, u.id);
  });
}, [
  t,
  n,
  u
]);
return (0, i.jsx)('div', {
  className: N.welcomeCTA,
  children: (0, i.jsxs)(r.Button, {
    className: N.welcomeCTAButtonOuter,
    innerClassName: N.welcomeCTAButton,
    color: r.ButtonColors.PRIMARY,
    onMouseEnter: () => c(!0),
    onMouseLeave: () => c(!1),
    onClick: d,
    children: [
      (0, i.jsx)(o.ZP, {
        className: N.welcomeCTASticker,
        isInteracting: s,
        sticker: u,
        size: 28
      }),
      h.Z.Messages.WELCOME_CTA_LABEL
    ]
  })
});
  },
  C = e => {
let {
  message: t,
  channel: n
} = e, a = n.getGuildId(), r = (0, s.e7)([
  E.default,
  _.Z,
  d.Z,
  u.ZP
], () => {
  var e;
  let i = E.default.getCurrentUser(),
    s = (0, c.xl)(n),
    r = _.Z.can(T.Plq.SEND_MESSAGES, n),
    l = null != a && null != i && (null === (e = u.ZP.getMember(a, i.id)) || void 0 === e ? void 0 : e.isPending),
    o = t.author.bot,
    I = d.Z.getGuild(a),
    m = null != I && (I.systemChannelFlags & T.xmn.SUPPRESS_JOIN_NOTIFICATION_REPLIES) == 0;
  return r && !s && !l && !o && m;
});
return null != a && r ? (0, i.jsx)(f, {
  message: t,
  channel: n
}) : null;
  };