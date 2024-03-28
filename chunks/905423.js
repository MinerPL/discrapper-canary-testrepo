"use strict";
n.r(t);
var i = n("266067"),
  r = n("652874"),
  a = n("981631");

function l(e) {
  let t = (0, i.matchPath)(null != e ? e : "", {
    path: a.Routes.CHANNEL(":guildId", ":channelId?", ":messageId?")
  });
  if (null != t) {
    let {
      guildId: e,
      channelId: n
    } = t.params;
    return {
      guildId: e === a.ME ? null : e,
      channelId: null != n ? n : null
    }
  }
  let n = (0, i.matchPath)(null != e ? e : "", {
    path: a.Routes.GUILD_BOOSTING_MARKETING(":guildId")
  });
  return null != n ? {
    guildId: n.params.guildId,
    channelId: null
  } : {
    guildId: null,
    channelId: null
  }
}
t.default = (0, r.default)(e => ({
  path: null,
  basePath: "/",
  guildId: null,
  channelId: null,
  updatePath(t) {
    let {
      guildId: n,
      channelId: i
    } = l(t);
    e({
      path: t,
      guildId: n,
      channelId: i
    })
  },
  resetPath(t) {
    let {
      guildId: n,
      channelId: i
    } = l(t);
    e({
      path: null,
      guildId: n,
      channelId: i,
      basePath: t
    })
  }
}))