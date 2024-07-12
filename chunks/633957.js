n.d(t, {
  Z: function() {
return O;
  }
}), n(47120);
var i = n(735250),
  a = n(470079),
  s = n(442837),
  r = n(481060),
  l = n(2052),
  o = n(317381),
  c = n(638880),
  d = n(146936),
  u = n(527805),
  _ = n(952561),
  E = n(513202),
  I = n(884338),
  m = n(100527),
  T = n(906732),
  h = n(973616),
  N = n(314897),
  f = n(592125),
  p = n(158776),
  C = n(594174),
  g = n(823379),
  S = n(226378),
  A = n(701488),
  R = n(689938),
  x = n(606472);

function O(e) {
  var t;
  let {
application: n,
channelId: O,
guildId: M
  } = e, [v, L] = a.useState(!1), {
analyticsLocations: Z
  } = (0, T.ZP)(m.Z.ACTIVITY_INSTANCE_EMBED), P = (0, l.O)(), b = (0, _.Z)(), D = (0, s.e7)([f.Z], () => f.Z.getChannel(O)), j = (null == D ? void 0 : null === (t = D.isThread) || void 0 === t ? void 0 : t.call(D)) ? null == D ? void 0 : D.parent_id : O, U = (0, s.e7)([N.default], () => N.default.getId()), {
embeddedActivity: y,
currentEmbeddedActivity: B
  } = (0, s.cj)([o.ZP], () => ({
embeddedActivity: o.ZP.getEmbeddedActivitiesForChannel(null != j ? j : '').find(e => e.applicationId === n.id),
currentEmbeddedActivity: o.ZP.getCurrentEmbeddedActivity()
  })), k = (0, s.Wu)([C.default], () => {
var e;
return Array.from(null !== (e = null == y ? void 0 : y.userIds) && void 0 !== e ? e : []).map(e => C.default.getUser(e)).filter(g.lm);
  }), G = (0, s.e7)([p.Z], () => {
var e;
let t = null == y ? void 0 : y.userIds.values().next().value;
return null == t ? null : null === (e = p.Z.findActivity(t, e => e.application_id === n.id)) || void 0 === e ? void 0 : e.details;
  }), F = a.useMemo(() => {
let e = new h.Z(n);
return null == e.embeddedActivityConfig && (e.embeddedActivityConfig = A.wT), e;
  }, [n]), w = (0, u.s5)({
userId: U,
channelId: O,
application: F
  }), V = null == y, H = (0, S.NL)({
embeddedActivity: y,
joinability: w,
currentEmbeddedActivity: B,
channel: D
  }), Y = async () => {
L(!0);
try {
  V ? await (0, d.Z)({
    targetApplicationId: n.id,
    currentEmbeddedApplication: b,
    channelId: O,
    guildId: M,
    locationObject: P.location,
    embeddedActivitiesManager: E.Z,
    analyticsLocations: Z
  }) : await (0, c.Z)({
    applicationId: y.applicationId,
    currentEmbeddedApplication: b,
    activityChannelId: O,
    locationObject: P.location,
    embeddedActivitiesManager: E.Z,
    analyticsLocations: Z
  });
} finally {
  L(!1);
}
  }, W = H.disabled ? R.Z.Messages.EMBEDDED_ACTIVITIES_EMBED_ENDED : R.Z.Messages.EMBEDDED_ACTIVITIES_INSTANCE_EMBED_ENDED;
  return (0, i.jsx)('div', {
className: x.container,
children: (0, i.jsxs)('div', {
  className: x.contentContainer,
  children: [
    (0, i.jsx)('div', {
      className: x.headerContainer,
      children: V ? (0, i.jsx)('div', {
        className: x.__invalid_endedNote,
        children: (0, i.jsx)(r.Text, {
          variant: 'text-md/medium',
          children: W
        })
      }) : (0, i.jsx)(r.Text, {
        variant: 'text-md/medium',
        lineClamp: 1,
        color: 'text-normal',
        children: null != G ? G : R.Z.Messages.EMBEDDED_ACTIVITIES_INSTANCE_EMBED_NO_PRESENCE
      })
    }),
    (0, i.jsxs)('div', {
      className: x.footerContainer,
      children: [
        (0, i.jsx)(r.Tooltip, {
          text: H.tooltip,
          children: e => {
            let {
              onClick: t,
              ...n
            } = e;
            return (0, a.createElement)(r.Button, {
              ...n,
              key: ''.concat(H.isJoinAction),
              onClick: () => {
                Y(), null == t || t();
              },
              color: H.isJoinAction ? r.ButtonColors.GREEN : r.ButtonColors.PRIMARY,
              submitting: v,
              disabled: H.disabled
            }, H.text);
          }
        }),
        !V && (0, i.jsx)(I.Z, {
          guildId: M,
          users: k,
          max: 4,
          size: I.u.SIZE_32
        })
      ]
    })
  ]
})
  });
}