"use strict";
n(47120);
var i = n(512722),
  r = n.n(i),
  s = n(846519),
  o = n(668781),
  a = n(846027),
  l = n(147913),
  u = n(710845),
  _ = n(314897),
  d = n(131951),
  c = n(19780),
  E = n(797258),
  I = n(979651),
  T = n(823379),
  h = n(254238),
  S = n(607214),
  f = n(258609),
  N = n(565473),
  A = n(444092),
  m = n(927923),
  O = n(65154),
  R = n(689938);

function C(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
let p = new u.Z("GameConsoleManager");
async function g(e) {
  let t = c.Z.getChannelId();
  r()(null == t, "Syncing to remote while in voice!"), e.selfMute !== d.Z.isSelfMute() && await a.Z.toggleSelfMute({
    syncRemote: !1
  }), e.selfDeaf !== d.Z.isSelfDeaf() && a.Z.toggleSelfDeaf({
    syncRemote: !1
  })
}
class L extends l.Z {
  constructor(...e) {
    super(...e), C(this, "rollbackCommandTimeout", new s.V7), C(this, "awaitRemoteTimeout", new s.V7), C(this, "actions", {
      WAIT_FOR_REMOTE_SESSION: () => this.handleWaitForRemoteSession(),
      POST_CONNECTION_OPEN: () => this.handleSessionsChanged(),
      SESSIONS_REPLACE: () => this.handleSessionsChanged(),
      AUDIO_TOGGLE_SELF_DEAF: e => this.handleAudioStateToggle(e),
      AUDIO_TOGGLE_SELF_MUTE: e => this.handleAudioStateToggle(e),
      VOICE_STATE_UPDATES: e => this.handleVoiceStateUpdates(e),
      CONSOLE_COMMAND_UPDATE: e => this.handleConsoleCommandUpdate(e),
      PASSIVE_UPDATE_V2: e => this.handleVoiceStateUpdates(e),
      REMOTE_SESSION_DISCONNECT: () => this.handleRemoteSessionDisconnect()
    }), C(this, "maybeConnect", e => {
      let t = function(e) {
        let t = f.Z.getAwaitingRemoteSessionInfo();
        return e.find(e => {
          let n = m.al.has(e.clientInfo.os),
            i = null != I.Z.getVoiceStateForSession(_.default.getId(), e.sessionId),
            r = null == t || (0, N.y)(t.type) === e.clientInfo.os;
          return n && r && i
        })
      }(e);
      if (null == t) return null;
      this.awaitRemoteTimeout.stop(), (0, h.ef)(t.sessionId);
      let n = I.Z.getVoiceStateForSession(_.default.getId(), t.sessionId);
      null != n && g(n)
    }), C(this, "handleAudioStateToggle", e => {
      let {
        syncRemote: t,
        context: n
      } = e;
      if (!t || n !== O.Yn.DEFAULT) return;
      let i = d.Z.isSelfDeaf(),
        r = d.Z.isSelfMute(),
        s = _.default.getId(),
        o = f.Z.getRemoteSessionId();
      if (null == o) return;
      let a = I.Z.getVoiceStateForSession(s, o);
      if (null != a)(a.selfDeaf !== i || a.selfMute !== r) && ((0, h.Vv)(o, {
        selfDeaf: i,
        selfMute: r
      }), this.rollbackCommandTimeout.start(3e3, () => {
        g(a)
      }))
    }), C(this, "handleVoiceStateUpdates", e => {
      let t = e.voiceStates,
        n = f.Z.getRemoteSessionId();
      if (null == n) {
        let e = t.map(e => {
          let {
            sessionId: t
          } = e;
          return null != t ? E.Z.getSessionById(t) : null
        }).filter(T.lm);
        return this.maybeConnect(e)
      }
      let i = t.find(e => {
        let {
          sessionId: t
        } = e;
        return t === n
      });
      null != i && (this.rollbackCommandTimeout.stop(), g(i))
    }), C(this, "handleSessionsChanged", () => {
      let e = f.Z.getRemoteSessionId();
      null != e && null == E.Z.getSessionById(e) && (0, h.s6)(), null == e && this.maybeConnect(Object.values(E.Z.getSessions()))
    }), C(this, "handleWaitForRemoteSession", () => {
      this.awaitRemoteTimeout.start(6e4, () => {
        (0, h.s6)(), o.Z.show({
          title: R.Z.Messages.GAME_CONSOLE_TRANSFER_TIMEOUT_TITLE,
          body: R.Z.Messages.GAME_CONSOLE_TRANSFER_TIMEOUT_BODY
        })
      })
    }), C(this, "handleConsoleCommandUpdate", e => {
      var t;
      let {
        id: n,
        result: i,
        error: r
      } = e;
      if ("failed" !== i && "n/a" !== i || null == r) return;
      p.info("Console command Error result:", i, r);
      let s = f.Z.getAwaitingRemoteSessionInfo();
      if ((null == s ? void 0 : s.commandId) !== n) return;
      let o = f.Z.getDevice(s.type, null !== (t = s.deviceId) && void 0 !== t ? t : ""),
        a = (0, A.Z)(null != o ? o : {
          id: "id",
          platform: R.Z.Messages.STATUS_UNKNOWN,
          name: R.Z.Messages.STATUS_UNKNOWN
        }, i, r);
      null != a && S.Z.showSelfDismissableAlert({
        title: a.title,
        body: a.body,
        errorCodeMessage: a.errorCodeMessage,
        reconnectPlatformType: a.isAccountLinkError ? s.type : void 0
      }), m.e8.has(r.code) && this.awaitRemoteTimeout.isStarted() ? this.awaitRemoteTimeout.start(18e4, () => (0, h.s6)(), !0) : "failed" === i && (0, h.s6)()
    }), C(this, "handleRemoteSessionDisconnect", () => {
      this.awaitRemoteTimeout.stop()
    })
  }
}
t.Z = new L