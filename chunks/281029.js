n.d(t, {
	Dn: function () {
		return h;
	},
	if: function () {
		return d;
	},
	ig: function () {
		return s;
	}
}),
	n(47120),
	n(733860),
	n(653041);
var i = n(740504),
	l = n(131704),
	r = n(990492),
	a = n(981631);
function s(e, t) {
	return null != e && null != t && (e === t || ((0, l.r8)(e) && (0, l.r8)(t)) || ((0, l.bw)(e) && (0, l.bw)(t)));
}
function o(e, t, n, i) {
	let l = -1;
	if (
		(i.find((e, n) => {
			let { channel: i } = e;
			return i.id === t && ((l = n), !0);
		}),
		l < 0)
	)
		return null;
	for (let t = l; t >= 0 && t < i.length; t += e) {
		let e = i[t];
		if (s(e.channel.type, n)) return e;
	}
	return null;
}
function c(e, t) {
	let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
	if (null == e) return 0;
	let i = null;
	return (
		t
			.filter((t) => {
				let {
					channel: { type: i }
				} = t;
				return null != e && (n || s(e.type, i));
			})
			.find((t, n) => {
				let {
					channel: { id: l }
				} = t;
				return null != e && l === e.id && ((i = n), !0);
			}),
		i
	);
}
function u(e) {
	return {
		referenceId: e.id,
		parentId: e.parent_id
	};
}
function d(e, t, n, i, r) {
	if (null == e || null == n) return null;
	let { GUILD_CATEGORY: d } = a.d4z;
	if (e.type === d)
		return i === t || (i < t && e.type === n.type)
			? u(n)
			: i > t
				? (function (e, t, n) {
						var i;
						let { GUILD_CATEGORY: l } = a.d4z,
							r = n[(null !== (i = c(t, n, !0)) && void 0 !== i ? i : 0) + 1],
							s = o(-1, t.id, e.type, n);
						return null == s || s.channel.id === e.id
							? null
							: null == r || r.channel.type === l
								? {
										referenceId: s.channel.id,
										parentId: null
									}
								: null;
					})(e, n, r)
				: null;
	if (s(e.type, n.type)) return u(n);
	if (i < t)
		return n.type === d
			? (function (e, t, n) {
					var i;
					let r = n[(null !== (i = c(t, n, !0)) && void 0 !== i ? i : 0) - 1],
						a = o(1, t.id, e.type, n);
					if (null == r)
						return {
							referenceId: null,
							parentId: null
						};
					if (null != a) {
						if (s(r.channel.type, e.type) || (e.isGuildVocal() && (0, l.r8)(r.channel.type)))
							return {
								referenceId: a.channel.id,
								parentId: r.channel.parent_id
							};
						if (r.channel.isCategory())
							return {
								referenceId: a.channel.id,
								parentId: r.channel.id
							};
					}
					return null;
				})(e, n, r)
			: (function (e, t, n) {
					var i;
					let r = n[(null !== (i = c(t, n, !0)) && void 0 !== i ? i : 0) - 1],
						a = o(1, t.id, e.type, n);
					return null != r || e.isGuildVocal()
						? (0, l.r8)(e.type) && null != a && ((0, l.r8)(r.channel.type) || r.channel.isCategory())
							? {
									referenceId: a.channel.id,
									parentId: t.parent_id
								}
							: null
						: {
								referenceId: null != a ? a.channel.id : null,
								parentId: null
							};
				})(e, n, r);
	return n.type === d
		? (function (e, t, n) {
				var i;
				let r = n[(null !== (i = c(t, n, !0)) && void 0 !== i ? i : 0) + 1],
					a = o(-1, t.id, e.type, n);
				if (null != a) {
					if (null == r)
						return {
							referenceId: a.channel.id,
							parentId: t.id
						};
					if (s(r.channel.type, e.type) || ((0, l.r8)(e.type) && r.channel.isGuildVocal()))
						return {
							referenceId: a.channel.id,
							parentId: r.channel.parent_id
						};
					if (r.channel.isCategory())
						return {
							referenceId: a.channel.id,
							parentId: t.id
						};
				}
				return null;
			})(e, n, r)
		: (function (e, t, n) {
				var i;
				let l = n[(null !== (i = c(t, n, !0)) && void 0 !== i ? i : 0) + 1],
					r = o(-1, t.id, e.type, n);
				if (null == r) return null;
				if (e.isGuildVocal()) {
					if (null == l || l.channel.isCategory())
						return {
							referenceId: r.channel.id,
							parentId: t.parent_id
						};
					if (l.channel.isGuildVocal())
						return {
							referenceId: r.channel.id,
							parentId: l.channel.parent_id
						};
				}
				return e.isCategory() && (null == l || l.channel.isCategory())
					? {
							referenceId: r.channel.id,
							parentId: null
						}
					: null;
			})(e, n, r);
}
function h(e, t, n, a) {
	let s,
		o,
		u = [],
		d = [],
		h = a._categories,
		p = (t) => {
			var n, i, l, a;
			let c;
			if (null == s || null == o || ((n = e), (i = s), (l = o), (a = t), null != i && null != l && null != a[i] && a[i].channel === n && null != a[l] ? 0 : 1)) c = [...t];
			else c = r.ZP.moveItemFromTo(t, s, o);
			return (
				(u = u.concat(
					r.ZP.calculatePositionDeltas({
						oldOrdering: t,
						newOrdering: c,
						idGetter: (e) => {
							let { channel: t } = e;
							return t.id;
						},
						existingPositionGetter: (e) => {
							let { channel: t } = e;
							return t.position;
						}
					})
				)),
				c
			);
		};
	if (e.isCategory()) {
		let n = [...h].slice(1);
		(s = c(e, n)), (o = c(t, n)), (d = p(n)).unshift(h[0]);
	}
	if ((0, l.r8)(e.type) || e.isCategory()) {
		let n = (0, i.Z)(d.length > 0 ? d : h, a, (e) => {
			let {
				channel: { type: t }
			} = e;
			return (0, l.r8)(t);
		});
		(s = c(e, n)), (o = c(t, n)), p(n);
	}
	if (e.isGuildVocal() || e.isCategory()) {
		let n = (0, i.Z)(d.length > 0 ? d : h, a, (e) => {
			let { channel: t } = e;
			return t.isGuildVocal();
		});
		(s = c(e, n)), (o = c(t, n)), p(n);
	}
	if (e.parent_id !== n) {
		let t = !1;
		u.find((i) => i.id === e.id && ((i.parent_id = n), (t = !0))),
			!t &&
				u.push({
					id: e.id,
					parent_id: n
				});
	}
	return u;
}
