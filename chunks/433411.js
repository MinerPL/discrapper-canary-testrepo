"use strict";
s.r(t), s.d(t, {
  default: function() {
    return g
  }
});
var a = s("735250"),
  n = s("470079"),
  l = s("803997"),
  i = s.n(l),
  r = s("481060"),
  o = s("906732"),
  d = s("864106"),
  u = s("1585"),
  c = s("580747"),
  S = s("976644"),
  E = s("540086"),
  T = s("150039"),
  _ = s("993413"),
  f = s("689938"),
  m = s("819376");

function g(e) {
  let {
    user: t,
    guild: s,
    className: l,
    sectionTitle: E,
    forcedDivider: g = !1,
    withTutorial: N = !1,
    isTryItOutFlow: I = !1
  } = e, {
    analyticsLocations: p
  } = (0, o.default)(), C = null != s, {
    userAvatarDecoration: A,
    guildAvatarDecoration: O,
    pendingAvatarDecoration: x,
    pendingErrors: R
  } = (0, T.useGuildMemberAndUserPendingAvatarDecoration)(t, s), M = (0, c.default)("enable_avatar_decoration_uploads"), v = n.useCallback(() => (0, u.openAvatarDecorationModal)({
    analyticsLocations: p,
    isTryItOutFlow: I,
    guild: s
  }), [p, I, s]), D = I || void 0 !== x ? null != x : (C ? O : A) != null, L = N ? S.default : r.Button;
  return (0, a.jsxs)(_.default, {
    className: l,
    forcedDivider: g,
    hasBackground: !0,
    title: E,
    errors: R,
    children: [(0, a.jsxs)("div", {
      className: m.buttonsContainer,
      children: [(0, a.jsx)(L, {
        size: r.Button.Sizes.SMALL,
        onClick: v,
        className: i()({
          [m.buttonHighlighted]: N
        }),
        children: f.default.Messages.USER_SETTINGS_CHANGE_AVATAR_DECORATION
      }), D && (0, a.jsx)(r.Button, {
        className: m.removeButton,
        color: r.Button.Colors.PRIMARY,
        look: r.Button.Looks.LINK,
        size: r.Button.Sizes.SMALL,
        onClick: function() {
          (0, T.setNewPendingAvatarDecoration)(null == s ? void 0 : s.id, null)
        },
        children: (0, d.hasGlobalDefaultAvatarDecoration)(t, s) ? f.default.Messages.USER_SETTINGS_REMOVE_PER_GUILD_AVATAR_DECORATION : f.default.Messages.USER_SETTINGS_REMOVE_AVATAR_DECORATION
      })]
    }), t.isStaff() && M && (0, a.jsx)(h, {
      user: t
    })]
  })
}
let h = e => {
  let {
    user: t
  } = e;
  return (0, a.jsxs)("div", {
    className: m.overrideButtonsContainer,
    children: [(0, a.jsx)(r.Text, {
      variant: "text-xs/bold",
      children: "STAFF ONLY and Experimental. Upload a decoration to view throughout the app."
    }), (0, a.jsx)(E.default, {
      onChange: e => {
        null != e && (t.avatarDecoration = {
          asset: e,
          skuID: "PALUE000000001"
        })
      },
      buttonCTA: "Upload Override"
    })]
  })
}