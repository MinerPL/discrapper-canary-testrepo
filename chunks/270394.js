t.d(n, {
    Z: function () {
        return y;
    }
});
var i = t(735250),
    a = t(470079),
    s = t(120356),
    l = t.n(s),
    r = t(512722),
    o = t.n(r),
    d = t(392711),
    c = t.n(d),
    u = t(399606),
    I = t(692547),
    m = t(481060),
    _ = t(447543),
    N = t(225433),
    E = t(129861),
    T = t(493544),
    h = t(700582),
    g = t(410030),
    p = t(933557),
    f = t(346486),
    C = t(600164),
    O = t(666657),
    x = t(487419),
    S = t(664452),
    A = t(560114),
    R = t(699516),
    b = t(594174),
    Z = t(965638),
    v = t(981631),
    M = t(689938),
    L = t(778011),
    j = t(440376),
    D = t(224499);
let P = {
    INVITER: 3,
    INVITE_CODE: 3,
    USES: 1,
    EXPIRES: 2
};
function B(e) {
    var n, t;
    let { invite: a, showChannel: s = !1, inviteDisabled: r = !1, hide: o = !1 } = e,
        d = a.uses;
    return (
        a.maxUses > 0 && (d = ''.concat(a.uses, '/').concat(a.maxUses)),
        (0, i.jsxs)(C.Z, {
            className: l()(L.inviteSettingsInviteRow, j.card, { [L.inviteDisabledRow]: r }),
            children: [
                (0, i.jsx)(C.Z, {
                    grow: P.INVITER,
                    basis: 0,
                    align: C.Z.Align.CENTER,
                    className: l()(L.text),
                    children: (0, i.jsxs)(C.Z.Child, {
                        children: [
                            null == (n = a.inviter)
                                ? null
                                : (0, i.jsxs)('div', {
                                      className: L.user,
                                      children: [
                                          (0, i.jsx)(h.Z, {
                                              user: n,
                                              size: m.AvatarSizes.SIZE_20,
                                              className: L.avatar
                                          }),
                                          (0, i.jsx)(E.Z, {
                                              className: L.username,
                                              discriminatorClass: L.discriminator,
                                              user: n
                                          })
                                      ]
                                  }),
                            ((t = a.channel),
                            s
                                ? (0, i.jsx)(m.Text, {
                                      variant: 'text-xs/normal',
                                      color: 'header-secondary',
                                      children: (0, p.F6)(t, b.default, R.Z, !0)
                                  })
                                : null)
                        ]
                    })
                }),
                (0, i.jsx)(C.Z, {
                    grow: P.INVITE_CODE,
                    shrink: 1,
                    basis: 0,
                    align: C.Z.Align.CENTER,
                    className: L.text,
                    children: (0, i.jsx)(m.Text, {
                        className: L.inviteCode,
                        variant: 'text-sm/normal',
                        children: o ? '...' : a.code
                    })
                }),
                (0, i.jsx)(C.Z, {
                    grow: P.USES,
                    basis: 0,
                    justify: C.Z.Justify.END,
                    align: C.Z.Align.CENTER,
                    className: l()(L.text),
                    children: (0, i.jsx)(m.Text, {
                        className: L.uses,
                        variant: 'text-sm/normal',
                        children: d
                    })
                }),
                (0, i.jsx)(C.Z, {
                    grow: P.EXPIRES,
                    basis: 0,
                    align: C.Z.Align.CENTER,
                    justify: C.Z.Justify.END,
                    className: l()(L.text, L.countdownColumn),
                    children: (0, i.jsx)(m.Text, {
                        className: L.countdown,
                        variant: 'text-sm/normal',
                        children: (0, i.jsx)(f.Z, { deadline: a.getExpiresAt() })
                    })
                }),
                (0, i.jsx)(N.Z, {
                    className: L.revokeInvite,
                    onClick: () => {
                        _.Z.revokeInvite(a);
                    }
                })
            ]
        })
    );
}
function y(e) {
    let { invites: n, guild: s, hide: l, channel: r = null, showChannel: d = !1, loading: _ = !1, canCreateInvites: N = !1 } = e;
    o()(null != s, 'guild is required');
    let E = (0, Z.M)(s),
        h = (0, u.e7)([x.Z], () => x.Z.getGuildIncident(s.id)),
        p = s.hasFeature(v.oNc.INVITES_DISABLED) || ((null == h ? void 0 : h.invitesDisabledUntil) != null && new Date(h.invitesDisabledUntil) > new Date()),
        f = (0, g.ZP)(),
        R = a.useMemo(
            () =>
                null == n || _
                    ? []
                    : c()(n)
                          .sortBy((e) => {
                              var n, t;
                              return (null !== (t = null === (n = e.inviter) || void 0 === n ? void 0 : n.username) && void 0 !== t ? t : '').toLowerCase();
                          })
                          .value(),
            [n, _]
        ),
        b = () => {
            (0, m.openModalLazy)(
                async () => (e) =>
                    (0, i.jsx)(A.default, {
                        ...e,
                        channel: r,
                        guild: s,
                        source: v.t4x.SETTINGS_INVITE
                    })
            );
        },
        j = () => {
            let e = { source: O.Zu.GUILD_SETTINGS };
            (0, m.openModalLazy)(
                async () => (n) =>
                    (0, i.jsx)(S.default, {
                        ...n,
                        guildId: s.id,
                        analyticsData: e
                    })
            );
        };
    return (0, i.jsx)(T.Xi, {
        sections: [Math.max(1, R.length)],
        renderSection: () => {
            let e;
            return (
                (e =
                    0 !== R.length || _
                        ? (0, i.jsxs)(C.Z, {
                              children: [
                                  (0, i.jsx)(C.Z.Child, {
                                      grow: P.INVITER,
                                      basis: 0,
                                      className: D.marginReset,
                                      children: (0, i.jsx)(m.FormTitle, { children: M.Z.Messages.INSTANT_INVITE_INVITER })
                                  }),
                                  (0, i.jsx)(C.Z.Child, {
                                      basis: 0,
                                      grow: P.INVITE_CODE,
                                      className: D.marginReset,
                                      children: (0, i.jsx)(m.FormTitle, { children: M.Z.Messages.INSTANT_INVITE_INVITE_CODE })
                                  }),
                                  (0, i.jsx)(C.Z.Child, {
                                      grow: P.USES,
                                      basis: 0,
                                      className: L.textAlignRight,
                                      children: (0, i.jsx)(m.FormTitle, { children: M.Z.Messages.INSTANT_INVITE_USES })
                                  }),
                                  (0, i.jsx)(C.Z.Child, {
                                      grow: P.EXPIRES,
                                      basis: 0,
                                      className: L.textAlignRight,
                                      children: (0, i.jsx)(m.FormTitle, { children: M.Z.Messages.INSTANT_INVITE_EXPIRES })
                                  })
                              ]
                          })
                        : (0, i.jsxs)(m.EmptyState, {
                              theme: f,
                              children: [
                                  (0, i.jsx)(m.EmptyStateImage, {
                                      darkSrc: t(914814),
                                      lightSrc: t(370392),
                                      width: 256,
                                      height: 130
                                  }),
                                  (0, i.jsx)(m.EmptyStateText, {
                                      note: M.Z.Messages.NO_INVITES_BODY,
                                      children: M.Z.Messages.NO_INVITES_LABEL
                                  })
                              ]
                          })),
                (0, i.jsx)(
                    m.FormSection,
                    {
                        className: L.headerSection,
                        children: (0, i.jsxs)(m.HeadingLevel, {
                            component: (0, i.jsx)(m.FormTitle, {
                                tag: m.FormTitleTags.H1,
                                children: M.Z.Messages.INVITES
                            }),
                            children: [
                                (0, i.jsx)(m.FormText, {
                                    className: D.marginBottom20,
                                    type: m.FormTextTypes.DESCRIPTION,
                                    children: N ? M.Z.Messages.SETTINGS_INVITE_TIP.format({ onCreateInvite: b }) : M.Z.Messages.SETTINGS_INVITE_TIP_WITHOUT_CREATE
                                }),
                                (0, i.jsxs)('div', {
                                    className: L.inviteDisabledContainer,
                                    children: [
                                        (0, i.jsx)(m.Button, {
                                            size: m.Button.Sizes.SMALL,
                                            color: p ? m.Button.Colors.BRAND : m.Button.Colors.RED,
                                            disabled: !E,
                                            onClick: j,
                                            children: p ? M.Z.Messages.ENABLE_INVITES : M.Z.Messages.DISABLE_INVITES
                                        }),
                                        p &&
                                            (0, i.jsxs)('div', {
                                                className: L.inviteDisabledTip,
                                                children: [
                                                    (0, i.jsx)(m.CircleWarningIcon, {
                                                        size: 'custom',
                                                        width: 20,
                                                        height: 20,
                                                        color: I.Z.unsafe_rawColors.YELLOW_300.css
                                                    }),
                                                    (0, i.jsx)(m.Text, {
                                                        variant: 'text-sm/normal',
                                                        children: M.Z.Messages.INVITES_DISABLED_TIP
                                                    })
                                                ]
                                            })
                                    ]
                                }),
                                (0, i.jsx)(m.FormDivider, { className: L.headerDivider }),
                                e
                            ]
                        })
                    },
                    'header'
                )
            );
        },
        renderRow: (e) => {
            let { section: n, row: t } = e;
            if (0 === R.length && 0 === t && _)
                return (0, i.jsx)(
                    m.Spinner,
                    {
                        className: D.marginTop20,
                        type: m.Spinner.Type.SPINNING_CIRCLE
                    },
                    'spinner'
                );
            if (n > 0) return null;
            let a = R[t];
            return null == a
                ? null
                : (0, i.jsx)(
                      B,
                      {
                          hide: l,
                          invite: a,
                          showChannel: d,
                          inviteDisabled: p
                      },
                      a.code
                  );
        },
        rowHeight: (e, n) => (e > 0 ? 0 : 0 === R.length && 0 === n && _ ? 62 : null != R[n] ? 62 : 0),
        sectionHeight: () => (0 !== R.length || _ ? 120 : 344)
    });
}
