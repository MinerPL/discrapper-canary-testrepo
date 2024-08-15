n.d(t, {
	I2: function () {
		return N;
	},
	RD: function () {
		return S;
	},
	mY: function () {
		return A;
	},
	pH: function () {
		return c;
	}
}),
	n(653041),
	n(47120),
	n(724458);
var r = n(470079),
	a = n(652874),
	i = n(143927),
	E = n(731965),
	_ = n(881052),
	u = n(36459),
	l = n(866894),
	s = n(273504),
	o = n(981631);
let I = {},
	T = (e) => {
		let t = {
			[s.fX.KEYWORD]: [],
			[s.fX.ML_SPAM]: [],
			[s.fX.DEFAULT_KEYWORD_LIST]: [],
			[s.fX.MENTION_SPAM]: [],
			[s.fX.USER_PROFILE]: [],
			[s.fX.SERVER_POLICY]: []
		};
		return (
			e.forEach((e) => {
				var n;
				let { triggerType: r } = e;
				null === (n = t[r]) || void 0 === n || n.push(e);
			}),
			t
		);
	},
	O = (0, a.Z)((e, t) => ({
		rules: {},
		fetching: !1,
		error: null,
		updateRule: (n) => {
			var r, a;
			let { guildId: i, id: _, triggerType: u } = n,
				{ rules: s } = t(),
				o = null !== (r = s[i]) && void 0 !== r ? r : {},
				I = null !== (a = o[u]) && void 0 !== a ? a : [],
				T = I.some((e) => e.id === _),
				O = I.filter((e) => (!(0, l.U)(e.id) || e.triggerType !== u) && !0),
				A = T ? O.map((e) => (e.id === _ ? n : e)) : [...O, n];
			(0, E.j)(() => {
				e({
					rules: {
						...s,
						[i]: {
							...o,
							[u]: A
						}
					},
					error: null
				});
			});
		},
		removeRule: (n, r) => {
			let { rules: a } = t(),
				i = a[r],
				_ = Object.keys(i).reduce((e, t) => {
					var r;
					let a = Number(t),
						E = null !== (r = i[a]) && void 0 !== r ? r : [];
					return (e[a] = E.filter((e) => e.id !== n)), e;
				}, i);
			(0, E.j)(() => {
				e({
					rules: {
						...a,
						[r]: _
					},
					error: null
				});
			});
		},
		syncRules: async (n) => {
			if (
				!!(function (e) {
					var t;
					let n = Date.now(),
						r = null !== (t = I[e]) && void 0 !== t ? t : 0;
					return n - r > 20000;
				})(n)
			) {
				I[n] = Date.now();
				try {
					let r = await (0, u.$Y)(n),
						a = T(r),
						i = t().rules;
					(0, E.j)(() => {
						e({
							rules: {
								...i,
								[n]: a
							},
							error: null
						});
					});
				} catch (n) {
					let t = new _.Hx(n);
					(0, E.j)(() => {
						e({ error: t });
					});
				}
			}
		}
	})),
	A = (e, t) => {
		var n, r;
		return (
			null !== (r = null === (n = O.getState().rules[e]) || void 0 === n ? void 0 : n[t]) && void 0 !== r ? r : []
		).length;
	};
function N(e) {
	let [t, n] = r.useState(!1),
		[a, E] = O((e) => [e.syncRules, e.fetching], i.Z);
	return [
		t,
		r.useCallback(async () => {
			if (!E && null != e)
				try {
					n(!0), await a(e);
				} finally {
					n(!1);
				}
		}, [e, E, a])
	];
}
function S(e) {
	let [t, n] = N(e);
	return (
		r.useEffect(() => {
			(async () => {
				await n();
			})();
		}, [e, n]),
		[t, n]
	);
}
function c(e) {
	return O((t) => {
		var n;
		return {
			rulesByTriggerType: null !== (n = t.rules[null != e ? e : o.lds]) && void 0 !== n ? n : {},
			updateRule: t.updateRule,
			removeRule: t.removeRule
		};
	});
}
