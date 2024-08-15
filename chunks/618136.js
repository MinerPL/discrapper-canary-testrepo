n.d(t, {
	Z: function () {
		return s;
	}
}),
	n(47120);
var r = n(436660),
	i = n(887490),
	a = n(42530);
function s(e) {
	let { apply: t, onChange: n } = e;
	return (
		(e.apply = (n) => {
			t(n), i.Ew.isValid(e, e.selection) && (e.lastGoodSelection = e.selection);
		}),
		(e.onChange = () => {
			if (
				(!i.Ew.isValid(e, e.selection) &&
					(e.selection = (function (e) {
						let t;
						if (i.Ew.isValid(e, e.lastGoodSelection)) t = e.lastGoodSelection;
						else {
							let n = i.bN.end(e, []);
							t = {
								anchor: n,
								focus: n
							};
						}
						return t;
					})(e)),
				null != e.selection)
			) {
				let t,
					n,
					[s, o] = i.M8.edges(e.selection),
					l = !1;
				for (; null != s && null != (t = i.bN.getParentVoid(e, s)) && !a.On.includes(t[0].type); )
					(s = i.bN.before(e, s, { unit: 'offset' })), (l = !0);
				for (; null != o && null != (n = i.bN.getParentVoid(e, o)) && !a.On.includes(n[0].type); )
					(o = i.bN.after(e, o, { unit: 'offset' })), (l = !0);
				l &&
					null != s &&
					null != o &&
					(i.M8.isForward(e.selection)
						? r.Q.select(e, {
								anchor: s,
								focus: o
							})
						: r.Q.select(e, {
								anchor: o,
								focus: s
							}));
			}
			n();
		}),
		e
	);
}
