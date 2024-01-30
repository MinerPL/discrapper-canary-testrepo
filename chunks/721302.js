"use strict";
l.r(t), l.d(t, {
  default: function() {
    return I
  }
}), l("222007");
var a = l("37983"),
  n = l("884691"),
  s = l("414456"),
  i = l.n(s),
  o = l("483366"),
  d = l.n(o),
  r = l("969176"),
  u = l.n(r),
  C = l("65597"),
  c = l("620000"),
  f = l("819855"),
  m = l("77078"),
  E = l("161778"),
  M = l("957255"),
  h = l("810567"),
  _ = l("130037"),
  T = l("490931"),
  x = l("536999"),
  S = l("178406"),
  A = l("645266"),
  g = l("248793"),
  p = l("843455"),
  H = l("782340"),
  N = l("863879");
let L = n.forwardRef(function(e, t) {
  let {
    guild: s
  } = e, o = (0, C.default)([S.default], () => S.default.hasDefaultSearchStateByGuildId(s.id), [s.id]), r = (0, C.default)([E.default], () => (0, f.isThemeDark)(E.default.theme)), L = (0, x.useIsInMembersTablesAdditionalFilteringExperiment)(s.id), I = (0, C.default)([M.default], () => M.default.can(p.Permissions.KICK_MEMBERS, s)), R = n.useCallback(() => {
    null != s && I && (0, m.openModalLazy)(async () => {
      let {
        default: e
      } = await l.el("494440").then(l.bind(l, "494440"));
      return t => (0, a.jsx)(e, {
        ...t,
        guild: s
      })
    })
  }, [s, I]), v = (0, C.default)([S.default], () => S.default.getSearchStateByGuildId(s.id), [s.id], u), b = (0, _.useTrackMemberSearchUsed)(s.id), [j, D] = n.useState(v.query), O = null != v.selectedSort && v.selectedSort !== T.OrderBy.ORDER_BY_GUILD_JOINED_AT_DESC && v.selectedSort !== T.OrderBy.ORDER_BY_UNSPECIFIED, V = n.useCallback(e => {
    let t = e.trim();
    t.length > 0 && b(), (0, A.updateSearchState)(s.id, {
      query: t
    })
  }, [s.id, b]), B = n.useCallback(d(V, 300), [V]), y = n.useCallback(e => {
    D(e), B(e)
  }, [B]), U = n.useCallback(() => {
    D(""), V("")
  }, [V]);
  return n.useImperativeHandle(t, () => ({
    resetSearchText() {
      D("")
    }
  })), (0, a.jsxs)("div", {
    className: i(N.searchHeaderContainer),
    children: [(0, a.jsx)("div", {
      className: i(N.searchHeader),
      children: o ? (0, a.jsx)(m.Heading, {
        variant: "heading-md/medium",
        children: H.default.Messages.MEMBER_SAFETY_TABLE_TITLE
      }) : (0, a.jsx)(m.Heading, {
        variant: "heading-md/medium",
        children: H.default.Messages.MEMBER_SAFETY_TABLE_TITLE_SEARCH
      })
    }), (0, a.jsx)("div", {
      className: i(N.searchInput),
      children: (0, a.jsx)("div", {
        className: i(N.searchHeader),
        children: (0, a.jsx)(h.default, {
          className: N.searchBar,
          query: j,
          placeholder: H.default.Messages.MEMBER_SAFETY_TABLE_SEARCH_PLACEHOLDER,
          onChange: y,
          onClear: U,
          autoComplete: "off",
          inputProps: {
            autoCapitalize: "none",
            autoCorrect: "off",
            spellCheck: "false"
          }
        })
      })
    }), L && (0, a.jsx)("div", {
      children: (0, a.jsx)(m.Popout, {
        animation: m.Popout.Animation.FADE,
        position: "bottom",
        spacing: 4,
        align: "left",
        renderPopout: () => (0, a.jsx)(g.default, {
          guildId: s.id,
          onClose: void 0
        }),
        children: e => {
          let {
            onClick: t,
            ...l
          } = e;
          return (0, a.jsx)(m.Button, {
            ...l,
            onClick: t,
            "aria-label": H.default.Messages.SORT,
            color: r ? m.Button.Colors.PRIMARY : m.Button.Colors.TRANSPARENT,
            look: r ? m.Button.Looks.FILLED : m.Button.Looks.OUTLINED,
            size: m.Button.Sizes.SMALL,
            children: (0, a.jsxs)("div", {
              className: N.sortButton,
              children: [(0, a.jsx)(c.ArrowsUpDownIcon, {
                height: 16,
                width: 16,
                color: O ? m.tokens.colors.INTERACTIVE_ACTIVE.css : m.tokens.colors.HEADER_SECONDARY.css
              }), (0, a.jsx)(m.Text, {
                variant: "text-sm/medium",
                color: O ? "interactive-active" : "header-secondary",
                className: N.sortText,
                children: H.default.Messages.SORT
              })]
            })
          })
        }
      })
    }), (0, a.jsx)("div", {
      className: i(N.tableOptions),
      children: I && (0, a.jsx)(m.Button, {
        className: i(N.pruneButton),
        onClick: R,
        "aria-label": H.default.Messages.PRUNE_MEMBERS,
        color: m.Button.Colors.RED,
        look: m.Button.Looks.OUTLINED,
        size: m.Button.Sizes.SMALL,
        children: H.default.Messages.PRUNE
      })
    })]
  })
});
var I = L