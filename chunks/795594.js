n(653041), n(47120);
var i = n(200651),
    s = n(192379),
    r = n(120356),
    l = n.n(r),
    a = n(658722),
    o = n.n(a),
    c = n(243814),
    d = n(442837),
    u = n(921072),
    m = n(1561),
    h = n(481060),
    g = n(384275),
    p = n(230711),
    x = n(497321),
    S = n(468026),
    T = n(317381),
    C = n(513202),
    _ = n(979200),
    E = n(600164),
    f = n(713938),
    I = n(881998),
    N = n(246946),
    A = n(768581),
    b = n(585483),
    v = n(49012),
    j = n(709054),
    O = n(706454),
    R = n(210887),
    P = n(436267),
    D = n(149418),
    y = n(494620),
    B = n(981631),
    L = n(388032),
    Z = n(822352),
    F = n(113207);
let M = d.ZP.connectStores([R.Z], () => ({ theme: R.Z.theme }))(h.EmptyState);
function k(e) {
    let { application: t } = e;
    return (0, i.jsxs)('div', {
        className: Z.twoWayWarning,
        children: [
            (0, i.jsx)(h.CircleInformationIcon, {
                size: 'md',
                color: 'currentColor',
                className: Z.twoWayWarningIcon
            }),
            (0, i.jsx)(h.Text, {
                color: 'text-normal',
                variant: 'text-sm/medium',
                children: L.intl.format(L.t.jUhnwc, {
                    applicationName: t.name,
                    onConnectionPress: () => p.Z.setSection(B.jXE.SETTINGS_CONNECTIONS)
                })
            })
        ]
    });
}
let w = (e) => {
        let { disclosure: t } = e;
        return s.useMemo(() => {
            switch (t) {
                case u.u$.IP_LOCATION:
                    return (0, i.jsx)(h.GlobeEarthIcon, {
                        size: 'md',
                        color: 'currentColor',
                        className: Z.disclosureIcon
                    });
                case u.u$.DISPLAYS_ADVERTISEMENTS:
                    return (0, i.jsx)(h.EmbedIcon, { className: Z.disclosureIcon });
                default:
                    return (0, i.jsx)(h.CircleInformationIcon, { className: Z.disclosureIcon });
            }
        }, [t]);
    },
    U = (e) => {
        let { scopes: t, application: n, onDelete: s, disclosures: r, locale: a, id: o } = e,
            d = () => {
                let e = L.intl.formatToPlainString(L.t.QWGvxM, { applicationName: n.name });
                return (
                    (0, D.Z)(n) &&
                        (e = (0, i.jsxs)(i.Fragment, {
                            children: [
                                e,
                                (0, i.jsx)(y.Z, {
                                    look: y.z.WARNING,
                                    className: Z.infoBox,
                                    children: L.intl.string(L.t.LY35Z2)
                                })
                            ]
                        })),
                    (0, P.Z)(n.id) &&
                        (e = (0, i.jsxs)(i.Fragment, {
                            children: [
                                e,
                                (0, i.jsx)(y.Z, {
                                    className: Z.infoBox,
                                    children: L.intl.format(L.t.KRnERk, { applicationName: n.name })
                                })
                            ]
                        })),
                    (0, h.openModal)((t) =>
                        (0, i.jsx)(S.default, {
                            title: L.intl.string(L.t.DT39Aw),
                            body: e,
                            confirmText: L.intl.string(L.t.xUqheH),
                            cancelText: L.intl.string(L.t['ETE/oK']),
                            onConfirm: s,
                            ...t
                        })
                    )
                );
            },
            u = () => {
                null != n.terms_of_service_url &&
                    (0, v.q)({
                        href: n.terms_of_service_url,
                        shouldConfirm: !0
                    });
            },
            g = () => {
                null != n.privacy_policy_url &&
                    (0, v.q)({
                        href: n.privacy_policy_url,
                        shouldConfirm: !0
                    });
            },
            p = (0, P.O)(n.id);
        return (0, i.jsx)(h.Card, {
            className: l()(Z.authedApp, F.marginBottom8),
            outline: !0,
            children: (0, i.jsxs)(h.HeadingLevel, {
                component: (() => {
                    let e = A.ZP.getApplicationIconURL({
                            id: n.id,
                            icon: n.icon
                        }),
                        t =
                            null != e
                                ? (0, i.jsx)(E.Z.Child, {
                                      className: Z.appAvatar,
                                      grow: 0,
                                      children: (0, i.jsx)('img', {
                                          src: e,
                                          alt: ''
                                      })
                                  })
                                : null,
                        s = new Date(j.default.extractTimestamp(o)).toLocaleDateString(a);
                    return (0, i.jsxs)('div', {
                        className: l()(Z.header, F.marginBottom20),
                        children: [
                            t,
                            (0, i.jsxs)('div', {
                                className: Z.headerTextContainer,
                                children: [
                                    (0, i.jsx)(h.Heading, {
                                        variant: 'text-sm/semibold',
                                        className: Z.headerText,
                                        children: n.name
                                    }),
                                    (0, i.jsx)(h.Text, {
                                        variant: 'text-xs/normal',
                                        color: 'text-normal',
                                        children: L.intl.format(L.t.yOApCA, { date: s })
                                    })
                                ]
                            }),
                            (0, i.jsx)(h.Button, {
                                color: h.ButtonColors.RED,
                                look: h.ButtonLooks.OUTLINED,
                                size: h.ButtonSizes.SMALL,
                                onClick: d,
                                children: L.intl.string(L.t.xUqheH)
                            })
                        ]
                    });
                })(),
                children: [
                    (() => {
                        if (null != n.description && '' !== n.description)
                            return (0, i.jsx)(h.FormItem, {
                                faded: !0,
                                title: L.intl.string(L.t.GfRGra),
                                children: (0, i.jsx)(h.FormText, { children: n.description })
                            });
                    })(),
                    (() => {
                        if (null != n.terms_of_service_url || null != n.privacy_policy_url)
                            return (0, i.jsxs)('div', {
                                className: Z.tosPrivacy,
                                children: [
                                    null != n.terms_of_service_url
                                        ? (0, i.jsxs)(m.P, {
                                              tag: 'a',
                                              onClick: u,
                                              className: Z.tos,
                                              children: [
                                                  (0, i.jsx)(h.FormText, {
                                                      className: Z.link,
                                                      children: L.intl.string(L.t['lx+GeX'])
                                                  }),
                                                  (0, i.jsx)(h.LinkExternalSmallIcon, {
                                                      className: Z.externalLinkIcon,
                                                      color: 'var(--text-link)'
                                                  })
                                              ]
                                          })
                                        : null,
                                    null != n.privacy_policy_url
                                        ? (0, i.jsxs)('div', {
                                              className: Z.privacy,
                                              children: [
                                                  null != n.terms_of_service_url ? (0, i.jsx)('div', { className: Z.divider }) : null,
                                                  (0, i.jsxs)(m.P, {
                                                      tag: 'a',
                                                      onClick: g,
                                                      className: Z.privacy,
                                                      children: [
                                                          (0, i.jsx)(h.FormText, {
                                                              className: Z.link,
                                                              children: L.intl.string(L.t.okSwq6)
                                                          }),
                                                          (0, i.jsx)(h.LinkExternalSmallIcon, {
                                                              className: Z.externalLinkIcon,
                                                              color: 'var(--text-link)'
                                                          })
                                                      ]
                                                  })
                                              ]
                                          })
                                        : null
                                ]
                            });
                    })(),
                    (() => {
                        let e = [];
                        for (let n of t) e.push(...(0, f.CI)(n, t)), n === c.x.APPLICATIONS_COMMANDS && e.push(L.intl.string(L.t.Ls2XRk));
                        if (e.length > 0 || (null != r && r.length > 0))
                            return (0, i.jsx)(h.FormItem, {
                                faded: !0,
                                title: L.intl.string(L.t.xrmhRU),
                                className: F.marginTop20,
                                children: (0, i.jsxs)('ul', {
                                    children: [
                                        e.map((e, t) =>
                                            (0, i.jsxs)(
                                                'li',
                                                {
                                                    className: l()(Z.permission, F.marginTop8),
                                                    children: [(0, i.jsx)('i', { className: Z.permissionCheckmark }), (0, i.jsx)(h.FormText, { children: e })]
                                                },
                                                t
                                            )
                                        ),
                                        null == r
                                            ? void 0
                                            : r.map((t, n) => {
                                                  let s = (0, _.PM)(t);
                                                  return null != s
                                                      ? (0, i.jsxs)(
                                                            'li',
                                                            {
                                                                className: l()(Z.permission, F.marginTop8),
                                                                children: [(0, i.jsx)(w, { disclosure: t }), (0, i.jsx)(h.FormText, { children: s })]
                                                            },
                                                            n + e.length
                                                        )
                                                      : null;
                                              })
                                    ]
                                })
                            });
                    })(),
                    p && (0, i.jsx)(k, { application: n })
                ]
            })
        });
    };
t.Z = () => {
    let e = (0, d.e7)([N.Z], () => N.Z.hidePersonalInformation),
        t = (0, d.e7)([I.Z], () => I.Z.getApps()),
        r = (0, d.e7)([O.default], () => O.default.locale),
        l = (0, d.e7)([T.ZP], () => T.ZP.getSelfEmbeddedActivities());
    s.useEffect(() => {
        g.Z.fetch();
    }, []);
    let a = (e) => {
            let { id: t, application: n } = e;
            g.Z.delete(t), b.S.safeDispatch(B.CkL.HIDE_APP_LAUNCHER_BUTTON_APP_INSTALLED_EDUCATION, { applicationId: n.id });
            let i = l.get(n.id);
            null != i &&
                C.Z.leaveActivity({
                    channelId: i.channelId,
                    applicationId: n.id,
                    showFeedback: !1
                });
        },
        [c, u] = s.useState(''),
        m = (e) => {
            u(e);
        },
        p = () => {
            u('');
        },
        S = () =>
            (0, i.jsx)('div', {
                className: Z.searchContainer,
                children: (0, i.jsx)(h.SearchBar, {
                    size: h.SearchBar.Sizes.MEDIUM,
                    query: c,
                    onChange: m,
                    onClear: p,
                    placeholder: L.intl.string(L.t['5prvKS']),
                    'aria-label': L.intl.string(L.t['5prvKS'])
                })
            }),
        _ = (e, t) =>
            (0, i.jsxs)(M, {
                className: Z.__invalid_marginTop20,
                children: [
                    (0, i.jsx)(h.EmptyStateImage, {
                        darkSrc: n(701972),
                        lightSrc: n(818658),
                        width: 380,
                        height: 282
                    }),
                    (0, i.jsx)(h.EmptyStateText, {
                        note: e,
                        children: t
                    })
                ]
            }),
        E = s.useMemo(() => {
            let e = c.trim().toLowerCase();
            return '' === e || null == t ? t : t.length < 100 ? t.filter((t) => o()(e, t.application.name.toLowerCase())) : t.filter((t) => t.application.name.toLowerCase().includes(e));
        }, [t, c]);
    return e
        ? (0, i.jsx)(x.Z, {})
        : (0, i.jsx)(h.FormSection, {
              tag: h.FormTitleTags.H1,
              title: L.intl.string(L.t['f6kk+v']),
              children: (0, i.jsx)(h.HeadingLevel, {
                  component: (0, i.jsx)(h.FormNotice, {
                      className: F.marginBottom40,
                      type: h.CardTypes.PRIMARY,
                      title: L.intl.string(L.t.HU3RFx),
                      body: L.intl.string(L.t.Nu5Yi4)
                  }),
                  children:
                      null == t || null == E
                          ? (0, i.jsx)(h.Spinner, {
                                className: F.marginTop20,
                                type: h.Spinner.Type.SPINNING_CIRCLE
                            })
                          : 0 === t.length
                            ? _(L.intl.string(L.t.CpPv5u), L.intl.string(L.t['E+SM6e']))
                            : 0 === E.length
                              ? (0, i.jsxs)(i.Fragment, {
                                    children: [S(), _(null, L.intl.string(L.t.EVWFNj))]
                                })
                              : (0, i.jsxs)(i.Fragment, {
                                    children: [
                                        S(),
                                        E.sort((e, t) => Number(t.id) - Number(e.id)).map((e) =>
                                            (0, i.jsx)(
                                                U,
                                                {
                                                    locale: r,
                                                    onDelete: () => a(e),
                                                    ...e
                                                },
                                                e.id
                                            )
                                        )
                                    ]
                                })
              })
          });
};
