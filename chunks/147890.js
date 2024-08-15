n.r(t),
	n.d(t, {
		goHome: function () {
			return u;
		},
		goSearch: function () {
			return _;
		},
		goToAppDirectory: function () {
			return c;
		},
		goToApplication: function () {
			return d;
		},
		goToApplicationSection: function () {
			return h;
		},
		goToApplicationStoreSku: function () {
			return p;
		},
		goToCategory: function () {
			return f;
		},
		replaceAppDirectoryURLWith: function () {
			return g;
		}
	}),
	n(610138),
	n(216116),
	n(78328),
	n(815648),
	n(47120);
var i = n(703656),
	l = n(626135),
	r = n(34674),
	a = n(132871),
	s = n(272242),
	o = n(981631);
let c = (e) => {
		let { view: t = a.ApplicationDirectoryViews.HOME, guildId: n, applicationId: i, applicationSection: r, entrypoint: c, skuId: f } = e,
			g = {
				...c,
				pathname: window.location.pathname
			};
		switch ((l.default.track(o.rMx.APP_DIRECTORY_OPENED, { source: null == g ? void 0 : g.name }), (0, a.resetApplicationDirectoryHistory)(), (0, a.setEntrypoint)(g), null != n && (0, a.setGuildId)(n), t === a.ApplicationDirectoryViews.APPLICATION && null == i && (t = a.ApplicationDirectoryViews.HOME), t)) {
			case a.ApplicationDirectoryViews.HOME:
				u();
				break;
			case a.ApplicationDirectoryViews.SEARCH:
				_();
				break;
			case a.ApplicationDirectoryViews.APPLICATION:
				if (null != i) {
					if (null != r) {
						if (r === s.ApplicationDirectoryProfileSections.STORE && null != f) {
							p({
								applicationId: i,
								skuId: f
							});
							break;
						}
						h({
							applicationId: i,
							section: r
						});
						break;
					}
					d({ applicationId: i });
				}
		}
	},
	u = () => {
		let e = { previousView: (0, a.getCurrentView)() };
		(0, i.uL)(o.Z5c.APPLICATION_DIRECTORY, { state: e });
	},
	d = (e) => {
		let { applicationId: t } = e,
			n = { previousView: (0, a.getCurrentView)() };
		(0, i.uL)(o.Z5c.APPLICATION_DIRECTORY_PROFILE(t), { state: n });
	},
	h = (e) => {
		let { applicationId: t, section: n } = e,
			l = { previousView: (0, a.getCurrentView)() };
		(0, i.uL)(o.Z5c.APPLICATION_DIRECTORY_PROFILE_SECTION(t, n), { state: l });
	},
	p = (e) => {
		let { applicationId: t, skuId: n } = e,
			l = { previousView: (0, a.getCurrentView)() };
		(0, i.uL)(o.Z5c.APPLICATION_DIRECTORY_PROFILE_STORE_SKU(t, n), { state: l });
	},
	_ = function () {
		let { query: e, categoryId: t, page: n } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
			l = new URLSearchParams(),
			r = { previousView: (0, a.getCurrentView)() };
		null != e && l.set('q', e),
			null != t && l.set('category_id', t.toString()),
			null != n && l.set('page', n.toString()),
			(0, i.uL)(o.Z5c.APPLICATION_DIRECTORY_SEARCH, {
				search: l.toString(),
				state: r
			});
	},
	f = (e) => {
		let { categoryId: t } = e;
		_({ categoryId: null != t ? t : r.MU });
	},
	g = (e) => {
		let {
			location: { state: t }
		} = (0, i.s1)();
		(0, i.dL)(e, t);
	};
