n.d(t, {
    k: function () {
        return x;
    }
}),
    n(47120);
var i = n(735250),
    a = n(470079),
    s = n(349445),
    l = n(442837),
    r = n(524437),
    o = n(481060),
    c = n(100527),
    d = n(906732),
    u = n(602478),
    _ = n(2818),
    E = n(768943),
    I = n(742989),
    m = n(675478),
    T = n(581883),
    N = n(585483),
    h = n(400445),
    C = n(153209),
    p = n(956961),
    f = n(903672),
    g = n(946443),
    A = n(264233),
    S = n(981631),
    M = n(689938);
function x(e) {
    let { onOpen: t, onClose: n, children: x, badgeState: O, popoutPosition: R, popoutAlign: v } = e,
        { analyticsLocations: L } = (0, d.ZP)(c.Z.NOTIFICATION_CENTER),
        [Z, P] = a.useState(!1),
        [D, b] = (function () {
            let e = (0, l.e7)([T.Z], () => {
                var e, t;
                return null !== (t = null === (e = T.Z.settings.inbox) || void 0 === e ? void 0 : e.currentTab) && void 0 !== t ? t : r.X.UNREADS;
            });
            return [
                e,
                a.useCallback((e) => {
                    m.hW.updateAsync(
                        'inbox',
                        (t) => {
                            if (t.currentTab === e) return !1;
                            t.currentTab = e;
                        },
                        m.fy.FREQUENT_USER_ACTION
                    );
                }, [])
            ];
        })(),
        { showTutorial: j, setSeenTutorial: U } = (function (e) {
            let t = (0, l.e7)([T.Z], () => {
                    var e, t;
                    return null !== (t = null === (e = T.Z.settings.inbox) || void 0 === e ? void 0 : e.viewedTutorial) && void 0 !== t && t;
                }),
                n = a.useCallback(() => {
                    m.hW.updateAsync(
                        'inbox',
                        (e) => {
                            e.viewedTutorial = !0;
                        },
                        m.fy.INFREQUENT_USER_ACTION
                    );
                }, []);
            return {
                showTutorial: !t && e === r.X.UNREADS,
                setSeenTutorial: n
            };
        })(D),
        y = a.useCallback(() => {
            P(!1), Z && (null == n || n());
        }, [n, Z]),
        B = a.useCallback(() => {
            P(!Z), Z ? null == n || n() : null == t || t();
        }, [n, t, Z]);
    a.useEffect(() => (N.S.subscribe(S.CkL.TOGGLE_INBOX, B), () => void N.S.unsubscribe(S.CkL.TOGGLE_INBOX, B)), [B]);
    let { showReminders: k } = I.Z.useExperiment({ location: 'RecentsPopout' }),
        { enabled: G, inInbox: F } = _.Z.useExperiment({ location: 'RecentsPopout' }),
        w = (0, l.e7)([E.Z], () => E.Z.hasOverdueReminder(), []) && G && F,
        { enabled: V } = u.Z.useExperiment({ location: 'RecentsPopout' });
    a.useEffect(() => {
        (((!k || (G && F)) && D === r.X.TODOS) || (D === r.X.BOOKMARKS && !(G || F))) && b(r.X.MENTIONS);
    });
    let H = a.useCallback(
        (e) => {
            !e.shiftKey && y();
        },
        [y]
    );
    return (0, i.jsx)(d.Gt, {
        value: L,
        children: (0, i.jsx)(o.Popout, {
            animation: o.Popout.Animation.NONE,
            position: R,
            align: v,
            autoInvert: !1,
            shouldShow: Z,
            onRequestClose: y,
            renderPopout: function () {
                return (0, i.jsx)(o.Dialog, {
                    'aria-label': M.Z.Messages.INBOX,
                    children:
                        D === r.X.FOR_YOU
                            ? (0, i.jsx)(C.Z, {
                                  setTab: b,
                                  badgeState: O,
                                  closePopout: y
                              })
                            : D === r.X.MENTIONS
                              ? (0, i.jsx)(f.Z, {
                                    setTab: b,
                                    onJump: H,
                                    badgeState: O,
                                    closePopout: y
                                })
                              : V && D === r.X.GAME_INVITES
                                ? (0, i.jsx)(A.Z, {
                                      setTab: b,
                                      badgeState: O,
                                      closePopout: y
                                  })
                                : k && D === r.X.TODOS
                                  ? (0, i.jsx)(p.Z, {
                                        setTab: b,
                                        onJump: H,
                                        closePopout: y
                                    })
                                  : G && F && D === r.X.BOOKMARKS
                                    ? (0, i.jsx)(h.Z, {
                                          setTab: b,
                                          badgeState: O,
                                          closePopout: y
                                      })
                                    : (0, i.jsx)(s.SV, {
                                          fallback: (0, i.jsx)(g.h, {
                                              setTab: b,
                                              closePopout: y,
                                              badgeState: O
                                          }),
                                          children: (0, i.jsx)(g.Z, {
                                              setTab: b,
                                              onJump: H,
                                              showTutorial: j,
                                              setSeenTutorial: U,
                                              closePopout: y,
                                              badgeState: O
                                          })
                                      })
                });
            },
            ignoreModalClicks: !0,
            children: (e, t) => {
                let { isShown: n } = t;
                return x(B, n, e, w);
            }
        })
    });
}
