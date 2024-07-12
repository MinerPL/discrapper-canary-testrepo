n.d(t, {
  Q: function() {
return c;
  },
  t: function() {
return u;
  }
});
var r = n(594190),
  i = n(131951),
  a = n(449224),
  o = n(626135),
  s = n(367907),
  l = n(981631);

function u() {
  let e, t, n, a, o;
  let s = i.Z.getGoLiveSource();
  if (null != s && (e = s.quality.resolution, t = s.quality.frameRate, null != s.desktopSource)) {
var l, u;
n = s.desktopSource.soundshareSession;
let e = null != s.desktopSource.sourcePid ? r.ZP.getGameForPID(s.desktopSource.sourcePid) : null;
a = null !== (l = null == e ? void 0 : e.name) && void 0 !== l ? l : null, o = null !== (u = null == e ? void 0 : e.id) && void 0 !== u ? u : null;
  }
  return {
video_input_resolution: e,
video_input_frame_rate: t,
soundshare_session: n,
share_game_name: a,
share_game_id: o
  };
}

function c(e, t) {
  let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
r = a.Z.getGame();
  switch (t = {
  ...t,
  overlay_game_name: null != r ? r.name : 'Unknown Game',
  overlay_app_id: null != r ? r.id : null
}, e) {
case l.rMx.VOICE_CHANNEL_SELECTED:
case l.rMx.SETTINGS_PANE_VIEWED:
case l.rMx.GUILD_VIEWED:
case l.rMx.CHANNEL_OPENED:
  return (0, s.yw)(e, t, n);
default:
  return o.default.track(e, t, {
    flush: n
  });
  }
}