n.d(t, {
    UB: function () {
        return D;
    },
    Uc: function () {
        return o;
    },
    kE: function () {
        return L;
    }
});
var r,
    i,
    a,
    s,
    o,
    l,
    u = n(192379),
    c = n(442837),
    d = n(570140),
    f = n(872810),
    _ = n(998594),
    h = n(592125),
    p = n(430824),
    m = n(131951),
    g = n(496675),
    E = n(944486),
    v = n(102172),
    I = n(74299),
    S = n(299570),
    T = n(65154);
((r = o || (o = {}))[(r.Present = 0)] = 'Present'), (r[(r.Update = 1)] = 'Update'), (r[(r.Cancel = 2)] = 'Cancel'), (r[(r.Error = 3)] = 'Error');
let b = !1,
    y = 0,
    A = 0,
    N = !1,
    C = {};
function R() {
    return m.Z.getUseSystemScreensharePicker();
}
function O() {
    let e = R() && (A > 0 || (b && 0 === y));
    if (e !== N) {
        var t, n;
        (N = e), null === (n = m.Z.getMediaEngine()) || void 0 === n || null === (t = n.setNativeDesktopVideoSourcePickerActive) || void 0 === t || t.call(n, N);
    }
}
function D() {
    return (0, u.useEffect)(
        () => (
            y++,
            O(),
            () => {
                0 == --y && O();
            }
        ),
        []
    );
}
function L() {
    return (0, u.useEffect)(
        () => (
            A++,
            O(),
            () => {
                --A, O();
            }
        ),
        []
    );
}
function x() {
    let e = h.Z.getChannel(E.Z.getVoiceChannelId());
    return (b = null != e && (0, I.Z)(m.Z) && (0, v.JL)(e, p.Z, g.Z, !1)), O(), !1;
}
class w extends (l = c.ZP.Store) {
    initialize() {
        this.syncWith([m.Z, E.Z, h.Z, p.Z, g.Z], x), _.Z.subscribe({ location: 'NativeScreenSharePickerStore_initialize' }, O), x();
    }
    supported() {
        return m.Z.supports(T.AN.NATIVE_SCREENSHARE_PICKER);
    }
    enabled() {
        return R();
    }
    releasePickerStream() {
        (0, S.t)();
    }
    getPickerState() {
        return C;
    }
}
(s = 'NativeScreenSharePickerStore'),
    (a = 'displayName') in (i = w)
        ? Object.defineProperty(i, a, {
              value: s,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (i[a] = s);
t.ZP = new w(d.Z, {
    NATIVE_SCREEN_SHARE_PICKER_UPDATE: function (e) {
        let { existing: t } = e;
        if (((C = { lastPickerAction: 1 }), 0 === y && !t)) {
            let e = h.Z.getChannel(E.Z.getVoiceChannelId());
            null != e && (0, I.Z)(m.Z) && (0, v.JL)(e, p.Z, g.Z, !1) && (0, f.WH)(e.getGuildId(), e.id, { sourceId: 'prepicked:0' });
        }
    },
    NATIVE_SCREEN_SHARE_PICKER_CANCEL: function () {
        C = { lastPickerAction: 2 };
    },
    NATIVE_SCREEN_SHARE_PICKER_ERROR: function (e) {
        let { error: t } = e;
        C = {
            lastPickerAction: 3,
            lastPickerError: t
        };
    },
    NATIVE_SCREEN_SHARE_PICKER_PRESENT: function () {
        C = { lastPickerAction: 0 };
    },
    NATIVE_SCREEN_SHARE_PICKER_RELEASE: function () {
        C = {};
    }
});
