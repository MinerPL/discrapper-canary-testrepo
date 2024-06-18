"use strict";
n.d(t, {
  AE: function() {
    return f
  },
  FP: function() {
    return I
  },
  I1: function() {
    return N
  },
  O0: function() {
    return O
  },
  Qb: function() {
    return c
  },
  W2: function() {
    return E
  },
  Xj: function() {
    return R
  },
  _d: function() {
    return S
  },
  dA: function() {
    return m
  },
  uw: function() {
    return T
  },
  vY: function() {
    return h
  }
}), n(47120);
var i = n(379649),
  r = n(570140),
  s = n(355467),
  o = n(821849),
  a = n(367907),
  l = n(626135),
  u = n(70956),
  _ = n(295141),
  d = n(981631);
async function c(e) {
  let t = await _.X2(e);
  r.Z.dispatch({
    type: "GUILD_ROLE_SUBSCRIPTIONS_UPDATE_SUBSCRIPTIONS_SETTINGS",
    settings: t
  })
}
async function E(e, t) {
  let n = await _.ci(e, t);
  r.Z.dispatch({
    type: "GUILD_ROLE_SUBSCRIPTIONS_UPDATE_SUBSCRIPTIONS_SETTINGS",
    settings: n
  })
}
async function I(e) {
  let {
    includeSoftDeleted: t = !0,
    countryCode: n
  } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
  r.Z.dispatch({
    type: "GUILD_ROLE_SUBSCRIPTIONS_FETCH_LISTINGS",
    guildId: e
  });
  try {
    let [i, o, a] = await Promise.all([_.rD(e, {
      includeSoftDeleted: t,
      countryCode: n
    }), _.X2(e), _.eI(e), (0, s.jg)()]);
    r.Z.dispatch({
      type: "GUILD_ROLE_SUBSCRIPTIONS_FETCH_LISTINGS_SUCCESS",
      guildId: e,
      groupListings: i,
      settings: o,
      subscriptionTrials: a
    })
  } catch (t) {
    r.Z.dispatch({
      type: "GUILD_ROLE_SUBSCRIPTIONS_FETCH_LISTINGS_FAILURE",
      guildId: e
    })
  }
}
async function T(e, t) {
  let n = await _.bg(e, t);
  return r.Z.dispatch({
    type: "GUILD_ROLE_SUBSCRIPTIONS_UPDATE_GROUP_LISTING",
    listing: n
  }), n
}
async function h(e) {
  var t;
  r.Z.dispatch({
    type: "GUILD_ROLE_SUBSCRIPTIONS_FETCH_LISTING_FOR_PLAN",
    planId: e
  });
  let n = await _.iW(e);
  for (let i of (r.Z.dispatch({
      type: "GUILD_ROLE_SUBSCRIPTIONS_FETCH_LISTING_FOR_PLAN_SUCCESS",
      groupListing: n
    }), null !== (t = n.subscription_listings) && void 0 !== t ? t : [])) i.subscription_plans[0].id === e && await o.GZ(i.id, void 0, void 0, !0)
}
async function S(e, t, n) {
  await _.es(e, t, n), r.Z.dispatch({
    type: "GUILD_ROLE_SUBSCRIPTIONS_DELETE_LISTING",
    listingId: n
  })
}
async function f(e, t, n) {
  let i = await _.V_(e, t, n);
  r.Z.dispatch({
    type: "GUILD_ROLE_SUBSCRIPTIONS_UPDATE_LISTING",
    listing: i
  })
}
async function N(e, t, n) {
  let i = await _.MI(e, t, n);
  r.Z.dispatch({
    type: "GUILD_ROLE_SUBSCRIPTIONS_UPDATE_SUBSCRIPTION_TRIAL",
    subscriptionTrial: i
  })
}
async function A(e, t) {
  let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
    i = await _.K5(e, t, n);
  return r.Z.dispatch({
    type: "GUILD_ROLE_SUBSCRIPTIONS_UPDATE_GROUP_LISTING",
    listing: i
  }), i
}
async function m(e) {
  let {
    guildId: t,
    groupListingId: n,
    data: i,
    analyticsContext: s,
    onBeforeDispatchNewListing: o
  } = e, u = await _.aG(t, n, i);
  return l.default.track(d.rMx.ROLE_SUBSCRIPTION_LISTING_CREATED, {
    role_subscription_listing_id: u.id,
    role_subscription_group_listing_id: n,
    template_name: s.templateCategory,
    has_change_from_template: s.hasChangeFromTemplate,
    ...(0, a.hH)(t)
  }), await A(t, n, {
    includeArchivedListings: !0
  }), null == o || o(u), r.Z.dispatch({
    type: "GUILD_ROLE_SUBSCRIPTIONS_UPDATE_LISTING",
    listing: u
  }), u
}
async function O(e) {
  let {
    guildId: t,
    listingId: n,
    groupListingId: i,
    data: s
  } = e, o = await _.nU(t, i, n, s);
  return r.Z.dispatch({
    type: "GUILD_ROLE_SUBSCRIPTIONS_UPDATE_LISTING",
    listing: o
  }), await A(t, i, {
    includeArchivedListings: !0
  }), o
}
async function R(e) {
  let {
    signal: t
  } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, n = !1;
  for (let s = 0; s < 3; s++) try {
    if (null == t ? void 0 : t.aborted) {
      r.Z.dispatch({
        type: "GUILD_ROLE_SUBSCRIPTIONS_FETCH_RESTRICTIONS_ABORTED",
        guildId: e
      });
      return
    }
    r.Z.dispatch({
      type: "GUILD_ROLE_SUBSCRIPTIONS_FETCH_RESTRICTIONS",
      guildId: e
    });
    let {
      restrictions: i
    } = await _.j8(e, {
      signal: t
    });
    r.Z.dispatch({
      type: "GUILD_ROLE_SUBSCRIPTIONS_FETCH_RESTRICTIONS_SUCCESS",
      guildId: e,
      restrictions: null != i ? i : []
    }), n = !0;
    break
  } catch (e) {
    await (0, i._v)((s + 1) * u.Z.Millis.SECOND)
  }!n && r.Z.dispatch({
    type: "GUILD_ROLE_SUBSCRIPTIONS_FETCH_RESTRICTIONS_FAILURE",
    guildId: e
  })
}