"use strict";
n.r(t), n.d(t, {
  default: function() {
    return c
  }
}), n("222007");
var a = n("913144"),
  s = n("316272"),
  l = n("305961"),
  i = n("697218"),
  r = n("773336"),
  o = n("197509"),
  u = n("49111");
class d extends s.default {
  _initialize() {
    a.default.subscribe("CONNECTION_OPEN", this.maybeFetchEligiblity)
  }
  _terminate() {
    a.default.unsubscribe("CONNECTION_OPEN", this.maybeFetchEligiblity)
  }
  constructor(...e) {
    super(...e), this.maybeFetchEligiblity = async () => {
      if ((0, r.isDesktop)() || (0, r.isWeb)()) {
        let e = Object.values(l.default.getGuilds()),
          t = i.default.getCurrentUser(),
          n = e.filter(e => e.isOwner(t) && !e.hasFeature(u.GuildFeatures.ROLE_SUBSCRIPTIONS_AVAILABLE_FOR_PURCHASE) && !e.hasFeature(u.GuildFeatures.CREATOR_MONETIZABLE_RESTRICTED) && !e.hasFeature(u.GuildFeatures.CREATOR_MONETIZABLE_DISABLED) && (e.hasFeature(u.GuildFeatures.CREATOR_MONETIZABLE) || e.hasFeature(u.GuildFeatures.CREATOR_MONETIZABLE_PROVISIONAL)));
        n.length > 0 && await (0, o.fetchCreatorMonetizationNagActivateEligibility)(n.map(e => e.id))
      }
    }
  }
}
var c = new d