t.d(s, {
	Z: function () {
		return L;
	}
}),
	t(653041);
var n,
	a,
	i = t(735250);
t(470079);
var r = t(120356),
	o = t.n(r),
	l = t(442837),
	c = t(780384),
	d = t(481060),
	_ = t(846027),
	E = t(600164),
	u = t(313201),
	I = t(111672),
	T = t(921801),
	S = t(463395),
	N = t(131951),
	C = t(626135),
	m = t(63063),
	A = t(210887),
	O = t(726985),
	g = t(981631),
	h = t(689938),
	p = t(224499);
let R = t(775322),
	x = t(853453),
	M = (0, u.hQ)();
((a = n || (n = {}))[(a.NONE = 0)] = 'NONE'), (a[(a.STANDARD = 1)] = 'STANDARD'), (a[(a.KRISP = 2)] = 'KRISP');
let f = {
	page: g.ZY5.USER_SETTINGS,
	section: g.jXE.SETTINGS_VOICE_AND_VIDEO
};
function D(e) {
	let s = e.currentTarget;
	C.default.track(g.rMx.NOISE_CANCELLATION_LINK_CLICKED, {
		text: s.text,
		href: s.href,
		location: {
			page: g.ZY5.USER_SETTINGS,
			section: g.jXE.SETTINGS_VOICE_AND_VIDEO
		}
	});
}
function P() {
	let e = (0, l.e7)([A.Z], () => A.Z.theme),
		{
			noiseCancellation: s,
			noiseSuppression: t,
			noiseSuppressionSupported: n,
			noiseCancellationSupported: a
		} = (0, l.cj)([N.Z], () => ({
			noiseCancellation: N.Z.getNoiseCancellation(),
			noiseSuppression: N.Z.getNoiseSuppression(),
			noiseSuppressionSupported: N.Z.isNoiseSuppressionSupported(),
			noiseCancellationSupported: N.Z.isNoiseCancellationSupported()
		}));
	if (!n && !a) return null;
	let r = [];
	return (
		a &&
			r.push({
				name: h.Z.Messages.USER_SETTINGS_NOISE_CANCELLATION_KRISP,
				value: 2
			}),
		n &&
			r.push({
				name: h.Z.Messages.USER_SETTINGS_NOISE_CANCELLATION_STANDARD,
				value: 1
			}),
		r.push({
			name: h.Z.Messages.USER_SETTINGS_NOISE_CANCELLATION_DISABLED,
			value: 0
		}),
		(0, i.jsxs)(d.FormSection, {
			className: p.marginBottom20,
			children: [
				(0, i.jsx)(d.FormTitle, {
					id: M,
					tag: d.FormTitleTags.H3,
					className: p.marginBottom8,
					children: h.Z.Messages.NOISE_SUPPRESSION
				}),
				(0, i.jsx)(d.FormText, {
					type: d.FormText.Types.DESCRIPTION,
					className: p.marginBottom8,
					children: h.Z.Messages.USER_SETTINGS_NOISE_CANCELLATION_DESCRIPTION
				}),
				(0, i.jsx)(d.RadioGroup, {
					options: r,
					onChange: (e) => {
						_.Z.setNoiseCancellation(2 === e.value, f), _.Z.setNoiseSuppression(1 === e.value, f);
					},
					value: s ? 2 : t ? 1 : 0
				}),
				a &&
					(0, i.jsx)(d.FormNotice, {
						className: p.marginBottom8,
						type: d.FormNoticeTypes.PRIMARY,
						imageData: {
							src: (0, c.ap)(e) ? R : x,
							width: 70,
							height: 40
						},
						align: E.Z.Align.CENTER,
						body: (0, i.jsx)(d.Anchor, {
							href: m.Z.getArticleURL(g.BhN.NOISE_SUPPRESSION),
							onClick: D,
							children: h.Z.Messages.LEARN_MORE
						})
					}),
				(0, i.jsx)(d.FormDivider, {})
			]
		})
	);
}
function L() {
	let {
			inputMode: e,
			inputDeviceId: s,
			echoCancellation: t,
			automaticGainControl: n,
			vadAutoThreshold: a,
			vadUseKrisp: r,
			sidechainCompression: c
		} = (0, l.cj)([N.Z], () => ({
			inputMode: N.Z.getMode(),
			inputDeviceId: N.Z.getInputDeviceId(),
			echoCancellation: N.Z.getEchoCancellation(),
			automaticGainControl: N.Z.getAutomaticGainControl(),
			vadAutoThreshold: N.Z.getModeOptions().autoThreshold,
			vadUseKrisp: N.Z.getModeOptions().vadUseKrisp,
			sidechainCompression: N.Z.getSidechainCompression()
		})),
		{
			hasEchoCancellation: E,
			hasNoiseSuppression: u,
			hasAutomaticGainControl: C
		} = (0, l.cj)(
			[S.Z],
			() => ({
				hasEchoCancellation: S.Z.hasEchoCancellation(s),
				hasNoiseSuppression: S.Z.hasNoiseSuppression(s),
				hasAutomaticGainControl: S.Z.hasAutomaticGainControl(s)
			}),
			[s]
		),
		m = E || u || C,
		A = e === g.pM4.VOICE_ACTIVITY && a,
		{ sidechainAvailable: R } = I.Z.getCurrentConfig({ location: 'UserSettingsVoiceProcessing' });
	return (0, i.jsxs)(d.FormSection, {
		className: p.marginBottom20,
		title: h.Z.Messages.FORM_LABEL_VOICE_PROCESSING,
		children: [
			m &&
				(0, i.jsx)(d.FormText, {
					className: p.marginBottom20,
					type: d.FormText.Types.DESCRIPTION,
					children: h.Z.Messages.FORM_HELP_CERTIFIED_VOICE_PROCESSING
				}),
			(0, i.jsx)(T.F, {
				setting: O.s6.VOICE_AND_VIDEO_ADVANCED_PROCESSING_ECHO_CANCELLATION,
				children: (0, i.jsx)(d.FormSwitch, {
					className: o()(p.marginTop8, p.marginBottom20),
					value: t,
					onChange: (e) =>
						_.Z.setEchoCancellation(e, {
							page: g.ZY5.USER_SETTINGS,
							section: g.jXE.SETTINGS_VOICE_AND_VIDEO
						}),
					disabled: E,
					children: h.Z.Messages.ECHO_CANCELLATION
				})
			}),
			R &&
				(0, i.jsx)(T.F, {
					setting: O.s6.VOICE_AND_VIDEO_ADVANCED_PROCESSING_SIDECHAIN_COMPRESSION,
					children: (0, i.jsx)(d.FormSwitch, {
						className: o()(p.marginTop8, p.marginBottom20),
						value: c,
						onChange: (e) => _.Z.setSidechainCompression(e),
						note: h.Z.Messages.USER_SETTINGS_SIDECHAIN_COMPRESSION,
						children: h.Z.Messages.SIDECHAIN_COMPRESSION
					})
				}),
			(0, i.jsx)(T.F, {
				setting: O.s6.VOICE_AND_VIDEO_ADVANCED_PROCESSING_NOISE_SUPPRESSION,
				children: (0, i.jsx)(P, {})
			}),
			(0, i.jsx)(T.F, {
				setting: O.s6.VOICE_AND_VIDEO_ADVANCED_PROCESSING_ADVANCED_VOICE_ACTIVITY,
				children: (0, i.jsx)(d.FormSwitch, {
					value: r,
					onChange: (s) => _.Z.setMode(e, { vadUseKrisp: s }),
					note: h.Z.Messages.USER_SETTINGS_DISABLE_ADVANCED_VOICE_ACTIVITY,
					disabled: !A,
					children: h.Z.Messages.ADVANCED_VOICE_ACTIVITY
				})
			}),
			(0, i.jsx)(T.F, {
				setting: O.s6.VOICE_AND_VIDEO_ADVANCED_PROCESSING_AUTOMATIC_GAIN_CONTROL,
				children: (0, i.jsx)(d.FormSwitch, {
					className: '',
					value: n,
					onChange: (e) =>
						_.Z.setAutomaticGainControl(e, {
							page: g.ZY5.USER_SETTINGS,
							section: g.jXE.SETTINGS_VOICE_AND_VIDEO
						}),
					note: h.Z.Messages.USER_SETTINGS_AUTOMATIC_GAIN_CONTROL,
					disabled: C,
					children: h.Z.Messages.AUTOMATIC_GAIN_CONTROL
				})
			})
		]
	});
}
