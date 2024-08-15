n.d(t, {
	B: function () {
		return I;
	},
	F: function () {
		return g;
	}
}),
	n(47120);
var i = n(735250),
	a = n(470079),
	s = n(120356),
	r = n.n(s),
	l = n(481060),
	o = n(393238),
	c = n(626135),
	d = n(981631),
	u = n(671078);
let _ = [
		'egirl',
		'egirls',
		'waifu',
		'dating',
		'nsfw',
		'sex',
		'playboy',
		'stupid',
		'harem',
		'playgirl',
		'shitcoin',
		'shitpost',
		'porno',
		'nudes',
		'sexy',
		'horny',
		'fart',
		'tits',
		'balls',
		'cum'
	],
	E = (e) => {
		let { text: t, onClick: n, className: a, hide: s } = e;
		return (0, i.jsx)('li', {
			className: r()(u.tag, a, { [u.hide]: s }),
			children: (0, i.jsx)(l.Clickable, {
				className: u.tagText,
				onClick: (e) => {
					e.stopPropagation(), e.preventDefault(), n(e);
				},
				children: t
			})
		});
	},
	h = (e) => {
		let { tags: t, onTagClick: n, guildId: s, section: r } = e;
		return (
			a.useEffect(() => {
				c.default.track(d.rMx.OPEN_POPOUT, {
					type: 'Discovery Tags Overflow',
					guild_id: s,
					location: {
						page: d.ZY5.GUILD_DISCOVERY,
						section: r
					}
				});
			}, [s, r]),
			(0, i.jsx)(l.Dialog, {
				className: u.overflowTagsPopout,
				children: (0, i.jsx)('ul', {
					children: t.map((e) =>
						(0, i.jsx)(
							E,
							{
								onClick: () => n(e),
								className: u.tagAlt,
								text: e
							},
							e
						)
					)
				})
			})
		);
	},
	m = (e) => {
		let { className: t, count: n } = e;
		return (0, i.jsx)(l.Popout, {
			renderPopout: () => (0, i.jsx)(h, { ...e }),
			position: 'right',
			align: 'top',
			closeOnScroll: !0,
			children: (e) =>
				(0, i.jsx)(E, {
					className: t,
					...e,
					text: '+'.concat(n)
				})
		});
	},
	I = {
		DEFAULT: u.tagDefault,
		LIGHT: u.tagLight,
		ALT: u.tagAlt
	},
	g = (e) => {
		let {
				tags: t,
				onTagClick: n,
				className: s,
				discoveryTagStyle: l = I.DEFAULT,
				hideOverflow: c = !1,
				guildId: d,
				section: h
			} = e,
			{ ref: g, width: p } = (0, o.Z)(),
			[T, S] = a.useState(null),
			f = t.filter((e) => !_.includes(e.toLowerCase()));
		return (
			a.useLayoutEffect(() => {
				if (null == g.current || null == p || 0 === p) return;
				let e = 0,
					t = 0,
					n = p - 40 - 4;
				for (
					let i = 0;
					i < f.length && ((t += g.current.children[i].clientWidth + 4), i === f.length - 1 ? !(t > n + 40) : !(t > n));
					i++
				) {
					e++;
				}
				S((t) => (e <= f.length ? e : t));
			}, [p, g, f]),
			(0, i.jsxs)('ul', {
				ref: g,
				className: r()(u.tagContainer, s, { [u.invisible]: null == T }),
				children: [
					f.map((e, t) =>
						(0, i.jsx)(
							E,
							{
								className: l,
								onClick: () => n(e),
								hide: null != T && t >= T,
								text: e
							},
							e
						)
					),
					!c &&
						null != T &&
						T < f.length &&
						(0, i.jsx)(m, {
							className: l,
							onTagClick: n,
							tags: f.slice(T),
							count: f.length - T,
							guildId: d,
							section: h
						})
				]
			})
		);
	};
