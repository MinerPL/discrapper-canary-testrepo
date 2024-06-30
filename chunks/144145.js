n.d(t, {
    Z: function () {
        return L;
    }
}), n(653041), n(47120);
var i = n(735250), s = n(470079), a = n(442837), r = n(481060), l = n(278323), o = n(287734), c = n(230711), d = n(726542), u = n(620662), _ = n(841784), E = n(802856), h = n(594190), I = n(592745), m = n(553795), p = n(757266), g = n(283595), T = n(417363), S = n(626135), C = n(804739), N = n(346329), f = n(981631), A = n(689938);
let Z = d.Z.get(f.ABu.XBOX).name;
function L(e) {
    let {currentActivities: t} = e, n = t.length > 1, L = function (e) {
            let {currentActivities: t} = e, n = (0, a.e7)([m.Z], () => m.Z.getAccounts().some(e => e.type === d.Z.get(f.ABu.XBOX).type)), s = t.some(e => {
                    let {activity: t} = e;
                    return (0, E.Z)(t);
                });
            return n || !s ? null : (0, i.jsx)(r.MenuItem, {
                id: 'xbox-connect',
                action: () => c.Z.open(f.oAB.CONNECTIONS),
                label: A.Z.Messages.USER_ACTIVITY_CONNECT_PLATFORM.format({ platform: Z })
            });
        }(e), v = function (e) {
            let {currentActivities: t} = e, n = s.useContext(S.AnalyticsContext);
            return (0, a.Wu)([
                h.ZP,
                g.Z,
                I.Z,
                T.Z,
                p.Z
            ], () => t.filter(e => !(0, _.Z)(e.activity)).map(e => {
                let {
                        activity: t,
                        game: i
                    } = e, s = g.Z.getActiveLibraryApplication(i.id);
                return {
                    ...e,
                    libraryApplication: s,
                    canJoin: null != t && (0, u.Z)(t, f.xjy.JOIN) && t.type === f.IIU.PLAYING,
                    canPlay: (0, C.t)({
                        LibraryApplicationStore: g.Z,
                        LaunchableGameStore: I.Z,
                        DispatchApplicationStore: T.Z,
                        ConnectedAppsStore: p.Z,
                        applicationId: i.id,
                        branchId: null != s ? s.branchId : null
                    }),
                    isLaunching: I.Z.launchingGames.has(i.id),
                    isRunning: h.ZP.getRunningVerifiedApplicationIds().includes(i.id),
                    location: n.location
                };
            }), [
                n.location,
                t
            ]);
        }(e), O = [];
    for (let e of v) {
        let {activity: t} = e;
        null != t && null != t.type && O.push(function (e, t) {
            let {
                canJoin: n,
                activity: s,
                activityUser: a
            } = e;
            if (!n || null == s)
                return null;
            async function c() {
                if (null == s)
                    return;
                let e = await l.Z.sendActivityInviteUser({
                    type: f.mFx.JOIN_REQUEST,
                    userId: a.id,
                    activity: s,
                    location: f.Sbl.PROFILE_POPOUT
                });
                null != e && o.default.selectPrivateChannel(e.id);
            }
            return (0, i.jsx)(r.MenuItem, {
                id: 'join-'.concat(s.session_id),
                label: t ? A.Z.Messages.USER_ACTIVITY_ACTION_ASK_TO_JOIN_USER.format({ name: a.toString() }) : A.Z.Messages.USER_ACTIVITY_ACTION_ASK_TO_JOIN,
                action: c
            });
        }(e, n), function (e, t) {
            let {
                activity: n,
                game: s,
                libraryApplication: a,
                location: l,
                canPlay: o,
                isRunning: c,
                isLaunching: d
            } = e;
            if (!o || null == n)
                return null;
            let u = c ? A.Z.Messages.ACTIVITY_FEED_POPOUT_APPLICATION_RUNNING.format({ name: s.name }) : d ? A.Z.Messages.ACTIVITY_FEED_POPOUT_APPLICATION_LAUNCHING.format({ name: s.name }) : void 0;
            return (0, i.jsx)(r.MenuItem, {
                id: 'play-'.concat(n.session_id),
                action: function () {
                    (0, N.playApplication)(s.id, a, {
                        analyticsParams: {
                            location: {
                                ...l,
                                object: f.qAy.LIST_ITEM
                            }
                        }
                    });
                },
                label: t ? A.Z.Messages.APPLICATION_CONTEXT_MENU_LAUNCH_APPLICATION_NAME.format({ name: s.name }) : A.Z.Messages.APPLICATION_CONTEXT_MENU_LAUNCH,
                subtext: u
            });
        }(e, n));
    }
    return [
        L,
        ...O
    ];
}
