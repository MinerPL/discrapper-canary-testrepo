var n = t(735250);
t(470079);
var a = t(442837),
	i = t(481060),
	r = t(78839),
	o = t(270144),
	l = t(238847),
	c = t(689938),
	d = t(784528);
s.Z = (e) => {
	let { onGoBack: s } = e,
		t = (0, a.e7)([r.ZP], () => {
			var e;
			return null !== (e = r.ZP.getActiveApplicationSubscriptions()) && void 0 !== e ? e : [];
		}),
		{ loading: _ } = (0, o.sp)(t),
		{ loadState: E } = (0, o.qz)();
	return _ || E !== o.jd.LOADED
		? (0, n.jsx)(i.Spinner, {})
		: 0 === t.length
			? null
			: (0, n.jsxs)('div', {
					className: d.__invalid_container,
					children: [
						(0, n.jsxs)(i.Button, {
							look: i.Button.Looks.BLANK,
							innerClassName: d.backButtonContents,
							onClick: s,
							children: [
								(0, n.jsx)(i.ArrowSmallRightIcon, {
									size: 'md',
									color: 'currentColor',
									className: d.arrowIcon
								}),
								c.Z.Messages.APPLICATION_MANAGE_SUBSCRIPTION_PAGE_BACK_CTA
							]
						}),
						(0, n.jsx)(i.Spacer, { size: 10 }),
						(0, n.jsx)(i.FormTitle, {
							tag: 'h1',
							children: c.Z.Messages.APPLICATION_MANAGE_SUBSCRIPTION_PAGE_TITLE
						}),
						(0, n.jsx)(i.Text, {
							variant: 'text-sm/normal',
							className: d.pageDescription,
							children: c.Z.Messages.APPLICATION_MANAGE_SUBSCRIPTION_PAGE_DESCRIPTION
						}),
						(0, n.jsx)('div', {
							className: d.subscriptionsContainer,
							children: t.map((e) => (0, n.jsx)(l.Z, { subscription: e }, e.id))
						})
					]
				});
};
