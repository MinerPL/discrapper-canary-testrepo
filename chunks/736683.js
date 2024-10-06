n.d(t, {
    Z: function () {
        return d;
    },
    j: function () {
        return u;
    }
});
var i = n(735250);
n(470079);
var a = n(481060),
    s = n(113434),
    r = n(786089),
    l = n(383747),
    o = n(710914),
    c = n(450637);
function d(e) {
    let { onSelectTab: t } = e,
        { claimedQuests: n, isFetchingClaimedQuests: o } = (0, s.eN)();
    return o && 0 === n.length
        ? (0, i.jsx)(a.Spinner, { className: c.spinner })
        : 0 === n.length
          ? (0, i.jsx)(l.Z, { onClick: () => t(s.e5.ALL) })
          : (0, i.jsx)('div', {
                className: c.gridContainer,
                children: n.map((e) => (0, i.jsx)(r.Z, { quest: e }, e.id))
            });
}
function u(e) {
    let { onSelectTab: t } = e,
        { quests: n, isFetchingCurrentQuests: r } = (0, s.bA)(s.e5.CLAIMED);
    return r && 0 === n.length
        ? (0, i.jsx)(a.Spinner, { className: c.spinner })
        : 0 === n.length
          ? (0, i.jsx)(l.Z, { onClick: () => t(s.e5.ALL) })
          : (0, i.jsx)(o.Z, {
                quests: n,
                isFetching: r
            });
}
