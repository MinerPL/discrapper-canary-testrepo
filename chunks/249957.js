"use strict";
n.r(t), n.d(t, {
  default: function() {
    return I
  }
});
var a = n("37983");
n("884691");
var l = n("414456"),
  s = n.n(l),
  i = n("65597"),
  r = n("77078"),
  u = n("26989"),
  o = n("697218"),
  d = n("339123"),
  c = n("763225"),
  f = n("703433"),
  h = n("21363"),
  m = n("68777"),
  p = n("463278"),
  E = n("608973"),
  g = n("132881"),
  S = n("782340"),
  C = n("865331");

function _(e) {
  let {
    userId: t,
    guildId: n
  } = e, l = (0, c.useProfileThemedPanelBackground)(t, n, .8, r.tokens.colors.BACKGROUND_SECONDARY);
  return (0, a.jsxs)("div", {
    className: s(C.header),
    style: {
      backgroundColor: l
    },
    children: [(0, a.jsxs)("div", {
      className: s(C.headerTitle),
      children: [(0, a.jsx)(d.default, {
        width: 16,
        height: 16
      }), (0, a.jsx)(r.Heading, {
        variant: "heading-md/semibold",
        children: S.default.Messages.GUILD_MEMBER_MOD_VIEW_TITLE
      })]
    }), (0, a.jsx)("div", {
      children: (0, a.jsx)(r.KeyCombo, {
        shortcut: "esc",
        keyClassName: C.keyComboInner,
        className: C.keyComboContainer
      })
    })]
  })
}

function I(e) {
  let {
    userId: t,
    guildId: n,
    location: l,
    className: d,
    onNavigate: S
  } = e, I = (0, i.useStateFromStores)([o.default], () => o.default.getUser(t), [t]), T = (0, i.useStateFromStores)([u.default], () => u.default.getMember(n, t), [n, t]), v = (0, c.useProfileThemedPanelBackground)(t, n);
  return null == I || null == T ? null : (0, a.jsxs)(r.Scroller, {
    className: s(C.container, d),
    style: {
      backgroundColor: v
    },
    children: [(0, a.jsx)(_, {
      userId: t,
      guildId: n
    }), (0, a.jsxs)("div", {
      className: s(C.innerContainer),
      children: [(0, a.jsx)(E.default, {
        member: T
      }), (0, a.jsx)(g.default, {
        userId: t,
        guildId: n
      }), (0, a.jsx)(p.default, {
        member: T,
        onNavigate: S
      }), (0, a.jsx)(h.default, {
        member: T
      }), (0, a.jsx)(f.default, {
        member: T
      }), (0, a.jsx)(m.default, {
        member: T
      })]
    })]
  })
}