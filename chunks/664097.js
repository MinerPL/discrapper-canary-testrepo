n.d(t, {
    o: function () {
        return a;
    }
});
var i = n(470079), l = n(442837), o = n(115130), u = n(701488);
let a = () => {
    let {
            isEnabled: e,
            lastUsedObject: t
        } = (0, l.cj)([o.Z], () => ({
            isEnabled: o.Z.getIsEnabled(),
            lastUsedObject: o.Z.getLastUsedObject()
        }), []), n = (0, l.Wu)([o.Z], () => o.Z.getDeveloperShelfItems(), []);
    return i.useMemo(() => e ? n.map(e => ({
        application: e,
        activity: {
            ...u.wT,
            ...e.embeddedActivityConfig,
            application_id: e.id
        }
    })).sort((e, n) => {
        let i = t[e.application.id], l = t[n.application.id];
        return null == i ? 1 : null == l ? -1 : l - i;
    }) : [], [
        n,
        e,
        t
    ]);
};
