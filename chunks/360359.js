"use strict";
n.d(t, {
  Z: function() {
    return I
  }
}), n(47120);
var i = n(654861),
  r = n.n(i),
  s = n(108131),
  o = n.n(s),
  a = n(943881),
  l = n(650774),
  u = n(430824),
  _ = n(70956),
  d = n(709054);

function c(e, t, n) {
  let i = r()(e),
    s = null != t ? r()(t) : null,
    o = null != n ? r()(n) : null;
  return !(null != s && i.lesser(s) || null != o && i.greater(o)) && !0
}

function E(e) {
  let t, n;
  for (let [i, r] of e) switch (i) {
    case o().v3("min_id"):
      t = r;
      break;
    case o().v3("max_id"):
      n = r
  }
  return {
    min: t,
    max: n
  }
}
let I = {
  [o().v3("guild_ids")]: e => {
    let t = [];
    for (let [n, i] of e) n === o().v3("guild_ids") && (t = i);
    return e => t.includes(e)
  },
  [o().v3("guild_id_range")]: e => {
    let {
      min: t,
      max: n
    } = E(e);
    return e => c(e, t, n)
  },
  [o().v3("guild_age_range_days")]: e => {
    let {
      min: t,
      max: n
    } = E(e);
    return e => c(Math.floor(d.default.age(e) / _.Z.Millis.DAY), t, n)
  },
  [o().v3("guild_member_count_range")]: e => {
    let {
      min: t,
      max: n
    } = E(e);
    return e => {
      let i = l.Z.getMemberCount(e);
      return null != i && c(i, t, n)
    }
  },
  [o().v3("guild_has_feature")]: e => {
    let [
      [, t]
    ] = e;
    return e => {
      var n;
      let i = null !== (n = u.Z.getGuild(e)) && void 0 !== n ? n : a.Z.getGuild(e);
      return null != i && t.some(e => i.hasFeature(e))
    }
  },
  [o().v3("guild_hub_types")]: e => {
    let [
      [, t]
    ] = e;
    return e => {
      var n;
      let i = null !== (n = u.Z.getGuild(e)) && void 0 !== n ? n : a.Z.getGuild(e);
      return null != i && "number" == typeof i.hubType && t.some(e => i.hubType === e)
    }
  },
  [o().v3("guild_has_vanity_url")]: e => {
    let [
      [, t]
    ] = e;
    return e => {
      var n;
      let i = null !== (n = u.Z.getGuild(e)) && void 0 !== n ? n : a.Z.getGuild(e);
      return null != i && t === (null != i.vanityURLCode)
    }
  },
  [o().v3("guild_in_range_by_hash")]: e => {
    let t, n;
    for (let [r, s] of e) switch (r) {
      case o().v3("hash_key"):
        t = s;
        break;
      case o().v3("target"):
        var i;
        n = null !== (i = parseInt(s)) && void 0 !== i ? i : 0
    }
    return e => {
      let i = o().v3("".concat(t, ":").concat(e));
      return (i > 0 ? i + i : i >>> 0) % 1e4 < n
    }
  }
}