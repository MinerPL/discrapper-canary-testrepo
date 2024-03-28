"use strict";
r.r(t), r.d(t, {
  formatPomeloForEditing: function() {
    return A
  },
  formatUsernameLiveCheckValidation: function() {
    return p
  },
  getDefaultPomelo: function() {
    return L
  },
  getLocalizedForcedUUDate: function() {
    return I
  },
  getMemberSince: function() {
    return E
  },
  getUserAvatarURLForPomelo: function() {
    return f
  },
  shouldSkipToEditUsername: function() {
    return g
  }
}), r("757143"), r("47120"), r("627341");
var n = r("913527"),
  a = r.n(n),
  i = r("278074"),
  s = r("768581"),
  o = r("709054"),
  l = r("624138"),
  c = r("219496"),
  u = r("801461"),
  d = r("689938");

function f(e) {
  let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
  return s.default.getUserAvatarURL({
    id: e.id,
    avatar: e.avatar,
    bot: e.bot,
    discriminator: "0000"
  }, t, 80)
}

function L(e) {
  let t = (0, l.stripDiacritics)(e.username).replace(u.dirtyChars, "").replace(u.coalescePeriods, ".").toLowerCase();
  return "".concat(t).concat(e.discriminator).substring(0, 32)
}
let R = ["@", "#", ":"],
  m = ["```", "discord", "hypesquad", "system message", "system mesage", "sustem message", "sustem mesage", "clyde"],
  h = ["discordtag", "everyone", "here", "discord nitro", "discord", "snowsgiving"];

function g(e) {
  var t, r;
  let n = e.username.toLowerCase();
  if ((t = n, r = u.CONTROL_CHARACTERS_CODE, t.split("").filter(e => !r.includes(e.charCodeAt(0))).join("")).length < 2) return !0;
  for (let e of R)
    if (n.includes(e)) return !0;
  for (let e of h)
    if (n === e.toLowerCase()) return !0;
  for (let e of m)
    if (n.includes(e.toLowerCase())) return !0;
  return !1
}

function A(e) {
  return e.toLowerCase().replace(/\s/g, "").replace("@", "")
}

function E(e) {
  let t = o.default.extractTimestamp(e);
  try {
    return a()(new Date(t)).format("MMM DD, YYYY")
  } catch (e) {}
  return null
}

function p(e) {
  return (0, i.match)(e).with({
    rateLimited: !0
  }, () => ({
    type: c.NameValidationState.RATE_LIMIT,
    message: d.default.Messages.APPLICATION_STORE_LISTING_PURCHASE_RATE_LIMIT_ERROR_SHORT
  })).with({
    error: i.P.not(i.P.nullish)
  }, e => {
    let {
      error: t
    } = e;
    return {
      type: c.NameValidationState.ERROR,
      message: t
    }
  }).with({
    taken: !1
  }, () => ({
    type: c.NameValidationState.AVAILABLE,
    message: d.default.Messages.POMELO_EXISTING_FLOW_AVAILABLE
  })).with({
    taken: !0
  }, () => ({
    type: c.NameValidationState.ERROR,
    message: d.default.Messages.POMELO_EXISTING_FLOW_ERROR_UNAVAILABLE
  })).with({
    error: i.P.nullish
  }, () => ({
    type: c.NameValidationState.INTERNAL_ERROR,
    message: ""
  })).otherwise(() => void 0)
}

function I(e) {
  return new Date(2024, 2, 4).toLocaleDateString(e, {
    month: "long",
    day: "numeric",
    year: "numeric"
  })
}