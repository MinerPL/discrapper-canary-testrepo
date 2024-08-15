var i = n(735250);
n(470079);
var s = n(374470),
	o = n(239091);
t.Z = (e) => {
	let { facepileRef: t, goToThread: a, channel: l } = e;
	return {
		handleLeftClick: (e) => {
			var n;
			!((0, s.k)(e.target) && (null === (n = t.current) || void 0 === n ? void 0 : n.contains(e.target))) &&
				a(l, e.shiftKey);
		},
		handleRightClick: (e) =>
			(0, o.jW)(e, async () => {
				let { default: e } = await Promise.all([n.e('39285'), n.e('48800'), n.e('18268')]).then(n.bind(n, 422200));
				return (t) =>
					(0, i.jsx)(e, {
						...t,
						channel: l
					});
			})
	};
};
