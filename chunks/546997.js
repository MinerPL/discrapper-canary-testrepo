t.d(s, {
	Z: function () {
		return d;
	}
});
var n = t(735250);
t(470079);
var a = t(442837),
	i = t(481060),
	r = t(846027),
	o = t(131951),
	l = t(689938),
	c = t(224499);
function d() {
	let {
		videoHook: e,
		experimentalSoundshare: s,
		supportsVideoHook: t,
		supportsExperimentalSoundshare: d
	} = (0, a.cj)([o.Z], () => ({
		videoHook: o.Z.getVideoHook(),
		experimentalSoundshare: o.Z.getExperimentalSoundshare(),
		supportsVideoHook: o.Z.supportsVideoHook(),
		supportsExperimentalSoundshare: o.Z.supportsExperimentalSoundshare()
	}));
	return t || d
		? (0, n.jsxs)(i.FormSection, {
				className: c.marginBottom20,
				title: l.Z.Messages.FORM_LABEL_SCREENSHARE,
				children: [
					t &&
						(0, n.jsx)(i.FormSwitch, {
							value: e,
							onChange: (e) => r.Z.setVideoHook(e),
							note: l.Z.Messages.FORM_HELP_VIDEO_HOOK,
							children: l.Z.Messages.USER_SETTINGS_VOICE_VIDEO_HOOK_LABEL
						}),
					d &&
						(0, n.jsx)(i.FormSwitch, {
							value: s,
							onChange: (e) => r.Z.setExperimentalSoundshare(e),
							children: l.Z.Messages.USER_SETTINGS_VOICE_EXPERIMENTAL_SOUNDSHARE_LABEL
						})
				]
			})
		: null;
}
