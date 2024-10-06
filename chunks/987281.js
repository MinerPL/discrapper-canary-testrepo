t.r(n),
    t.d(n, {
        default: function () {
            return U;
        }
    });
var l = t(735250);
t(470079);
var a = t(442837),
    r = t(481060),
    s = t(846027),
    i = t(239091),
    o = t(287734),
    u = t(872810),
    c = t(410575),
    d = t(441061),
    M = t(431368),
    I = t(418469),
    Z = t(701098),
    S = t(607783),
    C = t(435064),
    g = t(779618),
    E = t(39604),
    f = t(258609),
    h = t(111672),
    m = t(441167),
    p = t(700994),
    x = t(199902),
    A = t(314897),
    _ = t(592125),
    T = t(131951),
    V = t(594174),
    b = t(358085),
    v = t(569545),
    R = t(981631),
    O = t(65154),
    j = t(689938);
function N(e) {
    return (0, a.e7)([x.Z], () => {
        let n = x.Z.getActiveStreamForApplicationStream(e);
        return null != n && (0, v.V9)(n) === (0, v.V9)(e);
    });
}
function U(e) {
    let { stream: n, analyticsContext: t, appContext: x, exitFullscreen: U, onSelect: w } = e,
        G = (function (e) {
            let n = N(e),
                t = (0, g.Z)(T.Z),
                s = C.Z.getSettings().clipsEnabled,
                i = e.ownerId === A.default.getId(),
                { enableViewerClipping: o, ignoreSenderPreference: u } = m.Z.useExperiment({ location: 'StreamContextMenu' }, { autoTrackExposure: !1 }),
                c = (0, a.e7)([C.Z], () => C.Z.getIsAtMaxSaveClipOperations()),
                d = (0, a.e7)([C.Z], () => C.Z.isViewerClippingAllowedForUser(e.ownerId)) || u;
            return t && o && n
                ? (0, l.jsx)(r.MenuItem, {
                      id: 'clip-stream',
                      disabled: !s || !(i || d) || c,
                      label: j.Z.Messages.CLIPS_SAVE,
                      action: () => (i ? (0, E.C1)() : (0, E.C1)((0, v.V9)(e)))
                  })
                : null;
        })(n),
        L = N(n),
        k = (function (e) {
            let n = N(e),
                t = (0, p.Z)(e.ownerId, O.Yn.STREAM);
            return n ? t : null;
        })(n),
        P = (function (e) {
            let n;
            let t = (0, a.e7)([f.Z], () => null != f.Z.getRemoteSessionId()),
                s = (0, a.e7)([_.Z], () => _.Z.getChannel(e.channelId), [e.channelId]),
                i = N(e),
                c = V.default.getCurrentUser(),
                d = null != c && e.ownerId === c.id;
            return ((n = d ? j.Z.Messages.STOP_STREAMING : i ? j.Z.Messages.STOP_WATCHING : j.Z.Messages.WATCH_STREAM), t || (!d && i && (null == s ? void 0 : s.isGuildStageVoice())))
                ? null
                : (0, l.jsx)(r.MenuItem, {
                      id: 'watch',
                      label: n,
                      action: i
                          ? function () {
                                (0, u.g)((0, v.V9)(e));
                            }
                          : function () {
                                o.default.selectVoiceChannel(e.channelId), (0, u.rn)(e);
                            }
                  });
        })(n),
        D = (function (e) {
            let n = N(e),
                t = (0, a.e7)([T.Z], () => T.Z.isLocalMute(e.ownerId, O.Yn.STREAM)),
                i = V.default.getCurrentUser(),
                o = null != i && e.ownerId === i.id;
            return !n || o
                ? null
                : (0, l.jsx)(r.MenuCheckboxItem, {
                      id: 'mute',
                      label: j.Z.Messages.SOUND_MUTE,
                      action: function () {
                          s.Z.toggleLocalMute(e.ownerId, O.Yn.STREAM);
                      },
                      checked: t
                  });
        })(n),
        F = (function (e) {
            let n = N(e),
                t = e.ownerId === A.default.getId(),
                { sidechainAvailable: i } = h.Z.getCurrentConfig({ location: 'StreamContextMenu' }),
                o = (0, a.e7)([T.Z], () => T.Z.getSidechainCompression()),
                u = (0, a.e7)([T.Z], () => T.Z.getSidechainCompressionStrength());
            return t || !n || !i || (0, b.isWeb)()
                ? null
                : (0, l.jsxs)(r.MenuGroup, {
                      children: [
                          (0, l.jsx)(r.MenuCheckboxItem, {
                              id: 'sidechain-compression',
                              label: j.Z.Messages.SIDECHAIN_COMPRESSION,
                              action: () => s.Z.setSidechainCompression(!o),
                              checked: o
                          }),
                          (0, l.jsx)(r.MenuControlItem, {
                              id: 'sidechain-parameters',
                              label: j.Z.Messages.SIDECHAIN_COMPRESSION_STRENGTH,
                              control: (e, n) =>
                                  (0, l.jsx)(r.MenuSliderControl, {
                                      ...e,
                                      ref: n,
                                      value: u,
                                      maxValue: 100,
                                      onChange: (e) => s.Z.setSidechainCompressionStrength(e),
                                      'aria-label': j.Z.Messages.SIDECHAIN_COMPRESSION_STRENGTH
                                  })
                          })
                      ]
                  });
        })(n),
        H = (0, I.Z)(n, x, U),
        Y = (0, M.Z)(n.channelId, n.ownerId),
        W = (0, d.Z)(n.channelId),
        B = (0, a.e7)([_.Z], () => _.Z.getChannel(n.channelId), [n.channelId]),
        y = (0, Z.G)({
            stream: n,
            channelId: n.channelId,
            location: 'StreamContextMenu'
        }),
        J = (0, S.B)({
            userId: n.ownerId,
            channelId: n.channelId,
            guildId: n.guildId,
            location: 'StreamContextMenu'
        });
    return (0, l.jsx)(c.Z, {
        context: t,
        object: R.qAy.CONTEXT_MENU,
        children: (0, l.jsxs)(r.Menu, {
            navId: 'stream-context',
            onClose: i.Zy,
            'aria-label': j.Z.Messages.STREAM_ACTIONS_MENU_LABEL,
            onSelect: w,
            children: [
                (0, l.jsxs)(r.MenuGroup, {
                    children: [P, G, D, y, J]
                }),
                (0, l.jsx)(r.MenuGroup, { children: k }),
                F,
                (0, l.jsxs)(r.MenuGroup, {
                    children: [(null == B ? void 0 : B.isGuildStageVoice()) ? null : W, Y, L && H]
                })
            ]
        })
    });
}
