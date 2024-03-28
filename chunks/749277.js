"use strict";
n.r(t), n.d(t, {
  DismissibleContentNotices: function() {
    return P
  }
});
var s = n("735250");
n("470079");
var a = n("442837"),
  l = n("524437"),
  i = n("481060"),
  r = n("232567"),
  o = n("230711"),
  u = n("726542"),
  d = n("231757"),
  c = n("674525"),
  f = n("29458"),
  E = n("636629"),
  _ = n("33885"),
  T = n("346585"),
  m = n("303172"),
  I = n("463230"),
  p = n("246965"),
  h = n("703656"),
  N = n("706454"),
  S = n("933429"),
  C = n("395361"),
  A = n("644766"),
  g = n("626135"),
  M = n("243778"),
  R = n("921944"),
  O = n("981631"),
  v = n("801461"),
  L = n("474936"),
  x = n("689938"),
  D = n("502786");
let P = e => {
  let {
    dismissibleContent: t,
    noticeType: P
  } = e, y = (0, a.useStateFromStores)([S.default], () => S.default.getNotice()), U = (0, a.useStateFromStores)([N.default], () => N.default.locale);
  return (0, s.jsx)(M.default, {
    contentTypes: [t],
    groupName: R.DismissibleContentGroupName.NOTICE_BAR,
    bypassAutoDismiss: !0,
    children: e => {
      var t, a;
      let {
        visibleContent: N,
        markAsDismissed: S
      } = e;
      switch (N) {
        case l.DismissibleContent.GUILD_ONBOARDING_UPSELL_NAGBAR:
          return (0, s.jsx)(_.default, {
            dismissCurrentNotice: () => S(R.ContentDismissActionType.UNKNOWN)
          });
        case l.DismissibleContent.NAGBAR_NOTICE_DOWNLOAD:
          return (0, s.jsxs)(A.default, {
            color: A.NoticeColors.DEFAULT,
            children: [(0, s.jsx)(A.NoticeCloseButton, {
              onClick: () => S(R.ContentDismissActionType.UNKNOWN),
              noticeType: P
            }), x.default.Messages.NOTICE_NATIVE_APPS_2020_06, (0, s.jsx)("i", {
              className: D.iconApple
            }), (0, s.jsx)("i", {
              className: D.iconAndroid
            }), (0, s.jsx)("i", {
              className: D.iconWindows
            }), (0, s.jsx)(A.PrimaryCTANoticeButton, {
              noticeType: P,
              onClick: () => {
                (0, i.openModalLazy)(async () => {
                  let {
                    default: e
                  } = await Promise.resolve().then(n.bind(n, "431583"));
                  return t => (0, s.jsx)(e, {
                    source: "Top Bar Nag",
                    ...t
                  })
                })
              },
              children: x.default.Messages.DOWNLOAD
            })]
          });
        case l.DismissibleContent.NAGBAR_NOTICE_CONNECT_SPOTIFY:
          return (0, s.jsxs)(A.default, {
            color: A.NoticeColors.SPOTIFY,
            children: [(0, s.jsx)(A.NoticeCloseButton, {
              onClick: () => S(R.ContentDismissActionType.UNKNOWN),
              noticeType: P
            }), (0, s.jsx)(C.default, {
              className: D.platformIcon
            }), x.default.Messages.NOTICE_CONNECT_SPOTIFY, (0, s.jsx)(A.PrimaryCTANoticeButton, {
              onClick: () => (0, d.default)({
                platformType: O.PlatformTypes.SPOTIFY,
                location: "Notice Bar"
              }),
              noticeType: P,
              children: x.default.Messages.CONNECT
            })]
          });
        case l.DismissibleContent.NAGBAR_NOTICE_CONNECT_PLAYSTATION:
          return (0, s.jsxs)(A.default, {
            color: A.NoticeColors.PLAYSTATION,
            children: [(0, s.jsx)(A.NoticeCloseButton, {
              onClick: () => S(R.ContentDismissActionType.UNKNOWN)
            }), (0, s.jsx)("img", {
              alt: "",
              className: D.platformIcon,
              src: u.default.get(O.PlatformTypes.PLAYSTATION).icon.whiteSVG
            }), x.default.Messages.NOTICE_CONNECT_PLAYSTATION, (0, s.jsx)(A.NoticeButton, {
              onClick: () => (0, d.default)({
                platformType: O.PlatformTypes.PLAYSTATION,
                location: "Notice Bar"
              }),
              children: x.default.Messages.CONNECT
            })]
          });
        case l.DismissibleContent.NAGBAR_NOTICE_MFA_SMS_BACKUP:
          return (0, s.jsxs)(A.default, {
            color: A.NoticeColors.DEFAULT,
            children: [(0, s.jsx)(A.NoticeCloseButton, {
              onClick: () => S(R.ContentDismissActionType.UNKNOWN),
              noticeType: P
            }), x.default.Messages.NOTICE_MFA_SMS_BACKUP, (0, s.jsx)(A.PrimaryCTANoticeButton, {
              onClick: () => o.default.open(O.UserSettingsSections.ACCOUNT),
              noticeType: P,
              children: x.default.Messages.NOTICE_MFA_SMS_BACKUP_BUTTON
            })]
          });
        case l.DismissibleContent.NAGBAR_NOTICE_PREMIUM_PROMO:
          return (0, s.jsxs)(A.default, {
            color: A.NoticeColors.PREMIUM_TIER_2,
            children: [(0, s.jsx)("span", {
              className: D.premiumLogo
            }), (0, s.jsx)("span", {
              className: D.premiumText,
              children: x.default.Messages.NOTICE_PREMIUM_PROMO_MESSAGE
            }), (0, s.jsx)(A.PrimaryCTANoticeButton, {
              className: D.premiumAction,
              noticeType: P,
              onClick: () => {
                g.default.track(O.AnalyticEvents.PREMIUM_PROMOTION_OPENED, {
                  location_section: O.AnalyticsSections.NOTIFICATION_BAR,
                  location_object: O.AnalyticsObjects.BUTTON_CTA
                }), o.default.open(O.UserSettingsSections.PREMIUM)
              },
              children: x.default.Messages.NOTICE_PREMIUM_PROMO_ACTION
            }), (0, s.jsx)(A.NoticeCloseButton, {
              onClick: () => {
                S(R.ContentDismissActionType.UNKNOWN), (0, r.setFlag)(O.UserFlags.PREMIUM_PROMO_DISMISSED, !0)
              },
              noticeType: P
            })]
          });
        case l.DismissibleContent.NAGBAR_NOTICE_PREMIUM_TIER_TWO_TRIAL_ENDING:
          return (0, s.jsx)(p.default, {
            dismissCurrentNotice: () => S(R.ContentDismissActionType.UNKNOWN),
            subscriptionTier: L.PremiumSubscriptionSKUs.TIER_2
          });
        case l.DismissibleContent.NAGBAR_NOTICE_PREMIUM_TIER_0_TRIAL_ENDING:
          return (0, s.jsx)(p.default, {
            dismissCurrentNotice: () => S(R.ContentDismissActionType.UNKNOWN),
            subscriptionTier: L.PremiumSubscriptionSKUs.TIER_0
          });
        case l.DismissibleContent.NAGBAR_NOTICE_PREMIUM_REACTIVATE:
          return (0, s.jsxs)(A.default, {
            color: A.NoticeColors.PREMIUM_TIER_2,
            children: [(0, s.jsx)(A.NoticeCloseButton, {
              noticeType: P,
              onClick: () => S(R.ContentDismissActionType.UNKNOWN)
            }), x.default.Messages.PREMIUM_SUBSCRIPTION_REACTIVATION_NOTICE_TEXT, (0, s.jsx)(A.PrimaryCTANoticeButton, {
              noticeType: P,
              onClick: () => {
                S(R.ContentDismissActionType.UNKNOWN), o.default.open(O.UserSettingsSections.PREMIUM)
              },
              children: x.default.Messages.PREMIUM_SUBSCRIPTION_REACTIVATION_NOTICE_BUTTON_TEXT
            })]
          });
        case l.DismissibleContent.NAGBAR_NOTICE_LOCALIZED_PRICING:
          return (0, s.jsx)(I.default, {
            notice: y,
            noticeType: P,
            dismissCurrentNotice: () => S(R.ContentDismissActionType.UNKNOWN)
          });
        case l.DismissibleContent.QUEST_1_GO_LIVE_BANNER:
          let M = null == y ? void 0 : null === (t = y.metadata) || void 0 === t ? void 0 : t.partnerGame;
          return (0, s.jsx)(E.default, {
            noticeType: P,
            markAsDismissed: () => S(R.ContentDismissActionType.UNKNOWN),
            partnerGame: M
          });
        case l.DismissibleContent.QUEST_1_ENDED_INCOMPLETE:
          let b = null == y ? void 0 : null === (a = y.metadata) || void 0 === a ? void 0 : a.partnerGame;
          return (0, s.jsx)(f.default, {
            noticeType: P,
            markAsDismissed: () => S(R.ContentDismissActionType.UNKNOWN),
            partnerGame: b
          });
        case l.DismissibleContent.NAGBAR_BOUNCED_EMAIL_NOTICE:
          return (0, s.jsxs)(A.default, {
            color: A.NoticeColors.DANGER,
            children: [(0, s.jsx)(A.NoticeCloseButton, {
              onClick: () => S(R.ContentDismissActionType.UNKNOWN),
              noticeType: P
            }), x.default.Messages.BOUNCED_EMAIL_DETECTED_NOTICE, (0, s.jsx)(A.PrimaryCTANoticeButton, {
              noticeType: P,
              onClick: () => {
                (0, h.transitionTo)(O.Routes.SETTINGS("account"))
              },
              children: x.default.Messages.CHANGE_EMAIL_SHORT
            })]
          });
        case l.DismissibleContent.NAGBAR_ACTIVATE_SERVER_SUBSCRIPTION:
          let j = c.default.getEligibleGuildsForNagActivate();
          return (0, s.jsxs)(A.default, {
            color: A.NoticeColors.DEFAULT,
            children: [(0, s.jsx)(A.NoticeCloseButton, {
              onClick: () => S(R.ContentDismissActionType.UNKNOWN),
              noticeType: P
            }), x.default.Messages.GUILD_ROLE_SUBSCRIPTION_NAGBAR_TEXT, (0, s.jsx)(A.PrimaryCTANoticeButton, {
              noticeType: P,
              onClick: () => {
                S(R.ContentDismissActionType.PRIMARY), (0, h.transitionTo)(1 === j.length ? O.Routes.GUILD_SETTINGS(j[0], "role-subscriptions") : O.Routes.PICK_GUILD_SETTINGS("role-subscriptions", void 0, "server-subscriptions-finish-setting-up"))
              },
              children: x.default.Messages.LETS_GO
            })]
          });
        case l.DismissibleContent.NAGBAR_NOTICE_POMELO:
          return (0, s.jsxs)(A.default, {
            color: A.NoticeColors.WARNING,
            children: [(0, s.jsx)(A.NoticeCloseButton, {
              onClick: () => S(R.ContentDismissActionType.UNKNOWN),
              noticeType: P
            }), x.default.Messages.POMELO_ACTION_NEEDED.format(), (0, s.jsx)(A.PrimaryCTANoticeButton, {
              onClick: () => (0, m.default)(v.PomeloEntrypoints.NOTICE),
              noticeType: P,
              children: x.default.Messages.GET_STARTED
            })]
          });
        case l.DismissibleContent.UU_MIGRATION_NOTICE:
          return (0, s.jsxs)(A.default, {
            color: A.NoticeColors.WARNING,
            children: [(0, s.jsx)(A.NoticeCloseButton, {
              onClick: () => S(R.ContentDismissActionType.UNKNOWN),
              noticeType: P
            }), x.default.Messages.POMELO_ACTION_NEEDED_FORCE.format({
              date: (0, T.getLocalizedForcedUUDate)(U)
            }), (0, s.jsx)(A.PrimaryCTANoticeButton, {
              onClick: () => (0, m.default)(v.PomeloEntrypoints.NOTICE),
              noticeType: P,
              children: x.default.Messages.GET_STARTED
            })]
          })
      }
    }
  })
}