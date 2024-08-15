n.d(t, {
	E: function () {
		return g;
	},
	Z: function () {
		return S;
	}
});
var r = n(735250),
	i = n(470079),
	a = n(442837),
	s = n(481060),
	o = n(410575),
	l = n(358221),
	u = n(418469),
	c = n(776031),
	d = n(803647),
	_ = n(199902),
	E = n(131951),
	f = n(594174),
	h = n(5192),
	p = n(358085),
	I = n(981631),
	m = n(65154),
	T = n(689938);
function g(e, t, n) {
	let r = (0, a.e7)([l.Z], () => l.Z.getSelectedParticipantId(e.id)),
		i = (0, a.e7)([_.Z], () => (null != r ? _.Z.getActiveStreamForStreamKey(r) : null), [r]);
	return (0, a.Wu)(
		[f.default],
		() => {
			let r = n
				.filter((e) => e.ownerId !== (null == t ? void 0 : t.id))
				.map((t) => ({
					stream: t,
					username: h.ZP.getName(e.getGuildId(), e.id, f.default.getUser(t.ownerId))
				}));
			return 1 === r.length && r[0].stream.ownerId === (null == i ? void 0 : i.ownerId) ? [] : r;
		},
		[e, i, n, t]
	);
}
function S(e) {
	var t;
	let {
			channel: n,
			currentUser: a,
			activeStreams: l,
			hideSelfOptions: _ = !1,
			showReportOption: f = !1,
			handleGoLive: h,
			onClose: S,
			onSelect: A,
			appContext: N = I.IlC.APP
		} = e,
		v = E.Z.supports(m.AN.DESKTOP_CAPTURE_APPLICATIONS),
		O = null !== (t = l.find((e) => e.ownerId === (null == a ? void 0 : a.id))) && void 0 !== t ? t : null,
		R = g(n, a, l),
		C = (0, c.Z)(O, N),
		y = (0, u.Z)(O, N, I.VqG),
		D = i.useCallback(() => {
			var e, t, n;
			(
				null === (n = E.Z.getGoLiveSource()) || void 0 === n
					? void 0
					: null === (t = n.desktopSource) || void 0 === t
						? void 0
						: null === (e = t.id) || void 0 === e
							? void 0
							: e.startsWith('prepicked:')
			)
				? E.Z.getMediaEngine().eachConnection((e) => {
						e.context === m.Yn.STREAM && e.presentDesktopSourcePicker();
					})
				: h();
		}, [h]),
		L =
			null == O
				? (0, r.jsx)(s.MenuItem, {
						id: 'share-your-screen',
						label: T.Z.Messages.SHARE_YOUR_SCREEN,
						icon: s.ScreenArrowIcon,
						action: h
					})
				: (0, r.jsxs)(r.Fragment, {
						children: [
							p.isPlatformEmbedded
								? (0, r.jsx)(s.MenuItem, {
										id: 'stream-settings',
										label: T.Z.Messages.SCREENSHARE_STREAM_QUALITY,
										children: C
									})
								: null,
							f ? y : null,
							v
								? (0, r.jsx)(s.MenuItem, {
										id: 'change-windows',
										label: T.Z.Messages.SCREENSHARE_CHANGE_WINDOWS,
										icon: s.ScreenArrowIcon,
										action: D
									})
								: null,
							(0, r.jsx)(s.MenuItem, {
								id: 'stop-streaming',
								label: T.Z.Messages.STOP_STREAMING,
								icon: s.ScreenXIcon,
								action: () => (0, d.Z)(O)
							})
						]
					});
	return (0, r.jsx)(o.Z, {
		section: I.jXE.CONTEXT_MENU,
		children: (0, r.jsxs)(s.Menu, {
			onSelect: A,
			navId: 'manage-streams',
			onClose: S,
			'aria-label': null != O ? T.Z.Messages.STOP_STREAMING : T.Z.Messages.SHARE_YOUR_SCREEN,
			children: [
				(0, r.jsx)(s.MenuGroup, {
					children: R.map((e) => {
						let { stream: t, username: n } = e;
						return (0, r.jsx)(
							s.MenuItem,
							{
								id: t.ownerId,
								label: T.Z.Messages.STOP_WATCHING_USER.format({ username: n }),
								icon: s.ScreenXIcon,
								action: () => (0, d.Z)(t)
							},
							'manage-stream-menu'.concat(t.ownerId)
						);
					})
				}),
				_ ? null : L
			]
		})
	});
}
