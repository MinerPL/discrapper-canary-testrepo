n.r(t),
	n.d(t, {
		ApplicationDirectoryEntrypointNames: function () {
			return s;
		},
		ApplicationDirectoryViews: function () {
			return a;
		},
		getCurrentView: function () {
			return p;
		},
		getPreviousView: function () {
			return h;
		},
		resetApplicationDirectoryHistory: function () {
			return T;
		},
		setEntrypoint: function () {
			return m;
		},
		setGuildId: function () {
			return I;
		},
		setTrackedOpenedFromExternalEntrypoint: function () {
			return g;
		},
		useApplicationDirectoryHistory: function () {
			return f;
		}
	});
var r,
	i,
	a,
	s,
	o = n(266067),
	l = n(652874),
	u = n(731965),
	c = n(703656),
	d = n(264043),
	_ = n(981631);
((r = a || (a = {})).HOME = 'home'), (r.SEARCH = 'search'), (r.APPLICATION = 'application'), ((i = s || (s = {})).EXTERNAL = 'External'), (i.KEYBOARD_SHORTCUT = 'Keyboard Shortcut'), (i.APPLICATION_DIRECTORY_URL = 'Application Directory URL'), (i.APPLICATION_DIRECTORY_PROFILE_EMBED = 'Application Directory Profile Embed'), (i.APPLICATION_DIRECTORY_UPSELL_MODAL = 'Application Directory Upsell Modal'), (i.GUILD_HEADER_POPOUT = 'Guild Header Popout'), (i.GUILD_SETTINGS = 'Guild Settings'), (i.GUILD_INTEGRATION_SETTINGS = 'Guild Integration Settings'), (i.GUILD_CONTEXT_MENU = 'Guild Context Menu');
let E = (0, l.Z)(() => ({
		guildId: null,
		entrypoint: null,
		trackedOpenedFromExternalEntrypoint: !1
	})),
	f = E;
function h() {
	let {
		location: { state: e }
	} = (0, c.s1)();
	return null == e ? void 0 : e.previousView;
}
function p() {
	var e, t;
	let {
			location: { pathname: n }
		} = (0, c.s1)(),
		r = (0, o.LX)(n, {
			path: _.Z5c.APPLICATION_DIRECTORY,
			exact: !0
		}),
		i = (0, o.LX)(n, {
			path: _.Z5c.APPLICATION_DIRECTORY_SEARCH,
			exact: !0
		}),
		a = (0, o.LX)(n, {
			path: [_.Z5c.APPLICATION_DIRECTORY_PROFILE(':applicationId'), _.Z5c.APPLICATION_DIRECTORY_PROFILE_SECTION(':applicationId', ':section')],
			exact: !0
		}),
		{ applicationId: s, section: l } = null !== (e = null == a ? void 0 : a.params) && void 0 !== e ? e : {};
	if (null != r) return { type: 'home' };
	if (null != i) return { type: 'search' };
	if (null != a && null != s) {
		let e = null === (t = d.Z.getApplication(s)) || void 0 === t ? void 0 : t.name;
		return {
			type: 'application',
			applicationId: s,
			applicationName: e,
			section: l
		};
	}
}
function m(e) {
	(0, u.j)(() => E.setState({ entrypoint: e }));
}
function I(e) {
	(0, u.j)(() => E.setState({ guildId: e }));
}
function T() {
	(0, u.j)(() => {
		E.setState({
			entrypoint: null,
			guildId: null
		});
	});
}
function g(e) {
	(0, u.j)(() => E.setState({ trackedOpenedFromExternalEntrypoint: e }));
}
