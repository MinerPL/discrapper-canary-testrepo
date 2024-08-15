t.d(n, {
	$Y: function () {
		return A;
	},
	JK: function () {
		return C;
	},
	Je: function () {
		return T;
	},
	T9: function () {
		return v;
	},
	UE: function () {
		return h;
	},
	Xx: function () {
		return N;
	},
	mm: function () {
		return m;
	},
	qY: function () {
		return S;
	}
}),
	t(47120);
var r = t(544891),
	i = t(570140),
	o = t(367907),
	l = t(430824),
	u = t(496675),
	a = t(823379),
	s = t(709054),
	c = t(177862),
	d = t(787824),
	_ = t(226192),
	f = t(981631);
function E(e) {
	return {
		type: e.type,
		metadata: (0, d.X)(e.metadata)
	};
}
function I(e) {
	var n, t;
	let r = (0, d.X)(e.triggerMetadata);
	return (
		null != r && delete r.keywordLists,
		{
			id: e.id,
			name: e.name,
			guild_id: e.guildId,
			event_type: e.eventType,
			trigger_type: e.triggerType,
			trigger_metadata: r,
			actions: e.actions.filter(a.lm).map(E),
			enabled: e.enabled,
			creator_id: e.creatorId,
			position: e.position,
			exempt_channels: Array.from(null !== (n = e.exemptChannels) && void 0 !== n ? n : []),
			exempt_roles: Array.from(null !== (t = e.exemptRoles) && void 0 !== t ? t : [])
		}
	);
}
function g(e) {
	return {
		type: e.type,
		metadata: (0, d.C)(e.metadata)
	};
}
function p(e) {
	var n, t, r;
	let i = {
		id: null !== (n = e.id) && void 0 !== n ? n : s.default.fromTimestamp(Date.now()),
		name: e.name,
		guildId: e.guild_id,
		eventType: e.event_type,
		triggerType: e.trigger_type,
		triggerMetadata: (0, d.C)(e.trigger_metadata),
		actions: e.actions.filter(a.lm).map(g),
		enabled: e.enabled,
		creatorId: e.creator_id,
		position: e.position,
		exemptChannels: new Set(null !== (t = e.exempt_channels) && void 0 !== t ? t : []),
		exemptRoles: new Set(null !== (r = e.exempt_roles) && void 0 !== r ? r : [])
	};
	return null != i.triggerMetadata && delete i.triggerMetadata.keywordLists, i;
}
async function S(e) {
	let n = I(e),
		t = await r.tn.post({
			url: f.ANM.GUILD_AUTOMOD_VALIDATE_RULE(e.guildId),
			body: n
		});
	return (0, d.C)(t.body);
}
async function C(e) {
	let n = I(e);
	return (
		delete n.id,
		p(
			(
				await r.tn.post({
					url: f.ANM.GUILD_AUTOMOD_RULES(e.guildId),
					body: n
				})
			).body
		)
	);
}
async function T(e) {
	let n = I(e);
	return p(
		(
			await r.tn.patch({
				url: f.ANM.GUILD_AUTOMOD_RULE(e.guildId, e.id),
				body: n
			})
		).body
	);
}
async function m(e, n) {
	return await r.tn.del({ url: f.ANM.GUILD_AUTOMOD_RULE(n, e) }), !0;
}
async function A(e) {
	let n = await r.tn.get({ url: f.ANM.GUILD_AUTOMOD_RULES(e) });
	return Array.isArray(n.body) ? n.body.map(p) : [];
}
async function N(e, n, t) {
	if (!!u.Z.can(f.Plq.MANAGE_MESSAGES, n))
		await r.tn.post({
			url: f.ANM.GUILD_AUTOMOD_ALERT_ACTION(n.guild_id),
			body: {
				message_id: e,
				channel_id: n.id,
				alert_action_type: t
			}
		});
}
function h(e, n, t) {
	let i = l.Z.getGuild(e);
	if (null != i && !!u.Z.can(f.Plq.MANAGE_GUILD, i))
		(0, _.UV)(() => {
			(0, o.yw)(f.rMx.GUILD_AUTOMOD_FEEDBACK, {
				feedback_type: c.x2.MENTION_RAID_REMOVE_RESTRICTION,
				decision_id: n
			}),
				r.tn.post({ url: f.ANM.GUILD_AUTOMOD_CLEAR_MENTION_RAID(e) }),
				t();
		});
}
function v(e) {
	i.Z.dispatch({
		type: 'AUTO_MODERATION_MENTION_RAID_NOTICE_DISMISS',
		guildId: e
	});
}
