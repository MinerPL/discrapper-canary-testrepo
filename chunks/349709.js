"use strict";
t.d(n, {
  Z: function() {
    return _
  }
});
var l = t(735250),
  a = t(470079),
  s = t(120356),
  i = t.n(s),
  r = t(442837),
  u = t(481060),
  o = t(596454),
  c = t(225433),
  d = t(727637),
  f = t(907040),
  m = t(984933),
  h = t(401227),
  g = t(903749),
  p = t(185923),
  N = t(689938),
  v = t(328452);

function _(e) {
  let {
    className: n,
    guildId: t,
    error: s,
    emojiId: _,
    emojiName: D,
    isRequiredField: O = !0,
    shouldUpdateBothEmojiFields: x = !1,
    setEmojiId: S,
    setEmojiName: E
  } = e, y = (0, g.Z)({
    emojiId: _,
    emojiName: D
  }), A = (0, r.e7)([m.ZP], () => null != t ? m.ZP.getDefaultChannel(t) : null), b = a.createRef(), M = (0, d.Z)(b), j = () => {
    E(void 0), S(void 0)
  }, w = e => (n, t) => {
    let l = (null == n ? void 0 : n.id) == null;
    j(), l ? E(null == n ? void 0 : n.optionallyDiverseSequence) : (x && E(null == n ? void 0 : n.name), S(null == n ? void 0 : n.id)), t && e()
  }, C = e => {
    e.stopPropagation(), j()
  };
  return (0, l.jsx)(u.FormItem, {
    required: O,
    title: N.Z.Messages.GUILD_STICKER_UPLOAD_RELATED_EMOJI_TITLE,
    className: i()(n, v.section),
    error: s,
    children: (0, l.jsx)(u.Popout, {
      animation: u.Popout.Animation.NONE,
      position: "top",
      renderPopout: e => {
        let {
          closePopout: n
        } = e;
        return (0, l.jsx)(f.Z, {
          closePopout: n,
          pickerIntention: p.Hz.SOUNDBOARD,
          onNavigateAway: n,
          onSelectEmoji: w(n),
          guildId: t,
          channel: A
        })
      },
      children: (e, n) => {
        let {
          isShown: t
        } = n;
        return (0, l.jsxs)("div", {
          ...e,
          className: v.emojiInput,
          ref: b,
          children: [(0, l.jsx)(h.Z, {
            className: v.emojiButton,
            active: t,
            tabIndex: 0,
            renderButtonContents: null != _ || null != D ? () => (0, l.jsx)(o.Z, {
              emojiName: D,
              emojiId: _
            }) : null
          }), (0, l.jsx)(u.TextInput, {
            inputClassName: v.emojiText,
            placeholder: N.Z.Messages.GUILD_STICKER_UPLOAD_RELATED_EMOJI_PLACEHOLDER,
            value: null != y ? ":".concat(y, ":") : "",
            readOnly: !0
          }), M && null != y && (0, l.jsx)(c.Z, {
            ...e,
            onClick: C,
            className: v.removeButton
          })]
        })
      }
    })
  })
}