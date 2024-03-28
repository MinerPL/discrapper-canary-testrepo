"use strict";
t.r(l), t.d(l, {
  default: function() {
    return L
  }
});
var a = t("735250"),
  s = t("470079"),
  i = t("803997"),
  n = t.n(i),
  o = t("442837"),
  u = t("481060"),
  d = t("596454"),
  r = t("225433"),
  c = t("727637"),
  m = t("907040"),
  I = t("984933"),
  f = t("401227"),
  _ = t("903749"),
  E = t("185923"),
  T = t("689938"),
  g = t("253613");

function L(e) {
  let {
    className: l,
    guildId: t,
    error: i,
    emojiId: L,
    emojiName: S,
    isRequiredField: v = !0,
    shouldUpdateBothEmojiFields: D = !1,
    setEmojiId: p,
    setEmojiName: x
  } = e, C = (0, _.default)({
    emojiId: L,
    emojiName: S
  }), R = (0, o.useStateFromStores)([I.default], () => null != t ? I.default.getDefaultChannel(t) : null), j = s.createRef(), h = (0, c.default)(j), U = () => {
    x(void 0), p(void 0)
  }, A = e => (l, t) => {
    let a = (null == l ? void 0 : l.id) == null;
    U(), a ? x(null == l ? void 0 : l.optionallyDiverseSequence) : (D && x(null == l ? void 0 : l.name), p(null == l ? void 0 : l.id)), t && e()
  }, N = e => {
    e.stopPropagation(), U()
  };
  return (0, a.jsx)(u.FormItem, {
    required: v,
    title: T.default.Messages.GUILD_STICKER_UPLOAD_RELATED_EMOJI_TITLE,
    className: n()(l, g.section),
    error: i,
    children: (0, a.jsx)(u.Popout, {
      animation: u.Popout.Animation.NONE,
      position: "top",
      renderPopout: e => {
        let {
          closePopout: l
        } = e;
        return (0, a.jsx)(m.default, {
          closePopout: l,
          pickerIntention: E.EmojiIntention.SOUNDBOARD,
          onNavigateAway: l,
          onSelectEmoji: A(l),
          guildId: t,
          channel: R
        })
      },
      children: (e, l) => {
        let {
          isShown: t
        } = l;
        return (0, a.jsxs)("div", {
          ...e,
          className: g.emojiInput,
          ref: j,
          children: [(0, a.jsx)(f.default, {
            className: g.emojiButton,
            active: t,
            tabIndex: 0,
            renderButtonContents: null != L || null != S ? () => (0, a.jsx)(d.default, {
              emojiName: S,
              emojiId: L
            }) : null
          }), (0, a.jsx)(u.TextInput, {
            inputClassName: g.emojiText,
            placeholder: T.default.Messages.GUILD_STICKER_UPLOAD_RELATED_EMOJI_PLACEHOLDER,
            value: null != C ? ":".concat(C, ":") : "",
            readOnly: !0
          }), h && null != C && (0, a.jsx)(r.default, {
            ...e,
            onClick: N,
            className: g.removeButton
          })]
        })
      }
    })
  })
}