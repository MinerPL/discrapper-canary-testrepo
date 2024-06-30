n.d(t, {
    Z: function () {
        return T;
    }
}), n(47120);
var i = n(735250);
n(470079);
var a = n(442837), s = n(692547), l = n(481060), r = n(706454), o = n(594174), c = n(502568), d = n(626135), u = n(63063), _ = n(51144), E = n(981631), m = n(689938);
let I = new Set([
    'ko',
    'ja'
]);
function T() {
    let e = (0, a.e7)([o.default], () => o.default.getCurrentUser()), t = (0, a.e7)([r.default], () => r.default.locale), n = (0, _.EO)(e);
    return (0, i.jsx)(l.Anchor, {
        href: u.w,
        target: '_blank',
        tabIndex: -1,
        children: (0, i.jsx)(c.JO, {
            color: n ? s.Z.unsafe_rawColors.GREEN_360.css : 'currentColor',
            onClick: () => d.default.track(E.rMx.HELP_CLICKED, { highlighted: n }),
            icon: l.CircleQuestionIcon,
            tooltipPosition: I.has(t) ? 'left' : void 0,
            tooltip: m.Z.Messages.HELP
        })
    });
}
