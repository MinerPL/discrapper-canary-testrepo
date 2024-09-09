n.d(t, {
    Z: function () {
        return g;
    },
    y: function () {
        return r;
    }
}),
    n(47120);
var r,
    i,
    a,
    s,
    o,
    l,
    u = n(392711),
    c = n.n(u),
    d = n(47770),
    _ = n(710845),
    E = n(314897),
    f = n(70956),
    h = n(960048),
    p = n(65154);
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
let m = 10 * f.Z.Millis.SECOND,
    T = 10 * f.Z.Millis.SECOND;
function S(e, t) {
    !e && h.Z.captureMessage('Assert failed: ' + t);
}
((s = r || (r = {})).RequestedSSRCsUpdate = 'requested-ssrcs-update'), (s.RequestedStreamsUpdate = 'requested-streams-update'), ((o = i || (i = {}))[(o.Ready = 0)] = 'Ready'), (o[(o.Pending = 1)] = 'Pending'), (o[(o.PendingSeamless = 2)] = 'PendingSeamless'), (o[(o.Finalizing = 3)] = 'Finalizing'), ((l = a || (a = {}))[(l.None = 0)] = 'None'), (l[(l.Low = 60)] = 'Low'), (l[(l.High = 100)] = 'High');
class g extends d.Z {
    setUserID(e) {
        this.userId = e;
    }
    getUserID() {
        return this.userId;
    }
    updateAudioAndVideoStreamInfo(e, t) {
        if (((this.audioSSRC = e), (this.videoStreams = t), this.videoStreams.length > 1)) {
            var n, r, i, a;
            let e = null !== (i = null === (n = c().minBy(this.videoStreams, (e) => e.quality)) || void 0 === n ? void 0 : n.ssrc) && void 0 !== i ? i : 0,
                t = null !== (a = null === (r = c().maxBy(this.videoStreams, (e) => e.quality)) || void 0 === r ? void 0 : r.ssrc) && void 0 !== a ? a : 0;
            (e !== this.lqSSRC || t !== this.hqSSRC) && ((this.lqSSRC = e), (this.hqSSRC = t), this.reset(), this.update());
        } else this.update();
    }
    setGoLiveStreamDowngraded(e) {
        if (!(!this.senderSupportsSimulcast() || this.isOneToOneCall()) && this.debugQualityOverride === p.Z.NO_OVERRIDE && e !== this.downgraded) this.isDowngradeChangeAllowed(e) && (this.logger.info('Setting downgraded to '.concat(e)), (this.downgraded = e), (this.lastDowngradeChangeTime = Date.now()), this.update());
    }
    isDowngraded() {
        return this.downgraded;
    }
    setSimulcastDebugOverride(e) {
        if (!!this.senderSupportsSimulcast() && e !== this.debugQualityOverride) (this.debugQualityOverride = e), this.update();
    }
    setFirstFrameReceived(e) {
        if (((this.currentSSRC = e), !!this.senderSupportsSimulcast())) {
            if (1 !== this.switchState && 2 !== this.switchState) {
                this.logger.warn('Received the first frame of ssrc '.concat(e, ' while switchState is ').concat(this.switchState));
                return;
            }
            this.pendingSSRC === e ? ((this.pendingSSRC = -1), 2 === this.switchState ? ((this.switchState = 3), this.update()) : (this.switchState = 0)) : this.logger.warn('Pending to switch to ssrc: '.concat(this.pendingSSRC, ' but received the first frame of ').concat(e, ', noop'));
        }
    }
    setThrottleStreamDowngradeChanges(e) {
        this.throttleDowngradeChanges = e;
    }
    senderSupportsSimulcast() {
        return this.videoStreams.length > 1;
    }
    updateCallUserIds(e) {
        e.delete(E.default.getId()), (this.otherUsers = e), this.isOneToOneCall() && this.downgraded && (this.logger.info('Call became 1:1 while downgraded, requesting HQ'), this.update());
    }
    onIncomingVideoEnabled(e) {
        this.incomingVideoEnabled !== e && ((this.incomingVideoEnabled = e), this.update());
    }
    update() {
        if (void 0 !== this.userId && null !== this.userId && 0 !== this.videoStreams.length) this.senderSupportsSimulcast() ? (this.supportsSeamless ? this.seamlessUpdate() : this.directUpdate()) : this.singleCastUpdate();
    }
    seamlessUpdate() {
        let e = this.getQuality();
        if (0 === e && this.isReceiving()) {
            this.reset(), this.stopStreams();
            return;
        }
        switch (this.switchState) {
            case 0:
                S(-1 === this.pendingSSRC, 'Ready state should not have a pendingSSRC'), this.isReceiving() && this.receivingLQ() && 100 === e ? (this.logger.info('Starting seamless transition from LQ to HQ (ssrc '.concat(this.lqSSRC, ' -> ').concat(this.hqSSRC, ')')), (this.pendingSSRC = 100 === e ? this.hqSSRC : this.lqSSRC), (this.switchState = 2), this.requestBoth()) : (this.logger.info('Starting non-seamless transition to '.concat(100 === e ? 'HQ' : 'LQ', ' (ssrc ').concat(100 === e ? this.hqSSRC : this.lqSSRC, ')')), (this.pendingSSRC = 100 === e ? this.hqSSRC : this.lqSSRC), (this.switchState = 1), 100 === e ? this.requestHQ() : this.requestLQ());
                break;
            case 2:
                S(-1 !== this.pendingSSRC, 'PendingSeamless state should have a pendingSSRC'), 60 === e && this.pendingHQ() ? (this.logger.info('Cancelling seamless transition from LQ to HQ, re-requesting LQ (ssrc '.concat(this.lqSSRC, ')')), (this.switchState = 0), (this.pendingSSRC = -1), this.requestLQ()) : 100 === e && this.pendingLQ() && (this.logger.info('Cancelling seamless transition from HQ to LQ, re-requesting HQ (ssrc '.concat(this.hqSSRC, ')')), (this.switchState = 0), (this.pendingSSRC = -1), this.requestHQ());
                break;
            case 1:
                S(-1 !== this.pendingSSRC, 'Pending state should have a pendingSSRC'), 60 === e && this.pendingHQ() ? (this.logger.info('Cancelling seamless transition from LQ to HQ, re-requesting LQ (ssrc '.concat(this.lqSSRC, ')')), (this.pendingSSRC = this.lqSSRC), this.requestLQ()) : 100 === e && this.pendingLQ() && (this.logger.info('Cancelling seamless transition from HQ to LQ, re-requesting HQ (ssrc '.concat(this.hqSSRC, ')')), (this.pendingSSRC = this.hqSSRC), this.requestHQ());
                break;
            case 3:
                S(this.isReceiving(), 'Should be receiving a stream in Finalizing state'), this.logger.info('Finalizing seamless transition to '.concat(100 === e ? 'HQ' : 'LQ')), 100 === e ? this.requestHQ() : 60 === e && this.requestLQ(), (this.switchState = 0), (this.pendingSSRC = -1);
        }
    }
    directUpdate() {
        let e = this.getQuality();
        if (0 === e && this.isReceiving()) {
            this.reset(), this.stopStreams();
            return;
        }
        0 === this.switchState ? (S(-1 === this.pendingSSRC, 'Ready state should not have a pendingSSRC'), this.logger.info('Starting non-seamless transition to '.concat(100 === e ? 'HQ' : 'LQ', ' (ssrc ').concat(100 === e ? this.hqSSRC : this.lqSSRC, ')')), (this.switchState = 1), 60 === e ? ((this.pendingSSRC = this.lqSSRC), this.requestLQ()) : ((this.pendingSSRC = this.hqSSRC), this.requestHQ())) : 1 === this.switchState ? (S(-1 !== this.pendingSSRC, 'Pending state should have a pendingSSRC'), 60 === e && this.pendingHQ() ? this.requestLQ() : 100 === e && this.pendingLQ() ? this.requestHQ() : ((this.pendingSSRC = -1), (this.switchState = 0))) : S(!1, 'Direct update should not be called when switchState is not Ready or Pending');
    }
    singleCastUpdate() {
        S(1 === this.videoStreams.length, 'singleCastUpdate should only be called when there is exactly one video stream'), S(0 === this.switchState, 'Switch state should not be set for non-simulcast streams'), S(-1 === this.pendingSSRC, 'Pending SSRC should not be set for non-simulcast streams'), this.incomingVideoEnabled ? this.requestDefaultStream() : this.stopDefaultStream();
    }
    pendingHQ() {
        return 1 === this.switchState && this.pendingSSRC === this.hqSSRC;
    }
    pendingLQ() {
        return 1 === this.switchState && this.pendingSSRC === this.lqSSRC;
    }
    receivingHQ() {
        return this.currentSSRC === this.hqSSRC;
    }
    receivingLQ() {
        return this.currentSSRC === this.lqSSRC;
    }
    isReceiving() {
        return -1 !== this.currentSSRC;
    }
    isDowngradeChangeAllowed(e) {
        return !this.throttleDowngradeChanges || void 0 === this.lastDowngradeChangeTime || (e ? Date.now() - this.lastDowngradeChangeTime >= T : Date.now() - this.lastDowngradeChangeTime >= m);
    }
    isOneToOneCall() {
        return 1 === this.otherUsers.size;
    }
    reset() {
        (this.pendingSSRC = -1), (this.currentSSRC = -1), (this.lastDowngradeChangeTime = void 0), (this.switchState = 0);
    }
    request(e, t) {
        void 0 !== this.userId && (this.emit('requested-ssrcs-update', this.userId, this.audioSSRC, t), this.emit('requested-streams-update', e));
    }
    requestDefaultStream() {
        S(1 === this.videoStreams.length, 'requestDefaultStream should only be called when there is exactly one video stream');
        let e = {};
        e[this.videoStreams[0].ssrc] = 100;
        let t = [this.videoStreams[0].ssrc];
        this.request(e, t);
    }
    stopDefaultStream() {
        S(1 === this.videoStreams.length, 'stopDefaultStream should only be called when there is exactly one video stream');
        let e = {};
        e[this.videoStreams[0].ssrc] = 0;
        this.request(e, []);
    }
    requestBoth() {
        S(2 === this.videoStreams.length, 'requestBoth should only be called when there are two video streams'), S(void 0 !== this.videoStreams.find((e) => e.ssrc === this.hqSSRC), 'requestBoth called with invalid hqSSRC'), S(void 0 !== this.videoStreams.find((e) => e.ssrc === this.lqSSRC), 'requestBoth called with invalid lqSSRC');
        let e = {};
        (e[this.lqSSRC] = 60), (e[this.hqSSRC] = 100);
        let t = [this.lqSSRC, this.hqSSRC];
        this.request(e, t),
            setTimeout(() => {
                2 === this.switchState && (this.logger.warn('Seamless transition timeout, forcing switch'), this.reset(), this.update());
            }, 2000);
    }
    requestHQ() {
        S(2 === this.videoStreams.length, 'requestHQ should only be called when there are two video streams'), S(void 0 !== this.videoStreams.find((e) => e.ssrc === this.hqSSRC), 'requestHQ called with invalid hqSSRC'), S(void 0 !== this.videoStreams.find((e) => e.ssrc === this.lqSSRC), 'requestHQ called with invalid lqSSRC');
        let e = {};
        (e[this.lqSSRC] = 0), (e[this.hqSSRC] = 100);
        let t = [this.hqSSRC];
        this.request(e, t);
    }
    requestLQ() {
        S(2 === this.videoStreams.length, 'requestLQ should only be called when there are two video streams'), S(void 0 !== this.videoStreams.find((e) => e.ssrc === this.hqSSRC), 'requestLQ called with invalid hqSSRC'), S(void 0 !== this.videoStreams.find((e) => e.ssrc === this.lqSSRC), 'requestLQ called with invalid lqSSRC');
        let e = {};
        (e[this.lqSSRC] = 60), (e[this.hqSSRC] = 0);
        let t = [this.lqSSRC];
        this.request(e, t);
    }
    stopStreams() {
        S(2 === this.videoStreams.length, 'stopStreams should only be called when there are two video streams'), S(void 0 !== this.videoStreams.find((e) => e.ssrc === this.hqSSRC), 'stopStreams called with invalid hqSSRC'), S(void 0 !== this.videoStreams.find((e) => e.ssrc === this.lqSSRC), 'stopStreams called with invalid lqSSRC'), S(-1 === this.pendingSSRC, 'pendingSSRC should be reset before stopping streams');
        let e = {};
        (e[this.lqSSRC] = 0), (e[this.hqSSRC] = 0);
        this.request(e, []);
    }
    getQuality() {
        if (!this.incomingVideoEnabled) return 0;
        if (this.debugQualityOverride === p.Z.LOW) return 60;
        if (this.debugQualityOverride === p.Z.HIGH || this.isOneToOneCall()) return 100;
        else if (this.downgraded && this.senderSupportsSimulcast()) return 60;
        else return 100;
    }
    constructor(e) {
        super(), I(this, 'supportsSeamless', void 0), I(this, 'logger', void 0), I(this, 'userId', void 0), I(this, 'videoStreams', void 0), I(this, 'audioSSRC', void 0), I(this, 'hqSSRC', void 0), I(this, 'lqSSRC', void 0), I(this, 'switchState', void 0), I(this, 'pendingSSRC', void 0), I(this, 'currentSSRC', void 0), I(this, 'downgraded', void 0), I(this, 'throttleDowngradeChanges', void 0), I(this, 'lastDowngradeChangeTime', void 0), I(this, 'otherUsers', void 0), I(this, 'debugQualityOverride', void 0), I(this, 'incomingVideoEnabled', void 0), (this.supportsSeamless = e), (this.videoStreams = []), (this.audioSSRC = 0), (this.hqSSRC = 0), (this.lqSSRC = 0), (this.switchState = 0), (this.pendingSSRC = -1), (this.currentSSRC = -1), (this.downgraded = !1), (this.throttleDowngradeChanges = !0), (this.lastDowngradeChangeTime = void 0), (this.otherUsers = new Set()), (this.debugQualityOverride = p.Z.NO_OVERRIDE), (this.incomingVideoEnabled = !0), (this.logger = new _.Z('GoLiveQualityManager'));
    }
}
