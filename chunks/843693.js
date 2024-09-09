n.d(t, {
    wU: function () {
        return A;
    }
}),
    n(47120);
var r,
    i,
    a,
    s,
    o = n(442837),
    l = n(759174),
    u = n(846519),
    c = n(570140),
    d = n(314897),
    _ = n(944486),
    E = n(585483),
    f = n(351780),
    h = n(641033),
    p = n(524484),
    m = n(981631);
let I = new Set(),
    T = new l.h(
        function (e) {
            let { userId: t, channelId: n } = e;
            return [t, n];
        },
        function (e) {
            let { userId: t, channelId: n } = e;
            return ''.concat(n, '-').concat(t);
        }
    ),
    g = new l.h(
        function (e) {
            let {
                messageId: t,
                channelId: n,
                combo: { userId: r }
            } = e;
            return [t, n, r];
        },
        function (e) {
            let {
                messageId: t,
                channelId: n,
                combo: { userId: r }
            } = e;
            return ''.concat(n, '-').concat(r, '-').concat(t);
        }
    ),
    S = (e) => {
        let { userId: t, channelId: n } = e;
        return ''.concat(t, '-').concat(n);
    };
function A(e, t, n, r) {
    return !(e !== t || null == n || r.has(n)) && (r.add(n), !0);
}
class N extends (r = o.ZP.Store) {
    initialize() {
        this.waitFor(d.default, _.Z);
    }
    getComboScore(e, t) {
        let n = T.get(
            S({
                userId: e,
                channelId: t
            })
        );
        return null == n ? 0 : (0, h.Eo)(n);
    }
    getUserCombo(e, t) {
        return T.get(
            S({
                userId: e,
                channelId: t
            })
        );
    }
    isComboing(e, t) {
        var n;
        let r = this.getUserCombo(e, t);
        return null != r && r.value >= f.Z.combosRequiredCount && null != (n = r) && (n.value > 0 || (null == n ? void 0 : n.multiplier) > 1);
    }
    getMessageCombo(e) {
        var t;
        let n = g.get(e);
        return null !== (t = null == n ? void 0 : n.combo) && void 0 !== t ? t : void 0;
    }
    getMostRecentMessageCombo(e) {
        let t = g.values(e);
        return t[t.length - 1];
    }
    getUserComboShakeIntensity(e, t, n, r) {
        let i = this.getUserCombo(e, t);
        return null != i ? (0, h.KH)(i, r) * n : 0;
    }
}
(s = 'PoggermodeStore'),
    (a = 'displayName') in (i = N)
        ? Object.defineProperty(i, a, {
              value: s,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (i[a] = s);
let v = new N(c.Z, {
    POGGERMODE_UPDATE_COMBO: function (e) {
        let { type: t, ...n } = e;
        if (!f.Z.isEnabled()) return !1;
        !(function e(t) {
            var n, r, i, a, s, o;
            let l = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
                c = T.get(S(t)),
                d = {
                    ...c,
                    ...t,
                    value: null !== (r = null !== (n = t.value) && void 0 !== n ? n : null == c ? void 0 : c.value) && void 0 !== r ? r : 0,
                    multiplier: Math.min(null !== (a = null !== (i = t.multiplier) && void 0 !== i ? i : null == c ? void 0 : c.multiplier) && void 0 !== a ? a : 1, 7),
                    decayInterval: null !== (s = null == c ? void 0 : c.decayInterval) && void 0 !== s ? s : new u.Xp()
                };
            T.set(S(t), d),
                l &&
                    (null === (o = d.decayInterval) ||
                        void 0 === o ||
                        o.start(1000, () => {
                            let t = T.get(S(d));
                            if (null != t) {
                                let r = d.multiplier !== t.multiplier && d.value !== t.value;
                                if (t.value <= 0 || r) {
                                    var n;
                                    null === (n = t.decayInterval) || void 0 === n || n.stop(),
                                        t.value <= 0 &&
                                            (e({
                                                ...t,
                                                value: 0,
                                                multiplier: 1
                                            }),
                                            v.emitChange());
                                } else
                                    e({
                                        ...t,
                                        value: t.value - 1
                                    }),
                                        v.emitChange();
                            }
                        }));
        })(n);
    },
    POGGERMODE_UPDATE_MESSAGE_COMBO: function (e) {
        var t;
        let { comboMessage: n } = e;
        if (!f.Z.isEnabled()) return !1;
        (t = n), g.set(t.messageId, t);
    },
    MESSAGE_CREATE: function (e) {
        var t, n;
        let {
            channelId: r,
            message: { mentions: i, author: a, nonce: s }
        } = e;
        if (!f.Z.isEnabled()) return !1;
        let o = d.default.getId();
        if (!A(null == a ? void 0 : a.id, o, s, I)) return !1;
        let l = T.get(
            S({
                userId: null !== (t = null == a ? void 0 : a.id) && void 0 !== t ? t : '???',
                channelId: r
            })
        );
        if (f.Z.screenshakeEnabled && f.Z.screenshakeEnabledLocations[p.oZ.MENTION] && null != i && null != i.find((e) => e.id === o)) {
            let e = null != l ? (null !== (n = (0, h.KH)(l, p.qi.LEVEL_4)) && void 0 !== n ? n : 0.001) : 4 * Math.random();
            return (
                E.S.dispatch(m.CkL.SHAKE_APP, {
                    duration: 1000,
                    intensity: e
                }),
                !0
            );
        }
        return !1;
    }
});
t.ZP = v;
