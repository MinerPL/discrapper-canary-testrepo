"use strict";
n.r(t), n.d(t, {
  default: function() {
    return T
  }
});
var a = n("735250");
n("470079");
var l = n("803997"),
  s = n.n(l),
  i = n("399606"),
  r = n("481060"),
  o = n("271383"),
  u = n("594174"),
  d = n("777288"),
  c = n("991570"),
  f = n("753042"),
  h = n("787469"),
  m = n("477718"),
  p = n("791176"),
  E = n("908474"),
  C = n("467014"),
  g = n("689938"),
  S = n("196958");

function _(e) {
  let {
    userId: t,
    guildId: n
  } = e, l = (0, c.useProfileThemedPanelBackground)(t, n, .8, r.tokens.colors.BACKGROUND_SECONDARY);
  return (0, a.jsxs)("div", {
    className: s()(S.header),
    style: {
      backgroundColor: l
    },
    children: [(0, a.jsxs)("div", {
      className: s()(S.headerTitle),
      children: [(0, a.jsx)(d.default, {
        width: 16,
        height: 16
      }), (0, a.jsx)(r.Heading, {
        variant: "heading-md/semibold",
        children: g.default.Messages.GUILD_MEMBER_MOD_VIEW_TITLE
      })]
    }), (0, a.jsx)("div", {
      children: (0, a.jsx)(r.KeyCombo, {
        shortcut: "esc",
        keyClassName: S.keyComboInner,
        className: S.keyComboContainer
      })
    })]
  })
}

function T(e) {
  let {
    userId: t,
    guildId: n,
    location: l,
    className: d,
    onNavigate: g
  } = e, T = (0, i.useStateFromStores)([u.default], () => u.default.getUser(t), [t]), I = (0, i.useStateFromStores)([o.default], () => o.default.getMember(n, t), [n, t]), A = (0, c.useProfileThemedPanelBackground)(t, n);
  return null == T || null == I ? null : (0, a.jsxs)(r.Scroller, {
    className: s()(S.container, d),
    style: {
      backgroundColor: A
    },
    children: [(0, a.jsx)(_, {
      userId: t,
      guildId: n
    }), (0, a.jsxs)("div", {
      className: s()(S.innerContainer),
      children: [(0, a.jsx)(E.default, {
        member: I
      }), (0, a.jsx)(C.default, {
        userId: t,
        guildId: n
      }), (0, a.jsx)(p.default, {
        member: I,
        onNavigate: g
      }), (0, a.jsx)(h.default, {
        member: I
      }), (0, a.jsx)(f.default, {
        member: I
      }), (0, a.jsx)(m.default, {
        member: I
      })]
    })]
  })
}