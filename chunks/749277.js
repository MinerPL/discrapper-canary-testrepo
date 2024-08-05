n.d(t, {
  A: function() {
return b;
  }
});
var i = n(735250);
n(470079);
var s = n(442837),
  a = n(704215),
  r = n(481060),
  l = n(232567),
  o = n(230711),
  c = n(726542),
  u = n(100527),
  d = n(231757),
  _ = n(674525),
  E = n(29458),
  I = n(636629),
  m = n(33885),
  T = n(963249),
  h = n(346585),
  N = n(303172),
  C = n(212332),
  f = n(463230),
  p = n(246965),
  g = n(703656),
  S = n(706454),
  A = n(933429),
  R = n(395361),
  O = n(626135),
  x = n(243778),
  M = n(921944),
  v = n(981631),
  L = n(801461),
  Z = n(474936),
  P = n(689938),
  D = n(708522);
let b = e => {
  let {
dismissibleContent: t,
noticeType: b
  } = e, j = (0, s.e7)([A.Z], () => A.Z.getNotice()), U = (0, s.e7)([S.default], () => S.default.locale);
  return (0, i.jsx)(x.Z, {
contentTypes: [t],
groupName: M.R.NOTICE_BAR,
bypassAutoDismiss: !0,
children: e => {
  var t, s;
  let {
    visibleContent: S,
    markAsDismissed: A
  } = e;
  switch (S) {
    case a.z.GUILD_ONBOARDING_UPSELL_NAGBAR:
      return (0, i.jsx)(m.Z, {
        dismissCurrentNotice: () => A(M.L.UNKNOWN)
      });
    case a.z.NAGBAR_NOTICE_DOWNLOAD:
      return (0, i.jsxs)(r.Notice, {
        color: r.NoticeColors.DEFAULT,
        children: [
          (0, i.jsx)(r.NoticeCloseButton, {
            onClick: () => A(M.L.UNKNOWN),
            noticeType: b
          }),
          P.Z.Messages.NOTICE_NATIVE_APPS_2020_06,
          (0, i.jsx)('i', {
            className: D.iconApple
          }),
          (0, i.jsx)('i', {
            className: D.iconAndroid
          }),
          (0, i.jsx)('i', {
            className: D.iconWindows
          }),
          (0, i.jsx)(r.PrimaryCTANoticeButton, {
            noticeType: b,
            onClick: () => {
              (0, r.openModalLazy)(async () => {
                let {
                  default: e
                } = await Promise.resolve().then(n.bind(n, 431583));
                return t => (0, i.jsx)(e, {
                  source: 'Top Bar Nag',
                  ...t
                });
              });
            },
            children: P.Z.Messages.DOWNLOAD
          })
        ]
      });
    case a.z.NAGBAR_NOTICE_CONNECT_SPOTIFY:
      return (0, i.jsxs)(r.Notice, {
        color: r.NoticeColors.SPOTIFY,
        children: [
          (0, i.jsx)(r.NoticeCloseButton, {
            onClick: () => A(M.L.UNKNOWN),
            noticeType: b
          }),
          (0, i.jsx)(R.Z, {
            className: D.platformIcon
          }),
          P.Z.Messages.NOTICE_CONNECT_SPOTIFY,
          (0, i.jsx)(r.PrimaryCTANoticeButton, {
            onClick: () => (0, d.Z)({
              platformType: v.ABu.SPOTIFY,
              location: 'Notice Bar'
            }),
            noticeType: b,
            children: P.Z.Messages.CONNECT
          })
        ]
      });
    case a.z.NAGBAR_NOTICE_CONNECT_PLAYSTATION:
      return (0, i.jsxs)(r.Notice, {
        color: r.NoticeColors.PLAYSTATION,
        children: [
          (0, i.jsx)(r.NoticeCloseButton, {
            onClick: () => A(M.L.UNKNOWN)
          }),
          (0, i.jsx)('img', {
            alt: '',
            className: D.platformIcon,
            src: c.Z.get(v.ABu.PLAYSTATION).icon.whiteSVG
          }),
          P.Z.Messages.NOTICE_CONNECT_PLAYSTATION,
          (0, i.jsx)(r.NoticeButton, {
            onClick: () => (0, d.Z)({
              platformType: v.ABu.PLAYSTATION,
              location: 'Notice Bar'
            }),
            children: P.Z.Messages.CONNECT
          })
        ]
      });
    case a.z.NAGBAR_NOTICE_MFA_SMS_BACKUP:
      return (0, i.jsxs)(r.Notice, {
        color: r.NoticeColors.DEFAULT,
        children: [
          (0, i.jsx)(r.NoticeCloseButton, {
            onClick: () => A(M.L.UNKNOWN),
            noticeType: b
          }),
          P.Z.Messages.NOTICE_MFA_SMS_BACKUP,
          (0, i.jsx)(r.PrimaryCTANoticeButton, {
            onClick: () => o.Z.open(v.oAB.ACCOUNT),
            noticeType: b,
            children: P.Z.Messages.NOTICE_MFA_SMS_BACKUP_BUTTON
          })
        ]
      });
    case a.z.NAGBAR_NOTICE_PREMIUM_PROMO:
      return (0, i.jsxs)(r.Notice, {
        color: r.NoticeColors.PREMIUM_TIER_2,
        children: [
          (0, i.jsx)('span', {
            className: D.premiumLogo
          }),
          (0, i.jsx)('span', {
            className: D.premiumText,
            children: P.Z.Messages.NOTICE_PREMIUM_PROMO_MESSAGE
          }),
          (0, i.jsx)(r.PrimaryCTANoticeButton, {
            className: D.premiumAction,
            noticeType: b,
            onClick: () => {
              O.default.track(v.rMx.PREMIUM_PROMOTION_OPENED, {
                location_section: v.jXE.NOTIFICATION_BAR,
                location_object: v.qAy.BUTTON_CTA
              }), o.Z.open(v.oAB.PREMIUM);
            },
            children: P.Z.Messages.NOTICE_PREMIUM_PROMO_ACTION
          }),
          (0, i.jsx)(r.NoticeCloseButton, {
            onClick: () => {
              A(M.L.UNKNOWN), (0, l.mB)(v.xW$.PREMIUM_PROMO_DISMISSED, !0);
            },
            noticeType: b
          })
        ]
      });
    case a.z.NAGBAR_NOTICE_PREMIUM_TIER_TWO_TRIAL_ENDING:
      return (0, i.jsx)(p.Z, {
        dismissCurrentNotice: () => A(M.L.UNKNOWN),
        subscriptionTier: Z.Si.TIER_2
      });
    case a.z.NAGBAR_NOTICE_PREMIUM_TIER_0_TRIAL_ENDING:
      return (0, i.jsx)(p.Z, {
        dismissCurrentNotice: () => A(M.L.UNKNOWN),
        subscriptionTier: Z.Si.TIER_0
      });
    case a.z.NAGBAR_NOTICE_PREMIUM_REACTIVATE:
      return (0, i.jsxs)(r.Notice, {
        color: r.NoticeColors.PREMIUM_TIER_2,
        children: [
          (0, i.jsx)(r.NoticeCloseButton, {
            noticeType: b,
            onClick: () => A(M.L.UNKNOWN)
          }),
          P.Z.Messages.PREMIUM_SUBSCRIPTION_REACTIVATION_NOTICE_TEXT,
          (0, i.jsx)(r.PrimaryCTANoticeButton, {
            noticeType: b,
            onClick: () => {
              A(M.L.UNKNOWN), o.Z.open(v.oAB.PREMIUM);
            },
            children: P.Z.Messages.PREMIUM_SUBSCRIPTION_REACTIVATION_NOTICE_BUTTON_TEXT
          })
        ]
      });
    case a.z.NAGBAR_NOTICE_LOCALIZED_PRICING:
      return (0, i.jsx)(f.Z, {
        notice: j,
        noticeType: b,
        dismissCurrentNotice: () => A(M.L.UNKNOWN)
      });
    case a.z.QUEST_1_GO_LIVE_BANNER:
      let x = null == j ? void 0 : null === (t = j.metadata) || void 0 === t ? void 0 : t.partnerGame;
      return (0, i.jsx)(I.Z, {
        noticeType: b,
        markAsDismissed: () => A(M.L.UNKNOWN),
        partnerGame: x
      });
    case a.z.QUEST_1_ENDED_INCOMPLETE:
      let y = null == j ? void 0 : null === (s = j.metadata) || void 0 === s ? void 0 : s.partnerGame;
      return (0, i.jsx)(E.Z, {
        noticeType: b,
        markAsDismissed: () => A(M.L.UNKNOWN),
        partnerGame: y
      });
    case a.z.NAGBAR_BOUNCED_EMAIL_NOTICE:
      return (0, i.jsxs)(r.Notice, {
        color: r.NoticeColors.DANGER,
        children: [
          (0, i.jsx)(r.NoticeCloseButton, {
            onClick: () => A(M.L.UNKNOWN),
            noticeType: b
          }),
          P.Z.Messages.BOUNCED_EMAIL_DETECTED_NOTICE,
          (0, i.jsx)(r.PrimaryCTANoticeButton, {
            noticeType: b,
            onClick: () => {
              (0, g.uL)(v.Z5c.SETTINGS('account'));
            },
            children: P.Z.Messages.CHANGE_EMAIL_SHORT
          })
        ]
      });
    case a.z.NAGBAR_ACTIVATE_SERVER_SUBSCRIPTION:
      let B = _.Z.getEligibleGuildsForNagActivate();
      return (0, i.jsxs)(r.Notice, {
        color: r.NoticeColors.DEFAULT,
        children: [
          (0, i.jsx)(r.NoticeCloseButton, {
            onClick: () => A(M.L.UNKNOWN),
            noticeType: b
          }),
          P.Z.Messages.GUILD_ROLE_SUBSCRIPTION_NAGBAR_TEXT,
          (0, i.jsx)(r.PrimaryCTANoticeButton, {
            noticeType: b,
            onClick: () => {
              A(M.L.PRIMARY), (0, g.uL)(1 === B.length ? v.Z5c.GUILD_SETTINGS(B[0], 'role-subscriptions') : v.Z5c.PICK_GUILD_SETTINGS('role-subscriptions', void 0, 'server-subscriptions-finish-setting-up'));
            },
            children: P.Z.Messages.LETS_GO
          })
        ]
      });
    case a.z.NAGBAR_NOTICE_POMELO:
      return (0, i.jsxs)(r.Notice, {
        color: r.NoticeColors.WARNING,
        children: [
          (0, i.jsx)(r.NoticeCloseButton, {
            onClick: () => A(M.L.UNKNOWN),
            noticeType: b
          }),
          P.Z.Messages.POMELO_ACTION_NEEDED.format(),
          (0, i.jsx)(r.PrimaryCTANoticeButton, {
            onClick: () => (0, N.Z)(L.Kq.NOTICE),
            noticeType: b,
            children: P.Z.Messages.GET_STARTED
          })
        ]
      });
    case a.z.UU_MIGRATION_NOTICE:
      return (0, i.jsxs)(r.Notice, {
        color: r.NoticeColors.WARNING,
        children: [
          (0, i.jsx)(r.NoticeCloseButton, {
            onClick: () => A(M.L.UNKNOWN),
            noticeType: b
          }),
          P.Z.Messages.POMELO_ACTION_NEEDED_FORCE.format({
            date: (0, h.IE)(U)
          }),
          (0, i.jsx)(r.PrimaryCTANoticeButton, {
            onClick: () => (0, N.Z)(L.Kq.NOTICE),
            noticeType: b,
            children: P.Z.Messages.GET_STARTED
          })
        ]
      });
    case a.z.CHECKOUT_RECOVERY_NAGBAR:
      return (0, i.jsxs)(r.Notice, {
        color: r.NoticeColors.PREMIUM_TIER_2,
        children: [
          (0, i.jsx)(r.NoticeCloseButton, {
            onClick: () => A(M.L.UNKNOWN),
            noticeType: b
          }),
          P.Z.Messages.CHECKOUT_RECOVERY_NAGBAR_CONTENT,
          (0, i.jsx)(r.PrimaryCTANoticeButton, {
            onClick: () => {
              (0, T.Z)({
                subscriptionTier: Z.Si.TIER_2,
                analyticsLocations: [u.Z.CHECKOUT_RECOVERY_NAGBAR],
                analyticsLocation: v.Sbl.CHECKOUT_RECOVERY_NAGBAR,
                onClose: () => A(M.L.UNKNOWN)
              });
            },
            noticeType: b,
            children: P.Z.Messages.CHECKOUT_RECOVERY_NAGBAR_CTA
          })
        ]
      });
    case a.z.CASH_APP_PAY_AWARENESS_NAGBAR:
      return (0, i.jsx)(C.Z, {
        onClose: () => A(M.L.TAKE_ACTION)
      });
  }
}
  });
};