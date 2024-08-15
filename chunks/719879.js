n.d(t, {
	VP: function () {
		return o;
	}
}),
	n(653041);
var s,
	a,
	i = n(626135),
	r = n(946314),
	l = n(981631);
function o(e) {
	let t = r.ZP.getDiscoveryChecklist(e),
		n = [];
	if (!(null == t ? void 0 : t.sufficient)) {
		var s;
		!(null == t ? void 0 : t.safeEnvironment) && n.push('TNS'),
			(!(null == t ? void 0 : t.healthy) || (null == t ? void 0 : t.healthScorePending)) && n.push('HEALTH'),
			!(null == t ? void 0 : t.size) && n.push('MEMBER_COUNT'),
			Object.keys(null !== (s = null == t ? void 0 : t.nsfwProperties) && void 0 !== s ? s : {}).length > 0 &&
				n.push('BAD_WORDS'),
			!(null == t ? void 0 : t.protected) && n.push('2FA');
	}
	i.default.track(l.rMx.GUILD_SETTINGS_DISCOVERY_VIEWED, {
		guild_id: e,
		failed_reasons: n
	});
}
((a = s || (s = {})).SAFE_ENVIRONMENT = 'TNS'),
	(a.HEALTHY = 'HEALTH'),
	(a.SIZE = 'MEMBER_COUNT'),
	(a.NSFW = 'BAD_WORDS'),
	(a.PROTECTED = '2FA');
