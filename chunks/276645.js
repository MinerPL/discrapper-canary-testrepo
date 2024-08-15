n.d(t, {
  Z: function() {
return o;
  }
});
var i = n(735250);
n(470079);
var a = n(481060),
  s = n(970731),
  r = n(689938),
  l = n(71741);

function o(e) {
  let {
guildId: t,
markAsDismissed: o
  } = e;
  return (0, i.jsx)(s.ZP, {
className: l.container,
asset: (0, i.jsx)('img', {
  className: l.image,
  src: n(297806),
  alt: ''
}),
header: r.Z.Messages.PREMIUM_CUSTOM_NOTIFICATION_SOUND_COACHMARK_TITLE,
headerClassName: l.header,
content: r.Z.Messages.PREMIUM_CUSTOM_NOTIFICATION_SOUND_COACHMARK_DESCRIPTION,
buttonCTA: r.Z.Messages.CHECK_IT_OUT,
buttonProps: {
  color: a.ButtonColors.WHITE,
  innerClassName: l.primaryButton
},
onClick: () => {
  (0, a.openModalLazy)(async () => {
    let {
      default: e
    } = await Promise.all([
      n.e('5863'),
      n.e('48324')
    ]).then(n.bind(n, 751212));
    return n => (0, i.jsx)(e, {
      ...n,
      guildId: t
    });
  });
},
secondaryButtonCTA: r.Z.Messages.MAYBE_LATER,
secondaryButtonProps: {
  look: a.ButtonLooks.LINK,
  color: a.ButtonColors.WHITE
},
markAsDismissed: o
  });
}