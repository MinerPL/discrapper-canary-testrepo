"use strict";
n.r(t);
var a = n("735250");
n("470079");
var s = n("120356"),
  l = n.n(s),
  i = n("481060"),
  r = n("465670"),
  o = n("705077"),
  u = n("988951"),
  d = n("785681"),
  c = n("231994"),
  f = n("689938"),
  E = n("6102"),
  h = n("949086");
let _ = e => {
  let {
    header: t,
    description: n,
    icon: s,
    inModal: r
  } = e;
  return (0, a.jsxs)("div", {
    className: l()(E.row, h.marginBottom8, {
      [E.inModal]: r
    }),
    children: [(0, a.jsx)("div", {
      className: E.iconContainer,
      children: s
    }), (0, a.jsxs)("div", {
      children: [(0, a.jsx)(i.Text, {
        className: E.header,
        variant: "text-sm/bold",
        color: "header-primary",
        children: t
      }), (0, a.jsx)(i.Text, {
        variant: "text-xs/medium",
        color: "header-secondary",
        children: n
      })]
    })]
  })
};
t.default = e => {
  let {
    inModal: t
  } = e, n = (0, d.useAgeSpecificText)(f.default.Messages.FAMILY_CENTER_DATA_CONFIRMATION_INCLUDED_HEADER_TEEN, f.default.Messages.FAMILY_CENTER_DATA_CONFIRMATION_INCLUDED_HEADER_PARENT), s = (0, d.useAgeSpecificText)(f.default.Messages.FAMILY_CENTER_DATA_CONFIRMATION_EXCLUDED_HEADER_TEEN, f.default.Messages.FAMILY_CENTER_DATA_CONFIRMATION_EXCLUDED_HEADER_PARENT), l = (0, d.useAgeSpecificText)(f.default.Messages.FAMILY_CENTER_DATA_CONFIRMATION_EXCLUDED_CONTENT_HEADER_TEEN, f.default.Messages.FAMILY_CENTER_DATA_CONFIRMATION_EXCLUDED_CONTENT_HEADER_PARENT), h = (0, d.useAgeSpecificText)(f.default.Messages.FAMILY_CENTER_DATA_CONFIRMATION_EXCLUDED_CONTENT_DESCRIPTION_TEEN, f.default.Messages.FAMILY_CENTER_DATA_CONFIRMATION_EXCLUDED_CONTENT_DESCRIPTION_PARENT);
  return (0, a.jsxs)("div", {
    children: [(0, a.jsx)(i.Text, {
      className: E.groupHeader,
      variant: "text-xxs/bold",
      color: "header-secondary",
      children: n
    }), (0, a.jsx)(_, {
      header: f.default.Messages.FAMILY_CENTER_DATA_CONFIRMATION_FRIEND_ADD_HEADER,
      description: f.default.Messages.FAMILY_CENTER_DATA_CONFIRMATION_FRIEND_ADD_DESCRIPTION,
      icon: (0, a.jsx)(u.default, {
        width: 20,
        height: 20,
        color: i.tokens.colors.WHITE.css
      }),
      inModal: t
    }), (0, a.jsx)(_, {
      header: f.default.Messages.FAMILY_CENTER_DATA_CONFIRMATION_GUILD_PARTICIPATION_HEADER,
      description: f.default.Messages.FAMILY_CENTER_DATA_CONFIRMATION_GUILD_PARTICIPATION_DESCRIPTION,
      icon: (0, a.jsx)(o.default, {
        width: 20,
        height: 20,
        color: i.tokens.colors.WHITE.css
      }),
      inModal: t
    }), (0, a.jsx)(_, {
      header: f.default.Messages.FAMILY_CENTER_DATA_CONFIRMATION_USERS_MESSAGED_HEADER,
      description: f.default.Messages.FAMILY_CENTER_DATA_CONFIRMATION_USERS_MESSAGED_DESCRIPTION,
      icon: (0, a.jsx)(c.default, {
        width: 20,
        height: 20,
        color: i.tokens.colors.WHITE.css
      }),
      inModal: t
    }), (0, a.jsx)(i.Text, {
      className: E.groupHeader,
      variant: "text-xxs/bold",
      color: "header-secondary",
      children: s
    }), (0, a.jsx)(_, {
      header: l,
      description: h,
      icon: (0, a.jsx)(r.default, {
        width: 20,
        height: 20,
        color: i.tokens.colors.WHITE.css
      }),
      inModal: t
    })]
  })
}