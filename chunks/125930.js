n(47120);
var i = n(735250),
	a = n(470079),
	s = n(120356),
	r = n.n(s),
	l = n(481060),
	o = n(770146),
	c = n(600164),
	d = n(424218),
	u = n(823379),
	_ = n(358085),
	E = n(843445),
	h = n(981631),
	m = n(689938),
	I = n(456733);
let g = {
	[h.TaA.WINDOWS]: _.PlatformTypes.WINDOWS,
	[h.TaA.MACOS]: _.PlatformTypes.OSX,
	[h.TaA.LINUX]: _.PlatformTypes.LINUX
};
class p extends a.PureComponent {
	render() {
		let { active: e, children: t, pageSize: n, onClick: a } = this.props,
			s = n === E.b.LARGE;
		return (0, i.jsx)(l.Button, {
			size: s ? l.Button.Sizes.MIN : l.Button.Sizes.LARGE,
			fullWidth: !s,
			color: e ? I.tabSelectedColor : I.tabNotSelectedColor,
			className: r()({
				[I.tabPageLarge]: s,
				[I.tabPageSmall]: !s,
				[I.tabSelected]: e,
				[I.tabNotSelected]: !e
			}),
			onClick: a,
			children: t
		});
	}
}
let T = (e) => [
	{
		key: m.Z.Messages.APPLICATION_STORE_SPECS_OS,
		value: e.operating_system_version
	},
	{
		key: m.Z.Messages.APPLICATION_STORE_SPECS_CPU,
		value: e.cpu
	},
	{
		key: m.Z.Messages.APPLICATION_STORE_SPECS_MEMORY,
		value:
			null != e.ram
				? m.Z.Messages.APPLICATION_STORE_SPECS_MEMORY_VALUE.format({
						size: (0, d.BU)(1000 * e.ram, { showDecimalForGB: !1 })
					})
				: null
	},
	{
		key: m.Z.Messages.APPLICATION_STORE_SPECS_VIDEO,
		value: e.gpu
	},
	{
		key: m.Z.Messages.APPLICATION_STORE_SPECS_STORAGE,
		value: null != e.disk ? (0, d.BU)(1000 * e.disk, { showDecimalForGB: !1 }) : null
	},
	{
		key: m.Z.Messages.APPLICATION_STORE_SPECS_SOUND,
		value: e.sound_card
	},
	{
		key: m.Z.Messages.APPLICATION_STORE_SPECS_NETWORK,
		value: e.network
	},
	{
		key: m.Z.Messages.APPLICATION_STORE_SPECS_NOTES,
		value: e.notes
	}
];
class S extends a.PureComponent {
	static getDerivedStateFromProps(e, t) {
		let { systemRequirements: n } = e,
			{ selectedOperatingSystem: i } = t,
			a = Object.keys(n);
		return a.includes(i) ? null : { selectedOperatingSystem: a[0] };
	}
	renderTabs() {
		let { pageSize: e, systemRequirements: t } = this.props,
			{ selectedOperatingSystem: n } = this.state,
			a = Object.keys(t);
		return 1 === a.length
			? null
			: (0, i.jsxs)(c.Z, {
					className: I.tabs,
					children: [
						(0, i.jsx)('div', { className: I.separator }),
						a.map((t) =>
							(0, i.jsx)(
								p,
								{
									active: t === n,
									onClick: () => this.handleSelectOperatingSystem(t),
									pageSize: e,
									children: (function (e) {
										switch (e) {
											case h.TaA.WINDOWS:
												return m.Z.Messages.WINDOWS;
											case h.TaA.MACOS:
												return m.Z.Messages.MACOS;
											case h.TaA.LINUX:
												return m.Z.Messages.LINUX;
										}
									})(t)
								},
								t
							)
						)
					]
				});
	}
	renderRequirementsSection(e, t) {
		if (null == e) return null;
		let n = T(e)
			.map((e, t) => {
				let n = null != e.value ? e.value.trim() : null;
				return null == n || 0 === n.length
					? null
					: (0, i.jsxs)(
							'div',
							{
								className: I.requirement,
								children: [
									(0, i.jsxs)('span', {
										className: I.requirementKey,
										children: [e.key, ':']
									}),
									n
								]
							},
							t
						);
			})
			.filter(u.lm);
		return (0, i.jsxs)('div', {
			className: I.requirements,
			children: [
				(0, i.jsx)(o.Z, {
					tag: 'h4',
					children: t
				}),
				n
			]
		});
	}
	renderBody() {
		let { minimum: e, recommended: t } = this.props.systemRequirements[this.state.selectedOperatingSystem];
		return (0, i.jsxs)('div', {
			className: I.requirementsContainer,
			children: [
				this.renderRequirementsSection(e, m.Z.Messages.APPLICATION_STORE_SPECS_MINIMUM),
				this.renderRequirementsSection(t, m.Z.Messages.APPLICATION_STORE_SPECS_RECOMMENDED)
			]
		});
	}
	render() {
		return (0, i.jsxs)('div', {
			className: this.props.className,
			children: [
				(0, i.jsx)(o.Z, { children: m.Z.Messages.APPLICATION_STORE_SECTION_TITLE_SYSTEM_REQUIREMENTS }),
				this.renderTabs(),
				this.renderBody()
			]
		});
	}
	constructor(e) {
		var t, n, i;
		super(e),
			(t = this),
			(n = 'handleSelectOperatingSystem'),
			(i = (e) => {
				this.setState({ selectedOperatingSystem: e });
			}),
			n in t
				? Object.defineProperty(t, n, {
						value: i,
						enumerable: !0,
						configurable: !0,
						writable: !0
					})
				: (t[n] = i);
		let a = (0, _.getPlatform)(),
			s = Object.keys(e.systemRequirements),
			r = s[0];
		for (let e of s) g[e] === a && (r = e);
		this.state = { selectedOperatingSystem: r };
	}
}
t.Z = S;
