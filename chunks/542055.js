a.r(t),
	a.d(t, {
		default: function () {
			return Z;
		}
	}),
	a(47120);
var l = a(735250),
	n = a(470079),
	s = a(658722),
	i = a.n(s),
	o = a(392711),
	r = a.n(o),
	c = a(990547),
	d = a(442837),
	u = a(952265),
	m = a(481060),
	p = a(100527),
	C = a(906732),
	v = a(213609),
	h = a(709054),
	x = a(435064),
	g = a(39604),
	L = a(680056),
	f = a(10217),
	E = a(410426),
	N = a(207346),
	S = a(356659),
	I = a(63676);
function Z(e) {
	let { channelId: t, onClose: s, transitionState: o } = e,
		[Z, _] = n.useState(''),
		[j, M] = n.useState('descending'),
		[T, b] = n.useState(!0),
		[k, P] = n.useState(null),
		y = n.useDeferredValue(Z),
		R = (0, d.e7)([x.Z], () => x.Z.getClips()),
		D = (0, d.e7)([x.Z], () => x.Z.getPendingClips()),
		A = (0, d.e7)([x.Z], () => x.Z.getSettings().storageLocation),
		B = (0, d.Wu)([x.Z], () => x.Z.getNewClipIds()),
		{ analyticsLocations: H } = (0, C.ZP)(p.Z.CLIPS_GALLERY),
		w = n.useMemo(() => [...D, ...R], [R, D]);
	(0, v.Z)(
		{
			type: c.ImpressionTypes.MODAL,
			name: c.ImpressionNames.CLIP_GALLERY_VIEWED,
			properties: { number_of_clips_loaded: w.length }
		},
		{ disableTrack: T },
		[w.length, T]
	),
		n.useEffect(
			() => (
				(0, g.eL)(),
				() => {
					(0, g.eL)(), (0, g.zq)();
				}
			),
			[]
		);
	let V = n.useMemo(
		() =>
			r()(w)
				.filter((e) => {
					if ('' === y.trim()) return !0;
					let t = y.toLowerCase();
					return (
						(null != e.name && '' !== e.name && i()(t, e.name.toLowerCase())) || i()(t, e.applicationName.toLowerCase())
					);
				})
				.sort((e, t) =>
					'ascending' === j ? h.default.compare(e.id, t.id) : 'descending' === j ? h.default.compare(t.id, e.id) : 0
				)
				.chunk(3)
				.value(),
		[w, y, j]
	);
	n.useEffect(() => {
		(async function e() {
			b(!0);
			try {
				await g.jv(A);
			} finally {
				b(!1);
			}
		})();
	}, [A]);
	let O = n.useCallback(
			(e) => {
				(0, m.openModalLazy)(
					async () => {
						let { default: n } = await a.e('61526').then(a.bind(a, 22989));
						return (a) =>
							(0, l.jsx)(n, {
								...a,
								channelId: t,
								clip: e
							});
					},
					{ modalKey: S.Ut }
				);
			},
			[t]
		),
		{ onShareClick: z } = (0, L.Z)({
			channelId: t,
			setExporting: P
		}),
		F = n.useCallback((e, t) => {
			(0, m.openModalLazy)(async () => {
				let { default: n } = await a.e('15915').then(a.bind(a, 799677));
				return (a) =>
					(0, l.jsx)(n, {
						clip: e,
						...a,
						onBeforeDelete: t,
						onAfterDelete: () => a.onClose()
					});
			});
		}, []),
		G = n.useCallback(
			(e) => {
				let { row: t } = e,
					a = V[t];
				return (0, l.jsx)(
					'div',
					{
						className: I.clipsRow,
						children: a.map((e) => {
							let t = 0 === e.length;
							return (0, l.jsx)(
								f.Z,
								{
									actionsDisabled: null != k || t,
									exporting: k === e.id,
									isNew: B.includes(e.id),
									onDelete: F,
									onEdit: O,
									onShare: (e) =>
										z({
											clip: e,
											onShareComplete: () => u.Mr(S.Qr)
										}),
									clip: e
								},
								e.id
							);
						})
					},
					'clips-gallery-'.concat(t)
				);
			},
			[V, B, k, z, F, O]
		),
		Y =
			T || 0 !== V.length
				? T
					? (0, l.jsx)('div', {
							className: I.spinnerContainer,
							children: (0, l.jsx)(m.Spinner, {})
						})
					: (0, l.jsx)(m.List, {
							className: I.clipGrid,
							sections: [V.length],
							sectionHeight: 0,
							rowHeight: 328.25,
							renderRow: G
						})
				: (0, l.jsx)(E.Z, {
						isEmptyBecauseQuery: w.length > 0,
						closePopout: s
					});
	return (0, l.jsx)(m.ModalRoot, {
		size: m.ModalSize.DYNAMIC,
		transitionState: o,
		className: I.root,
		children: (0, l.jsxs)(C.Gt, {
			value: H,
			children: [
				(0, l.jsx)(N.Z, {
					onClose: s,
					filterQuery: Z,
					setFilterQuery: _,
					sortOrder: j,
					setSortOrder: M
				}),
				Y
			]
		})
	});
}
