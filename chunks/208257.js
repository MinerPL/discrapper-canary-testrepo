"use strict";
s.r(t), s("47120");
var a = s("735250"),
  l = s("470079"),
  i = s("442837"),
  n = s("481060"),
  u = s("616230"),
  r = s("430824"),
  o = s("693546"),
  d = s("246364"),
  c = s("98493"),
  E = s("985159"),
  I = s("328977"),
  f = s("412222"),
  T = s("223312"),
  _ = s("571728"),
  S = s("572940"),
  R = s("80487"),
  N = s("146463"),
  A = s("689938"),
  M = s("589247");

function m(e) {
  let {
    guildId: t
  } = e, s = l.useRef(null), [m, h] = l.useState((0, E.useSelectedApplicationTab)({
    guildId: t
  })), p = (0, f.useSelectedSortOrder)({
    guildId: t
  }), C = (0, I.useSelectedGuildJoinRequest)({
    guildId: t
  }), g = (0, _.useSubmittedGuildJoinRequestTotal)({
    guildId: t
  }), {
    guildJoinRequests: x
  } = (0, T.useSortedMemberApplications)({
    guildId: t,
    applicationStatus: "REVIEW_APPLICATION" === m ? d.GuildJoinRequestApplicationStatuses.SUBMITTED : m,
    sortOrder: p
  }), {
    fetchNextPage: G
  } = (0, c.usePaginatedMemberApplications)({
    guildId: t,
    guildJoinRequests: x
  }), P = l.useRef(!1);
  !P.current && (P.current = !0, G(p, "REVIEW_APPLICATION" === m ? d.GuildJoinRequestApplicationStatuses.SUBMITTED : m));
  let j = l.useRef(!1);
  l.useEffect(() => {
    j.current = !0
  }, [p, m]), l.useEffect(() => {
    if (j.current && 0 !== x.length) {
      var e;
      j.current = !1, o.default.setSelectedGuildJoinRequest(t, x[0]), null === (e = s.current) || void 0 === e || e.scrollToTop()
    }
  }, [t, x, C]);
  let v = l.useCallback(async e => {
      if ("REVIEW_APPLICATION" !== m) p !== e && (o.default.setSelectedSortOrder(t, e), await G(e, m))
    }, [m, p, t, G]),
    O = l.useCallback(async e => {
      if (m !== e) h(e), "REVIEW_APPLICATION" !== e && (o.default.setSelectedApplicationTab(t, e), o.default.setSelectedGuildJoinRequest(t, null), await G(p, e))
    }, [m, p, t, G]),
    D = l.useCallback(async () => {
      var e;
      if ("REVIEW_APPLICATION" === m) return;
      let t = null === (e = s.current) || void 0 === e ? void 0 : e.getScrollerState();
      if (null != t) t.scrollHeight - t.scrollTop - t.offsetHeight < 200 && await G(p, m)
    }, [m, p, G]),
    L = (0, i.useStateFromStores)([r.default], () => r.default.getGuild(t));
  return (0, a.jsxs)(a.Fragment, {
    children: [(0, a.jsx)(R.default, {
      currentTab: m,
      onTabItemSelect: O,
      pendingGuildJoinRequestsTotal: g,
      showSetupTab: !0
    }), (0, a.jsx)("div", {
      className: M.content,
      children: "REVIEW_APPLICATION" === m ? null != L ? (0, a.jsx)(u.default, {
        guild: L
      }) : null : (0, a.jsxs)(a.Fragment, {
        children: [(0, a.jsx)("div", {
          className: M.listControls,
          children: (0, a.jsx)(S.default, {
            className: M.sortSelect,
            sortOrder: p,
            onSortChange: v
          })
        }), (0, a.jsx)(n.Text, {
          className: M.description,
          variant: "text-xs/normal",
          color: "header-secondary",
          children: A.default.Messages.GUILD_SETTINGS_MEMBER_VERIFICATION_LIST_DESCRIPTION
        }), (0, a.jsx)(N.default, {
          applicationStatus: m,
          guildJoinRequests: x,
          guildId: t,
          onScroll: D,
          listRef: s
        })]
      })
    })]
  })
}
t.default = l.memo(function(e) {
  let {
    guildId: t
  } = e;
  return (0, a.jsx)(m, {
    guildId: t
  })
})