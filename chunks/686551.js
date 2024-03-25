"use strict";
n.r(t), n.d(t, {
  default: function() {
    return h
  }
}), n("222007");
var a = n("37983");
n("884691");
var s = n("77078"),
  l = n("913144"),
  i = n("316272"),
  r = n("271938"),
  o = n("42203"),
  u = n("235660"),
  d = n("808422"),
  c = n("49111");
let f = "STAGE_INVITED_TO_SPEAK_MODAL";
class E extends i.default {
  _initialize() {
    l.default.subscribe("VOICE_STATE_UPDATES", this.handleVoiceStateUpdates)
  }
  _terminate() {
    l.default.unsubscribe("VOICE_STATE_UPDATES", this.handleVoiceStateUpdates)
  }
  constructor(...e) {
    super(...e), this.handleVoiceStateUpdates = e => {
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
      let C = o.default.getChannel(_),
        S = null == C ? void 0 : C.isGuildStageVoice();
      if (!S) return;
      let I = (0, d.getAudienceRequestToSpeakState)(h) === d.RequestToSpeakStates.REQUESTED_TO_SPEAK_AND_AWAITING_USER_ACK;
      if (null != C && I) {
        if ((0, s.hasModalOpen)(f)) return;
        (0, s.openModalLazy)(async () => {
          let {
            default: e
          } = await n.el("730705").then(n.bind(n, "730705"));
          return t => (0, a.jsx)(e, {
            ...t,
            channel: C
          })
        }, {
          modalKey: f,
          onCloseRequest: c.NOOP_NULL
        })
      }
    }
  }
}
var h = new E