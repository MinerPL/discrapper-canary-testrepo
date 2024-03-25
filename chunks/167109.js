"use strict";
E.r(t), E.d(t, {
  useName: function() {
    return h
  },
  usePriceTier: function() {
    return p
  },
  useDescription: function() {
    return P
  },
  useImage: function() {
    return y
  },
  useRoleIcon: function() {
    return H
  },
  useRole: function() {
    return m
  },
  useRoleColor: function() {
    return v
  },
  useChannelAccessFormat: function() {
    return V
  },
  useChannelBenefits: function() {
    return K
  },
  useIntangibleBenefits: function() {
    return x
  },
  useTierEmojiIds: function() {
    return k
  },
  useTrialInterval: function() {
    return Y
  },
  useTrialLimit: function() {
    return W
  },
  useHasChanges: function() {
    return w
  },
  useHasChangesForEditStateIds: function() {
    return J
  },
  useSubscriptionPlan: function() {
    return X
  },
  clearEditState: function() {
    return z
  },
  useCreateOrUpdateListingFromEditState: function() {
    return q
  },
  useEditStateIds: function() {
    return $
  }
}), E("222007");
var _ = E("884691"),
  s = E("627445"),
  T = E.n(s),
  a = E("917351"),
  n = E("748820"),
  A = E("509043"),
  u = E("446674"),
  I = E("150021"),
  i = E("851387"),
  l = E("385976"),
  L = E("271560"),
  o = E("577357"),
  r = E("371358"),
  d = E("837008"),
  N = E("648825"),
  S = E("866595"),
  g = E("432153"),
  D = E("549590"),
  G = E("59767"),
  O = E("679027"),
  c = E("971150"),
  U = E("677795"),
  C = E("49111"),
  M = E("646718");

function R(e, t, E) {
  let s = (0, c.useEditStateStore)(e => e.setListing),
    T = _.useCallback(_ => {
      s(e, e => {
        var s;
        let T = null !== (s = null == e ? void 0 : e[t]) && void 0 !== s ? s : E,
          a = "function" == typeof _ ? _(T) : _;
        return Object.assign({}, e, {
          [t]: a
        })
      })
    }, [s, e, t, E]),
    a = (0, c.useEditStateStore)(E => {
      var _;
      return null === (_ = E.listings[e]) || void 0 === _ ? void 0 : _[t]
    }),
    n = void 0 !== a ? a : E;
  return [n, T]
}

function f(e, t) {
  let E = (0, u.useStateFromStores)([N.default], () => N.default.getSubscriptionListing(e));
  return _.useMemo(() => t(E), [E])
}

function h(e) {
  let t = f(e, e => {
    var t;
    return null !== (t = null == e ? void 0 : e.name) && void 0 !== t ? t : ""
  });
  return R(e, "name", t)
}

function p(e) {
  let t = f(e, e => {
    var t;
    return null == e ? void 0 : null === (t = e.subscription_plans[0]) || void 0 === t ? void 0 : t.price
  });
  return R(e, "priceTier", t)
}

function P(e) {
  let t = f(e, e => {
    var t;
    return null !== (t = null == e ? void 0 : e.description) && void 0 !== t ? t : ""
  });
  return R(e, "description", t)
}

function y(e, t) {
  let E = f(e, e => {
    if ((null == e ? void 0 : e.image_asset) != null) return (0, L.getAssetURL)(e.application_id, e.image_asset, t)
  });
  return R(e, "image", E)
}

function H(e, t) {
  let E = (0, D.default)(t, e),
    s = _.useMemo(() => {
      var e, t;
      return {
        icon: null !== (e = null == E ? void 0 : E.icon) && void 0 !== e ? e : void 0,
        unicodeEmoji: null !== (t = null == E ? void 0 : E.unicodeEmoji) && void 0 !== t ? t : void 0
      }
    }, [E]);
  return R(e, "roleIcon", s)
}

function m(e, t) {
  let E = (0, D.default)(t, e),
    s = (0, c.useEditStateStore)(t => {
      var E;
      return null === (E = t.listings[e]) || void 0 === E ? void 0 : E.roleColor
    }),
    T = (0, c.useEditStateStore)(t => {
      var E;
      return null === (E = t.listings[e]) || void 0 === E ? void 0 : E.roleIcon
    });
  return _.useMemo(() => {
    let e = {
      ...null != E ? E : O.DEFAULT_PREVIEW_ROLE
    };
    if (void 0 !== T) {
      var t, _;
      e.icon = null !== (t = T.icon) && void 0 !== t ? t : "", e.unicodeEmoji = null !== (_ = T.unicodeEmoji) && void 0 !== _ ? _ : ""
    }
    return void 0 !== s && (e.color = s, e.colorString = (0, A.int2hex)(s)), e
  }, [E, T, s])
}

function v(e, t) {
  let E = (0, D.default)(t, e),
    s = _.useMemo(() => {
      var e;
      return null !== (e = null == E ? void 0 : E.color) && void 0 !== e ? e : C.DEFAULT_ROLE_COLOR
    }, [E]);
  return R(e, "roleColor", s)
}

function V(e, t) {
  let E = (0, D.default)(t, e),
    s = _.useMemo(() => null == E ? c.AllChannelAccessOptions.SOME_CHANNELS_ACCESS : (0, S.isAllChannelsRole)(E) ? c.AllChannelAccessOptions.ALL_CHANNELS_ACCESS : c.AllChannelAccessOptions.SOME_CHANNELS_ACCESS, [E]);
  return R(e, "channelAccessFormat", s)
}
let B = [];

function K(e) {
  let t = f(e, e => null == e ? B : e.role_benefits.benefits.filter(o.isChannelBenefit));
  return R(e, "channelBenefits", t)
}
let F = [];

function x(e) {
  let t = f(e, e => null == e ? F : e.role_benefits.benefits.filter(o.isIntangibleBenefit));
  return R(e, "intangibleBenefits", t)
}
let b = new Set;

function j(e, t) {
  if (0 === e.length) return b;
  let E = e.filter(e => e.roles.includes(t));
  return new Set(E.map(e => {
    let {
      id: t
    } = e;
    return t
  }))
}

function k(e, t) {
  let E = (0, D.default)(t, e),
    s = (0, u.useStateFromStoresArray)([l.default], () => l.default.getGuildEmoji(t), [t]),
    T = _.useMemo(() => null == E ? b : j(s, E.id), [s, E]);
  return R(e, "tierEmojiIds", T)
}

function Y(e) {
  var t;
  let E = (0, d.useSubscriptionTrial)(e),
    {
      selectedOption: _
    } = (0, G.default)(null !== (t = null == E ? void 0 : E.active_trial) && void 0 !== t ? t : null);
  return R(e, "trialInterval", null != _ ? _ : null)
}

function W(e) {
  var t;
  let E = (0, d.useSubscriptionTrial)(e);
  return R(e, "trialLimit", null !== (t = null == E ? void 0 : E.max_num_active_trial_users) && void 0 !== t ? t : null)
}

function w(e) {
  return (0, c.useEditStateStore)(t => void 0 !== t.listings[e])
}

function J(e) {
  return (0, c.useEditStateStore)(t => {
    for (let E of e)
      if (void 0 !== t.listings[E]) return !0;
    return !1
  })
}

function X(e) {
  let t = f(e, e => null == e ? void 0 : e.subscription_plans[0]),
    [E] = R(e, "priceTier", void 0),
    s = _.useMemo(() => {
      var e, _, s, T, a;
      return {
        price: null !== (e = null != E ? E : null == t ? void 0 : t.price) && void 0 !== e ? e : 0,
        currency: null !== (_ = null == t ? void 0 : t.currency) && void 0 !== _ ? _ : C.CurrencyCodes.USD,
        interval: null !== (s = null == t ? void 0 : t.interval) && void 0 !== s ? s : M.SubscriptionIntervalTypes.MONTH,
        interval_count: null !== (T = null == t ? void 0 : t.interval_count) && void 0 !== T ? T : 1,
        id: null !== (a = null == t ? void 0 : t.id) && void 0 !== a ? a : ""
      }
    }, [t, E]);
  return [s]
}

function z(e) {
  var t;
  t = e, c.useEditStateStore.setState(e => ({
    listings: {
      ...e.listings,
      [t]: e.listings.nonexistantEditStateId
    }
  }))
}
async function Z(e) {
  let {
    guildId: t,
    editStateId: E
  } = e, _ = N.default.getSubscriptionListing(E);
  T(null != _, "listing doesnt exist");
  let s = _.role_id,
    n = _.id,
    A = c.useEditStateStore.getState().listings[E];
  T(null != A, "edit state does not exist");
  let {
    roleColor: u,
    roleIcon: L,
    trialLimit: o,
    trialInterval: d,
    tierEmojiIds: S
  } = A;
  (void 0 !== u || void 0 !== L) && await i.default.updateRole(t, s, {
    color: u,
    icon: null == L ? void 0 : L.icon,
    unicodeEmoji: null == L ? void 0 : L.unicodeEmoji
  });
  let g = N.default.getSubscriptionTrial(n);
  if ((null != o || null != d || null != g && null == d) && await r.updateSubscriptionTrial(t, n, {
      trial: d,
      max_num_active_trial_users: o
    }), void 0 !== S) {
    let e = l.default.getGuildEmoji(t),
      E = j(e, s),
      _ = (0, a.difference)([...S], [...E]),
      T = (0, a.difference)([...E], [...S]),
      n = _.map(e => l.default.getCustomEmojiById(e)).map(e => {
        if (null != e) return (0, I.updateEmoji)({
          guildId: t,
          emojiId: e.id,
          roles: [...e.roles, s]
        })
      }),
      A = T.map(e => l.default.getCustomEmojiById(e)).map(e => {
        if (null == e) return;
        let E = e.roles.filter(e => e !== s);
        return E.length > 0 ? (0, I.updateEmoji)({
          guildId: t,
          emojiId: e.id,
          roles: E
        }) : (0, I.deleteEmoji)(t, e.id)
      });
    await Promise.all([...n, ...A])
  }
}
async function Q(e) {
  let {
    guildId: t,
    editStateId: E,
    groupListingId: _,
    onBeforeDispatchNewListing: s
  } = e, a = c.useEditStateStore.getState().listings[E];
  T(null != a, "edit state does not exist");
  let {
    name: n,
    description: A,
    channelBenefits: u,
    intangibleBenefits: I,
    priceTier: i,
    image: l,
    channelAccessFormat: L
  } = a;
  T(null != n, "no name provided"), T(null != A, "no description provided"), T(null != i, "no priceTier provided"), T(null != l, "no image provided");
  let o = L === c.AllChannelAccessOptions.ALL_CHANNELS_ACCESS,
    d = _;
  if (null == d) {
    let e = await r.createSubscriptionGroupListing(t, {});
    d = e.id
  }
  null != u && u.length > 0 && await (0, g.createChannelsFromTemplateTierBenefits)(t, u);
  let N = [...null != u ? u : [], ...null != I ? I : []],
    S = (0, g.getTemplateTierCreationAnalyticsContext)(E, t);
  return r.createSubscriptionListing({
    guildId: t,
    groupListingId: d,
    data: {
      can_access_all_channels: o,
      image: l,
      name: n,
      description: A,
      benefits: N,
      priceTier: i
    },
    analyticsContext: S,
    onBeforeDispatchNewListing: s
  })
}

function q() {
  let [e, t] = _.useState(!1), [E, s] = _.useState(), n = _.useCallback(async e => {
    let {
      guildId: E,
      editStateId: _,
      groupListingId: n,
      onBeforeDispatchNewListing: A,
      onAfterDispatchNewListing: u
    } = e, I = _, i = N.default.getSubscriptionListing(I);
    try {
      if (t(!0), s(void 0), null != i) T(null != n, "groupListingId is null"), await

      function(e) {
        var t;
        let {
          guildId: E,
          editStateId: _,
          groupListingId: s
        } = e, n = N.default.getSubscriptionListing(_);
        T(null != n, "listing doesnt exist");
        let A = c.useEditStateStore.getState().listings[_];
        T(null != A, "edit state does not exist");
        let {
          name: u,
          description: I,
          channelBenefits: i,
          intangibleBenefits: l,
          priceTier: L,
          image: d,
          channelAccessFormat: S
        } = A, g = {};
        if (u !== n.name && (g.name = u), I !== n.description && (g.description = I), L !== (null === (t = n.subscription_plans[0]) || void 0 === t ? void 0 : t.price) && (g.priceTier = L), null != d && (g.image = d), null != S && (g.can_access_all_channels = S === c.AllChannelAccessOptions.ALL_CHANNELS_ACCESS), null != i || null != l) {
          let e = n.role_benefits.benefits.filter(o.isChannelBenefit),
            t = n.role_benefits.benefits.filter(o.isIntangibleBenefit),
            E = [...null != i ? i : e, ...null != l ? l : t];
          g.benefits = E
        }
        return (0, a.isEmpty)(g) ? n : r.updateSubscriptionListing({
          guildId: E,
          groupListingId: s,
          listingId: _,
          data: g
        })
      }({
        guildId: E,
        editStateId: I,
        groupListingId: n
      });
      else {
        var l, L;
        let e = await Q({
          guildId: E,
          editStateId: I,
          groupListingId: n,
          onBeforeDispatchNewListing: A
        });
        I = e.id, l = _, L = I, c.useEditStateStore.setState(e => ({
          listings: {
            ...e.listings,
            [L]: e.listings[l],
            [l]: void 0
          }
        })), null == u || u(e)
      }
      return await Z({
        guildId: E,
        editStateId: I
      }), z(I), !0
    } catch (e) {
      if (!("getAnyErrorMessage" in e)) throw e;
      s(e)
    } finally {
      t(!1)
    }
  }, []);
  return {
    loading: e,
    error: E,
    handleCreateOrUpdateFromEditState: n
  }
}

function $(e, t) {
  let E = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {
      includeSoftDeleted: !1
    },
    s = (0, d.useSubscriptionListingsForGroup)(e, E),
    T = (0, c.useEditStateStore)(e => e.editStateIdsForGroup[t]),
    a = (0, c.useEditStateStore)(e => e.setEditStateIdsForGroup),
    A = (0, c.useEditStateStore)(e => e.setListing),
    u = _.useMemo(() => [...s.map(e => {
      let {
        id: t
      } = e;
      return t
    }), ...null != T ? T : []], [T, s]),
    I = _.useCallback(() => {
      let e = (0, n.v4)();
      a(t, t => [...null != t ? t : [], e])
    }, [t, a]),
    i = _.useCallback(e => {
      let E = (0, n.v4)();
      return a(t, e => [...null != e ? e : [], E]), e.listings.forEach(t => {
        A(E, () => ({
          name: t.name,
          description: t.description,
          priceTier: t.price_tier,
          image: t.image,
          intangibleBenefits: t.additional_perks,
          channelBenefits: t.channels.map(e => ({
            ref_id: e.id,
            ref_type: U.GuildRoleSubscriptionBenefitTypes.CHANNEL,
            description: e.description,
            name: e.name,
            emoji_name: e.emoji_name
          })),
          roleIcon: {
            unicodeEmoji: void 0,
            icon: t.image
          },
          roleColor: t.role_color,
          usedTemplate: e.category
        }))
      }), E
    }, [t, a, A]),
    l = _.useCallback(e => {
      a(t, t => (null != t ? t : []).filter(t => t !== e))
    }, [t, a]);
  return {
    editStateIds: u,
    addNewEditStateId: I,
    addNewEditStateFromTemplate: i,
    removeEditStateId: l
  }
}