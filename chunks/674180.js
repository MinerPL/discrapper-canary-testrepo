"use strict";
n.d(t, {
  eC: function() {
    return I
  },
  gX: function() {
    return E
  },
  uP: function() {
    return c
  }
});
var i = n(470079),
  r = n(442837),
  s = n(81897),
  o = n(423117),
  a = n(289393),
  l = n(430824),
  u = n(738774),
  _ = n(981631);
let d = e => {
    let t = (0, s.Z)();
    i.useEffect(() => {
      if (null != e && !!e.hasFeature(_.oNc.CREATOR_MONETIZABLE_RESTRICTED) && a.Z.getMonetizationRestrictionsFetchState(e.id) === a.M.NOT_FETCHED) o.Xj(e.id, {
        signal: t
      })
    }, [e, t]);
    let n = null == e ? void 0 : e.id,
      l = (0, r.Wu)([a.Z], () => {
        var e;
        return null !== (e = a.Z.getMonetizationRestrictions(null != n ? n : _.lds)) && void 0 !== e ? e : []
      });
    return {
      restrictions: l,
      restrictionsLoading: (0, r.e7)([a.Z], () => a.Z.getMonetizationRestrictionsFetchState(null != n ? n : _.lds) === a.M.FETCHING)
    }
  },
  c = e => {
    var t;
    let n = (0, r.e7)([l.Z], () => l.Z.getGuild(e), [e]),
      {
        restrictions: i,
        restrictionsLoading: s
      } = d(n);
    return {
      shouldHideGuildPurchaseEntryPoints: !((null == n ? void 0 : n.hasFeature(_.oNc.CREATOR_MONETIZABLE)) || (null == n ? void 0 : n.hasFeature(_.oNc.CREATOR_MONETIZABLE_PROVISIONAL))) || (s ? null === (t = null == n ? void 0 : n.hasFeature(_.oNc.CREATOR_MONETIZABLE_RESTRICTED)) || void 0 === t || t : (0, u.uq)(i)),
      restrictionsLoading: s
    }
  },
  E = e => {
    var t;
    let n = (0, r.e7)([l.Z], () => l.Z.getGuild(e), [e]),
      {
        restrictions: i,
        restrictionsLoading: s
      } = d(n),
      o = s ? null === (t = null == n ? void 0 : n.hasFeature(_.oNc.CREATOR_MONETIZABLE_RESTRICTED)) || void 0 === t || t : (0, u.Q6)(i),
      a = !!(null == n ? void 0 : n.hasFeature(_.oNc.CREATOR_MONETIZABLE_PENDING_NEW_OWNER_ONBOARDING));
    return {
      shouldRestrictUpdatingCreatorMonetizationSettings: o || a,
      allowSelfRemoveMonetization: !o,
      restrictionsLoading: s
    }
  },
  I = e => {
    let {
      restrictions: t,
      restrictionsLoading: n
    } = d((0, r.e7)([l.Z], () => l.Z.getGuild(e), [e]));
    return {
      isMonetizationReapplicationDisabled: (0, u.m8)(t),
      restrictionsLoading: n
    }
  }