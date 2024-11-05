t.d(n, {
    U4: function () {
        return i;
    },
    cG: function () {
        return J;
    },
    kA: function () {
        return K;
    },
    qR: function () {
        return $;
    }
}),
    t(47120),
    t(411104);
var i,
    l,
    a = t(200651),
    o = t(192379),
    r = t(120356),
    s = t.n(r),
    c = t(442837),
    d = t(481060),
    u = t(239091),
    m = t(110924),
    p = t(607070),
    h = t(115130),
    f = t(317381),
    C = t(361213),
    v = t(542094),
    x = t(778569),
    _ = t(182906),
    N = t(823531),
    g = t(367907),
    A = t(220082),
    b = t(70097),
    E = t(695346),
    I = t(973616),
    j = t(695103),
    S = t(880448),
    y = t(768581),
    P = t(541099),
    T = t(783097),
    L = t(695676),
    R = t(176412),
    M = t(226026),
    k = t(753972),
    Z = t(981631),
    O = t(217702),
    U = t(388032),
    B = t(127935),
    w = t(413097),
    H = t(969728);
function D(e) {
    var n;
    let { application: t, look: i = 'large_banner', onClick: l, imageStyle: o, enableVideoBanner: r = !0, children: s, sectionName: c, resultsPosition: d, sectionOverallPosition: u, tracksImpression: p = !0, disabled: h = !1 } = e,
        f = null !== (n = (0, m.Z)(h)) && void 0 !== n ? n : h;
    return (0, a.jsx)(V, {
        application: t,
        onClick: l,
        sectionName: c,
        resultsPosition: d,
        disabled: h,
        tracksImpression: p,
        look: i,
        sectionOverallPosition: u,
        children:
            'icon' === i
                ? (0, a.jsx)(W, {
                      application: t,
                      imageStyle: o,
                      children: s
                  })
                : (0, a.jsx)(F, {
                      application: t,
                      look: i,
                      imageStyle: o,
                      enableVideoBanner: r,
                      disableBannerFadeIn: f !== h,
                      children: s
                  })
    });
}
function V(e) {
    let { application: n, onClick: t, children: i, sectionName: l, resultsPosition: r, sectionOverallPosition: c, tracksImpression: m, disabled: p, containerStyle: h, look: f } = e,
        C = E.Sb.useSetting(),
        v = o.useCallback(
            (e) => {
                if ((0, T.BQ)(n) && C) {
                    let t = n instanceof I.Z ? n : I.Z.createFromServer(n);
                    (0, u.vq)(e, (e) =>
                        (0, a.jsx)(N.Z, {
                            application: t,
                            ...e
                        })
                    );
                }
            },
            [n, C]
        ),
        { name: x, description: _ } = o.useMemo(() => (0, T.sl)(n, { fakeAppIconURL: w }), [n]),
        { trackItemImpressionRef: g } = (0, M.Z)({
            applicationId: n.id,
            sectionName: l,
            sectionPosition: r,
            sectionOverallPosition: c
        }),
        A = o.useMemo(() => {
            let e = p ? B.containerDisabled : B.container;
            return s()(
                e,
                {
                    [B.containerBorderRadius]: 'row' !== f,
                    [B.rowContainer]: 'row' === f,
                    [B.iconCard]: 'icon' === f
                },
                h
            );
        }, [h, p, f]);
    return p
        ? (0, a.jsx)('div', {
              ref: m ? g : void 0,
              className: A,
              children: i
          })
        : (0, a.jsx)(d.Clickable, {
              innerRef: m ? g : void 0,
              className: A,
              onClick: t,
              onContextMenu: v,
              'aria-label': U.intl.formatToPlainString(U.t['zLhr9/'], {
                  applicationName: x,
                  applicationDescription: _
              }),
              children: (0, a.jsx)(d.FocusBlock, { children: i })
          });
}
function W(e) {
    let { application: n, imageStyle: t, children: i } = e,
        { name: l, iconURL: r } = o.useMemo(() => (0, T.sl)(n, { fakeAppIconURL: w }), [n]);
    return (0, a.jsx)(d.Tooltip, {
        tooltipContentClassName: B.tooltipContent,
        text: l,
        children: (e) => {
            let { ...n } = e;
            return (0, a.jsxs)('div', {
                className: s()(B.iconContainer, t),
                ...n,
                children: [
                    (0, a.jsx)(k.Z, {
                        src: r,
                        className: B.iconCard,
                        'aria-hidden': !0,
                        rendersPlaceholder: !0
                    }),
                    i
                ]
            });
        }
    });
}
function F(e) {
    let { application: n, look: t, imageStyle: i, enableVideoBanner: l, disableBannerFadeIn: r, children: u } = e,
        { iconURL: m, name: p, description: f } = o.useMemo(() => (0, T.sl)(n, { fakeAppIconURL: w }), [n]),
        C = o.useMemo(() => (null == f ? null : (0, R.ae)(f)), [f]),
        v = (0, A.ZP)(m, ''),
        [x, _] = o.useState(!1),
        N = o.useCallback(() => {
            !0 === l && _(!0);
        }, [l]),
        g = (0, T.lf)(n),
        b = 'large_banner' === t || 'medium_banner' === t,
        E = o.useCallback(() => _(!1), []),
        I = (0, c.e7)([h.Z, j.Z], () => h.Z.inDevModeForApplication(n.id) || j.Z.inTestModeForApplication(n.id), [n.id]);
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsxs)('div', {
                onMouseEnter: N,
                onFocus: N,
                onMouseLeave: E,
                onBlur: E,
                className: s()(B.bannerImageContainer, {
                    [B.mediumBanner]: 'medium_banner' === t,
                    [B.largeBanner]: 'large_banner' === t
                }),
                children: [
                    (0, a.jsx)('span', {
                        className: i,
                        children: (0, a.jsx)(Y, {
                            application: n,
                            fallbackColor: v,
                            showVideo: x,
                            disableFadeIn: r
                        })
                    }),
                    b
                        ? (0, a.jsxs)(a.Fragment, {
                              children: [
                                  I || g
                                      ? (0, a.jsxs)('div', {
                                            className: B.bannerUpperRightContainer,
                                            children: [
                                                g &&
                                                    (0, a.jsx)('div', {
                                                        className: B.promotedLabelWrapperBanner,
                                                        children: (0, a.jsx)(d.Heading, {
                                                            variant: 'text-xxs/medium',
                                                            color: 'header-primary',
                                                            children: U.intl.string(U.t['/eVltr'])
                                                        })
                                                    }),
                                                I && (0, a.jsx)(z, {})
                                            ]
                                        })
                                      : null,
                                  (0, a.jsx)('div', {
                                      className: B.bannerImageChildContainer,
                                      children: u
                                  })
                              ]
                          })
                        : null
                ]
            }),
            (0, a.jsxs)('div', {
                className: s()(B.appDetailsContainer, { [B.appDetailsRowContainer]: 'row' === t }),
                children: [
                    (0, a.jsx)(k.Z, {
                        src: m,
                        className: s()(B.icon, { [B.rowIcon]: 'row' === t }),
                        'aria-hidden': !0,
                        rendersPlaceholder: !0
                    }),
                    (0, a.jsxs)('div', {
                        className: B.appDetails,
                        children: [
                            (0, a.jsxs)('div', {
                                className: B.appDetailsHeaderContainer,
                                children: [
                                    (0, a.jsx)(d.Heading, {
                                        variant: 'heading-md/semibold',
                                        color: 'header-primary',
                                        lineClamp: 1,
                                        children: p
                                    }),
                                    !b && g
                                        ? (0, a.jsx)('div', {
                                              className: B.promotedLabelWrapperNonBanner,
                                              children: (0, a.jsx)(d.Text, {
                                                  variant: 'text-xxs/semibold',
                                                  color: 'text-muted',
                                                  children: U.intl.string(U.t['/eVltr'])
                                              })
                                          })
                                        : null,
                                    (0, a.jsx)(G, { application: n })
                                ]
                            }),
                            (0, a.jsx)(d.Text, {
                                variant: 'text-sm/normal',
                                color: 'text-secondary',
                                lineClamp: 1,
                                children: C
                            })
                        ]
                    }),
                    'row' === t ? (0, a.jsx)('div', { className: B.rowDivider }) : null
                ]
            })
        ]
    });
}
function z() {
    return (0, a.jsx)(d.Tooltip, {
        text: U.intl.string(U.t.CfTySU),
        children: (e) =>
            (0, a.jsx)('div', {
                className: B.devShelfBadge,
                ...e,
                children: (0, a.jsx)(S.Z, { className: B.devShelfIcon })
            })
    });
}
function G(e) {
    let { application: n } = e,
        t = (0, T.yJ)(n);
    if (null == t || !(0, T.BQ)(n)) return null;
    let i = (0, v.fD)(n, t);
    return null == i
        ? null
        : (0, a.jsx)(d.Tooltip, {
              text: i,
              children: (e) =>
                  (0, a.jsx)('img', {
                      className: B.staffBadge,
                      alt: i,
                      src: H,
                      ...e
                  })
          });
}
function Y(e) {
    let { application: n, fallbackColor: t, showVideo: i, disableFadeIn: l } = e;
    if ((0, T.BQ)(n)) {
        if ((0, T.ye)(n))
            return (0, a.jsx)(X, {
                application: n,
                showVideo: i,
                disableFadeIn: l
            });
        if (null != n.bot)
            return (0, a.jsx)(q, {
                bot: n.bot,
                fallbackColor: t,
                disableFadeIn: l
            });
    }
    return (0, a.jsx)(Q, {
        fallbackColor: t,
        disableFadeIn: l
    });
}
function X(e) {
    let { application: n, showVideo: t, disableFadeIn: i } = e,
        l = (0, x.Z)({
            applicationId: n.id,
            size: 600,
            names: ['embedded_cover']
        }),
        r = o.useMemo(() => {
            let e = (0, T.yJ)(n);
            return null != e && null != e.activity_preview_video_asset_id ? (0, C.Z)(n.id, e.activity_preview_video_asset_id) : null;
        }, [n]),
        [c, d] = o.useState(t);
    o.useEffect(() => {
        t && d(!0);
    }, [t]);
    let u = s()(B.bannerImage, { [B.disableFadeIn]: i });
    return (0, a.jsxs)(a.Fragment, {
        children: [
            null != r && c
                ? (0, a.jsx)('div', {
                      className: B.activityVideoContainer,
                      children: (0, a.jsx)('div', {
                          className: s()(B.activityVideo, { [B.videoFadeOut]: !t }),
                          onAnimationEnd: () => (t ? null : d(!1)),
                          children: (0, a.jsx)(b.Z, {
                              src: r,
                              mediaLayoutType: O.hV.MOSAIC,
                              loop: !0,
                              autoPlay: !0,
                              muted: !0
                          })
                      })
                  })
                : null,
            (0, a.jsx)(_.Z, {
                imageBackground: l,
                applicationName: n.name,
                imageClassName: u,
                imageNotFoundClassName: u
            })
        ]
    });
}
function q(e) {
    let { bot: n, fallbackColor: t, disableFadeIn: i } = e,
        l = (0, c.e7)([p.Z], () => p.Z.useReducedMotion),
        o = (0, y.aN)({
            id: n.id,
            banner: n.banner,
            canAnimate: !l,
            size: 600
        });
    return null == o
        ? (0, a.jsx)(Q, {
              fallbackColor: t,
              disableFadeIn: i
          })
        : (0, a.jsx)('img', {
              src: o,
              alt: '',
              className: s()(B.bannerImage, { [B.disableFadeIn]: i })
          });
}
function Q(e) {
    let { fallbackColor: n, disableFadeIn: t } = e;
    return (0, a.jsx)('div', {
        className: s()(B.bannerImage, { [B.disableFadeIn]: t }),
        style: { backgroundColor: n }
    });
}
function J(e) {
    let { application: n, sectionName: t, resultsPosition: i, query: l, installOnDemand: a, location: r } = e,
        { pushHistory: s } = (0, L.hH)();
    return o.useCallback(
        (e) => {
            e.stopPropagation(),
                (0, g.yw)(Z.rMx.APPLICATION_COMMAND_SECTION_SELECTED, {
                    application_id: n.id,
                    section_name: t,
                    search_results_position: i,
                    source: P.Z.entrypoint(),
                    location: r,
                    query: l
                }),
                s({
                    type: L.gc.APPLICATION,
                    application: n,
                    installOnDemand: a,
                    sectionName: t
                });
        },
        [n, a, r, s, l, i, t]
    );
}
function K(e) {
    let n = J(e);
    return (0, a.jsx)(D, {
        ...e,
        onClick: n
    });
}
function $(e) {
    let { channel: n, application: t, location: i, sectionName: l, isOneClickCTA: r, fetchesApplication: s = !0, ...u } = e;
    if (!(0, T.BQ)(t)) throw Error('PerformActivityActionAppCard was passed the Built-in App, which is not supported.');
    let m = o.useId(),
        [p, h] = (0, c.Wu)([f.ZP], () => [f.ZP.isLaunchingActivity(), f.ZP.getLaunchState(t.id, n.id)]),
        C = null != h && h.isLaunching && h.componentId === m,
        {
            onActivityItemSelected: x,
            activityAction: _,
            buttonColor: N,
            buttonText: g
        } = (0, R.P7)({
            channel: n,
            application: t,
            location: i,
            sectionName: l,
            launchingComponentId: m,
            fetchesApplication: s
        });
    if (_ === v.JS.START || _ === v.JS.JOIN)
        return r
            ? (0, a.jsx)(D, {
                  ...u,
                  sectionName: l,
                  application: t,
                  onClick: x,
                  disabled: p,
                  enableVideoBanner: !C,
                  children: C
                      ? (0, a.jsx)(d.Spinner, {
                            type: d.Spinner.Type.PULSING_ELLIPSIS,
                            className: B.spinner
                        })
                      : null
              })
            : (0, a.jsx)(K, {
                  ...u,
                  sectionName: l,
                  application: t,
                  location: i
              });
    return (0, a.jsx)(D, {
        ...u,
        sectionName: l,
        application: t,
        onClick: (e) => {
            e.stopPropagation();
        },
        imageStyle: B.darkenImage,
        enableVideoBanner: !1,
        disabled: !0,
        children: (0, a.jsx)('div', {
            className: B.voiceLauncherAppCardContainer,
            children: (0, a.jsx)(d.Button, {
                className: B.voiceLauncherAppCardButton,
                type: 'submit',
                size: d.Button.Sizes.LARGE,
                color: N,
                disabled: p,
                onClick: x,
                'aria-label': U.intl.formatToPlainString(U.t['XjP/R0'], {
                    buttonText: g,
                    applicationName: t.name
                }),
                submitting: C,
                children: g
            })
        })
    });
}
((l = i || (i = {})).ICON = 'icon'), (l.ROW = 'row'), (l.NO_BANNER = 'no_banner'), (l.MEDIUM_BANNER = 'medium_banner'), (l.LARGE_BANNER = 'large_banner');
