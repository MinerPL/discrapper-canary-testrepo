"use strict";
n.d(t, {
  Gg: function() {
    return L
  },
  Kb: function() {
    return C
  },
  Ww: function() {
    return D
  },
  ZI: function() {
    return O
  },
  _W: function() {
    return R
  },
  uF: function() {
    return p
  }
}), n(653041), n(998459), n(47120), n(411104), n(789020);
var i = n(392711),
  r = n.n(i),
  s = n(913527),
  o = n.n(s),
  a = n(991637),
  l = n.n(a),
  u = n(873546),
  _ = n(544891),
  d = n(355467),
  c = n(134432),
  E = n(351402),
  I = n(853872),
  T = n(78839),
  h = n(526167),
  S = n(630388),
  f = n(823379);
n(358085);
var N = n(709054),
  A = n(981631);
n(689938), l().shim();
let m = !u.tq && !u.Em && -1 !== (0, h.vu)();

function O(e, t) {
  let {
    analyticsSource: n,
    analyticsProperties: i,
    storeListingId: r,
    slug: s,
    channelId: o,
    guildId: a
  } = t;
  return {
    pathname: null != o && null != a ? A.Z5c.CHANNEL(a, o, e) : A.Z5c.APPLICATION_STORE_LISTING_SKU(e, s),
    state: {
      analyticsSource: n,
      analyticsProperties: i
    },
    search: null != r ? "?store_listing_id=".concat(r) : ""
  }
}

function R(e, t, n, i) {
  var r;
  let s;
  let o = window.GLOBAL_ENV.CDN_HOST;
  if (null == i) switch (t.mimeType || t.mime_type) {
    case "video/quicktime":
    case "video/mp4":
      i = "mp4";
      break;
    case "image/gif":
      i = "gif";
      break;
    default:
      i = "webp"
  }
  "webp" === i && !m && (i = "png");
  let a = "string" == typeof t ? t : t.id,
    l = (r = "https:", "https:");
  return s = null != o ? "".concat(l, "//").concat(o, "/app-assets/").concat(e, "/store/").concat(a, ".").concat(i) : "".concat(l).concat(window.GLOBAL_ENV.API_ENDPOINT).concat(A.ANM.STORE_ASSET(e, a, i)), null != n && (s += "?size=".concat((0, c.oO)(n * (0, c.x_)()))), s
}
async function C(e) {
  var t, n, i, r;
  let s = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
  if (s) {
    let e = [];
    !I.Z.hasFetchedPaymentSources && e.push(null !== (n = E.Z.paymentSourcesFetchRequest) && void 0 !== n ? n : (0, d.tZ)()), !E.Z.ipCountryCodeLoaded && e.push((0, d.GE)()), e.push(new Promise(async e => {
      if (T.ZP.hasFetchedSubscriptions()) e();
      else if (E.Z.isSubscriptionFetching) {
        let t = () => {
          E.Z.isSubscriptionFetching ? setTimeout(t, 50) : e()
        };
        t()
      } else await (0, d.jg)(), e()
    })), await Promise.allSettled(e)
  }
  let o = I.Z.getDefaultBillingCountryCode(),
    a = null !== (i = null === (t = I.Z.defaultPaymentSource) || void 0 === t ? void 0 : t.id) && void 0 !== i ? i : null,
    l = T.ZP.getPremiumTypeSubscription();
  null != l && null != l.paymentSourceId && (a = l.paymentSourceId), null === o && (o = null !== (r = E.Z.ipCountryCode) && void 0 !== r ? r : null);
  let u = {};
  if (null != o && (u.country_code = o), null != a && (u.payment_source_id = a), null != o || null != a) {
    if ("string" == typeof e && (e = {
        url: e,
        oldFormErrors: !0
      }), "string" == typeof e.query) throw Error("string query not supported");
    e.query = {
      ...u,
      ...e.query
    }
  }
  return _.tn.get(e)
}

function p(e, t, n) {
  let i = t.getApplication(e);
  return null == i || null == i.primarySkuId ? null : n.get(i.primarySkuId)
}
let g = 12633 == n.j ? [] : null;

function L(e, t, n, i, s) {
  let o = t.get(e);
  if (null == o) return g;
  let a = o.applicationId,
    l = [],
    u = [],
    _ = function(e, t, n) {
      var i;
      let r = null !== (i = n.getNowPlaying(e)) && void 0 !== i ? i : {},
        s = N.default.keys(r).map(e => {
          let n = t.getUser(e);
          return null == n ? null : {
            user: n,
            startTime: r[n.id].startedPlaying
          }
        }).filter(f.lm).sort((e, t) => t.startTime - e.startTime);
      return 0 === s.length ? null : {
        type: A.AzA.NOW_PLAYING,
        userInfo: s
      }
    }(a, n, i);
  null != _ && (l.push(_), u = _.userInfo.map(e => {
    let {
      user: t
    } = e;
    return t.id
  }));
  let d = s.getStatisticsForApplication(a);
  if (null != d) {
    let e = d.map(e => e.user_id);
    if (r().difference(e, u).length > 0) {
      let e = function(e, t, n) {
        let i = n.getStatisticsForApplication(e);
        if (null == i) return null;
        let r = i.map(e => {
          let n = t.getUser(e.user_id);
          return null == n ? null : {
            user: n,
            endTime: Date.parse(e.last_played_at)
          }
        }).filter(f.lm).sort((e, t) => t.endTime - e.endTime);
        return 0 === r.length ? null : {
          type: A.AzA.EVER_PLAYED,
          userInfo: r
        }
      }(a, n, s);
      null != e && l.push(e)
    }
  }
  return l
}
let v = 12633 == n.j ? [] : null;

function D(e, t, n) {
  let i = t.get(e),
    r = n.getForSKU(e);
  if (null == i || null == r) return v;
  let s = [];
  (0, S.yE)(i.flags, A.l4R.HAS_FREE_PREMIUM_CONTENT) && s.push({
    type: A.AzA.HAS_FREE_PREMIUM_CONTENT
  });
  let a = i.releaseDate;
  return null != a && 3 > o()().diff(a, "months") && (i.accessType === A.kGb.EARLY_ACCESS ? s.push({
    type: A.AzA.EARLY_ACCESS,
    releaseDate: a
  }) : s.push({
    type: A.AzA.RECENT_RELEASE_DATE,
    releaseDate: a
  })), null != r.flavorText && s.push({
    type: A.AzA.FLAVOR_TEXT,
    flavorText: r.flavorText
  }), s
}