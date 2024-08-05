n.d(t, {
  Z: function() {
return O;
  }
}), n(47120);
var i = n(735250),
  a = n(470079),
  s = n(442837),
  r = n(692547),
  l = n(481060),
  o = n(287734),
  c = n(872810),
  d = n(884338),
  u = n(367907),
  _ = n(835473),
  h = n(925329),
  E = n(871118),
  I = n(543882),
  m = n(314897),
  g = n(944486),
  p = n(594174),
  T = n(51144),
  S = n(498058),
  f = n(158631),
  C = n(143614),
  N = n(981631),
  A = n(70722),
  v = n(689938),
  Z = n(106963);

function L(e) {
  let {
users: t
  } = e;
  return (0, i.jsxs)('div', {
className: Z.viewers,
children: [
  (0, i.jsx)(l.VoiceNormalIcon, {
    size: 'custom',
    width: 16,
    height: 16,
    color: r.Z.colors.HEADER_PRIMARY.css
  }),
  (0, i.jsx)(d.Z, {
    showUserPopout: !0,
    useFallbackUserForPopout: !0,
    users: t,
    max: 6,
    size: d.u.SIZE_24
  })
]
  });
}

function O(e) {
  var t;
  let {
broadcast: n
  } = e, {
userId: r,
applicationId: d,
channelId: O,
streamKey: R
  } = n, [x, b] = a.useState(!1), P = (0, s.e7)([p.default], () => p.default.getUser(r)), [M] = (0, _.Z)([d]), D = null !== (t = T.ZP.getGlobalName(P)) && void 0 !== t ? t : T.ZP.getUserTag(P), y = (0, C.Z)(), j = (0, s.e7)([I.Z], () => I.Z.getPreviewURL(null, O, r)), U = (0, s.e7)([g.Z], () => g.Z.getVoiceChannelId()), G = (0, f.ZP)(), k = (0, S.Z)(O);
  if (a.useEffect(() => {
  x && U === O && b(!1);
}, [
  U,
  x,
  O
]), null == P || null == D)
return null;
  let {
buttonColor: w,
buttonCTA: B,
disabled: H
  } = function(e, t) {
let n = m.default.getId(),
  i = t.some(e => e.id === n) || e === n,
  a = t.length >= N.keq;
return {
  buttonColor: a ? l.ButtonColors.RED : l.ButtonColors.GREEN,
  buttonCTA: a ? v.Z.Messages.BROADCAST_FULL : i ? v.Z.Messages.VIEW_BROADCAST : v.Z.Messages.JOIN_BROADCAST,
  disabled: a
};
  }(r, k);
  return (0, i.jsxs)('div', {
className: Z.container,
children: [
  (0, i.jsx)(l.Avatar, {
    size: l.AvatarSizes.SIZE_32,
    src: P.getAvatarURL(null, 32),
    'aria-label': D
  }),
  (0, i.jsxs)('div', {
    className: Z.details,
    children: [
      (0, i.jsx)(l.Text, {
        variant: 'text-md/semibold',
        children: D
      }),
      (0, i.jsx)(l.Text, {
        variant: 'text-sm/medium',
        color: 'header-secondary',
        children: null != M ? v.Z.Messages.STREAMING.format({
          name: M.name
        }) : v.Z.Messages.STREAMING_A_GAME
      }),
      (0, i.jsxs)('div', {
        className: Z.activity,
        children: [
          k.length > 0 && (0, i.jsx)(L, {
            users: k
          }),
          (0, i.jsxs)(l.Button, {
            onClick: () => {
              if (U === O) {
                o.default.selectPrivateChannel(O);
                return;
              }
              b(!0), (0, c.W1)(O, R), u.ZP.trackWithMetadata(N.rMx.BROADCAST_VIEWED, {
                num_active_broadcasts: y.length,
                broadcast_position: y.findIndex(e => e.userId === r) + 1,
                is_broadcasting: G,
                broadcast_channel_id: O
              });
            },
            color: w,
            size: l.ButtonSizes.SMALL,
            className: Z.button,
            disabled: H,
            innerClassName: Z.innerButton,
            children: [
              (0, i.jsx)(l.MicrophoneArrowRightIcon, {
                size: 'custom',
                color: 'currentColor',
                width: 16,
                height: 16
              }),
              B
            ]
          })
        ]
      })
    ]
  }),
  null != j ? (0, i.jsx)(E.Z, {
    className: Z.stream,
    stream: {
      streamType: A.lo.CALL,
      ownerId: r,
      channelId: O
    }
  }) : (0, i.jsx)(h.Z, {
    game: M,
    size: h.Z.Sizes.LARGE,
    className: Z.gameIcon
  })
]
  });
}