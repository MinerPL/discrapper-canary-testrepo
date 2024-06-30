n(47120);
var s, a, i, r, l = n(442837), o = n(570140), c = n(45966), d = n(734893), u = n(999382), _ = n(392885), E = n(740903), I = n(889369), T = n(969632), m = n(208665), N = n(84658), S = n(142961), h = n(981631);
let g = new Set(), C = N.PG.LANDING, x = null;
function p(e) {
    let {subsection: t} = e;
    if (u.Z.getGuildId() === x)
        return !1;
    C = t === h.KsC.SERVER_GUIDE ? N.PG.HOME_SETTINGS : N.PG.LANDING, x = u.Z.getGuildId();
}
class R extends (s = l.ZP.Store) {
    initialize() {
        this.waitFor(c.Z, I.Z, m.Z, T.Z, _.Z), this.syncWith([
            c.Z,
            I.Z,
            m.Z,
            T.Z,
            _.Z
        ], () => !0);
    }
    isEducationUpsellDismissed(e) {
        return g.has(e);
    }
    getCurrentPage() {
        return C;
    }
    hasChanges() {
        if (null == x)
            return !1;
        let e = c.Z.isAdvancedMode(x);
        if (C === N.PG.DEFAULT_CHANNELS)
            return e ? I.Z.hasChanges() || m.Z.hasChanges() : I.Z.hasChanges();
        if (C === N.PG.CUSTOMIZATION_QUESTIONS)
            return m.Z.hasChanges();
        if (C === N.PG.HOME_SETTINGS)
            return T.Z.hasChanges();
        return !1;
    }
    hasConfiguredAnythingForCurrentStep() {
        if (null == x)
            return !1;
        if (C === N.PG.SAFETY_CHECK)
            return !0;
        if (C === N.PG.DEFAULT_CHANNELS)
            return I.Z.editedDefaultChannelIds.size > 0;
        if (C === N.PG.CUSTOMIZATION_QUESTIONS)
            return m.Z.editedOnboardingPrompts.length > 0;
        else if (C === N.PG.HOME_SETTINGS)
            return !(0, d.av)(T.Z.getSettings());
        return !1;
    }
    hasErrors() {
        return C === N.PG.CUSTOMIZATION_QUESTIONS && null != m.Z.errors.find(e => null != e);
    }
    showNotice() {
        if (null == x)
            return !1;
        if ((0, S.C)(x))
            return this.hasChanges();
        let e = _.Z.getCurrentPage();
        return (C !== N.PG.SAFETY_CHECK || e === E.u.OVERVIEW) && null != C && C !== N.PG.LANDING;
    }
    canCloseEarly() {
        return null == x || !this.hasErrors() && (!(0, S.C)(x) || !this.hasChanges());
    }
}
r = 'GuildSettingsOnboardingStore', (i = 'displayName') in (a = R) ? Object.defineProperty(a, i, {
    value: r,
    enumerable: !0,
    configurable: !0,
    writable: !0
}) : a[i] = r, t.Z = new R(o.Z, {
    GUILD_SETTINGS_INIT: p,
    GUILD_SETTINGS_SET_SECTION: p,
    GUILD_SETTINGS_ONBOARDING_STEP: function (e) {
        let {step: t} = e;
        C = t;
    },
    GUILD_SETTINGS_ONBOARDING_EDUCATION_UPSELL_DISMISSED: function (e) {
        let {upsellType: t} = e;
        g.add(t);
    }
});
