n.d(t, {
	C5: function () {
		return u;
	},
	CL: function () {
		return o;
	},
	cf: function () {
		return s;
	},
	iw: function () {
		return l;
	}
}),
	n(789020);
var r = n(149765),
	i = n(866442),
	a = n(709054);
function s(e) {
	e.permissions = r.vB(e.permissions);
}
function o(e) {
	var t;
	return {
		id: e.id,
		name: e.name,
		permissions: r.vB(e.permissions),
		mentionable: e.mentionable,
		position: e.position,
		originalPosition: e.position,
		color: e.color,
		colorString: null != e.color && 0 !== e.color ? (0, i.Rf)(e.color) : null,
		hoist: e.hoist,
		managed: e.managed,
		tags: e.tags,
		icon: e.icon,
		unicodeEmoji: e.unicode_emoji,
		flags: null !== (t = e.flags) && void 0 !== t ? t : 0
	};
}
function l(e, t) {
	if (null == t) return {};
	let n = t.length - 1,
		r = {};
	return (
		t
			.sort((t, n) => {
				var r, i;
				let s = e === t.id ? 1 / 0 : -(null !== (r = t.originalPosition) && void 0 !== r ? r : t.position),
					o = e === n.id ? 1 / 0 : -(null !== (i = n.originalPosition) && void 0 !== i ? i : n.position);
				return s === o ? a.default.compare(t.id, n.id) : s < o ? -1 : s === o ? 0 : 1;
			})
			.forEach((e, t) => {
				(e.position = n - t), (r[e.id] = e);
			}),
		r
	);
}
function u(e, t) {
	return null == t ? {} : l(e, t.map(o));
}
