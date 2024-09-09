n.d(t, {
    C4: function () {
        return l;
    },
    RF: function () {
        return o;
    },
    pX: function () {
        return a;
    },
    vw: function () {
        return s;
    },
    yV: function () {
        return u;
    }
});
var r = n(352981),
    i = n(732845);
function a() {
    let { enabled: e } = i.mv.useExperiment({ location: 'adf3ea_1' });
    return e;
}
function s() {
    let { enabled: e } = i.mv.getCurrentConfig({ location: 'adf3ea_2' });
    return e;
}
function o(e, t) {
    let { enabled: n } = i.xB.useExperiment({ location: t }),
        a = (0, r.y)(e, t);
    return n && a;
}
function l(e, t) {
    let { enabled: n } = i.xB.getCurrentConfig({ location: t }),
        a = (0, r.p)(e, t);
    return n && a;
}
function u(e) {
    let { enabled: t } = i.ac.useExperiment({ location: e });
    return t;
}
