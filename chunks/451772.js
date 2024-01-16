"use strict";
E.r(_), E.d(_, {
  default: function() {
    return u
  }
}), E("222007");
var t = E("862337"),
  o = E("913144"),
  n = E("990766"),
  r = E("373469"),
  i = E("271938"),
  a = E("42203"),
  I = E("590401"),
  s = E("18494"),
  T = E("205817"),
  S = E("374014"),
  N = E("49111");
let O = new t.Timeout,
  A = new t.Timeout,
  R = null;

function l(e, _) {
  if (s.default.getVoiceChannelId() !== e) return !1;
  let E = a.default.getChannel(e);
  if (null == E || !E.isDM() && !E.isGuildStageVoice()) return !1;
  let t = r.default.getActiveStreamForUser(_, E.getGuildId());
  if (null != t) return !1;
  let o = r.default.getStreamForUser(_, E.getGuildId());
  if (null == o) return !1;
  let i = (0, S.encodeStreamKey)(o);
  return i !== R && (R = i, (0, n.watchStream)(o, {
    noFocus: !0
  }), !0)
}

function L(e, _) {
  let E = null != _ ? _ : I.default.getPreferredRegion();
  null != E && E !== I.default.getRegion(T.default.getHostname(T.default.getActiveStreamKey())) && (0, n.changeStreamRegion)(e, E)
}
var u = {
  init() {
    let e = (e, _) => {
      !T.default.getAllActiveStreamKeys().includes(e) && A.start(_ ? 12e3 : 5e3, () => {
        o.default.dispatch({
          type: "STREAM_TIMED_OUT",
          streamKey: e
        })
      })
    };
    o.default.subscribe("STREAM_WATCH", _ => {
      let {
        streamKey: E
      } = _, {
        channelId: t
      } = (0, S.decodeStreamKey)(E), o = a.default.getChannel(t);
      e(E, null == o ? void 0 : o.isGuildStageVoice())
    }), o.default.subscribe("STREAM_START", _ => {
      let {
        streamType: E,
        guildId: t,
        channelId: o
      } = _, n = a.default.getChannel(o);
      e((0, S.encodeStreamKey)({
        streamType: E,
        guildId: t,
        channelId: o,
        ownerId: i.default.getId()
      }), null == n ? void 0 : n.isGuildStageVoice())
    }), o.default.subscribe("STREAM_CREATE", () => {
      A.stop()
    }), o.default.subscribe("STREAM_UPDATE", () => {
      A.stop()
    }), o.default.subscribe("STREAM_DELETE", () => {
      A.stop()
    }), o.default.subscribe("STREAM_CLOSE", () => {
      O.stop(), A.stop()
    }), o.default.subscribe("VOICE_CHANNEL_SELECT", e => {
      let {
        channelId: _
      } = e;
      if (null == _) return;
      R = null;
      let E = r.default.getAllApplicationStreamsForChannel(_).filter(e => {
        let {
          ownerId: _
        } = e;
        return _ !== i.default.getId()
      })[0];
      null != E && l(_, E.ownerId)
    }), o.default.subscribe("VOICE_STATE_UPDATES", e => {
      let {
        voiceStates: _
      } = e;
      _.forEach(e => {
        let {
          userId: _,
          channelId: E,
          guildId: t,
          selfStream: o
        } = e;
        if (_ !== i.default.getId() && null != E) {
          if (o && l(E, _)) return;
          let e = r.default.getActiveStreamForUser(_, t);
          if (null != e && e.channelId === E && (!o && e.state !== N.ApplicationStreamStates.ENDED && O.start(18e4, () => (0, n.closeStream)((0, S.encodeStreamKey)(e), !1)), o && e.state === N.ApplicationStreamStates.ENDED)) {
            O.stop();
            let e = r.default.getStreamForUser(_, t);
            if (null == e) return;
            (0, n.watchStream)(e)
          }
        }
      })
    }), o.default.subscribe("CALL_UPDATE", e => {
      let {
        channelId: _,
        region: E
      } = e, t = r.default.getCurrentUserActiveStream();
      (null == t ? void 0 : t.channelId) === _ && L((0, S.encodeStreamKey)(t), E)
    }), o.default.subscribe("CHANNEL_UPDATES", e => {
      let {
        channels: _
      } = e, E = r.default.getCurrentUserActiveStream();
      if (null != E)
        for (let e of _) E.channelId === e.id && L((0, S.encodeStreamKey)(E), e.rtcRegion)
    })
  }
}