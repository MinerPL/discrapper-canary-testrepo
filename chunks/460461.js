n.d(t, {
    J: function () {
        return L;
    }
}),
    n(47120),
    n(315314),
    n(610138),
    n(216116),
    n(78328),
    n(815648),
    n(627494),
    n(757143);
var i = n(200651),
    r = n(192379),
    l = n(442837),
    s = n(692547),
    a = n(481060),
    o = n(225433),
    c = n(484614),
    d = n(852860),
    u = n(296386),
    m = n(150192),
    h = n(688465),
    g = n(970061),
    x = n(285888),
    p = n(134432),
    f = n(813197),
    C = n(208567),
    I = n(496675),
    _ = n(768581),
    N = n(63063),
    v = n(434404),
    T = n(999382),
    j = n(450474),
    E = n(190287),
    S = n(981631),
    b = n(731455),
    R = n(388032),
    Z = n(527337);
let A = 'https:' + window.GLOBAL_ENV.MARKETING_ENDPOINT + '/servers/',
    L = () => {
        let {
            guild: e,
            guildMetadata: t,
            submitting: n
        } = (0, l.cj)([T.Z], () => ({
            submitting: T.Z.isSubmitting(),
            guild: T.Z.getGuild(),
            guildMetadata: T.Z.getMetadata()
        }));
        return (0, i.jsx)(d.Z, {
            submitting: n,
            onReset: () => {
                if (null != e) v.Z.init(e.id);
            },
            onSave: () => {
                if (null != e)
                    v.Z.saveGuild(e.id, {
                        discoverySplash: e.discoverySplash,
                        description: e.description
                    }),
                        u.Vv({
                            guildId: e.id,
                            primaryCategoryId: t.primaryCategoryId,
                            keywords: t.keywords,
                            emojiDiscoverabilityEnabled: t.emojiDiscoverabilityEnabled,
                            partnerActionedTimestamp: t.partnerActionedTimestamp,
                            partnerApplicationTimestamp: t.partnerApplicationTimestamp,
                            isPublished: t.isPublished,
                            reasonsToJoin: t.reasonsToJoin,
                            socialLinks: t.socialLinks.filter((e) => e),
                            about: t.about
                        });
            }
        });
    },
    y = () => {
        var e;
        let t = r.useRef(null),
            n = (0, l.e7)([T.Z], () => T.Z.getGuild()),
            [d, L] = r.useState(!1);
        r.useEffect(() => {
            !d && null != n && (u.le(), u.aC(n.id), u.i3(n.id), L(!0));
        }, [n, d]);
        let { canManageGuild: y } = (0, l.cj)([I.Z], () => ({ canManageGuild: I.Z.can(S.Plq.MANAGE_GUILD, n) })),
            D = (0, l.e7)([T.Z], () => T.Z.isGuildMetadataLoaded()),
            O = (0, l.e7)([T.Z], () => (null != n ? T.Z.getMetadata() : null)),
            M = (0, l.e7)([T.Z], () => (null != n && (null == O ? void 0 : O.isPublished) ? T.Z.getSlug() : null)),
            [P, k] = r.useState([!0]),
            [w, B] = r.useState(!0),
            [U, G] = r.useState([!1]),
            [F, H] = r.useState(['']),
            z = (e) => {
                let t = Object.entries(b.zo)
                    .filter((e) => !F.includes(e[1].presentation))
                    .map((e) => ({
                        label: e[1].presentation,
                        value: e[0]
                    }));
                return null == e || '' === e
                    ? t
                    : t.concat({
                          label: e,
                          value: e
                      });
            },
            V = (e) => {
                try {
                    var t, n, i, r;
                    let l = new URL(e).hostname.split('.');
                    if (3 === l.length && 'bandcamp' === l[1].toLowerCase()) return b.zo.bandcamp.presentation;
                    let s = null !== (n = null === (t = l.shift()) || void 0 === t ? void 0 : t.toLowerCase()) && void 0 !== n ? n : '';
                    if (('www' === s && (s = null !== (r = null === (i = l.shift()) || void 0 === i ? void 0 : i.toLowerCase()) && void 0 !== r ? r : ''), s in b.zo)) return b.zo[s].presentation;
                    return null;
                } catch {
                    return null;
                }
            };
        r.useEffect(() => {
            if (null !== O) {
                let e = [],
                    t = [];
                O.socialLinks.forEach((n, i) => {
                    if ('' !== n) {
                        let r = V(n);
                        null !== r ? ((t[i] = r), (e[i] = !0)) : (e[i] = !1);
                    } else e[i] = !0;
                }),
                    H(t),
                    k(e),
                    B(e.every((e) => !0 === e));
            }
        }, [O]);
        let W = (0, l.e7)([T.Z], () => (null != n ? T.Z.getErrors() : null)),
            Y = (0, l.e7)([m.Z], () => m.Z.getPrimaryCategories(), [], m.j);
        if (null == n || null == O) return null;
        let K = (e) => {
                v.Z.updateGuild({ discoverySplash: e });
            },
            q = (e) => {
                var t;
                (null == n ? void 0 : n.id) != null && u.TA(null == n ? void 0 : n.id, null !== (t = null == e ? void 0 : e.value) && void 0 !== t ? t : b.o3);
            },
            X = (e) => {
                var t;
                v.Z.updateGuild({ description: null !== (t = null == e ? void 0 : e.replaceAll('\n', '')) && void 0 !== t ? t : '' });
            },
            Q = (e) => {
                u.mA(n.id, e);
            },
            J = (e) => {
                u.W1(n.id, e),
                    e
                        ? u.Vv({
                              guildId: n.id,
                              primaryCategoryId: O.primaryCategoryId,
                              keywords: O.keywords,
                              emojiDiscoverabilityEnabled: O.emojiDiscoverabilityEnabled,
                              partnerActionedTimestamp: O.partnerActionedTimestamp,
                              partnerApplicationTimestamp: O.partnerApplicationTimestamp,
                              isPublished: !0,
                              reasonsToJoin: O.reasonsToJoin,
                              socialLinks: O.socialLinks,
                              about: O.about
                          })
                        : u.Vv({
                              guildId: n.id,
                              primaryCategoryId: O.primaryCategoryId,
                              keywords: O.keywords,
                              emojiDiscoverabilityEnabled: O.emojiDiscoverabilityEnabled,
                              partnerActionedTimestamp: O.partnerActionedTimestamp,
                              partnerApplicationTimestamp: O.partnerApplicationTimestamp,
                              isPublished: !1,
                              reasonsToJoin: O.reasonsToJoin,
                              socialLinks: O.socialLinks,
                              about: O.about
                          }),
                    v.Z.saveGuild(n.id, {
                        discoverySplash: n.discoverySplash,
                        description: n.description
                    });
            },
            $ = () => {
                if (O.socialLinks.length < 9) {
                    let e = [...O.socialLinks];
                    u.t$(n.id, e.concat('')), H(F.concat(''));
                }
            },
            ee = (e, t) => {
                let i = [...O.socialLinks],
                    r = [...F],
                    l = [...P];
                (r[t] = e), (i[t] = b.zo[e].baseUrl), (l[t] = !0), k(l), H(r), B(l.every((e) => !0 === e)), u.t$(n.id, i);
            },
            et = (e, t) => {
                let i = [...O.socialLinks],
                    r = i[t],
                    l = e;
                0 === r.length && l.length > 1 && !1 === RegExp('^https?:').test(l) && (l = 'https://' + l);
                if (!/\.(zip|exe|pdf|dmg|msi|apk|rar|7z|tar|gz|iso|docx?|xlsx?|pptx?|mp4|mp3)$/i.test(l)) (i[t] = l), u.t$(n.id, i);
            },
            en = (e) => {
                let t = [...U];
                t.splice(e, 1), G(t);
                let i = [...P];
                i.splice(e, 1), k(i);
                let r = [...F];
                r.splice(e, 1), H(r);
                let l = [...O.socialLinks];
                l.splice(e, 1), u.t$(n.id, l);
            },
            ei = (e) => {
                let { reason: t = '', emoji_name: n = '' } = e;
                return null !== t && t.length >= 10 && t.length <= 128 && null !== n;
            },
            er = (e) => {
                let { reason: t = '', emoji_name: n = '' } = e;
                return (null === t || '' === t) && null === n;
            },
            el = [
                {
                    title: R.intl.string(R.t['/SWsHx']),
                    items: [
                        {
                            description: R.intl.string(R.t.DU8jFx),
                            completed: null !== n.discoverySplash && '' !== n.discoverySplash
                        },
                        {
                            description: R.intl.string(R.t.SW5OHx),
                            completed: null !== n.description && '' !== n.description
                        },
                        {
                            description: R.intl.string(R.t.m3b3WF),
                            completed: null !== O.about && O.about.length >= 300 && O.about.length <= 2400
                        },
                        {
                            description: R.intl.string(R.t.qpx5MD),
                            completed: null !== O.reasonsToJoin && O.reasonsToJoin.every((e) => er(e) || ei(e)) && O.reasonsToJoin.filter(ei).length >= 2
                        }
                    ]
                }
            ],
            es = Y.map((e) => ({
                label: e.name,
                value: e.categoryId
            })),
            ea = (e, t) => {
                let n = [...U];
                (n[e] = t), G(n);
            };
        return (0, i.jsx)('div', {
            className: Z.settingsColumn,
            children: (0, i.jsx)('div', {
                className: Z.settingsContainer,
                children: (0, i.jsx)(a.ScrollerAuto, {
                    className: Z.settingsScroller,
                    children: (0, i.jsx)('main', {
                        ref: t,
                        className: Z.settingsContent,
                        children: (0, i.jsx)(a.FocusRingScope, {
                            containerRef: t,
                            children: (0, i.jsxs)('div', {
                                className: Z.container,
                                children: [
                                    (0, i.jsxs)(a.FormSection, {
                                        className: Z.mainContent,
                                        title: (0, i.jsxs)('div', {
                                            children: [R.intl.string(R.t.kGlQGB), ' ', (0, i.jsx)(h.Z, { className: Z.betaTag })]
                                        }),
                                        tag: a.FormTitleTags.H1,
                                        children: [
                                            (0, i.jsxs)(a.FormText, {
                                                className: Z.tabMainDescription,
                                                type: a.FormTextTypes.DESCRIPTION,
                                                children: [R.intl.format(R.t['+ScrMT'], { discordURL: window.GLOBAL_ENV.MARKETING_ENDPOINT }), ' ', R.intl.format(R.t.T6WtKy, { learnMoreURL: N.Z.getArticleURL(S.BhN.SERVER_WEB_PAGES) })]
                                            }),
                                            (() => {
                                                if (!O.isPublished || null == M) return;
                                                let e = A + M;
                                                return (0, i.jsx)(i.Fragment, {
                                                    children: (0, i.jsxs)(a.FormSection, {
                                                        className: Z.noDividerFormSection,
                                                        children: [
                                                            (0, i.jsx)(a.FormTitle, {
                                                                className: Z.formTitle,
                                                                children: R.intl.string(R.t.safBZ2)
                                                            }),
                                                            (0, i.jsx)(c.Z, { value: e }),
                                                            (0, i.jsx)(a.Button, {
                                                                className: Z.viewPageButton,
                                                                size: a.Button.Sizes.SMALL,
                                                                color: a.Button.Colors.BRAND,
                                                                onClick: () => window.open(e),
                                                                children: R.intl.string(R.t.NI8iGB)
                                                            })
                                                        ]
                                                    })
                                                });
                                            })(),
                                            (0, i.jsx)(a.FormDivider, { className: Z.divider }),
                                            (() => {
                                                if (null != n)
                                                    return (0, i.jsxs)(i.Fragment, {
                                                        children: [
                                                            (0, i.jsxs)(a.FormSection, {
                                                                children: [
                                                                    (0, i.jsx)(a.FormTitle, {
                                                                        className: Z.formTitle,
                                                                        children: R.intl.string(R.t.GjPpSk)
                                                                    }),
                                                                    (0, i.jsx)(a.FormText, {
                                                                        type: a.FormTextTypes.DESCRIPTION,
                                                                        className: Z.description,
                                                                        children: R.intl.string(R.t.MVXonJ)
                                                                    })
                                                                ]
                                                            }),
                                                            (0, i.jsx)(x.Z, {
                                                                value: O.primaryCategoryId === b.o3 ? null : null == O ? void 0 : O.primaryCategoryId,
                                                                placeholder: R.intl.string(R.t.XqMe3N),
                                                                options: es,
                                                                onChange: q,
                                                                disabled: !y,
                                                                searchable: !0,
                                                                clearable: !0
                                                            }),
                                                            (0, i.jsxs)(a.FormSection, {
                                                                className: Z.noDividerFormSection,
                                                                children: [
                                                                    (0, i.jsx)(a.FormTitle, {
                                                                        className: Z.formTitle,
                                                                        children: R.intl.string(R.t.oOPlPD)
                                                                    }),
                                                                    (0, i.jsx)(j.Z, {
                                                                        guild: n,
                                                                        guildMetadata: O,
                                                                        disabled: !y
                                                                    })
                                                                ]
                                                            }),
                                                            (null == W ? void 0 : W.category) != null
                                                                ? (0, i.jsx)(a.Text, {
                                                                      color: 'text-danger',
                                                                      className: Z.error,
                                                                      variant: 'text-sm/normal',
                                                                      children: W.category
                                                                  })
                                                                : null
                                                        ]
                                                    });
                                            })(),
                                            (0, i.jsx)(a.FormDivider, { className: Z.divider }),
                                            (() => {
                                                if (null != n)
                                                    return (0, i.jsxs)(i.Fragment, {
                                                        children: [
                                                            (0, i.jsxs)(a.FormSection, {
                                                                className: Z.twoColumnFormSection,
                                                                children: [
                                                                    (0, i.jsxs)('div', {
                                                                        children: [
                                                                            (0, i.jsx)(a.FormTitle, {
                                                                                className: Z.formTitle,
                                                                                children: R.intl.string(R.t['8bT/Cg'])
                                                                            }),
                                                                            (0, i.jsx)(a.FormText, {
                                                                                type: a.FormTextTypes.DESCRIPTION,
                                                                                className: Z.formDescription,
                                                                                children: R.intl.string(R.t.WCWT7O)
                                                                            }),
                                                                            (0, i.jsxs)(a.Button, {
                                                                                size: a.Button.Sizes.SMALL,
                                                                                color: a.Button.Colors.PRIMARY,
                                                                                children: [
                                                                                    R.intl.string(R.t.yG2pUl),
                                                                                    (0, i.jsx)(f.ZP, {
                                                                                        disabled: !y,
                                                                                        onChange: K
                                                                                    })
                                                                                ]
                                                                            })
                                                                        ]
                                                                    }),
                                                                    (0, i.jsx)(C.Z, {
                                                                        image: n.discoverySplash,
                                                                        makeURL: (e) =>
                                                                            _.ZP.getGuildDiscoverySplashURL({
                                                                                id: n.id,
                                                                                splash: e,
                                                                                size: 512 * (0, p.x_)()
                                                                            }),
                                                                        disabled: !y,
                                                                        onChange: K,
                                                                        hint: R.intl.string(R.t.uPvxqK),
                                                                        imageClassName: Z.imageUploaderInnerSquare,
                                                                        hideSize: !0
                                                                    })
                                                                ]
                                                            }),
                                                            (null == W ? void 0 : W.discovery_splash) != null
                                                                ? (0, i.jsx)(a.Text, {
                                                                      color: 'text-danger',
                                                                      variant: 'text-sm/normal',
                                                                      children: W.discovery_splash
                                                                  })
                                                                : null
                                                        ]
                                                    });
                                            })(),
                                            (0, i.jsx)(a.FormDivider, { className: Z.divider }),
                                            (0, i.jsxs)(a.FormSection, {
                                                children: [
                                                    (0, i.jsx)(a.FormTitle, {
                                                        className: Z.formTitle,
                                                        children: R.intl.string(R.t['RSfm+v'])
                                                    }),
                                                    (0, i.jsx)(a.FormText, {
                                                        className: Z.description,
                                                        type: a.FormTextTypes.DESCRIPTION,
                                                        children: R.intl.string(R.t.IBi6h4)
                                                    }),
                                                    (0, i.jsx)(a.TextArea, {
                                                        value: null !== n.description ? n.description : '',
                                                        placeholder: R.intl.string(R.t.rFa9Ul),
                                                        onChange: X,
                                                        maxLength: 120,
                                                        disabled: !y
                                                    })
                                                ]
                                            }),
                                            (0, i.jsx)(a.FormDivider, { className: Z.divider }),
                                            (() => {
                                                if (null == O) return null;
                                                let e =
                                                    0 === O.reasonsToJoin.length
                                                        ? [, , , ,].fill({
                                                              reason: '',
                                                              emoji_name: null
                                                          })
                                                        : O.reasonsToJoin;
                                                return (0, i.jsxs)(a.FormSection, {
                                                    children: [
                                                        (0, i.jsx)(a.FormTitle, {
                                                            className: Z.formTitle,
                                                            children: R.intl.string(R.t.vUmXsb)
                                                        }),
                                                        (0, i.jsx)(a.FormText, {
                                                            type: a.FormTextTypes.DESCRIPTION,
                                                            className: Z.description,
                                                            children: R.intl.string(R.t.esnBnZ)
                                                        }),
                                                        (0, i.jsx)('div', {
                                                            className: Z.reasonToJoin,
                                                            children: (0, i.jsx)(E.Z, {
                                                                reasonMinLength: 10,
                                                                reasonMaxLength: 128,
                                                                guildId: n.id,
                                                                reasons: e
                                                            })
                                                        }),
                                                        (null == W ? void 0 : W.reasons_to_join) != null
                                                            ? (0, i.jsx)(a.Text, {
                                                                  color: 'text-danger',
                                                                  variant: 'text-sm/normal',
                                                                  children: W.reasons_to_join
                                                              })
                                                            : null
                                                    ]
                                                });
                                            })(),
                                            (0, i.jsx)(a.FormDivider, { className: Z.divider }),
                                            (0, i.jsxs)(i.Fragment, {
                                                children: [
                                                    (0, i.jsxs)(a.FormSection, {
                                                        children: [
                                                            (0, i.jsx)(a.FormTitle, {
                                                                className: Z.formTitle,
                                                                children: R.intl.string(R.t['lu+BmJ'])
                                                            }),
                                                            (0, i.jsx)(a.FormText, {
                                                                className: Z.description,
                                                                type: a.FormTextTypes.DESCRIPTION,
                                                                children: R.intl.string(R.t.ozSi8v)
                                                            }),
                                                            (0, i.jsx)(
                                                                a.TextArea,
                                                                {
                                                                    showCharacterCount: !0,
                                                                    className: Z.textArea,
                                                                    value: O.about,
                                                                    placeholder: R.intl.string(R.t.TduTbm),
                                                                    onChange: Q,
                                                                    minLength: 300,
                                                                    maxLength: 2400,
                                                                    disabled: !y,
                                                                    defaultDirty: (null === (e = O.about) || void 0 === e ? void 0 : e.length) > 0
                                                                },
                                                                'text-area-'.concat(D)
                                                            )
                                                        ]
                                                    }),
                                                    (null == W ? void 0 : W.about) != null
                                                        ? (0, i.jsx)(a.Text, {
                                                              color: 'text-danger',
                                                              variant: 'text-sm/normal',
                                                              children: W.about
                                                          })
                                                        : null
                                                ]
                                            }),
                                            (0, i.jsx)(a.FormDivider, { className: Z.divider }),
                                            (0, i.jsx)(i.Fragment, {
                                                children: (0, i.jsxs)(a.FormSection, {
                                                    children: [
                                                        (0, i.jsx)(a.FormTitle, {
                                                            className: Z.formTitle,
                                                            children: R.intl.string(R.t.V5mNyc)
                                                        }),
                                                        (0, i.jsx)(a.FormText, {
                                                            className: Z.description,
                                                            type: a.FormTextTypes.DESCRIPTION,
                                                            children: R.intl.string(R.t.d3kA9f)
                                                        }),
                                                        O.socialLinks.map((e, t) =>
                                                            (0, i.jsxs)(
                                                                'div',
                                                                {
                                                                    className: Z.socialLinksContainer,
                                                                    onMouseOver: () => ea(t, !0),
                                                                    onFocus: () => ea(t, !0),
                                                                    onMouseOut: () => ea(t, !1),
                                                                    onBlur: () => ea(t, !1),
                                                                    children: [
                                                                        (0, i.jsx)(
                                                                            a.SingleSelect,
                                                                            {
                                                                                className: O.isPublished ? Z.socialLinksDropdownMax : Z.socialLinksDropdownMin,
                                                                                options: z(F[t]),
                                                                                placeholder: R.intl.string(R.t.xSALIC),
                                                                                value: F[t],
                                                                                onChange: (e) => ee(e, t),
                                                                                isDisabled: !y
                                                                            },
                                                                            'dropdown-' + t
                                                                        ),
                                                                        (0, i.jsx)(
                                                                            a.TextInput,
                                                                            {
                                                                                value: e,
                                                                                className: O.isPublished ? Z.socialLinksMax : Z.socialLinksMin,
                                                                                onChange: (e) => et(e, t),
                                                                                placeholder: R.intl.string(R.t.Q6o4pK),
                                                                                maxLength: 150,
                                                                                disabled: !y
                                                                            },
                                                                            'link-' + t
                                                                        ),
                                                                        P[t]
                                                                            ? (0, i.jsx)(
                                                                                  a.CircleCheckIcon,
                                                                                  {
                                                                                      size: 'custom',
                                                                                      className: O.isPublished ? Z.validationButtonMax : Z.validationButtonMin,
                                                                                      color: s.Z.unsafe_rawColors.GREEN_230.css,
                                                                                      width: 20,
                                                                                      height: 20
                                                                                  },
                                                                                  'validation-passed-' + t
                                                                              )
                                                                            : (0, i.jsx)(
                                                                                  a.CircleXIcon,
                                                                                  {
                                                                                      size: 'custom',
                                                                                      className: O.isPublished ? Z.validationButtonMax : Z.validationButtonMin,
                                                                                      color: s.Z.unsafe_rawColors.RED_400.css,
                                                                                      width: 20,
                                                                                      height: 20
                                                                                  },
                                                                                  'validation-failed-' + t
                                                                              ),
                                                                        y &&
                                                                            (0, i.jsx)(
                                                                                o.Z,
                                                                                {
                                                                                    className: U[t] ? (O.isPublished ? Z.deleteButtonMax : Z.deleteButtonMin) : O.isPublished ? Z.deleteButtonHiddenMax : Z.deleteButtonHiddenMin,
                                                                                    onClick: () => en(t)
                                                                                },
                                                                                'delete-button-' + t
                                                                            )
                                                                    ]
                                                                },
                                                                'social-container-' + t
                                                            )
                                                        ),
                                                        (null == W ? void 0 : W.social_links) != null
                                                            ? (0, i.jsx)(a.Text, {
                                                                  color: 'text-danger',
                                                                  variant: 'text-sm/normal',
                                                                  children: W.social_links
                                                              })
                                                            : null,
                                                        (0, i.jsx)(a.Button, {
                                                            size: a.Button.Sizes.SMALL,
                                                            color: a.Button.Colors.PRIMARY,
                                                            onClick: $,
                                                            disabled: !y || O.socialLinks.length >= 9,
                                                            children: R.intl.string(R.t.QvovjY)
                                                        })
                                                    ]
                                                })
                                            }),
                                            O.isPublished &&
                                                (0, i.jsxs)(i.Fragment, {
                                                    children: [
                                                        (0, i.jsx)(a.FormDivider, { className: Z.divider }),
                                                        (0, i.jsxs)(a.FormSection, {
                                                            children: [
                                                                (0, i.jsx)(a.FormTitle, {
                                                                    className: Z.formTitle,
                                                                    children: R.intl.string(R.t['5yF7e3'])
                                                                }),
                                                                (0, i.jsx)(a.FormText, {
                                                                    className: Z.description,
                                                                    type: a.FormTextTypes.DESCRIPTION,
                                                                    children: R.intl.string(R.t.eOFvqa)
                                                                }),
                                                                (0, i.jsx)(a.Button, {
                                                                    size: a.Button.Sizes.SMALL,
                                                                    color: a.Button.Colors.RED,
                                                                    onClick: () => J(!1),
                                                                    disabled: !y,
                                                                    children: R.intl.string(R.t['DCHd/P'])
                                                                })
                                                            ]
                                                        })
                                                    ]
                                                }),
                                            (null == W ? void 0 : W.is_published) != null
                                                ? (0, i.jsx)(a.Text, {
                                                      color: 'text-danger',
                                                      variant: 'text-sm/normal',
                                                      children: W.is_published
                                                  })
                                                : null
                                        ]
                                    }),
                                    !O.isPublished &&
                                        (0, i.jsx)('div', {
                                            className: Z.checklist,
                                            children: (0, i.jsx)(g.Z, {
                                                title: R.intl.string(R.t['2kCyn5']),
                                                children: el,
                                                buttonLabel: R.intl.string(R.t.tVK6S0),
                                                buttonCallback: () => J(!0),
                                                disabled: !y || !w
                                            })
                                        })
                                ]
                            })
                        })
                    })
                })
            })
        });
    };
t.Z = () => (null == (0, l.e7)([T.Z], () => T.Z.getGuild()) ? null : (0, i.jsx)(y, {}));
