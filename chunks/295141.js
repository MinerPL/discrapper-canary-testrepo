"use strict";
n.d(t, {
  HT: function() {
    return O
  },
  K5: function() {
    return I
  },
  LB: function() {
    return A
  },
  MI: function() {
    return N
  },
  V_: function() {
    return S
  },
  X: function() {
    return E
  },
  X2: function() {
    return d
  },
  aG: function() {
    return l
  },
  bg: function() {
    return a
  },
  ci: function() {
    return c
  },
  eI: function() {
    return f
  },
  es: function() {
    return h
  },
  iW: function() {
    return T
  },
  j8: function() {
    return m
  },
  nU: function() {
    return u
  },
  rD: function() {
    return _
  }
});
var i = n(544891),
  r = n(881052),
  s = n(981631),
  o = n(231338);
let a = async (e, t) => {
  try {
    return (await i.tn.post({
      url: s.ANM.GUILD_ROLE_SUBSCRIPTION_GROUP_LISTINGS(e),
      body: t
    })).body
  } catch (e) {
    throw new r.Hx(e)
  }
}, l = async (e, t, n) => {
  let {
    priceTier: o,
    ...a
  } = n;
  try {
    return (await i.tn.post({
      url: s.ANM.GUILD_ROLE_SUBSCRIPTION_LISTINGS(e, t),
      body: {
        ...a,
        price_tier: o
      }
    })).body
  } catch (e) {
    throw new r.Hx(e)
  }
}, u = async (e, t, n, o) => {
  let {
    priceTier: a,
    ...l
  } = o;
  try {
    return (await i.tn.patch({
      url: s.ANM.GUILD_ROLE_SUBSCRIPTION_LISTINGS(e, t, n),
      body: {
        ...l,
        price_tier: a
      }
    })).body
  } catch (e) {
    throw new r.Hx(e)
  }
}, _ = async function(e) {
  let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
      includeSoftDeleted: !1
    },
    n = {
      include_soft_deleted: t.includeSoftDeleted,
      country_code: t.countryCode
    };
  try {
    return (await i.tn.get({
      url: s.ANM.GUILD_ROLE_SUBSCRIPTION_GROUP_LISTINGS(e),
      query: n
    })).body
  } catch (e) {
    throw new r.Hx(e)
  }
}, d = async e => (await i.tn.get({
  url: s.ANM.GUILD_ROLE_SUBSCRIPTIONS_SETTINGS(e)
})).body, c = async (e, t) => {
  try {
    return (await i.tn.patch({
      url: s.ANM.GUILD_ROLE_SUBSCRIPTIONS_SETTINGS(e),
      body: t
    })).body
  } catch (e) {
    throw new r.Hx(e)
  }
}, E = async e => {
  try {
    return (await i.tn.get({
      url: s.ANM.PRICE_TIERS,
      query: {
        price_tier_type: o.RG.GUILD_ROLE_SUBSCRIPTIONS,
        guild_id: e
      }
    })).body
  } catch (e) {
    throw new r.Hx(e)
  }
}, I = async function(e, t) {
  let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
  try {
    return (await i.tn.get({
      url: s.ANM.GUILD_ROLE_SUBSCRIPTION_GROUP_LISTINGS(e, t),
      query: {
        include_draft_listings: n.includeDraftListings,
        include_archived_listings: n.includeArchivedListings
      }
    })).body
  } catch (e) {
    throw new r.Hx(e)
  }
}, T = async e => {
  try {
    return (await i.tn.get({
      url: s.ANM.SUBSCRIPTION_PLAN_GUILD_ROLE_GROUP_LISTING(e)
    })).body
  } catch (e) {
    throw new r.Hx(e)
  }
}, h = async (e, t, n) => {
  try {
    await i.tn.del({
      url: s.ANM.GUILD_ROLE_SUBSCRIPTION_LISTINGS(e, t, n)
    })
  } catch (e) {
    throw new r.Hx(e)
  }
}, S = async (e, t, n) => {
  try {
    return (await i.tn.post({
      url: s.ANM.GUILD_ROLE_SUBSCRIPTION_GROUP_LISTING_ARCHIVE(e, t, n)
    })).body
  } catch (e) {
    throw new r.Hx(e)
  }
}, f = async e => {
  try {
    return (await i.tn.get({
      url: s.ANM.GUILD_ROLE_SUBSCRIPTION_TRIALS(e)
    })).body
  } catch (e) {
    throw new r.Hx(e)
  }
}, N = async (e, t, n) => {
  try {
    return (await i.tn.patch({
      url: s.ANM.GUILD_ROLE_SUBSCRIPTION_LISTING_TRIAL(e, t),
      body: n
    })).body
  } catch (e) {
    throw new r.Hx(e)
  }
}, A = async (e, t, n) => {
  try {
    return (await i.tn.get({
      url: s.ANM.GUILD_ROLE_SUBSCRIPTION_TRIAL_ELIGIBILITY(e, t, n)
    })).body
  } catch (e) {
    throw new r.Hx(e)
  }
}, m = async function(e) {
  let {
    signal: t
  } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
  try {
    return (await i.tn.get({
      url: s.ANM.CREATOR_MONETIZATION_RESTRICTIONS(e),
      signal: t
    })).body
  } catch (e) {
    throw new r.Hx(e)
  }
}, O = async e => {
  try {
    var t;
    let n = await i.tn.get({
      url: s.ANM.GUILD_DISCOVERY_SLUG(e)
    });
    return null !== (t = n.body) && void 0 !== t ? t : JSON.parse(n.text)
  } catch (e) {
    throw new r.Hx(e)
  }
}