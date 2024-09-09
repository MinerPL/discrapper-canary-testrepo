n.d(t, {
    Z: function () {
        return l;
    }
});
var i = n(735250),
    s = n(481060),
    a = n(575016),
    r = n(782590);
function l(e) {
    let { reminder: t, throttledNow: n } = e,
        { dueInText: l, isOverdue: o } = (0, a.A)({
            dueAt: null == t ? void 0 : t.saveData.dueAt,
            now: n,
            type: a.h.SHORT
        });
    if (null == t.saveData.dueAt) return null;
    let c = o ? 'text-danger' : 'text-normal';
    return (0, i.jsxs)('div', {
        className: r.container,
        children: [
            (0, i.jsx)('div', {
                className: r.icon,
                children: (0, i.jsx)(s.ClockIcon, {
                    size: 'xxs',
                    color: 'text-danger' === c ? s.tokens.colors.TEXT_DANGER : s.tokens.colors.INTERACTIVE_ACTIVE
                })
            }),
            (0, i.jsx)(s.Heading, {
                variant: 'text-md/semibold',
                color: c,
                children: l
            })
        ]
    });
}
