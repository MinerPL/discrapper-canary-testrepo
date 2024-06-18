"use strict";
n.d(t, {
  O: function() {
    return u
  },
  a: function() {
    return _
  }
}), n(47120);
var i = n(544891),
  r = n(570140),
  s = n(19780),
  o = n(823379),
  a = n(41776),
  l = n(981631);
async function u(e) {
  let t = a.Z.lurkingGuildIds().filter(t => !e.includes(t));
  0 !== t.length && (r.Z.dispatch({
    type: "GUILD_STOP_LURKING",
    ignoredGuildIds: e
  }), await Promise.all(t.map(async e => {
    let t = a.Z.getLurkingSource();
    try {
      await i.tn.del({
        url: l.ANM.GUILD_LEAVE(e),
        body: {
          lurking: !0
        },
        oldFormErrors: !0
      })
    } catch (n) {
      r.Z.dispatch({
        type: "GUILD_STOP_LURKING_FAILURE",
        lurkingGuildId: e,
        lurkingSource: t
      })
    }
  })))
}
async function _() {
  let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
    t = a.Z.lurkingGuildIds();
  if (0 === t.length || !(null == e || !t.includes(e))) return;
  let n = [e, s.Z.getGuildId()].filter(o.lm);
  await u(n)
}