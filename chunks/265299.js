n.d(t, {
    Z: function () {
        return d;
    }
});
var i = n(735250);
n(470079);
var a = n(481060), s = n(113434), l = n(497505), r = n(37303), o = n(683650), c = n(59685);
function d(e) {
    let {questId: t} = e, {
            quests: n,
            isFetchingCurrentQuests: d
        } = (0, s.J2)({ fetchPolicy: 'cache-or-network' }), u = n.find(e => e.id === t);
    return d ? (0, i.jsx)(a.Spinner, { className: c.spinner }) : null == u ? (0, i.jsx)(o.o, {}) : (0, i.jsx)(r.Z, {
        quest: u,
        location: l.jn.QUESTS_EMBED
    }, u.id);
}
