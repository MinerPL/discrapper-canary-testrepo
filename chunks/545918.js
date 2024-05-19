"use strict";
n.r(t), n.d(t, {
  default: function() {
    return w
  }
});
var l = n("735250"),
  a = n("470079"),
  s = n("120356"),
  i = n.n(s),
  u = n("442837"),
  r = n("481060"),
  o = n("100527"),
  d = n("906732"),
  c = n("252618"),
  f = n("189432"),
  h = n("189357"),
  m = n("473403"),
  S = n("984370"),
  g = n("703656"),
  x = n("171368"),
  E = n("433355"),
  T = n("592125"),
  p = n("984933"),
  C = n("430824"),
  b = n("944486"),
  A = n("514342"),
  I = n("158010"),
  M = n("241559"),
  N = n("575766"),
  j = n("305473"),
  _ = n("937283"),
  v = n("440857"),
  R = n("707113"),
  L = n("981631"),
  k = n("176505"),
  B = n("50493"),
  G = n("689938"),
  F = n("94234"),
  y = n("19340");

function P(e) {
  let {
    guild: t,
    previousChannel: n
  } = e, s = G.default.Messages.MEMBER_SAFETY_CHANNEL_TITLE, i = G.default.Messages.MEMBER_SAFETY_CHANNEL_TITLE;
  return (0, c.usePageTitle)({
    location: t.name,
    subsection: s
  }), (0, l.jsxs)(S.default, {
    className: F.header,
    innerClassname: F.__invalid_innerHeader,
    channelId: k.StaticChannelRoute.MEMBER_SAFETY,
    guildId: t.id,
    hideSearch: !0,
    toolbar: null != n ? (0, l.jsx)(r.Button, {
      className: F.returnButton,
      size: r.Button.Sizes.SMALL,
      look: r.Button.Looks.OUTLINED,
      color: r.Button.Colors.PRIMARY,
      onClick: () => {
        null != n && (0, g.transitionToGuild)(t.id, n.id)
      },
      children: (0, l.jsx)(r.Text, {
        className: F.returnButtonText,
        variant: "text-xs/medium",
        color: "none",
        children: G.default.Messages.RETURN_TO_CHANNEL.format({
          channelNameHook: () => null == n ? null : (0, l.jsxs)(a.Fragment, {
            children: [(0, l.jsx)(m.ChannelItemIcon, {
              className: F.returnIcon,
              guild: t,
              channel: n
            }), (0, l.jsx)(A.default, {
              children: (0, l.jsx)(r.Text, {
                variant: "text-xs/medium",
                color: "none",
                children: n.name
              })
            })]
          }, n.id)
        })
      })
    }) : (0, l.jsx)("div", {}),
    children: [(0, l.jsx)(S.default.Icon, {
      icon: I.default,
      "aria-hidden": !0
    }), (0, l.jsx)(S.default.Title, {
      children: i
    })]
  })
}

function w(e) {
  let {
    guildId: t
  } = e, n = (0, u.useStateFromStores)([C.default], () => C.default.getGuild(t)), {
    analyticsLocations: s
  } = (0, d.default)(o.default.MEMBER_SAFETY_PAGE), c = (0, M.useCanAccessMemberSafetyPage)(t), m = (0, h.useCanAccessGuildMemberModView)(t, c), S = (0, u.useStateFromStores)([b.default], () => b.default.getLastSelectedChannelId(t)), A = (0, u.useStateFromStores)([T.default], () => T.default.getChannel(S)), I = a.useRef(null);
  (0, N.useSubscribeToGuildMemberUpdates)(t), a.useEffect(() => {
    if (!c && null != n) {
      var e;
      let t = null === (e = p.default.getDefaultChannel(n.id)) || void 0 === e ? void 0 : e.id;
      (0, g.transitionToGuild)(n.id, t)
    }
  }, [n, c]);
  let G = (0, u.useStateFromStores)([E.default], () => null != E.default.getGuildSidebarState(t), [t]),
    w = a.useCallback(e => {
      (0, h.canAccessGuildMemberModViewWithExperiment)(e.guildId, !0) ? (0, f.openGuildMemberModViewSidebar)(e.guildId, e.userId, k.StaticChannelRoute.MEMBER_SAFETY, {
        modViewPanel: B.ModViewPanel.INFO
      }) : (0, x.openUserProfileModal)({
        userId: e.userId,
        guildId: e.guildId,
        sourceAnalyticsLocations: s,
        analyticsLocation: {
          section: L.AnalyticsSections.MEMBER_SAFETY_PAGE
        }
      })
    }, [s]);
  return null != n && c ? (0, l.jsxs)(d.AnalyticsLocationProvider, {
    value: s,
    children: [(0, l.jsxs)("div", {
      className: i()(y.chat, F.page, {
        [y.threadSidebarOpen]: G
      }),
      children: [(0, l.jsx)(P, {
        guild: n,
        previousChannel: A
      }), (0, l.jsx)(r.AdvancedScroller, {
        className: i()(F.scroller),
        ref: I,
        orientation: "vertical",
        children: (0, l.jsxs)("div", {
          className: i()(y.content, F.container),
          children: [(0, l.jsx)(j.default, {
            guild: n
          }), (0, l.jsx)(R.default, {
            guild: n,
            onMemberSelect: w
          })]
        })
      }), (0, l.jsx)(v.default, {
        guildId: n.id
      })]
    }), m && (0, l.jsx)(_.default, {
      guildId: n.id
    })]
  }) : null
}