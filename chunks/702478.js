n(47120);
var s = n(735250),
    a = n(470079),
    i = n(772848),
    r = n(640358),
    l = n(442837),
    o = n(544891),
    c = n(704215),
    d = n(692547),
    u = n(481060),
    _ = n(497321),
    I = n(841470),
    E = n(605236),
    T = n(142497),
    m = n(690221),
    N = n(706454),
    S = n(650774),
    g = n(430824),
    h = n(246946),
    C = n(626135),
    x = n(771212),
    p = n(434404),
    R = n(146596),
    L = n(559368),
    f = n(999382),
    O = n(981631),
    A = n(921944),
    M = n(190378),
    D = n(689938),
    v = n(396466),
    j = n(287837),
    Z = n(573189),
    b = n(899947),
    U = n(117831),
    G = n(996737),
    P = n(21846),
    B = n(280632),
    y = n(44234),
    F = n(117428);
let k = function (e, t, n) {
        let s = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
            a = null;
        return (
            null == t || Number.isNaN(t) ? (null == t || Number.isNaN(t)) && null != e && (a = D.Z.Messages.GUILD_ANALYTICS_METRICS_LAST_WEEK) : (a = D.Z.Messages.PERCENTAGE_SINCE_LAST_WEEK.format({ percentage: (0, r.o)(Math.abs(t), n) })),
            {
                localizedNumber: null != e ? ''.concat((0, r.o)(e, n)).concat(s ? '%' : '') : D.Z.Messages.NOT_AVAILABLE,
                subtext: a,
                isTrendingUp: t > 0,
                isTrendingDown: t < 0
            }
        );
    },
    w = function (e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return t || e === O.evJ.NOT_ENOUGH_GUILD_MEMBERS
            ? (0, s.jsx)(u.FormErrorBlock, {
                  icon: u.CircleInformationIcon,
                  className: v.notEnoughMembersError,
                  backgroundColor: u.FormErrorBlockColors.BACKGROUND_ACCENT,
                  children: D.Z.Messages.GUILD_ANALYTICS_ERROR_GUILD_SIZE
              })
            : null == e
              ? null
              : (0, s.jsx)(u.FormErrorBlock, {
                    backgroundColor: u.FormErrorBlockColors.BACKGROUND_ACCENT,
                    children: D.Z.Messages.GUILD_ANALYTICS_ERROR_MESSAGE
                });
    };
function H(e) {
    C.default.track(O.rMx.GUILD_INSIGHTS_SETTINGS_CTA_CLICKED, { guild_id: e });
    let t = null == e ? O.E07.DEVELOPER_PORTAL : O.E07.DEVELOPER_PORTAL_GUILD_ANALYTICS(e),
        n = (0, i.Z)();
    return o.tn
        .post({
            url: O.ANM.HANDOFF,
            body: { key: n },
            oldFormErrors: !0
        })
        .then(
            (e) => {
                let s = e.body.handoff_token;
                window.open(O.EYA.DEVELOPER_PORTAL_LOGIN_HANDOFF(n, s, t));
            },
            () => {
                window.open(t);
            }
        );
}
let V = () => {
    let [e, t] = a.useState(!1),
        n = (0, l.e7)([f.Z], () => f.Z.getGuildId());
    return (0, s.jsx)(u.Button, {
        className: v.developerPortalCta,
        onClick: () => {
            t(!0),
                H(n).then(() => {
                    t(!1);
                });
        },
        submitting: e,
        children: D.Z.Messages.GUILD_ANALYICS_DEVELOPERS_BUTTON
    });
};
function Y(e) {
    let { guildId: t } = e,
        { hasAccessRate: n, accessRate: i } = (0, l.cj)([L.Z], () => L.Z.getMemberInsights(t)),
        r = (0, l.e7)([S.Z], () => {
            var e;
            return null !== (e = S.Z.getMemberCount()) && void 0 !== e ? e : 0;
        }),
        { showAccessRate: o } = (0, x.eA)(t, !n);
    if (
        (a.useEffect(() => {
            o && ((0, E.kk)(c.z.GUILD_INSIGHTS_ACCESS_RATE_NEW), (0, E.EW)(c.z.GUILD_INSIGHTS_ACCESS_RATE_NEW, { dismissAction: A.L.AUTO }));
        }, [o]),
        !o || !n || null == i)
    )
        return null;
    let _ = 10 * Math.ceil((1 - i) * 10),
        I = F,
        T = null,
        N = null;
    return (
        i >= 0.9
            ? ((I = F),
              (T = D.Z.Messages.MEMBER_INSIGHTS_ACCESS_RATING_VERY_GOOD.format({
                  ratingHook: (e, t) =>
                      (0, s.jsx)(
                          'span',
                          {
                              className: v.ratingVeryGood,
                              children: e
                          },
                          t
                      )
              })),
              (N = D.Z.Messages.MEMBER_INSIGHTS_ACCESS_RATING_LESS.format({ accessRate: 10 })))
            : i >= (r > 10000 ? 0.7 : 0.8)
              ? ((I = B),
                (T = D.Z.Messages.MEMBER_INSIGHTS_ACCESS_RATING_GOOD.format({
                    ratingHook: (e, t) =>
                        (0, s.jsx)(
                            'span',
                            {
                                className: v.ratingGood,
                                children: e
                            },
                            t
                        )
                })),
                (N = D.Z.Messages.MEMBER_INSIGHTS_ACCESS_RATING_APPROX.format({ accessRate: _ })))
              : i >= 0.5
                ? ((I = y),
                  (T = D.Z.Messages.MEMBER_INSIGHTS_ACCESS_RATING_NEUTRAL.format({
                      ratingHook: (e, t) =>
                          (0, s.jsx)(
                              'span',
                              {
                                  className: v.ratingNeutral,
                                  children: e
                              },
                              t
                          )
                  })),
                  (N = D.Z.Messages.MEMBER_INSIGHTS_ACCESS_RATING_APPROX.format({ accessRate: _ })))
                : ((I = P),
                  (T = D.Z.Messages.MEMBER_INSIGHTS_ACCESS_RATING_BAD.format({
                      ratingHook: (e, t) =>
                          (0, s.jsx)(
                              'span',
                              {
                                  className: v.ratingBad,
                                  children: e
                              },
                              t
                          )
                  })),
                  (N = 100 === _ ? D.Z.Messages.MEMBER_INSIGHTS_ACCESS_RATING_APPROX.format({ accessRate: _ }) : D.Z.Messages.MEMBER_INSIGHTS_ACCESS_RATING_MORE.format({ accessRate: _ }))),
        (0, s.jsxs)(s.Fragment, {
            children: [
                (0, s.jsxs)(u.Heading, {
                    variant: 'heading-md/semibold',
                    className: v.insightsTitle,
                    children: [
                        D.Z.Messages.MEMBER_INSIGHTS_SERVER_ACCESS,
                        (0, s.jsx)(u.TextBadge, {
                            text: D.Z.Messages.BETA,
                            color: d.Z.unsafe_rawColors.BRAND_500.css,
                            className: v.betaTag
                        })
                    ]
                }),
                (0, s.jsxs)('div', {
                    className: v.memberInsightsContainer,
                    children: [
                        (0, s.jsxs)('div', {
                            className: v.insightsHeader,
                            children: [
                                (0, s.jsx)('img', {
                                    alt: '',
                                    className: v.insightsIcon,
                                    src: I
                                }),
                                (0, s.jsxs)('div', {
                                    children: [
                                        (0, s.jsx)(u.Text, {
                                            variant: 'text-md/semibold',
                                            className: v.title,
                                            children: T
                                        }),
                                        (0, s.jsxs)(u.Text, {
                                            className: v.description,
                                            variant: 'text-sm/normal',
                                            children: [
                                                N,
                                                (0, s.jsx)(u.TooltipContainer, {
                                                    text: D.Z.Messages.MEMBER_INSIGHTS_ACCESS_RATE_TOOLTIP,
                                                    className: v.insightsTooltip,
                                                    children: (0, s.jsx)(u.CircleInformationIcon, {
                                                        size: 'xs',
                                                        color: 'currentColor',
                                                        className: v.insightsTooltipIcon
                                                    })
                                                })
                                            ]
                                        })
                                    ]
                                })
                            ]
                        }),
                        i < 0.9
                            ? (0, s.jsxs)(s.Fragment, {
                                  children: [
                                      (0, s.jsx)('div', { className: v.divider }),
                                      (0, s.jsx)(u.Text, {
                                          className: v.tips,
                                          variant: 'text-sm/semibold',
                                          children: D.Z.Messages.MEMBER_INSIGHTS_TIPS.format()
                                      }),
                                      (0, s.jsxs)('div', {
                                          className: v.insightsActions,
                                          children: [
                                              (0, s.jsxs)('div', {
                                                  className: v.insightAction,
                                                  children: [
                                                      (0, s.jsx)('img', {
                                                          alt: '',
                                                          className: v.actionIcon,
                                                          src: b
                                                      }),
                                                      (0, s.jsx)(u.Text, {
                                                          className: v.actionText,
                                                          variant: 'text-sm/normal',
                                                          children: D.Z.Messages.ACCESS_RATE_ACTION_SIMPLIFY
                                                      })
                                                  ]
                                              }),
                                              (0, s.jsx)('div', { className: v.dividerInline }),
                                              (0, s.jsxs)('div', {
                                                  className: v.insightAction,
                                                  children: [
                                                      (0, s.jsx)('img', {
                                                          alt: '',
                                                          className: v.actionIcon,
                                                          src: U
                                                      }),
                                                      (0, s.jsx)(u.Text, {
                                                          className: v.actionText,
                                                          variant: 'text-sm/normal',
                                                          children: D.Z.Messages.ACCESS_RATE_ACTION_EXTRA_STEPS
                                                      })
                                                  ]
                                              }),
                                              (0, s.jsx)('div', { className: v.dividerInline }),
                                              (0, s.jsxs)('div', {
                                                  className: v.insightAction,
                                                  children: [
                                                      (0, s.jsx)('img', {
                                                          alt: '',
                                                          className: v.actionIcon,
                                                          src: Z
                                                      }),
                                                      (0, s.jsx)(u.Text, {
                                                          className: v.actionText,
                                                          variant: 'text-sm/normal',
                                                          children: D.Z.Messages.ACCESS_RATE_ACTION_BOTS.format({
                                                              integrationsHook: (e, t) =>
                                                                  (0, s.jsx)(
                                                                      m.Z,
                                                                      {
                                                                          onClick: () => p.Z.setSection(O.pNK.INTEGRATIONS),
                                                                          className: v.link,
                                                                          children: e
                                                                      },
                                                                      t
                                                                  )
                                                          })
                                                      })
                                                  ]
                                              }),
                                              (0, s.jsx)('div', { className: v.dividerInline }),
                                              (0, s.jsxs)('div', {
                                                  className: v.insightAction,
                                                  children: [
                                                      (0, s.jsx)('img', {
                                                          alt: '',
                                                          className: v.actionIcon,
                                                          src: j
                                                      }),
                                                      (0, s.jsx)(u.Text, {
                                                          className: v.actionText,
                                                          variant: 'text-sm/normal',
                                                          children: D.Z.Messages.ACCESS_RATE_ACTION_AUDIT
                                                      })
                                                  ]
                                              })
                                          ]
                                      })
                                  ]
                              })
                            : (0, s.jsx)('div', {
                                  className: v.insightsActions,
                                  children: (0, s.jsxs)('div', {
                                      className: v.insightAction,
                                      children: [
                                          (0, s.jsx)('img', {
                                              alt: '',
                                              className: v.actionIcon,
                                              src: G
                                          }),
                                          (0, s.jsx)(u.Text, {
                                              className: v.actionText,
                                              variant: 'text-sm/normal',
                                              children: D.Z.Messages.ACCESS_RATE_ACTION_SUCCESS.format({
                                                  insightsHook: (e, n) =>
                                                      (0, s.jsx)(
                                                          m.Z,
                                                          {
                                                              onClick: () => H(t),
                                                              className: v.link,
                                                              children: e
                                                          },
                                                          n
                                                      )
                                              })
                                          })
                                      ]
                                  })
                              })
                    ]
                }),
                (0, s.jsx)('div', { className: v.divider }),
                (0, s.jsx)(u.Heading, {
                    variant: 'heading-md/semibold',
                    className: v.insightsTitle,
                    children: D.Z.Messages.SERVER_INSIGHTS
                })
            ]
        })
    );
}
t.Z = () => {
    let e = (0, l.e7)([f.Z], () => f.Z.getGuildId()),
        t = (0, l.e7)([S.Z], () => S.Z.getMemberCount(e)),
        n = (0, l.e7)([g.Z], () => g.Z.getGuild(e)),
        i = (0, l.e7)([N.default], () => N.default.locale),
        { analytics: r, errorCode: o } = (0, l.cj)([L.Z], () => ({
            analytics: null != e ? L.Z.getOverviewAnalytics(e) : null,
            errorCode: L.Z.getError()
        })),
        c = (0, l.e7)([h.Z], () => h.Z.getSettings().enabled),
        d = null == t || null == n || (null != t && t < 500 && null != n && !n.hasFeature(O.oNc.PARTNERED) && !n.hasFeature(O.oNc.VERIFIED));
    a.useEffect(() => {
        null != e && !d && ((0, R.Vk)(e), (0, R.SR)(e), (0, R.xl)(e));
    }, [e, d]),
        a.useEffect(() => {
            (0, T.Kw)(M.v.GUILD_ANALYTICS_GUILD_SETTINGS_MENU);
        }, []);
    let E =
        null != r
            ? (0, s.jsx)('div', {
                  className: v.__invalid_guildAnalyticsOverviewWrapper,
                  children: (0, s.jsxs)('div', {
                      className: v.overviewData,
                      children: [
                          (0, s.jsx)(I.Z, {
                              title: D.Z.Messages.WEEKLY_VISITORS,
                              tooltipText: D.Z.Messages.VISITORS_INFO,
                              ...k(r.visitors, r.visitorsChange, i)
                          }),
                          (0, s.jsx)(I.Z, {
                              title: D.Z.Messages.WEEKLY_COMMUNICATORS,
                              tooltipText: D.Z.Messages.COMMUNICATORS_INFO,
                              ...k(r.communicators, r.communicatorsChange, i)
                          }),
                          (0, s.jsx)(I.Z, {
                              title: D.Z.Messages.WEEKLY_NEW_MEMBERS,
                              ...k(r.newMembers, r.newMembersChange, i)
                          }),
                          (0, s.jsx)(I.Z, {
                              title: D.Z.Messages.WEEKLY_NEW_MEMBER_RETENTION,
                              tooltipText: D.Z.Messages.NEW_MEMBER_RETENTION_INFO,
                              ...k(r.pctRetained, r.pctRetainedChange, i, !0)
                          })
                      ]
                  })
              })
            : null;
    return (0, s.jsxs)(u.FormSection, {
        tag: u.FormTitleTags.H1,
        title: D.Z.Messages.SERVER_INSIGHTS,
        children: [
            (0, s.jsx)(u.FormText, {
                type: u.FormTextTypes.DESCRIPTION,
                children: D.Z.Messages.GUILD_ANALYTICS_DESCRIPTION.format()
            }),
            w(o, d),
            null != e ? (0, s.jsx)(Y, { guildId: e }) : null,
            (0, s.jsxs)('div', {
                className: v.developerPortalCtaWrapper,
                children: [
                    (0, s.jsx)('div', { className: v.placeholderImage }),
                    (0, s.jsx)(u.Text, {
                        className: v.developerPortalCtaText,
                        variant: 'text-sm/normal',
                        children: D.Z.Messages.GUILD_ANALYTICS_DEVELOPERS_CTA
                    }),
                    (0, s.jsx)(V, {})
                ]
            }),
            c
                ? (0, s.jsx)('div', {
                      className: v.streamerMode,
                      children: (0, s.jsx)(_.Z, {})
                  })
                : E
        ]
    });
};
