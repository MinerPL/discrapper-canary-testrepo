n.d(t, {
    Q5: function () {
        return A;
    },
    Sf: function () {
        return O;
    },
    ZP: function () {
        return M;
    }
}),
    n(47120);
var s,
    a = n(735250),
    i = n(470079),
    r = n(120356),
    l = n.n(r),
    o = n(512722),
    c = n.n(o),
    d = n(442837),
    u = n(692547),
    _ = n(481060),
    I = n(570140),
    E = n(484614),
    T = n(852860),
    m = n(881052),
    N = n(751189),
    S = n(409059),
    h = n(518936),
    g = n(999382),
    C = n(58346),
    x = n(689938),
    p = n(155778),
    R = n(224499);
function f(e, t, n) {
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
class L extends (s = d.ZP.Store) {
    getTemplate() {
        let e = g.Z.getProps().guild;
        if (null == e) return null;
        let t = S.Z.getForGuild(e.id);
        return null != t && t.state !== C.Rj.RESOLVING ? t : null;
    }
    showNotice() {
        let e = this.getTemplate();
        return null != e && null != this.name && '' !== this.name && (this.name.trim() !== e.name || this.description.trim() !== e.description);
    }
    constructor(...e) {
        super(...e),
            f(this, 'name', ''),
            f(this, 'description', ''),
            f(this, 'error', null),
            f(this, 'reset', () => {
                let e = this.getTemplate();
                if (null != e) {
                    var t, n;
                    (this.name = null !== (t = e.name) && void 0 !== t ? t : this.name), (this.description = null !== (n = e.description) && void 0 !== n ? n : this.description);
                } else (this.name = ''), (this.description = '');
                this.emitChange();
            }),
            f(this, 'setName', (e) => {
                (this.name = e), this.emitChange();
            }),
            f(this, 'setDescription', (e) => {
                (this.description = e), this.emitChange();
            }),
            f(this, 'setError', (e) => {
                (this.error = e), this.emitChange();
            }),
            f(this, 'save', async () => {
                await N.Z.updateGuildTemplate(g.Z.getProps().guild.id, this.getTemplate().code, this.name, this.description), this.emitChange();
            });
    }
}
f(L, 'displayName', 'GuildSettingsTemplateMetadataStore_');
let O = new L(I.Z);
function A() {
    let [e, t] = i.useState(!1),
        n = async () => {
            t(!0), await O.save(), t(!1);
        };
    return (0, a.jsx)(T.Z, {
        submitting: e,
        onReset: O.reset,
        onSave: n
    });
}
function M() {
    return (0, a.jsx)(_.FormSection, {
        className: R.marginBottom4,
        children: (0, a.jsxs)(_.HeadingLevel, {
            component: (0, a.jsx)(_.FormTitle, {
                tag: _.FormTitleTags.H1,
                children: x.Z.Messages.GUILD_TEMPLATES
            }),
            children: [
                (0, a.jsx)(_.FormText, {
                    className: R.marginBottom20,
                    type: _.FormTextTypes.DESCRIPTION,
                    children: x.Z.Messages.GUILD_TEMPLATE_SETTINGS_DESCRIPTION.format()
                }),
                (0, a.jsx)(v, {}),
                (0, a.jsx)(_.FormDivider, { className: p.divider }),
                (0, a.jsx)(D, {})
            ]
        })
    });
}
function D() {
    let { guild: e } = g.Z.getProps();
    c()(null != e, 'guild cannot be null');
    let t = (0, d.e7)([O], () => O.error),
        [n, s] = i.useState(!0),
        { loading: r, guildTemplate: l } = (function (e) {
            let [t, n] = i.useState(!0);
            return (
                i.useEffect(() => {
                    (async function t() {
                        n(!0);
                        try {
                            await N.Z.loadTemplatesForGuild(e), n(!1);
                        } catch (e) {
                            O.setError(new m.Hx(e));
                        }
                    })();
                }, [e]),
                {
                    loading: t,
                    guildTemplate: (0, d.e7)([S.Z], () => S.Z.getForGuild(e), [e])
                }
            );
        })(e.id);
    if (
        (i.useEffect(() => {
            if (!!n && !r) {
                if (null != l) {
                    var e, t;
                    O.setName(null !== (e = l.name) && void 0 !== e ? e : ''), O.setDescription(null !== (t = l.description) && void 0 !== t ? t : '');
                }
                s(!1);
            }
        }, [n, l, r]),
        i.useEffect(
            () => () => {
                O.reset(), O.setError(null);
            },
            []
        ),
        n)
    )
        return null != t
            ? (0, a.jsx)(_.Text, {
                  color: 'text-danger',
                  variant: 'text-sm/normal',
                  children: t.message
              })
            : (0, a.jsx)(_.Spinner, { className: R.marginTop40 });
    let o = null != t && null == t.getFirstFieldErrorMessage('name') && null == t.getFirstFieldErrorMessage('description');
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsx)(Z, {}),
            (0, a.jsx)(b, {
                guild: e,
                guildTemplate: l
            }),
            o
                ? (0, a.jsx)(_.Text, {
                      className: R.marginTop8,
                      color: 'text-danger',
                      variant: 'text-sm/normal',
                      children: t.getAnyErrorMessage()
                  })
                : null
        ]
    });
}
function v() {
    return (0, a.jsxs)('div', {
        className: p.descriptionBox,
        children: [
            (0, a.jsxs)('div', {
                className: p.descriptionSection,
                children: [
                    (0, a.jsx)(_.Heading, {
                        variant: 'eyebrow',
                        children: x.Z.Messages.GUILD_TEMPLATES_FORM_DESCRIPTION_WILL_COPY
                    }),
                    (0, a.jsxs)('div', {
                        className: p.descriptionRow,
                        children: [
                            (0, a.jsx)(_.CircleCheckIcon, {
                                size: 'md',
                                className: p.descriptionIcon,
                                color: u.Z.unsafe_rawColors.GREEN_360.css,
                                secondaryColor: u.Z.unsafe_rawColors.WHITE_500.css
                            }),
                            x.Z.Messages.GUILD_TEMPLATES_FORM_DESCRIPTION_CHANNELS
                        ]
                    }),
                    (0, a.jsxs)('div', {
                        className: p.descriptionRow,
                        children: [
                            (0, a.jsx)(_.CircleCheckIcon, {
                                size: 'md',
                                className: p.descriptionIcon,
                                color: u.Z.unsafe_rawColors.GREEN_360.css,
                                secondaryColor: u.Z.unsafe_rawColors.WHITE_500.css
                            }),
                            x.Z.Messages.GUILD_TEMPLATES_FORM_DESCRIPTION_ROLES
                        ]
                    }),
                    (0, a.jsxs)('div', {
                        className: p.descriptionRow,
                        children: [
                            (0, a.jsx)(_.CircleCheckIcon, {
                                size: 'md',
                                className: p.descriptionIcon,
                                color: u.Z.unsafe_rawColors.GREEN_360.css,
                                secondaryColor: u.Z.unsafe_rawColors.WHITE_500.css
                            }),
                            x.Z.Messages.GUILD_TEMPLATES_FORM_DESCRIPTION_SETTINGS
                        ]
                    })
                ]
            }),
            (0, a.jsxs)('div', {
                className: p.descriptionSection,
                children: [
                    (0, a.jsx)(_.Heading, {
                        variant: 'eyebrow',
                        children: x.Z.Messages.GUILD_TEMPLATES_FORM_DESCRIPTION_WONT_COPY
                    }),
                    (0, a.jsxs)('div', {
                        className: p.descriptionRow,
                        children: [
                            (0, a.jsx)(_.CircleXIcon, {
                                size: 'md',
                                className: p.descriptionIcon,
                                color: u.Z.unsafe_rawColors.RED_400.css,
                                secondaryColor: u.Z.unsafe_rawColors.WHITE_500.css
                            }),
                            x.Z.Messages.GUILD_TEMPLATES_FORM_DESCRIPTION_MESSAGES
                        ]
                    }),
                    (0, a.jsxs)('div', {
                        className: p.descriptionRow,
                        children: [
                            (0, a.jsx)(_.CircleXIcon, {
                                size: 'md',
                                className: p.descriptionIcon,
                                color: u.Z.unsafe_rawColors.RED_400.css,
                                secondaryColor: u.Z.unsafe_rawColors.WHITE_500.css
                            }),
                            x.Z.Messages.GUILD_TEMPLATES_FORM_DESCRIPTION_MEMBERS
                        ]
                    }),
                    (0, a.jsxs)('div', {
                        className: p.descriptionRow,
                        children: [
                            (0, a.jsx)(_.CircleXIcon, {
                                size: 'md',
                                className: p.descriptionIcon,
                                color: u.Z.unsafe_rawColors.RED_400.css,
                                secondaryColor: u.Z.unsafe_rawColors.WHITE_500.css
                            }),
                            x.Z.Messages.GUILD_TEMPLATES_FORM_DESCRIPTION_PERKS
                        ]
                    })
                ]
            })
        ]
    });
}
function j(e) {
    let { cancel: t, confirm: n } = e;
    return (0, a.jsx)(_.DeclarativeConfirmModal, {
        dismissable: !0,
        header: x.Z.Messages.GUILD_TEMPLATES_DELETE_TEMPLATE,
        confirmText: x.Z.Messages.GUILD_TEMPLATES_DELETE_TEMPLATE,
        cancelText: x.Z.Messages.CANCEL,
        onCancel: t,
        onConfirm: n,
        children: (0, a.jsx)(_.Text, {
            variant: 'text-md/normal',
            color: 'text-normal',
            children: x.Z.Messages.GUILD_TEMPLATES_DELETE_DESCRIPTION
        })
    });
}
function Z() {
    let e = (0, d.e7)([O], () => O.name),
        t = (0, d.e7)([O], () => O.description),
        n = (0, d.e7)([O], () => O.error);
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsx)(_.FormItem, {
                className: R.marginBottom20,
                title: x.Z.Messages.GUILD_TEMPLATES_FORM_LABEL_NAME,
                error: null == n ? void 0 : n.getFirstFieldErrorMessage('name'),
                children: (0, a.jsx)(_.TextInput, {
                    value: e,
                    onChange: (e) => O.setName(e),
                    placeholder: x.Z.Messages.GUILD_TEMPLATES_FORM_PLACEHOLDER_NAME,
                    maxLength: 100
                })
            }),
            (0, a.jsx)(_.FormItem, {
                className: R.marginBottom20,
                title: x.Z.Messages.GUILD_TEMPLATES_FORM_LABEL_DESCRIPTION,
                error: null == n ? void 0 : n.getFirstFieldErrorMessage('description'),
                children: (0, a.jsx)(_.TextArea, {
                    value: t,
                    onChange: (e) => O.setDescription(e),
                    placeholder: x.Z.Messages.GUILD_TEMPLATES_FORM_PLACEHOLDER_DESCRIPTION,
                    maxLength: 120
                })
            })
        ]
    });
}
function b(e) {
    let { guild: t, guildTemplate: n } = e;
    return null == n
        ? (0, a.jsx)(U, { guild: t })
        : (0, a.jsxs)(a.Fragment, {
              children: [
                  (0, a.jsx)(_.FormItem, {
                      title: x.Z.Messages.GUILD_TEMPLATES_FORM_LABEL_LINK,
                      children: (0, a.jsx)(E.Z, {
                          buttonLook: _.Button.Looks.FILLED,
                          buttonColor: _.Button.Colors.BRAND,
                          value: (0, h.Z)(n.code)
                      })
                  }),
                  n.isDirty &&
                      (0, a.jsx)(_.Text, {
                          color: 'text-warning',
                          className: R.marginTop8,
                          variant: 'text-sm/normal',
                          children: x.Z.Messages.GUILD_TEMPLATES_UNSYNCED_WARNING
                      }),
                  (0, a.jsxs)('div', {
                      className: l()(R.marginTop20, p.buttonContainer),
                      children: [
                          n.isDirty &&
                              (0, a.jsx)(G, {
                                  guild: t,
                                  guildTemplate: n
                              }),
                          (0, a.jsxs)('div', {
                              className: p.rightButtonContainer,
                              children: [
                                  (0, a.jsx)(P, {
                                      guild: t,
                                      guildTemplate: n
                                  }),
                                  (0, a.jsx)(B, { guildTemplate: n })
                              ]
                          })
                      ]
                  }),
                  n.isDirty &&
                      (0, a.jsx)('div', {
                          className: p.lastSync,
                          children: x.Z.Messages.GUILD_TEMPLATES_LAST_SYNC.format({ timestamp: new Date(n.updatedAt) })
                      })
              ]
          });
}
function U(e) {
    var t;
    let { guild: n } = e,
        s = (0, d.e7)([O], () => O.name),
        [r, l] = i.useState(!1),
        o = async () => {
            O.setError(null), l(!0);
            try {
                await N.Z.createGuildTemplate(n.id, O.name, O.description);
            } catch (e) {
                O.setError(new m.Hx(e));
            }
            l(!1);
        };
    return (0, a.jsx)(_.Button, {
        submitting: r,
        disabled: !(null != (t = s) && t.trim().length >= 2),
        color: _.Button.Colors.BRAND,
        onClick: o,
        children: x.Z.Messages.GUILD_TEMPLATES_CREATE_LINK
    });
}
function G(e) {
    let { guild: t, guildTemplate: n } = e,
        [s, r] = i.useState(!1),
        l = async () => {
            O.setError(null), r(!0);
            try {
                await N.Z.syncGuildTemplate(t.id, n.code);
            } catch (e) {
                O.setError(new m.Hx(e));
            }
            r(!1);
        };
    return (0, a.jsx)(_.Button, {
        submitting: s,
        className: p.button,
        onClick: l,
        children: x.Z.Messages.GUILD_TEMPLATES_SYNC_TEMPLATE
    });
}
function P(e) {
    let { guild: t, guildTemplate: n } = e,
        [s, r] = i.useState(!1),
        l = async () => {
            O.setError(null);
            try {
                await N.Z.deleteGuildTemplate(t.id, n.code), O.setName(''), O.setDescription('');
            } catch (e) {
                O.setError(new m.Hx(e));
            }
            r(!1);
        };
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsx)(_.Button, {
                look: _.Button.Looks.OUTLINED,
                className: p.button,
                color: _.Button.Colors.RED,
                onClick: () => r(!0),
                children: x.Z.Messages.GUILD_TEMPLATES_DELETE_TEMPLATE
            }),
            s
                ? (0, a.jsx)(j, {
                      confirm: l,
                      cancel: () => r(!1)
                  })
                : null
        ]
    });
}
function B(e) {
    let { guildTemplate: t } = e;
    return (0, a.jsx)(_.Button, {
        color: _.Button.Colors.PRIMARY,
        className: p.button,
        onClick: () =>
            (0, _.openModalLazy)(async () => {
                let { default: e } = await Promise.all([n.e('10778'), n.e('79246')]).then(n.bind(n, 766775));
                return (n) =>
                    (0, a.jsx)(e, {
                        ...n,
                        guildTemplate: t
                    });
            }),
        children: x.Z.Messages.GUILD_TEMPLATES_PREVIEW_TEMPLATE
    });
}
