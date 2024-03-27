"use strict";
n.r(t), n.d(t, {
  default: function() {
    return M
  }
});
var a = n("37983"),
  s = n("884691"),
  l = n("394846"),
  i = n("446674"),
  r = n("77078"),
  o = n("850068"),
  u = n("516899"),
  d = n("69927"),
  c = n("657199"),
  f = n("250666"),
  E = n("465869"),
  h = n("619443"),
  _ = n("539938"),
  C = n("305961"),
  S = n("160299"),
  I = n("257869"),
  m = n("638779"),
  p = n("459736"),
  T = n("967251"),
  g = n("663831"),
  A = n("170185"),
  N = n("277860"),
  R = n("724210"),
  O = n("782340"),
  v = n("763437");

function L(e) {
  let {
    guildId: t
  } = e, n = (0, i.useStateFromStores)([C.default], () => C.default.getGuild(t), [t]), L = (0, i.useStateFromStores)([h.default], () => h.default.isConnected()), M = (0, f.default)(t), P = (0, m.default)(t), y = (0, i.useStateFromStores)([S.default], () => S.default.isSubscriptionFetching), D = (0, I.useGroupListingsFetchContext)(), {
    shouldHideGuildPurchaseEntryPoints: x,
    restrictionsLoading: b
  } = (0, E.useShouldHideGuildPurchaseEntryPoints)(t), U = null == n || !D || y || b;
  (0, d.usePageTitle)({
    subsection: O.default.Messages.GUILD_ROLE_SUBSCRIPTIONS_TITLE,
    location: null == n ? void 0 : n.name
  }), (0, u.default)(l.isMobile ? "role-subscriptions-overview" : void 0);
  let G = L && (null == n || !(M || P) || x && !b);
  if (s.useEffect(() => {
      o.fetchSubscriptions()
    }, []), s.useEffect(() => {
      G && !l.isMobile && (0, c.handleInaccessiblePage)(t, R.StaticChannelRoute.ROLE_SUBSCRIPTIONS)
    }, [t, G]), l.isMobile && G) {
    let e = null == n ? g.GuildRoleSubscriptionsOverviewErrorType.NOT_GUILD_MEMBER : g.GuildRoleSubscriptionsOverviewErrorType.GUILD_NOT_ELIGIBLE;
    return (0, a.jsx)(g.GuildRoleSubscriptionsOverviewErrorPage, {
      errorType: e
    })
  }
  return (0, a.jsxs)("div", {
    className: v.container,
    children: [(0, a.jsxs)(_.default, {
      toolbar: (0, a.jsx)(s.Fragment, {}),
      className: v.headerBar,
      children: [(0, a.jsx)(_.default.Icon, {
        icon: p.default,
        "aria-hidden": !0
      }), (0, a.jsx)(_.default.Title, {
        children: O.default.Messages.GUILD_ROLE_SUBSCRIPTIONS_TITLE
      })]
    }), (0, a.jsx)("div", {
      id: N.OVERVIEW_NOTICE_ROOT
    }), (0, a.jsx)("div", {
      className: v.content,
      children: M ? (0, a.jsx)(r.ScrollerNone, {
        className: v.scroller,
        children: (0, a.jsx)("div", {
          className: v.scrollerContent,
          children: U ? (0, a.jsx)(r.Spinner, {}) : (0, a.jsx)(T.default, {
            guild: n
          })
        })
      }) : (0, a.jsx)(A.default, {})
    })]
  })
}

function M(e) {
  let {
    guildId: t
  } = e;
  return (0, a.jsx)(I.GroupListingsFetchContextProvider, {
    guildId: t,
    refetchOnMount: !0,
    children: (0, a.jsx)(L, {
      guildId: t
    })
  })
}