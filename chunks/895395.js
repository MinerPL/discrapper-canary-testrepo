n.d(t, {
	Z: function () {
		return y;
	},
	d: function () {
		return D;
	}
}),
	n(47120);
var a = n(735250),
	i = n(470079),
	l = n(120356),
	s = n.n(l),
	r = n(468194),
	o = n(442837),
	c = n(477690),
	d = n(481060),
	u = n(100527),
	g = n(906732),
	v = n(703656),
	m = n(430824),
	p = n(594174),
	f = n(115130),
	I = n(566620),
	x = n(520599),
	_ = n(127255),
	h = n(880308),
	C = n(451576),
	T = n(439934),
	E = n(701488),
	S = n(981631),
	b = n(689938),
	N = n(876792),
	j = n(932463);
let M = (0, r.Mg)(c.Z.ACTIVITY_SHELF_SLIDE_ACTIVITY_DIRECTORY_SHELF_GRID_GAP),
	A = (0, r.Mg)(c.Z.ACTIVITY_SHELF_ITEM_ACTIVITY_ITEM_HEIGHT),
	Z = (0, r.Mg)(c.Z.ACTIVITY_SHELF_ITEM_LARGE_ACTIVITY_ITEM_HEIGHT);
function y(e) {
	let { channel: t, guildId: n, locationObject: l, onClose: r, onActivityItemVisible: c, scrollerRef: y } = e,
		[D, L] = i.useState(0),
		O = (0, _.Z)({
			guildId: n,
			enableFilter: !0
		}),
		B = (0, o.e7)([p.default], () => p.default.getCurrentUser()),
		V = (0, o.e7)([m.Z], () => m.Z.getGuild(n), [n]),
		{ analyticsLocations: R } = (0, g.ZP)(u.Z.ACTIVITY_DIRECTORY),
		k = (0, C.Z)(null == t ? void 0 : t.id),
		{ enableAmazonMusicShelfPoster: P } = x.p.useExperiment({ location: 'ActivitiesShelf' }, { autoTrackExposure: !0 }),
		{ isDeveloperActivityShelfEnabled: H, filter: F } = (0, o.cj)([f.Z], () => ({
			filter: f.Z.getFilter(),
			isDeveloperActivityShelfEnabled: f.Z.getIsEnabled()
		}));
	if (
		(i.useEffect(() => {
			let e = y.current;
			if (null != e)
				return (
					e.addEventListener('scroll', t, !1),
					() => {
						if (null != e) e.removeEventListener('scroll', t, !1);
					}
				);
			function t() {
				var e, t;
				L(null !== (t = null === (e = y.current) || void 0 === e ? void 0 : e.scrollTop) && void 0 !== t ? t : 0);
			}
		}, [y]),
		i.useEffect(() => {
			(k || null != n) &&
				(0, I.w1)({
					guildId: n,
					force: !0
				});
		}, [n, k]),
		(0, h.g)(),
		(null == V && !k) || null == B)
	)
		return null;
	let U = O.length > 0;
	function w(e) {
		r();
	}
	return (0, a.jsx)(g.Gt, {
		value: R,
		children: (0, a.jsxs)('div', {
			className: N.scrollContainer,
			children: [
				U
					? (0, a.jsx)('div', {
							className: N.scrollBackgroundContainer,
							style: { top: -D },
							children: (0, a.jsx)('div', {
								className: s()(N.scrollTierBackground),
								style: {
									height: ((e) => {
										let t = 1 === e.length;
										return M + Math.ceil(e.length / 2) * (t ? Z : A);
									})(O)
								}
							})
						})
					: null,
				(0, a.jsxs)(d.Scroller, {
					ref: y,
					className: N.scroller,
					children: [
						(function () {
							if (P) {
								let e = b.Z.Messages.EMBEDDED_ACTIVITIES_AMAZON_MUSIC_PROMO_BANNER_ALT;
								return (0, a.jsxs)(d.Clickable, {
									className: N.posterClickable,
									'aria-label': e,
									onClick: () => {
										var e;
										(e = E.Fu), r(), (0, v.uL)(S.Z5c.ACTIVITY_DETAILS(E.Fu), { sourceLocationStack: R });
									},
									children: [
										(0, a.jsx)('div', {
											className: N.poster,
											children: (0, a.jsx)('img', {
												className: N.posterBackground,
												src: j,
												alt: e
											})
										}),
										(0, a.jsx)('div', { className: N.posterDivider })
									]
								});
							}
							return null;
						})(),
						U
							? (0, a.jsx)('div', {
									className: N.scrollSection,
									children: (0, a.jsx)('div', {
										className: s()(N.shelf),
										children: O.map((e) =>
											(0, a.jsx)(
												T.Z,
												{
													large: 1 === O.length,
													activityItem: e,
													channel: t,
													guildId: n,
													locationObject: l,
													onActivityItemVisible: c,
													onActivityItemSelected: () => {
														var t;
														(t = e.application.id), r();
													}
												},
												'activity-shelf-item-'.concat(e.application.id)
											)
										)
									})
								})
							: H && F.length > 0
								? (0, a.jsx)(d.Text, {
										variant: 'text-md/normal',
										className: N.filterError,
										children: b.Z.Messages.EMBEDDED_ACTIVITIES_DEVELOPER_ACTIVITY_SHELF_FILTER_ERROR.format({ filter: F })
									})
								: (0, a.jsx)('div', {
										className: N.spinnerContainer,
										children: (0, a.jsx)(d.Spinner, {})
									})
					]
				})
			]
		})
	});
}
function D() {
	return (0, a.jsx)(d.Text, {
		variant: 'text-sm/normal',
		children: b.Z.Messages.EMBEDDED_ACTIVITIES_FEEDBACK_SURVEY.format({ surveyURL: E.Es })
	});
}
