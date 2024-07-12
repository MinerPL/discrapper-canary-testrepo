var i = n(266067),
  o = n(652874),
  r = n(981631);

function a(e) {
  let t = (0, i.LX)(null != e ? e : '', {
path: r.Z5c.CHANNEL(':guildId', ':channelId?', ':messageId?')
  });
  if (null != t) {
let {
  guildId: e,
  channelId: n
} = t.params;
return {
  guildId: e === r.ME ? null : e,
  channelId: null != n ? n : null
};
  }
  let n = (0, i.LX)(null != e ? e : '', {
path: r.Z5c.GUILD_BOOSTING_MARKETING(':guildId')
  });
  return null != n ? {
guildId: n.params.guildId,
channelId: null
  } : {
guildId: null,
channelId: null
  };
}
t.Z = (0, o.Z)(e => ({
  path: null,
  basePath: '/',
  guildId: null,
  channelId: null,
  updatePath(t) {
let {
  guildId: n,
  channelId: i
} = a(t);
e({
  path: t,
  guildId: n,
  channelId: i
});
  },
  resetPath(t) {
let {
  guildId: n,
  channelId: i
} = a(t);
e({
  path: null,
  guildId: n,
  channelId: i,
  basePath: t
});
  }
}));