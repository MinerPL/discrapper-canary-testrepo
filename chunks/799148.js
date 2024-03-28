"use strict";
a.r(t), a.d(t, {
  default: function() {
    return v
  }
});
var l = a("735250");
a("470079");
var n = a("803997"),
  s = a.n(n),
  i = a("442837"),
  d = a("481060"),
  r = a("496675"),
  u = a("465670"),
  o = a("63063"),
  c = a("528002"),
  f = a("981631"),
  m = a("921944"),
  h = a("689938"),
  g = a("78137"),
  E = a("186223");

function _(e) {
  let {
    children: t,
    onClose: a
  } = e;
  return (0, l.jsxs)("div", {
    className: g.container,
    children: [(0, l.jsx)(d.Clickable, {
      className: g.closeButton,
      onClick: a,
      children: (0, l.jsx)(u.default, {
        className: g.__invalid_closeIcon
      })
    }), (0, l.jsx)("div", {
      className: g.textContainer,
      children: t
    }), (0, l.jsx)("img", {
      className: g.image,
      src: E,
      alt: ""
    })]
  })
}

function I(e) {
  let {
    onClose: t
  } = e;
  return (0, l.jsxs)(_, {
    onClose: t,
    children: [(0, l.jsx)(d.Heading, {
      style: {
        color: "white"
      },
      variant: "heading-lg/semibold",
      color: "none",
      children: h.default.Messages.GUILD_FEED_NUX_MEMBER_TITLE
    }), (0, l.jsx)(d.Text, {
      className: g.bodySection,
      variant: "text-sm/normal",
      color: "none",
      children: h.default.Messages.GUILD_FEED_NUX_MEMBER_BODY_1
    }), (0, l.jsx)(d.Text, {
      className: g.bodySection,
      variant: "text-sm/normal",
      color: "none",
      children: h.default.Messages.GUILD_FEED_NUX_MEMBER_BODY_2
    }), (0, l.jsx)(d.Anchor, {
      className: s()(g.cta, g.ctaLink, (0, d.getButtonStyle)({
        look: d.Button.Looks.LINK,
        color: d.Button.Colors.WHITE
      })),
      href: o.default.getArticleURL(f.HelpdeskArticles.GUILD_HOME),
      children: h.default.Messages.GUILD_FEED_NUX_MEMBER_BODY_3
    })]
  })
}

function x() {
  (0, d.openModalLazy)(async () => {
    let {
      default: e
    } = await Promise.all([a.e("99387"), a.e("37740")]).then(a.bind(a, "388614"));
    return t => (0, l.jsx)(e, {
      ...t
    })
  })
}

function S(e) {
  let {
    onClose: t
  } = e;
  return (0, l.jsxs)(_, {
    onClose: t,
    children: [(0, l.jsx)(d.Heading, {
      style: {
        color: "white"
      },
      variant: "heading-lg/semibold",
      color: "none",
      children: h.default.Messages.GUILD_FEED_NUX_MODERATOR_TITLE
    }), (0, l.jsx)(d.Text, {
      className: g.bodySection,
      variant: "text-sm/normal",
      color: "none",
      children: h.default.Messages.GUILD_FEED_NUX_MEMBER_BODY_1
    }), (0, l.jsx)(d.Text, {
      className: g.bodySection,
      variant: "text-sm/normal",
      color: "none",
      children: h.default.Messages.GUILD_FEED_NUX_MEMBER_BODY_2
    }), (0, l.jsx)(d.Button, {
      className: g.cta,
      look: d.Button.Looks.INVERTED,
      color: d.Button.Colors.BRAND,
      onClick: x,
      children: h.default.Messages.GUILD_FEED_NUX_MODERATOR_CTA
    })]
  })
}

function v(e) {
  let {
    guild: t,
    onClose: a
  } = e, n = (0, i.useStateFromStores)([r.default], () => r.default.can(f.Permissions.MANAGE_MESSAGES, t));
  return (0, c.default)(t, a) ? n ? (0, l.jsx)(S, {
    onClose: () => a(m.ContentDismissActionType.UNKNOWN)
  }) : (0, l.jsx)(I, {
    onClose: () => a(m.ContentDismissActionType.UNKNOWN)
  }) : null
}