t.d(n, {
    Z: function () {
        return x;
    },
    j: function () {
        return g;
    }
});
var s = t(735250);
t(470079);
var l = t(120356),
    a = t.n(l),
    i = t(442837),
    r = t(481060),
    o = t(367907),
    c = t(548473),
    d = t(721012),
    I = t(621923),
    N = t(869764),
    _ = t(150512),
    u = t(430824),
    E = t(594174),
    T = t(626135),
    m = t(999382),
    O = t(983135),
    S = t(84658),
    D = t(981631),
    G = t(689938),
    A = t(645);
let h = () => [
        {
            emoji: '\uD83E\uDDD9',
            emojiDescription: G.Z.Messages.GUILD_ONBOARDING_UPSELL_PREVIEW_CHANNELS_1_EMOJI,
            title: G.Z.Messages.GUILD_ONBOARDING_UPSELL_PREVIEW_CHANNELS_1,
            selected: !0
        },
        {
            emoji: '\uD83C\uDFA4',
            emojiDescription: G.Z.Messages.GUILD_ONBOARDING_UPSELL_PREVIEW_CHANNELS_2_EMOJI,
            title: G.Z.Messages.GUILD_ONBOARDING_UPSELL_PREVIEW_CHANNELS_2,
            selected: !1
        },
        {
            emoji: '\uD83D\uDC40',
            emojiDescription: G.Z.Messages.GUILD_ONBOARDING_UPSELL_PREVIEW_CHANNELS_3_EMOJI,
            title: G.Z.Messages.GUILD_ONBOARDING_UPSELL_PREVIEW_CHANNELS_3,
            selected: !1
        }
    ],
    L = () => [
        {
            channelIcon: () =>
                (0, s.jsx)(r.AnnouncementsIcon, {
                    size: 'xs',
                    color: 'currentColor',
                    className: A.channelIcon
                }),
            channel: G.Z.Messages.GUILD_ONBOARDING_UPSELL_PREVIEW_LANDING_1,
            selected: !0
        },
        {
            channelIcon: () =>
                (0, s.jsx)(r.TextIcon, {
                    size: 'md',
                    color: 'currentColor',
                    className: A.channelIcon
                }),
            channel: G.Z.Messages.GUILD_ONBOARDING_UPSELL_PREVIEW_LANDING_2,
            selected: !0
        },
        {
            channelIcon: () =>
                (0, s.jsx)(r.TextIcon, {
                    size: 'md',
                    color: 'currentColor',
                    className: A.channelIcon
                }),
            channel: G.Z.Messages.GUILD_ONBOARDING_UPSELL_PREVIEW_LANDING_3,
            selected: !1
        },
        {
            channelIcon: () =>
                (0, s.jsx)(r.ForumIcon, {
                    size: 'md',
                    color: 'currentColor',
                    className: A.channelIcon
                }),
            channel: G.Z.Messages.GUILD_ONBOARDING_UPSELL_PREVIEW_LANDING_4,
            selected: !0
        }
    ];
function g(e) {
    let { isTooltip: n = !1 } = e,
        t = h();
    n && t.pop();
    let l = n
            ? (0, s.jsx)(r.Text, {
                  variant: 'text-sm/semibold',
                  color: 'header-primary',
                  children: G.Z.Messages.GUILD_ONBOARDING_UPSELL_PREVIEW_CHANNELS_TITLE_TOOLTIP
              })
            : (0, s.jsx)(r.Heading, {
                  variant: 'heading-md/semibold',
                  children: G.Z.Messages.GUILD_ONBOARDING_UPSELL_PREVIEW_CHANNELS_TITLE
              }),
        i = n
            ? (0, s.jsx)(r.Text, {
                  variant: 'text-xxs/normal',
                  children: G.Z.Messages.GUILD_ONBOARDING_UPSELL_PREVIEW_CHANNELS_SUBTITLE_TOOLTIP.format()
              })
            : (0, s.jsx)(r.Text, {
                  variant: 'text-xs/normal',
                  children: G.Z.Messages.GUILD_ONBOARDING_UPSELL_PREVIEW_CHANNELS_SUBTITLE.format()
              });
    return (0, s.jsxs)('div', {
        className: a()(A.upsellPreview, A.spacingLarge, { [A.tooltip]: n }),
        children: [
            l,
            (0, s.jsx)('div', {
                className: A.spacingSmall,
                children: t.map((e, n) => {
                    let { emoji: t, emojiDescription: l, title: i, selected: o } = e;
                    return (0, s.jsxs)(
                        'div',
                        {
                            className: a()(A.previewListItem, { [A.selected]: o }),
                            children: [
                                (0, s.jsx)('span', {
                                    role: 'img',
                                    'aria-label': l,
                                    children: t
                                }),
                                (0, s.jsx)(r.Text, {
                                    variant: 'text-sm/medium',
                                    color: 'header-primary',
                                    children: i
                                }),
                                o &&
                                    (0, s.jsx)('div', {
                                        className: A.checkboxCircle,
                                        children: (0, s.jsx)(r.CheckmarkLargeIcon, {
                                            size: 'md',
                                            color: 'currentColor',
                                            className: A.checkmark
                                        })
                                    })
                            ]
                        },
                        n
                    );
                })
            }),
            i
        ]
    });
}
function f() {
    let e = [
        {
            message: G.Z.Messages.GUILD_ONBOARDING_TESTIMONIAL_HARRY_POTTER,
            profilePic: 'https://cdn.discordapp.com/avatars/302407541994946561/bb3fd59e6c2ea0a86a2bdabf5dff7856.webp?size=80',
            adminTitle: G.Z.Messages.GUILD_ONBOARDING_TESTIMONIAL_ADMIN_HARRY_POTTER
        },
        {
            message: G.Z.Messages.GUILD_ONBOARDING_TESTIMONIAL_DESIGN_BUDDIES,
            profilePic: 'https://cdn.discordapp.com/avatars/433499434098229249/b6d433308debef625537e33df04023e5.webp?size=80',
            adminTitle: G.Z.Messages.GUILD_ONBOARDING_TESTIMONIAL_ADMIN_DESIGN_BUDDIES
        },
        {
            message: G.Z.Messages.GUILD_ONBOARDING_TESTIMONIAL_VALORANT,
            profilePic: 'https://cdn.discordapp.com/avatars/555460020494663691/599bfcdb0b0700b415f4c695890f272c.webp?size=80',
            adminTitle: G.Z.Messages.GUILD_ONBOARDING_TESTIMONIAL_ADMIN_VALORANT
        },
        {
            message: G.Z.Messages.GUILD_ONBOARDING_TESTIMONIAL_DUNGEON_SLIMES,
            profilePic: 'https://cdn.discordapp.com/guilds/936317138904440892/users/125526751064489984/avatars/f35679626acac9943e102533fc170d41.webp?size=80',
            adminTitle: G.Z.Messages.GUILD_ONBOARDING_TESTIMONIAL_ADMIN_DUNGEON_SLIMES
        }
    ];
    return (0, s.jsx)(d.i, { testimonials: e });
}
function x() {
    let e = (0, i.e7)([m.Z], () => m.Z.getGuildId()),
        n = (0, i.e7)([u.Z], () => u.Z.getGuild(e)),
        t = (0, i.e7)([E.default], () => E.default.getCurrentUser()),
        { homeSettingsEnabled: l } = (0, I.kZ)(null != e ? e : D.lds);
    return null == e || null == n || null == t
        ? null
        : (0, s.jsxs)('div', {
              className: A.upsellContainer,
              children: [
                  (0, s.jsxs)('div', {
                      className: A.upsellHeader,
                      children: [
                          (0, s.jsxs)('div', {
                              className: A.islands,
                              children: [
                                  (0, s.jsx)(c.xm, {}),
                                  (0, s.jsx)(c._I, {
                                      guild: n,
                                      mainIslandClassName: A.mainIsland,
                                      balloonDogClassName: A.balloonDog
                                  }),
                                  (0, s.jsx)(c.B0, {})
                              ]
                          }),
                          (0, s.jsxs)('div', {
                              className: A.upsellHeaderText,
                              children: [
                                  (0, s.jsx)(r.Heading, {
                                      variant: 'heading-xl/semibold',
                                      children: G.Z.Messages.GUILD_ONBOARDING_SETUP_LANDING_TITLE
                                  }),
                                  (0, s.jsx)(r.Text, {
                                      variant: 'text-md/normal',
                                      children: G.Z.Messages.GUILD_ONBOARDING_SETUP_LANDING_SUBTITLE
                                  })
                              ]
                          }),
                          (0, s.jsx)('div', {
                              className: A.upsellButtons,
                              children: (0, s.jsx)(r.Button, {
                                  onClick: function () {
                                      null != e &&
                                          (T.default.track(D.rMx.GUILD_SETTINGS_ONBOARDING_WIZARD_PROGRESS_CTA_CLICKED, {
                                              ...(0, o.hH)(e),
                                              step: S.PG[S.PG.LANDING],
                                              back: !1,
                                              skip: !1
                                          }),
                                          (0, O.IG)(e, S.PG.LANDING));
                                  },
                                  color: r.Button.Colors.BRAND,
                                  disabled: !1,
                                  children: G.Z.Messages.CHECK_IT_OUT
                              })
                          })
                      ]
                  }),
                  (0, s.jsx)(r.FormDivider, {}),
                  (0, s.jsx)(f, {}),
                  (0, s.jsx)(r.FormDivider, {}),
                  (0, s.jsxs)('div', {
                      className: A.valuesContainer,
                      children: [
                          (0, s.jsxs)('div', {
                              className: A.valueContainer,
                              children: [
                                  (0, s.jsx)(g, {}),
                                  (0, s.jsxs)('div', {
                                      className: A.valueText,
                                      children: [
                                          (0, s.jsx)(r.Heading, {
                                              variant: 'heading-md/semibold',
                                              children: G.Z.Messages.GUILD_ONBOARDING_SETUP_LANDING_CHANNELS_TITLE
                                          }),
                                          (0, s.jsx)(r.Text, {
                                              variant: 'text-sm/normal',
                                              children: G.Z.Messages.GUILD_ONBOARDING_SETUP_LANDING_CHANNELS_SUBTITLE
                                          })
                                      ]
                                  })
                              ]
                          }),
                          l &&
                              (0, s.jsxs)('div', {
                                  className: A.valueContainer,
                                  children: [
                                      (0, s.jsxs)('div', {
                                          className: A.valueText,
                                          children: [
                                              (0, s.jsx)(r.Heading, {
                                                  variant: 'heading-md/semibold',
                                                  children: G.Z.Messages.GUILD_ONBOARDING_SETUP_LANDING_GUIDE_TITLE
                                              }),
                                              (0, s.jsx)(r.Text, {
                                                  variant: 'text-sm/normal',
                                                  children: G.Z.Messages.GUILD_ONBOARDING_SETUP_LANDING_GUIDE_SUBTITLE
                                              })
                                          ]
                                      }),
                                      (0, s.jsxs)('div', {
                                          className: a()(A.upsellPreview, A.spacingLarge),
                                          children: [
                                              (0, s.jsx)(_.Z, {
                                                  guildId: e,
                                                  welcomeMessage: {
                                                      authorIds: [t.id],
                                                      message: G.Z.Messages.GUILD_ONBOARDING_SETUP_LANDING_GUIDE_WELCOME_MESSAGE
                                                  }
                                              }),
                                              (0, s.jsx)(N.k, {
                                                  title: G.Z.Messages.GUILD_ONBOARDING_SETUP_LANDING_GUIDE_TODO_1_TITLE,
                                                  subtitle: G.Z.Messages.GUILD_ONBOARDING_SETUP_LANDING_GUIDE_TODO_1_CHANNEL_NAME,
                                                  completed: !0,
                                                  Icon: r.TextIcon,
                                                  variant: 'static'
                                              }),
                                              (0, s.jsx)(N.k, {
                                                  title: G.Z.Messages.GUILD_ONBOARDING_SETUP_LANDING_GUIDE_TODO_2_TITLE,
                                                  subtitle: G.Z.Messages.GUILD_ONBOARDING_SETUP_LANDING_GUIDE_TODO_2_CHANNEL_NAME,
                                                  completed: !0,
                                                  Icon: r.TextIcon,
                                                  variant: 'static'
                                              })
                                          ]
                                      })
                                  ]
                              }),
                          (0, s.jsxs)('div', {
                              className: A.valueContainer,
                              children: [
                                  (0, s.jsx)('div', {
                                      className: a()(A.upsellPreview, A.spacingLarge),
                                      children: L().map((e, n) => {
                                          let { channelIcon: t, channel: l, selected: i } = e;
                                          return (0, s.jsxs)(
                                              'div',
                                              {
                                                  className: a()(A.previewListItem, A.spaceBetween, { [A.selected]: i }),
                                                  children: [
                                                      (0, s.jsxs)('div', {
                                                          className: A.channel,
                                                          children: [
                                                              t(),
                                                              (0, s.jsx)(r.Text, {
                                                                  variant: 'text-md/medium',
                                                                  color: 'header-primary',
                                                                  children: l
                                                              })
                                                          ]
                                                      }),
                                                      (0, s.jsx)('div', {
                                                          className: a()(A.checkbox, { [A.selected]: i }),
                                                          children:
                                                              i &&
                                                              (0, s.jsx)(r.CheckmarkLargeIcon, {
                                                                  size: 'md',
                                                                  color: 'currentColor',
                                                                  className: A.checkmark
                                                              })
                                                      })
                                                  ]
                                              },
                                              n
                                          );
                                      })
                                  }),
                                  (0, s.jsxs)('div', {
                                      className: A.valueText,
                                      children: [
                                          (0, s.jsx)(r.Heading, {
                                              variant: 'heading-md/semibold',
                                              children: G.Z.Messages.GUILD_ONBOARDING_SETUP_LANDING_ONBOARDING_TITLE
                                          }),
                                          (0, s.jsx)(r.Text, {
                                              variant: 'text-sm/normal',
                                              children: G.Z.Messages.GUILD_ONBOARDING_SETUP_LANDING_ONBOARDING_SUBTITLE
                                          })
                                      ]
                                  })
                              ]
                          })
                      ]
                  })
              ]
          });
}
