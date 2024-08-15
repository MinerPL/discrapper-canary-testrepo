n.r(t),
	n.d(t, {
		enable: function () {
			return T;
		},
		isNotSupported: function () {
			return I;
		},
		trackToggleSelfMute: function () {
			return g;
		}
	});
var r = n(735250);
n(470079);
var i = n(481060),
	a = n(570140),
	s = n(710845),
	o = n(131951),
	l = n(556296),
	u = n(451478),
	c = n(626135),
	d = n(554174),
	_ = n(981631),
	E = n(761274),
	f = n(689938);
let h = new s.Z('AudioActionCreators');
function p() {
	(0, i.openModalLazy)(async () => {
		let { default: e } = await n.e('82935').then(n.bind(n, 431583));
		return (t) =>
			(0, r.jsx)(e, {
				source: 'Unsupported Browser',
				...t
			});
	});
}
function I() {
	return (
		!o.Z.isSupported() &&
		((0, i.openModal)((e) =>
			(0, r.jsx)(i.ConfirmModal, {
				header: f.Z.Messages.UNSUPPORTED_BROWSER,
				confirmText: f.Z.Messages.DOWNLOAD_APP,
				cancelText: f.Z.Messages.CANCEL,
				onConfirm: p,
				confirmButtonColor: i.Button.Colors.BRAND,
				...e,
				children: (0, r.jsx)(i.Text, {
					variant: 'text-md/normal',
					children: f.Z.Messages.UNSUPPORTED_BROWSER_DETAILS
				})
			})
		),
		!0)
	);
}
function m(e) {
	c.default.track(_.rMx.PERMISSIONS_ACKED, {
		type: 'audio',
		action: e
	});
}
function T() {
	let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
	return I()
		? Promise.resolve(!1)
		: (c.default.track(_.rMx.PERMISSIONS_REQUESTED, { type: 'audio' }),
			o.Z.getMediaEngine()
				.enable()
				.then(
					() => {
						a.Z.dispatch({
							type: 'MEDIA_ENGINE_SET_AUDIO_ENABLED',
							enabled: !0,
							unmute: e
						}),
							m(E.PQ.ACCEPTED);
					},
					(e) => {
						switch (e) {
							case _.ETv.NO_DEVICES_FOUND:
								m(E.PQ.NO_DEVICES);
								break;
							case _.ETv.PERMISSION_DENIED:
								m(E.PQ.DENIED);
								break;
							case _.ETv.PERMISSION_DISMISSED:
								m(E.PQ.DISMISSED);
								break;
							default:
								m(E.PQ.ERROR), h.warn('unknown getUserMedia error: '.concat(e));
						}
					}
				)
				.then(() => !0));
}
function g(e) {
	let { usedKeybind: t = !1 } = e,
		n = l.Z.getKeybindForAction(_.kg4.TOGGLE_MUTE, !1, !0);
	c.default.track(_.rMx.INPUT_MUTE_TOGGLED, {
		enabled: !o.Z.isSelfMute(),
		custom_keybind_assigned: null != n && n.id !== l.E.id,
		used_keybind: t,
		app_in_focus: u.Z.isFocused(),
		overlay_activated: null != (0, d.Z)()
	});
}
