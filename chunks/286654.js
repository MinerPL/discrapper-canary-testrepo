"use strict";
n.d(t, {
  z: function() {
    return u
  }
});
var i = n(735250),
  r = n(470079),
  s = n(239091),
  o = n(430824),
  a = n(594174),
  l = n(74538);

function u(e, t) {
  return r.useCallback(r => {
    r.stopPropagation();
    let u = o.Z.getGuild(e.guildId),
      _ = a.default.getCurrentUser();
    (null != u || l.ZP.canUseCustomCallSounds(_)) && ! function(e, t, r, o) {
      let u = a.default.getCurrentUser();
      (null != t || l.ZP.canUseCustomCallSounds(u)) && (0, s.jW)(e, async () => {
        let {
          default: e
        } = await n.e("2356").then(n.bind(n, 876308));
        return n => (0, i.jsx)(e, {
          ...n,
          soundGuild: t,
          activeCallGuildId: o,
          sound: r
        })
      })
    }(r, u, e, t)
  }, [e, t])
}