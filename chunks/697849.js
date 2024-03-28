"use strict";
n.r(t), n("47120");
var l = n("735250"),
  i = n("470079"),
  a = n("442837"),
  r = n("481060"),
  s = n("100527"),
  u = n("906732"),
  d = n("724912"),
  o = n("41776"),
  c = n("592125"),
  f = n("153124"),
  v = n("626135"),
  E = n("981888"),
  h = n("897285"),
  m = n("924301"),
  g = n("951539"),
  _ = n("592126"),
  I = n("315416"),
  S = n("711373"),
  N = n("274311"),
  x = n("854698"),
  T = n("405613"),
  p = n("285784"),
  C = n("95291"),
  j = n("187443"),
  L = n("464766"),
  R = n("724278"),
  y = n("462747"),
  M = n("462179"),
  A = n("765305"),
  D = n("981631"),
  b = n("441520");

function G(e) {
  let {
    guildEvent: t,
    guild: n,
    channel: i,
    onActionTaken: r,
    isHub: s,
    isMember: u,
    recurrenceId: d
  } = e, c = (0, m.isGuildScheduledEventActive)(t), f = (0, a.useStateFromStores)([m.default], () => m.default.isInterestedInEventRecurrence(t.id, d), [d, t]), v = (0, g.default)(t), E = (0, a.useStateFromStores)([o.default], () => o.default.isLurking(n.id), [n.id]), h = (0, N.useIsChannelPublic)(null == i ? void 0 : i.id, t.id), _ = (0, M.default)({
    guild: n,
    channel: i,
    guildScheduledEvent: t,
    isActive: c,
    recurrenceId: d,
    onActionTaken: r
  }), {
    entity_type: I
  } = t;
  return s ? (0, l.jsx)(j.default, {
    isActive: c,
    isUserLurking: E,
    rsvped: f,
    isMember: u,
    isDetailsView: !0,
    guildName: null == n ? void 0 : n.name,
    isChannelPublic: h,
    canInvite: v,
    ..._
  }) : (0, l.jsx)(p.default, {
    isActive: c,
    isUserLurking: E,
    rsvped: f,
    isChannelPublic: h,
    canInvite: v,
    entityType: I,
    ..._
  })
}
t.default = e => {
  let {
    guildScheduledEventId: t,
    parentGuildId: n,
    transitionState: o,
    initialRecurrenceId: g,
    onClose: N
  } = e, {
    analyticsLocations: p
  } = (0, u.default)(s.default.GUILD_EVENT_MODAL), [j, M] = i.useState(g), U = (0, a.useStateFromStores)([m.default], () => m.default.getGuildScheduledEvent(t), [t]), k = null == U ? void 0 : U.id, P = null == U ? void 0 : U.guild_id, {
    guild: V,
    isMember: O
  } = (0, _.default)(P, k), F = (0, d.default)(n), w = null == U ? void 0 : U.channel_id, B = (0, a.useStateFromStores)([c.default], () => c.default.getChannel(w), [w]), H = (0, f.useUID)(), [z, X] = i.useState(A.EventDetailSections.EVENT_INFO), Y = (0, S.default)(k, j), K = (0, I.default)(P, k, j), [J, {
    loading: W,
    error: Z
  }] = (0, E.default)(() => h.default.getGuildEventUsers(null == U ? void 0 : U.id, j, P));
  i.useEffect(() => {
    null == U ? N() : v.default.track(D.AnalyticEvents.OPEN_MODAL, {
      type: A.ANALYTICS_GUILD_EVENTS_MODAL_NAME,
      guild_id: U.guild_id
    })
  }, [U, N]);
  let q = i.useRef(null),
    [Q, $] = i.useState(0);
  if (i.useLayoutEffect(() => {
      var e, t;
      let n = (null == U ? void 0 : U.recurrence_rule) != null ? 16 : 0;
      $((null !== (t = null == q ? void 0 : null === (e = q.current) || void 0 === e ? void 0 : e.offsetHeight) && void 0 !== t ? t : 0) + n)
    }, [q, null == U ? void 0 : U.recurrence_rule]), null == U || null == V || !O && !F) return null;
  let ee = e => {
      e !== z && (e === A.EventDetailSections.RSVP_LIST && J(), X(e))
    },
    et = null != j ? j : (0, x.getNextRecurrenceIdInEvent)(U);
  return (0, l.jsx)(u.AnalyticsLocationProvider, {
    value: p,
    children: (0, l.jsxs)(r.ModalRoot, {
      size: r.ModalSize.MEDIUM,
      transitionState: o,
      "aria-labelledby": H,
      className: b.root,
      children: [(null == U ? void 0 : U.image) != null && (0, l.jsx)(C.default, {
        source: (0, T.default)(U),
        className: b.banner
      }), (0, l.jsx)(L.default, {
        onClose: N,
        selectedTab: z,
        onTabSelected: ee,
        userCount: K,
        hasBanner: (null == U ? void 0 : U.image) != null,
        isHub: F
      }), (0, l.jsx)("div", {
        className: b.container,
        children: (0, l.jsx)(r.ModalContent, {
          className: b.contentContainer,
          style: {
            height: Q
          },
          children: (0, l.jsxs)(r.Slides, {
            activeSlide: z,
            width: 600,
            centered: !1,
            children: [(0, l.jsx)(r.Slide, {
              id: A.EventDetailSections.EVENT_INFO,
              children: (0, l.jsx)(R.default, {
                guildEvent: U,
                guild: V,
                channel: B,
                headerId: H,
                onClose: N,
                onClickInterestedCount: () => ee(A.EventDetailSections.RSVP_LIST),
                isHub: F,
                containerRef: q,
                recurrenceId: et,
                setRecurrenceId: M
              })
            }), (0, l.jsx)(r.Slide, {
              id: A.EventDetailSections.RSVP_LIST,
              children: (0, l.jsx)(y.default, {
                guildEvent: U,
                recurrenceId: et,
                eventUsers: Y,
                loading: W,
                containerHeight: Q,
                error: Z
              })
            })]
          })
        })
      }), (0, l.jsx)(r.ModalFooter, {
        className: b.footer,
        children: (0, l.jsx)(G, {
          guildEvent: U,
          isHub: F,
          isMember: O,
          guild: V,
          channel: B,
          onActionTaken: N,
          recurrenceId: et
        })
      })]
    })
  })
}