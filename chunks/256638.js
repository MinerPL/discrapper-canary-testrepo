"use strict";
n.r(t), n.d(t, {
  default: function() {
    return eC
  },
  dismissCurrentNotice: function() {
    return eN
  }
});
var s = n("735250"),
  a = n("470079"),
  l = n("913527"),
  i = n.n(l),
  r = n("613828"),
  o = n("442837"),
  u = n("481060"),
  d = n("668781"),
  c = n("893776"),
  f = n("117266"),
  E = n("37234"),
  _ = n("254854"),
  T = n("195500"),
  m = n("287734"),
  I = n("205355"),
  p = n("558381"),
  h = n("223245"),
  N = n("491428"),
  S = n("401430"),
  C = n("230711"),
  A = n("726542"),
  g = n("100527"),
  M = n("906732"),
  R = n("812206"),
  O = n("391650"),
  v = n("605236"),
  L = n("749277"),
  x = n("492435"),
  D = n("353926"),
  P = n("506357"),
  y = n("36459"),
  U = n("236069"),
  b = n("305325"),
  j = n("281956"),
  G = n("574650"),
  B = n("665302"),
  F = n("434404"),
  k = n("918658"),
  w = n("859428"),
  H = n("963249"),
  V = n("774276"),
  Y = n("748770"),
  K = n("246965"),
  W = n("272008"),
  z = n("523255"),
  Q = n("852923"),
  q = n("592125"),
  J = n("430824"),
  X = n("131951"),
  Z = n("19780"),
  $ = n("914010"),
  ee = n("594174"),
  et = n("55563"),
  en = n("695103"),
  es = n("933429"),
  ea = n("285952"),
  el = n("466111"),
  ei = n("644766"),
  er = n("626135"),
  eo = n("63063"),
  eu = n("72924"),
  ed = n("69499"),
  ec = n("912193"),
  ef = n("981631"),
  eE = n("474936"),
  e_ = n("610674"),
  eT = n("65154"),
  em = n("689938"),
  eI = n("502786");
let ep = () => (0, s.jsxs)(ei.default, {
    color: ei.NoticeColors.DANGER,
    children: [(0, s.jsx)(ei.NoticeCloseButton, {
      onClick: () => {
        eN(), (0, ec.open)()
      }
    }), em.default.Messages.NOTICE_NO_INPUT_DETECTED, (0, s.jsx)(ei.NoticeButtonAnchor, {
      href: eo.default.getArticleURL(ef.HelpdeskArticles.NO_INPUT_DETECTED),
      children: em.default.Messages.NOTICE_NO_INPUT_DETECTED_HELP_LINK_TEXT
    })]
  }),
  eh = () => (0, s.jsxs)(ei.default, {
    color: ei.NoticeColors.DANGER,
    children: [(0, s.jsx)(ei.NoticeCloseButton, {
      onClick: () => {
        eN(), (0, ec.open)()
      }
    }), em.default.Messages.NOTICE_NO_INPUT_DETECTED_SETTINGS, (0, s.jsx)(ei.NoticeButton, {
      onClick: () => {
        (0, E.pushLayer)(ef.Layers.USER_SETTINGS), C.default.setSection(ef.UserSettingsSections.VOICE)
      },
      children: em.default.Messages.NOTICE_NO_INPUT_DETECTED_SETTINGS_LINK_TEXT
    })]
  });

function eN(e) {
  _.default.dismiss(null != e ? {
    untilAtLeast: i()(e)
  } : void 0)
}
let eS = a.memo(function() {
  var e, t, l;
  let _ = (0, o.useStateFromStores)([ee.default], () => ee.default.getCurrentUser()),
    g = (0, o.useStateFromStores)([$.default], () => $.default.getGuildId()),
    ec = (0, o.useStateFromStores)([es.default], () => es.default.getNotice()),
    eS = (0, o.useStateFromStores)([J.default], () => J.default.getGuild(g)),
    {
      analyticsLocations: eC
    } = (0, M.default)(),
    eA = null == ec ? void 0 : ec.type,
    eg = (0, j.useShowMemberVerificationGate)(g);
  a.useEffect(() => {
    null != eA && ! function(e, t) {
      let n = {
        notice_type: e
      };
      null != t && (n.guild_id = t), er.default.track(ef.AnalyticEvents.APP_NOTICE_VIEWED, n)
    }(eA, g)
  }, [eA, g]), a.useEffect(() => {
    if (null != ec && ec.type === ef.NoticeTypes.SURVEY && null != ec.metadata) {
      let {
        metadata: e
      } = ec, t = D.default.getUserExperimentDescriptor(e.id);
      null != t && (0, x.trackExposureToExperiment)(e.id, t), (async () => {
        var e, t;
        (null === (e = ec.metadata) || void 0 === e ? void 0 : e.id) != null && await (0, N.surveySeen)(null === (t = ec.metadata) || void 0 === t ? void 0 : t.id)
      })()
    }
  }, [ec]);
  let eM = function(e) {
    let {
      enabled: t
    } = (0, V.default)(!0, e !== ef.NoticeTypes.PREMIUM_TIER_2_TRIAL_ENDING);
    return t || null == e ? null : es.typeToDismissibleContent[e]
  }(eA);
  if (null == ec) return null;
  if (null != eM) return (0, s.jsx)(L.DismissibleContentNotices, {
    dismissibleContent: eM,
    noticeType: ec.type
  });
  let eR = null === (e = ec.metadata) || void 0 === e ? void 0 : e.premiumType;
  switch (ec.type) {
    case ef.NoticeTypes.LURKING_GUILD:
      return (0, s.jsx)(w.default, {});
    case ef.NoticeTypes.PENDING_MEMBER:
      return (0, s.jsx)(G.default, {});
    case ef.NoticeTypes.INVITED_TO_SPEAK:
      return (0, s.jsx)(Q.default, {});
    case ef.NoticeTypes.GUILD_RAID_NOTIFICATION:
      let {
        dismissUntil: eO
      } = ec.metadata;
      return (0, s.jsx)(P.default, {
        onDismiss: () => eN(eO)
      });
    case ef.NoticeTypes.WIN32_DEPRECATED_MESSAGE:
      let {
        dismissUntil: ev
      } = ec.metadata;
      return (0, s.jsxs)(ei.default, {
        color: ei.NoticeColors.WARNING,
        children: [(0, s.jsx)(ei.NoticeCloseButton, {
          onClick: () => eN(ev),
          noticeType: ef.NoticeTypes.WIN32_DEPRECATED_MESSAGE
        }), em.default.Messages.WINDOWS_32_BIT_DEPRECATED_WARNING.format({
          helpCenterLink: eo.default.getArticleURL(ef.HelpdeskArticles.WIN32_DEPRECATE)
        })]
      });
    case ef.NoticeTypes.WIN7_8_DEPRECATED_MESSAGE:
      let {
        dismissUntil: eL
      } = ec.metadata;
      return (0, s.jsxs)(ei.default, {
        color: ei.NoticeColors.WARNING,
        children: [(0, s.jsx)(ei.NoticeCloseButton, {
          onClick: () => eN(eL),
          noticeType: ef.NoticeTypes.WIN7_8_DEPRECATED_MESSAGE
        }), em.default.Messages.WINDOWS_7_8_DEPRECATED_WARNING.format({
          helpCenterLink: eo.default.getArticleURL(ef.HelpdeskArticles.WIN7_8_DEPRECATE)
        })]
      });
    case ef.NoticeTypes.MACOS_17_18_DEPRECATED_MESSAGE:
      let {
        dismissUntil: ex
      } = ec.metadata;
      return (0, s.jsxs)(ei.default, {
        color: ei.NoticeColors.WARNING,
        children: [(0, s.jsx)(ei.NoticeCloseButton, {
          onClick: () => eN(ex),
          noticeType: ef.NoticeTypes.MACOS_17_18_DEPRECATED_MESSAGE
        }), em.default.Messages.MACOS_DEPRECATED_WARNING.format({
          helpCenterLink: eo.default.getArticleURL(ef.HelpdeskArticles.MACOS_17_18_DEPRECATE)
        })]
      });
    case ef.NoticeTypes.GENERIC:
      return (0, s.jsxs)(ei.default, {
        color: ei.NoticeColors.DEFAULT,
        children: [(0, s.jsx)(ei.NoticeCloseButton, {
          onClick: () => eN(),
          noticeType: ef.NoticeTypes.GENERIC
        }), ec.message, null != ec.buttonText ? (0, s.jsx)(ei.PrimaryCTANoticeButton, {
          onClick: ec.callback,
          noticeType: ef.NoticeTypes.GENERIC,
          children: ec.buttonText
        }) : null]
      });
    case ef.NoticeTypes.LAUNCH_GAME_FAILURE:
      return (0, s.jsxs)(ei.default, {
        color: ei.NoticeColors.DANGER,
        children: [(0, s.jsx)(ei.NoticeCloseButton, {
          onClick: () => eN(),
          noticeType: ef.NoticeTypes.LAUNCH_GAME_FAILURE
        }), ec.message, null != ec.buttonText ? (0, s.jsx)(ei.PrimaryCTANoticeButton, {
          onClick: ec.callback,
          noticeType: ef.NoticeTypes.LAUNCH_GAME_FAILURE,
          children: ec.buttonText
        }) : null]
      });
    case ef.NoticeTypes.VOICE_DISABLED:
      return (0, s.jsxs)(ei.default, {
        color: ei.NoticeColors.WARNING,
        children: [(0, s.jsx)(ei.NoticeCloseButton, {
          onClick: () => {
            T.default.clearRemoteDisconnectVoiceChannelId(), eN()
          },
          noticeType: ef.NoticeTypes.VOICE_DISABLED
        }), em.default.Messages.NOTICE_CONNECTION_CONFLICT, (0, s.jsx)(ei.PrimaryCTANoticeButton, {
          onClick: () => {
            let e = Z.default.getRemoteDisconnectVoiceChannelId();
            null != e && null != q.default.getChannel(e) && m.default.selectVoiceChannel(e)
          },
          noticeType: ef.NoticeTypes.VOICE_DISABLED,
          children: em.default.Messages.RECONNECT
        })]
      });
    case ef.NoticeTypes.VOICE_CONNECTED_LAST_SESSION:
      return (0, s.jsxs)(ei.default, {
        color: ei.NoticeColors.DEFAULT,
        children: [(0, s.jsx)(ei.NoticeCloseButton, {
          onClick: () => {
            T.default.clearLastSessionVoiceChannelId(), eN()
          },
          noticeType: ef.NoticeTypes.VOICE_CONNECTED_LAST_SESSION
        }), em.default.Messages.NOTICE_VOICE_CONNECTED_LAST_SESSION, (0, s.jsx)(ei.PrimaryCTANoticeButton, {
          onClick: () => {
            let e = Z.default.getLastSessionVoiceChannelId();
            null != e && null != q.default.getChannel(e) && m.default.selectVoiceChannel(e)
          },
          noticeType: ef.NoticeTypes.VOICE_CONNECTED_LAST_SESSION,
          children: em.default.Messages.RECONNECT
        })]
      });
    case ef.NoticeTypes.SPOTIFY_AUTO_PAUSED:
      let eD = A.default.get(ef.PlatformTypes.SPOTIFY);
      return (0, s.jsxs)(ei.default, {
        color: ei.NoticeColors.DANGER,
        children: [(0, s.jsx)(ei.NoticeCloseButton, {
          onClick: () => eN(),
          noticeType: ef.NoticeTypes.SPOTIFY_AUTO_PAUSED
        }), (0, s.jsx)("img", {
          alt: "",
          className: eI.platformIcon,
          src: eD.icon.whiteSVG
        }), em.default.Messages.NOTICE_SPOTIFY_AUTO_PAUSED, (0, s.jsx)(ei.PrimaryCTANoticeButton, {
          onClick: () => C.default.open(ef.UserSettingsSections.VOICE),
          noticeType: ef.NoticeTypes.SPOTIFY_AUTO_PAUSED,
          children: em.default.Messages.VOICE_SETTINGS
        }), (0, s.jsx)(u.Anchor, {
          className: eI.textLinkSmall,
          href: eo.default.getArticleURL(ef.HelpdeskArticles.SPOTIFY_AUTO_PAUSED),
          target: "_blank",
          children: em.default.Messages.NOTICE_WHATS_THIS
        })]
      });
    case ef.NoticeTypes.UNCLAIMED_ACCOUNT:
      return (0, s.jsxs)(ei.default, {
        color: ei.NoticeColors.DEFAULT,
        children: [em.default.Messages.NOTICE_UNCLAIMED_ACCOUNT, (0, s.jsx)(ei.PrimaryCTANoticeButton, {
          noticeType: ef.NoticeTypes.UNCLAIMED_ACCOUNT,
          onClick: () => eg && null != g ? (0, b.openMemberVerificationModal)(g) : O.openClaimAccountModal(),
          children: em.default.Messages.CLAIM_ACCOUNT
        })]
      });
    case ef.NoticeTypes.UNVERIFIED_ACCOUNT:
      return (0, s.jsxs)(ei.default, {
        color: ei.NoticeColors.DEFAULT,
        children: [em.default.Messages.NOTICE_UNVERIFIED_ACCOUNT_UU, (0, s.jsx)(ei.PrimaryCTANoticeButton, {
          noticeType: ef.NoticeTypes.UNVERIFIED_ACCOUNT,
          onClick: () => {
            c.default.verifyResend(), d.default.show({
              title: em.default.Messages.VERIFICATION_EMAIL_TITLE,
              body: em.default.Messages.VERIFICATION_EMAIL_BODY.format({
                email: null == _ ? void 0 : _.email
              }),
              secondaryConfirmText: em.default.Messages.CHANGE_EMAIL,
              onConfirmSecondary: O.openClaimAccountModal
            })
          },
          children: em.default.Messages.RESEND_EMAIL_SHORT
        })]
      });
    case ef.NoticeTypes.SCHEDULED_MAINTENANCE:
      if (null == ec.metadata) return null;
      return (0, s.jsxs)(ei.default, {
        color: ei.NoticeColors.DEFAULT,
        children: [(0, s.jsx)(ei.NoticeCloseButton, {
          onClick: () => I.default.ackScheduledMaintenance(),
          noticeType: ef.NoticeTypes.SCHEDULED_MAINTENANCE
        }), em.default.Messages.NOTICE_SCHEDULED_MAINTENANCE.format(ec.metadata), (0, s.jsx)(ei.NoticeButtonAnchor, {
          href: "".concat(ef.Links.STATUS, "/incidents/").concat(ec.metadata.id),
          children: em.default.Messages.LEARN_MORE
        })]
      });
    case ef.NoticeTypes.NO_INPUT_DETECTED:
      if (!X.default.supports(eT.Features.LOOPBACK)) return (0, s.jsx)(ep, {});
      return (0, s.jsx)(eh, {});
    case ef.NoticeTypes.HARDWARE_MUTE:
      if (null == ec.metadata) return null;
      let {
        vendor: eP, model: ey
      } = ec.metadata;
      return (0, s.jsxs)(ei.default, {
        color: ei.NoticeColors.DANGER,
        children: [em.default.Messages.NOTICE_HARDWARE_MUTE.format({
          vendorName: eP.name,
          modelName: ey.name
        }), (0, s.jsx)(ei.NoticeButtonAnchor, {
          href: ey.url,
          target: "_blank",
          rel: "noreferrer noopener",
          children: em.default.Messages.SUPPORT
        })]
      });
    case ef.NoticeTypes.STREAMER_MODE:
      return (0, s.jsxs)(ei.default, {
        color: ei.NoticeColors.STREAMER_MODE,
        children: [(0, s.jsx)(ei.NoticeCloseButton, {
          onClick: () => eN(),
          noticeType: ef.NoticeTypes.STREAMER_MODE
        }), em.default.Messages.NOTICE_STREAMER_MODE_TEXT, (0, s.jsx)(ei.PrimaryCTANoticeButton, {
          onClick: () => h.default.setEnabled(!1),
          noticeType: ef.NoticeTypes.STREAMER_MODE,
          children: em.default.Messages.DISABLE
        })]
      });
    case ef.NoticeTypes.H264_DISABLED:
      return (0, s.jsxs)(ei.default, {
        color: ei.NoticeColors.DANGER,
        children: [(0, s.jsx)(ei.NoticeCloseButton, {
          onClick: () => {
            eN()
          }
        }), em.default.Messages.NOTICE_H264_DISABLED_SETTINGS, (0, s.jsx)(ei.NoticeButton, {
          onClick: () => {
            (0, E.pushLayer)(ef.Layers.USER_SETTINGS), C.default.setSection(ef.UserSettingsSections.VOICE)
          },
          children: em.default.Messages.NOTICE_H264_DISABLED_SETTINGS_LINK_TEXT
        })]
      });
    case ef.NoticeTypes.DETECTED_OFF_PLATFORM_PREMIUM_PERK:
      if (null == ec.metadata) return null;
      let {
        skuId: eU, applicationId: eb
      } = ec.metadata, ej = et.default.get(eU), eG = R.default.getApplication(eb);
      if (null == ej || null == eG) return null;
      let eB = {
        page: ef.AnalyticsPages.IN_APP
      };
      return (0, s.jsxs)(ei.default, {
        color: ei.NoticeColors.PREMIUM_TIER_1,
        children: [(0, s.jsx)(ei.NoticeCloseButton, {
          onClick: () => f.dismiss(ej.id),
          noticeType: ef.NoticeTypes.DETECTED_OFF_PLATFORM_PREMIUM_PERK
        }), (0, s.jsx)(el.default, {
          className: eI.premiumIcon
        }), em.default.Messages.NOTICE_DETECTED_OFF_PLATFORM_PREMIUM_PERK_MESSAGE.format({
          applicationName: eG.name,
          skuName: ej.name
        }), (0, s.jsx)(ei.PrimaryCTANoticeButton, {
          noticeType: ef.NoticeTypes.DETECTED_OFF_PLATFORM_PREMIUM_PERK,
          onClick: () => (0, eu.openIAPPurchaseModal)({
            applicationId: eG.id,
            skuId: ej.id,
            openPremiumPaymentModal: () => {
              (0, H.default)({
                initialPlanId: null,
                subscriptionTier: eE.PremiumSubscriptionSKUs.TIER_2,
                analyticsLocations: eC,
                analyticsObject: eB
              })
            },
            analyticsLocations: eC,
            analyticsLocationObject: eB,
            context: __OVERLAY__ ? ef.AppContext.OVERLAY : ef.AppContext.APP
          }).then(() => f.dismiss(ej.id)),
          children: em.default.Messages.NOTICE_DETECTED_OFF_PLATFORM_PREMIUM_PERK_BUTTON
        })]
      });
    case ef.NoticeTypes.DETECTED_OFF_PLATFORM_PREMIUM_PERK_UPSELL: {
      if (null == ec.metadata) return null;
      let {
        skuId: e,
        applicationId: t
      } = ec.metadata, n = et.default.get(e), a = R.default.getApplication(t);
      if (null == n || null == a) return null;
      return (0, s.jsxs)(ei.default, {
        color: ei.NoticeColors.PREMIUM_TIER_1,
        children: [(0, s.jsx)(ei.NoticeCloseButton, {
          onClick: () => eN(),
          noticeType: ef.NoticeTypes.DETECTED_OFF_PLATFORM_PREMIUM_PERK_UPSELL
        }), (0, s.jsx)(el.default, {
          className: eI.premiumIcon
        }), em.default.Messages.NOTICE_DETECTED_OFF_PLATFORM_NO_PREMIUM_PERK_MESSAGE.format({
          applicationName: a.name,
          skuName: n.name
        }), (0, s.jsx)(ei.NoticeButton, {
          children: (0, s.jsx)(r.Link, {
            onClick: () => eN(),
            to: {
              pathname: ef.Routes.APPLICATION_STORE_LISTING_SKU(n.id),
              state: {
                scrollRestoration: !1
              }
            },
            children: em.default.Messages.LEARN_MORE
          })
        })]
      })
    }
    case ef.NoticeTypes.SURVEY: {
      let e = ec.metadata;
      if (null == e) return null;
      let {
        key: t,
        prompt: n,
        cta: a,
        url: l
      } = e;
      return (0, s.jsxs)(ei.default, {
        color: ei.NoticeColors.CUSTOM,
        children: [(0, s.jsx)(ei.NoticeCloseButton, {
          noticeType: ef.NoticeTypes.SURVEY,
          onClick: () => {
            (0, N.surveyHide)(t, !0)
          }
        }), n, (0, s.jsx)(ei.PrimaryCTANoticeButton, {
          noticeType: ef.NoticeTypes.SURVEY,
          onClick: () => {
            window.open(l, "_blank"), (0, N.surveyHide)(t, !1)
          },
          children: a
        })]
      })
    }
    case ef.NoticeTypes.SERVER_USAGE_SURVEY:
      return (0, s.jsxs)(ei.default, {
        color: ei.NoticeColors.CUSTOM,
        children: [(0, s.jsx)(ei.NoticeCloseButton, {
          noticeType: ef.NoticeTypes.SERVER_USAGE_SURVEY,
          onClick: () => {
            eN()
          }
        }), em.default.Messages.SERVER_USAGE_SURVEY_BODY.format({
          guildName: null !== (t = null == eS ? void 0 : eS.name) && void 0 !== t ? t : "this server"
        }), (0, s.jsx)(ei.PrimaryCTANoticeButton, {
          noticeType: ef.NoticeTypes.SERVER_USAGE_SURVEY,
          onClick: () => {
            window.open("https://discord.sjc1.qualtrics.com/jfe/form/SV_9AHPmGasQ0EvpdQ?user_id=".concat(null == _ ? void 0 : _.id, "&guild_id=").concat(null == eS ? void 0 : eS.id), "_blank"), eN()
          },
          additionalTrackingProps: {
            guild_id: null == eS ? void 0 : eS.id
          },
          children: em.default.Messages.SERVER_USAGE_SURVEY_CTA
        })]
      });
    case ef.NoticeTypes.CORRUPT_INSTALLATION:
      return (0, s.jsxs)(ei.default, {
        color: ei.NoticeColors.DANGER,
        children: [em.default.Messages.NOTICE_CORRUPT_INSTALLATION, (0, s.jsx)(ei.NoticeButtonAnchor, {
          href: eo.default.getArticleURL(ef.HelpdeskArticles.CORRUPT_INSTALLATION),
          target: "_blank",
          children: em.default.Messages.NOTICE_CORRUPT_INSTALLATION_HELP_LINK_TEXT
        })]
      });
    case ef.NoticeTypes.VIDEO_UNSUPPORTED_BROWSER:
      return (0, s.jsxs)(ei.default, {
        color: ei.NoticeColors.WARNING,
        children: [(0, s.jsx)(ei.NoticeCloseButton, {
          onClick: () => eN(),
          noticeType: ef.NoticeTypes.VIDEO_UNSUPPORTED_BROWSER
        }), em.default.Messages.VIDEO_UNSUPPORTED_BROWSER_BODY, (0, s.jsx)(ei.PrimaryCTANoticeButton, {
          noticeType: ef.NoticeTypes.VIDEO_UNSUPPORTED_BROWSER,
          onClick: () => {
            (0, u.openModalLazy)(async () => {
              let {
                default: e
              } = await Promise.resolve().then(n.bind(n, "431583"));
              return t => (0, s.jsx)(e, {
                source: "Video unsupported browser",
                ...t
              })
            })
          },
          children: em.default.Messages.DOWNLOAD
        })]
      });
    case ef.NoticeTypes.DISPATCH_ERROR:
      if (null == ec.metadata) return null;
      let {
        error: eF
      } = ec.metadata;
      return (0, s.jsxs)(ei.default, {
        color: ei.NoticeColors.DANGER,
        children: [(0, s.jsx)(ei.NoticeCloseButton, {
          onClick: () => eN(),
          noticeType: ef.NoticeTypes.DISPATCH_ERROR
        }), null == eF ? void 0 : eF.displayMessage, (0, s.jsx)(ei.PrimaryCTANoticeButton, {
          noticeType: ef.NoticeTypes.DISPATCH_ERROR,
          onClick: () => (0, u.openModalLazy)(async () => {
            let {
              default: e
            } = await Promise.all([n.e("99387"), n.e("20212")]).then(n.bind(n, "915194"));
            return t => (0, s.jsx)(e, {
              ...t
            })
          }),
          children: em.default.Messages.LEARN_MORE
        })]
      });
    case ef.NoticeTypes.DISPATCH_INSTALL_SCRIPT_PROGRESS:
      if (null == ec.metadata) return null;
      let {
        progress: ek, total: ew, name: eH
      } = ec.metadata;
      return (0, s.jsxs)(ei.default, {
        color: ei.NoticeColors.DEFAULT,
        children: [(0, s.jsx)(ei.NoticeCloseButton, {
          onClick: () => eN(),
          noticeType: ef.NoticeTypes.DISPATCH_INSTALL_SCRIPT_PROGRESS
        }), (0, s.jsxs)(ea.default, {
          justify: ea.default.Justify.CENTER,
          children: [null != eH ? em.default.Messages.NOTICE_DISPATCH_INSTALL_SCRIPT_PROGRESS_WITH_NAME.format({
            name: "".concat(eH),
            progress: "".concat(ek),
            total: "".concat(ew)
          }) : em.default.Messages.NOTICE_DISPATCH_INSTALL_SCRIPT_PROGRESS.format({
            progress: "".concat(ek),
            total: "".concat(ew)
          }), (0, s.jsx)(u.Spinner, {
            type: u.Spinner.Type.PULSING_ELLIPSIS,
            className: eI.ellipsis
          })]
        })]
      });
    case ef.NoticeTypes.APPLICATION_TEST_MODE:
      if (null == ec.metadata) return null;
      if (null != en.default.testModeEmbeddedApplicationId) return (0, s.jsx)(ei.default, {
        color: ei.NoticeColors.WARNING,
        children: (0, s.jsxs)(ea.default, {
          justify: ea.default.Justify.CENTER,
          align: ea.default.Align.CENTER,
          children: [(0, s.jsx)("div", {
            children: em.default.Messages.NOTICE_EMBEDDED_APPLICATION_TEST_MODE.format({
              applicationName: ec.metadata.applicationName
            })
          }), (0, s.jsx)(ei.NoticeCloseButton, {
            onClick: S.reset,
            noticeType: ef.NoticeTypes.APPLICATION_TEST_MODE
          })]
        })
      });
      return (0, s.jsx)(ei.default, {
        color: ei.NoticeColors.WARNING,
        children: (0, s.jsxs)(ea.default, {
          justify: ea.default.Justify.CENTER,
          align: ea.default.Align.CENTER,
          children: [(0, s.jsx)("div", {
            children: em.default.Messages.NOTICE_APPLICATION_TEST_MODE.format({
              applicationName: ec.metadata.applicationName
            })
          }), (0, s.jsx)(ed.default, {
            dropdownSize: ed.TestModeSKUButtonEnums.DropdownSizes.SMALL,
            className: eI.testModeSKUSelector,
            color: ed.TestModeSKUButtonEnums.Colors.WHITE,
            look: ed.TestModeSKUButtonEnums.Looks.OUTLINED,
            size: ed.TestModeSKUButtonEnums.Sizes.MIN,
            onSKUSelect: e => p.goToSKUStoreListing(e.id, {
              analyticsSource: {
                page: null,
                section: ef.AnalyticsSections.NOTIFICATION_BAR,
                object: ef.AnalyticsObjects.NAVIGATION_LINK
              }
            }),
            applicationId: ec.metadata.applicationId,
            children: em.default.Messages.NOTICE_APPLICATION_TEST_MODE_GO_TO_LISTING
          }), (0, s.jsx)(ei.NoticeCloseButton, {
            onClick: S.reset,
            noticeType: ef.NoticeTypes.APPLICATION_TEST_MODE
          })]
        })
      });
    case ef.NoticeTypes.OUTBOUND_PROMOTION:
      return (0, s.jsxs)(ei.default, {
        color: ei.NoticeColors.PREMIUM_TIER_2,
        children: [(0, s.jsx)(ei.NoticeCloseButton, {
          noticeType: ef.NoticeTypes.OUTBOUND_PROMOTION,
          onClick: () => {
            Y.default.dismissOutboundPromotionNotice()
          }
        }), (0, s.jsx)(el.default, {
          className: eI.premiumIcon
        }), em.default.Messages.OUTBOUND_PROMOTION_NOTICE, (0, s.jsx)(ei.PrimaryCTANoticeButton, {
          noticeType: ef.NoticeTypes.OUTBOUND_PROMOTION,
          onClick: () => {
            er.default.track(ef.AnalyticEvents.OUTBOUND_PROMOTION_NOTICE_CLICKED), C.default.open(ef.UserSettingsSections.INVENTORY), Y.default.dismissOutboundPromotionNotice()
          },
          children: em.default.Messages.TAKE_ME_THERE
        })]
      });
    case ef.NoticeTypes.VIEWING_ROLES:
      return (0, s.jsx)(k.default, {});
    case ef.NoticeTypes.PREMIUM_UNCANCEL:
      return (0, s.jsxs)(ei.default, {
        color: eR === eE.PremiumTypes.TIER_1 ? ei.NoticeColors.PREMIUM_TIER_1 : eR === eE.PremiumTypes.TIER_0 ? ei.NoticeColors.PREMIUM_TIER_0 : ei.NoticeColors.PREMIUM_TIER_2,
        children: [(0, s.jsx)(ei.NoticeCloseButton, {
          noticeType: ef.NoticeTypes.PREMIUM_UNCANCEL,
          onClick: () => {
            var e, t;
            eN(null === (t = ec.metadata) || void 0 === t ? void 0 : null === (e = t.premiumSubscription) || void 0 === e ? void 0 : e.currentPeriodEnd)
          }
        }), (0, s.jsx)(el.default, {
          className: eI.premiumIcon
        }), eR === eE.PremiumTypes.TIER_1 ? em.default.Messages.PREMIUM_SUBSCRIPTION_ENDING_TIER_1_NOTICE_TEXT.format({
          daysLeft: ec.metadata.daysLeft
        }) : eR === eE.PremiumTypes.TIER_0 ? em.default.Messages.PREMIUM_SUBSCRIPTION_ENDING_TIER_0_NOTICE_TEXT.format({
          daysLeft: ec.metadata.daysLeft
        }) : em.default.Messages.PREMIUM_SUBSCRIPTION_ENDING_NOTICE_TEXT.format({
          daysLeft: ec.metadata.daysLeft
        }), (0, s.jsx)(ei.PrimaryCTANoticeButton, {
          noticeType: ef.NoticeTypes.PREMIUM_UNCANCEL,
          onClick: () => {
            var e, t;
            eN(null === (t = ec.metadata) || void 0 === t ? void 0 : null === (e = t.premiumSubscription) || void 0 === e ? void 0 : e.currentPeriodEnd), (0, u.openModalLazy)(async () => {
              let {
                default: e
              } = await Promise.all([n.e("49237"), n.e("99387"), n.e("15972"), n.e("6416"), n.e("8016"), n.e("17938"), n.e("84992"), n.e("72642")]).then(n.bind(n, "561623"));
              return t => (0, s.jsx)(e, {
                ...t,
                daysLeft: ec.metadata.daysLeft,
                premiumType: eR,
                analyticsSource: "Nag Bar",
                premiumSubscription: ec.metadata.premiumSubscription
              })
            })
          },
          children: eR === eE.PremiumTypes.TIER_1 ? em.default.Messages.PREMIUM_SUBSCRIPTION_ENDING_TIER_1_NOTICE_BUTTON_TEXT : eR === eE.PremiumTypes.TIER_0 ? em.default.Messages.PREMIUM_SUBSCRIPTION_ENDING_TIER_0_NOTICE_BUTTON_TEXT : em.default.Messages.PREMIUM_SUBSCRIPTION_ENDING_NOTICE_BUTTON_TEXT
        })]
      });
    case ef.NoticeTypes.PREMIUM_PAST_DUE_ONE_TIME_PAYMENT:
      let {
        daysPastDue: eV, dismissUntil: eY
      } = ec.metadata;
      return (0, s.jsxs)(ei.default, {
        color: ei.NoticeColors.WARNING,
        children: [(0, s.jsx)(ei.NoticeCloseButton, {
          noticeType: eA,
          onClick: () => {
            eN(eY)
          }
        }), em.default.Messages.PREMIUM_SUBSCRIPTION_ONE_TIME_PAYMENT_PAST_DUE_SUBSCRIPTION_TEXT_NO_ACTION.format({
          daysPastDue: eV
        }), (0, s.jsx)(ei.PrimaryCTANoticeButton, {
          noticeType: ef.NoticeTypes.PREMIUM_PAST_DUE_ONE_TIME_PAYMENT,
          onClick: () => {
            eN(eY), C.default.open(ef.UserSettingsSections.SUBSCRIPTIONS)
          },
          children: em.default.Messages.PREMIUM_SUBSCRIPTION_PAST_DUE_RENEW_NOW_BUTTON_TEXT
        })]
      });
    case ef.NoticeTypes.PREMIUM_PAST_DUE_INVALID_PAYMENT:
      return (0, s.jsxs)(ei.default, {
        color: ei.NoticeColors.DANGER,
        children: [(0, s.jsx)(ei.NoticeCloseButton, {
          noticeType: ef.NoticeTypes.PREMIUM_PAST_DUE_INVALID_PAYMENT,
          onClick: () => {
            var e, t;
            eN(null === (t = ec.metadata) || void 0 === t ? void 0 : null === (e = t.premiumSubscription) || void 0 === e ? void 0 : e.currentPeriodEnd)
          }
        }), em.default.Messages.PREMIUM_SUBSCRIPTION_PAST_DUE_INVALID_PAYMENT_NOTICE_TEXT, (0, s.jsx)(ei.PrimaryCTANoticeButton, {
          noticeType: ef.NoticeTypes.PREMIUM_PAST_DUE_INVALID_PAYMENT,
          onClick: () => {
            var e, t;
            eN(null === (t = ec.metadata) || void 0 === t ? void 0 : null === (e = t.premiumSubscription) || void 0 === e ? void 0 : e.currentPeriodEnd), C.default.open(ef.UserSettingsSections.SUBSCRIPTIONS)
          },
          children: em.default.Messages.PREMIUM_SUBSCRIPTION_PAST_DUE_INVALID_PAYMENT_NOTICE_BUTTON_TEXT
        })]
      });
    case ef.NoticeTypes.PREMIUM_PAST_DUE_MISSING_PAYMENT:
      return (0, s.jsxs)(ei.default, {
        color: ei.NoticeColors.WARNING,
        children: [(0, s.jsx)(ei.NoticeCloseButton, {
          noticeType: ef.NoticeTypes.PREMIUM_PAST_DUE_MISSING_PAYMENT,
          onClick: () => {
            var e, t;
            eN(null === (t = ec.metadata) || void 0 === t ? void 0 : null === (e = t.premiumSubscription) || void 0 === e ? void 0 : e.currentPeriodEnd)
          }
        }), em.default.Messages.PREMIUM_SUBSCRIPTION_PAST_DUE_MISSING_PAYMENT_NOTICE_TEXT, (0, s.jsx)(ei.PrimaryCTANoticeButton, {
          noticeType: ef.NoticeTypes.PREMIUM_PAST_DUE_MISSING_PAYMENT,
          onClick: () => {
            var e, t;
            eN(null === (t = ec.metadata) || void 0 === t ? void 0 : null === (e = t.premiumSubscription) || void 0 === e ? void 0 : e.currentPeriodEnd), C.default.open(ef.UserSettingsSections.SUBSCRIPTIONS)
          },
          children: em.default.Messages.PREMIUM_SUBSCRIPTION_PAST_DUE_MISSING_PAYMENT_NOTICE_BUTTON_TEXT
        })]
      });
    case ef.NoticeTypes.PREMIUM_MISSING_PAYMENT:
      return (0, s.jsxs)(ei.default, {
        color: ei.NoticeColors.WARNING,
        children: [(0, s.jsx)(ei.NoticeCloseButton, {
          noticeType: ef.NoticeTypes.PREMIUM_MISSING_PAYMENT,
          onClick: () => {
            var e, t;
            eN(null === (t = ec.metadata) || void 0 === t ? void 0 : null === (e = t.premiumSubscription) || void 0 === e ? void 0 : e.currentPeriodEnd)
          }
        }), eR === eE.PremiumTypes.TIER_1 ? em.default.Messages.PREMIUM_SUBSCRIPTION_ENDING_MISSING_PAYMENT_TIER_1_NOTICE_TEXT.format({
          daysLeft: ec.metadata.daysLeft
        }) : eR === eE.PremiumTypes.TIER_0 ? em.default.Messages.PREMIUM_SUBSCRIPTION_ENDING_MISSING_PAYMENT_TIER_0_NOTICE_TEXT.format({
          daysLeft: ec.metadata.daysLeft
        }) : em.default.Messages.PREMIUM_SUBSCRIPTION_ENDING_MISSING_PAYMENT_NOTICE_TEXT.format({
          daysLeft: ec.metadata.daysLeft
        }), (0, s.jsx)(ei.PrimaryCTANoticeButton, {
          noticeType: ef.NoticeTypes.PREMIUM_MISSING_PAYMENT,
          onClick: () => {
            var e, t;
            eN(null === (t = ec.metadata) || void 0 === t ? void 0 : null === (e = t.premiumSubscription) || void 0 === e ? void 0 : e.currentPeriodEnd), C.default.open(ef.UserSettingsSections.SUBSCRIPTIONS)
          },
          children: eR === eE.PremiumTypes.TIER_1 ? em.default.Messages.PREMIUM_SUBSCRIPTION_ENDING_MISSING_PAYMENT_TIER_1_NOTICE_BUTTON_TEXT : eR === eE.PremiumTypes.TIER_0 ? em.default.Messages.PREMIUM_SUBSCRIPTION_ENDING_MISSING_PAYMENT_TIER_0_NOTICE_BUTTON_TEXT : em.default.Messages.PREMIUM_SUBSCRIPTION_ENDING_MISSING_PAYMENT_NOTICE_BUTTON_TEXT
        })]
      });
    case ef.NoticeTypes.BACK_TO_PREVIOUS_SCREEN:
      return (0, s.jsx)(B.BackToPreviousScreenNotice, {
        buttonText: null !== (l = ec.buttonText) && void 0 !== l ? l : em.default.Messages.GO_BACK,
        onGoBack: ec.callback,
        onDismiss: () => eN(),
        showCloseButton: !0
      });
    case ef.NoticeTypes.AUTOMOD_QUARANTINED_USER_PROFILE: {
      let e = {
        page: ef.AnalyticsPages.IN_APP
      };
      return (0, s.jsx)(U.default, {
        guildId: g,
        analyticsLocations: eC,
        analyticsLocation: e
      })
    }
    case ef.NoticeTypes.QUARANTINED:
      return (0, s.jsxs)(ei.default, {
        color: ei.NoticeColors.CUSTOM,
        className: eI.quarantineNotice,
        children: [em.default.Messages.LIMITED_ACCESS_NAG_BAR_NOTICE, (0, s.jsx)(ei.NoticeButtonAnchor, {
          href: e_.QUARANTINE_APPEAL_LINK,
          target: "_blank",
          children: em.default.Messages.LIMITED_ACCESS_NAG_BAR_APPEAL
        }), (0, s.jsx)(u.Anchor, {
          href: eo.default.getArticleURL(ef.HelpdeskArticles.QUARANTINE),
          target: "_blank",
          className: eI.quarantineLearnMoreLink,
          children: em.default.Messages.LEARN_MORE
        })]
      });
    case ef.NoticeTypes.BLOCKED_BY_PROXY:
      return (0, s.jsxs)(ei.default, {
        color: ei.NoticeColors.WARNING,
        children: [em.default.Messages.BLOCKED_BY_PROXY_NOTICE, (0, s.jsx)(ei.NoticeButtonAnchor, {
          href: "".concat(ef.Links.STATUS),
          children: em.default.Messages.LEARN_MORE
        }), (0, s.jsx)(ei.NoticeCloseButton, {
          onClick: () => eN(),
          noticeType: ef.NoticeTypes.BLOCKED_BY_PROXY
        })]
      });
    case ef.NoticeTypes.DROPS_PROGRESS_INTERRUPTION:
      return (0, s.jsxs)(ei.default, {
        color: ei.NoticeColors.DANGER,
        children: [em.default.Messages.DROPS_PROGRESS_INTERRUPTION_WARNING.format({
          gameTitle: ec.metadata.gameTitle
        }), (0, s.jsx)(ei.NoticeButton, {
          onClick: ec.metadata.reloadCallback,
          children: em.default.Messages.ERRORS_RESTART_APP
        })]
      });
    case ef.NoticeTypes.AUTO_MODERATION_MENTION_RAID_DETECTION:
      let {
        dismissUntil: eK, decisionId: eW
      } = ec.metadata;
      return (0, s.jsxs)(ei.default, {
        color: ei.NoticeColors.WARNING,
        children: [(0, s.jsx)(ei.NoticeCloseButton, {
          noticeType: ef.NoticeTypes.AUTO_MODERATION_MENTION_RAID_DETECTION,
          onClick: () => {
            null != g && (0, y.clearMentionRaidDetected)(g), eN(eK)
          }
        }), em.default.Messages.GUILD_AUTOMOD_MENTION_SPAM_NOTICE_MESSAGE, (0, s.jsx)(ei.NoticeButton, {
          onClick: () => {
            null != g && (0, y.removeMentionRaidRestrictionWithFeedback)(g, eW, () => {
              eN(eK), (0, y.clearMentionRaidDetected)(g)
            })
          },
          children: em.default.Messages.GUILD_AUTOMOD_MENTION_SPAM_NOTICE_REMOVE_RESTRICTION
        }), null != g ? (0, s.jsx)(ei.NoticeButton, {
          onClick: () => F.default.open(g, ef.GuildSettingsSections.GUILD_AUTOMOD, void 0, ef.GuildSettingsSubsections.AUTOMOD_MENTION_SPAM),
          children: em.default.Messages.GUILD_AUTOMOD_MENTION_SPAM_NOTICE_CONFIGURE_SETTINGS
        }) : null]
      });
    case ef.NoticeTypes.SAFETY_USER_SENTIMENT_NAGBAR:
      return (0, s.jsxs)(ei.default, {
        color: ei.NoticeColors.BRAND,
        children: [(0, s.jsx)(ei.NoticeCloseButton, {
          noticeType: ef.NoticeTypes.SAFETY_USER_SENTIMENT_NAGBAR,
          onClick: () => {
            z.markNoticeDismissed(), eN()
          }
        }), em.default.Messages.SAFETY_USER_SENTIMENT_NOTICE, (0, s.jsx)(ei.PrimaryCTANoticeButton, {
          noticeType: ef.NoticeTypes.SAFETY_USER_SENTIMENT_NAGBAR,
          onClick: () => {
            (0, u.openModalLazy)(async () => {
              let {
                default: e
              } = await Promise.all([n.e("49237"), n.e("99387"), n.e("51563")]).then(n.bind(n, "349994"));
              return t => (0, s.jsx)(e, {
                ...t
              })
            }), z.markNoticeDismissed(), eN()
          },
          children: em.default.Messages.SAFETY_USER_SENTIMENT_NOTICE_CTA
        })]
      });
    case ef.NoticeTypes.PREMIUM_TIER_2_TRIAL_ENDING:
      let ez = i()().add(5, "days").toDate();
      return (0, s.jsx)(K.default, {
        dismissCurrentNotice: () => {
          (0, v.markDismissibleContentAsDismissed)(es.typeToDismissibleContent[ef.NoticeTypes.PREMIUM_TIER_2_TRIAL_ENDING]), eN(ez)
        },
        subscriptionTier: eE.PremiumSubscriptionSKUs.TIER_2
      });
    case ef.NoticeTypes.QUESTS_PROGRESS_INTERRUPTION:
      return (0, s.jsxs)(ei.default, {
        color: ei.NoticeColors.DANGER,
        children: [(0, s.jsx)(ei.NoticeCloseButton, {
          noticeType: ef.NoticeTypes.QUESTS_PROGRESS_INTERRUPTION,
          onClick: () => {
            var e;
            (null === (e = ec.metadata) || void 0 === e ? void 0 : e.streamKey) != null && (0, W.dismissProgressTrackingFailureNotice)(ec.metadata.streamKey)
          }
        }), em.default.Messages.QUESTS_PROGRESS_TRACKING_FAILURE_NOTICE]
      });
    default:
      return null
  }
});

function eC() {
  let {
    analyticsLocations: e
  } = (0, M.default)(g.default.NOTICE);
  return (0, s.jsx)(M.AnalyticsLocationProvider, {
    value: e,
    children: (0, s.jsx)(eS, {})
  })
}