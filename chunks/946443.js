n.d(t, {
	Z: function () {
		return x;
	},
	h: function () {
		return M;
	}
}),
	n(47120);
var i = n(735250),
	a = n(470079),
	s = n(120356),
	r = n.n(s),
	l = n(525654),
	o = n.n(l),
	c = n(91192),
	u = n(442837),
	d = n(524437),
	_ = n(481060),
	E = n(570140),
	I = n(607070),
	m = n(724757),
	T = n(626135),
	h = n(585483),
	N = n(143316),
	f = n(240126),
	C = n(791914),
	p = n(147522),
	g = n(809780),
	S = n(981631),
	A = n(689938),
	R = n(758046);
function x(e) {
	let { setTab: t, onJump: n, showTutorial: s, setSeenTutorial: l, closePopout: x, badgeState: M } = e,
		v = a.useRef(null),
		[L, Z] = (0, g.ZP)(v),
		{ loadState: P, channels: b } = L,
		{ maybeLoadMore: D, markAllRead: j } = Z;
	(function (e, t, n) {
		a.useLayoutEffect(() => {
			var i;
			let { scrollToChannelIndex: a } = t;
			n.clearScrollToChannelIndex();
			let { current: s } = e;
			if (null == s || null == a) return;
			let r = null === (i = s.getScrollerNode()) || void 0 === i ? void 0 : i.children;
			if (null == r) return;
			let l = r[a];
			if (null == l) return;
			let { scrollTop: o, scrollHeight: c } = s.getScrollerState();
			(l.offsetTop < o || l.offsetTop > o + c) && s.scrollTo({ to: l.offsetTop });
		});
	})(v, L, Z),
		(function (e, t) {
			a.useEffect(() => {
				let n = () => {
					let n = e.channels.find((e) => !e.collapsed);
					null != n && t.markChannelRead(n);
				};
				return (
					h.S.subscribe(S.CkL.MARK_TOP_INBOX_CHANNEL_READ, n),
					() => {
						h.S.unsubscribe(S.CkL.MARK_TOP_INBOX_CHANNEL_READ, n);
					}
				);
			}, [t, e.channels]);
		})(L, Z),
		a.useEffect(() => {
			T.default.track(S.rMx.OPEN_POPOUT, { type: 'Inbox' });
		}, []),
		a.useEffect(
			() => (
				E.Z.subscribe('CONNECTION_OPEN', x),
				() => {
					E.Z.unsubscribe('CONNECTION_OPEN', x);
				}
			),
			[x]
		);
	let U = (0, u.e7)([I.Z], () => I.Z.messageGroupSpacing),
		y = (0, m.Z)('unreads', v);
	if (0 === b.length) {
		var B;
		return (0, i.jsxs)('div', {
			className: R.container,
			children: [
				(0, i.jsx)(C.Z, {
					tab: d.X.UNREADS,
					setTab: t,
					badgeState: M,
					closePopout: x
				}),
				(0, i.jsx)(f.Z, {
					Icon: _.InboxIcon,
					header: A.Z.Messages.UNREADS_EMPTY_STATE_HEADER,
					tip:
						(null === (B = o().os) || void 0 === B ? void 0 : B.family) === 'OS X'
							? A.Z.Messages.UNREADS_EMPTY_STATE_TIP_MAC
							: A.Z.Messages.UNREADS_EMPTY_STATE_TIP
				})
			]
		});
	}
	return (0, i.jsxs)('div', {
		className: r()(R.container, 'group-spacing-'.concat(U)),
		'aria-label': A.Z.Messages.UNREADS_TAB_LABEL,
		children: [
			(0, i.jsx)(C.Z, {
				tab: d.X.UNREADS,
				setTab: t,
				badgeState: M,
				closePopout: x,
				children: (0, i.jsx)(N.Z, {
					type: 'top-header',
					onClick: j
				})
			}),
			(0, i.jsx)(c.bG, {
				navigator: y,
				children: (0, i.jsx)(c.SJ, {
					children: (e) => {
						let { ref: t, ...a } = e;
						return (0, i.jsxs)(_.AdvancedScrollerThin, {
							ref: (e) => {
								var n;
								(v.current = e),
									(t.current = null !== (n = null == e ? void 0 : e.getScrollerNode()) && void 0 !== n ? n : null);
							},
							...a,
							onScroll: P === g.jd.Done ? void 0 : D,
							className: R.scroller,
							children: [
								s ? (0, i.jsx)(O, { setSeenTutorial: l }) : null,
								(0, p.Z)(b, Z, n),
								P === g.jd.Done ? null : (0, i.jsx)(_.Spinner, { className: R.spinner })
							]
						});
					}
				})
			})
		]
	});
}
function O(e) {
	let { setSeenTutorial: t } = e;
	return (0, i.jsxs)('div', {
		className: R.tutorial,
		children: [
			(0, i.jsx)('div', {
				className: R.tutorialIcon,
				children: (0, i.jsx)(_.InboxIcon, {
					size: 'md',
					color: 'currentColor'
				})
			}),
			(0, i.jsxs)('div', {
				children: [
					(0, i.jsx)(_.Heading, {
						className: R.__invalid_tutorialHeader,
						variant: 'heading-md/semibold',
						children: A.Z.Messages.UNREADS_TUTORIAL_HEADER
					}),
					(0, i.jsx)(_.Text, {
						color: 'header-secondary',
						variant: 'text-sm/normal',
						children: A.Z.Messages.UNREADS_TUTORIAL_BODY
					}),
					(0, i.jsx)(_.Button, {
						className: R.tutorialButton,
						onClick: t,
						size: _.Button.Sizes.SMALL,
						children: A.Z.Messages.TUTORIAL_CLOSE
					})
				]
			})
		]
	});
}
function M(e) {
	let { setTab: t, badgeState: n, closePopout: a } = e;
	return (0, i.jsxs)('div', {
		className: R.container,
		children: [
			(0, i.jsx)(C.Z, {
				tab: d.X.UNREADS,
				setTab: t,
				badgeState: n,
				closePopout: a
			}),
			(0, i.jsx)(f.Z, {
				Icon: _.InboxIcon,
				disableStars: !0,
				header: A.Z.Messages.UNREADS_EMPTY_STATE_ERROR_HEADER,
				tip: A.Z.Messages.UNREADS_EMPTY_STATE_ERROR_SUBTITLE
			})
		]
	});
}
