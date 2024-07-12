n.d(t, {
  Z: function() {
return O;
  }
}), n(47120);
var i = n(735250),
  s = n(470079),
  a = n(442837),
  r = n(692547),
  l = n(481060),
  o = n(287734),
  c = n(872810),
  d = n(884338),
  u = n(367907),
  _ = n(835473),
  h = n(871118),
  E = n(543882),
  I = n(314897),
  m = n(944486),
  g = n(594174),
  p = n(366695),
  T = n(51144),
  S = n(498058),
  C = n(158631),
  f = n(143614),
  N = n(981631),
  A = n(70722),
  Z = n(689938),
  L = n(106963);

function v(e) {
  let {
users: t
  } = e;
  return (0, i.jsxs)('div', {
className: L.viewers,
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
  } = n, [x, b] = s.useState(!1), P = (0, a.e7)([g.default], () => g.default.getUser(r)), [M] = (0, _.Z)([d]), D = null !== (t = T.ZP.getGlobalName(P)) && void 0 !== t ? t : T.ZP.getUserTag(P), y = (0, f.Z)(), j = (0, a.e7)([E.Z], () => E.Z.getPreviewURL(null, O, r)), U = (0, a.e7)([m.Z], () => m.Z.getVoiceChannelId()), G = (0, C.ZP)(), k = (0, S.Z)(O);
  if (s.useEffect(() => {
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
let n = I.default.getId(),
  i = t.some(e => e.id === n) || e === n,
  s = t.length >= N.keq;
return {
  buttonColor: s ? l.ButtonColors.RED : l.ButtonColors.GREEN,
  buttonCTA: s ? Z.Z.Messages.BROADCAST_FULL : i ? Z.Z.Messages.VIEW_BROADCAST : Z.Z.Messages.JOIN_BROADCAST,
  disabled: s
};
  }(r, k);
  return (0, i.jsxs)('div', {
className: L.container,
children: [
  (0, i.jsx)(l.Avatar, {
    size: l.AvatarSizes.SIZE_32,
    src: P.getAvatarURL(null, 32),
    'aria-label': D
  }),
  (0, i.jsxs)('div', {
    className: L.details,
    children: [
      (0, i.jsx)(l.Text, {
        variant: 'text-md/semibold',
        children: D
      }),
      (0, i.jsx)(l.Text, {
        variant: 'text-sm/medium',
        color: 'header-secondary',
        children: null != M ? Z.Z.Messages.STREAMING.format({
          name: M.name
        }) : Z.Z.Messages.STREAMING_A_GAME
      }),
      (0, i.jsxs)('div', {
        className: L.activity,
        children: [
          k.length > 0 && (0, i.jsx)(v, {
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
            className: L.button,
            disabled: H,
            innerClassName: L.innerButton,
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
  null != j ? (0, i.jsx)(h.Z, {
    className: L.stream,
    stream: {
      streamType: A.lo.CALL,
      ownerId: r,
      channelId: O
    }
  }) : (0, i.jsx)(p.Z, {
    game: M,
    size: p.Z.Sizes.LARGE,
    className: L.gameIcon
  })
]
  });
}