n.d(t, {
	Y7: function () {
		return u;
	},
	oc: function () {
		return d;
	},
	pR: function () {
		return c;
	}
}),
	n(724458);
var r = n(990547),
	i = n(283693),
	a = n(570140),
	s = n(573261),
	o = n(930441),
	l = n(981631);
async function u() {
	try {
		let e = await s.Z.get({
			url: l.ANM.EMAIL_SETTINGS,
			trackedActionData: {
				event: r.NetworkActionNames.EMAIL_SETTINGS_FETCH,
				properties: (e) => {
					var t;
					let n = null == e ? void 0 : null === (t = e.body) || void 0 === t ? void 0 : t.initialized;
					return (0, i.iG)({ initialized: n });
				}
			}
		});
		return (
			a.Z.dispatch({
				type: 'EMAIL_SETTINGS_FETCH_SUCCESS',
				settings: e.body
			}),
			e.body
		);
	} catch {
		a.Z.dispatch({ type: 'EMAIL_SETTINGS_FETCH_FAILURE' });
	}
}
async function c(e, t) {
	a.Z.dispatch({
		type: 'EMAIL_SETTINGS_UPDATE',
		updates: { [e]: t }
	});
	try {
		let n = await s.Z.patch({
			url: l.ANM.EMAIL_SETTINGS,
			body: { settings: { categories: { [e]: t } } },
			trackedActionData: {
				event: r.NetworkActionNames.EMAIL_SETTINGS_UPDATE,
				properties: {
					category: e,
					value: t
				}
			}
		});
		a.Z.dispatch({
			type: 'EMAIL_SETTINGS_UPDATE_SUCCESS',
			settings: n.body
		});
	} catch (e) {
		a.Z.dispatch({ type: 'EMAIL_SETTINGS_UPDATE_FAILURE' });
	}
}
async function d() {
	let e = o.M0.reduce(
		(e, t) => ({
			...e,
			[t]: !1
		}),
		{}
	);
	a.Z.dispatch({
		type: 'EMAIL_SETTINGS_UPDATE',
		updates: e
	});
	try {
		let t = await s.Z.patch({
			url: l.ANM.EMAIL_SETTINGS,
			body: { settings: { categories: e } },
			trackedActionData: {
				event: r.NetworkActionNames.EMAIL_SETTINGS_UPDATE,
				properties: {
					category: 'marketing',
					value: !1
				}
			}
		});
		a.Z.dispatch({
			type: 'EMAIL_SETTINGS_UPDATE_SUCCESS',
			settings: t.body
		});
	} catch (e) {
		a.Z.dispatch({ type: 'EMAIL_SETTINGS_UPDATE_FAILURE' });
	}
}
