t.d(n, {
	Z: function () {
		return j;
	}
});
var r = t(735250),
	i = t(470079),
	o = t(120356),
	l = t.n(o),
	c = t(392711),
	s = t(772848),
	a = t(873546),
	u = t(481060),
	C = t(425493),
	d = t(612226),
	p = t(714338),
	f = t(782568),
	h = t(252618),
	A = t(434404),
	E = t(677726),
	I = t(703656),
	_ = t(671533),
	L = t(626135),
	g = t(63063),
	m = t(674588),
	T = t(463571),
	R = t(887706),
	v = t(132871),
	O = t(147890),
	P = t(981631),
	N = t(420212),
	Z = t(689938),
	x = t(537547);
let D = g.Z.getArticleURL(P.BhN.APP_DIRECTORY_HEADER_LEARN_MORE);
function M(e) {
	let { onClose: n } = e,
		t = i.useRef(null);
	return (0, r.jsx)('div', {
		ref: t,
		className: x.closeWrapper,
		children: (0, r.jsx)(u.FocusRingScope, {
			containerRef: t,
			children: (0, r.jsx)('div', {
				className: x.closeContent,
				children: (0, r.jsx)(C.Z, {
					className: x.closeIcon,
					closeAction: n,
					keybind: 'ESC'
				})
			})
		})
	});
}
function y(e) {
	let { onTitleClick: n, showsLearnMoreCta: t, guildId: o, children: c } = e,
		s = (0, r.jsxs)(i.Fragment, {
			children: [
				(0, r.jsx)(E.Z, { title: Z.Z.Messages.APP_DIRECTORY }),
				t &&
					(0, r.jsx)(u.Anchor, {
						onClick: function () {
							L.default.track(P.rMx.APP_DIRECTORY_CTA_CLICKED, {
								cta: 'directory-help-center',
								current_page: v.ApplicationDirectoryViews.HOME,
								guild_id: o
							}),
								(0, f.Z)(D);
						},
						children: Z.Z.Messages.LEARN_MORE
					})
			]
		});
	return (0, r.jsxs)('div', {
		className: x.header,
		children: [
			null != n
				? (0, r.jsx)(T.Z, {
						href: P.Z5c.APPLICATION_DIRECTORY,
						children: (0, r.jsx)(u.Clickable, {
							onClick: n,
							className: l()(x.titleContainer, x.clickable),
							children: s
						})
					})
				: (0, r.jsx)('div', {
						className: x.titleContainer,
						children: s
					}),
			c
		]
	});
}
function S(e) {
	let n,
		{ view: t, onClick: i } = e;
	if (null == t) return null;
	switch (t.type) {
		case v.ApplicationDirectoryViews.HOME:
			n = Z.Z.Messages.HOME;
			break;
		case v.ApplicationDirectoryViews.SEARCH:
			n = Z.Z.Messages.SEARCH;
			break;
		case v.ApplicationDirectoryViews.APPLICATION:
			var o;
			n = null !== (o = null == t ? void 0 : t.applicationName) && void 0 !== o ? o : Z.Z.Messages.BACK;
			break;
		default:
			n = Z.Z.Messages.BACK;
	}
	return (0, r.jsxs)(u.Clickable, {
		className: x.back,
		onClick: i,
		children: [
			(0, r.jsx)(_.Z, {
				direction: _.Z.Directions.LEFT,
				className: x.backIcon
			}),
			(0, r.jsx)(u.Heading, {
				className: x.backHeader,
				variant: 'heading-sm/semibold',
				children: n
			})
		]
	});
}
let w = (0, c.debounce)((e) => {
	let { scrollTop: n, scrollOffset: t, scrollHeight: r, location: i, guildId: o, sessionId: l } = e;
	n > 0 &&
		L.default.track(P.rMx.APP_DIRECTORY_PAGE_SCROLLED, {
			scroll_visible_percentile: (n + t) / r,
			guild_id: o,
			location: i,
			directory_session_id: l
		});
}, 200);
function j(e) {
	let { children: n } = e,
		t = i.useRef(null),
		o = (0, R.Z)(),
		c = (0, v.useApplicationDirectoryHistory)((e) => e.guildId),
		C = (0, v.useApplicationDirectoryHistory)((e) => e.entrypoint),
		f = (0, v.useApplicationDirectoryHistory)((e) => e.trackedOpenedFromExternalEntrypoint),
		E = (0, v.getCurrentView)(),
		_ = (0, v.getPreviousView)(),
		g = i.useRef(),
		T = (null == E ? void 0 : E.type) !== v.ApplicationDirectoryViews.HOME,
		D =
			(null == E ? void 0 : E.type) === v.ApplicationDirectoryViews.APPLICATION
				? null == E
					? void 0
					: E.applicationId
				: void 0;
	(0, h.Tt)({ location: Z.Z.Messages.APP_DIRECTORY });
	let j = (null == E ? void 0 : E.type) !== v.ApplicationDirectoryViews.HOME && null != _;
	i.useEffect(() => {
		!f &&
			null == C &&
			(L.default.track(P.rMx.APP_DIRECTORY_OPENED, { source: v.ApplicationDirectoryEntrypointNames.EXTERNAL }),
			(0, v.setTrackedOpenedFromExternalEntrypoint)(!0));
	}, [C, f]),
		i.useEffect(() => {
			if (o) return p.Z.setLayout(d.ZP), p.Z.enable(), () => p.Z.disable();
		}, [o]),
		i.useEffect(() => {
			m.CP();
		}, []),
		i.useEffect(() => {
			o && m.g5();
		}, [o]),
		i.useEffect(() => {
			g.current = (0, s.Z)();
		}, [null == E ? void 0 : E.type, D]);
	let H = i.useCallback(() => {
		var e, n;
		(0, I.uL)(null !== (e = null == C ? void 0 : C.pathname) && void 0 !== e ? e : ''),
			null != C &&
				C.name === v.ApplicationDirectoryEntrypointNames.GUILD_SETTINGS &&
				null != c &&
				A.Z.open(c, null !== (n = C.guildSettingsSection) && void 0 !== n ? n : void 0);
	}, [C, c]);
	return (
		i.useEffect(() => {
			let e = (e) => {
				e.key === N.vn.ESCAPE && (e.stopPropagation(), H());
			};
			return (
				document.addEventListener('keydown', e),
				() => {
					document.removeEventListener('keydown', e);
				}
			);
		}, [H]),
		(0, r.jsx)(r.Fragment, {
			children: (0, r.jsx)(u.AdvancedScroller, {
				className: l()(x.directoryContainer, {
					[x.directoryContainerMobile]: a.tq,
					[x.directoryContainerTablet]: a.Em
				}),
				ref: t,
				onScroll: () => {
					var e, n, r;
					return w({
						scrollTop: null === (e = t.current) || void 0 === e ? void 0 : e.getScrollerState().scrollTop,
						scrollOffset: null === (n = t.current) || void 0 === n ? void 0 : n.getScrollerState().offsetHeight,
						scrollHeight: null === (r = t.current) || void 0 === r ? void 0 : r.getScrollerState().scrollHeight,
						location: null == E ? void 0 : E.type,
						guildId: c,
						sessionId: g.current
					});
				},
				children: (0, r.jsxs)('div', {
					className: x.content,
					children: [
						(0, r.jsx)(y, {
							onTitleClick: T ? O.goHome : void 0,
							showsLearnMoreCta: (null == E ? void 0 : E.type) === v.ApplicationDirectoryViews.HOME,
							guildId: c,
							children: o ? (0, r.jsx)(M, { onClose: H }) : null
						}),
						j &&
							(0, r.jsx)(S, {
								view: _,
								onClick: () => {
									(0, I.op)();
								}
							}),
						n
					]
				})
			})
		})
	);
}
