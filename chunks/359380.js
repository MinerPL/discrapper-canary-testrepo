t.d(n, {
	d: function () {
		return m;
	}
}),
	t(47120),
	t(653041);
var a = t(735250),
	r = t(470079),
	i = t(481060),
	s = t(214715),
	o = t(18100),
	l = t(308083),
	c = t(689938),
	d = t(318577);
let u = (e) => {
	let { title: n, icon: t, availableTraits: o, selectedTraits: c, onUpdateTraits: u } = e,
		m = r.useCallback(
			(e) => {
				let n = new Set(c);
				n.delete(e), u(n);
			},
			[u, c]
		),
		_ = r.useCallback(
			(e) => {
				if (c.size === l.c4) return;
				let n = new Set(c);
				n.add(e), u(n);
			},
			[u, c]
		);
	return (0, a.jsxs)(a.Fragment, {
		children: [
			(0, a.jsx)(i.Text, {
				className: d.interestsCategoryTitle,
				variant: 'text-xs/semibold',
				color: 'text-muted',
				children: n
			}),
			(0, a.jsx)('div', {
				className: d.utilityTraits,
				children: o.map((e) => {
					let n = c.has(e);
					return (0, a.jsx)(
						s.Z,
						{
							variant: 'text-xs/semibold',
							color: 'interactive-normal',
							icon: t,
							text: e,
							selected: n,
							onClick: n ? m : _
						},
						e
					);
				})
			})
		]
	});
};
function m(e) {
	let { guildId: n, onUpdateTraits: t, progress: s, availableTraits: m, hidePreview: _ = !1 } = e,
		f = r.useMemo(() => {
			let e = [];
			return (
				l.gh.forEach((n) =>
					e.push({
						value: n,
						label: n
					})
				),
				e
			);
		}, []),
		C = r.useMemo(() => {
			var e;
			return null !== (e = null != m ? m : null == s ? void 0 : s.interests) && void 0 !== e ? e : new Set();
		}, [m, null == s ? void 0 : s.interests]),
		h = r.useMemo(() => Array.from(C), [C]),
		x = r.useMemo(() => h.filter((e) => l.gh.has(e)), [h]),
		p = r.useCallback(
			(e) => {
				t(new Set([...h.filter((e) => !l.gh.has(e)), ...e]));
			},
			[t, h]
		),
		g = r.useMemo(() => h.filter((e) => l.WZ.has(e) || l.gh.has(e)), [h]),
		T = r.useCallback(
			(e) => {
				let n = new Set(C);
				n.delete(e), t(n);
			},
			[t, C]
		);
	return (0, a.jsxs)('div', {
		className: d.content,
		children: [
			(0, a.jsxs)('div', {
				className: d.mainPanelContainer,
				children: [
					(0, a.jsx)(u, {
						title: c.Z.Messages.CLAN_SETUP_UTILITY_TRAITS_CATEGORY_AGE,
						icon: i.UserIcon,
						availableTraits: l.jK,
						selectedTraits: C,
						onUpdateTraits: t
					}),
					(0, a.jsx)(u, {
						title: c.Z.Messages.CLAN_SETUP_UTILITY_TRAITS_CATEGORY_IDENTITY,
						icon: i.UserIcon,
						availableTraits: l.CT,
						selectedTraits: C,
						onUpdateTraits: t
					}),
					(0, a.jsx)(i.Text, {
						className: d.interestsCategoryTitle,
						variant: 'text-xs/semibold',
						color: 'text-muted',
						children: c.Z.Messages.CLAN_SETUP_UTILITY_TRAITS_CATEGORY_LANGUAGE
					}),
					(0, a.jsx)('div', {
						className: d.languageSelect,
						children: (0, a.jsx)(i.SearchableSelect, {
							wrapperClassName: d.input,
							options: f,
							value: x,
							onChange: p,
							placeholder: c.Z.Messages.CLAN_SETUP_LANGUAGE_PLACEHOLDER,
							multi: !0
						})
					})
				]
			}),
			(0, a.jsx)('div', {
				className: d.fixedWidthSidebar,
				children:
					null != s &&
					h.length > 0 &&
					!_ &&
					(0, a.jsx)(o.Z, {
						guildId: n,
						progress: s,
						traitsToHighlight: g,
						maskDescription: !0,
						onTraitClick: T
					})
			})
		]
	});
}
n.Z = (e) => {
	let { guildId: n, title: t, description: r, onUpdateTraits: s, progress: o, traits: l, optional: u = !1, hidePreview: _ = !1 } = e;
	return (0, a.jsxs)('div', {
		className: d.slideContent,
		children: [
			u &&
				(0, a.jsx)(i.Text, {
					variant: 'text-sm/medium',
					color: 'header-secondary',
					className: d.optionalTag,
					children: c.Z.Messages.CLAN_SETUP_OPTIONAL
				}),
			(0, a.jsx)(i.Heading, {
				variant: 'heading-xxl/medium',
				className: d.title,
				children: t
			}),
			(0, a.jsx)(i.Text, {
				variant: 'text-md/normal',
				color: 'header-secondary',
				className: d.subtitle,
				children: r
			}),
			(0, a.jsx)(m, {
				guildId: n,
				onUpdateTraits: s,
				progress: o,
				availableTraits: l,
				hidePreview: _
			})
		]
	});
};
