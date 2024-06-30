n.d(t, {
    X: function () {
        return A;
    }
});
var i, s = n(392711), a = n.n(s), r = n(442837), l = n(570140), o = n(846027), c = n(581883), d = n(358085), u = n(131951), _ = n(981631), E = n(65154);
function h(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n, e;
}
let I = {}, m = I, p = !1, g = {}, T = {}, S = {}, C = {
        id: null,
        justChanged: !1
    }, N = {
        id: null,
        justChanged: !1
    }, f = /\(([^)]+)\)/;
function A(e) {
    if ((0, d.getPlatform)() === d.PlatformTypes.WINDOWS) {
        let t = e.name.match(f);
        if (null != t)
            return t[1];
    }
    return e.name;
}
function Z(e, t, n) {
    return null == e || e.displayName !== t ? {
        displayName: t,
        type: n
    } : e.type === _.QyF.INPUT && n === _.QyF.OUTPUT || e.type === _.QyF.OUTPUT && n === _.QyF.INPUT ? {
        displayName: t,
        type: _.QyF.INPUT_AND_OUTPUT
    } : e;
}
class L extends (i = r.ZP.DeviceSettingsStore) {
    initialize(e) {
        this.waitFor(u.Z, c.Z), m = null != e ? e : I;
    }
    getUserAgnosticState() {
        return m;
    }
    get initialized() {
        return p;
    }
    get lastDeviceConnected() {
        return S;
    }
    get inputDevices() {
        return g;
    }
    get lastInputSystemDevice() {
        return C;
    }
    get outputDevices() {
        return T;
    }
    get lastOutputSystemDevice() {
        return N;
    }
}
h(L, 'displayName', 'ConnectedDeviceStore'), h(L, 'persistKey', 'ConnectedDeviceStore'), t.Z = new L(l.Z, {
    MEDIA_ENGINE_DEVICES: function (e) {
        let {
                inputDevices: t,
                outputDevices: n
            } = e, i = {};
        C.justChanged = !1, t.forEach(e => {
            if (i[A(e)] = e.id, e.id === E.w5) {
                var t;
                let n = null !== (t = e.originalId) && void 0 !== t ? t : e.originalName;
                n !== C.id && (C.justChanged = !0), C.id = n;
            }
        });
        let s = {};
        if (N.justChanged = !1, n.forEach(e => {
                if (s[A(e)] = e.id, e.id === E.w5) {
                    var t;
                    let n = null !== (t = e.originalId) && void 0 !== t ? t : e.originalName;
                    n !== N.id && (N.justChanged = !0), N.id = n;
                }
            }), !p) {
            g = i, T = s, p = !0;
            return;
        }
        let r = Object.keys(g), l = Object.keys(i), o = Object.keys(T), c = Object.keys(s), d = a().difference(r, l), u = a().difference(o, c);
        return d.length > 0 || u.length > 0 ? S = {} : (a().difference(l, r).forEach(e => {
            S[e] = Z(S[e], e, _.QyF.INPUT);
        }), a().difference(c, o).forEach(e => {
            S[e] = Z(S[e], e, _.QyF.OUTPUT);
        })), !(a().isEqual(r, l) && a().isEqual(o, c)) && (g = i, T = s, !0);
    },
    CONNECTED_DEVICE_SET: function (e) {
        let {
            displayName: t,
            connectedDevicePreference: n,
            location: i
        } = e;
        !function (e, t, n) {
            if (t === _.aVf.INPUT || t === _.aVf.INPUT_AND_OUTPUT) {
                let t = g[e];
                null != t && l.Z.wait(() => o.Z.setInputDevice(t, n));
            }
            if (t === _.aVf.OUTPUT || t === _.aVf.INPUT_AND_OUTPUT) {
                let t = T[e];
                l.Z.wait(() => o.Z.setOutputDevice(t, n));
            }
        }(t, n, i), delete S[t];
    },
    CONNECTED_DEVICE_IGNORE: function (e) {
        let {displayName: t} = e;
        delete S[t];
    },
    CONNECTED_DEVICE_NEVER_SHOW_MODAL: function () {
        S = {}, m = { neverShowModal: !0 };
    }
});
