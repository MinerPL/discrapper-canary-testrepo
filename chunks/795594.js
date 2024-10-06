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
    A = t(317381),
    C = t(513202),
    m = t(979200),
    g = t(600164),
    h = t(713938),
    O = t(881998),
    p = t(246946),
    R = t(768581),
    x = t(585483),
    M = t(49012),
    f = t(709054),
    D = t(706454),
    L = t(210887),
    P = t(436267),
    b = t(149418),
    Z = t(494620),
    v = t(981631),
    j = t(689938),
    B = t(822352),
    U = t(113207);
let G = d.ZP.connectStores([L.Z], () => ({ theme: L.Z.theme }))(E.EmptyState);
function F(e) {
    let { application: s } = e;
    return (0, n.jsxs)('div', {
        className: B.twoWayWarning,
        children: [
            (0, n.jsx)(E.CircleInformationIcon, {
                size: 'md',
                color: 'currentColor',
                className: B.twoWayWarningIcon
            }),
            (0, n.jsx)(E.Text, {
                color: 'text-normal',
                variant: 'text-sm/medium',
                children: j.Z.Messages.AUTHORIZED_APP_IS_CONNECTED_ACCOUNT.format({
                    applicationName: s.name,
                    onConnectionPress: () => S.Z.setSection(v.jXE.SETTINGS_CONNECTIONS)
                })
            })
        ]
    });
}
let y = (e) => {
        let { disclosure: s } = e;
        return a.useMemo(() => {
            switch (s) {
                case _.u$.IP_LOCATION:
                    return (0, n.jsx)(E.GlobeEarthIcon, {
                        size: 'md',
                        color: 'currentColor',
                        className: B.disclosureIcon
                    });
                case _.u$.DISPLAYS_ADVERTISEMENTS:
                    return (0, n.jsx)(E.EmbedIcon, { className: B.disclosureIcon });
                default:
                    return (0, n.jsx)(E.CircleInformationIcon, { className: B.disclosureIcon });
            }
        }, [s]);
    },
    V = (e) => {
        let { scopes: s, application: t, onDelete: a, disclosures: i, locale: o, id: l } = e,
            d = () => {
                let e = j.Z.Messages.DELETE_APP_CONFIRM_MSG_V2.format({ applicationName: t.name });
                return (
                    (0, b.Z)(t) &&
                        (e = (0, n.jsxs)(n.Fragment, {
                            children: [
                                e,
                                (0, n.jsx)(Z.Z, {
                                    look: Z.z.WARNING,
                                    className: B.infoBox,
                                    children: j.Z.Messages.SOCIAL_LAYER_APPLICATION_UNLINK_WARNING
                                })
                            ]
                        })),
                    (0, P.Z)(t.id) &&
                        (e = (0, n.jsxs)(n.Fragment, {
                            children: [
                                e,
                                (0, n.jsx)(Z.Z, {
                                    className: B.infoBox,
                                    children: j.Z.Messages.AUTHORIZED_APP_IS_CONNECTED_ACCOUNT_DISCONNECT_WARNING.format({ applicationName: t.name })
                                })
                            ]
                        })),
                    (0, E.openModal)((s) =>
                        (0, n.jsx)(N.default, {
                            title: j.Z.Messages.DEAUTHORIZE_APP,
                            body: e,
                            confirmText: j.Z.Messages.DEAUTHORIZE,
                            cancelText: j.Z.Messages.CANCEL,
                            onConfirm: a,
                            ...s
                        })
                    )
                );
            },
            _ = () => {
                null != t.terms_of_service_url &&
                    (0, M.q)({
                        href: t.terms_of_service_url,
                        shouldConfirm: !0
                    });
            },
            T = () => {
                null != t.privacy_policy_url &&
                    (0, M.q)({
                        href: t.privacy_policy_url,
                        shouldConfirm: !0
                    });
            },
            S = (0, P.O)(t.id);
        return (0, n.jsx)(E.Card, {
            className: r()(B.authedApp, U.marginBottom8),
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
                                      className: B.appAvatar,
                                      grow: 0,
                                      children: (0, n.jsx)('img', {
                                          src: e,
                                          alt: ''
                                      })
                                  })
                                : null,
                        a = new Date(f.default.extractTimestamp(l)).toLocaleDateString(o);
                    return (0, n.jsxs)('div', {
                        className: r()(B.header, U.marginBottom20),
                        children: [
                            s,
                            (0, n.jsxs)('div', {
                                className: B.headerTextContainer,
                                children: [
                                    (0, n.jsx)(E.Heading, {
                                        variant: 'text-sm/semibold',
                                        className: B.headerText,
                                        children: t.name
                                    }),
                                    (0, n.jsx)(E.Text, {
                                        variant: 'text-xs/normal',
                                        color: 'text-normal',
                                        children: j.Z.Messages.AUTHORIZED_APPS_AUTHORIZED_ON.format({ date: a })
                                    })
                                ]
                            }),
                            (0, n.jsx)(E.Button, {
                                color: E.ButtonColors.RED,
                                look: E.ButtonLooks.OUTLINED,
                                size: E.ButtonSizes.SMALL,
                                onClick: d,
                                children: j.Z.Messages.DEAUTHORIZE
                            })
                        ]
                    });
                })(),
                children: [
                    (() => {
                        if (null != t.description && '' !== t.description)
                            return (0, n.jsx)(E.FormItem, {
                                faded: !0,
                                title: j.Z.Messages.ABOUT_THIS_APP,
                                children: (0, n.jsx)(E.FormText, { children: t.description })
                            });
                    })(),
                    (() => {
                        if (null != t.terms_of_service_url || null != t.privacy_policy_url)
                            return (0, n.jsxs)('div', {
                                className: B.tosPrivacy,
                                children: [
                                    null != t.terms_of_service_url
                                        ? (0, n.jsxs)(u.P, {
                                              tag: 'a',
                                              onClick: _,
                                              className: B.tos,
                                              children: [
                                                  (0, n.jsx)(E.FormText, {
                                                      className: B.link,
                                                      children: j.Z.Messages.AUTHORIZED_APPS_TERMS_OF_SERVICE
                                                  }),
                                                  (0, n.jsx)(E.LinkExternalSmallIcon, {
                                                      className: B.externalLinkIcon,
                                                      color: 'var(--text-link)'
                                                  })
                                              ]
                                          })
                                        : null,
                                    null != t.privacy_policy_url
                                        ? (0, n.jsxs)('div', {
                                              className: B.privacy,
                                              children: [
                                                  null != t.terms_of_service_url ? (0, n.jsx)('div', { className: B.divider }) : null,
                                                  (0, n.jsxs)(u.P, {
                                                      tag: 'a',
                                                      onClick: T,
                                                      className: B.privacy,
                                                      children: [
                                                          (0, n.jsx)(E.FormText, {
                                                              className: B.link,
                                                              children: j.Z.Messages.AUTHORIZED_APPS_PRIVACY_POLICY
                                                          }),
                                                          (0, n.jsx)(E.LinkExternalSmallIcon, {
                                                              className: B.externalLinkIcon,
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
                        for (let t of s) e.push(...(0, h.CI)(t, s)), t === c.x.APPLICATIONS_COMMANDS && e.push(j.Z.Messages.SCOPE_DM_YOU);
                        if (e.length > 0 || (null != i && i.length > 0))
                            return (0, n.jsx)(E.FormItem, {
                                faded: !0,
                                title: j.Z.Messages.PERMISSIONS,
                                className: U.marginTop20,
                                children: (0, n.jsxs)('ul', {
                                    children: [
                                        e.map((e, s) =>
                                            (0, n.jsxs)(
                                                'li',
                                                {
                                                    className: r()(B.permission, U.marginTop8),
                                                    children: [(0, n.jsx)('i', { className: B.permissionCheckmark }), (0, n.jsx)(E.FormText, { children: e })]
                                                },
                                                s
                                            )
                                        ),
                                        null == i
                                            ? void 0
                                            : i.map((s, t) => {
                                                  let a = (0, m.PM)(s);
                                                  return null != a
                                                      ? (0, n.jsxs)(
                                                            'li',
                                                            {
                                                                className: r()(B.permission, U.marginTop8),
                                                                children: [(0, n.jsx)(y, { disclosure: s }), (0, n.jsx)(E.FormText, { children: a })]
                                                            },
                                                            t + e.length
                                                        )
                                                      : null;
                                              })
                                    ]
                                })
                            });
                    })(),
                    S && (0, n.jsx)(F, { application: t })
                ]
            })
        });
    };
s.Z = () => {
    let e = (0, d.e7)([p.Z], () => p.Z.hidePersonalInformation),
        s = (0, d.e7)([O.Z], () => O.Z.getApps()),
        i = (0, d.e7)([D.default], () => D.default.locale),
        r = (0, d.e7)([A.ZP], () => A.ZP.getSelfEmbeddedActivities());
    a.useEffect(() => {
        T.Z.fetch();
    }, []);
    let o = (e) => {
            let { id: s, application: t } = e;
            T.Z.delete(s), x.S.safeDispatch(v.CkL.HIDE_APP_LAUNCHER_BUTTON_APP_INSTALLED_EDUCATION, { applicationId: t.id });
            let n = r.get(t.id);
            null != n &&
                C.Z.leaveActivity({
                    channelId: n.channelId,
                    applicationId: t.id,
                    showFeedback: !1
                });
        },
        [c, _] = a.useState(''),
        u = (e) => {
            _(e);
        },
        S = () => {
            _('');
        },
        N = () =>
            (0, n.jsx)('div', {
                className: B.searchContainer,
                children: (0, n.jsx)(E.SearchBar, {
                    size: E.SearchBar.Sizes.MEDIUM,
                    query: c,
                    onChange: u,
                    onClear: S,
                    placeholder: j.Z.Messages.INTEGRATIONS_SEARCH,
                    'aria-label': j.Z.Messages.INTEGRATIONS_SEARCH
                })
            }),
        m = (e, s) =>
            (0, n.jsxs)(G, {
                className: B.__invalid_marginTop20,
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
        g = a.useMemo(() => {
            let e = c.trim().toLowerCase();
            return '' === e || null == s ? s : s.length < 100 ? s.filter((s) => l()(e, s.application.name.toLowerCase())) : s.filter((s) => s.application.name.toLowerCase().includes(e));
        }, [s, c]);
    return e
        ? (0, n.jsx)(I.Z, {})
        : (0, n.jsx)(E.FormSection, {
              tag: E.FormTitleTags.H1,
              title: j.Z.Messages.AUTHORIZED_APPS,
              children: (0, n.jsx)(E.HeadingLevel, {
                  component: (0, n.jsx)(E.FormNotice, {
                      className: U.marginBottom40,
                      type: E.CardTypes.PRIMARY,
                      title: j.Z.Messages.APPLICATIONS_AND_CONNECTIONS,
                      body: j.Z.Messages.APPLICATIONS_AND_CONNECTIONS_BODY
                  }),
                  children:
                      null == s || null == g
                          ? (0, n.jsx)(E.Spinner, {
                                className: U.marginTop20,
                                type: E.Spinner.Type.SPINNING_CIRCLE
                            })
                          : 0 === s.length
                            ? m(j.Z.Messages.NO_AUTHORIZED_APPS_NOTE, j.Z.Messages.NO_AUTHORIZED_APPS)
                            : 0 === g.length
                              ? (0, n.jsxs)(n.Fragment, {
                                    children: [N(), m(null, j.Z.Messages.INTEGRATIONS_SEARCH_NO_MATCH)]
                                })
                              : (0, n.jsxs)(n.Fragment, {
                                    children: [
                                        N(),
                                        g
                                            .sort((e, s) => e.application.name.localeCompare(s.application.name))
                                            .map((e) =>
                                                (0, n.jsx)(
                                                    V,
                                                    {
                                                        locale: i,
                                                        onDelete: () => o(e),
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
