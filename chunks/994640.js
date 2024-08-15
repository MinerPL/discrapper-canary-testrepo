a(47120);
var t = a(735250),
	n = a(470079),
	l = a(120356),
	i = a.n(l),
	r = a(481060),
	o = a(231239),
	c = a(881052),
	d = a(313201),
	N = a(592125),
	u = a(888592),
	_ = a(981631),
	m = a(689938),
	E = a(202113);
let I = (0, d.hQ)();
s.Z = (e) => {
	let { setStep: s, setGuildsInfo: a, email: l, setEmail: d, setGuildId: x, invite: h, onClose: C, isNUXFlow: T } = e,
		[g, O] = n.useState(null),
		[v, L] = n.useState(!1),
		S = async (e) => {
			e.preventDefault(), O(null), L(!0);
			try {
				var t, n, i, r, d;
				let e =
					null !==
						(d =
							null !== (r = null == h ? void 0 : null === (t = h.guild) || void 0 === t ? void 0 : t.id) && void 0 !== r
								? r
								: null ===
											(n = N.Z.getChannel(
												null == h ? void 0 : null === (i = h.channel) || void 0 === i ? void 0 : i.id
											)) || void 0 === n
									? void 0
									: n.getGuildId()) && void 0 !== d
						? d
						: void 0;
				e === u.fQ && (e = void 0);
				let c = await o.Z.sendVerificationEmail(l, !0, e),
					_ = c.guilds_info;
				c.has_matching_guild
					? (x(e), s(u.tF.VERIFY_PIN))
					: 0 === _.length
						? s(u.tF.SUBMIT_SCHOOL)
						: 1 === _.length
							? (x(_[0].id), await o.Z.sendVerificationEmail(l, !0, _[0].id), s(u.tF.VERIFY_PIN))
							: (a(_), s(u.tF.SELECT_SCHOOL));
			} catch (e) {
				O(new c.Hx(e));
			} finally {
				L(!1);
			}
		},
		M = m.Z.Messages.HUB_EMAIL_CONNECTION_CONTENT_HEADER,
		A = m.Z.Messages.HUB_EMAIL_CONNECTION_CONTENT_DESCRIPTION;
	if (T)
		(M = m.Z.Messages.HUB_EMAIL_CONNECTION_NUX_HEADER), (A = m.Z.Messages.HUB_EMAIL_CONNECTION_NUX_CONTENT_DESCRIPTION);
	else if (
		(null == h ? void 0 : h.guild) != null &&
		h.guild.id !== u.fQ &&
		(null == h ? void 0 : h.approximate_member_count) != null
	) {
		let { name: e } = h.guild;
		M = m.Z.Messages.HUB_EMAIL_CONNECTION_INVITE_HEADER.format({
			guildName: e,
			count: h.approximate_member_count
		});
	}
	return (0, t.jsxs)('div', {
		className: E.container,
		children: [
			(0, t.jsx)('div', { className: E.topImage }),
			(0, t.jsx)(r.Heading, {
				className: i()(E.centerText, E.header),
				variant: 'heading-xl/semibold',
				children: M
			}),
			(0, t.jsx)('div', {
				className: E.descriptionWidth,
				children: (0, t.jsx)(r.Text, {
					className: E.centerText,
					variant: 'text-sm/normal',
					color: 'header-secondary',
					children: A
				})
			}),
			(0, t.jsxs)('form', {
				className: E.formContent,
				onSubmit: S,
				children: [
					(0, t.jsxs)(r.FormItem, {
						children: [
							(0, t.jsx)(r.FormTitle, {
								id: I,
								children: m.Z.Messages.HUB_EMAIL_CONNECTION_CONTENT_INPUT_HEADER
							}),
							(0, t.jsx)(r.TextInput, {
								placeholder: m.Z.Messages.HUB_EMAIL_CONNECTION_CONTENT_INPUT_PLACEHOLDER,
								onChange: (e) => {
									d(e);
								},
								error: null == g ? void 0 : g.getAnyErrorMessage(),
								'aria-labelledby': I
							})
						]
					}),
					(0, t.jsx)(r.Text, {
						color: 'header-secondary',
						className: E.formDescription,
						variant: 'text-sm/normal',
						children: m.Z.Messages.HUB_EMAIL_CONNECTION_CONTENT_INPUT_DESCRIPTION
					}),
					(0, t.jsx)(r.Button, {
						type: 'submit',
						size: r.Button.Sizes.LARGE,
						color: r.Button.Colors.BRAND,
						className: E.submitButton,
						submitting: v,
						children: m.Z.Messages.HUB_EMAIL_CONNECTION_CONTENT_BUTTON
					}),
					(0, t.jsx)(r.Text, {
						className: E.termsPhrase,
						color: 'header-secondary',
						variant: 'text-xs/normal',
						children: m.Z.Messages.HUB_EMAIL_CONNECTION_CONTENT_TOS_AND_PP.format({
							termsURL: _.EYA.TERMS,
							privacyURL: _.EYA.PRIVACY
						})
					}),
					T &&
						(0, t.jsx)(r.Button, {
							look: r.Button.Looks.LINK,
							onClick: C,
							className: E.cancelButton,
							children: m.Z.Messages.HUB_EMAIL_CONNECTION_CANCEL
						})
				]
			})
		]
	});
};
