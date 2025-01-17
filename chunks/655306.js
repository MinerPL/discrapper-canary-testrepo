n.d(t, {
    Yy: function () {
        return m;
    },
    ZP: function () {
        return S;
    },
    ai: function () {
        return r;
    }
}),
    n(47120),
    n(653041);
var r,
    i,
    a = n(47770),
    s = n(46973),
    o = n(966146),
    l = n(902704),
    u = n(846519),
    c = n(526167),
    d = n(70956),
    _ = n(709054),
    E = n(798681),
    f = n(981631),
    h = n(65154);
function p(e, t, n) {
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
let m = { any: 100 },
    I = 30 * d.Z.Millis.SECOND,
    T = 120 * d.Z.Millis.SECOND,
    g = -1 !== (0, c.hY)();
((i = r || (r = {})).UserSSRCUpdate = 'user-ssrc-update'), (i.Update = 'update');
class S extends a.Z {
    getWantsLevel() {
        let e = this.getVideoParticipantCount();
        return this.ladder.getMaxSinkValue(e);
    }
    userVideoDisabled(e) {
        return this.offscreenDisabledUsers[e];
    }
    shouldReceiveFromUser(e) {
        var t, n;
        let r = !((null === (t = this.connection) || void 0 === t ? void 0 : t.getLocalVideoDisabled(e)) || (this.userVideoDisabled(e) && (null === (n = this.videoHealthManager) || void 0 === n ? void 0 : n.getCurrentVideoToggleState(e)) !== f.ZUi.AUTO_PROBING));
        return E.w.isIncomingVideoEnabled() && r;
    }
    getAudioSSRCs() {
        return this.audioSsrcs;
    }
    setConnection(e) {
        var t, n, r, i, a, o;
        let l = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
        null === (t = this.connection) || void 0 === t || t.removeListener(s.Sh.LocalVideoDisabled, this.handleLocalVideoDisabled), null === (n = this.connection) || void 0 === n || n.removeListener(s.Sh.LocalMute, this.handleLocalMute), null === (r = this.connection) || void 0 === r || r.removeListener(s.Sh.ActiveSinksChange, this.delayedUpdate), (this.connection = e), null === (i = this.connection) || void 0 === i || i.addListener(s.Sh.LocalVideoDisabled, this.handleLocalVideoDisabled), null === (a = this.connection) || void 0 === a || a.addListener(s.Sh.LocalMute, this.handleLocalMute), null === (o = this.connection) || void 0 === o || o.addListener(s.Sh.ActiveSinksChange, this.delayedUpdate), l && this.update();
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
        return null != t ? (this.streamIds[e] = t) : delete this.streamIds[e], this.update();
    }
    destroyUser(e) {
        return delete this.audioSsrcs[e], delete this.videoSsrcs[e], this.participants.delete(e), delete this.streamIds[e], this.update(Array.from(this.participants));
    }
    reset() {
        this.setConnection(null, !1), (this.audioSsrcs = {}), (this.videoSsrcs = {}), (this.remoteVideoSsrcs = {}), (this.framesReceived = {}), (this.streamIds = {}), (this.latestWants = m);
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
    setAppBackgrounded(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        for (let [r, i] of _.default.entries(this.streamIds))
            if (((this.offscreenDisabledUsers[r] = e), null != i)) {
                var n;
                let r = !e || t;
                null === (n = this.connection) || void 0 === n || n.setHasActiveVideoOutputSink(i, r);
            }
        return this.update();
    }
    getOffscreenDisabledUsers() {
        return this.offscreenDisabledUsers;
    }
    setSimulcastDebugOverride(e, t) {
        this.simulcastDebugOverrides.set(e, t), this.update();
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
        return this.isStageChannel ? T : I;
    }
    getSimulcastOverrideQuality(e) {
        return this.simulcastDebugOverrides.has(e) ? this.simulcastDebugOverrides.get(e) : h.Z.NO_OVERRIDE;
    }
    constructor(e, t, n, r = new o.x()) {
        var i;
        super(),
            (i = this),
            p(this, 'userId', void 0),
            p(this, 'isStageChannel', void 0),
            p(this, 'supportsSeamless', void 0),
            p(this, 'ladder', void 0),
            p(this, 'connection', void 0),
            p(this, 'audioSsrcs', void 0),
            p(this, 'videoSsrcs', void 0),
            p(this, 'remoteVideoSsrcs', void 0),
            p(this, 'framesReceived', void 0),
            p(this, 'streamIds', void 0),
            p(this, 'offscreenUsers', void 0),
            p(this, 'offscreenDisabledUsers', void 0),
            p(this, 'latestWants', void 0),
            p(this, 'participants', void 0),
            p(this, 'selectedParticipantId', void 0),
            p(this, 'delayedCall', void 0),
            p(this, 'offscreenTimeout', void 0),
            p(this, 'pipOpen', void 0),
            p(this, 'simulcastDebugOverrides', void 0),
            p(this, 'videoHealthManager', void 0),
            p(this, 'delayedUpdate', void 0),
            p(this, 'addLru', void 0),
            p(this, 'updateOffscreenUsers', void 0),
            p(this, 'handleLocalVideoDisabled', void 0),
            p(this, 'handleLocalMute', void 0),
            p(this, 'update', void 0),
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
            (this.latestWants = m),
            (this.participants = new Set()),
            (this.selectedParticipantId = null),
            (this.pipOpen = !1),
            (this.simulcastDebugOverrides = new Map()),
            (this.videoHealthManager = null),
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
                for (let [e, i] of _.default.entries(this.streamIds)) {
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
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
                    t = i.getWantsLevel(),
                    n = { any: t };
                for (let [r, a] of (i.updateOffscreenUsers(), _.default.entries(i.videoSsrcs))) {
                    let s = [],
                        o = !1,
                        u = a[0].ssrc;
                    if (i.shouldReceiveFromUser(r)) {
                        let e = r === i.selectedParticipantId && 100 !== t && !i.pipOpen;
                        if (a.length > 1) {
                            for (let t of a) 100 === t.quality ? (e ? ((n[t.ssrc] = 100), (u = t.ssrc)) : (n[t.ssrc] = 0)) : e ? (n[t.ssrc] = 0) : (u = t.ssrc);
                            if (i.supportsSeamless && !i.framesReceived[u]) for (let e of ((o = !0), (s = [u]), a)) e.ssrc !== u && i.framesReceived[e.ssrc] && (100 === e.quality ? (n[e.ssrc] = 100) : (n[e.ssrc] = t), s.push(e.ssrc));
                        } else e && (n[u] = 100);
                    } else for (let e of a) n[e.ssrc] = 0;
                    let c = i.getSimulcastOverrideQuality(r);
                    for (let e of (c === h.Z.HIGH ? (n[u] = 100) : c === h.Z.LOW && (n[u] = 50), (!i.supportsSeamless || !o) && (s = [u]), a)) !s.includes(e.ssrc) && delete i.framesReceived[e.ssrc];
                    (e.includes(r) || (void 0 !== i.remoteVideoSsrcs[r] && !(0, l.Z)(i.remoteVideoSsrcs[r], s))) && ((i.remoteVideoSsrcs[r] = [...s]), i.emit('user-ssrc-update', r, i.audioSsrcs[r], s));
                }
                for (let [e, t] of Object.entries(i.audioSsrcs)) {
                    var r;
                    (null === (r = i.connection) || void 0 === r ? void 0 : r.getLocalMute(e)) && (n[t] = 0);
                }
                return g ? i.latestWants : (null != i.connection && !(0, l.Z)(i.latestWants, n) && ((i.latestWants = n), i.emit('update', n)), n);
            }),
            (this.delayedCall = new u.sW(100, this.update)),
            (this.offscreenTimeout = new u.V7()),
            E.w.on(E.e.IncomingVideoEnabledChanged, () => {
                this.update();
            });
    }
}
