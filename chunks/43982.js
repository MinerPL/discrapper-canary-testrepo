n.d(t, {
  Z: function() {
return _;
  }
});
var i = n(735250);
n(470079);
var a = n(512722),
  l = n.n(a),
  s = n(392711),
  r = n.n(s),
  o = n(970731),
  c = n(981631),
  d = n(689938),
  u = n(755943),
  h = n(480032),
  p = n(699352);
let m = null;

function _(e) {
  let {
onDismiss: t,
onAccept: n,
popoutPosition: a,
gameConsoleAccounts: s
  } = e;
  l()(s.length > 0, 'Rendering ConsoleNUXTooltip without a game console account'), (null == m || null == s.find(e => e.type === m)) && (m = r().shuffle(s)[0].type);
  let _ = null,
f = null;
  switch (m) {
case c.ABu.XBOX:
  _ = d.Z.Messages.CONSOLE_NUX_TOOLTIP_BODY_XBOX, f = p;
  break;
case c.ABu.PLAYSTATION:
case c.ABu.PLAYSTATION_STAGING:
  _ = d.Z.Messages.CONSOLE_NUX_TOOLTIP_BODY_PS5, f = h;
  }
  return (0, i.jsx)(o.ZP, {
header: d.Z.Messages.CONSOLE_NUX_TOOLTIP_HEADER,
content: _,
asset: (0, i.jsx)('img', {
  src: f,
  alt: '',
  className: u.art
}),
onClick: n,
onSecondaryClick: t,
markAsDismissed: t,
buttonCTA: d.Z.Messages.CONSOLE_NUX_TOOLTIP_ACCEPT,
secondaryButtonCTA: d.Z.Messages.CONSOLE_NUX_TOOLTIP_DISMISS,
caretPosition: 'top' === a ? o.DF.BOTTOM_LEFT : o.DF.TOP_LEFT
  });
}