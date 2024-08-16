t.d(n, {
    E3: function () {
        return P;
    },
    OA: function () {
        return L;
    },
    tH: function () {
        return f;
    }
}),
    t(653041);
var c = t(735250),
    a = t(470079),
    o = t(120356),
    l = t.n(o),
    r = t(692547),
    i = t(780384),
    s = t(481060),
    u = t(99690),
    T = t(726542),
    E = t(367907),
    N = t(132871),
    d = t(147890),
    _ = t(122021),
    I = t(275759),
    O = t(888496),
    A = t(753194),
    C = t(598077),
    m = t(671533),
    p = t(49012),
    h = t(981631),
    R = t(856651),
    x = t(689938),
    v = t(740458);
function P(e) {
    var n, t;
    let a,
        o,
        u,
        { connectedAccount: N, theme: d, locale: C, userId: P, className: f, showMetadata: L, showInvisibleIcon: S } = e;
    null == L && (L = !0);
    let D = null !== (t = N.metadata) && void 0 !== t ? t : {},
        g = L ? (0, I.FI)(D[R.PC.CREATED_AT], C) : null,
        M = (0, s.useToken)(r.Z.unsafe_rawColors.TWITTER).hex(),
        j = x.Z.Messages.CONNECTION_VERIFIED;
    if (L)
        switch (N.type) {
            case h.ABu.REDDIT:
                a = (0, O.oP)(D);
                break;
            case h.ABu.STEAM:
                a = (0, O.Dq)(D);
                break;
            case h.ABu.TWITTER:
                (a = (0, O.rJ)(D)), '1' === D[R.PC.TWITTER_VERIFIED] && ((o = M), (j = x.Z.Messages.CONNECTION_VERIFIED_ON_TWITTER));
                break;
            case h.ABu.PAYPAL:
                a = (0, O.li)(D);
                break;
            case h.ABu.EBAY:
                a = (0, O.ul)(D);
                break;
            case h.ABu.TIKTOK:
                a = (0, O.hf)(D);
        }
    let b = T.Z.get((0, _.rR)(N.type)),
        y = null == b ? void 0 : null === (n = b.getPlatformUserUrl) || void 0 === n ? void 0 : n.call(b, N);
    null != S && S
        ? (u = (0, c.jsx)(s.EyeSlashIcon, {
              size: 'md',
              color: 'currentColor',
              className: l()(v.__invalid_connectedAccountOpenIconContainer, v.connectedAccountHideIcon)
          }))
        : null != y &&
          (u = (0, c.jsx)(s.Anchor, {
              href: y,
              onClick: (e) => {
                  var n, t;
                  (n = N.type),
                      (t = P),
                      (0, E.yw)(h.rMx.CONNECTED_ACCOUNT_VIEWED, {
                          platform_type: n,
                          other_user_id: t
                      }),
                      (0, p.q)(
                          {
                              href: y,
                              trusted: (null == b ? void 0 : b.type) !== h.ABu.DOMAIN
                          },
                          e
                      );
              },
              children: (0, c.jsx)(m.Z, {
                  className: v.connectedAccountOpenIcon,
                  direction: m.Z.Directions.RIGHT
              })
          }));
    let F = (0, s.useToken)(r.Z.colors.INTERACTIVE_MUTED).hex(),
        U = (0, s.useToken)(r.Z.colors.INTERACTIVE_ACTIVE).hex(),
        w = N.verified
            ? (0, c.jsx)(A.Z, {
                  className: v.connectedAccountVerifiedIcon,
                  color: null != o ? o : F,
                  forcedIconColor: U,
                  size: 16,
                  tooltipText: j
              })
            : null;
    return (0, c.jsxs)('div', {
        className: l()(v.connectedAccountContainer, (null != a && a.length > 0) || null != g ? v.connectedAccountContainerWithMetadata : null, f),
        children: [
            (0, c.jsxs)('div', {
                className: v.connectedAccount,
                children: [
                    (0, c.jsx)(s.Tooltip, {
                        text: null == b ? void 0 : b.name,
                        children: (e) =>
                            (0, c.jsx)('img', {
                                ...e,
                                alt: x.Z.Messages.IMG_ALT_LOGO.format({ name: null == b ? void 0 : b.name }),
                                className: v.connectedAccountIcon,
                                src: (0, i.wj)(d) ? (null == b ? void 0 : b.icon.darkSVG) : null == b ? void 0 : b.icon.lightSVG
                            })
                    }),
                    (0, c.jsxs)('div', {
                        className: v.connectedAccountNameContainer,
                        children: [
                            (0, c.jsxs)('div', {
                                className: v.connectedAccountName,
                                children: [
                                    (0, c.jsxs)('div', {
                                        className: v.connectedAccountNameTextContainer,
                                        children: [
                                            (0, c.jsx)(s.Tooltip, {
                                                overflowOnly: !0,
                                                text: N.name,
                                                children: (e) =>
                                                    (0, c.jsx)(s.Text, {
                                                        ...e,
                                                        variant: 'text-md/semibold',
                                                        color: 'interactive-active',
                                                        className: v.connectedAccountNameText,
                                                        children: N.name
                                                    })
                                            }),
                                            w
                                        ]
                                    }),
                                    u
                                ]
                            }),
                            null != g
                                ? (0, c.jsx)(s.Text, {
                                      variant: 'text-xs/normal',
                                      color: 'header-secondary',
                                      children: x.Z.Messages.CONNECTIONS_PROFILE_MEMBER_SINCE.format({ date: g })
                                  })
                                : null
                        ]
                    })
                ]
            }),
            null != a && a.length > 0
                ? (0, c.jsx)('div', {
                      className: v.connectedAccountChildren,
                      children: a
                  })
                : null
        ]
    });
}
function f(e) {
    let { applicationRoleConnection: n, className: t, locale: a, onApplicationClicked: o, selectedGuildId: r } = e,
        i = (0, O.rm)(n, void 0, a),
        T = () => {
            null == o || o(),
                (0, d.goToAppDirectory)({
                    view: N.ApplicationDirectoryViews.APPLICATION,
                    applicationId: n.application.id,
                    guildId: r,
                    entrypoint: { name: N.ApplicationDirectoryEntrypointNames.APPLICATION_DIRECTORY_URL }
                });
        };
    return (0, c.jsxs)('div', {
        className: l()(v.connectedAccountContainer, null != i && i.length > 0 ? v.connectedAccountContainerWithMetadata : null, t),
        children: [
            (0, c.jsx)('div', {
                className: v.connectedAccount,
                children: (0, c.jsxs)(s.Clickable, {
                    className: l()(v.connectedAccountNameContainer, v.connectedAccountNameContainerClickable),
                    onClick: T,
                    children: [
                        null != n.platform_name
                            ? (0, c.jsx)(s.Text, {
                                  variant: 'eyebrow',
                                  color: 'interactive-normal',
                                  children: n.platform_name
                              })
                            : null,
                        null != n.platform_username
                            ? (0, c.jsx)('div', {
                                  className: v.connectedAccountName,
                                  children: (0, c.jsx)('div', {
                                      className: v.connectedAccountNameTextContainer,
                                      children: (0, c.jsx)(s.Text, {
                                          variant: 'text-md/semibold',
                                          color: 'interactive-active',
                                          className: v.connectedAccountNameText,
                                          children: n.platform_username
                                      })
                                  })
                              })
                            : null
                    ]
                })
            }),
            null != i && i.length > 0
                ? (0, c.jsx)('div', {
                      className: l()(v.connectedAccountChildren, v.connectedAccountChildrenNoIcon),
                      children: i
                  })
                : null,
            (0, c.jsx)('div', {
                children: (0, c.jsx)(s.Clickable, {
                    className: v.connectedAccountPoweredBy,
                    onClick: T,
                    children: (0, c.jsx)(s.Text, {
                        variant: 'text-xs/normal',
                        color: 'text-muted',
                        children: x.Z.Messages.CONNECTIONS_PROFILE_POWERED_BY.format({
                            applicationHook: () =>
                                (0, c.jsxs)('div', {
                                    className: v.connectedAccountPoweredByText,
                                    children: [
                                        null != n.application.bot
                                            ? (0, c.jsx)(u.Z, {
                                                  user: new C.Z(n.application.bot),
                                                  size: s.AvatarSizes.SIZE_16
                                              })
                                            : null,
                                        (0, c.jsx)(s.Text, {
                                            variant: 'text-xs/normal',
                                            color: 'text-normal',
                                            children: n.application.name
                                        })
                                    ]
                                })
                        })
                    })
                })
            })
        ]
    });
}
let L = a.forwardRef(function (e, n) {
    let { connectedAccounts: t, theme: a, locale: o, className: r, userId: i } = e;
    if (null == t || 0 === t.length) return null;
    let s = t
            .filter((e) => T.Z.isSupported(e.type))
            .map((e) =>
                (0, c.jsx)(
                    P,
                    {
                        connectedAccount: e,
                        theme: a,
                        locale: o,
                        userId: i
                    },
                    ''.concat(e.type, ':').concat(e.id)
                )
            ),
        u = [],
        E = [];
    for (let e = 0; e < s.length; e++) {
        let n = s[e];
        e % 2 == 0 ? u.push(n) : E.push(n);
    }
    return (0, c.jsxs)('div', {
        ref: n,
        className: l()(v.connectedAccounts, r),
        children: [
            (0, c.jsx)('div', {
                className: v.connectedAccountsColumn,
                children: u
            }),
            (0, c.jsx)('div', {
                className: v.connectedAccountsColumn,
                children: E
            })
        ]
    });
});
