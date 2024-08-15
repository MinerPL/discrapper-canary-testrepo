t.d(s, {
	Z: function () {
		return K;
	}
}),
	t(47120);
var n,
	a,
	i,
	r,
	o = t(735250),
	l = t(470079),
	c = t(392711),
	d = t(442837),
	_ = t(692547),
	E = t(481060),
	u = t(37234),
	I = t(607070),
	T = t(578361),
	S = t(585483),
	N = t(557177),
	C = t(57562),
	m = t(955204),
	A = t(64078),
	O = t(351780),
	g = t(954794),
	h = t(112843),
	p = t(524484),
	R = t(981631),
	x = t(689938),
	M = t(726881);
let f = {
		enabled: !0,
		combosEnabled: !0,
		screenshakeEnabled: !1,
		confettiEnabled: !1
	},
	D = (0, c.range)(0, 11),
	P = (0, c.range)(0, 2.25, 0.25),
	L = (0, c.range)(1, 11),
	b = (0, c.range)(1, 26);
((i = n || (n = {}))[(i.CONFETTI = 0)] = 'CONFETTI'), (i[(i.SHAKE = 1)] = 'SHAKE'), ((r = a || (a = {}))[(r.USER_SETTINGS = 0)] = 'USER_SETTINGS'), (r[(r.ACHIEVEMENT_LIST = 1)] = 'ACHIEVEMENT_LIST');
let Z = () => [
		{
			location: p.Hn.CHAT_INPUT,
			title: x.Z.Messages.POGGERMODE_CONFETTI_LOCATION_CHAT_INPUT_ENABLED,
			description: x.Z.Messages.POGGERMODE_CONFETTI_LOCATION_CHAT_INPUT_ENABLED_DESCRIPTION
		},
		{
			location: p.Hn.REACTION,
			title: x.Z.Messages.POGGERMODE_CONFETTI_LOCATION_REACTION_ENABLED,
			description: x.Z.Messages.POGGERMODE_CONFETTI_LOCATION_REACTION_ENABLED_DESCRIPTION
		},
		{
			location: p.Hn.MEMBER_USER,
			title: x.Z.Messages.POGGERMODE_CONFETTI_LOCATION_MEMBER_USER_ENABLED,
			description: x.Z.Messages.POGGERMODE_CONFETTI_LOCATION_MEMBER_USER_ENABLED_DESCRIPTION
		},
		{
			location: p.Hn.CALL_TILE,
			title: x.Z.Messages.POGGERMODE_CONFETTI_LOCATION_CALL_TILE_ENABLED,
			description: x.Z.Messages.POGGERMODE_CONFETTI_LOCATION_CALL_TILE_ENABLED_DESCRIPTION
		}
	],
	v = () => [
		{
			location: p.oZ.CHAT_INPUT,
			title: x.Z.Messages.POGGERMODE_SCREENSHAKE_LOCATION_CHAT_INPUT_ENABLED,
			description: x.Z.Messages.POGGERMODE_SCREENSHAKE_LOCATION_CHAT_INPUT_ENABLED_DESCRIPTION
		},
		{
			location: p.oZ.VOICE_USER,
			title: x.Z.Messages.POGGERMODE_SCREENSHAKE_LOCATION_VOICE_USER_ENABLED,
			description: x.Z.Messages.POGGERMODE_SCREENSHAKE_LOCATION_VOICE_USER_ENABLED_DESCRIPTION
		},
		{
			location: p.oZ.MENTION,
			title: x.Z.Messages.POGGERMODE_SCREENSHAKE_LOCATION_MENTION_ENABLED,
			description: x.Z.Messages.POGGERMODE_SCREENSHAKE_LOCATION_MENTION_ENABLED_DESCRIPTION
		}
	];
function j(e) {
	let { disabled: s, locations: t, settingsLocations: n, onChange: a } = e,
		i = t.map((e) =>
			(0, o.jsx)(
				E.FormSwitch,
				{
					disabled: s,
					value: n[e.location],
					note: e.description,
					onChange: (s) =>
						a({
							...n,
							[e.location]: s
						}),
					children: e.title
				},
				e.location
			)
		);
	return (0, o.jsxs)(o.Fragment, {
		children: [(0, o.jsx)(E.FormTitle, { children: x.Z.Messages.POGGERMODE_LOCATIONS }), i]
	});
}
function B(e) {
	let { children: s } = e;
	return (0, o.jsx)(E.Text, {
		className: M.sliderDescription,
		variant: 'text-sm/normal',
		color: 'header-secondary',
		children: s
	});
}
function U(e) {
	let {
			settings: { enabled: s, warningSeen: t },
			updateSettings: n
		} = e,
		a = (0, d.e7)([I.Z], () => I.Z.useReducedMotion);
	return (0, o.jsx)(E.FormSwitch, {
		value: s,
		note: x.Z.Messages.POGGERMODE_ENABLE_DESCRIPTION,
		onChange: (e) => {
			!e && (0, C.T)(m.hn.DISABLE_POGGERMODE),
				e && (!t || a)
					? (0, E.openModal)((e) =>
							(0, o.jsx)(E.ConfirmModal, {
								header: a ? x.Z.Messages.POGGERMODE_WARNING_TITLE_REDUCED_MOTION : x.Z.Messages.POGGERMODE_WARNING_TITLE,
								confirmText: x.Z.Messages.ENABLE,
								cancelText: x.Z.Messages.CANCEL,
								onConfirm: () =>
									n(
										a
											? f
											: {
													enabled: !0,
													warningSeen: !0
												}
									),
								...e,
								children: (0, o.jsx)(E.Text, {
									variant: 'text-md/normal',
									children: a ? x.Z.Messages.POGGERMODE_WARNING_BODY_REDUCED_MOTION : x.Z.Messages.POGGERMODE_WARNING_BODY
								})
							})
						)
					: n({ enabled: e });
		},
		children: x.Z.Messages.POGGERMODE_ENABLE
	});
}
function G(e) {
	let {
			settings: { enabled: s, confettiEnabled: t, confettiCount: n, confettiSize: a, confettiEnabledLocations: i },
			updateSettings: r
		} = e,
		l = !s || !t;
	return (0, o.jsxs)(E.FormSection, {
		tag: E.FormTitleTags.H1,
		title: x.Z.Messages.POGGERMODE_CONFETTI_CUSTOMIZATION,
		children: [
			(0, o.jsx)(E.FormSwitch, {
				disabled: !s,
				value: t,
				note: x.Z.Messages.POGGERMODE_CONFETTI_ENABLED_DESCRIPTION,
				onChange: (e) => r({ confettiEnabled: e }, 0),
				children: x.Z.Messages.POGGERMODE_CONFETTI_ENABLED
			}),
			(0, o.jsxs)(E.FormItem, {
				disabled: l,
				title: x.Z.Messages.POGGERMODE_CONFETTI_COUNT,
				className: M.formItem,
				children: [
					(0, o.jsx)(B, { children: x.Z.Messages.POGGERMODE_CONFETTI_COUNT_DESCRIPTION }),
					(0, o.jsx)(E.Slider, {
						disabled: l,
						markers: L,
						stickToMarkers: !0,
						minValue: L[0],
						maxValue: L[L.length - 1],
						initialValue: n,
						onValueChange: (e) => r({ confettiCount: e }, 0),
						onValueRender: (e) => ''.concat(e)
					})
				]
			}),
			(0, o.jsxs)(E.FormItem, {
				disabled: l,
				title: x.Z.Messages.POGGERMODE_CONFETTI_SIZE,
				className: M.formItem,
				children: [
					(0, o.jsx)(B, { children: x.Z.Messages.POGGERMODE_CONFETTI_SIZE_DESCRIPTION }),
					(0, o.jsx)(E.Slider, {
						disabled: l,
						markers: b,
						stickToMarkers: !0,
						minValue: b[0],
						maxValue: b[b.length - 1],
						initialValue: a,
						onValueChange: (e) => r({ confettiSize: e }, 0),
						onValueRender: (e) => ''.concat(e)
					})
				]
			}),
			(0, o.jsx)(j, {
				disabled: l,
				locations: Z(),
				settingsLocations: i,
				onChange: (e) => r({ confettiEnabledLocations: e }, 0)
			})
		]
	});
}
function F(e) {
	let {
			settings: { enabled: s, combosEnabled: t, comboSoundsEnabled: n, combosRequiredCount: a },
			updateSettings: i
		} = e,
		r = !s || !t;
	return (0, o.jsxs)(E.FormSection, {
		tag: E.FormTitleTags.H1,
		title: x.Z.Messages.POGGERMODE_COMBOS_CUSTOMIZATION,
		children: [
			(0, o.jsx)(E.FormSwitch, {
				disabled: !s,
				value: t,
				note: x.Z.Messages.POGGERMODE_COMBOS_ENABLED_DESCRIPTION,
				onChange: (e) => i({ combosEnabled: e }),
				children: x.Z.Messages.POGGERMODE_COMBOS_ENABLED
			}),
			(0, o.jsx)(E.FormSwitch, {
				disabled: !s,
				value: n,
				note: x.Z.Messages.POGGERMODE_COMBO_SOUNDS_ENABLED_DESCRIPTION,
				onChange: (e) => i({ comboSoundsEnabled: e }),
				children: x.Z.Messages.POGGERMODE_COMBO_SOUNDS_ENABLED
			}),
			(0, o.jsxs)(E.FormItem, {
				disabled: r,
				title: x.Z.Messages.POGGERMODE_COMBOS_REQUIRED,
				className: M.formItem,
				children: [
					(0, o.jsx)(B, { children: x.Z.Messages.POGGERMODE_COMBOS_REQUIRED_DESCRIPTION }),
					(0, o.jsx)(E.Slider, {
						disabled: r,
						markers: D,
						stickToMarkers: !0,
						minValue: D[0],
						maxValue: D[D.length - 1],
						initialValue: a,
						onValueChange: (e) => i({ combosRequiredCount: e }),
						onValueRender: (e) => ''.concat(e)
					})
				]
			}),
			(0, o.jsx)(E.FormDivider, { className: M.divider })
		]
	});
}
function y(e) {
	let {
			settings: { enabled: s, screenshakeEnabled: t, shakeIntensity: n, screenshakeEnabledLocations: a },
			updateSettings: i
		} = e,
		r = (0, d.e7)([I.Z], () => I.Z.useReducedMotion),
		l = !s || !t || r,
		c = (e, s) => {
			null != e.shakeIntensity && e.shakeIntensity > n && (0, C.T)(m.hn.MORE), i(e, s);
		};
	return (0, o.jsxs)(E.FormSection, {
		tag: E.FormTitleTags.H1,
		title: x.Z.Messages.POGGERMODE_SCREENSHAKE_CUSTOMIZATION,
		children: [
			(0, o.jsx)(E.FormSwitch, {
				disabled: !s || r,
				tooltipNote: r ? x.Z.Messages.POGGERMODE_SCREENSHAKE_DISABLED_REDUCED_MOTION : null,
				value: t && !r,
				note: x.Z.Messages.POGGERMODE_SCREENSHAKE_ENABLED_DESCRIPTION,
				onChange: (e) => i({ screenshakeEnabled: e }, 1),
				children: x.Z.Messages.POGGERMODE_SCREENSHAKE_ENABLED
			}),
			(0, o.jsxs)(E.FormItem, {
				disabled: l,
				title: x.Z.Messages.POGGERMODE_SCREENSHAKE,
				className: M.formItem,
				children: [
					(0, o.jsx)(B, { children: x.Z.Messages.POGGERMODE_SCREENSHAKE_DESCRIPTION }),
					(0, o.jsx)(E.Slider, {
						disabled: l,
						markers: P,
						equidistant: !0,
						stickToMarkers: !0,
						minValue: P[0],
						maxValue: P[P.length - 1],
						initialValue: n,
						onValueChange: (e) => c({ shakeIntensity: e }, 1),
						onMarkerRender: (e) => (e === P[P.length - 1] ? x.Z.Messages.POGGERMODE_SCREENSHAKE_MAX : ''.concat(100 * e, '%'))
					})
				]
			}),
			(0, o.jsx)(j, {
				disabled: l,
				locations: v(),
				settingsLocations: a,
				onChange: (e) => i({ screenshakeEnabledLocations: e }, 1)
			})
		]
	});
}
function V(e) {
	let { updateSettings: s } = e;
	return (0, o.jsx)(E.FormSection, {
		tag: E.FormTitleTags.H1,
		title: x.Z.Messages.POGGERMODE_SETTINGS_CUSTOMIZATION,
		children: (0, o.jsxs)(E.FormItem, {
			className: M.formItem,
			children: [
				(0, o.jsx)(E.FormText, {
					className: M.formItem,
					children: x.Z.Messages.POGGERMODE_HIDE_SETTINGS_DESCRIPTION
				}),
				(0, o.jsx)(E.Button, {
					className: M.hideButton,
					size: E.Button.Sizes.SMALL,
					onClick: () => {
						s({
							enabled: !1,
							settingsVisible: !1
						}),
							(0, u.xf)();
					},
					children: x.Z.Messages.POGGERMODE_HIDE_SETTINGS
				})
			]
		})
	});
}
function Y(e) {
	let { onChangePage: s } = e;
	return (0, o.jsxs)(E.FormSection, {
		children: [
			(0, o.jsxs)(E.Clickable, {
				onClick: () => s(1),
				className: M.achievementContainer,
				children: [
					(0, o.jsx)('div', {
						className: M.achievementIconContainer,
						children: (0, o.jsx)(E.TrophyIcon, {
							size: 'md',
							color: _.Z.unsafe_rawColors.ORANGE_345.css
						})
					}),
					(0, o.jsxs)('div', {
						className: M.achievementTextContainer,
						children: [
							(0, o.jsx)(E.Heading, {
								variant: 'heading-md/semibold',
								color: 'header-primary',
								children: x.Z.Messages.POGGERMODE_ACHIEVEMENT_TITLE
							}),
							(0, o.jsx)(E.Text, {
								variant: 'text-md/normal',
								color: 'header-secondary',
								children: x.Z.Messages.POGGERMODE_ACHIEVEMENT_DESCRIPTION
							})
						]
					}),
					(0, o.jsx)(E.ChevronSmallRightIcon, {
						size: 'custom',
						color: 'currentColor',
						width: 16,
						className: M.rightCaretIcon
					})
				]
			}),
			(0, o.jsx)(E.FormDivider, { className: M.divider })
		]
	});
}
let w = () =>
	t
		.e('20467')
		.then(t.t.bind(t, 205663, 19))
		.then((e) => {
			let { default: s } = e;
			return s;
		});
function H(e) {
	let { onChangePage: s, setShowEnableAnimation: t } = e,
		n = (0, d.cj)([O.Z], () => O.Z.getState()),
		[a, i] = l.useState({
			x: 0,
			y: 0
		}),
		r = (0, h.Z)();
	function c(e, s, t, n) {
		return (null != s ? s : e) && (null != n ? n : t);
	}
	let _ = (e) => {
			if (e.enabled && !1 === n.enabled) {
				var s;
				t(!0),
					(0, N.GN)('poggermode_enabled'),
					S.S.dispatch(R.CkL.SHAKE_APP, {
						duration: 2000,
						intensity: null !== (s = e.shakeIntensity) && void 0 !== s ? s : n.shakeIntensity
					});
			}
		},
		u = (e, s) => {
			if ((_(e), (0, A.AI)(e), null == s)) return;
			let t = c(n.confettiEnabled, e.confettiEnabled, n.enabled, e.enabled);
			0 === s && t && r.fire(a.x, a.y, { settings: e });
			let i = c(n.screenshakeEnabled, e.screenshakeEnabled, n.enabled, e.enabled);
			if (1 === s && i) {
				var o;
				S.S.dispatch(R.CkL.SHAKE_APP, {
					duration: 1000,
					intensity: null !== (o = e.shakeIntensity) && void 0 !== o ? o : n.shakeIntensity
				});
			}
		},
		I = (e) => {
			i({
				x: e.clientX,
				y: e.clientY
			});
		};
	return (
		l.useEffect(() => (window.addEventListener('mousemove', I), () => window.removeEventListener('mousemove', I)), []),
		(0, o.jsxs)(o.Fragment, {
			children: [
				(0, o.jsx)(E.Heading, {
					variant: 'heading-lg/semibold',
					className: M.title,
					children: x.Z.Messages.POGGERMODE
				}),
				(0, o.jsx)(U, {
					settings: n,
					updateSettings: u
				}),
				(0, o.jsx)(Y, { onChangePage: s }),
				(0, o.jsx)(F, {
					settings: n,
					updateSettings: u
				}),
				(0, o.jsx)(y, {
					settings: n,
					updateSettings: u
				}),
				(0, o.jsx)(G, {
					settings: n,
					updateSettings: u
				}),
				(0, o.jsx)(V, { updateSettings: u })
			]
		})
	);
}
let k = (e, s, t) => {
		let n = (e) => () => {
			s(e);
		};
		switch (e) {
			case 0:
				return (0, o.jsx)(H, {
					onChangePage: n(1),
					setShowEnableAnimation: t
				});
			case 1:
				return (0, o.jsx)(g.Z, { onBackClick: n(0) });
			default:
				return null;
		}
	},
	W = (e) => (0 === e ? T.n.LEFT : T.n.RIGHT);
function K() {
	let [e, s] = l.useState(0),
		[t, n] = l.useState(W(e)),
		[a, i] = l.useState(!1),
		r = (0, d.e7)([I.Z], () => I.Z.useReducedMotion),
		c = a && !r;
	return (
		l.useEffect(() => {
			let s = setTimeout(() => {
				n(W(e));
			}, 500);
			return () => clearTimeout(s);
		}, [e]),
		l.useEffect(() => {
			Math.random() > 0.99 && (0, C.T)(m.hn.VISITOR_100);
		}, []),
		(0, o.jsxs)(o.Fragment, {
			children: [
				(0, o.jsx)(T.Z, {
					className: M.slideAnimator,
					step: e,
					direction: t,
					children: k(e, s, i)
				}),
				(0, o.jsx)('div', {
					className: c ? M.enableAnimationOverlayVisible : M.enableAnimationOverlayHidden,
					children: (0, o.jsx)(E.LottieAnimation, {
						className: M.enableAnimation,
						importData: w,
						shouldAnimate: c,
						autoplay: !1,
						resetOnPlay: !0,
						loop: !1,
						onComplete: () => i(!1)
					})
				})
			]
		})
	);
}
