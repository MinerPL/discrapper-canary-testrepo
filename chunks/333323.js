"use strict";
a.r(t), a.d(t, {
  default: function() {
    return O
  }
}), a("47120");
var l = a("735250"),
  n = a("470079"),
  s = a("120356"),
  i = a.n(s),
  d = a("399606"),
  r = a("481060"),
  u = a("749210"),
  o = a("131388"),
  c = a("367907"),
  f = a("644080"),
  m = a("984370"),
  h = a("6025"),
  E = a("433355"),
  g = a("308570"),
  _ = a("626135"),
  I = a("526120"),
  x = a("563534"),
  S = a("846121"),
  v = a("460347"),
  C = a("404488"),
  N = a("605276"),
  p = a("869764"),
  T = a("919318"),
  A = a("150512"),
  j = a("981631"),
  M = a("176505"),
  D = a("369701"),
  F = a("689938"),
  L = a("253533"),
  R = a("19340");
let b = C.MIN_GUILD_HOME_PAGE_WIDTH + 300 + 64,
  G = n.memo(function(e) {
    let {
      guild: t
    } = e;
    return (0, l.jsxs)(m.default, {
      channelId: M.StaticChannelRoute.GUILD_HOME,
      guildId: t.id,
      className: i()(L.title, L.background),
      innerClassname: L.headerBarInner,
      children: [(0, l.jsx)(m.default.Icon, {
        icon: g.default,
        "aria-hidden": !0
      }), (0, l.jsxs)(m.default.Title, {
        children: [(0, l.jsx)(r.HiddenVisually, {
          children: t.name
        }), F.default.Messages.SERVER_GUIDE]
      })]
    })
  });

function O(e) {
  var t, a;
  let {
    guild: s,
    width: m
  } = e, g = (0, d.useStateFromStores)([E.default], () => E.default.getSection(M.StaticChannelRoute.GUILD_HOME)), [F, O] = n.useState(!1), [y, H] = n.useState(j.DEFAULT_CHAT_SIDEBAR_WIDTH), k = g === j.ChannelSections.SIDEBAR_CHAT, U = (0, r.useFocusJumpSection)(), w = (0, d.useStateFromStores)([x.default], () => x.default.getSettings(s.id)), P = null == w ? void 0 : w.welcomeMessage, B = (0, v.default)(s.id), V = !B && (null !== (a = null == w ? void 0 : null === (t = w.resourceChannels) || void 0 === t ? void 0 : t.length) && void 0 !== a ? a : 0) === 0, W = (0, o.default)(D.COLLAPSED_SIZE_MEDIA_QUERY), K = m - j.CHANNEL_SIDEBAR_WIDTH - y, z = k && K < b || W || V;
  return (n.useEffect(() => {
    if (w === x.NO_SETTINGS)(0, I.fetchGuildHomeSettings)(s.id);
    else if (null != w) {
      var e, t, a, l, n;
      _.default.track(j.AnalyticEvents.SERVER_GUIDE_VIEWED, {
        ...(0, c.collectGuildAnalyticsMetadata)(s.id),
        num_member_actions: null !== (a = null === (e = w.newMemberActions) || void 0 === e ? void 0 : e.length) && void 0 !== a ? a : 0,
        num_member_actions_completed: Object.keys(null !== (l = S.default.getCompletedActions(s.id)) && void 0 !== l ? l : {}).length,
        num_resource_channels: null !== (n = null === (t = w.resourceChannels) || void 0 === t ? void 0 : t.length) && void 0 !== n ? n : 0
      })
    }
  }, [s.id, w]), n.useEffect(() => () => {
    h.default.closeChannelSidebar(M.StaticChannelRoute.GUILD_HOME)
  }, []), n.useEffect(() => {
    V && w !== x.NO_SETTINGS && u.default.escapeToDefaultChannel(s.id)
  }, [s.id, V, w]), V) ? null : (0, l.jsxs)(l.Fragment, {
    children: [(0, l.jsxs)("div", {
      className: i()(R.chat, L.background, {
        [R.threadSidebarOpen]: k,
        [R.threadSidebarFloating]: k && F
      }),
      children: [(0, l.jsx)(G, {
        guild: s
      }), (0, l.jsx)(r.AdvancedScrollerAuto, {
        ...U,
        children: (0, l.jsxs)("div", {
          className: i()(L.homeContainer, {
            [L.homeContainerCollapsed]: z
          }),
          children: [(0, l.jsx)("div", {
            className: L.maxWidthWrapper,
            children: (0, l.jsx)(f.default, {
              guild: s,
              titleClassName: W ? L.emptyHeaderTitle : void 0
            })
          }), (0, l.jsxs)("div", {
            className: i()(L.homeContent, L.maxWidthWrapper),
            children: [(0, l.jsxs)("div", {
              className: L.mainContent,
              children: [B && (0, l.jsx)(A.default, {
                guildId: s.id,
                welcomeMessage: P
              }), B && (0, l.jsx)(p.default, {
                guildId: s.id
              }), !B || z ? (0, l.jsx)(T.default, {
                guild: s,
                isNewMember: B
              }) : null]
            }), z ? null : (0, l.jsx)(N.default, {
              guild: s,
              isNewMember: B
            })]
          })]
        })
      })]
    }), k ? (0, l.jsx)(C.default, {
      pageWidth: m,
      onSidebarResize: (e, t) => {
        O(t), H(e)
      }
    }) : null]
  })
}