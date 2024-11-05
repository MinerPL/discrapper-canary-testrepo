var r = n(200651);
n(192379);
var i = n(120356),
    a = n.n(i),
    s = n(692547),
    o = n(481060),
    l = n(535322),
    u = n(31698),
    c = n(528771),
    d = n(267642),
    f = n(981631),
    _ = n(474936),
    h = n(388032),
    p = n(209430);
let m = [
    {
        tier: f.Eu4.TIER_1,
        perks: [
            {
                icon: o.ReactionIcon,
                getCopy: () => h.intl.formatToPlainString(h.t.Tlz0x8, { numEmojiSlots: _.HO[f.Eu4.TIER_1].limits.emoji })
            },
            {
                icon: o.SoundboardIcon,
                getCopy: () => h.intl.formatToPlainString(h.t['v+MIfn'], { numSoundboardSlots: _.HO[f.Eu4.TIER_1].limits.soundboardSounds }),
                isNew: !0
            },
            {
                icon: o.GifIcon,
                getCopy: () => h.intl.string(h.t.PbAyub)
            },
            {
                icon: o.VoiceNormalIcon,
                getCopy: () => h.intl.string(h.t['WH+OeH'])
            }
        ]
    },
    {
        tier: f.Eu4.TIER_2,
        perks: [
            {
                icon: o.ScreenArrowIcon,
                getCopy: () => h.intl.string(h.t.y4ft4O)
            },
            {
                icon: o.UploadIcon,
                getCopy: () => h.intl.formatToPlainString(h.t['aFRl5+'], { uploadSizeLimit: h.intl.string(h.t.M6qV8v) })
            },
            {
                icon: o.ReactionIcon,
                getCopy: () => h.intl.string(h.t['6PV6QU'])
            },
            {
                icon: o.ServerGridIcon,
                getCopy: () => h.intl.string(h.t['1a5rjo'])
            }
        ]
    },
    {
        tier: f.Eu4.TIER_3,
        perks: [
            {
                icon: o.LinkIcon,
                getCopy: () => h.intl.string(h.t.adNGjY)
            },
            {
                icon: o.UploadIcon,
                getCopy: () => h.intl.formatToPlainString(h.t['aFRl5+'], { uploadSizeLimit: h.intl.string(h.t.yMOW8P) })
            },
            {
                icon: o.VoiceNormalIcon,
                getCopy: () => h.intl.string(h.t.Tsljqq)
            },
            {
                icon: o.GifIcon,
                getCopy: () => h.intl.string(h.t.nRKlmJ)
            },
            {
                icon: o.StageIcon,
                getCopy: () => h.intl.formatToPlainString(h.t.hsZ88f, { numStageSeats: f.RcX })
            }
        ]
    }
];
t.Z = function (e) {
    let { guild: t } = e;
    return (0, r.jsx)('div', {
        className: p.tierCards,
        children: m.map((e) =>
            (0, r.jsxs)(
                'div',
                {
                    className: p.tierCard,
                    children: [
                        e.tier === f.Eu4.TIER_3 &&
                            (0, r.jsxs)(r.Fragment, {
                                children: [
                                    (0, r.jsx)('div', { className: a()(p.tierCardBorderHighlight, p.tierCardBorderHighlightTopRight) }),
                                    (0, r.jsx)('div', { className: a()(p.tierCardBorderHighlight, p.tierCardBorderHighlightBottomLeft) }),
                                    (0, r.jsxs)('div', {
                                        className: a()(p.tierCardSparkleHighlight, p.tierCardSparkleHighlightTopRight),
                                        children: [(0, r.jsx)(c.Z, { className: p.tierCardSparkle1 }), (0, r.jsx)(c.Z, { className: p.tierCardSparkle2 }), (0, r.jsx)(u.Z, { className: p.tierCardSparkle3 })]
                                    }),
                                    (0, r.jsx)('div', {
                                        className: a()(p.tierCardSparkleHighlight, p.tierCardSparkleHighlightBottomLeft),
                                        children: (0, r.jsx)(c.Z, { className: p.tierCardSparkle1 })
                                    })
                                ]
                            }),
                        e.tier === t.premiumTier &&
                            (0, r.jsx)(o.Text, {
                                className: p.tierCardCurrentTier,
                                tag: 'div',
                                variant: 'text-xs/semibold',
                                color: 'always-white',
                                children: h.intl.string(h.t['9JbE3N'])
                            }),
                        (0, r.jsxs)('div', {
                            className: p.tierCardHeader,
                            children: [
                                (0, r.jsx)(o.Heading, {
                                    className: p.tierCardHeading,
                                    variant: 'heading-xxl/semibold',
                                    color: 'always-white',
                                    children: (0, d.nW)(e.tier, { useLevels: !1 })
                                }),
                                (0, r.jsx)(o.Text, {
                                    className: p.tierCardBoostRequirement,
                                    variant: 'text-md/normal',
                                    color: 'always-white',
                                    children: h.intl.format(h.t.vbAsAw, { numBoostsRequired: f.oCV[e.tier] })
                                })
                            ]
                        }),
                        (0, r.jsx)('ul', {
                            className: p.tierCardList,
                            children: e.perks.map((e, t) =>
                                null == e.predicate || e.predicate()
                                    ? (0, r.jsxs)(
                                          'li',
                                          {
                                              className: p.tierCardPerkRow,
                                              children: [
                                                  (0, r.jsxs)(o.Text, {
                                                      className: p.tierCardListItem,
                                                      variant: 'text-md/normal',
                                                      color: 'always-white',
                                                      children: [
                                                          (0, r.jsx)(e.icon, {
                                                              className: p.tierCardListIcon,
                                                              color: s.Z.colors.WHITE
                                                          }),
                                                          e.getCopy()
                                                      ]
                                                  }),
                                                  e.isNew
                                                      ? (0, r.jsx)(l.Z, {
                                                            className: p.tierCardNewFeatureBadge,
                                                            forceUseColorForSparkles: !0,
                                                            shouldInheritBackgroundColor: !0,
                                                            shouldInheritTextColor: !0
                                                        })
                                                      : null
                                              ]
                                          },
                                          t
                                      )
                                    : null
                            )
                        })
                    ]
                },
                e.tier
            )
        )
    });
};
