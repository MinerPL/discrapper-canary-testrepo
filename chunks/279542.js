n.d(t, {
    ZP: function () {
        return v;
    },
    fp: function () {
        return A;
    },
    k0: function () {
        return O;
    }
}),
    n(47120);
var s = n(735250),
    a = n(470079),
    i = n(120356),
    r = n.n(i),
    l = n(392711),
    o = n(442837),
    c = n(481060),
    d = n(230711),
    u = n(497321),
    _ = n(688465),
    I = n(241559),
    E = n(496675),
    T = n(246946),
    m = n(594174),
    N = n(63063),
    S = n(78451),
    h = n(434404),
    g = n(999382),
    C = n(181339),
    x = n(193544),
    p = n(981631),
    R = n(689938),
    f = n(14020);
function L(e) {
    let { guild: t } = e,
        n = (0, o.e7)([E.Z], () => null != t && E.Z.can(p.Plq.MANAGE_GUILD, t), [t]),
        i = a.useCallback(
            async (e) => {
                let { value: n } = e;
                try {
                    await h.Z.saveGuild(t.id, { verificationLevel: n }), h.Z.updateGuild({ verificationLevel: n });
                } catch (e) {
                    (0, c.showToast)((0, c.createToast)(R.Z.Messages.GUILD_ANTIRAID_SAFETY_SETUP_ERROR, c.ToastType.FAILURE));
                }
            },
            [t]
        ),
        r = a.useMemo(() => {
            let e = (0, S.IF)(null == t ? void 0 : t.hasFeature(p.oNc.COMMUNITY)).map((e) => ({
                ...e,
                tooltipPosition: 'left'
            }));
            return (0, S.LJ)(e);
        }, [t]),
        l = a.useMemo(() => r.find((e) => e.value === (null == t ? void 0 : t.verificationLevel)), [t, r]);
    return (0, s.jsxs)('div', {
        className: f.setupContainer,
        children: [
            (0, s.jsxs)('div', {
                className: f.switchItemTextContent,
                children: [
                    (0, s.jsx)(c.Text, {
                        color: 'header-primary',
                        variant: 'text-md/semibold',
                        children: R.Z.Messages.FORM_LABEL_VERIFICATION_LEVEL
                    }),
                    (0, s.jsx)(c.Text, {
                        color: 'header-secondary',
                        variant: 'text-sm/normal',
                        children: R.Z.Messages.FORM_HELP_VERIFICATION_LEVEL.format()
                    })
                ]
            }),
            (0, s.jsx)(x.Z, {
                changeTitle: R.Z.Messages.FORM_LABEL_VERIFICATION_LEVEL_CHANGE,
                value: null == l ? void 0 : l.value,
                options: r,
                disabled: !n,
                onChange: i
            })
        ]
    });
}
function O(e) {
    let { guild: t, className: n, withDivider: i = !0 } = e,
        l = (0, o.e7)([E.Z], () => null != t && E.Z.can(p.Plq.MANAGE_GUILD, t), [t]),
        d = a.useCallback(
            async (e) => {
                let { value: n } = e;
                try {
                    await h.Z.saveGuild(t.id, { explicitContentFilter: n }), h.Z.updateGuild({ explicitContentFilter: n });
                } catch (e) {
                    (0, c.showToast)((0, c.createToast)(R.Z.Messages.GUILD_ANTIRAID_SAFETY_SETUP_ERROR, c.ToastType.FAILURE));
                }
            },
            [t.id]
        ),
        u = a.useMemo(() => {
            let e = (0, S.MF)(null == t ? void 0 : t.hasFeature(p.oNc.COMMUNITY)).map((e) => ({
                ...e,
                tooltipPosition: 'left'
            }));
            return (0, S.LJ)(e);
        }, [t]),
        _ = a.useMemo(() => u.find((e) => e.value === (null == t ? void 0 : t.explicitContentFilter)), [t, u]);
    return (0, s.jsxs)(s.Fragment, {
        children: [
            i && (0, s.jsx)(c.FormDivider, { className: f.divider }),
            (0, s.jsxs)('div', {
                className: r()(f.setupContainer, n),
                children: [
                    (0, s.jsxs)('div', {
                        className: f.switchItemTextContent,
                        children: [
                            (0, s.jsx)(c.Text, {
                                color: 'header-primary',
                                variant: 'text-md/semibold',
                                children: R.Z.Messages.FORM_LABEL_EXPLICIT_CONTENT_FILTER_V2
                            }),
                            (0, s.jsx)(c.Text, {
                                color: 'header-secondary',
                                variant: 'text-sm/normal',
                                children: R.Z.Messages.FORM_HELP_EXPLICIT_CONTENT_FILTER_V2.format({ helpdeskArticle: N.Z.getArticleURL(p.BhN.SAFE_DIRECT_MESSAGING) })
                            })
                        ]
                    }),
                    (0, s.jsx)(x.Z, {
                        changeTitle: R.Z.Messages.FORM_LABEL_EXPLICIT_CONTENT_FILTER_CHANGE,
                        value: null == _ ? void 0 : _.value,
                        options: u,
                        disabled: !l,
                        onChange: d
                    })
                ]
            })
        ]
    });
}
async function A(e, t) {
    if (e.hasFeature(p.oNc.ENABLED_MODERATION_EXPERIENCE_FOR_NON_COMMUNITY) === t) return;
    let n = e.features;
    return t ? n.add(p.oNc.ENABLED_MODERATION_EXPERIENCE_FOR_NON_COMMUNITY) : n.delete(p.oNc.ENABLED_MODERATION_EXPERIENCE_FOR_NON_COMMUNITY), await h.Z.saveGuild(e.id, { features: n });
}
function M(e) {
    let { guild: t } = e,
        n = (0, o.e7)([E.Z], () => null != t && E.Z.can(p.Plq.MANAGE_GUILD, t), [t]),
        i = t.hasFeature(p.oNc.COMMUNITY),
        r = (0, I.n2)(t.id),
        [l, d] = a.useState(t.hasFeature(p.oNc.ENABLED_MODERATION_EXPERIENCE_FOR_NON_COMMUNITY)),
        u = a.useCallback(
            async (e) => {
                d(e), await A(t, e);
            },
            [t]
        );
    return i || !r
        ? null
        : (0, s.jsxs)(s.Fragment, {
              children: [
                  (0, s.jsxs)('div', {
                      className: f.setupContainer,
                      children: [
                          (0, s.jsx)(c.FormSwitch, {
                              value: l,
                              onChange: u,
                              className: f.switchItem,
                              disabled: !n,
                              hideBorder: !0,
                              children: (0, s.jsxs)('div', {
                                  className: f.switchItemTextContent,
                                  children: [
                                      (0, s.jsxs)(c.Text, {
                                          color: 'header-primary',
                                          variant: 'text-md/semibold',
                                          children: [R.Z.Messages.GUILD_SETTINGS_SAFETY_ENABLE_MODERATION_EXPERIENCE, (0, s.jsx)(_.Z, { className: f.betaTag })]
                                      }),
                                      (0, s.jsx)(c.Text, {
                                          color: 'header-secondary',
                                          variant: 'text-sm/normal',
                                          children: R.Z.Messages.GUILD_SETTINGS_SAFETY_ENABLE_MODERATION_EXPERIENCE_DESCRIPTION
                                      })
                                  ]
                              })
                          }),
                          (0, s.jsx)(c.HelpMessage, {
                              messageType: c.HelpMessageTypes.INFO,
                              textVariant: 'text-xs/normal',
                              children: R.Z.Messages.GUILD_SETTINGS_SAFETY_MODERATION_EXPERIENCE_IN_COMMUNITY
                          })
                      ]
                  }),
                  (0, s.jsx)(c.FormDivider, { className: f.divider })
              ]
          });
}
function D(e) {
    let { guild: t, mfaLevel: n } = e,
        i = (0, o.e7)([E.Z], () => null != t && E.Z.can(p.Plq.MANAGE_GUILD, t), [t]),
        r = (0, o.e7)([m.default], () => m.default.getCurrentUser()),
        { isGuildOwnerWithMFA: u, showMFAUserTooltip: _ } = a.useMemo(
            () =>
                null == r
                    ? {
                          canChangeMFALevel: !1,
                          showMFAUserTooltip: !1
                      }
                    : {
                          isGuildOwnerWithMFA: t.isOwnerWithRequiredMfaLevel(r),
                          showMFAUserTooltip: !r.mfaEnabled && t.isOwner(r)
                      },
            [r, t]
        ),
        I = n === p.BpS.ELEVATED,
        T = (0, l.throttle)(async (e) => {
            if (!!u && !_)
                await h.Z.updateMFALevel({
                    guildId: t.id,
                    level: e ? p.BpS.ELEVATED : p.BpS.NONE,
                    isEnabled: !e
                });
        }, 1000);
    return i
        ? (0, s.jsxs)(s.Fragment, {
              children: [
                  (0, s.jsx)(c.FormDivider, { className: f.divider }),
                  (0, s.jsxs)('div', {
                      className: f.setupContainer,
                      children: [
                          (0, s.jsx)(c.FormSwitch, {
                              value: I,
                              onChange: T,
                              className: f.switchItem,
                              disabled: !u,
                              hideBorder: !0,
                              children: (0, s.jsxs)('div', {
                                  className: f.switchItemTextContent,
                                  children: [
                                      (0, s.jsx)(c.Text, {
                                          color: 'header-primary',
                                          variant: 'text-md/semibold',
                                          children: R.Z.Messages.GUILD_SETTINGS_REQ_MFA_LABEL
                                      }),
                                      (0, s.jsx)(c.Text, {
                                          color: 'header-secondary',
                                          variant: 'text-sm/normal',
                                          children: R.Z.Messages.GUILD_SETTINGS_REQ_MFA_BODY
                                      })
                                  ]
                              })
                          }),
                          _ &&
                              (0, s.jsx)(c.HelpMessage, {
                                  messageType: c.HelpMessageTypes.INFO,
                                  textVariant: 'text-xs/normal',
                                  children: R.Z.Messages.GUILD_SETTINGS_REQ_MFA_TOOLTIP.format({
                                      onClick: function () {
                                          d.Z.open(p.oAB.ACCOUNT);
                                      }
                                  })
                              })
                      ]
                  })
              ]
          })
        : null;
}
function v() {
    let { guild: e, mfaLevel: t } = (0, o.cj)([g.Z], () => g.Z.getProps(), []),
        n = (0, o.e7)([T.Z], () => T.Z.enabled, []);
    return null == e
        ? null
        : n
          ? (0, s.jsx)(u.Z, {})
          : (0, s.jsxs)(c.FormSection, {
                title: R.Z.Messages.SAFETY_SETUP,
                tag: c.FormTitleTags.H1,
                titleClassName: f.headerContainer,
                children: [
                    (0, s.jsx)(M, { guild: e }),
                    (0, s.jsx)(L, { guild: e }),
                    (0, s.jsx)(D, {
                        guild: e,
                        mfaLevel: t
                    }),
                    (0, s.jsx)(O, { guild: e }),
                    (0, s.jsx)(c.FormDivider, { className: f.divider }),
                    (0, s.jsx)('div', {
                        className: r()(f.setupContainer),
                        children: (0, s.jsx)(C.w, { guild: e })
                    })
                ]
            });
}
