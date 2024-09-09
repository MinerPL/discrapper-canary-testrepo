n.d(t, {
    k: function () {
        return R;
    }
}),
    n(47120);
var i = n(735250),
    a = n(470079),
    s = n(349445),
    r = n(442837),
    l = n(524437),
    o = n(481060),
    c = n(100527),
    u = n(906732),
    d = n(602478),
    _ = n(121254),
    E = n(742989),
    I = n(675478),
    m = n(581883),
    T = n(585483),
    h = n(153209),
    N = n(180173),
    f = n(956961),
    C = n(903672),
    p = n(946443),
    g = n(264233),
    S = n(981631),
    A = n(689938);
function R(e) {
    let { onOpen: t, onClose: n, children: R, badgeState: x, popoutPosition: O, popoutAlign: M } = e,
        { analyticsLocations: v } = (0, u.ZP)(c.Z.NOTIFICATION_CENTER),
        [L, Z] = a.useState(!1),
        [P, b] = (function () {
            let e = (0, r.e7)([m.Z], () => {
                var e, t;
                return null !== (t = null === (e = m.Z.settings.inbox) || void 0 === e ? void 0 : e.currentTab) && void 0 !== t ? t : l.X.UNREADS;
            });
            return [
                e,
                a.useCallback((e) => {
                    I.hW.updateAsync(
                        'inbox',
                        (t) => {
                            if (t.currentTab === e) return !1;
                            t.currentTab = e;
                        },
                        I.fy.FREQUENT_USER_ACTION
                    );
                }, [])
            ];
        })(),
        { showTutorial: D, setSeenTutorial: j } = (function (e) {
            let t = (0, r.e7)([m.Z], () => {
                    var e, t;
                    return null !== (t = null === (e = m.Z.settings.inbox) || void 0 === e ? void 0 : e.viewedTutorial) && void 0 !== t && t;
                }),
                n = a.useCallback(() => {
                    I.hW.updateAsync(
                        'inbox',
                        (e) => {
                            e.viewedTutorial = !0;
                        },
                        I.fy.INFREQUENT_USER_ACTION
                    );
                }, []);
            return {
                showTutorial: !t && e === l.X.UNREADS,
                setSeenTutorial: n
            };
        })(P),
        U = a.useCallback(() => {
            Z(!1), L && (null == n || n());
        }, [n, L]),
        y = a.useCallback(() => {
            Z(!L), L ? null == n || n() : null == t || t();
        }, [n, t, L]),
        B = a.useCallback(() => {
            y(), b(l.X.UNREADS);
        }, [b, y]);
    a.useEffect(() => (T.S.subscribe(S.CkL.TOGGLE_INBOX_UNREADS_TAB, B), () => void T.S.unsubscribe(S.CkL.TOGGLE_INBOX_UNREADS_TAB, B)), [B]);
    let { showReminders: k } = E.Z.useExperiment({ location: 'RecentsPopout' }, { autoTrackExposure: !1 }),
        { enabled: G } = _.Z.useExperiment({ location: 'RecentsPopout' }, { autoTrackExposure: !1 }),
        { enabled: F } = d.Z.useExperiment({ location: 'RecentsPopout' });
    a.useEffect(() => {
        ((!k && P === l.X.TODOS) || (!G && P === l.X.BOOKMARKS)) && b(l.X.MENTIONS);
    });
    let w = a.useCallback(
        (e) => {
            !e.shiftKey && U();
        },
        [U]
    );
    return (0, i.jsx)(u.Gt, {
        value: v,
        children: (0, i.jsx)(o.Popout, {
            animation: o.Popout.Animation.NONE,
            position: O,
            align: M,
            autoInvert: !1,
            shouldShow: L,
            onRequestClose: U,
            renderPopout: function () {
                return (0, i.jsx)(o.Dialog, {
                    'aria-label': A.Z.Messages.INBOX,
                    children:
                        P === l.X.FOR_YOU
                            ? (0, i.jsx)(h.Z, {
                                  setTab: b,
                                  badgeState: x,
                                  closePopout: U
                              })
                            : P === l.X.MENTIONS
                              ? (0, i.jsx)(C.Z, {
                                    setTab: b,
                                    onJump: w,
                                    badgeState: x,
                                    closePopout: U
                                })
                              : F && P === l.X.GAME_INVITES
                                ? (0, i.jsx)(g.Z, {
                                      setTab: b,
                                      badgeState: x,
                                      closePopout: U
                                  })
                                : G && P === l.X.BOOKMARKS
                                  ? (0, i.jsx)(N.Z, {
                                        setTab: b,
                                        onJump: w,
                                        closePopout: U
                                    })
                                  : k && P === l.X.TODOS
                                    ? (0, i.jsx)(f.Z, {
                                          setTab: b,
                                          onJump: w,
                                          closePopout: U
                                      })
                                    : (0, i.jsx)(s.SV, {
                                          fallback: (0, i.jsx)(p.h, {
                                              setTab: b,
                                              closePopout: U,
                                              badgeState: x
                                          }),
                                          children: (0, i.jsx)(p.Z, {
                                              setTab: b,
                                              onJump: w,
                                              showTutorial: D,
                                              setSeenTutorial: j,
                                              closePopout: U,
                                              badgeState: x
                                          })
                                      })
                });
            },
            ignoreModalClicks: !0,
            children: (e, t) => {
                let { isShown: n } = t;
                return R(y, n, e);
            }
        })
    });
}
