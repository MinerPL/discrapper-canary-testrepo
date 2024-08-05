n.d(t, {
  Z: function() {
return D;
  }
}), n(47120), n(789020);
var i = n(735250);
n(470079);
var s = n(613828),
  a = n(442837),
  r = n(477690),
  l = n(481060),
  o = n(668781),
  c = n(2052),
  u = n(100527),
  d = n(906732),
  _ = n(835473),
  E = n(522474),
  I = n(523746),
  m = n(592125),
  T = n(594174),
  h = n(630388),
  N = n(823379),
  C = n(624138),
  f = n(317381),
  p = n(638880),
  g = n(146936),
  S = n(147865),
  A = n(778569),
  R = n(513202),
  O = n(884338),
  x = n(403404),
  M = n(701488),
  v = n(981631),
  L = n(689938),
  Z = n(615010);
let P = (0, C.Mg)(r.Z.ACTIVITY_BOOKMARK_EMBED_IMAGE_WIDTH);

function D(e) {
  var t, n, r, C;
  let {
applicationId: D,
message: b
  } = e, {
analyticsLocations: j
  } = (0, d.ZP)(u.Z.ACTIVITY_BOOKMARK), U = (0, c.O)(), y = b.channel_id, B = (0, a.e7)([m.Z], () => m.Z.getChannel(y), [y]), k = null == B ? void 0 : B.guild_id, G = null != B && (B.isGuildVoice() || B.isPrivate()), F = (0, a.e7)([f.ZP], () => f.ZP.getSelfEmbeddedActivityForChannel(y)), w = (null == F ? void 0 : F.applicationId) === D, [V, H] = (0, _.Z)([
D,
null !== (n = null == F ? void 0 : F.applicationId) && void 0 !== n ? n : ''
  ]), Y = (0, S.ZP)(null !== (r = null == V ? void 0 : V.maxParticipants) && void 0 !== r ? r : 0), [W] = (0, a.Wu)([f.ZP], () => G ? f.ZP.getEmbeddedActivitiesForChannel(y).filter(e => e.applicationId === D) : [], [
D,
y,
G
  ]), K = Array.from(null !== (C = null == W ? void 0 : W.userIds) && void 0 !== C ? C : []), z = (0, a.Wu)([T.default], () => K.map(e => T.default.getUser(e)).filter(N.lm), [K]), Q = (0, A.Z)({
applicationId: D,
size: P,
names: ['embedded_cover']
  }), q = E.Z.getWindowOpen(v.KJ3.CHANNEL_CALL_POPOUT), X = z.length > 0 ? L.Z.Messages.JOIN : L.Z.Messages.START, J = async () => {
if (G) {
  if (null != W && z.length > 0)
    await (0, p.Z)({
      applicationId: W.applicationId,
      currentEmbeddedApplication: H,
      activityChannelId: y,
      embeddedActivitiesManager: R.Z,
      locationObject: U.location,
      analyticsLocations: j
    });
  else {
    let e = B.isPrivate() && !I.Z.isCallActive(y),
      t = () => (0, g.Z)({
        targetApplicationId: D,
        currentEmbeddedApplication: H,
        channelId: y,
        guildId: k,
        embeddedActivitiesManager: R.Z,
        analyticsLocations: j
      });
    e ? o.Z.show({
      title: L.Z.Messages.DEFAULT_CONFIRMATION_MODAL_HEADER,
      cancelText: L.Z.Messages.CANCEL,
      confirmText: L.Z.Messages.CONFIRM,
      onConfirm: () => t(),
      body: L.Z.Messages.EMBEDDED_ACTIVITIES_DM_START_CONFIRMATION_TEXT
    }) : t();
  }
} else
  (0, x.Z)({
    guildId: k,
    locationObject: U.location,
    openInPopout: q,
    initialSelectedApplicationId: D,
    initialSlide: M.ag.SELECT_CHANNEL,
    analyticsLocations: j
  });
  };
  return null != V && (0, h.yE)(V.flags, v.udG.EMBEDDED) ? (0, i.jsx)(d.Gt, {
value: j,
children: (0, i.jsxs)('div', {
  className: Z.container,
  children: [
    (0, i.jsx)('div', {
      className: Z.imgContainer,
      children: (0, i.jsx)('img', {
        className: Z.img,
        alt: V.name,
        src: Q.url
      })
    }),
    (0, i.jsxs)('div', {
      className: Z.content,
      children: [
        (0, i.jsx)(l.Heading, {
          className: Z.heading,
          variant: 'heading-xl/semibold',
          children: V.name
        }),
        (0, i.jsx)(l.Heading, {
          className: Z.description,
          variant: 'heading-sm/medium',
          children: null === (t = V.description) || void 0 === t ? void 0 : t.trim()
        }),
        (0, i.jsx)(l.Heading, {
          className: Z.learnMore,
          variant: 'heading-sm/medium',
          children: (0, i.jsx)(s.rU, {
            to: v.Z5c.ACTIVITY_DETAILS(D),
            children: L.Z.Messages.LEARN_MORE
          })
        }),
        (0, i.jsxs)('div', {
          className: Z.cta,
          children: [
            z.length > 0 ? (0, i.jsx)('div', {
              className: Z.avatars,
              children: (0, i.jsx)(O.Z, {
                guildId: k,
                users: z,
                max: 4
              })
            }) : (0, i.jsxs)('div', {
              className: Z.maxParticipants,
              children: [
                (0, i.jsx)(l.GroupIcon, {
                  size: 'md',
                  color: 'currentColor',
                  className: Z.peopleIcon
                }),
                (0, i.jsx)(l.Text, {
                  variant: 'text-xs/semibold',
                  children: Y
                })
              ]
            }),
            (0, i.jsx)('div', {
              className: Z.buttonWrapper,
              children: (0, i.jsx)(l.Button, {
                onClick: J,
                className: Z.button,
                color: l.ButtonColors.GREEN,
                disabled: w,
                children: X
              })
            })
          ]
        })
      ]
    })
  ]
})
  }) : null;
}