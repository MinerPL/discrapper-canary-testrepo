i.d(n, {
	Z: function () {
		return A;
	}
});
var l = i(735250);
i(470079);
var t = i(442837),
	s = i(481060),
	a = i(668781),
	o = i(846027),
	u = i(763296),
	d = i(131951),
	r = i(19780),
	c = i(914010),
	Z = i(594174),
	M = i(626135),
	E = i(981631),
	_ = i(65154),
	f = i(689938),
	N = i(480881);
function A(e) {
	let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : _.Yn.DEFAULT,
		i = (0, t.e7)([Z.default], () => {
			var n;
			return (null === (n = Z.default.getCurrentUser()) || void 0 === n ? void 0 : n.id) === e;
		}),
		A = (0, t.e7)([u.Z], () => u.Z.isLocalSoundboardMuted(e)),
		{
			muted: I,
			deafened: g = !1,
			localVideoDisabled: v = !1,
			localVideoAutoDisabled: b = !1
		} = (0, t.cj)(
			[d.Z],
			() =>
				i
					? {
							muted: d.Z.isSelfMute(n),
							deafened: d.Z.isSelfDeaf(n)
						}
					: {
							muted: d.Z.isLocalMute(e, n),
							localVideoDisabled: d.Z.isLocalVideoDisabled(e, n),
							localVideoAutoDisabled: d.Z.isLocalVideoAutoDisabled(e, n)
						},
			[i, n, e]
		),
		m =
			d.Z.supports(_.AN.DISABLE_VIDEO) && !i
				? (0, l.jsx)(
						s.MenuCheckboxItem,
						{
							id: 'disable-video',
							label: f.Z.Messages.DISABLE_VIDEO,
							action: () => {
								if (b) {
									a.Z.show({
										title: f.Z.Messages.UNSTABLE_CONNECTION,
										body: f.Z.Messages.UNSTABLE_CONNECTION_REASON_2,
										confirmText: f.Z.Messages.TURN_ON_VIDEO_ANYWAY,
										cancelText: f.Z.Messages.LEAVE_VIDEO_OFF,
										onConfirm: () => o.Z.setDisableLocalVideo(e, E.ZUi.MANUAL_ENABLED)
									});
									return;
								}
								let i = v ? E.ZUi.MANUAL_ENABLED : E.ZUi.DISABLED;
								o.Z.setDisableLocalVideo(e, i, n);
							},
							checked: v,
							subtext: b
								? (0, l.jsxs)('div', {
										className: N.videoPaused,
										children: [
											(0, l.jsx)(s.CircleWarningIcon, {
												size: 'custom',
												color: 'currentColor',
												width: 12,
												className: N.warningCircle
											}),
											f.Z.Messages.UNSTABLE_CONNECTION
										]
									})
								: null
						},
						'disable-video'
					)
				: null,
		p = i
			? null
			: (0, l.jsx)(
					s.MenuCheckboxItem,
					{
						id: 'soundboard-sound-mute',
						label: f.Z.Messages.MUTE_SOUNDBOARD,
						action: () => {
							let i = r.Z.getRTCConnection();
							M.default.track(E.rMx.AUDIO_LOCAL_SOUNDBOARD_MUTE_TOGGLED, {
								guild_id: c.Z.getGuildId(),
								target_user_id: e,
								media_session_id: null == i ? void 0 : i.getMediaSessionId(),
								parent_media_session_id: null == i ? void 0 : i.parentMediaSessionId,
								mute_soundboard: !A
							}),
								o.Z.toggleLocalSoundboardMute(e, n);
						},
						checked: A
					},
					'soundboard-sound-mute'
				);
	return i
		? [
				(0, l.jsx)(
					s.MenuCheckboxItem,
					{
						id: 'mute',
						label: f.Z.Messages.SOUND_MUTE,
						action: () => o.Z.toggleSelfMute({ context: n }),
						checked: I
					},
					'self-mute'
				),
				(0, l.jsx)(
					s.MenuCheckboxItem,
					{
						id: 'deafen',
						label: f.Z.Messages.DEAFEN,
						action: () => o.Z.toggleSelfDeaf({ context: n }),
						checked: g
					},
					'self-deafen'
				),
				m
			]
		: [
				(0, l.jsx)(
					s.MenuCheckboxItem,
					{
						id: 'mute',
						label: f.Z.Messages.SOUND_MUTE,
						action: () => o.Z.toggleLocalMute(e, n),
						checked: I
					},
					'self-mute'
				),
				p,
				m
			];
}
