"use strict";
n.r(t), n.d(t, {
  default: function() {
    return v
  }
}), n("47120");
var s = n("735250"),
  a = n("470079"),
  l = n("442837"),
  i = n("481060"),
  r = n("2052"),
  o = n("317381"),
  u = n("638880"),
  d = n("266820"),
  c = n("527805"),
  f = n("952561"),
  E = n("513202"),
  _ = n("100527"),
  m = n("906732"),
  T = n("973616"),
  I = n("314897"),
  p = n("592125"),
  h = n("158776"),
  N = n("594174"),
  S = n("602623"),
  C = n("823379"),
  A = n("226378"),
  g = n("701488"),
  M = n("689938"),
  R = n("497386");

function v(e) {
  var t;
  let {
    application: n,
    channelId: v,
    guildId: O
  } = e, [x, L] = a.useState(!1), {
    analyticsLocations: D
  } = (0, m.default)(_.default.ACTIVITY_INSTANCE_EMBED), P = (0, r.useAnalyticsContext)(), y = (0, f.default)(), U = (0, l.useStateFromStores)([p.default], () => p.default.getChannel(v)), j = (null == U ? void 0 : null === (t = U.isThread) || void 0 === t ? void 0 : t.call(U)) ? null == U ? void 0 : U.parent_id : v, b = (0, l.useStateFromStores)([I.default], () => I.default.getId()), {
    embeddedActivity: B,
    currentEmbeddedActivity: G
  } = (0, l.useStateFromStoresObject)([o.default], () => ({
    embeddedActivity: o.default.getEmbeddedActivitiesForChannel(null != j ? j : "").find(e => e.applicationId === n.id),
    currentEmbeddedActivity: o.default.getCurrentEmbeddedActivity()
  })), F = (0, l.useStateFromStoresArray)([N.default], () => {
    var e;
    return Array.from(null !== (e = null == B ? void 0 : B.userIds) && void 0 !== e ? e : []).map(e => N.default.getUser(e)).filter(C.isNotNullish)
  }), k = (0, l.useStateFromStores)([h.default], () => {
    var e;
    let t = null == B ? void 0 : B.userIds.values().next().value;
    return null == t ? null : null === (e = h.default.findActivity(t, e => e.application_id === n.id)) || void 0 === e ? void 0 : e.details
  }), w = a.useMemo(() => {
    let e = new T.default(n);
    return null == e.embeddedActivityConfig && (e.embeddedActivityConfig = g.DEFAULT_EMBEDDED_ACTIVITY_CONFIG), e
  }, [n]), H = (0, c.useEmbeddedActivityJoinability)({
    userId: b,
    channelId: v,
    application: w
  }), V = null == B, Y = (0, A.useJoinOrStartButtonState)({
    embeddedActivity: B,
    joinability: H,
    currentEmbeddedActivity: G,
    channel: U
  }), K = async () => {
    L(!0);
    try {
      V ? await (0, d.default)({
        targetApplicationId: n.id,
        currentEmbeddedApplication: y,
        channelId: v,
        guildId: O,
        locationObject: P.location,
        embeddedActivitiesManager: E.default,
        analyticsLocations: D
      }) : await (0, u.default)({
        applicationId: B.applicationId,
        currentEmbeddedApplication: y,
        activityChannelId: v,
        locationObject: P.location,
        embeddedActivitiesManager: E.default,
        analyticsLocations: D
      })
    } finally {
      L(!1)
    }
  }, W = Y.disabled ? M.default.Messages.EMBEDDED_ACTIVITIES_EMBED_ENDED : M.default.Messages.EMBEDDED_ACTIVITIES_INSTANCE_EMBED_ENDED;
  return (0, s.jsx)("div", {
    className: R.container,
    children: (0, s.jsxs)("div", {
      className: R.contentContainer,
      children: [(0, s.jsx)("div", {
        className: R.headerContainer,
        children: V ? (0, s.jsx)("div", {
          className: R.__invalid_endedNote,
          children: (0, s.jsx)(i.Text, {
            variant: "text-md/medium",
            children: W
          })
        }) : (0, s.jsx)(i.Text, {
          variant: "text-md/medium",
          lineClamp: 1,
          color: "text-normal",
          children: null != k ? k : M.default.Messages.EMBEDDED_ACTIVITIES_INSTANCE_EMBED_NO_PRESENCE
        })
      }), (0, s.jsxs)("div", {
        className: R.footerContainer,
        children: [(0, s.jsx)(i.Tooltip, {
          text: Y.tooltip,
          children: e => {
            let {
              onClick: t,
              ...n
            } = e;
            return (0, a.createElement)(i.Button, {
              ...n,
              key: "".concat(Y.isJoinAction),
              onClick: () => {
                K(), null == t || t()
              },
              color: Y.isJoinAction ? i.ButtonColors.GREEN : i.ButtonColors.PRIMARY,
              submitting: x,
              disabled: Y.disabled
            }, Y.text)
          }
        }), !V && (0, s.jsx)(S.default, {
          guildId: O,
          users: F,
          max: 4,
          size: S.Sizes.SIZE_32
        })]
      })]
    })
  })
}