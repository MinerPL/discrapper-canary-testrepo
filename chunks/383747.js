n.d(t, {
    Z: function () {
        return l;
    }
});
var i = n(735250),
    a = n(481060),
    s = n(410030),
    r = n(689938);
function l(e) {
    let { onClick: t } = e,
        l = (0, s.ZP)();
    return (0, i.jsxs)(a.EmptyState, {
        theme: l,
        children: [
            (0, i.jsx)(a.EmptyStateImage, {
                lightSrc: n(979770),
                darkSrc: n(138715),
                width: 415,
                height: 200
            }),
            (0, i.jsx)(a.EmptyStateText, { note: r.Z.Messages.QUESTS_CLAIMED_QUEST_EMPTY_STATE.format({ onClick: t }) })
        ]
    });
}
