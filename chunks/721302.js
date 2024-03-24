"use strict";
l.r(t), l.d(t, {
  default: function() {
    return I
  }
}), l("222007");
var a = l("37983"),
  s = l("884691"),
  n = l("414456"),
  o = l.n(n),
  i = l("483366"),
  r = l.n(i),
  d = l("969176"),
  u = l.n(d),
  C = l("316693"),
  c = l("65597"),
  m = l("620000"),
  E = l("819855"),
  f = l("77078"),
  M = l("161778"),
  h = l("957255"),
  _ = l("810567"),
  T = l("130037"),
  S = l("490931"),
  x = l("178406"),
  A = l("645266"),
  p = l("248793"),
  L = l("843455"),
  H = l("782340"),
  N = l("791006");
let g = s.forwardRef(function(e, t) {
  let {
    guild: n
  } = e, i = (0, c.useStateFromStores)([x.default], () => x.default.hasDefaultSearchStateByGuildId(n.id), [n.id]), d = (0, c.useStateFromStores)([M.default], () => (0, E.isThemeDark)(M.default.theme)), g = (0, c.useStateFromStores)([h.default], () => h.default.can(C.combine(L.Permissions.MANAGE_GUILD, L.Permissions.KICK_MEMBERS), n)), I = s.useCallback(() => {
    null != n && g && (0, f.openModalLazy)(async () => {
      let {
        default: e
      } = await l.el("494440").then(l.bind(l, "494440"));
      return t => (0, a.jsx)(e, {
        ...t,
        guild: n
      })
    })
  }, [n, g]), R = (0, c.useStateFromStores)([x.default], () => x.default.getSearchStateByGuildId(n.id), [n.id], u), j = (0, T.useTrackMemberSearchUsed)(n.id), [v, D] = s.useState(R.query), b = null != R.selectedSort && R.selectedSort !== S.OrderBy.ORDER_BY_GUILD_JOINED_AT_DESC && R.selectedSort !== S.OrderBy.ORDER_BY_UNSPECIFIED, O = s.useCallback(e => {
    let t = e.trim();
    t.length > 0 && j(), (0, A.updateSearchState)(n.id, {
      query: t
    })
  }, [n.id, j]), B = s.useCallback(r(O, 300), [O]), V = s.useCallback(e => {
    D(e), B(e)
  }, [B]), F = s.useCallback(() => {
    D(""), O("")
  }, [O]);
  return s.useImperativeHandle(t, () => ({
    resetSearchText() {
      D("")
    }
  })), (0, a.jsxs)("div", {
    className: o(N.searchHeaderContainer),
    children: [(0, a.jsx)("div", {
      className: o(N.searchHeader),
      children: i ? (0, a.jsx)(f.Heading, {
        variant: "heading-md/medium",
        children: H.default.Messages.MEMBER_SAFETY_TABLE_TITLE
      }) : (0, a.jsx)(f.Heading, {
        variant: "heading-md/medium",
        children: H.default.Messages.MEMBER_SAFETY_TABLE_TITLE_SEARCH
      })
    }), (0, a.jsx)("div", {
      className: o(N.searchInput),
      children: (0, a.jsx)("div", {
        className: o(N.searchHeader),
        children: (0, a.jsx)(_.default, {
          className: N.searchBar,
          query: v,
          placeholder: H.default.Messages.MEMBER_SAFETY_TABLE_SEARCH_PLACEHOLDER,
          onChange: V,
          onClear: F,
          autoComplete: "off",
          inputProps: {
            autoCapitalize: "none",
            autoCorrect: "off",
            spellCheck: "false"
          }
        })
      })
    }), (0, a.jsx)("div", {
      children: (0, a.jsx)(f.Popout, {
        animation: f.Popout.Animation.FADE,
        position: "bottom",
        spacing: 4,
        align: "left",
        renderPopout: () => (0, a.jsx)(p.default, {
          guildId: n.id,
          onClose: void 0
        }),
        children: e => {
          let {
            onClick: t,
            ...l
          } = e;
          return (0, a.jsx)(f.Button, {
            ...l,
            onClick: t,
            "aria-label": H.default.Messages.SORT,
            color: d ? f.Button.Colors.PRIMARY : f.Button.Colors.TRANSPARENT,
            look: d ? f.Button.Looks.FILLED : f.Button.Looks.OUTLINED,
            size: f.Button.Sizes.SMALL,
            children: (0, a.jsxs)("div", {
              className: N.sortButton,
              children: [(0, a.jsx)(m.ArrowsUpDownIcon, {
                height: 16,
                width: 16,
                color: b ? f.tokens.colors.INTERACTIVE_ACTIVE.css : f.tokens.colors.HEADER_SECONDARY.css
              }), (0, a.jsx)(f.Text, {
                variant: "text-sm/medium",
                color: b ? "interactive-active" : "header-secondary",
                className: N.sortText,
                children: H.default.Messages.SORT
              })]
            })
          })
        }
      })
    }), (0, a.jsx)("div", {
      className: o(N.tableOptions),
      children: g && (0, a.jsx)(f.Button, {
        className: o(N.pruneButton),
        onClick: I,
        "aria-label": H.default.Messages.PRUNE_MEMBERS,
        color: f.Button.Colors.RED,
        look: f.Button.Looks.OUTLINED,
        size: f.Button.Sizes.SMALL,
        children: H.default.Messages.PRUNE
      })
    })]
  })
});
var I = g