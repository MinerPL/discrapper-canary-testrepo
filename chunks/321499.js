t.d(s, {
	Z: function () {
		return h;
	}
});
var n = t(735250),
	a = t(470079),
	i = t(120356),
	r = t.n(i),
	o = t(442837),
	l = t(780384),
	c = t(481060),
	d = t(846027),
	_ = t(600164),
	E = t(921801),
	u = t(131951),
	I = t(210887),
	T = t(996073),
	S = t(526761),
	N = t(726985),
	C = t(689938),
	m = t(224499);
let A = t(651714),
	O = t(297166);
function g() {
	let { experimentalEncoders: e } = (0, o.cj)([u.Z], () => ({ experimentalEncoders: u.Z.getExperimentalEncoders() }));
	return (0, n.jsx)(E.F, {
		setting: N.s6.VOICE_AND_VIDEO_ADVANCED_CODECS_VIDEO_EXPERIMENTAL_ENCODERS,
		children: (0, n.jsx)(c.FormSwitch, {
			className: r()(m.marginTop8, m.marginBottom20),
			value: e,
			onChange: (e) => d.Z.setExperimentalEncoders(e),
			disabled: !1,
			children: C.Z.Messages.EXPERIMENTAL_ENCODERS
		})
	});
}
function h() {
	let e = (0, o.e7)([I.Z], () => I.Z.theme),
		{ openH264: s, hardwareEncoding: t } = (0, o.cj)([u.Z], () => ({
			openH264: u.Z.getOpenH264(),
			hardwareEncoding: u.Z.getHardwareEncoding()
		})),
		i = a.useRef(null);
	return (
		(0, T.Z)(i, S.KQ.VoiceAndVideoScrollPositions.HARDWARE_ACCELERATION),
		(0, n.jsxs)(n.Fragment, {
			children: [
				(0, n.jsx)(E.F, {
					setting: N.s6.VOICE_AND_VIDEO_ADVANCED_CODECS_AUDIO,
					children: (0, n.jsx)(c.FormSection, {
						className: m.marginBottom20,
						title: C.Z.Messages.USER_SETTINGS_VOICE_CODEC_TITLE,
						children: (0, n.jsx)(c.FormNotice, {
							className: m.marginBottom20,
							type: c.FormNoticeTypes.PRIMARY,
							imageData: {
								src: (0, l.ap)(e) ? A : O,
								width: 70,
								height: 40
							},
							align: _.Z.Align.CENTER,
							body: C.Z.Messages.USER_SETTINGS_VOICE_CODEC_DESCRIPTION
						})
					})
				}),
				(0, n.jsx)(E.F, {
					setting: N.s6.VOICE_AND_VIDEO_ADVANCED_CODECS_VIDEO,
					children: (0, n.jsxs)(c.FormSection, {
						className: m.marginBottom20,
						title: C.Z.Messages.USER_SETTINGS_VOICE_VIDEO_CODEC_TITLE,
						children: [
							(0, n.jsx)(E.F, {
								setting: N.s6.VOICE_AND_VIDEO_ADVANCED_CODECS_VIDEO_OPENH264,
								children: (0, n.jsx)(c.FormSwitch, {
									className: r()(m.marginTop8, m.marginBottom20),
									value: s,
									onChange: (e) => d.Z.setOpenH264(e),
									disabled: !1,
									children: C.Z.Messages.USER_SETTINGS_VOICE_OPEN_H264
								})
							}),
							(0, n.jsx)('div', {
								style: { scrollMarginTop: '48px' },
								ref: i
							}),
							(0, n.jsx)(E.F, {
								setting: N.s6.VOICE_AND_VIDEO_ADVANCED_CODECS_VIDEO_HARDWARE_ACCELERATION,
								children: (0, n.jsx)(c.FormSwitch, {
									className: r()(m.marginTop8, m.marginBottom20),
									value: t,
									onChange: (e) => d.Z.setHardwareEncoding(e),
									note: C.Z.Messages.FORM_HELP_HARDWARE_ENCODING,
									children: C.Z.Messages.USER_SETTINGS_VOICE_HARDWARE_ENCODING
								})
							}),
							(0, n.jsx)(g, {})
						]
					})
				})
			]
		})
	);
}
