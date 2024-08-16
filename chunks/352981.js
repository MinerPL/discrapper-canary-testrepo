n.d(t, {
    p: function () {
        return s;
    },
    y: function () {
        return a;
    }
});
var r = n(482833),
    i = n(981631);
function a(e, t) {
    let { enabled: n } = r.c.useExperiment({
        guildId: null != e ? e : i.lds,
        location: t
    });
    return n;
}
function s(e, t) {
    let { enabled: n } = r.c.getCurrentConfig({
        guildId: null != e ? e : i.lds,
        location: t
    });
    return n;
}
