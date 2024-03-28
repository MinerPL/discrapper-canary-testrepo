"use strict";
n.r(t), n.d(t, {
  default: function() {
    return L
  }
}), n("47120");
var s = n("735250"),
  a = n("470079"),
  l = n("442837"),
  i = n("481060"),
  r = n("2052"),
  o = n("566620"),
  u = n("317381"),
  d = n("969345"),
  c = n("638880"),
  f = n("266820"),
  E = n("527805"),
  _ = n("952561"),
  T = n("513202"),
  m = n("100527"),
  I = n("906732"),
  p = n("973616"),
  h = n("314897"),
  N = n("592125"),
  S = n("158776"),
  C = n("594174"),
  A = n("602623"),
  g = n("823379"),
  M = n("226378"),
  R = n("701488"),
  O = n("689938"),
  v = n("452218");

function L(e) {
  var t;
  let {
    application: n,
    activityInstance: L,
    channelId: x,
    guildId: D
  } = e, [P, y] = a.useState(!1), {
    analyticsLocations: U
  } = (0, I.default)(m.default.ACTIVITY_INSTANCE_EMBED), b = (0, r.useAnalyticsContext)(), j = (0, _.default)(), G = (0, l.useStateFromStores)([N.default], () => N.default.getChannel(x)), B = (null == G ? void 0 : null === (t = G.isThread) || void 0 === t ? void 0 : t.call(G)) ? null == G ? void 0 : G.parent_id : x, F = (0, l.useStateFromStores)([h.default], () => h.default.getId()), {
    embeddedActivity: k,
    currentEmbeddedActivity: w
  } = (0, l.useStateFromStoresObject)([u.default], () => ({
    embeddedActivity: u.default.getEmbeddedActivitiesForChannel(null != B ? B : "").find(e => e.instanceId === L.id),
    currentEmbeddedActivity: u.default.getCurrentEmbeddedActivity()
  })), H = (0, l.useStateFromStoresArray)([C.default], () => {
    var e;
    return Array.from(null !== (e = null == k ? void 0 : k.userIds) && void 0 !== e ? e : []).map(e => C.default.getUser(e)).filter(g.isNotNullish)
  }), V = (0, l.useStateFromStores)([S.default], () => {
    var e;
    let t = null == k ? void 0 : k.userIds.values().next().value;
    return null == t ? null : null === (e = S.default.findActivity(t, e => e.application_id === n.id)) || void 0 === e ? void 0 : e.details
  }), Y = a.useMemo(() => {
    let e = new p.default(n);
    return null == e.embeddedActivityConfig && (e.embeddedActivityConfig = R.DEFAULT_EMBEDDED_ACTIVITY_CONFIG), e
  }, [n]), K = (0, E.useEmbeddedActivityJoinability)({
    userId: F,
    channelId: x,
    application: Y
  }), W = null == k, z = (0, M.useJoinOrStartButtonState)({
    embeddedActivity: k,
    joinability: K,
    currentEmbeddedActivity: w
  }), Q = async () => {
    y(!0);
    try {
      if (W) {
        let {
          activityConfigs: e,
          applications: t
        } = await (0, o.fetchShelf)({
          guildId: D
        }), s = (0, d.default)({
          applicationId: n.id,
          activityConfigs: e,
          applications: t
        });
        await (0, f.default)({
          activityItem: s,
          currentEmbeddedApplication: j,
          channelId: x,
          guildId: D,
          locationObject: b.location,
          embeddedActivitiesManager: T.default,
          analyticsLocations: U
        })
      } else await (0, c.default)({
        applicationId: k.applicationId,
        currentEmbeddedApplication: j,
        activityChannelId: x,
        locationObject: b.location,
        embeddedActivitiesManager: T.default,
        analyticsLocations: U
      })
    } finally {
      y(!1)
    }
  };
  return (0, s.jsx)("div", {
    className: v.container,
    children: (0, s.jsxs)("div", {
      className: v.contentContainer,
      children: [(0, s.jsx)("div", {
        className: v.headerContainer,
        children: W ? (0, s.jsx)("div", {
          className: v.__invalid_endedNote,
          children: (0, s.jsx)(i.Text, {
            variant: "text-md/medium",
            children: O.default.Messages.EMBEDDED_ACTIVITIES_INSTANCE_EMBED_ENDED
          })
        }) : (0, s.jsx)(i.Text, {
          variant: "text-md/medium",
          lineClamp: 1,
          color: "text-normal",
          children: null != V ? V : O.default.Messages.EMBEDDED_ACTIVITIES_INSTANCE_EMBED_NO_PRESENCE
        })
      }), (0, s.jsxs)("div", {
        className: v.footerContainer,
        children: [(0, s.jsx)(i.Tooltip, {
          text: z.tooltip,
          children: e => {
            let {
              onClick: t,
              ...n
            } = e;
            return (0, a.createElement)(i.Button, {
              ...n,
              key: "".concat(z.isJoinAction),
              onClick: () => {
                Q(), null == t || t()
              },
              color: z.isJoinAction ? i.ButtonColors.GREEN : i.ButtonColors.PRIMARY,
              submitting: P,
              disabled: z.disabled
            }, z.text)
          }
        }), !W && (0, s.jsx)(A.default, {
          guildId: D,
          users: H,
          max: 4,
          size: A.Sizes.SIZE_32
        })]
      })]
    })
  })
}