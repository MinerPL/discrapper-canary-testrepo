a(47120);
var n = a(735250),
  l = a(470079),
  r = a(120356),
  t = a.n(r),
  i = a(512722),
  E = a.n(i),
  o = a(442837),
  c = a(481060),
  _ = a(493683),
  I = a(220779),
  u = a(142550),
  A = a(201133),
  d = a(693824),
  O = a(919394),
  N = a(91140),
  R = a(297781),
  T = a(359110),
  m = a(592125),
  L = a(944486),
  P = a(594174),
  M = a(5192),
  g = a(810568),
  S = a(289538),
  G = a(689938),
  C = a(340672),
  f = a(421377);
let v = e => {
  let {
entry: s,
setGeneratedImage: a,
nickName: r
  } = e, [i, o] = l.useState();
  return l.useEffect(() => {
(async () => {
  let e = await _.Z.getOrEnsurePrivateChannel(s.author_id),
    n = m.Z.getChannel(e);
  E()(null != n, 'DM channel cannot be null');
  let l = await (0, O.QC)(s, n, d.kH.Base64),
    r = await (0, O.QC)(s, n, d.kH.CloudUpload);
  o(l), a(r);
})();
  }, [
s,
a
  ]), (0, n.jsxs)('div', {
className: C.reactReplyPreviewWrapper,
children: [
  (0, n.jsx)('div', {
    className: t()(C.placeholderImage, null != i && C.in)
  }),
  null != i && (0, n.jsx)('img', {
    className: C.reactReplyPreview,
    src: i,
    alt: G.Z.Messages.GAME_PROFILE_GAME_REACT_REPLY_ALT.format({
      userName: r,
      gameName: s.extra.game_name
    })
  })
]
  });
};
s.Z = e => {
  let {
entry: s,
viewId: a,
style: r = {},
onClose: i
  } = e, d = (0, o.e7)([
L.Z,
m.Z
  ], () => m.Z.getChannel(L.Z.getChannelId())), O = (0, o.e7)([P.default], () => P.default.getUser(s.author_id)), h = l.useMemo(() => M.ZP.getName(null == d ? void 0 : d.guild_id, null == d ? void 0 : d.id, O), [
O,
d
  ]), [x, p] = l.useState();
  return null == O ? null : (0, n.jsxs)('div', {
className: C.profileEntryCard,
style: r,
children: [
  (0, n.jsxs)('div', {
    className: t()(f.row, f.gapSm),
    style: r,
    children: [
      (0, n.jsx)(S.D, {
        user: O,
        channel: d
      }),
      (0, n.jsx)('div', {
        className: t()(C.playerInfo),
        children: (0, n.jsxs)('div', {
          className: t()(f.column, f.gapNone),
          children: [
            (0, n.jsxs)(c.Text, {
              variant: 'text-sm/bold',
              color: 'text-normal',
              lineClamp: 1,
              children: [
                h.slice(0, 18),
                ' ',
                h.length > 18 ? '...' : ''
              ]
            }),
            (0, n.jsx)(R.Gk, {
              location: R.Gt.GAME_PROFILE,
              children: N.W.map((e, a) => (0, n.jsx)(e, {
                entry: s
              }, a))
            })
          ]
        })
      })
    ]
  }),
  (0, n.jsx)('div', {
    className: C.reactions,
    children: (0, n.jsx)(I.ZP, {
      showReply: !0,
      showReact: !1,
      onInteraction: async e => {
        let {
          interactionType: n,
          reply: l
        } = e;
        if (n === u.L.ReplyBegin && (0, g.UE)({
            action: g.as.ClickMessageUser,
            applicationId: s.extra.application_id,
            gameName: s.extra.game_name,
            recipientUserId: s.author_id,
            viewId: a
          }), n === u.L.ReplySubmit) {
          (0, g.UE)({
            action: g.as.SendMessageUser,
            applicationId: s.extra.application_id,
            gameName: s.extra.game_name,
            recipientUserId: s.author_id,
            viewId: a
          });
          let e = await _.Z.getOrEnsurePrivateChannel(s.author_id),
            n = m.Z.getChannel(e);
          E()(null != n, 'GameProfile ReactReply - DM channel cannot be null'), E()(null != x, 'GameProfile ReactReply - Reaction Image cannot be null'), (0, A.B)({
            file: x,
            channel: n,
            altText: '',
            reply: null != l ? l : ''
          }), i(), (0, T.Kh)(n.id);
        }
      },
      popoutProps: {
        popoutBody: (0, n.jsx)(v, {
          entry: s,
          setGeneratedImage: p,
          nickName: h
        }),
        replyHeaderText: '',
        replyPlaceholder: G.Z.Messages.QUICK_DM_USER.format({
          name: h
        })
      }
    })
  })
]
  });
};