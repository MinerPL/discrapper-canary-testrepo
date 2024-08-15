i.d(t, {
	Z: function () {
		return C;
	}
});
var n = i(735250);
i(470079);
var a = i(120356),
	r = i.n(a),
	o = i(912370),
	s = i(481060),
	l = i(626135),
	c = i(463571),
	d = i(34674),
	u = i(218864),
	h = i(950854),
	_ = i(132871),
	p = i(147890),
	m = i(57716),
	g = i(981631),
	f = i(255569);
function C(e) {
	let {
			collection: t,
			collection: { id: i, title: a, application_directory_collection_items: C }
		} = e,
		x = (0, m.Z)({ collection: t }),
		I = (0, _.useApplicationDirectoryHistory)((e) => e.guildId);
	return (0, n.jsxs)('div', {
		ref: x,
		children: [
			(0, n.jsx)(s.Heading, {
				variant: 'heading-lg/semibold',
				className: f.header,
				children: a
			}),
			(0, n.jsx)('div', {
				className: f.list,
				children: C.map((e) => {
					let { id: t, type: a, application: _, image_hash: m, title: C, description: x, call_to_action_label: b, call_to_action_url: N } = e;
					if (null == m) return;
					let v = (0, d.$_)({
						itemId: t,
						hash: m
					});
					return a === o.C.APPLICATION && null != _
						? (0, n.jsx)(
								c.Z,
								{
									href: g.Z5c.APPLICATION_DIRECTORY_PROFILE(_.id),
									className: f.item,
									children: (0, n.jsx)(u.Z, {
										imageSrc: v,
										application: _,
										onClick: (e) => {
											let { mutualGuilds: t } = e;
											l.default.track(g.rMx.APP_DIRECTORY_COLLECTION_ITEM_CLICKED, {
												collection_id: i,
												application_id: _.id,
												guild_id: I,
												shown_mutual_guilds_count: t.length
											}),
												(0, p.goToApplication)({ applicationId: _.id });
										},
										animatesOnHover: !0
									})
								},
								t
							)
						: a === o.C.LINK && null != C
							? (0, n.jsxs)(
									h.Z,
									{
										className: r()(f.item, f.linkCard),
										imageSrc: v,
										header: C,
										headerClassName: f.cardHeader,
										children: [
											(0, n.jsx)(s.Text, {
												variant: 'text-sm/normal',
												className: f.linkDescription,
												children: x
											}),
											(0, n.jsx)(s.Anchor, {
												onClick: () => {
													l.default.track(g.rMx.APP_DIRECTORY_COLLECTION_ITEM_CLICKED, {
														collection_id: i,
														link: N,
														guild_id: I,
														shown_mutual_guilds_count: void 0
													});
												},
												href: N,
												className: r()((0, s.getButtonStyle)(), f.linkCta),
												children: b
											})
										]
									},
									t
								)
							: void 0;
				})
			})
		]
	});
}
