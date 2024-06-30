t.d(e, {
    Z: function () {
        return M;
    }
});
var l = t(735250);
t(470079);
var u = t(442837), r = t(481060), i = t(313889), a = t(825829), o = t(36459), c = t(592125), s = t(375954), d = t(496675), _ = t(981631), E = t(689938);
function M(n, e) {
    let t = (0, u.e7)([d.Z], () => null != n && d.Z.canWithPartialContext(_.Plq.MANAGE_MESSAGES, { channelId: n }), [n]), M = (0, u.e7)([c.Z], () => c.Z.getChannel(n), [n]), f = (0, u.e7)([s.Z], () => null != n && null != e ? s.Z.getMessage(n, e) : null), T = (0, a.NK)(null != f ? f : null);
    if (null == M || null == f)
        return null;
    let Z = null != T && T.actions.hasOwnProperty(i.d.SET_COMPLETED) ? i.d.UNSET_COMPLETED : i.d.SET_COMPLETED, A = Z === i.d.SET_COMPLETED ? E.Z.Messages.GUILD_AUTOMOD_ALERT_SET_COMPLETED : E.Z.Messages.GUILD_AUTOMOD_ALERT_UNSET_COMPLETED;
    return t && null != e ? (0, l.jsx)(r.MenuItem, {
        id: 'mark-automod-alert-completed',
        label: A,
        action: () => {
            (0, o.Xx)(e, M, Z);
        }
    }, 'mark-automod-alert-completed') : null;
}
