n.d(t, {
  A: function() {
return b;
  }
});
var i = n(735250);
n(470079);
var a = n(442837),
  s = n(704215),
  r = n(481060),
  l = n(232567),
  o = n(230711),
  c = n(726542),
  d = n(100527),
  u = n(231757),
  _ = n(674525),
  E = n(29458),
  I = n(636629),
  m = n(33885),
  T = n(963249),
  h = n(346585),
  N = n(303172),
  f = n(463230),
  p = n(246965),
  C = n(703656),
  g = n(706454),
  S = n(933429),
  A = n(395361),
  R = n(626135),
  x = n(243778),
  O = n(921944),
  M = n(981631),
  v = n(801461),
  L = n(474936),
  Z = n(689938),
  P = n(708522);
let b = e => {
  let {
dismissibleContent: t,
noticeType: b
  } = e, D = (0, a.e7)([S.Z], () => S.Z.getNotice()), j = (0, a.e7)([g.default], () => g.default.locale);
  return (0, i.jsx)(x.Z, {
contentTypes: [t],
groupName: O.R.NOTICE_BAR,
bypassAutoDismiss: !0,
children: e => {
  var t, a;
  let {
    visibleContent: g,
    markAsDismissed: S
  } = e;
  switch (g) {
    case s.z.GUILD_ONBOARDING_UPSELL_NAGBAR:
      return (0, i.jsx)(m.Z, {
        dismissCurrentNotice: () => S(O.L.UNKNOWN)
      });
    case s.z.NAGBAR_NOTICE_DOWNLOAD:
      return (0, i.jsxs)(r.Notice, {
        color: r.NoticeColors.DEFAULT,
        children: [
          (0, i.jsx)(r.NoticeCloseButton, {
            onClick: () => S(O.L.UNKNOWN),
            noticeType: b
          }),
          Z.Z.Messages.NOTICE_NATIVE_APPS_2020_06,
          (0, i.jsx)('i', {
            className: P.iconApple
          }),
          (0, i.jsx)('i', {
            className: P.iconAndroid
          }),
          (0, i.jsx)('i', {
            className: P.iconWindows
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
            children: Z.Z.Messages.DOWNLOAD
          })
        ]
      });
    case s.z.NAGBAR_NOTICE_CONNECT_SPOTIFY:
      return (0, i.jsxs)(r.Notice, {
        color: r.NoticeColors.SPOTIFY,
        children: [
          (0, i.jsx)(r.NoticeCloseButton, {
            onClick: () => S(O.L.UNKNOWN),
            noticeType: b
          }),
          (0, i.jsx)(A.Z, {
            className: P.platformIcon
          }),
          Z.Z.Messages.NOTICE_CONNECT_SPOTIFY,
          (0, i.jsx)(r.PrimaryCTANoticeButton, {
            onClick: () => (0, u.Z)({
              platformType: M.ABu.SPOTIFY,
              location: 'Notice Bar'
            }),
            noticeType: b,
            children: Z.Z.Messages.CONNECT
          })
        ]
      });
    case s.z.NAGBAR_NOTICE_CONNECT_PLAYSTATION:
      return (0, i.jsxs)(r.Notice, {
        color: r.NoticeColors.PLAYSTATION,
        children: [
          (0, i.jsx)(r.NoticeCloseButton, {
            onClick: () => S(O.L.UNKNOWN)
          }),
          (0, i.jsx)('img', {
            alt: '',
            className: P.platformIcon,
            src: c.Z.get(M.ABu.PLAYSTATION).icon.whiteSVG
          }),
          Z.Z.Messages.NOTICE_CONNECT_PLAYSTATION,
          (0, i.jsx)(r.NoticeButton, {
            onClick: () => (0, u.Z)({
              platformType: M.ABu.PLAYSTATION,
              location: 'Notice Bar'
            }),
            children: Z.Z.Messages.CONNECT
          })
        ]
      });
    case s.z.NAGBAR_NOTICE_MFA_SMS_BACKUP:
      return (0, i.jsxs)(r.Notice, {
        color: r.NoticeColors.DEFAULT,
        children: [
          (0, i.jsx)(r.NoticeCloseButton, {
            onClick: () => S(O.L.UNKNOWN),
            noticeType: b
          }),
          Z.Z.Messages.NOTICE_MFA_SMS_BACKUP,
          (0, i.jsx)(r.PrimaryCTANoticeButton, {
            onClick: () => o.Z.open(M.oAB.ACCOUNT),
            noticeType: b,
            children: Z.Z.Messages.NOTICE_MFA_SMS_BACKUP_BUTTON
          })
        ]
      });
    case s.z.NAGBAR_NOTICE_PREMIUM_PROMO:
      return (0, i.jsxs)(r.Notice, {
        color: r.NoticeColors.PREMIUM_TIER_2,
        children: [
          (0, i.jsx)('span', {
            className: P.premiumLogo
          }),
          (0, i.jsx)('span', {
            className: P.premiumText,
            children: Z.Z.Messages.NOTICE_PREMIUM_PROMO_MESSAGE
          }),
          (0, i.jsx)(r.PrimaryCTANoticeButton, {
            className: P.premiumAction,
            noticeType: b,
            onClick: () => {
              R.default.track(M.rMx.PREMIUM_PROMOTION_OPENED, {
                location_section: M.jXE.NOTIFICATION_BAR,
                location_object: M.qAy.BUTTON_CTA
              }), o.Z.open(M.oAB.PREMIUM);
            },
            children: Z.Z.Messages.NOTICE_PREMIUM_PROMO_ACTION
          }),
          (0, i.jsx)(r.NoticeCloseButton, {
            onClick: () => {
              S(O.L.UNKNOWN), (0, l.mB)(M.xW$.PREMIUM_PROMO_DISMISSED, !0);
            },
            noticeType: b
          })
        ]
      });
    case s.z.NAGBAR_NOTICE_PREMIUM_TIER_TWO_TRIAL_ENDING:
      return (0, i.jsx)(p.Z, {
        dismissCurrentNotice: () => S(O.L.UNKNOWN),
        subscriptionTier: L.Si.TIER_2
      });
    case s.z.NAGBAR_NOTICE_PREMIUM_TIER_0_TRIAL_ENDING:
      return (0, i.jsx)(p.Z, {
        dismissCurrentNotice: () => S(O.L.UNKNOWN),
        subscriptionTier: L.Si.TIER_0
      });
    case s.z.NAGBAR_NOTICE_PREMIUM_REACTIVATE:
      return (0, i.jsxs)(r.Notice, {
        color: r.NoticeColors.PREMIUM_TIER_2,
        children: [
          (0, i.jsx)(r.NoticeCloseButton, {
            noticeType: b,
            onClick: () => S(O.L.UNKNOWN)
          }),
          Z.Z.Messages.PREMIUM_SUBSCRIPTION_REACTIVATION_NOTICE_TEXT,
          (0, i.jsx)(r.PrimaryCTANoticeButton, {
            noticeType: b,
            onClick: () => {
              S(O.L.UNKNOWN), o.Z.open(M.oAB.PREMIUM);
            },
            children: Z.Z.Messages.PREMIUM_SUBSCRIPTION_REACTIVATION_NOTICE_BUTTON_TEXT
          })
        ]
      });
    case s.z.NAGBAR_NOTICE_LOCALIZED_PRICING:
      return (0, i.jsx)(f.Z, {
        notice: D,
        noticeType: b,
        dismissCurrentNotice: () => S(O.L.UNKNOWN)
      });
    case s.z.QUEST_1_GO_LIVE_BANNER:
      let x = null == D ? void 0 : null === (t = D.metadata) || void 0 === t ? void 0 : t.partnerGame;
      return (0, i.jsx)(I.Z, {
        noticeType: b,
        markAsDismissed: () => S(O.L.UNKNOWN),
        partnerGame: x
      });
    case s.z.QUEST_1_ENDED_INCOMPLETE:
      let U = null == D ? void 0 : null === (a = D.metadata) || void 0 === a ? void 0 : a.partnerGame;
      return (0, i.jsx)(E.Z, {
        noticeType: b,
        markAsDismissed: () => S(O.L.UNKNOWN),
        partnerGame: U
      });
    case s.z.NAGBAR_BOUNCED_EMAIL_NOTICE:
      return (0, i.jsxs)(r.Notice, {
        color: r.NoticeColors.DANGER,
        children: [
          (0, i.jsx)(r.NoticeCloseButton, {
            onClick: () => S(O.L.UNKNOWN),
            noticeType: b
          }),
          Z.Z.Messages.BOUNCED_EMAIL_DETECTED_NOTICE,
          (0, i.jsx)(r.PrimaryCTANoticeButton, {
            noticeType: b,
            onClick: () => {
              (0, C.uL)(M.Z5c.SETTINGS('account'));
            },
            children: Z.Z.Messages.CHANGE_EMAIL_SHORT
          })
        ]
      });
    case s.z.NAGBAR_ACTIVATE_SERVER_SUBSCRIPTION:
      let y = _.Z.getEligibleGuildsForNagActivate();
      return (0, i.jsxs)(r.Notice, {
        color: r.NoticeColors.DEFAULT,
        children: [
          (0, i.jsx)(r.NoticeCloseButton, {
            onClick: () => S(O.L.UNKNOWN),
            noticeType: b
          }),
          Z.Z.Messages.GUILD_ROLE_SUBSCRIPTION_NAGBAR_TEXT,
          (0, i.jsx)(r.PrimaryCTANoticeButton, {
            noticeType: b,
            onClick: () => {
              S(O.L.PRIMARY), (0, C.uL)(1 === y.length ? M.Z5c.GUILD_SETTINGS(y[0], 'role-subscriptions') : M.Z5c.PICK_GUILD_SETTINGS('role-subscriptions', void 0, 'server-subscriptions-finish-setting-up'));
            },
            children: Z.Z.Messages.LETS_GO
          })
        ]
      });
    case s.z.NAGBAR_NOTICE_POMELO:
      return (0, i.jsxs)(r.Notice, {
        color: r.NoticeColors.WARNING,
        children: [
          (0, i.jsx)(r.NoticeCloseButton, {
            onClick: () => S(O.L.UNKNOWN),
            noticeType: b
          }),
          Z.Z.Messages.POMELO_ACTION_NEEDED.format(),
          (0, i.jsx)(r.PrimaryCTANoticeButton, {
            onClick: () => (0, N.Z)(v.Kq.NOTICE),
            noticeType: b,
            children: Z.Z.Messages.GET_STARTED
          })
        ]
      });
    case s.z.UU_MIGRATION_NOTICE:
      return (0, i.jsxs)(r.Notice, {
        color: r.NoticeColors.WARNING,
        children: [
          (0, i.jsx)(r.NoticeCloseButton, {
            onClick: () => S(O.L.UNKNOWN),
            noticeType: b
          }),
          Z.Z.Messages.POMELO_ACTION_NEEDED_FORCE.format({
            date: (0, h.IE)(j)
          }),
          (0, i.jsx)(r.PrimaryCTANoticeButton, {
            onClick: () => (0, N.Z)(v.Kq.NOTICE),
            noticeType: b,
            children: Z.Z.Messages.GET_STARTED
          })
        ]
      });
    case s.z.CHECKOUT_RECOVERY_NAGBAR:
      return (0, i.jsxs)(r.Notice, {
        color: r.NoticeColors.PREMIUM_TIER_2,
        children: [
          (0, i.jsx)(r.NoticeCloseButton, {
            onClick: () => S(O.L.UNKNOWN),
            noticeType: b
          }),
          Z.Z.Messages.CHECKOUT_RECOVERY_NAGBAR_CONTENT,
          (0, i.jsx)(r.PrimaryCTANoticeButton, {
            onClick: () => {
              (0, T.Z)({
                subscriptionTier: L.Si.TIER_2,
                analyticsLocations: [d.Z.CHECKOUT_RECOVERY_NAGBAR],
                analyticsLocation: M.Sbl.CHECKOUT_RECOVERY_NAGBAR,
                onClose: () => S(O.L.UNKNOWN)
              });
            },
            noticeType: b,
            children: Z.Z.Messages.CHECKOUT_RECOVERY_NAGBAR_CTA
          })
        ]
      });
  }
}
  });
};