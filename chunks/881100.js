"use strict";
s.r(t), s.d(t, {
  usePerkCards: function() {
    return k
  }
});
var a = s("399606"),
  i = s("780384"),
  r = s("230711"),
  n = s("410030"),
  l = s("594174"),
  o = s("74538"),
  u = s("474936"),
  d = s("981631"),
  c = s("526761"),
  _ = s("689938"),
  E = s("323780"),
  T = s("101732"),
  I = s("450598"),
  R = s("633030"),
  S = s("97942"),
  f = s("269987"),
  m = s("548629"),
  N = s("507084"),
  A = s("680313"),
  p = s("926433"),
  C = s("302036"),
  g = s("994554"),
  O = s("1549"),
  P = s("13327"),
  M = s("59137"),
  h = s("405991"),
  L = s("24615"),
  x = s("193943"),
  v = s("334347"),
  D = s("943734"),
  b = s("603076"),
  U = s("472656"),
  j = s("912429"),
  y = s("772969"),
  B = s("926262");
let G = (e, t, s) => (0, i.isThemeDark)(e) ? t : s,
  k = e => {
    let {
      styles: t,
      selectedPremiumType: s
    } = e, i = (0, n.default)(), k = (0, a.useStateFromStores)([l.default], () => {
      let e = l.default.getCurrentUser();
      return o.default.canUsePremiumProfileCustomization(e)
    }), H = s !== u.PremiumTypes.TIER_0 ? _.default.Messages.FILE_UPLOAD_LIMIT_PREMIUM_TIER_2_INCREASE : _.default.Messages.FILE_UPLOAD_LIMIT_PREMIUM_TIER_0_CORRECTED;
    return {
      badge: {
        title: _.default.Messages.PREMIUM_MARKETING_BADGE_PERK_TITLE,
        description: _.default.Messages.PREMIUM_MARKETING_BADGE_PERK_DESCRIPTION,
        imageSource: I,
        imageClassName: t.badgeImage
      },
      badgeAlt: {
        title: _.default.Messages.PREMIUM_MARKETING_PERK_GRID_ITEM_HEADING_PREMIUM_SUBSCRIPTION_BADGE,
        description: _.default.Messages.PREMIUM_MARKETING_FEATURE_PREMIUM_BADGE_DESCRIPTION_VARIANT_1,
        imageSource: G(i, E, T),
        imageClassName: t.badgeNewImage
      },
      clientThemes: {
        title: _.default.Messages.PREMIUM_MARKETING_VARIANT_2_FEATURE_CLIENT_THEMES_TITLE,
        description: _.default.Messages.PREMIUM_MARKETING_VARIANT_2_FEATURE_CLIENT_THEMES_DESCRIPTION,
        className: t.clientThemesCard,
        imageSource: L,
        imageClassName: t.clientThemesImage
      },
      customAppIcons: {
        title: _.default.Messages.PREMIUM_MARKETING_FEATURE_CUSTOM_APP_ICONS_TITLE,
        description: _.default.Messages.PREMIUM_MARKETING_FEATURE_CUSTOM_APP_ICONS_DESCRIPTION,
        imageSource: x,
        imageClassName: t.customAppIconImage
      },
      emoji: {
        title: _.default.Messages.PREMIUM_MARKETING_FEATURE_EMOJI_TITLE,
        description: _.default.Messages.PREMIUM_MARKETING_EMOJI_PERK_TITLE,
        imageSource: v,
        imageClassName: t.emojiImage
      },
      guildProfile: {
        title: _.default.Messages.PREMIUM_MARKETING_PER_GUILD_PROFILES_PERK_TITLE,
        description: e => {
          let t = () => {
            r.default.open(d.UserSettingsSections.PROFILE_CUSTOMIZATION, null, {
              scrollPosition: c.ProfileCustomizationScrollPositions.TRY_IT_OUT,
              analyticsLocations: e
            })
          };
          return k ? _.default.Messages.PREMIUM_MARKETING_PER_GUILD_PROFILE_THEMES_PERK_DESCRIPTION_CHECK_IT_OUT.format({
            onCheckItOutClick: t
          }) : _.default.Messages.PREMIUM_MARKETING_PER_GUILD_PROFILE_THEMES_PERK_DESCRIPTION_TRY_IT_OUT.format({
            onTryItOutClick: t
          })
        },
        imageSource: S,
        imageClassName: t.perGuildProfilesImage
      },
      longerMessages: {
        title: _.default.Messages.PREMIUM_MARKETING_LONGER_MESSAGES_PERK_TITLE,
        description: _.default.Messages.PREMIUM_MARKETING_LONGER_MESSAGES_PERK_DESCRIPTION,
        imageSource: G(i, D, b),
        imageClassName: t.longerMessagesImage
      },
      moreGuilds: {
        title: _.default.Messages.PREMIUM_MARKETING_MORE_GUILDS_PERK_TITLE,
        description: _.default.Messages.PREMIUM_MARKETING_MORE_GUILDS_PERK_DESCRIPTION,
        imageSource: G(i, R, U),
        imageClassName: t.moreGuildsImage
      },
      moreGuildsAlt: {
        title: _.default.Messages.PREMIUM_MARKETING_MORE_GUILDS_PERK_TITLE,
        description: _.default.Messages.PREMIUM_MARKETING_MORE_GUILDS_PERK_DESCRIPTION,
        imageSource: G(i, N, A),
        imageClassName: t.moreGuildsAltImage
      },
      remix: {
        title: _.default.Messages.REMIXING_PERKS_CARD_TITLE,
        description: _.default.Messages.REMIXING_PERKS_CARD_DESCRIPTION,
        imageSource: G(i, f, m),
        imageClassName: t.remixingImage,
        isEarlyAccess: !0
      },
      soundboard: {
        title: _.default.Messages.SOUND_BOARD_MARKETING_USE_CUSTOM_SOUNDS,
        description: _.default.Messages.SOUNDBOARD_MARKETING_REACT_WITH_SOUNDBOARD,
        imageSource: G(i, p, C),
        imageClassName: t.soundboardImage
      },
      stickers: {
        title: _.default.Messages.PREMIUM_MARKETING_STICKER_PERK_TITLE_OLD,
        description: _.default.Messages.PREMIUM_MARKETING_STICKER_PERK_DESCRIPTION,
        imageSource: G(i, g, j),
        imageClassName: t.stickersImage
      },
      stickersBurst: {
        title: _.default.Messages.PREMIUM_MARKETING_STICKER_PERK_TITLE,
        description: _.default.Messages.PREMIUM_MARKETING_STICKER_PERK_DESCRIPTION,
        imageSource: G(i, g, j),
        imageClassName: t.stickersImage
      },
      stickersPerkDiscoverability: {
        title: _.default.Messages.PREMIUM_MARKETING_STICKER_PERK_TITLE,
        description: _.default.Messages.PREMIUM_MARKETING_STICKER_PERK_LONG_DESCRIPTION,
        imageSource: G(i, g, j),
        imageClassName: t.stickersImage
      },
      streaming: {
        title: _.default.Messages.PREMIUM_MARKETING_FEATURE_PREMIUM_GO_LIVE_TITLE,
        description: _.default.Messages.PREMIUM_MARKETING_STREAMING_SMALL_PERK_DESCRIPTION,
        imageSource: y,
        imageClassName: t.streamingImage
      },
      superReactions: {
        title: _.default.Messages.PREMIUM_MARKETING_SUPER_REACTIONS_PERK_TITLE_V2,
        description: _.default.Messages.PREMIUM_MARKETING_SUPER_REACTIONS_PERK_DESCRIPTION_V2,
        imageSource: G(i, O, P),
        imageClassName: t.superReactionsImage
      },
      upload: {
        title: _.default.Messages.PREMIUM_MARKETING_UPLOADS_SMALL_PERK_TITLE.format({
          premiumMaxSize: H
        }),
        description: _.default.Messages.PREMIUM_MARKETING_UPLOADS_SMALL_PERK_DESCRIPTION.format({
          premiumMaxSize: H
        }),
        imageSource: B,
        imageClassName: t.uploadImage
      },
      videoBackground: {
        title: _.default.Messages.PREMIUM_MARKETING_VIDEO_BACKGROUND_PERK_TITLE,
        description: _.default.Messages.PREMIUM_MARKETING_VIDEO_BACKGROUND_PERK_DESCRIPTION,
        imageSource: G(i, M, h),
        imageClassName: t.videoBackgroundImage
      }
    }
  }