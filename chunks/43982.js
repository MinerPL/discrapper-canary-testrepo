n.d(t, {
  Z: function() {
return _;
  }
});
var i = n(735250);
n(470079);
var a = n(512722),
  s = n.n(a),
  l = n(392711),
  r = n.n(l),
  o = n(970731),
  c = n(981631),
  u = n(689938),
  d = n(213738),
  h = n(480032),
  m = n(699352);
let p = null;

function _(e) {
  let {
onDismiss: t,
onAccept: n,
popoutPosition: a,
gameConsoleAccounts: l
  } = e;
  s()(l.length > 0, 'Rendering ConsoleNUXTooltip without a game console account'), (null == p || null == l.find(e => e.type === p)) && (p = r().shuffle(l)[0].type);
  let _ = null,
f = null;
  switch (p) {
case c.ABu.XBOX:
  _ = u.Z.Messages.CONSOLE_NUX_TOOLTIP_BODY_XBOX, f = m;
  break;
case c.ABu.PLAYSTATION:
case c.ABu.PLAYSTATION_STAGING:
  _ = u.Z.Messages.CONSOLE_NUX_TOOLTIP_BODY_PS5, f = h;
  }
  return (0, i.jsx)(o.ZP, {
header: u.Z.Messages.CONSOLE_NUX_TOOLTIP_HEADER,
content: _,
asset: (0, i.jsx)('img', {
  src: f,
  alt: '',
  className: d.art
}),
onClick: n,
onSecondaryClick: t,
markAsDismissed: t,
buttonCTA: u.Z.Messages.CONSOLE_NUX_TOOLTIP_ACCEPT,
secondaryButtonCTA: u.Z.Messages.CONSOLE_NUX_TOOLTIP_DISMISS,
caretPosition: 'top' === a ? o.DF.BOTTOM_LEFT : o.DF.TOP_LEFT
  });
}