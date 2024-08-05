t.d(n, {
  Z: function() {
return p;
  }
}), t(47120);
var i = t(735250),
  a = t(470079),
  r = t(692547),
  s = t(481060),
  l = t(697426),
  o = t(603074),
  c = t(689938),
  u = t(290934);
let d = [
  54,
  8,
  8,
  8
];

function _(e) {
  let {
onSelect: n,
sound: t
  } = e, [_, p] = a.useState(!1);

  function m(e) {
p(!1), null == n || n(e);
  }
  let I = e => (0, i.jsxs)('div', {
className: u.customGiftHeader,
children: [
  (0, i.jsxs)('div', {
    className: u.__invalid_customGiftHeaderText,
    children: [
      (0, i.jsx)(s.Text, {
        variant: 'text-md/bold',
        children: c.Z.Messages.GIFT_SELECT_SOUND
      }),
      (0, i.jsx)(s.Text, {
        variant: 'text-sm/normal',
        children: c.Z.Messages.GIFT_SELECT_SOUNDBOARD_OR_EMOJI_DESCRIPTION
      })
    ]
  }),
  (0, i.jsx)('div', {
    className: u.searchAndSound,
    children: e
  })
]
  });
  return (0, i.jsx)(s.Popout, {
shouldShow: _,
position: 'bottom',
align: 'left',
onRequestClose: () => p(!1),
renderPopout: e => {
  let {
    closePopout: n
  } = e;
  return (0, i.jsx)(s.Dialog, {
    children: (0, i.jsx)(o.Z, {
      suppressPlaySound: !0,
      shouldShowUpsell: !1,
      guildId: null,
      channel: null,
      onClose: n,
      onSelect: m,
      analyticsSource: 'gift soundboard',
      soundButtonOverlay: l.Pb.ADD,
      listPadding: d,
      renderHeader: I,
      defaultSoundsOnly: !0
    })
  });
},
children: () => (0, i.jsx)(s.Clickable, {
  className: u.sound,
  onClick: () => p(!0),
  children: null == t ? (0, i.jsxs)(i.Fragment, {
    children: [
      (0, i.jsx)(s.SoundboardIcon, {
        size: 'custom',
        color: r.Z.colors.WHITE,
        className: u.soundIcon,
        width: 14,
        height: 14
      }),
      (0, i.jsx)(s.Text, {
        className: u.text,
        variant: 'text-sm/semibold',
        children: c.Z.Messages.GIFT_SELECT_SOUND
      })
    ]
  }) : (0, i.jsxs)(i.Fragment, {
    children: [
      (0, i.jsx)(s.Text, {
        className: u.textSelected,
        variant: 'text-sm/semibold',
        children: t.emojiName
      }),
      (0, i.jsx)(s.Text, {
        className: u.text,
        variant: 'text-sm/semibold',
        children: t.name
      })
    ]
  })
})
  });
}

function p(e) {
  let {
sound: n,
onSelect: t
  } = e;
  return (0, i.jsx)('div', {
className: u.container,
children: (0, i.jsx)(_, {
  onSelect: t,
  sound: n
})
  });
}