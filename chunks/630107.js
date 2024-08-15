n.r(t),
	n.d(t, {
		default: function () {
			return v;
		}
	});
var a = n(735250),
	s = n(470079),
	i = n(873546),
	r = n(442837),
	l = n(481060),
	o = n(893776),
	c = n(830064),
	u = n(388905),
	d = n(625128),
	p = n(362762),
	m = n(353926),
	x = n(703656),
	_ = n(314897),
	E = n(626135),
	b = n(471985),
	N = n(46140),
	g = n(981631),
	I = n(186901),
	f = n(689938),
	h = n(309687),
	j = n(821744);
r.ZP.initialize();
let A = i.tq || i.Em,
	T = 'inventory';
function v(e) {
	let { match: t } = e,
		n = (0, r.e7)([p.Z], () => p.Z.getState('quests')),
		i = (0, r.e7)([m.Z], () => m.Z.hasLoadedExperiments),
		v = t.params.questId,
		O = (0, b.Z)(N.dr.CODED_LINK),
		L = (0, r.e7)([_.default], () => _.default.isAuthenticated());
	if (
		(s.useEffect(() => {
			L && !i && o.Z.getExperiments();
		}, [L, i]),
		s.useEffect(() => {
			if (!A)
				null == n && i
					? (E.default.track(g.rMx.QUEST_SHARE_LINK_DEEP_LINKED_INTO_DESKTOP_CLIENT, { quest_id: v }),
						O
							? d.Z.openNativeAppModal('quests', g.Etm.DEEP_LINK, {
									type: I.jE.QUEST_HOME,
									params: { questId: v }
								})
							: d.Z.openNativeAppModal('quests', g.Etm.DEEP_LINK, {
									type: I.jE.USER_SETTINGS,
									params: { section: T }
								}))
					: n === g.kEZ.OPEN_FAIL && (O ? (0, x.dL)(g.Z5c.QUEST_HOME) : (0, x.dL)(g.Z5c.SETTINGS(T)));
		}, [n, i, O, v]),
		A)
	)
		return (0, a.jsxs)('div', {
			className: h.mobileWebContainer,
			children: [
				(0, a.jsx)('img', {
					src: j,
					alt: '',
					className: h.mobileWebImage
				}),
				(0, a.jsx)(l.Heading, {
					variant: 'display-lg',
					color: 'text-brand',
					children: f.Z.Messages.QUESTS_LANDING_PAGE_ERROR_HEADING
				}),
				(0, a.jsx)(l.Text, {
					variant: 'text-md/normal',
					className: h.mobileWebCopy,
					children: O ? f.Z.Messages.QUESTS_LANDING_PAGE_MOBILE_WEB_BODY_DESKTOP_AND_MOBILE_QUEST_HOME : f.Z.Messages.QUESTS_LANDING_PAGE_MOBILE_WEB_BODY_DESKTOP_AND_MOBILE
				})
			]
		});
	let S = null == n || n === g.kEZ.OPENING || n === g.kEZ.OPEN_FAIL;
	return (0, a.jsxs)(a.Fragment, {
		children: [
			(0, a.jsx)(c.Z, {
				className: h.backgroundArtwork,
				preserveAspectRatio: 'xMinYMin slice'
			}),
			(0, a.jsx)('div', {
				className: h.container,
				children: (0, a.jsx)(u.ZP, {
					children: S
						? (0, a.jsxs)(a.Fragment, {
								children: [(0, a.jsx)(u.Dx, { children: f.Z.Messages.APP_OPENING }), (0, a.jsx)(u.Hh, {})]
							})
						: (0, a.jsxs)(a.Fragment, {
								children: [
									(0, a.jsx)(u.Dx, {
										className: h.appOpenedTitle,
										children: f.Z.Messages.APP_OPENED_TITLE
									}),
									(0, a.jsx)(u.DK, { children: f.Z.Messages.DEEPLINK_BROWSER_APP_OPENED })
								]
							})
				})
			})
		]
	});
}
