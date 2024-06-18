"use strict";
n(47120);
var i = n(570140),
  r = n(147913),
  s = n(314897),
  o = n(967368),
  a = n(592125),
  l = n(944486),
  u = n(631768),
  _ = n(981631);

function d() {
  ! function() {
    let e = l.Z.getVoiceChannelId(),
      t = o.Z.bitrate;
    if (null == e) return;
    let n = a.Z.getChannel(e);
    if (null != n) t !== n.bitrate && i.Z.dispatch({
      type: "SET_CHANNEL_BITRATE",
      bitrate: n.bitrate
    })
  }(), ! function() {
    var e;
    let t = l.Z.getVoiceChannelId(),
      n = u.Z.mode;
    if (null == t) return;
    let r = a.Z.getChannel(t);
    if (null == r) return;
    let s = null !== (e = r.videoQualityMode) && void 0 !== e ? e : _.Ucd.AUTO;
    n !== s && i.Z.dispatch({
      type: "SET_CHANNEL_VIDEO_QUALITY_MODE",
      mode: s
    })
  }()
}

function c(e) {
  let {
    channels: t
  } = e;
  for (let e of t) l.Z.getVoiceChannelId() === e.id && d()
}

function E(e) {
  let {
    voiceStates: t
  } = e;
  t.forEach(e => {
    s.default.getSessionId() === e.sessionId && d()
  })
}
class I extends r.Z {
  constructor(...e) {
    var t, n, i;
    super(...e), t = this, n = "actions", i = {
      CHANNEL_UPDATES: c,
      VOICE_STATE_UPDATES: E
    }, n in t ? Object.defineProperty(t, n, {
      value: i,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }) : t[n] = i
  }
}
t.Z = new I