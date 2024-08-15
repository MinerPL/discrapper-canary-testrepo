n.d(t, {
	Z: function () {
		return h;
	}
});
var i = n(735250),
	a = n(470079),
	s = n(120356),
	r = n.n(s),
	l = n(481060),
	o = n(55935),
	c = n(981631),
	d = n(689938),
	u = n(252961);
let _ = (e) => {
		let { IconComponent: t, className: n } = e;
		return (0, i.jsx)('div', {
			className: r()(u.iconCircle, n),
			children: (0, i.jsx)(t, {
				className: u.icon,
				color: 'currentColor'
			})
		});
	},
	E = (e) => {
		let { circle: t, smallHeader: n, text: a, className: s } = e;
		return (0, i.jsxs)('div', {
			className: r()(u.recommendationReason, s),
			children: [
				t,
				(0, i.jsxs)('div', {
					className: u.description,
					children: [
						null != n
							? (0, i.jsx)('div', {
									className: u.smallHeader,
									children: n
								})
							: null,
						(0, i.jsx)('div', {
							className: u.text,
							children: a
						})
					]
				})
			]
		});
	};
class h extends a.Component {
	render() {
		let { reason: e, className: t } = this.props;
		if (e.type === c.AzA.RECENT_RELEASE_DATE)
			return (0, i.jsx)(E, {
				className: t,
				circle: (0, i.jsx)(_, { IconComponent: l.CalendarIcon }),
				smallHeader: d.Z.Messages.APPLICATION_STORE_NEW_RELEASE,
				text: (0, o.vc)(e.releaseDate, 'LL')
			});
		if (e.type === c.AzA.RELEASE_DATE)
			return (0, i.jsx)(E, {
				className: t,
				circle: (0, i.jsx)(_, { IconComponent: l.CalendarIcon }),
				smallHeader: d.Z.Messages.APPLICATION_STORE_DETAILS_RELEASE_DATE,
				text: (0, o.vc)(e.releaseDate, 'LL')
			});
		if (e.type === c.AzA.EARLY_ACCESS)
			return null != e.releaseDate
				? (0, i.jsx)(E, {
						className: t,
						circle: (0, i.jsx)(_, {
							IconComponent: l.LockUnlockedIcon,
							className: u.earlyAccess
						}),
						smallHeader: d.Z.Messages.APPLICATION_STORE_EARLY_ACCESS,
						text: (0, o.vc)(e.releaseDate, 'LL')
					})
				: (0, i.jsx)(E, {
						className: t,
						circle: (0, i.jsx)(_, {
							IconComponent: l.LockUnlockedIcon,
							className: u.earlyAccess
						}),
						text: d.Z.Messages.APPLICATION_STORE_EARLY_ACCESS
					});
		return e.type === c.AzA.FLAVOR_TEXT
			? (0, i.jsx)(E, {
					circle: (0, i.jsx)(_, { IconComponent: l.CheckmarkLargeIcon }),
					text: e.flavorText,
					className: t
				})
			: e.type === c.AzA.HAS_FREE_PREMIUM_CONTENT
				? (0, i.jsx)(E, {
						className: t,
						circle: (0, i.jsx)(_, {
							IconComponent: l.NitroWheelIcon,
							className: u.premiumCircle
						}),
						text: d.Z.Messages.APPLICATION_STORE_FREE_PREMIUM_CONTENT
					})
				: null;
	}
}
