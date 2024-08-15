t.d(r, {
	Z: function () {
		return Z;
	}
}),
	t(47120),
	t(724458),
	t(757143),
	t(390547),
	t(653041);
var a = t(735250),
	n = t(470079),
	i = t(688619),
	o = t.n(i),
	l = t(221762),
	c = t.n(l),
	s = t(392711),
	d = t.n(s),
	u = t(470716),
	h = t(433517),
	m = t(640971),
	g = t(544342),
	p = t(203165),
	b = t(559760),
	f = t(481060),
	y = t(410030),
	x = t(246992),
	k = t(535271);
function v(e, r) {
	return !r && (r = e.slice(0)), Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(r) } }));
}
function _() {
	let e = v([
		"\n    import {defineColorTokens, themedToken} from '../tools/define';\n\n    const semanticTokenValues = {\n      ",
		'\n    };\n\n    export const semanticTokens = defineColorTokens(() => semanticTokenValues);\n    export type SemanticTokenValue = typeof semanticTokenValues;\n  '
	]);
	return (
		(_ = function () {
			return e;
		}),
		e
	);
}
function w() {
	let e = v(['\n      export const rawPalette = {\n        ', '\n      } as const;\n    ']);
	return (
		(w = function () {
			return e;
		}),
		e
	);
}
let C = {
		...b.K,
		...m.J,
		...g.c
	},
	j = {
		...I(b.K),
		...I(m.J)
	},
	N = [
		'100',
		'130',
		'160',
		'200',
		'230',
		'260',
		'300',
		'330',
		'345',
		'360',
		'400',
		'430',
		'460',
		'500',
		'530',
		'560',
		'600',
		'630',
		'645',
		'660',
		'700',
		'730',
		'760',
		'800',
		'830',
		'860',
		'900'
	];
function S(e) {
	var r;
	let t = 'string' == typeof e ? 1 : null !== (r = e.opacity) && void 0 !== r ? r : 1;
	return {
		color: 'string' == typeof e ? e : e.color,
		opacity: t
	};
}
function T(e) {
	return 'name' in e;
}
function I(e) {
	let r = {};
	return (
		Object.keys(e).forEach((t) => {
			let a = e[t];
			if ('name' in a)
				a = (function e(r) {
					let t = C[r.name];
					return 'name' in t ? e(t) : t;
				})(a);
			r[t] = {
				light: S(a.light),
				dark: S(a.dark),
				darker: S(null != a.darker ? a.darker : a.dark),
				midnight: S(null != a.midnight ? a.midnight : a.dark)
			};
		}),
		r
	);
}
function E(e, r) {
	let [t, a] = n.useState(() => {
		let t = h.K.get(e);
		return null != t ? t : r;
	});
	return (
		n.useEffect(() => {
			h.K.set(e, t);
		}, [e, t]),
		[t, a]
	);
}
function Z() {
	let e = (0, y.Fg)(),
		[{ rawPalette: r, semanticTokens: t }, i, l, s, h, m] = (function (e, r) {
			let [t, a] = E(''.concat(e, '-states'), [r]),
				[i, o] = E(''.concat(e, '-index'), 0),
				l = t[i],
				c = n.useCallback(
					(e) => {
						a([e, ...t].slice(0, 20)), o(0);
					},
					[o, a, t]
				),
				s = n.useCallback(() => {
					o(Math.min(t.length - 1, i + 1));
				}, [i, o, t.length]),
				d = n.useCallback(() => {
					o(Math.max(0, i - 1));
				}, [i, o]),
				u = i < t.length - 1;
			return [l, c, s, d, u, i > 0];
		})('color-override-03-03-23', {
			rawPalette: p.b,
			semanticTokens: j
		}),
		[g, b] = n.useState(''),
		[v, C] = n.useState({}),
		[S, T] = n.useState({}),
		I = n.useMemo(
			() =>
				Object.keys(r).reduce(
					(e, r) => [
						...e,
						{
							value: r,
							label: r
						}
					],
					[]
				),
			[r]
		),
		Z = n.useCallback(
			(e, a, n, o) => {
				let l = d().cloneDeep(t);
				(l[e][a] = {
					color: n,
					opacity: o
				}),
					i({
						rawPalette: r,
						semanticTokens: l
					});
			},
			[t, r, i]
		),
		R = n.useMemo(() => {
			let a = Object.keys(t).map((r) => {
					let { color: a, opacity: n } = t[r][e];
					return '--'.concat(r, ': hsl(var(--').concat(a.replace('.', '-'), '-hsl) / ').concat(n, ');');
				}),
				n = Object.keys(r).flatMap((e) => {
					let { hex: t } = r[e],
						{
							h: a,
							s: n,
							l: i
						} = (function (e) {
							let [r, t, a] = 'transparent' === e ? [0, 0, 0] : o()(e).hsl(),
								n = isNaN(r) ? 0 : d().round(r, 1),
								i = d().round(100 * a, 1);
							return {
								h: n,
								s: d().round(100 * t, 1),
								l: i
							};
						})(t),
						l = d().kebabCase(e);
					return [
						'--'
							.concat(l, '-hsl: ')
							.concat(a, ' calc(var(--saturation-factor, 1) * ')
							.concat(n, '%) ')
							.concat(i, '% !important;'),
						'--'.concat(l, ': hsl(var(--').concat(l, '-hsl)) !important;')
					];
				});
			return '\n      .theme-'
				.concat(e, ' {\n        ')
				.concat(a.join('\n'), '\n\n        ')
				.concat(
					Object.keys(v)
						.filter((e) => v[e])
						.map((e) => '--'.concat(e, ': magenta !important;'))
						.join('\n'),
					'\n\n        '
				)
				.concat(
					Object.keys(S)
						.filter((e) => S[e])
						.map((e) => '--'.concat(e, ': magenta !important;'))
						.join('\n'),
					'\n      }\n\n      html {\n        '
				)
				.concat(n.join('\n'), '\n      }\n    ');
		}, [e, t, r, v, S]),
		O = n.useCallback((e) => {
			let r = '',
				t = '',
				a = !1;
			return c()(
				_(),
				Object.keys(e)
					.map((n) => {
						(t = n.split('-')[0]) !== r ? ((r = t), (a = !0)) : (a = !1);
						let i = e[n],
							o = i.light,
							l = i.dark,
							c = i.midnight,
							s = [
								['dark', l],
								['light', o]
							];
						(c.opacity !== l.opacity || c.color !== l.color) && s.push(['midnight', c]);
						let d = s
								.map((e) => {
									let [r, { color: t, opacity: a }] = e;
									return 1 === a
										? ''.concat(r, ': "').concat(t, '"')
										: ''.concat(r, ': { color: "').concat(t, '", opacity: ').concat(a, ' }');
								})
								.join(',\n'),
							u = '"'.concat(n, '": themedToken({ ').concat(d, ' })');
						return ''.concat(a ? '\n' : '').concat(u);
					})
					.join(',\n')
			);
		}, []),
		A = n.useCallback(
			(e) =>
				c()(
					w(),
					Object.keys(e).map((r) => '"'.concat(r, '": {hex: "').concat(e[r].hex, '"}'))
				),
			[]
		),
		P = n.useCallback(
			(e) => {
				let r = {};
				Object.keys(e).forEach((t) => {
					Object.keys(e[t]).map((a) => {
						let n = [...N];
						'primary' !== t && (n = n.filter((e) => '645' !== e)),
							(r[''.concat(t, '.').concat(n[+a])] = { hex: e[t][a] });
					});
				}),
					i({
						rawPalette: r,
						semanticTokens: t
					});
			},
			[t, i]
		);
	return (0, a.jsxs)('div', {
		className: k.panel,
		style: {
			display: 'flex',
			flexDirection: 'column'
		},
		children: [
			(0, a.jsxs)('div', {
				className: k.toolbar,
				style: {
					flex: '0 0 34px',
					padding: '0 4px'
				},
				children: [
					(0, a.jsxs)('div', {
						className: k.toolbarGroup,
						children: [
							(0, a.jsx)(f.Button, {
								onClick: l,
								disabled: !h,
								size: f.Button.Sizes.MIN,
								children: 'Undo'
							}),
							(0, a.jsx)(f.Button, {
								onClick: s,
								disabled: !m,
								size: f.Button.Sizes.MIN,
								children: 'Redo'
							})
						]
					}),
					(0, a.jsx)('div', { className: k.toolbarDivider }),
					(0, a.jsxs)('div', {
						className: k.toolbarGroup,
						children: [
							(0, a.jsx)('span', {
								className: k.toolbarGroupLabel,
								children: 'Raw'
							}),
							(0, a.jsx)(f.Button, {
								size: f.Button.Sizes.MIN,
								onClick: () => {
									navigator.clipboard.readText().then((e) => {
										P(JSON.parse(e));
									});
								},
								children: 'Import'
							}),
							(0, a.jsx)(f.Button, {
								size: f.Button.Sizes.MIN,
								onClick: () => {
									navigator.clipboard.writeText(A(r));
								},
								children: 'Export'
							})
						]
					}),
					(0, a.jsx)('div', { className: k.toolbarDivider }),
					(0, a.jsxs)('div', {
						className: k.toolbarGroup,
						children: [
							(0, a.jsx)('span', {
								className: k.toolbarGroupLabel,
								children: 'Semantic'
							}),
							(0, a.jsx)(f.Button, {
								size: f.Button.Sizes.MIN,
								onClick: () => {
									navigator.clipboard.writeText(O(t));
								},
								children: 'Export'
							})
						]
					}),
					(0, a.jsx)('div', { className: k.toolbarDivider }),
					(0, a.jsx)('div', {
						className: k.toolbarGroup,
						children: (0, a.jsx)(f.Button, {
							size: f.Button.Sizes.MIN,
							type: 'reset',
							color: f.Button.Colors.RED,
							onClick: () => {
								i({
									rawPalette: p.b,
									semanticTokens: j
								});
							},
							children: 'Reset all'
						})
					}),
					(0, a.jsx)('div', { className: k.toolbarDivider }),
					(0, a.jsxs)('div', {
						className: k.toolbarGroup,
						style: { flexGrow: 1 },
						children: [
							(0, a.jsx)(f.SearchBar, {
								size: f.SearchBar.Sizes.SMALL,
								query: g,
								onChange: b,
								onClear: () => b(''),
								placeholder: 'Search tokens',
								'aria-label': 'Search tokens'
							}),
							' '
						]
					})
				]
			}),
			(0, a.jsx)(f.ScrollerThin, {
				children: (0, a.jsx)('div', {
					style: {
						display: 'grid',
						gridTemplateColumns: 'min-content 1fr 1fr min-content min-content',
						gap: 8,
						margin: 8,
						alignItems: 'center'
					},
					children: Object.keys(j)
						.filter((e) => '' === g || e.toLowerCase().includes(g))
						.map((r) => {
							var i;
							let o = j[r][e],
								l = null == t[r] ? { ...o } : t[r][e],
								c = l.color !== o.color || l.opacity !== o.opacity;
							return (0, a.jsxs)(
								n.Fragment,
								{
									children: [
										(0, a.jsx)('div', {
											onMouseEnter: () => {
												T((e) => ({
													...e,
													[r]: !0
												}));
											},
											onMouseLeave: () => {
												T((e) => ({
													...e,
													[r]: !1
												}));
											},
											children: (0, a.jsx)(f.Checkbox, {
												value: v[r],
												onChange: () => {
													C((e) => ({
														...e,
														[r]: !e[r]
													}));
												}
											})
										}),
										(0, a.jsx)('span', { children: r }),
										(0, a.jsx)(f.SearchableSelect, {
											value: l.color,
											options: I,
											onChange: (t) => {
												Z(r, e, t, l.opacity);
											},
											renderOptionPrefix: (r) =>
												null == r
													? null
													: (0, a.jsx)('div', {
															style: {
																width: 16,
																height: 16,
																borderRadius: '50%',
																backgroundColor: 'var(--'.concat(r.value.replace('.', '-'), ')'),
																border: '1px solid '.concat('dark' === e ? 'white' : 'black')
															}
														}),
											popoutLayerContext: x.O$
										}),
										(0, a.jsx)(f.TextInput, {
											type: 'number',
											style: { width: '4em' },
											value: null === (i = l.opacity) || void 0 === i ? void 0 : i.toString(),
											onChange: (t) => {
												'' !== t && Z(r, e, l.color, parseFloat(t));
											}
										}),
										(0, a.jsx)(f.Clickable, {
											style: c
												? {}
												: {
														opacity: 0,
														pointerEvents: 'none'
													},
											onClick: () => {
												var t;
												c && Z(r, e, o.color, null !== (t = o.opacity) && void 0 !== t ? t : 1);
											},
											children: (0, a.jsx)(f.XSmallIcon, {
												size: 'xs',
												color: 'currentColor'
											})
										})
									]
								},
								r
							);
						})
				})
			}),
			(0, a.jsx)(u.ql, {
				children: (0, a.jsx)('style', {
					id: 'devtools-color-overrides',
					children: R
				})
			})
		]
	});
}
