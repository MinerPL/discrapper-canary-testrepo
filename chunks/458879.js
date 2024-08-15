var a = s(990547),
	n = s(881052),
	l = s(573261),
	o = s(981631);
async function i(e, t, s, i, r) {
	try {
		return (
			await l.Z.post({
				url: o.ANM.GUILDS,
				body: {
					name: e,
					icon: t,
					channels: s.channels,
					system_channel_id: s.system_channel_id,
					roles: s.roles,
					guild_template_code: s.code,
					staff_only: !!r || void 0
				},
				trackedActionData: {
					event: a.NetworkActionNames.GUILD_CREATE,
					properties: {
						template_name: s.id,
						is_community_intent: i
					}
				}
			})
		).body;
	} catch (e) {
		throw new n.Hx(e);
	}
}
t.Z = { createGuildFromTemplate: i };
