"use strict";
n.r(t);
var a, s, l, i, r = n("442837"),
  o = n("524437"),
  u = n("570140"),
  d = n("150340"),
  c = n("496675");

function f() {
  return !0
}
class E extends(i = r.default.Store) {
  initialize() {
    this.waitFor(c.default), this.syncWith([c.default], f)
  }
  channelNoticePredicate(e) {
    return (0, d.shouldShowGuildOnboardingUpsell)(e.id, o.DismissibleContent.GUILD_ONBOARDING_UPSELL_CHANNEL_NOTICE)
  }
}
l = "GuildOnboardingUpsellNoticeStore", (s = "displayName") in(a = E) ? Object.defineProperty(a, s, {
  value: l,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : a[s] = l, t.default = new E(u.default)