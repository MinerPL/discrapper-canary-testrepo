"use strict";
s.r(t), s.d(t, {
  clearEditState: function() {
    return Z
  },
  useChannelAccessFormat: function() {
    return V
  },
  useChannelBenefits: function() {
    return F
  },
  useCreateOrUpdateListingFromEditState: function() {
    return q
  },
  useDescription: function() {
    return m
  },
  useEditStateIds: function() {
    return $
  },
  useHasChanges: function() {
    return W
  },
  useHasChangesForEditStateIds: function() {
    return J
  },
  useImage: function() {
    return P
  },
  useIntangibleBenefits: function() {
    return x
  },
  useName: function() {
    return h
  },
  usePriceTier: function() {
    return p
  },
  useRole: function() {
    return v
  },
  useRoleColor: function() {
    return H
  },
  useRoleIcon: function() {
    return y
  },
  useSubscriptionPlan: function() {
    return X
  },
  useTierEmojiIds: function() {
    return k
  },
  useTrialInterval: function() {
    return w
  },
  useTrialLimit: function() {
    return Y
  }
}), s("47120");
var E = s("470079"),
  _ = s("512722"),
  a = s.n(_),
  n = s("392711"),
  T = s("153832"),
  i = s("866442"),
  u = s("442837"),
  A = s("80932"),
  l = s("749210"),
  I = s("339085"),
  r = s("73346"),
  o = s("817460"),
  L = s("423117"),
  d = s("584825"),
  N = s("289393"),
  S = s("790285"),
  g = s("303737"),
  D = s("971792"),
  c = s("22902"),
  G = s("403474"),
  O = s("944537"),
  U = s("293810"),
  C = s("981631"),
  M = s("474936");

function R(e, t, s) {
  let _ = (0, O.useEditStateStore)(e => e.setListing),
    a = E.useCallback(E => {
      _(e, e => {
        var _;
        let a = null !== (_ = null == e ? void 0 : e[t]) && void 0 !== _ ? _ : s;
        return Object.assign({}, e, {
          [t]: "function" == typeof E ? E(a) : E
        })
      })
    }, [_, e, t, s]),
    n = (0, O.useEditStateStore)(s => {
      var E;
      return null === (E = s.listings[e]) || void 0 === E ? void 0 : E[t]
    });
  return [void 0 !== n ? n : s, a]
}

function f(e, t) {
  let s = (0, u.useStateFromStores)([N.default], () => N.default.getSubscriptionListing(e));
  return E.useMemo(() => t(s), [s])
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

function m(e) {
  let t = f(e, e => {
    var t;
    return null !== (t = null == e ? void 0 : e.description) && void 0 !== t ? t : ""
  });
  return R(e, "description", t)
}

function P(e, t) {
  let s = f(e, e => {
    if ((null == e ? void 0 : e.image_asset) != null) return (0, r.getAssetURL)(e.application_id, e.image_asset, t)
  });
  return R(e, "image", s)
}

function y(e, t) {
  let s = (0, D.default)(t, e);
  return R(e, "roleIcon", E.useMemo(() => {
    var e, t;
    return {
      icon: null !== (e = null == s ? void 0 : s.icon) && void 0 !== e ? e : void 0,
      unicodeEmoji: null !== (t = null == s ? void 0 : s.unicodeEmoji) && void 0 !== t ? t : void 0
    }
  }, [s]))
}

function v(e, t) {
  let s = (0, D.default)(t, e),
    _ = (0, O.useEditStateStore)(t => {
      var s;
      return null === (s = t.listings[e]) || void 0 === s ? void 0 : s.roleColor
    }),
    a = (0, O.useEditStateStore)(t => {
      var s;
      return null === (s = t.listings[e]) || void 0 === s ? void 0 : s.roleIcon
    });
  return E.useMemo(() => {
    let e = {
      ...null != s ? s : G.DEFAULT_PREVIEW_ROLE
    };
    if (void 0 !== a) {
      var t, E;
      e.icon = null !== (t = a.icon) && void 0 !== t ? t : "", e.unicodeEmoji = null !== (E = a.unicodeEmoji) && void 0 !== E ? E : ""
    }
    return void 0 !== _ && (e.color = _, e.colorString = (0, i.int2hex)(_)), e
  }, [s, a, _])
}

function H(e, t) {
  let s = (0, D.default)(t, e);
  return R(e, "roleColor", E.useMemo(() => {
    var e;
    return null !== (e = null == s ? void 0 : s.color) && void 0 !== e ? e : C.DEFAULT_ROLE_COLOR
  }, [s]))
}

function V(e, t) {
  let s = (0, D.default)(t, e);
  return R(e, "channelAccessFormat", E.useMemo(() => null == s ? O.AllChannelAccessOptions.SOME_CHANNELS_ACCESS : (0, S.isAllChannelsRole)(s) ? O.AllChannelAccessOptions.ALL_CHANNELS_ACCESS : O.AllChannelAccessOptions.SOME_CHANNELS_ACCESS, [s]))
}
let B = [];

function F(e) {
  let t = f(e, e => null == e ? B : e.role_benefits.benefits.filter(o.isChannelBenefit));
  return R(e, "channelBenefits", t)
}
let K = [];

function x(e) {
  let t = f(e, e => null == e ? K : e.role_benefits.benefits.filter(o.isIntangibleBenefit));
  return R(e, "intangibleBenefits", t)
}
let b = new Set;

function j(e, t) {
  if (0 === e.length) return b;
  let s = e.filter(e => e.roles.includes(t));
  return new Set(s.map(e => {
    let {
      id: t
    } = e;
    return t
  }))
}

function k(e, t) {
  let s = (0, D.default)(t, e),
    _ = (0, u.useStateFromStoresArray)([I.default], () => I.default.getGuildEmoji(t), [t]);
  return R(e, "tierEmojiIds", E.useMemo(() => null == s ? b : j(_, s.id), [_, s]))
}

function w(e) {
  var t;
  let s = (0, d.useSubscriptionTrial)(e),
    {
      selectedOption: E
    } = (0, c.default)(null !== (t = null == s ? void 0 : s.active_trial) && void 0 !== t ? t : null);
  return R(e, "trialInterval", null != E ? E : null)
}

function Y(e) {
  var t;
  let s = (0, d.useSubscriptionTrial)(e);
  return R(e, "trialLimit", null !== (t = null == s ? void 0 : s.max_num_active_trial_users) && void 0 !== t ? t : null)
}

function W(e) {
  return (0, O.useEditStateStore)(t => void 0 !== t.listings[e])
}

function J(e) {
  return (0, O.useEditStateStore)(t => {
    for (let s of e)
      if (void 0 !== t.listings[s]) return !0;
    return !1
  })
}

function X(e) {
  let t = f(e, e => null == e ? void 0 : e.subscription_plans[0]),
    [s] = R(e, "priceTier", void 0);
  return [E.useMemo(() => {
    var e, E, _, a, n;
    return {
      price: null !== (e = null != s ? s : null == t ? void 0 : t.price) && void 0 !== e ? e : 0,
      currency: null !== (E = null == t ? void 0 : t.currency) && void 0 !== E ? E : C.CurrencyCodes.USD,
      interval: null !== (_ = null == t ? void 0 : t.interval) && void 0 !== _ ? _ : M.SubscriptionIntervalTypes.MONTH,
      interval_count: null !== (a = null == t ? void 0 : t.interval_count) && void 0 !== a ? a : 1,
      id: null !== (n = null == t ? void 0 : t.id) && void 0 !== n ? n : ""
    }
  }, [t, s])]
}

function Z(e) {
  var t;
  t = e, O.useEditStateStore.setState(e => ({
    listings: {
      ...e.listings,
      [t]: e.listings.nonexistantEditStateId
    }
  }))
}
async function z(e) {
  let {
    guildId: t,
    editStateId: s
  } = e, E = N.default.getSubscriptionListing(s);
  a()(null != E, "listing doesnt exist");
  let _ = E.role_id,
    T = E.id,
    i = O.useEditStateStore.getState().listings[s];
  a()(null != i, "edit state does not exist");
  let {
    roleColor: u,
    roleIcon: r,
    trialLimit: o,
    trialInterval: d,
    tierEmojiIds: S
  } = i;
  (void 0 !== u || void 0 !== r) && await l.default.updateRole(t, _, {
    color: u,
    icon: null == r ? void 0 : r.icon,
    unicodeEmoji: null == r ? void 0 : r.unicodeEmoji
  });
  let g = N.default.getSubscriptionTrial(T);
  if ((null != o || null != d || null != g && null == d) && await L.updateSubscriptionTrial(t, T, {
      trial: d,
      max_num_active_trial_users: o
    }), void 0 !== S) {
    let e = j(I.default.getGuildEmoji(t), _),
      s = (0, n.difference)([...S], [...e]),
      E = (0, n.difference)([...e], [...S]),
      a = s.map(e => I.default.getCustomEmojiById(e)).map(e => {
        if (null != e) return (0, A.updateEmoji)({
          guildId: t,
          emojiId: e.id,
          roles: [...e.roles, _]
        })
      }),
      T = E.map(e => I.default.getCustomEmojiById(e)).map(e => {
        if (null == e) return;
        let s = e.roles.filter(e => e !== _);
        return s.length > 0 ? (0, A.updateEmoji)({
          guildId: t,
          emojiId: e.id,
          roles: s
        }) : (0, A.deleteEmoji)(t, e.id)
      });
    await Promise.all([...a, ...T])
  }
}
async function Q(e) {
  let {
    guildId: t,
    editStateId: s,
    groupListingId: E,
    onBeforeDispatchNewListing: _
  } = e, n = O.useEditStateStore.getState().listings[s];
  a()(null != n, "edit state does not exist");
  let {
    name: T,
    description: i,
    channelBenefits: u,
    intangibleBenefits: A,
    priceTier: l,
    image: I,
    channelAccessFormat: r
  } = n;
  a()(null != T, "no name provided"), a()(null != i, "no description provided"), a()(null != l, "no priceTier provided"), a()(null != I, "no image provided");
  let o = r === O.AllChannelAccessOptions.ALL_CHANNELS_ACCESS,
    d = E;
  null == d && (d = (await L.createSubscriptionGroupListing(t, {})).id), null != u && u.length > 0 && await (0, g.createChannelsFromTemplateTierBenefits)(t, u);
  let N = [...null != u ? u : [], ...null != A ? A : []],
    S = (0, g.getTemplateTierCreationAnalyticsContext)(s, t);
  return L.createSubscriptionListing({
    guildId: t,
    groupListingId: d,
    data: {
      can_access_all_channels: o,
      image: I,
      name: T,
      description: i,
      benefits: N,
      priceTier: l
    },
    analyticsContext: S,
    onBeforeDispatchNewListing: _
  })
}

function q() {
  let [e, t] = E.useState(!1), [s, _] = E.useState();
  return {
    loading: e,
    error: s,
    handleCreateOrUpdateFromEditState: E.useCallback(async e => {
      let {
        guildId: s,
        editStateId: E,
        groupListingId: T,
        onBeforeDispatchNewListing: i,
        onAfterDispatchNewListing: u
      } = e, A = E, l = N.default.getSubscriptionListing(A);
      try {
        if (t(!0), _(void 0), null != l) a()(null != T, "groupListingId is null"), await

        function(e) {
          var t;
          let {
            guildId: s,
            editStateId: E,
            groupListingId: _
          } = e, T = N.default.getSubscriptionListing(E);
          a()(null != T, "listing doesnt exist");
          let i = O.useEditStateStore.getState().listings[E];
          a()(null != i, "edit state does not exist");
          let {
            name: u,
            description: A,
            channelBenefits: l,
            intangibleBenefits: I,
            priceTier: r,
            image: d,
            channelAccessFormat: S
          } = i, g = {};
          if (u !== T.name && (g.name = u), A !== T.description && (g.description = A), r !== (null === (t = T.subscription_plans[0]) || void 0 === t ? void 0 : t.price) && (g.priceTier = r), null != d && (g.image = d), null != S && (g.can_access_all_channels = S === O.AllChannelAccessOptions.ALL_CHANNELS_ACCESS), null != l || null != I) {
            let e = T.role_benefits.benefits.filter(o.isChannelBenefit),
              t = T.role_benefits.benefits.filter(o.isIntangibleBenefit),
              s = [...null != l ? l : e, ...null != I ? I : t];
            g.benefits = s
          }
          return (0, n.isEmpty)(g) ? T : L.updateSubscriptionListing({
            guildId: s,
            groupListingId: _,
            listingId: E,
            data: g
          })
        }({
          guildId: s,
          editStateId: A,
          groupListingId: T
        });
        else {
          var I, r;
          let e = await Q({
            guildId: s,
            editStateId: A,
            groupListingId: T,
            onBeforeDispatchNewListing: i
          });
          A = e.id, I = E, r = A, O.useEditStateStore.setState(e => ({
            listings: {
              ...e.listings,
              [r]: e.listings[I],
              [I]: void 0
            }
          })), null == u || u(e)
        }
        return await z({
          guildId: s,
          editStateId: A
        }), Z(A), !0
      } catch (e) {
        if (!("getAnyErrorMessage" in e)) throw e;
        _(e)
      } finally {
        t(!1)
      }
    }, [])
  }
}

function $(e, t) {
  let s = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {
      includeSoftDeleted: !1
    },
    _ = (0, d.useSubscriptionListingsForGroup)(e, s),
    a = (0, O.useEditStateStore)(e => e.editStateIdsForGroup[t]),
    n = (0, O.useEditStateStore)(e => e.setEditStateIdsForGroup),
    i = (0, O.useEditStateStore)(e => e.setListing),
    u = E.useMemo(() => [..._.map(e => {
      let {
        id: t
      } = e;
      return t
    }), ...null != a ? a : []], [a, _]),
    A = E.useCallback(() => {
      let e = (0, T.v4)();
      n(t, t => [...null != t ? t : [], e])
    }, [t, n]),
    l = E.useCallback(e => {
      let s = (0, T.v4)();
      return n(t, e => [...null != e ? e : [], s]), e.listings.forEach(t => {
        i(s, () => ({
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
      }), s
    }, [t, n, i]);
  return {
    editStateIds: u,
    addNewEditStateId: A,
    addNewEditStateFromTemplate: l,
    removeEditStateId: E.useCallback(e => {
      n(t, t => (null != t ? t : []).filter(t => t !== e))
    }, [t, n])
  }
}