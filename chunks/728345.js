n.d(t, {
	I: function () {
		return c;
	}
}),
	n(789020),
	n(610138),
	n(216116),
	n(78328),
	n(815648),
	n(47120);
var r = n(442837),
	i = n(544891),
	a = n(570140),
	s = n(630388),
	o = n(812206),
	l = n(981631);
async function u(e) {
	let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
		n = arguments.length > 2 ? arguments[2] : void 0;
	a.Z.dispatch({
		type: 'APPLICATION_FETCH',
		applicationId: e
	});
	try {
		let r = await i.tn.get({
			url: l.ANM.APPLICATION_PUBLIC(e),
			query: { with_guild: t },
			oldFormErrors: !0,
			signal: n
		});
		return (
			a.Z.dispatch({
				type: 'APPLICATION_FETCH_SUCCESS',
				application: r.body
			}),
			r.body
		);
	} catch (t) {
		throw (
			(a.Z.dispatch({
				type: 'APPLICATION_FETCH_FAIL',
				applicationId: e
			}),
			t)
		);
	}
}
t.Z = {
	async createApplication(e) {
		let { name: t, guildId: n, type: r, teamId: s } = e,
			o = (
				await i.tn.post({
					url: l.ANM.APPLICATIONS,
					body: {
						name: t,
						type: r,
						guild_id: n,
						team_id: s
					}
				})
			).body;
		return (
			null != n &&
				null != r &&
				a.Z.dispatch({
					type: 'APPLICATION_FETCH_SUCCESS',
					application: o
				}),
			o
		);
	},
	async getApplicationsForGuild(e) {
		let { includeTeam: t, ...n } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
			r = (
				await i.tn.get({
					url: l.ANM.GUILD_APPLICATIONS(e),
					query: {
						...n,
						include_team: t
					}
				})
			).body;
		return (
			a.Z.dispatch({
				type: 'APPLICATIONS_FETCH_SUCCESS',
				applications: r
			}),
			r
		);
	},
	async transferApplication(e) {
		let { applicationId: t, teamId: n } = e,
			r = (
				await i.tn.post({
					url: l.ANM.APPLICATION_OWNER_TRANSFER(t),
					body: { team_id: n }
				})
			).body;
		return (
			a.Z.dispatch({
				type: 'APPLICATION_FETCH_SUCCESS',
				application: r
			}),
			r
		);
	},
	async fetchApplications(e) {
		let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
			n = e;
		if (
			(!t &&
				(n = e.filter((e) => {
					var t, n;
					let r = o.Z.getApplication(e),
						i = (0, s.yE)(null !== (n = null == r ? void 0 : r.flags) && void 0 !== n ? n : 0, l.udG.EMBEDDED) && (null == r ? void 0 : null === (t = r.embeddedActivityConfig) || void 0 === t ? void 0 : t.supported_platforms) == null;
					return !(null != r && !i) && !o.Z.isFetchingApplication(e) && !o.Z.didFetchingApplicationFail(e) && e.length > 0;
				})),
			n.length > 0)
		) {
			let e;
			a.Z.dispatch({
				type: 'APPLICATIONS_FETCH',
				applicationIds: n
			});
			try {
				e = await i.tn.get({
					url: l.ANM.APPLICATIONS_PUBLIC,
					query: new URLSearchParams(n.map((e) => ['application_ids', e])).toString(),
					oldFormErrors: !0
				});
			} catch (e) {
				throw (
					(a.Z.dispatch({
						type: 'APPLICATIONS_FETCH_FAIL',
						applicationIds: n
					}),
					e)
				);
			}
			a.Z.dispatch({
				type: 'APPLICATIONS_FETCH_SUCCESS',
				applications: e.body
			});
		}
	},
	fetchApplication: u
};
let c = (0, r.Kb)(o.Z, {
	get: (e) => (null != e ? o.Z.getApplication(e) : null),
	load: (e, t) => (null != t ? u(t, !1, e).then(l.dG4) : Promise.resolve()),
	getIsLoading: (e) => null != e && o.Z.isFetchingApplication(e)
});
