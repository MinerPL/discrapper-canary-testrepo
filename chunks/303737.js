"use strict";
n.r(t), n.d(t, {
  announceCreateTemplateChannels: function() {
    return C
  },
  announceDeleteTemplateChannels: function() {
    return I
  },
  createChannelsFromTemplateTierBenefits: function() {
    return T
  },
  getTemplateTierCreationAnalyticsContext: function() {
    return v
  },
  isEligibleForNewBadge: function() {
    return N
  },
  useChannelWithTemplateFallback: function() {
    return p
  },
  useSuggestedUnusedPrices: function() {
    return _
  }
}), n("653041"), n("47120"), n("998459");
var r = n("991637"),
  i = n.n(r),
  l = n("399606"),
  s = n("570140"),
  o = n("333848"),
  u = n("592125"),
  a = n("923726"),
  c = n("289393"),
  d = n("944537"),
  f = n("144507"),
  S = n("853439"),
  g = n("981631"),
  h = n("176505");
i().shim();
let E = {};

function p(e) {
  let t = (0, l.useStateFromStores)([u.default], () => u.default.getChannel(e)),
    n = (0, l.useStateFromStores)([S.default], () => S.default.getChannel(e));
  return null != t ? t : n
}

function _(e, t, n) {
  let r = (0, l.useStateFromStores)([c.default], () => c.default.getSubscriptionListingsForGuild(e)),
    i = (0, d.useEditStateStore)(t => t.editStateIdsForGroup[e]),
    s = (0, d.useEditStateStore)(e => e.listings);
  if (void 0 === n || void 0 === t) return null;
  let o = r.filter(e => !e.soft_deleted && !e.archived).map(e => e.subscription_plans[0].price),
    u = [];
  void 0 !== i && i.forEach(e => {
    let t = s[e],
      n = null == t ? void 0 : t.priceTier;
    null != n && u.push(n)
  });
  let a = new Set(u.concat(o));
  if (!a.has(n)) return null;
  let f = t.indexOf(n);
  if (-1 === f) return null;
  let S = [];
  for (let e = f + 1; e < t.length && (!a.has(t[e]) && S.push(t[e]), 3 !== S.length); e++);
  return S
}

function m(e) {
  let t = d.useEditStateStore.getState().editStateIdsForGroup[e],
    n = d.useEditStateStore.getState().listings,
    r = new Set;
  null != t && t.forEach(e => {
    var t;
    let i = null === (t = n[e]) || void 0 === t ? void 0 : t.channelBenefits;
    null == i || i.forEach(e => {
      null != S.default.getChannel(e.ref_id) && r.add(e.ref_id)
    })
  });
  let i = [];
  for (let t of r) {
    let n = S.default.getChannel(t);
    if (null != n) {
      let t = n.set("guild_id", e);
      i.push(t)
    }
  }
  return i
}

function C(e) {
  let t = m(e);
  E[e] = t, t.forEach(e => {
    let t = e.set("flags", h.ChannelFlags.IS_ROLE_SUBSCRIPTION_TEMPLATE_PREVIEW_CHANNEL);
    s.default.dispatch({
      type: "CHANNEL_CREATE",
      channel: t
    })
  })
}

function I(e) {
  var t;
  (null !== (t = E[e]) && void 0 !== t ? t : m(e)).forEach(e => {
    s.default.dispatch({
      type: "CHANNEL_DELETE",
      channel: e
    })
  })
}
async function T(e, t) {
  let n = [],
    r = [];
  if (t.forEach(t => {
      let i = S.default.getChannel(t.ref_id);
      null != i && (n.push(o.default.createRoleSubscriptionTemplateChannel(e, i.name, i.type, i.topic)), r.push(i))
    }), 0 !== n.length)(await Promise.allSettled(n)).forEach((n, i) => {
    let l = r[i].id;
    if ("fulfilled" === n.status) {
      let t = n.value.body,
        r = d.useEditStateStore.getState().editStateIdsForGroup[e],
        i = d.useEditStateStore.getState().listings;
      null != r && r.forEach(e => {
        var n;
        let r = null === (n = i[e]) || void 0 === n ? void 0 : n.channelBenefits;
        null == r || r.forEach(e => {
          e.ref_id === l && (e.ref_id = t.id)
        })
      })
    } else if (null != t) {
      let e = t.findIndex(e => e.ref_id === l); - 1 !== e && (null == t || t.splice(e, 1))
    }
  })
}

function v(e, t) {
  var n, r;
  let i = d.useEditStateStore.getState().listings[e],
    l = null == i ? void 0 : i.usedTemplate;
  if (null == l) return {
    templateCategory: null,
    hasChangeFromTemplate: null
  };
  let s = S.default.getTemplateWithCategory(t, l);
  if (null == s) return {
    templateCategory: null,
    hasChangeFromTemplate: null
  };
  let o = s.listings[0];
  if ((null == i ? void 0 : i.name) !== o.name || (null == i ? void 0 : i.description) !== o.description || (null == i ? void 0 : i.priceTier) !== o.price_tier || (null == i ? void 0 : i.image) !== o.image || (null == i ? void 0 : i.roleColor) !== o.role_color || (null == i ? void 0 : null === (n = i.channelBenefits) || void 0 === n ? void 0 : n.length) !== o.channels.length || (null == i ? void 0 : null === (r = i.intangibleBenefits) || void 0 === r ? void 0 : r.length) !== o.additional_perks.length) return {
    templateCategory: s.category,
    hasChangeFromTemplate: !0
  };
  for (let e = 0; e < o.channels.length; e++) {
    let t = i.channelBenefits[e],
      n = o.channels[e];
    if (t.name !== n.name || t.description !== n.description || t.emoji_name !== n.emoji_name) return {
      templateCategory: s.category,
      hasChangeFromTemplate: !0
    }
  }
  for (let e = 0; e < o.additional_perks.length; e++) {
    let t = i.intangibleBenefits[e],
      n = o.additional_perks[e];
    if (t.name !== n.name || t.description !== n.description || t.emoji_name !== n.emoji_name) return {
      templateCategory: s.category,
      hasChangeFromTemplate: !0
    }
  }
  return {
    templateCategory: s.category,
    hasChangeFromTemplate: !1
  }
}

function N(e) {
  return (0, f.canManageGuildRoleSubscriptions)(e) && e.hasFeature(g.GuildFeatures.ROLE_SUBSCRIPTIONS_ENABLED) && (0, a.isUserEligibleForTierTemplates)() && (0, a.isGuildEligibleForTierTemplates)(e.id)
}