t.d(e, {
    Z: function () {
        return c;
    }
});
var l = t(735250);
t(470079);
var u = t(442837), r = t(481060), i = t(430824), a = t(594174), o = t(689938);
function c(n, e) {
    let c = (0, u.e7)([a.default], () => a.default.getCurrentUser()), s = (0, u.e7)([i.Z], () => i.Z.getGuild(e));
    return null == s || null == c || n.id === s.ownerId || n.bot || !s.isOwnerWithRequiredMfaLevel(c) ? null : (0, l.jsx)(r.MenuItem, {
        id: 'transfer-ownership',
        color: 'danger',
        label: o.Z.Messages.TRANSFER_OWNERSHIP,
        action: () => (0, r.openModalLazy)(async () => {
            let {default: e} = await t.e('8653').then(t.bind(t, 928090));
            return t => (0, l.jsx)(e, {
                ...t,
                guild: s,
                fromUser: c,
                toUser: n
            });
        })
    });
}
