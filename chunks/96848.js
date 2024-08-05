t.d(n, {
  Z: function() {
return p;
  }
}), t(47120), t(757143);
var i = t(735250),
  a = t(470079),
  r = t(481060),
  s = t(907040),
  l = t(981631),
  o = t(185923),
  c = t(689938),
  u = t(605099);
let d = {
section: l.jXE.VOICE_CHANNEL_EFFECTS_EMOJI_PICKER,
openPopoutType: 'gift_effect_emoji_picker'
  },
  _ = o.Hz.GIFT;

function p(e) {
  let {
setEmojiConfetti: n,
emojiConfetti: t
  } = e, [l, o] = a.useState(!1), p = e => (0, i.jsxs)('div', {
className: u.customGiftContent,
children: [
  (0, i.jsxs)('div', {
    className: u.customGiftHeader,
    children: [
      (0, i.jsx)(r.Text, {
        variant: 'text-md/bold',
        children: c.Z.Messages.GIFT_SELECT_EMOJI
      }),
      (0, i.jsx)(r.Text, {
        variant: 'text-sm/normal',
        children: c.Z.Messages.GIFT_SELECT_SOUNDBOARD_OR_EMOJI_DESCRIPTION
      })
    ]
  }),
  e
]
  }), m = e => {
null != n && (n(e), o(!1));
  };
  return (0, i.jsx)(r.Popout, {
shouldShow: l,
position: 'bottom',
align: 'left',
autoInvert: !1,
onRequestClose: () => o(!1),
renderPopout: e => {
  let {
    closePopout: n
  } = e;
  return (0, i.jsx)(r.Dialog, {
    children: (0, i.jsx)(s.Z, {
      analyticsOverride: d,
      closePopout: n,
      onSelectEmoji: m,
      wrapper: 'div',
      pickerIntention: _,
      renderHeader: p,
      headerClassName: u.emojiHeader,
      className: u.emojiList,
      listHeaderClassName: u.emojiList,
      searchProps: {
        accessory: (0, i.jsx)(i.Fragment, {})
      }
    })
  });
},
children: () => (0, i.jsx)('div', {
  className: u.container,
  children: (0, i.jsx)(r.Clickable, {
    className: u.emoji,
    onClick: () => o(!0),
    children: (null == t ? void 0 : t.name) == null ? (0, i.jsxs)(i.Fragment, {
      children: [
        (0, i.jsx)(r.ReactionIcon, {
          size: 'custom',
          color: 'currentColor',
          className: u.emojiIcon,
          width: 14,
          height: 14
        }),
        (0, i.jsx)(r.Text, {
          className: u.text,
          variant: 'text-sm/semibold',
          children: c.Z.Messages.GIFT_SELECT_EMOJI
        })
      ]
    }) : (0, i.jsxs)(i.Fragment, {
      children: [
        (0, i.jsx)(r.Text, {
          className: u.textSelected,
          variant: 'text-sm/semibold',
          children: null == t.guildId ? t.optionallyDiverseSequence : null
        }),
        (0, i.jsx)(r.Text, {
          className: u.text,
          variant: 'text-sm/semibold',
          children: t.name.replace(/_/g, ' ')
        })
      ]
    })
  })
})
  });
}