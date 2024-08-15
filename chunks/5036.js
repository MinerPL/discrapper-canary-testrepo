var t = a(570140),
	l = a(149071),
	i = a(9156);
n.Z = {
	update(e) {
		t.Z.dispatch({
			type: 'CHANNEL_COLLAPSE',
			channelId: e
		});
	},
	toggleCollapseGuild(e) {
		l.Z.saveUserGuildSettings(e, { hide_muted_channels: !i.ZP.isGuildCollapsed(e) }),
			t.Z.dispatch({
				type: 'GUILD_TOGGLE_COLLAPSE_MUTED',
				guildId: e
			});
	}
};
