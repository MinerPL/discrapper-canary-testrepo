"use strict";
s.r(t), s.d(t, {
  default: function() {
    return g
  }
});
var a = s("37983"),
  n = s("884691"),
  l = s("414456"),
  i = s.n(l),
  r = s("77078"),
  o = s("685665"),
  d = s("234251"),
  u = s("606292"),
  c = s("890503"),
  S = s("181114"),
  E = s("950603"),
  T = s("906932"),
  f = s("570697"),
  _ = s("782340"),
  m = s("572540");

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
  } = (0, T.useGuildMemberAndUserPendingAvatarDecoration)(t, s), M = (0, c.default)("enable_avatar_decoration_uploads"), D = n.useCallback(() => (0, u.openAvatarDecorationModal)({
    analyticsLocations: p,
    isTryItOutFlow: I,
    guild: s
  }), [p, I, s]), v = I || void 0 !== x ? null != x : (C ? O : A) != null, L = N ? S.default : r.Button;
  return (0, a.jsxs)(f.default, {
    className: l,
    forcedDivider: g,
    hasBackground: !0,
    title: E,
    errors: R,
    children: [(0, a.jsxs)("div", {
      className: m.buttonsContainer,
      children: [(0, a.jsx)(L, {
        size: r.Button.Sizes.SMALL,
        onClick: D,
        className: i({
          [m.buttonHighlighted]: N
        }),
        children: _.default.Messages.USER_SETTINGS_CHANGE_AVATAR_DECORATION
      }), v && (0, a.jsx)(r.Button, {
        className: m.removeButton,
        color: r.Button.Colors.PRIMARY,
        look: r.Button.Looks.LINK,
        size: r.Button.Sizes.SMALL,
        onClick: function() {
          (0, T.setNewPendingAvatarDecoration)(null == s ? void 0 : s.id, null)
        },
        children: (0, d.hasGlobalDefaultAvatarDecoration)(t, s) ? _.default.Messages.USER_SETTINGS_REMOVE_PER_GUILD_AVATAR_DECORATION : _.default.Messages.USER_SETTINGS_REMOVE_AVATAR_DECORATION
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