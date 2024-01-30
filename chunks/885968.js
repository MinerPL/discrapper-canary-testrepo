"use strict";
n.r(t), n.d(t, {
  default: function() {
    return x
  }
}), n("222007");
var s = n("37983"),
  l = n("884691"),
  a = n("414456"),
  i = n.n(a),
  r = n("77078"),
  o = n("446674"),
  u = n("997289"),
  d = n("550766"),
  c = n("191225"),
  f = n("602718"),
  E = n("706508"),
  _ = n("986214"),
  T = n("501260"),
  I = n("698372"),
  m = n("969380"),
  N = n("817039"),
  p = n("141962"),
  A = n("685665"),
  S = n("653047"),
  C = n("271938"),
  h = n("824563"),
  g = n("697218"),
  M = n("811305"),
  O = n("449008"),
  R = n("29883"),
  L = n("954016"),
  v = n("782340"),
  P = n("502079");
let D = {
  UNKNOWN: "",
  SMALL: P.smallLayout,
  MEDIUM: P.mediumLayout
};

function x(e) {
  let {
    application: t,
    activityInstance: n,
    channelId: a,
    guildId: x
  } = e, [y, U] = l.useState(!1), {
    analyticsLocations: j
  } = (0, A.default)(), b = (0, u.useAnalyticsContext)(), {
    containerRef: G,
    layout: B
  } = function() {
    let e = l.useRef(null),
      [t, n] = l.useState(D.UNKNOWN);
    return l.useEffect(() => {
      function t() {
        var t;
        let s = null === (t = e.current) || void 0 === t ? void 0 : t.offsetWidth;
        if (null != s) s < 512 ? n(D.SMALL) : n(D.MEDIUM)
      }
      let s = new ResizeObserver(() => t()),
        l = e.current;
      return null != l && (t(), s.observe(l)), () => {
        s.disconnect()
      }
    }, [e]), {
      containerRef: e,
      layout: t
    }
  }(), F = (0, m.default)({
    applicationId: t.id,
    size: 1024
  }), k = (0, I.default)(), w = (0, o.useStateFromStores)([C.default], () => C.default.getId()), H = (0, o.useStateFromStores)([c.default], () => c.default.getEmbeddedActivitiesForChannel(a).find(e => e.instanceId === n.id)), V = (0, o.useStateFromStoresArray)([g.default], () => {
    var e;
    return Array.from(null !== (e = null == H ? void 0 : H.userIds) && void 0 !== e ? e : []).map(e => g.default.getUser(e)).filter(O.isNotNullish)
  }), Y = (0, o.useStateFromStores)([h.default], () => {
    var e;
    let n = null == H ? void 0 : H.userIds.values().next().value;
    return null == n ? null : null === (e = h.default.findActivity(n.user_id, e => e.application_id === t.id)) || void 0 === e ? void 0 : e.details
  }), K = l.useMemo(() => {
    let e = new S.default(t);
    return null == e.embeddedActivityConfig && (e.embeddedActivityConfig = L.DEFAULT_EMBEDDED_ACTIVITY_CONFIG), e
  }, [t]), W = (0, T.useEmbeddedActivityJoinability)({
    userId: w,
    channelId: a,
    application: K
  }), z = null == H, Z = (0, R.useJoinOrStartButtonState)({
    embeddedActivity: H,
    currentUserId: w,
    joinability: W
  }), J = async () => {
    U(!0);
    try {
      if (z) {
        let {
          activityConfigs: e,
          applications: n
        } = await (0, d.fetchShelf)({
          guildId: x
        }), s = (0, f.default)({
          applicationId: t.id,
          activityConfigs: e,
          applications: n
        });
        await (0, _.default)({
          activityItem: s,
          currentActivity: k,
          channelId: a,
          guildId: x,
          locationObject: b.location,
          embeddedActivitiesManager: p.default,
          analyticsLocations: j
        })
      } else await (0, E.default)({
        applicationId: H.applicationId,
        currentEmbeddedApplication: k,
        activityChannelId: a,
        locationObject: b.location,
        embeddedActivitiesManager: p.default,
        analyticsLocations: j
      })
    } finally {
      U(!1)
    }
  }, Q = (0, s.jsxs)("div", {
    className: P.container,
    children: [B !== D.SMALL && (0, s.jsx)("div", {
      className: P.imgWrapper,
      children: "fetched" === F.state && (0, s.jsx)(N.default, {
        imageBackground: F,
        applicationName: t.name,
        imageClassName: P.img,
        imageNotFoundClassName: P.imgBroken
      })
    }), (0, s.jsxs)("div", {
      className: P.contentContainer,
      children: [(0, s.jsxs)("div", {
        className: P.headerContainer,
        children: [(0, s.jsx)(r.Heading, {
          variant: "heading-lg/bold",
          children: null == t ? void 0 : t.name
        }), !z && (0, s.jsx)(r.Text, {
          variant: "text-md/medium",
          lineClamp: 1,
          children: null != Y ? Y : v.default.Messages.EMBEDDED_ACTIVITIES_INSTANCE_EMBED_NO_PRESENCE
        })]
      }), (0, s.jsxs)("div", {
        className: P.footerContainer,
        children: [z ? (0, s.jsxs)("div", {
          className: P.endedNote,
          children: [(0, s.jsx)(r.Text, {
            variant: "text-md/medium",
            children: v.default.Messages.EMBEDDED_ACTIVITIES_EMBED_ENDED
          }), (0, s.jsx)(r.Text, {
            variant: "text-md/medium",
            children: v.default.Messages.EMBEDDED_ACTIVITIES_EMBED_START
          })]
        }) : (0, s.jsx)(M.default, {
          guildId: x,
          users: V,
          max: 4
        }), (0, s.jsx)(r.Tooltip, {
          text: Z.tooltip,
          children: e => {
            let {
              onClick: t,
              ...n
            } = e;
            return (0, l.createElement)(r.Button, {
              ...n,
              key: "".concat(Z.isJoinAction),
              onClick: () => {
                J(), null == t || t()
              },
              color: Z.isJoinAction ? r.ButtonColors.PRIMARY : r.ButtonColors.GREEN,
              submitting: y,
              disabled: Z.disabled
            }, Z.text)
          }
        })]
      })]
    })]
  });
  return (0, s.jsx)("div", {
    className: i(P.outerContainer, B),
    ref: G,
    children: B !== D.UNKNOWN && Q
  })
}