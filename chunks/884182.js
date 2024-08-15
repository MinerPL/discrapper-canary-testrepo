t(47120);
var i = t(735250),
	o = t(470079),
	s = t(120356),
	l = t.n(s),
	a = t(512722),
	r = t.n(a),
	u = t(392711),
	d = t.n(u),
	m = t(947849),
	c = t(546432),
	h = t(217702),
	I = t(159696);
let x = Math.round((h.mT - 8) / 3),
	p = Math.round((h.mT - 4) / 2),
	g = Math.round((h.Jj - 4) / 2),
	C = Math.round((2 * (h.mT - 4)) / 3),
	j = C / 2;
function f(e) {
	let { visualMediaItems: n, footer: t } = e;
	null != t && r()(1 === n.length, 'footer only gets applied to single items');
	let o = n.length;
	if (1 === o)
		return (0, i.jsx)(M, {
			itemsForLayout: n,
			isSingleImage: !0,
			footer: t
		});
	if (2 === o) return (0, i.jsx)(T, { itemsForLayout: n });
	if (3 === o) return (0, i.jsx)(y, { itemsForLayout: n });
	if (4 === o) return (0, i.jsx)(v, { itemsForLayout: n });
	let s = o % 3;
	return (0, i.jsxs)(i.Fragment, {
		children: [
			1 === s && (0, i.jsx)(M, { itemsForLayout: n.slice(0, s) }),
			2 === s && (0, i.jsx)(T, { itemsForLayout: n.slice(0, s) }),
			0 === s ? (0, i.jsx)(E, { itemsForLayout: n }) : (0, i.jsx)(E, { itemsForLayout: n.slice(s) })
		]
	});
}
function M(e) {
	let { itemsForLayout: n, isSingleImage: t, footer: o } = e,
		s = n[0];
	return (0, i.jsx)('div', {
		className: l()(I.oneByOneGrid, {
			[I.oneByOneGridSingle]: t,
			[I.oneByOneGridMosaic]: !t,
			[I.hasFooter]: null != o
		}),
		children: (0, i.jsx)(w, {
			props: s,
			useFullWidth: !t,
			isSingleItem: !0,
			footer: o
		})
	});
}
function T(e) {
	let { itemsForLayout: n } = e;
	return (0, i.jsx)('div', {
		className: I.oneByTwoGrid,
		children: n.map((e) =>
			(0, i.jsx)(
				'div',
				{
					className: I.oneByTwoGridItem,
					children: (0, i.jsx)(w, {
						props: e,
						maxWidth: p,
						maxHeight: p
					})
				},
				e.item.uniqueId
			)
		)
	});
}
function y(e) {
	let { itemsForLayout: n } = e;
	return (0, i.jsxs)('div', {
		className: l()(I.oneByTwoGrid, I.oneByTwoLayoutThreeGrid),
		children: [
			(0, i.jsx)('div', {
				className: I.oneByTwoSoloItem,
				children: (0, i.jsx)(w, {
					props: n[0],
					maxWidth: C
				})
			}),
			(0, i.jsx)('div', {
				className: I.oneByTwoDuoItem,
				children: (0, i.jsx)('div', {
					className: I.twoByOneGrid,
					children: n.splice(1).map((e) =>
						(0, i.jsx)(
							'div',
							{
								className: I.twoByOneGridItem,
								children: (0, i.jsx)(w, {
									props: e,
									maxWidth: j,
									maxHeight: g
								})
							},
							e.item.uniqueId
						)
					)
				})
			})
		]
	});
}
function v(e) {
	let { itemsForLayout: n } = e;
	return (0, i.jsx)('div', {
		className: I.twoByTwoGrid,
		children: n.map((e) =>
			(0, i.jsx)(
				w,
				{
					props: e,
					maxWidth: p,
					maxHeight: g
				},
				e.item.uniqueId
			)
		)
	});
}
function E(e) {
	let { itemsForLayout: n } = e;
	return (0, i.jsx)('div', {
		className: I.threeByThreeGrid,
		children: n.map((e) =>
			(0, i.jsx)(
				w,
				{
					props: e,
					maxWidth: x,
					maxHeight: x
				},
				e.item.uniqueId
			)
		)
	});
}
let N = (e) => ({
		className: l()(e, I.itemContentContainer),
		imgContainerClassName: I.lazyImgContainer,
		imgClassName: I.lazyImg
	}),
	O = (e) => ({ className: l()(e, I.lazyImg) });
function w(e) {
	let { props: n, maxWidth: t = h.mT, maxHeight: o = h.Jj, useFullWidth: s = !0, isSingleItem: l = !1, footer: a } = e,
		r = n.item.type,
		u = {
			...n,
			...('IMAGE' === r && N(n.className)),
			...('VIDEO' === r && O(n.className)),
			mediaLayoutType: h.hV.MOSAIC,
			maxWidth: t,
			maxHeight: o,
			useFullWidth: s,
			isSingleMosaicItem: l
		};
	return (0, i.jsx)(m.h.Provider, {
		value: n.gifFavoriteButton,
		children: (0, i.jsx)(c.ZP, {
			...u,
			footer: a
		})
	});
}
n.Z = function (e) {
	let { items: n, inlineForwardButton: t } = e,
		{
			groupableVisualMediaItems: s,
			nonGroupableVisualMediaItems: l,
			nonVisualMediaItems: a
		} = (function (e) {
			return o.useMemo(() => {
				let [n, t] = d().partition(e, (e) => (0, c.R_)(e.item.type)),
					[i, o] = d().partition(n, (e) => (0, c.Ld)(e.item.type));
				return {
					groupableVisualMediaItems: i,
					nonGroupableVisualMediaItems: o,
					nonVisualMediaItems: t
				};
			}, [e]);
		})(n);
	return (0, i.jsxs)(i.Fragment, {
		children: [
			s.length > 0 &&
				(null != t
					? (0, i.jsxs)('div', {
							className: I.mosaicContainer,
							children: [
								(0, i.jsx)('div', {
									className: I.visualMediaItemContainer,
									children: (0, i.jsx)(f, { visualMediaItems: s })
								}),
								t
							]
						})
					: (0, i.jsx)('div', {
							className: I.visualMediaItemContainer,
							children: (0, i.jsx)(f, { visualMediaItems: s })
						})),
			l.length > 0 &&
				l.map((e) => {
					let n = e.renderMosaicItemFooter({
						item: e.item,
						message: e.message
					});
					return (0, i.jsx)(
						'div',
						{
							className: I.visualMediaItemContainer,
							children: (0, i.jsx)(f, {
								visualMediaItems: [e],
								footer: n
							})
						},
						e.item.uniqueId
					);
				}),
			a.length > 0 &&
				(0, i.jsx)('div', {
					className: I.nonVisualMediaItemContainer,
					children: a.map((e) =>
						(0, i.jsx)(
							'div',
							{
								className: I.nonVisualMediaItem,
								children: (0, i.jsx)(w, { props: e })
							},
							e.item.uniqueId
						)
					)
				})
		]
	});
};
