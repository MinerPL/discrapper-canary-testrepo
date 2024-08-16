n.d(t, {
    UB: function () {
        return A;
    },
    Uc: function () {
        return c;
    }
});
var r,
    o,
    i,
    a,
    c,
    l,
    s = n(470079),
    u = n(442837),
    d = n(570140),
    f = n(872810),
    _ = n(998594),
    p = n(592125),
    m = n(430824),
    h = n(131951),
    g = n(496675),
    b = n(944486),
    x = n(382182),
    C = n(74299),
    v = n(65154);
((r = c || (c = {}))[(r.Present = 0)] = 'Present'), (r[(r.Update = 1)] = 'Update'), (r[(r.Cancel = 2)] = 'Cancel'), (r[(r.Error = 3)] = 'Error');
let I = 0,
    S = {};
function E() {
    return h.Z.supports(v.AN.NATIVE_SCREENSHARE_PICKER);
}
function T() {
    return E() && _.Z.getCurrentConfig({ location: 'NativeScreenSharePickerStore_enabled' }, { autoTrackExposure: !1 }).enableSystemPicker;
}
function N() {
    var e, t;
    null === (t = h.Z.getMediaEngine()) || void 0 === t || null === (e = t.releaseNativeDesktopVideoSourcePickerStream) || void 0 === e || e.call(t);
}
function A() {
    return (0, s.useEffect)(
        () => (
            I++,
            () => {
                0 == --I && N();
            }
        ),
        []
    );
}
function P(e) {
    if (T()) {
        var t, n;
        N();
        let r = p.Z.getChannel(e),
            o = null != r && (0, C.Z)(h.Z) && (0, x.JL)(r, m.Z, g.Z, !1);
        null === (n = h.Z.getMediaEngine()) || void 0 === n || null === (t = n.setNativeDesktopVideoSourcePickerActive) || void 0 === t || t.call(n, o);
    }
}
function k() {
    N(), P(b.Z.getVoiceChannelId());
}
class w extends (l = u.ZP.Store) {
    initialize() {
        this.syncWith([h.Z, b.Z, p.Z, m.Z, g.Z], k), _.Z.subscribe({ location: 'NativeScreenSharePickerStore_initialize' }, k);
    }
    supported() {
        return E();
    }
    enabled() {
        return T();
    }
    presentPicker(e) {
        var t, n;
        (S = { lastPickerAction: 0 }), null === (n = h.Z.getMediaEngine()) || void 0 === n || null === (t = n.presentNativeScreenSharePicker) || void 0 === t || t.call(n, e);
    }
    releasePickerStream() {
        N();
    }
    getPickerState() {
        return S;
    }
}
(a = 'NativeScreenSharePickerStore'),
    (i = 'displayName') in (o = w)
        ? Object.defineProperty(o, i, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (o[i] = a);
t.ZP = new w(d.Z, {
    NATIVE_SCREEN_SHARE_PICKER_UPDATE: function (e) {
        let { existing: t } = e;
        if (((S = { lastPickerAction: 1 }), 0 === I && !t)) {
            let e = p.Z.getChannel(b.Z.getVoiceChannelId());
            null != e && (0, C.Z)(h.Z) && (0, x.JL)(e, m.Z, g.Z, !1) && (0, f.WH)(e.getGuildId(), e.id, { sourceId: 'prepicked:0' });
        }
    },
    NATIVE_SCREEN_SHARE_PICKER_CANCEL: function (e) {
        let {} = e;
        S = { lastPickerAction: 2 };
    },
    NATIVE_SCREEN_SHARE_PICKER_ERROR: function (e) {
        let { error: t } = e;
        S = {
            lastPickerAction: 3,
            lastPickerError: t
        };
    },
    VOICE_CHANNEL_SELECT: function (e) {
        let { channelId: t } = e;
        P(t);
    }
});
