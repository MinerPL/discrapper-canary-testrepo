t.d(n, {
	Xd: function () {
		return N;
	},
	mv: function () {
		return T;
	}
});
var s = t(735250);
t(470079);
var i = t(442837),
	r = t(692547),
	c = t(481060),
	a = t(239091),
	o = t(584511),
	l = t(112831),
	d = t(51144),
	u = t(88751),
	_ = t(930180),
	E = t(689938),
	I = t(585866);
let T = (e) => {
		let { channelId: n } = e,
			t = (0, _._d)(n);
		return 0 === t
			? null
			: (0, s.jsxs)('div', {
					className: I.blockedNotice,
					children: [
						(0, s.jsx)(c.DenyIcon, {
							size: 'lg',
							className: I.__invalid_blockedIcon,
							color: r.Z.unsafe_rawColors.RED_400.css
						}),
						(0, s.jsx)(c.Text, {
							variant: 'text-xs/normal',
							color: 'header-secondary',
							children: E.Z.Messages.STAGE_BLOCKED_USERS_DESCRIPTION_COUNT.format({ number: t })
						}),
						(0, s.jsx)(c.Clickable, {
							className: I.blockedButton,
							onClick: (e) => {
								(0, a.vq)(
									e,
									(e) =>
										(0, s.jsx)(h, {
											...e,
											channelId: n
										}),
									{
										position: 'left',
										align: 'bottom'
									}
								);
							},
							children: E.Z.Messages.VIEW_ALL
						})
					]
				});
	},
	N = (e) => {
		let { user: n, showStatus: t, speaker: r, channelId: a } = e,
			_ = (0, i.e7)([u.ZP], () => u.ZP.isModerator(n.id, a)),
			T = null;
		return (
			t && (T = r ? E.Z.Messages.STAGE_SPEAKER : _ ? E.Z.Messages.STAGE_MODERATOR_TOOLTIP : E.Z.Messages.STAGE_AUDIENCE),
			(0, s.jsxs)('div', {
				className: I.user,
				children: [
					(0, s.jsx)(
						o.Z,
						{
							src: n.getAvatarURL(null, 32),
							size: c.AvatarSizes.SIZE_32,
							muted: !1,
							deafen: !1,
							speaking: !1,
							ringing: !1,
							renderIcon: r
								? () =>
										(0, s.jsx)(c.MicrophoneIcon, {
											size: 'md',
											color: 'currentColor',
											className: I.icon
										})
								: null
						},
						n.id
					),
					(0, s.jsxs)('div', {
						className: I.userInfo,
						children: [
							(0, s.jsxs)('div', {
								className: I.username,
								children: [
									(0, s.jsx)(l.Z, {
										size: t ? l.Z.Sizes.SIZE_16 : l.Z.Sizes.SIZE_14,
										children: d.ZP.getName(n)
									}),
									(0, s.jsx)(l.Z, {
										size: t ? l.Z.Sizes.SIZE_16 : l.Z.Sizes.SIZE_14,
										color: l.Z.Colors.HEADER_SECONDARY,
										children: '#'.concat(n.discriminator)
									})
								]
							}),
							(0, s.jsxs)('div', {
								className: I.username,
								children: [
									(0, s.jsx)(c.Text, {
										variant: 'text-xs/normal',
										color: 'text-danger',
										children: E.Z.Messages.BLOCKED
									}),
									(0, s.jsxs)(c.Text, {
										variant: 'text-xs/normal',
										color: 'text-muted',
										children: [' ', '| ', T]
									})
								]
							})
						]
					})
				]
			})
		);
	},
	h = (e) => {
		let { channelId: n } = e,
			t = (0, _.z)(n);
		return (0, s.jsx)(c.Scroller, {
			className: I.container,
			children: t.map((e) => {
				let { user: t } = e;
				return (0, s.jsx)(
					N,
					{
						user: t,
						channelId: n
					},
					t.id
				);
			})
		});
	};
