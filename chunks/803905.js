"use strict";
n.d(t, {
  $0: function() {
    return g
  },
  AN: function() {
    return U
  },
  Ct: function() {
    return R
  },
  EQ: function() {
    return k
  },
  Ej: function() {
    return m
  },
  ME: function() {
    return I
  },
  O1: function() {
    return N
  },
  O8: function() {
    return v
  },
  Pl: function() {
    return A
  },
  Uw: function() {
    return M
  },
  ZE: function() {
    return y
  },
  _G: function() {
    return f
  },
  _O: function() {
    return O
  },
  _y: function() {
    return T
  },
  do: function() {
    return b
  },
  g7: function() {
    return L
  },
  g_: function() {
    return c
  },
  j4: function() {
    return p
  },
  ks: function() {
    return x
  },
  lX: function() {
    return S
  },
  m_: function() {
    return E
  },
  qH: function() {
    return D
  },
  tj: function() {
    return h
  },
  uw: function() {
    return C
  },
  wN: function() {
    return w
  },
  zZ: function() {
    return G
  },
  zm: function() {
    return P
  }
});
var i = n(848246),
  r = n(710845),
  s = n(380684),
  o = n(533293),
  a = n(575691),
  l = n(474936);
let u = new r.Z("ProductCatalog.tsx"),
  _ = Object.freeze({
    [l.p9.TIER_0]: l.Si.TIER_0,
    [l.p9.TIER_1]: l.Si.TIER_1,
    [l.p9.TIER_2]: l.Si.TIER_2
  });
class d extends o.Z {
  constructor(e, t) {
    super(e, e => (function(e, t) {
      if (null == t || null == t.premiumType) return !1;
      try {
        let n = _[t.premiumType];
        if (null == n) return u.warn("Cannot find the corresponding SKU to the user's premium type ".concat(t.premiumType)), !1;
        let i = B[n];
        if (null == i) return u.warn("Cannot find the corresponding product catalog entry to the user's SKU ".concat(n, " and premium type ").concat(t.premiumType)), !1;
        return i.skuFeatures.includes(e)
      } catch (e) {
        var n;
        u.error("Error while retrieving user's feature access: ".concat(null !== (n = e.message) && void 0 !== n ? n : JSON.stringify(e)))
      }
      return !1
    })(this, e), t)
  }
}
let c = new d(i.q.ANIMATED_EMOJIS),
  E = new d(i.q.EMOJIS_EVERYWHERE),
  I = new d(i.q.STICKERS_EVERYWHERE),
  T = new d(i.q.SOUNDBOARD_EVERYWHERE),
  h = new d(i.q.CUSTOM_CALL_SOUNDS),
  S = new d(i.q.ANIMATED_AVATAR),
  f = new d(i.q.CUSTOM_DISCRIMINATOR),
  N = new d(i.q.PREMIUM_GUILD_MEMBER_PROFILE),
  A = new d("profileBadges"),
  m = new d(i.q.PROFILE_PREMIUM_FEATURES, "custom banner and avatar decoration"),
  O = new d("collectibles"),
  R = new d("appIcons"),
  C = new d(i.q.CLIENT_THEMES),
  p = new d("boostDiscount"),
  g = new d("freeBoosts"),
  L = new d(i.q.STREAM_MID_QUALITY),
  v = new d(i.q.STREAM_HIGH_QUALITY),
  D = new d(i.q.CUSTOM_NOTIFICATION_SOUNDS),
  M = new d("fancyVoiceChannelReactions"),
  P = new d("installPremiumApplications"),
  y = new d("redeemPremiumPerks"),
  U = new d(i.q.VIDEO_FILTER_ASSETS);
new o.Z(i.q.INCREASED_FILE_UPLOAD_SIZE, s.h);
let b = new d(i.q.INCREASED_GUILD_LIMIT),
  G = new d(i.q.INCREASED_MESSAGE_LENGTH),
  w = new d("increasedVideoUploadQuality"),
  k = new d("uploadLargeFiles"),
  B = Object.freeze({
    [l.Si.TIER_0]: new a.Z(l.Si.TIER_0, [c, E, I, A, U, w, k, R]),
    [l.Si.TIER_1]: new a.Z(l.Si.TIER_1, [c, E, S, f, A, p, L, M, w, k, R]),
    [l.Si.TIER_2]: new a.Z(l.Si.TIER_2, [c, E, I, T, h, S, f, N, A, m, C, p, g, L, v, M, P, y, U, b, G, w, k, R, O, D])
  });

function x(e, t) {
  return e.getFeatureValue(t)
}