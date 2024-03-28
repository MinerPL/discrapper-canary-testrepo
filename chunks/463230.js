"use strict";
n.r(t);
var s = n("735250");
n("470079");
var a = n("230711"),
  l = n("466111"),
  i = n("644766"),
  r = n("985754"),
  o = n("91802"),
  u = n("222727"),
  d = n("981631"),
  c = n("921944"),
  f = n("689938"),
  E = n("502786");
t.default = e => {
  let {
    notice: t,
    noticeType: n,
    dismissCurrentNotice: _
  } = e, T = (null == t ? void 0 : t.metadata.premiumSubscription) != null, m = (0, o.useLocalizedPromoQuery)();
  if ((0, u.useTrackLocalizedPricingPromoImpression)(d.AnalyticsSections.NOTIFICATION_BAR, null == m ? void 0 : m.countryCode), null == m) return null;
  let I = m.countryCode,
    p = m.currency,
    h = m.paymentSourceTypes.length > 0;
  return (0, s.jsxs)(i.default, {
    color: T ? i.NoticeColors.BRAND : i.NoticeColors.PREMIUM_TIER_2,
    children: [(0, s.jsx)(i.NoticeCloseButton, {
      onClick: () => _(c.ContentDismissActionType.UNKNOWN),
      noticeType: n
    }), !T && (0, s.jsx)(l.default, {
      className: E.premiumIcon
    }), (0, r.getLocalizedPricingNotice)(I, p, h, T), (0, s.jsx)(i.PrimaryCTANoticeButton, {
      onClick: () => {
        _(c.ContentDismissActionType.UNKNOWN), a.default.open(d.UserSettingsSections.PREMIUM)
      },
      noticeType: n,
      children: f.default.Messages.LEARN_MORE
    })]
  })
}