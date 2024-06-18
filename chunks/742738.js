"use strict";
var i, r, s, o, a = n(348327),
  l = n.n(a),
  u = n(442837),
  _ = n(570140),
  d = n(592125),
  c = n(430824),
  E = n(19780),
  I = n(944486),
  T = n(700785),
  h = n(565799),
  S = n(501655),
  f = n(750154),
  N = n(427679),
  A = n(71275),
  m = n(157925),
  O = n(981631);
let R = null;

function C() {
  let e = function() {
    var e, t, n, i, r, s, o;
    let a = I.Z.getVoiceChannelId();
    if (null == a) return null;
    let l = N.Z.getStageInstanceByChannel(a);
    if (null == l) return null;
    let u = d.Z.getChannel(a);
    if (null == u || !T.oz(O.Plq.VIEW_CHANNEL, u)) return null;
    let _ = c.Z.getGuild(u.getGuildId());
    if (null == _ || !_.hasFeature(O.oNc.DISCOVERABLE)) return null;
    let E = (0, f.Lw)(u, l),
      C = (null == R ? void 0 : null === (e = R.party) || void 0 === e ? void 0 : e.id) === E ? R : null,
      p = h.Z.getMutableParticipants(u.id, S.pV.SPEAKER),
      g = p.filter(e => e.type === S.Ui.STREAM).length,
      L = p.length - g,
      v = h.Z.getParticipantCount(a) - g,
      D = (null == C ? void 0 : null === (t = C.party) || void 0 === t ? void 0 : t.size) != null ? C.party.size[1] : 0;
    return {
      application_id: m.gD,
      name: null !== (r = null !== (i = l.topic) && void 0 !== i ? i : u.topic) && void 0 !== r ? r : u.name,
      type: (0, A.xJ)(u.id) ? O.IIU.WATCHING : O.IIU.LISTENING,
      timestamps: {
        start: null !== (s = null == C ? void 0 : null === (n = C.timestamps) || void 0 === n ? void 0 : n.start) && void 0 !== s ? s : new Date().getTime()
      },
      assets: {
        small_image: null !== (o = _.icon) && void 0 !== o ? o : void 0,
        small_text: _.name
      },
      party: {
        id: E,
        size: [L, Math.max(v, D)]
      }
    }
  }();
  return !l()(e, R) && (R = e, !0)
}
class p extends(o = u.ZP.Store) {
  initialize() {
    this.waitFor(d.Z, I.Z, N.Z, E.Z)
  }
  getActivity() {
    return R
  }
}
s = "StageChannelSelfRichPresenceStore", (r = "displayName") in(i = p) ? Object.defineProperty(i, r, {
  value: s,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : i[r] = s, t.Z = new p(_.Z, {
  CONNECTION_OPEN: C,
  STAGE_INSTANCE_CREATE: C,
  STAGE_INSTANCE_UPDATE: C,
  STAGE_INSTANCE_DELETE: C,
  VOICE_CHANNEL_SELECT: C,
  RTC_CONNECTION_STATE: function(e) {
    var t, n, i;
    let {
      state: r
    } = e, s = null !== (i = null == R ? void 0 : null === (n = R.party) || void 0 === n ? void 0 : null === (t = n.size) || void 0 === t ? void 0 : t[1]) && void 0 !== i ? i : 0;
    return r === O.hes.RTC_CONNECTED && !(s > 0) && C()
  },
  VOICE_STATE_UPDATES: function(e) {
    let {
      voiceStates: t
    } = e;
    if (null == R) return;
    let n = (0, f.rq)(R);
    null != n && null != t.find(e => e.channelId === n.channelId) && C()
  }
})