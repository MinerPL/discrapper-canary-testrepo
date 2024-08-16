n.d(t, {
    E: function () {
        return v;
    },
    Z: function () {
        return O;
    }
});
var r = n(735250),
    i = n(470079),
    a = n(442837),
    s = n(481060),
    o = n(846027),
    l = n(872810),
    u = n(410575),
    c = n(358221),
    d = n(418469),
    _ = n(776031),
    E = n(803647),
    f = n(361291),
    h = n(199902),
    p = n(131951),
    m = n(594174),
    I = n(5192),
    T = n(358085),
    g = n(521147),
    S = n(981631),
    A = n(65154),
    N = n(689938);
function v(e, t, n) {
    let r = (0, a.e7)([c.Z], () => c.Z.getSelectedParticipantId(e.id)),
        i = (0, a.e7)([h.Z], () => (null != r ? h.Z.getActiveStreamForStreamKey(r) : null), [r]);
    return (0, a.Wu)(
        [m.default],
        () => {
            let r = n
                .filter((e) => e.ownerId !== (null == t ? void 0 : t.id))
                .map((t) => ({
                    stream: t,
                    username: I.ZP.getName(e.getGuildId(), e.id, m.default.getUser(t.ownerId))
                }));
            return 1 === r.length && r[0].stream.ownerId === (null == i ? void 0 : i.ownerId) ? [] : r;
        },
        [e, i, n, t]
    );
}
function O(e) {
    var t, n, c;
    let { channel: h, currentUser: m, activeStreams: I, hideSelfOptions: O = !1, showReportOption: R = !1, handleGoLive: C, onClose: y, onSelect: D, appContext: L = S.IlC.APP } = e,
        b = (0, a.e7)([p.Z], () => p.Z.getGoLiveSource()),
        M = (0, a.e7)([f.Z], () => f.Z.getState().soundshareEnabled),
        P = p.Z.supports(A.AN.DESKTOP_CAPTURE_APPLICATIONS),
        U = null !== (c = I.find((e) => e.ownerId === (null == m ? void 0 : m.id))) && void 0 !== c ? c : null,
        w = v(h, m, I),
        x = (0, _.Z)(U, L),
        G = (0, d.Z)(U, L, S.VqG),
        k = (0, a.e7)([p.Z], () => p.Z.supports(A.AN.SOUNDSHARE)),
        B = (0, a.e7)([p.Z], () => p.Z.supportsScreenSoundshare()),
        F = (null == b ? void 0 : b.desktopSource) != null,
        V = null == b ? void 0 : null === (n = b.desktopSource) || void 0 === n ? void 0 : null === (t = n.id) || void 0 === t ? void 0 : t.startsWith('screen'),
        H = g.Z.useExperiment(
            { location: 'ManageStreamsMenu' },
            {
                disable: !(F && k && (!V || B)),
                autoTrackExposure: !0
            }
        ).enabled,
        Z = i.useCallback(() => {
            var e, t, n;
            (null === (n = p.Z.getGoLiveSource()) || void 0 === n ? void 0 : null === (t = n.desktopSource) || void 0 === t ? void 0 : null === (e = t.id) || void 0 === e ? void 0 : e.startsWith('prepicked:'))
                ? p.Z.getMediaEngine().eachConnection((e) => {
                      e.context === A.Yn.STREAM && e.presentDesktopSourcePicker();
                  })
                : C();
        }, [C]),
        Y = i.useCallback(() => {
            let { preset: e, resolution: t, fps: n } = f.Z.getState(),
                r = {
                    qualityOptions: {
                        preset: e,
                        resolution: t,
                        frameRate: n
                    },
                    context: A.Yn.STREAM
                };
            if ((null == b ? void 0 : b.desktopSource) != null) {
                var i;
                r.desktopSettings = {
                    sourceId: null == b ? void 0 : null === (i = b.desktopSource) || void 0 === i ? void 0 : i.id,
                    sound: !M
                };
            }
            (0, l.Rc)({
                preset: e,
                resolution: t,
                frameRate: n,
                soundshareEnabled: !M
            }),
                o.Z.setGoLiveSource(r);
        }, [b, M]),
        j =
            null == U
                ? (0, r.jsx)(s.MenuItem, {
                      id: 'share-your-screen',
                      label: N.Z.Messages.SHARE_YOUR_SCREEN,
                      icon: s.ScreenArrowIcon,
                      action: C
                  })
                : (0, r.jsxs)(r.Fragment, {
                      children: [
                          T.isPlatformEmbedded
                              ? (0, r.jsx)(s.MenuItem, {
                                    id: 'stream-settings',
                                    label: N.Z.Messages.SCREENSHARE_STREAM_QUALITY,
                                    children: x
                                })
                              : null,
                          R ? G : null,
                          H
                              ? (0, r.jsx)(s.MenuCheckboxItem, {
                                    id: 'stream-settings-audio-enable',
                                    label: N.Z.Messages.SCREENSHARE_INCLUDE_AUDIO,
                                    checked: M,
                                    action: Y
                                })
                              : null,
                          P
                              ? (0, r.jsx)(s.MenuItem, {
                                    id: 'change-windows',
                                    label: N.Z.Messages.SCREENSHARE_CHANGE_WINDOWS,
                                    icon: s.ScreenArrowIcon,
                                    action: Z
                                })
                              : null,
                          (0, r.jsx)(s.MenuItem, {
                              id: 'stop-streaming',
                              label: N.Z.Messages.STOP_STREAMING,
                              icon: s.ScreenXIcon,
                              action: () => (0, E.Z)(U)
                          })
                      ]
                  });
    return (0, r.jsx)(u.Z, {
        section: S.jXE.CONTEXT_MENU,
        children: (0, r.jsxs)(s.Menu, {
            onSelect: D,
            navId: 'manage-streams',
            onClose: y,
            'aria-label': null != U ? N.Z.Messages.STOP_STREAMING : N.Z.Messages.SHARE_YOUR_SCREEN,
            children: [
                (0, r.jsx)(s.MenuGroup, {
                    children: w.map((e) => {
                        let { stream: t, username: n } = e;
                        return (0, r.jsx)(
                            s.MenuItem,
                            {
                                id: t.ownerId,
                                label: N.Z.Messages.STOP_WATCHING_USER.format({ username: n }),
                                icon: s.ScreenXIcon,
                                action: () => (0, E.Z)(t)
                            },
                            'manage-stream-menu'.concat(t.ownerId)
                        );
                    })
                }),
                O ? null : j
            ]
        })
    });
}
