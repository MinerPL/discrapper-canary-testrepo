l.d(n, {
	Z: function () {
		return m;
	}
});
var t = l(470079),
	r = l(835473),
	i = l(81063),
	a = l(49012),
	u = l(591759),
	s = l(561308),
	o = l(206583),
	c = l(701488),
	d = l(689938);
function m(e) {
	let n,
		{ entry: l, baseEntryData: m } = e,
		f = (0, r.q)(l.extra.application_id),
		p = null == f ? void 0 : f.getIconURL(128),
		E = (0, i.getAssetImage)(l.extra.application_id, l.extra.media_assets_large_image, [c.Si.LARGE, c.Si.LARGE]),
		v = l.extra.media_subtitle,
		C =
			(0, s.kr)(l) && !(0, s.n2)(l)
				? d.Z.Messages.MEMBER_LIST_CONTENT_POPOUT_USER_WATCHING
				: d.Z.Messages.MEMBER_LIST_CONTENT_POPOUT_USER_WATCHED,
		h = {
			type: o.kG.CRUNCHYROLL,
			'aria-label': d.Z.Messages.CRUNCHYROLL
		},
		x = t.useMemo(() => {
			if (null == l.extra.url) return;
			let e = u.Z.safeParseWithQuery(l.extra.url);
			if (null != e && null != e.protocol && null != e.hostname) return e;
		}, [l.extra.url]);
	return (
		null != x &&
			(n = () =>
				(0, a.q)({
					href: u.Z.format(x),
					trusted: !0
				})),
		{
			...m,
			thumbnailUrl: null != E ? E : p,
			title: l.extra.media_title,
			onClickTitle: n,
			onClickThumbnail: n,
			subtitle: v,
			userDescription: C,
			providerIconProps: h
		}
	);
}
