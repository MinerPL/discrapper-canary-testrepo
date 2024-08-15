i.r(n),
	i.d(n, {
		default: function () {
			return eP;
		}
	}),
	i(47120),
	i(315314),
	i(610138),
	i(216116),
	i(78328),
	i(815648),
	i(789020),
	i(653041);
var t = i(735250),
	a = i(470079),
	r = i(120356),
	o = i.n(r),
	l = i(525654),
	s = i.n(l),
	c = i(302454),
	d = i.n(c),
	u = i(873546),
	_ = i(149765),
	p = i(468194),
	m = i(442837),
	I = i(692547),
	f = i(477690),
	g = i(481060),
	h = i(995648),
	C = i(445986),
	v = i(9807),
	E = i(911969),
	x = i(330726),
	b = i(782568),
	A = i(607070),
	P = i(581364),
	T = i(970321),
	R = i(283836),
	N = i(220082),
	S = i(252618),
	L = i(299206),
	O = i(241209),
	j = i(422559),
	y = i(270144),
	D = i(864843),
	Z = i(703656),
	M = i(588822),
	B = i(706454),
	k = i(314897),
	w = i(451478),
	G = i(626135),
	H = i(768581),
	F = i(572004),
	U = i(823379),
	Y = i(900849),
	W = i(674588),
	V = i(264043),
	z = i(303383),
	K = i(887706),
	q = i(738130),
	J = i(4461),
	Q = i(34674),
	X = i(576958),
	$ = i(924489),
	ee = i(125909),
	en = i(409425),
	ei = i(132871),
	et = i(147890),
	ea = i(491576),
	er = i(527564),
	eo = i(326135),
	el = i(940064),
	es = i(626004),
	ec = i(939893),
	ed = i(430913),
	eu = i(606183),
	e_ = i(272242),
	ep = i(981631),
	em = i(558921),
	eI = i(689938),
	ef = i(364658),
	eg = i(902294);
let eh = d().parserFor(ec.Z),
	eC = d().reactFor(d().ruleOutput(ec.Z, 'react')),
	ev = (0, p.Mg)(f.Z.APPLICATION_DIRECTORY_PROFILE_ICON_SIZE),
	eE = 'redirect_to_support_server',
	ex = 'start_application_install',
	eb = (e) => ''.concat(location.protocol, '//').concat(location.host).concat(ep.Z5c.APPLICATION_DIRECTORY_PROFILE(e)),
	eA = (e) => {
		if (null == e) return null;
		let n = e.match(/.*(?:youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=)([^#&?]*).*/);
		return null != n ? n[1] : null;
	};
function eP(e) {
	var n, r, l, c;
	let d,
		{
			match: {
				params: { applicationId: p, section: I = e_.ApplicationDirectoryProfileSections.GENERAL }
			}
		} = e,
		f = (0, ei.useApplicationDirectoryHistory)((e) => e.guildId),
		E = (0, K.Z)(),
		A = (0, m.e7)(
			[z.Z],
			() =>
				z.Z.getFetchState({
					applicationId: p,
					guildId: f
				}) === z.M.FETCHING
		),
		N = a.useRef({
			applicationId: void 0,
			guildId: void 0
		}),
		{ similarApplications: ec, similarLoadId: eA } = (0, m.cj)([z.Z], () => {
			let e = {
					applicationId: p,
					guildId: f
				},
				n = z.Z.getSimilarApplications(e);
			return (
				null == n ? (n = z.Z.getSimilarApplications(N.current)) : (N.current = e),
				{
					similarApplications: null == n ? void 0 : n.applications,
					similarLoadId: null == n ? void 0 : n.loadId
				}
			);
		}),
		eP = a.useMemo(() => (null == ec ? void 0 : ec.slice(0, 3)), [ec]),
		eN = (0, m.e7)([V.Z], () => V.Z.getApplicationFetchState(p)),
		[eL, eO] = a.useState(void 0),
		ej = a.useCallback(
			(e) => {
				if (null != p) {
					if (e === e_.ApplicationDirectoryProfileSections.GENERAL) {
						(0, et.replaceAppDirectoryURLWith)(ep.Z5c.APPLICATION_DIRECTORY_PROFILE(p));
						return;
					}
					(0, et.replaceAppDirectoryURLWith)(ep.Z5c.APPLICATION_DIRECTORY_PROFILE_SECTION(p, e));
				}
			},
			[p]
		),
		ey = (0, m.e7)([w.Z], () => w.Z.isFocused()),
		eD = (0, m.e7)([B.default], () => B.default.locale),
		eZ = a.useRef(p),
		eM = (0, m.e7)([V.Z], () => {
			let e = V.Z.getApplication(p);
			return null == e ? (e = V.Z.getApplication(eZ.current)) : (eZ.current = p), e;
		}),
		eB = (0, ea.Z)({ application: eM }),
		ek = (0, m.e7)([k.default], () => k.default.getSessionId());
	(0, S.Tt)({ location: null == eM ? void 0 : eM.name });
	let ew = a.useCallback(async () => {
		try {
			var e;
			let n = null == eM ? void 0 : null === (e = eM.guild) || void 0 === e ? void 0 : e.id;
			if (null != n) {
				(null == eM ? void 0 : eM.id) != null &&
					G.default.track(ep.rMx.APP_DIRECTORY_SUPPORT_SERVER_JOINED, {
						application_id: eM.id,
						guild_id: n
					});
				let e = { page: ep.ZY5.APPLICATION_DIRECTORY };
				await (0, Y.Ub)(n, e, { setsHistorySnapshot: !1 });
			}
		} catch {}
	}, [eM]);
	a.useEffect(() => {
		if (null == eM) return;
		let e = new URL(location.href);
		if (E && null != ek && 'true' === e.searchParams.get(eE)) {
			e.searchParams.delete(eE);
			let n = e.pathname + e.search;
			(0, Z.dL)(n), ew();
		}
	}, [E, ew, ek, eM]);
	let eG = a.useCallback(() => {
			var e;
			null != (null == eM ? void 0 : null === (e = eM.guild) || void 0 === e ? void 0 : e.id) &&
				(E ? ew() : (0, Q.rf)({ [eE]: 'true' }));
		}, [eM, E, ew]),
		eH = a.useCallback(() => {
			(0, et.replaceAppDirectoryURLWith)(''.concat(ep.Z5c.APPLICATION_DIRECTORY_PROFILE(p)).concat(location.search));
		}, [p]);
	a.useEffect(() => {
		I === e_.ApplicationDirectoryProfileSections.GENERAL && eH();
	}, [eH, I]),
		a.useEffect(() => {
			null != p && W.i6(p);
		}, [p]),
		a.useEffect(() => {
			if ((null == eM ? void 0 : eM.directory_entry) != null) {
				let e = eM.directory_entry,
					n = null == e ? void 0 : e.popular_application_commands;
				null != n
					? eO(
							n.map((e) =>
								(0, P.Z8)({
									rootCommand: e,
									command: e,
									applicationId: e.application_id
								})
							)
						)
					: eO(void 0);
			}
		}, [eM]);
	let eF = H.ZP.getApplicationIconURL({
			id: null !== (l = null == eM ? void 0 : eM.id) && void 0 !== l ? l : '-1',
			icon: null == eM ? void 0 : eM.icon,
			size: ev
		}),
		eU = (0, L.Z)({
			id: null !== (c = null == eM ? void 0 : eM.id) && void 0 !== c ? c : '',
			label: eI.Z.Messages.COPY_ID_APPLICATION
		}),
		{ canInstall: eY, install: eW } = (0, J.P)(eM, f),
		eV = null === (n = (0, ei.getPreviousView)()) || void 0 === n ? void 0 : n.type;
	a.useEffect(() => {
		(null == eM ? void 0 : eM.id) != null &&
			G.default.track(ep.rMx.APP_DIRECTORY_PAGE_VIEWED, {
				current_page: 'product',
				previous_page: eV,
				application_id: eM.id,
				guild_id: f,
				shown_mutual_guilds_count: eB.length,
				profile_section: I,
				referrer: document.referrer
			});
	}, [null == eM ? void 0 : eM.id, f, eB]);
	let ez = a.useMemo(() => {
			var e;
			let n = null == eM ? void 0 : null === (e = eM.install_params) || void 0 === e ? void 0 : e.permissions;
			if (null != n) return j.VY.filter((e) => _.e$(_.vB(n), e));
		}, [null == eM ? void 0 : null === (r = eM.install_params) || void 0 === r ? void 0 : r.permissions]),
		eK = a.useCallback(
			(e) => {
				ej(e),
					(null == eM ? void 0 : eM.id) != null &&
						G.default.track(ep.rMx.APP_DIRECTORY_PROFILE_TAB_CLICKED, {
							application_id: eM.id,
							guild_id: f,
							tab_name: e
						});
			},
			[null == eM ? void 0 : eM.id, f, ej]
		),
		eq = a.useMemo(() => {
			var e, n, i;
			return null !==
				(i = (
					null !==
						(n = null == eM ? void 0 : null === (e = eM.directory_entry) || void 0 === e ? void 0 : e.carousel_items) &&
					void 0 !== n
						? n
						: []
				)
					.map(eT)
					.filter(U.lm)) && void 0 !== i
				? i
				: [];
		}, [eM]),
		eJ = a.useCallback(
			(e, n) => {
				if (e.type === ep.s9s.IMG) {
					let n = eq.filter((e) => e.type === ep.s9s.IMG),
						a = n.findIndex((n) => n === e);
					if (a < 0) return;
					let r = n.map((e) => ({
						src: (0, C.Q)(e.src),
						width: e.width,
						height: e.height
					}));
					(0, g.openModalLazy)(async () => {
						let { default: e } = await i.e('41814').then(i.bind(i, 895023));
						return (n) => {
							let { ...i } = n;
							return (0, t.jsx)(e, {
								...i,
								items: r,
								startingIndex: a,
								modalCarouselItemClassName: ef.appSlide
							});
						};
					});
				}
			},
			[eq]
		),
		eQ = a.useCallback(
			(e) => {
				(null == eM ? void 0 : eM.id) != null &&
					G.default.track(ep.rMx.APP_DIRECTORY_CATEGORY_CLICKED, {
						current_page: 'product',
						category: e.name,
						category_id: e.id,
						application_id: eM.id,
						guild_id: f
					}),
					(0, et.goToCategory)({ categoryId: e.id });
			},
			[eM, f]
		);
	a.useEffect(() => {
		if (null != p)
			W.T4({
				applicationId: p,
				guildId: f
			});
	}, [p, f]);
	let eX = a.useCallback(
			(e) => {
				let { application: n, mutualGuilds: i } = e;
				(null == eM ? void 0 : eM.id) != null &&
					G.default.track(ep.rMx.APP_DIRECTORY_RECOMMENDATION_CLICKED, {
						current_page: 'product',
						application_id: eM.id,
						suggested_application_id: n.id,
						load_id: eA,
						guild_id: f,
						shown_mutual_guilds_count: i.length
					}),
					(0, et.goToApplication)({ applicationId: n.id });
			},
			[null == eM ? void 0 : eM.id, eA, f]
		),
		e$ = a.useCallback(() => {
			null != eM &&
				(0, b.Z)(
					(0, eo.G)({
						id: eM.id,
						name: eM.name,
						locale: eD
					})
				);
		}, [eD, eM]),
		e0 = a.useCallback(
			(e) =>
				(0, t.jsxs)(g.Menu, {
					navId: 'application-directory-profile',
					'aria-label': eI.Z.Messages.APP_DIRECTORY_PROFILE_UTILITIES_A11Y_LABEL,
					onClose: e,
					onSelect: void 0,
					children: [
						(0, t.jsx)(g.MenuGroup, {
							children: (0, t.jsx)(g.MenuItem, {
								id: 'report',
								label: eI.Z.Messages.REPORT_APP,
								color: 'danger',
								action: e$
							})
						}),
						null != eU ? (0, t.jsx)(g.MenuGroup, { children: eU }) : null
					]
				}),
			[eU, e$]
		),
		[e1, e6] = (0, x.Z)(!1, 1000),
		e8 = a.useCallback(() => {
			if (null != eM)
				G.default.track(ep.rMx.APP_SHARE_BUTTON_CLICKED, {
					source: 'product_page',
					application_id: eM.id,
					guild_id: f
				}),
					(0, F.JG)(eb(eM.id)),
					e6(!0);
		}, [eM, e6, f]);
	a.useEffect(() => {
		let e = new URL(location.href);
		if (E && 'true' === e.searchParams.get(ex)) {
			e.searchParams.delete(ex);
			let n = e.pathname + e.search;
			(0, Z.dL)(n), eW('product_page');
		}
	}, [E, eW]);
	let e5 = a.useCallback(() => {
			null != eM &&
				(E
					? eW('product_page')
					: (G.default.track(ep.rMx.APPLICATION_ADD_TO_SERVER_CLICKED, {
							application_id: p,
							guild_id: f,
							auth_type: null != eM.custom_install_url ? 'custom_url' : 'in_app',
							source: 'product_page',
							device_platform: u.tq ? 'mobile_web' : 'desktop_web'
						}),
						(0, Q.rf)({ [ex]: 'true' })));
		}, [eM, E, eW, p, f]),
		{ applicationSubscriptionListingsShown: e3 } = (0, y.ZP)({
			applicationId: null == eM ? void 0 : eM.id,
			groupListingId: null == eM ? void 0 : eM.primary_sku_id,
			guildId: f
		}),
		e4 = (null == eM ? void 0 : eM.id) === em.g,
		[e2, e9] = a.useState(!1),
		[e7, ne] = a.useState(!1),
		[nn, ni] = a.useState(!0),
		nt = (e) => {
			null != e && e9(e.scrollHeight > e.clientHeight);
		},
		na = null != ez && ez.length > 0,
		nr = (null == eM ? void 0 : eM.flags) != null,
		no = (0, T.R)(null != p ? p : '');
	a.useEffect(() => {
		no && null != p && (0, R.Z)(p);
	}, [no, p]);
	let nl = a.useMemo(() => {
			let e = [],
				n = !0;
			switch (I) {
				case e_.ApplicationDirectoryProfileSections.GENERAL: {
					var i, a;
					let r =
						null == eM ? void 0 : null === (i = eM.directory_entry) || void 0 === i ? void 0 : i.detailed_description;
					null != r && r.length > 0
						? (e.push(
								(0, t.jsxs)(t.Fragment, {
									children: [
										(0, t.jsx)(g.Heading, {
											className: ef.sectionHeader,
											variant: 'heading-md/semibold',
											children: eI.Z.Messages.APP_DIRECTORY_PROFILE_DESCRIPTION_HEADING
										}),
										(0, t.jsx)('div', {
											ref: nt,
											className: o()({
												[ef.descriptionClamp]: !e7,
												[ef.descriptionClampSafari]: !e7 && 'Safari' === s().name
											}),
											children: (0, t.jsx)(O.Z, {
												className: ef.detailedDescription,
												parser: eh,
												output: eC,
												state: { allowLinks: !0 },
												children: r
											})
										}),
										(e2 || e7) &&
											(0, t.jsx)(eR, {
												isViewAll: e7,
												onToggle: () => {
													ne((e) => !e);
												}
											})
									]
								})
							),
							(n = !1))
						: (null == eM
									? void 0
									: null === (a = eM.directory_entry) || void 0 === a
										? void 0
										: a.short_description) !== void 0
							? e.push(
									(0, t.jsxs)(t.Fragment, {
										children: [
											(0, t.jsx)(g.Heading, {
												className: ef.sectionHeader,
												variant: 'heading-md/semibold',
												children: eI.Z.Messages.APP_DIRECTORY_PROFILE_DESCRIPTION_HEADING
											}),
											(0, t.jsx)('span', { children: eM.directory_entry.short_description })
										]
									})
								)
							: (null == eM ? void 0 : eM.description) != null &&
								e.push(
									(0, t.jsx)(M.Z, {
										className: ef.description,
										userBio: eM.description
									})
								),
						null != eL &&
							eL.length > 0 &&
							(e.push(
								(0, t.jsxs)(t.Fragment, {
									children: [
										(0, t.jsx)(g.Heading, {
											className: ef.sectionHeader,
											variant: 'heading-md/semibold',
											children: eI.Z.Messages.APP_DIRECTORY_PROFILE_COMMANDS_HEADING
										}),
										(0, t.jsx)(el.Z, {
											className: ef.commandList,
											commands: eL
										})
									]
								})
							),
							(n = !0));
					break;
				}
				case e_.ApplicationDirectoryProfileSections.IMAGES: {
					if (0 === eq.length) break;
					let n = (0, t.jsxs)(t.Fragment, {
						children: [
							(0, t.jsx)('img', {
								className: ef.errorImage,
								src: eg,
								'aria-hidden': !0,
								alt: ''
							}),
							(0, t.jsx)(g.Heading, {
								variant: 'heading-xl/semibold',
								children: eI.Z.Messages.ERRORS_IMAGE_NOT_FOUND
							})
						]
					});
					eq.forEach((e, n) => {
						null != eM
							? (e.alt = eI.Z.Messages.APP_DIRECTORY_PROFILE_IMAGE_CAROUSEL_ALT.format({
									index: n + 1,
									totalImages: eq.length,
									name: eM.name
								}))
							: (e.alt = eI.Z.Messages.APP_DIRECTORY_PROFILE_IMAGE_DEFAULT_ALT);
					}),
						e.push(
							(0, t.jsx)(v.Z, {
								className: ef.carousel,
								themedPagination: !0,
								items: eq,
								autoplayInterval: 8000,
								paused: !ey,
								videoAutoPlay: !0,
								onCurrentItemClick: eJ,
								errorComponent: n,
								onImageLoad: (e) => {
									let { src: n, loadTimeMs: i } = e;
									null != i &&
										null != eM &&
										G.default.track(ep.rMx.APP_DIRECTORY_CAROUSEL_IMAGE_LOADED, {
											application_id: eM.id,
											load_time_ms: i,
											src: n
										});
								}
							})
						);
					break;
				}
				case e_.ApplicationDirectoryProfileSections.STORE:
					no &&
						null != p &&
						e.push(
							(0, t.jsx)(er.M, {
								appId: p,
								guildId: null != f ? f : void 0
							})
						);
					break;
				case e_.ApplicationDirectoryProfileSections.PREMIUM:
					e3 &&
						(null == eM ? void 0 : eM.primary_sku_id) != null &&
						e.push(
							(0, t.jsx)(D.Z, {
								applicationId: eM.id,
								applicationPrimarySkuId: null == eM ? void 0 : eM.primary_sku_id,
								analyticsLocation: ep.Sbl.APP_DIRECTORY_PROFILE,
								forcesTransitionToGuild: !0
							})
						);
					break;
				case e_.ApplicationDirectoryProfileSections.PRIVACY:
					na &&
						e.push(
							(0, t.jsxs)(t.Fragment, {
								children: [
									(0, t.jsx)(g.Heading, {
										className: ef.sectionHeader,
										variant: 'heading-md/semibold',
										children: eI.Z.Messages.APP_DIRECTORY_PROFILE_REQUIRED_PERMISSIONS_HEADING
									}),
									(0, t.jsx)(h.Z, {
										className: ef.commandList,
										grantedPermissions: ez,
										grantedPermissionsHeader: eI.Z.Messages.APP_DIRECTORY_PROFILE_REQUIRED_PERMISSIONS_SUB_HEADING
									})
								]
							})
						),
						nr &&
							e.push(
								(0, t.jsxs)(t.Fragment, {
									children: [
										(0, t.jsx)(g.Heading, {
											className: ef.sectionHeader,
											variant: 'heading-md/semibold',
											children: eI.Z.Messages.APP_DIRECTORY_PROFILE_DATA_ACCESS_HEADING
										}),
										(0, t.jsx)(es.Z, { application: eM })
									]
								})
							);
			}
			return (
				ni(n),
				0 === e.length && I !== e_.ApplicationDirectoryProfileSections.GENERAL && null != eM && eH(),
				e.map((e, n) =>
					(0, t.jsx)(
						'div',
						{
							className: ef.section,
							children: e
						},
						n
					)
				)
			);
		}, [I, eH, eM, eL, e7, e2, eq, ey, eJ, no, p, f, e3, na, nr, ez]),
		ns = a.useMemo(() => {
			let e = [
				{
					name: e_.ApplicationDirectoryProfileSections.GENERAL,
					text: eI.Z.Messages.APP_DIRECTORY_PROFILE_TAB_GENERAL,
					Icon: g.AppsIcon
				}
			];
			return (
				eq.length > 0 &&
					e.push({
						name: e_.ApplicationDirectoryProfileSections.IMAGES,
						text: eI.Z.Messages.APP_DIRECTORY_PROFILE_TAB_IMAGES,
						Icon: g.ImagesIcon
					}),
				no &&
					e.push({
						name: e_.ApplicationDirectoryProfileSections.STORE,
						text: eI.Z.Messages.APP_DIRECTORY_PROFILE_TAB_STORE,
						Icon: g.ShopSparkleIcon
					}),
				e3 &&
					!no &&
					e.push({
						name: e_.ApplicationDirectoryProfileSections.PREMIUM,
						text: eI.Z.Messages.APP_DIRECTORY_PROFILE_TAB_PREMIUM,
						Icon: g.ShopSparkleIcon
					}),
				(na || nr) &&
					e.push({
						name: e_.ApplicationDirectoryProfileSections.PRIVACY,
						text: eI.Z.Messages.APP_DIRECTORY_PROFILE_TAB_PRIVACY,
						Icon: g.PrivacyAndSafetyIcon
					}),
				e
			);
		}, [eq.length, e3, na, nr, no]);
	return (
		(d =
			null == eM
				? null == eN || eN === V.M.FETCHING
					? (0, t.jsx)(ee.Z, { loading: eN === V.M.FETCHING })
					: (0, t.jsx)('div', {
							className: ef.__invalid_page,
							children: (0, t.jsxs)('div', {
								className: ef.emptyContainer,
								children: [
									(0, t.jsx)('img', {
										className: ef.emptyImage,
										src: eg,
										alt: ''
									}),
									(0, t.jsx)(g.Heading, {
										variant: 'heading-xl/semibold',
										children: eI.Z.Messages.APP_DIRECTORY_PROFILE_EMPTY_HEADING
									})
								]
							})
						})
				: (0, t.jsxs)(ee.Z, {
						loading: eN === V.M.FETCHING,
						children: [
							(0, t.jsx)(eS, {
								app: eM,
								iconSrc: eF
							}),
							(0, t.jsxs)('div', {
								className: ef.__invalid_page,
								children: [
									(0, t.jsxs)('div', {
										className: ef.header,
										children: [
											(0, t.jsxs)('div', {
												className: ef.headerSidebar,
												children: [
													(0, t.jsx)('img', {
														className: ef.headerIcon,
														alt: '',
														'aria-hidden': !0,
														src: eF,
														width: ev,
														height: ev
													}),
													(0, t.jsx)($.Z, {
														application: eM,
														mutualGuilds: eB,
														mutualGuildShownMax: 3,
														compact: !0
													})
												]
											}),
											(0, t.jsxs)('div', {
												className: ef.headerContent,
												children: [
													(0, t.jsxs)('div', {
														className: ef.headerNameAndButtons,
														children: [
															(0, t.jsxs)('div', {
																className: ef.headerNameAndIcon,
																children: [
																	(0, t.jsx)(g.Heading, {
																		className: ef.name,
																		variant: 'heading-xxl/semibold',
																		children: eM.name
																	}),
																	(no || e3) &&
																		(0, t.jsx)(g.Tooltip, {
																			tooltipClassName: ef.premiumIconTooltip,
																			text: eI.Z.Messages.APPLICATION_DIRECTORY_PROFILE_TOOLTIP_PREMIUM,
																			children: (e) =>
																				(0, t.jsx)('img', {
																					...e,
																					alt: eI.Z.Messages.APPLICATION_DIRECTORY_PROFILE_TOOLTIP_PREMIUM,
																					className: ef.premiumIcon,
																					src: i(744050)
																				})
																		}),
																	e4 && (0, t.jsx)(en.Z, { className: ef.partnerBadge })
																]
															}),
															(0, t.jsxs)('div', {
																className: ef.buttons,
																children: [
																	(0, t.jsx)(g.Button, {
																		onClick: e8,
																		color: g.Button.Colors.PRIMARY,
																		children: e1
																			? eI.Z.Messages.INTEGRATIONS_WEBHOOK_COPIED_URL
																			: eI.Z.Messages.APP_DIRECTORY_PROFILE_SHARE_BUTTON
																	}),
																	(0, t.jsx)(g.Button, {
																		color: g.Button.Colors.BRAND,
																		onClick: e5,
																		disabled: !eY,
																		children: eI.Z.Messages.APPLICATION_ADD_BUTTON
																	}),
																	(0, t.jsx)(g.Popout, {
																		renderPopout: (e) => {
																			let { closePopout: n } = e;
																			return e0(n);
																		},
																		position: 'left',
																		align: 'top',
																		animation: g.Popout.Animation.NONE,
																		children: (e) =>
																			(0, t.jsx)(g.Clickable, {
																				className: ef.overflow,
																				...e,
																				children: (0, t.jsx)(g.MoreHorizontalIcon, {
																					size: 'custom',
																					color: 'currentColor',
																					width: 20,
																					height: 20,
																					className: ef.iconInteractive
																				})
																			})
																	})
																]
															})
														]
													}),
													(0, t.jsx)(eu.Z, {
														activeSection: I,
														setSection: eK,
														sections: ns
													})
												]
											})
										]
									}),
									(0, t.jsxs)('div', {
										className: ef.contentContainer,
										children: [
											(0, t.jsxs)('div', {
												className: ef.content,
												children: [
													nl,
													null != eP && eP.length > 0
														? (0, t.jsxs)(t.Fragment, {
																children: [
																	nn && (0, t.jsx)('div', { className: ef.separator }),
																	(0, t.jsxs)('div', {
																		className: ef.section,
																		children: [
																			(0, t.jsx)(g.Heading, {
																				className: ef.relatedHeader,
																				variant: 'eyebrow',
																				children: eI.Z.Messages.APP_DIRECTORY_PROFILE_RELATED_APPS_HEADING
																			}),
																			(0, t.jsx)(ee.Z, {
																				loading: A,
																				children: (0, t.jsx)(X.Z, {
																					applications: eP,
																					onViewOne: eX
																				})
																			})
																		]
																	})
																]
															})
														: null
												]
											}),
											(0, t.jsx)(ed.Z, {
												className: ef.sidebar,
												application: eM,
												guildId: f,
												onViewCategory: eQ,
												onClickGuildWidget: eG
											})
										]
									})
								]
							})
						]
					})),
		(0, t.jsx)(q.Z, { children: d })
	);
}
function eT(e) {
	switch (e.type) {
		case E.ee.MEDIA_PROXY:
			var n;
			let i = null !== (n = e.proxy_url) && void 0 !== n ? n : e.url;
			return {
				type: ep.s9s.IMG,
				width: 0,
				height: 0,
				src: i
			};
		case E.ee.YOUTUBE:
			let t = eA(e.url);
			if (null != t)
				return {
					type: ep.s9s.YOUTUBE_VIDEO,
					youtubeVideoId: t
				};
	}
	return console.warn('Unsupported carousel item', e), null;
}
let eR = (e) => {
		let n,
			{ onToggle: i, isViewAll: a } = e;
		return (
			(n = a
				? (0, t.jsxs)(t.Fragment, {
						children: [
							(0, t.jsx)(g.Text, {
								className: ef.showMoreButtonText,
								variant: 'eyebrow',
								children: eI.Z.Messages.APP_DIRECTORY_PROFILE_SHOW_LESS
							}),
							(0, t.jsx)(g.ChevronSmallUpIcon, {
								size: 'md',
								color: 'currentColor',
								className: ef.showMoreButtonIcon
							})
						]
					})
				: (0, t.jsxs)(t.Fragment, {
						children: [
							(0, t.jsx)(g.Text, {
								className: ef.showMoreButtonText,
								variant: 'eyebrow',
								children: eI.Z.Messages.APP_DIRECTORY_PROFILE_SHOW_MORE
							}),
							(0, t.jsx)(g.ChevronSmallDownIcon, {
								size: 'md',
								color: 'currentColor',
								className: ef.showMoreButtonIcon
							})
						]
					})),
			(0, t.jsx)(eN, {
				children: (0, t.jsx)(g.Button, {
					look: g.Button.Looks.BLANK,
					color: g.Button.Colors.TRANSPARENT,
					size: g.Button.Sizes.NONE,
					className: ef.showMoreButton,
					innerClassName: ef.showMoreButtonInner,
					onClick: i,
					children: n
				})
			})
		);
	},
	eN = (e) => {
		let { className: n, contentClassName: i, children: a } = e;
		return (0, t.jsxs)('div', {
			className: o()([ef.dividerContainer, n]),
			children: [
				(0, t.jsx)('div', { className: ef.divider }),
				null != a
					? (0, t.jsxs)(t.Fragment, {
							children: [
								(0, t.jsx)('div', {
									className: o()(ef.contentDivider, i),
									children: a
								}),
								(0, t.jsx)('div', { className: ef.divider })
							]
						})
					: null
			]
		});
	};
function eS(e) {
	let { app: n, iconSrc: i } = e,
		r = (0, N.ZP)(i, I.Z.unsafe_rawColors.PRIMARY_800.css),
		{ bot: o } = n,
		l = (0, m.e7)([A.Z], () => A.Z.useReducedMotion),
		s = a.useMemo(() => {
			let e = { backgroundColor: r };
			if (null != o) {
				let n = (0, H.aN)({
					id: o.id,
					banner: o.banner,
					size: 1024,
					canAnimate: !1
				});
				if ((null != n && ((e['--custom-background-static'] = 'url('.concat(n)), (e.height = '212px')), !l)) {
					let n = (0, H.aN)({
						id: o.id,
						banner: o.banner,
						size: 1024,
						canAnimate: !0
					});
					null != n && (e['--custom-background-animated'] = 'url('.concat(n));
				}
			}
			return e;
		}, [r, o, l]);
	return (0, t.jsx)('div', {
		style: s,
		className: ef.headerBanner
	});
}
