"use strict";
n.d(t, {
  Yy: function() {
    return S
  },
  ZP: function() {
    return m
  },
  ai: function() {
    return i
  }
}), n(47120), n(653041);
var i, r, s = n(47770),
  o = n(46973),
  a = n(966146),
  l = n(902704),
  u = n(846519),
  _ = n(526167),
  d = n(70956),
  c = n(709054),
  E = n(562319),
  I = n(981631),
  T = n(65154);

function h(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
let S = {
    any: 100
  },
  f = 30 * d.Z.Millis.SECOND,
  N = 120 * d.Z.Millis.SECOND,
  A = -1 !== (0, _.hY)();
(r = i || (i = {})).UserSSRCUpdate = "user-ssrc-update", r.Update = "update";
class m extends s.Z {
  getWantsLevel() {
    let e = this.getVideoParticipantCount();
    return this.ladder.getMaxSinkValue(e)
  }
  userVideoDisabled(e) {
    return this.offscreenDisabledUsers[e]
  }
  shouldReceiveFromUser(e) {
    var t, n;
    let i = !((null === (t = this.connection) || void 0 === t ? void 0 : t.getLocalVideoDisabled(e)) || this.userVideoDisabled(e) && (null === (n = this.videoHealthManager) || void 0 === n ? void 0 : n.getCurrentVideoToggleState(e)) !== I.ZUi.AUTO_PROBING);
    return E.Z.isIncomingVideoEnabled() && i
  }
  getAudioSSRCs() {
    return this.audioSsrcs
  }
  setConnection(e) {
    var t, n, i, r, s, a;
    let l = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
    null === (t = this.connection) || void 0 === t || t.removeListener(o.Sh.LocalVideoDisabled, this.handleLocalVideoDisabled), null === (n = this.connection) || void 0 === n || n.removeListener(o.Sh.LocalMute, this.handleLocalMute), null === (i = this.connection) || void 0 === i || i.removeListener(o.Sh.ActiveSinksChange, this.delayedUpdate), this.connection = e, null === (r = this.connection) || void 0 === r || r.addListener(o.Sh.LocalVideoDisabled, this.handleLocalVideoDisabled), null === (s = this.connection) || void 0 === s || s.addListener(o.Sh.LocalMute, this.handleLocalMute), null === (a = this.connection) || void 0 === a || a.addListener(o.Sh.ActiveSinksChange, this.delayedUpdate), l && this.update()
  }
  setAudioSSRC(e, t) {
    return t > 0 ? this.audioSsrcs[e] = t : delete this.audioSsrcs[e], this.update()
  }
  setVideoSSRCs(e, t) {
    let n = t.filter(e => {
      var t;
      return e.active && (null !== (t = e.ssrc) && void 0 !== t ? t : 0) > 0
    }).map(e => {
      var t;
      return {
        quality: null !== (t = e.quality) && void 0 !== t ? t : 100,
        ssrc: e.ssrc
      }
    });
    if (n.length > 0) this.videoSsrcs[e] = n, this.participants.add(e);
    else {
      if (void 0 !== this.videoSsrcs[e])
        for (let {
            ssrc: t
          }
          of this.videoSsrcs[e]) delete this.framesReceived[t];
      delete this.remoteVideoSsrcs[e], delete this.videoSsrcs[e], this.participants.delete(e), this.emit("user-ssrc-update", e, this.audioSsrcs[e], [])
    }
    return this.update(Array.from(this.participants))
  }
  setFirstFrameReceived(e) {
    return this.framesReceived[e] = !0, this.update()
  }
  setStreamId(e, t) {
    return null != t ? this.streamIds[e] = t : delete this.streamIds[e], this.update()
  }
  destroyUser(e) {
    return delete this.audioSsrcs[e], delete this.videoSsrcs[e], this.participants.delete(e), delete this.streamIds[e], this.update(Array.from(this.participants))
  }
  reset() {
    this.setConnection(null, !1), this.audioSsrcs = {}, this.videoSsrcs = {}, this.remoteVideoSsrcs = {}, this.framesReceived = {}, this.streamIds = {}, this.latestWants = S
  }
  setSelectedParticipant(e) {
    if (e === this.selectedParticipantId) return this.latestWants;
    let t = [];
    if (null != this.selectedParticipantId && this.selectedParticipantId !== this.userId && t.push(this.selectedParticipantId), null != e) {
      if (this.participants.has(e)) this.selectedParticipantId = e, t.push(e);
      else {
        if (this.userId !== e) return console.warn("Participant not found: ".concat(e)), this.latestWants;
        this.selectedParticipantId = e
      }
    } else this.selectedParticipantId = null;
    return this.update(t.filter(e => {
      var t;
      return (null === (t = this.videoSsrcs[e]) || void 0 === t ? void 0 : t.length) > 1
    }))
  }
  setPipOpen(e) {
    return (this.pipOpen = e, null != this.selectedParticipantId) ? this.update([this.selectedParticipantId]) : this.latestWants
  }
  setAppBackgrounded(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    for (let [i, r] of c.default.entries(this.streamIds))
      if (this.offscreenDisabledUsers[i] = e, null != r) {
        var n;
        let i = !e || t;
        null === (n = this.connection) || void 0 === n || n.setHasActiveVideoOutputSink(r, i)
      } return this.update()
  }
  getOffscreenDisabledUsers() {
    return this.offscreenDisabledUsers
  }
  setSimulcastDebugOverride(e, t) {
    this.simulcastDebugOverrides.set(e, t), this.update()
  }
  getVideoParticipantCount() {
    let e = 0;
    for (let n of Object.keys(this.videoSsrcs)) {
      var t;
      !(null === (t = this.connection) || void 0 === t ? void 0 : t.getLocalVideoDisabled(n)) && e++
    }
    return e
  }
  getOffscreenTimeoutMs() {
    return this.isStageChannel ? N : f
  }
  getSimulcastOverrideQuality(e) {
    return this.simulcastDebugOverrides.has(e) ? this.simulcastDebugOverrides.get(e) : T.Z.NO_OVERRIDE
  }
  constructor(e, t, n, i = new a.x) {
    var r;
    super(), r = this, h(this, "userId", void 0), h(this, "isStageChannel", void 0), h(this, "supportsSeamless", void 0), h(this, "ladder", void 0), h(this, "connection", void 0), h(this, "audioSsrcs", void 0), h(this, "videoSsrcs", void 0), h(this, "remoteVideoSsrcs", void 0), h(this, "framesReceived", void 0), h(this, "streamIds", void 0), h(this, "offscreenUsers", void 0), h(this, "offscreenDisabledUsers", void 0), h(this, "latestWants", void 0), h(this, "participants", void 0), h(this, "selectedParticipantId", void 0), h(this, "delayedCall", void 0), h(this, "offscreenTimeout", void 0), h(this, "pipOpen", void 0), h(this, "simulcastDebugOverrides", void 0), h(this, "videoHealthManager", void 0), h(this, "delayedUpdate", void 0), h(this, "addLru", void 0), h(this, "updateOffscreenUsers", void 0), h(this, "handleLocalVideoDisabled", void 0), h(this, "handleLocalMute", void 0), h(this, "update", void 0), this.userId = e, this.isStageChannel = t, this.supportsSeamless = n, this.ladder = i, this.connection = null, this.audioSsrcs = {}, this.videoSsrcs = {}, this.remoteVideoSsrcs = {}, this.framesReceived = {}, this.streamIds = {}, this.offscreenUsers = {}, this.offscreenDisabledUsers = {}, this.latestWants = S, this.participants = new Set, this.selectedParticipantId = null, this.pipOpen = !1, this.simulcastDebugOverrides = new Map, this.videoHealthManager = null, this.delayedUpdate = () => {
      this.delayedCall.delay()
    }, this.addLru = (e, t, n) => {
      if (n.push(e), n.length <= 3) return;
      let i = -1,
        r = -1;
      for (let e = 0; e < n.length; e++) {
        let s = n[e],
          o = t - this.offscreenUsers[s];
        o > i && (i = o, r = e)
      }
      this.offscreenDisabledUsers[n[r]] = !0, n.splice(r, 1)
    }, this.updateOffscreenUsers = () => {
      var e, t;
      if (!(null === (e = this.connection) || void 0 === e ? void 0 : e.getActiveOutputSinkTrackingEnabled())) return;
      let n = Date.now(),
        i = [];
      for (let [e, r] of c.default.entries(this.streamIds)) {
        if (null != r)(null === (t = this.connection) || void 0 === t ? void 0 : t.getHasActiveVideoOutputSink(r)) ? (delete this.offscreenUsers[e], delete this.offscreenDisabledUsers[e]) : null == this.offscreenUsers[e] ? (this.offscreenUsers[e] = n, this.addLru(e, n, i)) : !this.offscreenDisabledUsers[e] && (n - this.offscreenUsers[e] >= this.getOffscreenTimeoutMs() ? this.offscreenDisabledUsers[e] = !0 : this.addLru(e, n, i))
      }
      if (i.length > 0) {
        let e = n + this.getOffscreenTimeoutMs();
        for (let t of i) e = Math.min(e, this.offscreenUsers[t] + this.getOffscreenTimeoutMs());
        this.offscreenTimeout.start(e - n, this.update)
      } else this.offscreenTimeout.stop()
    }, this.handleLocalVideoDisabled = (e, t) => {
      this.update()
    }, this.handleLocalMute = (e, t) => {
      this.update()
    }, this.update = function() {
      let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
        t = r.getWantsLevel(),
        n = {
          any: t
        };
      for (let [i, s] of(r.updateOffscreenUsers(), c.default.entries(r.videoSsrcs))) {
        let o = [],
          a = !1,
          u = s[0].ssrc;
        if (r.shouldReceiveFromUser(i)) {
          let e = i === r.selectedParticipantId && 100 !== t && !r.pipOpen;
          if (s.length > 1) {
            for (let t of s) 100 === t.quality ? e ? (n[t.ssrc] = 100, u = t.ssrc) : n[t.ssrc] = 0 : e ? n[t.ssrc] = 0 : u = t.ssrc;
            if (r.supportsSeamless && !r.framesReceived[u])
              for (let e of (a = !0, o = [u], s)) e.ssrc !== u && r.framesReceived[e.ssrc] && (100 === e.quality ? n[e.ssrc] = 100 : n[e.ssrc] = t, o.push(e.ssrc))
          } else e && (n[u] = 100)
        } else
          for (let e of s) n[e.ssrc] = 0;
        let _ = r.getSimulcastOverrideQuality(i);
        for (let e of (_ === T.Z.HIGH ? n[u] = 100 : _ === T.Z.LOW && (n[u] = 50), (!r.supportsSeamless || !a) && (o = [u]), s)) !o.includes(e.ssrc) && delete r.framesReceived[e.ssrc];
        (e.includes(i) || void 0 !== r.remoteVideoSsrcs[i] && !(0, l.Z)(r.remoteVideoSsrcs[i], o)) && (r.remoteVideoSsrcs[i] = [...o], r.emit("user-ssrc-update", i, r.audioSsrcs[i], o))
      }
      for (let [e, t] of Object.entries(r.audioSsrcs)) {
        var i;
        (null === (i = r.connection) || void 0 === i ? void 0 : i.getLocalMute(e)) && (n[t] = 0)
      }
      return A ? r.latestWants : (null != r.connection && !(0, l.Z)(r.latestWants, n) && (r.latestWants = n, r.emit("update", n)), n)
    }, this.delayedCall = new u.sW(100, this.update), this.offscreenTimeout = new u.V7, E.Z.subscribe(() => {
      this.update()
    })
  }
}