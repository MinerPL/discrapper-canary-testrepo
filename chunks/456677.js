n.d(t, {
    Z: function () {
        return c;
    }
}), n(47120);
var s = n(735250), a = n(470079), i = n(866830), r = n(85960), l = n(226192), o = n(683579);
function c(e) {
    let {
            rule: t,
            onChangeRule: n
        } = e, c = a.useMemo(() => (0, r.V9)(t.triggerType), [t.triggerType]), d = l.km(t.guildId), u = a.useMemo(() => (0, i.U5)(), []), _ = (e, s) => {
            if (null == s)
                return;
            let a = t.actions.some(e => e.type === s.type), i = [
                    ...t.actions,
                    s
                ];
            if (a) {
                let n = t.actions.filter(e => e.type !== s.type);
                i = e ? [
                    ...n,
                    s
                ] : n;
            }
            n({
                ...t,
                actions: i
            });
        }, E = e => async n => {
            let s = t.actions.find(t => t.type === e), a = null != s, i = u[e], r = n ? s : i;
            if (null != r && (!a || n)) {
                let n = d[e];
                null != n ? _(!0, await n(t, r)) : _(!0, r);
            } else
                _(!1, a ? s : i);
        };
    return (0, s.jsx)(s.Fragment, {
        children: c.map(e => {
            let n = t.actions.find(t => t.type === e);
            return (0, s.jsx)(o.Z, {
                guildId: t.guildId,
                triggerType: t.triggerType,
                action: null != n ? n : u[e],
                toggled: null != n,
                onToggleAction: E(e)
            }, e);
        })
    });
}
