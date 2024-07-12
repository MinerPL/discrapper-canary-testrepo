n.d(t, {
  Z: function() {
return d;
  }
});
var i = n(735250);
n(470079);
var s = n(434404),
  a = n(970731),
  r = n(981631),
  l = n(689938),
  o = n(26209),
  c = n(687351);

function d(e) {
  let {
guild: t,
markAsDismissed: n
  } = e;
  return (0, i.jsx)(a.ZP, {
header: l.Z.Messages.DISCOVERY_LANDING_PAGE_UPSELL_TITLE,
content: l.Z.Messages.DISCOVERY_LANDING_PAGE_UPSELL_DESCRIPTION,
asset: (0, i.jsx)('div', {
  className: o.image,
  children: (0, i.jsx)('img', {
    alt: '',
    src: c
  })
}),
buttonCTA: l.Z.Messages.DISCOVERY_LANDING_PAGE_UPSELL_BUTTON_ACCEPT,
onClick: e => {
  var n;
  n = t, s.Z.open(n.id, r.pNK.DISCOVERY_LANDING_PAGE);
},
secondaryButtonCTA: l.Z.Messages.DISCOVERY_LANDING_PAGE_UPSELL_BUTTON_DISMISS,
onSecondaryClick: () => {},
markAsDismissed: n
  });
}