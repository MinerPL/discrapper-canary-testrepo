n.d(t, {
    N: function () {
        return G;
    }
});
var s = n(399606), a = n(780384), r = n(230711), i = n(410030), l = n(594174), o = n(74538), c = n(981631), d = n(526761), _ = n(689938), u = n(323780), E = n(101732), T = n(450598), I = n(633030), R = n(97942), C = n(269987), p = n(548629), g = n(507084), A = n(680313), m = n(926433), N = n(302036), f = n(994554), S = n(1549), h = n(13327), M = n(59137), x = n(405991), O = n(24615), b = n(193943), P = n(334347), L = n(943734), v = n(603076), Z = n(472656), D = n(912429), B = n(772969), j = n(926262);
let U = (e, t, n) => (0, a.wj)(e) ? t : n, G = e => {
        let {styles: t} = e, n = (0, i.ZP)(), a = (0, s.e7)([l.default], () => {
                let e = l.default.getCurrentUser();
                return o.ZP.canUsePremiumProfileCustomization(e);
            }), G = _.Z.Messages.FILE_UPLOAD_LIMIT_PREMIUM_TIER_2_INCREASE;
        return {
            badge: {
                title: _.Z.Messages.PREMIUM_MARKETING_BADGE_PERK_TITLE,
                description: _.Z.Messages.PREMIUM_MARKETING_BADGE_PERK_DESCRIPTION,
                imageSource: T,
                imageClassName: t.badgeImage
            },
            badgeAlt: {
                title: _.Z.Messages.PREMIUM_MARKETING_PERK_GRID_ITEM_HEADING_PREMIUM_SUBSCRIPTION_BADGE,
                description: _.Z.Messages.PREMIUM_MARKETING_FEATURE_PREMIUM_BADGE_DESCRIPTION_VARIANT_1,
                imageSource: U(n, u, E),
                imageClassName: t.badgeNewImage
            },
            clientThemes: {
                title: _.Z.Messages.PREMIUM_MARKETING_VARIANT_2_FEATURE_CLIENT_THEMES_TITLE,
                description: _.Z.Messages.PREMIUM_MARKETING_VARIANT_2_FEATURE_CLIENT_THEMES_DESCRIPTION,
                className: t.clientThemesCard,
                imageSource: O,
                imageClassName: t.clientThemesImage
            },
            customAppIcons: {
                title: _.Z.Messages.PREMIUM_MARKETING_FEATURE_CUSTOM_APP_ICONS_TITLE,
                description: _.Z.Messages.PREMIUM_MARKETING_FEATURE_CUSTOM_APP_ICONS_DESCRIPTION,
                imageSource: b,
                imageClassName: t.customAppIconImage
            },
            emoji: {
                title: _.Z.Messages.PREMIUM_MARKETING_FEATURE_EMOJI_TITLE,
                description: _.Z.Messages.PREMIUM_MARKETING_EMOJI_PERK_TITLE,
                imageSource: P,
                imageClassName: t.emojiImage
            },
            guildProfile: {
                title: _.Z.Messages.PREMIUM_MARKETING_PER_GUILD_PROFILES_PERK_TITLE,
                description: e => {
                    let t = () => {
                        r.Z.open(c.oAB.PROFILE_CUSTOMIZATION, null, {
                            scrollPosition: d.Y_.TRY_IT_OUT,
                            analyticsLocations: e
                        });
                    };
                    return a ? _.Z.Messages.PREMIUM_MARKETING_PER_GUILD_PROFILE_THEMES_PERK_DESCRIPTION_CHECK_IT_OUT.format({ onCheckItOutClick: t }) : _.Z.Messages.PREMIUM_MARKETING_PER_GUILD_PROFILE_THEMES_PERK_DESCRIPTION_TRY_IT_OUT.format({ onTryItOutClick: t });
                },
                imageSource: R,
                imageClassName: t.perGuildProfilesImage
            },
            longerMessages: {
                title: _.Z.Messages.PREMIUM_MARKETING_LONGER_MESSAGES_PERK_TITLE,
                description: _.Z.Messages.PREMIUM_MARKETING_LONGER_MESSAGES_PERK_DESCRIPTION,
                imageSource: U(n, L, v),
                imageClassName: t.longerMessagesImage
            },
            moreGuilds: {
                title: _.Z.Messages.PREMIUM_MARKETING_MORE_GUILDS_PERK_TITLE,
                description: _.Z.Messages.PREMIUM_MARKETING_MORE_GUILDS_PERK_DESCRIPTION,
                imageSource: U(n, I, Z),
                imageClassName: t.moreGuildsImage
            },
            moreGuildsAlt: {
                title: _.Z.Messages.PREMIUM_MARKETING_MORE_GUILDS_PERK_TITLE,
                description: _.Z.Messages.PREMIUM_MARKETING_MORE_GUILDS_PERK_DESCRIPTION,
                imageSource: U(n, g, A),
                imageClassName: t.moreGuildsAltImage
            },
            remix: {
                title: _.Z.Messages.REMIXING_PERKS_CARD_TITLE,
                description: _.Z.Messages.REMIXING_PERKS_CARD_DESCRIPTION,
                imageSource: U(n, C, p),
                imageClassName: t.remixingImage,
                isEarlyAccess: !0
            },
            soundboard: {
                title: _.Z.Messages.SOUND_BOARD_MARKETING_USE_CUSTOM_SOUNDS,
                description: _.Z.Messages.SOUNDBOARD_MARKETING_REACT_WITH_SOUNDBOARD,
                imageSource: U(n, m, N),
                imageClassName: t.soundboardImage
            },
            stickers: {
                title: _.Z.Messages.PREMIUM_MARKETING_STICKER_PERK_TITLE_OLD,
                description: _.Z.Messages.PREMIUM_MARKETING_STICKER_PERK_DESCRIPTION,
                imageSource: U(n, f, D),
                imageClassName: t.stickersImage
            },
            stickersBurst: {
                title: _.Z.Messages.PREMIUM_MARKETING_STICKER_PERK_TITLE,
                description: _.Z.Messages.PREMIUM_MARKETING_STICKER_PERK_DESCRIPTION,
                imageSource: U(n, f, D),
                imageClassName: t.stickersImage
            },
            stickersPerkDiscoverability: {
                title: _.Z.Messages.PREMIUM_MARKETING_STICKER_PERK_TITLE,
                description: _.Z.Messages.PREMIUM_MARKETING_STICKER_PERK_LONG_DESCRIPTION,
                imageSource: U(n, f, D),
                imageClassName: t.stickersImage
            },
            streaming: {
                title: _.Z.Messages.PREMIUM_MARKETING_FEATURE_PREMIUM_GO_LIVE_TITLE,
                description: _.Z.Messages.PREMIUM_MARKETING_STREAMING_SMALL_PERK_DESCRIPTION,
                imageSource: B,
                imageClassName: t.streamingImage
            },
            superReactions: {
                title: _.Z.Messages.PREMIUM_MARKETING_SUPER_REACTIONS_PERK_TITLE_V2,
                description: _.Z.Messages.PREMIUM_MARKETING_SUPER_REACTIONS_PERK_DESCRIPTION_V2,
                imageSource: U(n, S, h),
                imageClassName: t.superReactionsImage
            },
            upload: {
                title: _.Z.Messages.PREMIUM_MARKETING_UPLOADS_SMALL_PERK_TITLE.format({ premiumMaxSize: G }),
                description: _.Z.Messages.PREMIUM_MARKETING_UPLOADS_SMALL_PERK_DESCRIPTION.format({ premiumMaxSize: G }),
                imageSource: j,
                imageClassName: t.uploadImage
            },
            videoBackground: {
                title: _.Z.Messages.PREMIUM_MARKETING_VIDEO_BACKGROUND_PERK_TITLE,
                description: _.Z.Messages.PREMIUM_MARKETING_VIDEO_BACKGROUND_PERK_DESCRIPTION,
                imageSource: U(n, M, x),
                imageClassName: t.videoBackgroundImage
            }
        };
    };
