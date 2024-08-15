n.d(t, {
	Z: function () {
		return p;
	}
}),
	n(47120);
var r = n(735250),
	i = n(470079),
	a = n(120356),
	s = n.n(a),
	o = n(442837),
	l = n(481060),
	u = n(314910),
	c = n(906467),
	d = n(857192),
	_ = n(835225),
	E = n(117795),
	f = n(565384),
	h = n(292357);
function p() {
	let { debugTrackedData: e, impressions: t } = (0, f.Xo)((e) => ({
			debugTrackedData: e.debugTrackedData,
			impressions: e.impressions
		})),
		n = (0, o.e7)([d.default], () => d.default.isAnalyticsDebuggerEnabled),
		a = (0, o.e7)([c.Z], () => c.Z.isDeveloper),
		[p, I] = i.useState(!1),
		{ name: m, ...T } = null != e ? e : {},
		g = null != m;
	return a && n
		? (0, r.jsx)(u.ZP, {
				children: (0, r.jsxs)('div', {
					className: s()(h.container, {
						[h.containerMinimized]: p,
						[h.notTracked]: !g
					}),
					children: [
						(0, r.jsx)(l.Clickable, {
							className: h.minimizeButton,
							onClick: () => {
								I(!p);
							},
							children: p ? (0, r.jsx)(_.Z, {}) : (0, r.jsx)(E.Z, {})
						}),
						(0, r.jsxs)('div', {
							className: s()(h.content, { [h.contentMinimized]: p }),
							children: [
								(0, r.jsxs)(l.Text, {
									className: s()(h.label, { [h.notTracked]: !g }),
									variant: 'text-xxs/normal',
									children: [
										g
											? (0, r.jsx)(l.CircleCheckIcon, {
													size: 'md',
													color: 'currentColor',
													className: h.iconTracked
												})
											: (0, r.jsx)(l.CircleXIcon, {
													size: 'md',
													color: 'currentColor',
													className: h.iconNotTracked
												}),
										null != m ? m : '(untracked)'
									]
								}),
								(0, r.jsx)('div', {
									className: h.current,
									children: JSON.stringify(T, void 0, 2)
								}),
								(0, r.jsx)(l.Text, {
									className: s()(h.label, { [h.notTracked]: !g }),
									variant: 'text-xxs/normal',
									children: 'impressions stack'
								}),
								(0, r.jsx)('div', {
									className: h.stack,
									children: JSON.stringify(t, void 0, 2)
								})
							]
						})
					]
				})
			})
		: null;
}
