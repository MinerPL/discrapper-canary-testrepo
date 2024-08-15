var r = n(735250);
n(470079);
var i = n(120356),
	a = n.n(i),
	s = n(481060),
	o = n(829968),
	l = n(565138),
	u = n(474936),
	c = n(689938),
	d = n(664463);
let _ = {
		XXSMALL: d.xxsmall,
		XSMALL: d.xsmall,
		SMALL: d.small,
		MEDIUM: d.medium,
		LARGE: d.large
	},
	E = (e) => {
		let t,
			{ game: i, guild: E, skuId: f, pid: h, className: p, guildClassName: m, size: I = _.MEDIUM } = e;
		if (
			(null != f &&
				(t = (function (e) {
					if (null == e) return null;
					switch (e) {
						case u.Si.GUILD:
							return n(632342);
						case u.Si.TIER_0:
							return n(467596);
						case u.Si.TIER_1:
							return n(670957);
						case u.Si.TIER_2:
						case u.Si.LEGACY:
							return n(480768);
						default:
							return null;
					}
				})(f)),
			null != i &&
				null == t &&
				(t = i.getIconURL(
					(function (e) {
						switch (e) {
							case _.XXSMALL:
								return 16;
							case _.XSMALL:
								return 24;
							case _.SMALL:
								return 30;
							case _.MEDIUM:
								return 40;
							case _.LARGE:
								return 60;
							default:
								return 80;
						}
					})(I)
				)),
			null == (t = (0, o.Z)(h, t)) && null != E)
		) {
			let e = (function (e) {
				switch (e) {
					case _.XSMALL:
						return l.Z.Sizes.SMALLER;
					case _.SMALL:
						return l.Z.Sizes.SMALL;
					case _.LARGE:
						return l.Z.Sizes.LARGE;
					default:
					case _.MEDIUM:
						return l.Z.Sizes.MEDIUM;
				}
			})(I);
			return (0, r.jsx)(l.Z, {
				className: a()(d.gameIcon, m, p),
				guild: E,
				size: e
			});
		}
		if (null == t)
			return (0, r.jsx)(s.UnknownGameIcon, {
				size: 'md',
				color: 'currentColor',
				className: a()(d.gameIcon, I, p)
			});
		let T = null == i ? void 0 : i.name,
			g = null != T && '' !== T ? c.Z.Messages.APPLICATION_ICON_A11Y_LABEL.format({ applicationName: T }) : c.Z.Messages.APPLICATION_ICON_NO_NAME_A11Y_LABEL;
		return (0, r.jsx)('img', {
			alt: g,
			src: t,
			className: a()(d.gameIcon, I, p)
		});
	};
(E.Sizes = _), (t.Z = E);
