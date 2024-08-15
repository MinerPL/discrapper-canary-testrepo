n.d(t, {
	E: function () {
		return L;
	}
}),
	n(47120),
	n(724458),
	n(653041);
var i,
	l = n(735250),
	r = n(470079),
	a = n(120356),
	s = n.n(a),
	o = n(748780),
	c = n(442837),
	u = n(692547),
	d = n(215569),
	h = n(481060),
	p = n(812206),
	_ = n(707409),
	f = n(703656),
	g = n(417363),
	m = n(941128),
	C = n(780570),
	I = n(353042),
	E = n(981631),
	N = n(689938),
	x = n(896029);
function S(e, t, n) {
	return (
		t in e
			? Object.defineProperty(e, t, {
					value: n,
					enumerable: !0,
					configurable: !0,
					writable: !0
				})
			: (e[t] = n),
		e
	);
}
let v = {
	[E.vxO.INSTALLING]: {
		[_.J6.NONE]: (e, t) => N.Z.Messages.APPLICATION_PROGRESS_INDICATOR_INSTALLING.format({ name: e }),
		[_.J6.SECONDS]: (e, t) =>
			N.Z.Messages.APPLICATION_PROGRESS_INDICATOR_INSTALLING_SECONDS.format({
				name: e,
				timeRemaining: t
			}),
		[_.J6.MINUTES]: (e, t) =>
			N.Z.Messages.APPLICATION_PROGRESS_INDICATOR_INSTALLING_MINUTES.format({
				name: e,
				timeRemaining: t
			}),
		[_.J6.HOURS]: (e, t) =>
			N.Z.Messages.APPLICATION_PROGRESS_INDICATOR_INSTALLING_HOURS.format({
				name: e,
				timeRemaining: t
			})
	},
	[E.vxO.UPDATING]: {
		[_.J6.NONE]: (e, t) => N.Z.Messages.APPLICATION_PROGRESS_INDICATOR_UPDATING.format({ name: e }),
		[_.J6.SECONDS]: (e, t) =>
			N.Z.Messages.APPLICATION_PROGRESS_INDICATOR_UPDATING_SECONDS.format({
				name: e,
				timeRemaining: t
			}),
		[_.J6.MINUTES]: (e, t) =>
			N.Z.Messages.APPLICATION_PROGRESS_INDICATOR_UPDATING_MINUTES.format({
				name: e,
				timeRemaining: t
			}),
		[_.J6.HOURS]: (e, t) =>
			N.Z.Messages.APPLICATION_PROGRESS_INDICATOR_UPDATING_HOURS.format({
				name: e,
				timeRemaining: t
			})
	},
	[E.vxO.REPAIRING]: {
		[_.J6.NONE]: (e, t) => N.Z.Messages.APPLICATION_PROGRESS_INDICATOR_INSTALLING.format({ name: e }),
		[_.J6.SECONDS]: (e, t) =>
			N.Z.Messages.APPLICATION_PROGRESS_INDICATOR_INSTALLING_SECONDS.format({
				name: e,
				timeRemaining: t
			}),
		[_.J6.MINUTES]: (e, t) =>
			N.Z.Messages.APPLICATION_PROGRESS_INDICATOR_INSTALLING_MINUTES.format({
				name: e,
				timeRemaining: t
			}),
		[_.J6.HOURS]: (e, t) =>
			N.Z.Messages.APPLICATION_PROGRESS_INDICATOR_INSTALLING_HOURS.format({
				name: e,
				timeRemaining: t
			})
	}
};
class Z extends r.PureComponent {
	renderText() {
		let { state: e, isPaused: t } = this.props;
		if (e.type === E.vxO.UPDATING || e.type === E.vxO.REPAIRING || e.type === E.vxO.INSTALLING) {
			if (t) return N.Z.Messages.APPLICATION_PROGRESS_INDICATOR_PAUSED;
			if (e.stage === E.f07.PATCHING || e.stage === E.f07.REPAIRING)
				return (0, l.jsx)(I.Z, {
					getHistoricalTotalBytes: g.Z.getHistoricalTotalBytesWritten,
					updateInterval: 5000,
					children: this.renderProgressBody
				});
		}
		return null;
	}
	render() {
		let e = this.renderText();
		return null != e ? e : N.Z.Messages.LIBRARY;
	}
	constructor(...e) {
		super(...e),
			S(this, 'renderProgressBody', (e, t) => {
				let { state: n, application: i } = this.props,
					{ stage: l, progress: r, total: a, type: s } = n;
				if (null == r || null == a || null == l) return null;
				let o = (e[e.length - 1] / t) * 1000,
					c = 0 !== o ? Math.max(1, (a - r) / o) : null,
					u = v[s],
					d = null != u ? Object.keys(u) : [],
					{ unit: h, time: p } = (0, _.CI)(null != c ? c / 60 : null, d);
				if (null != u && null != h) {
					let e = u[h];
					return null != e ? e(i.name, p) : null;
				}
				return null;
			});
	}
}
class T extends (i = r.PureComponent) {
	componentWillAppear(e) {
		this.state.animationScale.setValue(1), e();
	}
	componentWillEnter(e) {
		o.Z.spring(this.state.animationScale, {
			toValue: 1,
			duration: 200
		}).start(e);
	}
	componentWillLeave(e) {
		o.Z.spring(this.state.animationScale, {
			toValue: 0,
			duration: 200
		}).start(e);
	}
	getTooltipText() {
		let { firstApplication: e, firstState: t, isPaused: n } = this.props;
		return null == e || null == t
			? N.Z.Messages.LIBRARY
			: (0, l.jsx)(Z, {
					application: e,
					state: t,
					isPaused: n
				});
	}
	render() {
		let { percent: e, isPaused: t, className: n } = this.props;
		return (0, l.jsx)(o.Z.div, {
			style: { transform: [{ scale: this.state.animationScale }] },
			className: s()(n, x.progressContainer),
			onClick: this.handleOnClick,
			children: (0, l.jsx)(h.Tooltip, {
				text: this.getTooltipText(),
				position: 'right',
				'aria-label': !1,
				children: (n) =>
					(0, l.jsx)('div', {
						...n,
						children: (0, l.jsx)(h.ProgressCircle, {
							percent: e,
							colorOverride: t ? u.Z.unsafe_rawColors.PRIMARY_500.css : null,
							children: (0, l.jsx)(h.DownloadIcon, {
								size: 'md',
								color: 'currentColor',
								className: x.downloadIcon
							})
						})
					})
			})
		});
	}
	constructor(...e) {
		super(...e),
			S(this, 'state', { animationScale: new o.Z.Value(0) }),
			S(this, 'handleOnClick', (e) => {
				let { onClick: t } = this.props;
				e.preventDefault(), e.stopPropagation(), null != t && t(e), (0, f.uL)(E.Z5c.APPLICATION_LIBRARY);
			});
	}
}
S(T, 'defaultProps', { strokeSize: h.ProgressCircle.StrokeSizes.MEDIUM });
function L(e, t) {
	return e.reduce((e, n) => {
		let { applicationId: i, branchId: l } = n,
			r = t.getState(i, l);
		return null != r && e.push(r), e;
	}, []);
}
t.Z = c.ZP.connectStores([m.Z, g.Z, p.Z], () => {
	let e = m.Z.activeItems,
		t = L(e, g.Z),
		{ total: n, progress: i } = C.lK(t);
	return {
		percent: C.xI(i, n),
		isPaused: m.Z.paused,
		firstApplication: e.length > 0 ? p.Z.getApplication(e[0].applicationId) : null,
		firstState: t.length > 0 ? t[0] : null
	};
})((e) => {
	let { determineOwnVisibility: t = !0, ...n } = e;
	return t
		? (0, l.jsx)(d.W, {
				component: r.Fragment,
				children: n.percent > 0 && n.percent < 100 ? (0, l.jsx)(T, { ...n }) : null
			})
		: (0, l.jsx)(T, { ...n });
});
