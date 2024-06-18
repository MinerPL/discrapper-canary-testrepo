"use strict";
n.d(t, {
  Z: function() {
    return _
  }
});
var i = n(470079),
  r = n(442837),
  s = n(135869),
  o = n(763296),
  a = n(242291),
  l = n(22382),
  u = n(747071);

function _(e, t) {
  let {
    currentPreviewRef: n
  } = i.useContext(s.Z), _ = (0, r.e7)([o.Z], () => o.Z.isPlayingSound(e.soundId), [e]), d = i.useCallback(i => {
    null != n.current && n.current.pause(), null != t && (0, a.GN)(e, t, i)
  }, [e, n, t]), c = i.useCallback(() => {
    let t = new Audio((0, l.Z)(e.soundId));
    null != n.current && n.current.pause(), n.current = t, t.currentTime = 0, t.volume = (0, u.Z)(e.volume), t.play()
  }, [e, n]);
  return i.useCallback(() => () => {
    var e;
    return null === (e = n.current) || void 0 === e ? void 0 : e.pause()
  }, [n]), {
    playSoundboardSound: d,
    isPlayingSound: _,
    previewSound: c
  }
}