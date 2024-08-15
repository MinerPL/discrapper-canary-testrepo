n.d(t, {
	Z: function () {
		return _;
	}
});
var i = n(735250);
n(470079);
var a = n(442837),
	s = n(481060),
	l = n(805519),
	r = n(565138),
	o = n(246364),
	c = n(705563),
	u = n(594174),
	d = n(967128),
	h = n(689938),
	m = n(422226);
function p(e) {
	var t;
	let { joinRequest: n, guild: l } = e,
		c = (0, a.e7)([u.default], () => u.default.getUser(n.userId));
	return (0, i.jsxs)('div', {
		className: m.summaryContainer,
		children: [
			(0, i.jsxs)('div', {
				className: m.summaryHeader,
				children: [
					null != l &&
						(0, i.jsxs)('div', {
							className: m.summaryHeaderClanInfo,
							children: [
								(0, i.jsx)(r.Z, {
									guild: l,
									active: !0,
									size: r.Z.Sizes.SMOL,
									className: m.guildIcon
								}),
								(0, i.jsx)(s.Heading, {
									variant: 'heading-sm/semibold',
									color: 'header-primary',
									children: l.name
								})
							]
						}),
					null != c &&
						(0, i.jsx)(s.Heading, {
							variant: 'heading-xl/semibold',
							color: 'header-primary',
							children: h.Z.Messages.MEMBER_VERIFICATION_USERS_APPLICATION.format({ username: c.globalName })
						})
				]
			}),
			null === (t = n.formResponses) || void 0 === t
				? void 0
				: t
						.filter((e) => e.field_type !== o.QJ.TERMS)
						.map((e) => {
							let t = e.field_type === o.QJ.MULTIPLE_CHOICE && null != e.response ? e.choices[e.response] : e.response;
							return (0, i.jsxs)(i.Fragment, {
								children: [
									(0, i.jsx)('hr', { className: m.summarySeparator }),
									(0, i.jsxs)('div', {
										className: m.formResponseContainer,
										children: [
											(0, i.jsx)(s.Text, {
												variant: 'text-xs/semibold',
												color: 'text-muted',
												children: e.label
											}),
											(0, i.jsx)(s.Text, {
												variant: 'text-md/medium',
												color: 'text-primary',
												children: t
											})
										]
									})
								]
							});
						})
		]
	});
}
function _(e) {
	let { channel: t } = e,
		{ loading: n, joinRequest: a, joinRequestGuild: r } = (0, l.Z)(t.id);
	return (0, i.jsx)(d.ZP, {
		channelId: t.id,
		className: m.container,
		children: (0, i.jsx)(d.jz, {
			children:
				null != a && null != a.formResponses
					? (0, i.jsxs)('div', {
							className: m.formContainer,
							children: [
								(0, i.jsx)('div', {
									children: (0, i.jsx)(p, {
										guild: r,
										joinRequest: a
									})
								}),
								(0, i.jsx)(c.Z, {
									channelId: t.id,
									showProfile: !0
								})
							]
						})
					: n
						? (0, i.jsx)(s.Spinner, {})
						: null
		})
	});
}
