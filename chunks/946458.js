t.d(o, {
  Z: function() {
return r;
  }
});
var i = t(735250);
t(470079);
var a = t(442837),
  n = t(481060),
  l = t(596454),
  s = t(339085),
  d = t(652750);

function r(e) {
  let {
reactionEmoji: o
  } = e, t = (0, a.e7)([s.Z], () => (null == o ? void 0 : o.emojiId) != null ? s.Z.getUsableCustomEmojiById(o.emojiId) : null);
  return (0, i.jsxs)('div', {
className: d.container,
children: [
  (0, i.jsxs)('div', {
    className: d.body,
    children: [
      (0, i.jsxs)('div', {
        className: d.placeholderLines,
        children: [
          (0, i.jsx)(c, {
            width: '100%',
            marginBottom: 8
          }),
          (0, i.jsx)(c, {
            width: '80%',
            marginBottom: 16
          }),
          (0, i.jsx)(c, {
            width: '50%',
            marginBottom: 8
          }),
          (0, i.jsx)(c, {
            width: '60%',
            marginBottom: 16
          })
        ]
      }),
      (0, i.jsx)('div', {
        className: d.placeholderMedia
      })
    ]
  }),
  (0, i.jsxs)('div', {
    className: d.footer,
    children: [
      (0, i.jsxs)('div', {
        className: d.reaction,
        children: [
          null != o ? (0, i.jsx)(l.Z, {
            className: d.reactionEmote,
            emojiId: o.emojiId,
            emojiName: o.emojiName,
            animated: !!(null == t ? void 0 : t.animated)
          }) : (0, i.jsx)(n.ReactionIcon, {
            size: 'sm',
            color: 'currentColor',
            className: d.reactionEmote
          }),
          (0, i.jsx)(n.Text, {
            variant: 'text-sm/semibold',
            color: 'interactive-normal',
            children: 17
          })
        ]
      }),
      (0, i.jsx)(c, {
        width: '24px',
        marginBottom: 0
      }),
      (0, i.jsx)('div', {
        className: d.dot
      }),
      (0, i.jsx)(c, {
        width: '24px',
        marginBottom: 0
      })
    ]
  })
]
  });
}

function c(e) {
  let {
width: o,
marginBottom: t
  } = e;
  return (0, i.jsx)('div', {
className: d.placeholderLine,
style: {
  width: o,
  marginBottom: t
}
  });
}