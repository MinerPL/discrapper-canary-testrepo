"use strict";
n.r(t), n("47120");
var a = n("570140"),
  s = n("317770"),
  l = n("430824"),
  i = n("594174"),
  r = n("358085"),
  o = n("53365"),
  u = n("981631");
class d extends s.default {
  _initialize() {
    a.default.subscribe("CONNECTION_OPEN", this.maybeFetchEligiblity)
  }
  _terminate() {
    a.default.unsubscribe("CONNECTION_OPEN", this.maybeFetchEligiblity)
  }
  constructor(...e) {
    var t, n, a;
    super(...e), t = this, n = "maybeFetchEligiblity", a = async () => {
      if ((0, r.isDesktop)() || (0, r.isWeb)()) {
        let e = Object.values(l.default.getGuilds()),
          t = i.default.getCurrentUser(),
          n = e.filter(e => e.isOwner(t) && !e.hasFeature(u.GuildFeatures.ROLE_SUBSCRIPTIONS_AVAILABLE_FOR_PURCHASE) && !e.hasFeature(u.GuildFeatures.CREATOR_MONETIZABLE_RESTRICTED) && !e.hasFeature(u.GuildFeatures.CREATOR_MONETIZABLE_DISABLED) && (e.hasFeature(u.GuildFeatures.CREATOR_MONETIZABLE) || e.hasFeature(u.GuildFeatures.CREATOR_MONETIZABLE_PROVISIONAL)));
        n.length > 0 && await (0, o.fetchCreatorMonetizationNagActivateEligibility)(n.map(e => e.id))
      }
    }, n in t ? Object.defineProperty(t, n, {
      value: a,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }) : t[n] = a
  }
}
t.default = new d