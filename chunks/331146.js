"use strict";
s.r(t), s.d(t, {
  EmojiList: function() {
    return I
  }
});
var a = s("735250");
s("470079");
var l = s("803997"),
  n = s.n(l),
  i = s("481060"),
  r = s("740727"),
  o = s("768581"),
  d = s("723047"),
  u = s("570533"),
  c = s("689938"),
  E = s("939406");

function _(e) {
  let {
    emoji: t,
    onRemoveEmoji: s,
    disabled: l = !1
  } = e, d = o.default.getEmojiURL({
    id: t.id,
    animated: t.animated,
    size: 32
  });
  return (0, a.jsxs)("div", {
    className: n()(E.emojiRow, {
      [E.disabled]: l
    }),
    children: [(0, a.jsx)("img", {
      className: E.emojiImage,
      src: d,
      alt: t.name
    }), (0, a.jsx)(i.Text, {
      color: "header-primary",
      variant: "text-md/medium",
      className: E.emojiAlias,
      children: t.name
    }), (0, a.jsx)(i.Button, {
      look: i.Button.Looks.BLANK,
      size: i.Button.Sizes.ICON,
      className: E.deleteButton,
      onClick: () => s(t),
      "aria-label": c.default.Messages.GUILD_ROLE_SUBSCRIPTION_SETUP_EMOJI_REMOVE_BUTTON_ARIA_LABEL,
      disabled: l,
      children: (0, a.jsx)(r.default, {
        className: E.trashIcon
      })
    })]
  })
}

function I(e) {
  let {
    tierEmojiIds: t,
    guildId: s,
    onRemoveEmoji: l
  } = e, n = (0, u.default)(s), i = null != t ? n.filter(e => t.has(e.id)) : [], r = (0, d.useRoleSubscriptionSettingsDisabled)();
  return (0, a.jsx)("div", {
    className: E.container,
    children: i.map(e => (0, a.jsx)(_, {
      emoji: e,
      onRemoveEmoji: () => l(e),
      disabled: r
    }, e.id))
  })
}