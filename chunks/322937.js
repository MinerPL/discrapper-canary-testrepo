"use strict";
n.r(t), n.d(t, {
  useCommunicationDisabledCountdownCleanup: function() {
    return i
  }
});
var a = n("470079"),
  l = n("774078"),
  s = n("202107");

function i(e) {
  let {
    communicationDisabledUntil: t,
    userId: n,
    guildId: i
  } = null != e ? e : {}, r = (0, l.default)(null != t ? Date.parse(t) : Date.now()), o = r.seconds, u = (0, a.useRef)(null);
  return (0, a.useEffect)(() => {
    if (null == e || null == i || null == n) {
      clearTimeout(u.current);
      return
    }
    return o <= 0 && null == u.current && (u.current = setTimeout(() => {
      s.default.clearGuildMemberTimeout(i, n)
    }, 1e3)), () => {
      null != u.current && (clearTimeout(u.current), u.current = null)
    }
  }, [i, n, o, t, e]), r
}