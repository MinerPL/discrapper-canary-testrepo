n.d(t, {
	Jc: function () {
		return l;
	},
	Lp: function () {
		return o;
	},
	tW: function () {
		return s;
	},
	ts: function () {
		return u;
	}
}),
	n(399606);
var r = n(430824),
	i = n(981631),
	a = n(176505);
function s(e) {
	return o(e, !0, !1);
}
function o(e) {
	let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
		n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2];
	return (
		!(
			null == e ||
			!(function (e) {
				var t;
				if (null == e) return !1;
				let n = r.Z.getGuild(null !== (t = null == e ? void 0 : e.guild_id) && void 0 !== t ? t : ''),
					a = null != n && n.rulesChannelId === e.id;
				return i.TPd.SUMMARIZEABLE.has(e.type) && !e.isNSFW() && !a;
			})(e) ||
			(!1 === t && e.hasFlag(a.zZ.SUMMARIES_DISABLED))
		) && l(r.Z.getGuild(e.guild_id), n)
	);
}
function l(e) {
	var t;
	let n = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
	if (null == e) return !1;
	return (
		!!((null == (t = e.id) || (t !== i.ME && t !== i.I_8)) && e.hasFeature(i.oNc.SUMMARIES_ENABLED_GA)) &&
		(!n || e.hasFeature(i.oNc.SUMMARIES_ENABLED_BY_USER))
	);
}
function u(e) {
	arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
	let t = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
	return o(e, t);
}
