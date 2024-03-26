"use strict";
s.r(t), s.d(t, {
  usePerkCards: function() {
    return k
  }
});
var a = s("65597"),
  r = s("819855"),
  i = s("79112"),
  n = s("841098"),
  l = s("697218"),
  o = s("719923"),
  u = s("646718"),
  d = s("49111"),
  c = s("397336"),
  _ = s("782340"),
  E = s("737117"),
  T = s("550722"),
  I = s("113705"),
  f = s("743437"),
  S = s("404875"),
  R = s("118536"),
  m = s("411389"),
  A = s("840456"),
  N = s("720917"),
  p = s("982784"),
  C = s("19530"),
  g = s("215541"),
  O = s("663411"),
  P = s("126304"),
  M = s("674065"),
  h = s("771116"),
  L = s("309920"),
  x = s("480905"),
  v = s("761708"),
  D = s("224456"),
  b = s("656564"),
  U = s("124989"),
  j = s("14528"),
  G = s("443817"),
  y = s("759308");
let B = (e, t, s) => (0, r.isThemeDark)(e) ? t : s,
  k = e => {
    let {
      styles: t,
      selectedPremiumType: s
    } = e, r = (0, n.default)(), k = (0, a.useStateFromStores)([l.default], () => {
      let e = l.default.getCurrentUser();
      return o.default.canUsePremiumProfileCustomization(e)
    }), H = s !== u.PremiumTypes.TIER_0 ? _.default.Messages.FILE_UPLOAD_LIMIT_PREMIUM_TIER_2_INCREASE : _.default.Messages.FILE_UPLOAD_LIMIT_PREMIUM_TIER_0_CORRECTED, F = {
      badge: {
        title: _.default.Messages.PREMIUM_MARKETING_BADGE_PERK_TITLE,
        description: _.default.Messages.PREMIUM_MARKETING_BADGE_PERK_DESCRIPTION,
        imageSource: I,
        imageClassName: t.badgeImage
      },
      badgeAlt: {
        title: _.default.Messages.PREMIUM_MARKETING_PERK_GRID_ITEM_HEADING_PREMIUM_SUBSCRIPTION_BADGE,
        description: _.default.Messages.PREMIUM_MARKETING_FEATURE_PREMIUM_BADGE_DESCRIPTION_VARIANT_1,
        imageSource: B(r, E, T),
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
            i.default.open(d.UserSettingsSections.PROFILE_CUSTOMIZATION, null, {
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
        imageSource: B(r, D, b),
        imageClassName: t.longerMessagesImage
      },
      moreGuilds: {
        title: _.default.Messages.PREMIUM_MARKETING_MORE_GUILDS_PERK_TITLE,
        description: _.default.Messages.PREMIUM_MARKETING_MORE_GUILDS_PERK_DESCRIPTION,
        imageSource: B(r, f, U),
        imageClassName: t.moreGuildsImage
      },
      moreGuildsAlt: {
        title: _.default.Messages.PREMIUM_MARKETING_MORE_GUILDS_PERK_TITLE,
        description: _.default.Messages.PREMIUM_MARKETING_MORE_GUILDS_PERK_DESCRIPTION,
        imageSource: B(r, A, N),
        imageClassName: t.moreGuildsAltImage
      },
      remix: {
        title: _.default.Messages.REMIXING_PERKS_CARD_TITLE,
        description: _.default.Messages.REMIXING_PERKS_CARD_DESCRIPTION,
        imageSource: B(r, R, m),
        imageClassName: t.remixingImage,
        isEarlyAccess: !0
      },
      soundboard: {
        title: _.default.Messages.SOUND_BOARD_MARKETING_USE_CUSTOM_SOUNDS,
        description: _.default.Messages.SOUNDBOARD_MARKETING_REACT_WITH_SOUNDBOARD,
        imageSource: B(r, p, C),
        imageClassName: t.soundboardImage
      },
      stickers: {
        title: _.default.Messages.PREMIUM_MARKETING_STICKER_PERK_TITLE_OLD,
        description: _.default.Messages.PREMIUM_MARKETING_STICKER_PERK_DESCRIPTION,
        imageSource: B(r, g, j),
        imageClassName: t.stickersImage
      },
      stickersBurst: {
        title: _.default.Messages.PREMIUM_MARKETING_STICKER_PERK_TITLE,
        description: _.default.Messages.PREMIUM_MARKETING_STICKER_PERK_DESCRIPTION,
        imageSource: B(r, g, j),
        imageClassName: t.stickersImage
      },
      stickersPerkDiscoverability: {
        title: _.default.Messages.PREMIUM_MARKETING_STICKER_PERK_TITLE,
        description: _.default.Messages.PREMIUM_MARKETING_STICKER_PERK_LONG_DESCRIPTION,
        imageSource: B(r, g, j),
        imageClassName: t.stickersImage
      },
      streaming: {
        title: _.default.Messages.PREMIUM_MARKETING_FEATURE_PREMIUM_GO_LIVE_TITLE,
        description: _.default.Messages.PREMIUM_MARKETING_STREAMING_SMALL_PERK_DESCRIPTION,
        imageSource: G,
        imageClassName: t.streamingImage
      },
      superReactions: {
        title: _.default.Messages.PREMIUM_MARKETING_SUPER_REACTIONS_PERK_TITLE_V2,
        description: _.default.Messages.PREMIUM_MARKETING_SUPER_REACTIONS_PERK_DESCRIPTION_V2,
        imageSource: B(r, O, P),
        imageClassName: t.superReactionsImage
      },
      upload: {
        title: _.default.Messages.PREMIUM_MARKETING_UPLOADS_SMALL_PERK_TITLE.format({
          premiumMaxSize: H
        }),
        description: _.default.Messages.PREMIUM_MARKETING_UPLOADS_SMALL_PERK_DESCRIPTION.format({
          premiumMaxSize: H
        }),
        imageSource: y,
        imageClassName: t.uploadImage
      },
      videoBackground: {
        title: _.default.Messages.PREMIUM_MARKETING_VIDEO_BACKGROUND_PERK_TITLE,
        description: _.default.Messages.PREMIUM_MARKETING_VIDEO_BACKGROUND_PERK_DESCRIPTION,
        imageSource: B(r, M, h),
        imageClassName: t.videoBackgroundImage
      }
    };
    return F
  }