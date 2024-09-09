n.d(t, {
    UB: function () {
        return T;
    },
    Uc: function () {
        return o;
    },
    kE: function () {
        return V;
    }
});
var r,
    i,
    u,
    l,
    o,
    c,
    a = n(470079),
    s = n(442837),
    d = n(570140),
    f = n(872810),
    E = n(998594),
    v = n(592125),
    p = n(430824),
    S = n(131951),
    P = n(496675),
    _ = n(944486),
    N = n(382182),
    g = n(74299),
    R = n(299570),
    Z = n(65154);
((r = o || (o = {}))[(r.Present = 0)] = 'Present'), (r[(r.Update = 1)] = 'Update'), (r[(r.Cancel = 2)] = 'Cancel'), (r[(r.Error = 3)] = 'Error');
let h = !1,
    C = 0,
    A = 0,
    I = !1,
    k = {};
function m() {
    return S.Z.supports(Z.AN.NATIVE_SCREENSHARE_PICKER);
}
function b() {
    return m() && E.Z.getCurrentConfig({ location: 'NativeScreenSharePickerStore_enabled' }, { autoTrackExposure: !1 }).enableSystemPicker;
}
function w() {
    let e = b() && (A > 0 || (h && 0 === C));
    if (e !== I) {
        var t, n;
        !(I = e) && (0, R.t)(), null === (n = S.Z.getMediaEngine()) || void 0 === n || null === (t = n.setNativeDesktopVideoSourcePickerActive) || void 0 === t || t.call(n, I);
    }
}
function T() {
    return (0, a.useEffect)(
        () => (
            C++,
            w(),
            () => {
                0 == --C && ((0, R.t)(), w());
            }
        ),
        []
    );
}
function V() {
    return (0, a.useEffect)(
        () => (
            A++,
            w(),
            () => {
                --A, w();
            }
        ),
        []
    );
}
function O() {
    let e = v.Z.getChannel(_.Z.getVoiceChannelId());
    return (h = null != e && (0, g.Z)(S.Z) && (0, N.JL)(e, p.Z, P.Z, !1)), w(), !1;
}
class W extends (c = s.ZP.Store) {
    initialize() {
        this.syncWith([S.Z, _.Z, v.Z, p.Z, P.Z], O), E.Z.subscribe({ location: 'NativeScreenSharePickerStore_initialize' }, w), O();
    }
    supported() {
        return m();
    }
    enabled() {
        return b();
    }
    releasePickerStream() {
        (0, R.t)();
    }
    getPickerState() {
        return k;
    }
}
(l = 'NativeScreenSharePickerStore'),
    (u = 'displayName') in (i = W)
        ? Object.defineProperty(i, u, {
              value: l,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (i[u] = l);
t.ZP = new W(d.Z, {
    NATIVE_SCREEN_SHARE_PICKER_UPDATE: function (e) {
        let { existing: t } = e;
        if (((k = { lastPickerAction: 1 }), 0 === C && !t)) {
            let e = v.Z.getChannel(_.Z.getVoiceChannelId());
            null != e && (0, g.Z)(S.Z) && (0, N.JL)(e, p.Z, P.Z, !1) && (0, f.WH)(e.getGuildId(), e.id, { sourceId: 'prepicked:0' });
        }
    },
    NATIVE_SCREEN_SHARE_PICKER_CANCEL: function () {
        k = { lastPickerAction: 2 };
    },
    NATIVE_SCREEN_SHARE_PICKER_ERROR: function (e) {
        let { error: t } = e;
        k = {
            lastPickerAction: 3,
            lastPickerError: t
        };
    },
    NATIVE_SCREEN_SHARE_PICKER_PRESENT: function () {
        k = { lastPickerAction: 0 };
    },
    NATIVE_SCREEN_SHARE_PICKER_RELEASE: function () {
        k = {};
    }
});
