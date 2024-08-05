var l = t(266067),
  i = t(652874),
  a = t(731965),
  r = t(981631);

function s(e) {
  let n = (0, l.LX)(null != e ? e : '', {
path: r.Z5c.CHANNEL(':guildId', ':channelId?', ':messageId?')
  });
  if (null != n) {
let {
  guildId: e,
  channelId: t
} = n.params;
return {
  guildId: e === r.ME ? null : e,
  channelId: null != t ? t : null
};
  }
  let t = (0, l.LX)(null != e ? e : '', {
path: r.Z5c.GUILD_BOOSTING_MARKETING(':guildId')
  });
  return null != t ? {
guildId: t.params.guildId,
channelId: null
  } : {
guildId: null,
channelId: null
  };
}
n.Z = (0, i.Z)(e => ({
  path: null,
  basePath: '/',
  guildId: null,
  channelId: null,
  updatePath(n) {
let {
  guildId: t,
  channelId: l
} = s(n);
(0, a.j)(() => e({
  path: n,
  guildId: t,
  channelId: l
}));
  },
  resetPath(n) {
let {
  guildId: t,
  channelId: l
} = s(n);
(0, a.j)(() => e({
  path: null,
  guildId: t,
  channelId: l,
  basePath: n
}));
  }
}));