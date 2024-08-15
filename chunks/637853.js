n.d(t, {
	Ee: function () {
		return S;
	},
	L6: function () {
		return b;
	},
	V7: function () {
		return N;
	},
	VF: function () {
		return L;
	},
	b$: function () {
		return I;
	},
	d9: function () {
		return y;
	},
	dF: function () {
		return A;
	},
	dX: function () {
		return M;
	},
	iF: function () {
		return v;
	},
	kl: function () {
		return R;
	},
	mn: function () {
		return O;
	},
	p3: function () {
		return T;
	},
	wC: function () {
		return m;
	}
}),
	n(789020),
	n(47120),
	n(724458),
	n(653041),
	n(536091);
var r = n(442837),
	i = n(902704),
	a = n(447003),
	s = n(592125),
	o = n(984933),
	l = n(430824),
	u = n(496675),
	c = n(630388),
	d = n(823379),
	_ = n(700785),
	E = n(977258),
	f = n(981631),
	h = n(372897);
let p = new Date(1682488800000);
function I(e) {
	return (0, r.e7)([l.Z, u.Z], () => {
		let t = l.Z.getGuild(e),
			n = !!(null == t ? void 0 : t.hasFeature(f.oNc.COMMUNITY)),
			r = u.Z.can(f.Plq.MANAGE_GUILD, t),
			i = u.Z.can(f.Plq.MANAGE_ROLES, t);
		return n && r && i;
	});
}
function m(e) {
	let t = l.Z.getGuild(e),
		n = !!(null == t ? void 0 : t.hasFeature(f.oNc.COMMUNITY)),
		r = u.Z.can(f.Plq.MANAGE_GUILD, t),
		i = u.Z.can(f.Plq.MANAGE_ROLES, t);
	return n && r && i;
}
function T(e, t) {
	var n;
	if (null == e || !e.hasFeature(f.oNc.GUILD_ONBOARDING) || null == t || null == t.joinedAt || new Date(t.joinedAt) < p)
		return !1;
	let r = null !== (n = t.flags) && void 0 !== n ? n : 0;
	return c.yE(r, h.q.STARTED_ONBOARDING) && !c.yE(r, h.q.COMPLETED_ONBOARDING);
}
function g(e, t, n) {
	let r = new Set();
	e.forEach((e) => {
		e.options.forEach((e) => {
			var t;
			null == e ||
				null === (t = e.channelIds) ||
				void 0 === t ||
				t.forEach((e) => {
					r.add(e);
				});
		});
	}),
		t.forEach((e) => r.add(e));
	let i = n.filter((e) => !e.isCategory() && !e.isThread() && !(0, a.Z)(e)),
		s = i.filter((e) => r.has(e.id) || (null != e.parent_id && r.has(e.parent_id)));
	return [s, i.filter((e) => !r.has(e.id) && !(null != e.parent_id && r.has(e.parent_id)))];
}
function S(e, t, n) {
	return g(
		t,
		n,
		o.ZP.getChannels(e)[o.sH].map((e) => {
			let { channel: t } = e;
			return t;
		})
	);
}
function A(e, t, n) {
	return g(
		t,
		n,
		(0, r.e7)([o.ZP], () => o.ZP.getChannels(e))[o.sH].map((e) => {
			let { channel: t } = e;
			return t;
		})
	);
}
function N(e) {
	return v(s.Z.getChannel(e));
}
function v(e) {
	return (
		!!(null != e && (0, E.s)(e.guild_id, e.id)) &&
		(e.isForumChannel() ? _.Uu(f.Plq.SEND_MESSAGES_IN_THREADS, e) : _.Uu(f.Plq.SEND_MESSAGES, e))
	);
}
function O(e) {
	return (0, r.e7)([s.Z], () => {
		let t = s.Z.getChannel(e);
		return (0, d.lm)(t) && v(t);
	});
}
function R(e, t, n) {
	let r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : () => !0,
		i = C(e, t, (e) => e.id, r);
	return (
		n.forEach((t) => {
			var n, a;
			if (!t.required) return;
			let s = C(
					e,
					null !== (a = null === (n = t.options[0]) || void 0 === n ? void 0 : n.channelIds) && void 0 !== a ? a : [],
					(e) => e.id
				),
				o = t.options.reduce((t, n) => {
					if (null == n.channelIds) return [];
					let a = C(
						e,
						n.channelIds,
						(e) => e.id,
						(e) => r(e) && !i.includes(e)
					);
					return a.length < t.length ? a : t;
				}, s);
			i.push(...o);
		}),
		i
	);
}
function C(e, t) {
	let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : (e) => e,
		r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : () => !0,
		i = o.ZP.getChannels(e)[o.sH],
		a = [];
	for (let { channel: e } of i)
		if (
			(0, E.s)(e.guild_id, e.id) &&
			((t.includes(e.id) && !e.isCategory()) || (!e.isThread() && null != e.parent_id && t.includes(e.parent_id)))
		) {
			let t = n(e);
			r(t) && a.push(t);
		}
	return a;
}
function y(e, t) {
	var n, r;
	let i = C(e, t),
		a = o.ZP.getChannels(e)[o.sH],
		s = {};
	for (let e of a) s[e.channel.id] = e;
	return [
		((n = i.map((e) => {
			let { id: t } = e;
			return t;
		})),
		(r = s),
		n.filter((e) => {
			var t;
			return v(null === (t = r[e]) || void 0 === t ? void 0 : t.channel);
		})),
		i
	];
}
function D(e, t) {
	return e[0].length === t[0].length && e[1].length === t[1].length && (0, i.Z)(e[0], t[0]) && (0, i.Z)(e[1], t[1]);
}
function L(e, t) {
	return (0, r.e7)(
		[o.ZP],
		() => {
			let n = o.ZP.getChannels(e),
				r = [],
				i = [],
				a = {};
			for (let e of n[o.sH])
				(0, E.s)(e.channel.guild_id, e.channel.id) &&
					((t.has(e.channel.id) && !e.channel.isCategory()) ||
						(!e.channel.isThread() && null != e.channel.parent_id && t.has(e.channel.parent_id))) &&
					((a[e.channel.id] = e), r.push(e.channel), v(e.channel) && i.push(e.channel.id));
			return [i, r];
		},
		[e, t],
		D
	);
}
function b(e) {
	return new Set(
		e
			.map((e) => e.roleIds)
			.flat()
			.filter(d.lm)
	);
}
function M(e) {
	return new Set(
		e
			.map((e) => e.channelIds)
			.flat()
			.filter(d.lm)
	);
}
