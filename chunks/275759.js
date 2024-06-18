"use strict";
n.d(t, {
  FI: function() {
    return m
  },
  O1: function() {
    return r
  },
  SJ: function() {
    return h
  },
  Ur: function() {
    return A
  },
  kQ: function() {
    return N
  },
  n_: function() {
    return f
  },
  xp: function() {
    return S
  }
});
var i, r, s = n(512722),
  o = n.n(s),
  a = n(392711),
  l = n.n(a),
  u = n(729594);
n(442837);
var _ = n(627420);
n(704215);
var d = n(277800);
n(605236);
var c = n(430824);
n(496675);
var E = n(856651),
  I = n(981631),
  T = n(689938);
let h = ["426537812993638400", "1042836142560645130", "296023718839451649", "979802510766268446", "1031611223235637258", "512333785338216465"];

function S(e) {
  let {
    query: t
  } = u.parse(e, !0), {
    code: n,
    state: i,
    error: r,
    error_description: s
  } = t;
  return o()(!Array.isArray(n), "Received multiple query param values for code"), o()(!Array.isArray(i), "Received multiple query param values for state"), o()(!Array.isArray(r), "Received multiple query param values for error"), o()(!Array.isArray(s), "Received multiple query param values for error_description"), {
    code: n,
    state: i,
    error: r,
    errorDescription: s
  }
}

function f(e) {
  let {
    connectionType: t,
    connectionMetadataField: n,
    operator: i,
    operatorText: r,
    value: s
  } = e, o = null, a = Math.round(Number(s));
  switch (i) {
    case E.iO.EQUAL:
      o = T.Z.Messages.CONNECTIONS_ROLE_POPOUT_MUST_BE, t === I.ABu.PAYPAL && n === E.PC.PAYPAL_VERIFIED && (o = T.Z.Messages.CONNECTIONS_ROLE_POPOUT_MUST_HAVE_A);
      break;
    case E.iO.NOT_EQUAL:
      o = T.Z.Messages.CONNECTIONS_ROLE_POPOUT_MUST_NOT_BE;
      break;
    case E.iO.LESS_THAN:
      o = T.Z.Messages.CONNECTIONS_ROLE_POPOUT_MUST_HAVE_AT_MOST, a = Math.max(0, a - 1);
      break;
    case E.iO.GREATER_THAN:
      o = T.Z.Messages.CONNECTIONS_ROLE_POPOUT_MUST_HAVE_AT_LEAST, a = Math.max(0, a + 1);
      break;
    case void 0:
    case null:
      return null
  }
  if (null != r && (o = r), o instanceof _._H && null != i) switch (t) {
    case I.ABu.REDDIT:
      switch (n) {
        case E.PC.CREATED_AT:
          o = o.format({
            platformQuantityHook: () => T.Z.Messages.CONNECTIONS_ROLE_RULE_ACCOUNT_AGE.format({
              days: a
            })
          });
          break;
        case E.PC.REDDIT_TOTAL_KARMA:
          o = o.format({
            platformQuantityHook: () => T.Z.Messages.CONNECTIONS_ROLE_RULE_REDDIT_KARMA.format({
              karma: a
            })
          });
          break;
        case E.PC.REDDIT_GOLD:
          o = o.format({
            platformQuantityHook: () => T.Z.Messages.CONNECTIONS_ROLE_RULE_REDDIT_GOLD
          });
          break;
        case E.PC.REDDIT_MOD:
          o = o.format({
            platformQuantityHook: () => T.Z.Messages.CONNECTIONS_ROLE_RULE_REDDIT_MODERATOR
          });
          break;
        default:
          return null
      }
      break;
    case I.ABu.STEAM:
      switch (n) {
        case E.PC.CREATED_AT:
          o = o.format({
            platformQuantityHook: () => T.Z.Messages.CONNECTIONS_ROLE_RULE_ACCOUNT_AGE.format({
              days: a
            })
          });
          break;
        case E.PC.STEAM_GAME_COUNT:
          o = o.format({
            platformQuantityHook: () => T.Z.Messages.CONNECTIONS_ROLE_RULE_STEAM_GAMES.format({
              count: a
            })
          });
          break;
        case E.PC.STEAM_ITEM_COUNT_TF2:
          o = o.format({
            platformQuantityHook: () => T.Z.Messages.CONNECTIONS_ROLE_RULE_STEAM_TF2_ITEMS.format({
              count: a
            })
          });
          break;
        case E.PC.STEAM_ITEM_COUNT_DOTA2:
          o = o.format({
            platformQuantityHook: () => T.Z.Messages.CONNECTIONS_ROLE_RULE_STEAM_DOTA2_ITEMS.format({
              count: a
            })
          });
          break;
        default:
          return null
      }
      break;
    case I.ABu.TWITTER:
      switch (n) {
        case E.PC.CREATED_AT:
          o = o.format({
            platformQuantityHook: () => T.Z.Messages.CONNECTIONS_ROLE_RULE_ACCOUNT_AGE.format({
              days: a
            })
          });
          break;
        case E.PC.TWITTER_VERIFIED:
          o = o.format({
            platformQuantityHook: () => T.Z.Messages.CONNECTIONS_ROLE_RULE_TWITTER_VERIFIED
          });
          break;
        case E.PC.TWITTER_FOLLOWERS_COUNT:
          o = o.format({
            platformQuantityHook: () => T.Z.Messages.CONNECTIONS_ROLE_RULE_TWITTER_FOLLOWERS.format({
              count: a
            })
          });
          break;
        case E.PC.TWITTER_STATUSES_COUNT:
          o = o.format({
            platformQuantityHook: () => T.Z.Messages.CONNECTIONS_ROLE_RULE_TWITTER_STATUSES.format({
              count: a
            })
          });
          break;
        default:
          return null
      }
      break;
    case I.ABu.PAYPAL:
      switch (n) {
        case E.PC.CREATED_AT:
          o = o.format({
            platformQuantityHook: () => T.Z.Messages.CONNECTIONS_ROLE_RULE_ACCOUNT_AGE.format({
              days: a
            })
          });
          break;
        case E.PC.PAYPAL_VERIFIED:
          o = o.format({
            platformQuantityHook: () => T.Z.Messages.CONNECTIONS_ROLE_RULE_PAYPAL_VERIFIED
          });
          break;
        default:
          return null
      }
      break;
    case I.ABu.EBAY:
      switch (n) {
        case E.PC.CREATED_AT:
          o = o.format({
            platformQuantityHook: () => T.Z.Messages.CONNECTIONS_ROLE_RULE_ACCOUNT_AGE.format({
              days: a
            })
          });
          break;
        case E.PC.EBAY_TOP_RATED_SELLER:
          o = o.format({
            platformQuantityHook: () => T.Z.Messages.CONNECTIONS_EBAY_TOP_RATED_SELLER
          });
          break;
        case E.PC.EBAY_POSITIVE_FEEDBACK_PERCENTAGE:
          o = o.format({
            platformQuantityHook: () => T.Z.Messages.CONNECTIONS_ROLE_RULE_EBAY_POSITIVE_FEEDBACK_PERCENTAGE.format({
              value: a
            })
          });
          break;
        case E.PC.EBAY_UNIQUE_POSITIVE_FEEDBACK_COUNT:
          o = o.format({
            platformQuantityHook: () => T.Z.Messages.CONNECTIONS_ROLE_RULE_EBAY_UNIQUE_POSITIVE_FEEDBACK_COUNT.format({
              count: a
            })
          });
          break;
        case E.PC.EBAY_UNIQUE_NEGATIVE_FEEDBACK_COUNT:
          o = o.format({
            platformQuantityHook: () => T.Z.Messages.CONNECTIONS_ROLE_RULE_EBAY_UNIQUE_NEGATIVE_FEEDBACK_COUNT.format({
              count: a
            })
          });
          break;
        default:
          return null
      }
      break;
    case I.ABu.TIKTOK:
      switch (n) {
        case E.PC.TIKTOK_VERIFIED:
          o = o.format({
            platformQuantityHook: () => T.Z.Messages.CONNECTIONS_ROLE_RULE_TIKTOK_VERIFIED
          });
          break;
        case E.PC.TIKTOK_FOLLOWER_COUNT:
          o = o.format({
            platformQuantityHook: () => T.Z.Messages.CONNECTIONS_ROLE_RULE_TIKTOK_FOLLOWER_COUNT.format({
              count: a
            })
          });
          break;
        case E.PC.TIKTOK_FOLLOWING_COUNT:
          o = o.format({
            platformQuantityHook: () => T.Z.Messages.CONNECTIONS_ROLE_RULE_TIKTOK_FOLLOWING_COUNT.format({
              count: a
            })
          });
          break;
        case E.PC.TIKTOK_LIKES_COUNT:
          o = o.format({
            platformQuantityHook: () => T.Z.Messages.CONNECTIONS_ROLE_RULE_TIKTOK_LIKES_COUNT.format({
              count: a
            })
          });
          break;
        default:
          return null
      }
      break;
    default:
      return null
  }
  return o
}

function N(e, t) {
  return Object.values(t).some(e => {
    var t;
    return (null === (t = e.tags) || void 0 === t ? void 0 : t.guild_connections) === null
  })
}

function A(e) {
  var t, n;
  let {
    guildMember: i,
    guild: r,
    guildRoles: s,
    channel: a,
    onlyChannelConnectionRoles: u = !1
  } = e;
  if (null == i) return null;
  if (null == r && null != a && (r = c.Z.getGuild(a.getGuildId())), null == r) return null;
  let {
    id: _
  } = r;
  null == s && (s = c.Z.getRoles(_));
  let E = i.roles.map(e => s[e]).filter(e => {
      var t;
      return (null == e ? void 0 : null === (t = e.tags) || void 0 === t ? void 0 : t.guild_connections) === null
    }).sort((e, t) => (o()(null != e && null != t, "roleA or roleB is null"), t.position - e.position)),
    I = l().intersection(E, (0, d.Z)(a));
  return I.length > 0 ? null !== (t = I[0]) && void 0 !== t ? t : null : u ? null : null !== (n = E[0]) && void 0 !== n ? n : null
}

function m(e, t) {
  if (null == e || "" === e) return null;
  let n = new Date(e);
  return !(n instanceof Date) || isNaN(n.getTime()) ? null : n.toLocaleDateString(t, {
    month: "short",
    day: "numeric",
    year: "numeric"
  })
}(i = r || (r = {}))[i.AND = 0] = "AND", i[i.OR = 1] = "OR"