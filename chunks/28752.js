n.d(t, {
    Z: function () {
        return h;
    }
}),
    n(47120);
var r = n(735250),
    i = n(470079),
    a = n(373793),
    s = n(481060),
    o = n(783097),
    l = n(753972),
    u = n(520315),
    c = n(688465),
    d = n(689938),
    _ = n(517066),
    E = n(554034),
    f = n(413097);
function h(e) {
    let { application: t, onSelect: n, onClose: u } = e,
        { iconURL: E } = i.useMemo(
            () =>
                (0, o.sl)(t, {
                    fakeAppIconURL: f,
                    size: 84
                }),
            [t]
        ),
        h = i.useMemo(
            () =>
                [
                    {
                        type: a.Y.USER_INSTALL,
                        icon: s.UserPlusIcon,
                        title: d.Z.Messages.OAUTH2_INTEGRATION_SELECT_USER,
                        subtitle: d.Z.Messages.OAUTH2_INTEGRATION_SELECT_USER_SUBTITLE,
                        beta: !1
                    },
                    {
                        type: a.Y.GUILD_INSTALL,
                        icon: s.ServerIcon,
                        title: d.Z.Messages.OAUTH2_INTEGRATION_SELECT_GUILD,
                        subtitle: d.Z.Messages.OAUTH2_INTEGRATION_SELECT_GUILD_SUBTITLE,
                        beta: !1
                    }
                ].filter((e) => {
                    var n, r;
                    return (null === (r = t.integrationTypesConfig) || void 0 === r ? void 0 : null === (n = r[e.type]) || void 0 === n ? void 0 : n.oauth2InstallParams) != null;
                }),
            [t.integrationTypesConfig]
        );
    return (0, r.jsxs)('div', {
        className: _.container,
        children: [
            (0, r.jsxs)('div', {
                className: _.header,
                children: [
                    null != u
                        ? (0, r.jsx)(s.Clickable, {
                              onClick: u,
                              className: _.closeButton,
                              'aria-label': d.Z.Messages.CLOSE,
                              children: (0, r.jsx)(s.XSmallIcon, {
                                  size: 'md',
                                  color: 'currentColor'
                              })
                          })
                        : null,
                    (0, r.jsx)(l.Z, {
                        src: E,
                        className: _.appIcon,
                        rendersPlaceholder: !0
                    }),
                    (0, r.jsx)(I, { application: t }),
                    (0, r.jsx)(p, { application: t })
                ]
            }),
            (0, r.jsx)('ul', {
                className: _.rows,
                children: h.map((e) =>
                    (0, r.jsxs)(
                        s.Clickable,
                        {
                            tag: 'li',
                            className: _.row,
                            onClick: () => n(e.type),
                            children: [
                                (0, r.jsx)(e.icon, {
                                    size: 'md',
                                    color: 'currentColor',
                                    className: _.leftIcon
                                }),
                                (0, r.jsxs)('div', {
                                    className: _.rowInner,
                                    children: [
                                        (0, r.jsxs)('div', {
                                            className: _.rowDetails,
                                            children: [
                                                (0, r.jsx)(s.Text, {
                                                    variant: 'text-md/medium',
                                                    color: 'interactive-active',
                                                    children: e.title
                                                }),
                                                (0, r.jsx)(s.Text, {
                                                    variant: 'text-xs/medium',
                                                    color: 'text-muted',
                                                    children: e.subtitle
                                                })
                                            ]
                                        }),
                                        e.beta && (0, r.jsx)(c.Z, {}),
                                        (0, r.jsx)(s.ChevronSmallRightIcon, {
                                            size: 'md',
                                            color: 'currentColor',
                                            className: _.rightIcon
                                        })
                                    ]
                                })
                            ]
                        },
                        e.type
                    )
                )
            })
        ]
    });
}
function p(e) {
    let { application: t } = e,
        n = t.description;
    return null == n || 0 === n.length
        ? null
        : (0, r.jsx)('div', {
              className: _.detailsContainer,
              children: (0, r.jsx)('div', {
                  className: _.overviewContainerNoVideo,
                  children: null != n && n.length > 0 ? (0, r.jsx)(m, { description: n }) : null
              })
          });
}
function I(e) {
    let { application: t } = e,
        n = t.name,
        i = (0, o.vJ)(t);
    return (0, r.jsxs)('div', {
        className: _.titleContainer,
        children: [
            (0, r.jsx)(s.Heading, {
                variant: 'heading-xl/extrabold',
                lineClamp: 1,
                children: n
            }),
            i
                ? (0, r.jsx)('div', {
                      className: _.partnerLabelContainer,
                      children: (0, r.jsx)(s.Text, {
                          variant: 'text-xs/medium',
                          color: 'text-normal',
                          children: d.Z.Messages.APP_DIRECTORY_PARTNER
                      })
                  })
                : null
        ]
    });
}
function m(e) {
    let { description: t } = e,
        [a, o] = i.useState(!0);
    i.useLayoutEffect(() => o(!1), []);
    let l = i.useMemo(() => {
            let { parseBioReact: e } = n(240991);
            return e(t);
        }, [t]),
        {
            ref: c,
            lineHeight: f,
            lineCount: h
        } = (function () {
            let e = i.useRef(null),
                [t, n] = i.useState(null),
                [r, a] = i.useState(null);
            return (
                i.useLayoutEffect(() => {
                    let t = e.current;
                    if (null === t || 0 === t.clientHeight) return;
                    let r = parseInt(getComputedStyle(t).lineHeight);
                    if (!isNaN(r)) n(r), a(Math.floor(t.clientHeight / r));
                }, []),
                {
                    ref: e,
                    lineHeight: t,
                    lineCount: r
                }
            );
        })(),
        p = i.useMemo(() => {
            if (null == f || null == h) return { key: 0 };
            let e = f * h;
            return {
                key: 1,
                minHeightOverride: Math.min(e, 3 * f),
                maxHeightOverride: e
            };
        }, [h, f]),
        {
            ref: I,
            isTransitioning: m,
            onTransitionEnd: T
        } = (0, u.Z)({
            isExpanded: a,
            ...p
        }),
        S = a || m;
    return (0, r.jsxs)('div', {
        className: _.descriptionContainer,
        children: [
            (0, r.jsx)('div', {
                ref: I,
                className: _.overflowHidden,
                onTransitionEnd: T,
                children: (0, r.jsx)(s.Text, {
                    ref: c,
                    className: E.markup,
                    variant: 'text-sm/medium',
                    lineClamp: S ? void 0 : 3,
                    style: { maxHeight: S ? void 0 : p.minHeightOverride },
                    children: l
                })
            }),
            null != h && h > 3
                ? (0, r.jsxs)(s.Clickable, {
                      className: _.expandableDescriptionClickable,
                      onClick: () => o((e) => !e),
                      children: [
                          (0, r.jsx)(s.Text, {
                              variant: 'text-sm/semibold',
                              color: 'text-brand',
                              children: S ? d.Z.Messages.APP_LAUNCHER_SHOW_LESS : d.Z.Messages.APP_LAUNCHER_SHOW_MORE
                          }),
                          S
                              ? (0, r.jsx)(s.ChevronSmallUpIcon, {
                                    size: 'sm',
                                    color: s.tokens.colors.TEXT_BRAND
                                })
                              : (0, r.jsx)(s.ChevronSmallDownIcon, {
                                    size: 'sm',
                                    color: s.tokens.colors.TEXT_BRAND
                                })
                      ]
                  })
                : null
        ]
    });
}
