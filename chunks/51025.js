n.d(t, {
	A1: function () {
		return O;
	},
	LO: function () {
		return T;
	},
	S1: function () {
		return m;
	},
	Wx: function () {
		return y;
	},
	XT: function () {
		return D;
	},
	al: function () {
		return R;
	},
	cG: function () {
		return g;
	},
	li: function () {
		return S;
	},
	ob: function () {
		return I;
	},
	pC: function () {
		return A;
	},
	v4: function () {
		return N;
	},
	wO: function () {
		return v;
	},
	wi: function () {
		return C;
	}
}),
	n(411104);
var r = n(544891),
	i = n(570140),
	a = n(812206),
	s = n(594190),
	o = n(703656),
	l = n(695346),
	u = n(391690),
	c = n(626135),
	d = n(129542),
	_ = n(877481),
	E = n(830168),
	f = n(57513),
	h = n(981631),
	p = n(689938);
function m(e, t) {
	E.Z.init({
		userToken: e,
		userId: t,
		installPaths: u.Z.installationPaths,
		platform: (0, d.D)(),
		stateCallback: (e) => {
			i.Z.dispatch({
				type: 'DISPATCH_APPLICATION_STATE_UPDATE',
				state: e
			});
		},
		errorCallback: (e) => {
			i.Z.dispatch({
				type: 'DISPATCH_APPLICATION_ERROR',
				error: e
			});
		}
	});
}
function I() {
	E.Z.destroy();
}
function T(e) {
	let { application: t, branchId: n, buildId: r, manifestIds: a, installationPath: s, analyticsLocation: o } = e;
	E.Z.setTargetManifest({
		applicationId: t.id,
		applicationName: t.name,
		applicationIcon: t.icon,
		branchId: n,
		buildId: r,
		manifestIds: a,
		installationPath: s
	}),
		i.Z.dispatch({
			type: 'DISPATCH_APPLICATION_INSTALL',
			applicationId: t.id,
			branchId: n,
			installationPath: s
		}),
		c.default.track(h.rMx.LIBRARY_INSTALL_INITIATED, {
			application_id: t.id,
			application_name: t.name,
			sku_id: t.primarySkuId,
			location: o
		});
}
function g(e, t, n) {
	(0, f.l)(e.id, t).then(() => {
		i.Z.dispatch({
			type: 'DISPATCH_APPLICATION_REPAIR',
			applicationId: e.id,
			branchId: t
		});
	}),
		c.default.track(h.rMx.LIBRARY_REPAIR_INITIATED, {
			application_id: e.id,
			application_name: e.name,
			sku_id: e.primarySkuId,
			location: n
		});
}
function S(e, t, n, r) {
	let a = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
	!(function (e, t, n, r) {
		if (s.ZP.getRunningDiscordApplicationIds().includes(e.id)) return;
		let i = u.Z.getInstallationPath(e.id, t);
		if (null == i) throw Error('Missing installation path for application: '.concat(e.id, ' ').concat(t));
		E.Z.setTargetManifest({
			applicationId: e.id,
			applicationName: e.name,
			applicationIcon: e.icon,
			branchId: t,
			buildId: n,
			manifestIds: r,
			installationPath: i
		});
	})(e, t, n, r),
		i.Z.dispatch({
			type: 'DISPATCH_APPLICATION_UPDATE',
			applicationId: e.id,
			branchId: t,
			automatic: a
		});
}
function A(e, t, n) {
	let r = a.Z.getApplication(e);
	null != r &&
		(_.Z.removeShortcuts(r.name),
		c.default.track(h.rMx.LIBRARY_UNINSTALL_INITIATED, {
			application_id: r.id,
			application_name: r.name,
			sku_id: r.primarySkuId,
			location: n
		})),
		E.Z.uninstall(e, t),
		i.Z.dispatch({
			type: 'DISPATCH_APPLICATION_UNINSTALL',
			applicationId: e,
			branchId: t
		});
}
function N() {
	E.Z.resume();
}
function v() {
	E.Z.pause();
}
function O(e, t) {
	i.Z.dispatch({
		type: 'DISPATCH_APPLICATION_MOVE_UP',
		applicationId: e,
		branchId: t
	});
}
function R(e, t) {
	E.Z.cancel(e, t),
		i.Z.dispatch({
			type: 'DISPATCH_APPLICATION_CANCEL',
			applicationId: e,
			branchId: t
		});
}
function C(e, t) {
	i.Z.dispatch({
		type: 'DISPATCH_APPLICATION_REMOVE_FINISHED',
		applicationId: e,
		branchId: t
	});
}
function y(e, t) {
	let n = a.Z.getApplication(e);
	null != n && _.Z.createShortcuts(l.Xc.getSetting(), l.Pe.getSetting(), n.name, n.id, t.installPath);
}
function D(e, t) {
	let i = a.Z.getApplication(e);
	r.tn.post({
		url: h.ANM.LIBRARY_APPLICATION_INSTALLED(e, e),
		oldFormErrors: !0
	}),
		null != i &&
			(_.Z.createShortcuts(l.Xc.getSetting(), l.Pe.getSetting(), i.name, i.id, t.installPath),
			Promise.resolve()
				.then(n.bind(n, 292556))
				.then((e) => {
					let { default: t } = e;
					t.showNotification(
						i.getIconURL(64),
						p.Z.Messages.GAME_LIBRARY_NOTIFICATION_GAME_INSTALLED_TITLE,
						p.Z.Messages.GAME_LIBRARY_NOTIFICATION_GAME_INSTALLED_BODY.format({ name: i.name }),
						{ notif_type: 'Game Library Game Installed' },
						{
							onClick: () => (0, o.uL)(h.Z5c.APPLICATION_LIBRARY),
							omitViewTracking: !0
						}
					);
				}));
}
