"use strict";
n.r(t), n.d(t, {
  ANIMATED_EMOJIS: function() {
    return c
  },
  EMOJIS_EVERYWHERE: function() {
    return f
  },
  STICKERS_EVERYWHERE: function() {
    return _
  },
  SOUNDBOARD_EVERYWHERE: function() {
    return h
  },
  CUSTOM_CALL_SOUNDS: function() {
    return g
  },
  ANIMATED_AVATAR: function() {
    return m
  },
  CUSTOM_DISCRIMINATOR: function() {
    return E
  },
  PREMIUM_GUILD_MEMBER_PROFILE: function() {
    return p
  },
  PROFILE_BADGES: function() {
    return v
  },
  PROFILE_PREMIUM_FEATURES: function() {
    return S
  },
  COLLECTIBLES: function() {
    return T
  },
  APP_ICONS: function() {
    return I
  },
  CLIENT_THEMES: function() {
    return C
  },
  BOOST_DISCOUNT: function() {
    return A
  },
  FREE_BOOSTS: function() {
    return y
  },
  HOST_PREMIUM_ACTIVITIES: function() {
    return N
  },
  STREAM_MID_QUALITY: function() {
    return R
  },
  STREAM_HIGH_QUALITY: function() {
    return O
  },
  FANCY_VOICE_CHANNEL_REACTIONS: function() {
    return D
  },
  INSTALL_PREMIUM_APPLICATIONS: function() {
    return P
  },
  REDEEM_PREMIUM_PERKS: function() {
    return b
  },
  VIDEO_FILTER_ASSETS: function() {
    return L
  },
  INCREASED_GUILD_LIMIT: function() {
    return M
  },
  INCREASED_MESSAGE_LENGTH: function() {
    return U
  },
  INCREASED_VIDEO_UPLOAD_QUALITY: function() {
    return k
  },
  UPLOAD_LARGE_FILES: function() {
    return w
  },
  canUserUse: function() {
    return G
  }
});
var i = n("605250"),
  s = n("886551"),
  r = n("45120"),
  a = n("715757"),
  o = n("646718");
let l = new i.default("ProductCatalog.tsx"),
  u = Object.freeze({
    [o.PremiumTypes.TIER_0]: o.PremiumSubscriptionSKUs.TIER_0,
    [o.PremiumTypes.TIER_1]: o.PremiumSubscriptionSKUs.TIER_1,
    [o.PremiumTypes.TIER_2]: o.PremiumSubscriptionSKUs.TIER_2
  });
class d extends r.default {
  constructor(e, t) {
    super(e, e => (function(e, t) {
      if (null == t || null == t.premiumType) return !1;
      try {
        let n = u[t.premiumType];
        if (null == n) return l.warn("Cannot find the corresponding SKU to the user's premium type ".concat(t.premiumType)), !1;
        let i = V[n];
        if (null == i) return l.warn("Cannot find the corresponding product catalog entry to the user's SKU ".concat(n, " and premium type ").concat(t.premiumType)), !1;
        return i.skuFeatures.includes(e)
      } catch (e) {
        var n;
        l.error("Error while retrieving user's feature access: ".concat(null !== (n = e.message) && void 0 !== n ? n : JSON.stringify(e)))
      }
      return !1
    })(this, e), t)
  }
}
let c = new d("animatedEmojis"),
  f = new d("emojisEverywhere"),
  _ = new d("stickersEverywhere"),
  h = new d("soundboardEverywhere"),
  g = new d("customCallSounds"),
  m = new d("animatedAvatar"),
  E = new d("customDiscriminator"),
  p = new d("premiumGuildMemberProfile"),
  v = new d("profileBadges"),
  S = new d("profilePremiumFeatures", "custom banner and avatar decoration"),
  T = new d("collectibles"),
  I = new d("appIcons"),
  C = new d("clientThemes"),
  A = new d("boostDiscount"),
  y = new d("freeBoosts"),
  N = new d("hostPremiumActivities"),
  R = new d("streamMidQuality"),
  O = new d("streamHighQuality"),
  D = new d("fancyVoiceChannelReactions"),
  P = new d("installPremiumApplications"),
  b = new d("redeemPremiumPerks"),
  L = new d("videoFilterAssets");
new r.default("increasedFileUploadSize", s.getUserMaxFileSize);
let M = new d("increasedGuildLimit"),
  U = new d("increasedMessageLength"),
  k = new d("increasedVideoUploadQuality"),
  w = new d("uploadLargeFiles"),
  V = Object.freeze({
    [o.PremiumSubscriptionSKUs.TIER_0]: new a.default(o.PremiumSubscriptionSKUs.TIER_0, [c, f, _, v, L, k, w, I]),
    [o.PremiumSubscriptionSKUs.TIER_1]: new a.default(o.PremiumSubscriptionSKUs.TIER_1, [c, f, m, E, v, A, R, D, k, w, I]),
    [o.PremiumSubscriptionSKUs.TIER_2]: new a.default(o.PremiumSubscriptionSKUs.TIER_2, [c, f, _, h, g, m, E, p, v, S, C, A, y, N, R, O, D, P, b, L, M, U, k, w, I, T])
  });

function G(e, t) {
  return e.getFeatureValue(t)
}