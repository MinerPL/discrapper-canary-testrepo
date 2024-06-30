n(47120);
var r = n(735250), i = n(470079), a = n(120356), o = n.n(a), s = n(780384), l = n(481060), u = n(410030), c = n(981631), d = n(474936), _ = n(689938), E = n(310223);
let f = [
    {
        getPerkHeading: () => _.Z.Messages.BOOSTING_MARKETING_REDESIGN_EXPERIMENT_TIER_COMPARISON_TABLE_PERK_HEADING_EMOJI_SLOTS,
        getPerkPreviewLightTheme: () => n(414102),
        getPerkPreviewDarkTheme: () => n(614600),
        getTier0Value: () => d.HO[c.Eu4.NONE].limits.emoji,
        getTier1Value: () => d.HO[c.Eu4.TIER_1].limits.emoji,
        getTier2Value: () => d.HO[c.Eu4.TIER_2].limits.emoji,
        getTier3Value: () => d.HO[c.Eu4.TIER_3].limits.emoji
    },
    {
        getPerkHeading: () => _.Z.Messages.BOOSTING_MARKETING_REDESIGN_EXPERIMENT_TIER_COMPARISON_TABLE_PERK_HEADING_STICKER_SLOTS,
        getPerkPreviewLightTheme: () => n(73541),
        getPerkPreviewDarkTheme: () => n(43735),
        getTier0Value: () => d.HO[c.Eu4.NONE].limits.stickers,
        getTier1Value: () => d.HO[c.Eu4.TIER_1].limits.stickers,
        getTier2Value: () => d.HO[c.Eu4.TIER_2].limits.stickers,
        getTier3Value: () => d.HO[c.Eu4.TIER_3].limits.stickers
    },
    {
        getPerkHeading: () => _.Z.Messages.BOOSTING_MARKETING_REDESIGN_EXPERIMENT_TIER_COMPARISON_TABLE_PERK_HEADING_SOUNDBOARD_SLOTS,
        getPerkPreviewLightTheme: () => n(69098),
        getPerkPreviewDarkTheme: () => n(881755),
        getTier0Value: () => d.HO[c.Eu4.NONE].limits.soundboardSounds,
        getTier1Value: () => d.HO[c.Eu4.TIER_1].limits.soundboardSounds,
        getTier2Value: () => d.HO[c.Eu4.TIER_2].limits.soundboardSounds,
        getTier3Value: () => d.HO[c.Eu4.TIER_3].limits.soundboardSounds
    },
    {
        getPerkHeading: () => _.Z.Messages.BOOSTING_MARKETING_REDESIGN_EXPERIMENT_TIER_COMPARISON_TABLE_PERK_HEADING_STREAM_QUALITY,
        getPerkPreviewLightTheme: () => n(989015),
        getPerkPreviewDarkTheme: () => n(815152),
        getTier0Value: () => _.Z.Messages.BOOSTING_MARKETING_REDESIGN_EXPERIMENT_TIER_COMPARISON_TABLE_CELL_STREAM_QUALITY.format({
            resolution: d.HO[c.Eu4.NONE].limits.screenShareQualityResolution,
            framerate: d.HO[c.Eu4.NONE].limits.screenShareQualityFramerate
        }),
        getTier1Value: () => _.Z.Messages.BOOSTING_MARKETING_REDESIGN_EXPERIMENT_TIER_COMPARISON_TABLE_CELL_STREAM_QUALITY.format({
            resolution: d.HO[c.Eu4.TIER_1].limits.screenShareQualityResolution,
            framerate: d.HO[c.Eu4.TIER_1].limits.screenShareQualityFramerate
        }),
        getTier2Value: () => _.Z.Messages.BOOSTING_MARKETING_REDESIGN_EXPERIMENT_TIER_COMPARISON_TABLE_CELL_STREAM_QUALITY.format({
            resolution: d.HO[c.Eu4.TIER_2].limits.screenShareQualityResolution,
            framerate: d.HO[c.Eu4.TIER_2].limits.screenShareQualityFramerate
        }),
        getTier3Value: () => _.Z.Messages.BOOSTING_MARKETING_REDESIGN_EXPERIMENT_TIER_COMPARISON_TABLE_CELL_STREAM_QUALITY.format({
            resolution: d.HO[c.Eu4.TIER_3].limits.screenShareQualityResolution,
            framerate: d.HO[c.Eu4.TIER_3].limits.screenShareQualityFramerate
        })
    },
    {
        getPerkHeading: () => _.Z.Messages.BOOSTING_MARKETING_REDESIGN_EXPERIMENT_TIER_COMPARISON_TABLE_PERK_HEADING_VOICE_QUALITY,
        getPerkPreviewLightTheme: () => n(222185),
        getPerkPreviewDarkTheme: () => n(415480),
        getTier0Value: () => _.Z.Messages.BITRATE_KBPS_NO_SPACE.format({ bitrate: d.HO[c.Eu4.NONE].limits.bitrate / 1000 }),
        getTier1Value: () => _.Z.Messages.BITRATE_KBPS_NO_SPACE.format({ bitrate: d.HO[c.Eu4.TIER_1].limits.bitrate / 1000 }),
        getTier2Value: () => _.Z.Messages.BITRATE_KBPS_NO_SPACE.format({ bitrate: d.HO[c.Eu4.TIER_2].limits.bitrate / 1000 }),
        getTier3Value: () => _.Z.Messages.BITRATE_KBPS_NO_SPACE.format({ bitrate: d.HO[c.Eu4.TIER_3].limits.bitrate / 1000 })
    },
    {
        getPerkHeading: () => _.Z.Messages.BOOSTING_MARKETING_REDESIGN_EXPERIMENT_TIER_COMPARISON_TABLE_PERK_HEADING_UPLOAD_SIZE_LIMIT,
        getPerkPreviewLightTheme: () => n(825588),
        getPerkPreviewDarkTheme: () => n(954499),
        getTier0Value: () => _.Z.Messages.FILE_SIZE_MB_NO_SPACE.format({ size: d.HO[c.Eu4.NONE].limits.fileSize / 1024 / 1024 }),
        getTier1Value: () => _.Z.Messages.FILE_SIZE_MB_NO_SPACE.format({ size: d.HO[c.Eu4.TIER_1].limits.fileSize / 1024 / 1024 }),
        getTier2Value: () => _.Z.Messages.FILE_SIZE_MB_NO_SPACE.format({ size: d.HO[c.Eu4.TIER_2].limits.fileSize / 1024 / 1024 }),
        getTier3Value: () => _.Z.Messages.FILE_SIZE_MB_NO_SPACE.format({ size: d.HO[c.Eu4.TIER_3].limits.fileSize / 1024 / 1024 })
    },
    {
        getPerkHeading: () => _.Z.Messages.BOOSTING_MARKETING_REDESIGN_EXPERIMENT_TIER_COMPARISON_TABLE_PERK_HEADING_VIDEO_STAGE_SEATS,
        getPerkPreviewLightTheme: () => n(241190),
        getPerkPreviewDarkTheme: () => n(879846),
        getTier0Value: () => d.HO[c.Eu4.NONE].limits.stageVideoUsers,
        getTier1Value: () => d.HO[c.Eu4.TIER_1].limits.stageVideoUsers,
        getTier2Value: () => d.HO[c.Eu4.TIER_2].limits.stageVideoUsers,
        getTier3Value: () => d.HO[c.Eu4.TIER_3].limits.stageVideoUsers
    },
    {
        getPerkHeading: () => _.Z.Messages.BOOSTING_MARKETING_REDESIGN_EXPERIMENT_TIER_COMPARISON_TABLE_PERK_HEADING_ANIMATED_GUILD_ICON,
        getPerkPreviewLightTheme: () => n(499059),
        getPerkPreviewDarkTheme: () => n(488349),
        getTier0Value: () => !1,
        getTier1Value: () => !0,
        getTier2Value: () => !0,
        getTier3Value: () => !0
    },
    {
        getPerkHeading: () => _.Z.Messages.BOOSTING_MARKETING_REDESIGN_EXPERIMENT_TIER_COMPARISON_TABLE_PERK_HEADING_GUILD_INVITE_BACKGROUND,
        getPerkPreviewLightTheme: () => n(136631),
        getPerkPreviewDarkTheme: () => n(692079),
        getTier0Value: () => !1,
        getTier1Value: () => !0,
        getTier2Value: () => !0,
        getTier3Value: () => !0
    },
    {
        getPerkHeading: () => _.Z.Messages.BOOSTING_MARKETING_REDESIGN_EXPERIMENT_TIER_COMPARISON_TABLE_PERK_HEADING_GUILD_BANNER,
        getPerkPreviewLightTheme: () => n(277822),
        getPerkPreviewDarkTheme: () => n(866919),
        getTier0Value: () => !1,
        getTier1Value: () => !1,
        getTier2Value: () => _.Z.Messages.BOOSTING_MARKETING_REDESIGN_EXPERIMENT_TIER_COMPARISON_TABLE_CELL_GUILD_BANNER_STATIC,
        getTier3Value: () => _.Z.Messages.BOOSTING_MARKETING_REDESIGN_EXPERIMENT_TIER_COMPARISON_TABLE_CELL_GUILD_BANNER_ANIMATED
    },
    {
        getPerkHeading: () => _.Z.Messages.BOOSTING_MARKETING_REDESIGN_EXPERIMENT_TIER_COMPARISON_TABLE_PERK_HEADING_CUSTOM_ROLE_ICONS,
        getPerkPreviewLightTheme: () => n(872259),
        getPerkPreviewDarkTheme: () => n(876049),
        getTier0Value: () => !1,
        getTier1Value: () => !1,
        getTier2Value: () => !0,
        getTier3Value: () => !0
    },
    {
        getPerkHeading: () => _.Z.Messages.BOOSTING_MARKETING_REDESIGN_EXPERIMENT_TIER_COMPARISON_TABLE_PERK_HEADING_VANITY_URL,
        getPerkPreviewLightTheme: () => n(710717),
        getPerkPreviewDarkTheme: () => n(945198),
        getTier0Value: () => !1,
        getTier1Value: () => !1,
        getTier2Value: () => !1,
        getTier3Value: () => !0
    }
];
function h(e) {
    let {
            children: t,
            className: n,
            tier: i
        } = e, a = i === c.Eu4.NONE ? 'text-muted' : 'header-primary', s = i === c.Eu4.NONE || null == i ? 'heading-xl/normal' : 'heading-xl/bold';
    return (0, r.jsxs)('th', {
        className: o()(E.columnHeading, n),
        scope: 'col',
        children: [
            (0, r.jsx)(l.Heading, {
                color: a,
                variant: s,
                children: t
            }),
            null != i && (0, r.jsx)(l.Text, {
                color: a,
                variant: 'text-md/normal',
                children: _.Z.Messages.PREMIUM_GUILD_PERKS_MODAL_HEADER_SUBSCRIPTION_COUNT.format({ subscriptions: c.oCV[i] })
            })
        ]
    });
}
function p(e) {
    let t;
    let {
        className: n,
        textVariant: i = 'text-md/bold',
        value: a
    } = e;
    if ('boolean' == typeof a) {
        let e = o()(E.booleanValueIcon, { [E.booleanValueTrue]: a });
        t = a ? (0, r.jsx)(l.CheckmarkLargeIcon, {
            size: 'md',
            color: 'currentColor',
            className: e
        }) : (0, r.jsx)(l.CloseSmallIcon, {
            size: 'md',
            color: 'currentColor',
            className: e
        });
    } else
        t = (0, r.jsx)(l.Text, {
            color: 'interactive-active',
            variant: i,
            children: a
        });
    return (0, r.jsx)('td', {
        className: o()(E.tableCell, n),
        children: t
    });
}
function m(e) {
    let {currentTier: t} = e, n = function (e) {
            switch (e) {
            case c.Eu4.NONE:
            case c.Eu4.TIER_1:
                return c.Eu4.TIER_2;
            case c.Eu4.TIER_2:
            case c.Eu4.TIER_3:
                return c.Eu4.TIER_3;
            default:
                return null;
            }
        }(t);
    return null == n ? null : (0, r.jsx)('div', {
        className: o()(E.recommendedTierHighlight, {
            [E.recommendedTierHighlightTier2]: n === c.Eu4.TIER_2,
            [E.recommendedTierHighlightTier3]: n === c.Eu4.TIER_3
        }),
        children: (0, r.jsx)(l.Text, {
            className: E.recommendedTierHighlightTag,
            color: 'always-white',
            variant: 'text-xs/bold',
            children: t === c.Eu4.TIER_3 ? _.Z.Messages.BOOSTING_MARKETING_REDESIGN_EXPERIMENT_TIER_COMPARISON_TABLE_CURRENT_TAG : _.Z.Messages.BOOSTING_MARKETING_REDESIGN_EXPERIMENT_TIER_COMPARISON_TABLE_RECOMMENDED_TAG
        })
    });
}
t.Z = function (e) {
    let t = (0, u.ZP)(), [n, a] = i.useState(null), {
            className: d,
            guild: I,
            hideHeading: T,
            hideTier0: g
        } = e;
    function S() {
        a(null);
    }
    return (0, r.jsxs)('div', {
        className: d,
        children: [
            !T && (0, r.jsx)(l.Heading, {
                className: E.heading,
                variant: 'heading-xxl/extrabold',
                children: _.Z.Messages.BOOSTING_MARKETING_REDESIGN_EXPERIMENT_TIER_COMPARISON_TABLE_HEADING
            }),
            (0, r.jsxs)('div', {
                className: E.tableWrapper,
                children: [
                    null != I && (0, r.jsx)(m, { currentTier: I.premiumTier }),
                    (0, r.jsxs)('table', {
                        className: E.table,
                        cellPadding: 0,
                        cellSpacing: 0,
                        children: [
                            (0, r.jsx)('thead', {
                                children: (0, r.jsxs)('tr', {
                                    className: E.__invalid_tableRow,
                                    children: [
                                        (0, r.jsx)(h, {
                                            className: E.tableRowHeading,
                                            children: _.Z.Messages.BOOSTING_MARKETING_REDESIGN_EXPERIMENT_TIER_COMPARISON_TABLE_COLUMN_HEADING_PERKS
                                        }),
                                        !g && (0, r.jsx)(h, {
                                            tier: c.Eu4.NONE,
                                            children: _.Z.Messages.BOOSTING_MARKETING_REDESIGN_EXPERIMENT_TIER_NONE_NAME
                                        }),
                                        (0, r.jsx)(h, {
                                            tier: c.Eu4.TIER_1,
                                            children: _.Z.Messages.PREMIUM_GUILD_TIER_1
                                        }),
                                        (0, r.jsx)(h, {
                                            tier: c.Eu4.TIER_2,
                                            children: _.Z.Messages.PREMIUM_GUILD_TIER_2
                                        }),
                                        (0, r.jsx)(h, {
                                            tier: c.Eu4.TIER_3,
                                            children: _.Z.Messages.PREMIUM_GUILD_TIER_3
                                        })
                                    ]
                                })
                            }),
                            (0, r.jsx)('tbody', {
                                className: E.__invalid_tableBody,
                                children: f.map((e, i) => {
                                    let u = n === i;
                                    function c() {
                                        a(i);
                                    }
                                    return void 0 === e.predicate ? (0, r.jsxs)('tr', {
                                        className: E.__invalid_tableRow,
                                        children: [
                                            (0, r.jsx)('th', {
                                                className: o()(E.tableCell, E.tableCellWrapper),
                                                scope: 'row',
                                                children: (0, r.jsx)(l.Clickable, {
                                                    className: o()(E.tableRowHeading, E.tableCell, E.tableCellInner),
                                                    onFocus: c,
                                                    onBlur: S,
                                                    onMouseEnter: c,
                                                    onMouseLeave: S,
                                                    children: (0, r.jsx)(l.Popout, {
                                                        align: 'center',
                                                        disablePointerEvents: !0,
                                                        nudgeAlignIntoViewport: !0,
                                                        position: 'bottom',
                                                        renderPopout: () => (0, r.jsx)('img', {
                                                            className: E.perkPreviewImage,
                                                            src: (0, s.wj)(t) ? e.getPerkPreviewDarkTheme() : e.getPerkPreviewLightTheme(),
                                                            alt: ''
                                                        }),
                                                        shouldShow: u,
                                                        spacing: 16,
                                                        children: () => (0, r.jsx)(l.Text, {
                                                            variant: 'text-md/normal',
                                                            children: e.getPerkHeading()
                                                        })
                                                    })
                                                })
                                            }),
                                            !g && (0, r.jsx)(p, {
                                                textVariant: 'text-md/normal',
                                                value: e.getTier0Value()
                                            }),
                                            (0, r.jsx)(p, { value: e.getTier1Value() }),
                                            (0, r.jsx)(p, { value: e.getTier2Value() }),
                                            (0, r.jsx)(p, { value: e.getTier3Value() })
                                        ]
                                    }, i) : null;
                                })
                            })
                        ]
                    })
                ]
            })
        ]
    });
};
