l.d(n, {
	Z: function () {
		return v;
	}
});
var t = l(735250);
l(470079);
var r = l(442837),
	i = l(169525),
	a = l(611170),
	u = l(128854),
	s = l(884182),
	o = l(546432),
	c = l(780088),
	d = l(592125),
	m = l(52824),
	f = l(823379),
	p = l(970184),
	E = l(981631);
function v(e) {
	let { message: n } = (0, p.CJ)(),
		l = (0, r.e7)([d.Z], () => d.Z.getChannel(null == n ? void 0 : n.channel_id)),
		{
			shouldHideMediaOptions: v,
			shouldRedactExplicitContent: C,
			gifAutoPlay: h,
			getGifFavButton: x,
			getOnMediaItemContextMenu: _
		} = (0, u.c)();
	if (null == n || null == l) return null;
	let N = e.items.map((e) => (0, c.j0)(e.media, E.VqG, v, C)).filter(f.lm),
		T = {
			source: 'Media Mosaic',
			guild_id: l.guild_id,
			channel_id: l.id,
			channel_type: l.type
		},
		I = N.length > 1 ? (0, c.Cx)(N, T) : {};
	function g(e, n) {
		let l = e.originalItem;
		return (0, i.lK)(l.media, n, l.spoiler);
	}
	let S = e.items.map((e) => {
		let l = e.media,
			t = null == _ ? void 0 : _(l),
			r = {
				message: n,
				item: {
					uniqueId: l.proxyUrl,
					originalItem: e,
					type: (0, o.pU)(l, !0),
					downloadUrl: l.url,
					height: l.height,
					width: l.width,
					spoiler: e.spoiler,
					contentType: l.contentType
				},
				onContextMenu: t,
				autoPlayGif: h,
				getObscureReason: g,
				renderImageComponent: a.a,
				renderVideoComponent: a.r,
				renderAudioComponent: E.dG4,
				renderPlaintextFilePreview: E.dG4,
				renderGenericFileComponent: E.dG4,
				renderMosaicItemFooter: E.dG4,
				gifFavoriteButton: x(l),
				onPlay: (e, n, l) => {},
				canRemoveItem: !1,
				onRemoveItem: E.dG4
			},
			i = (0, m.q)({
				proxyURL: l.proxyUrl,
				url: l.url
			});
		return i in I && (r.onClick = I[i]), r;
	});
	return (0, t.jsx)('div', { children: (0, t.jsx)(s.Z, { items: S }) });
}
