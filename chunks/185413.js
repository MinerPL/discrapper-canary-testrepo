n.r(t),
	n.d(t, {
		AddMembersBody: function () {
			return p;
		},
		MemberRoleSelector: function () {
			return N;
		},
		default: function () {
			return v;
		}
	}),
	n(47120),
	n(653041);
var s = n(735250),
	l = n(470079),
	a = n(442837),
	r = n(481060),
	i = n(741361),
	o = n(461745),
	c = n(600164),
	d = n(313201),
	u = n(131704),
	m = n(592125),
	h = n(271383),
	x = n(430824),
	E = n(626135),
	S = n(934415),
	R = n(892880),
	T = n(226951),
	M = n(605436),
	g = n(971628),
	b = n(71080),
	f = n(981631),
	A = n(689938),
	L = n(779077);
let y = (0, d.hQ)();
function j(e, t) {
	return t ? e.slice(1) : e;
}
function p(e) {
	let t,
		{ guild: n, channel: r, permission: i, pendingAdditions: c, setPendingAdditions: d, isStageChannel: u = null != r && r.isGuildStageVoice(), description: m } = e,
		[E, S] = l.useState(!1),
		[f, L] = l.useState(''),
		y = (0, a.e7)([x.Z], () => x.Z.getRoles(n.id));
	function p(e) {
		let t = j(f.trim(), E);
		return RegExp(''.concat(T.Z.escape(t)), 'i').test(e);
	}
	let v = (0, a.Wu)([h.ZP], () => h.ZP.getMemberIds(n.id));
	E ? (t = []) : u ? (t = M.Wx(n, y, r, i, p)) : 0 === (t = M.ik(n, y, r, i, p)).length && '' === f.trim() && !M.RD(n, y) && (t = M.aq());
	let C = M.iI(v, r, n, i, p),
		{
			placeholderText: w,
			hintText: Z,
			renderEmptyText: _
		} = (function () {
			return {
				placeholderText: A.Z.Messages.PRIVATE_CHANNEL_ADD_MEMBERS_MODAL_PLACEHOLDER,
				hintText: A.Z.Messages.PRIVATE_CHANNEL_ADD_MEMBERS_MODAL_SUBTITLE,
				renderEmptyText: (e) => A.Z.Messages.PRIVATE_CHANNEL_ADD_MEMBERS_MODAL_NO_RESULT.format({ query: e })
			};
		})();
	return (0, s.jsx)(N, {
		pendingAdditions: c,
		query: f,
		onQueryChange: function (e) {
			let t = e.trim(),
				s = '@' === t.charAt(0);
			R.Z.requestMembers(n.id, j(t, s), b.EQ), L(e), S(s);
		},
		onClickRow: function (e) {
			let t = (0, g.G)(e);
			d((n) => {
				let s = { ...n };
				if (t in s) delete s[t];
				else {
					let n;
					e.rowType === b.aC.ROLE || e.rowType === b.aC.ADMINISTRATOR
						? (n = {
								type: o.Fj.ROLE,
								label: e.name,
								color: e.colorString
							})
						: (e.rowType === b.aC.MEMBER || e.rowType === b.aC.OWNER) &&
							(n = {
								type: o.Fj.MEMBER,
								label: e.name,
								avatar: e.avatarURL
							}),
						null != n &&
							(s[t] = {
								display: n,
								row: e
							});
				}
				return s;
			});
		},
		onRemovePendingAddition: function (e) {
			d((t) => {
				let { [e]: n, ...s } = t;
				return s;
			});
		},
		roles: t,
		members: C,
		placeholderText: w,
		hintText: Z,
		renderEmptyText: _,
		isStageChannel: u,
		description: m
	});
}
function N(e) {
	let t,
		{ listClassName: n, pendingAdditions: l, query: a, onQueryChange: i, onClickRow: o, onRemovePendingAddition: c, roles: d, members: u, placeholderText: m, hintText: h, renderEmptyText: x, isStageChannel: E, focusSearchAfterReady: S, isReady: R, description: T } = e;
	return (0, s.jsxs)('div', {
		className: L.content,
		children: [
			(null == (t = T) && E && (t = A.Z.Messages.CHANNEL_PERMISSIONS_MODERATOR_DESCRIPTION), null == t || '' === t)
				? null
				: (0, s.jsx)(r.Text, {
						color: 'header-secondary',
						className: L.description,
						variant: 'text-sm/normal',
						children: t
					}),
			(0, s.jsx)(g.Z, {
				listClassName: n,
				pendingAdditions: l,
				query: a,
				onQueryChange: i,
				onClickRow: o,
				onRemovePendingAddition: c,
				roles: d,
				members: u,
				placeholderText: m,
				hintText: h,
				renderEmptyText: x,
				disabledText: E ? A.Z.Messages.CHANNEL_PERMISSIONS_ROLE_ALREADY_HAS_PERMISSIONS : null,
				focusSearchAfterReady: S,
				isReady: R
			})
		]
	});
}
function v(e) {
	let { transitionState: t, onClose: n, channelId: o, newChannel: d, inSettings: h } = e,
		[R, T] = l.useState(!1),
		[M, g] = l.useState({}),
		j = (0, a.e7)([m.Z], () => m.Z.getChannel(o), [o]),
		N = (0, a.e7)([x.Z], () => x.Z.getGuild(null == j ? void 0 : j.getGuildId()));
	if (
		(l.useEffect(() => {
			E.default.track(f.rMx.OPEN_MODAL, { type: 'Grant Channel Access' });
		}, []),
		null == j || null == N)
	)
		return null;
	let v = d && 0 === Object.keys(M).length;
	async function C() {
		if (null == j || 0 === Object.keys(M).length) {
			n();
			return;
		}
		T(!0);
		try {
			await (function (e, t, n) {
				let s = [];
				return (
					Object.values(t).forEach((t) => {
						let { row: n } = t;
						null != n.id && '' !== n.id && (n.rowType === b.aC.ROLE ? s.push((0, S.rX)(n.id, e.type)) : n.rowType === b.aC.MEMBER && s.push((0, S.jZ)(n.id, e.type)));
					}),
					(0, i.hw)(e.id, s, n)
				);
			})(j, M, h),
				n(),
				T(!1);
		} catch (e) {
			T(!1);
		}
	}
	let w = (0, u.zi)(j.type) ? r.TextLockIcon : r.VoiceLockIcon;
	return (0, s.jsxs)(r.ModalRoot, {
		transitionState: t,
		size: r.ModalSize.SMALL,
		'aria-labelledby': y,
		className: L.modalRoot,
		children: [
			(0, s.jsxs)(r.ModalHeader, {
				separator: !1,
				direction: c.Z.Direction.VERTICAL,
				align: c.Z.Align.CENTER,
				className: L.header,
				children: [
					(0, s.jsx)(r.Heading, {
						id: y,
						variant: 'heading-xl/semibold',
						children: A.Z.Messages.CHANNEL_PERMISSIONS_ADD_MEMBERS_TITLE
					}),
					(0, s.jsxs)(r.Text, {
						variant: 'text-md/normal',
						color: 'header-secondary',
						className: L.headerSubtitle,
						children: [
							(0, s.jsx)(w, {
								size: 'xs',
								color: 'currentColor',
								className: L.headerSubtitleIcon
							}),
							j.name
						]
					})
				]
			}),
			(0, s.jsx)(p, {
				guild: N,
				channel: j,
				permission: j.accessPermissions,
				pendingAdditions: M,
				setPendingAdditions: g
			}),
			(0, s.jsxs)(r.ModalFooter, {
				children: [
					!v &&
						(0, s.jsxs)(s.Fragment, {
							children: [
								(0, s.jsx)(r.Button, {
									onClick: C,
									look: r.Button.Looks.FILLED,
									size: r.Button.Sizes.SMALL,
									className: L.button,
									submitting: R,
									children: A.Z.Messages.DONE
								}),
								(0, s.jsx)(r.Button, {
									look: r.Button.Looks.LINK,
									color: r.Button.Colors.TRANSPARENT,
									onClick: n,
									size: r.Button.Sizes.SMALL,
									children: A.Z.Messages.CANCEL
								})
							]
						}),
					v &&
						(0, s.jsx)(r.Button, {
							look: r.Button.Looks.FILLED,
							color: r.Button.Colors.PRIMARY,
							onClick: n,
							size: r.Button.Sizes.SMALL,
							children: A.Z.Messages.PRIVATE_CHANNEL_ADD_MEMBERS_MODAL_SKIP
						})
				]
			})
		]
	});
}
