n.d(t, {
    Z: function () {
        return eE;
    }
}),
    n(47120),
    n(733860),
    n(773603);
var i,
    s,
    r = n(200651),
    l = n(192379),
    a = n(120356),
    o = n.n(a),
    c = n(512722),
    d = n.n(c),
    u = n(913527),
    m = n.n(u),
    h = n(442837),
    g = n(524437),
    p = n(481060),
    x = n(570140),
    S = n(668781),
    T = n(924628),
    C = n(809206),
    _ = n(230711),
    E = n(241420),
    f = n(600164),
    I = n(651530),
    N = n(247206),
    A = n(294602),
    b = n(778825),
    v = n(856768),
    j = n(592204),
    O = n(712950),
    R = n(880257),
    P = n(16703),
    D = n(977059),
    y = n(236289),
    B = n(518560),
    L = n(237292),
    Z = n(604849),
    F = n(278828),
    M = n(921801),
    k = n(480294),
    w = n(430824),
    U = n(663389),
    V = n(594174),
    G = n(626135),
    Y = n(63063),
    H = n(78451),
    z = n(358085),
    W = n(709054),
    K = n(88658),
    q = n(695346),
    Q = n(3957),
    X = n(279743),
    J = n(526156),
    $ = n(76793),
    ee = n(839469),
    et = n(973005),
    en = n(703115),
    ei = n(526761),
    es = n(726985),
    er = n(981631),
    el = n(800530),
    ea = n(388032),
    eo = n(36968),
    ec = n(933919),
    ed = n(113207);
function eu(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
function em() {
    let e = (0, h.e7)([b.Z], () => b.Z.getGuild()),
        t = (0, P.Z)(),
        n = null != e ? e : t;
    l.useEffect(() => {
        G.default.track(er.rMx.USER_SERVER_PRIVACY_SETTINGS_ACTION, { action: en.Y.VIEW_SETTINGS_PAGE });
    }, []);
    let i = l.useCallback((e) => {
        null != e &&
            x.Z.dispatch({
                type: 'GUILD_IDENTITY_SETTINGS_SET_GUILD',
                guild: e
            }),
            G.default.track(er.rMx.USER_SERVER_PRIVACY_SETTINGS_ACTION, {
                action: en.Y.SELECT_GUILD,
                guild_id: null == e ? void 0 : e.id
            });
    }, []);
    return null == n
        ? null
        : (0, r.jsxs)(p.FormSection, {
              tag: p.FormTitleTags.H1,
              title: ea.intl.string(ea.t.sKMrpq),
              children: [
                  (0, r.jsx)(v.Z, {
                      className: ec.guildSelector,
                      guildId: n.id,
                      onChange: i
                  }),
                  (0, r.jsx)(E.ConnectedPrivacySettings, {
                      guild: n,
                      ingress: E.PrivacySettingSurfaces.USER_SETTINGS_PRIVACY_SAFETY
                  })
              ]
          });
}
function eh() {
    var e;
    let t = null === (e = (0, R.Z)()) || void 0 === e || e,
        n = (0, L.y0)({ location: 'user_settings_web' }),
        i = (0, Z.c)(),
        s = (0, Q.a)(ei.to.DM_SAFETY_ALERTS);
    return t || !n
        ? null
        : (0, r.jsxs)(M.F, {
              setting: es.s6.PRIVACY_SAFETY_ALERTS,
              children: [
                  (0, r.jsx)(p.FormSection, {
                      ref: s,
                      children: (0, r.jsxs)(p.FormItem, {
                          className: eo.settingsBackgroundFlashElement,
                          children: [
                              (0, r.jsx)(p.FormTitle, {
                                  tag: p.FormTitleTags.H5,
                                  faded: !0,
                                  className: ed.marginBottom8,
                                  children: ea.intl.string(ea.t['J/X8w8'])
                              }),
                              (0, r.jsx)(p.FormSwitch, {
                                  value: i,
                                  note: ea.intl.format(ea.t.lunaRk, { learnMoreLink: Y.Z.getArticleURL(er.BhN.SAFETY_ALERTS) }),
                                  onChange: F.Q,
                                  hideBorder: !0,
                                  children: ea.intl.string(ea.t.qFsx5u)
                              }),
                              (0, r.jsx)(X.Z, {
                                  animationDelay: 1000,
                                  scrollPosition: ei.to.DM_SAFETY_ALERTS
                              })
                          ]
                      })
                  }),
                  (0, r.jsx)(p.FormDivider, { className: ed.marginBottom20 })
              ]
          });
}
function eg(e, t) {
    G.default.track(er.rMx.GUILD_DEFAULT_MESSAGE_REQUEST_UPDATED, {
        default_guilds_restricted: e,
        applied_to_existing_guilds: t
    });
}
function ep() {
    let e = q.iG.useSetting(),
        t = q.mX.useSetting(),
        n = (0, Q.a)(ei.to.MESSAGE_REQUESTS);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsxs)('div', {
                className: eo.settingsBackgroundFlashElement,
                children: [
                    (0, r.jsx)(p.FormItem, {
                        ref: n,
                        children: (0, r.jsx)(p.FormSwitch, {
                            value: !t,
                            note: ea.intl.format(ea.t.BSdJ7O, { helpdeskArticle: Y.Z.getArticleURL(er.BhN.MESSAGE_REQUESTS) }),
                            disabled: e,
                            onChange: () => {
                                var e;
                                return (
                                    (e = !t),
                                    void eT({
                                        header: ea.intl.string(ea.t.yAfu1t),
                                        body: ea.intl.string(ea.t['Ry2z7+']),
                                        confirmText: ea.intl.string(ea.t.gm1Ven),
                                        cancelText: ea.intl.string(ea.t.p89ACg),
                                        confirmButtonColor: p.Button.Colors.BRAND,
                                        onConfirm: () => {
                                            q.mX.updateSetting(e), eg(e, !1);
                                        },
                                        onCancel: () => {
                                            q.mX.updateSetting(e), q.zA.updateSetting(e ? W.default.keys(w.Z.getGuilds()) : []), eg(e, !0);
                                        }
                                    })
                                );
                            },
                            hideBorder: !0,
                            children: ea.intl.string(ea.t.kOa6yM)
                        })
                    }),
                    (0, r.jsx)(X.Z, {
                        animationDelay: 700,
                        scrollPosition: ei.to.MESSAGE_REQUESTS
                    })
                ]
            }),
            (0, r.jsx)(p.FormDivider, { className: ed.marginBottom20 })
        ]
    });
}
function ex() {
    var e;
    let t = null === (e = (0, R.Z)()) || void 0 === e || e,
        { explicitContentGuilds: n, explicitContentFriendDm: i, explicitContentNonFriendDm: s } = (0, A.B)(),
        l = (0, Q.a)(ei.to.EXPLICIT_MEDIA_REDACTION),
        a = [
            {
                value: g.Q4.BLUR,
                label: ea.intl.string(ea.t.S49UaW)
            },
            {
                value: g.Q4.BLOCK,
                label: ea.intl.string(ea.t['D/157e'])
            }
        ],
        o = [
            {
                value: g.Q4.BLUR,
                label: ea.intl.string(ea.t.S49UaW)
            }
        ],
        c = {
            value: g.Q4.SHOW,
            label: ea.intl.string(ea.t['5k5OFh'])
        };
    return (
        t && (a.unshift(c), o.unshift(c)),
        (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsxs)('div', {
                    className: eo.settingsBackgroundFlashElement,
                    children: [
                        (0, r.jsx)(p.FormTitle, {
                            tag: p.FormTitleTags.H5,
                            faded: !0,
                            className: ed.marginBottom8,
                            children: ea.intl.string(ea.t.uEz8JC)
                        }),
                        (0, r.jsx)(p.FormText, {
                            type: p.FormTextTypes.DESCRIPTION,
                            className: ed.marginBottom8,
                            children: ea.intl.format(ea.t['89CimZ'], { learnMoreLink: Y.Z.getArticleURL(er.BhN.EXPLICIT_MEDIA_REDACTION) })
                        }),
                        (0, r.jsx)(p.FormItem, {
                            ref: l,
                            tag: p.FormTitleTags.H3,
                            className: ed.marginBottom20,
                            title: ea.intl.string(ea.t.TyjVLC),
                            children: (0, r.jsx)(p.SingleSelect, {
                                options: a,
                                value: i,
                                onChange: (e) => (0, N.zj)({ explicitContentFriendDm: e })
                            })
                        }),
                        (0, r.jsx)(p.FormItem, {
                            tag: p.FormTitleTags.H3,
                            className: ed.marginBottom20,
                            title: ea.intl.string(ea.t.T7eD1d),
                            children: (0, r.jsx)(p.SingleSelect, {
                                options: a,
                                value: s,
                                onChange: (e) => (0, N.zj)({ explicitContentNonFriendDm: e })
                            })
                        }),
                        t &&
                            (0, r.jsx)(p.FormItem, {
                                tag: p.FormTitleTags.H3,
                                className: ed.marginBottom20,
                                title: ea.intl.string(ea.t.zqUDl5),
                                children: (0, r.jsx)(p.SingleSelect, {
                                    options: o,
                                    value: n,
                                    onChange: (e) => (0, N.zj)({ explicitContentGuilds: e })
                                })
                            }),
                        (0, r.jsx)(X.Z, { scrollPosition: ei.to.EXPLICIT_MEDIA_REDACTION })
                    ]
                }),
                (0, r.jsx)(p.FormDivider, { className: ed.marginBottom20 })
            ]
        })
    );
}
function eS(e) {
    let {
            modalProps: t,
            settings: { onConfirm: n, ...i }
        } = e,
        [s, a] = l.useState({
            Account: {
                value: 'Account',
                label: ea.intl.string(ea.t['rfe/x8']),
                checked: !1
            },
            Analytics: {
                value: 'Analytics',
                label: ea.intl.string(ea.t['j+d6RE']),
                checked: !1
            },
            Activities: {
                value: 'Activities',
                label: ea.intl.string(ea.t.KO88BQ),
                checked: !1
            },
            Messages: {
                value: 'Messages',
                label: ea.intl.string(ea.t['0dO1t7']),
                checked: !1
            },
            Programs: {
                value: 'Programs',
                label: ea.intl.string(ea.t.M4ddeX),
                checked: !1
            },
            Servers: {
                value: 'Servers',
                label: ea.intl.string(ea.t.JN9c39),
                checked: !1
            }
        }),
        o = (e) => (t, n) => {
            a((t) => ({
                ...t,
                [e]: {
                    ...t[e],
                    checked: n
                }
            }));
        };
    return (0, r.jsxs)(p.ConfirmModal, {
        ...t,
        ...i,
        onConfirm: () => {
            let e = Object.keys(s)
                .filter((e) => s[e].checked)
                .map((e) => s[e].value);
            null == n || n(e);
        },
        children: [
            (0, r.jsx)(p.Text, {
                variant: 'text-md/normal',
                style: { marginBottom: '5px' },
                children: i.body
            }),
            Object.keys(s).map((e) => {
                let { label: t, checked: n } = s[e];
                return (0, r.jsx)(
                    p.Checkbox,
                    {
                        type: p.Checkbox.Types.INVERTED,
                        value: n,
                        style: { marginBottom: '2px' },
                        onChange: o(e),
                        children: (0, r.jsx)(p.Text, {
                            variant: 'text-md/normal',
                            children: t
                        })
                    },
                    e
                );
            })
        ]
    });
}
((s = i || (i = {})).USERS = 'Account'), (s.MESSAGES = 'Messages'), (s.GUILDS = 'Servers'), (s.ANALYTICS = 'Analytics'), (s.ACTIVITIES = 'Activities'), (s.HUBSPOT = 'Programs');
function eT(e) {
    let { body: t, ...n } = e;
    (0, p.openModal)((e) =>
        (0, r.jsx)(p.ConfirmModal, {
            ...e,
            ...n,
            children: (0, r.jsx)(p.Text, {
                variant: 'text-md/normal',
                children: t
            })
        })
    );
}
function eC(e) {
    let { message: t } = e;
    eT({
        header: ea.intl.string(ea.t.OjbtDg),
        confirmText: ea.intl.string(ea.t.BddRzc),
        body: t
    });
}
class e_ extends l.PureComponent {
    componentDidMount() {
        (0, T.I)(),
            (0, C.ol)().then(
                (e) => {
                    let t = {
                        requestingHarvest: !1,
                        currentHarvestRequest: e.body
                    };
                    this.setState(t);
                },
                () => {
                    this.setState({ requestingHarvest: !1 });
                }
            );
    }
    componentDidUpdate(e) {
        e.defaultGuildsRestricted !== this.props.defaultGuildsRestricted && this.setState({ defaultGuildsRestricted: this.props.defaultGuildsRestricted }), null != this.props.subsection && e.subsection !== this.props.subsection && this.setState({ selectedTab: this.props.subsection });
    }
    showGuildRestrictionModal(e) {
        eT({
            header: ea.intl.string(ea.t['uUr+GR']),
            body: ea.intl.string(ea.t.hjGJBg),
            confirmText: ea.intl.string(ea.t.gm1Ven),
            cancelText: ea.intl.string(ea.t.p89ACg),
            confirmButtonColor: p.Button.Colors.BRAND,
            onConfirm: () => {
                q.iG.updateSetting(e), this.trackDefaultDmsUpdated(e, !1);
            },
            onCancel: () => {
                q.iG.updateSetting(e), q.h2.updateSetting(e ? W.default.keys(w.Z.getGuilds()) : []), this.trackDefaultDmsUpdated(e, !0);
            }
        });
    }
    trackDefaultDmsUpdated(e, t) {
        G.default.track(er.rMx.GUILD_DEFAULT_DMS_UPDATED, {
            default_guilds_restricted: e,
            applied_to_existing_guilds: t
        });
    }
    showMessageRequestRestrictionModal(e) {
        eT({
            header: ea.intl.string(ea.t.yAfu1t),
            body: ea.intl.string(ea.t['Ry2z7+']),
            confirmText: ea.intl.string(ea.t.gm1Ven),
            cancelText: ea.intl.string(ea.t.p89ACg),
            confirmButtonColor: p.Button.Colors.BRAND,
            onConfirm: () => {
                q.mX.updateSetting(e), this.trackDefaultMessageRequestUpdated(e, !1);
            },
            onCancel: () => {
                q.mX.updateSetting(e), q.zA.updateSetting(e ? W.default.keys(w.Z.getGuilds()) : []), this.trackDefaultMessageRequestUpdated(e, !0);
            }
        });
    }
    trackDefaultMessageRequestUpdated(e, t) {
        G.default.track(er.rMx.GUILD_DEFAULT_MESSAGE_REQUEST_UPDATED, {
            default_guilds_restricted: e,
            applied_to_existing_guilds: t
        });
    }
    renderLegacyExplicitContentFilter(e) {
        return (0, r.jsx)(r.Fragment, {
            children: (0, r.jsxs)(p.FormItem, {
                tag: p.FormTitleTags.H3,
                className: ed.marginBottom20,
                title: ea.intl.string(ea.t.rQCZQE),
                children: [
                    (0, r.jsx)(p.FormText, {
                        type: p.FormTextTypes.DESCRIPTION,
                        className: ed.marginBottom8,
                        children: ea.intl.format(ea.t.Qsnai4, { appealLink: Y.Z.getArticleURL(er.BhN.SAFE_DIRECT_MESSAGING) })
                    }),
                    (0, r.jsx)(p.RadioGroup, {
                        value: this.props.explicitContentFilter,
                        options: (0, H.X7)(),
                        onChange: (t) => {
                            let { value: n } = t;
                            this.props.dmSpamFilter === g.Xr.DEFAULT_UNSET
                                ? q.Xr.updateSetting(e).then(() => {
                                      q.UP.updateSetting(n);
                                  })
                                : q.UP.updateSetting(n);
                        }
                    })
                ]
            })
        });
    }
    renderDMSafety() {
        var e;
        let t = this.props.dmSpamFilter !== g.Xr.DEFAULT_UNSET ? this.props.dmSpamFilter : null !== (e = et.O7.get(this.props.explicitContentFilter)) && void 0 !== e ? e : g.Xr.NON_FRIENDS;
        return this.props.mediaRedactionIsEnabled
            ? (0, r.jsxs)(r.Fragment, {
                  children: [
                      (0, r.jsxs)(p.FormSection, {
                          tag: p.FormTitleTags.H3,
                          className: ed.marginBottom20,
                          children: [
                              (0, r.jsx)(M.F, {
                                  setting: es.s6.PRIVACY_SENSITIVE_MEDIA,
                                  children: (0, r.jsx)(ex, {})
                              }),
                              (0, r.jsxs)(M.F, {
                                  setting: es.s6.PRIVACY_DIRECT_MESSAGE_SPAM_FILTER,
                                  children: [
                                      (0, r.jsxs)(p.FormItem, {
                                          tag: p.FormTitleTags.H5,
                                          className: ed.marginBottom4,
                                          title: ea.intl.string(ea.t.uloYw8),
                                          children: [
                                              (0, r.jsx)(p.FormText, {
                                                  type: p.FormTextTypes.DESCRIPTION,
                                                  className: ed.marginBottom8,
                                                  children: ea.intl.format(ea.t.ls4omZ, { appealLink: Y.Z.getArticleURL(er.BhN.SAFE_DIRECT_MESSAGING) })
                                              }),
                                              (0, r.jsx)(p.RadioGroup, {
                                                  value: t,
                                                  options: (0, H.c7)(),
                                                  onChange: (e) => {
                                                      let { value: t } = e;
                                                      return q.Xr.updateSetting(t);
                                                  }
                                              })
                                          ]
                                      }),
                                      (0, r.jsx)(p.FormDivider, { className: o()(ed.marginTop20, ed.marginBottom8) })
                                  ]
                              })
                          ]
                      }),
                      (0, r.jsx)(eh, {})
                  ]
              })
            : (0, r.jsxs)(r.Fragment, {
                  children: [
                      (0, r.jsxs)(p.FormSection, {
                          tag: p.FormTitleTags.H5,
                          className: ed.marginBottom40,
                          title: ea.intl.string(ea.t.u3sdlJ),
                          children: [
                              this.renderLegacyExplicitContentFilter(t),
                              (0, r.jsxs)(p.FormItem, {
                                  tag: p.FormTitleTags.H3,
                                  className: ed.marginBottom4,
                                  title: ea.intl.string(ea.t.uloYw8),
                                  children: [
                                      (0, r.jsx)(p.FormText, {
                                          type: p.FormTextTypes.DESCRIPTION,
                                          className: ed.marginBottom8,
                                          children: ea.intl.format(ea.t.ls4omZ, { appealLink: Y.Z.getArticleURL(er.BhN.SAFE_DIRECT_MESSAGING) })
                                      }),
                                      (0, r.jsx)(p.RadioGroup, {
                                          value: t,
                                          options: (0, H.c7)(),
                                          onChange: (e) => {
                                              let { value: t } = e;
                                              return q.Xr.updateSetting(t);
                                          }
                                      })
                                  ]
                              })
                          ]
                      }),
                      (0, r.jsx)(p.FormDivider, { className: ed.marginBottom20 }),
                      (0, r.jsx)(eh, {})
                  ]
              });
    }
    renderKeywordFiltering() {
        return (0, r.jsxs)(p.FormSection, {
            tag: p.FormTitleTags.H3,
            className: ed.marginBottom20,
            children: [
                (0, r.jsx)(p.FormTitle, {
                    tag: p.FormTitleTags.H5,
                    className: ed.marginBottom8,
                    children: ea.intl.string(ea.t.lq5Pio)
                }),
                (0, r.jsx)(M.F, {
                    setting: es.s6.PRIVACY_KEYWORD_FILTER,
                    children: (0, r.jsx)(p.FormSwitch, {
                        value: this.props.keywordFilter,
                        note: ea.intl.format(ea.t.wIAqR0, { learnMoreLink: Y.Z.getArticleURL(er.BhN.KEYWORD_FILTERS) }),
                        onChange: (e) =>
                            q.gw.updateSetting({
                                profanity: e,
                                slurs: e,
                                sexualContent: e
                            }),
                        children: ea.intl.string(ea.t['8QJcoa'])
                    })
                })
            ]
        });
    }
    renderServerPrivacy() {
        let { viewNsfwGuilds: e, currentUser: t, viewNsfwCommands: n } = this.props,
            { defaultGuildsRestricted: i } = this.state,
            s = !0 === t.nsfwAllowed;
        return (0, r.jsxs)(p.FormSection, {
            className: ed.marginBottom40,
            children: [
                (0, r.jsx)(p.FormTitle, {
                    tag: p.FormTitleTags.H5,
                    className: ed.marginBottom8,
                    children: ea.intl.string(ea.t.Hq4ApK)
                }),
                (0, r.jsx)(M.F, {
                    setting: es.s6.PRIVACY_SERVER_PRIVACY_DEFAULTS_DMS,
                    children: (0, r.jsx)(p.FormSwitch, {
                        value: !i,
                        note: ea.intl.string(ea.t['5+2s+f']),
                        onChange: this.handleChangeDefaultGuildsRestricted,
                        children: ea.intl.string(ea.t.eCO6Nz)
                    })
                }),
                (0, r.jsx)(M.F, {
                    setting: es.s6.PRIVACY_SERVER_PRIVACY_DEFAULTS_AGE_RESTRICTED_IOS,
                    children: (0, r.jsx)(p.FormSwitch, {
                        value: !!s && e,
                        note: ea.intl.string(ea.t['QZ9+Dw']),
                        disabled: !s,
                        onChange: q.DC.updateSetting,
                        children: ea.intl.string(ea.t['L+yTsb'])
                    })
                }),
                (0, r.jsx)(M.F, {
                    setting: es.s6.PRIVACY_SERVER_PRIVACY_DEFAULTS_MESSAGE_REQUESTS,
                    children: (0, r.jsx)(ep, {})
                }),
                (0, r.jsx)(M.F, {
                    setting: es.s6.PRIVACY_SERVER_PRIVACY_DEFAULTS_AGE_RESTRICTED_APPS,
                    children: (0, r.jsx)(p.FormSwitch, {
                        value: !!s && n,
                        note: ea.intl.string(ea.t.fbBowc),
                        disabled: !s,
                        onChange: q.xM.updateSetting,
                        children: ea.intl.string(ea.t.XahVjo)
                    })
                })
            ]
        });
    }
    renderDataPrivacy() {
        let { usageStatistics: e, personalization: t, dropsOptedOut: n } = this.props;
        return (0, r.jsxs)(p.FormSection, {
            className: ed.marginBottom40,
            children: [
                (0, r.jsx)(p.FormTitle, {
                    tag: p.FormTitleTags.H5,
                    className: ed.marginBottom8,
                    children: ea.intl.string(ea.t.e0rLYW)
                }),
                (0, r.jsx)(M.F, {
                    setting: es.s6.PRIVACY_DATA_IMPROVE_DISCORD,
                    children: (0, r.jsx)(p.FormSwitch, {
                        value: e,
                        note: ea.intl.format(ea.t['5R5aSk'], { helpdeskArticle: Y.Z.getArticleURL(er.BhN.DATA_USED_TO_IMPROVE_DISCORD) }),
                        onChange: this.handleUsageStatisticsChange,
                        children: ea.intl.string(ea.t.XuADY2)
                    })
                }),
                (0, r.jsx)(M.F, {
                    setting: es.s6.PRIVACY_DATA_PERSONALIZE,
                    children: (0, r.jsx)(p.FormSwitch, {
                        value: t,
                        note: ea.intl.format(ea.t.MWpAhI, { helpdeskArticle: Y.Z.getArticleURL(er.BhN.DATA_USED_FOR_RECOMMENDED) }),
                        onChange: this.handlePersonalizationChange,
                        children: ea.intl.string(ea.t.MNKzys)
                    })
                }),
                (0, r.jsx)(M.F, {
                    setting: es.s6.PRIVACY_DATA_QUESTS,
                    children: (0, r.jsx)(p.FormSwitch, {
                        value: !n,
                        note: ea.intl.format(ea.t['7Q2yX1'], { helpdeskArticle: Y.Z.getArticleURL(er.BhN.QUESTS_PRIVACY_CONTROLS) }),
                        onChange: this.handleChangeDropsOptedOut,
                        children: (0, r.jsx)('div', { children: ea.intl.string(ea.t.VkS7YW) })
                    })
                }),
                (0, r.jsxs)(M.F, {
                    setting: es.s6.PRIVACY_DATA_BASIC_SERVICE,
                    children: [
                        (0, r.jsx)(p.FormTitle, {
                            tag: p.FormTitleTags.H3,
                            className: o()(ed.marginTop20, ed.marginBottom8),
                            children: ea.intl.string(ea.t.D60Gfn)
                        }),
                        (0, r.jsx)(p.FormText, {
                            type: p.FormTextTypes.DESCRIPTION,
                            className: ed.marginBottom20,
                            children: ea.intl.format(ea.t.R5N31N, {
                                onClick: () => {
                                    _.Z.setSection(er.oAB.ACCOUNT);
                                }
                            })
                        }),
                        (0, r.jsx)(p.FormDivider, { className: ed.marginBottom20 })
                    ]
                }),
                (0, r.jsx)(M.F, {
                    setting: es.s6.PRIVACY_DATA_REQUEST,
                    children: this.renderHarvestRequest()
                })
            ]
        });
    }
    renderHarvestRequest() {
        let e;
        let { currentUser: t } = this.props,
            { requestingHarvest: n, currentHarvestRequest: i } = this.state,
            s = (0, K.$6)(i, t),
            a = (0, r.jsx)(p.Tooltip, {
                text: t.verified ? null : ea.intl.string(ea.t['c1f88/']),
                children: (e) => {
                    let { onMouseEnter: t, onMouseLeave: i } = e;
                    return (0, r.jsx)(p.Button, {
                        disabled: s,
                        onClick: this.handleDataDownloadRequest,
                        onMouseEnter: t,
                        onMouseLeave: i,
                        look: p.Button.Looks.FILLED,
                        color: p.Button.Colors.BRAND,
                        submitting: n,
                        children: ea.intl.string(ea.t.dmBSKi)
                    });
                }
            });
        return (
            s &&
                null != i &&
                ((e = (0, r.jsx)(p.Card, {
                    className: ec.card,
                    children: (0, r.jsx)(p.Text, {
                        variant: 'text-md/normal',
                        children: ea.intl.format(ea.t.RNDlV1, { date: m()(i.created_at).add(er.eBq, 'days').format('MMMM Do YYYY') })
                    })
                })),
                (a = null)),
            null != a && (a = (0, r.jsx)(f.Z, { children: a })),
            (0, r.jsxs)(l.Fragment, {
                children: [
                    (0, r.jsx)(p.FormTitle, {
                        tag: p.FormTitleTags.H3,
                        children: ea.intl.string(ea.t.XAHCgI)
                    }),
                    (0, r.jsx)(p.FormText, {
                        type: p.FormTextTypes.DESCRIPTION,
                        className: ed.marginBottom20,
                        children: ea.intl.format(ea.t['3en439'], { helpdeskArticle: Y.Z.getArticleURL(er.BhN.GDPR_REQUEST_DATA) })
                    }),
                    e,
                    a
                ]
            })
        );
    }
    renderPrivacyAndTermsNote() {
        return (0, r.jsx)(p.FormSection, {
            className: ed.marginBottom40,
            children: (0, r.jsx)(p.FormNotice, {
                type: p.FormNotice.Types.PRIMARY,
                body: ea.intl.format(ea.t.xvCsx8, {
                    termsLink: er.EYA.TERMS,
                    privacyLink: er.EYA.PRIVACY
                })
            })
        });
    }
    renderStaffOnlySettings() {
        let { nonSpamRetrainingOptIn: e } = this.props;
        return (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)(p.FormDivider, { className: ed.marginBottom20 }),
                (0, r.jsxs)(p.FormSection, {
                    className: ed.marginBottom40,
                    children: [
                        (0, r.jsx)(p.FormTitle, {
                            tag: p.FormTitleTags.H5,
                            className: ed.marginBottom8,
                            children: ea.intl.string(ea.t.Fwp9SU)
                        }),
                        (0, r.jsxs)(p.FormItem, {
                            tag: p.FormTitleTags.H5,
                            className: ed.marginBottom4,
                            children: [
                                (0, r.jsx)(p.FormText, {
                                    type: p.FormTextTypes.DESCRIPTION,
                                    className: ed.marginBottom8,
                                    children: ea.intl.string(ea.t.toqSSE)
                                }),
                                (0, r.jsx)(p.RadioGroup, {
                                    options: (0, K.xH)(),
                                    value: null == e ? K.g0.UNDECIDED : e ? K.g0.OPTIN : K.g0.OPTOUT,
                                    onChange: (e) => {
                                        let { value: t } = e;
                                        return q.kJ.updateSetting(K.ac[t]);
                                    }
                                })
                            ]
                        })
                    ]
                })
            ]
        });
    }
    renderSettingsBody() {
        let { fetchedConsents: e } = this.props;
        return (0, r.jsxs)(p.FormSection, {
            tag: p.FormTitleTags.H1,
            title: ea.intl.string(ea.t.sKMrpq),
            children: [
                this.renderDMSafety(),
                (0, r.jsx)(M.F, {
                    setting: es.s6.PRIVACY_KEYWORD_FILTER,
                    children: this.renderKeywordFiltering()
                }),
                (0, r.jsx)(M.F, {
                    setting: es.s6.PRIVACY_SERVER_PRIVACY_DEFAULTS,
                    children: this.renderServerPrivacy()
                }),
                (0, r.jsx)(M.F, {
                    setting: es.s6.PRIVACY_DATA_PRIVACY,
                    children: e ? this.renderDataPrivacy() : null
                }),
                (0, r.jsx)(M.F, {
                    setting: es.s6.PRIVACY_TERMS_POLICY,
                    children: this.renderPrivacyAndTermsNote()
                }),
                (0, r.jsx)(M.F, {
                    setting: es.s6.PRIVACY_STAFF_ONLY,
                    children: this.renderStaffOnlySettings()
                })
            ]
        });
    }
    render() {
        let { isSecureFramesEnabled: e, subsection: t } = this.props;
        return (0, r.jsx)(J.Z, {
            parentSetting: es.s6.PRIVACY_AND_SAFETY,
            settingsSection: er.oAB.PRIVACY_AND_SAFETY,
            defaultTabIndex: 'ACCOUNT_STANDING' === t ? 2 : void 0,
            tabs: [
                {
                    title: ea.intl.string(ea.t.YpEWSk),
                    component: this.renderSettingsBody(),
                    setting: es.s6.PRIVACY_USER_SETTINGS
                },
                {
                    title: ea.intl.string(ea.t['tp/UVF']),
                    component: (0, r.jsx)(em, {}),
                    setting: es.s6.PRIVACY_SERVER_SPECIFIC_SETTINGS
                },
                {
                    title: ea.intl.string(ea.t['00Sfl5']),
                    component: (0, r.jsx)(B.Z, {}),
                    setting: es.s6.PRIVACY_ACCOUNT_STANDING
                },
                {
                    title: ea.intl.string(ea.t.hWMIiY),
                    component: (0, r.jsx)($.Z, {}),
                    setting: es.s6.PRIVACY_ENCRYPTION,
                    predicate: () => e && (0, z.isDesktop)()
                }
            ]
        });
    }
    constructor(e) {
        super(e),
            eu(this, 'handleChangeDefaultGuildsRestricted', (e) => {
                this.setState({ defaultGuildsRestricted: !e }, () => this.showGuildRestrictionModal(!e));
            }),
            eu(this, 'handleChangeDropsOptedOut', () => {
                q.bh.updateSetting(!this.props.dropsOptedOut);
            }),
            eu(this, 'handleUsageStatisticsChange', () => {
                this.props.usageStatistics
                    ? eT({
                          header: ea.intl.string(ea.t.OdPCbG),
                          body: ea.intl.string(ea.t.MGWabG),
                          confirmText: ea.intl.string(ea.t['D3+rU1']),
                          cancelText: ea.intl.string(ea.t.kYpG0t),
                          onConfirm: () => (0, T.g)([], [er.pjP.USAGE_STATISTICS]).catch(eC)
                      })
                    : (0, T.g)([er.pjP.USAGE_STATISTICS], []).catch(eC);
            }),
            eu(this, 'handlePersonalizationChange', () => {
                this.props.personalization
                    ? eT({
                          header: ea.intl.string(ea.t['9SNpzs']),
                          confirmText: ea.intl.string(ea.t['9g5UGx']),
                          cancelText: ea.intl.string(ea.t['+ZLPw8']),
                          onConfirm: () => {
                              (0, T.g)([], [er.pjP.PERSONALIZATION]).catch(eC);
                          },
                          body: ea.intl.string(ea.t.gJvDDg)
                      })
                    : (0, T.g)([er.pjP.PERSONALIZATION], []).catch(eC);
            }),
            eu(this, 'handleDataDownloadRequest', () => {
                var e;
                (e = {
                    header: ea.intl.string(ea.t.jxXMEx),
                    body: ea.intl.format(ea.t.fSv59f, { helpdeskArticle: Y.Z.getArticleURL(er.BhN.GDPR_PACKAGE_CONTENTS) }),
                    confirmText: ea.intl.string(ea.t.NYgNg4),
                    cancelText: ea.intl.string(ea.t.jpVjsr),
                    confirmButtonColor: p.Button.Colors.BRAND,
                    onConfirm: (e) => {
                        this.setState({ requestingHarvest: !0 }, () => {
                            (0, C.V3)(e)
                                .then(
                                    (e) => {
                                        null != e && null != e.body
                                            ? (this.setState({ currentHarvestRequest: e.body }), S.Z.show({ body: ea.intl.string(ea.t['6Nmv4u']) }))
                                            : S.Z.show({
                                                  title: ea.intl.string(ea.t.OjbtDg),
                                                  body: ea.intl.string(ea.t['0F5Jys'])
                                              });
                                    },
                                    () =>
                                        S.Z.show({
                                            title: ea.intl.string(ea.t.OjbtDg),
                                            body: ea.intl.string(ea.t['0F5Jys'])
                                        })
                                )
                                .finally(() => this.setState({ requestingHarvest: !1 }));
                        });
                    }
                }),
                    (0, p.openModal)((t) =>
                        (0, r.jsx)(eS, {
                            modalProps: t,
                            settings: e
                        })
                    );
            });
        let { defaultGuildsRestricted: t, subsection: n } = e;
        this.state = {
            defaultGuildsRestricted: t,
            currentHarvestRequest: null,
            requestingHarvest: !0,
            selectedTab: null != n ? n : el.SU.SETTINGS
        };
    }
}
function eE() {
    let e = (0, h.e7)([V.default], () => {
            let e = V.default.getCurrentUser();
            return d()(null != e, 'ConnectedUserSettingsPrivacySafety: currentUser cannot be undefined'), e;
        }),
        t = (0, h.cj)([k.Z], () => ({
            fetchedConsents: k.Z.fetchedConsents,
            usageStatistics: k.Z.hasConsented(er.pjP.USAGE_STATISTICS),
            personalization: k.Z.hasConsented(er.pjP.PERSONALIZATION)
        })),
        n = (0, h.e7)([y.Z], () => y.Z.getFetchError()),
        i = (0, h.e7)([U.Z], () => U.Z.getSubsection()),
        s = (0, I.yh)(),
        l = (0, j.Xo)({ location: 'web_user_privacy_and_safety_settings' }),
        { hasSearchResults: a, searchResults: o } = (0, ee.E)(),
        c = (0, O.p)(),
        u = (0, R.Z)(),
        { enabled: m } = (0, D.S)({ location: 'PrivacySafetySettings' });
    return (0, r.jsx)(e_, {
        currentUser: e,
        defaultGuildsRestricted: q.iG.useSetting(),
        nonSpamRetrainingOptIn: q.kJ.useSetting(),
        viewNsfwGuilds: q.DC.useSetting(),
        viewNsfwCommands: q.xM.useSetting(),
        explicitContentFilter: q.UP.useSetting(),
        keywordFilter: c,
        dmSpamFilter: q.Xr.useSetting(),
        showCurrentGame: q.G6.useSetting(),
        dropsOptedOut: q.bh.useSetting(),
        safetyHubFetchError: n,
        mediaRedactionIsEnabled: s,
        keywordFilteringExperimentEnabled: l,
        userIsConsideredAdult: null == u || u,
        subsection: i,
        searchFilter: a ? o : void 0,
        isSecureFramesEnabled: m,
        ...t
    });
}
