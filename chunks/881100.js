n.d(t, {
  N: function() {
return k;
  }
});
var s = n(399606),
  a = n(780384),
  r = n(230711),
  i = n(410030),
  l = n(594174),
  o = n(424218),
  c = n(380684),
  d = n(74538),
  _ = n(474936),
  u = n(981631),
  E = n(526761),
  T = n(689938),
  I = n(323780),
  R = n(101732),
  C = n(450598),
  g = n(633030),
  N = n(97942),
  p = n(269987),
  A = n(548629),
  m = n(507084),
  f = n(680313),
  S = n(926433),
  h = n(302036),
  M = n(994554),
  x = n(1549),
  b = n(13327),
  O = n(59137),
  P = n(405991),
  L = n(24615),
  v = n(193943),
  Z = n(334347),
  D = n(943734),
  B = n(603076),
  j = n(472656),
  U = n(912429),
  G = n(772969),
  y = n(926262);
let H = (e, t, n) => (0, a.wj)(e) ? t : n,
  k = e => {
let {
  styles: t
} = e, n = (0, i.ZP)(), a = (0, s.e7)([l.default], () => {
  let e = l.default.getCurrentUser();
  return d.ZP.canUsePremiumProfileCustomization(e);
}), k = (0, o.BU)(((0, c.Xv)() ? _.wb : _.Uq) / 1024, {
  useKibibytes: !0
});
return {
  badge: {
    title: T.Z.Messages.PREMIUM_MARKETING_BADGE_PERK_TITLE,
    description: T.Z.Messages.PREMIUM_MARKETING_BADGE_PERK_DESCRIPTION,
    imageSource: C,
    imageClassName: t.badgeImage
  },
  badgeAlt: {
    title: T.Z.Messages.PREMIUM_MARKETING_PERK_GRID_ITEM_HEADING_PREMIUM_SUBSCRIPTION_BADGE,
    description: T.Z.Messages.PREMIUM_MARKETING_FEATURE_PREMIUM_BADGE_DESCRIPTION_VARIANT_1,
    imageSource: H(n, I, R),
    imageClassName: t.badgeNewImage
  },
  clientThemes: {
    title: T.Z.Messages.PREMIUM_MARKETING_VARIANT_2_FEATURE_CLIENT_THEMES_TITLE,
    description: T.Z.Messages.PREMIUM_MARKETING_VARIANT_2_FEATURE_CLIENT_THEMES_DESCRIPTION,
    className: t.clientThemesCard,
    imageSource: L,
    imageClassName: t.clientThemesImage
  },
  customAppIcons: {
    title: T.Z.Messages.PREMIUM_MARKETING_FEATURE_CUSTOM_APP_ICONS_TITLE,
    description: T.Z.Messages.PREMIUM_MARKETING_FEATURE_CUSTOM_APP_ICONS_DESCRIPTION,
    imageSource: v,
    imageClassName: t.customAppIconImage
  },
  emoji: {
    title: T.Z.Messages.PREMIUM_MARKETING_FEATURE_EMOJI_TITLE,
    description: T.Z.Messages.PREMIUM_MARKETING_EMOJI_PERK_TITLE,
    imageSource: Z,
    imageClassName: t.emojiImage
  },
  guildProfile: {
    title: T.Z.Messages.PREMIUM_MARKETING_PER_GUILD_PROFILES_PERK_TITLE,
    description: e => {
      let t = () => {
        r.Z.open(u.oAB.PROFILE_CUSTOMIZATION, null, {
          scrollPosition: E.Y_.TRY_IT_OUT,
          analyticsLocations: e
        });
      };
      return a ? T.Z.Messages.PREMIUM_MARKETING_PER_GUILD_PROFILE_THEMES_PERK_DESCRIPTION_CHECK_IT_OUT.format({
        onCheckItOutClick: t
      }) : T.Z.Messages.PREMIUM_MARKETING_PER_GUILD_PROFILE_THEMES_PERK_DESCRIPTION_TRY_IT_OUT.format({
        onTryItOutClick: t
      });
    },
    imageSource: N,
    imageClassName: t.perGuildProfilesImage
  },
  longerMessages: {
    title: T.Z.Messages.PREMIUM_MARKETING_LONGER_MESSAGES_PERK_TITLE,
    description: T.Z.Messages.PREMIUM_MARKETING_LONGER_MESSAGES_PERK_DESCRIPTION,
    imageSource: H(n, D, B),
    imageClassName: t.longerMessagesImage
  },
  moreGuilds: {
    title: T.Z.Messages.PREMIUM_MARKETING_MORE_GUILDS_PERK_TITLE,
    description: T.Z.Messages.PREMIUM_MARKETING_MORE_GUILDS_PERK_DESCRIPTION,
    imageSource: H(n, g, j),
    imageClassName: t.moreGuildsImage
  },
  moreGuildsAlt: {
    title: T.Z.Messages.PREMIUM_MARKETING_MORE_GUILDS_PERK_TITLE,
    description: T.Z.Messages.PREMIUM_MARKETING_MORE_GUILDS_PERK_DESCRIPTION,
    imageSource: H(n, m, f),
    imageClassName: t.moreGuildsAltImage
  },
  remix: {
    title: T.Z.Messages.REMIXING_PERKS_CARD_TITLE,
    description: T.Z.Messages.REMIXING_PERKS_CARD_DESCRIPTION,
    imageSource: H(n, p, A),
    imageClassName: t.remixingImage,
    isEarlyAccess: !0
  },
  soundboard: {
    title: T.Z.Messages.SOUND_BOARD_MARKETING_USE_CUSTOM_SOUNDS,
    description: T.Z.Messages.SOUNDBOARD_MARKETING_REACT_WITH_SOUNDBOARD,
    imageSource: H(n, S, h),
    imageClassName: t.soundboardImage
  },
  stickers: {
    title: T.Z.Messages.PREMIUM_MARKETING_STICKER_PERK_TITLE_OLD,
    description: T.Z.Messages.PREMIUM_MARKETING_STICKER_PERK_DESCRIPTION,
    imageSource: H(n, M, U),
    imageClassName: t.stickersImage
  },
  stickersBurst: {
    title: T.Z.Messages.PREMIUM_MARKETING_STICKER_PERK_TITLE,
    description: T.Z.Messages.PREMIUM_MARKETING_STICKER_PERK_DESCRIPTION,
    imageSource: H(n, M, U),
    imageClassName: t.stickersImage
  },
  stickersPerkDiscoverability: {
    title: T.Z.Messages.PREMIUM_MARKETING_STICKER_PERK_TITLE,
    description: T.Z.Messages.PREMIUM_MARKETING_STICKER_PERK_LONG_DESCRIPTION,
    imageSource: H(n, M, U),
    imageClassName: t.stickersImage
  },
  streaming: {
    title: T.Z.Messages.PREMIUM_MARKETING_FEATURE_PREMIUM_GO_LIVE_TITLE,
    description: T.Z.Messages.PREMIUM_MARKETING_STREAMING_SMALL_PERK_DESCRIPTION,
    imageSource: G,
    imageClassName: t.streamingImage
  },
  superReactions: {
    title: T.Z.Messages.PREMIUM_MARKETING_SUPER_REACTIONS_PERK_TITLE_V2,
    description: T.Z.Messages.PREMIUM_MARKETING_SUPER_REACTIONS_PERK_DESCRIPTION_V2,
    imageSource: H(n, x, b),
    imageClassName: t.superReactionsImage
  },
  upload: {
    title: T.Z.Messages.PREMIUM_MARKETING_UPLOADS_SMALL_PERK_TITLE.format({
      premiumMaxSize: k
    }),
    description: T.Z.Messages.PREMIUM_MARKETING_UPLOADS_SMALL_PERK_DESCRIPTION.format({
      premiumMaxSize: k
    }),
    imageSource: y,
    imageClassName: t.uploadImage
  },
  videoBackground: {
    title: T.Z.Messages.PREMIUM_MARKETING_VIDEO_BACKGROUND_PERK_TITLE,
    description: T.Z.Messages.PREMIUM_MARKETING_VIDEO_BACKGROUND_PERK_DESCRIPTION,
    imageSource: H(n, O, P),
    imageClassName: t.videoBackgroundImage
  }
};
  };