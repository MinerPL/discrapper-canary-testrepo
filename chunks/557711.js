n.d(t, {
	Z: function () {
		return c;
	}
});
var r = n(735250);
n(470079);
var i = n(120356),
	a = n.n(i),
	s = n(481060),
	o = n(5192),
	l = n(829820),
	u = n(316865);
function c(e) {
	let { activity: t, user: n, channelId: i, guildId: c, source: d, size: _, look: E, color: f, className: h, onAction: p } = e,
		{ tooltip: m, loading: I, disabled: T, onClick: g } = (0, l.Fe)(t, n, d, o.ZP.getNickname(c, i, n)),
		S = () => {
			null == p || p(), g();
		};
	return (0, r.jsx)(s.Tooltip, {
		text: m,
		children: (e) => {
			let { onMouseEnter: n, onMouseLeave: i } = e;
			return (0, r.jsx)(s.Button, {
				size: _,
				className: a()(u.syncButton, h),
				innerClassName: u.syncButtonInner,
				look: E,
				color: f,
				onClick: S,
				onMouseEnter: n,
				onMouseLeave: i,
				disabled: T,
				submitting: I,
				'aria-label': null != m ? m : t.name,
				children: (0, r.jsx)(s.UserPlayIcon, {
					size: 'xs',
					color: 'currentColor'
				})
			});
		}
	});
}
