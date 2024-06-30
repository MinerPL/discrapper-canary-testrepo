n(47120);
var r, i = n(442837), a = n(433517), o = n(570140), s = n(581883);
function l(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n, e;
}
let u = {}, c = {};
function d() {
    var e, t, n, r, i, a;
    let o = s.Z.settings;
    return {
        gifAutoPlay: null === (t = o.textAndImages) || void 0 === t ? void 0 : null === (e = t.gifAutoPlay) || void 0 === e ? void 0 : e.value,
        animateEmoji: null === (r = o.textAndImages) || void 0 === r ? void 0 : null === (n = r.animateEmoji) || void 0 === n ? void 0 : n.value,
        animateStickers: null === (a = o.textAndImages) || void 0 === a ? void 0 : null === (i = a.animateStickers) || void 0 === i ? void 0 : i.value
    };
}
function _() {
    return c = d(), !1;
}
class E extends (r = i.ZP.PersistedStore) {
    initialize(e) {
        u = null != e ? e : {}, this.syncWith([s.Z], _);
    }
    getState() {
        return u;
    }
    getAppliedOverrideReasonKey(e) {
        var t;
        return null === (t = u[e]) || void 0 === t ? void 0 : t.reasonKey;
    }
    getOverride(e) {
        return u[e];
    }
}
l(E, 'displayName', 'UserSettingsOverridesStore'), l(E, 'persistKey', 'UserSettingsOverridesStore'), l(E, 'migrations', [() => {
        var e;
        let t = null !== (e = a.K.get('UserSettingsStoreOverrides')) && void 0 !== e ? e : {};
        return a.K.remove('UserSettingsStoreOverrides'), t;
    }]), t.Z = new E(o.Z, {
    USER_SETTINGS_PROTO_UPDATE: function () {
        let e = d(), t = !1;
        for (let n in e)
            e[n] !== c[n] && (delete u[n], t = !0);
        return t;
    },
    USER_SETTINGS_OVERRIDE_APPLY: function (e) {
        let {settings: t} = e;
        u = {
            ...u,
            ...t
        };
    },
    USER_SETTINGS_OVERRIDE_CLEAR: function (e) {
        let {settings: t} = e;
        for (let e of t)
            delete u[e];
    },
    LOGOUT: function () {
        u = {};
    },
    LOGIN_SUCCESS: function () {
        u = {};
    }
});
