s.d(n, {
	S: function () {
		return x;
	},
	Z: function () {
		return A;
	}
}),
	s(47120);
var t = s(735250),
	a = s(470079),
	o = s(120356),
	l = s.n(o),
	i = s(442837),
	c = s(846519),
	r = s(481060),
	d = s(846027),
	u = s(695346),
	_ = s(716161),
	E = s(938117),
	O = s(131951),
	g = s(626135),
	m = s(981631),
	I = s(689938),
	p = s(598609);
function x() {
	let [e, n] = a.useState(!1),
		s = (0, i.e7)([O.Z], () => O.Z.isMediaFilterSettingLoading());
	return (a.useEffect(() => {
		let e = new c.V7();
		return (
			s
				? e.start(150, () => {
						n(!0);
					})
				: (e.stop(), n(!1)),
			() => e.stop()
		);
	}, [s]),
	e)
		? (0, t.jsx)('div', {
				className: p.filterLoadingIndicator,
				children: (0, t.jsx)(r.Spinner, {})
			})
		: null;
}
function A(e) {
	let {
			hideDeviceSelector: n = !1,
			hideDeviceHeader: s = !1,
			onLearnMore: o,
			selectedBackgroundOption: c,
			onSelectBackgroundOption: x,
			renderCamera: A,
			hidePreviewToggle: C = !1,
			showSmallBackgroundOptions: N = !1
		} = e,
		M = (0, i.e7)([O.Z], () => O.Z.getVideoDeviceId()),
		R = (0, i.Wu)([O.Z], () => Object.values(O.Z.getVideoDevices())),
		k = u.qF.useSetting(),
		D = R.map((e) => {
			let { id: n, name: s } = e;
			return {
				value: n,
				label: s
			};
		});
	return (
		a.useEffect(() => {
			(0, _.XV)();
		}, []),
		(0, t.jsxs)(t.Fragment, {
			children: [
				A(M),
				O.Z.isEnabled()
					? null
					: (0, t.jsx)(r.Text, {
							className: p.permissionWarning,
							color: 'interactive-normal',
							variant: 'text-sm/normal',
							children: I.Z.Messages.FORM_WARNING_VIDEO_PREVIEW.format({ onEnableClick: d.Z.enable })
						}),
				C
					? null
					: (0, t.jsx)(r.FormSwitch, {
							className: p.previewToggle,
							note: I.Z.Messages.CAMERA_PREVIEW_ALWAYS_PREVIEW_NOTE,
							onChange: (e) => {
								u.qF.updateSetting(e), g.default.track(m.rMx.UPDATE_USER_SETTINGS_LOCAL, { always_preview_video: e });
							},
							value: k,
							hideBorder: !0,
							children: (0, t.jsx)('div', {
								className: p.cameraPreviewTitle,
								children: I.Z.Messages.CAMERA_PREVIEW_ALWAYS_PREVIEW
							})
						}),
				n
					? null
					: (0, t.jsxs)(t.Fragment, {
							children: [
								s
									? null
									: (0, t.jsx)(r.Heading, {
											className: p.spacingTop24,
											variant: 'eyebrow',
											color: 'header-secondary',
											children: I.Z.Messages.CAMERA_PREVIEW_CAMERA
										}),
								(0, t.jsx)(r.SingleSelect, {
									placeholder: I.Z.Messages.CHANGE_CAMERA,
									className: l()(p.selector, { [p.selectorNoHeader]: s }),
									options: D,
									value: M,
									onChange: (e) => d.Z.setVideoDevice(e)
								})
							]
						}),
				(0, t.jsx)(E.Z, {
					onLearnMore: o,
					selectedBackgroundOption: c,
					onSelectBackgroundOption: x,
					currentDeviceId: M,
					smallerBackgroundOptions: N
				})
			]
		})
	);
}
