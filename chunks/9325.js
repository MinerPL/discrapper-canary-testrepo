n.d(t, {
	Z: function () {
		return N;
	}
});
var s = n(735250),
	r = n(470079),
	i = n(442837),
	a = n(481060),
	l = n(388905),
	o = n(409059),
	c = n(962220),
	u = n(306453),
	d = n(108427),
	_ = n(314897),
	h = n(626135),
	E = n(587444),
	g = n(981631),
	p = n(58346),
	I = n(689938),
	m = n(224499);
function f(e, t, n) {
	e.preventDefault(),
		h.default.track(g.rMx.GUILD_TEMPLATE_APP_OPENED, {
			guild_template_code: t,
			guild_template_name: n.name,
			guild_template_description: n.description,
			guild_template_guild_id: n.sourceGuildId
		});
	let s = _.default.getFingerprint(),
		r = null != s ? s : _.default.getId();
	c.Z.openMobileApp(n.state === p.Rj.RESOLVED ? t : void 0, r);
}
function N(e) {
	let { code: t } = e,
		n = (0, i.e7)([o.Z], () => o.Z.getGuildTemplate(t));
	return (r.useEffect(() => {
		(0, d.e)('guild_template_mobile');
	}, []),
	null == n || n.state === p.Rj.RESOLVING)
		? (0, s.jsx)(l.ZP, { children: (0, s.jsx)(a.Spinner, {}) })
		: n.state === p.Rj.RESOLVED
			? (0, s.jsxs)(l.ZP, {
					children: [
						(0, s.jsx)(u.Z, {
							guildTemplate: n,
							tall: !0
						}),
						(0, s.jsx)(l.zx, {
							onClick: (e) => f(e, t, n),
							className: m.marginTop20,
							children: I.Z.Messages.GUILD_TEMPLATE_OPEN
						})
					]
				})
			: (0, s.jsx)(E.Z, {
					text: I.Z.Messages.GUILD_TEMPLATE_MOBILE_INVALID_ERROR,
					buttonCta: I.Z.Messages.GUILD_TEMPLATE_MOBILE_INVALID_CTA,
					onClick: (e) => f(e, t, n)
				});
}
i.ZP.initialize();
