"use strict";
n.r(t), n.d(t, {
  registerFetchedSupplementals: function() {
    return h
  },
  JoinSourceType: function() {
    return s
  },
  getJoinSourceTypeLabel: function() {
    return A
  },
  getIntegrationLabel: function() {
    return p
  },
  useGetIntegrationIconString: function() {
    return L
  },
  fetchMemberSupplemental: function() {
    return U
  }
}), n("424973");
var i, s, a, l, u, o, d = n("872717"),
  r = n("819855"),
  c = n("841098"),
  f = n("376556"),
  E = n("572943"),
  S = n("49111"),
  _ = n("782340");
let g = {};

function M(e, t) {
  return e + t
}

function N(e, t) {
  return t.map(t => e + t)
}

function I(e) {
  return e.split("-")[1]
}(l = i || (i = {}))[l.FAILED = 0] = "FAILED", l[l.UNFETCHED = 1] = "UNFETCHED", l[l.PENDING = 2] = "PENDING", l[l.SUCCEEDED = 3] = "SUCCEEDED", l[l.FAILED_NO_RETRY = 4] = "FAILED_NO_RETRY";

function T(e, t) {
  e.forEach(e => {
    g[e] = t
  })
}

function h(e, t) {
  t.forEach(t => (function(e, t, n) {
    g[e + t] = 3
  })(e, t, 3))
}(u = s || (s = {}))[u.UNSPECIFIED = 0] = "UNSPECIFIED", u[u.BOT = 1] = "BOT", u[u.INTEGRATION = 2] = "INTEGRATION", u[u.DISCOVERY = 3] = "DISCOVERY", u[u.HUB = 4] = "HUB", u[u.INVITE = 5] = "INVITE", u[u.VANITY_URL = 6] = "VANITY_URL";
let A = function(e) {
  let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : void 0,
    n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
  switch (e) {
    case 1:
      return _.default.Messages.MEMBER_SAFETY_JOIN_TYPE_BOT;
    case 2:
      return _.default.Messages.MEMBER_SAFETY_JOIN_TYPE_INTEGRATION;
    case 3:
      return _.default.Messages.MEMBER_SAFETY_JOIN_TYPE_DISCOVERY;
    case 4:
      return _.default.Messages.MEMBER_SAFETY_JOIN_TYPE_HUB;
    case 5:
      return _.default.Messages.MEMBER_SAFETY_JOIN_TYPE_INVITE;
    case 6:
      if (null != t && !n) return _.default.Messages.MEMBER_SAFETY_JOIN_TYPE_VANITY_URL_LABEL_NAME.format({
        vanityUrl: t
      });
      return _.default.Messages.MEMBER_SAFETY_JOIN_TYPE_VANITY_URL;
    default:
      return _.default.Messages.MEMBER_SAFETY_JOIN_TYPE_UNKNOWN
  }
};
(o = a || (a = {})).DISCORD = "discord", o.TWITCH = "twitch", o.YOUTUBE = "youtube", o.GUILD_SUBSCRIPTION = "guild_subscription";
let p = e => {
    switch (e) {
      case "twitch":
        return _.default.Messages.MEMBER_SAFETY_JOIN_TYPE_INTEGRATION_TWITCH;
      case "youtube":
        return _.default.Messages.MEMBER_SAFETY_JOIN_TYPE_INTEGRATION_YOUTUBE;
      default:
        return _.default.Messages.MEMBER_SAFETY_JOIN_TYPE_INTEGRATION
    }
  },
  L = e => {
    let t = f.default.get((0, E.useLegacyPlatformType)(e)),
      n = (0, c.default)();
    return null != t && ["twitch", "youtube"].includes(e) ? "url('".concat((0, r.isThemeDark)(n) ? t.icon.darkSVG : t.icon.lightSVG, "')") : null
  };

function O(e) {
  return {
    userId: e.user_id,
    sourceInviteCode: e.source_invite_code,
    joinSourceType: e.join_source_type,
    inviterId: e.inviter_id,
    integrationType: e.integration_type
  }
}
async function U(e, t) {
  let n = N(e, t),
    i = n.filter(e => g[e] <= 1).map(I);
  if (0 === i.length) return [];
  T(n, 2);
  try {
    let t = await d.HTTP.post({
      url: S.Endpoints.MEMBER_SAFETY_SUPPLEMENTAL(e),
      body: {
        user_ids: i
      }
    });
    if (!Array.isArray(t.body)) return T(n, 0), [];
    let s = t.body.map(O),
      a = [];
    s.forEach(e => {
      let {
        userId: t
      } = e;
      return a.push(t)
    });
    let l = N(e, a),
      u = i.filter(e => !a.includes(e)),
      o = N(e, u);
    return T(l, 3), T(o, 0), s
  } catch (e) {
    T(n, 0)
  }
  return []
}