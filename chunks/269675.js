"use strict";
n.r(t), n.d(t, {
  default: function() {
    return M
  }
});
var a = n("735250"),
  s = n("470079"),
  l = n("873546"),
  i = n("442837"),
  r = n("481060"),
  o = n("355467"),
  u = n("270237"),
  d = n("252618"),
  c = n("423000"),
  f = n("200876"),
  E = n("674180"),
  h = n("38618"),
  _ = n("984370"),
  C = n("430824"),
  S = n("351402"),
  m = n("730647"),
  p = n("772021"),
  I = n("396828"),
  T = n("475413"),
  g = n("20967"),
  A = n("504762"),
  N = n("807152"),
  v = n("176505"),
  R = n("689938"),
  L = n("55514");

function O(e) {
  let {
    guildId: t
  } = e, n = (0, i.useStateFromStores)([C.default], () => C.default.getGuild(t), [t]), O = (0, i.useStateFromStores)([h.default], () => h.default.isConnected()), M = (0, f.default)(t), P = (0, p.default)(t), y = (0, i.useStateFromStores)([S.default], () => S.default.isSubscriptionFetching), x = (0, m.useGroupListingsFetchContext)(), {
    shouldHideGuildPurchaseEntryPoints: D,
    restrictionsLoading: b
  } = (0, E.useShouldHideGuildPurchaseEntryPoints)(t), U = null == n || !x || y || b;
  (0, d.usePageTitle)({
    subsection: R.default.Messages.GUILD_ROLE_SUBSCRIPTIONS_TITLE,
    location: null == n ? void 0 : n.name
  }), (0, u.default)(l.isMobile ? "role-subscriptions-overview" : void 0);
  let j = O && (null == n || !(M || P) || D && !b);
  if (s.useEffect(() => {
      o.fetchSubscriptions()
    }, []), s.useEffect(() => {
      j && !l.isMobile && (0, c.handleInaccessiblePage)(t, v.StaticChannelRoute.ROLE_SUBSCRIPTIONS)
    }, [t, j]), l.isMobile && j) {
    let e = null == n ? g.GuildRoleSubscriptionsOverviewErrorType.NOT_GUILD_MEMBER : g.GuildRoleSubscriptionsOverviewErrorType.GUILD_NOT_ELIGIBLE;
    return (0, a.jsx)(g.GuildRoleSubscriptionsOverviewErrorPage, {
      errorType: e
    })
  }
  return (0, a.jsxs)("div", {
    className: L.container,
    children: [(0, a.jsxs)(_.default, {
      toolbar: (0, a.jsx)(s.Fragment, {}),
      className: L.headerBar,
      children: [(0, a.jsx)(_.default.Icon, {
        icon: I.default,
        "aria-hidden": !0
      }), (0, a.jsx)(_.default.Title, {
        children: R.default.Messages.GUILD_ROLE_SUBSCRIPTIONS_TITLE
      })]
    }), (0, a.jsx)("div", {
      id: N.OVERVIEW_NOTICE_ROOT
    }), (0, a.jsx)("div", {
      className: L.content,
      children: M ? (0, a.jsx)(r.ScrollerNone, {
        className: L.scroller,
        children: (0, a.jsx)("div", {
          className: L.scrollerContent,
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
  return (0, a.jsx)(m.GroupListingsFetchContextProvider, {
    guildId: t,
    refetchOnMount: !0,
    children: (0, a.jsx)(O, {
      guildId: t
    })
  })
}