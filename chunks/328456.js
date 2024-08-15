n.d(t, {
	R: function () {
		return o;
	},
	b: function () {
		return s;
	}
}),
	n(724458),
	n(653041),
	n(47120);
var a = n(470079),
	r = n(979554);
class s {
	get firstAvatarDecoration() {
		return this.getFirstItemByType(r.Z.AVATAR_DECORATION);
	}
	get firstProfileEffect() {
		return this.getFirstItemByType(r.Z.PROFILE_EFFECT);
	}
	getFirstItemByType(e) {
		var t;
		let n = (null !== (t = this.itemsByTypes.get(e)) && void 0 !== t ? t : [])[0];
		if (null != n) return n;
	}
	sortByTypes(e) {
		return e.reduce((e, t) => {
			let n = e.get(t.type);
			return null != n ? n.push(t) : e.set(t.type, [t]), e;
		}, new Map());
	}
	constructor(e) {
		var t, n, a;
		(t = this),
			(a = void 0),
			(n = 'itemsByTypes') in t
				? Object.defineProperty(t, n, {
						value: a,
						enumerable: !0,
						configurable: !0,
						writable: !0
					})
				: (t[n] = a),
			(this.itemsByTypes = this.sortByTypes(e));
	}
}
let o = (e) => {
	let { firstProfileEffect: t, firstAvatarDecoration: n } = a.useMemo(() => new s(e.items), [e]);
	return {
		firstProfileEffect: t,
		firstAvatarDecoration: n
	};
};
