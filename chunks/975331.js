n.d(t, {
	Z: function () {
		return S;
	}
}),
	n(47120);
var s = n(735250),
	a = n(470079),
	i = n(512722),
	r = n.n(i),
	l = n(481060),
	o = n(313201),
	c = n(584825),
	d = n(723047),
	u = n(727843),
	_ = n(290348),
	I = n(518470),
	E = n(22902),
	T = n(783454),
	m = n(689938),
	N = n(325850);
function S() {
	var e;
	let { editStateId: t } = (0, u.N)(),
		[n, i] = _.TT(t),
		[S, h] = _.F2(t),
		g = (0, c.oC)(t),
		{ options: C } = (0, E.Z)(null !== (e = null == g ? void 0 : g.active_trial) && void 0 !== e ? e : null),
		x = (0, I.Z)(),
		p = null != n,
		R = a.useCallback(
			(e) => {
				let t = C.find((e) => e.isDefault);
				r()(null != t, 'Missing default trial duartion option'), i(e ? t.value : null);
			},
			[i, C]
		),
		f = (0, d.mY)(),
		L = (0, o.Dt)(),
		O = (0, o.Dt)();
	return (0, s.jsxs)(T.Z, {
		title: m.Z.Messages.GUILD_ROLE_SUBSCRIPTION_SETUP_FREE_TRIAL_TITLE,
		description: m.Z.Messages.GUILD_ROLE_SUBSCRIPTION_SETUP_FREE_TRIAL_DESCRIPTION,
		children: [
			(0, s.jsx)(l.FormSwitch, {
				onChange: (e, t) => R(e),
				value: p,
				disabled: f,
				hideBorder: !0,
				children: m.Z.Messages.GUILD_ROLE_SUBSCRIPTION_SETUP_ENABLE_FREE_TRIAL_CTA
			}),
			(0, s.jsxs)(l.FormSection, {
				title: m.Z.Messages.GUILD_ROLE_SUBSCRIPTION_SETUP_FREE_TRIAL_TIME_LIMIT_TITLE,
				titleId: L,
				disabled: !p || f,
				children: [
					(0, s.jsx)(l.FormText, {
						type: l.FormText.Types.DESCRIPTION,
						className: N.formDescription,
						disabled: !p || f,
						children: m.Z.Messages.GUILD_ROLE_SUBSCRIPTION_SETUP_FREE_TRIAL_TIME_LIMIT_DESCRIPTION
					}),
					(0, s.jsx)(l.Spacer, { size: 8 }),
					(0, s.jsx)(l.SingleSelect, {
						'aria-labelledby': L,
						options: C,
						className: N.formInput,
						placeholder: m.Z.Messages.GUILD_ROLE_SUBSCRIPTION_SETUP_FREE_TRIAL_DISABLED,
						value: n,
						onChange: i,
						maxVisibleItems: 5,
						isDisabled: !p || f,
						look: l.SelectLooks.CUSTOM
					})
				]
			}),
			(0, s.jsx)(l.Spacer, { size: 24 }),
			(0, s.jsxs)(l.FormSection, {
				title: m.Z.Messages.GUILD_ROLE_SUBSCRIPTION_SETUP_TIER_ACTIVE_TRIAL_USER_LIMIT_TITLE,
				titleId: O,
				disabled: !p || f,
				children: [
					(0, s.jsx)(l.FormText, {
						type: l.FormText.Types.DESCRIPTION,
						className: N.formDescription,
						disabled: !p || f,
						children: m.Z.Messages.GUILD_ROLE_SUBSCRIPTION_SETUP_TIER_ACTIVE_TRIAL_USER_LIMIT_DESCRIPTION
					}),
					(0, s.jsx)(l.SingleSelect, {
						'aria-labelledby': O,
						options: x,
						className: N.formInput,
						value: S,
						onChange: h,
						maxVisibleItems: 5,
						isDisabled: !p || f,
						look: l.SelectLooks.CUSTOM
					})
				]
			})
		]
	});
}
