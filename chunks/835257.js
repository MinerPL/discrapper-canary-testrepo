"use strict";
n.r(t), n.d(t, {
  registerFetchedSupplementals: function() {
    return p
  },
  JoinSourceType: function() {
    return s
  },
  getJoinSourceTypeLabel: function() {
    return F
  },
  getIntegrationLabel: function() {
    return N
  },
  useGetIntegrationIconString: function() {
    return g
  },
  fetchMemberSupplemental: function() {
    return v
  }
}), n("424973");
var i, s, l, a, u, r, d = n("872717"),
  o = n("819855"),
  c = n("841098"),
  h = n("376556"),
  E = n("572943"),
  f = n("49111"),
  I = n("782340");
let _ = {};

function m(e, t) {
  return e + t
}

function T(e, t) {
  return t.map(t => e + t)
}

function M(e) {
  return e.split("-")[1]
}(a = i || (i = {}))[a.FAILED = 0] = "FAILED", a[a.UNFETCHED = 1] = "UNFETCHED", a[a.PENDING = 2] = "PENDING", a[a.SUCCEEDED = 3] = "SUCCEEDED", a[a.FAILED_NO_RETRY = 4] = "FAILED_NO_RETRY";

function S(e, t) {
  e.forEach(e => {
    _[e] = t
  })
}

function p(e, t) {
  t.forEach(t => (function(e, t, n) {
    _[e + t] = 3
  })(e, t, 3))
}(u = s || (s = {}))[u.UNSPECIFIED = 0] = "UNSPECIFIED", u[u.BOT = 1] = "BOT", u[u.INTEGRATION = 2] = "INTEGRATION", u[u.DISCOVERY = 3] = "DISCOVERY", u[u.HUB = 4] = "HUB", u[u.INVITE = 5] = "INVITE", u[u.VANITY_URL = 6] = "VANITY_URL";
let F = function(e) {
  let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : void 0,
    n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
  switch (e) {
    case 1:
      return I.default.Messages.MEMBER_SAFETY_JOIN_TYPE_BOT;
    case 2:
      return I.default.Messages.MEMBER_SAFETY_JOIN_TYPE_INTEGRATION;
    case 3:
      return I.default.Messages.MEMBER_SAFETY_JOIN_TYPE_DISCOVERY;
    case 4:
      return I.default.Messages.MEMBER_SAFETY_JOIN_TYPE_HUB;
    case 5:
      return I.default.Messages.MEMBER_SAFETY_JOIN_TYPE_INVITE;
    case 6:
      if (null != t && !n) return I.default.Messages.MEMBER_SAFETY_JOIN_TYPE_VANITY_URL_LABEL_NAME.format({
        vanityUrl: t
      });
      return I.default.Messages.MEMBER_SAFETY_JOIN_TYPE_VANITY_URL;
    default:
      return I.default.Messages.MEMBER_SAFETY_JOIN_TYPE_UNKNOWN
  }
};
(r = l || (l = {})).DISCORD = "discord", r.TWITCH = "twitch", r.YOUTUBE = "youtube", r.GUILD_SUBSCRIPTION = "guild_subscription";
let N = e => {
    switch (e) {
      case "twitch":
        return I.default.Messages.MEMBER_SAFETY_JOIN_TYPE_INTEGRATION_TWITCH;
      case "youtube":
        return I.default.Messages.MEMBER_SAFETY_JOIN_TYPE_INTEGRATION_YOUTUBE;
      default:
        return I.default.Messages.MEMBER_SAFETY_JOIN_TYPE_INTEGRATION
    }
  },
  g = e => {
    let t = h.default.get((0, E.useLegacyPlatformType)(e)),
      n = (0, c.default)();
    return null != t && ["twitch", "youtube"].includes(e) ? "url('".concat((0, o.isThemeDark)(n) ? t.icon.darkSVG : t.icon.lightSVG, "')") : null
  };

function A(e) {
  return {
    userId: e.user_id,
    sourceInviteCode: e.source_invite_code,
    joinSourceType: e.join_source_type,
    inviterId: e.inviter_id,
    integrationType: e.integration_type
  }
}
async function v(e, t) {
  let n = T(e, t),
    i = n.filter(e => _[e] <= 1).map(M);
  if (0 === i.length) return [];
  S(n, 2);
  try {
    let t = await d.HTTP.post({
      url: f.Endpoints.MEMBER_SAFETY_SUPPLEMENTAL(e),
      body: {
        user_ids: i
      }
    });
    if (!Array.isArray(t.body)) return S(n, 0), [];
    let s = t.body.map(A),
      l = [];
    s.forEach(e => {
      let {
        userId: t
      } = e;
      return l.push(t)
    });
    let a = T(e, l),
      u = i.filter(e => !l.includes(e)),
      r = T(e, u);
    return S(a, 3), S(r, 0), s
  } catch (e) {
    S(n, 0)
  }
  return []
}