n.r(t),
    n.d(t, {
        HD_STREAMING_POTION_MODAL_KEY: function () {
            return E;
        },
        default: function () {
            return I;
        }
    }),
    n(47120);
var i = n(200651),
    l = n(192379),
    a = n(442837),
    r = n(481060),
    s = n(100527),
    o = n(906732),
    c = n(335131),
    d = n(120619),
    u = n(690221),
    h = n(333867),
    p = n(422034),
    m = n(938475),
    f = n(937615),
    g = n(981631),
    C = n(215023),
    x = n(388032),
    v = n(912568),
    _ = n(99713);
function I(e) {
    let { transitionState: t, channel: n } = e;
    return (0, i.jsx)(r.ModalRoot, {
        size: r.ModalSize.DYNAMIC,
        transitionState: t,
        children: (0, i.jsx)(b, { channel: n })
    });
}
let E = 'HD_STREAMING_POTION_MODAL_KEY';
function b(e) {
    let { channel: t } = e,
        n = m.ZP.getVoiceStatesForChannel(t).slice(0, 6),
        [I, b, N, Z, T, S] = (0, a.Wu)([d.Z], () => [d.Z.isFetchingPrice(C.FX), d.Z.isEntitlementFetched(C.FX), d.Z.isEntitlementFetching(C.FX), d.Z.getPrice(C.FX), d.Z.getErrored(C.FX), d.Z.getEntitlement(C.FX)]),
        { analyticsLocations: j } = (0, o.ZP)([s.Z.HD_STREAMING_POTION_MODAL]),
        A = null != S && !S.consumed && S.type === g.qc2.DEVELOPER_GIFT;
    l.useEffect(() => {
        null != S && !1 === S.consumed && S.type !== g.qc2.DEVELOPER_GIFT && (0, c.Zu)(t.id);
    }, [S, t]),
        l.useEffect(
            () => () => {
                (0, c.SN)(C.FX);
            },
            []
        ),
        l.useEffect(() => {
            !I && null == Z && !T && (0, c.Gq)(C.FX);
        }, [I, Z, T]),
        l.useEffect(() => {
            !b && !N && (0, c.gA)(C.FX);
        }, [b, N]);
    let y = () => {
            (0, r.closeModal)(E);
        },
        P = n.map((e, t) => {
            let { user: l } = e;
            return (0, i.jsx)(
                p.O,
                {
                    affinity: l,
                    applyMask: t !== n.length - 1,
                    size: r.AvatarSizes.SIZE_20
                },
                l.id
            );
        });
    return T
        ? (0, i.jsx)('div', {
              className: v.anomaly,
              children: (0, i.jsxs)('div', {
                  className: v.error,
                  children: [
                      (0, i.jsx)(r.Image, {
                          src: _,
                          width: 178,
                          height: 190
                      }),
                      (0, i.jsx)(r.Text, {
                          variant: 'text-md/normal',
                          children: x.intl.string(x.t.sIA0OD)
                      })
                  ]
              })
          })
        : null == Z
          ? (0, i.jsx)('div', {
                className: v.anomaly,
                children: (0, i.jsx)('div', {
                    className: v.spinner,
                    children: (0, i.jsx)(r.Spinner, {})
                })
            })
          : (0, i.jsxs)(i.Fragment, {
                children: [
                    (0, i.jsxs)('div', {
                        className: v.modal,
                        children: [
                            (0, i.jsx)('img', {
                                className: v.image,
                                src: 'https://cdn.discordapp.com/assets/content/5e2cb8d8137c2e5caecabaa7659295c2d443086ae7141bdc9e35a4825b47bdd7.png',
                                alt: x.intl.string(x.t.DdigcX)
                            }),
                            (0, i.jsxs)('div', {
                                className: v.body,
                                children: [
                                    (0, i.jsx)(r.Heading, {
                                        variant: 'heading-lg/bold',
                                        children: x.intl.string(x.t.K04rOD)
                                    }),
                                    (0, i.jsx)(r.Text, {
                                        variant: 'text-sm/normal',
                                        children: x.intl.string(x.t.xwRQWl)
                                    }),
                                    (0, i.jsx)(u.Z, {
                                        onClick: () => {},
                                        children: (0, i.jsx)(r.Text, {
                                            color: 'text-link',
                                            variant: 'text-xs/medium',
                                            children: x.intl.string(x.t.sxVfiY)
                                        })
                                    })
                                ]
                            }),
                            (0, i.jsx)('div', { className: v.divider }),
                            (0, i.jsxs)('div', {
                                className: v.applyingTo,
                                children: [
                                    (0, i.jsx)(r.Text, {
                                        variant: 'eyebrow',
                                        children: x.intl.string(x.t.tZyXg4)
                                    }),
                                    (0, i.jsxs)('div', {
                                        className: v.channel,
                                        children: [
                                            (0, i.jsxs)('div', {
                                                className: v.channelLeft,
                                                children: [
                                                    (0, i.jsx)(r.VoiceNormalIcon, {}),
                                                    (0, i.jsx)(r.Text, {
                                                        variant: 'text-md/normal',
                                                        children: t.name
                                                    })
                                                ]
                                            }),
                                            (0, i.jsx)('div', {
                                                className: v.avatars,
                                                children: P
                                            })
                                        ]
                                    })
                                ]
                            })
                        ]
                    }),
                    (0, i.jsxs)('div', {
                        className: v.footer,
                        children: [
                            (0, i.jsx)(r.Button, {
                                color: r.Button.Colors.PRIMARY,
                                children: x.intl.string(x.t.Avt5KS)
                            }),
                            (0, i.jsx)(r.Button, {
                                onClick: () => {
                                    if (A) {
                                        (0, c.Zu)(t.id), (0, r.closeModal)(E);
                                        return;
                                    }
                                    (0, h.Z)({
                                        skuId: C.FX,
                                        analyticsLocations: j,
                                        onComplete: y
                                    });
                                },
                                children: A ? x.intl.string(x.t.sl6Tcn) : x.intl.formatToPlainString(x.t.S9LAdX, { price: (0, f.T4)(Z.amount, Z.currency) })
                            })
                        ]
                    })
                ]
            });
}
