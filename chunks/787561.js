n.d(t, {
    X: function () {
        return M;
    }
}),
    n(47120),
    n(653041);
var s = n(735250),
    a = n(470079),
    i = n(120356),
    r = n.n(i),
    l = n(442837),
    o = n(544891),
    c = n(433517),
    d = n(481060),
    u = n(852860),
    _ = n(933557),
    I = n(769654),
    E = n(984933),
    T = n(650774),
    m = n(430824),
    N = n(496675),
    S = n(699516),
    h = n(594174),
    g = n(434404),
    C = n(999382),
    x = n(54842),
    p = n(981631),
    R = n(731455),
    f = n(689938),
    L = n(121276),
    O = n(922905);
let A = 'dismissedCommunityFeaturesUpsell',
    M = () => {
        let e;
        let {
                guild: t,
                submitting: n,
                errors: a
            } = (0, l.cj)([C.Z], () => ({
                submitting: C.Z.isSubmitting(),
                guild: C.Z.getGuild(),
                errors: C.Z.getErrors()
            })),
            i = Object.keys(a),
            r = i.length > 0 ? i[0] : null;
        if ('rules_channel_id' === r) e = f.Z.Messages.GUILD_RULES_INVALID_CHANNEL;
        else e = null != r ? a[r] : void 0;
        return (0, s.jsx)(u.Z, {
            submitting: n,
            onReset: () => {
                if (null != t) g.Z.init(t.id);
            },
            onSave: () => {
                if (null != t)
                    g.Z.saveGuild(t.id, {
                        rulesChannelId: t.rulesChannelId,
                        preferredLocale: t.preferredLocale,
                        safetyAlertsChannelId: t.safetyAlertsChannelId,
                        publicUpdatesChannelId: t.publicUpdatesChannelId,
                        description: t.description,
                        features: t.features
                    });
            },
            errorMessage: e
        });
    },
    D = (e) => {
        let { discoveryEnabled: t, onboardingEnabled: n, guild: i } = e,
            [r, u] = a.useState(!0 === c.K.get(A)),
            _ = (0, l.e7)([T.Z], () => {
                var e;
                return null !== (e = T.Z.getMemberCount(i.id)) && void 0 !== e ? e : 0;
            }),
            [E, N] = a.useState(!1);
        a.useEffect(() => {
            o.tn
                .get(p.ANM.GUILD_ADMIN_SERVER_ELIGIBILITY(i.id))
                .then((e) => {
                    N(e.body.eligible_for_admin_server);
                })
                .catch(() => N(!1));
        }, []);
        let S = (0, l.e7)([m.Z], () => m.Z.getGuild('942897714956472401')),
            h = i.isCommunity() && _ >= 1000 && E && !(null != S);
        if (t && n && !h) return null;
        let C = async () => {
            try {
                let e = await o.tn.post({
                    url: p.ANM.JOIN_ADMIN_SERVER(i.id),
                    oldFormErrors: !0
                });
                g.Z.close(), (0, I.X)(e.body.id);
            } catch {}
        };
        return r && !h
            ? null
            : (0, s.jsxs)('div', {
                  className: L.upsellContainer,
                  children: [
                      (0, s.jsxs)('div', {
                          className: L.upsellContent,
                          children: [
                              (0, s.jsx)('img', {
                                  src: O,
                                  alt: '',
                                  width: 60,
                                  className: L.upsellImage
                              }),
                              (0, s.jsxs)('div', {
                                  children: [
                                      (0, s.jsx)(d.Heading, {
                                          variant: 'heading-md/semibold',
                                          className: L.upsellHeader,
                                          children: f.Z.Messages.GUILD_SETTINGS_COMMUNITY_UPSELL_HEADER
                                      }),
                                      (0, s.jsx)(d.Text, {
                                          variant: 'text-sm/normal',
                                          children: f.Z.Messages.GUILD_SETTINGS_COMMUNITY_UPSELL_BODY
                                      })
                                  ]
                              })
                          ]
                      }),
                      (0, s.jsx)(d.Button, {
                          'aria-label': f.Z.Messages.CLOSE,
                          look: d.Button.Looks.BLANK,
                          size: d.Button.Sizes.NONE,
                          className: L.upsellClose,
                          onClick: () => {
                              c.K.set(A, !0), u(!0);
                          },
                          children: (0, s.jsx)(d.XSmallIcon, {
                              size: 'md',
                              color: 'currentColor'
                          })
                      }),
                      (0, s.jsxs)('div', {
                          className: L.upsellFooter,
                          children: [
                              h &&
                                  (0, s.jsx)(d.Button, {
                                      size: d.Button.Sizes.SMALL,
                                      onClick: C,
                                      className: L.upsellButton,
                                      children: f.Z.Messages.GUILD_SETTINGS_COMMUNITY_UPSELL_BUTTON_ADMIN_SERVER
                                  }),
                              n
                                  ? null
                                  : (0, s.jsx)(d.Button, {
                                        size: d.Button.Sizes.SMALL,
                                        onClick: () => {
                                            g.Z.setSection(p.pNK.ONBOARDING);
                                        },
                                        className: L.upsellButton,
                                        children: f.Z.Messages.GUILD_SETTINGS_COMMUNITY_UPSELL_BUTTON_ONBOARDING
                                    }),
                              t
                                  ? null
                                  : (0, s.jsx)(d.Button, {
                                        size: d.Button.Sizes.SMALL,
                                        onClick: () => {
                                            g.Z.setSection(p.pNK.DISCOVERY);
                                        },
                                        className: L.upsellButton,
                                        color: d.Button.Colors.PRIMARY,
                                        children: f.Z.Messages.GUILD_SETTINGS_COMMUNITY_UPSELL_BUTTON_DISCOVERY
                                    }),
                              (0, s.jsx)(d.Button, {
                                  size: d.Button.Sizes.SMALL,
                                  onClick: () => {
                                      g.Z.setSection(p.pNK.ANALYTICS);
                                  },
                                  className: L.upsellButton,
                                  color: d.Button.Colors.PRIMARY,
                                  children: f.Z.Messages.GUILD_SETTINGS_COMMUNITY_UPSELL_BUTTON_ANALYTICS
                              })
                          ]
                      })
                  ]
              });
    },
    v = () => {
        let e = (0, l.e7)([C.Z], () => C.Z.getGuild()),
            { canManageGuild: t, isGuildAdmin: n } = (0, l.cj)([N.Z], () => ({
                canManageGuild: N.Z.can(p.Plq.MANAGE_GUILD, e),
                isGuildAdmin: N.Z.can(p.Plq.ADMINISTRATOR, e)
            })),
            i = (0, l.e7)([E.ZP], () => (null != e ? E.ZP.getChannels(e.id) : null)),
            o = a.useMemo(R.jb, []),
            u = !0 !== c.K.get(A);
        if (null == e) return null;
        let I = [];
        null != i &&
            i[E.sH].forEach((e) => {
                let { channel: t } = e;
                t.type === p.d4z.GUILD_TEXT &&
                    I.push({
                        value: t.id,
                        label: (0, _.F6)(t, h.default, S.Z, !0)
                    });
            });
        let T = () => {
                g.Z.init(e.id), g.Z.open(e.id, p.pNK.MEMBER_VERIFICATION);
            },
            m = () => {
                if (null == e) return;
                let t = new Set(e.features);
                t.delete(p.oNc.COMMUNITY),
                    t.delete(p.oNc.DISCOVERABLE),
                    !e.hasFeature(p.oNc.CLAN) && t.delete(p.oNc.MEMBER_VERIFICATION_GATE_ENABLED),
                    t.delete(p.oNc.PREVIEW_ENABLED),
                    g.Z.updateGuild({
                        features: t,
                        rulesChannelId: null,
                        publicUpdatesChannelId: null
                    });
            },
            x = (e) => {
                g.Z.updateGuild({ rulesChannelId: e });
            },
            O = (e) => {
                g.Z.updateGuild({ safetyAlertsChannelId: e });
            },
            M = (e) => {
                g.Z.updateGuild({ publicUpdatesChannelId: e });
            },
            v = (e) => {
                g.Z.updateGuild({ preferredLocale: e });
            },
            j = (e) => {
                g.Z.updateGuild({ description: e });
            },
            Z = () => {
                e.features.has(p.oNc.DISCOVERABLE) && e.features.has(p.oNc.PARTNERED)
                    ? (0, d.openModal)((e) =>
                          (0, s.jsx)(d.ConfirmModal, {
                              ...e,
                              header: f.Z.Messages.GUILD_SETTINGS_COMMUNITY_DISABLE_PUBLIC_CONFIRM_DEFAULT_TITLE,
                              confirmText: f.Z.Messages.CONFIRM,
                              cancelText: f.Z.Messages.NEVERMIND,
                              onConfirm: m,
                              children: (0, s.jsx)(d.Text, {
                                  variant: 'text-sm/normal',
                                  children: f.Z.Messages.GUILD_SETTINGS_PARTNER_AND_DISCOVERY_DISABLE_PUBLIC_CONFIRM_TEXT
                              })
                          })
                      )
                    : e.features.has(p.oNc.DISCOVERABLE)
                      ? (0, d.openModal)((e) =>
                            (0, s.jsx)(d.ConfirmModal, {
                                ...e,
                                header: f.Z.Messages.GUILD_SETTINGS_COMMUNITY_DISABLE_PUBLIC_CONFIRM_DEFAULT_TITLE,
                                confirmText: f.Z.Messages.CONFIRM,
                                cancelText: f.Z.Messages.NEVERMIND,
                                onConfirm: m,
                                children: (0, s.jsx)(d.Text, {
                                    variant: 'text-sm/normal',
                                    children: f.Z.Messages.GUILD_SETTINGS_DISCOVERY_DISABLE_PUBLIC_CONFIRM_TEXT
                                })
                            })
                        )
                      : e.features.has(p.oNc.PARTNERED)
                        ? (0, d.openModal)((e) =>
                              (0, s.jsx)(d.ConfirmModal, {
                                  ...e,
                                  header: f.Z.Messages.GUILD_SETTINGS_COMMUNITY_DISABLE_PUBLIC_CONFIRM_DEFAULT_TITLE,
                                  confirmText: f.Z.Messages.CONFIRM,
                                  cancelText: f.Z.Messages.NEVERMIND,
                                  onConfirm: m,
                                  children: (0, s.jsx)(d.Text, {
                                      variant: 'text-sm/normal',
                                      children: f.Z.Messages.GUILD_SETTINGS_PARTNER_DISABLE_PUBLIC_CONFIRM_TEXT
                                  })
                              })
                          )
                        : e.features.has(p.oNc.MEMBER_VERIFICATION_GATE_ENABLED) && !e.features.has(p.oNc.CLAN)
                          ? (0, d.openModal)((e) =>
                                (0, s.jsx)(d.ConfirmModal, {
                                    ...e,
                                    header: f.Z.Messages.GUILD_SETTINGS_COMMUNITY_DISABLE_PUBLIC_CONFIRM_DEFAULT_TITLE,
                                    confirmButtonColor: d.Button.Colors.BRAND,
                                    confirmText: f.Z.Messages.GUILD_SETTINGS_COMMUNITY_DISABLE_MEMBER_VERIFICATION_CONFIRM,
                                    cancelText: f.Z.Messages.NEVERMIND,
                                    onConfirm: T,
                                    children: (0, s.jsx)(d.Text, {
                                        variant: 'text-sm/normal',
                                        children: f.Z.Messages.GUILD_SETTINGS_COMMUNITY_DISABLE_MEMBER_VERIFICATION
                                    })
                                })
                            )
                          : m();
            };
        return (0, s.jsxs)(d.FormSection, {
            title: f.Z.Messages.GUILD_SETTINGS_COMMUNITY,
            tag: d.FormTitleTags.H1,
            children: [
                u
                    ? (0, s.jsx)(D, {
                          discoveryEnabled: e.features.has(p.oNc.DISCOVERABLE),
                          onboardingEnabled: e.features.has(p.oNc.GUILD_ONBOARDING),
                          guild: e
                      })
                    : null,
                (0, s.jsxs)(d.FormSection, {
                    className: r()(L.twoColumnFormSection, L.firstSection),
                    children: [
                        (0, s.jsxs)('div', {
                            className: L.descriptionColumn,
                            children: [
                                (0, s.jsx)(d.FormTitle, {
                                    className: L.formTitle,
                                    children: f.Z.Messages.FORM_LABEL_DISCOVERY_RULES_CHANNEL
                                }),
                                (0, s.jsx)(d.FormText, {
                                    type: d.FormTextTypes.DESCRIPTION,
                                    className: L.__invalid_formDescription,
                                    children: f.Z.Messages.GUILD_SETTINGS_COMMUNITY_RULES_CHANNEL_HELP
                                })
                            ]
                        }),
                        (0, s.jsx)('div', {
                            className: L.selectColumn,
                            children: (0, s.jsx)(d.SearchableSelect, {
                                value: e.rulesChannelId,
                                options: I,
                                onChange: x,
                                isDisabled: !t
                            })
                        })
                    ]
                }),
                (0, s.jsx)(d.FormDivider, { className: L.divider }),
                (0, s.jsxs)(d.FormSection, {
                    className: r()(L.twoColumnFormSection, L.firstSection),
                    children: [
                        (0, s.jsxs)('div', {
                            className: L.descriptionColumn,
                            children: [
                                (0, s.jsx)(d.FormTitle, {
                                    className: L.formTitle,
                                    children: f.Z.Messages.GUILD_SETTINGS_COMMUNITY_MOD_CHANNEL_TITLE
                                }),
                                (0, s.jsx)(d.FormText, {
                                    type: d.FormTextTypes.DESCRIPTION,
                                    className: L.__invalid_formDescription,
                                    children: f.Z.Messages.GUILD_SETTINGS_COMMUNITY_MOD_CHANNEL_HELP
                                })
                            ]
                        }),
                        (0, s.jsx)('div', {
                            className: L.selectColumn,
                            children: (0, s.jsx)(d.SearchableSelect, {
                                value: e.publicUpdatesChannelId,
                                options: I,
                                onChange: M,
                                isDisabled: !n
                            })
                        })
                    ]
                }),
                (0, s.jsx)(d.FormDivider, { className: L.divider }),
                (0, s.jsxs)(d.FormSection, {
                    className: r()(L.twoColumnFormSection, L.firstSection),
                    children: [
                        (0, s.jsxs)('div', {
                            className: L.descriptionColumn,
                            children: [
                                (0, s.jsx)(d.FormTitle, {
                                    className: L.formTitle,
                                    children: f.Z.Messages.GUILD_ANTIRAID_SAFETY_CHANNEL_TITLE
                                }),
                                (0, s.jsx)(d.FormText, {
                                    type: d.FormTextTypes.DESCRIPTION,
                                    className: L.__invalid_formDescription,
                                    children: f.Z.Messages.GUILD_ANTIRAID_SAFETY_CHANNEL_DESCRIPTION
                                })
                            ]
                        }),
                        (0, s.jsx)('div', {
                            className: L.selectColumn,
                            children: (0, s.jsx)(d.SearchableSelect, {
                                value: e.safetyAlertsChannelId,
                                options: I,
                                onChange: O,
                                isDisabled: !t
                            })
                        })
                    ]
                }),
                (0, s.jsx)(d.FormDivider, { className: L.divider }),
                (0, s.jsxs)(d.FormSection, {
                    className: L.twoColumnFormSection,
                    children: [
                        (0, s.jsxs)('div', {
                            className: L.descriptionColumn,
                            children: [
                                (0, s.jsx)(d.FormTitle, {
                                    className: L.formTitle,
                                    children: f.Z.Messages.FORM_LABEL_SERVER_LANGUAGE
                                }),
                                (0, s.jsx)(d.FormText, {
                                    type: d.FormTextTypes.DESCRIPTION,
                                    className: L.__invalid_formDescription,
                                    children: f.Z.Messages.GUILD_SETTINGS_COMMUNITY_LOCALE_HELP
                                })
                            ]
                        }),
                        (0, s.jsx)('div', {
                            className: L.selectColumn,
                            children: (0, s.jsx)(d.SearchableSelect, {
                                value: e.preferredLocale,
                                options: o,
                                onChange: v,
                                isDisabled: !t
                            })
                        })
                    ]
                }),
                (0, s.jsx)(d.FormDivider, { className: L.divider }),
                (() => {
                    var n;
                    if (null != e)
                        return (0, s.jsxs)(d.FormSection, {
                            children: [
                                (0, s.jsx)(d.FormTitle, {
                                    className: L.formTitle,
                                    children: f.Z.Messages.FORM_LABEL_SERVER_DESCRIPTION
                                }),
                                (0, s.jsx)(d.FormText, {
                                    className: L.description,
                                    type: d.FormTextTypes.DESCRIPTION,
                                    children: f.Z.Messages.FORM_HELP_SERVER_DESCRIPTION
                                }),
                                (0, s.jsx)(d.TextArea, {
                                    value: null !== (n = e.description) && void 0 !== n ? n : '',
                                    placeholder: f.Z.Messages.SERVER_DESCIPTION_EMPTY,
                                    onChange: j,
                                    maxLength: 120,
                                    disabled: !t
                                })
                            ]
                        });
                })(),
                (0, s.jsx)(d.FormDivider, { className: L.divider }),
                (0, s.jsxs)(d.FormSection, {
                    className: L.twoColumnFormSection,
                    children: [
                        (0, s.jsxs)('div', {
                            className: L.descriptionColumn,
                            children: [
                                (0, s.jsx)(d.FormTitle, {
                                    className: L.formTitle,
                                    children: f.Z.Messages.GUILD_SETTINGS_COMMUNITY_DISABLE_COMMUNITY
                                }),
                                (0, s.jsx)(d.FormText, {
                                    type: d.FormTextTypes.DESCRIPTION,
                                    className: L.__invalid_formDescription,
                                    children: f.Z.Messages.GUILD_SETTINGS_COMMUNITY_DISABLE_COMMUNITY_DESCRIPTION
                                })
                            ]
                        }),
                        (0, s.jsx)(d.Tooltip, {
                            text: n ? null : f.Z.Messages.GUILD_SETTINGS_COMMUNITY_ADMINISTRATOR_ONLY,
                            'aria-label': n ? void 0 : f.Z.Messages.GUILD_SETTINGS_COMMUNITY_ADMINISTRATOR_ONLY,
                            children: (e) =>
                                (0, s.jsx)(d.Button, {
                                    size: d.Button.Sizes.SMALL,
                                    onClick: Z,
                                    color: d.Button.Colors.RED,
                                    disabled: !n,
                                    ...e,
                                    children: f.Z.Messages.GUILD_SETTINGS_COMMUNITY_DISABLE_COMMUNITY
                                })
                        })
                    ]
                })
            ]
        });
    };
t.Z = () => {
    let e = (0, l.e7)([C.Z], () => C.Z.getGuild());
    return null == e ? null : e.features.has(p.oNc.COMMUNITY) ? (0, s.jsx)(v, {}) : (0, s.jsx)(x.Z, { guild: e });
};
