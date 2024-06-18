"use strict";
t.d(s, {
  ZP: function() {
    return M
  }
}), t(411104), t(47120);
var n = t(735250),
  i = t(470079),
  l = t(120356),
  a = t.n(l),
  r = t(149765),
  o = t(442837),
  c = t(481060),
  d = t(144991),
  u = t(496675),
  E = t(594174),
  _ = t(626135),
  I = t(233608),
  T = t(700785),
  N = t(764260),
  m = t(631969),
  S = t(95242),
  h = t(420966),
  g = t(275296),
  x = t(203377),
  C = t(981631),
  R = t(689938),
  L = t(318745),
  O = t(585512);

function A(e) {
  let {
    guild: s,
    role: t,
    locked: l
  } = e, a = (0, o.e7)([E.default], () => E.default.getCurrentUser()), d = i.useMemo(() => T.uB({
    user: a,
    context: s
  }), [a, s]), u = i.useMemo(() => ({
    [t.id]: {
      ...t,
      permissions: T.Hn
    }
  }), [t]), _ = i.useMemo(() => T.uB({
    user: a,
    context: s,
    roles: u
  }), [a, s, u]), I = !r.fS(d, _);
  return (0, n.jsx)("div", {
    className: L.clearButtonWrapper,
    children: (0, n.jsx)(c.Tooltip, {
      text: I ? R.Z.Messages.HELP_CLEAR_PERMISSIONS : null,
      position: "top",
      color: c.Tooltip.Colors.RED,
      children: e => {
        let {
          onMouseEnter: s,
          onMouseLeave: i
        } = e;
        return (0, n.jsx)(c.Button, {
          className: L.clearButton,
          size: c.Button.Sizes.TINY,
          look: c.Button.Looks.LINK,
          color: c.Button.Colors.LINK,
          onClick: () => (0, N.TY)(t.id),
          onMouseEnter: s,
          onMouseLeave: i,
          disabled: r.fS(t.permissions, T.Hn) || I || l,
          children: R.Z.Messages.ROLE_PERMISSIONS_CLEAR_PERMISSIONS
        })
      }
    })
  })
}

function p(e) {
  let {
    guild: s,
    role: t,
    specs: i,
    locked: l
  } = e;
  if (0 === i.length) return (0, n.jsxs)("div", {
    className: L.noResultsContainer,
    children: [(0, n.jsx)(m.Z, {
      className: L.noResults
    }), (0, n.jsx)(c.Text, {
      variant: "text-sm/normal",
      children: R.Z.Messages.ROLE_PERMISSIONS_EMPTY_TEXT
    })]
  });

  function a(e) {
    return u.Z.can(e, s) ? !u.Z.can(e, s, null, {
      [t.id]: {
        ...t,
        permissions: r.Od(t.permissions, e)
      }
    }) && R.Z.Messages.HELP_SINGULAR_PERMISSION : R.Z.Messages.HELP_MISSING_PERMISSION
  }
  return (0, n.jsxs)("div", {
    className: L.permissionsWrapper,
    children: [(0, n.jsx)(A, {
      guild: s,
      role: t,
      locked: l
    }), i.map((e, s) => (0, n.jsx)(d.Z, {
      className: L.permissionsForm,
      spec: e,
      permissions: t.permissions,
      locked: l,
      onChange: (e, s) => {
        if ("string" == typeof s) throw Error("Unexpected string `allow`");
        (0, N.lO)(t.id, e, s)
      },
      permissionRender: a
    }, s))]
  })
}

function M(e) {
  let {
    guild: s,
    role: t,
    locked: l,
    setSelectedSection: r,
    initialSearchQuery: o
  } = e, [d, u] = i.useState(null != o ? o : ""), E = i.useMemo(() => I.Z.generateGuildPermissionSpec(s), [s]).map(e => ({
    ...e,
    permissions: e.permissions.filter(e => {
      let s = d.trimStart().toLowerCase();
      return e.title.toLowerCase().includes(s) || null != e.description && e.description.toString().toLowerCase().includes(s)
    })
  })).filter(e => e.permissions.length > 0), {
    headerHeight: T,
    headerRef: N
  } = (0, S.Z)(0), {
    scrolledToTop: m,
    handleScroll: A
  } = (0, h.V)(), M = i.useRef(!1);
  return i.useEffect(() => {
    if (!M.current && "" !== d.trimStart()) _.default.track(C.rMx.SEARCH_STARTED, {
      search_type: "Permissions"
    }), M.current = !0
  }, [d]), (0, n.jsx)(c.AdvancedScrollerAuto, {
    className: L.scroller,
    style: {
      scrollPaddingTop: T
    },
    onScroll: A,
    children: (0, n.jsxs)("div", {
      className: O.contentWidth,
      children: [(0, n.jsxs)("div", {
        className: a()(O.header, O.stickyHeader, {
          [O.stickyHeaderElevated]: !m
        }),
        ref: N,
        children: [(0, n.jsx)(h.Z, {
          guild: s,
          role: t,
          selectedSection: x.ZI.PERMISSIONS,
          setSelectedSection: r
        }), (0, n.jsx)("div", {
          className: L.noticeContainer,
          children: (0, n.jsx)(g.Z, {
            role: t
          })
        }), (0, n.jsx)("div", {
          className: L.searchContainer,
          children: (0, n.jsx)(c.SearchBar, {
            size: c.SearchBar.Sizes.MEDIUM,
            query: d,
            onChange: u,
            onClear: () => u(""),
            placeholder: R.Z.Messages.ROLE_PERMISSIONS_SEARCH_PLACEHOLDER,
            "aria-label": R.Z.Messages.ROLE_PERMISSIONS_SEARCH_PLACEHOLDER
          })
        })]
      }), (0, n.jsx)(p, {
        guild: s,
        role: t,
        specs: E,
        locked: l
      })]
    })
  })
}