"use strict";
n(733860), n(47120);
var i = n(106351),
  r = n(212819),
  s = n(933557),
  o = n(592125),
  a = n(984933),
  l = n(156361),
  u = n(483360),
  _ = n(877565),
  d = n(590921),
  c = n(665692),
  E = n(176505),
  I = n(689938);
let T = {
  sentinel: c.zy,
  matches: (e, t, n, i, r) => r.mentions.channel !== d.nS.DENY && !e.isPrivate(),
  queryResults(e, t, n, i, s) {
    let o, l, _ = a.sH;
    return n.charAt(0) === r.xQ.VOICE_CHANNEL && (_ = a.Zb, n = n.substring(1)), i.forNonStringCommandOption ? o = u.ZP.queryApplicationCommandChannelResults({
      query: n,
      channel: e,
      channelTypes: i.allowedChannelTypes
    }) : (o = u.ZP.queryChannelResults({
      query: n,
      channel: e,
      type: _
    }), null != t && (l = u.ZP.queryStaticRouteChannels({
      query: n,
      guild: t
    }), o.channels.unshift(...l))), {
      results: o,
      staticRouteChannels: l
    }
  },
  renderResults(e) {
    let t, n, {
        results: {
          channels: i
        },
        selectedIndex: s,
        query: a,
        options: u,
        onHover: d,
        onClick: E
      } = e,
      T = a.charAt(0) === r.xQ.VOICE_CHANNEL;
    return T ? (t = I.Z.Messages.VOICE_CHANNELS_MATCHING, n = I.Z.Messages.VOICE_CHANNELS, a = a.substring(1)) : u.forNonStringCommandOption ? (t = I.Z.Messages.CHANNELS_MATCHING, n = I.Z.Messages.CHANNELS) : (t = I.Z.Messages.TEXT_CHANNELS_MATCHING, n = I.Z.Messages.TEXT_CHANNELS), (0, _.HI)({
      query: a,
      selectedIndex: s,
      autocompletes: i,
      onHover: d,
      onClick: E,
      titleWithQuery: t,
      titleWithoutQuery: n,
      Component: l.ZP.Channel,
      getProps: e => ({
        channel: e,
        key: e.id,
        category: o.Z.getChannel(e.parent_id)
      }),
      getQuery: e => T ? "".concat(c.zy).concat(r.xQ.VOICE_CHANNEL).concat(e) : "".concat(c.zy).concat(e),
      key: "channels"
    })
  },
  onSelect(e) {
    let {
      results: {
        channels: t
      },
      index: n,
      options: r
    } = e, o = t[n];
    return r.insertText(function(e) {
      switch (e.type) {
        case i.d.PUBLIC_THREAD:
        case i.d.PRIVATE_THREAD:
        case i.d.ANNOUNCEMENT_THREAD:
        case i.d.GUILD_VOICE:
        case i.d.GUILD_STAGE_VOICE:
        case i.d.GUILD_CATEGORY:
          return '#"'.concat((0, s.le)(e.name), '"');
        default:
          let t = a.ZP.getTextChannelNameDisambiguations(e.guild_id)[e.id];
          return "#".concat(null != t ? t.name : e.name)
      }
    }(o), function(e) {
      return E.EC.has(e.id) ? "<id:".concat(e.id, ">") : "<#".concat(e.id, ">")
    }(o)), {
      type: d.z2.CHANNEL
    }
  }
};
t.Z = T