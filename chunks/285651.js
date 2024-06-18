"use strict";
n.d(t, {
  cO: function() {
    return u
  },
  eb: function() {
    return r
  },
  kl: function() {
    return _
  }
});
var i, r, s = n(700785),
  o = n(74538),
  a = n(378233),
  l = n(981631);
(i = r || (r = {}))[i.SENDABLE = 0] = "SENDABLE", i[i.SENDABLE_WITH_PREMIUM = 1] = "SENDABLE_WITH_PREMIUM", i[i.NONSENDABLE = 2] = "NONSENDABLE", i[i.SENDABLE_WITH_BOOSTED_GUILD = 3] = "SENDABLE_WITH_BOOSTED_GUILD";
let u = (e, t, n) => {
    if (null == t) return 2;
    let i = o.ZP.canUseCustomStickersEverywhere(t);
    if ((0, a.jl)(e)) return 0;
    if ((0, a.J8)(e) && null != n) return e.available ? null != n.guild_id && "" !== n.guild_id && n.guild_id === e.guild_id ? 0 : null == n.guild_id || s.BT({
      permission: l.Plq.USE_EXTERNAL_STICKERS,
      user: t,
      context: n
    }) ? i ? 0 : 1 : 2 : 3;
    return 2
  },
  _ = (e, t, n) => 0 === u(e, t, n)