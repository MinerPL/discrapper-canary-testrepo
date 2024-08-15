n.d(t, {
	GV: function () {
		return I;
	},
	Po: function () {
		return E;
	},
	Sg: function () {
		return f;
	},
	VP: function () {
		return p;
	},
	dh: function () {
		return m;
	},
	g7: function () {
		return h;
	}
}),
	n(47120);
var r = n(512722),
	i = n.n(r),
	a = n(544891),
	s = n(570140),
	o = n(911969),
	l = n(314897),
	u = n(709054),
	c = n(174212),
	d = n(895924),
	_ = n(981631);
function E(e) {
	let { channelId: t, command: n, section: r, location: a, initialValues: o, triggerSection: l, queryLength: u, sectionName: c, query: _, searchResultsPosition: E, source: f, commandOrigin: h } = e;
	null != n && i()(n.inputType !== d.iw.PLACEHOLDER, 'command should not be placeholder'),
		s.Z.dispatch({
			type: 'APPLICATION_COMMAND_SET_ACTIVE_COMMAND',
			channelId: t,
			command: n,
			section: r,
			initialValues: o,
			location: a,
			triggerSection: l,
			queryLength: u,
			sectionName: c,
			query: _,
			searchResultsPosition: E,
			source: f,
			commandOrigin: h
		});
}
function f(e, t) {
	s.Z.dispatch({
		type: 'APPLICATION_COMMAND_SET_PREFERRED_COMMAND',
		channelId: e,
		commandId: t
	});
}
function h(e, t) {
	s.Z.dispatch({
		type: 'APPLICATION_COMMAND_UPDATE_OPTIONS',
		channelId: e,
		changedOptionStates: t
	});
}
function p(e, t) {
	h(
		e,
		Object.fromEntries(
			Object.entries(t).map((e) => {
				let [t, n] = e;
				return [t, { lastValidationResult: n }];
			})
		)
	);
}
function m(e, t, n, r) {
	return a.tn.put({
		body: { permissions: r },
		url: _.ANM.APPLICATION_BOT_GUILD_COMMAND_PERMISSIONS(e, t, n)
	});
}
function I(e, t, n) {
	var r;
	i()(null != t.autocomplete, 'Missing autocomplete context');
	let { query: d, name: E } = t.autocomplete,
		f = u.default.fromTimestamp(Date.now());
	if (
		(s.Z.dispatch({
			type: 'APPLICATION_COMMAND_AUTOCOMPLETE_REQUEST',
			nonce: f,
			channelId: t.channel.id,
			query: d,
			name: E
		}),
		null == c.Z.getAutocompleteChoices(t.channel.id, E, d))
	)
		a.tn
			.post({
				url: _.ANM.INTERACTIONS,
				body: {
					type: o.B8.APPLICATION_COMMAND_AUTOCOMPLETE,
					application_id: e.applicationId,
					guild_id: null === (r = t.guild) || void 0 === r ? void 0 : r.id,
					channel_id: t.channel.id,
					session_id: l.default.getSessionId(),
					data: n,
					nonce: f
				},
				timeout: 3000
			})
			.catch(() => {
				s.Z.dispatch({
					type: 'INTERACTION_FAILURE',
					nonce: f
				});
			});
}
