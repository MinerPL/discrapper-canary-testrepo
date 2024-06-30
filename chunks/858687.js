t.d(n, {
    Z: function () {
        return d;
    }
});
var a = t(735250), l = t(470079), i = t(481060), r = t(493683), o = t(960670), u = t(933557), s = t(689938);
function d(e, n) {
    let t = (0, u.ZP)(e), d = l.useCallback(() => {
            let l = s.Z.Messages.LEAVE_GROUP_DM_TITLE.format({ name: t }), u = s.Z.Messages.LEAVE_GROUP_DM_BODY.format({ name: t });
            e.isManaged() && (l = s.Z.Messages.LEAVE_GROUP_DM_MANAGED_TITLE.format({ name: t }), u = s.Z.Messages.LEAVE_GROUP_DM_MANAGED_BODY.format({ name: t }));
            let d = function (t) {
                let a = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                r.Z.closePrivateChannel(e.id, n, a);
            };
            (0, i.openModal)(e => (0, a.jsx)(o.Z, {
                header: l,
                body: u,
                onSubmit: d,
                ...e
            }));
        }, [
            e,
            t,
            n
        ]);
    return (0, a.jsx)(i.MenuItem, {
        id: 'leave-channel',
        label: s.Z.Messages.LEAVE_GROUP_DM,
        action: d,
        color: 'danger'
    });
}
