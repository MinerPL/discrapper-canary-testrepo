n.d(t, {
    Yy: function () {
        return S;
    },
    ZP: function () {
        return A;
    },
    ai: function () {
        return r;
    }
}),
    n(47120),
    n(653041);
var r,
    i,
    a = n(392711),
    s = n.n(a),
    o = n(47770),
    l = n(46973),
    u = n(966146),
    c = n(902704),
    d = n(846519),
    f = n(621012),
    _ = n(314897),
    h = n(526167),
    p = n(70956),
    m = n(709054),
    g = n(798681),
    E = n(981631),
    v = n(65154);
function I(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
let S = { any: 100 },
    T = 30 * p.Z.Millis.SECOND,
    b = 120 * p.Z.Millis.SECOND,
    y = -1 !== (0, h.hY)();
((i = r || (r = {})).UserSSRCUpdate = 'user-ssrc-update'), (i.Update = 'update');
class A extends o.Z {
    getWantsLevel() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
            t = this.getVideoParticipantCount();
        return this.ladder.getMaxSinkValue(t, e);
    }
    userVideoDisabled(e) {
        return this.offscreenDisabledUsers[e];
    }
    isOneToOneCall() {
        return 1 === this.otherUsers.size;
    }
    updateCallUserIds(e) {
        e.delete(_.default.getId()), (this.otherUsers = e), this.update();
    }
    shouldReceiveFromUser(e) {
        var t, n;
        let r = !((null === (t = this.connection) || void 0 === t ? void 0 : t.getLocalVideoDisabled(e)) || (this.userVideoDisabled(e) && (null === (n = this.videoHealthManager) || void 0 === n ? void 0 : n.getCurrentVideoToggleState(e)) !== E.ZUi.AUTO_PROBING));
        return g.w.isIncomingVideoEnabled() && r;
    }
    getAudioSSRCs() {
        return this.audioSsrcs;
    }
    setConnection(e) {
        var t, n, r, i, a, s;
        let o = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
        null === (t = this.connection) || void 0 === t || t.removeListener(l.Sh.LocalVideoDisabled, this.handleLocalVideoDisabled), null === (n = this.connection) || void 0 === n || n.removeListener(l.Sh.LocalMute, this.handleLocalMute), null === (r = this.connection) || void 0 === r || r.removeListener(l.Sh.ActiveSinksChange, this.delayedUpdate), (this.connection = e), null === (i = this.connection) || void 0 === i || i.addListener(l.Sh.LocalVideoDisabled, this.handleLocalVideoDisabled), null === (a = this.connection) || void 0 === a || a.addListener(l.Sh.LocalMute, this.handleLocalMute), null === (s = this.connection) || void 0 === s || s.addListener(l.Sh.ActiveSinksChange, this.delayedUpdate), o && this.update();
    }
    setAudioSSRC(e, t) {
        return t > 0 ? (this.audioSsrcs[e] = t) : delete this.audioSsrcs[e], this.update();
    }
    setVideoSSRCs(e, t) {
        let n = t
            .filter((e) => {
                var t;
                return e.active && (null !== (t = e.ssrc) && void 0 !== t ? t : 0) > 0;
            })
            .map((e) => {
                var t;
                return {
                    quality: null !== (t = e.quality) && void 0 !== t ? t : 100,
                    ssrc: e.ssrc
                };
            });
        if (n.length > 0) (this.videoSsrcs[e] = n), this.participants.add(e);
        else {
            if (void 0 !== this.videoSsrcs[e]) for (let { ssrc: t } of this.videoSsrcs[e]) delete this.framesReceived[t];
            delete this.remoteVideoSsrcs[e], delete this.videoSsrcs[e], this.participants.delete(e), this.emit('user-ssrc-update', e, this.audioSsrcs[e], []);
        }
        return this.update(Array.from(this.participants));
    }
    setFirstFrameReceived(e) {
        return (this.framesReceived[e] = !0), this.update();
    }
    setStreamId(e, t) {
        return null != t ? (this.streamIds[e] = t) : (e in this.streamIds && delete this.streamPixelCounts[this.streamIds[e]], delete this.streamIds[e]), this.update();
    }
    destroyUser(e) {
        return delete this.audioSsrcs[e], delete this.videoSsrcs[e], this.participants.delete(e), delete this.streamPixelCounts[this.streamIds[e]], delete this.streamIds[e], this.update(Array.from(this.participants));
    }
    reset() {
        this.setConnection(null, !1), (this.audioSsrcs = {}), (this.videoSsrcs = {}), (this.remoteVideoSsrcs = {}), (this.framesReceived = {}), (this.streamIds = {}), (this.streamPixelCounts = {}), (this.latestWants = S), g.w.off(g.e.IncomingVideoEnabledChanged, this.incomingVideoEnabledChanged);
    }
    setSelectedParticipant(e) {
        if (e === this.selectedParticipantId) return this.latestWants;
        let t = [];
        if ((null != this.selectedParticipantId && this.selectedParticipantId !== this.userId && t.push(this.selectedParticipantId), null != e)) {
            if (this.participants.has(e)) (this.selectedParticipantId = e), t.push(e);
            else {
                if (this.userId !== e) return console.warn('Participant not found: '.concat(e)), this.latestWants;
                this.selectedParticipantId = e;
            }
        } else this.selectedParticipantId = null;
        return this.update(
            t.filter((e) => {
                var t;
                return (null === (t = this.videoSsrcs[e]) || void 0 === t ? void 0 : t.length) > 1;
            })
        );
    }
    setPipOpen(e) {
        return ((this.pipOpen = e), null != this.selectedParticipantId) ? this.update([this.selectedParticipantId]) : this.latestWants;
    }
    getOffscreenDisabledUsers() {
        return this.offscreenDisabledUsers;
    }
    setSimulcastDebugOverride(e, t) {
        this.simulcastDebugOverrides.set(e, t), this.update();
    }
    setVideoSize(e, t) {
        t > 0 ? (this.streamPixelCounts[e] = t) : delete this.streamPixelCounts[e], this.delayedUpdate();
    }
    getVideoParticipantCount() {
        let e = 0;
        for (let n of Object.keys(this.videoSsrcs)) {
            var t;
            !(null === (t = this.connection) || void 0 === t ? void 0 : t.getLocalVideoDisabled(n)) && e++;
        }
        return e;
    }
    getOffscreenTimeoutMs() {
        return this.isStageChannel ? b : T;
    }
    getSimulcastOverrideQuality(e) {
        return this.simulcastDebugOverrides.has(e) ? this.simulcastDebugOverrides.get(e) : v.Z.NO_OVERRIDE;
    }
    constructor(e, t, n, r = new u.x()) {
        var i;
        super(),
            (i = this),
            I(this, 'userId', void 0),
            I(this, 'isStageChannel', void 0),
            I(this, 'supportsSeamless', void 0),
            I(this, 'ladder', void 0),
            I(this, 'connection', void 0),
            I(this, 'audioSsrcs', void 0),
            I(this, 'videoSsrcs', void 0),
            I(this, 'remoteVideoSsrcs', void 0),
            I(this, 'framesReceived', void 0),
            I(this, 'streamIds', void 0),
            I(this, 'offscreenUsers', void 0),
            I(this, 'offscreenDisabledUsers', void 0),
            I(this, 'streamPixelCounts', void 0),
            I(this, 'latestWants', void 0),
            I(this, 'participants', void 0),
            I(this, 'selectedParticipantId', void 0),
            I(this, 'delayedCall', void 0),
            I(this, 'offscreenTimeout', void 0),
            I(this, 'pipOpen', void 0),
            I(this, 'simulcastDebugOverrides', void 0),
            I(this, 'videoHealthManager', void 0),
            I(this, 'otherUsers', void 0),
            I(this, 'delayedUpdate', void 0),
            I(this, 'addLru', void 0),
            I(this, 'updateOffscreenUsers', void 0),
            I(this, 'handleLocalVideoDisabled', void 0),
            I(this, 'handleLocalMute', void 0),
            I(this, 'update', void 0),
            I(this, 'incomingVideoEnabledChanged', void 0),
            (this.userId = e),
            (this.isStageChannel = t),
            (this.supportsSeamless = n),
            (this.ladder = r),
            (this.connection = null),
            (this.audioSsrcs = {}),
            (this.videoSsrcs = {}),
            (this.remoteVideoSsrcs = {}),
            (this.framesReceived = {}),
            (this.streamIds = {}),
            (this.offscreenUsers = {}),
            (this.offscreenDisabledUsers = {}),
            (this.streamPixelCounts = {}),
            (this.latestWants = S),
            (this.participants = new Set()),
            (this.selectedParticipantId = null),
            (this.pipOpen = !1),
            (this.simulcastDebugOverrides = new Map()),
            (this.videoHealthManager = null),
            (this.otherUsers = new Set()),
            (this.delayedUpdate = () => {
                this.delayedCall.delay();
            }),
            (this.addLru = (e, t, n) => {
                if ((n.push(e), n.length <= 3)) return;
                let r = -1,
                    i = -1;
                for (let e = 0; e < n.length; e++) {
                    let a = n[e],
                        s = t - this.offscreenUsers[a];
                    s > r && ((r = s), (i = e));
                }
                (this.offscreenDisabledUsers[n[i]] = !0), n.splice(i, 1);
            }),
            (this.updateOffscreenUsers = () => {
                var e, t;
                if (!(null === (e = this.connection) || void 0 === e ? void 0 : e.getActiveOutputSinkTrackingEnabled())) return;
                let n = Date.now(),
                    r = [];
                for (let [e, i] of m.default.entries(this.streamIds)) {
                    if (null != i) (null === (t = this.connection) || void 0 === t ? void 0 : t.getHasActiveVideoOutputSink(i)) ? (delete this.offscreenUsers[e], delete this.offscreenDisabledUsers[e]) : null == this.offscreenUsers[e] ? ((this.offscreenUsers[e] = n), this.addLru(e, n, r)) : !this.offscreenDisabledUsers[e] && (n - this.offscreenUsers[e] >= this.getOffscreenTimeoutMs() ? (this.offscreenDisabledUsers[e] = !0) : this.addLru(e, n, r));
                }
                if (r.length > 0) {
                    let e = n + this.getOffscreenTimeoutMs();
                    for (let t of r) e = Math.min(e, this.offscreenUsers[t] + this.getOffscreenTimeoutMs());
                    this.offscreenTimeout.start(e - n, this.update);
                } else this.offscreenTimeout.stop();
            }),
            (this.handleLocalVideoDisabled = (e, t) => {
                this.update();
            }),
            (this.handleLocalMute = (e, t) => {
                this.update();
            }),
            (this.update = function () {
                var e, t;
                let n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
                    r = i.getWantsLevel(),
                    a = { any: r };
                i.updateOffscreenUsers();
                let { enabledSingle: o } = f.m.getCurrentConfig({ location: 'RTCMediaSinkWantsManager.update' }, { autoTrackExposure: !1 }),
                    l = o && i.isOneToOneCall() && !i.isStageChannel;
                for (let [t, s] of m.default.entries(i.videoSsrcs)) {
                    let o = [],
                        u = !1,
                        d = null !== (e = i.streamPixelCounts[i.streamIds[t]]) && void 0 !== e ? e : 0,
                        f = i.getWantsLevel(d),
                        _ = s[0].ssrc;
                    if (i.shouldReceiveFromUser(t)) {
                        let e = t === i.selectedParticipantId && 100 !== r && !i.pipOpen;
                        if (s.length > 1) {
                            for (let t of s) 100 === t.quality ? (e ? ((a[t.ssrc] = 100), (_ = t.ssrc)) : (a[t.ssrc] = 0)) : e ? (a[t.ssrc] = 0) : (l && (a[t.ssrc] = f), (_ = t.ssrc));
                            if (i.supportsSeamless && !i.framesReceived[_]) for (let e of ((u = !0), (o = [_]), s)) e.ssrc !== _ && i.framesReceived[e.ssrc] && (100 === e.quality ? (a[e.ssrc] = 100) : (a[e.ssrc] = l ? f : r), o.push(e.ssrc));
                        } else e ? (a[_] = 100) : l && (a[_] = f);
                    } else for (let e of s) a[e.ssrc] = 0;
                    let h = i.getSimulcastOverrideQuality(t);
                    for (let e of (h === v.Z.HIGH ? (a[_] = 100) : h === v.Z.LOW && (a[_] = 50), (!i.supportsSeamless || !u) && (o = [_]), s)) !o.includes(e.ssrc) && delete i.framesReceived[e.ssrc];
                    (n.includes(t) || (void 0 !== i.remoteVideoSsrcs[t] && !(0, c.Z)(i.remoteVideoSsrcs[t], o))) && ((i.remoteVideoSsrcs[t] = [...o]), i.emit('user-ssrc-update', t, i.audioSsrcs[t], o));
                }
                for (let [e, n] of Object.entries(i.audioSsrcs)) (null === (t = i.connection) || void 0 === t ? void 0 : t.getLocalMute(e)) && (a[n] = 0);
                return y ? i.latestWants : (null != i.connection && !s().isEqual(i.latestWants, a) && ((i.latestWants = a), i.emit('update', a)), a);
            }),
            (this.incomingVideoEnabledChanged = () => {
                this.update();
            }),
            (this.delayedCall = new d.sW(100, this.update)),
            (this.offscreenTimeout = new d.V7()),
            g.w.on(g.e.IncomingVideoEnabledChanged, this.incomingVideoEnabledChanged);
    }
}
