"use strict";
n.d(t, {
  u: function() {
    return d
  }
});
var i = n(470079),
  r = n(367907),
  s = n(592125),
  o = n(944486),
  a = n(626135),
  l = n(130402),
  u = n(185923),
  _ = n(981631);
let d = e => {
  let {
    emojiId: t,
    currentGuildId: n,
    popoutData: d,
    nonce: c,
    demoMode: E
  } = e, {
    current: I
  } = i.useRef({
    guild_id: n,
    emoji_id: t,
    ...(0, r.v_)(s.Z.getChannel(o.Z.getChannelId(n)))
  });
  return i.useEffect(() => {
    var e;
    (0, l.x)(u.qR.TrackOpenPopoutUsed), !E && a.default.track(_.rMx.OPEN_POPOUT, {
      type: null !== (e = null == d ? void 0 : d.analyticsType) && void 0 !== e ? e : "Standard Emoji Popout",
      nonce: c,
      ...I
    })
  }, []), I
}