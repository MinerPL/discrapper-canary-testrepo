t.d(n, {
    Z: function () {
        return x;
    }
}),
    t(653041),
    t(47120);
var i = t(735250),
    a = t(470079),
    s = t(120356),
    l = t.n(s),
    r = t(243814),
    o = t(442837),
    c = t(481060),
    d = t(367907),
    u = t(213459),
    I = t(600164),
    m = t(488915),
    _ = t(970731),
    N = t(598077),
    E = t(626135),
    T = t(486199),
    h = t(929507),
    g = t(981631),
    p = t(689938),
    f = t(556208);
function x(e) {
    var n, t, s, x, C, O, S;
    let { name: A, icon: R, imageSrc: b, iconBackgroundColor: Z, iconClassName: v, iconWrapperClassName: M, details: L, integration: j, buttonText: D, buttonDisabled: P, hasNextSection: B, onButtonClick: y, guildId: G, isScrolling: k, canShowMigrationTooltip: H, trailing: w } = e,
        [U, W] = a.useState(!1),
        [F, V] = a.useState(!1);
    let K =
            ((x = D),
            (C = P),
            (O = B),
            (S = y),
            null == x || null == S
                ? null
                : O
                  ? (0, i.jsxs)(I.Z, {
                        align: I.Z.Align.CENTER,
                        children: [
                            (0, i.jsx)(c.Text, {
                                variant: 'text-sm/normal',
                                children: x
                            }),
                            O
                                ? (0, i.jsx)(c.ChevronSmallRightIcon, {
                                      size: 'custom',
                                      color: 'currentColor',
                                      width: 10,
                                      height: 10,
                                      className: f.caret
                                  })
                                : null
                        ]
                    })
                  : (0, i.jsx)(c.Button, {
                        size: c.Button.Sizes.SMALL,
                        look: O ? c.Button.Looks.LINK : c.Button.Looks.FILLED,
                        color: O ? c.Button.Colors.PRIMARY : c.Button.Colors.BRAND,
                        disabled: C,
                        onClick: S,
                        children: x
                    })),
        Y = H && !k && !F && void 0 !== G && null != j;
    a.useEffect(() => {
        Y &&
            E.default.track(g.rMx.COMMANDS_MIGRATION_TOOLTIP_VIEWED, {
                ...(0, d.hH)(G),
                application_id: null == j ? void 0 : j.application.id,
                location: 'overview'
            });
    }, [G, null == j ? void 0 : j.application.id, Y]);
    let z = Y
            ? (0, i.jsx)(c.Popout, {
                  renderPopout: () =>
                      (0, i.jsx)(c.Clickable, {
                          onClick: (e) => {
                              e.stopPropagation(), V(!0), h.Z.dismissOverviewTooltip(G, j.integration);
                          },
                          children: (0, i.jsx)(_.ZP, {
                              content: p.Z.Messages.COMMANDS_SCOPE_MIGRATION_OVERVIEW_TOOLTIP,
                              onClick: () => {}
                          })
                      }),
                  position: 'bottom',
                  align: 'center',
                  animation: c.Popout.Animation.TRANSLATE,
                  shouldShow: !0,
                  children: () => K
              })
            : K,
        q = (0, o.Wu)([m.Z], () => {
            var e;
            return null != j && null != G && null !== (e = m.Z.getApplicationEntitlementsForGuild(j.application.id, G)) && void 0 !== e ? e : [];
        }),
        X = (0, u.LD)(G, !0),
        J = (null == j ? void 0 : j.application) != null && Object.keys(null !== (s = null === (t = X.result) || void 0 === t ? void 0 : null === (n = t.sections[j.application.id]) || void 0 === n ? void 0 : n.commands) && void 0 !== s ? s : {}).length > 0,
        Q = (0, i.jsxs)(I.Z, {
            children: [
                (0, i.jsx)(T.Z, {
                    name: A,
                    icon: R,
                    imageSrc: b,
                    iconBackgroundColor: Z,
                    iconClassName: v,
                    iconWrapperClassName: M,
                    details: L,
                    isPremium: q.length > 0
                }),
                (0, i.jsx)(I.Z.Child, {
                    shrink: 0,
                    grow: 0,
                    children: (0, i.jsxs)(I.Z, {
                        align: I.Z.Align.CENTER,
                        justify: I.Z.Justify.END,
                        children: [
                            (function (e, n, t) {
                                var a;
                                if (null == e) return null;
                                let s = [],
                                    { application: l, integration: o, webhooks: d } = e;
                                return (
                                    null != l.bot &&
                                        s.push(
                                            (0, i.jsx)(
                                                c.TooltipContainer,
                                                {
                                                    forceOpen: n,
                                                    text: new N.Z(l.bot).isVerifiedBot() ? p.Z.Messages.INTEGRATIONS_APPLICATION_VERIFIED_BOT : p.Z.Messages.INTEGRATIONS_APPLICATION_BOT,
                                                    className: f.feature,
                                                    children: (0, i.jsx)(c.RobotIcon, {
                                                        size: 'md',
                                                        color: 'currentColor',
                                                        className: f.featureIcon
                                                    })
                                                },
                                                'bot'
                                            )
                                        ),
                                    d.length > 0 &&
                                        s.push(
                                            (0, i.jsx)(
                                                c.TooltipContainer,
                                                {
                                                    forceOpen: n,
                                                    text: p.Z.Messages.INTEGRATIONS_WEBHOOKS_SUMMARY.format({ count: d.length }),
                                                    className: f.feature,
                                                    children: (0, i.jsx)(c.WebhookIcon, {
                                                        size: 'md',
                                                        color: 'currentColor',
                                                        className: f.featureIcon
                                                    })
                                                },
                                                'webhooks'
                                            )
                                        ),
                                    (null == o ? void 0 : null === (a = o.scopes) || void 0 === a ? void 0 : a.includes(r.x.APPLICATIONS_COMMANDS)) === !0 &&
                                        t &&
                                        s.push(
                                            (0, i.jsx)(
                                                'div',
                                                {
                                                    className: f.feature,
                                                    children: (0, i.jsx)(c.SlashBoxIcon, {
                                                        size: 'md',
                                                        color: 'currentColor',
                                                        className: f.featureIcon
                                                    })
                                                },
                                                'commands'
                                            )
                                        ),
                                    s
                                );
                            })(j, U, J),
                            z,
                            w
                        ]
                    })
                })
            ]
        });
    return B
        ? (0, i.jsx)(c.Clickable, {
              onClick: () => {
                  H && null != G && null != j && h.Z.dismissOverviewTooltip(G, j.integration), null == y || y();
              },
              onFocus: () => W(!0),
              onBlur: () => W(!1),
              children: (0, i.jsx)(c.Card, {
                  editable: !0,
                  className: l()(f.card, f.clickable),
                  children: Q
              })
          })
        : (0, i.jsx)(c.Card, {
              editable: !0,
              className: f.card,
              children: Q
          });
}
