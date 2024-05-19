"use strict";
s.r(t), s("47120");
var a = s("735250"),
  l = s("470079"),
  i = s("442837"),
  n = s("481060"),
  r = s("970606"),
  u = s("616230"),
  o = s("430824"),
  d = s("794358"),
  c = s("693546"),
  E = s("246364"),
  I = s("98493"),
  T = s("985159"),
  f = s("328977"),
  R = s("412222"),
  _ = s("223312"),
  S = s("571728"),
  N = s("572940"),
  m = s("80487"),
  A = s("146463"),
  M = s("981631"),
  C = s("689938"),
  h = s("134040");

function p(e) {
  let {
    guild: t
  } = e;
  return (0, a.jsxs)("div", {
    className: h.setupHeader,
    children: [(0, a.jsxs)("div", {
      className: h.previewContainer,
      children: [(0, a.jsx)(n.Heading, {
        variant: "heading-lg/bold",
        children: C.default.Messages.MEMBER_VERIFICATION_MEMBER_APPLICATION_SETUP
      }), (0, a.jsxs)(n.Button, {
        color: n.Button.Colors.TRANSPARENT,
        onClick: () => {
          (0, n.openModalLazy)(async () => {
            let {
              default: e
            } = await Promise.all([s.e("49237"), s.e("99387"), s.e("52657")]).then(s.bind(s, "645264"));
            return s => (0, a.jsx)(e, {
              ...s,
              guildId: t.id,
              isPreview: !0
            })
          })
        },
        size: n.ButtonSizes.SMALL,
        "aria-label": C.default.Messages.MEMBER_VERIFICATION_PREVIEW_APPLICATION,
        innerClassName: h.previewButton,
        children: [(0, a.jsx)(d.default, {}), C.default.Messages.MEMBER_VERIFICATION_PREVIEW_APPLICATION]
      })]
    }), (0, a.jsx)(n.Text, {
      className: h.description,
      variant: "text-sm/medium",
      color: "header-secondary",
      children: C.default.Messages.CLAN_APPLICATION_SETUP_HEADER.format({
        guildName: t.name
      })
    })]
  })
}

function x(e) {
  var t, s;
  let {
    guildId: d
  } = e, x = l.useRef(null), [g, P] = l.useState((0, T.useSelectedApplicationTab)({
    guildId: d
  })), j = (0, R.useSelectedSortOrder)({
    guildId: d
  }), v = (0, f.useSelectedGuildJoinRequest)({
    guildId: d
  }), G = null !== (t = (0, S.useSubmittedGuildJoinRequestTotal)({
    guildId: d
  })) && void 0 !== t ? t : 0, {
    guildJoinRequests: O
  } = (0, _.useSortedMemberApplications)({
    guildId: d,
    applicationStatus: "REVIEW_APPLICATION" === g ? E.GuildJoinRequestApplicationStatuses.SUBMITTED : g,
    sortOrder: j
  }), {
    fetchNextPage: L
  } = (0, I.usePaginatedMemberApplications)({
    guildId: d,
    guildJoinRequests: O
  }), D = l.useRef(!1);
  !D.current && (D.current = !0, L(j, "REVIEW_APPLICATION" === g ? E.GuildJoinRequestApplicationStatuses.SUBMITTED : g));
  let b = l.useRef(!1);
  l.useEffect(() => {
    b.current = !0
  }, [j, g]), l.useEffect(() => {
    if (b.current && 0 !== O.length && "REVIEW_APPLICATION" !== g) {
      var e;
      b.current = !1, c.default.setSelectedGuildJoinRequest(d, O[0]), null === (e = x.current) || void 0 === e || e.scrollToTop()
    }
  }, [d, O, v, g]);
  let F = l.useCallback(async e => {
      if ("REVIEW_APPLICATION" !== g) j !== e && (c.default.setSelectedSortOrder(d, e), await L(e, g))
    }, [g, j, d, L]),
    B = l.useCallback(async e => {
      if (g !== e) P(e), (0, r.trackClanApplicationNavigation)({
        guildId: d,
        source: M.AnalyticsSections.GUILD_MEMBER_VERIFICATION_APPLICATION_REVIEW,
        tab: e
      }), c.default.setSelectedGuildJoinRequest(d, null), "REVIEW_APPLICATION" !== e && (c.default.setSelectedApplicationTab(d, e), await L(j, e))
    }, [g, j, d, L]),
    V = l.useCallback(async () => {
      var e;
      if ("REVIEW_APPLICATION" === g) return;
      let t = null === (e = x.current) || void 0 === e ? void 0 : e.getScrollerState();
      if (null != t) t.scrollHeight - t.scrollTop - t.offsetHeight < 200 && await L(j, g)
    }, [g, j, L]),
    U = (0, i.useStateFromStores)([o.default], () => o.default.getGuild(d)),
    J = null !== (s = null == U ? void 0 : U.hasFeature(M.GuildFeatures.CLAN)) && void 0 !== s && s;
  return (0, a.jsxs)(a.Fragment, {
    children: [(0, a.jsx)(m.default, {
      currentTab: g,
      onTabItemSelect: B,
      pendingGuildJoinRequestsTotal: G,
      showSetupTab: J
    }), (0, a.jsx)("div", {
      className: h.content,
      children: "REVIEW_APPLICATION" === g ? null != U ? (0, a.jsx)(n.ScrollerThin, {
        children: (0, a.jsxs)("div", {
          className: h.scrollerContent,
          children: [(0, a.jsx)(p, {
            guild: U
          }), (0, a.jsx)(u.default, {
            guild: U,
            isClanContext: !0
          })]
        })
      }) : null : (0, a.jsxs)(a.Fragment, {
        children: [(0, a.jsx)("div", {
          className: h.listControls,
          children: (0, a.jsx)(N.default, {
            className: h.sortSelect,
            sortOrder: j,
            onSortChange: F
          })
        }), (0, a.jsx)(n.Text, {
          className: h.description,
          variant: "text-xs/normal",
          color: "header-secondary",
          children: C.default.Messages.GUILD_SETTINGS_MEMBER_VERIFICATION_LIST_DESCRIPTION
        }), (0, a.jsx)(A.default, {
          applicationStatus: g,
          guildJoinRequests: O,
          guildId: d,
          onScroll: V,
          listRef: x
        })]
      })
    })]
  })
}
t.default = l.memo(function(e) {
  let {
    guildId: t
  } = e;
  return (0, a.jsx)(x, {
    guildId: t
  })
})