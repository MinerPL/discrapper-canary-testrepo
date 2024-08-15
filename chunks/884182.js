t(47120);
var i = t(735250),
	o = t(470079),
	l = t(120356),
	s = t.n(l),
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
	f = C / 2;
function j(e) {
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
	if (3 === o) return (0, i.jsx)(v, { itemsForLayout: n });
	if (4 === o) return (0, i.jsx)(y, { itemsForLayout: n });
	let l = o % 3;
	return (0, i.jsxs)(i.Fragment, {
		children: [1 === l && (0, i.jsx)(M, { itemsForLayout: n.slice(0, l) }), 2 === l && (0, i.jsx)(T, { itemsForLayout: n.slice(0, l) }), 0 === l ? (0, i.jsx)(E, { itemsForLayout: n }) : (0, i.jsx)(E, { itemsForLayout: n.slice(l) })]
	});
}
function M(e) {
	let { itemsForLayout: n, isSingleImage: t, footer: o } = e,
		l = n[0];
	return (0, i.jsx)('div', {
		className: s()(I.oneByOneGrid, {
			[I.oneByOneGridSingle]: t,
			[I.oneByOneGridMosaic]: !t,
			[I.hasFooter]: null != o
		}),
		children: (0, i.jsx)(w, {
			props: l,
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
function v(e) {
	let { itemsForLayout: n } = e;
	return (0, i.jsxs)('div', {
		className: s()(I.oneByTwoGrid, I.oneByTwoLayoutThreeGrid),
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
									maxWidth: f,
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
function y(e) {
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
		className: s()(e, I.itemContentContainer),
		imgContainerClassName: I.lazyImgContainer,
		imgClassName: I.lazyImg
	}),
	O = (e) => ({ className: s()(e, I.lazyImg) });
function w(e) {
	let { props: n, maxWidth: t = h.mT, maxHeight: o = h.Jj, useFullWidth: l = !0, isSingleItem: s = !1, footer: a } = e,
		r = n.item.type,
		u = {
			...n,
			...('IMAGE' === r && N(n.className)),
			...('VIDEO' === r && O(n.className)),
			mediaLayoutType: h.hV.MOSAIC,
			maxWidth: t,
			maxHeight: o,
			useFullWidth: l,
			isSingleMosaicItem: s
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
			groupableVisualMediaItems: l,
			nonGroupableVisualMediaItems: s,
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
			l.length > 0 &&
				(null != t
					? (0, i.jsxs)('div', {
							className: I.mosaicContainer,
							children: [
								(0, i.jsx)('div', {
									className: I.visualMediaItemContainer,
									children: (0, i.jsx)(j, { visualMediaItems: l })
								}),
								t
							]
						})
					: (0, i.jsx)('div', {
							className: I.visualMediaItemContainer,
							children: (0, i.jsx)(j, { visualMediaItems: l })
						})),
			s.length > 0 &&
				s.map((e) => {
					let n = e.renderMosaicItemFooter({
						item: e.item,
						message: e.message
					});
					return (0, i.jsx)(
						'div',
						{
							className: I.visualMediaItemContainer,
							children: (0, i.jsx)(j, {
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
