"use strict";
n.r(t), n("47120");
var a = n("735250");
n("470079");
var s = n("481060"),
  l = n("570140"),
  i = n("317770"),
  r = n("314897"),
  o = n("592125"),
  u = n("797258"),
  d = n("590415"),
  c = n("981631");
let f = "STAGE_INVITED_TO_SPEAK_MODAL";
class E extends i.default {
  _initialize() {
    l.default.subscribe("VOICE_STATE_UPDATES", this.handleVoiceStateUpdates)
  }
  _terminate() {
    l.default.unsubscribe("VOICE_STATE_UPDATES", this.handleVoiceStateUpdates)
  }
  constructor(...e) {
    var t, l, i;
    super(...e), t = this, l = "handleVoiceStateUpdates", i = e => {
      var t;
      let {
        voiceStates: l
      } = e, i = r.default.getId(), E = null === (t = u.default.getSession()) || void 0 === t ? void 0 : t.sessionId, h = l.find(e => e.userId === i && e.sessionId === E);
      if (null == h) return;
      let _ = h.channelId;
      if (null == _) {
        (0, s.hasModalOpen)(f) && (0, s.closeModal)(f);
        return
      }
      let C = o.default.getChannel(_);
      if (!(null == C ? void 0 : C.isGuildStageVoice())) return;
      let m = (0, d.getAudienceRequestToSpeakState)(h) === d.RequestToSpeakStates.REQUESTED_TO_SPEAK_AND_AWAITING_USER_ACK;
      if (null != C && m) {
        if ((0, s.hasModalOpen)(f)) return;
        (0, s.openModalLazy)(async () => {
          let {
            default: e
          } = await Promise.all([n.e("99387"), n.e("13878")]).then(n.bind(n, "113140"));
          return t => (0, a.jsx)(e, {
            ...t,
            channel: C
          })
        }, {
          modalKey: f,
          onCloseRequest: c.NOOP_NULL
        })
      }
    }, l in t ? Object.defineProperty(t, l, {
      value: i,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }) : t[l] = i
  }
}
t.default = new E