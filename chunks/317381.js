let r;
n.d(t, {
    i6: function () {
        return A;
    }
}),
    n(47120),
    n(653041),
    n(51350);
var i,
    a = n(442837),
    s = n(570140),
    o = n(911969),
    l = n(314897),
    u = n(592125),
    c = n(944486),
    d = n(594174),
    _ = n(585483),
    E = n(358085),
    f = n(155268),
    h = n(613611),
    p = n(761122),
    I = n(917107),
    m = n(918559),
    T = n(981631);
function S(e, t, n) {
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
let g = {
        everLaunchedActivities: new Set(),
        seenNewActivities: {},
        seenUpdatedActivities: {},
        shouldShowNewActivityIndicator: !1
    },
    A = [],
    N = [],
    O = new Map(),
    R = new Map(),
    v = new Map(),
    C = new Map(),
    L = new Map(),
    y = new Map(),
    D = new Map(),
    b = new Map(),
    M = new Map(),
    P = new Map(),
    U = new Map();
let w = m.Ez.DISCONNECTED,
    x = m.MI.RESIZABLE;
function G(e) {
    return null != e ? e : '0';
}
function k(e) {
    var t, n, i, a;
    let { guildId: s, channelId: o, location: E, applicationId: p, launchId: S, compositeInstanceId: g, participants: N } = e,
        C = (0, f.Z)(p);
    if (null == C) return;
    let L = null !== (n = v.get(o)) && void 0 !== n ? n : A,
        y = 0 === L.length,
        D = L.find((e) => e.applicationId === p),
        b = N.map((e) => e.userId),
        M = l.default.getId(),
        P = b.some((e) => e === M),
        x = null === (t = N.find((e) => e.userId === M)) || void 0 === t ? void 0 : t.sessionId,
        k = N.some((e) => (0, h.J)(e)),
        B = O.get(p),
        F = {
            applicationId: p,
            channelId: o,
            guildId: s,
            location: E,
            launchId: S,
            compositeInstanceId: g,
            url: C,
            userIds: new Set(b),
            participants: N
        };
    P &&
        null != B &&
        O.set(B.applicationId, {
            ...B,
            ...F
        });
    null != B && o === B.channelId && p === (null == B ? void 0 : B.applicationId) && ((!P && Array.from(B.userIds).some((e) => e === M)) || !k)
        ? (O.delete(p), _.S.dispatch(T.CkL.RELEASE_ACTIVITY_WEB_VIEW))
        : P &&
          (null == B || B.applicationId !== p || B.channelId !== o) &&
          x === l.default.getSessionId() &&
          (function (e) {
              var t, n;
              let { channelId: i, applicationId: a, launchId: s, compositeInstanceId: o, location: E, participants: h, isFirstActivityInChannel: p, isStart: S } = e,
                  g = (0, f.Z)(a),
                  A = l.default.getSessionId();
              if (null == g || null == A || (null === (t = O.get(a)) || void 0 === t ? void 0 : t.channelId) === i) return !1;
              let N = u.Z.getChannel(i),
                  R = null == N ? void 0 : N.getGuildId(),
                  v = d.default.getCurrentUser();
              if ((null == R && !(null !== (n = null == N ? void 0 : N.isPrivate()) && void 0 !== n && n)) || null == v) return !1;
              r = i;
              let C = {
                  guildId: R,
                  channelId: i,
                  applicationId: a,
                  url: g,
                  userIds: new Set(h.map((e) => e.userId)),
                  participants: h,
                  connectedSince: Date.now(),
                  launchId: s,
                  compositeInstanceId: o,
                  location: E
              };
              O.set(a, C),
                  _.S.dispatch(T.CkL.OPEN_EMBEDDED_ACTIVITY, {
                      channelId: i,
                      applicationId: a,
                      isFirstActivityInChannel: p,
                      isStart: S,
                      participants: h,
                      embeddedActivity: C
                  }),
                  (w = r !== c.Z.getChannelId() || (0, I.Z)(i) ? m.Ez.PIP : m.Ez.PANEL),
                  U.set(H(i, a), Date.now());
          })({
              channelId: o,
              applicationId: p,
              launchId: S,
              compositeInstanceId: g,
              location: E,
              participants: N,
              isFirstActivityInChannel: y,
              isStart: null == D
          });
    let V = (null !== (i = v.get(o)) && void 0 !== i ? i : []).filter((e) => e.applicationId !== p),
        Z = G(s),
        Y = (null !== (a = R.get(Z)) && void 0 !== a ? a : []).filter((e) => !(e.applicationId === p && e.channelId === o));
    b.length > 0 && (V.push(F), Y.push(F)), v.set(o, V), R.set(Z, Y);
}
function B(e) {
    let t = e.activity_instances;
    null == t ||
        t.forEach((t) => {
            let { location: n, application_id: r, launch_id: i, composite_instance_id: a, participants: s } = t;
            k({
                guildId: e.id,
                channelId: n.channel_id,
                location: n,
                applicationId: r,
                launchId: i,
                compositeInstanceId: a,
                participants: s.map((e) => ({
                    userId: e.user_id,
                    sessionId: e.session_id,
                    nonce: e.nonce
                }))
            });
        });
}
function F(e, t) {
    return ''.concat(e, ':').concat(t);
}
function V(e) {
    let { applicationId: t, channelId: n } = e;
    C.delete(F(n, t));
}
function H(e, t) {
    return ''.concat(e, ':').concat(t);
}
class Z extends (i = a.ZP.PersistedStore) {
    initialize(e) {
        var t;
        let n = new Set(null !== (t = null == e ? void 0 : e.everLaunchedActivities) && void 0 !== t ? t : []);
        null != e &&
            (g = {
                ...e,
                everLaunchedActivities: n
            });
    }
    getState() {
        return g;
    }
    getSelfEmbeddedActivityForChannel(e) {
        var t;
        return null !==
            (t = Array.from(O.values()).find((t) => {
                let { channelId: n } = t;
                return e === n;
            })) && void 0 !== t
            ? t
            : null;
    }
    getSelfEmbeddedActivities() {
        return O;
    }
    getEmbeddedActivitiesForGuild(e) {
        var t;
        return null !== (t = R.get(e)) && void 0 !== t ? t : A;
    }
    getEmbeddedActivitiesForChannel(e) {
        var t;
        return null !== (t = v.get(e)) && void 0 !== t ? t : A;
    }
    getEmbeddedActivitiesByChannel() {
        return v;
    }
    getEmbeddedActivityDurationMs(e, t) {
        let n = U.get(H(e, t));
        return null == n ? null : Date.now() - n;
    }
    isLaunchingActivity() {
        return C.size > 0;
    }
    getShelfActivities(e) {
        var t;
        let n = G(e);
        return null !== (t = L.get(n)) && void 0 !== t ? t : N;
    }
    getShelfFetchStatus(e) {
        let t = G(e);
        return y.get(t);
    }
    shouldFetchShelf(e) {
        var t, n;
        let r = G(e),
            i = null !== (t = y.get(r)) && void 0 !== t ? t : { isFetching: !1 },
            a = Date.now() - (null !== (n = null == i ? void 0 : i.lastFetchTimestampMs) && void 0 !== n ? n : 0) > 21600000;
        return !(null == i ? void 0 : i.isFetching) && a;
    }
    getOrientationLockStateForApp(e) {
        var t;
        return null !== (t = D.get(e)) && void 0 !== t ? t : null;
    }
    getPipOrientationLockStateForApp(e) {
        var t;
        return null !== (t = b.get(e)) && void 0 !== t ? t : this.getOrientationLockStateForApp(e);
    }
    getGridOrientationLockStateForApp(e) {
        var t, n;
        return null !== (n = null !== (t = M.get(e)) && void 0 !== t ? t : b.get(e)) && void 0 !== n ? n : this.getOrientationLockStateForApp(e);
    }
    getLayoutModeForApp(e) {
        return P.get(e);
    }
    getConnectedActivityChannelId() {
        return r;
    }
    getActivityPanelMode() {
        return w;
    }
    getFocusedLayout() {
        return x;
    }
    getCurrentEmbeddedActivity() {
        var e;
        let t = this.getConnectedActivityChannelId();
        if (null != t) return null !== (e = this.getSelfEmbeddedActivityForChannel(t)) && void 0 !== e ? e : void 0;
    }
    getEmbeddedActivityForUserId(e, t) {
        let n;
        if (void 0 !== t) {
            s: for (let [r, i] of v)
                for (let r of i)
                    if (r.applicationId === t && r.userIds.has(e)) {
                        n = r;
                        break s;
                    }
            return n;
        }
    }
    hasActivityEverBeenLaunched(e) {
        return g.everLaunchedActivities.has(e);
    }
    getLaunchState(e, t) {
        if (null != e && null != t) return C.get(F(t, e));
    }
    getLaunchStates() {
        return C;
    }
}
S(Z, 'displayName', 'EmbeddedActivitiesStore'),
    S(Z, 'persistKey', 'EmbeddedActivities'),
    S(Z, 'migrations', [
        (e) => ({
            ...e,
            seenFeaturedActivities: [],
            shouldShowNewActivityIndicator: !1
        }),
        (e) => (delete e.seenFeaturedActivities, { ...e }),
        (e) => (delete e.seenActivities, { ...e }),
        (e) => (delete e.currentFreeActivity, delete e.lastFreeActivityRotationTimestampMs, delete e.freePeriodActivities, delete e.shouldShowFreeActivityIndicator, { ...e }),
        (e) => ({
            ...e,
            seenNewActivities: {},
            seenUpdatedActivities: {}
        }),
        (e) => {
            var t;
            let n = new Set(null !== (t = e.everLaunchedActivities) && void 0 !== t ? t : []);
            return {
                ...e,
                everLaunchedActivities: n
            };
        },
        (e) => (delete e.usersHavePlayedByApp, { ...e })
    ]);
let Y = new Z(s.Z, {
    ACTIVITY_LAYOUT_MODE_UPDATE: function (e) {
        let { applicationId: t, layoutMode: n } = e;
        P.set(t, n);
    },
    CONNECTION_OPEN_SUPPLEMENTAL: function (e) {
        let { guilds: t } = e;
        v.clear(), R.clear(), t.forEach((e) => B(e));
    },
    GUILD_CREATE: function (e) {
        let { guild: t } = e;
        B(t);
    },
    CHANNEL_DELETE: function (e) {
        let { channel: t } = e;
        v.set(t.id, []);
        let n = t.guild_id;
        if (null != n) {
            var r;
            let e = G(n),
                i = (null !== (r = R.get(e)) && void 0 !== r ? r : []).filter((e) => e.channelId !== t.id);
            R.set(e, i);
        }
    },
    EMBEDDED_ACTIVITY_LAUNCH_START: function (e) {
        let { applicationId: t, channelId: n, componentId: r } = e;
        C.set(F(n, t), {
            isLaunching: !0,
            componentId: r
        });
    },
    EMBEDDED_ACTIVITY_LAUNCH_SUCCESS: function (e) {
        let { applicationId: t, channelId: n } = e;
        g.everLaunchedActivities.add(t),
            V({
                applicationId: t,
                channelId: n
            });
    },
    EMBEDDED_ACTIVITY_LAUNCH_FAIL: function (e) {
        let { applicationId: t, channelId: n } = e;
        V({
            applicationId: t,
            channelId: n
        });
    },
    EMBEDDED_ACTIVITY_CLOSE: function (e) {
        let { applicationId: t } = e,
            n = O.get(t);
        O.delete(t), (null == n ? void 0 : n.channelId) === r && (r = void 0);
    },
    EMBEDDED_ACTIVITY_UPDATE_V2: function (e) {
        let { applicationId: t, launchId: n, compositeInstanceId: r, location: i, participants: a } = e;
        null != u.Z.getChannel(i.channel_id) &&
            k({
                guildId: i.guild_id,
                channelId: i.channel_id,
                location: i,
                applicationId: t,
                launchId: n,
                compositeInstanceId: r,
                participants: a.map((e) => ({
                    userId: e.user_id,
                    sessionId: e.session_id,
                    nonce: e.nonce
                }))
            });
    },
    LOCAL_ACTIVITY_UPDATE: function (e) {
        var t;
        let { activity: n } = e;
        if (null == n) return !1;
        let r = O.get(null !== (t = n.application_id) && void 0 !== t ? t : '');
        if (null == r) return !1;
        O.set(r.applicationId, { ...r });
    },
    EMBEDDED_ACTIVITY_SET_CONFIG: function (e) {
        let { applicationId: t, config: n } = e,
            r = O.get(t);
        null != r &&
            O.set(r.applicationId, {
                ...r,
                config: n
            });
    },
    EMBEDDED_ACTIVITY_FETCH_SHELF: function (e) {
        let { guildId: t } = e,
            n = G(t),
            r = y.get(n);
        y.set(n, {
            isFetching: !0,
            lastFetchTimestampMs: null == r ? void 0 : r.lastFetchTimestampMs
        });
    },
    EMBEDDED_ACTIVITY_FETCH_SHELF_SUCCESS: function (e) {
        let { guildId: t, activities: n } = e,
            r = G(t);
        L.set(r, n);
        let i = Date.now();
        !(function (e) {
            let { activities: t, now: n } = e;
            t.forEach((e) => {
                let t = e.application_id,
                    r = e.client_platform_config[(0, p.Z)((0, E.getOS)())];
                if (null == r.label_until) return;
                let i = new Date(r.label_until).getTime();
                if (i < n) return;
                let a = g.seenNewActivities[t],
                    s = Object.hasOwn(g.seenNewActivities, t),
                    l = new Date(a).getTime() < i;
                r.label_type === o.ww.NEW && (!s || l) && ((g.shouldShowNewActivityIndicator = !0), (g.seenNewActivities[t] = r.label_until));
                let u = g.seenUpdatedActivities[t],
                    c = Object.hasOwn(g.seenUpdatedActivities, t),
                    d = new Date(u).getTime() < i;
                r.label_type === o.ww.UPDATED && (!c || d) && ((g.shouldShowNewActivityIndicator = !0), (g.seenUpdatedActivities[t] = r.label_until));
            });
        })({
            activities: n,
            now: i
        }),
            y.set(r, {
                isFetching: !1,
                lastFetchTimestampMs: i
            });
    },
    EMBEDDED_ACTIVITY_FETCH_SHELF_FAIL: function (e) {
        let { guildId: t } = e,
            n = G(t),
            r = y.get(n);
        y.set(n, {
            isFetching: !1,
            lastFetchTimestampMs: null == r ? void 0 : r.lastFetchTimestampMs
        });
    },
    EMBEDDED_ACTIVITY_DISMISS_NEW_INDICATOR: () => {
        g.shouldShowNewActivityIndicator = !1;
    },
    EMBEDDED_ACTIVITY_SET_ORIENTATION_LOCK_STATE: function (e) {
        let { applicationId: t, lockState: n, pictureInPictureLockState: r, gridLockState: i } = e;
        null == n ? D.delete(t) : D.set(t, n), null === r ? b.delete(t) : void 0 !== r && b.set(t, r), null === i ? M.delete(t) : void 0 !== i && M.set(t, i);
    },
    EMBEDDED_ACTIVITY_SET_PANEL_MODE: function (e) {
        let { activityPanelMode: t } = e;
        w = t;
    },
    EMBEDDED_ACTIVITY_SET_FOCUSED_LAYOUT: function (e) {
        let { focusedActivityLayout: t } = e;
        x = t;
    },
    CHANNEL_SELECT: function (e) {
        let { channelId: t } = e;
        r !== t && w === m.Ez.PANEL && (w = m.Ez.PIP);
    },
    CHANNEL_CALL_POPOUT_WINDOW_OPEN: function (e) {
        let { channel: t } = e;
        if (
            void 0 ===
            Array.from(O.values()).find((e) => {
                let { channelId: n } = e;
                return t.id === n;
            })
        )
            return;
    }
});
t.ZP = Y;
