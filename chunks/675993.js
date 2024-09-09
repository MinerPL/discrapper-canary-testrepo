t.d(n, {
    Z: function () {
        return I;
    }
}),
    t(47120);
var i = t(735250),
    a = t(470079),
    l = t(120356),
    o = t.n(l),
    r = t(442837),
    s = t(481060),
    c = t(115130),
    d = t(147865),
    u = t(427996),
    m = t(812236),
    p = t(70097),
    _ = t(240991),
    C = t(973616),
    f = t(783097),
    h = t(695676),
    A = t(520315),
    E = t(29380),
    N = t(689938),
    x = t(655863),
    v = t(910212);
function I(e) {
    let { channel: n, application: t, videoUrl: l, imageCoverUrl: s, sectionName: d, hasCommands: m } = e,
        _ = a.useMemo(() => {
            var e;
            return null !== (e = (0, f.jD)(t)) && void 0 !== e ? e : '';
        }, [t]),
        C = (0, r.e7)([c.Z], () => c.Z.inDevModeForApplication(t.id)),
        A = null != l,
        { isSlideReady: E } = (0, h.hH)(),
        [v, I] = a.useState(!1);
    return (
        a.useEffect(() => {
            E && I(!0);
        }, [E]),
        (0, i.jsxs)('div', {
            className: x.container,
            children: [
                (0, i.jsxs)('div', {
                    className: x.profileAndVideoContainer,
                    children: [
                        A
                            ? (0, i.jsxs)('div', {
                                  className: x.videoContainer,
                                  children: [
                                      v
                                          ? (0, i.jsx)(p.Z, {
                                                className: o()(x.videoCover, x.video),
                                                loop: !0,
                                                muted: !0,
                                                autoPlay: !0,
                                                src: l,
                                                poster: s
                                            })
                                          : null,
                                      (0, i.jsx)('img', {
                                          className: x.videoCover,
                                          src: s,
                                          'aria-label': N.Z.Messages.IMAGE
                                      })
                                  ]
                              })
                            : null,
                        (0, i.jsxs)('div', {
                            className: A ? x.overviewContainerWithVideo : x.overviewContainerNoVideo,
                            children: [
                                (0, i.jsx)(P, { application: t }),
                                (0, i.jsx)(S, { application: t }),
                                _.length > 0 ? (0, i.jsx)(R, { description: _ }) : null,
                                C
                                    ? (0, i.jsx)('div', {
                                          className: x.developerShelfControlsContainer,
                                          children: (0, i.jsx)(u.W, {
                                              hideSearch: !0,
                                              className: x.developerShelfControls
                                          })
                                      })
                                    : null,
                                (0, i.jsx)(b, {
                                    channel: n,
                                    application: t,
                                    sectionName: d,
                                    isDeveloperOfThisApp: C,
                                    hasCommands: m
                                })
                            ]
                        })
                    ]
                }),
                (0, i.jsx)(g, { application: t })
            ]
        })
    );
}
function g(e) {
    let { application: n } = e,
        t = (0, f.Cb)(n),
        a = (0, f.Hu)(n);
    return t || a
        ? (0, i.jsxs)('div', {
              className: x.monetizationDisclosureContainerStyle,
              children: [
                  t
                      ? (0, i.jsxs)('div', {
                            className: x.monetizationDisclosureStyle,
                            children: [
                                (0, i.jsx)(s.ShopIcon, {
                                    size: 'sm',
                                    color: s.tokens.colors.INTERACTIVE_MUTED
                                }),
                                (0, i.jsx)(s.Text, {
                                    variant: 'text-sm/normal',
                                    color: 'text-secondary',
                                    children: N.Z.Messages.APP_LAUNCHER_IAP_DISCLOSURE
                                })
                            ]
                        })
                      : null,
                  a
                      ? (0, i.jsxs)('div', {
                            className: x.monetizationDisclosureStyle,
                            children: [
                                (0, i.jsx)(s.BillIcon, {
                                    size: 'sm',
                                    color: s.tokens.colors.INTERACTIVE_MUTED
                                }),
                                (0, i.jsx)(s.Text, {
                                    variant: 'text-sm/normal',
                                    color: 'text-secondary',
                                    children: N.Z.Messages.APP_LAUNCHER_ADS_DISCLOSURE
                                })
                            ]
                        })
                      : null
              ]
          })
        : null;
}
function P(e) {
    var n;
    let { application: t } = e,
        a = (0, f.BQ)(t) ? t.name : null !== (n = (0, f.$d)(t)) && void 0 !== n ? n : '',
        l = (0, f.vJ)(t);
    return (0, i.jsxs)('div', {
        className: x.titleContainer,
        children: [
            (0, i.jsx)(s.Heading, {
                variant: 'heading-xl/extrabold',
                lineClamp: 1,
                children: a
            }),
            l
                ? (0, i.jsx)('div', {
                      className: x.partnerLabelContainer,
                      children: (0, i.jsx)(s.Text, {
                          variant: 'text-xs/medium',
                          color: 'text-normal',
                          children: N.Z.Messages.APP_DIRECTORY_PARTNER
                      })
                  })
                : null
        ]
    });
}
function S(e) {
    let { application: n } = e,
        t = a.useMemo(() => {
            var e;
            return (0, f.BQ)(n) && null !== (e = null == n ? void 0 : n.tags) && void 0 !== e ? e : [];
        }, [n]);
    return (0, f.ye)(n)
        ? (0, i.jsxs)('div', {
              className: x.tagsContainer,
              children: [
                  (0, i.jsx)(L, { application: n }),
                  t.map((e, n) =>
                      (0, i.jsx)(
                          'div',
                          {
                              className: x.tagContainer,
                              children: (0, i.jsx)(s.Text, {
                                  variant: 'text-sm/semibold',
                                  color: 'interactive-normal',
                                  children: e
                              })
                          },
                          e + n
                      )
                  )
              ]
          })
        : null;
}
function L(e) {
    var n;
    let { application: t } = e;
    if (!(0, f.ye)(t)) return null;
    let a = null !== (n = (0, f.BQ)(t) ? (t instanceof C.Z ? t.maxParticipants : t.max_participants) : 0) && void 0 !== n ? n : 0;
    return (0, i.jsxs)('div', {
        className: x.tagContainer,
        children: [
            (0, i.jsx)(s.GroupIcon, {
                size: 'xs',
                color: s.tokens.colors.INTERACTIVE_NORMAL
            }),
            (0, i.jsx)(s.Text, {
                variant: 'text-sm/semibold',
                color: 'interactive-normal',
                children: (0, d.lY)(a)
            })
        ]
    });
}
function b(e) {
    let { channel: n, application: t, sectionName: a, hasCommands: l, isDeveloperOfThisApp: o } = e,
        r = (0, m.Fs)(n, t.id);
    return (0, f.BQ)(t)
        ? null != r
            ? (0, i.jsx)('div', {
                  className: x.entrypointContainer,
                  children: (0, i.jsx)(E.Z, {
                      channel: n,
                      application: t,
                      sectionName: a,
                      primaryEntryPointCommand: r,
                      buttonSize: s.ButtonSizes.MAX
                  })
              })
            : o && !l && (0, f.ye)(t)
              ? (0, i.jsx)(s.HelpMessage, {
                    className: x.primaryEntryPointWarningMessage,
                    messageType: s.HelpMessageTypes.WARNING,
                    children: N.Z.Messages.APPLICATION_COMMAND_PRIMARY_ENTRY_POINT_MISSING_WARNING.format()
                })
              : null
        : null;
}
function R(e) {
    let { description: n } = e,
        [t, l] = a.useState(!0);
    a.useLayoutEffect(() => l(!1), []);
    let o = a.useMemo(() => (0, _.YP)(n), [n]),
        {
            ref: r,
            lineHeight: c,
            lineCount: d
        } = (function () {
            let e = a.useRef(null),
                [n, t] = a.useState(null),
                [i, l] = a.useState(null);
            return (
                a.useLayoutEffect(() => {
                    let n = e.current;
                    if (null === n || 0 === n.clientHeight) return;
                    let i = parseInt(getComputedStyle(n).lineHeight);
                    if (!isNaN(i)) t(i), l(Math.floor(n.clientHeight / i));
                }, []),
                {
                    ref: e,
                    lineHeight: n,
                    lineCount: i
                }
            );
        })(),
        u = a.useMemo(() => {
            if (null == c || null == d) return { key: 0 };
            let e = c * d;
            return {
                key: 1,
                minHeightOverride: Math.min(e, 1 * c),
                maxHeightOverride: e
            };
        }, [d, c]),
        {
            ref: m,
            isTransitioning: p,
            onTransitionEnd: C
        } = (0, A.Z)({
            isExpanded: t,
            ...u
        }),
        f = t || p;
    return (0, i.jsxs)('div', {
        className: x.descriptionContainer,
        children: [
            (0, i.jsx)('div', {
                ref: m,
                className: x.overflowHidden,
                onTransitionEnd: C,
                children: (0, i.jsx)(s.Text, {
                    ref: r,
                    className: v.markup,
                    variant: 'text-sm/medium',
                    lineClamp: f ? void 0 : 1,
                    style: { maxHeight: f ? void 0 : u.minHeightOverride },
                    children: o
                })
            }),
            null != d && d > 1
                ? (0, i.jsxs)(s.Clickable, {
                      className: x.expandableDescriptionClickable,
                      onClick: () => l((e) => !e),
                      children: [
                          (0, i.jsx)(s.Text, {
                              variant: 'text-sm/semibold',
                              color: 'text-brand',
                              children: f ? N.Z.Messages.APP_LAUNCHER_SHOW_LESS : N.Z.Messages.APP_LAUNCHER_SHOW_MORE
                          }),
                          f
                              ? (0, i.jsx)(s.ChevronSmallUpIcon, {
                                    size: 'sm',
                                    color: s.tokens.colors.TEXT_BRAND
                                })
                              : (0, i.jsx)(s.ChevronSmallDownIcon, {
                                    size: 'sm',
                                    color: s.tokens.colors.TEXT_BRAND
                                })
                      ]
                  })
                : null
        ]
    });
}
