var i, a, s, l, r = n(913527), o = n.n(r), c = n(442837), d = n(846519), u = n(570140), _ = n(594190), E = n(569545), m = n(314897), I = n(70956), T = n(960359), h = n(853197), N = n(702512);
let f = null, p = null, C = {}, g = {}, S = N._e.LOADING_INITIAL_PROGRESS, A = new d.V7(), x = {
        completed: !1,
        initialProgressFetched: !1,
        interrupted: !1,
        retries: 0
    }, O = e => {
        let {
            dropsQuestId: t,
            streamKey: n,
            game: i,
            completed: a,
            gameTitle: s
        } = x;
        if (!(null == t || null == s || a || null == i || null == n || A.isStarted()))
            e ? (0, T.m0)(t, n, i.pid) : A.start(1 * I.Z.Millis.MINUTE, () => {
                (0, T.m0)(t, n, i.pid);
            });
    }, R = e => {
        x.retries = 0, x.completed = e.completed, x.initialProgressFetched = !0, x.progress = e.progress, x.lastCheckedAt = o().now(), S = x.completed ? N._e.QUEST_COMPLETION : N._e.TRACK_PROGRESS;
    }, M = (e, t, n) => {
        if (!x.completed || e.dropsQuestId !== x.dropsQuestId)
            x.game = t, x.dropsQuestId = e.dropsQuestId, x.gameTitle = e.title, x.completed = !1, x.interrupted = !1, x.streamKey = n, x.retries = 0, x.lastCheckedAt = o().now(), A.start(5000, () => O(!0));
    };
class v extends (l = c.ZP.Store) {
    initialize() {
        this.waitFor(_.ZP);
    }
    getActivityPanelTooltipAction() {
        return S;
    }
    getIsPartnerGameQuestComplete(e) {
        var t;
        let n = (0, h.BS)(e);
        if (null == n || null == p)
            return !1;
        let i = !!(null === (t = p[n.dropsQuestId]) || void 0 === t ? void 0 : t.completed_at);
        return x.completed && x.gameTitle === n.title || i;
    }
    get serverEligibleByQuestIds() {
        return C;
    }
    get platformAvailability() {
        return f;
    }
    get userStatus() {
        return p;
    }
    get activityPanelTooltipAction() {
        return S;
    }
    get enrolledDropsByQuestId() {
        return g;
    }
    get hasInitialProgressFetched() {
        return x.initialProgressFetched;
    }
    get isCurrentQuestCompleted() {
        return x.completed;
    }
    get isCurrentQuestInterrupted() {
        return x.interrupted;
    }
    get currentDropQuestGameTitle() {
        return x.gameTitle;
    }
    get currentDropQuestStreamProgress() {
        let e = x.progress;
        if (null == e || null == e.steps || 0 === e.steps.length)
            return 0;
        let t = e.steps.find(e => 'stream_length' === e.name);
        return null == t ? 0 : t.percent;
    }
}
s = 'DropsStore', (a = 'displayName') in (i = v) ? Object.defineProperty(i, a, {
    value: s,
    enumerable: !0,
    configurable: !0,
    writable: !0
}) : i[a] = s, t.Z = new v(u.Z, {
    DROPS_ELIGIBILITY_FETCH_SUCCESS: e => {
        C[e.dropsQuestId] = e.isEligible;
    },
    DROPS_PLATFORM_AVAILABILITY_SUCCESS: e => {
        f = e.availablePlatforms.filter(e => N.El.includes(e));
    },
    DROPS_USER_STATUS_FETCH_SUCCESS: e => {
        var t;
        p = null !== (t = e.codes) && void 0 !== t ? t : {};
    },
    DROPS_USER_STATUS_FETCH_FAILURE: e => {
        p = {};
    },
    DROPS_ENROLLED_USER_FETCH_SUCCESS: e => {
        g[e.dropsQuestId] = {
            isEnrolled: e.isEnrolled,
            enrolledUser: e.enrolledUser
        };
    },
    DROPS_FETCH_PROGRESS_SUCCESS: R,
    DROPS_FETCH_PROGRESS_FAILURE: e => {
        if (!x.initialProgressFetched)
            x.initialProgressFetched = !0, S = N._e.STREAM_CTA;
    },
    DROPS_HEARTBEAT_SUCCESS: e => {
        R(e), C[e.dropsQuestId] = !0, O();
    },
    DROPS_HEARTBEAT_FAILURE: e => {
        let {
            dropsQuestId: t,
            statusCode: n
        } = e;
        if (x.completed = !1, x.initialProgressFetched = !0, x.lastCheckedAt = o().now(), 429 === n && 0 === x.retries) {
            x.retries = x.retries + 1, O();
            return;
        }
        S = N._e.STREAM_CTA, 403 === n ? C[t] = !1 : x.interrupted = !0;
    },
    DROPS_UNENROLL_USER: e => {
        p = null, C = { ...C }, delete C[e.dropsQuestId], g = { ...g }, delete g[e.dropsQuestId], x.dropsQuestId === e.dropsQuestId && (x = {
            completed: !1,
            initialProgressFetched: !1,
            interrupted: !1,
            retries: 0
        });
    },
    STREAM_CLOSE: () => {
        x.completed && (S = N._e.QUEST_COMPLETION), x.interrupted = !1, x.retries = 0, A.stop();
    },
    STREAM_START: function (e) {
        var t;
        let {
                streamType: n,
                guildId: i,
                channelId: a,
                pid: s
            } = e, l = (0, E.V9)({
                streamType: n,
                guildId: i,
                channelId: a,
                ownerId: m.default.getId()
            });
        if (null == s)
            return;
        let r = _.ZP.getGameForPID(s);
        if (null == r)
            return;
        let o = Object.values(N.Zv).find(e => e.gameSearchTerm.find(e => {
            var t;
            return e.toLowerCase() === (null === (t = r.name) || void 0 === t ? void 0 : t.toLowerCase());
        }));
        if (null == o || (0, h.hM)(o))
            return;
        let c = null === (t = (0, h.j7)(o)) || void 0 === t ? void 0 : t.getCurrentConfig({ location: '1' }, { autoTrackExposure: !1 });
        if (null == c || !c.dropsEnabled)
            return;
        let d = c.autoEnrollment;
        null != g[o.dropsQuestId] && g[o.dropsQuestId].isEnrolled || d ? M(o, r, l) : u.Z.wait(async () => {
            var e;
            await (0, T.BE)(o.dropsQuestId), (null === (e = g[o.dropsQuestId]) || void 0 === e ? void 0 : e.isEnrolled) && M(o, r, l);
        });
    },
    LOGOUT: function () {
        C = {}, g = {}, p = {}, A.stop();
    }
});
