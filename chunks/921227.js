var i, s = n(442837), o = n(570140);
function a(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n, e;
}
let l = {};
class r extends (i = s.ZP.PersistedStore) {
    initialize(e) {
        Object.assign(l, e);
    }
    getState() {
        return l;
    }
    shouldShowEducation(e) {
        return !0 !== l[e];
    }
}
a(r, 'displayName', 'ActivityInviteEducationStore'), a(r, 'persistKey', 'ActivityInviteEducationExperimentStore'), t.Z = new r(o.Z, {
    ACTIVITY_INVITE_EDUCATION_DISMISS: function (e) {
        return l[e.key] = e.value, !0;
    }
});
