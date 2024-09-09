t.r(n),
    t.d(n, {
        default: function () {
            return N;
        }
    });
var l = t(735250);
t(470079);
var a = t(442837),
    r = t(481060),
    s = t(846027),
    o = t(239091),
    i = t(287734),
    u = t(872810),
    c = t(410575),
    d = t(441061),
    M = t(431368),
    Z = t(418469),
    S = t(701098),
    I = t(435064),
    C = t(779618),
    g = t(39604),
    E = t(258609),
    h = t(111672),
    m = t(441167),
    f = t(700994),
    p = t(199902),
    A = t(314897),
    x = t(592125),
    T = t(131951),
    _ = t(594174),
    V = t(358085),
    b = t(569545),
    v = t(981631),
    R = t(65154),
    O = t(689938);
function j(e) {
    return (0, a.e7)([p.Z], () => {
        let n = p.Z.getActiveStreamForApplicationStream(e);
        return null != n && (0, b.V9)(n) === (0, b.V9)(e);
    });
}
function N(e) {
    let { stream: n, analyticsContext: t, appContext: p, exitFullscreen: N, onSelect: U } = e,
        w = (function (e) {
            let n = j(e),
                t = (0, C.Z)(T.Z),
                s = I.Z.getSettings().clipsEnabled,
                o = e.ownerId === A.default.getId(),
                { enableViewerClipping: i, ignoreSenderPreference: u } = m.Z.useExperiment({ location: 'StreamContextMenu' }, { autoTrackExposure: !1 }),
                c = (0, a.e7)([I.Z], () => I.Z.getIsAtMaxSaveClipOperations()),
                d = (0, a.e7)([I.Z], () => I.Z.isViewerClippingAllowedForUser(e.ownerId)) || u;
            return t && i && n
                ? (0, l.jsx)(r.MenuItem, {
                      id: 'clip-stream',
                      disabled: !s || !(o || d) || c,
                      label: O.Z.Messages.CLIPS_SAVE,
                      action: () => (o ? (0, g.C1)() : (0, g.C1)((0, b.V9)(e)))
                  })
                : null;
        })(n),
        G = j(n),
        L = (function (e) {
            let n = j(e),
                t = (0, f.Z)(e.ownerId, R.Yn.STREAM);
            return n ? t : null;
        })(n),
        k = (function (e) {
            let n;
            let t = (0, a.e7)([E.Z], () => null != E.Z.getRemoteSessionId()),
                s = (0, a.e7)([x.Z], () => x.Z.getChannel(e.channelId), [e.channelId]),
                o = j(e),
                c = _.default.getCurrentUser(),
                d = null != c && e.ownerId === c.id;
            return ((n = d ? O.Z.Messages.STOP_STREAMING : o ? O.Z.Messages.STOP_WATCHING : O.Z.Messages.WATCH_STREAM), t || (!d && o && (null == s ? void 0 : s.isGuildStageVoice())))
                ? null
                : (0, l.jsx)(r.MenuItem, {
                      id: 'watch',
                      label: n,
                      action: o
                          ? function () {
                                (0, u.g)((0, b.V9)(e));
                            }
                          : function () {
                                i.default.selectVoiceChannel(e.channelId), (0, u.rn)(e);
                            }
                  });
        })(n),
        P = (function (e) {
            let n = j(e),
                t = (0, a.e7)([T.Z], () => T.Z.isLocalMute(e.ownerId, R.Yn.STREAM)),
                o = _.default.getCurrentUser(),
                i = null != o && e.ownerId === o.id;
            return !n || i
                ? null
                : (0, l.jsx)(r.MenuCheckboxItem, {
                      id: 'mute',
                      label: O.Z.Messages.SOUND_MUTE,
                      action: function () {
                          s.Z.toggleLocalMute(e.ownerId, R.Yn.STREAM);
                      },
                      checked: t
                  });
        })(n),
        H = (function (e) {
            let n = j(e),
                t = e.ownerId === A.default.getId(),
                { sidechainAvailable: o } = h.Z.getCurrentConfig({ location: 'StreamContextMenu' }),
                i = (0, a.e7)([T.Z], () => T.Z.getSidechainCompression()),
                u = (0, a.e7)([T.Z], () => T.Z.getSidechainCompressionStrength());
            return t || !n || !o || (0, V.isWeb)()
                ? null
                : (0, l.jsxs)(r.MenuGroup, {
                      children: [
                          (0, l.jsx)(r.MenuCheckboxItem, {
                              id: 'sidechain-compression',
                              label: O.Z.Messages.SIDECHAIN_COMPRESSION,
                              action: () => s.Z.setSidechainCompression(!i),
                              checked: i
                          }),
                          (0, l.jsx)(r.MenuControlItem, {
                              id: 'sidechain-parameters',
                              label: O.Z.Messages.SIDECHAIN_COMPRESSION_STRENGTH,
                              control: (e, n) =>
                                  (0, l.jsx)(r.MenuSliderControl, {
                                      ...e,
                                      ref: n,
                                      value: u,
                                      maxValue: 100,
                                      onChange: (e) => s.Z.setSidechainCompressionStrength(e),
                                      'aria-label': O.Z.Messages.SIDECHAIN_COMPRESSION_STRENGTH
                                  })
                          })
                      ]
                  });
        })(n),
        D = (0, Z.Z)(n, p, N),
        Y = (0, M.Z)(n.channelId, n.ownerId),
        F = (0, d.Z)(n.channelId),
        W = (0, a.e7)([x.Z], () => x.Z.getChannel(n.channelId), [n.channelId]),
        y = (0, S.G)({
            stream: n,
            channelId: n.channelId,
            location: 'StreamContextMenu'
        });
    return (0, l.jsx)(c.Z, {
        context: t,
        object: v.qAy.CONTEXT_MENU,
        children: (0, l.jsxs)(r.Menu, {
            navId: 'stream-context',
            onClose: o.Zy,
            'aria-label': O.Z.Messages.STREAM_ACTIONS_MENU_LABEL,
            onSelect: U,
            children: [
                (0, l.jsxs)(r.MenuGroup, {
                    children: [k, w, P, y]
                }),
                (0, l.jsx)(r.MenuGroup, { children: L }),
                H,
                (0, l.jsxs)(r.MenuGroup, {
                    children: [(null == W ? void 0 : W.isGuildStageVoice()) ? null : F, Y, G && D]
                })
            ]
        })
    });
}
