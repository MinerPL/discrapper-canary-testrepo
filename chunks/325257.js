n(47120);
var i = n(735250),
	l = n(470079),
	r = n(120356),
	a = n.n(r),
	s = n(225857),
	o = n(91192),
	c = n(399606),
	u = n(846519),
	d = n(481060),
	h = n(493683),
	p = n(239091),
	_ = n(153867),
	f = n(35225),
	g = n(703656),
	m = n(769654),
	C = n(271383),
	I = n(771845),
	E = n(727258),
	N = n(276952),
	x = n(249792),
	S = n(40153),
	v = n(593618),
	Z = n(252686),
	T = n(682662),
	L = n(674552),
	A = n(981631),
	b = n(689938),
	M = n(81733);
let R = {
	analyticsSource: {
		page: A.ZY5.GUILD_CHANNEL,
		section: A.jXE.CHANNEL_LIST,
		object: A.qAy.CHANNEL
	}
};
function O(e, t) {
	(0, p.jW)(e, async () => {
		let { default: e } = await Promise.all([
			n.e('96427'),
			n.e('33053'),
			n.e('37581'),
			n.e('7654'),
			n.e('18146'),
			n.e('44156'),
			n.e('14203'),
			n.e('85552'),
			n.e('58227'),
			n.e('75531'),
			n.e('23693'),
			n.e('33213'),
			n.e('3116')
		]).then(n.bind(n, 545135));
		return (n) =>
			(0, i.jsx)(e, {
				...n,
				guild: t
			});
	});
}
t.Z = l.memo(function (e) {
	var t, n, r, p, P;
	let {
			guildNode: y,
			setRef: j,
			onDragStart: D,
			onDragEnd: w,
			route: U,
			guild: G,
			animatable: k,
			selected: B = !1,
			unread: H = !1,
			mediaState: V,
			unavailable: F = !1,
			badge: W = 0,
			contextMenu: z = O,
			draggable: Y = !1,
			sorting: K = !1,
			preloadOnClick: q = !0,
			guildJoinRequestStatus: Q
		} = e,
		{ id: X, parentId: J } = y,
		$ = null !== (t = e.upperBadge) && void 0 !== t ? t : F ? (0, L.Ny)() : null != V ? (0, L.Or)(V) : void 0,
		ee = null !== (n = e.lowerBadge) && void 0 !== n ? n : void 0;
	null == ee && W > 0
		? (ee = null !== (r = (0, L.Ne)(W)) && void 0 !== r ? r : void 0)
		: null == ee &&
			null != Q &&
			(ee = null !== (p = (0, L.jt)({ guildJoinRequestStatus: Q })) && void 0 !== p ? p : void 0);
	let et = null !== (P = e.lowerBadgeSize) && void 0 !== P ? P : { width: (0, d.getBadgeWidthForValue)(W) },
		[{ dragging: en }, ei] = (0, s.c)({
			type: E.eD.GUILD,
			item: () => (
				requestAnimationFrame(() => {
					null == D || D();
				}),
				{
					type: y.type,
					nodeId: y.id
				}
			),
			end() {
				null == w || w(), (0, _.V1)(I.ZP.getCompatibleGuildFolders());
			},
			collect: (e) => ({ dragging: e.isDragging() })
		}),
		el = (0, o.Ie)(null != X ? X : A.lds),
		[er, ea] = l.useState(!1),
		es = !K && er,
		[eo, ec] = l.useState(!1),
		[eu, ed] = l.useState(!1),
		[eh] = l.useState(() => new u.sW(70, () => ed(!0)));
	l.useEffect(() => () => eh.cancel(), [eh]);
	let ep = l.useCallback(() => {
			if (null != U) {
				(0, g.uL)(U, { state: R });
				return;
			}
			(0, m.X)(X, { state: R });
		}, [X, U]),
		e_ = l.useCallback(() => {
			if (null != U || null == G || F || !q) return;
			let e = (0, f.V)(G.id);
			if (null != e) h.Z.preload(G.id, e);
		}, [U, G, F, q]),
		ef = (0, c.e7)([C.ZP], () => C.ZP.isCurrentUserGuest(X)),
		eg = l.useCallback(
			(e) => {
				null != G && !ef && z(e, G);
			},
			[G, z, ef]
		),
		em = l.useCallback(
			(e) => {
				if ('ArrowLeft' === e.key && null != J) {
					var t;
					null === (t = document.querySelector('[aria-owns=folder-items-'.concat(J, ']'))) || void 0 === t || t.focus();
				}
			},
			[J]
		),
		eC = l.useCallback(
			(e) => {
				if (e) {
					eh.delay();
					return;
				}
				eh.cancel(), ed(!1);
			},
			[eh]
		),
		eI = l.useCallback(
			(e) => {
				null == j || j(X, e);
			},
			[X, j]
		);
	if (null == G) return null;
	let eE =
			eu || eo
				? (0, i.jsx)(x.Z, {
						guild: G,
						show: eu,
						active: B,
						onAnimationStart: function () {
							ec(eu);
						},
						onAnimationRest: function () {
							eu || ec(!1);
						}
					})
				: (0, i.jsx)(d.NavItem, {
						ariaLabel: b.Z.Messages.GUILD_TOOLTIP_A11Y_LABEL.format({
							guildName: G.toString(),
							mentions: W
						}),
						name: G.toString(),
						onClick: ep,
						onMouseEnter: function () {
							K || ea(!0);
						},
						onMouseLeave: function () {
							K || ea(!1);
						},
						onMouseDown: e_,
						onContextMenu: eg,
						onKeyDown: em,
						icon: G.getIconURL(96, es && k),
						selected: B || es,
						...el,
						role: 'treeitem'
					}),
		eN = en
			? (0, i.jsx)(S.OG, { children: (0, i.jsx)(Z.Z, {}) })
			: (0, i.jsx)('div', {
					ref: Y ? ei : void 0,
					'data-dnd-name': G.toString(),
					className: a()(M.blobContainer, {
						[M.sorting]: K,
						[M.wobble]: eu,
						[M.selected]: eu || B
					}),
					children: (0, i.jsx)(d.BlobMask, {
						selected: eu || B || es,
						upperBadge: $,
						lowerBadge: ee,
						lowerBadgeSize: et,
						children: eE
					})
				});
	return (0, i.jsxs)(T.H, {
		ref: eI,
		children: [
			(0, i.jsx)(N.Z, {
				hovered: !en && es,
				selected: !en && B,
				unread: !en && H,
				className: M.pill
			}),
			(0, i.jsx)(v.Z, {
				guild: G,
				disabled: K,
				isDragging: en,
				children: eN
			}),
			Y
				? (0, i.jsx)(S.ZP, {
						name: G.name,
						targetNode: y,
						onDragOverChanged: eC
					})
				: null
		]
	});
});
