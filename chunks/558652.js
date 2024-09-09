n.d(t, {
    Z: function () {
        return l;
    }
});
var i = n(735250);
n(470079);
var a = n(113434),
    s = n(710914),
    r = n(466836);
function l(e) {
    let {} = e,
        { quests: t, isFetchingCurrentQuests: n } = (0, a.bA)(a.e5.ALL);
    return (0, i.jsx)('div', {
        className: r.gridContainer,
        children: (0, i.jsx)(s.Z, {
            quests: t,
            isFetching: n
        })
    });
}
