"use strict";
n.r(t), n.d(t, {
  default: function() {
    return g
  }
});
var i = n("37983");
n("884691");
var s = n("913365"),
  r = n("227645"),
  a = n("577776"),
  o = n("79798"),
  l = n("315102"),
  u = n("568734"),
  d = n("8222"),
  c = n("49111"),
  f = n("52904"),
  _ = n("782340"),
  h = n("347819");

function g(e) {
  let {
    id: t,
    user: n,
    application: g,
    bot: m,
    accountScopes: E,
    showLogout: p,
    location: v,
    isTrustedName: S
  } = e, T = l.default.getApplicationIconURL({
    id: g.id,
    icon: g.icon
  }), I = l.default.getUserAvatarURL(n);
  return (0, i.jsxs)("header", {
    id: t,
    className: h.header,
    children: [(0, i.jsxs)("div", {
      className: h.headerIcons,
      children: [(0, i.jsx)(s.Avatar, {
        src: T,
        size: f.AvatarSizes.SIZE_80,
        "aria-label": g.name
      }), (0, i.jsxs)("div", {
        className: h.ellipseGroup,
        children: [(0, i.jsx)("div", {
          className: h.ellipse
        }), (0, i.jsx)("div", {
          className: h.ellipse
        }), (0, i.jsx)("div", {
          className: h.ellipse
        })]
      }), (0, i.jsx)(s.Avatar, {
        src: I,
        size: f.AvatarSizes.SIZE_80,
        "aria-label": n.username
      })]
    }), !S && (0, i.jsx)(a.Text, {
      variant: "text-md/medium",
      color: "header-secondary",
      className: h.label,
      children: _.default.Messages.OAUTH2_THIRD_PARTY_APPLICATION
    }), (0, i.jsxs)(a.Text, {
      variant: "text-lg/bold",
      color: "header-primary",
      children: [g.name, null != m ? (0, i.jsx)(o.default, {
        className: h.botTag,
        verified: null != m.public_flags && (0, u.hasFlag)(m.public_flags, c.UserFlags.VERIFIED_BOT)
      }) : null]
    }), E.length > 0 ? (0, i.jsx)(a.Text, {
      variant: "text-md/normal",
      color: "header-secondary",
      className: h.label,
      children: _.default.Messages.OAUTH2_REQUESTS_ACCOUNT_ACCESS
    }) : (0, i.jsx)(a.Text, {
      variant: "text-md/normal",
      color: "header-secondary",
      className: h.label,
      children: _.default.Messages.OAUTH2_CONNECT_TO_DISCORD
    }), p ? (0, i.jsx)("div", {
      className: h.currentUser,
      children: (0, i.jsxs)(a.Text, {
        variant: "text-sm/normal",
        color: "text-muted",
        children: [_.default.Messages.OAUTH2_SIGNED_IN_AS.format({
          userHook: () => (0, i.jsxs)(a.Text, {
            className: h.currentUserTag,
            variant: "text-sm/normal",
            children: [n.username, !n.isPomelo() && (0, i.jsx)(a.Text, {
              className: h.currentUserDiscriminator,
              variant: "text-sm/normal",
              children: "#".concat(n.discriminator)
            })]
          }, n.id)
        }), (0, i.jsx)(r.Clickable, {
          tag: "a",
          className: h.logoutLink,
          onClick: () => (0, d.logoutWithRedirect)(v),
          children: _.default.Messages.OAUTH2_LOGOUT
        })]
      })
    }) : null]
  })
}