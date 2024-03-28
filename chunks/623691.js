"use strict";
s.r(t), s.d(t, {
  default: function() {
    return S
  }
}), s("47120");
var a = s("735250"),
  l = s("470079"),
  n = s("803997"),
  i = s.n(n),
  r = s("481060"),
  o = s("749210"),
  d = s("6048"),
  u = s("63063"),
  c = s("714939"),
  E = s("494831"),
  _ = s("981631"),
  I = s("689938"),
  T = s("669758");

function S(e) {
  let {
    guild: t,
    everyoneRole: s,
    filteredRoles: n,
    setEditRoleId: i,
    query: o,
    setQuery: d,
    setHeaderHeight: u
  } = e, c = l.useRef(null);
  l.useEffect(() => {
    var e, t;
    u(null !== (t = null === (e = c.current) || void 0 === e ? void 0 : e.offsetHeight) && void 0 !== t ? t : E.DEFAULT_HEADER_HEIGHT_PX)
  }, [u]);
  let _ = l.useCallback(() => {
    i(s.id)
  }, [i, s.id]);
  return (0, a.jsxs)("div", {
    ref: c,
    children: [(0, a.jsx)(r.FormTitle, {
      tag: r.FormTitleTags.H1,
      children: I.default.Messages.ROLES
    }), (0, a.jsx)(r.Text, {
      className: T.description,
      color: "header-secondary",
      variant: "text-sm/normal",
      children: I.default.Messages.ROLE_OVERVIEW_DESCRIPTION
    }), (0, a.jsx)(f, {
      guild: t,
      everyoneRole: s,
      filteredRoles: n,
      query: o,
      setQuery: d,
      onEveryoneRoleClick: _
    })]
  })
}

function f(e) {
  let {
    guild: t,
    everyoneRole: s,
    filteredRoles: l,
    query: n,
    setQuery: o,
    onEveryoneRoleClick: d
  } = e;
  return (0, a.jsxs)(a.Fragment, {
    children: [(0, a.jsx)(c.default, {
      role: s,
      onClick: d
    }), (0, a.jsx)(m, {
      guild: t,
      query: n,
      setQuery: o
    }), (0, a.jsx)(r.Text, {
      className: T.helpText,
      color: "header-secondary",
      variant: "text-sm/normal",
      children: I.default.Messages.ROLE_LIST_BODY_WITH_HELP.format({
        articleURL: u.default.getArticleURL(_.HelpdeskArticles.PERMISSIONS_TUTORIAL)
      })
    }), (0, a.jsx)("div", {
      className: T.rolesTable,
      children: (0, a.jsxs)("div", {
        className: T.tableHeader,
        children: [(0, a.jsx)("div", {
          className: T.dragSpacing
        }), (0, a.jsx)(r.Text, {
          className: i()(T.tableTitle, T.roleNameSpacing),
          variant: "text-sm/normal",
          children: I.default.Messages.ROLE_LIST_HEADER.format({
            numRoles: String(l.length)
          })
        }), (0, a.jsx)(r.Text, {
          className: i()(T.tableTitle, T.memberSpacing),
          variant: "text-sm/normal",
          children: I.default.Messages.MEMBERS
        }), (0, a.jsx)("div", {
          className: T.buttonsSpacing
        })]
      })
    })]
  })
}

function m(e) {
  let {
    guild: t,
    query: s,
    setQuery: n
  } = e, [i, u] = l.useState(!1), c = l.useCallback(e => {
    n(e)
  }, [n]), E = l.useCallback(() => {
    n("")
  }, [n]), _ = async () => {
    u(!0), await o.default.createRole(t.id), u(!1)
  };
  return (0, a.jsx)("div", {
    className: T.__invalid_rolesList,
    children: (0, a.jsxs)("div", {
      className: T.searchContainer,
      children: [(0, a.jsx)(d.default, {
        size: d.default.Sizes.MEDIUM,
        query: s,
        onChange: c,
        onClear: E,
        placeholder: I.default.Messages.SEARCH_ROLES,
        "aria-label": I.default.Messages.SEARCH_ROLES
      }), (0, a.jsx)(r.Button, {
        className: T.createButton,
        size: r.Button.Sizes.SMALL,
        onClick: _,
        submitting: i,
        children: I.default.Messages.ROLE_CREATE_CTA
      })]
    })
  })
}