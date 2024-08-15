t.d(s, {
	Z: function () {
		return A;
	}
}),
	t(47120);
var n = t(735250),
	a = t(470079),
	i = t(442837),
	r = t(692547),
	o = t(481060),
	l = t(596454),
	c = t(594174),
	d = t(74538),
	_ = t(242291),
	E = t(706667),
	u = t(792165),
	I = t(409673),
	T = t(603074),
	S = t(689938),
	N = t(397937);
function C(e) {
	let { onSelect: s } = e,
		[t, r] = a.useState(!1),
		l = (0, i.e7)([c.default], () => c.default.getCurrentUser()),
		_ = d.ZP.canUseCustomCallSounds(l);
	function E(e) {
		_ && (r(!1), null == s || s(e));
	}
	return (0, n.jsx)(o.Popout, {
		shouldShow: t,
		position: 'left',
		onRequestClose: () => r(!1),
		renderPopout: (e) => {
			let { closePopout: s } = e;
			return (0, n.jsx)(o.Dialog, {
				children: (0, n.jsx)(T.Z, {
					suppressPlaySound: !0,
					shouldShowUpsell: !1,
					guildId: null,
					channel: null,
					onClose: s,
					onSelect: E,
					gridNotice: _ ? null : (0, n.jsx)(u.o, {}),
					analyticsSource: 'call sounds edit setting'
				})
			});
		},
		children: (e) =>
			(0, n.jsx)(I.hU, {
				...e,
				onClick: () => {
					r(!t);
				},
				text: S.Z.Messages.CALL_SOUNDS_SETTINGS_JOIN_SOUND_CHANGE,
				children: (0, n.jsx)(o.PencilIcon, {
					size: 'md',
					color: 'currentColor',
					className: N.secondaryIcon
				})
			})
	});
}
function m(e) {
	let { sound: s } = e,
		{ previewSound: t } = (0, E.Z)(s, null),
		a =
			0 === (0, _.pI)()
				? S.Z.Messages.SOUNDBOARD_SOUND_PREVIEW_SOUND_LOW_VOLUME
				: S.Z.Messages.SOUNDBOARD_SOUND_PREVIEW_SOUND.format({
						emojiName: s.emojiName,
						soundName: s.name
					});
	return (0, n.jsx)(I.hU, {
		onClick: t,
		text: a,
		children: (0, n.jsx)(o.VoiceNormalIcon, {
			size: 'md',
			color: 'currentColor',
			className: N.secondaryIconActive
		})
	});
}
function A(e) {
	let { sound: s, isGlobal: t, onSelect: a } = e,
		i = null != s,
		c = null == s ? void 0 : s.emojiId,
		d = null == s ? void 0 : s.emojiName,
		_ = i && (null != d || null != c),
		E = (e) =>
			(0, n.jsx)(o.Text, {
				variant: 'text-xs/medium',
				color: 'header-secondary',
				tag: 'span',
				children: e
			});
	return (0, n.jsxs)('div', {
		className: N.soundButtonSettingContainer,
		children: [
			(0, n.jsxs)('div', {
				className: N.container,
				children: [
					_ &&
						(0, n.jsx)(l.Z, {
							emojiId: c,
							emojiName: d,
							className: N.emoji
						}),
					(0, n.jsx)(o.Text, {
						variant: 'text-xs/medium',
						color: 'header-primary',
						className: N.soundText,
						children:
							null == s
								? S.Z.Messages.NONE
								: t
									? S.Z.Messages.CALL_SOUNDS_SETTINGS_ALL_SERVERS.format({
											soundName: s.name,
											subtextHook: E
										})
									: s.name
					}),
					i
						? (0, n.jsx)(m, { sound: s })
						: (0, n.jsx)(o.VoiceNormalIcon, {
								size: 'md',
								color: 'currentColor',
								className: N.secondaryIconDisabled
							})
				]
			}),
			(0, n.jsxs)('div', {
				className: N.container,
				children: [
					(0, n.jsx)(C, { onSelect: a }),
					i &&
						!t &&
						(0, n.jsx)(I.hU, {
							onClick: () => a(null),
							text: S.Z.Messages.CALL_SOUNDS_SETTINGS_JOIN_SOUND_REMOVE,
							children: (0, n.jsx)(o.TrashIcon, {
								size: 'md',
								color: r.Z.unsafe_rawColors.RED_400.css,
								className: N.secondaryIcon
							})
						})
				]
			})
		]
	});
}
