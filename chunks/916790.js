t.d(r, {
	Z: function () {
		return S;
	}
}),
	t(47120);
var a = t(735250),
	n = t(470079),
	i = t(120356),
	o = t.n(i),
	l = t(913527),
	c = t.n(l),
	s = t(481060),
	d = t(570140),
	u = t(665149),
	h = t(4912),
	m = t(55935),
	g = t(428530),
	p = t(257785),
	b = t(484036),
	f = t(681619),
	y = t(621060),
	x = t(981073),
	k = t(535271);
function v(e) {
	return parseFloat(e.toFixed(3));
}
let _ = [
	{
		key: 'store',
		cellClassName: x.actionColumn,
		render(e) {
			let { trace: r } = e;
			return r.name;
		}
	},
	{
		key: 'time',
		cellClassName: x.totalTimeColumn,
		render(e) {
			let { trace: r } = e;
			return ''.concat(v(r.time), ' ms');
		}
	}
];
function w(e) {
	let { actionLog: r } = e,
		t = n.useMemo(
			() =>
				r.traces.map((e) => ({
					key: e.name,
					trace: e
				})),
			[r]
		);
	return (0, a.jsx)(s.ScrollerThin, {
		children: (0, a.jsx)(f.Z, {
			columns: _,
			data: t
		})
	});
}
let C = [
	{
		id: 'action',
		name: 'Action',
		render(e) {
			var r;
			let { actionLog: t } = e,
				n = c()(t.createdAt);
			return (0, a.jsxs)(a.Fragment, {
				children: [
					(0, a.jsxs)(p.E, {
						className: x.actionProperties,
						children: [
							(0, a.jsx)(p.Z9, {
								name: 'Created at',
								children: (0, a.jsx)('time', {
									dateTime: null === (r = t.createdAt) || void 0 === r ? void 0 : r.toISOString(),
									title: (0, m.vc)(n, 'LLLL'),
									children: (0, m.Y4)(n)
								})
							}),
							(0, a.jsxs)(p.Z9, {
								name: 'Total Time',
								children: [v(t.totalTime), ' ms']
							})
						]
					}),
					(0, a.jsx)(s.ScrollerThin, {
						className: x.inspectorContainer,
						children: (0, a.jsx)(g.Z, { data: t.action })
					})
				]
			});
		}
	},
	{
		id: 'traces',
		name: 'Store Handlers',
		render(e) {
			let { actionLog: r } = e;
			return (0, a.jsx)(w, { actionLog: r });
		}
	}
];
function j(e) {
	let { actionLog: r, initialHeight: t } = e,
		i = n.useMemo(
			() =>
				r.error
					? [
							...C,
							{
								id: 'error',
								name: (0, a.jsxs)(a.Fragment, {
									children: [(0, a.jsx)(h.Z, { className: x.errorIcon }), 'Error']
								}),
								render(e) {
									let { actionLog: r } = e;
									return (0, a.jsxs)(a.Fragment, {
										children: [
											(0, a.jsx)('div', {
												className: o()(x.errorToolbar, k.toolbar),
												children: (0, a.jsx)('div', {
													className: k.toolbarGroup,
													children: (0, a.jsx)(s.Button, {
														className: k.toolbarButton,
														size: s.Button.Sizes.MIN,
														onClick: () => console.error(r.error),
														children: 'Log to Console'
													})
												})
											}),
											(0, a.jsx)(s.ScrollerThin, {
												className: x.inspectorContainer,
												children: (0, a.jsx)(g.Z, { data: r.error })
											})
										]
									});
								}
							}
						]
					: C,
			[r]
		),
		{ TabBar: l, renderSelectedTab: c } = (0, y.Z)({ tabs: i }, [i]);
	return (0, a.jsxs)(b.Z, {
		className: x.subPanel,
		minHeight: 100,
		initialHeight: t,
		children: [
			(0, a.jsx)(l, {}),
			(0, a.jsxs)(u.ZP, {
				className: o()(k.headerBar, x.subPanelHeaderBar),
				children: [
					(0, a.jsx)(u.ZP.Icon, {
						icon: s.ReceiptIcon,
						tooltip: r.name
					}),
					(0, a.jsx)(u.ZP.Title, { children: r.name })
				]
			}),
			c({ actionLog: r })
		]
	});
}
let N = [
	{
		key: 'action',
		cellClassName: x.actionColumn,
		render(e) {
			let { actionLog: r } = e;
			return (0, a.jsxs)(a.Fragment, {
				children: [r.error && (0, a.jsx)(h.Z, { className: x.errorIcon }), r.name]
			});
		}
	},
	{
		key: 'total time',
		cellClassName: x.totalTimeColumn,
		render(e) {
			let { actionLog: r } = e;
			return ''.concat(v(r.totalTime), ' ms');
		}
	}
];
function S() {
	let e = n.useRef(null),
		r = (function (e) {
			let [r, t] = n.useState([...e.logs]),
				a = n.useCallback(() => t([...e.logs]), [e]);
			return (
				n.useEffect(
					() => (
						e.on('log', a),
						() => {
							e.off('log', a);
						}
					),
					[e, a]
				),
				r
			);
		})(d.Z.actionLogger),
		t = n.useMemo(
			() =>
				r.map((e) => ({
					key: e.id.toString(),
					actionLog: e
				})),
			[r]
		),
		[i, l] = n.useState(),
		c = r.find((e) => e.id === i);
	return (0, a.jsxs)('div', {
		ref: e,
		className: o()(k.panel, x.panel),
		children: [
			(0, a.jsx)(s.ScrollerThin, {
				className: x.tableContainer,
				children: (0, a.jsx)(f.Z, {
					columns: N,
					data: t,
					selectedRowKey: null == i ? void 0 : i.toString(),
					onClickRow: (e) => l(Number.parseInt(e, 10))
				})
			}),
			null != c &&
				(0, a.jsx)(j, {
					actionLog: c,
					initialHeight: null != e.current ? e.current.clientHeight / 2 : 300
				})
		]
	});
}
