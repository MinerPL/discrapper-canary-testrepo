n.d(t, {
    k: function () {
        return x;
    }
}), n(47120);
var i = n(735250), a = n(470079), s = n(349445), l = n(442837), r = n(524437), o = n(481060), c = n(100527), d = n(906732), u = n(602478), _ = n(121254), E = n(742989), m = n(675478), I = n(581883), T = n(585483), h = n(153209), N = n(349643), f = n(881591), p = n(903672), C = n(946443), g = n(264233), S = n(981631), A = n(689938);
function x(e) {
    let {
            onOpen: t,
            onClose: n,
            children: x,
            badgeState: O,
            popoutPosition: R,
            popoutAlign: M
        } = e, {analyticsLocations: v} = (0, d.ZP)(c.Z.NOTIFICATION_CENTER), [L, Z] = a.useState(!1), [P, b] = function () {
            let e = (0, l.e7)([I.Z], () => {
                var e, t;
                return null !== (t = null === (e = I.Z.settings.inbox) || void 0 === e ? void 0 : e.currentTab) && void 0 !== t ? t : r.X.UNREADS;
            });
            return [
                e,
                a.useCallback(e => {
                    m.hW.updateAsync('inbox', t => {
                        if (t.currentTab === e)
                            return !1;
                        t.currentTab = e;
                    }, m.fy.FREQUENT_USER_ACTION);
                }, [])
            ];
        }(), {
            showTutorial: D,
            setSeenTutorial: j
        } = function (e) {
            let t = (0, l.e7)([I.Z], () => {
                    var e, t;
                    return null !== (t = null === (e = I.Z.settings.inbox) || void 0 === e ? void 0 : e.viewedTutorial) && void 0 !== t && t;
                }), n = a.useCallback(() => {
                    m.hW.updateAsync('inbox', e => {
                        e.viewedTutorial = !0;
                    }, m.fy.INFREQUENT_USER_ACTION);
                }, []);
            return {
                showTutorial: !t && e === r.X.UNREADS,
                setSeenTutorial: n
            };
        }(P), U = a.useCallback(() => {
            Z(!1), L && (null == n || n());
        }, [
            n,
            L
        ]), y = a.useCallback(() => {
            Z(!L), L ? null == n || n() : null == t || t();
        }, [
            n,
            t,
            L
        ]), B = a.useCallback(() => {
            y(), b(r.X.UNREADS);
        }, [
            b,
            y
        ]);
    a.useEffect(() => (T.S.subscribe(S.CkL.TOGGLE_INBOX_UNREADS_TAB, B), () => void T.S.unsubscribe(S.CkL.TOGGLE_INBOX_UNREADS_TAB, B)), [B]);
    let {showReminders: k} = E.Z.useExperiment({ location: 'RecentsPopout' }, { autoTrackExposure: !1 }), {enabled: G} = _.Z.useExperiment({ location: 'RecentsPopout' }, { autoTrackExposure: !1 }), {enabled: F} = u.Z.useExperiment({ location: 'RecentsPopout' });
    a.useEffect(() => {
        (!k && P === r.X.TODOS || !G && P === r.X.BOOKMARKS) && b(r.X.MENTIONS);
    });
    let w = a.useCallback(e => {
        !e.shiftKey && U();
    }, [U]);
    return (0, i.jsx)(d.Gt, {
        value: v,
        children: (0, i.jsx)(o.Popout, {
            animation: o.Popout.Animation.NONE,
            position: R,
            align: M,
            autoInvert: !1,
            shouldShow: L,
            onRequestClose: U,
            renderPopout: function () {
                return (0, i.jsx)(o.Dialog, {
                    'aria-label': A.Z.Messages.INBOX,
                    children: P === r.X.FOR_YOU ? (0, i.jsx)(h.Z, {
                        setTab: b,
                        badgeState: O,
                        closePopout: U
                    }) : P === r.X.MENTIONS ? (0, i.jsx)(p.Z, {
                        setTab: b,
                        onJump: w,
                        badgeState: O,
                        closePopout: U
                    }) : F && P === r.X.GAME_INVITES ? (0, i.jsx)(g.Z, {
                        setTab: b,
                        badgeState: O,
                        closePopout: U
                    }) : G && P === r.X.BOOKMARKS ? (0, i.jsx)(N.Z, {
                        setTab: b,
                        onJump: w,
                        closePopout: U
                    }) : k && P === r.X.TODOS ? (0, i.jsx)(f.Z, {
                        setTab: b,
                        onJump: w,
                        closePopout: U
                    }) : (0, i.jsx)(s.SV, {
                        fallback: (0, i.jsx)(C.h, {
                            setTab: b,
                            closePopout: U,
                            badgeState: O
                        }),
                        children: (0, i.jsx)(C.Z, {
                            setTab: b,
                            onJump: w,
                            showTutorial: D,
                            setSeenTutorial: j,
                            closePopout: U,
                            badgeState: O
                        })
                    })
                });
            },
            ignoreModalClicks: !0,
            children: (e, t) => {
                let {isShown: n} = t;
                return x(y, n, e);
            }
        })
    });
}
