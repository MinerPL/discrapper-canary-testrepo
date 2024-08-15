n.d(t, {
	Z: function () {
		return P;
	}
}),
	n(411104),
	n(47120);
var i,
	a,
	s,
	r = n(735250),
	l = n(470079),
	o = n(442837),
	c = n(692547),
	u = n(481060),
	d = n(58642),
	_ = n(2052),
	E = n(710845),
	I = n(703656),
	m = n(173747),
	T = n(7956),
	h = n(293245),
	N = n(417363),
	f = n(941128),
	C = n(780570),
	p = n(358085),
	g = n(814225),
	S = n(346329),
	A = n(701560),
	R = n(981631),
	x = n(689938),
	O = n(36877);
function M(e, t, n) {
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
((s = i || (i = {})).PLAY = 'play'), (s.NOW_PLAYING = 'now_playing'), (s.INSTALL = 'install'), (s.UPDATE = 'update'), (s.PAUSED = 'paused'), (s.LOCATE = 'locate'), (s.UNINSTALLING = 'uninstalling'), (s.QUEUED = 'queued'), (s.DOWNLOADING = 'downloading'), (s.UNSUPPORTED_OS = 'unsupported_os'), (s.ADD_TO_LIBRARY = 'add_to_library'), (s.PREORDER_WAIT = 'preorder_wait');
let v = Object.freeze({
		[R.apO.PLAY]: 'play',
		[R.apO.INSTALL]: 'install',
		[R.apO.UPDATE]: 'update',
		[R.apO.PAUSE]: 'downloading',
		[R.apO.MOVE_UP]: 'queued',
		[R.apO.RESUME]: 'paused'
	}),
	L = () => [x.Z.Messages.GAME_ACTION_BUTTON_UNINSTALLING_1, x.Z.Messages.GAME_ACTION_BUTTON_UNINSTALLING_2, x.Z.Messages.GAME_ACTION_BUTTON_UNINSTALLING_3, x.Z.Messages.GAME_ACTION_BUTTON_UNINSTALLING_4, x.Z.Messages.GAME_ACTION_BUTTON_UNINSTALLING_5, x.Z.Messages.GAME_ACTION_BUTTON_UNINSTALLING_6, x.Z.Messages.GAME_ACTION_BUTTON_UNINSTALLING_7, x.Z.Messages.GAME_ACTION_BUTTON_UNINSTALLING_8, x.Z.Messages.GAME_ACTION_BUTTON_UNINSTALLING_9, x.Z.Messages.GAME_ACTION_BUTTON_UNINSTALLING_10];
class Z extends (a = l.Component) {
	get analyticsLocation() {
		return {
			...this.props.analyticsContext.location,
			object: R.qAy.BUTTON_CTA
		};
	}
	getText(e) {
		switch (('uninstalling' !== e && (this._uninstallStringIndex = null), e)) {
			case 'install':
			case 'unsupported_os':
				return x.Z.Messages.GAME_ACTION_BUTTON_INSTALL;
			case 'update':
				return x.Z.Messages.GAME_ACTION_BUTTON_UPDATE;
			case 'paused':
				return x.Z.Messages.GAME_ACTION_BUTTON_PAUSED;
			case 'locate':
				return x.Z.Messages.GAME_ACTION_BUTTON_LOCATE;
			case 'uninstalling':
				let t = L();
				return null == this._uninstallStringIndex && (this._uninstallStringIndex = Math.floor(Math.random() * t.length)), t[this._uninstallStringIndex];
			case 'queued':
				return x.Z.Messages.GAME_ACTION_BUTTON_QUEUED;
			case 'downloading':
				return x.Z.Messages.GAME_ACTION_BUTTON_DOWNLOADING;
			case 'preorder_wait':
				return x.Z.Messages.GAME_ACTION_BUTTON_PREORDER_WAIT;
			case 'add_to_library':
				return x.Z.Messages.GAME_ACTION_BUTTON_ADD_TO_LIBRARY;
			default:
				throw Error('Unexpected button state');
		}
	}
	getButtonState() {
		let { libraryApplication: e, dispatchState: t, actionState: n } = this.props;
		if (e.isHidden()) return 'add_to_library';
		if (e.isPreorder()) return 'preorder_wait';
		let i = null != n ? v[n] : null;
		return null != i ? i : null != t && t.type === R.vxO.UNINSTALLING ? 'uninstalling' : (0, p.isWeb)() ? 'play' : 'unsupported_os';
	}
	renderPlayButton() {
		let { libraryApplication: e, fullWidth: t, size: n, color: i, customDisabledColor: a, isPlayShiny: s, onDropdownOpen: l, onDropdownClose: o, analyticsListSort: c, analyticsListIndex: u } = this.props;
		return (0, r.jsx)(A.Z, {
			applicationId: e.id,
			libraryApplication: e,
			fullWidth: t,
			size: n,
			color: i,
			customDisabledColor: a,
			isShiny: s,
			onDropdownOpen: l,
			onDropdownClose: o,
			analyticsListSort: c,
			analyticsListIndex: u
		});
	}
	renderDisabledButton(e, t) {
		let { className: n, fullWidth: i, size: a, customDisabledColor: s, tooltipPosition: l } = this.props;
		return (0, r.jsxs)('div', {
			className: O.disabledButtonWrapper,
			children: [
				(0, r.jsxs)(u.Button, {
					className: n,
					fullWidth: i,
					size: a,
					color: null != s ? s : O.disabledButtonColor,
					disabled: !0,
					children: [this.getText(e), this.renderProgressBar()]
				}),
				(0, r.jsx)(u.Tooltip, {
					text: t,
					position: l,
					children: (e) =>
						(0, r.jsx)('div', {
							className: O.disabledButtonOverlay,
							...e
						})
				})
			]
		});
	}
	renderProgressBar() {
		let { hideProgress: e, dispatchState: t } = this.props;
		if (e) return null;
		let n = C.KJ(t);
		if (null == n) return null;
		let i = n.type === R.vxO.UNINSTALLING ? u.Progress.INDETERMINATE : C.xI(Number(n.progress), Number(n.total));
		return (0, r.jsx)(u.Progress, {
			percent: i,
			size: u.Progress.Sizes.XSMALL,
			foregroundColor: n.paused ? c.Z.unsafe_rawColors.PRIMARY_500.css : c.Z.unsafe_rawColors.GREEN_360.css,
			backgroundColor: c.Z.unsafe_rawColors.TRANSPARENT.css,
			className: O.progress
		});
	}
	renderActionButton(e, t) {
		let { className: n, fullWidth: i, size: a, color: s, isCloudSyncing: l } = this.props;
		return (0, r.jsxs)(u.Button, {
			className: n,
			fullWidth: i,
			size: a,
			color: null != s ? s : u.Button.Colors.GREEN,
			submitting: 'uninstalling' === e || l,
			onClick: (e) => this.handleClick(e, t),
			children: [this.getText(e), this.renderProgressBar()]
		});
	}
	render() {
		let { hasNoBuild: e, libraryApplication: t } = this.props,
			n = this.getButtonState();
		if ('play' === n) return this.renderPlayButton();
		if ('preorder_wait' === n)
			return this.renderDisabledButton(
				n,
				(function (e) {
					let t = g.en(e.sku);
					return null != t ? x.Z.Messages.GAME_ACTION_BUTTON_PREORDER_WAIT_TOOLTIP.format({ date: t }) : null;
				})(t)
			);
		if ('unsupported_os' === n) return this.renderDisabledButton(n, x.Z.Messages.GAME_ACTION_BUTTON_UNAVAILABLE_TOOLTIP.format({ operatingSystem: x.Z.Messages.WINDOWS }));
		if ('install' === n && e) return this.renderDisabledButton(n, x.Z.Messages.GAME_ACTION_BUTTON_CANNOT_INSTALL);
		let i = this.onClickHandlers[n];
		return null == i ? this.renderDisabledButton(n) : this.renderActionButton(n, i);
	}
	constructor(...e) {
		super(...e),
			M(this, '_uninstallStringIndex', null),
			M(this, 'handleAddToLibrary', async () => {
				try {
					let { libraryApplication: e } = this.props;
					await d.h(e.id, e.branchId, e.getFlags() & ~R.eHb.HIDDEN), (0, I.uL)(R.Z5c.APPLICATION_LIBRARY);
				} catch (e) {
					new E.Z('LibraryApplicationButton').error(e);
				}
			}),
			M(this, 'handleInstall', () => {
				let { libraryApplication: e, source: t } = this.props;
				S.installApplication(e.id, e.branchId, t);
			}),
			M(this, 'handleUpdate', () => {
				let { libraryApplication: e } = this.props;
				S.updateApplication(e.id, e.branchId);
			}),
			M(this, 'onClickHandlers', {
				add_to_library: this.handleAddToLibrary,
				install: this.handleInstall,
				update: this.handleUpdate
			}),
			M(this, 'handleClick', (e, t) => {
				let { onClick: n } = this.props;
				null == n || n(e), t(e);
			});
	}
}
function P(e) {
	let { libraryApplication: t } = e,
		n = (0, _.O)(),
		[i, a] = (0, o.Wu)([N.Z, f.Z], () => [(0, T.i)(t, N.Z, f.Z), N.Z.getState(t.id, t.branchId)], [t]),
		s = (0, o.e7)([h.Z], () => h.Z.isSyncing(t.id, t.branchId), [t]),
		l = (0, o.e7)([m.Z], () => m.Z.hasNoBuild(t.id, t.branchId), [t]);
	return (0, r.jsx)(Z, {
		...e,
		analyticsContext: n,
		actionState: i,
		dispatchState: a,
		isCloudSyncing: s,
		hasNoBuild: l
	});
}
M(Z, 'defaultProps', {
	fullWidth: !1,
	size: u.Button.Sizes.LARGE,
	hideProgress: !1,
	isPlayShiny: !1,
	tooltipPosition: 'top'
}),
	M(Z, 'ButtonStates', i);
