n.d(t, {
	r: function () {
		return l;
	}
}),
	n(470079),
	n(399606);
var r = n(430824),
	i = n(358085),
	a = n(341653),
	s = n(981631);
let o = [s.oNc.ROLE_SUBSCRIPTIONS_AVAILABLE_FOR_PURCHASE];
function l(e) {
	if (!(0, i.isIOS)()) return !1;
	let t = (0, a.e)();
	if (
		null == t ||
		-1 ===
			(function (e, t) {
				let n = e.split('.').map(Number),
					r = t.split('.').map(Number),
					i = Math.max(n.length, r.length);
				for (let e = 0; e < i; e++) {
					var a, s;
					let t = null !== (a = n[e]) && void 0 !== a ? a : 0,
						i = null !== (s = r[e]) && void 0 !== s ? s : 0;
					if (t < i) return -1;
					if (t > i) return 1;
				}
				return 0;
			})(t, '13.2')
	)
		return !1;
	let n = r.Z.getGuild(e);
	return !!(null != n && o.every((e) => n.hasFeature(e))) || !1;
}
