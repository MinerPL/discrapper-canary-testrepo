t(47120);
var l = t(735250),
	s = t(470079),
	a = t(512722),
	r = t.n(a),
	i = t(442837),
	o = t(704215),
	c = t(481060),
	u = t(605236),
	d = t(706140),
	m = t(765585),
	E = t(556296),
	_ = t(63063),
	S = t(13140),
	g = t(435064),
	h = t(894694),
	C = t(39604),
	I = t(981631),
	N = t(921944),
	x = t(689938),
	Z = t(759041),
	f = t(458623);
let R = (e) => {
	let { clipsEnabled: n, isAnimationDone: t, guildId: a, children: r } = e,
		E = (0, i.e7)([g.Z], () => g.Z.getHardwareClassification()),
		S = E === h.x.MEETS_MINIMUM || E === h.x.UNKNOWN,
		f = E === h.x.BELOW_MINIMUM,
		R = t && (S || f) && !n,
		[A, T] = (0, d.cv)(R ? [o.z.CLIPS_ONBOARDING_GO_LIVE_COACHMARK] : []),
		v = A === o.z.CLIPS_ONBOARDING_GO_LIVE_COACHMARK;
	s.useEffect(() => {
		n && (0, u.EW)(o.z.CLIPS_ONBOARDING_GO_LIVE_COACHMARK, { forceTrack: !0 });
	}, [n]);
	let L = (e, n) => {
		e.stopPropagation(), e.preventDefault(), null == n || n(), T(N.L.UNKNOWN);
	};
	return (0, l.jsx)(c.Popout, {
		shouldShow: v,
		position: 'right',
		align: 'center',
		renderPopout: (e) => {
			let { closePopout: n } = e;
			return (0, l.jsx)(m.Z, {
				dismissibleContent: o.z.CLIPS_ONBOARDING_GO_LIVE_COACHMARK,
				shouldUseHorizontalButtons: !0,
				inlineArt: !0,
				artClassName: Z.clipsEducationArt,
				position: 'right',
				header: x.Z.Messages.CLIPS_ONBOARDING_GO_LIVE_DEFAULT_DISABLED_COACHMARK_TITLE,
				headerClassName: Z.clipsEducationHeader,
				body: (0, l.jsxs)(l.Fragment, {
					children: [
						(0, l.jsx)(c.Text, {
							variant: 'text-sm/normal',
							color: 'always-white',
							children: x.Z.Messages.CLIPS_ONBOARDING_GO_LIVE_DEFAULT_DISABLED_COACHMARK_BODY
						}),
						f
							? (0, l.jsx)(c.Text, {
									variant: 'text-sm/normal',
									color: 'always-white',
									className: Z.warningText,
									children: x.Z.Messages.CLIPS_ONBOARDING_GO_LIVE_DEFAULT_DISABLED_COACHMARK_HARDWARE_IMPACT_WARNING.format({ url: _.Z.getArticleURL(I.BhN.CLIPS) })
								})
							: null
					]
				}),
				tryItText: x.Z.Messages.CLIPS_SETTINGS_ENABLE_CLIPS,
				onTryFeature: (e) => {
					(0, C.em)({
						clipsEnabled: !0,
						guildId: a,
						trackAnalytics: !0
					}),
						L(e);
				},
				onClose: (e) => {
					L(e, n);
				}
			});
		},
		children: () => r
	});
};
n.Z = function (e) {
	let { isAnimationDone: n, guildId: t } = e,
		s = (0, i.e7)([g.Z], () => g.Z.getSettings().clipsEnabled),
		a = (0, i.e7)([E.Z], () => E.Z.getKeybindForAction(I.kg4.SAVE_CLIP));
	r()(null != a, 'Clips keybind should be set');
	let o = S.BB(a.shortcut, !0);
	return (0, l.jsx)(c.FormItem, {
		title: x.Z.Messages.CLIPS_SETTINGS,
		titleClassName: f.formItemTitle,
		className: f.modalContent,
		children: (0, l.jsxs)('div', {
			className: Z.container,
			children: [
				(0, l.jsx)(R, {
					clipsEnabled: s,
					guildId: t,
					isAnimationDone: n,
					children: (0, l.jsx)(c.FormSwitch, {
						className: Z.formSwitch,
						value: s,
						onChange: (e) =>
							(0, C.em)({
								clipsEnabled: e,
								guildId: t,
								trackAnalytics: !0
							}),
						hideBorder: !0,
						children: x.Z.Messages.CLIPS_SETTINGS_ENABLE_CLIPS
					})
				}),
				(0, l.jsx)(c.Text, {
					variant: 'text-xs/normal',
					color: 'interactive-normal',
					className: Z.description,
					children: x.Z.Messages.CLIPS_SETTINGS_HELP_IN_GO_LIVE_CTA.format({
						keybind: o,
						keybindHook: () =>
							(0, l.jsx)('span', {
								className: Z.keybindHintKeys,
								children: (0, l.jsx)(c.KeyCombo, {
									className: Z.keybindShortcut,
									shortcut: o
								})
							})
					})
				})
			]
		})
	});
};
