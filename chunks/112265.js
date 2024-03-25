"use strict";
n.r(t), n.d(t, {
  default: function() {
    return w
  }
});
var l = n("37983"),
  a = n("884691"),
  s = n("414456"),
  i = n.n(s),
  u = n("446674"),
  r = n("77078"),
  o = n("812204"),
  d = n("685665"),
  c = n("69927"),
  f = n("994906"),
  h = n("459824"),
  m = n("41594"),
  S = n("539938"),
  g = n("393414"),
  x = n("401642"),
  E = n("982108"),
  T = n("42203"),
  p = n("923959"),
  C = n("305961"),
  A = n("18494"),
  I = n("98292"),
  M = n("155207"),
  N = n("466818"),
  b = n("485810"),
  j = n("914985"),
  v = n("714247"),
  _ = n("565556"),
  R = n("891222"),
  L = n("49111"),
  k = n("724210"),
  B = n("789150"),
  G = n("782340"),
  F = n("847234"),
  y = n("250455");

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
    innerClassname: F.innerHeader,
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
            }), (0, l.jsx)(I.default, {
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
      icon: M.default,
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
  } = (0, d.default)(o.default.MEMBER_SAFETY_PAGE), c = (0, N.useCanAccessMemberSafetyPage)(t), m = (0, h.useCanAccessGuildMemberModView)(t, c), S = (0, u.useStateFromStores)([A.default], () => A.default.getLastSelectedChannelId(t)), I = (0, u.useStateFromStores)([T.default], () => T.default.getChannel(S)), M = a.useRef(null);
  (0, b.useSubscribeToGuildMemberUpdates)(t), a.useEffect(() => {
    if (!c && null != n) {
      var e;
      let t = null === (e = p.default.getDefaultChannel(n.id)) || void 0 === e ? void 0 : e.id;
      (0, g.transitionToGuild)(n.id, t)
    }
  }, [n, c]);
  let G = (0, u.useStateFromStores)([E.default], () => null != E.default.getGuildSidebarState(t), [t]),
    w = a.useCallback(e => {
      let t = (0, h.canAccessGuildMemberModViewWithExperiment)(e.guildId, !0);
      t ? (0, f.openGuildMemberModViewSidebar)(e.guildId, e.userId, k.StaticChannelRoute.MEMBER_SAFETY, {
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
      className: i(y.chat, F.page, {
        [y.threadSidebarOpen]: G
      }),
      children: [(0, l.jsx)(P, {
        guild: n,
        previousChannel: I
      }), (0, l.jsx)(r.AdvancedScroller, {
        className: i(F.scroller),
        ref: M,
        orientation: "vertical",
        children: (0, l.jsxs)("div", {
          className: i(y.content, F.container),
          children: [(0, l.jsx)(j.default, {
            guild: n
          }), (0, l.jsx)(R.default, {
            guild: n,
            onMemberSelect: w
          })]
        })
      }), (0, l.jsx)(_.default, {
        guildId: n.id
      })]
    }), m && (0, l.jsx)(v.default, {
      guildId: n.id
    })]
  }) : null
}