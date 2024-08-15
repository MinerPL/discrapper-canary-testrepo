n.d(t, {
	Zm: function () {
		return T;
	},
	aq: function () {
		return v;
	},
	iD: function () {
		return m;
	},
	mL: function () {
		return g;
	},
	og: function () {
		return N;
	},
	zS: function () {
		return A;
	}
}),
	n(47120);
var r = n(570140),
	i = n(367907),
	a = n(703656),
	s = n(592125),
	o = n(984933),
	l = n(271383),
	u = n(430824),
	c = n(496675),
	d = n(944486),
	_ = n(9156),
	E = n(626135),
	f = n(160404),
	h = n(225675),
	p = n(981631),
	I = n(176505);
function m(e, t) {
	E.default.track(p.rMx.VIEW_AS_ROLES_SELECTED, {
		num_roles: Object.keys(t.roles).length,
		...(0, i.hH)(e),
		is_viewing_as_member: t.type === h.z.NEW_MEMBER
	}),
		r.Z.dispatch({
			type: 'IMPERSONATE_UPDATE',
			guildId: e,
			data: t
		}),
		S(e);
}
function T(e, t) {
	let n = f.Z.getData(e);
	null != n &&
		n.type === t.type &&
		(E.default.track(p.rMx.VIEW_AS_ROLES_SELECTED, {
			num_roles: Object.keys(n.roles).length,
			...(0, i.hH)(e),
			is_viewing_as_member: n.type === h.z.NEW_MEMBER
		}),
		r.Z.dispatch({
			type: 'IMPERSONATE_UPDATE',
			guildId: e,
			data: {
				...n,
				...t
			}
		}),
		S(e));
}
function g(e) {
	r.Z.dispatch({
		type: 'IMPERSONATE_STOP',
		guildId: e
	});
}
function S(e) {
	let t = d.Z.getChannelId(e),
		n = s.Z.getChannel(t);
	if (!(null != t && (0, I.AB)(t)) && !c.Z.can(p.Plq.VIEW_CHANNEL, n)) {
		let t = o.ZP.getDefaultChannel(e);
		null != t && (0, a.uL)(p.Z5c.CHANNEL(e, t.id));
	}
}
function A(e, t, n) {
	let r = new Set(_.ZP.getOptedInChannels(e));
	t.forEach((e) => r.add(e)),
		n.forEach((e) => r.delete(e)),
		T(e, {
			type: h.z.NEW_MEMBER,
			optInChannels: r
		});
}
function N(e, t) {
	let n = u.Z.getRoles(e);
	!(function (e, t) {
		let n = [...o.ZP.getSelectableChannelIds(e), ...o.ZP.getVocalChannelIds(e)],
			r = Array.from(t);
		o.ZP.addConditionalChangeListener(() => {
			let t = l.ZP.getSelfMember(e);
			if (null == t) return !1;
			if (r.some((e) => !t.roles.includes(e))) return !0;
			let i = [...o.ZP.getSelectableChannelIds(e), ...o.ZP.getVocalChannelIds(e)].filter((e) => !n.includes(e));
			return i.length > 0 && A(e, i, []), !1;
		});
	})(e, t);
	let r = {};
	t.forEach((e) => (r[e] = n[e])),
		T(e, {
			type: h.z.NEW_MEMBER,
			roles: r
		});
}
function v(e, t) {
	T(e, {
		type: h.z.NEW_MEMBER,
		...t
	});
}
