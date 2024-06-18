"use strict";
n.d(t, {
  Z: function() {
    return T
  }
});
var i = n(735250);
n(470079);
var r = n(974674),
  s = n(1561),
  o = n(993365),
  a = n(467679),
  l = n(768581),
  u = n(630388),
  _ = n(489863),
  d = n(981631),
  c = n(182294),
  E = n(689938),
  I = n(846288);

function T(e) {
  let {
    id: t,
    user: n,
    application: T,
    bot: h,
    accountScopes: S,
    showLogout: f,
    location: N,
    isTrustedName: A
  } = e, m = l.ZP.getApplicationIconURL({
    id: T.id,
    icon: T.icon
  }), O = l.ZP.getUserAvatarURL(n);
  return (0, i.jsxs)("header", {
    id: t,
    className: I.header,
    children: [(0, i.jsxs)("div", {
      className: I.headerIcons,
      children: [(0, i.jsx)(r.qE, {
        src: m,
        size: c.EF.SIZE_80,
        "aria-label": T.name
      }), (0, i.jsxs)("div", {
        className: I.ellipseGroup,
        children: [(0, i.jsx)("div", {
          className: I.ellipse
        }), (0, i.jsx)("div", {
          className: I.ellipse
        }), (0, i.jsx)("div", {
          className: I.ellipse
        })]
      }), (0, i.jsx)(r.qE, {
        src: O,
        size: c.EF.SIZE_80,
        "aria-label": n.username
      })]
    }), !A && (0, i.jsx)(o.x, {
      variant: "text-md/medium",
      color: "header-secondary",
      className: I.label,
      children: E.Z.Messages.OAUTH2_THIRD_PARTY_APPLICATION
    }), (0, i.jsxs)(o.x, {
      variant: "text-lg/bold",
      color: "header-primary",
      children: [T.name, null != h ? (0, i.jsx)(a.Z, {
        className: I.botTag,
        verified: null != h.public_flags && (0, u.yE)(h.public_flags, d.xW$.VERIFIED_BOT)
      }) : null]
    }), S.length > 0 ? (0, i.jsx)(o.x, {
      variant: "text-md/normal",
      color: "header-secondary",
      className: I.label,
      children: E.Z.Messages.OAUTH2_REQUESTS_ACCOUNT_ACCESS
    }) : (0, i.jsx)(o.x, {
      variant: "text-md/normal",
      color: "header-secondary",
      className: I.label,
      children: E.Z.Messages.OAUTH2_CONNECT_TO_DISCORD
    }), f ? (0, i.jsx)("div", {
      className: I.currentUser,
      children: (0, i.jsxs)(o.x, {
        variant: "text-sm/normal",
        color: "text-muted",
        children: [E.Z.Messages.OAUTH2_SIGNED_IN_AS.format({
          userHook: () => (0, i.jsxs)(o.x, {
            className: I.currentUserTag,
            variant: "text-sm/normal",
            children: [n.username, !n.isPomelo() && (0, i.jsx)(o.x, {
              className: I.currentUserDiscriminator,
              variant: "text-sm/normal",
              children: "#".concat(n.discriminator)
            })]
          }, n.id)
        }), (0, i.jsx)(s.P, {
          tag: "a",
          className: I.logoutLink,
          onClick: () => (0, _.c$)(N),
          children: E.Z.Messages.OAUTH2_LOGOUT
        })]
      })
    }) : null]
  })
}