n.d(t, {
	Z: function () {
		return y;
	}
}),
	n(47120);
var i = n(735250),
	a = n(470079),
	o = n(442837),
	l = n(481060),
	d = n(166459),
	c = n(911969),
	r = n(476326),
	m = n(827498),
	u = n(555573),
	s = n(213459),
	p = n(998698),
	_ = n(895924),
	E = n(581364),
	g = n(667204),
	M = n(873387),
	C = n(147391),
	A = n(978983),
	I = n(592125),
	x = n(703558),
	f = n(430824),
	h = n(626135),
	P = n(585483),
	N = n(162609),
	b = n(619895),
	R = n(844439),
	v = n(981631),
	T = n(689938),
	O = n(834033);
function y(e) {
	let { toggleShowMenu: t, showMenu: n, className: a, channelId: d, imageUrl: c, mimeType: r } = e,
		m = (0, o.e7)([I.Z], () => I.Z.getChannel(d));
	return null == m
		? null
		: (0, i.jsx)(l.Popout, {
				renderPopout: (e) => {
					let { closePopout: t } = e;
					return (0, i.jsx)(S, {
						onClose: t,
						channel: m,
						imageUrl: c,
						mimeType: r
					});
				},
				position: 'right',
				align: 'top',
				animation: l.Popout.Animation.NONE,
				onRequestClose: t,
				shouldShow: n,
				children: (e) => {
					let { onClick: n } = e;
					return (0, i.jsx)(l.Tooltip, {
						text: T.Z.Messages.APP_IMAGE_REC_MENU_HEADER,
						children: (e) =>
							(0, i.jsx)(l.Clickable, {
								...e,
								className: a,
								focusProps: { offset: 2 },
								onClick: t,
								'aria-label': T.Z.Messages.APP_IMAGE_REC_MENU_HEADER,
								children: (0, i.jsx)(l.AppsIcon, {
									size: 'custom',
									color: 'currentColor',
									width: 20,
									height: 20
								})
							})
					});
				}
			});
}
function S(e) {
	let { onSelect: t, onClose: n, channel: I, imageUrl: y, mimeType: S } = e,
		U = (0, o.e7)([f.Z], () => f.Z.getGuild(I.guild_id)),
		{ fetchState: Z, imageRecCommandContexts: F } = (0, b.hR)({ channelId: I.id }),
		w = Z === R.M.FETCHING,
		D = (0, M.g)(I),
		L = (0, s.PL)(!0, !0),
		j = (0, s.LD)(I.guild_id, !0),
		k = N.P.useExperiment({ location: 'ContextualImageRecsMenu' }).optionsEnabled;
	a.useEffect(() => {
		(Z === R.M.ERROR || (Z === R.M.FETCHED && 0 === F.length)) && n();
	}, [Z, F.length, n]),
		a.useEffect(() => {
			var e, t;
			if (!w && 0 !== F.length)
				h.default.track(v.rMx.APP_IMAGE_RECS_MENU_VIEWED, {
					guild_id: null !== (e = null == I ? void 0 : I.guild_id) && void 0 !== e ? e : '',
					channel_id: null !== (t = null == I ? void 0 : I.id) && void 0 !== t ? t : '',
					application_ids: [...F.map((e) => Number(e.application.id))],
					command_ids: [...F.map((e) => Number(e.command.id))]
				});
		}, [F, I, w]);
	let H = a.useCallback(
			async (e) => {
				let t = await fetch(y),
					n = await t.arrayBuffer(),
					i = S.join('/'),
					a = new File([n], 'image'.concat((0, b.Qm)({ contentType: i })), { type: i });
				d.Z.setFile({
					channelId: I.id,
					id: e,
					file: {
						id: e,
						file: a,
						platform: r.ow.WEB
					},
					draftType: x.d.SlashCommand
				});
			},
			[y, I.id, S]
		),
		G = a.useCallback(
			async (e, t, n) => {
				var i, a;
				if (!D) return;
				let o = b.Id[e.id];
				await H(o.imageOption),
					null != p.Z.getActiveCommand(I.id) &&
						u.Po({
							channelId: I.id,
							command: null,
							section: null
						});
				let l = {
					type: _.Qi.APPLICATION,
					id: t.id,
					icon: t.icon,
					name: null !== (a = null == t ? void 0 : null === (i = t.bot) || void 0 === i ? void 0 : i.username) && void 0 !== a ? a : t.name,
					application: t
				};
				u.Po({
					channelId: I.id,
					command: e,
					section: l,
					location: n,
					source: m._b.TEXT,
					initialValues: {
						[o.imageOption]: {
							type: c.jw.ATTACHMENT,
							name: o.imageOption,
							value: 'image'
						}
					},
					commandOrigin: _.bB.APPLICATION_LAUNCHER
				}),
					P.S.dispatch(v.CkL.FOCUS_CHANNEL_TEXT_AREA, { channelId: I.id });
			},
			[I.id, H, D]
		),
		B = a.useCallback(
			async (e, t) => {
				var n, i;
				let a = e.applicationId,
					o = (null === (n = L.result) || void 0 === n ? void 0 : n.sections[a]) != null,
					l = (null === (i = j.result) || void 0 === i ? void 0 : i.sections[a]) != null;
				o || l || s.ZP.queryInstallOnDemandApp(e.applicationId, I.id);
				let d = await (0, C.L)({
					applicationId: a,
					userIndexState: L,
					guildIndexState: j,
					location: t,
					source: m._b.TEXT
				});
				if (
					((0, E.qJ)({
						command: e,
						location: t,
						source: m._b.TEXT
					}),
					d)
				) {
					let t = b.Id[e.id],
						n = t.additionalOptions;
					await H(t.imageOption),
						await (0, g.Z)({
							command: { ...e },
							optionValues: {
								[t.imageOption]: [
									{
										text: 'image',
										type: 'text'
									}
								],
								...(null == n ? {} : n[Math.floor(Math.random() * n.length)])
							},
							context: {
								channel: I,
								guild: U
							},
							commandOrigin: _.bB.IMAGE_RECS_MENU
						});
				}
			},
			[I, U, L, j, H]
		);
	return (0, i.jsxs)(l.Menu, {
		onSelect: t,
		navId: 'image-context-commands-popout',
		onClose: n,
		'aria-label': T.Z.Messages.APP_IMAGE_REC_MENU_ARIA_LABEL,
		children: [
			(0, i.jsx)(
				l.MenuItem,
				{
					id: 'menu-image-rec-header',
					render: () =>
						(0, i.jsx)(l.Text, {
							className: O.title,
							variant: 'text-md/bold',
							color: 'header-primary',
							children: T.Z.Messages.APP_IMAGE_REC_MENU_HEADER
						}),
					navigable: !1,
					disabled: !0
				},
				'menu-image-rec-header'
			),
			(0, i.jsx)(l.MenuSeparator, {}),
			w
				? (0, i.jsx)(
						l.MenuItem,
						{
							id: 'menu-image-recs-placeholder',
							render: () => (0, i.jsx)(A.Z, {}),
							navigable: !1,
							disabled: !0
						},
						'menu-image-recs-placeholder'
					)
				: (0, i.jsx)(i.Fragment, {
						children: F.map((e) => {
							var t;
							let n = k && null != b.Id[e.command.id].additionalOptions,
								a = b.Id[e.command.id].onlyAllowEdit;
							return (0, i.jsx)(
								l.MenuItem,
								{
									id: e.command.id,
									action: () => {
										a ? G(e.command, e.application, _.Vh.IMAGE_RECS_MENU) : B(e.command, _.Vh.IMAGE_RECS_MENU);
									},
									label: null !== (t = b.Id[e.command.id].overrideCommandName) && void 0 !== t ? t : e.command.name,
									subtext: e.command.description,
									subtextLineClamp: 1,
									icon: a ? l.PencilIcon : n ? void 0 : l.SendMessageIcon,
									imageUrl: e.applicationImageURL,
									imageClassName: O.appIcon,
									showImageFirst: !0,
									disabled: !D && a,
									children:
										n && !a
											? (0, i.jsxs)(i.Fragment, {
													children: [
														(0, i.jsx)(
															l.MenuItem,
															{
																id: ''.concat(e.command.id, '-send'),
																label: T.Z.Messages.APP_IMAGE_REC_MENU_SEND_LABEL,
																subtext: T.Z.Messages.APP_IMAGE_REC_MENU_SEND_SUBTEXT,
																action: () => B(e.command, _.Vh.IMAGE_RECS_SUBMENU),
																icon: l.SendMessageIcon
															},
															''.concat(e.command.id, '-send')
														),
														(0, i.jsx)(
															l.MenuItem,
															{
																id: ''.concat(e.command.id, '-edit'),
																label: T.Z.Messages.APP_IMAGE_REC_MENU_CUSTOMIZE_LABEL,
																subtext: T.Z.Messages.APP_IMAGE_REC_MENU_CUSTOMIZE_SUBTEXT,
																action: () => G(e.command, e.application, _.Vh.IMAGE_RECS_SUBMENU),
																icon: l.PencilIcon,
																disabled: !D
															},
															''.concat(e.command.id, '-edit')
														)
													]
												})
											: null
								},
								e.command.id
							);
						})
					})
		]
	});
}
