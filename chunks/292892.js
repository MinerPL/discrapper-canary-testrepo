"use strict";
n.r(t), n.d(t, {
  default: function() {
    return i
  }
}), n("702976");
var i, s = n("201876"),
  r = n("56947"),
  a = n("386045"),
  o = n("584687"),
  l = n("103979"),
  u = n("845579"),
  d = n("373469"),
  c = n("42203"),
  f = n("42887"),
  _ = n("590401"),
  h = n("568307"),
  g = n("568734"),
  m = n("49111");
i = class extends s.default {
  get guildId() {
    return this.getState().guildId
  }
  get channelId() {
    return this.getState().channelId
  }
  computeVoiceFlags() {
    var e, t, n;
    let i = 0,
      s = u.ClipsAllowVoiceRecording.getSetting();
    i = (0, g.setFlag)(i, m.VoiceFlags.ALLOW_VOICE_RECORDING, s);
    let c = a.default.getSettings().clipsEnabled && (0, r.areClipsEnabled)() && ((null === (e = d.default.getCurrentUserActiveStream()) || void 0 === e ? void 0 : e.state) === m.ApplicationStreamStates.ACTIVE || (null === (t = d.default.getCurrentUserActiveStream()) || void 0 === t ? void 0 : t.state) === m.ApplicationStreamStates.PAUSED),
      {
        enableDecoupledGameClipping: f
      } = o.default.getCurrentConfig({
        location: "computeVoiceFlags"
      }),
      {
        enableViewerClipping: _
      } = l.default.getCurrentConfig({
        location: "computeVoiceFlags"
      }, {
        autoTrackExposure: !1
      });
    _ && (i = (0, g.setFlag)(i, m.VoiceFlags.ALLOW_ANY_VIEWER_CLIPS, a.default.getSettings().viewerClipsEnabled));
    let E = a.default.getSettings().decoupledClipsEnabled && (null === (n = h.default.getVisibleGame()) || void 0 === n ? void 0 : n.windowHandle) != null && f;
    return i = (0, g.setFlag)(i, m.VoiceFlags.CLIPS_ENABLED, c || E)
  }
  getInitialState() {
    return {
      guildId: null,
      channelId: null,
      selfMute: f.default.isSelfMute(),
      selfDeaf: f.default.isSelfDeaf(),
      selfVideo: f.default.isVideoEnabled(),
      preferredRegion: null,
      videoStreamParameters: null,
      flags: 0
    }
  }
  getNextState(e) {
    let {
      guildId: t,
      channelId: n
    } = e;
    return {
      guildId: t,
      channelId: n,
      selfMute: f.default.isSelfMute(),
      selfDeaf: f.default.isSelfDeaf(),
      selfVideo: f.default.isVideoEnabled(),
      preferredRegion: _.default.getPreferredRegion(),
      videoStreamParameters: f.default.getVideoStreamParameters(),
      flags: this.computeVoiceFlags()
    }
  }
  shouldCommit() {
    return this.socket.isSessionEstablished()
  }
  didCommit(e) {
    var t;
    let {
      guildId: n,
      channelId: i,
      selfMute: s,
      selfDeaf: r,
      selfVideo: a,
      preferredRegion: o,
      videoStreamParameters: l,
      flags: u = 0
    } = e;
    a && (null === (t = c.default.getChannel(i)) || void 0 === t ? void 0 : t.type) === m.ChannelTypes.GUILD_STAGE_VOICE ? this.socket.voiceStateUpdate({
      guildId: n,
      channelId: i,
      selfMute: s,
      selfDeaf: r,
      selfVideo: a,
      preferredRegion: o,
      videoStreamParameters: l,
      flags: u
    }) : this.socket.voiceStateUpdate({
      guildId: n,
      channelId: i,
      selfMute: s,
      selfDeaf: r,
      selfVideo: a,
      preferredRegion: o,
      flags: u
    })
  }
  constructor(e) {
    super(), this.socket = e
  }
}