t.r(n),
	t.d(n, {
		default: function () {
			return b;
		}
	}),
	t(653041),
	t(47120);
var i = t(735250),
	l = t(470079),
	a = t(120356),
	E = t.n(a),
	r = t(442837),
	o = t(952265),
	d = t(481060),
	u = t(493683),
	_ = t(700582),
	s = t(100527),
	c = t(906732),
	C = t(933557),
	A = t(471445),
	S = t(734307),
	T = t(359110),
	I = t(814443),
	L = t(210887),
	D = t(131704),
	N = t(699516),
	U = t(944486),
	h = t(914010),
	P = t(594174),
	R = t(186523),
	f = t(553826),
	g = t(823379),
	O = t(407316),
	G = t(937784),
	m = t(689938),
	H = t(49945),
	Z = t(138715),
	v = t(979770);
function p(e) {
	let { channel: n, ChannelIcon: t, selected: l, onClick: a } = e,
		E = (0, C.ZP)(n);
	return (0, i.jsxs)(d.Clickable, {
		className: H.channelRow,
		onClick: () => a(n.id),
		children: [
			l ? (0, i.jsx)(f.Z, { className: H.radioIcon }) : (0, i.jsx)(R.Z, { className: H.radioIcon }),
			(0, i.jsx)(t, {
				className: H.icon,
				size: 'xs',
				color: 'currentColor'
			}),
			(0, i.jsx)(d.Text, {
				variant: 'text-md/medium',
				color: 'interactive-active',
				children: E
			})
		]
	});
}
function M(e) {
	let { guildId: n, selectedChannelId: t, onSelectChannelId: a } = e,
		o = (0, r.e7)([U.Z], () => U.Z.getChannelId()),
		{ guildChannels: u } = (0, r.cj)([S.Z], () => S.Z.getGuildWithoutChangingGuildActionRows(n)),
		_ = l.useMemo(() => {
			let e = [];
			return (
				u.forEachChannel((n) => {
					!1 !== (0, O.W)(n.id) && ((0, D.r8)(n.type) || (0, D.bw)(n.type)) && e.push(n);
				}),
				e.sort((e, n) => (e.id === o ? -1 : n.id === o ? 1 : 0))
			);
		}, [u, o]);
	return 0 === _.length
		? null
		: (0, i.jsxs)(i.Fragment, {
				children: [
					(0, i.jsx)('div', { className: E()(H.divider, H.bottomDivider) }),
					(0, i.jsx)(d.Text, {
						variant: 'eyebrow',
						color: 'interactive-normal',
						className: H.contentPadding,
						children: m.Z.Messages.CLIP_SHARE_SELECT_CHANNEL
					}),
					(0, i.jsx)(d.List, {
						sections: [_.length],
						sectionHeight: 0,
						renderRow: (e) => {
							let { section: n, row: l } = e;
							if (n > 0) return null;
							let E = _[l],
								r = (0, A.KS)(E);
							return null == r
								? null
								: (0, i.jsx)(
										p,
										{
											channel: E,
											ChannelIcon: r,
											selected: t === E.id,
											onClick: a
										},
										E.id
									);
						},
						rowHeight: (e, n) => (e > 0 ? 0 : null != _[n] ? 56 : 0),
						renderSection: () => null,
						className: E()(H.channelList, H.contentPadding),
						fade: !0
					})
				]
			});
}
function x(e) {
	let { friends: n, searchQuery: t, disabled: a, onShareClip: o } = e,
		u = l.useMemo(
			() => (0 === t.length ? n : n.filter((e) => e.username.toLowerCase().includes(t.toLowerCase()))),
			[n, t]
		),
		s = (0, r.e7)([L.Z], () => L.Z.theme);
	return 0 === u.length
		? (0, i.jsxs)(d.EmptyState, {
				theme: s,
				className: H.emptyStateContainer,
				children: [
					(0, i.jsx)(d.EmptyStateImage, {
						width: 415,
						height: 75,
						lightSrc: v,
						darkSrc: Z
					}),
					(0, i.jsx)(d.EmptyStateText, { note: m.Z.Messages.FRIEND_REQUEST_NO_RESULTS_FOUND })
				]
			})
		: (0, i.jsx)(d.List, {
				sections: [u.length],
				sectionHeight: 0,
				renderRow: (e) => {
					let { section: n, row: t } = e;
					if (n > 0) return null;
					let l = u[t],
						E = u[t].username;
					return (0, i.jsxs)(
						'div',
						{
							className: H.userRow,
							children: [
								(0, i.jsx)(_.Z, { user: l }),
								(0, i.jsx)(d.Text, {
									className: H.username,
									variant: 'text-md/normal',
									children: E
								}),
								(0, i.jsx)(d.Button, {
									disabled: a,
									onClick: () => o(l.id),
									className: H.__invalid_friendShareButton,
									look: d.ButtonLooks.OUTLINED,
									size: d.ButtonSizes.SMALL,
									color: d.ButtonColors.BRAND,
									children: (0, i.jsx)(d.Text, {
										variant: 'text-sm/medium',
										children: m.Z.Messages.SHARE
									})
								})
							]
						},
						l.id
					);
				},
				rowHeight: (e, n) => (e > 0 ? 0 : null != u[n] ? 52 : 0),
				renderSection: () => null,
				className: E()(H.friendsList, H.contentPadding),
				fade: !0
			});
}
function b(e) {
	let { clip: n, editMetadata: t, transitionState: a, onClose: _ } = e,
		[C, A] = l.useState(''),
		[S, L] = l.useState(!1),
		[D, U] = l.useState(null),
		R = (0, r.Wu)([N.Z], () => N.Z.getFriendIDs()),
		f = (0, r.Wu)(
			[I.Z, P.default],
			() =>
				R.map((e) => P.default.getUser(e))
					.filter(g.lm)
					.sort((e, n) => {
						var t, i, l, a;
						return (
							(null !== (l = null === (t = I.Z.getUserAffinity(n.id)) || void 0 === t ? void 0 : t.affinity) &&
							void 0 !== l
								? l
								: 0) -
							(null !== (a = null === (i = I.Z.getUserAffinity(e.id)) || void 0 === i ? void 0 : i.affinity) &&
							void 0 !== a
								? a
								: 0)
						);
					}),
			[R]
		),
		O = (0, r.e7)([h.Z], () => h.Z.getGuildId()),
		{ analyticsLocations: Z } = (0, c.ZP)(s.Z.CLIPS_SHARE_MODAL);
	async function v(e) {
		let i = null != e ? e : D;
		if (null != i) {
			L(!0);
			try {
				await (0, G.e)(n, {
					channelId: i,
					editMetadata: t,
					analyticsLocations: Z
				}),
					null == e && (0, T.Kh)(i),
					o.pT();
			} catch (e) {
			} finally {
				L(!1);
			}
		}
	}
	async function p(e) {
		let n = await u.Z.openPrivateChannel(e);
		await v(n);
	}
	return (0, i.jsxs)(d.ModalRoot, {
		size: d.ModalSize.SMALL,
		transitionState: a,
		children: [
			(0, i.jsx)(d.Heading, {
				className: E()(H.title, H.contentPadding),
				variant: 'heading-lg/semibold',
				color: 'interactive-active',
				children: m.Z.Messages.CLIP_SHARE_MODAL_TITLE
			}),
			(0, i.jsx)(d.Text, {
				variant: 'text-md/normal',
				color: 'text-normal',
				className: E()(H.subtitle, H.contentPadding),
				children: m.Z.Messages.CLIP_SHARE_MODAL_SUBTITLE
			}),
			(0, i.jsx)(d.SearchBar, {
				className: H.searchBar,
				query: C,
				onChange: A,
				size: d.SearchBar.Sizes.MEDIUM,
				onClear: function () {
					A('');
				},
				placeholder: m.Z.Messages.INVITE_SEARCH_FOR_FRIENDS
			}),
			(0, i.jsx)('div', { className: E()(H.divider, H.topDivider) }),
			(0, i.jsx)(x, {
				searchQuery: C,
				friends: f,
				onShareClip: p,
				disabled: S
			}),
			null != O &&
				(0, i.jsx)(M, {
					guildId: O,
					selectedChannelId: D,
					onSelectChannelId: U
				}),
			(0, i.jsxs)(d.ModalFooter, {
				children: [
					(0, i.jsx)(d.Button, {
						disabled: null == D,
						submitting: S,
						color: d.Button.Colors.BRAND,
						onClick: () => v(),
						children: m.Z.Messages.CLIPS_EDIT_SHARE_CLIP
					}),
					(0, i.jsx)(d.Button, {
						submitting: S,
						look: d.ButtonLooks.LINK,
						onClick: _,
						color: d.ButtonColors.PRIMARY,
						children: m.Z.Messages.BACK
					})
				]
			})
		]
	});
}
