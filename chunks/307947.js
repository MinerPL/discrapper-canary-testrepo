n.d(t, {
    Z: function () {
        return _;
    }
});
var i = n(735250);
n(470079);
var s = n(442837), a = n(481060), r = n(210887), l = n(687683), o = n(689938), c = n(630194), d = n(138715), u = n(979770);
function _(e) {
    let {section: t} = e, n = (0, s.e7)([r.Z], () => r.Z.theme);
    return (0, i.jsxs)(a.EmptyState, {
        theme: n,
        className: c.emptyStateContainer,
        children: [
            (0, i.jsx)(a.EmptyStateImage, {
                width: 415,
                height: 200,
                lightSrc: u,
                darkSrc: d
            }),
            (0, i.jsx)(a.EmptyStateText, { note: t === l.pS.SPAM ? o.Z.Messages.MESSAGE_REQUESTS_SPAM_EMPTY_STATE_BODY : o.Z.Messages.MESSAGE_REQUESTS_EMPTY_STATE_BODY })
        ]
    });
}
