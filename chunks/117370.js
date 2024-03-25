"use strict";
s.r(t), s.d(t, {
  default: function() {
    return p
  }
}), s("222007");
var a = s("37983"),
  l = s("884691"),
  i = s("446674"),
  n = s("77078"),
  r = s("439979"),
  u = s("305961"),
  o = s("549103"),
  d = s("567054"),
  c = s("138219"),
  E = s("722390"),
  I = s("122766"),
  f = s("268027"),
  T = s("533788"),
  R = s("859130"),
  S = s("946128"),
  _ = s("652469"),
  m = s("255941"),
  N = s("782340"),
  M = s("283518");

function A(e) {
  let {
    guildId: t
  } = e, s = l.useRef(null), [A, p] = l.useState((0, E.useSelectedApplicationTab)({
    guildId: t
  })), h = (0, f.useSelectedSortOrder)({
    guildId: t
  }), x = (0, I.useSelectedGuildJoinRequest)({
    guildId: t
  }), C = (0, R.useSubmittedGuildJoinRequestTotal)({
    guildId: t
  }), {
    guildJoinRequests: g
  } = (0, T.useSortedMemberApplications)({
    guildId: t,
    applicationStatus: "REVIEW_APPLICATION" === A ? d.GuildJoinRequestApplicationStatuses.SUBMITTED : A,
    sortOrder: h
  }), {
    fetchNextPage: P
  } = (0, c.usePaginatedMemberApplications)({
    guildId: t,
    guildJoinRequests: g
  }), j = l.useRef(!1);
  !j.current && (j.current = !0, P(h, "REVIEW_APPLICATION" === A ? d.GuildJoinRequestApplicationStatuses.SUBMITTED : A));
  let G = l.useRef(!1);
  l.useEffect(() => {
    G.current = !0
  }, [h, A]), l.useEffect(() => {
    if (G.current && 0 !== g.length) {
      var e;
      G.current = !1, o.default.setSelectedGuildJoinRequest(t, g[0]), null === (e = s.current) || void 0 === e || e.scrollToTop()
    }
  }, [t, g, x]);
  let v = l.useCallback(async e => {
      if ("REVIEW_APPLICATION" !== A) h !== e && (o.default.setSelectedSortOrder(t, e), await P(e, A))
    }, [A, h, t, P]),
    O = l.useCallback(async e => {
      if (A !== e) p(e), "REVIEW_APPLICATION" !== e && (o.default.setSelectedApplicationTab(t, e), o.default.setSelectedGuildJoinRequest(t, null), await P(h, e))
    }, [A, h, t, P]),
    D = l.useCallback(async () => {
      var e;
      if ("REVIEW_APPLICATION" === A) return;
      let t = null === (e = s.current) || void 0 === e ? void 0 : e.getScrollerState();
      if (null == t) return;
      let a = t.scrollHeight - t.scrollTop - t.offsetHeight;
      a < 200 && await P(h, A)
    }, [A, h, P]),
    L = (0, i.useStateFromStores)([u.default], () => u.default.getGuild(t));
  return (0, a.jsxs)(a.Fragment, {
    children: [(0, a.jsx)(_.default, {
      currentTab: A,
      onTabItemSelect: O,
      pendingGuildJoinRequestsTotal: C,
      showSetupTab: !0
    }), (0, a.jsx)("div", {
      className: M.content,
      children: "REVIEW_APPLICATION" === A ? null != L ? (0, a.jsx)(r.default, {
        guild: L
      }) : null : (0, a.jsxs)(a.Fragment, {
        children: [(0, a.jsx)("div", {
          className: M.listControls,
          children: (0, a.jsx)(S.default, {
            className: M.sortSelect,
            sortOrder: h,
            onSortChange: v
          })
        }), (0, a.jsx)(n.Text, {
          className: M.description,
          variant: "text-xs/normal",
          color: "header-secondary",
          children: N.default.Messages.GUILD_SETTINGS_MEMBER_VERIFICATION_LIST_DESCRIPTION
        }), (0, a.jsx)(m.default, {
          applicationStatus: A,
          guildJoinRequests: g,
          guildId: t,
          onScroll: D,
          listRef: s
        })]
      })
    })]
  })
}
var p = l.memo(function(e) {
  let {
    guildId: t
  } = e;
  return (0, a.jsx)(A, {
    guildId: t
  })
})