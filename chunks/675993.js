t.d(n, {
    Z: function () {
        return S;
    }
}),
    t(47120);
var i = t(200651),
    l = t(192379),
    a = t(120356),
    o = t.n(a),
    r = t(442837),
    s = t(481060),
    c = t(115130),
    d = t(147865),
    u = t(427996),
    m = t(706302),
    p = t(812236),
    h = t(404295),
    f = t(835473),
    C = t(70097),
    v = t(240991),
    x = t(973616),
    _ = t(783097),
    N = t(695676),
    g = t(520315),
    A = t(29380),
    b = t(783685),
    E = t(388032),
    I = t(131242),
    j = t(554034);
function S(e) {
    let { channel: n, application: t, videoUrl: a, imageCoverUrl: s, sectionName: d, hasCommands: m } = e,
        p = l.useMemo(() => {
            var e;
            return null !== (e = (0, _.jD)(t)) && void 0 !== e ? e : '';
        }, [t]),
        h = (0, r.e7)([c.Z], () => c.Z.inDevModeForApplication(t.id)),
        f = null != a,
        { isSlideReady: v } = (0, N.hH)(),
        [x, g] = l.useState(!1);
    return (
        l.useEffect(() => {
            v && g(!0);
        }, [v]),
        (0, i.jsxs)('div', {
            className: I.container,
            children: [
                (0, i.jsxs)('div', {
                    className: I.profileAndVideoContainer,
                    children: [
                        f
                            ? (0, i.jsxs)('div', {
                                  className: I.videoContainer,
                                  children: [
                                      x
                                          ? (0, i.jsx)(C.Z, {
                                                className: o()(I.videoCover, I.video),
                                                loop: !0,
                                                muted: !0,
                                                autoPlay: !0,
                                                src: a,
                                                poster: s
                                            })
                                          : null,
                                      (0, i.jsx)('img', {
                                          className: I.videoCover,
                                          src: s,
                                          'aria-label': E.intl.string(E.t.X4IxWF)
                                      })
                                  ]
                              })
                            : null,
                        (0, i.jsxs)('div', {
                            className: f ? I.overviewContainerWithVideo : I.overviewContainerNoVideo,
                            children: [
                                (0, i.jsx)(P, { application: t }),
                                (0, i.jsx)(T, { application: t }),
                                p.length > 0 ? (0, i.jsx)(M, { description: p }) : null,
                                h
                                    ? (0, i.jsx)('div', {
                                          className: I.developerShelfControlsContainer,
                                          children: (0, i.jsx)(u.W, {
                                              hideSearch: !0,
                                              className: I.developerShelfControls
                                          })
                                      })
                                    : null,
                                (0, i.jsx)(R, {
                                    channel: n,
                                    application: t,
                                    sectionName: d,
                                    isDeveloperOfThisApp: h,
                                    hasCommands: m
                                })
                            ]
                        })
                    ]
                }),
                (0, i.jsx)(y, { application: t })
            ]
        })
    );
}
function y(e) {
    let { application: n } = e,
        t = (0, _.Cb)(n),
        l = (0, _.Hu)(n);
    return t || l
        ? (0, i.jsxs)('div', {
              className: I.monetizationDisclosureContainerStyle,
              children: [
                  t
                      ? (0, i.jsxs)('div', {
                            className: I.monetizationDisclosureStyle,
                            children: [
                                (0, i.jsx)(s.ShopIcon, {
                                    size: 'sm',
                                    color: s.tokens.colors.INTERACTIVE_MUTED
                                }),
                                (0, i.jsx)(s.Text, {
                                    variant: 'text-sm/normal',
                                    color: 'text-secondary',
                                    children: E.intl.string(E.t['8z5B2d'])
                                })
                            ]
                        })
                      : null,
                  l
                      ? (0, i.jsxs)('div', {
                            className: I.monetizationDisclosureStyle,
                            children: [
                                (0, i.jsx)(s.BillIcon, {
                                    size: 'sm',
                                    color: s.tokens.colors.INTERACTIVE_MUTED
                                }),
                                (0, i.jsx)(s.Text, {
                                    variant: 'text-sm/normal',
                                    color: 'text-secondary',
                                    children: E.intl.string(E.t['5khEk5'])
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
        l = (0, _.BQ)(t) ? t.name : null !== (n = (0, _.$d)(t)) && void 0 !== n ? n : '',
        a = (0, _.vJ)(t);
    return (0, i.jsxs)('div', {
        className: I.titleContainer,
        children: [
            (0, i.jsx)(s.Heading, {
                variant: 'heading-xl/extrabold',
                lineClamp: 1,
                children: l
            }),
            a
                ? (0, i.jsx)('div', {
                      className: I.partnerLabelContainer,
                      children: (0, i.jsx)(s.Text, {
                          variant: 'text-xs/medium',
                          color: 'text-normal',
                          children: E.intl.string(E.t.LO4f0N)
                      })
                  })
                : null
        ]
    });
}
function T(e) {
    let { application: n } = e,
        t = l.useMemo(() => {
            var e;
            return (0, _.BQ)(n) && null !== (e = null == n ? void 0 : n.tags) && void 0 !== e ? e : [];
        }, [n]);
    return (0, _.ye)(n)
        ? (0, i.jsxs)('div', {
              className: I.tagsContainer,
              children: [
                  (0, i.jsx)(L, { application: n }),
                  t.map((e, n) =>
                      (0, i.jsx)(
                          'div',
                          {
                              className: I.tagContainer,
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
    if (!(0, _.ye)(t)) return null;
    let l = null !== (n = (0, _.BQ)(t) ? (t instanceof x.Z ? t.maxParticipants : t.max_participants) : 0) && void 0 !== n ? n : 0;
    return (0, i.jsxs)('div', {
        className: I.tagContainer,
        children: [
            (0, i.jsx)(s.GroupIcon, {
                size: 'xs',
                color: s.tokens.colors.INTERACTIVE_NORMAL
            }),
            (0, i.jsx)(s.Text, {
                variant: 'text-sm/semibold',
                color: 'interactive-normal',
                children: (0, d.lY)(l)
            })
        ]
    });
}
function R(e) {
    var n;
    let { channel: t, application: l, sectionName: a, hasCommands: o, isDeveloperOfThisApp: r } = e,
        c = (0, p.Fs)(t, l.id),
        d = (0, f.q)(l.id),
        u = null == d ? void 0 : null === (n = d.bot) || void 0 === n ? void 0 : n.id,
        C = (0, m.Z)({
            channel: t,
            applicationId: l.id,
            botUserId: u
        }),
        v = (0, h.bG)('PrimaryEntryPointArea');
    if (!(0, _.BQ)(l) || !(0, _.ye)(l)) return null;
    let x = s.ButtonSizes.MAX;
    return null == c || (v && null == u)
        ? r && !o && (0, _.ye)(l)
            ? (0, i.jsx)(s.HelpMessage, {
                  className: I.primaryEntryPointWarningMessage,
                  messageType: s.HelpMessageTypes.WARNING,
                  children: E.intl.format(E.t['s/3hjI'], {})
              })
            : null
        : (0, i.jsxs)('div', {
              className: I.entrypointContainer,
              children: [
                  (0, i.jsx)('div', {
                      className: I.entryPointContainerFlexChild,
                      children: (0, i.jsx)(A.Z, {
                          channel: t,
                          application: l,
                          sectionName: a,
                          primaryEntryPointCommand: c,
                          buttonSize: x
                      })
                  }),
                  C && null != u
                      ? (0, i.jsx)('div', {
                            className: I.entryPointContainerFlexChild,
                            children: (0, i.jsx)(b.Z, {
                                botUserId: u,
                                applicationId: l.id,
                                buttonSize: x
                            })
                        })
                      : null
              ]
          });
}
function M(e) {
    let { description: n } = e,
        [t, a] = l.useState(!0);
    l.useLayoutEffect(() => a(!1), []);
    let o = l.useMemo(() => (0, v.parseBioReact)(n), [n]),
        {
            ref: r,
            lineHeight: c,
            lineCount: d
        } = (function () {
            let e = l.useRef(null),
                [n, t] = l.useState(null),
                [i, a] = l.useState(null);
            return (
                l.useLayoutEffect(() => {
                    let n = e.current;
                    if (null === n || 0 === n.clientHeight) return;
                    let i = parseInt(getComputedStyle(n).lineHeight);
                    if (!isNaN(i)) t(i), a(Math.floor(n.clientHeight / i));
                }, []),
                {
                    ref: e,
                    lineHeight: n,
                    lineCount: i
                }
            );
        })(),
        u = l.useMemo(() => {
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
            onTransitionEnd: h
        } = (0, g.Z)({
            isExpanded: t,
            ...u
        }),
        f = t || p;
    return (0, i.jsxs)('div', {
        className: I.descriptionContainer,
        children: [
            (0, i.jsx)('div', {
                ref: m,
                className: I.overflowHidden,
                onTransitionEnd: h,
                children: (0, i.jsx)(s.Text, {
                    ref: r,
                    className: j.markup,
                    variant: 'text-sm/medium',
                    lineClamp: f ? void 0 : 1,
                    style: { maxHeight: f ? void 0 : u.minHeightOverride },
                    children: o
                })
            }),
            null != d && d > 1
                ? (0, i.jsxs)(s.Clickable, {
                      className: I.expandableDescriptionClickable,
                      onClick: () => a((e) => !e),
                      children: [
                          (0, i.jsx)(s.Text, {
                              variant: 'text-sm/semibold',
                              color: 'text-brand',
                              children: f ? E.intl.string(E.t.u4YJ8v) : E.intl.string(E.t['N/tajI'])
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
