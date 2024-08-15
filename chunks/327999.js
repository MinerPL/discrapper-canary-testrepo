n.d(t, {
	MS: function () {
		return N;
	},
	Ph: function () {
		return v;
	},
	_2: function () {
		return R;
	},
	bE: function () {
		return A;
	},
	gq: function () {
		return i;
	},
	nf: function () {
		return S;
	}
}),
	n(653041);
var r,
	i,
	a,
	s,
	o,
	l,
	u = n(544891),
	c = n(780384),
	d = n(410030),
	_ = n(726542),
	E = n(122021),
	f = n(981631),
	h = n(689938);
let p = {};
function I(e, t) {
	return e + t;
}
function m(e, t) {
	return t.map((t) => e + t);
}
function T(e) {
	return e.split('-')[1];
}
((s = r || (r = {}))[(s.FAILED = 0)] = 'FAILED'),
	(s[(s.UNFETCHED = 1)] = 'UNFETCHED'),
	(s[(s.PENDING = 2)] = 'PENDING'),
	(s[(s.SUCCEEDED = 3)] = 'SUCCEEDED'),
	(s[(s.FAILED_NO_RETRY = 4)] = 'FAILED_NO_RETRY');
function g(e, t) {
	e.forEach((e) => {
		p[e] = t;
	});
}
function S(e, t) {
	t.forEach((t) =>
		(function (e, t, n) {
			p[e + t] = 3;
		})(e, t, 3)
	);
}
((o = i || (i = {}))[(o.UNSPECIFIED = 0)] = 'UNSPECIFIED'),
	(o[(o.BOT = 1)] = 'BOT'),
	(o[(o.INTEGRATION = 2)] = 'INTEGRATION'),
	(o[(o.DISCOVERY = 3)] = 'DISCOVERY'),
	(o[(o.HUB = 4)] = 'HUB'),
	(o[(o.INVITE = 5)] = 'INVITE'),
	(o[(o.VANITY_URL = 6)] = 'VANITY_URL'),
	(o[(o.MANUAL_MEMBER_VERIFICATION = 7)] = 'MANUAL_MEMBER_VERIFICATION');
let A = function (e) {
	let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : void 0,
		n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
	switch (e) {
		case 1:
			return h.Z.Messages.MEMBER_SAFETY_JOIN_TYPE_BOT;
		case 2:
			return h.Z.Messages.MEMBER_SAFETY_JOIN_TYPE_INTEGRATION;
		case 3:
			return h.Z.Messages.MEMBER_SAFETY_JOIN_TYPE_DISCOVERY;
		case 4:
			return h.Z.Messages.MEMBER_SAFETY_JOIN_TYPE_HUB;
		case 5:
			return h.Z.Messages.MEMBER_SAFETY_JOIN_TYPE_INVITE;
		case 6:
			if (null != t && !n) return h.Z.Messages.MEMBER_SAFETY_JOIN_TYPE_VANITY_URL_LABEL_NAME.format({ vanityUrl: t });
			return h.Z.Messages.MEMBER_SAFETY_JOIN_TYPE_VANITY_URL;
		case 7:
			return h.Z.Messages.MEMBER_SAFETY_JOIN_TYPE_MANUAL_VERIFICATION;
		default:
			return h.Z.Messages.MEMBER_SAFETY_JOIN_TYPE_UNKNOWN;
	}
};
((l = a || (a = {})).DISCORD = 'discord'),
	(l.TWITCH = 'twitch'),
	(l.YOUTUBE = 'youtube'),
	(l.GUILD_SUBSCRIPTION = 'guild_subscription');
let N = (e) => {
		switch (e) {
			case 'twitch':
				return h.Z.Messages.MEMBER_SAFETY_JOIN_TYPE_INTEGRATION_TWITCH;
			case 'youtube':
				return h.Z.Messages.MEMBER_SAFETY_JOIN_TYPE_INTEGRATION_YOUTUBE;
			default:
				return h.Z.Messages.MEMBER_SAFETY_JOIN_TYPE_INTEGRATION;
		}
	},
	v = (e) => {
		let t = _.Z.get((0, E.rR)(e)),
			n = (0, d.ZP)();
		return null != t && ['twitch', 'youtube'].includes(e)
			? "url('".concat((0, c.wj)(n) ? t.icon.darkSVG : t.icon.lightSVG, "')")
			: null;
	};
function O(e) {
	return {
		userId: e.user_id,
		sourceInviteCode: e.source_invite_code,
		joinSourceType: e.join_source_type,
		inviterId: e.inviter_id,
		integrationType: e.integration_type
	};
}
async function R(e, t) {
	let n = m(e, t),
		r = n.filter((e) => p[e] <= 1).map(T);
	if (0 === r.length) return [];
	g(n, 2);
	try {
		let t = await u.tn.post({
			url: f.ANM.MEMBER_SAFETY_SUPPLEMENTAL(e),
			body: { user_ids: r }
		});
		if (!Array.isArray(t.body)) return g(n, 0), [];
		let i = t.body.map(O),
			a = [];
		i.forEach((e) => {
			let { userId: t } = e;
			return a.push(t);
		});
		let s = m(e, a),
			o = r.filter((e) => !a.includes(e)),
			l = m(e, o);
		return g(s, 3), g(l, 0), i;
	} catch (e) {
		g(n, 0);
	}
	return [];
}
