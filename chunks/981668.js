"use strict";
n(47120);
var i = n(147913),
  r = n(367907),
  s = n(728345),
  o = n(812206),
  a = n(574176),
  l = n(314897),
  u = n(592125),
  _ = n(944486),
  d = n(885110),
  c = n(649739),
  E = n(981631);
async function I(e) {
  await s.Z.fetchApplications(e, !1)
}
async function T(e) {
  if (null == e) return;
  let t = u.Z.getChannel(e),
    {
      enableHangStatus: n
    } = a.n.getCurrentConfig({
      location: "GameActivityManager"
    }, {
      autoTrackExposure: !1
    });
  if (null == t || !((0, c.Ku)("running_games_change", !1) || n)) return;
  let i = d.Z.getActivities();
  if (0 === i.length) return;
  let s = [...i].filter(e => e.type === E.IIU.PLAYING && e.application_id).map(e => e.application_id);
  await I([...s]);
  let _ = o.Z.getApplication(s[0]);
  null != _ && r.ZP.trackWithMetadata(E.rMx.VOICE_CHANNEL_GAME_ACTIVITY_INDICATOR_SET, {
    channel_id: e,
    guild_id: t.guild_id,
    game_name: _.name,
    user_id: l.default.getId()
  })
}
class h extends i.Z {
  handleRunningGamesChange() {
    T(_.Z.getVoiceChannelId())
  }
  handleVoiceChannelSelect(e) {
    let {
      channelId: t
    } = e;
    T(t)
  }
  constructor(...e) {
    var t, n, i;
    super(...e), t = this, n = "actions", i = {
      RUNNING_GAMES_CHANGE: this.handleRunningGamesChange,
      VOICE_CHANNEL_SELECT: this.handleVoiceChannelSelect
    }, n in t ? Object.defineProperty(t, n, {
      value: i,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }) : t[n] = i
  }
}
t.Z = new h