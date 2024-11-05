n.d(t, {
    Z: function () {
        return y;
    }
});
var r = n(200651),
    i = n(192379),
    a = n(848246),
    s = n(442837),
    o = n(481060),
    l = n(846027),
    u = n(2052),
    c = n(451467),
    d = n(386542),
    f = n(933843),
    _ = n(746599),
    h = n(361291),
    p = n(592125),
    m = n(430824),
    g = n(131951),
    E = n(944486),
    v = n(594174),
    I = n(981631),
    S = n(37113),
    T = n(65154),
    b = n(388032);
function y(e, t) {
    let { preset: y, resolution: A, fps: N } = (0, s.cj)([h.Z], () => h.Z.getState()),
        C = (0, s.e7)([g.Z], () => g.Z.getGoLiveSource()),
        R = (0, s.e7)([v.default], () => v.default.getCurrentUser()),
        O = (0, s.e7)([m.Z], () => {
            var t;
            return null === (t = m.Z.getGuild(null == e ? void 0 : e.guildId)) || void 0 === t ? void 0 : t.premiumTier;
        }),
        { location: D } = (0, u.O)(),
        { available: L, activated: x } = (0, d.k)(a.q.STREAM_HIGH_QUALITY),
        w = (0, s.e7)([E.Z, p.Z], () => p.Z.getChannel(E.Z.getVoiceChannelId())),
        M = i.useCallback(
            (e, i, a, s) => {
                if (e) {
                    if (null != C) {
                        let e = {
                            qualityOptions: {
                                preset: S.tI.PRESET_CUSTOM,
                                resolution: i,
                                frameRate: a
                            },
                            context: T.Yn.STREAM
                        };
                        null != C.desktopSource
                            ? (e.desktopSettings = {
                                  sourceId: C.desktopSource.id,
                                  sound: !0
                              })
                            : null != C.cameraSource &&
                              (e.cameraSettings = {
                                  videoDeviceGuid: C.cameraSource.videoDeviceGuid,
                                  audioDeviceGuid: C.cameraSource.audioDeviceGuid
                              }),
                            L && (0, _.J1)(!(0, f.mc)(i, a)),
                            l.Z.setGoLiveSource(e);
                    }
                } else {
                    var u, c;
                    (u = t),
                        (c = {
                            ...D,
                            object: I.qAy.RADIO_ITEM,
                            objectType: s
                        }),
                        (0, o.openModalLazy)(
                            async () => {
                                let { default: e } = await n.e('28479').then(n.bind(n, 78865));
                                return (t) =>
                                    (0, r.jsx)(e, {
                                        ...t,
                                        analyticsSource: c
                                    });
                            },
                            { contextKey: u === I.IlC.POPOUT ? o.POPOUT_MODAL_CONTEXT : o.DEFAULT_MODAL_CONTEXT }
                        );
                }
            },
            [t, D, C, L]
        );
    if (null == e) return null;
    let P = y === S.tI.PRESET_DOCUMENTS ? S.ws.FPS_30 : N,
        k = S.af.map((e) => {
            let { value: t, label: n } = e,
                i = (0, c.Z)(S.tI.PRESET_CUSTOM, A, t, R, O, w);
            return (0, r.jsx)(
                o.MenuRadioItem,
                {
                    group: 'stream-settings-fps',
                    id: 'stream-settings-fps-'.concat(t),
                    label: n,
                    checked: t === N,
                    action: () => M(i, A, t, I.Qqv.RESOLUTION)
                },
                'stream-settings-fps-'.concat(t)
            );
        }),
        U = S.km.map((e) => {
            let { value: t, label: n } = e,
                i = (0, c.Z)(S.tI.PRESET_CUSTOM, t, P, R, O, w);
            return (
                L && !x && (i = !1),
                (0, r.jsx)(
                    o.MenuRadioItem,
                    {
                        group: 'stream-settings-resolution',
                        id: 'stream-settings-resolution-'.concat(t),
                        label: n,
                        checked: t === A,
                        action: () => M(i, t, P, I.Qqv.RESOLUTION)
                    },
                    'stream-settings-resolution-'.concat(t)
                )
            );
        });
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(o.MenuGroup, {
                label: b.intl.string(b.t.SkkeIi),
                children: k
            }),
            (0, r.jsx)(o.MenuGroup, {
                label: b.intl.string(b.t.rHyPXl),
                children: U
            })
        ]
    });
}
