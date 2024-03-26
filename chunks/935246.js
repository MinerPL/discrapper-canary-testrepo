"use strict";
n.r(t), n.d(t, {
  DismissibleContentNotices: function() {
    return x
  }
});
var s = n("37983");
n("884691");
var a = n("446674"),
  l = n("151426"),
  i = n("77078"),
  r = n("327037"),
  o = n("79112"),
  u = n("376556"),
  d = n("926994"),
  c = n("889293"),
  E = n("757557"),
  f = n("994750"),
  _ = n("919089"),
  T = n("415133"),
  I = n("363861"),
  m = n("695827"),
  N = n("425538"),
  p = n("393414"),
  S = n("915639"),
  C = n("600133"),
  A = n("936629"),
  h = n("489622"),
  g = n("599110"),
  M = n("384997"),
  O = n("994428"),
  R = n("49111"),
  L = n("935583"),
  v = n("646718"),
  P = n("782340"),
  D = n("231537");
let x = e => {
  let {
    dismissibleContent: t,
    noticeType: x
  } = e, y = (0, a.useStateFromStores)([C.default], () => C.default.getNotice()), U = (0, a.useStateFromStores)([S.default], () => S.default.locale);
  return (0, s.jsx)(M.default, {
    contentTypes: [t],
    groupName: O.DismissibleContentGroupName.NOTICE_BAR,
    bypassAutoDismiss: !0,
    children: e => {
      var t, a;
      let {
        visibleContent: S,
        markAsDismissed: C
      } = e;
      switch (S) {
        case l.DismissibleContent.GUILD_ONBOARDING_UPSELL_NAGBAR:
          return (0, s.jsx)(_.default, {
            dismissCurrentNotice: () => C(O.ContentDismissActionType.UNKNOWN)
          });
        case l.DismissibleContent.NAGBAR_NOTICE_DOWNLOAD:
          return (0, s.jsxs)(h.default, {
            color: h.NoticeColors.DEFAULT,
            children: [(0, s.jsx)(h.NoticeCloseButton, {
              onClick: () => C(O.ContentDismissActionType.UNKNOWN),
              noticeType: x
            }), P.default.Messages.NOTICE_NATIVE_APPS_2020_06, (0, s.jsx)("i", {
              className: D.iconApple
            }), (0, s.jsx)("i", {
              className: D.iconAndroid
            }), (0, s.jsx)("i", {
              className: D.iconWindows
            }), (0, s.jsx)(h.PrimaryCTANoticeButton, {
              noticeType: x,
              onClick: () => {
                (0, i.openModalLazy)(async () => {
                  let {
                    default: e
                  } = await n.el("649486").then(n.bind(n, "649486"));
                  return t => (0, s.jsx)(e, {
                    source: "Top Bar Nag",
                    ...t
                  })
                })
              },
              children: P.default.Messages.DOWNLOAD
            })]
          });
        case l.DismissibleContent.NAGBAR_NOTICE_CONNECT_SPOTIFY:
          return (0, s.jsxs)(h.default, {
            color: h.NoticeColors.SPOTIFY,
            children: [(0, s.jsx)(h.NoticeCloseButton, {
              onClick: () => C(O.ContentDismissActionType.UNKNOWN),
              noticeType: x
            }), (0, s.jsx)(A.default, {
              className: D.platformIcon
            }), P.default.Messages.NOTICE_CONNECT_SPOTIFY, (0, s.jsx)(h.PrimaryCTANoticeButton, {
              onClick: () => (0, d.default)(R.PlatformTypes.SPOTIFY, "Notice Bar"),
              noticeType: x,
              children: P.default.Messages.CONNECT
            })]
          });
        case l.DismissibleContent.NAGBAR_NOTICE_CONNECT_PLAYSTATION:
          return (0, s.jsxs)(h.default, {
            color: h.NoticeColors.PLAYSTATION,
            children: [(0, s.jsx)(h.NoticeCloseButton, {
              onClick: () => C(O.ContentDismissActionType.UNKNOWN)
            }), (0, s.jsx)("img", {
              alt: "",
              className: D.platformIcon,
              src: u.default.get(R.PlatformTypes.PLAYSTATION).icon.whiteSVG
            }), P.default.Messages.NOTICE_CONNECT_PLAYSTATION, (0, s.jsx)(h.NoticeButton, {
              onClick: () => (0, d.default)(R.PlatformTypes.PLAYSTATION, "Notice Bar"),
              children: P.default.Messages.CONNECT
            })]
          });
        case l.DismissibleContent.NAGBAR_NOTICE_MFA_SMS_BACKUP:
          return (0, s.jsxs)(h.default, {
            color: h.NoticeColors.DEFAULT,
            children: [(0, s.jsx)(h.NoticeCloseButton, {
              onClick: () => C(O.ContentDismissActionType.UNKNOWN),
              noticeType: x
            }), P.default.Messages.NOTICE_MFA_SMS_BACKUP, (0, s.jsx)(h.PrimaryCTANoticeButton, {
              onClick: () => o.default.open(R.UserSettingsSections.ACCOUNT),
              noticeType: x,
              children: P.default.Messages.NOTICE_MFA_SMS_BACKUP_BUTTON
            })]
          });
        case l.DismissibleContent.NAGBAR_NOTICE_PREMIUM_PROMO:
          return (0, s.jsxs)(h.default, {
            color: h.NoticeColors.PREMIUM_TIER_2,
            children: [(0, s.jsx)("span", {
              className: D.premiumLogo
            }), (0, s.jsx)("span", {
              className: D.premiumText,
              children: P.default.Messages.NOTICE_PREMIUM_PROMO_MESSAGE
            }), (0, s.jsx)(h.PrimaryCTANoticeButton, {
              className: D.premiumAction,
              noticeType: x,
              onClick: () => {
                g.default.track(R.AnalyticEvents.PREMIUM_PROMOTION_OPENED, {
                  location_section: R.AnalyticsSections.NOTIFICATION_BAR,
                  location_object: R.AnalyticsObjects.BUTTON_CTA
                }), o.default.open(R.UserSettingsSections.PREMIUM)
              },
              children: P.default.Messages.NOTICE_PREMIUM_PROMO_ACTION
            }), (0, s.jsx)(h.NoticeCloseButton, {
              onClick: () => {
                C(O.ContentDismissActionType.UNKNOWN), (0, r.setFlag)(R.UserFlags.PREMIUM_PROMO_DISMISSED, !0)
              },
              noticeType: x
            })]
          });
        case l.DismissibleContent.NAGBAR_NOTICE_PREMIUM_TIER_TWO_TRIAL_ENDING:
          return (0, s.jsx)(N.default, {
            dismissCurrentNotice: () => C(O.ContentDismissActionType.UNKNOWN),
            subscriptionTier: v.PremiumSubscriptionSKUs.TIER_2
          });
        case l.DismissibleContent.NAGBAR_NOTICE_PREMIUM_TIER_0_TRIAL_ENDING:
          return (0, s.jsx)(N.default, {
            dismissCurrentNotice: () => C(O.ContentDismissActionType.UNKNOWN),
            subscriptionTier: v.PremiumSubscriptionSKUs.TIER_0
          });
        case l.DismissibleContent.NAGBAR_NOTICE_PREMIUM_REACTIVATE:
          return (0, s.jsxs)(h.default, {
            color: h.NoticeColors.PREMIUM_TIER_2,
            children: [(0, s.jsx)(h.NoticeCloseButton, {
              noticeType: x,
              onClick: () => C(O.ContentDismissActionType.UNKNOWN)
            }), P.default.Messages.PREMIUM_SUBSCRIPTION_REACTIVATION_NOTICE_TEXT, (0, s.jsx)(h.PrimaryCTANoticeButton, {
              noticeType: x,
              onClick: () => {
                C(O.ContentDismissActionType.UNKNOWN), o.default.open(R.UserSettingsSections.PREMIUM)
              },
              children: P.default.Messages.PREMIUM_SUBSCRIPTION_REACTIVATION_NOTICE_BUTTON_TEXT
            })]
          });
        case l.DismissibleContent.NAGBAR_NOTICE_LOCALIZED_PRICING:
          return (0, s.jsx)(m.default, {
            notice: y,
            noticeType: x,
            dismissCurrentNotice: () => C(O.ContentDismissActionType.UNKNOWN)
          });
        case l.DismissibleContent.QUEST_1_GO_LIVE_BANNER:
          let M = null == y ? void 0 : null === (t = y.metadata) || void 0 === t ? void 0 : t.partnerGame;
          return (0, s.jsx)(f.default, {
            noticeType: x,
            markAsDismissed: () => C(O.ContentDismissActionType.UNKNOWN),
            partnerGame: M
          });
        case l.DismissibleContent.QUEST_1_ENDED_INCOMPLETE:
          let j = null == y ? void 0 : null === (a = y.metadata) || void 0 === a ? void 0 : a.partnerGame;
          return (0, s.jsx)(E.default, {
            noticeType: x,
            markAsDismissed: () => C(O.ContentDismissActionType.UNKNOWN),
            partnerGame: j
          });
        case l.DismissibleContent.NAGBAR_BOUNCED_EMAIL_NOTICE:
          return (0, s.jsxs)(h.default, {
            color: h.NoticeColors.DANGER,
            children: [(0, s.jsx)(h.NoticeCloseButton, {
              onClick: () => C(O.ContentDismissActionType.UNKNOWN),
              noticeType: x
            }), P.default.Messages.BOUNCED_EMAIL_DETECTED_NOTICE, (0, s.jsx)(h.PrimaryCTANoticeButton, {
              noticeType: x,
              onClick: () => {
                (0, p.transitionTo)(R.Routes.SETTINGS("account"))
              },
              children: P.default.Messages.CHANGE_EMAIL_SHORT
            })]
          });
        case l.DismissibleContent.NAGBAR_ACTIVATE_SERVER_SUBSCRIPTION:
          let b = c.default.getEligibleGuildsForNagActivate();
          return (0, s.jsxs)(h.default, {
            color: h.NoticeColors.DEFAULT,
            children: [(0, s.jsx)(h.NoticeCloseButton, {
              onClick: () => C(O.ContentDismissActionType.UNKNOWN),
              noticeType: x
            }), P.default.Messages.GUILD_ROLE_SUBSCRIPTION_NAGBAR_TEXT, (0, s.jsx)(h.PrimaryCTANoticeButton, {
              noticeType: x,
              onClick: () => {
                C(O.ContentDismissActionType.PRIMARY), (0, p.transitionTo)(1 === b.length ? R.Routes.GUILD_SETTINGS(b[0], "role-subscriptions") : R.Routes.PICK_GUILD_SETTINGS("role-subscriptions", void 0, "server-subscriptions-finish-setting-up"))
              },
              children: P.default.Messages.LETS_GO
            })]
          });
        case l.DismissibleContent.NAGBAR_NOTICE_POMELO:
          return (0, s.jsxs)(h.default, {
            color: h.NoticeColors.WARNING,
            children: [(0, s.jsx)(h.NoticeCloseButton, {
              onClick: () => C(O.ContentDismissActionType.UNKNOWN),
              noticeType: x
            }), P.default.Messages.POMELO_ACTION_NEEDED.format(), (0, s.jsx)(h.PrimaryCTANoticeButton, {
              onClick: () => (0, I.default)(L.PomeloEntrypoints.NOTICE),
              noticeType: x,
              children: P.default.Messages.GET_STARTED
            })]
          });
        case l.DismissibleContent.UU_MIGRATION_NOTICE:
          return (0, s.jsxs)(h.default, {
            color: h.NoticeColors.WARNING,
            children: [(0, s.jsx)(h.NoticeCloseButton, {
              onClick: () => C(O.ContentDismissActionType.UNKNOWN),
              noticeType: x
            }), P.default.Messages.POMELO_ACTION_NEEDED_FORCE.format({
              date: (0, T.getLocalizedForcedUUDate)(U)
            }), (0, s.jsx)(h.PrimaryCTANoticeButton, {
              onClick: () => (0, I.default)(L.PomeloEntrypoints.NOTICE),
              noticeType: x,
              children: P.default.Messages.GET_STARTED
            })]
          })
      }
    }
  })
}