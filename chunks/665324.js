n.d(t, {
	Z: function () {
		return U;
	}
}),
	n(47120),
	n(724458);
var s = n(735250),
	a = n(470079),
	i = n(120356),
	r = n.n(i),
	l = n(525654),
	o = n.n(l),
	c = n(442837),
	d = n(846519),
	u = n(481060),
	_ = n(232567),
	I = n(596454),
	E = n(410030),
	T = n(623624),
	m = n(889161),
	N = n(208049),
	S = n(763296),
	h = n(22382),
	g = n(747071),
	C = n(171368),
	x = n(430824),
	p = n(594174),
	R = n(15385),
	f = n(768581),
	L = n(267642),
	O = n(358085),
	A = n(999382),
	M = n(70409),
	D = n(981631),
	v = n(710111),
	j = n(689938),
	Z = n(315378);
let b = O.isPlatformEmbedded || ('Safari' !== o().name && 'Firefox' !== o().name);
function U() {
	let e = (0, c.e7)([A.Z], () => A.Z.getProps().guild);
	return null == e
		? null
		: (0, s.jsx)(u.FormSection, {
				tag: u.FormTitleTags.H1,
				title: j.Z.Messages.GUILD_SETTINGS_SOUNDBOARD,
				children: (0, s.jsx)(F, { guild: e })
			});
}
function G(e) {
	let { children: t } = e;
	return (0, s.jsx)(u.Heading, {
		className: Z.tableHeader,
		variant: 'heading-sm/semibold',
		color: 'header-secondary',
		children: t
	});
}
function P(e) {
	let { currentTier: t, availableSounds: n, guildId: a } = e,
		i = x.Z.getGuild(a),
		r = (0, L.U2)(t, i);
	return 0 === t
		? (0, s.jsx)(s.Fragment, {
				children: j.Z.Messages.GUILD_SETTINGS_SOUND_LIST_SOUNDS_AVAILABLE.format({
					slots: n,
					totalSlots: r
				})
			})
		: (0, s.jsxs)(s.Fragment, {
				children: [
					(0, s.jsx)(u.Tooltip, {
						text: j.Z.Messages.GUILD_SETTINGS_SOUNDBOARD_BOOST_LEVEL.format({ currentBoostLevel: t }),
						children: (e) =>
							(0, s.jsx)(u.Clickable, {
								className: Z.boostingIconWrapper,
								onClick: () => {
									var e;
									return (
										(e = a),
										void (0, T.f)({
											guildId: e,
											location: {
												section: D.jXE.GUILD_SETTINGS_SOUNDBOARD,
												object: D.qAy.BOOST_GEM_ICON
											}
										})
									);
								},
								tabIndex: -1,
								children: (0, s.jsx)(R.Z, { ...e })
							})
					}),
					j.Z.Messages.GUILD_SETTINGS_SOUND_LIST_SOUNDS_AVAILABLE_BOOST_LEVEL.format({
						slots: n,
						totalSlots: r,
						boostLevel: t
					})
				]
			});
}
let B = (e) => {
		let { renderPopoutBody: t, renderPopoutChildren: n, ...i } = e,
			[r, l] = a.useState(!1),
			o = a.useMemo(() => new d.V7(), []),
			c = a.useCallback(() => {
				o.stop(), l(!0);
			}, [o]),
			_ = a.useCallback(() => {
				o.start(200, () => l(!1));
			}, [o]);
		return (0, s.jsx)(u.Popout, {
			shouldShow: r,
			renderPopout: (e) =>
				(0, s.jsx)(u.Dialog, {
					className: Z.browserUnsupportedDialog,
					onMouseEnter: c,
					onMouseLeave: _,
					children: t(e)
				}),
			...i,
			children: (e) => n(e)
		});
	},
	y = () =>
		(0, s.jsx)(B, {
			renderPopoutBody: () =>
				(0, s.jsx)(u.Text, {
					variant: 'text-sm/normal',
					color: 'header-secondary',
					children: j.Z.Messages.GUILD_SETTINGS_SOUNDBOARD_UPLOAD_SOUND_NOT_SUPPORTED.format()
				}),
			renderPopoutChildren: (e) =>
				(0, s.jsx)(u.Button, {
					...e,
					disabled: !0,
					children: j.Z.Messages.GUILD_SETTINGS_SOUNDBOARD_UPLOAD_SOUND
				})
		});
function F(e) {
	let { guild: t } = e,
		[i, r] = (0, c.Wu)([S.Z], () => {
			var e;
			return [null !== (e = S.Z.getSoundsForGuild(t.id)) && void 0 !== e ? e : v.Hy, S.Z.isFetchingSounds() || S.Z.isFetchingDefaultSounds()];
		}),
		{ canCreateExpressions: l } = (0, m.XJ)(t),
		o = a.useRef(null),
		d = (0, E.ZP)(),
		_ = t.premiumTier,
		I = (0, L.yw)(t, i, _);
	a.useEffect(() => {
		(0, N.w)();
	}, []);
	let T = a.useMemo(() => i.reduce((e, t) => ((e[t.soundId] = new Audio((0, h.Z)(t.soundId))), e), {}), [i]),
		C = 0 === i.length && !r;
	function x(e) {
		var t;
		null === (t = o.current) || void 0 === t || t.pause();
		let n = T[e.soundId];
		null != n && ((o.current = n), (n.currentTime = 0), (n.volume = (0, g.Z)(e.volume)), n.play());
	}
	a.useEffect(
		() => () => {
			var e;
			null === (e = o.current) || void 0 === e || e.pause();
		},
		[]
	);
	if (r) return (0, s.jsx)(u.Spinner, {});
	let p = b
		? (0, s.jsx)(u.Button, {
				onClick: function () {
					(0, u.openModalLazy)(async () => {
						let { default: e } = await Promise.all([n.e('56035'), n.e('31487')]).then(n.bind(n, 758961));
						return (n) =>
							(0, s.jsx)(e, {
								...n,
								guildId: t.id
							});
					});
				},
				disabled: I <= 0 || !l,
				children: j.Z.Messages.GUILD_SETTINGS_SOUNDBOARD_UPLOAD_SOUND
			})
		: (0, s.jsx)(y, {});
	return (0, s.jsxs)(s.Fragment, {
		children: [
			(0, s.jsxs)('div', {
				children: [
					(0, s.jsx)(u.Text, {
						className: Z.helpText,
						variant: 'text-sm/normal',
						color: 'header-secondary',
						children: j.Z.Messages.GUILD_SETTINGS_SOUNDBOARD_DESCRIPTION
					}),
					(0, s.jsx)('div', {
						className: Z.buttons,
						children: !C && p
					})
				]
			}),
			C
				? (0, s.jsxs)(u.EmptyState, {
						theme: d,
						className: Z.empty,
						children: [
							(0, s.jsx)(u.EmptyStateImage, {
								darkSrc: n(458601),
								lightSrc: n(673557),
								width: 272,
								height: 212
							}),
							(0, s.jsx)(u.EmptyStateText, {
								note: j.Z.Messages.NO_SOUNDS,
								noteClassName: Z.emptyText,
								children: j.Z.Messages.NO_SOUNDS_TITLE
							}),
							p
						]
					})
				: (0, s.jsxs)(s.Fragment, {
						children: [
							(0, s.jsx)(u.FormDivider, { className: Z.divider }),
							(0, s.jsx)(u.Heading, {
								className: Z.tableTitle,
								variant: 'heading-md/bold',
								color: 'header-primary',
								children: (0, s.jsx)(P, {
									guildId: t.id,
									currentTier: _,
									availableSounds: I
								})
							}),
							(0, s.jsx)(M.Z, {
								guild: t,
								numSounds: i.length,
								isOutOfSlots: 0 === I
							}),
							(0, s.jsxs)('div', {
								className: Z.soundTable,
								children: [
									(0, s.jsxs)('div', {
										className: Z.tableHeaders,
										children: [(0, s.jsx)(G, { children: j.Z.Messages.EMOJI }), (0, s.jsx)(G, { children: j.Z.Messages.GUILD_SETTINGS_SOUND_NAME_COLUMN }), (0, s.jsx)(G, { children: j.Z.Messages.GUILD_SETTINGS_SOUND_UPLOADER_COLUMN })]
									}),
									i.map((e) =>
										(0, s.jsx)(
											k,
											{
												sound: e,
												isPlaying: !1,
												guild: t,
												onPlaySound: x
											},
											e.soundId
										)
									)
								]
							})
						]
					})
		]
	});
}
function k(e) {
	let { sound: t, isPlaying: i, onPlaySound: l, guild: o } = e,
		{ soundId: d, name: E, user: T, userId: S, emojiId: h, emojiName: g } = t,
		x = (0, c.e7)([p.default], () => (null != T ? T : p.default.getUser(S)), [S, T]),
		{ canManageGuildExpression: R } = (0, m.XJ)(o),
		L = a.useMemo(() => R(t), [t, R]),
		O = null != h || null != g,
		[A, M] = a.useState(!1);
	async function v() {
		if (!A) {
			M(!0);
			try {
				await (0, N.AA)(o.id, d);
			} catch {
				M(!1);
			}
		}
	}
	a.useEffect(() => {
		null == x && e();
		async function e() {
			await (0, _.PR)(S);
		}
	}, [x, S]);
	let b = a.useCallback(() => {
		null != x &&
			(0, C.openUserProfileModal)({
				userId: x.id,
				guildId: o.id,
				analyticsLocation: { section: D.jXE.GUILD_SETTINGS_SOUNDBOARD }
			});
	}, [x, o.id]);
	return (0, s.jsxs)('div', {
		className: r()(Z.row, { [Z.active]: i }),
		children: [
			O
				? (0, s.jsx)(I.Z, {
						emojiId: h,
						emojiName: g,
						className: Z.emoji
					})
				: (0, s.jsx)(u.ImageIcon, {
						size: 'md',
						color: 'currentColor',
						className: Z.emoji
					}),
			(0, s.jsx)(u.Clickable, {
				onClick: () => {
					!A && l(t);
				},
				className: Z.soundName,
				children: (0, s.jsxs)(u.Text, {
					variant: 'text-sm/normal',
					className: Z.soundName,
					children: [
						E,
						' ',
						(0, s.jsx)(u.VoiceNormalIcon, {
							size: 'md',
							color: 'currentColor',
							className: Z.soundPreviewIcon
						})
					]
				})
			}),
			null != x &&
				(0, s.jsxs)(u.Clickable, {
					className: Z.uploader,
					onClick: b,
					children: [
						(0, s.jsx)(u.Avatar, {
							'aria-label': null == x ? void 0 : x.username,
							size: u.AvatarSizes.SIZE_24,
							className: Z.uploaderAvatar,
							src: (0, f.ov)(x, !1, 24)
						}),
						(0, s.jsx)(u.Text, {
							variant: 'text-sm/normal',
							lineClamp: 1,
							children: null == x ? void 0 : x.username
						})
					]
				}),
			L
				? (0, s.jsxs)('div', {
						className: Z.soundEditContainer,
						children: [
							(0, s.jsx)(u.Clickable, {
								className: Z.soundUpdate,
								onClick: function (e) {
									e.stopPropagation(),
										(0, u.openModalLazy)(async () => {
											let { default: e } = await Promise.all([n.e('56035'), n.e('31487')]).then(n.bind(n, 758961));
											return (n) =>
												(0, s.jsx)(e, {
													...n,
													guildId: o.id,
													existingSound: t
												});
										});
								},
								'aria-label': j.Z.Messages.EDIT,
								children: (0, s.jsx)(u.PencilIcon, {
									size: 'xs',
									color: 'currentColor',
									className: Z.soundEditIcon
								})
							}),
							(0, s.jsx)(u.Clickable, {
								className: Z.soundRemove,
								onClick: function (e) {
									e.stopPropagation(),
										(0, u.openModal)((e) =>
											(0, s.jsx)(u.ConfirmModal, {
												header: j.Z.Messages.GUILD_SETTINGS_SOUNDBOARD_DELETE_SOUND_TITLE.format({ soundName: E }),
												confirmText: j.Z.Messages.DELETE,
												cancelText: j.Z.Messages.CANCEL,
												onConfirm: v,
												...e,
												children: (0, s.jsx)(u.Text, {
													variant: 'text-md/normal',
													children: j.Z.Messages.GUILD_SETTINGS_SOUNDBOARD_DELETE_SOUND_BODY.format({ soundName: E })
												})
											})
										);
								},
								'aria-label': j.Z.Messages.REMOVE,
								children: (0, s.jsx)(u.XSmallIcon, {
									size: 'md',
									color: 'currentColor',
									className: Z.soundEditIcon
								})
							})
						]
					})
				: null
		]
	});
}
