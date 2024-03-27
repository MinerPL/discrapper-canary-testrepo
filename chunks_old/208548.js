"use strict";
n.r(t), n.d(t, {
  default: function() {
    return S
  }
});
var r = n("37983"),
  l = n("884691"),
  i = n("414456"),
  a = n.n(i),
  s = n("446674"),
  u = n("77078"),
  o = n("430568"),
  c = n("133403"),
  d = n("252744"),
  f = n("86678"),
  h = n("923959"),
  C = n("882641"),
  v = n("384830"),
  p = n("958706"),
  m = n("782340"),
  E = n("468464");

function S(e) {
  let {
    className: t,
    guildId: n,
    error: i,
    emojiId: S,
    emojiName: T,
    isRequiredField: _ = !0,
    shouldUpdateBothEmojiFields: g = !1,
    setEmojiId: A,
    setEmojiName: I
  } = e, N = (0, v.default)({
    emojiId: S,
    emojiName: T
  }), x = (0, s.useStateFromStores)([h.default], () => null != n ? h.default.getDefaultChannel(n) : null), R = l.createRef(), y = (0, d.default)(R), L = () => {
    I(void 0), A(void 0)
  }, M = e => (t, n) => {
    let r = (null == t ? void 0 : t.id) == null;
    L(), r ? I(null == t ? void 0 : t.optionallyDiverseSequence) : (g && I(null == t ? void 0 : t.name), A(null == t ? void 0 : t.id)), n && e()
  }, P = e => {
    e.stopPropagation(), L()
  };
  return (0, r.jsx)(u.FormItem, {
    required: _,
    title: m.default.Messages.GUILD_STICKER_UPLOAD_RELATED_EMOJI_TITLE,
    className: a(t, E.section),
    error: i,
    children: (0, r.jsx)(u.Popout, {
      animation: u.Popout.Animation.NONE,
      position: "top",
      renderPopout: e => {
        let {
          closePopout: t
        } = e;
        return (0, r.jsx)(f.default, {
          closePopout: t,
          pickerIntention: p.EmojiIntention.SOUNDBOARD,
          onNavigateAway: t,
          onSelectEmoji: M(t),
          guildId: n,
          channel: x
        })
      },
      children: (e, t) => {
        let {
          isShown: n
        } = t;
        return (0, r.jsxs)("div", {
          ...e,
          className: E.emojiInput,
          ref: R,
          children: [(0, r.jsx)(C.default, {
            className: E.emojiButton,
            active: n,
            tabIndex: 0,
            renderButtonContents: null != S || null != T ? () => (0, r.jsx)(o.default, {
              emojiName: T,
              emojiId: S
            }) : null
          }), (0, r.jsx)(u.TextInput, {
            inputClassName: E.emojiText,
            placeholder: m.default.Messages.GUILD_STICKER_UPLOAD_RELATED_EMOJI_PLACEHOLDER,
            value: null != N ? ":".concat(N, ":") : "",
            readOnly: !0
          }), y && null != N && (0, r.jsx)(c.default, {
            ...e,
            onClick: P,
            className: E.removeButton
          })]
        })
      }
    })
  })
}