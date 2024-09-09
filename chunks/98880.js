t.d(n, {
    U4: function () {
        return i;
    },
    cG: function () {
        return Q;
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
    a,
    l = t(735250),
    o = t(470079),
    r = t(120356),
    s = t.n(r),
    c = t(442837),
    d = t(481060),
    u = t(239091),
    m = t(110924),
    p = t(607070),
    _ = t(115130),
    C = t(317381),
    f = t(361213),
    h = t(542094),
    A = t(778569),
    E = t(182906),
    N = t(823531),
    x = t(367907),
    v = t(220082),
    I = t(70097),
    g = t(695346),
    P = t(973616),
    S = t(695103),
    L = t(880448),
    b = t(768581),
    R = t(541099),
    T = t(783097),
    M = t(695676),
    y = t(176412),
    j = t(226026),
    Z = t(753972),
    O = t(981631),
    H = t(217702),
    U = t(689938),
    B = t(450139),
    k = t(413097),
    D = t(969728);
function w(e) {
    var n;
    let { application: t, look: i = 'large_banner', onClick: a, imageStyle: o, enableVideoBanner: r = !0, children: s, sectionName: c, resultsPosition: d, tracksImpression: u = !0, disabled: p = !1 } = e,
        _ = null !== (n = (0, m.Z)(p)) && void 0 !== n ? n : p;
    return (0, l.jsx)(V, {
        application: t,
        onClick: a,
        sectionName: c,
        resultsPosition: d,
        disabled: p,
        tracksImpression: u,
        look: i,
        children:
            'icon' === i
                ? (0, l.jsx)(W, {
                      application: t,
                      imageStyle: o,
                      children: s
                  })
                : (0, l.jsx)(F, {
                      application: t,
                      look: i,
                      imageStyle: o,
                      enableVideoBanner: r,
                      disableBannerFadeIn: _ !== p,
                      children: s
                  })
    });
}
function V(e) {
    let { application: n, onClick: t, children: i, sectionName: a, resultsPosition: r, tracksImpression: c, disabled: m, containerStyle: p, look: _ } = e,
        C = g.Sb.useSetting(),
        f = o.useCallback(
            (e) => {
                if ((0, T.BQ)(n) && C) {
                    let t = n instanceof P.Z ? n : P.Z.createFromServer(n);
                    (0, u.vq)(e, (e) =>
                        (0, l.jsx)(N.Z, {
                            application: t,
                            ...e
                        })
                    );
                }
            },
            [n, C]
        ),
        { name: h, description: A } = o.useMemo(() => (0, T.sl)(n, { fakeAppIconURL: k }), [n]),
        { trackItemImpressionRef: E } = (0, j.Z)({
            applicationId: n.id,
            sectionName: a,
            sectionPosition: r
        }),
        x = o.useMemo(() => {
            let e = m ? B.containerDisabled : B.container;
            return s()(
                e,
                {
                    [B.containerBorderRadius]: 'row' !== _,
                    [B.rowContainer]: 'row' === _,
                    [B.iconCard]: 'icon' === _
                },
                p
            );
        }, [p, m, _]);
    return m
        ? (0, l.jsx)('div', {
              ref: c ? E : void 0,
              className: x,
              children: i
          })
        : (0, l.jsx)(d.Clickable, {
              innerRef: c ? E : void 0,
              className: x,
              onClick: t,
              onContextMenu: f,
              'aria-label': U.Z.Messages.APP_LAUNCHER_APP_CARD_ARIA_LABEL.format({
                  applicationName: h,
                  applicationDescription: A
              }),
              children: (0, l.jsx)(d.FocusBlock, { children: i })
          });
}
function W(e) {
    let { application: n, imageStyle: t, children: i } = e,
        { name: a, iconURL: r } = o.useMemo(() => (0, T.sl)(n, { fakeAppIconURL: k }), [n]);
    return (0, l.jsx)(d.Tooltip, {
        tooltipContentClassName: B.tooltipContent,
        text: a,
        children: (e) => {
            let { ...n } = e;
            return (0, l.jsxs)('div', {
                className: s()(B.iconContainer, t),
                ...n,
                children: [
                    (0, l.jsx)(Z.Z, {
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
    let { application: n, look: t, imageStyle: i, enableVideoBanner: a, disableBannerFadeIn: r, children: u } = e,
        { iconURL: m, name: p, description: C } = o.useMemo(() => (0, T.sl)(n, { fakeAppIconURL: k }), [n]),
        f = o.useMemo(() => (null == C ? null : (0, y.ae)(C)), [C]),
        h = (0, v.ZP)(m, ''),
        [A, E] = o.useState(!1),
        N = o.useCallback(() => {
            !0 === a && E(!0);
        }, [a]),
        x = (0, T.lf)(n),
        I = 'large_banner' === t || 'medium_banner' === t,
        g = o.useCallback(() => E(!1), []),
        P = (0, c.e7)([_.Z, S.Z], () => _.Z.inDevModeForApplication(n.id) || S.Z.inTestModeForApplication(n.id), [n.id]);
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsxs)('div', {
                onMouseEnter: N,
                onFocus: N,
                onMouseLeave: g,
                onBlur: g,
                className: s()(B.bannerImageContainer, {
                    [B.mediumBanner]: 'medium_banner' === t,
                    [B.largeBanner]: 'large_banner' === t
                }),
                children: [
                    (0, l.jsx)('span', {
                        className: i,
                        children: (0, l.jsx)(z, {
                            application: n,
                            fallbackColor: h,
                            showVideo: A,
                            disableFadeIn: r
                        })
                    }),
                    I
                        ? (0, l.jsxs)(l.Fragment, {
                              children: [
                                  P || x
                                      ? (0, l.jsxs)('div', {
                                            className: B.bannerUpperRightContainer,
                                            children: [
                                                x &&
                                                    (0, l.jsx)('div', {
                                                        className: B.promotedLabelWrapperBanner,
                                                        children: (0, l.jsx)(d.Heading, {
                                                            variant: 'text-xxs/medium',
                                                            color: 'header-primary',
                                                            children: U.Z.Messages.APP_LAUNCHER_PROMOTED
                                                        })
                                                    }),
                                                P && (0, l.jsx)(Y, {})
                                            ]
                                        })
                                      : null,
                                  (0, l.jsx)('div', {
                                      className: B.bannerImageChildContainer,
                                      children: u
                                  })
                              ]
                          })
                        : null
                ]
            }),
            (0, l.jsxs)('div', {
                className: s()(B.appDetailsContainer, { [B.appDetailsRowContainer]: 'row' === t }),
                children: [
                    (0, l.jsx)(Z.Z, {
                        src: m,
                        className: s()(B.icon, { [B.rowIcon]: 'row' === t }),
                        'aria-hidden': !0,
                        rendersPlaceholder: !0
                    }),
                    (0, l.jsxs)('div', {
                        className: B.appDetails,
                        children: [
                            (0, l.jsxs)('div', {
                                className: B.appDetailsHeaderContainer,
                                children: [
                                    (0, l.jsx)(d.Heading, {
                                        variant: 'heading-md/semibold',
                                        color: 'header-primary',
                                        lineClamp: 1,
                                        children: p
                                    }),
                                    !I && x
                                        ? (0, l.jsx)('div', {
                                              className: B.promotedLabelWrapperNonBanner,
                                              children: (0, l.jsx)(d.Text, {
                                                  variant: 'text-xxs/semibold',
                                                  color: 'text-muted',
                                                  children: U.Z.Messages.APP_LAUNCHER_PROMOTED
                                              })
                                          })
                                        : null,
                                    (0, l.jsx)(G, { application: n })
                                ]
                            }),
                            (0, l.jsx)(d.Text, {
                                variant: 'text-sm/normal',
                                color: 'text-secondary',
                                lineClamp: 1,
                                children: f
                            })
                        ]
                    }),
                    'row' === t ? (0, l.jsx)('div', { className: B.rowDivider }) : null
                ]
            })
        ]
    });
}
function Y() {
    return (0, l.jsx)(d.Tooltip, {
        text: U.Z.Messages.EMBEDDED_ACTIVITIES_DEVELOPER_ACTIVITY,
        children: (e) =>
            (0, l.jsx)('div', {
                className: B.devShelfBadge,
                ...e,
                children: (0, l.jsx)(L.Z, { className: B.devShelfIcon })
            })
    });
}
function G(e) {
    let { application: n } = e,
        t = (0, T.yJ)(n);
    if (null == t) return null;
    let i = (0, h.fD)(t);
    return null == i
        ? null
        : (0, l.jsx)(d.Tooltip, {
              text: i,
              children: (e) =>
                  (0, l.jsx)('img', {
                      className: B.staffBadge,
                      alt: i,
                      src: D,
                      ...e
                  })
          });
}
function z(e) {
    let { application: n, fallbackColor: t, showVideo: i, disableFadeIn: a } = e;
    if ((0, T.BQ)(n)) {
        if ((0, T.ye)(n))
            return (0, l.jsx)(X, {
                application: n,
                showVideo: i,
                disableFadeIn: a
            });
        if (null != n.bot)
            return (0, l.jsx)(q, {
                bot: n.bot,
                fallbackColor: t,
                disableFadeIn: a
            });
    }
    return (0, l.jsx)(J, {
        fallbackColor: t,
        disableFadeIn: a
    });
}
function X(e) {
    let { application: n, showVideo: t, disableFadeIn: i } = e,
        a = (0, A.Z)({
            applicationId: n.id,
            size: 600,
            names: ['embedded_cover']
        }),
        r = o.useMemo(() => {
            let e = (0, T.yJ)(n);
            return null != e && null != e.activity_preview_video_asset_id ? (0, f.Z)(n.id, e.activity_preview_video_asset_id) : null;
        }, [n]),
        [c, d] = o.useState(t);
    o.useEffect(() => {
        t && d(!0);
    }, [t]);
    let u = s()(B.bannerImage, { [B.disableFadeIn]: i });
    return (0, l.jsxs)(l.Fragment, {
        children: [
            null != r && c
                ? (0, l.jsx)('div', {
                      className: B.activityVideoContainer,
                      children: (0, l.jsx)('div', {
                          className: s()(B.activityVideo, { [B.videoFadeOut]: !t }),
                          onAnimationEnd: () => (t ? null : d(!1)),
                          children: (0, l.jsx)(I.Z, {
                              src: r,
                              mediaLayoutType: H.hV.MOSAIC,
                              loop: !0,
                              autoPlay: !0,
                              muted: !0
                          })
                      })
                  })
                : null,
            (0, l.jsx)(E.Z, {
                imageBackground: a,
                applicationName: n.name,
                imageClassName: u,
                imageNotFoundClassName: u
            })
        ]
    });
}
function q(e) {
    let { bot: n, fallbackColor: t, disableFadeIn: i } = e,
        a = (0, c.e7)([p.Z], () => p.Z.useReducedMotion),
        o = (0, b.aN)({
            id: n.id,
            banner: n.banner,
            canAnimate: !a,
            size: 600
        });
    return null == o
        ? (0, l.jsx)(J, {
              fallbackColor: t,
              disableFadeIn: i
          })
        : (0, l.jsx)('img', {
              src: o,
              alt: '',
              className: s()(B.bannerImage, { [B.disableFadeIn]: i })
          });
}
function J(e) {
    let { fallbackColor: n, disableFadeIn: t } = e;
    return (0, l.jsx)('div', {
        className: s()(B.bannerImage, { [B.disableFadeIn]: t }),
        style: { backgroundColor: n }
    });
}
function Q(e) {
    let { application: n, sectionName: t, resultsPosition: i, query: a, installOnDemand: l, location: r } = e,
        { pushHistory: s } = (0, M.hH)();
    return o.useCallback(
        (e) => {
            e.stopPropagation(),
                (0, x.yw)(O.rMx.APPLICATION_COMMAND_SECTION_SELECTED, {
                    application_id: n.id,
                    section_name: t,
                    search_results_position: i,
                    source: R.Z.entrypoint(),
                    location: r,
                    query: a
                }),
                s({
                    type: M.gc.APPLICATION,
                    application: n,
                    installOnDemand: l,
                    sectionName: t
                });
        },
        [n, l, r, s, a, i, t]
    );
}
function K(e) {
    let n = Q(e);
    return (0, l.jsx)(w, {
        ...e,
        onClick: n
    });
}
function $(e) {
    let { channel: n, application: t, location: i, sectionName: a, isOneClickCTA: r, ...s } = e;
    if (!(0, T.BQ)(t)) throw Error('PerformActivityActionAppCard was passed the Built-in App, which is not supported.');
    let u = o.useId(),
        [m, p] = (0, c.Wu)([C.ZP], () => [C.ZP.isLaunchingActivity(), C.ZP.getLaunchState(t.id, n.id)]),
        _ = null != p && p.isLaunching && p.componentId === u,
        {
            onActivityItemSelected: f,
            activityAction: A,
            buttonColor: E,
            buttonText: N
        } = (0, y.P7)({
            channel: n,
            application: t,
            location: i,
            sectionName: a,
            launchingComponentId: u
        });
    if (A === h.JS.START || A === h.JS.JOIN)
        return r
            ? (0, l.jsx)(w, {
                  ...s,
                  sectionName: a,
                  application: t,
                  onClick: f,
                  disabled: m,
                  enableVideoBanner: !_,
                  children: _
                      ? (0, l.jsx)(d.Spinner, {
                            type: d.Spinner.Type.PULSING_ELLIPSIS,
                            className: B.spinner
                        })
                      : null
              })
            : (0, l.jsx)(K, {
                  ...s,
                  sectionName: a,
                  application: t,
                  location: i
              });
    return (0, l.jsx)(w, {
        ...s,
        sectionName: a,
        application: t,
        onClick: (e) => {
            e.stopPropagation();
        },
        imageStyle: B.darkenImage,
        enableVideoBanner: !1,
        disabled: !0,
        children: (0, l.jsx)('div', {
            className: B.voiceLauncherAppCardContainer,
            children: (0, l.jsx)(d.Button, {
                className: B.voiceLauncherAppCardButton,
                type: 'submit',
                size: d.Button.Sizes.LARGE,
                color: E,
                disabled: m,
                onClick: f,
                'aria-label': U.Z.Messages.APP_LAUNCHER_ACTIVITY_ITEM_SELECTED_BUTTON_ARIA_LABEL.format({
                    buttonText: N,
                    applicationName: t.name
                }),
                submitting: _,
                children: N
            })
        })
    });
}
((a = i || (i = {})).ICON = 'icon'), (a.ROW = 'row'), (a.NO_BANNER = 'no_banner'), (a.MEDIUM_BANNER = 'medium_banner'), (a.LARGE_BANNER = 'large_banner');
