n.d(t, {
  GN: function() {
return S;
  },
  be: function() {
return g;
  },
  g4: function() {
return I;
  },
  m7: function() {
return m;
  },
  r4: function() {
return A;
  },
  sO: function() {
return v;
  },
  yL: function() {
return N;
  }
}), n(653041), n(47120), n(998459);
var r = n(991637),
  i = n.n(r),
  a = n(399606),
  s = n(570140),
  o = n(333848),
  l = n(592125),
  u = n(923726),
  c = n(289393),
  d = n(944537),
  _ = n(144507),
  E = n(853439),
  f = n(981631),
  h = n(176505);
i().shim();
let p = {};

function m(e) {
  let t = (0, a.e7)([l.Z], () => l.Z.getChannel(e)),
n = (0, a.e7)([E.Z], () => E.Z.getChannel(e));
  return null != t ? t : n;
}

function I(e, t, n) {
  let r = (0, a.e7)([c.Z], () => c.Z.getSubscriptionListingsForGuild(e)),
i = (0, d.n)(t => t.editStateIdsForGroup[e]),
s = (0, d.n)(e => e.listings);
  if (void 0 === n || void 0 === t)
return null;
  let o = r.filter(e => !e.soft_deleted && !e.archived).map(e => e.subscription_plans[0].price),
l = [];
  void 0 !== i && i.forEach(e => {
let t = s[e],
  n = null == t ? void 0 : t.priceTier;
null != n && l.push(n);
  });
  let u = new Set(l.concat(o));
  if (!u.has(n))
return null;
  let _ = t.indexOf(n);
  if (-1 === _)
return null;
  let E = [];
  for (let e = _ + 1; e < t.length && (!u.has(t[e]) && E.push(t[e]), 3 !== E.length); e++);
  return E;
}

function T(e) {
  let t = d.n.getState().editStateIdsForGroup[e],
n = d.n.getState().listings,
r = new Set();
  null != t && t.forEach(e => {
var t;
let i = null === (t = n[e]) || void 0 === t ? void 0 : t.channelBenefits;
null == i || i.forEach(e => {
  null != E.Z.getChannel(e.ref_id) && r.add(e.ref_id);
});
  });
  let i = [];
  for (let t of r) {
let n = E.Z.getChannel(t);
if (null != n) {
  let t = n.set('guild_id', e);
  i.push(t);
}
  }
  return i;
}

function g(e) {
  let t = T(e);
  p[e] = t, t.forEach(e => {
let t = e.set('flags', h.zZ.IS_ROLE_SUBSCRIPTION_TEMPLATE_PREVIEW_CHANNEL);
s.Z.dispatch({
  type: 'CHANNEL_CREATE',
  channel: t
});
  });
}

function S(e) {
  var t;
  (null !== (t = p[e]) && void 0 !== t ? t : T(e)).forEach(e => {
s.Z.dispatch({
  type: 'CHANNEL_DELETE',
  channel: e
});
  });
}
async function A(e, t) {
  let n = [],
r = [];
  if (t.forEach(t => {
  let i = E.Z.getChannel(t.ref_id);
  null != i && (n.push(o.Z.createRoleSubscriptionTemplateChannel(e, i.name, i.type, i.topic)), r.push(i));
}), 0 !== n.length)
(await Promise.allSettled(n)).forEach((n, i) => {
  let a = r[i].id;
  if ('fulfilled' === n.status) {
    let t = n.value.body,
      r = d.n.getState().editStateIdsForGroup[e],
      i = d.n.getState().listings;
    null != r && r.forEach(e => {
      var n;
      let r = null === (n = i[e]) || void 0 === n ? void 0 : n.channelBenefits;
      null == r || r.forEach(e => {
        e.ref_id === a && (e.ref_id = t.id);
      });
    });
  } else if (null != t) {
    let e = t.findIndex(e => e.ref_id === a); -
    1 !== e && (null == t || t.splice(e, 1));
  }
});
}

function N(e, t) {
  var n, r;
  let i = d.n.getState().listings[e],
a = null == i ? void 0 : i.usedTemplate;
  if (null == a)
return {
  templateCategory: null,
  hasChangeFromTemplate: null
};
  let s = E.Z.getTemplateWithCategory(t, a);
  if (null == s)
return {
  templateCategory: null,
  hasChangeFromTemplate: null
};
  let o = s.listings[0];
  if ((null == i ? void 0 : i.name) !== o.name || (null == i ? void 0 : i.description) !== o.description || (null == i ? void 0 : i.priceTier) !== o.price_tier || (null == i ? void 0 : i.image) !== o.image || (null == i ? void 0 : i.roleColor) !== o.role_color || (null == i ? void 0 : null === (n = i.channelBenefits) || void 0 === n ? void 0 : n.length) !== o.channels.length || (null == i ? void 0 : null === (r = i.intangibleBenefits) || void 0 === r ? void 0 : r.length) !== o.additional_perks.length)
return {
  templateCategory: s.category,
  hasChangeFromTemplate: !0
};
  for (let e = 0; e < o.channels.length; e++) {
let t = i.channelBenefits[e],
  n = o.channels[e];
if (t.name !== n.name || t.description !== n.description || t.emoji_name !== n.emoji_name)
  return {
    templateCategory: s.category,
    hasChangeFromTemplate: !0
  };
  }
  for (let e = 0; e < o.additional_perks.length; e++) {
let t = i.intangibleBenefits[e],
  n = o.additional_perks[e];
if (t.name !== n.name || t.description !== n.description || t.emoji_name !== n.emoji_name)
  return {
    templateCategory: s.category,
    hasChangeFromTemplate: !0
  };
  }
  return {
templateCategory: s.category,
hasChangeFromTemplate: !1
  };
}

function v(e) {
  return (0, _.H2)(e) && e.hasFeature(f.oNc.ROLE_SUBSCRIPTIONS_ENABLED) && (0, u.$F)() && (0, u.hQ)(e.id);
}