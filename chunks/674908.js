a.d(t, {
	Z: function () {
		return y;
	}
}),
	a(47120);
var n = a(735250),
	l = a(470079),
	i = a(120356),
	r = a.n(i),
	o = a(952265),
	s = a(481060),
	u = a(239091),
	d = a(579806),
	c = a(889161),
	m = a(592125),
	p = a(430824),
	v = a(496675),
	f = a(594174),
	b = a(709054),
	h = a(39604),
	x = a(680056),
	g = a(678651),
	C = a(445229),
	_ = a(20437),
	j = a(356659),
	S = a(710111),
	I = a(689938),
	E = a(691306),
	T = a(413135).Buffer;
function y(e) {
	let { clip: t, channelId: i, clipName: y, onSetClipName: w, onClose: N } = e,
		{ videoPlayerRef: L, cropData: k, voiceAudioEnabled: R, setVoiceAudioEnabled: M, applicationAudioEnabled: P, setApplicationAudioEnabled: Z } = (0, _.S)(),
		[A, F] = l.useState(null),
		{ onShareClick: D } = (0, x.Z)({
			channelId: i,
			setExporting: (e) => F(null != e ? 'share' : null)
		});
	async function B() {
		var e;
		let l = m.Z.getChannel(i);
		F('export'), null === (e = L.current) || void 0 === e || e.pause();
		try {
			let e = await (0, h.rO)(t, {
				...k,
				applicationAudio: P,
				voiceAudio: R
			});
			(0, s.openModalLazy)(async () => {
				let { default: i } = await Promise.all([a.e('56035'), a.e('92701')]).then(a.bind(a, 758961)),
					r = (null == l ? void 0 : l.guild_id) != null ? p.Z.getGuild(l.guild_id) : null,
					o = null != r && (0, c.Gw)(r, v.Z, f.default).canCreateExpressions,
					s = null == y || '' === y ? (0, j.yl)(b.default.extractTimestamp(t.id)) : y,
					u = s.slice(0, S.Ek);
				return (t) =>
					(0, n.jsx)(i, {
						...t,
						showGuildPicker: !0,
						guildId: o ? (null == l ? void 0 : l.guild_id) : void 0,
						sourceFile: {
							file: new File([e], ''.concat(s, '.mp4'), { type: 'video/mp4' }),
							name: u
						}
					});
			});
		} catch (e) {
		} finally {
			F(null);
		}
	}
	async function O() {
		var e;
		F('export'), null === (e = L.current) || void 0 === e || e.pause();
		try {
			let e = await (0, h.rO)(t, {
					...k,
					applicationAudio: P,
					voiceAudio: R
				}),
				a = await e.arrayBuffer();
			await d.Z.fileManager.saveWithDialog(T.from(a), (0, j.EF)(t.id));
		} catch (e) {
		} finally {
			F(null);
		}
	}
	function H() {
		var e;
		null === (e = L.current) || void 0 === e || e.pause(),
			(0, s.openModalLazy)(async () => {
				let { default: e } = await a.e('15915').then(a.bind(a, 799677));
				return (a) =>
					(0, n.jsx)(e, {
						clip: t,
						...a,
						onClose: async () => {
							await a.onClose();
						},
						onAfterDelete: async () => {
							await a.onClose(), N();
						}
					});
			});
	}
	return (0, n.jsxs)('div', {
		className: E.clipForm,
		children: [
			(0, n.jsxs)('div', {
				className: r()(E.clipFormSection, E.editSection),
				children: [
					(0, n.jsx)(s.FormItem, {
						className: E.clipFormItem,
						title: I.Z.Messages.CLIPS_EDIT_TITLE,
						children: (0, n.jsx)(s.TextInput, {
							onChange: (e) => {
								'' === e ? w(void 0) : w(e);
							},
							value: y,
							minLength: j.XH,
							maxLength: j.MG,
							placeholder: I.Z.Messages.CLIPS_UNTITLED
						})
					}),
					(0, n.jsxs)('div', {
						className: E.clipFormSwitches,
						children: [
							(0, n.jsx)(s.FormSwitch, {
								onChange: Z,
								value: P,
								hideBorder: !0,
								children: I.Z.Messages.CLIPS_EDIT_GAME_AUDIO
							}),
							(0, n.jsx)(s.FormSwitch, {
								onChange: M,
								value: R,
								hideBorder: !0,
								children: I.Z.Messages.CLIPS_EDIT_VOICE_CHANNEL_AUDIO
							})
						]
					})
				]
			}),
			(0, n.jsxs)('div', {
				className: r()(E.clipFormSection, E.metadataSection),
				children: [
					(0, n.jsx)(g.Z, { clip: t }),
					(0, n.jsx)(C.Z, {
						className: E.userList,
						clip: t
					})
				]
			}),
			(0, n.jsxs)('div', {
				className: E.clipFormFooter,
				children: [
					(0, n.jsx)(s.Button, {
						submitting: 'share' === A,
						disabled: null != A && 'share' !== A,
						color: s.Button.Colors.BRAND,
						wrapperClassName: E.clipFormFooterButton,
						onClick: () =>
							D({
								clip: {
									...t,
									name: y
								},
								cropData: k,
								applicationAudioEnabled: P,
								voiceAudioEnabled: R,
								onShareComplete: () => {
									o.Mr(j.Ut), o.Mr(j.Qr);
								}
							}),
						children: I.Z.Messages.CLIPS_EDIT_SHARE_CLIP
					}),
					(0, n.jsx)(s.Button, {
						size: s.Button.Sizes.ICON,
						className: E.clipFormFooterButton,
						disabled: null != A,
						wrapperClassName: r()(E.clipFormFooterButton, { [E.submittingWrapperFix]: null != A }),
						color: s.Button.Colors.PRIMARY,
						onClick: N,
						children: I.Z.Messages.SAVE_CHANGES
					}),
					(0, n.jsx)(s.Button, {
						'aria-label': I.Z.Messages.MORE_OPTIONS,
						size: s.Button.Sizes.ICON,
						wrapperClassName: r()(E.clipFormFooterButton, { [E.submittingWrapperFix]: null != A }),
						submitting: 'export' === A,
						disabled: null != A && 'export' !== A,
						color: s.Button.Colors.PRIMARY,
						onClick: function (e) {
							(0, u.jW)(e, async () => {
								let { default: e } = await a.e('32157').then(a.bind(a, 151090));
								return (t) =>
									(0, n.jsx)(e, {
										...t,
										onExportToSoundboard: B,
										onExportToFile: O,
										onDelete: H,
										channelId: i
									});
							});
						},
						children: (0, n.jsx)(s.MoreHorizontalIcon, {
							size: 'md',
							color: 'currentColor'
						})
					})
				]
			})
		]
	});
}
