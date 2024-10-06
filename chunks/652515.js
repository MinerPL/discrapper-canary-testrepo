n.d(t, {
    C4: function () {
        return s;
    },
    RF: function () {
        return a;
    },
    yV: function () {
        return o;
    }
});
var r = n(352981),
    i = n(732845);
function a(e, t) {
    let { enabled: n } = i.x.useExperiment({ location: t }),
        a = (0, r.y)(e, t);
    return n && a;
}
function s(e, t) {
    let { enabled: n } = i.x.getCurrentConfig({ location: t }),
        a = (0, r.p)(e, t);
    return n && a;
}
function o(e) {
    let { enabled: t } = i.a.useExperiment({ location: e });
    return t;
}
