"use strict";
s.r(t), s.d(t, {
  default: function() {
    return M
  }
}), s("411104"), s("47120");
var a = s("735250"),
  l = s("470079"),
  n = s("803997"),
  i = s.n(n),
  r = s("149765"),
  o = s("442837"),
  d = s("481060"),
  u = s("144991"),
  c = s("496675"),
  E = s("594174"),
  _ = s("6048"),
  I = s("626135"),
  T = s("233608"),
  S = s("700785"),
  f = s("764260"),
  m = s("631969"),
  N = s("95242"),
  g = s("420966"),
  h = s("275296"),
  C = s("203377"),
  R = s("981631"),
  x = s("689938"),
  L = s("473794"),
  O = s("790492");

function A(e) {
  let {
    guild: t,
    role: s,
    locked: n
  } = e, i = (0, o.useStateFromStores)([E.default], () => E.default.getCurrentUser()), u = l.useMemo(() => S.computePermissions({
    user: i,
    context: t
  }), [i, t]), c = l.useMemo(() => ({
    [s.id]: {
      ...s,
      permissions: S.NONE
    }
  }), [s]), _ = l.useMemo(() => S.computePermissions({
    user: i,
    context: t,
    roles: c
  }), [i, t, c]), I = !r.equals(u, _);
  return (0, a.jsx)("div", {
    className: L.clearButtonWrapper,
    children: (0, a.jsx)(d.Tooltip, {
      text: I ? x.default.Messages.HELP_CLEAR_PERMISSIONS : null,
      position: "top",
      color: d.Tooltip.Colors.RED,
      children: e => {
        let {
          onMouseEnter: t,
          onMouseLeave: l
        } = e;
        return (0, a.jsx)(d.Button, {
          className: L.clearButton,
          size: d.Button.Sizes.TINY,
          look: d.Button.Looks.LINK,
          color: d.Button.Colors.LINK,
          onClick: () => (0, f.clearRolePermissions)(s.id),
          onMouseEnter: t,
          onMouseLeave: l,
          disabled: r.equals(s.permissions, S.NONE) || I || n,
          children: x.default.Messages.ROLE_PERMISSIONS_CLEAR_PERMISSIONS
        })
      }
    })
  })
}

function p(e) {
  let {
    guild: t,
    role: s,
    specs: l,
    locked: n
  } = e;
  if (0 === l.length) return (0, a.jsxs)("div", {
    className: L.noResultsContainer,
    children: [(0, a.jsx)(m.default, {
      className: L.noResults
    }), (0, a.jsx)(d.Text, {
      variant: "text-sm/normal",
      children: x.default.Messages.ROLE_PERMISSIONS_EMPTY_TEXT
    })]
  });

  function i(e) {
    return c.default.can(e, t) ? !c.default.can(e, t, null, {
      [s.id]: {
        ...s,
        permissions: r.remove(s.permissions, e)
      }
    }) && x.default.Messages.HELP_SINGULAR_PERMISSION : x.default.Messages.HELP_MISSING_PERMISSION
  }
  return (0, a.jsxs)("div", {
    className: L.permissionsWrapper,
    children: [(0, a.jsx)(A, {
      guild: t,
      role: s,
      locked: n
    }), l.map((e, t) => (0, a.jsx)(u.default, {
      className: L.permissionsForm,
      spec: e,
      permissions: s.permissions,
      locked: n,
      onChange: (e, t) => {
        if ("string" == typeof t) throw Error("Unexpected string `allow`");
        (0, f.updateRolePermissions)(s.id, e, t)
      },
      permissionRender: i
    }, t))]
  })
}

function M(e) {
  let {
    guild: t,
    role: s,
    locked: n,
    setSelectedSection: r,
    initialSearchQuery: o
  } = e, [u, c] = l.useState(null != o ? o : ""), E = l.useMemo(() => T.default.generateGuildPermissionSpec(t), [t]).map(e => ({
    ...e,
    permissions: e.permissions.filter(e => {
      let t = u.trimStart().toLowerCase();
      return e.title.toLowerCase().includes(t) || null != e.description && e.description.toString().toLowerCase().includes(t)
    })
  })).filter(e => e.permissions.length > 0), {
    headerHeight: S,
    headerRef: f
  } = (0, N.default)(0), {
    scrolledToTop: m,
    handleScroll: A
  } = (0, g.useScrolledToTop)(), M = l.useRef(!1);
  return l.useEffect(() => {
    !M.current && "" !== u.trimStart() && (I.default.track(R.AnalyticEvents.SEARCH_STARTED, {
      search_type: "Permissions"
    }), M.current = !0)
  }, [u]), (0, a.jsx)(d.AdvancedScrollerAuto, {
    className: L.scroller,
    style: {
      scrollPaddingTop: S
    },
    onScroll: A,
    children: (0, a.jsxs)("div", {
      className: O.contentWidth,
      children: [(0, a.jsxs)("div", {
        className: i()(O.header, O.stickyHeader, {
          [O.stickyHeaderElevated]: !m
        }),
        ref: f,
        children: [(0, a.jsx)(g.default, {
          guild: t,
          role: s,
          selectedSection: C.GuildSettingsRoleEditSections.PERMISSIONS,
          setSelectedSection: r
        }), (0, a.jsx)("div", {
          className: L.noticeContainer,
          children: (0, a.jsx)(h.default, {
            role: s
          })
        }), (0, a.jsx)("div", {
          className: L.searchContainer,
          children: (0, a.jsx)(_.default, {
            size: _.default.Sizes.MEDIUM,
            query: u,
            onChange: c,
            onClear: () => c(""),
            placeholder: x.default.Messages.ROLE_PERMISSIONS_SEARCH_PLACEHOLDER,
            "aria-label": x.default.Messages.ROLE_PERMISSIONS_SEARCH_PLACEHOLDER
          })
        })]
      }), (0, a.jsx)(p, {
        guild: t,
        role: s,
        specs: E,
        locked: n
      })]
    })
  })
}