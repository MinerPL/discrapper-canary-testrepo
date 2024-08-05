n.d(t, {
  Z: function() {
return x;
  }
}), n(47120);
var i = n(735250),
  s = n(470079),
  a = n(442837),
  r = n(481060),
  l = n(2052),
  o = n(317381),
  c = n(638880),
  u = n(146936),
  d = n(527805),
  _ = n(952561),
  E = n(513202),
  I = n(884338),
  m = n(100527),
  T = n(906732),
  h = n(973616),
  N = n(314897),
  C = n(592125),
  f = n(158776),
  p = n(594174),
  g = n(823379),
  S = n(226378),
  A = n(701488),
  R = n(689938),
  O = n(606472);

function x(e) {
  var t;
  let {
application: n,
channelId: x,
guildId: M
  } = e, [v, L] = s.useState(!1), {
analyticsLocations: Z
  } = (0, T.ZP)(m.Z.ACTIVITY_INSTANCE_EMBED), P = (0, l.O)(), D = (0, _.Z)(), b = (0, a.e7)([C.Z], () => C.Z.getChannel(x)), j = (null == b ? void 0 : null === (t = b.isThread) || void 0 === t ? void 0 : t.call(b)) ? null == b ? void 0 : b.parent_id : x, U = (0, a.e7)([N.default], () => N.default.getId()), {
embeddedActivity: y,
currentEmbeddedActivity: B
  } = (0, a.cj)([o.ZP], () => ({
embeddedActivity: o.ZP.getEmbeddedActivitiesForChannel(null != j ? j : '').find(e => e.applicationId === n.id),
currentEmbeddedActivity: o.ZP.getCurrentEmbeddedActivity()
  })), k = (0, a.Wu)([p.default], () => {
var e;
return Array.from(null !== (e = null == y ? void 0 : y.userIds) && void 0 !== e ? e : []).map(e => p.default.getUser(e)).filter(g.lm);
  }), G = (0, a.e7)([f.Z], () => {
var e;
let t = null == y ? void 0 : y.userIds.values().next().value;
return null == t ? null : null === (e = f.Z.findActivity(t, e => e.application_id === n.id)) || void 0 === e ? void 0 : e.details;
  }), F = s.useMemo(() => {
let e = new h.Z(n);
return null == e.embeddedActivityConfig && (e.embeddedActivityConfig = A.wT), e;
  }, [n]), w = (0, d.s5)({
userId: U,
channelId: x,
application: F
  }), V = null == y, H = (0, S.NL)({
embeddedActivity: y,
joinability: w,
currentEmbeddedActivity: B,
channel: b
  }), Y = async () => {
L(!0);
try {
  V ? await (0, u.Z)({
    targetApplicationId: n.id,
    currentEmbeddedApplication: D,
    channelId: x,
    guildId: M,
    locationObject: P.location,
    embeddedActivitiesManager: E.Z,
    analyticsLocations: Z
  }) : await (0, c.Z)({
    applicationId: y.applicationId,
    currentEmbeddedApplication: D,
    activityChannelId: x,
    locationObject: P.location,
    embeddedActivitiesManager: E.Z,
    analyticsLocations: Z
  });
} finally {
  L(!1);
}
  }, W = H.disabled ? R.Z.Messages.EMBEDDED_ACTIVITIES_EMBED_ENDED : R.Z.Messages.EMBEDDED_ACTIVITIES_INSTANCE_EMBED_ENDED;
  return (0, i.jsx)('div', {
className: O.container,
children: (0, i.jsxs)('div', {
  className: O.contentContainer,
  children: [
    (0, i.jsx)('div', {
      className: O.headerContainer,
      children: V ? (0, i.jsx)('div', {
        className: O.__invalid_endedNote,
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
      className: O.footerContainer,
      children: [
        (0, i.jsx)(r.Tooltip, {
          text: H.tooltip,
          tooltipContentClassName: O.tooltipContent,
          children: e => {
            let {
              onClick: t,
              ...n
            } = e;
            return (0, s.createElement)(r.Button, {
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