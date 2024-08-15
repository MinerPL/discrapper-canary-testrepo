n.d(t, {
	Z: function () {
		return c;
	}
});
var i = n(735250);
n(470079);
var a = n(481060),
	s = n(63063),
	l = n(981631),
	r = n(689938),
	o = n(529710);
function c(e) {
	let { searchMode: t, searchByMode: n } = e;
	return (0, i.jsxs)('header', {
		className: o.searchHeader,
		children: [
			(0, i.jsx)(u, { ...e }),
			(0, i.jsxs)(a.TabBar, {
				orientation: 'horizontal',
				className: o.searchHeaderTabList,
				selectedItem: t,
				onItemSelect: n,
				children: [
					(0, i.jsx)(a.TabBar.Item, {
						id: l.QIO.NEWEST,
						children: r.Z.Messages.SEARCH_NEWEST_SHORT
					}),
					(0, i.jsx)(a.TabBar.Item, {
						id: l.QIO.OLDEST,
						children: r.Z.Messages.SEARCH_OLDEST_SHORT
					}),
					(0, i.jsx)(a.TabBar.Item, {
						id: l.QIO.MOST_RELEVANT,
						children: r.Z.Messages.SEARCH_MOST_RELEVANT_SHORT
					})
				]
			})
		]
	});
}
function u(e) {
	let t;
	let { isSearching: n, isIndexing: s, documentsIndexed: l } = e;
	(s || n) &&
		(t = (0, i.jsx)('div', {
			className: o.spinnerWrapper,
			children: (0, i.jsx)(a.Spinner, {
				type: a.Spinner.Type.SPINNING_CIRCLE,
				className: o.spinner,
				itemClassName: o.spinnerPath
			})
		}));
	let c = s && !n;
	return (0, i.jsxs)('div', {
		className: o.totalResults,
		role: 'status',
		children: [
			c
				? (0, i.jsx)(a.Tooltip, {
						text: r.Z.Messages.SEARCH_STILL_INDEXING_HINT.format({ count: l }),
						children: (n) =>
							(0, i.jsxs)('div', {
								className: o.totalResultsWrapper,
								...n,
								children: [(0, i.jsx)(d, { ...e }), t]
							})
					})
				: (0, i.jsx)(d, { ...e }),
			c ? null : t
		]
	});
}
function d(e) {
	let { isSearching: t, isIndexing: n, totalResults: c } = e;
	if (t)
		return (0, i.jsx)(a.Text, {
			variant: 'text-md/normal',
			color: 'header-primary',
			children: r.Z.Messages.SEARCHING
		});
	if (n)
		return (0, i.jsx)(a.Text, {
			variant: 'text-md/normal',
			children: (0, i.jsx)(a.Anchor, {
				className: o.helpdeskLink,
				href: s.Z.getArticleURL(l.BhN.SEARCH_INDEXING),
				children: r.Z.Messages.STILL_INDEXING
			})
		});
	{
		let e = c.toLocaleString();
		return (0, i.jsx)(a.Text, {
			variant: 'text-md/normal',
			color: 'header-primary',
			children: r.Z.Messages.TOTAL_RESULTS.format({ count: e })
		});
	}
}
