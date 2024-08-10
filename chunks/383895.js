a(47120);
var n = a(735250),
  l = a(470079),
  r = a(120356),
  t = a.n(r),
  i = a(512722),
  o = a.n(i),
  E = a(442837),
  c = a(481060),
  _ = a(493683),
  I = a(220779),
  u = a(142550),
  d = a(201133),
  A = a(693824),
  R = a(919394),
  N = a(91140),
  O = a(297781),
  T = a(359110),
  m = a(592125),
  L = a(944486),
  g = a(594174),
  M = a(5192),
  P = a(810568),
  S = a(289538),
  G = a(689938),
  f = a(340672),
  C = a(421377);
let v = e => {
  let {
entry: s,
setGeneratedImage: a,
nickName: r
  } = e, [i, E] = l.useState();
  return l.useEffect(() => {
(async () => {
  let e = await _.Z.getOrEnsurePrivateChannel(s.author_id),
    n = m.Z.getChannel(e);
  o()(null != n, 'DM channel cannot be null');
  let l = await (0, R.QC)(s, n, A.kH.Base64),
    r = await (0, R.QC)(s, n, A.kH.CloudUpload);
  E(l), a(r);
})();
  }, [
s,
a
  ]), (0, n.jsxs)('div', {
className: f.reactReplyPreviewWrapper,
children: [
  (0, n.jsx)('div', {
    className: t()(f.placeholderImage, null != i && f.in)
  }),
  null != i && (0, n.jsx)('img', {
    className: f.reactReplyPreview,
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
  } = e, A = (0, E.e7)([
L.Z,
m.Z
  ], () => m.Z.getChannel(L.Z.getChannelId())), R = (0, E.e7)([g.default], () => g.default.getUser(s.author_id)), h = l.useMemo(() => M.ZP.getName(null == A ? void 0 : A.guild_id, null == A ? void 0 : A.id, R), [
R,
A
  ]), [x, p] = l.useState();
  return null == R ? null : (0, n.jsxs)('div', {
className: f.profileEntryCard,
style: r,
children: [
  (0, n.jsxs)('div', {
    className: t()(C.row, C.gapSm),
    style: r,
    children: [
      (0, n.jsx)(S.D, {
        user: R,
        channel: A
      }),
      (0, n.jsx)('div', {
        className: t()(f.playerInfo),
        children: (0, n.jsxs)('div', {
          className: t()(C.column, C.gapXs),
          children: [
            (0, n.jsx)(c.Text, {
              variant: 'text-md/medium',
              color: 'text-primary',
              lineClamp: 1,
              children: h
            }),
            (0, n.jsx)(O.Gk, {
              location: O.Gt.GAME_PROFILE,
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
    className: f.reactions,
    children: (0, n.jsx)(I.ZP, {
      showReply: !0,
      showReact: !1,
      onInteraction: async e => {
        let {
          interactionType: n,
          reply: l
        } = e;
        if (n === u.L.ReplyBegin && (0, P.UE)({
            action: P.as.ClickMessageUser,
            applicationId: s.extra.application_id,
            gameName: s.extra.game_name,
            recipientUserId: s.author_id,
            viewId: a
          }), n === u.L.ReplySubmit) {
          (0, P.UE)({
            action: P.as.SendMessageUser,
            applicationId: s.extra.application_id,
            gameName: s.extra.game_name,
            recipientUserId: s.author_id,
            viewId: a
          });
          let e = await _.Z.getOrEnsurePrivateChannel(s.author_id),
            n = m.Z.getChannel(e);
          o()(null != n, 'GameProfile ReactReply - DM channel cannot be null'), o()(null != x, 'GameProfile ReactReply - Reaction Image cannot be null'), (0, d.B)({
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