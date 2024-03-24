"use strict";
n.r(t), n.d(t, {
  default: function() {
    return w
  }
});
var l = n("37983"),
  s = n("884691"),
  a = n("414456"),
  i = n.n(a),
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
  I = n("18494"),
  M = n("98292"),
  A = n("155207"),
  N = n("466818"),
  b = n("485810"),
  j = n("914985"),
  _ = n("714247"),
  v = n("565556"),
  R = n("891222"),
  k = n("49111"),
  B = n("724210"),
  G = n("789150"),
  L = n("782340"),
  F = n("847234"),
  y = n("250455");

function P(e) {
  let {
    guild: t,
    previousChannel: n
  } = e, a = L.default.Messages.MEMBER_SAFETY_CHANNEL_TITLE, i = L.default.Messages.MEMBER_SAFETY_CHANNEL_TITLE;
  return (0, c.usePageTitle)({
    location: t.name,
    subsection: a
  }), (0, l.jsxs)(S.default, {
    className: F.header,
    innerClassname: F.innerHeader,
    channelId: B.StaticChannelRoute.MEMBER_SAFETY,
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
        children: L.default.Messages.RETURN_TO_CHANNEL.format({
          channelNameHook: () => null == n ? null : (0, l.jsxs)(s.Fragment, {
            children: [(0, l.jsx)(m.ChannelItemIcon, {
              className: F.returnIcon,
              guild: t,
              channel: n
            }), (0, l.jsx)(M.default, {
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
      icon: A.default,
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
    AnalyticsLocationProvider: a,
    analyticsLocations: c
  } = (0, d.default)(o.default.MEMBER_SAFETY_PAGE), m = (0, N.useCanAccessMemberSafetyPage)(t), S = (0, h.useCanAccessGuildMemberModView)(t, m), M = (0, u.useStateFromStores)([I.default], () => I.default.getLastSelectedChannelId(t)), A = (0, u.useStateFromStores)([T.default], () => T.default.getChannel(M)), L = s.useRef(null);
  (0, b.useSubscribeToGuildMemberUpdates)(t), s.useEffect(() => {
    if (!m && null != n) {
      var e;
      let t = null === (e = p.default.getDefaultChannel(n.id)) || void 0 === e ? void 0 : e.id;
      (0, g.transitionToGuild)(n.id, t)
    }
  }, [n, m]);
  let w = (0, u.useStateFromStores)([E.default], () => null != E.default.getGuildSidebarState(t), [t]),
    H = s.useCallback(e => {
      let t = (0, h.canAccessGuildMemberModViewWithExperiment)(e.guildId, !0);
      t ? (0, f.openGuildMemberModViewSidebar)(e.guildId, e.userId, B.StaticChannelRoute.MEMBER_SAFETY, {
        modViewPanel: G.ModViewPanel.INFO
      }) : (0, x.openUserProfileModal)({
        userId: e.userId,
        guildId: e.guildId,
        sourceAnalyticsLocations: c,
        analyticsLocation: {
          section: k.AnalyticsSections.MEMBER_SAFETY_PAGE
        }
      })
    }, [c]);
  return null != n && m ? (0, l.jsxs)(a, {
    children: [(0, l.jsxs)("div", {
      className: i(y.chat, F.page, {
        [y.threadSidebarOpen]: w
      }),
      children: [(0, l.jsx)(P, {
        guild: n,
        previousChannel: A
      }), (0, l.jsx)(r.AdvancedScroller, {
        className: i(F.scroller),
        ref: L,
        orientation: "vertical",
        children: (0, l.jsxs)("div", {
          className: i(y.content, F.container),
          children: [(0, l.jsx)(j.default, {
            guild: n
          }), (0, l.jsx)(R.default, {
            guild: n,
            onMemberSelect: H
          })]
        })
      }), (0, l.jsx)(v.default, {
        guildId: n.id
      })]
    }), S && (0, l.jsx)(_.default, {
      guildId: n.id
    })]
  }) : null
}