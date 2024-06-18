"use strict";
n.d(t, {
  MS: function() {
    return R
  },
  Ph: function() {
    return C
  },
  _2: function() {
    return g
  },
  bE: function() {
    return O
  },
  gq: function() {
    return r
  },
  nf: function() {
    return m
  }
}), n(653041);
var i, r, s, o, a, l, u = n(544891),
  _ = n(780384),
  d = n(410030),
  c = n(726542),
  E = n(122021),
  I = n(981631),
  T = n(689938);
let h = {};

function S(e, t) {
  return e + t
}

function f(e, t) {
  return t.map(t => e + t)
}

function N(e) {
  return e.split("-")[1]
}(o = i || (i = {}))[o.FAILED = 0] = "FAILED", o[o.UNFETCHED = 1] = "UNFETCHED", o[o.PENDING = 2] = "PENDING", o[o.SUCCEEDED = 3] = "SUCCEEDED", o[o.FAILED_NO_RETRY = 4] = "FAILED_NO_RETRY";

function A(e, t) {
  e.forEach(e => {
    h[e] = t
  })
}

function m(e, t) {
  t.forEach(t => (function(e, t, n) {
    h[e + t] = 3
  })(e, t, 3))
}(a = r || (r = {}))[a.UNSPECIFIED = 0] = "UNSPECIFIED", a[a.BOT = 1] = "BOT", a[a.INTEGRATION = 2] = "INTEGRATION", a[a.DISCOVERY = 3] = "DISCOVERY", a[a.HUB = 4] = "HUB", a[a.INVITE = 5] = "INVITE", a[a.VANITY_URL = 6] = "VANITY_URL", a[a.MANUAL_MEMBER_VERIFICATION = 7] = "MANUAL_MEMBER_VERIFICATION";
let O = function(e) {
  let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : void 0,
    n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
  switch (e) {
    case 1:
      return T.Z.Messages.MEMBER_SAFETY_JOIN_TYPE_BOT;
    case 2:
      return T.Z.Messages.MEMBER_SAFETY_JOIN_TYPE_INTEGRATION;
    case 3:
      return T.Z.Messages.MEMBER_SAFETY_JOIN_TYPE_DISCOVERY;
    case 4:
      return T.Z.Messages.MEMBER_SAFETY_JOIN_TYPE_HUB;
    case 5:
      return T.Z.Messages.MEMBER_SAFETY_JOIN_TYPE_INVITE;
    case 6:
      if (null != t && !n) return T.Z.Messages.MEMBER_SAFETY_JOIN_TYPE_VANITY_URL_LABEL_NAME.format({
        vanityUrl: t
      });
      return T.Z.Messages.MEMBER_SAFETY_JOIN_TYPE_VANITY_URL;
    case 7:
      return T.Z.Messages.MEMBER_SAFETY_JOIN_TYPE_MANUAL_VERIFICATION;
    default:
      return T.Z.Messages.MEMBER_SAFETY_JOIN_TYPE_UNKNOWN
  }
};
(l = s || (s = {})).DISCORD = "discord", l.TWITCH = "twitch", l.YOUTUBE = "youtube", l.GUILD_SUBSCRIPTION = "guild_subscription";
let R = e => {
    switch (e) {
      case "twitch":
        return T.Z.Messages.MEMBER_SAFETY_JOIN_TYPE_INTEGRATION_TWITCH;
      case "youtube":
        return T.Z.Messages.MEMBER_SAFETY_JOIN_TYPE_INTEGRATION_YOUTUBE;
      default:
        return T.Z.Messages.MEMBER_SAFETY_JOIN_TYPE_INTEGRATION
    }
  },
  C = e => {
    let t = c.Z.get((0, E.rR)(e)),
      n = (0, d.ZP)();
    return null != t && ["twitch", "youtube"].includes(e) ? "url('".concat((0, _.wj)(n) ? t.icon.darkSVG : t.icon.lightSVG, "')") : null
  };

function p(e) {
  return {
    userId: e.user_id,
    sourceInviteCode: e.source_invite_code,
    joinSourceType: e.join_source_type,
    inviterId: e.inviter_id,
    integrationType: e.integration_type
  }
}
async function g(e, t) {
  let n = f(e, t),
    i = n.filter(e => h[e] <= 1).map(N);
  if (0 === i.length) return [];
  A(n, 2);
  try {
    let t = await u.tn.post({
      url: I.ANM.MEMBER_SAFETY_SUPPLEMENTAL(e),
      body: {
        user_ids: i
      }
    });
    if (!Array.isArray(t.body)) return A(n, 0), [];
    let r = t.body.map(p),
      s = [];
    r.forEach(e => {
      let {
        userId: t
      } = e;
      return s.push(t)
    });
    let o = f(e, s),
      a = i.filter(e => !s.includes(e)),
      l = f(e, a);
    return A(o, 3), A(l, 0), r
  } catch (e) {
    A(n, 0)
  }
  return []
}