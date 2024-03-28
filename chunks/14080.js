"use strict";
a.r(t), a.d(t, {
  useActiveTextChannels: function() {
    return h
  },
  useActiveVoiceChannels: function() {
    return E
  }
}), a("47120");
var l = a("442837"),
  n = a("131704"),
  s = a("592125"),
  i = a("430824"),
  d = a("496675"),
  r = a("9156"),
  u = a("938475"),
  o = a("823379"),
  c = a("580079"),
  f = a("981631"),
  m = a("176505");
let h = e => (0, l.useStateFromStoresArray)([s.default, d.default, c.default, r.default], () => g(e, [s.default, d.default, c.default, r.default])),
  g = function(e) {
    let [t, a, l, i] = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [s.default, d.default, c.default, r.default], u = l.getActiveChannelIds(e), h = null != u ? Array.from(u) : [], g = i.getMutedChannels(e);
    return h.map(e => t.getChannel(e)).filter(o.isNotNullish).filter(e => {
      if ((null == e ? void 0 : e.hasFlag(m.ChannelFlags.ACTIVE_CHANNELS_REMOVED)) || !(0, n.isTextChannel)(e.type) || g.has(e.id) || null != e.parent_id && g.has(e.parent_id) || !a.can(f.Permissions.VIEW_CHANNEL, e)) return !1;
      let l = t.getChannel(e.parent_id);
      return !(e.isThread() && null != l && (null == l ? void 0 : l.hasFlag(m.ChannelFlags.ACTIVE_CHANNELS_REMOVED))) && !0
    })
  },
  E = (e, t) => (0, l.useStateFromStoresArray)([d.default, s.default, u.default, i.default], () => _(e, t, [d.default, s.default, u.default, i.default])),
  _ = function(e, t) {
    var a;
    let [l, n, r, c] = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [d.default, s.default, u.default, i.default], h = r.getVoiceStates(e), g = Object.keys(h).filter(e => h[e].length > 0), E = null === (a = c.getGuild(e)) || void 0 === a ? void 0 : a.afkChannelId;
    return g.filter(e => e !== E && e !== (null == t ? void 0 : t.channel_id)).map(e => n.getChannel(e)).filter(o.isNotNullish).filter(e => !(null == e ? void 0 : e.hasFlag(m.ChannelFlags.ACTIVE_CHANNELS_REMOVED)) && l.can(f.Permissions.VIEW_CHANNEL, e))
  }