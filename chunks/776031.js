n.d(t, {
    Z: function () {
        return A;
    }
});
var r = n(735250), i = n(470079), a = n(848246), o = n(442837), s = n(481060), l = n(846027), u = n(2052), c = n(451467), d = n(386542), _ = n(933843), E = n(485731), f = n(361291), h = n(430824), p = n(131951), m = n(594174), I = n(981631), T = n(37113), g = n(65154), S = n(689938);
function A(e, t) {
    let {
            preset: A,
            resolution: N,
            fps: v
        } = (0, o.cj)([f.Z], () => f.Z.getState()), O = (0, o.e7)([p.Z], () => p.Z.getGoLiveSource()), R = (0, o.e7)([m.default], () => m.default.getCurrentUser()), C = (0, o.e7)([h.Z], () => {
            var t;
            return null === (t = h.Z.getGuild(null == e ? void 0 : e.guildId)) || void 0 === t ? void 0 : t.premiumTier;
        }), {location: y} = (0, u.O)(), {
            available: D,
            activated: L
        } = (0, d.k)(a.q.STREAM_HIGH_QUALITY), b = i.useCallback((e, i, a, o) => {
            if (e) {
                if (null != O) {
                    let e = {
                        qualityOptions: {
                            preset: T.tI.PRESET_CUSTOM,
                            resolution: i,
                            frameRate: a
                        },
                        context: g.Yn.STREAM
                    };
                    null != O.desktopSource ? e.desktopSettings = {
                        sourceId: O.desktopSource.id,
                        sound: !0
                    } : null != O.cameraSource && (e.cameraSettings = {
                        videoDeviceGuid: O.cameraSource.videoDeviceGuid,
                        audioDeviceGuid: O.cameraSource.audioDeviceGuid
                    }), D && (0, E.J1)(!(0, _.mc)(i, a)), l.Z.setGoLiveSource(e);
                }
            } else {
                var u, c;
                u = t, c = {
                    ...y,
                    object: I.qAy.RADIO_ITEM,
                    objectType: o
                }, (0, s.openModalLazy)(async () => {
                    let {default: e} = await n.e('28479').then(n.bind(n, 78865));
                    return t => (0, r.jsx)(e, {
                        ...t,
                        analyticsSource: c
                    });
                }, { contextKey: u === I.IlC.POPOUT ? s.POPOUT_MODAL_CONTEXT : s.DEFAULT_MODAL_CONTEXT });
            }
        }, [
            t,
            y,
            O,
            D
        ]);
    if (null == e)
        return null;
    let M = A === T.tI.PRESET_DOCUMENTS ? T.ws.FPS_30 : v, P = T.af.map(e => {
            let {
                    value: t,
                    label: n
                } = e, i = (0, c.Z)(T.tI.PRESET_CUSTOM, N, t, R, C);
            return D && !L && (i = !1), (0, r.jsx)(s.MenuRadioItem, {
                group: 'stream-settings-fps',
                id: 'stream-settings-fps-'.concat(t),
                label: n,
                checked: t === v,
                action: () => b(i, N, t, I.Qqv.RESOLUTION)
            }, 'stream-settings-fps-'.concat(t));
        }), U = T.km.map(e => {
            let {
                    value: t,
                    label: n
                } = e, i = (0, c.Z)(T.tI.PRESET_CUSTOM, t, M, R, C);
            return D && !L && (i = !1), (0, r.jsx)(s.MenuRadioItem, {
                group: 'stream-settings-resolution',
                id: 'stream-settings-resolution-'.concat(t),
                label: n,
                checked: t === N,
                action: () => b(i, t, M, I.Qqv.RESOLUTION)
            }, 'stream-settings-resolution-'.concat(t));
        });
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(s.MenuGroup, {
                label: S.Z.Messages.SCREENSHARE_FRAME_RATE,
                children: P
            }),
            (0, r.jsx)(s.MenuGroup, {
                label: S.Z.Messages.STREAM_RESOLUTION,
                children: U
            })
        ]
    });
}
