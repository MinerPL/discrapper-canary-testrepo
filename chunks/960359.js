n.d(t, {
    BE: function () {
        return _;
    },
    Nw: function () {
        return c;
    },
    R5: function () {
        return d;
    },
    RJ: function () {
        return E;
    },
    VT: function () {
        return u;
    },
    Vb: function () {
        return I;
    },
    Vt: function () {
        return r;
    },
    dN: function () {
        return o;
    },
    m0: function () {
        return m;
    }
});
var i = n(544891), a = n(570140), s = n(199902), l = n(981631);
let r = async e => {
        let t = !1;
        try {
            t = (await i.tn.get({
                url: l.ANM.DROPS_ELIGIBILITY,
                query: { drops_quest_id: e }
            })).body.eligible;
        } catch (e) {
            t = !1;
        }
        a.Z.dispatch({
            type: 'DROPS_ELIGIBILITY_FETCH_SUCCESS',
            isEligible: t,
            dropsQuestId: e
        });
    }, o = async e => {
        let t = [];
        try {
            t = (await i.tn.get({
                url: l.ANM.DROPS_PLATFORM_AVAILABILITY,
                query: { drops_quest_id: e }
            })).body.available_platforms;
        } catch (e) {
            t = [];
        }
        a.Z.dispatch({
            type: 'DROPS_PLATFORM_AVAILABILITY_SUCCESS',
            availablePlatforms: t
        });
    }, c = async (e, t) => {
        try {
            let n = await i.tn.post({
                url: l.ANM.DROPS_CLAIM_REWARD_CODE,
                query: {
                    drops_quest_id: e,
                    platform: t
                }
            });
            return a.Z.dispatch({
                type: 'DROPS_REWARD_CODE_CLAIM_SUCCESS',
                rewardCode: n.body.code
            }), n.body.code;
        } catch (e) {
            throw e;
        }
    }, d = async () => {
        try {
            let e = await i.tn.get({ url: l.ANM.DROPS_USER_STATUS });
            a.Z.dispatch({
                type: 'DROPS_USER_STATUS_FETCH_SUCCESS',
                codes: e.body
            });
        } catch (e) {
            a.Z.dispatch({ type: 'DROPS_USER_STATUS_FETCH_FAILURE' });
        }
    }, u = async e => {
        await i.tn.del({
            url: l.ANM.DROPS_ENROLL_USER,
            query: { drops_quest_id: e }
        }), a.Z.dispatch({
            type: 'DROPS_UNENROLL_USER',
            dropsQuestId: e
        }), await d();
    }, _ = async e => {
        let t = await i.tn.get({
            url: l.ANM.DROPS_ENROLL_USER,
            query: { drops_quest_id: e }
        });
        await a.Z.dispatch({
            type: 'DROPS_ENROLLED_USER_FETCH_SUCCESS',
            enrolledUser: t.body.user,
            isEnrolled: t.body.enrolled,
            dropsQuestId: e
        });
    }, E = async e => {
        await i.tn.post({
            url: l.ANM.DROPS_ENROLL_USER,
            query: { drops_quest_id: e }
        }), a.Z.dispatch({ type: 'DROPS_ENROLL_SUCCESS' });
    }, m = async (e, t, n) => {
        let r = s.Z.getViewerIds(t);
        try {
            let s = await i.tn.post({
                url: l.ANM.DROPS_HEARTBEAT(e),
                query: {
                    stream_key: t,
                    application_id: n,
                    viewer_count: r.length
                },
                retries: 2
            });
            a.Z.dispatch({
                type: 'DROPS_HEARTBEAT_SUCCESS',
                dropsQuestId: e,
                completed: s.body.completed,
                progress: s.body.progress
            });
        } catch (t) {
            a.Z.dispatch({
                type: 'DROPS_HEARTBEAT_FAILURE',
                dropsQuestId: e,
                statusCode: null == t ? void 0 : t.status
            });
        }
    }, I = async e => {
        try {
            let t = await i.tn.get({ url: l.ANM.DROPS_PROGRESS(e) });
            a.Z.dispatch({
                type: 'DROPS_FETCH_PROGRESS_SUCCESS',
                dropsQuestId: e,
                completed: t.body.completed,
                progress: t.body.progress
            });
        } catch (t) {
            a.Z.dispatch({
                type: 'DROPS_FETCH_PROGRESS_FAILURE',
                dropsQuestId: e
            });
        }
    };
