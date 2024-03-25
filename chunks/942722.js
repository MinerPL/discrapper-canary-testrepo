"use strict";
n.r(t), n.d(t, {
  default: function() {
    return w
  }
}), n("222007");
var a = n("37983"),
  l = n("884691"),
  s = n("394846"),
  i = n("446674"),
  r = n("77078"),
  u = n("272030"),
  o = n("352674"),
  d = n("812204"),
  c = n("685665"),
  f = n("252063"),
  h = n("506885"),
  m = n("981601"),
  p = n("824563"),
  E = n("27618"),
  g = n("191542"),
  S = n("697218"),
  C = n("79798"),
  _ = n("151185"),
  I = n("11056"),
  T = n("826684"),
  v = n("599110"),
  x = n("315102"),
  N = n("659500"),
  A = n("519812"),
  M = n("158998"),
  R = n("50885"),
  j = n("888503"),
  L = n("49111"),
  y = n("782340"),
  O = n("591665"),
  P = n("559571");
let D = R.default.getEnableHardwareAcceleration();

function b(e) {
  let {
    user: t,
    channel: l
  } = e, {
    status: d,
    activities: c
  } = (0, i.useStateFromStoresObject)([E.default, S.default, p.default], () => E.default.isFriend(t.id) || t === S.default.getCurrentUser() ? {
    status: p.default.getStatus(t.id),
    activities: p.default.getActivities(t.id)
  } : {}), f = (0, i.useStateFromStores)([g.default], () => null != g.default.getTypingUsers(l.id)[t.id]), C = (0, i.useStateFromStores)([S.default], () => S.default.getCurrentUser()), _ = (0, i.useStateFromStores)([p.default], () => p.default.isMobileOnline(t.id)), I = (0, i.useStateFromStores)([E.default], () => E.default.getNickname(t.id)), T = e => {
    (0, u.openContextMenuLazy)(e, async () => {
      let {
        default: e
      } = await n.el("166452").then(n.bind(n, "166452"));
      return n => (0, a.jsx)(e, {
        ...n,
        user: t,
        channel: l
      })
    })
  };
  return (0, a.jsx)(r.Popout, {
    preload: () => (0, h.default)(t.id, t.getAvatarURL(void 0, 80)),
    renderPopout: e => (0, a.jsx)(m.default, {
      ...e,
      userId: t.id,
      channelId: l.id
    }),
    position: s.isMobile ? "window_center" : "left",
    spacing: 16,
    onShiftClick: () => {
      let e = "@".concat(M.default.getUserTag(t, {
          decoration: "never"
        })),
        n = "<@".concat(t.id, ">");
      N.ComponentDispatch.dispatchToLastSubscribed(L.ComponentActions.INSERT_TEXT, {
        plainText: e,
        rawText: n
      }), o.default.startTyping(l.id)
    },
    children: e => (0, a.jsx)(j.default, {
      user: t,
      currentUser: C,
      isOwner: t.id === l.ownerId,
      ownerTooltipText: y.default.Messages.GROUP_OWNER,
      shouldAnimateStatus: D,
      isTyping: f,
      status: d,
      activities: c,
      channel: l,
      onContextMenu: T,
      isMobile: _,
      nick: I,
      ...e
    }, t.id)
  })
}

function U(e) {
  var t;
  let {
    integration: i,
    channel: o
  } = e, d = l.useCallback(e => {
    (0, u.openContextMenuLazy)(e, async () => {
      let {
        default: e
      } = await n.el("348866").then(n.bind(n, "348866"));
      return t => (0, a.jsx)(e, {
        ...t,
        channel: o,
        integration: i
      })
    })
  }, [i, o]), c = i.application.bot, f = x.default.getApplicationIconURL({
    id: i.application.id,
    icon: i.application.icon,
    bot: null === (t = i.application) || void 0 === t ? void 0 : t.bot,
    botIconFirst: !0
  });
  return null != c ? (0, a.jsx)(r.Popout, {
    preload: () => (0, h.default)(c.id, f),
    renderPopout: e => (0, a.jsx)(m.default, {
      ...e,
      userId: c.id,
      channelId: o.id
    }),
    position: s.isMobile ? "window_center" : "left",
    spacing: 16,
    children: e => (0, a.jsx)(I.default, {
      onContextMenu: d,
      className: O.member,
      name: (0, a.jsx)("span", {
        className: O.username,
        children: i.application.name
      }),
      avatar: (0, a.jsx)(r.Avatar, {
        size: r.AvatarSizes.SIZE_32,
        src: f,
        "aria-label": i.application.name,
        statusTooltip: !0
      }),
      decorators: (0, a.jsx)(C.default, {
        className: O.botTag,
        verified: null == c ? void 0 : c.isVerifiedBot()
      }),
      id: i.application.id,
      focusProps: {
        offset: {
          top: 4,
          bottom: 4,
          left: 4,
          right: 4
        }
      },
      ...e
    })
  }) : null
}

function w(e) {
  let {
    channel: t
  } = e, s = S.default.getCurrentUser(), u = null == s ? void 0 : s.isStaff(), {
    analyticsLocations: o
  } = (0, c.default)(d.default.MEMBER_LIST), m = (0, i.useStateFromStoresArray)([S.default], () => (0, A.getRecipients)(t.recipients, S.default), [t.recipients]), {
    installedIntegrations: p,
    applicationsShelf: E,
    fetched: g,
    appsInGDMEnabled: x,
    availableApplications: N
  } = (0, f.usePrivateChannelIntegrationState)({
    channelId: t.id
  });
  l.useEffect(() => {
    if (u)
      for (let e of m)(0, h.default)(e.id, e.getAvatarURL(void 0, 80), {
        dispatchWait: !0
      })
  }, [u, m]), l.useEffect(() => {
    v.default.track(L.AnalyticEvents.MEMBER_LIST_VIEWED, {
      channel_id: t.id,
      channel_type: t.type,
      guild_id: t.guild_id
    })
  }, [t.guild_id, t.id, t.type]);
  let M = u && m.every(e => e.isStaff());
  return (0, a.jsx)(c.AnalyticsLocationProvider, {
    value: o,
    children: (0, a.jsx)("div", {
      className: P.membersWrap,
      children: (0, a.jsxs)(r.Scroller, {
        className: P.members,
        fade: !0,
        children: [(0, a.jsxs)(T.default, {
          className: P.membersGroup,
          children: ["".concat(y.default.Messages.MEMBERS, "—").concat(m.length, " "), M ? (0, a.jsx)(C.default, {
            className: P.decorator,
            type: C.default.Types.STAFF_ONLY_DM
          }) : null]
        }), m.map(e => (0, a.jsx)(b, {
          user: e,
          channel: t
        }, e.id)), x && (p.length > 0 || g && E.length > 0) && (0, a.jsxs)(a.Fragment, {
          children: [(0, a.jsx)(T.default, {
            className: P.membersGroup,
            children: "".concat(y.default.Messages.APPS, "—").concat(p.length)
          }), p.map(e => (0, a.jsx)(U, {
            integration: e,
            channel: t
          }, e.application.id)), N.length > 0 && (0, a.jsx)(I.default, {
            className: O.member,
            onClick: () => {
              (0, r.openModalLazy)(async () => {
                let {
                  default: e
                } = await n.el("724110").then(n.bind(n, "724110"));
                return n => (0, a.jsx)(e, {
                  ...n,
                  channelId: t.id
                })
              })
            },
            avatar: (0, a.jsx)("div", {
              className: P.appIconWrapper,
              children: (0, a.jsx)(_.default, {
                width: 18,
                height: 18
              })
            }),
            name: y.default.Messages.PRIVATE_CHANNEL_ADD_APPS
          })]
        })]
      })
    })
  })
}