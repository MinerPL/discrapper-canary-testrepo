"use strict";
t.d(s, {
  Z: function() {
    return d
  }
});
var n = t(512722),
  i = t.n(n),
  l = t(782568),
  a = t(434404),
  r = t(144507),
  o = t(981631),
  c = t(689938);

function d(e) {
  let s = (0, r.MO)(e);
  switch (s) {
    case r.d5.NEEDS_COMMUNITY:
      return {
        visibility: s, noticeText: c.Z.Messages.GUILD_ROLE_SUBSCRIPTION_COMMUNITY_REQUIREMENT_NOTICE, ctaLabel: c.Z.Messages.GUILD_ROLE_SUBSCRIPTION_COMMUNITY_REQUIREMENT_CTA_LABEL, ctaClickable: null != e, onCtaClicked() {
          var s;
          i()(null != e, "Guild must be not null open COMMUNITY settings"), a.Z.open(null !== (s = null == e ? void 0 : e.id) && void 0 !== s ? s : "", o.pNK.COMMUNITY)
        }
      };
    case r.d5.WAITLIST_ONLY:
      return {
        visibility: s, noticeText: c.Z.Messages.GUILD_ROLE_SUBSCRIPTION_WAITLIST_NOTICE, ctaLabel: c.Z.Messages.GUILD_ROLE_SUBSCRIPTION_WAITLIST_CTA_LABEL, ctaClickable: !0, onCtaClicked() {
          (0, l.Z)("https://dis.gd/creators-waitlist")
        }
      };
    default:
      return
  }
}