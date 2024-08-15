n.d(t, {
	Z: function () {
		return _;
	}
});
var s = n(735250);
n(470079);
var a = n(442837),
	i = n(481060),
	r = n(471613),
	l = n(29605),
	o = n(345861),
	c = n(723047),
	d = n(796814),
	u = n(689938);
function _(e) {
	let { guild: t } = e,
		_ = (0, a.e7)([r.Z], () => r.Z.isUploadingEmoji()),
		I = (0, d.Z)(t.id),
		E = t.getMaxRoleSubscriptionEmojiSlots() - I.length,
		T = (0, c.mY)();
	return (0, s.jsx)(s.Fragment, {
		children: (0, s.jsxs)(i.FormSection, {
			title: u.Z.Messages.GUILD_ROLE_SUBSCRIPTIONS_MANAGE_EMOJI_UPLOAD_TITLE,
			disabled: T,
			children: [
				(0, s.jsx)(i.FormText, {
					type: i.FormText.Types.DESCRIPTION,
					disabled: T,
					children: u.Z.Messages.GUILD_ROLE_SUBSCRIPTIONS_MANAGE_EMOJI_UPLOAD_DESCRIPTION.format({ maxSlots: t.getMaxRoleSubscriptionEmojiSlots() })
				}),
				(0, s.jsx)(i.Spacer, { size: 16 }),
				(0, s.jsx)(o.Z, {
					onChange: (e, a) => {
						null != e &&
							null != a &&
							(0, i.openModalLazy)(async () => {
								let { CreateEmojiWithRolesModal: i } = await n.e('9007').then(n.bind(n, 604623));
								return (n) =>
									(0, s.jsx)(i, {
										...n,
										data: e,
										file: a,
										guildId: t.id
									});
							});
					},
					buttonCTA: u.Z.Messages.GUILD_ROLE_SUBSCRIPTIONS_MANAGE_EMOJI_UPLOAD_CTA,
					submitting: _,
					disabled: T || _ || 0 === E
				}),
				(0, s.jsx)(i.Spacer, { size: 24 }),
				(0, s.jsx)(l.L3, {
					title: u.Z.Messages.GUILD_ROLE_SUBSCRIPTIONS_MANAGE_EMOJI_EMOJI_SECTION_TITLE,
					maxSlots: t.getMaxRoleSubscriptionEmojiSlots(),
					emojiCount: I.length
				}),
				(0, s.jsx)(l.FT, {
					guild: t,
					emojis: I,
					onEdit: (e, t) => {
						(0, i.openModalLazy)(async () => {
							let { UpdateEmojiRolesModal: a } = await n.e('9007').then(n.bind(n, 604623));
							return (n) =>
								(0, s.jsx)(a, {
									...n,
									emoji: e,
									guildId: t
								});
						});
					},
					editingDisabled: T
				})
			]
		})
	});
}
