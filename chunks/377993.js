"use strict";
n.r(t), n.d(t, {
  default: function() {
    return F
  }
}), n("47120");
var a = n("735250"),
  l = n("470079"),
  s = n("873546"),
  i = n("442837"),
  r = n("481060"),
  o = n("239091"),
  u = n("144144"),
  d = n("100527"),
  c = n("906732"),
  f = n("556084"),
  h = n("484459"),
  m = n("103575"),
  p = n("158776"),
  E = n("699516"),
  C = n("111583"),
  g = n("594174"),
  S = n("467679"),
  _ = n("729285"),
  T = n("360048"),
  I = n("151827"),
  A = n("626135"),
  v = n("768581"),
  N = n("585483"),
  x = n("233870"),
  M = n("51144"),
  R = n("998502"),
  L = n("276264"),
  y = n("981631"),
  O = n("689938"),
  j = n("581477"),
  P = n("652985");
let D = R.default.getEnableHardwareAcceleration();

function b(e) {
  let {
    user: t,
    channel: l
  } = e, {
    status: d,
    activities: c
  } = (0, i.useStateFromStoresObject)([E.default, g.default, p.default], () => E.default.isFriend(t.id) || t === g.default.getCurrentUser() ? {
    status: p.default.getStatus(t.id),
    activities: p.default.getActivities(t.id)
  } : {}), f = (0, i.useStateFromStores)([C.default], () => null != C.default.getTypingUsers(l.id)[t.id]), S = (0, i.useStateFromStores)([g.default], () => g.default.getCurrentUser()), _ = (0, i.useStateFromStores)([p.default], () => p.default.isMobileOnline(t.id)), T = (0, i.useStateFromStores)([E.default], () => E.default.getNickname(t.id)), I = e => {
    (0, o.openContextMenuLazy)(e, async () => {
      let {
        default: e
      } = await Promise.all([n.e("99387"), n.e("79695"), n.e("85559"), n.e("60677")]).then(n.bind(n, "354589"));
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
      location: "PrivateChannelRecipients",
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
      N.ComponentDispatch.dispatchToLastSubscribed(y.ComponentActions.INSERT_TEXT, {
        plainText: e,
        rawText: n
      }), u.default.startTyping(l.id)
    },
    children: e => (0, a.jsx)(L.default, {
      user: t,
      currentUser: S,
      isOwner: t.id === l.ownerId,
      ownerTooltipText: O.default.Messages.GROUP_OWNER,
      shouldAnimateStatus: D,
      isTyping: f,
      status: d,
      activities: c,
      channel: l,
      onContextMenu: I,
      isMobile: _,
      nick: T,
      ...e
    }, t.id)
  })
}

function U(e) {
  var t;
  let {
    integration: i,
    channel: u
  } = e, d = l.useCallback(e => {
    (0, o.openContextMenuLazy)(e, async () => {
      let {
        default: e
      } = await n.e("30887").then(n.bind(n, "496281"));
      return t => (0, a.jsx)(e, {
        ...t,
        channel: u,
        integration: i
      })
    })
  }, [i, u]), c = i.application.bot, f = v.default.getApplicationIconURL({
    id: i.application.id,
    icon: i.application.icon,
    bot: null === (t = i.application) || void 0 === t ? void 0 : t.bot,
    botIconFirst: !0
  });
  return null != c ? (0, a.jsx)(r.Popout, {
    preload: () => (0, h.default)(c.id, f),
    renderPopout: e => (0, a.jsx)(m.default, {
      ...e,
      location: "PrivateChannelRecipients",
      userId: c.id,
      channelId: u.id
    }),
    position: s.isMobile ? "window_center" : "left",
    spacing: 16,
    children: e => (0, a.jsx)(T.default, {
      onContextMenu: d,
      className: j.member,
      name: (0, a.jsx)("span", {
        className: j.username,
        children: i.application.name
      }),
      avatar: (0, a.jsx)(r.Avatar, {
        size: r.AvatarSizes.SIZE_32,
        src: f,
        "aria-label": i.application.name,
        statusTooltip: !0
      }),
      decorators: (0, a.jsx)(S.default, {
        className: j.botTag,
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

function F(e) {
  let {
    channel: t
  } = e, s = g.default.getCurrentUser(), o = null == s ? void 0 : s.isStaff(), {
    analyticsLocations: u
  } = (0, c.default)(d.default.MEMBER_LIST), m = (0, i.useStateFromStoresArray)([g.default], () => (0, x.getRecipients)(t.recipients, g.default), [t.recipients]), {
    installedIntegrations: p,
    applicationsShelf: E,
    fetched: C,
    appsInGDMEnabled: v,
    availableApplications: N
  } = (0, f.usePrivateChannelIntegrationState)({
    channelId: t.id
  });
  l.useEffect(() => {
    if (o)
      for (let e of m)(0, h.default)(e.id, e.getAvatarURL(void 0, 80), {
        dispatchWait: !0
      })
  }, [o, m]), l.useEffect(() => {
    A.default.track(y.AnalyticEvents.MEMBER_LIST_VIEWED, {
      channel_id: t.id,
      channel_type: t.type,
      guild_id: t.guild_id
    })
  }, [t.guild_id, t.id, t.type]);
  let M = o && m.every(e => e.isStaff());
  return (0, a.jsx)(c.AnalyticsLocationProvider, {
    value: u,
    children: (0, a.jsx)("div", {
      className: P.membersWrap,
      children: (0, a.jsxs)(r.Scroller, {
        className: P.members,
        fade: !0,
        children: [(0, a.jsxs)(I.default, {
          className: P.membersGroup,
          children: ["".concat(O.default.Messages.MEMBERS, "—").concat(m.length, " "), M ? (0, a.jsx)(S.default, {
            className: P.__invalid_decorator,
            type: S.default.Types.STAFF_ONLY_DM
          }) : null]
        }), m.map(e => (0, a.jsx)(b, {
          user: e,
          channel: t
        }, e.id)), v && (p.length > 0 || C && E.length > 0) && (0, a.jsxs)(a.Fragment, {
          children: [(0, a.jsx)(I.default, {
            className: P.membersGroup,
            children: "".concat(O.default.Messages.APPS, "—").concat(p.length)
          }), p.map(e => (0, a.jsx)(U, {
            integration: e,
            channel: t
          }, e.application.id)), N.length > 0 && (0, a.jsx)(T.default, {
            className: j.member,
            onClick: () => {
              (0, r.openModalLazy)(async () => {
                let {
                  default: e
                } = await Promise.resolve().then(n.bind(n, "422677"));
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
            name: O.default.Messages.PRIVATE_CHANNEL_ADD_APPS
          })]
        })]
      })
    })
  })
}