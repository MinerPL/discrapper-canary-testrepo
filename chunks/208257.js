"use strict";
s.r(t), s("47120");
var a = s("735250"),
  l = s("470079"),
  i = s("442837"),
  n = s("481060"),
  r = s("616230"),
  u = s("430824"),
  d = s("794358"),
  o = s("693546"),
  c = s("246364"),
  E = s("98493"),
  I = s("985159"),
  T = s("328977"),
  f = s("412222"),
  R = s("223312"),
  _ = s("571728"),
  S = s("572940"),
  N = s("80487"),
  m = s("146463"),
  A = s("981631"),
  M = s("689938"),
  h = s("884247");

function C(e) {
  let {
    guild: t
  } = e;
  return (0, a.jsxs)("div", {
    className: h.setupHeader,
    children: [(0, a.jsxs)("div", {
      className: h.previewContainer,
      children: [(0, a.jsx)(n.Heading, {
        variant: "heading-lg/bold",
        children: M.default.Messages.MEMBER_VERIFICATION_MEMBER_APPLICATION_SETUP
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
        "aria-label": M.default.Messages.MEMBER_VERIFICATION_PREVIEW_APPLICATION,
        innerClassName: h.previewButton,
        children: [(0, a.jsx)(d.default, {}), M.default.Messages.MEMBER_VERIFICATION_PREVIEW_APPLICATION]
      })]
    }), (0, a.jsx)(n.Text, {
      className: h.description,
      variant: "text-sm/medium",
      color: "header-secondary",
      children: M.default.Messages.CLAN_APPLICATION_SETUP_HEADER.format({
        guildName: t.name
      })
    })]
  })
}

function x(e) {
  var t, s;
  let {
    guildId: d
  } = e, x = l.useRef(null), [p, g] = l.useState((0, I.useSelectedApplicationTab)({
    guildId: d
  })), j = (0, f.useSelectedSortOrder)({
    guildId: d
  }), P = (0, T.useSelectedGuildJoinRequest)({
    guildId: d
  }), v = null !== (t = (0, _.useSubmittedGuildJoinRequestTotal)({
    guildId: d
  })) && void 0 !== t ? t : 0, {
    guildJoinRequests: G
  } = (0, R.useSortedMemberApplications)({
    guildId: d,
    applicationStatus: "REVIEW_APPLICATION" === p ? c.GuildJoinRequestApplicationStatuses.SUBMITTED : p,
    sortOrder: j
  }), {
    fetchNextPage: O
  } = (0, E.usePaginatedMemberApplications)({
    guildId: d,
    guildJoinRequests: G
  }), L = l.useRef(!1);
  !L.current && (L.current = !0, O(j, "REVIEW_APPLICATION" === p ? c.GuildJoinRequestApplicationStatuses.SUBMITTED : p));
  let D = l.useRef(!1);
  l.useEffect(() => {
    D.current = !0
  }, [j, p]), l.useEffect(() => {
    if (D.current && 0 !== G.length && "REVIEW_APPLICATION" !== p) {
      var e;
      D.current = !1, o.default.setSelectedGuildJoinRequest(d, G[0]), null === (e = x.current) || void 0 === e || e.scrollToTop()
    }
  }, [d, G, P, p]);
  let b = l.useCallback(async e => {
      if ("REVIEW_APPLICATION" !== p) j !== e && (o.default.setSelectedSortOrder(d, e), await O(e, p))
    }, [p, j, d, O]),
    F = l.useCallback(async e => {
      if (p !== e) g(e), o.default.setSelectedGuildJoinRequest(d, null), "REVIEW_APPLICATION" !== e && (o.default.setSelectedApplicationTab(d, e), await O(j, e))
    }, [p, j, d, O]),
    B = l.useCallback(async () => {
      var e;
      if ("REVIEW_APPLICATION" === p) return;
      let t = null === (e = x.current) || void 0 === e ? void 0 : e.getScrollerState();
      if (null != t) t.scrollHeight - t.scrollTop - t.offsetHeight < 200 && await O(j, p)
    }, [p, j, O]),
    V = (0, i.useStateFromStores)([u.default], () => u.default.getGuild(d)),
    U = null !== (s = null == V ? void 0 : V.hasFeature(A.GuildFeatures.CLAN)) && void 0 !== s && s;
  return (0, a.jsxs)(a.Fragment, {
    children: [(0, a.jsx)(N.default, {
      currentTab: p,
      onTabItemSelect: F,
      pendingGuildJoinRequestsTotal: v,
      showSetupTab: U
    }), (0, a.jsx)("div", {
      className: h.content,
      children: "REVIEW_APPLICATION" === p ? null != V ? (0, a.jsx)(n.ScrollerThin, {
        children: (0, a.jsxs)("div", {
          className: h.scrollerContent,
          children: [(0, a.jsx)(C, {
            guild: V
          }), (0, a.jsx)(r.default, {
            guild: V,
            isClanContext: !0
          })]
        })
      }) : null : (0, a.jsxs)(a.Fragment, {
        children: [(0, a.jsx)("div", {
          className: h.listControls,
          children: (0, a.jsx)(S.default, {
            className: h.sortSelect,
            sortOrder: j,
            onSortChange: b
          })
        }), (0, a.jsx)(n.Text, {
          className: h.description,
          variant: "text-xs/normal",
          color: "header-secondary",
          children: M.default.Messages.GUILD_SETTINGS_MEMBER_VERIFICATION_LIST_DESCRIPTION
        }), (0, a.jsx)(m.default, {
          applicationStatus: p,
          guildJoinRequests: G,
          guildId: d,
          onScroll: B,
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