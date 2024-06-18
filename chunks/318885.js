"use strict";
n.d(t, {
  Q: function() {
    return _
  },
  t: function() {
    return u
  }
});
var i = n(594190),
  r = n(131951),
  s = n(449224),
  o = n(626135),
  a = n(367907),
  l = n(981631);

function u() {
  let e, t, n, s, o;
  let a = r.Z.getGoLiveSource();
  if (null != a && (e = a.quality.resolution, t = a.quality.frameRate, null != a.desktopSource)) {
    var l, u;
    n = a.desktopSource.soundshareSession;
    let e = null != a.desktopSource.sourcePid ? i.ZP.getGameForPID(a.desktopSource.sourcePid) : null;
    s = null !== (l = null == e ? void 0 : e.name) && void 0 !== l ? l : null, o = null !== (u = null == e ? void 0 : e.id) && void 0 !== u ? u : null
  }
  return {
    video_input_resolution: e,
    video_input_frame_rate: t,
    soundshare_session: n,
    share_game_name: s,
    share_game_id: o
  }
}

function _(e, t) {
  let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
    i = s.Z.getGame();
  switch (t = {
      ...t,
      overlay_game_name: null != i ? i.name : "Unknown Game",
      overlay_app_id: null != i ? i.id : null
    }, e) {
    case l.rMx.VOICE_CHANNEL_SELECTED:
    case l.rMx.SETTINGS_PANE_VIEWED:
    case l.rMx.GUILD_VIEWED:
    case l.rMx.CHANNEL_OPENED:
      return (0, a.yw)(e, t, n);
    default:
      return o.default.track(e, t, {
        flush: n
      })
  }
}