n.d(t, {
  Z: function() {
return d;
  }
});
var s = n(512722),
  a = n.n(s),
  i = n(782568),
  r = n(434404),
  l = n(144507),
  o = n(981631),
  c = n(689938);

function d(e) {
  let t = (0, l.MO)(e);
  switch (t) {
case l.d5.NEEDS_COMMUNITY:
  return {
    visibility: t,
      noticeText: c.Z.Messages.GUILD_ROLE_SUBSCRIPTION_COMMUNITY_REQUIREMENT_NOTICE,
      ctaLabel: c.Z.Messages.GUILD_ROLE_SUBSCRIPTION_COMMUNITY_REQUIREMENT_CTA_LABEL,
      ctaClickable: null != e,
      onCtaClicked() {
        var t;
        a()(null != e, 'Guild must be not null open COMMUNITY settings'), r.Z.open(null !== (t = null == e ? void 0 : e.id) && void 0 !== t ? t : '', o.pNK.COMMUNITY);
      }
  };
case l.d5.WAITLIST_ONLY:
  return {
    visibility: t,
      noticeText: c.Z.Messages.GUILD_ROLE_SUBSCRIPTION_WAITLIST_NOTICE,
      ctaLabel: c.Z.Messages.GUILD_ROLE_SUBSCRIPTION_WAITLIST_CTA_LABEL,
      ctaClickable: !0,
      onCtaClicked() {
        (0, i.Z)('https://dis.gd/creators-waitlist');
      }
  };
default:
  return;
  }
}