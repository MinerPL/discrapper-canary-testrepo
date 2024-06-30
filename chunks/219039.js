s.d(t, {
    Z: function () {
        return o;
    }
});
var n = s(735250);
s(470079);
var a = s(481060), i = s(689938), r = s(351155);
function o(e) {
    let {count: t} = e;
    return (0, n.jsxs)('div', {
        className: r.countContainer,
        children: [
            (0, n.jsx)('div', { className: r.dot }),
            (0, n.jsx)(a.Text, {
                variant: 'text-xs/medium',
                color: 'header-secondary',
                children: i.Z.Messages.CLAN_DISCOVERY_MEMBER_COUNT.format({ count: t })
            })
        ]
    });
}
