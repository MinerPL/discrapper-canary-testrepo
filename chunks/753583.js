a(47120);
var t = a(735250),
	r = a(470079),
	i = a(120356),
	n = a.n(i),
	l = a(418435),
	o = a.n(l),
	c = a(442837),
	d = a(481060),
	E = a(558324),
	S = a(367907),
	_ = a(999382),
	m = a(626135),
	R = a(938502),
	x = a(296386),
	u = a(219369),
	g = a(981631),
	h = a(203377),
	I = a(689938),
	C = a(457172);
let p = /^[A-Za-z0-9\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF-]+$/u;
s.Z = (e) => {
	var s;
	let { guild: a, guildMetadata: i, headerId: l } = e,
		[T, N] = r.useState(!1),
		v = (0, c.e7)([_.Z], () => 'keywords' in _.Z.getErrors()),
		O = (e) => {
			if (p.test(e)) N(!1);
			else {
				N(!0);
				return;
			}
			if ((null == a ? void 0 : a.id) == null) return;
			let { keywords: s } = i;
			!(s.length >= h.G7) && x.zH(a.id, o()([...s, e.toLowerCase()]));
		},
		D = (e) => {
			O(e),
				m.default.track(g.rMx.DISCOVERY_SETUP_POPULAR_TAG_CLICKED, {
					tag: e,
					primary_category_id: i.primaryCategoryId,
					...(0, S.hH)(a.id)
				});
		},
		f = T
			? I.Z.Messages.SERVER_DISCOVERY_TAGS_ERROR_MSG_DASHES_ONLY
			: v
				? I.Z.Messages.SERVER_DISCOVERY_BLOCKED_WORD_LEARN_MORE.format({
						onLearnMoreClick: () => {
							(0, u.lW)({
								articleId: g.BhN.SERVER_DISCOVERY_GUIDELINES,
								guildId: a.id,
								modalStep: u.tK.TAGS
							});
						}
					})
				: null,
		b = new Set(i.keywords);
	return (0, t.jsxs)('div', {
		className: C.container,
		children: [
			(0, t.jsxs)('div', {
				className: C.content,
				children: [
					(0, t.jsx)('div', { className: n()(C.stepImage, C.tagImage) }),
					(0, t.jsx)(d.Heading, {
						variant: 'heading-xl/semibold',
						className: C.header,
						id: l,
						children: I.Z.Messages.SERVER_DISCOVERY_TAGS
					}),
					(0, t.jsx)(d.Text, {
						color: 'none',
						variant: 'text-md/normal',
						className: C.headerCaption,
						children: I.Z.Messages.SERVER_DISCOVERY_SEARCH_SUBHEADING
					})
				]
			}),
			(0, t.jsxs)(d.FormSection, {
				className: C.form,
				children: [
					(0, t.jsx)(d.FormTitle, {
						required: !0,
						children: I.Z.Messages.SERVER_DISCOVERY_TAGS
					}),
					(0, t.jsx)(d.FormText, {
						type: d.FormTextTypes.DESCRIPTION,
						className: C.description,
						children: I.Z.Messages.SERVER_DISCOVERY_TAGS_INPUT_SUBLABEL
					}),
					(0, t.jsx)(E.Z, {
						className: n()(C.tags, { [C.error]: null != f }),
						tags: i.keywords,
						onRemoveTag: (e) => {
							if ((null == a ? void 0 : a.id) == null) return;
							let s = [...i.keywords];
							s.splice(e, 1), x.zH(a.id, s);
						},
						onAddTag: O,
						maxTags: h.G7,
						maxTaxLength: h._0,
						placeholder: (null == i ? void 0 : null === (s = i.keywords) || void 0 === s ? void 0 : s.length) === 0 ? I.Z.Messages.SERVER_DISCOVERY_TAGS_INPUT_PLACEHOLDER : ''
					}),
					(0, t.jsx)(d.Text, {
						className: C.error,
						color: 'text-danger',
						variant: 'text-sm/normal',
						children: f
					})
				]
			}),
			(0, t.jsx)('div', {
				className: C.form,
				children: (0, t.jsx)(d.FormTitle, { children: I.Z.Messages.SERVER_DISCOVERY_POPULAR_TAGS })
			}),
			(0, t.jsx)('div', {
				className: C.tagContainer,
				children: (0, R.P5)(i.primaryCategoryId).map((e) =>
					(0, t.jsx)(
						d.Anchor,
						{
							onClick: () => D(e),
							className: n()(C.tag, { [C.usedTag]: b.has(e) }),
							children: e
						},
						e
					)
				)
			})
		]
	});
};
