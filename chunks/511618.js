var r = n(735250),
	i = n(470079),
	a = n(906732),
	s = n(965386),
	o = n(686546),
	l = n(626135),
	u = n(768581),
	c = n(981631),
	d = n(185923),
	_ = n(474936),
	E = n(689938),
	f = n(676761);
t.Z = (e) => {
	let { emojis: t } = e,
		{ analyticsLocations: n } = (0, a.ZP)();
	i.useEffect(() => {
		l.default.track(c.rMx.PREMIUM_UPSELL_VIEWED, {
			type: _.cd.EMOJI_AUTOCOMPLETE_INLINE,
			location_stack: n
		});
	}, [n]);
	let h = (0, r.jsx)('div', {
		className: f.emojis,
		children: t.slice(0, 3).map((e, t) => {
			if (null == e.id) return null;
			let n = (0, r.jsx)(
				'div',
				{
					className: f.emojiBackground,
					children: (0, r.jsx)('img', {
						alt: e.name,
						className: f.emoji,
						src: u.ZP.getEmojiURL({
							id: e.id,
							animated: e.animated,
							size: d.$U
						})
					})
				},
				e.id
			);
			return 2 === t
				? n
				: (0, r.jsx)(
						o.ZP,
						{
							className: f.emojiMask,
							mask: o.ZP.Masks.AUTOCOMPLETE_EMOJI_UPSELL_EMOJI,
							children: n
						},
						e.id
					);
		})
	});
	return (0, r.jsxs)(s.RX, {
		className: f.upsell,
		children: [
			(0, r.jsx)(s.z5, {
				children: (0, r.jsx)(s.BR, { children: E.Z.Messages.AUTOCOMPLETE_EMOJI_UPSELL.format({ count: t.length }) })
			}),
			(0, r.jsx)(s.dY, { children: h })
		]
	});
};
