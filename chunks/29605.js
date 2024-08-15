n.d(t, {
	FT: function () {
		return H;
	},
	L3: function () {
		return w;
	}
}),
	n(47120);
var s = n(735250),
	a = n(470079),
	i = n(120356),
	r = n.n(i),
	l = n(512722),
	o = n.n(l),
	c = n(392711),
	d = n.n(c),
	u = n(772848),
	_ = n(442837),
	I = n(481060),
	E = n(668781),
	T = n(80932),
	m = n(225433),
	N = n(327802),
	S = n(110924),
	h = n(200876),
	g = n(730089),
	C = n(372444),
	x = n(889564),
	p = n(372129),
	R = n(889161),
	f = n(210887),
	L = n(626135),
	O = n(768581),
	A = n(176354),
	M = n(267642),
	D = n(434404),
	v = n(471613),
	j = n(999382),
	Z = n(981631),
	b = n(185923),
	U = n(689938),
	G = n(677363),
	P = n(440376);
let B = d().throttle(T.OQ, 1000),
	y = (e) => {
		let { currentTarget: t, which: n } = e;
		13 === n && t.blur();
	},
	F = (e) => {
		let { guildId: t, emoji: n, onEdit: i, editingDisabled: l = !1 } = e,
			[o, c] = a.useState(n.name),
			d = O.ZP.getEmojiURL({
				id: n.id,
				animated: n.animated,
				size: 32
			});
		return (0, s.jsxs)('div', {
			className: r()(G.emojiRow, P.card),
			children: [
				(0, s.jsx)('div', {
					className: G.emojiColumn,
					children: (0, s.jsx)(I.Tooltip, {
						text: n.available ? null : U.Z.Messages.EMOJI_DISABLED_PREMIUM_TIER_LOST,
						children: (e) =>
							(0, s.jsx)('div', {
								...e,
								className: r()(G.emojiImage, { [G.emojiDisabled]: !n.available }),
								style: { backgroundImage: 'url('.concat(d, ')') }
							})
					})
				}),
				(0, s.jsxs)('div', {
					className: G.column,
					children: [
						(0, s.jsx)(I.TextInput, {
							className: r()(G.emojiAliasInput, { [G.emojiAliasInputDisabled]: l }),
							inputClassName: G.emojiInput,
							placeholder: U.Z.Messages.GUILD_SETTINGS_EMOJI_ALIAS_PLACEHOLDER,
							onKeyPress: y,
							onChange: c,
							onBlur: () => {
								o !== n.name &&
									(0, T.dv)({
										guildId: t,
										emojiId: n.id,
										name: A.ZP.sanitizeEmojiName(o)
									});
							},
							size: I.TextInput.Sizes.MINI,
							value: o,
							maxLength: b.Yc,
							disabled: l
						}),
						(0, s.jsx)('div', {
							className: G.emojiAliasPlaceholder,
							children: (0, s.jsx)('div', {
								className: G.emojiAliasPlaceholderContent,
								children: o.length > 0 ? o : U.Z.Messages.GUILD_SETTINGS_EMOJI_ALIAS_PLACEHOLDER
							})
						})
					]
				}),
				(0, s.jsxs)('div', {
					className: G.column,
					children: [
						(0, s.jsx)(I.Avatar, {
							src: n.user.getAvatarURL(t, 24),
							'aria-label': n.user.username,
							size: I.AvatarSizes.SIZE_24,
							className: G.avatar
						}),
						(0, s.jsx)(I.FormText, {
							className: r()(G.emojiRowText),
							children: n.user.username
						})
					]
				}),
				null != i &&
					!l &&
					(0, s.jsx)(I.Clickable, {
						'aria-label': U.Z.Messages.EDIT,
						className: G.editEmojiRolesButton,
						onClick: () => i(n, t),
						children: (0, s.jsx)(I.PencilIcon, {
							size: 'md',
							color: 'currentColor',
							className: G.editEmojiRolesIcon
						})
					}),
				!l &&
					(0, s.jsx)(m.Z, {
						className: G.emojiRemove,
						onClick: () => {
							(0, T.RE)(t, n.id).catch((e) => {
								let { status: t } = e;
								429 === t &&
									E.Z.show({
										title: U.Z.Messages.GENERIC_ERROR_TITLE,
										body: U.Z.Messages.RATE_LIMITED
									});
							});
						}
					})
			]
		});
	},
	k = (e) => {
		let { isLoading: t, staticEmojis: a, animatedEmojis: i, theme: r, guild: l } = e;
		return t
			? (0, s.jsx)(I.Spinner, {
					className: G.spinner,
					type: I.Spinner.Type.SPINNING_CIRCLE
				})
			: 0 === a.length && 0 === i.length
				? (0, s.jsxs)(I.EmptyState, {
						theme: r,
						className: G.empty,
						children: [
							(0, s.jsx)(I.EmptyStateImage, {
								darkSrc: n(458601),
								lightSrc: n(673557),
								width: 272,
								height: 212
							}),
							(0, s.jsx)(I.EmptyStateText, {
								note: U.Z.Messages.NO_EMOJI,
								children: U.Z.Messages.NO_EMOJI_TITLE
							})
						]
					})
				: (0, s.jsxs)('div', {
						children: [
							(0, s.jsx)(w, {
								title: U.Z.Messages.EMOJI,
								maxSlots: l.getMaxEmojiSlots(),
								emojiCount: a.length
							}),
							(0, s.jsx)(H, {
								emojis: a,
								guild: l
							}),
							(0, s.jsx)(w, {
								title: U.Z.Messages.ANIMATED_EMOJI,
								maxSlots: l.getMaxEmojiSlots(),
								emojiCount: i.length
							}),
							(0, s.jsx)(H, {
								emojis: i,
								guild: l
							})
						]
					});
	},
	w = (e) => {
		let { title: t, maxSlots: n, emojiCount: a } = e;
		return (0, s.jsxs)(I.FormTitle, {
			tag: I.FormTitleTags.H2,
			className: G.title,
			children: [
				t,
				(0, s.jsxs)('span', {
					children: [' \u2014 ', U.Z.Messages.EMOJI_SLOTS_AVAILABLE.format({ count: n - a })]
				})
			]
		});
	},
	H = (e) => {
		let { emojis: t, guild: n, onEdit: i, editingDisabled: r = !1 } = e,
			l = a.useMemo(() => [...t].reverse(), [t]),
			{ canManageGuildExpression: o } = (0, R.Gw)(n);
		return 0 === t.length
			? (0, s.jsx)(I.FormText, {
					type: I.FormTextTypes.DESCRIPTION,
					className: G.content,
					children: U.Z.Messages.NO_EMOJI_BODY
				})
			: (0, s.jsxs)(I.FormSection, {
					className: G.content,
					children: [
						(0, s.jsxs)('div', {
							className: G.emojiTable,
							children: [
								(0, s.jsx)(I.FormText, {
									type: I.FormTextTypes.DESCRIPTION,
									className: G.emojiColumn,
									children: U.Z.Messages.GUILD_SETTINGS_EMOJI_IMAGE
								}),
								(0, s.jsx)(I.FormText, {
									type: I.FormTextTypes.DESCRIPTION,
									className: G.columnLabel,
									children: U.Z.Messages.GUILD_SETTINGS_EMOJI_NAME
								}),
								(0, s.jsx)(I.FormText, {
									type: I.FormTextTypes.DESCRIPTION,
									className: G.columnLabel,
									children: U.Z.Messages.UPLOADED_BY
								})
							]
						}),
						l.map((e) =>
							(0, s.jsx)(
								F,
								{
									guildId: n.id,
									emoji: e,
									onEdit: i,
									editingDisabled: r || !o(e)
								},
								e.id
							)
						)
					]
				});
	},
	V = (e) => {
		let t,
			n,
			a,
			{ staticEmojiCount: i, animatedEmojiCount: r, guild: l } = e,
			o = l.getMaxEmojiSlots(),
			c = Math.min(o - i, o - r),
			d = l.premiumTier,
			u = (0, M.FZ)(d, l.id);
		return null == u || d === Z.Eu4.TIER_3 || c > 0
			? null
			: (c > o ? ((t = U.Z.Messages.GUILD_SETTINGS_EMOJIS_UPSELL_BANNER_TOO_MANY_EMOJIS_HEADER.format({ level: u })), (n = U.Z.Messages.GUILD_SETTINGS_EMOJIS_UPSELL_BANNER_TOO_MANY_EMOJIS_TEXT.format({ level: u })), (a = Z.qAy.BOOST_UPSELL_BANNER_LOST_LEVEL)) : ((t = U.Z.Messages.PREMIUM_GUILD_SUBSCRIPTION_UPSELL_BANNER_HEADER), (n = U.Z.Messages.GUILD_SETTINGS_EMOJIS_UPSELL_BANNER_TEXT.format({ level: u })), (a = Z.qAy.BOOST_UPSELL_BANNER_SLOTS_FULL)),
				(0, s.jsx)(C.Z, {
					header: t,
					text: n,
					guild: l,
					analyticsLocation: {
						page: Z.ZY5.GUILD_SETTINGS,
						section: Z.jXE.GUILD_SETTINGS_STICKERS,
						object: a,
						objectType: (0, M.ge)(u)
					}
				}));
	};
t.ZP = () => {
	let e = (0, _.e7)([j.Z], () => j.Z.getGuild()),
		[t, i] = a.useState('');
	o()(null != e, 'ConnectedGuildSettingsEmoji must be rendered within a guild context');
	let r = (0, _.e7)([f.Z], () => f.Z.theme),
		{ canCreateExpressions: l } = (0, R.XJ)(e),
		{ revision: c, emojis: E } = (0, _.cj)([v.Z], () => ({
			revision: v.Z.getEmojiRevision(e.id),
			emojis: v.Z.getEmojis(e.id)
		})),
		T = (0, S.Z)(c),
		[m, C] = a.useState(!1),
		[O, A] = a.useState(!1),
		M = a.useRef(null);
	a.useEffect(() => {
		m && W();
	}, [m]),
		a.useEffect(() => {
			B(e.id);
		}, [e.id]),
		a.useEffect(() => {
			null != T && T < c && B(e.id);
		}, [c, T, e.id]);
	let [P, y] = a.useMemo(() => {
			let t = null == E ? void 0 : E.filter((t) => !(0, x.Kt)(t, e.id)),
				[n, s] = d().partition(t, (e) => !e.animated);
			return [n, s];
		}, [E, e.id]),
		F = e.getMaxEmojiSlots(),
		w = Math.max(F - P.length, F - y.length),
		H = (n, s, a) =>
			(0, g.G)({
				data: n,
				file: s,
				image: a,
				guildId: e.id,
				uploadId: t,
				hideErrorModal: !0
			}),
		Y = async (n) => {
			i((0, u.Z)()),
				L.default.track(Z.rMx.EMOJI_UPLOAD_STARTED, {
					guild_id: e.id,
					upload_id: t
				}),
				await (0, p._)(n, H),
				C(!0);
		},
		W = () => {
			null !== M.current && ((0, I.closeModal)(M.current), (M.current = null));
		},
		z = async (e) => {
			M.current = await (0, I.openModalLazy)(async () => {
				let { default: t } = await n.e('16169').then(n.bind(n, 935333));
				return (n) =>
					(0, s.jsx)(t, {
						processFiles: () => Y(e),
						...n
					});
			});
		},
		K = (0, h.l)(e);
	return (0, s.jsxs)('div', {
		className: G.emojiSettings,
		children: [
			0 === w
				? null
				: (0, s.jsx)(N.Z, {
						className: G.emojiUploadContainer,
						onDrop: z
					}),
			(0, s.jsxs)(I.FormSection, {
				tag: I.FormTitleTags.H1,
				title: U.Z.Messages.EMOJI,
				children: [
					(0, s.jsx)(V, {
						guild: e,
						staticEmojiCount: P.length,
						animatedEmojiCount: y.length
					}),
					(0, s.jsxs)(I.FormSection, {
						className: G.uploader,
						children: [
							(0, s.jsx)(I.FormText, {
								type: I.FormTextTypes.DESCRIPTION,
								children: U.Z.Messages.GUILD_SETTINGS_EMOJI_UPLOAD_TO_SERVER_DESCRIPTION.format({ count: F })
							}),
							K &&
								(0, s.jsx)(I.FormText, {
									type: I.FormTextTypes.DESCRIPTION,
									children: U.Z.Messages.GUILD_ROLE_SUBSCRIPTION_EMOJI_SETTINGS_MANAGE_PREMIUM_TEXT.format({ onClick: () => D.Z.open(e.id, Z.pNK.ROLE_SUBSCRIPTIONS, void 0, Z.KsC.ROLE_SUBSCRIPTION_EMOJI) })
								}),
							(0, s.jsxs)('div', {
								children: [
									(0, s.jsx)(I.FormTitle, {
										tag: I.FormTitleTags.H2,
										className: G.emojiUploadUploadRequirementsHeading,
										children: U.Z.Messages.GUILD_SETTINGS_EMOJI_UPLOAD_HEADING
									}),
									(0, s.jsxs)('ul', {
										className: G.emojiUploadUploadRequirementsList,
										children: [
											(0, s.jsx)('li', {
												children: (0, s.jsx)(I.FormText, {
													type: I.FormTextTypes.DESCRIPTION,
													children: U.Z.Messages.GUILD_SETTINGS_EMOJI_UPLOAD_REQUIREMENTS_1
												})
											}),
											(0, s.jsx)('li', {
												children: (0, s.jsx)(I.FormText, {
													type: I.FormTextTypes.DESCRIPTION,
													children: U.Z.Messages.GUILD_SETTINGS_EMOJI_UPLOAD_REQUIREMENTS_2.format({ maxSize: b.xG })
												})
											}),
											(0, s.jsx)('li', {
												children: (0, s.jsx)(I.FormText, {
													type: I.FormTextTypes.DESCRIPTION,
													children: U.Z.Messages.GUILD_SETTINGS_EMOJI_UPLOAD_REQUIREMENTS_3
												})
											}),
											(0, s.jsx)('li', {
												children: (0, s.jsx)(I.FormText, {
													type: I.FormTextTypes.DESCRIPTION,
													children: U.Z.Messages.GUILD_SETTINGS_EMOJI_UPLOAD_REQUIREMENTS_4
												})
											})
										]
									})
								]
							}),
							(0, s.jsxs)(I.Button, {
								tabIndex: -1,
								size: I.Button.Sizes.MEDIUM,
								onClick: () => {
									let t = (0, u.Z)();
									i(t),
										L.default.track(Z.rMx.EMOJI_UPLOAD_STARTED, {
											guild_id: e.id,
											upload_id: t
										});
								},
								disabled: O || 0 === w || !l,
								submitting: O,
								focusProps: { within: !0 },
								children: [
									U.Z.Messages.UPLOAD_EMOJI,
									w > 0
										? (0, s.jsx)(p.Z, {
												disabled: O || 0 === w || !l,
												tabIndex: 0,
												onChange: H,
												setLoading: A,
												multiple: !0
											})
										: null
								]
							})
						]
					}),
					(0, s.jsx)(k, {
						isLoading: null == E,
						staticEmojis: P,
						animatedEmojis: y,
						guild: e,
						theme: r
					})
				]
			})
		]
	});
};
