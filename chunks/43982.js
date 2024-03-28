"use strict";
n.r(t), n.d(t, {
  default: function() {
    return p
  }
});
var a = n("735250");
n("470079");
var l = n("512722"),
  s = n.n(l),
  i = n("392711"),
  r = n.n(i),
  o = n("970731"),
  u = n("981631"),
  d = n("689938"),
  c = n("963106"),
  f = n("480032"),
  h = n("699352");
let m = null;

function p(e) {
  let {
    onDismiss: t,
    onAccept: n,
    popoutPosition: l,
    gameConsoleAccounts: i
  } = e;
  s()(i.length > 0, "Rendering ConsoleNUXTooltip without a game console account"), (null == m || null == i.find(e => e.type === m)) && (m = r().shuffle(i)[0].type);
  let p = null,
    E = null;
  switch (m) {
    case u.PlatformTypes.XBOX:
      p = d.default.Messages.CONSOLE_NUX_TOOLTIP_BODY_XBOX, E = h;
      break;
    case u.PlatformTypes.PLAYSTATION:
    case u.PlatformTypes.PLAYSTATION_STAGING:
      p = d.default.Messages.CONSOLE_NUX_TOOLTIP_BODY_PS5, E = f
  }
  return (0, a.jsx)(o.default, {
    header: d.default.Messages.CONSOLE_NUX_TOOLTIP_HEADER,
    content: p,
    asset: (0, a.jsx)("img", {
      src: E,
      alt: "",
      className: c.art
    }),
    onClick: n,
    onSecondaryClick: t,
    markAsDismissed: t,
    buttonCTA: d.default.Messages.CONSOLE_NUX_TOOLTIP_ACCEPT,
    secondaryButtonCTA: d.default.Messages.CONSOLE_NUX_TOOLTIP_DISMISS,
    caretPosition: "top" === l ? o.CaretPosition.BOTTOM_LEFT : o.CaretPosition.TOP_LEFT
  })
}