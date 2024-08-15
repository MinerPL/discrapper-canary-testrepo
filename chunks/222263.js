n.d(t, {
	Z: function () {
		return i;
	}
});
function i(e) {
	let {
		userId: t,
		nick: n,
		guildId: i,
		avatar: a,
		avatarDecoration: s,
		banner: r,
		bio: l,
		pronouns: o,
		colorString: c
	} = e;
	return {
		user_id: t,
		nick: n,
		guild_id: i,
		avatar: a,
		avatar_decoration_data:
			null != s
				? {
						asset: s.asset,
						sku_id: s.skuId
					}
				: null,
		banner: r,
		bio: l,
		pronouns: o,
		color_string: c
	};
}
