n.d(t, {
	eC: function () {
		return f;
	},
	gX: function () {
		return E;
	},
	uP: function () {
		return _;
	}
});
var r = n(470079),
	i = n(442837),
	a = n(81897),
	s = n(423117),
	o = n(289393),
	l = n(430824),
	u = n(738774),
	c = n(981631);
let d = (e) => {
		let t = (0, a.Z)();
		r.useEffect(() => {
			if (null != e && !!e.hasFeature(c.oNc.CREATOR_MONETIZABLE_RESTRICTED) && o.Z.getMonetizationRestrictionsFetchState(e.id) === o.M.NOT_FETCHED) s.Xj(e.id, { signal: t });
		}, [e, t]);
		let n = null == e ? void 0 : e.id,
			l = (0, i.Wu)([o.Z], () => {
				var e;
				return null !== (e = o.Z.getMonetizationRestrictions(null != n ? n : c.lds)) && void 0 !== e ? e : [];
			});
		return {
			restrictions: l,
			restrictionsLoading: (0, i.e7)([o.Z], () => o.Z.getMonetizationRestrictionsFetchState(null != n ? n : c.lds) === o.M.FETCHING)
		};
	},
	_ = (e) => {
		var t;
		let n = (0, i.e7)([l.Z], () => l.Z.getGuild(e), [e]),
			{ restrictions: r, restrictionsLoading: a } = d(n);
		return {
			shouldHideGuildPurchaseEntryPoints: !((null == n ? void 0 : n.hasFeature(c.oNc.CREATOR_MONETIZABLE)) || (null == n ? void 0 : n.hasFeature(c.oNc.CREATOR_MONETIZABLE_PROVISIONAL))) || (a ? null === (t = null == n ? void 0 : n.hasFeature(c.oNc.CREATOR_MONETIZABLE_RESTRICTED)) || void 0 === t || t : (0, u.uq)(r)),
			restrictionsLoading: a
		};
	},
	E = (e) => {
		var t;
		let n = (0, i.e7)([l.Z], () => l.Z.getGuild(e), [e]),
			{ restrictions: r, restrictionsLoading: a } = d(n),
			s = a ? null === (t = null == n ? void 0 : n.hasFeature(c.oNc.CREATOR_MONETIZABLE_RESTRICTED)) || void 0 === t || t : (0, u.Q6)(r),
			o = !!(null == n ? void 0 : n.hasFeature(c.oNc.CREATOR_MONETIZABLE_PENDING_NEW_OWNER_ONBOARDING));
		return {
			shouldRestrictUpdatingCreatorMonetizationSettings: s || o,
			allowSelfRemoveMonetization: !s,
			restrictionsLoading: a
		};
	},
	f = (e) => {
		let { restrictions: t, restrictionsLoading: n } = d((0, i.e7)([l.Z], () => l.Z.getGuild(e), [e]));
		return {
			isMonetizationReapplicationDisabled: (0, u.m8)(t),
			restrictionsLoading: n
		};
	};
