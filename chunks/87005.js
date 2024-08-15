t.d(n, {
	f: function () {
		return _;
	}
}),
	t(47120);
var i = t(470079),
	a = t(243814),
	l = t(442837),
	o = t(384275),
	r = t(911969),
	s = t(10718),
	c = t(148958),
	d = t(881998);
t(445392), t(783097);
var u = t(689079);
let m = {
		commandTypes: [r.yU.CHAT, r.yU.PRIMARY_ENTRY_POINT]
	},
	p = {
		placeholderCount: 0,
		limit: u.tn,
		includeFrecency: !0
	};
function _(e) {
	let { sectionDescriptors: n, loading: t } = s.wi(e, m, p);
	return {
		loading: t,
		frecentApps: (function (e) {
			i.useEffect(() => {
				o.Z.fetch();
			}, []);
			let n = (0, l.Wu)([d.Z], () => {
					var e, n;
					return null !==
						(n =
							null === (e = d.Z.getApps()) || void 0 === e
								? void 0
								: e.filter((e) => e.scopes.includes(a.x.APPLICATIONS_COMMANDS))) && void 0 !== n
						? n
						: [];
				}),
				t = e.filter((e) => e.id !== u.bi.FRECENCY && e.id !== u.bi.BUILT_IN);
			return (0, c.h)(t, n);
		})(n)
	};
}
