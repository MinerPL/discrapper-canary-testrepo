n.d(t, {
	O: function () {
		return g;
	}
});
var l = n(735250),
	a = n(470079),
	s = n(120356),
	i = n.n(s),
	r = n(392711),
	o = n(481060),
	c = n(686546),
	u = n(124347),
	d = n(937889),
	h = n(930282),
	_ = n(546432),
	f = n(689938),
	E = n(480532);
function g(e) {
	var t, n, s, g, m, S;
	let { message: I, forwardOptions: A } = e,
		p = null == A ? void 0 : A.onlyAttachmentIds,
		C = null == A ? void 0 : A.onlyEmbedIndices,
		N =
			null !== (n = null === (t = I.messageSnapshots[0]) || void 0 === t ? void 0 : t.message) && void 0 !== n ? n : I,
		L = N.attachments;
	null != p ? (L = N.attachments.filter((e) => p.includes(e.id))) : null != C && (L = []);
	let b = N.embeds;
	null != C ? (b = N.embeds.filter((e, t) => C.includes(t))) : null != p && (b = []),
		(null != C || ('' === N.content && b.length > 0)) && (N = N.set('content', b.map((e) => e.url).join('\n')));
	let v = '' !== N.content && null == p,
		T = a.useMemo(
			() =>
				v
					? (0, d.ZP)(I, {
							formatInline: !0,
							allowLinks: !0,
							allowHeading: !0,
							allowList: !0,
							hideSimpleEmbedContent: !1,
							contentMessage: N
						}).content
					: null,
			[N, v, I]
		),
		x = L.length,
		Z = null,
		y = null,
		M = null;
	if (x > 0 || b.length > 0) {
		let e = (0, r.countBy)(L, (e) => (0, _.aw)(e, !0)),
			t = null !== (m = e.IMAGE) && void 0 !== m ? m : 0,
			n = null !== (S = e.VIDEO) && void 0 !== S ? S : 0;
		t > 0 && n > 0
			? ((Z = f.Z.Messages.NUM_IMAGES_VIDEOS.format({
					image_count: t,
					video_count: n
				})),
				(y = o.ImagesIcon))
			: n > 0
				? ((Z = f.Z.Messages.NUM_VIDEOS.format({ count: n })), (y = o.CirclePlayIcon))
				: t > 0
					? ((Z = f.Z.Messages.NUM_IMAGES.format({ count: t })), (y = 1 === t ? o.ImageIcon : o.ImagesIcon))
					: ((Z = f.Z.Messages.NUM_ATTACHMENTS.format({ count: x })), (y = o.AttachmentIcon)),
			n > 0 && x === n
				? (M = (0, l.jsxs)('div', {
						className: i()(E.attachmentPreview, E.attachmentPreviewVideo),
						children: [
							(0, l.jsx)(u.Z, {
								className: E.thumbnail,
								src: L[0].proxy_url,
								width: 56,
								height: 56
							}),
							(0, l.jsx)(o.CirclePlayIcon, {
								className: E.playIcon,
								size: 'md',
								color: 'white'
							})
						]
					}))
				: x > 0
					? (M = (0, l.jsx)('div', {
							className: E.attachmentPreview,
							children: (0, l.jsx)(u.Z, {
								src: L[0].proxy_url,
								width: 56,
								height: 56
							})
						}))
					: (null === (g = b[0]) || void 0 === g
							? void 0
							: null === (s = g.thumbnail) || void 0 === s
								? void 0
								: s.proxyURL) != null &&
						(M = (0, l.jsx)('div', {
							className: E.attachmentPreview,
							children: (0, l.jsx)(u.Z, {
								src: b[0].thumbnail.proxyURL,
								width: 56,
								height: 56
							})
						}));
	}
	return (
		x > 1 &&
			null != M &&
			(M = (0, l.jsxs)('div', {
				className: E.attachmentPreviewOverflow,
				children: [
					(0, l.jsx)(c.ZP, {
						mask: c.ZP.Masks.FORWARD_ATTACHMENT_PILE_OVERFLOW,
						width: 56,
						height: 56,
						children: M
					}),
					(0, l.jsxs)(o.Text, {
						className: E.overflowCount,
						variant: 'text-xs/semibold',
						color: 'text-normal',
						children: ['+', x - 1]
					})
				]
			})),
		(0, l.jsxs)('div', {
			className: E.forwardPreview,
			children: [
				(0, l.jsx)('div', { className: E.quote }),
				(0, l.jsxs)('div', {
					className: E.contentWrapper,
					children: [
						v &&
							(0, l.jsx)(h.ZP, {
								className: i()(E.forwardPreviewMessage, x > 0 && E.hasAttachments),
								message: I,
								content: T
							}),
						x > 0 &&
							(0, l.jsxs)('div', {
								className: E.attachmentRow,
								children: [
									null != y &&
										(0, l.jsx)(y, {
											size: 'custom',
											width: v ? 18 : 20,
											color: o.tokens.colors.TEXT_LOW_CONTRAST
										}),
									null != Z &&
										(0, l.jsx)(o.Text, {
											variant: v ? 'text-sm/medium' : 'text-md/medium',
											color: 'text-low-contrast',
											children: Z
										})
								]
							})
					]
				}),
				M
			]
		})
	);
}
