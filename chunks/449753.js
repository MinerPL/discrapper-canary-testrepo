"use strict";
n(47120);
var i = n(846519),
  r = n(570140),
  s = n(872810),
  o = n(199902),
  a = n(314897),
  l = n(592125),
  u = n(936349),
  _ = n(944486),
  d = n(959457),
  c = n(70956),
  E = n(569545),
  I = n(981631);
let T = new i.V7,
  h = new i.V7,
  S = 5 * c.Z.Millis.SECOND,
  f = 12 * c.Z.Millis.SECOND,
  N = null;

function A(e, t) {
  if (_.Z.getVoiceChannelId() !== e) return !1;
  let n = l.Z.getChannel(e);
  if (null == n || !n.isDM() && !n.isGuildStageVoice() || null != o.Z.getActiveStreamForUser(t, n.getGuildId())) return !1;
  let i = o.Z.getStreamForUser(t, n.getGuildId());
  if (null == i) return !1;
  let r = (0, E.V9)(i);
  return r !== N && (N = r, (0, s.rn)(i, {
    noFocus: !0
  }), !0)
}

function m(e, t) {
  let n = null != t ? t : u.Z.getPreferredRegion();
  null != n && n !== u.Z.getRegion(d.Z.getHostname(d.Z.getActiveStreamKey())) && (0, s.dV)(e, n)
}
t.Z = {
  init() {
    let e = (e, t) => {
      !d.Z.getAllActiveStreamKeys().includes(e) && h.start(t ? f : S, () => {
        r.Z.dispatch({
          type: "STREAM_TIMED_OUT",
          streamKey: e
        })
      })
    };
    r.Z.subscribe("STREAM_WATCH", t => {
      let {
        streamKey: n
      } = t, {
        channelId: i
      } = (0, E.my)(n), r = l.Z.getChannel(i);
      e(n, null == r ? void 0 : r.isGuildStageVoice())
    }), r.Z.subscribe("STREAM_START", t => {
      let {
        streamType: n,
        guildId: i,
        channelId: r
      } = t, s = l.Z.getChannel(r);
      e((0, E.V9)({
        streamType: n,
        guildId: i,
        channelId: r,
        ownerId: a.default.getId()
      }), null == s ? void 0 : s.isGuildStageVoice())
    }), r.Z.subscribe("STREAM_CREATE", () => {
      h.stop()
    }), r.Z.subscribe("STREAM_UPDATE", () => {
      h.stop()
    }), r.Z.subscribe("STREAM_DELETE", () => {
      h.stop()
    }), r.Z.subscribe("STREAM_CLOSE", () => {
      T.stop(), h.stop()
    }), r.Z.subscribe("VOICE_CHANNEL_SELECT", e => {
      let {
        channelId: t
      } = e;
      if (null == t) return;
      N = null;
      let n = o.Z.getAllApplicationStreamsForChannel(t).filter(e => {
        let {
          ownerId: t
        } = e;
        return t !== a.default.getId()
      })[0];
      null != n && A(t, n.ownerId)
    }), r.Z.subscribe("VOICE_STATE_UPDATES", e => {
      let {
        voiceStates: t
      } = e;
      t.forEach(e => {
        let {
          userId: t,
          channelId: n,
          guildId: i,
          selfStream: r
        } = e;
        if (t !== a.default.getId() && null != n) {
          if (r && A(n, t)) return;
          let e = o.Z.getActiveStreamForUser(t, i);
          if (null != e && e.channelId === n && (!r && e.state !== I.jm8.ENDED && T.start(18e4, () => (0, s.aP)((0, E.V9)(e), !1)), r && e.state === I.jm8.ENDED)) {
            T.stop();
            let e = o.Z.getStreamForUser(t, i);
            if (null == e) return;
            (0, s.rn)(e)
          }
        }
      })
    }), r.Z.subscribe("CALL_UPDATE", e => {
      let {
        channelId: t,
        region: n
      } = e, i = o.Z.getCurrentUserActiveStream();
      (null == i ? void 0 : i.channelId) === t && m((0, E.V9)(i), n)
    }), r.Z.subscribe("CHANNEL_UPDATES", e => {
      let {
        channels: t
      } = e, n = o.Z.getCurrentUserActiveStream();
      if (null != n)
        for (let e of t) n.channelId === e.id && m((0, E.V9)(n), e.rtcRegion)
    })
  }
}