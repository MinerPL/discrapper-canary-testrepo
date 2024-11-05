n.d(t, {
    IX: function () {
        return f;
    },
    Rt: function () {
        return _;
    },
    UM: function () {
        return d;
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
    s = n(264043),
    o = n(973616),
    l = n(630388),
    u = n(812206),
    c = n(981631);
async function d(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        n = arguments.length > 2 ? arguments[2] : void 0;
    a.Z.dispatch({
        type: 'APPLICATION_FETCH',
        applicationId: e
    });
    try {
        let r = await i.tn.get({
            url: c.ANM.APPLICATION_PUBLIC(e),
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
t.ZP = {
    async createApplication(e) {
        let { name: t, guildId: n, type: r, teamId: s } = e,
            o = (
                await i.tn.post({
                    url: c.ANM.APPLICATIONS,
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
                    url: c.ANM.GUILD_APPLICATIONS(e),
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
                    url: c.ANM.APPLICATION_OWNER_TRANSFER(t),
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
                    let r = u.Z.getApplication(e),
                        i = (0, l.yE)(null !== (n = null == r ? void 0 : r.flags) && void 0 !== n ? n : 0, c.udG.EMBEDDED) && ((null == r ? void 0 : null === (t = r.embeddedActivityConfig) || void 0 === t ? void 0 : t.supported_platforms) == null || (null == r ? void 0 : r.bot) == null);
                    return !(null != r && !i) && !u.Z.isFetchingApplication(e) && !u.Z.didFetchingApplicationFail(e) && e.length > 0;
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
                    url: c.ANM.APPLICATIONS_PUBLIC,
                    query: new URLSearchParams(n.map((e) => ['application_ids', e])).toString(),
                    oldFormErrors: !0
                });
            } catch (e) {
                throw (
                    (429 !== e.status &&
                        a.Z.dispatch({
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
    fetchApplication: d
};
let f = (0, r.Kb)(u.Z, {
    queryId: (e) => (null != e ? ['applications', e] : null),
    get: (e) => (null != e ? u.Z.getApplication(e) : null),
    load: (e, t) => (null != t ? d(t, !1, e).then(c.dG4) : Promise.resolve()),
    useStateHook: r.e7
});
function _(e) {
    let { data: t, isLoading: n, error: i } = f(e);
    return {
        app: (0, r.e7)(
            [s.Z],
            () => {
                if (null == t) {
                    let t = s.Z.getApplication(e);
                    if (null != t) return o.Z.createFromServer(t);
                }
                return t;
            },
            [e, t]
        ),
        isLoading: n,
        error: i
    };
}
