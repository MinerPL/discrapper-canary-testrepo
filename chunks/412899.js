E.d(_, {
	UB: function () {
		return B;
	},
	ZP: function () {
		return y;
	}
}),
	E(47120),
	E(411104);
var s = E(735250),
	T = E(470079),
	I = E(120356),
	n = E.n(I),
	t = E(512722),
	A = E.n(t),
	r = E(772848),
	a = E(91192),
	N = E(924826),
	l = E(866442),
	L = E(442837),
	S = E(692547),
	D = E(481060),
	U = E(239091),
	G = E(749210),
	O = E(112724),
	o = E(607070),
	i = E(605436),
	M = E(134433),
	u = E(600164),
	R = E(91218),
	c = E(313201),
	C = E(518738),
	d = E(434404),
	g = E(271383),
	f = E(430824),
	Z = E(496675),
	P = E(594174),
	H = E(700785),
	p = E(944613),
	h = E(981631),
	m = E(689938),
	v = E(11447);
let F = () => Promise.resolve();
function V(e) {
	let { userRoles: _, position: E, ...T } = e,
		I = (0, c.Dt)();
	return (0, s.jsxs)(D.Dialog, {
		className: n()(v.overflowRolesPopout, {
			[v.popoutBottom]: 'bottom' === E,
			[v.popoutTop]: 'top' === E
		}),
		'aria-labelledby': I,
		children: [
			(0, s.jsx)('div', {
				className: v.overflowRolesPopoutArrowWrapper,
				children: (0, s.jsx)('div', { className: v.overflowRolesPopoutArrow })
			}),
			(0, s.jsxs)(u.Z, {
				className: v.overflowRolesPopoutHeader,
				align: u.Z.Align.CENTER,
				children: [
					(0, s.jsx)(D.FlagIcon, {
						size: 'xs',
						color: S.Z.unsafe_rawColors.PRIMARY_400.css,
						className: v.overflowRolesPopoutHeaderIcon
					}),
					(0, s.jsx)('div', {
						className: v.overflowRolesPopoutHeaderText,
						id: I,
						children: m.Z.Messages.ROLES_LIST.format({ numRoles: _.length })
					})
				]
			}),
			(0, s.jsx)(z, {
				...T,
				wrap: !0,
				userRoles: _
			})
		]
	});
}
let B = T.forwardRef(function (e, _) {
	var I, t, A;
	let r;
	let { canRemove: N, className: G, role: O, onRemove: i, guildId: u, disableBorderColor: c, onMouseDown: d } = e,
		{ tabIndex: g, ...f } = (0, a.JA)(O.id),
		Z = (0, C.p9)({
			roleId: O.id,
			size: 16,
			guildId: u
		}),
		P = (0, L.e7)([o.Z], () => o.Z.roleStyle),
		H = (null === (I = O.tags) || void 0 === I ? void 0 : I.guild_connections) === null,
		p = T.useCallback(
			(e) => {
				(0, U.jW)(e, async () => {
					let { default: e } = await E.e('5396').then(E.bind(E, 731646));
					return (_) =>
						(0, s.jsx)(e, {
							..._,
							id: O.id,
							label: m.Z.Messages.COPY_ID_ROLE
						});
				});
			},
			[O.id]
		),
		h = (0, D.useToken)(S.Z.unsafe_rawColors.PRIMARY_300).hsl(),
		F = null !== (t = O.colorString) && void 0 !== t ? t : h,
		V = null !== (A = (0, l.wK)(F, 0.6)) && void 0 !== A ? A : void 0,
		B = S.Z.unsafe_rawColors.WHITE_500.css,
		b = (0, l._i)(F);
	null != b && 0.3 > (0, l.Bd)(b) && (B = S.Z.unsafe_rawColors.PRIMARY_630.css),
		(r = H
			? (0, s.jsx)(M.Z, {
					className: v.roleFlowerStar,
					iconClassName: N ? v.roleVerifiedIcon : void 0,
					color: F,
					size: 14
				})
			: 'dot' === P
				? (0, s.jsx)(D.RoleDot, {
						className: v.roleDot,
						color: F,
						background: !1,
						tooltip: !1
					})
				: (0, s.jsx)(D.RoleCircle, { color: F }));
	let x = T.useMemo(() => {
		var _;
		return {
			borderColor: c ? void 0 : V,
			...(null !== (_ = e.style) && void 0 !== _ ? _ : {})
		};
	}, [V, c, e.style]);
	return (0, s.jsx)(D.FocusRing, {
		children: (0, s.jsxs)('div', {
			ref: _,
			className: n()(v.role, G),
			style: x,
			onContextMenu: p,
			onMouseDown: d,
			'aria-label': O.name,
			tabIndex: g,
			...f,
			children: [
				(0, s.jsxs)(D.Clickable, {
					className: n()(N && v.roleRemoveButtonCanRemove, v.roleRemoveButton),
					onClick: N ? i : void 0,
					tabIndex: N ? g : -1,
					focusProps: { focusClassName: v.roleRemoveIconFocused },
					'aria-hidden': !N,
					'aria-label': m.Z.Messages.GUILD_SETTINGS_MEMBERS_REMOVE_ROLE.format({ roleName: O.name }),
					children: [
						r,
						N
							? (0, s.jsx)(D.XSmallIcon, {
									size: 'md',
									color: B,
									className: v.roleRemoveIcon,
									'aria-hidden': !0
								})
							: null
					]
				}),
				null != Z
					? (0, s.jsx)(R.Z, {
							className: v.roleIcon,
							...Z,
							enableTooltip: !1
						})
					: null,
				(0, s.jsx)('div', {
					'aria-hidden': !0,
					className: v.roleName,
					children: (0, s.jsx)(D.Text, {
						variant: 'text-xs/medium',
						className: v.roleNameOverflow,
						children: O.name
					})
				})
			]
		})
	});
});
function b(e) {
	let { user: _, numRolesHidden: E, roleClassName: T } = e,
		I = (0, a.JA)('overflow-more-roles-'.concat(_.id));
	return (0, s.jsx)(D.Popout, {
		renderPopout: (_) => {
			let { position: E } = _;
			return (0, s.jsx)(V, {
				...e,
				position: null != E ? E : 'top'
			});
		},
		position: 'top',
		align: 'center',
		children: (e) =>
			(0, s.jsx)(D.FocusRing, {
				children: (0, s.jsx)('button', {
					...e,
					className: n()(v.overflowButton, T),
					...I,
					children: '+'.concat(E)
				})
			})
	});
}
function x(e) {
	let { guild: _, user: E, handleAddRole: T, roleClassName: I, addButtonClassName: t, addButtonIconClassName: A } = e,
		r = (0, a.JA)('overflow-add-roles-'.concat(E.id)),
		N = (0, L.e7)([o.Z], () => o.Z.roleStyle),
		l = Z.Z.getHighestRole(_),
		S = g.ZP.getMember(_.id, E.id),
		U = (e) => (0, i.Gy)(_.id, e.id) && !e.managed && Z.Z.isRoleHigher(_, l, e) && (null == S || -1 === S.roles.indexOf(e.id));
	return (0, s.jsx)(D.Popout, {
		renderPopout: (e) => {
			let { closePopout: E } = e;
			return (0, s.jsx)(p.Z, {
				guild: _,
				roleStyle: N,
				roleFilter: U,
				onSelect: T,
				onClose: E
			});
		},
		position: 'bottom',
		align: 'center',
		children: (e) =>
			(0, s.jsx)(D.FocusRing, {
				children: (0, s.jsx)('button', {
					...e,
					className: n()(v.addButton, I, t),
					'aria-label': m.Z.Messages.GUILD_SETTINGS_MEMBERS_ADD_ROLE,
					type: 'button',
					...r,
					children: (0, s.jsx)(D.PlusSmallIcon, {
						size: 'md',
						color: 'currentColor',
						className: n()(v.addButtonIcon, A),
						'aria-hidden': !0
					})
				})
			})
	});
}
function z(e) {
	let _;
	let { user: E, guild: I, userRoles: t, wrap: l = !0, width: S, className: D, readOnly: U, roleClassName: O, disableBorderColor: o } = e,
		i = T.useRef({}),
		M = T.useCallback(
			(e) => {
				var _;
				let s = t.filter((_) => _ !== e.id);
				(null === (_ = e.tags) || void 0 === _ ? void 0 : _.guild_connections) === null ? G.Z.unassignGuildRoleConnection(I.id, e.id) : d.Z.updateMemberRoles(I.id, E.id, s, [], [e.id]);
			},
			[t, I.id, E.id]
		),
		u = T.useCallback(
			(e) => {
				let _ = t;
				-1 === _.indexOf(e) && (_ = _.concat([e])), d.Z.updateMemberRoles(I.id, E.id, _, [e], []);
			},
			[t, I.id, E.id]
		),
		[R, c] = T.useState(null),
		C = (0, L.e7)([f.Z], () => f.Z.getRoles(I.id)),
		g = T.useMemo(() => {
			let e = Object.values(C)
				.filter((e) => t.includes(e.id))
				.sort((e, _) => {
					var E, s;
					let T = (null === (E = e.tags) || void 0 === E ? void 0 : E.guild_connections) !== null,
						I = (null === (s = _.tags) || void 0 === s ? void 0 : s.guild_connections) !== null;
					return T && !I ? 1 : !T && I ? -1 : 0;
				});
			return null != R ? e.slice(0, R) : e;
		}, [C, R, t]),
		p = t.length - g.length;
	T.useLayoutEffect(() => {
		if (l) return;
		if ('number' != typeof S) throw Error('Unexpected null width');
		let e = 0,
			_ = 0,
			E = S - 30 - 4;
		for (let s = 0; s < g.length; s++) {
			let T = g[s],
				I = i.current[T.id];
			if (null != I) {
				if ((_ += I.offsetWidth + 4) > E) break;
				e++;
			}
		}
		c((_) => (e < g.length ? e : _));
	}, [l, S, g]);
	let V = P.default.getCurrentUser();
	A()(null != V, 'MemberRolesList: currentUser cannot be undefined');
	let z = !U && Z.Z.can(h.Plq.MANAGE_ROLES, I),
		K = H.e9(I, V.id),
		y = T.useMemo(() => 'roles-'.concat((0, r.Z)()), []),
		j = (0, N.ZP)({
			id: y,
			isEnabled: !0,
			scrollToStart: F,
			scrollToEnd: F,
			wrap: !0
		}),
		k = g.map((e) => {
			var _;
			return (0, s.jsx)(
				B,
				{
					className: O,
					role: e,
					canRemove: (z && H.r6(I, V.id, K, e)) || ((null === (_ = e.tags) || void 0 === _ ? void 0 : _.guild_connections) === null && E.id === V.id),
					onRemove: () => M(e),
					ref: (_) => {
						var E, s;
						return (E = e.id), void (null != (s = _) ? (i.current[E] = s) : delete i.current[E]);
					},
					guildId: I.id,
					disableBorderColor: o
				},
				e.id
			);
		});
	return (
		null != R && 0 !== p
			? (_ = (0, s.jsx)(b, {
					...e,
					numRolesHidden: p
				}))
			: z &&
				(_ = (0, s.jsx)(x, {
					...e,
					handleAddRole: u
				})),
		(0, s.jsx)(a.bG, {
			navigator: j,
			children: (0, s.jsx)(a.SJ, {
				children: (e) => {
					let { ref: E, ...T } = e;
					return (0, s.jsxs)('div', {
						className: n()(v.root, D),
						'aria-label': m.Z.Messages.ROLES_LIST.format({ numRoles: t.length }),
						ref: E,
						...T,
						children: [k, _]
					});
				}
			})
		})
	);
}
let K = (0, O.Z)(z);
function y(e) {
	return (
		(0, L.e7)([Z.Z], () => {
			var _;
			return Z.Z.getGuildVersion(null === (_ = e.guild) || void 0 === _ ? void 0 : _.id);
		}),
		!1 === e.wrap ? (0, s.jsx)(K, { ...e }) : (0, s.jsx)(z, { ...e })
	);
}
