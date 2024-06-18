"use strict";
t.d(s, {
  E: function() {
    return I
  }
});
var n = t(735250);
t(470079);
var i = t(120356),
  l = t.n(i),
  a = t(481060),
  r = t(740727),
  o = t(768581),
  c = t(723047),
  d = t(570533),
  u = t(689938),
  E = t(281945);

function _(e) {
  let {
    emoji: s,
    onRemoveEmoji: t,
    disabled: i = !1
  } = e, c = o.ZP.getEmojiURL({
    id: s.id,
    animated: s.animated,
    size: 32
  });
  return (0, n.jsxs)("div", {
    className: l()(E.emojiRow, {
      [E.disabled]: i
    }),
    children: [(0, n.jsx)("img", {
      className: E.emojiImage,
      src: c,
      alt: s.name
    }), (0, n.jsx)(a.Text, {
      color: "header-primary",
      variant: "text-md/medium",
      className: E.emojiAlias,
      children: s.name
    }), (0, n.jsx)(a.Button, {
      look: a.Button.Looks.BLANK,
      size: a.Button.Sizes.ICON,
      className: E.deleteButton,
      onClick: () => t(s),
      "aria-label": u.Z.Messages.GUILD_ROLE_SUBSCRIPTION_SETUP_EMOJI_REMOVE_BUTTON_ARIA_LABEL,
      disabled: i,
      children: (0, n.jsx)(r.Z, {
        className: E.trashIcon
      })
    })]
  })
}

function I(e) {
  let {
    tierEmojiIds: s,
    guildId: t,
    onRemoveEmoji: i
  } = e, l = (0, d.Z)(t), a = null != s ? l.filter(e => s.has(e.id)) : [], r = (0, c.mY)();
  return (0, n.jsx)("div", {
    className: E.container,
    children: a.map(e => (0, n.jsx)(_, {
      emoji: e,
      onRemoveEmoji: () => i(e),
      disabled: r
    }, e.id))
  })
}