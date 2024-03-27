"use strict";
n.r(t), n.d(t, {
  default: function() {
    return u
  },
  getChannelVideoLimit: function() {
    return o
  }
});
var i = n("446674"),
  r = n("305961"),
  a = n("316133"),
  l = n("49111");

function u(e) {
  return (0, i.useStateFromStoresObject)([a.default, r.default], () => {
    let t = a.default.countVoiceStatesForChannel(e.id),
      n = r.default.getGuild(e.getGuildId());
    return null == n ? {
      reachedLimit: !1,
      limit: -1
    } : e.type === l.ChannelTypes.GUILD_STAGE_VOICE ? {
      reachedLimit: t > n.maxStageVideoChannelUsers,
      limit: n.maxStageVideoChannelUsers
    } : {
      reachedLimit: n.maxVideoChannelUsers > 0 && t > n.maxVideoChannelUsers,
      limit: n.maxVideoChannelUsers
    }
  }, [e])
}

function o(e) {
  let t = a.default.countVoiceStatesForChannel(e.id),
    n = r.default.getGuild(e.getGuildId());
  return null == n ? {
    reachedLimit: !1,
    limit: -1
  } : e.type === l.ChannelTypes.GUILD_STAGE_VOICE ? {
    reachedLimit: t > n.maxStageVideoChannelUsers,
    limit: n.maxStageVideoChannelUsers
  } : {
    reachedLimit: n.maxVideoChannelUsers > 0 && t > n.maxVideoChannelUsers,
    limit: n.maxVideoChannelUsers
  }
}