n.d(t, {
	PZ: function () {
		return W;
	},
	Qj: function () {
		return Y;
	}
}),
	n(47120);
var i = n(735250),
	l = n(470079),
	r = n(120356),
	a = n.n(r),
	s = n(512722),
	o = n.n(s),
	c = n(613828),
	u = n(91192),
	d = n(873546),
	h = n(442837),
	p = n(481060),
	_ = n(493683),
	f = n(239091),
	g = n(420660),
	m = n(385499),
	C = n(570908),
	I = n(702321),
	E = n(201895),
	N = n(43267),
	x = n(933557),
	S = n(979264),
	v = n(163889),
	Z = n(111028),
	T = n(853856),
	L = n(93687),
	A = n(785232),
	b = n(878857),
	M = n(204197),
	R = n(199902),
	O = n(158776),
	P = n(306680),
	y = n(111583),
	j = n(9156),
	D = n(594174),
	w = n(709054),
	U = n(998502),
	G = n(788307),
	k = n(981631),
	B = n(689938),
	H = n(494954);
let V = U.ZP.getEnableHardwareAcceleration() ? p.AnimatedAvatar : p.Avatar,
	F = {
		offset: {
			top: 2,
			bottom: 2,
			right: 4
		}
	},
	W = (e) =>
		(0, i.jsx)(p.Clickable, {
			className: H.closeButton,
			...e,
			focusProps: {
				offset: {
					top: -2,
					bottom: -2,
					left: -2,
					right: 6
				}
			},
			children: (0, i.jsx)(p.XSmallIcon, {
				size: 'md',
				color: 'currentColor',
				className: H.closeIcon
			})
		}),
	z = () =>
		(0, i.jsx)(p.StarIcon, {
			size: 'xs',
			color: 'currentColor',
			className: H.favoriteIcon
		});
class Y extends l.Component {
	render() {
		let {
			route: e,
			selected: t,
			icon: n,
			iconClassName: l,
			interactiveClassName: r,
			text: s,
			children: o,
			locationState: u,
			onClick: h,
			className: _,
			role: f,
			'aria-posinset': g,
			'aria-setsize': m,
			...I
		} = this.props;
		return (0, i.jsx)(v.Z, {
			className: a()(H.channel, { [H.fullWidth]: d.tq }, _),
			onClick: h,
			role: f,
			focusProps: {
				within: !0,
				...F
			},
			'aria-posinset': g,
			'aria-setsize': m,
			children: (0, i.jsx)(p.Interactive, {
				as: 'div',
				selected: t,
				className: a()(r, H.interactive, H.linkButton, { [H.interactiveSelected]: t }),
				children: (0, i.jsxs)(c.rU, {
					to: {
						pathname: e,
						state: u
					},
					className: H.link,
					...I,
					children: [
						(0, i.jsx)(C.Z, {
							selected: t,
							muted: !1,
							avatar: (0, i.jsx)(n, {
								className: a()(H.linkButtonIcon, l),
								color: 'currentColor'
							}),
							name: s,
							innerClassName: H.avatarWithText
						}),
						o
					]
				})
			})
		});
	}
}
function K(e) {
	let {
			channel: t,
			isGDMFacepileEnabled: r,
			selected: s = !1,
			user: d,
			activities: L,
			applicationStream: R,
			isTyping: O,
			status: y,
			isMobile: D,
			'aria-posinset': w,
			'aria-setsize': U
		} = e,
		[Y, K] = l.useState(!1),
		q = l.useRef(null),
		Q = l.useRef(null),
		{
			avatarSrc: X,
			avatarDecorationSrc: J,
			eventHandlers: $
		} = (0, M.Z)({
			user: d,
			size: p.AvatarSizes.SIZE_32,
			animateOnHover: !(s || Y)
		}),
		ee = (0, h.e7)([j.ZP], () => j.ZP.isChannelMuted(t.getGuildId(), t.id)),
		et = (0, h.e7)([P.ZP], () => P.ZP.getMentionCount(t.id) > 0),
		en = (0, x.ZP)(t),
		ei = (0, h.e7)([T.Z], () => T.Z.isFavorite(t.id)),
		el = () => {
			K(!0);
		},
		er = () => {
			K(!1);
		},
		ea = function (e) {
			let n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
			null != e && (e.preventDefault(), e.stopPropagation()), _.Z.closePrivateChannel(t.id, s, n);
		},
		es = () => {
			_.Z.preload(k.ME, t.id);
		},
		eo = (e) => {
			e.stopPropagation();
		},
		ec = (e) => {
			if (e.target === e.currentTarget) {
				var t;
				null === (t = q.current) || void 0 === t || t.click();
			}
		},
		eu = (e) => {
			t.isMultiUserDM()
				? (0, f.jW)(
						e,
						async () => {
							let { default: e } = await Promise.all([n.e('79695'), n.e('25421')]).then(n.bind(n, 354741));
							return (n) =>
								(0, i.jsx)(e, {
									...n,
									channel: t,
									selected: s
								});
						},
						{ noBlurEvent: !0 }
					)
				: (0, f.jW)(e, async () => {
						let { default: e } = await Promise.all([n.e('79695'), n.e('70474'), n.e('56826'), n.e('38834')]).then(
							n.bind(n, 131404)
						);
						return (n) =>
							(0, i.jsx)(e, {
								...n,
								user: d,
								channel: t,
								channelSelected: s
							});
					});
		},
		ed = (e) => {
			e.preventDefault(), e.stopPropagation();
			let l = B.Z.Messages.LEAVE_GROUP_DM_TITLE.format({ name: en }),
				r = B.Z.Messages.LEAVE_GROUP_DM_BODY.format({ name: en });
			t.isManaged() &&
				((l = B.Z.Messages.LEAVE_GROUP_DM_MANAGED_TITLE.format({ name: en })),
				(r = B.Z.Messages.LEAVE_GROUP_DM_MANAGED_BODY.format({ name: en }))),
				(0, p.openModalLazy)(async () => {
					let { default: e } = await n.e('14604').then(n.bind(n, 960670));
					return (t) =>
						(0, i.jsx)(e, {
							header: l,
							body: r,
							onSubmit: ea,
							...t
						});
				});
		},
		eh = () => {
			let e = {
				className: H.activity,
				textClassName: H.activityText,
				emojiClassName: H.activityEmoji
			};
			return t.isSystemDM()
				? (0, i.jsx)('div', {
						className: H.subtext,
						children: (0, I.Z)(t.id) ? B.Z.Messages.SYSTEM_DM_CHANGELOG_STATUS : B.Z.Messages.SYSTEM_DM_ACTIVITY_TEXT
					})
				: t.isMultiUserDM()
					? (0, i.jsx)('div', {
							className: H.subtext,
							children: B.Z.Messages.MEMBERS_HEADER.format({ members: t.recipients.length + 1 })
						})
					: null != L && L.length > 0
						? (0, i.jsx)(G.Z, {
								...e,
								activities: L,
								applicationStream: R,
								animate: Y,
								hideTooltip: !0,
								user: d
							})
						: null;
		},
		ep = () => {
			let e = p.AvatarSizes.SIZE_32;
			if (t.isMultiUserDM())
				return t.recipients.length >= 2 && r && null == t.icon
					? (0, i.jsx)(A.Z, {
							'aria-hidden': !0,
							recipients: t.recipients,
							size: e,
							isTyping: O,
							status: y
						})
					: (0, i.jsx)(V, {
							...$,
							src: (0, N.x)(t),
							'aria-hidden': !0,
							size: e,
							status: O ? k.Skl.ONLINE : y,
							isTyping: O
						});
			o()(null != d, 'PrivateChannel.renderAvatar: Invalid prop configuration - no user or channel');
			let n = null;
			return (
				!d.isSystemUser() && (n = (0, g.Z)(L) ? k.Skl.STREAMING : y),
				(0, i.jsx)(V, {
					...$,
					size: p.AvatarSizes.SIZE_32,
					src: X,
					avatarDecoration: J,
					status: n,
					isMobile: D,
					isTyping: O,
					'aria-label': d.username,
					statusTooltip: !0
				})
			);
		},
		e_ = t.isMultiUserDM(),
		ef = t.isSystemDM(),
		eg = (0, b.Q)(),
		em =
			e_ || ef || t.type !== k.d4z.DM || (null == d ? void 0 : d.clan) == null
				? en
				: (0, i.jsxs)(i.Fragment, {
						children: [
							en,
							(0, i.jsx)(S.ZP, {
								clan: null == d ? void 0 : d.clan,
								userId: null == d ? void 0 : d.id,
								inline: !0,
								disableGuildProfile: !0,
								className: H.clanTag
							})
						]
					});
	return (0, i.jsx)(u.mh, {
		id: t.id,
		children: (e) => {
			let { role: n, ...l } = e;
			return (0, i.jsx)(v.Z, {
				className: H.channel,
				role: n,
				focusProps: {
					...F,
					focusTarget: q,
					ringTarget: Q
				},
				ref: Q,
				onMouseEnter: el,
				onMouseLeave: er,
				onMouseDown: es,
				onContextMenu: eu,
				'aria-setsize': U,
				'aria-posinset': w,
				children: (0, i.jsxs)(p.Interactive, {
					className: a()(H.interactive, {
						[H.interactiveSystemDM]: eg && ef,
						[H.interactiveSelected]: s
					}),
					as: 'div',
					onClick: ec,
					muted: ee,
					selected: s,
					children: [
						(0, i.jsx)(c.rU, {
							innerRef: q,
							to: k.Z5c.CHANNEL(k.ME, t.id),
							className: H.link,
							'aria-label': (0, E.ZP)({
								channel: t,
								unread: et
							}),
							...l,
							children: (0, i.jsx)(C.Z, {
								avatar: ep(),
								selected: s,
								highlighted: et,
								muted: null != ee && ee,
								subText: eh(),
								name: (0, i.jsx)(Z.Z, {
									tooltipClassName: H.overflowTooltip,
									children: em
								}),
								decorators: t.isSystemDM()
									? (0, i.jsx)(m.Z, {
											className: H.decorator,
											type: m.Z.Types.SYSTEM_DM,
											verified: !0
										})
									: null
							})
						}),
						ei ? (0, i.jsx)(z, {}) : null,
						(0, i.jsx)(W, {
							'aria-label': e_ ? B.Z.Messages.LEAVE_GROUP_DM : B.Z.Messages.CLOSE_DM,
							onClick: e_ ? ed : ea,
							onMouseDown: eo
						})
					]
				})
			});
		}
	});
}
t.ZP = (e) => {
	let { channel: t, selected: n, ...l } = e,
		r = (0, h.e7)([D.default], () => D.default.getUser(t.getRecipientId())),
		{
			isStatusIndicatorEnabled: a,
			isTypingIndicatorEnabled: s,
			isFacepileEnabled: o
		} = L.Z.useExperiment({ location: 'private_channel' }, { autoTrackExposure: !0 }),
		c = null == r ? void 0 : r.id,
		u = (0, h.cj)(
			[O.Z, R.Z],
			() => {
				let e;
				if (t.isMultiUserDM()) {
					if (a) {
						let n = O.Z.getState().statuses;
						t.recipients.some((e) => n[e] === k.Skl.ONLINE) && (e = k.Skl.ONLINE);
					}
				} else null != c && (e = O.Z.getStatus(c));
				return {
					status: e,
					activities: null != c ? O.Z.getActivities(c) : null,
					applicationStream: null != c ? R.Z.getAnyStreamForUser(c) : null,
					isMobile: null != c && O.Z.isMobileOnline(c)
				};
			},
			[t, c, a]
		),
		d = (0, h.e7)(
			[D.default, y.Z],
			() => {
				if (t.isMultiUserDM())
					return (
						!!s &&
						w.default.keys(y.Z.getTypingUsers(t.id)).some((e) => {
							var t;
							return e !== (null === (t = D.default.getCurrentUser()) || void 0 === t ? void 0 : t.id);
						})
					);
				if (null != r) return y.Z.isTyping(t.id, t.getRecipientId());
				return !1;
			},
			[t, r, s]
		);
	return t.isMultiUserDM()
		? (0, i.jsx)(K, {
				channel: t,
				selected: n,
				isTyping: d,
				status: u.status === k.Skl.ONLINE ? k.Skl.ONLINE : void 0,
				isGDMFacepileEnabled: o,
				...l
			})
		: (0, i.jsx)(K, {
				channel: t,
				selected: n,
				user: r,
				isTyping: d,
				...l,
				...u
			});
};
