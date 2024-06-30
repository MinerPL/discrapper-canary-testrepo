n(789020), n(610138), n(216116), n(78328), n(815648), n(47120);
var r = n(544891), i = n(570140), a = n(630388), o = n(812206), s = n(981631);
t.Z = {
    async createApplication(e) {
        let {
                name: t,
                guildId: n,
                type: a,
                teamId: o
            } = e, l = (await r.tn.post({
                url: s.ANM.APPLICATIONS,
                body: {
                    name: t,
                    type: a,
                    guild_id: n,
                    team_id: o
                }
            })).body;
        return null != n && null != a && i.Z.dispatch({
            type: 'APPLICATION_FETCH_SUCCESS',
            application: l
        }), l;
    },
    async getApplicationsForGuild(e) {
        let {
                includeTeam: t,
                ...n
            } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, a = (await r.tn.get({
                url: s.ANM.GUILD_APPLICATIONS(e),
                query: {
                    ...n,
                    include_team: t
                }
            })).body;
        return i.Z.dispatch({
            type: 'APPLICATIONS_FETCH_SUCCESS',
            applications: a
        }), a;
    },
    async transferApplication(e) {
        let {
                applicationId: t,
                teamId: n
            } = e, a = (await r.tn.post({
                url: s.ANM.APPLICATION_OWNER_TRANSFER(t),
                body: { team_id: n }
            })).body;
        return i.Z.dispatch({
            type: 'APPLICATION_FETCH_SUCCESS',
            application: a
        }), a;
    },
    async fetchApplications(e) {
        let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1], n = e;
        if (!t && (n = e.filter(e => {
                var t, n;
                let r = o.Z.getApplication(e), i = (0, a.yE)(null !== (n = null == r ? void 0 : r.flags) && void 0 !== n ? n : 0, s.udG.EMBEDDED) && (null == r ? void 0 : null === (t = r.embeddedActivityConfig) || void 0 === t ? void 0 : t.supported_platforms) == null;
                return !(null != r && !i) && !o.Z.isFetchingApplication(e) && !o.Z.didFetchingApplicationFail(e) && e.length > 0;
            })), n.length > 0) {
            let e;
            i.Z.dispatch({
                type: 'APPLICATIONS_FETCH',
                applicationIds: n
            });
            try {
                e = await r.tn.get({
                    url: s.ANM.APPLICATIONS_PUBLIC,
                    query: new URLSearchParams(n.map(e => [
                        'application_ids',
                        e
                    ])).toString(),
                    oldFormErrors: !0
                });
            } catch (e) {
                throw i.Z.dispatch({
                    type: 'APPLICATIONS_FETCH_FAIL',
                    applicationIds: n
                }), e;
            }
            i.Z.dispatch({
                type: 'APPLICATIONS_FETCH_SUCCESS',
                applications: e.body
            });
        }
    },
    fetchApplication(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return i.Z.dispatch({
            type: 'APPLICATION_FETCH',
            applicationId: e
        }), r.tn.get({
            url: s.ANM.APPLICATION_PUBLIC(e),
            query: { with_guild: t },
            oldFormErrors: !0
        }).then(e => (i.Z.dispatch({
            type: 'APPLICATION_FETCH_SUCCESS',
            application: e.body
        }), e.body)).catch(t => (i.Z.dispatch({
            type: 'APPLICATION_FETCH_FAIL',
            applicationId: e
        }), Promise.reject(t)));
    }
};
