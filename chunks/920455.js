n.d(t, {
	Z: function () {
		return h;
	}
});
var r = n(735250),
	i = n(470079),
	a = n(120356),
	s = n.n(a),
	o = n(481060),
	l = n(239091),
	u = n(688465),
	c = n(63063),
	d = n(689079),
	_ = n(981631),
	E = n(689938),
	f = n(714843);
function h(e) {
	var t;
	let { className: a, activeCommand: h } = e,
		p = i.useCallback(
			(e) => {
				var t;
				let i = null == h ? void 0 : null === (t = h.rootCommand) || void 0 === t ? void 0 : t.id;
				if (null == i) {
					e.preventDefault();
					return;
				}
				(0, l.jW)(e, async () => {
					let { default: e } = await n.e('5396').then(n.bind(n, 731646));
					return (t) =>
						(0, r.jsx)(e, {
							...t,
							id: i,
							label: E.Z.Messages.COPY_ID_COMMAND
						});
				});
			},
			[null == h ? void 0 : null === (t = h.rootCommand) || void 0 === t ? void 0 : t.id]
		);
	return null == h
		? null
		: (0, r.jsxs)('div', {
				className: s()(a, f.bar),
				onContextMenu: p,
				children: [
					(0, r.jsx)(u.Z, {}),
					(0, r.jsxs)(o.Text, {
						variant: 'text-sm/normal',
						color: 'text-muted',
						children: [E.Z.Messages.APPLICATION_COMMAND_USER_INSTALL_EDUCATION.format({ betaUserLimit: d.um }), E.Z.Messages.APPLICATION_COMMAND_USER_INSTALL_LEARN_MORE.format({ learnMoreUrl: c.Z.getArticleURL(_.BhN.USING_APPS_FAQ) })]
					})
				]
			});
}
