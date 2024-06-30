t.d(n, {
    Z: function () {
        return o;
    }
}), t(47120);
var l = t(735250);
t(470079);
var i = t(442837), u = t(481060), s = t(889161), r = t(924301), a = t(495279), d = t(894017), E = t(689938);
function o(e) {
    let {
            guildEventId: n,
            recurrenceId: t,
            guild: o,
            channel: c
        } = e, _ = null != t, {canManageGuildEvent: T} = (0, s.XJ)(null != c ? c : o), [N, I] = (0, i.Wu)([r.ZP], () => [
            r.ZP.isActive(n),
            r.ZP.getGuildScheduledEvent(n)
        ]), Z = (0, d.Z)(t, null == I ? void 0 : I.id), f = null != I && T(I);
    return _ && (null == Z ? void 0 : Z.is_canceled) && f && (!N || _) ? (0, l.jsx)(u.MenuItem, {
        id: E.Z.Messages.RESTORE_EVENT,
        label: E.Z.Messages.RESTORE_EVENT,
        action: () => {
            null != t && null != Z && (0, a.Z)(Z, o.id, n, t);
        }
    }) : null;
}
