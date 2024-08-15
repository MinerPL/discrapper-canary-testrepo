t.d(n, {
	Z: function () {
		return g;
	}
});
var l = t(735250);
t(470079);
var s = t(120356),
	a = t.n(s),
	i = t(481060),
	r = t(971130),
	o = t(689938),
	d = t(793762),
	u = t(224499);
let c = r.ZP.getMaxAgeOptions;
function h(e) {
	let { temporary: n, shouldHide: t, onToggleTemporary: s } = e;
	return t
		? (0, l.jsx)('div', { className: u.marginTop20 })
		: (0, l.jsx)(i.FormItem, {
				className: a()(u.marginTop20, d.switch),
				children: (0, l.jsx)(i.FormSwitch, {
					value: n,
					onChange: (e) => s(e),
					note: o.Z.Messages.TEMPORARY_MEMBERSHIP_EXPLANATION,
					hideBorder: !0,
					children: (0, l.jsx)(i.Text, {
						variant: 'text-sm/normal',
						children: o.Z.Messages.GRANT_TEMPORARY_MEMBERSHIP
					})
				})
			});
}
let I = r.ZP.getMaxUsesOptions;
function g(e) {
	var n;
	let { shouldHideTemporaryInviteToggle: t, maxAge: s, maxUses: r, temporary: g, onGenerateNewLink: E, onToggleTemporary: _, onSelectMaxAge: m, onSelectMaxUses: T } = e,
		N = c.find((e) => e.value === s),
		v = I.find((e) => e.value === r);
	return (0, l.jsx)('div', {
		className: d.settingsContent,
		children: (0, l.jsxs)('form', {
			onSubmit: E,
			children: [
				(0, l.jsx)(i.FormItem, {
					title: o.Z.Messages.EXPIRE_AFTER,
					className: u.marginTop20,
					children: (0, l.jsx)(i.SingleSelect, {
						value: null !== (n = null == N ? void 0 : N.value) && void 0 !== n ? n : c[0].value,
						options: c,
						onChange: m,
						maxVisibleItems: 8
					})
				}),
				(0, l.jsx)(i.FormItem, {
					title: o.Z.Messages.MAX_NUMBER_OF_USES,
					className: a()(u.marginTop20, u.marginBottom4),
					children: (0, l.jsx)(i.SingleSelect, {
						value: null == v ? void 0 : v.value,
						options: I,
						onChange: T
					})
				}),
				(0, l.jsx)(h, {
					temporary: g,
					shouldHide: t,
					onToggleTemporary: _
				})
			]
		})
	});
}
