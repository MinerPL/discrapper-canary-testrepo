n.d(t, {
	Z: function () {
		return T;
	}
}),
	n(47120);
var s = n(735250);
n(470079);
var a = n(481060),
	i = n(723047),
	r = n(727843),
	l = n(290348),
	o = n(783454),
	c = n(893729),
	d = n(619326),
	u = n(553204),
	_ = n(689938),
	I = n(325850),
	E = n(756335);
function T() {
	let { editStateId: e, guildId: t } = (0, r.N)(),
		[, T] = l.p9(e, t),
		[m, N] = l.Ek(e, t),
		S = l.qs(e, t);
	function h() {
		(0, a.openModalLazy)(async () => {
			let { default: e } = await n.e('22942').then(n.bind(n, 660727));
			return (n) =>
				(0, s.jsx)(e, {
					...n,
					guildId: t,
					onUploadIcon: (e) =>
						T({
							icon: e,
							unicodeEmoji: null
						}),
					onSelectUnicodeEmoji: (e) =>
						T({
							icon: null,
							unicodeEmoji: e
						})
				});
		});
	}
	let g = (0, i.mY)();
	return (0, s.jsxs)(o.Z, {
		title: _.Z.Messages.GUILD_ROLE_SUBSCRIPTION_SETUP_TIER_FLAIR_HEADER_TITLE,
		description: _.Z.Messages.GUILD_ROLE_SUBSCRIPTION_SETUP_TIER_FLAIR_HEADER_SUBTITLE,
		children: [
			(0, s.jsx)(a.FormSection, {
				title: _.Z.Messages.GUILD_ROLE_SUBSCRIPTION_SETUP_FLAIR_COLOR_TITLE,
				disabled: g,
				children: (0, s.jsx)(d.Z, {
					value: m,
					onChange: N,
					disabled: g
				})
			}),
			(0, s.jsx)(a.Spacer, { size: 24 }),
			(0, s.jsx)('div', {
				className: I.__invalid_iconSection,
				children: (0, s.jsxs)(a.FormSection, {
					title: _.Z.Messages.GUILD_ROLE_SUBSCRIPTION_SETUP_FLAIR_BADGE_TITLE,
					disabled: g,
					children: [
						(0, s.jsx)(a.FormText, {
							type: a.FormText.Types.DESCRIPTION,
							className: I.formDescription,
							disabled: g,
							children: _.Z.Messages.GUILD_ROLE_SUBSCRIPTION_SETUP_FLAIR_BADGE_DESCRIPTION
						}),
						(0, s.jsxs)('div', {
							className: E.iconUploaderContainer,
							children: [
								(0, s.jsx)(u.Z, {
									role: S,
									'aria-label': _.Z.Messages.ROLE_ICON_CHOOSE_IMAGE,
									onClick: h,
									disabled: g
								}),
								(0, s.jsx)(a.Button, {
									look: a.Button.Looks.OUTLINED,
									color: a.Button.Colors.PRIMARY,
									className: I.__invalid_imageUploadButtonCTA,
									onClick: h,
									disabled: g,
									children: _.Z.Messages.ROLE_ICON_CHOOSE_IMAGE
								})
							]
						})
					]
				})
			}),
			(0, s.jsx)(a.Spacer, { size: 24 }),
			(0, s.jsx)(a.FocusBlock, {
				children: (0, s.jsxs)('div', {
					className: E.previewContainer,
					'aria-hidden': !0,
					children: [
						(0, s.jsx)(c.Z, {
							guildId: t,
							role: S,
							className: E.messageContainer,
							theme: 'light'
						}),
						(0, s.jsx)(c.Z, {
							guildId: t,
							role: S,
							className: E.messageContainer,
							theme: 'dark'
						})
					]
				})
			})
		]
	});
}
