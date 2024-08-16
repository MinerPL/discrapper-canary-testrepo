n.d(t, {
    J: function () {
        return p;
    }
}),
    n(47120),
    n(913527);
var i,
    a,
    s,
    r = n(149765),
    l = n(442837);
n(433517);
var o = n(570140),
    c = n(491428),
    u = n(650774),
    d = n(430824),
    _ = n(496675),
    E = n(914010),
    I = n(594174),
    m = n(981631);
function T(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
let h = {
        hiddenSurveys: {},
        surveyOverride: null,
        lastFetched: null,
        lastSeen: null
    },
    N = h,
    f = {},
    C = null,
    p = 86400000;
((s = i || (i = {})).IS_OWNER = 'is_owner'), (s.IS_ADMIN = 'is_admin'), (s.IS_COMMUNITY = 'is_community'), (s.GUILD_SIZE = 'guild_size'), (s.IS_HUB = 'is_hub'), (s.IS_VIEWING = 'is_viewing'), (s.GUILD_PERMISSIONS = 'guild_permissions'), (s.GUILD_SIZE_ALL = 'guild_size_all');
let g = new Set(Object.values(i));
function S(e) {
    return (
        (function (e) {
            return !0;
        })(e) &&
        (function (e) {
            let { guild_requirements: t = [], guild_size: n = [null, null], guild_permissions: i = [] } = e;
            if (0 === t.length) return !0;
            for (let e of t) if (!g.has(e)) return !1;
            let a = t.includes('guild_size_all'),
                s = !0;
            for (let l of Object.values(d.Z.getGuilds())) {
                if (a || t.includes('guild_size')) {
                    let e = u.Z.getMemberCount(l.id);
                    if (null == e || (null != n[0] && e < n[0]) || (null != n[1] && e > n[1])) {
                        s = !1;
                        continue;
                    }
                }
                if ((t.includes('is_community') && !l.hasFeature(m.oNc.COMMUNITY)) || (t.includes('is_hub') && !l.hasFeature(m.oNc.HUB))) continue;
                if (t.includes('guild_permissions')) {
                    if (0 === i.length) continue;
                    let e = !1;
                    for (let t of i)
                        try {
                            let n = r.vB(t);
                            if (_.Z.can(n, l)) {
                                e = !0;
                                break;
                            }
                        } catch (e) {}
                    if (!e) continue;
                }
                let o = I.default.getCurrentUser(),
                    c = (null == o ? void 0 : o.id) === l.ownerId,
                    d = _.Z.can(m.Plq.ADMINISTRATOR, l);
                if ((t.includes('is_owner') && !c) || (t.includes('is_admin') && !d)) continue;
                null == (f = null != f ? f : {})[e.key] && (f[e.key] = e);
                let T = E.Z.getGuildId(),
                    h = null != T && T === l.id;
                if (!t.includes('is_viewing') || !!h) {
                    if (!a) return !0;
                }
            }
            return (!!a && !!s) || !1;
        })(e)
    );
}
function A(e) {
    let { survey: t } = e;
    if (((N.lastFetched = Date.now()), null == N.hiddenSurveys && (N.hiddenSurveys = {}), null != t && null == N.hiddenSurveys[t.key])) {
        if (!S(t)) return;
        C = t;
    }
}
function R() {
    if (null != C && (S(C) || ((C = null), 0))) return !1;
    !(function () {
        let e = Object.values((f = null != f ? f : {}))[0];
        if (null != e && S(e)) {
            A({
                type: 'SURVEY_FETCHED',
                survey: e
            });
            return;
        }
        if (null == C) return;
        C = null;
    })();
}
class x extends (a = l.ZP.PersistedStore) {
    initialize(e) {
        (N = null != e ? e : h), this.syncWith([E.Z], R);
    }
    getState() {
        return N;
    }
    getCurrentSurvey() {
        return C;
    }
    getSurveyOverride() {
        return N.surveyOverride;
    }
    getLastSeenTimestamp() {
        return N.lastSeen;
    }
}
T(x, 'displayName', 'SurveyStore'),
    T(x, 'persistKey', 'SurveyStore'),
    T(x, 'migrations', [
        (e) => {
            let t = { ...e };
            return delete t.validSurveys, delete t.currentSurvey, delete t.iosIsPushNotificationClicked, delete t.iosIsInviteShown, delete t.iosFirstRunDate, t;
        },
        (e) => {
            var t;
            return {
                ...e,
                lastSeen: null !== (t = e.lastSeen) && void 0 !== t ? t : null
            };
        },
        (e) => {
            var t;
            return {
                ...e,
                hiddenSurveys: null !== (t = e.hiddenSurveys) && void 0 !== t ? t : {}
            };
        }
    ]),
    (t.Z = new x(o.Z, {
        CONNECTION_OPEN: function () {
            var e;
            if (!(null != N.lastFetched && Date.now() - (null !== (e = N.lastFetched) && void 0 !== e ? e : 0) < p) || null != N.surveyOverride) (0, c.wk)(N.surveyOverride, !0);
        },
        SURVEY_FETCHED: A,
        SURVEY_HIDE: function (e) {
            let { key: t } = e;
            (N.hiddenSurveys[t] = !0), (C = null), (f = null != f ? f : {}), delete f[t];
        },
        SURVEY_OVERRIDE: function (e) {
            let { id: t } = e;
            (N.surveyOverride = t), null != t && delete N.hiddenSurveys[t], (0, c.wk)(N.surveyOverride, !0);
        },
        PUSH_NOTIFICATION_CLICK: function () {},
        DISPLAYED_INVITE_SHOW: function () {},
        LOGOUT: function () {
            N.hiddenSurveys = {};
        },
        SURVEY_SEEN: function () {
            N.lastSeen = Date.now();
        }
    }));
