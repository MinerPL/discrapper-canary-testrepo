t(653041), t(47120);
var n = t(735250),
    a = t(470079),
    i = t(120356),
    r = t.n(i),
    o = t(658722),
    l = t.n(o),
    c = t(243814),
    d = t(442837),
    _ = t(921072),
    u = t(1561),
    E = t(481060),
    T = t(384275),
    S = t(230711),
    I = t(497321),
    N = t(468026),
    m = t(317381),
    C = t(513202),
    A = t(979200),
    g = t(600164),
    h = t(713938),
    O = t(881998),
    p = t(246946),
    R = t(768581),
    x = t(49012),
    f = t(210887),
    M = t(436267),
    D = t(149418),
    P = t(494620),
    L = t(981631),
    b = t(689938),
    Z = t(102507),
    v = t(224499);
let j = d.ZP.connectStores([f.Z], () => ({ theme: f.Z.theme }))(E.EmptyState);
function B(e) {
    let { application: s } = e;
    return (0, n.jsxs)('div', {
        className: Z.twoWayWarning,
        children: [
            (0, n.jsx)(E.CircleInformationIcon, {
                size: 'md',
                color: 'currentColor',
                className: Z.twoWayWarningIcon
            }),
            (0, n.jsx)(E.Text, {
                color: 'text-normal',
                variant: 'text-sm/medium',
                children: b.Z.Messages.AUTHORIZED_APP_IS_CONNECTED_ACCOUNT.format({
                    applicationName: s.name,
                    onConnectionPress: () => S.Z.setSection(L.jXE.SETTINGS_CONNECTIONS)
                })
            })
        ]
    });
}
let U = (e) => {
        let { disclosure: s } = e;
        return a.useMemo(() => {
            switch (s) {
                case _.u$.IP_LOCATION:
                    return (0, n.jsx)(E.GlobeEarthIcon, {
                        size: 'md',
                        color: 'currentColor',
                        className: Z.disclosureIcon
                    });
                case _.u$.DISPLAYS_ADVERTISEMENTS:
                    return (0, n.jsx)(E.EmbedIcon, { className: Z.disclosureIcon });
                default:
                    return (0, n.jsx)(E.CircleInformationIcon, { className: Z.disclosureIcon });
            }
        }, [s]);
    },
    G = (e) => {
        let { scopes: s, application: t, onDelete: a, disclosures: i } = e,
            o = () => {
                let e = b.Z.Messages.DELETE_APP_CONFIRM_MSG_V2.format({ applicationName: t.name });
                return (
                    (0, D.Z)(t) &&
                        (e = (0, n.jsxs)(n.Fragment, {
                            children: [
                                e,
                                (0, n.jsx)(P.Z, {
                                    look: P.z.WARNING,
                                    className: Z.infoBox,
                                    children: b.Z.Messages.SOCIAL_LAYER_APPLICATION_UNLINK_WARNING
                                })
                            ]
                        })),
                    (0, M.Z)(t.id) &&
                        (e = (0, n.jsxs)(n.Fragment, {
                            children: [
                                e,
                                (0, n.jsx)(P.Z, {
                                    className: Z.infoBox,
                                    children: b.Z.Messages.AUTHORIZED_APP_IS_CONNECTED_ACCOUNT_DISCONNECT_WARNING.format({ applicationName: t.name })
                                })
                            ]
                        })),
                    (0, E.openModal)((s) =>
                        (0, n.jsx)(N.default, {
                            title: b.Z.Messages.DEAUTHORIZE_APP,
                            body: e,
                            confirmText: b.Z.Messages.DEAUTHORIZE,
                            cancelText: b.Z.Messages.CANCEL,
                            onConfirm: a,
                            ...s
                        })
                    )
                );
            },
            l = () => {
                null != t.terms_of_service_url &&
                    (0, x.q)({
                        href: t.terms_of_service_url,
                        shouldConfirm: !0
                    });
            },
            d = () => {
                null != t.privacy_policy_url &&
                    (0, x.q)({
                        href: t.privacy_policy_url,
                        shouldConfirm: !0
                    });
            },
            _ = (0, M.O)(t.id);
        return (0, n.jsx)(E.Card, {
            className: r()(Z.authedApp, v.marginBottom8),
            outline: !0,
            children: (0, n.jsxs)(E.HeadingLevel, {
                component: (() => {
                    let e = R.ZP.getApplicationIconURL({
                            id: t.id,
                            icon: t.icon
                        }),
                        s =
                            null != e
                                ? (0, n.jsx)(g.Z.Child, {
                                      className: Z.appAvatar,
                                      grow: 0,
                                      children: (0, n.jsx)('img', {
                                          src: e,
                                          alt: ''
                                      })
                                  })
                                : null;
                    return (0, n.jsxs)('div', {
                        className: r()(Z.header, v.marginBottom20),
                        children: [
                            s,
                            (0, n.jsx)(E.Heading, {
                                variant: 'text-sm/semibold',
                                className: Z.headerText,
                                children: t.name
                            }),
                            (0, n.jsx)(E.Button, {
                                color: E.ButtonColors.RED,
                                look: E.ButtonLooks.OUTLINED,
                                size: E.ButtonSizes.SMALL,
                                onClick: o,
                                children: b.Z.Messages.DEAUTHORIZE
                            })
                        ]
                    });
                })(),
                children: [
                    (() => {
                        if (null != t.description && '' !== t.description)
                            return (0, n.jsx)(E.FormItem, {
                                faded: !0,
                                title: b.Z.Messages.ABOUT_THIS_APP,
                                children: (0, n.jsx)(E.FormText, { children: t.description })
                            });
                    })(),
                    (() => {
                        if (null != t.terms_of_service_url || null != t.privacy_policy_url)
                            return (0, n.jsxs)('div', {
                                className: Z.tosPrivacy,
                                children: [
                                    null != t.terms_of_service_url
                                        ? (0, n.jsxs)(u.P, {
                                              tag: 'a',
                                              onClick: l,
                                              className: Z.tos,
                                              children: [
                                                  (0, n.jsx)(E.FormText, {
                                                      className: Z.link,
                                                      children: b.Z.Messages.AUTHORIZED_APPS_TERMS_OF_SERVICE
                                                  }),
                                                  (0, n.jsx)(E.LinkExternalSmallIcon, {
                                                      className: Z.externalLinkIcon,
                                                      color: 'var(--text-link)'
                                                  })
                                              ]
                                          })
                                        : null,
                                    null != t.privacy_policy_url
                                        ? (0, n.jsxs)('div', {
                                              className: Z.privacy,
                                              children: [
                                                  null != t.terms_of_service_url ? (0, n.jsx)('div', { className: Z.divider }) : null,
                                                  (0, n.jsxs)(u.P, {
                                                      tag: 'a',
                                                      onClick: d,
                                                      className: Z.privacy,
                                                      children: [
                                                          (0, n.jsx)(E.FormText, {
                                                              className: Z.link,
                                                              children: b.Z.Messages.AUTHORIZED_APPS_PRIVACY_POLICY
                                                          }),
                                                          (0, n.jsx)(E.LinkExternalSmallIcon, {
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
                        for (let t of s) e.push(...(0, h.CI)(t, s)), t === c.x.APPLICATIONS_COMMANDS && e.push(b.Z.Messages.SCOPE_DM_YOU);
                        if (e.length > 0 || (null != i && i.length > 0))
                            return (0, n.jsx)(E.FormItem, {
                                faded: !0,
                                title: b.Z.Messages.PERMISSIONS,
                                className: v.marginTop20,
                                children: (0, n.jsxs)('ul', {
                                    children: [
                                        e.map((e, s) =>
                                            (0, n.jsxs)(
                                                'li',
                                                {
                                                    className: r()(Z.permission, v.marginTop8),
                                                    children: [(0, n.jsx)('i', { className: Z.permissionCheckmark }), (0, n.jsx)(E.FormText, { children: e })]
                                                },
                                                s
                                            )
                                        ),
                                        null == i
                                            ? void 0
                                            : i.map((s, t) => {
                                                  let a = (0, A.PM)(s);
                                                  return null != a
                                                      ? (0, n.jsxs)(
                                                            'li',
                                                            {
                                                                className: r()(Z.permission, v.marginTop8),
                                                                children: [(0, n.jsx)(U, { disclosure: s }), (0, n.jsx)(E.FormText, { children: a })]
                                                            },
                                                            t + e.length
                                                        )
                                                      : null;
                                              })
                                    ]
                                })
                            });
                    })(),
                    _ && (0, n.jsx)(B, { application: t })
                ]
            })
        });
    };
s.Z = () => {
    let e = (0, d.e7)([p.Z], () => p.Z.hidePersonalInformation),
        s = (0, d.e7)([O.Z], () => O.Z.getApps()),
        i = (0, d.e7)([m.ZP], () => m.ZP.getSelfEmbeddedActivities());
    a.useEffect(() => {
        T.Z.fetch();
    }, []);
    let r = (e) => {
            let { id: s, application: t } = e;
            T.Z.delete(s);
            let n = i.get(t.id);
            null != n &&
                C.Z.leaveActivity({
                    channelId: n.channelId,
                    applicationId: t.id,
                    showFeedback: !1
                });
        },
        [o, c] = a.useState(''),
        _ = (e) => {
            c(e);
        },
        u = () => {
            c('');
        },
        S = () =>
            (0, n.jsx)('div', {
                className: Z.searchContainer,
                children: (0, n.jsx)(E.SearchBar, {
                    size: E.SearchBar.Sizes.MEDIUM,
                    query: o,
                    onChange: _,
                    onClear: u,
                    placeholder: b.Z.Messages.INTEGRATIONS_SEARCH,
                    'aria-label': b.Z.Messages.INTEGRATIONS_SEARCH
                })
            }),
        N = (e, s) =>
            (0, n.jsxs)(j, {
                className: Z.__invalid_marginTop20,
                children: [
                    (0, n.jsx)(E.EmptyStateImage, {
                        darkSrc: t(701972),
                        lightSrc: t(818658),
                        width: 380,
                        height: 282
                    }),
                    (0, n.jsx)(E.EmptyStateText, {
                        note: e,
                        children: s
                    })
                ]
            }),
        A = a.useMemo(() => {
            let e = o.trim().toLowerCase();
            return '' === e || null == s ? s : s.length < 100 ? s.filter((s) => l()(e, s.application.name.toLowerCase())) : s.filter((s) => s.application.name.toLowerCase().includes(e));
        }, [s, o]);
    return e
        ? (0, n.jsx)(I.Z, {})
        : (0, n.jsx)(E.FormSection, {
              tag: E.FormTitleTags.H1,
              title: b.Z.Messages.AUTHORIZED_APPS,
              children: (0, n.jsx)(E.HeadingLevel, {
                  component: (0, n.jsx)(E.FormNotice, {
                      className: v.marginBottom40,
                      type: E.CardTypes.PRIMARY,
                      title: b.Z.Messages.APPLICATIONS_AND_CONNECTIONS,
                      body: b.Z.Messages.APPLICATIONS_AND_CONNECTIONS_BODY
                  }),
                  children:
                      null == s || null == A
                          ? (0, n.jsx)(E.Spinner, {
                                className: v.marginTop20,
                                type: E.Spinner.Type.SPINNING_CIRCLE
                            })
                          : 0 === s.length
                            ? N(b.Z.Messages.NO_AUTHORIZED_APPS_NOTE, b.Z.Messages.NO_AUTHORIZED_APPS)
                            : 0 === A.length
                              ? (0, n.jsxs)(n.Fragment, {
                                    children: [S(), N(null, b.Z.Messages.INTEGRATIONS_SEARCH_NO_MATCH)]
                                })
                              : (0, n.jsxs)(n.Fragment, {
                                    children: [
                                        S(),
                                        A.sort((e, s) => e.application.name.localeCompare(s.application.name)).map((e) =>
                                            (0, n.jsx)(
                                                G,
                                                {
                                                    onDelete: () => r(e),
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
