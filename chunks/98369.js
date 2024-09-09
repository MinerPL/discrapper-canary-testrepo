n(47120), n(518263), n(970173), n(520712), n(268111), n(941497), n(32026), n(480839), n(744285), n(492257), n(873817), n(724458);
var i,
    s,
    a,
    l,
    r = n(442837),
    o = n(46973),
    c = n(570140),
    u = n(569545),
    d = n(314897),
    h = n(19780),
    m = n(959457),
    p = n(630759),
    _ = n(729303),
    f = n(651941),
    E = n(981631);
let g = new Map(),
    C = new Map(),
    I = !1,
    x = null;
function T() {
    return m.Z.getAllActiveStreamKeys().reduce((e, t) => {
        let { ownerId: n } = (0, u.my)(t),
            i = !0 === g.get(n),
            s = C.get(t) !== i;
        return C.set(t, i), !!s || e;
    }, !1);
}
function v() {
    var e;
    let t = null !== (e = h.Z.getUserIds()) && void 0 !== e ? e : new Set(),
        n = d.default.getId(),
        i = !0;
    for (let e of t)
        if (n !== e && !0 !== g.get(e)) {
            i = !1;
            break;
        }
    let s = i !== I;
    return (I = i), s;
}
function S(e) {
    let { userId: t } = e;
    if (d.default.getId() === t) return !1;
    let n = (function (e) {
            let t = h.Z.getSecureFramesRosterMapEntry(e);
            if (null == t) return !1;
            let n = new Uint8Array(t),
                i = f.Z.isKeyVerified(e, n) || _.Z.isKeyVerified(e, n),
                s = (0, p.UB)(e, [h.Z, m.Z]),
                a = i && !s,
                l = a !== g.get(e);
            return g.set(e, a), l;
        })(t),
        i = T(),
        s = v();
    return n || i || s;
}
function N() {
    g.clear(), C.clear(), (I = !1);
}
class A extends (i = r.ZP.Store) {
    initialize() {
        this.waitFor(_.Z, f.Z, h.Z, m.Z);
    }
    isCallVerified() {
        return I;
    }
    isStreamVerified(e) {
        return C.get(e);
    }
    isUserVerified(e) {
        return g.get(e);
    }
}
(l = 'SecureFramesVerifiedStore'),
    (a = 'displayName') in (s = A)
        ? Object.defineProperty(s, a, {
              value: l,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (s[a] = l),
    (t.Z = new A(c.Z, {
        CONNECTION_OPEN: N,
        VOICE_CHANNEL_SELECT: function (e) {
            let { channelId: t } = e;
            if (t === x) return !1;
            (x = t), N();
        },
        RTC_CONNECTION_STATE: function (e) {
            let { streamKey: t, state: n, context: i } = e;
            if (n !== E.hes.DISCONNECTED) return !1;
            switch (i) {
                case o.Yn.STREAM:
                    if (null == t) return !1;
                    return C.delete(t), v();
                case o.Yn.DEFAULT:
                    N();
            }
        },
        RTC_CONNECTION_ROSTER_MAP_UPDATE: function (e) {
            let { userIds: t } = e,
                n = d.default.getId(),
                i = t.reduce((e, t) => (n === t ? e : !!S({ userId: t }) || e), !1),
                s = T(),
                a = v();
            return i || s || a;
        },
        SECURE_FRAMES_TRANSIENT_KEY_CREATE: S,
        SECURE_FRAMES_TRANSIENT_KEY_DELETE: S,
        SECURE_FRAMES_VERIFIED_KEY_CREATE: S,
        SECURE_FRAMES_VERIFIED_KEY_DELETE: S,
        SECURE_FRAMES_USER_VERIFIED_KEYS_DELETE: S
    }));
