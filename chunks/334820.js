n.d(t, {
	Fd: function () {
		return I;
	},
	GN: function () {
		return E;
	},
	rM: function () {
		return _;
	}
}),
	n(47120),
	n(653041);
var s = n(735250),
	a = n(470079),
	i = n(120356),
	r = n.n(i),
	l = n(512722),
	o = n.n(l),
	c = n(481060),
	d = n(755930),
	u = n(695586);
function _(e, t) {
	let { expandableToggleColumnKey: n } = t,
		a = (0, d.Yn)(
			e.map((e) => ({
				...e,
				sort: !1,
				renderHeader() {
					var t;
					return null === (t = e.renderHeader) || void 0 === t ? void 0 : t.call(e, e, []);
				},
				render(t, n, s) {
					var a, i;
					if (t.isExpandedItem) return 'renderExpandedContent' in e ? e.renderExpandedContent(t.item, n) : null;
					return null !== (i = null === (a = e.render) || void 0 === a ? void 0 : a.call(e, t.item, n, s)) && void 0 !== i ? i : null;
				}
			}))
		);
	return [
		(function (e) {
			let { key: t } = e;
			return {
				key: t,
				cellClassName: u.toggleExpandColumn,
				renderHeader: () => null,
				render(e, t) {
					if ((o()(null != t, 'Cell props missing; did you use the hook?'), e.isExpandedItem)) return null;
					let { expandedRows: n, onToggleExpandRow: a } = t,
						i = n.has(e.key);
					return (0, s.jsx)(c.Clickable, {
						className: u.toggleExpandCell,
						onClick: () => a(e.key),
						children: (0, s.jsx)(d.bL, {
							children: (0, s.jsx)(c.ChevronSmallRightIcon, {
								size: 'md',
								color: 'currentColor',
								className: r()(u.caretIcon, { [u.caretDownIcon]: i })
							})
						})
					});
				}
			};
		})({ key: n }),
		...a
	];
}
function I(e) {
	let { renderExpandedContent: t, ...n } = e;
	return {
		...(0, d.wy)(n),
		renderExpandedContent: t
	};
}
function E(e, t) {
	let { generateExpandedRows: n } = t,
		s = (function () {
			let [e, t] = a.useState(new Set());
			return {
				expandedRows: e,
				onToggleExpandRow: a.useCallback(
					(e) => {
						t((t) => {
							let n = new Set(t);
							return n.has(e) ? n.delete(e) : n.add(e), n;
						});
					},
					[t]
				)
			};
		})();
	return {
		data: a.useMemo(() => {
			let t = [];
			for (let a of e)
				if (
					(t.push({
						isExpandedItem: !1,
						key: a.key,
						item: a
					}),
					s.expandedRows.has(a.key))
				)
					for (let e of n(a))
						t.push({
							isExpandedItem: !0,
							key: e.key,
							item: e
						});
			return t;
		}, [s.expandedRows, e, n]),
		cellProps: s
	};
}
