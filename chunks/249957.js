"use strict";
n.r(t), n.d(t, {
  default: function() {
    return S
  }
});
var a = n("37983");
n("884691");
var l = n("414456"),
  s = n.n(l),
  i = n("65597"),
  r = n("77078"),
  o = n("26989"),
  u = n("697218"),
  d = n("339123"),
  c = n("763225"),
  f = n("703433"),
  h = n("21363"),
  p = n("608973"),
  m = n("132881"),
  E = n("63893");

function C(e) {
  let {
    userId: t,
    guildId: n
  } = e, l = (0, c.useProfileThemedPanelBackground)(t, n, .8, r.tokens.colors.BACKGROUND_SECONDARY);
  return (0, a.jsxs)("div", {
    className: s(E.header),
    style: {
      backgroundColor: l
    },
    children: [(0, a.jsxs)("div", {
      className: s(E.headerTitle),
      children: [(0, a.jsx)(d.default, {
        width: 16,
        height: 16
      }), (0, a.jsx)(r.Heading, {
        variant: "heading-md/semibold",
        children: "Mod View"
      })]
    }), (0, a.jsx)("div", {
      children: (0, a.jsx)(r.KeyCombo, {
        shortcut: "esc",
        keyClassName: E.keyComboInner,
        className: E.keyComboContainer
      })
    })]
  })
}

function S(e) {
  let {
    userId: t,
    guildId: n,
    location: l,
    className: r,
    onNavigate: d
  } = e, S = (0, i.default)([u.default], () => u.default.getUser(t), [t]), g = (0, i.default)([o.default], () => o.default.getMember(n, t), [n, t]), _ = (0, c.useProfileThemedPanelBackground)(t, n);
  return null == S || null == g ? null : (0, a.jsxs)("div", {
    className: s(E.container, r),
    style: {
      backgroundColor: _
    },
    children: [(0, a.jsx)(C, {
      userId: t,
      guildId: n
    }), (0, a.jsxs)("div", {
      className: s(E.innerContainer),
      children: [(0, a.jsx)(p.default, {
        member: g
      }), (0, a.jsx)(m.default, {
        userId: t,
        guildId: n,
        onNavigate: d
      }), (0, a.jsx)(h.default, {
        member: g
      }), (0, a.jsx)(f.default, {
        member: g
      })]
    })]
  })
}