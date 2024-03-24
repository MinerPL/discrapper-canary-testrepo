"use strict";
n.r(t), n.d(t, {
  default: function() {
    return L
  }
}), n("222007");
var s = n("37983"),
  l = n("884691"),
  a = n("446674"),
  i = n("77078"),
  r = n("997289"),
  o = n("550766"),
  u = n("191225"),
  d = n("602718"),
  c = n("706508"),
  E = n("986214"),
  f = n("501260"),
  _ = n("698372"),
  T = n("141962"),
  I = n("812204"),
  m = n("685665"),
  N = n("653047"),
  p = n("271938"),
  S = n("42203"),
  A = n("824563"),
  C = n("697218"),
  h = n("811305"),
  g = n("449008"),
  M = n("29883"),
  O = n("954016"),
  R = n("782340"),
  v = n("75644");

function L(e) {
  var t;
  let {
    application: n,
    activityInstance: L,
    channelId: P,
    guildId: D
  } = e, [x, y] = l.useState(!1), {
    analyticsLocations: U
  } = (0, m.default)(I.default.ACTIVITY_INSTANCE_EMBED), j = (0, r.useAnalyticsContext)(), b = (0, _.default)(), G = (0, a.useStateFromStores)([S.default], () => S.default.getChannel(P)), B = (null == G ? void 0 : null === (t = G.isThread) || void 0 === t ? void 0 : t.call(G)) ? null == G ? void 0 : G.parent_id : P, F = (0, a.useStateFromStores)([p.default], () => p.default.getId()), {
    embeddedActivity: k,
    currentEmbeddedActivity: w
  } = (0, a.useStateFromStoresObject)([u.default], () => ({
    embeddedActivity: u.default.getEmbeddedActivitiesForChannel(null != B ? B : "").find(e => e.instanceId === L.id),
    currentEmbeddedActivity: u.default.getCurrentEmbeddedActivity()
  })), H = (0, a.useStateFromStoresArray)([C.default], () => {
    var e;
    return Array.from(null !== (e = null == k ? void 0 : k.userIds) && void 0 !== e ? e : []).map(e => C.default.getUser(e)).filter(g.isNotNullish)
  }), V = (0, a.useStateFromStores)([A.default], () => {
    var e;
    let t = null == k ? void 0 : k.userIds.values().next().value;
    return null == t ? null : null === (e = A.default.findActivity(t, e => e.application_id === n.id)) || void 0 === e ? void 0 : e.details
  }), Y = l.useMemo(() => {
    let e = new N.default(n);
    return null == e.embeddedActivityConfig && (e.embeddedActivityConfig = O.DEFAULT_EMBEDDED_ACTIVITY_CONFIG), e
  }, [n]), W = (0, f.useEmbeddedActivityJoinability)({
    userId: F,
    channelId: P,
    application: Y
  }), K = null == k, z = (0, M.useJoinOrStartButtonState)({
    embeddedActivity: k,
    joinability: W,
    currentEmbeddedActivity: w
  }), Q = async () => {
    y(!0);
    try {
      if (K) {
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
        await (0, E.default)({
          activityItem: s,
          currentEmbeddedApplication: b,
          channelId: P,
          guildId: D,
          locationObject: j.location,
          embeddedActivitiesManager: T.default,
          analyticsLocations: U
        })
      } else await (0, c.default)({
        applicationId: k.applicationId,
        currentEmbeddedApplication: b,
        activityChannelId: P,
        locationObject: j.location,
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
        children: K ? (0, s.jsx)("div", {
          className: v.endedNote,
          children: (0, s.jsx)(i.Text, {
            variant: "text-md/medium",
            children: R.default.Messages.EMBEDDED_ACTIVITIES_INSTANCE_EMBED_ENDED
          })
        }) : (0, s.jsx)(i.Text, {
          variant: "text-md/medium",
          lineClamp: 1,
          color: "text-normal",
          children: null != V ? V : R.default.Messages.EMBEDDED_ACTIVITIES_INSTANCE_EMBED_NO_PRESENCE
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
            return (0, l.createElement)(i.Button, {
              ...n,
              key: "".concat(z.isJoinAction),
              onClick: () => {
                Q(), null == t || t()
              },
              color: z.isJoinAction ? i.ButtonColors.GREEN : i.ButtonColors.PRIMARY,
              submitting: x,
              disabled: z.disabled
            }, z.text)
          }
        }), !K && (0, s.jsx)(h.default, {
          guildId: D,
          users: H,
          max: 4,
          size: h.Sizes.SIZE_32
        })]
      })]
    })
  })
}