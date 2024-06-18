"use strict";
t.d(s, {
  Z: function() {
    return T
  }
}), t(47120);
var n = t(735250),
  i = t(470079),
  l = t(120356),
  a = t.n(l),
  r = t(481060),
  o = t(749210),
  c = t(63063),
  d = t(714939),
  u = t(494831),
  E = t(981631),
  _ = t(689938),
  I = t(793577);

function T(e) {
  let {
    guild: s,
    everyoneRole: t,
    filteredRoles: l,
    setEditRoleId: a,
    query: o,
    setQuery: c,
    setHeaderHeight: d
  } = e, E = i.useRef(null);
  i.useEffect(() => {
    var e, s;
    d(null !== (s = null === (e = E.current) || void 0 === e ? void 0 : e.offsetHeight) && void 0 !== s ? s : u.Cl)
  }, [d]);
  let T = i.useCallback(() => {
    a(t.id)
  }, [a, t.id]);
  return (0, n.jsxs)("div", {
    ref: E,
    children: [(0, n.jsx)(r.FormTitle, {
      tag: r.FormTitleTags.H1,
      children: _.Z.Messages.ROLES
    }), (0, n.jsx)(r.Text, {
      className: I.description,
      color: "header-secondary",
      variant: "text-sm/normal",
      children: _.Z.Messages.ROLE_OVERVIEW_DESCRIPTION
    }), (0, n.jsx)(N, {
      guild: s,
      everyoneRole: t,
      filteredRoles: l,
      query: o,
      setQuery: c,
      onEveryoneRoleClick: T
    })]
  })
}

function N(e) {
  let {
    guild: s,
    everyoneRole: t,
    filteredRoles: i,
    query: l,
    setQuery: o,
    onEveryoneRoleClick: u
  } = e;
  return (0, n.jsxs)(n.Fragment, {
    children: [(0, n.jsx)(d.Z, {
      role: t,
      onClick: u
    }), (0, n.jsx)(m, {
      guild: s,
      query: l,
      setQuery: o
    }), (0, n.jsx)(r.Text, {
      className: I.helpText,
      color: "header-secondary",
      variant: "text-sm/normal",
      children: _.Z.Messages.ROLE_LIST_BODY_WITH_HELP.format({
        articleURL: c.Z.getArticleURL(E.BhN.PERMISSIONS_TUTORIAL)
      })
    }), (0, n.jsx)("div", {
      className: I.rolesTable,
      children: (0, n.jsxs)("div", {
        className: I.tableHeader,
        children: [(0, n.jsx)("div", {
          className: I.dragSpacing
        }), (0, n.jsx)(r.Text, {
          className: a()(I.tableTitle, I.roleNameSpacing),
          variant: "text-sm/normal",
          children: _.Z.Messages.ROLE_LIST_HEADER.format({
            numRoles: String(i.length)
          })
        }), (0, n.jsx)(r.Text, {
          className: a()(I.tableTitle, I.memberSpacing),
          variant: "text-sm/normal",
          children: _.Z.Messages.MEMBERS
        }), (0, n.jsx)("div", {
          className: I.buttonsSpacing
        })]
      })
    })]
  })
}

function m(e) {
  let {
    guild: s,
    query: t,
    setQuery: l
  } = e, [a, c] = i.useState(!1), d = i.useCallback(e => {
    l(e)
  }, [l]), u = i.useCallback(() => {
    l("")
  }, [l]), E = async () => {
    c(!0), await o.Z.createRole(s.id), c(!1)
  };
  return (0, n.jsx)("div", {
    className: I.__invalid_rolesList,
    children: (0, n.jsxs)("div", {
      className: I.searchContainer,
      children: [(0, n.jsx)(r.SearchBar, {
        size: r.SearchBar.Sizes.MEDIUM,
        query: t,
        onChange: d,
        onClear: u,
        placeholder: _.Z.Messages.SEARCH_ROLES,
        "aria-label": _.Z.Messages.SEARCH_ROLES
      }), (0, n.jsx)(r.Button, {
        className: I.createButton,
        size: r.Button.Sizes.SMALL,
        onClick: E,
        submitting: a,
        children: _.Z.Messages.ROLE_CREATE_CTA
      })]
    })
  })
}