s.r(t), s(47120), s(411104);
var a = s(735250),
	l = s(470079),
	n = s(442837),
	i = s(481060),
	r = s(570140),
	o = s(57513),
	c = s(689241),
	h = s(447273),
	d = s(51025),
	u = s(672971),
	p = s(812206),
	I = s(600164),
	A = s(925329),
	L = s(703656),
	_ = s(173747),
	T = s(850840),
	N = s(391690),
	m = s(424218),
	f = s(94692),
	E = s(981631),
	P = s(689938),
	C = s(904958);
function g(e, t, s) {
	return (
		t in e
			? Object.defineProperty(e, t, {
					value: s,
					enumerable: !0,
					configurable: !0,
					writable: !0
				})
			: (e[t] = s),
		e
	);
}
class S extends l.Component {
	fetchInstallSize() {
		let { applicationId: e, branchId: t, buildId: s, manifestIds: a, buildSizeKB: l } = this.props;
		null != s &&
			null != a &&
			null == l &&
			r.Z.wait(() => {
				(0, c.q)(e, t, s, a);
			});
	}
	componentDidMount() {
		let { applicationId: e, branchId: t, buildId: s, manifestIds: a } = this.props;
		null == s || null == a ? (0, o.l)(e, t) : this.fetchInstallSize();
	}
	componentDidUpdate(e) {
		(this.props.buildId !== e.buildId || this.props.manifestIds !== e.manifestIds) && this.fetchInstallSize();
	}
	componentWillUnmount() {
		this.isUnmounted = !0;
	}
	renderButton() {
		let { buildId: e } = this.props,
			{ hasError: t, hasAcceptedNeccessaryTerms: s } = this.state;
		return (0, a.jsx)(i.Button, {
			disabled: t || null == e || !s,
			color: i.Button.Colors.GREEN,
			onClick: this.handleInstall,
			children: P.Z.Messages.GAME_ACTION_BUTTON_INSTALL
		});
	}
	render() {
		let { application: e, buildSizeKB: t, transitionState: s } = this.props,
			{ selectedInstallationPath: l, isInstalling: n } = this.state,
			r = null != e && e.getSplashURL(440);
		return (0, a.jsxs)(i.ModalRoot, {
			transitionState: s,
			size: i.ModalSize.SMALL,
			'aria-label': P.Z.Messages.APPLICATION_INSTALLATION_MODAL_TITLE,
			children: [
				null != r
					? (0, a.jsx)('div', {
							className: C.splash,
							style: { backgroundImage: 'url('.concat(r, ')') }
						})
					: null,
				(0, a.jsxs)(i.ModalHeader, {
					justify: I.Z.Justify.BETWEEN,
					children: [
						(0, a.jsx)(I.Z.Child, {
							grow: 1,
							children: (0, a.jsx)(i.Heading, {
								variant: 'heading-lg/semibold',
								children: P.Z.Messages.APPLICATION_INSTALLATION_MODAL_TITLE
							})
						}),
						(0, a.jsx)(I.Z.Child, {
							grow: 0,
							children: (0, a.jsx)(i.ModalCloseButton, { onClick: this.close })
						})
					]
				}),
				(0, a.jsxs)(i.ModalContent, {
					children: [
						(0, a.jsxs)(I.Z, {
							align: I.Z.Align.CENTER,
							children: [
								(0, a.jsx)(A.Z, {
									game: e,
									size: A.Z.Sizes.MEDIUM,
									className: C.gameIcon
								}),
								(0, a.jsx)('div', {
									className: C.gameName,
									children: null != e && e.name
								}),
								null != t
									? (0, a.jsx)('div', {
											className: C.installSize,
											children: (0, m.BU)(t, { useKibibytes: !0 })
										})
									: null
							]
						}),
						(0, a.jsx)('div', { className: C.divider }),
						(0, a.jsx)(f.Z, {
							autoFocus: !0,
							className: C.selector,
							value: l,
							requiredDiskKB: t,
							onChange: this.handleChangePath
						}),
						(0, a.jsx)(u.Z, {
							eulaId: e.eulaId,
							applicationName: e.name,
							disabled: n,
							onChange: this.handlePurchaseTermsChange,
							className: C.terms
						})
					]
				}),
				(0, a.jsx)(i.ModalFooter, { children: this.renderButton() })
			]
		});
	}
	constructor(...e) {
		super(...e),
			g(this, 'state', {
				selectedInstallationPath: this.props.defaultInstallationPath,
				hasError: !1,
				isInstalling: !1,
				hasAcceptedNeccessaryTerms: !1
			}),
			g(this, 'isUnmounted', !1),
			g(this, 'handleChangePath', (e, t) => {
				this.setState({
					selectedInstallationPath: e,
					hasError: t
				});
			}),
			g(this, 'install', (e, t) => {
				let { application: s, branchId: a, analyticsLocation: l } = this.props;
				if (null == s) return null;
				(0, d.LO)({
					application: s,
					branchId: a,
					buildId: e,
					manifestIds: t,
					installationPath: this.state.selectedInstallationPath,
					analyticsLocation: l
				}),
					(0, L.uL)(E.Z5c.APPLICATION_LIBRARY),
					this.close();
			}),
			g(this, 'handleInstall', () => {
				let { application: e, buildId: t, manifestIds: s, hasPreviouslyAcceptedStoreTerms: a } = this.props;
				if (null != t && null != s) !a && (0, h.B)(), null != e && null != e.eulaId && (0, h.D)(e.eulaId), this.install(t, s);
				else throw Error('Unexpected missing build info for non-premium product');
			}),
			g(this, 'handlePurchaseTermsChange', (e) => {
				this.setState({ hasAcceptedNeccessaryTerms: e });
			}),
			g(this, 'close', () => {
				this.props.onClose();
			});
	}
}
t.default = n.ZP.connectStores([_.Z, N.Z, T.Z, p.Z], (e) => {
	let { applicationId: t, branchId: s } = e,
		a = _.Z.getTargetBuildId(t, s);
	return {
		application: p.Z.getApplication(t),
		defaultInstallationPath: N.Z.defaultInstallationPath,
		buildId: a,
		manifestIds: _.Z.getTargetManifests(t, s),
		buildSizeKB: null != a ? _.Z.getBuildSize(a) : null,
		hasPreviouslyAcceptedStoreTerms: T.Z.hasAcceptedStoreTerms
	};
})(S);
