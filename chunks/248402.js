let r, i;
n(47120);
var a, o, s, l, u = n(392711), c = n.n(u), d = n(442837), _ = n(570140), E = n(358221), f = n(569545), h = n(199902), p = n(314897), m = n(131951), I = n(606304), T = n(354459);
function g() {
    let e, t = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
    if (null == r)
        e = null;
    else {
        var n, a, o, s, l;
        e = E.Z.getSelectedParticipantId(r);
        let t = h.Z.getLastActiveStream(), u = null != e ? E.Z.getParticipant(r, e) : null;
        if (((null == u ? void 0 : u.type) === T.fO.ACTIVITY || (null == u ? void 0 : u.type) === T.fO.USER && !(null === (n = u.voiceState) || void 0 === n ? void 0 : n.selfVideo)) && (e = null), null != t && null == e && (e = null === (a = E.Z.getParticipant(r, (0, f.V9)(t))) || void 0 === a ? void 0 : a.id), null == e) {
            let t = p.default.getId(), n = c()(E.Z.getVideoParticipants(r)).filter(e => e.type === T.fO.USER && e.user.id !== t && !m.Z.isLocalVideoDisabled(e.user.id)), a = Date.now();
            null == (e = null === (o = n.map(e => [
                e.user.id,
                I.Z.getSpeakingDuration(e.user.id, a)
            ]).filter(e => {
                let [t, n] = e;
                return 0 !== n;
            }).maxBy(e => {
                let [t, n] = e;
                return -n;
            })) || void 0 === o ? void 0 : o[0]) && (e = null != i ? i : null === (l = n.first()) || void 0 === l ? void 0 : null === (s = l.user) || void 0 === s ? void 0 : s.id);
        }
    }
    i !== e && (i = e, t && v.emitChange());
}
let S = c().debounce(g, 300);
function A() {
    return S(), !1;
}
class N extends (a = d.ZP.Store) {
    initialize() {
        this.waitFor(E.Z, p.default, I.Z, h.Z, m.Z), this.syncWith([
            E.Z,
            h.Z
        ], A);
    }
    getSpeaker(e) {
        return r !== e && (r = e, g(!1)), null != i ? i : p.default.getId();
    }
}
l = 'VideoSpeakerStore', (s = 'displayName') in (o = N) ? Object.defineProperty(o, s, {
    value: l,
    enumerable: !0,
    configurable: !0,
    writable: !0
}) : o[s] = l;
let v = new N(_.Z, { AUDIO_SET_LOCAL_VIDEO_DISABLED: A });
t.Z = v;
