var r = n(735250);
n(470079);
var i = n(788307),
	a = n(833858),
	s = n(981631);
t.Z = (e) => {
	var t;
	let { className: n, hangStatusActivity: o, animate: l = !0 } = e;
	if ((null == o ? void 0 : o.state) === s.tNA.CUSTOM)
		return null != o.emoji
			? (0, r.jsx)(i.I, {
					emoji: o.emoji,
					className: n,
					hideTooltip: !0,
					animate: l
				})
			: null;
	let u = null === (t = (0, a.tV)(o)) || void 0 === t ? void 0 : t.icon;
	return null != u
		? (0, r.jsx)('img', {
				src: u,
				alt: '',
				className: null != n ? n : void 0
			})
		: null;
};
