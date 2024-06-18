"use strict";
n(47120);
var i = n(275726),
  r = n(904245),
  s = n(147913),
  o = n(314897),
  a = n(592125),
  l = n(375954),
  u = n(496675),
  _ = n(944486),
  d = n(594174),
  c = n(146085),
  E = n(96052),
  I = n(981631);
class T extends s.Z {
  handleVoiceStateUpdates(e) {
    let {
      voiceStates: t
    } = e;
    t.forEach(e => {
      let {
        channelId: t,
        userId: n,
        suppress: s,
        requestToSpeakTimestamp: T
      } = e;
      if (_.Z.getVoiceChannelId() === t && !!s && null != t && n !== o.default.getId()) {
        if (u.Z.can(c.yP, a.Z.getChannel(t))) {
          if (null != T) {
            let e = d.default.getUser(n);
            null != e && (0, E.U)(t, e, T)
          } else {
            let e = l.Z.getMessages(t).findNewest(e => e.type === i.u.STAGE_RAISE_HAND && e.hasFlag(I.iLy.EPHEMERAL) && e.author.id === n);
            null != e && r.Z.deleteMessage(t, e.id, !0)
          }
        }
      }
    })
  }
  constructor(...e) {
    var t, n, i;
    super(...e), t = this, n = "actions", i = {
      VOICE_STATE_UPDATES: this.handleVoiceStateUpdates
    }, n in t ? Object.defineProperty(t, n, {
      value: i,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }) : t[n] = i
  }
}
t.Z = new T