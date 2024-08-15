s.r(t), s(610138), s(216116), s(78328), s(815648), s(47120);
var n = s(735250);
s(470079);
var r = s(481060),
	a = s(457330),
	o = s(417663),
	i = s(726542),
	l = s(77987),
	c = s(787025),
	d = s(689938),
	u = s(460114);
t.default = (0, l.e)(function (e) {
	let { match: t } = e,
		s = t.params.type,
		l = i.Z.get(s);
	if (null == l)
		return (0, n.jsx)(c.G, {
			children: (0, n.jsx)(r.Text, {
				className: u.error,
				variant: 'text-md/normal',
				color: 'text-warning',
				children: d.Z.Messages.CONNECTED_ACCOUNT_AUTHORIZATION_PLATFORM_UNKNOWN
			})
		});
	async function N() {
		var e, t, n;
		let r = new URLSearchParams(window.location.search),
			{ body: o } = await a.Z.authorize(s, {
				location: 'Connection Intermediate',
				twoWayLink: null != r.get('two_way_link') ? 'true' === r.get('two_way_link') : void 0,
				twoWayLinkType: null !== (e = r.get('two_way_link_type')) && void 0 !== e ? e : void 0,
				userCode: null !== (t = r.get('two_way_user_code')) && void 0 !== t ? t : void 0,
				successRedirect: null !== (n = r.get('success_redirect')) && void 0 !== n ? n : void 0
			});
		window.location = o.url;
	}
	return (0, n.jsx)(c.G, {
		wrapperClassName: u.wrapper,
		children: (0, n.jsxs)('div', {
			className: u.root,
			children: [
				(0, n.jsx)(o.LinkPlatformLogo, {
					className: u.logos,
					platform: l
				}),
				(0, n.jsx)(r.Heading, {
					variant: 'text-lg/bold',
					className: u.header,
					children: d.Z.Messages.CONNECTED_ACCOUNT_AUTHORIZATION_CONTINUE_HEADER.format({ provider: l.name })
				}),
				(0, n.jsx)(r.Text, {
					variant: 'text-md/normal',
					className: u.body,
					children: d.Z.Messages.CONNECTED_ACCOUNT_AUTHORIZATION_CONTINUE_DESCRIPTION.format({ provider: l.name })
				}),
				(0, n.jsx)(r.Button, {
					size: r.Button.Sizes.LARGE,
					color: r.Button.Colors.BRAND,
					onClick: N,
					children: d.Z.Messages.CONNECTED_ACCOUNT_AUTHORIZATION_CONTINUE_BUTTON
				})
			]
		})
	});
});
