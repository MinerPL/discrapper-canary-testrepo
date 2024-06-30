var i, r = t(442837), o = t(433517), a = t(570140), s = t(981631);
function l(e, n, t) {
    return n in e ? Object.defineProperty(e, n, {
        value: t,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[n] = t, e;
}
let c = {
        lastViewedPath: null,
        lastViewedNonVoicePath: null
    }, d = c, u = 'LAST_VIEWED_PATH';
class _ extends (i = r.ZP.PersistedStore) {
    initialize() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : c;
        d = null != e ? e : c;
    }
    get defaultRoute() {
        return s.Z5c.ME;
    }
    get lastNonVoiceRoute() {
        var e;
        return null !== (e = d.lastViewedNonVoicePath) && void 0 !== e ? e : s.Z5c.ME;
    }
    get fallbackRoute() {
        return s.Z5c.ME;
    }
    getState() {
        return d;
    }
}
l(_, 'displayName', 'DefaultRouteStore'), l(_, 'persistKey', 'DefaultRouteStore'), l(_, 'migrations', [() => {
        let e = o.K.get(u, null);
        return o.K.remove(u), { lastViewedPath: e };
    }]), n.Z = new _(a.Z, {
    SAVE_LAST_ROUTE: function (e) {
        let {path: n} = e;
        return d.lastViewedPath = n, !0;
    },
    SAVE_LAST_NON_VOICE_ROUTE: function (e) {
        let {path: n} = e;
        return d.lastViewedNonVoicePath = n, !0;
    }
});
