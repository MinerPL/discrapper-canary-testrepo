n.d(t, {
    Z: function () {
        return _;
    }
});
var i = n(735250);
n(470079);
var a = n(512722), l = n.n(a), s = n(392711), r = n.n(s), o = n(970731), c = n(981631), u = n(689938), d = n(623829), h = n(480032), p = n(699352);
let m = null;
function _(e) {
    let {
        onDismiss: t,
        onAccept: n,
        popoutPosition: a,
        gameConsoleAccounts: s
    } = e;
    l()(s.length > 0, 'Rendering ConsoleNUXTooltip without a game console account'), (null == m || null == s.find(e => e.type === m)) && (m = r().shuffle(s)[0].type);
    let _ = null, f = null;
    switch (m) {
    case c.ABu.XBOX:
        _ = u.Z.Messages.CONSOLE_NUX_TOOLTIP_BODY_XBOX, f = p;
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
