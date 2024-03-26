"use strict";
n.r(t), n.d(t, {
  default: function() {
    return V
  }
}), n("222007");
var i = n("37983"),
  l = n("884691"),
  r = n("446674"),
  s = n("77078"),
  a = n("812204"),
  u = n("685665"),
  o = n("922770"),
  d = n("267567"),
  c = n("42203"),
  f = n("476765"),
  v = n("599110"),
  h = n("686904"),
  E = n("933326"),
  m = n("398604"),
  C = n("152475"),
  _ = n("598639"),
  p = n("18284"),
  S = n("821393"),
  g = n("613767"),
  I = n("822516"),
  N = n("93550"),
  T = n("707916"),
  x = n("255050"),
  R = n("644189"),
  A = n("965353"),
  y = n("360538"),
  M = n("403901"),
  L = n("369404"),
  j = n("745049"),
  b = n("49111"),
  P = n("536430");

function w(e) {
  let {
    guildEvent: t,
    guild: n,
    channel: l,
    onActionTaken: s,
    isHub: a,
    isMember: u,
    recurrenceId: o
  } = e, c = (0, m.isGuildScheduledEventActive)(t), f = (0, r.useStateFromStores)([m.default], () => m.default.isInterestedInEventRecurrence(t.id, o), [o, t]), v = (0, C.default)(t), h = (0, r.useStateFromStores)([d.default], () => d.default.isLurking(n.id), [n.id]), E = (0, g.useIsChannelPublic)(null == l ? void 0 : l.id, t.id), _ = (0, L.default)({
    guild: n,
    channel: l,
    guildScheduledEvent: t,
    isActive: c,
    recurrenceId: o,
    onActionTaken: s
  }), {
    entity_type: p
  } = t;
  return a ? (0, i.jsx)(R.default, {
    isActive: c,
    isUserLurking: h,
    rsvped: f,
    isMember: u,
    isDetailsView: !0,
    guildName: null == n ? void 0 : n.name,
    isChannelPublic: E,
    canInvite: v,
    ..._
  }) : (0, i.jsx)(T.default, {
    isActive: c,
    isUserLurking: h,
    rsvped: f,
    isChannelPublic: E,
    canInvite: v,
    entityType: p,
    ..._
  })
}
var V = e => {
  let {
    guildScheduledEventId: t,
    parentGuildId: n,
    transitionState: d,
    initialRecurrenceId: C,
    onClose: g
  } = e, {
    analyticsLocations: T
  } = (0, u.default)(a.default.GUILD_EVENT_MODAL), [R, L] = l.useState(C), V = (0, r.useStateFromStores)([m.default], () => m.default.getGuildScheduledEvent(t), [t]), D = null == V ? void 0 : V.id, O = null == V ? void 0 : V.guild_id, {
    guild: U,
    isMember: G
  } = (0, _.default)(O, D), F = (0, o.default)(n), H = null == V ? void 0 : V.channel_id, k = (0, r.useStateFromStores)([c.default], () => c.default.getChannel(H), [H]), B = (0, f.useUID)(), [Z, z] = l.useState(j.EventDetailSections.EVENT_INFO), W = (0, S.default)(D, R), Y = (0, p.default)(O, D, R), [X, {
    loading: K,
    error: J
  }] = (0, h.default)(() => E.default.getGuildEventUsers(null == V ? void 0 : V.id, R, O));
  l.useEffect(() => {
    null == V ? g() : v.default.track(b.AnalyticEvents.OPEN_MODAL, {
      type: j.ANALYTICS_GUILD_EVENTS_MODAL_NAME,
      guild_id: V.guild_id
    })
  }, [V, g]);
  let q = l.useRef(null),
    [Q, $] = l.useState(0);
  if (l.useLayoutEffect(() => {
      var e, t;
      let n = (null == V ? void 0 : V.recurrence_rule) != null ? 16 : 0;
      $((null !== (t = null == q ? void 0 : null === (e = q.current) || void 0 === e ? void 0 : e.offsetHeight) && void 0 !== t ? t : 0) + n)
    }, [q, null == V ? void 0 : V.recurrence_rule]), null == V || null == U || !G && !F) return null;
  let ee = e => {
      e !== Z && (e === j.EventDetailSections.RSVP_LIST && X(), z(e))
    },
    et = null != R ? R : (0, I.getNextRecurrenceIdInEvent)(V);
  return (0, i.jsx)(u.AnalyticsLocationProvider, {
    value: T,
    children: (0, i.jsxs)(s.ModalRoot, {
      size: s.ModalSize.MEDIUM,
      transitionState: d,
      "aria-labelledby": B,
      className: P.root,
      children: [(null == V ? void 0 : V.image) != null && (0, i.jsx)(x.default, {
        source: (0, N.default)(V),
        className: P.banner
      }), (0, i.jsx)(A.default, {
        onClose: g,
        selectedTab: Z,
        onTabSelected: ee,
        userCount: Y,
        hasBanner: (null == V ? void 0 : V.image) != null,
        isHub: F
      }), (0, i.jsx)("div", {
        className: P.container,
        children: (0, i.jsx)(s.ModalContent, {
          className: P.contentContainer,
          style: {
            height: Q
          },
          children: (0, i.jsxs)(s.Slides, {
            activeSlide: Z,
            width: 600,
            centered: !1,
            children: [(0, i.jsx)(s.Slide, {
              id: j.EventDetailSections.EVENT_INFO,
              children: (0, i.jsx)(y.default, {
                guildEvent: V,
                guild: U,
                channel: k,
                headerId: B,
                onClose: g,
                onClickInterestedCount: () => ee(j.EventDetailSections.RSVP_LIST),
                isHub: F,
                containerRef: q,
                recurrenceId: et,
                setRecurrenceId: L
              })
            }), (0, i.jsx)(s.Slide, {
              id: j.EventDetailSections.RSVP_LIST,
              children: (0, i.jsx)(M.default, {
                guildEvent: V,
                recurrenceId: et,
                eventUsers: W,
                loading: K,
                containerHeight: Q,
                error: J
              })
            })]
          })
        })
      }), (0, i.jsx)(s.ModalFooter, {
        className: P.footer,
        children: (0, i.jsx)(w, {
          guildEvent: V,
          isHub: F,
          isMember: G,
          guild: U,
          channel: k,
          onActionTaken: g,
          recurrenceId: et
        })
      })]
    })
  })
}