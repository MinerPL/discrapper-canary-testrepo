n.d(t, {
  Z: function() {
return i;
  }
});

function i(e) {
  let {
userId: t,
nick: n,
guildId: i,
avatar: s,
avatarDecoration: a,
banner: r,
bio: l,
pronouns: o,
colorString: c
  } = e;
  return {
user_id: t,
nick: n,
guild_id: i,
avatar: s,
avatar_decoration_data: null != a ? {
  asset: a.asset,
  sku_id: a.skuId
} : null,
banner: r,
bio: l,
pronouns: o,
color_string: c
  };
}