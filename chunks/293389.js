t(47120);
var n = t(735250),
	a = t(470079),
	i = t(120356),
	r = t.n(i),
	o = t(442837),
	l = t(692547),
	c = t(481060),
	d = t(224706),
	_ = t(225433),
	E = t(570928),
	u = t(594190),
	I = t(320724),
	T = t(297700),
	S = t(77498),
	N = t(283595),
	C = t(626135),
	m = t(251625),
	A = t(358085),
	O = t(210887),
	g = t(981631),
	h = t(689938),
	p = t(806406),
	R = t(256507),
	x = t(257995),
	M = t(440376),
	f = t(224499);
let D = o.ZP.connectStores([O.Z], () => ({ theme: O.Z.theme }))(c.EmptyState),
	P = (0, A.isWindows)();
function L(e) {
	let { onClose: s } = e,
		t = (0, o.e7)([u.ZP], () => u.ZP.getCandidateGames()),
		[i, l] = a.useState(null),
		_ = t.map((e) => ({
			key: e.pid,
			value: e,
			label: null != e.name ? e.name : ''
		}));
	return (0, n.jsxs)(c.Dialog, {
		className: r()(p.addGamePopout, R.elevationBorderHigh),
		'aria-label': h.Z.Messages.SETTINGS_GAMES_ADD_NEW_GAME,
		children: [
			(0, n.jsx)(c.SearchableSelect, {
				placeholder: h.Z.Messages.SELECT,
				value: i,
				options: _,
				onChange: function (e) {
					l(e);
				},
				renderOptionLabel: (e) =>
					(0, n.jsx)(c.Text, {
						variant: 'text-md/medium',
						color: 'text-normal',
						lineClamp: 1,
						children: e.label
					})
			}),
			(0, n.jsx)(c.FormDivider, { className: r()(f.marginTop8, f.marginBottom8) }),
			(0, n.jsxs)('div', {
				className: r()(p.actions, x.horizontal),
				children: [
					(0, n.jsx)(c.Button, {
						className: p.cancelButton,
						look: c.ButtonLooks.LINK,
						color: c.ButtonColors.PRIMARY,
						onClick: s,
						children: h.Z.Messages.CANCEL
					}),
					(0, n.jsx)(c.Button, {
						disabled: null == i,
						onClick: function () {
							if (null != i) d.Z.addGame(i.pid, i.name), s();
						},
						children: h.Z.Messages.SETTINGS_GAMES_ADD_NEW_GAME
					})
				]
			})
		]
	});
}
function b(e) {
	var s;
	let { rawGame: t, nowPlaying: i = !1, isOverride: I } = e,
		m = (0, o.cj)([S.Z, u.ZP, N.Z], () => (0, u.FZ)(t)),
		[A, O] = a.useState(!1),
		[R, f] = a.useState(null !== (s = m.name) && void 0 !== s ? s : '???'),
		D = r()(x.flexCenter, {
			[p.game]: !i,
			[p.activeGame]: i,
			[M.card]: !i,
			[p.nowPlaying]: null != m && i
		});
	function L() {
		d.Z.deleteEntry(m);
	}
	function b() {
		m.name !== R && d.Z.editName(m, R);
	}
	function Z(e) {
		13 === e.keyCode && (e.currentTarget.blur(), e.preventDefault());
	}
	function v() {
		d.Z.toggleDetection(m);
	}
	function j() {
		if (A) return;
		let e = null != m.id ? S.Z.getDetectableGame(m.id) : null;
		C.default.track(g.rMx.USER_SETTINGS_REPORT_INCORRECT_GAME_DETECTION, {
			application_id: null == e ? void 0 : e.id,
			game_name: m.name
		}),
			(0, c.showToast)(
				(0, c.createToast)(
					h.Z.Messages.SETTINGS_GAMES_REPORT_INCORRECT_DETECTION_CONFIRMATION.format({ gameName: m.name }),
					c.ToastType.SUCCESS
				)
			),
			O(!0);
	}
	return (0, n.jsxs)('div', {
		className: D,
		children: [
			(0, n.jsxs)('div', {
				className: r()(p.gameNameLastPlayed, x.vertical),
				children: [
					m.verified && !I
						? (0, n.jsxs)('div', {
								className: p.detectedApplication,
								children: [
									(0, n.jsx)('div', {
										className: p.gameName,
										children: m.name
									}),
									(0, n.jsx)(c.Tooltip, {
										text: h.Z.Messages.SETTINGS_GAMES_VERIFIED_ICON,
										children: (e) =>
											(0, n.jsx)(T.Z, {
												className: p.gameVerifiedIcon,
												size: 18,
												color: l.Z.unsafe_rawColors.BRAND_500.css,
												...e,
												children: (0, n.jsx)(c.CheckmarkSmallIcon, {
													size: 'custom',
													width: 18,
													height: 18,
													color: l.Z.unsafe_rawColors.WHITE_500.css
												})
											})
									})
								]
							})
						: (0, n.jsx)('input', {
								className: r()(p.gameName, p.gameNameInput),
								type: 'text',
								maxLength: 128,
								value: R,
								onBlur: b,
								onKeyDown: Z,
								onChange: (e) => f(e.target.value)
							}),
					(function () {
						let e;
						let { played: s, exePath: t } = m;
						return (
							i
								? (e = h.Z.Messages.SETTINGS_GAMES_NOW_PLAYING_STATE)
								: null != s && '' !== s && (e = h.Z.Messages.SETTINGS_GAMES_LAST_PLAYED.format({ when: s })),
							(0, n.jsx)('div', {
								className: p.lastPlayed,
								children: (0, n.jsx)(E.Z, {
									hoverText: null != t && '' !== t ? t.toUpperCase() : '',
									children: e
								})
							})
						);
					})()
				]
			}),
			I
				? null
				: A
					? null
					: (0, n.jsx)('div', {
							className: r()(x.flexCenter, x.noWrap, x.justifyBetween, p.toggleContainer),
							children: (0, n.jsx)(c.Tooltip, {
								text: h.Z.Messages.SETTINGS_GAMES_REPORT_INCORRECT_DETECTION,
								children: (e) => {
									let { onMouseEnter: s, onMouseLeave: t } = e;
									return (0, n.jsx)(c.Clickable, {
										'aria-label': h.Z.Messages.SETTINGS_GAMES_REPORT_INCORRECT_DETECTION,
										className: p.toggleIcon,
										onClick: j,
										onMouseEnter: s,
										onMouseLeave: t,
										children: (0, n.jsx)(c.FlagIcon, {
											size: 'md',
											color: 'currentColor',
											className: p.toggleIconOn,
											colorClass: p.fill
										})
									});
								}
							})
						}),
			(function () {
				let { detectable: e } = m,
					s = e
						? (0, n.jsx)(c.EyeIcon, {
								size: 'md',
								color: 'currentColor',
								className: p.toggleIconOn,
								colorClass: p.fill
							})
						: (0, n.jsx)(c.EyeSlashIcon, {
								size: 'md',
								color: 'currentColor',
								className: p.toggleIconOff,
								colorClass: p.fill
							});
				return (0, n.jsx)('div', {
					className: r()(x.flexCenter, x.noWrap, x.justifyBetween, p.toggleContainer),
					children: (0, n.jsx)(c.Tooltip, {
						text: h.Z.Messages.SETTINGS_GAMES_TOGGLE_DETECTION,
						children: (e) => {
							let { onMouseEnter: t, onMouseLeave: a } = e;
							return (0, n.jsx)(c.Clickable, {
								'aria-label': h.Z.Messages.SETTINGS_GAMES_TOGGLE_DETECTION,
								className: p.toggleIcon,
								onClick: v,
								onMouseEnter: t,
								onMouseLeave: a,
								children: s
							});
						}
					})
				});
			})(),
			(function () {
				if (!P) return null;
				let { overlay: e, overlayWarn: s } = m,
					t = e
						? (0, n.jsx)(c.ScreenIcon, {
								size: 'md',
								color: 'currentColor',
								className: p.toggleIconOn,
								colorClass: p.fill
							})
						: (0, n.jsx)(c.ScreenSlashIcon, {
								size: 'md',
								color: 'currentColor',
								className: p.toggleIconOff,
								colorClass: p.fill
							}),
					a = s
						? (0, n.jsx)(c.Tooltip, {
								text: h.Z.Messages.SETTINGS_GAMES_OVERLAY_WARNING,
								children: (e) =>
									(0, n.jsx)('i', {
										className: p.overlayWarningIcon,
										...e
									})
							})
						: null;
				return (0, n.jsxs)('div', {
					className: r()(x.flexCenter, x.noWrap, x.justifyBetween, p.toggleContainer),
					children: [
						a,
						(0, n.jsx)(c.Tooltip, {
							text: h.Z.Messages.SETTINGS_GAMES_TOGGLE_OVERLAY,
							children: (s) => {
								let { onMouseEnter: a, onMouseLeave: i } = s;
								return (0, n.jsx)(c.Clickable, {
									'aria-label': h.Z.Messages.SETTINGS_GAMES_TOGGLE_OVERLAY,
									className: p.toggleIcon,
									onClick: () => {
										var s;
										return (s = !e), void d.Z.toggleOverlay(m, s);
									},
									onMouseEnter: a,
									onMouseLeave: i,
									children: t
								});
							}
						})
					]
				});
			})(),
			!i || I
				? (0, n.jsx)(_.Z, {
						className: p.removeGame,
						onClick: L
					})
				: null
		]
	});
}
function Z() {
	return (0, n.jsx)('div', {
		className: r()(x.flexCenter, p.notDetected, p.activeGame),
		children: (0, n.jsxs)('div', {
			className: r()(p.gameNameLastPlayed, x.vertical),
			children: [
				(0, n.jsx)('div', {
					className: p.gameName,
					children: h.Z.Messages.SETTINGS_GAMES_NO_GAME_DETECTED
				}),
				(0, n.jsx)('div', {
					className: p.lastPlayed,
					children: h.Z.Messages.SETTINGS_GAMES_NOT_PLAYING
				})
			]
		})
	});
}
function v(e) {
	let { children: s } = e;
	return (0, n.jsxs)(D, {
		className: f.marginTop40,
		children: [
			(0, n.jsx)(c.EmptyStateImage, {
				darkSrc: t(879601),
				lightSrc: t(889000),
				width: 430,
				height: 250
			}),
			s
		]
	});
}
let j = (0, m.oH)(function () {
	for (var e = arguments.length, s = Array(e), t = 0; t < e; t++) s[t] = arguments[t];
	return new Set(s.map((e) => e.exePath));
});
s.Z = function (e) {
	let { className: s, showHeader: t = !0 } = e,
		i = (0, o.Wu)([u.ZP], () => u.ZP.getGamesSeen(!0)),
		{ runningGame: l, overrideExePaths: d } = (0, o.cj)([u.ZP], () => ({
			runningGame: u.ZP.getVisibleGame(),
			overrideExePaths: j(...u.ZP.getOverrides())
		}));
	return (
		a.useEffect(() => ((0, I.Ky)(), I.P7), []),
		(0, n.jsxs)(c.FormSection, {
			tag: 'h1',
			title: t ? h.Z.Messages.REGISTERED_GAMES : null,
			className: s,
			children: [
				null != l
					? (0, n.jsx)(
							b,
							{
								rawGame: l,
								isOverride: d.has(l.exePath),
								nowPlaying: !0
							},
							(0, u.rH)(l)
						)
					: (0, n.jsx)(Z, {}),
				(0, n.jsxs)('div', {
					className: r()(p.nowPlayingAdd, f.marginReset, f.marginTop8, f.marginBottom20),
					children: [
						(0, n.jsx)('span', { children: h.Z.Messages.SETTINGS_GAMES_NOT_SEEING_GAME }),
						(0, n.jsx)(c.Popout, {
							renderPopout: (e) => {
								let { closePopout: s } = e;
								return (0, n.jsx)(L, { onClose: s });
							},
							align: 'center',
							position: 'bottom',
							children: (e) =>
								(0, n.jsx)(c.Button, {
									...e,
									look: c.ButtonLooks.LINK,
									size: c.ButtonSizes.MIN,
									color: c.ButtonColors.LINK,
									children: h.Z.Messages.SETTINGS_GAMES_ADD_GAME
								})
						})
					]
				}),
				0 === i.length
					? (0, n.jsx)(v, {
							children: (0, n.jsx)(c.EmptyStateText, { children: h.Z.Messages.SETTINGS_GAMES_NO_GAMES_HEADER })
						})
					: (0, n.jsxs)(c.FormSection, {
							className: f.marginTop40,
							children: [
								(0, n.jsx)(c.FormTitle, {
									className: f.marginBottom4,
									children: h.Z.Messages.SETTINGS_GAMES_ADDED_GAMES_LABEL
								}),
								(0, n.jsx)(c.FormText, {
									type: c.FormTextTypes.DESCRIPTION,
									children: h.Z.Messages.SETTINGS_GAMES_IGDB_ATTRIBUTION.format({
										igdbLink: 'https://www.igdb.com/about'
									})
								}),
								i.map((e) =>
									(0, n.jsx)(
										b,
										{
											rawGame: e,
											isOverride: d.has(e.exePath)
										},
										(0, u.rH)(e)
									)
								)
							]
						})
			]
		})
	);
};
