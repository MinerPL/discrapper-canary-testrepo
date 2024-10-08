n.d(t, {
    b: function () {
        return L;
    }
}),
    n(47120),
    n(773603);
var i = n(735250),
    a = n(470079),
    s = n(120356),
    l = n.n(s),
    r = n(848246),
    o = n(793030),
    c = n(442837),
    u = n(46973),
    d = n(481060),
    h = n(846027),
    m = n(607070),
    p = n(361291),
    _ = n(131951),
    E = n(626135),
    f = n(120522),
    C = n(386542),
    g = n(933843),
    I = n(746599),
    x = n(1163),
    T = n(738672),
    N = n(981631),
    v = n(37113),
    S = n(689938),
    Z = n(375919);
function A(e) {
    let { className: t, onDismiss: n } = e;
    return (0, i.jsx)(d.Button, {
        className: t,
        'aria-label': S.Z.Messages.CLOSE,
        look: d.Button.Looks.BLANK,
        size: d.Button.Sizes.NONE,
        onClick: n,
        children: (0, i.jsx)(d.XSmallIcon, {
            size: 'xs',
            className: Z.closeIcon,
            color: 'white'
        })
    });
}
let M = v.LY.RESOLUTION_1440,
    b = v.ws.FPS_60;
function R(e) {
    let { channel: t } = e,
        n = (0, c.e7)([m.Z], () => m.Z.useReducedMotion),
        [s, l] = a.useState(!1),
        { preset: o } = (0, c.cj)([p.Z], () => p.Z.getState()),
        C = (0, c.e7)([_.Z], () => _.Z.getGoLiveSource()),
        x = a.useCallback(() => {
            l(!0),
                (0, f.S)(r.q.STREAM_HIGH_QUALITY)
                    .then((e) => {
                        if (e) {
                            if (
                                ((0, I.J1)(!(0, g.mc)(M, b)),
                                E.default.track(N.rMx.PERK_DEMO_OFFER_ACCEPTED, {
                                    guild_id: t.guild_id,
                                    channel_id: t.id,
                                    perk_type: r.q.STREAM_HIGH_QUALITY,
                                    resolution: M,
                                    max_fps: b
                                }),
                                (0, I.cD)(!1),
                                null == C)
                            )
                                return;
                            let e = {
                                qualityOptions: {
                                    preset: o,
                                    resolution: M,
                                    frameRate: b
                                },
                                context: u.Yn.STREAM
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
                                h.Z.setGoLiveSource(e);
                        }
                    })
                    .catch(() => {})
                    .finally(() => {
                        l(!1);
                    });
        }, [o, t, C]);
    return (0, i.jsx)(d.ShinyButton, {
        fullWidth: !0,
        pauseAnimation: n,
        color: d.Button.Colors.GREEN,
        size: d.Button.Sizes.SMALL,
        className: Z.optInButton,
        onClick: x,
        submitting: s,
        children: S.Z.Messages.GO_LIVE_MODAL_PERK_DEMO_HD_STREAMING_OPT_IN_POPOUT_CTA_V2
    });
}
function j(e) {
    let { channel: t, hidden: n, onDismiss: a } = e,
        s = x.Z.useExperiment({ location: 'StreamButtonDemoOptInPopoutContent' }, { autoTrackExposure: !1 }).extendedDemoDuration;
    return (0, i.jsxs)('div', {
        className: l()(Z.optInPopout, Z.variant2OptInPopout, { [Z.hidden]: n }),
        children: [
            (0, i.jsx)('img', {
                className: Z.image,
                src: 'https://cdn.discordapp.com/assets/premium/roadblocks/hd_streaming.png',
                alt: 'HD Streaming Nitro Perk'
            }),
            (0, i.jsx)(A, {
                className: Z.variant2CloseButton,
                onDismiss: a
            }),
            (0, i.jsx)('div', {
                className: Z.variant2InfoContainerParent,
                children: (0, i.jsxs)('div', {
                    className: Z.variant2InfoContainer,
                    children: [
                        (0, i.jsx)(o.x, {
                            className: Z.variant2Text,
                            variant: 'text-sm/medium',
                            children: s ? S.Z.Messages.GO_LIVE_MODAL_PERK_DEMO_HD_STREAMING_OPT_IN_V2_DURATION_POPOUT_BODY : S.Z.Messages.GO_LIVE_MODAL_PERK_DEMO_HD_STREAMING_OPT_IN_POPOUT_BODY
                        }),
                        (0, i.jsx)(R, { channel: t })
                    ]
                })
            })
        ]
    });
}
function L(e) {
    let { channel: t, ...n } = e,
        { shouldShowOptInPopout: s } = (0, C.k)(r.q.STREAM_HIGH_QUALITY),
        { enabled: l } = x.Z.useExperiment(
            { location: 'StreamButtonDemoOptInPopout' },
            {
                autoTrackExposure: !1,
                disable: !s
            }
        ),
        o = a.useRef(!1);
    return (a.useEffect(() => {
        s &&
            l &&
            !o.current &&
            ((o.current = !0),
            E.default.track(N.rMx.PERK_DEMO_OFFER_VIEWED, {
                guild_id: t.guild_id,
                channel_id: t.id,
                perk_type: r.q.STREAM_HIGH_QUALITY
            }));
    }, [s, l, t]),
    s && l)
        ? (0, i.jsx)(T.h, {
              ...n,
              renderComponent: (e) =>
                  (0, i.jsx)(j, {
                      ...e,
                      channel: t
                  })
          })
        : null;
}
