n(47120);
var r = n(147913),
	i = n(82085),
	a = n(703656),
	s = n(981631);
function o(e) {
	var t, n, r;
	let { guild: o } = e.invite;
	if (null != o && (null == o ? void 0 : null === (t = o.features) || void 0 === t ? void 0 : t.includes(s.oNc.HUB))) {
		i.Z.onOpenHubInvite(e.invite);
		return;
	}
	null != o &&
		(null == o
			? void 0
			: null === (n = o.features) || void 0 === n
				? void 0
				: n.includes(s.oNc.MEMBER_VERIFICATION_GATE_ENABLED)) &&
		!(null == o ? void 0 : null === (r = o.features) || void 0 === r ? void 0 : r.includes(s.oNc.PREVIEW_ENABLED)) &&
		(0, a.uL)(s.Z5c.GUILD_MEMBER_VERIFICATION(o.id, e.invite.code));
}
class l extends r.Z {
	constructor(...e) {
		var t, n, r;
		super(...e),
			(t = this),
			(n = 'actions'),
			(r = { INVITE_ACCEPT_SUCCESS: o }),
			n in t
				? Object.defineProperty(t, n, {
						value: r,
						enumerable: !0,
						configurable: !0,
						writable: !0
					})
				: (t[n] = r);
	}
}
t.Z = new l();
