n.d(t, {
    Z: function () {
        return eC;
    },
    c: function () {
        return eN;
    }
});
var i = n(735250),
    a = n(470079),
    s = n(913527),
    r = n.n(s),
    l = n(613828),
    o = n(442837),
    c = n(481060),
    u = n(668781),
    d = n(893776),
    _ = n(117266),
    E = n(37234),
    I = n(254854),
    m = n(195500),
    T = n(287734),
    h = n(205355),
    N = n(558381),
    f = n(223245),
    C = n(491428),
    p = n(401430),
    g = n(230711),
    S = n(726542),
    A = n(100527),
    R = n(906732),
    x = n(812206),
    O = n(391650),
    M = n(600164),
    v = n(605236),
    L = n(749277),
    Z = n(492435),
    P = n(353926),
    b = n(506357),
    D = n(36459),
    j = n(236069),
    U = n(305325),
    y = n(281956),
    B = n(574650),
    k = n(665302),
    G = n(434404),
    F = n(918658),
    w = n(859428),
    V = n(963249),
    H = n(774276),
    Y = n(14335),
    W = n(246965),
    K = n(272008),
    z = n(523255),
    Q = n(852923),
    q = n(592125),
    X = n(430824),
    J = n(131951),
    $ = n(19780),
    ee = n(914010),
    et = n(594174),
    en = n(55563),
    ei = n(695103),
    ea = n(933429),
    es = n(626135),
    er = n(63063),
    el = n(72924),
    eo = n(69499),
    ec = n(912193),
    eu = n(981631),
    ed = n(474936),
    e_ = n(610674),
    eE = n(65154),
    eI = n(689938),
    em = n(66740);
let eT = () =>
        (0, i.jsxs)(c.Notice, {
            color: c.NoticeColors.DANGER,
            children: [
                (0, i.jsx)(c.NoticeCloseButton, {
                    onClick: () => {
                        eN(), (0, ec.b)();
                    }
                }),
                eI.Z.Messages.NOTICE_NO_INPUT_DETECTED,
                (0, i.jsx)(c.NoticeButtonAnchor, {
                    href: er.Z.getArticleURL(eu.BhN.NO_INPUT_DETECTED),
                    children: eI.Z.Messages.NOTICE_NO_INPUT_DETECTED_HELP_LINK_TEXT
                })
            ]
        }),
    eh = () =>
        (0, i.jsxs)(c.Notice, {
            color: c.NoticeColors.DANGER,
            children: [
                (0, i.jsx)(c.NoticeCloseButton, {
                    onClick: () => {
                        eN(), (0, ec.b)();
                    }
                }),
                eI.Z.Messages.NOTICE_NO_INPUT_DETECTED_SETTINGS,
                (0, i.jsx)(c.NoticeButton, {
                    onClick: () => {
                        (0, E.jN)(eu.S9g.USER_SETTINGS), g.Z.setSection(eu.oAB.VOICE);
                    },
                    children: eI.Z.Messages.NOTICE_NO_INPUT_DETECTED_SETTINGS_LINK_TEXT
                })
            ]
        });
function eN(e) {
    I.Z.dismiss(null != e ? { untilAtLeast: r()(e) } : void 0);
}
let ef =
    12633 == n.j
        ? a.memo(function () {
              var e, t, s;
              let I = (0, o.e7)([et.default], () => et.default.getCurrentUser()),
                  A = (0, o.e7)([ee.Z], () => ee.Z.getGuildId()),
                  ec = (0, o.e7)([ea.Z], () => ea.Z.getNotice()),
                  ef = (0, o.e7)([X.Z], () => X.Z.getGuild(A)),
                  { analyticsLocations: eC } = (0, R.ZP)(),
                  ep = null == ec ? void 0 : ec.type,
                  eg = (0, y.J)(A);
              a.useEffect(() => {
                  null != ep &&
                      !(function (e, t) {
                          let n = { notice_type: e };
                          null != t && (n.guild_id = t), es.default.track(eu.rMx.APP_NOTICE_VIEWED, n);
                      })(ep, A);
              }, [ep, A]),
                  a.useEffect(() => {
                      if (null != ec && ec.type === eu.kVF.SURVEY && null != ec.metadata) {
                          let { metadata: e } = ec,
                              t = P.Z.getUserExperimentDescriptor(e.id);
                          null != t && (0, Z.W9)(e.id, t),
                              (async () => {
                                  var e, t;
                                  (null === (e = ec.metadata) || void 0 === e ? void 0 : e.id) != null && (await (0, C.g8)(null === (t = ec.metadata) || void 0 === t ? void 0 : t.id));
                              })();
                      }
                  }, [ec]);
              let eS = (function (e) {
                  let { enabled: t } = (0, H.ZP)(!0, e !== eu.kVF.PREMIUM_TIER_2_TRIAL_ENDING);
                  return t || null == e ? null : ea.m[e];
              })(ep);
              if (null == ec) return null;
              if (null != eS)
                  return (0, i.jsx)(L.A, {
                      dismissibleContent: eS,
                      noticeType: ec.type
                  });
              let eA = null === (e = ec.metadata) || void 0 === e ? void 0 : e.premiumType;
              switch (ec.type) {
                  case eu.kVF.LURKING_GUILD:
                      return (0, i.jsx)(w.Z, {});
                  case eu.kVF.PENDING_MEMBER:
                      return (0, i.jsx)(B.Z, {});
                  case eu.kVF.INVITED_TO_SPEAK:
                      return (0, i.jsx)(Q.Z, {});
                  case eu.kVF.GUILD_RAID_NOTIFICATION:
                      let { dismissUntil: eR } = ec.metadata;
                      return (0, i.jsx)(b.Z, { onDismiss: () => eN(eR) });
                  case eu.kVF.WIN32_DEPRECATED_MESSAGE:
                      let { dismissUntil: ex } = ec.metadata;
                      return (0, i.jsxs)(c.Notice, {
                          color: c.NoticeColors.WARNING,
                          children: [
                              (0, i.jsx)(c.NoticeCloseButton, {
                                  onClick: () => eN(ex),
                                  noticeType: eu.kVF.WIN32_DEPRECATED_MESSAGE
                              }),
                              eI.Z.Messages.WINDOWS_32_BIT_DEPRECATED_WARNING.format({ helpCenterLink: er.Z.getArticleURL(eu.BhN.WIN32_DEPRECATE) })
                          ]
                      });
                  case eu.kVF.WIN7_8_DEPRECATED_MESSAGE:
                      let { dismissUntil: eO } = ec.metadata;
                      return (0, i.jsxs)(c.Notice, {
                          color: c.NoticeColors.WARNING,
                          children: [
                              (0, i.jsx)(c.NoticeCloseButton, {
                                  onClick: () => eN(eO),
                                  noticeType: eu.kVF.WIN7_8_DEPRECATED_MESSAGE
                              }),
                              eI.Z.Messages.WINDOWS_7_8_DEPRECATED_WARNING.format({ helpCenterLink: er.Z.getArticleURL(eu.BhN.WIN7_8_DEPRECATE) })
                          ]
                      });
                  case eu.kVF.MACOS_17_18_DEPRECATED_MESSAGE:
                      let { dismissUntil: eM } = ec.metadata;
                      return (0, i.jsxs)(c.Notice, {
                          color: c.NoticeColors.WARNING,
                          children: [
                              (0, i.jsx)(c.NoticeCloseButton, {
                                  onClick: () => eN(eM),
                                  noticeType: eu.kVF.MACOS_17_18_DEPRECATED_MESSAGE
                              }),
                              eI.Z.Messages.MACOS_DEPRECATED_WARNING.format({ helpCenterLink: er.Z.getArticleURL(eu.BhN.MACOS_17_18_DEPRECATE) })
                          ]
                      });
                  case eu.kVF.GENERIC:
                      return (0, i.jsxs)(c.Notice, {
                          color: c.NoticeColors.DEFAULT,
                          children: [
                              (0, i.jsx)(c.NoticeCloseButton, {
                                  onClick: () => eN(),
                                  noticeType: eu.kVF.GENERIC
                              }),
                              ec.message,
                              null != ec.buttonText
                                  ? (0, i.jsx)(c.PrimaryCTANoticeButton, {
                                        onClick: ec.callback,
                                        noticeType: eu.kVF.GENERIC,
                                        children: ec.buttonText
                                    })
                                  : null
                          ]
                      });
                  case eu.kVF.LAUNCH_GAME_FAILURE:
                      return (0, i.jsxs)(c.Notice, {
                          color: c.NoticeColors.DANGER,
                          children: [
                              (0, i.jsx)(c.NoticeCloseButton, {
                                  onClick: () => eN(),
                                  noticeType: eu.kVF.LAUNCH_GAME_FAILURE
                              }),
                              ec.message,
                              null != ec.buttonText
                                  ? (0, i.jsx)(c.PrimaryCTANoticeButton, {
                                        onClick: ec.callback,
                                        noticeType: eu.kVF.LAUNCH_GAME_FAILURE,
                                        children: ec.buttonText
                                    })
                                  : null
                          ]
                      });
                  case eu.kVF.VOICE_DISABLED:
                      return (0, i.jsxs)(c.Notice, {
                          color: c.NoticeColors.WARNING,
                          children: [
                              (0, i.jsx)(c.NoticeCloseButton, {
                                  onClick: () => {
                                      m.Z.clearRemoteDisconnectVoiceChannelId(), eN();
                                  },
                                  noticeType: eu.kVF.VOICE_DISABLED
                              }),
                              eI.Z.Messages.NOTICE_CONNECTION_CONFLICT,
                              (0, i.jsx)(c.PrimaryCTANoticeButton, {
                                  onClick: () => {
                                      let e = $.Z.getRemoteDisconnectVoiceChannelId();
                                      null != e && null != q.Z.getChannel(e) && T.default.selectVoiceChannel(e);
                                  },
                                  noticeType: eu.kVF.VOICE_DISABLED,
                                  children: eI.Z.Messages.RECONNECT
                              })
                          ]
                      });
                  case eu.kVF.VOICE_CONNECTED_LAST_SESSION:
                      return (0, i.jsxs)(c.Notice, {
                          color: c.NoticeColors.DEFAULT,
                          children: [
                              (0, i.jsx)(c.NoticeCloseButton, {
                                  onClick: () => {
                                      m.Z.clearLastSessionVoiceChannelId(), eN();
                                  },
                                  noticeType: eu.kVF.VOICE_CONNECTED_LAST_SESSION
                              }),
                              eI.Z.Messages.NOTICE_VOICE_CONNECTED_LAST_SESSION,
                              (0, i.jsx)(c.PrimaryCTANoticeButton, {
                                  onClick: () => {
                                      let e = $.Z.getLastSessionVoiceChannelId();
                                      null != e && null != q.Z.getChannel(e) && T.default.selectVoiceChannel(e);
                                  },
                                  noticeType: eu.kVF.VOICE_CONNECTED_LAST_SESSION,
                                  children: eI.Z.Messages.RECONNECT
                              })
                          ]
                      });
                  case eu.kVF.SPOTIFY_AUTO_PAUSED:
                      let ev = S.Z.get(eu.ABu.SPOTIFY);
                      return (0, i.jsxs)(c.Notice, {
                          color: c.NoticeColors.DANGER,
                          children: [
                              (0, i.jsx)(c.NoticeCloseButton, {
                                  onClick: () => eN(),
                                  noticeType: eu.kVF.SPOTIFY_AUTO_PAUSED
                              }),
                              (0, i.jsx)('img', {
                                  alt: '',
                                  className: em.platformIcon,
                                  src: ev.icon.whiteSVG
                              }),
                              eI.Z.Messages.NOTICE_SPOTIFY_AUTO_PAUSED,
                              (0, i.jsx)(c.PrimaryCTANoticeButton, {
                                  onClick: () => g.Z.open(eu.oAB.VOICE),
                                  noticeType: eu.kVF.SPOTIFY_AUTO_PAUSED,
                                  children: eI.Z.Messages.VOICE_SETTINGS
                              }),
                              (0, i.jsx)(c.Anchor, {
                                  className: em.textLinkSmall,
                                  href: er.Z.getArticleURL(eu.BhN.SPOTIFY_AUTO_PAUSED),
                                  target: '_blank',
                                  children: eI.Z.Messages.NOTICE_WHATS_THIS
                              })
                          ]
                      });
                  case eu.kVF.UNCLAIMED_ACCOUNT:
                      return (0, i.jsxs)(c.Notice, {
                          color: c.NoticeColors.DEFAULT,
                          children: [
                              eI.Z.Messages.NOTICE_UNCLAIMED_ACCOUNT,
                              (0, i.jsx)(c.PrimaryCTANoticeButton, {
                                  noticeType: eu.kVF.UNCLAIMED_ACCOUNT,
                                  onClick: () => (eg && null != A ? (0, U.hk)(A) : O.j()),
                                  children: eI.Z.Messages.CLAIM_ACCOUNT
                              })
                          ]
                      });
                  case eu.kVF.UNVERIFIED_ACCOUNT:
                      return (0, i.jsxs)(c.Notice, {
                          color: c.NoticeColors.DEFAULT,
                          children: [
                              eI.Z.Messages.NOTICE_UNVERIFIED_ACCOUNT_UU,
                              (0, i.jsx)(c.PrimaryCTANoticeButton, {
                                  noticeType: eu.kVF.UNVERIFIED_ACCOUNT,
                                  onClick: () => {
                                      d.Z.verifyResend(),
                                          u.Z.show({
                                              title: eI.Z.Messages.VERIFICATION_EMAIL_TITLE,
                                              body: eI.Z.Messages.VERIFICATION_EMAIL_BODY.format({ email: null == I ? void 0 : I.email }),
                                              secondaryConfirmText: eI.Z.Messages.CHANGE_EMAIL,
                                              onConfirmSecondary: O.j
                                          });
                                  },
                                  children: eI.Z.Messages.RESEND_EMAIL_SHORT
                              })
                          ]
                      });
                  case eu.kVF.SCHEDULED_MAINTENANCE:
                      if (null == ec.metadata) return null;
                      return (0, i.jsxs)(c.Notice, {
                          color: c.NoticeColors.DEFAULT,
                          children: [
                              (0, i.jsx)(c.NoticeCloseButton, {
                                  onClick: () => h.Z.ackScheduledMaintenance(),
                                  noticeType: eu.kVF.SCHEDULED_MAINTENANCE
                              }),
                              eI.Z.Messages.NOTICE_SCHEDULED_MAINTENANCE.format(ec.metadata),
                              (0, i.jsx)(c.NoticeButtonAnchor, {
                                  href: ''.concat(eu.yXt.STATUS, '/incidents/').concat(ec.metadata.id),
                                  children: eI.Z.Messages.LEARN_MORE
                              })
                          ]
                      });
                  case eu.kVF.NO_INPUT_DETECTED:
                      if (!J.Z.supports(eE.AN.LOOPBACK)) return (0, i.jsx)(eT, {});
                      return (0, i.jsx)(eh, {});
                  case eu.kVF.HARDWARE_MUTE:
                      if (null == ec.metadata) return null;
                      let { vendor: eL, model: eZ } = ec.metadata;
                      return (0, i.jsxs)(c.Notice, {
                          color: c.NoticeColors.DANGER,
                          children: [
                              eI.Z.Messages.NOTICE_HARDWARE_MUTE.format({
                                  vendorName: eL.name,
                                  modelName: eZ.name
                              }),
                              (0, i.jsx)(c.NoticeButtonAnchor, {
                                  href: eZ.url,
                                  target: '_blank',
                                  rel: 'noreferrer noopener',
                                  children: eI.Z.Messages.SUPPORT
                              })
                          ]
                      });
                  case eu.kVF.STREAMER_MODE:
                      return (0, i.jsxs)(c.Notice, {
                          color: c.NoticeColors.STREAMER_MODE,
                          children: [
                              (0, i.jsx)(c.NoticeCloseButton, {
                                  onClick: () => eN(),
                                  noticeType: eu.kVF.STREAMER_MODE
                              }),
                              eI.Z.Messages.NOTICE_STREAMER_MODE_TEXT,
                              (0, i.jsx)(c.PrimaryCTANoticeButton, {
                                  onClick: () => f.Z.setEnabled(!1),
                                  noticeType: eu.kVF.STREAMER_MODE,
                                  children: eI.Z.Messages.DISABLE
                              })
                          ]
                      });
                  case eu.kVF.H264_DISABLED:
                      return (0, i.jsxs)(c.Notice, {
                          color: c.NoticeColors.DANGER,
                          children: [
                              (0, i.jsx)(c.NoticeCloseButton, {
                                  onClick: () => {
                                      eN();
                                  }
                              }),
                              eI.Z.Messages.NOTICE_H264_DISABLED_SETTINGS,
                              (0, i.jsx)(c.NoticeButton, {
                                  onClick: () => {
                                      (0, E.jN)(eu.S9g.USER_SETTINGS), g.Z.setSection(eu.oAB.VOICE);
                                  },
                                  children: eI.Z.Messages.NOTICE_H264_DISABLED_SETTINGS_LINK_TEXT
                              })
                          ]
                      });
                  case eu.kVF.DETECTED_OFF_PLATFORM_PREMIUM_PERK:
                      if (null == ec.metadata) return null;
                      let { skuId: eP, applicationId: eb } = ec.metadata,
                          eD = en.Z.get(eP),
                          ej = x.Z.getApplication(eb);
                      if (null == eD || null == ej) return null;
                      let eU = { page: eu.ZY5.IN_APP };
                      return (0, i.jsxs)(c.Notice, {
                          color: c.NoticeColors.PREMIUM_TIER_1,
                          children: [
                              (0, i.jsx)(c.NoticeCloseButton, {
                                  onClick: () => _.Z(eD.id),
                                  noticeType: eu.kVF.DETECTED_OFF_PLATFORM_PREMIUM_PERK
                              }),
                              (0, i.jsx)(c.NitroWheelIcon, {
                                  size: 'md',
                                  color: 'currentColor',
                                  className: em.premiumIcon
                              }),
                              eI.Z.Messages.NOTICE_DETECTED_OFF_PLATFORM_PREMIUM_PERK_MESSAGE.format({
                                  applicationName: ej.name,
                                  skuName: eD.name
                              }),
                              (0, i.jsx)(c.PrimaryCTANoticeButton, {
                                  noticeType: eu.kVF.DETECTED_OFF_PLATFORM_PREMIUM_PERK,
                                  onClick: () =>
                                      (0, el.S)({
                                          applicationId: ej.id,
                                          skuId: eD.id,
                                          openPremiumPaymentModal: () => {
                                              (0, V.Z)({
                                                  initialPlanId: null,
                                                  subscriptionTier: ed.Si.TIER_2,
                                                  analyticsLocations: eC,
                                                  analyticsObject: eU
                                              });
                                          },
                                          analyticsLocations: eC,
                                          analyticsLocationObject: eU,
                                          context: __OVERLAY__ ? eu.IlC.OVERLAY : eu.IlC.APP
                                      }).then(() => _.Z(eD.id)),
                                  children: eI.Z.Messages.NOTICE_DETECTED_OFF_PLATFORM_PREMIUM_PERK_BUTTON
                              })
                          ]
                      });
                  case eu.kVF.DETECTED_OFF_PLATFORM_PREMIUM_PERK_UPSELL: {
                      if (null == ec.metadata) return null;
                      let { skuId: e, applicationId: t } = ec.metadata,
                          n = en.Z.get(e),
                          a = x.Z.getApplication(t);
                      if (null == n || null == a) return null;
                      return (0, i.jsxs)(c.Notice, {
                          color: c.NoticeColors.PREMIUM_TIER_1,
                          children: [
                              (0, i.jsx)(c.NoticeCloseButton, {
                                  onClick: () => eN(),
                                  noticeType: eu.kVF.DETECTED_OFF_PLATFORM_PREMIUM_PERK_UPSELL
                              }),
                              (0, i.jsx)(c.NitroWheelIcon, {
                                  size: 'md',
                                  color: 'currentColor',
                                  className: em.premiumIcon
                              }),
                              eI.Z.Messages.NOTICE_DETECTED_OFF_PLATFORM_NO_PREMIUM_PERK_MESSAGE.format({
                                  applicationName: a.name,
                                  skuName: n.name
                              }),
                              (0, i.jsx)(c.NoticeButton, {
                                  children: (0, i.jsx)(l.rU, {
                                      onClick: () => eN(),
                                      to: {
                                          pathname: eu.Z5c.APPLICATION_STORE_LISTING_SKU(n.id),
                                          state: { scrollRestoration: !1 }
                                      },
                                      children: eI.Z.Messages.LEARN_MORE
                                  })
                              })
                          ]
                      });
                  }
                  case eu.kVF.SURVEY: {
                      let e = ec.metadata;
                      if (null == e) return null;
                      let { key: t, prompt: n, cta: a, url: s } = e;
                      return (0, i.jsxs)(c.Notice, {
                          color: c.NoticeColors.CUSTOM,
                          children: [
                              (0, i.jsx)(c.NoticeCloseButton, {
                                  noticeType: eu.kVF.SURVEY,
                                  onClick: () => {
                                      (0, C.hZ)(t, !0);
                                  }
                              }),
                              n,
                              (0, i.jsx)(c.PrimaryCTANoticeButton, {
                                  noticeType: eu.kVF.SURVEY,
                                  onClick: () => {
                                      window.open(s, '_blank'), (0, C.hZ)(t, !1);
                                  },
                                  children: a
                              })
                          ]
                      });
                  }
                  case eu.kVF.SERVER_USAGE_SURVEY:
                      return (0, i.jsxs)(c.Notice, {
                          color: c.NoticeColors.CUSTOM,
                          children: [
                              (0, i.jsx)(c.NoticeCloseButton, {
                                  noticeType: eu.kVF.SERVER_USAGE_SURVEY,
                                  onClick: () => {
                                      eN();
                                  }
                              }),
                              eI.Z.Messages.SERVER_USAGE_SURVEY_BODY.format({ guildName: null !== (t = null == ef ? void 0 : ef.name) && void 0 !== t ? t : 'this server' }),
                              (0, i.jsx)(c.PrimaryCTANoticeButton, {
                                  noticeType: eu.kVF.SERVER_USAGE_SURVEY,
                                  onClick: () => {
                                      window.open('https://discord.sjc1.qualtrics.com/jfe/form/SV_9AHPmGasQ0EvpdQ?user_id='.concat(null == I ? void 0 : I.id, '&guild_id=').concat(null == ef ? void 0 : ef.id), '_blank'), eN();
                                  },
                                  additionalTrackingProps: { guild_id: null == ef ? void 0 : ef.id },
                                  children: eI.Z.Messages.SERVER_USAGE_SURVEY_CTA
                              })
                          ]
                      });
                  case eu.kVF.CORRUPT_INSTALLATION:
                      return (0, i.jsxs)(c.Notice, {
                          color: c.NoticeColors.DANGER,
                          children: [
                              eI.Z.Messages.NOTICE_CORRUPT_INSTALLATION,
                              (0, i.jsx)(c.NoticeButtonAnchor, {
                                  href: er.Z.getArticleURL(eu.BhN.CORRUPT_INSTALLATION),
                                  target: '_blank',
                                  children: eI.Z.Messages.NOTICE_CORRUPT_INSTALLATION_HELP_LINK_TEXT
                              })
                          ]
                      });
                  case eu.kVF.VIDEO_UNSUPPORTED_BROWSER:
                      return (0, i.jsxs)(c.Notice, {
                          color: c.NoticeColors.WARNING,
                          children: [
                              (0, i.jsx)(c.NoticeCloseButton, {
                                  onClick: () => eN(),
                                  noticeType: eu.kVF.VIDEO_UNSUPPORTED_BROWSER
                              }),
                              eI.Z.Messages.VIDEO_UNSUPPORTED_BROWSER_BODY,
                              (0, i.jsx)(c.PrimaryCTANoticeButton, {
                                  noticeType: eu.kVF.VIDEO_UNSUPPORTED_BROWSER,
                                  onClick: () => {
                                      (0, c.openModalLazy)(async () => {
                                          let { default: e } = await Promise.resolve().then(n.bind(n, 431583));
                                          return (t) =>
                                              (0, i.jsx)(e, {
                                                  source: 'Video unsupported browser',
                                                  ...t
                                              });
                                      });
                                  },
                                  children: eI.Z.Messages.DOWNLOAD
                              })
                          ]
                      });
                  case eu.kVF.DISPATCH_ERROR:
                      if (null == ec.metadata) return null;
                      let { error: ey } = ec.metadata;
                      return (0, i.jsxs)(c.Notice, {
                          color: c.NoticeColors.DANGER,
                          children: [
                              (0, i.jsx)(c.NoticeCloseButton, {
                                  onClick: () => eN(),
                                  noticeType: eu.kVF.DISPATCH_ERROR
                              }),
                              null == ey ? void 0 : ey.displayMessage,
                              (0, i.jsx)(c.PrimaryCTANoticeButton, {
                                  noticeType: eu.kVF.DISPATCH_ERROR,
                                  onClick: () =>
                                      (0, c.openModalLazy)(async () => {
                                          let { default: e } = await n.e('20212').then(n.bind(n, 915194));
                                          return (t) => (0, i.jsx)(e, { ...t });
                                      }),
                                  children: eI.Z.Messages.LEARN_MORE
                              })
                          ]
                      });
                  case eu.kVF.DISPATCH_INSTALL_SCRIPT_PROGRESS:
                      if (null == ec.metadata) return null;
                      let { progress: eB, total: ek, name: eG } = ec.metadata;
                      return (0, i.jsxs)(c.Notice, {
                          color: c.NoticeColors.DEFAULT,
                          children: [
                              (0, i.jsx)(c.NoticeCloseButton, {
                                  onClick: () => eN(),
                                  noticeType: eu.kVF.DISPATCH_INSTALL_SCRIPT_PROGRESS
                              }),
                              (0, i.jsxs)(M.Z, {
                                  justify: M.Z.Justify.CENTER,
                                  children: [
                                      null != eG
                                          ? eI.Z.Messages.NOTICE_DISPATCH_INSTALL_SCRIPT_PROGRESS_WITH_NAME.format({
                                                name: ''.concat(eG),
                                                progress: ''.concat(eB),
                                                total: ''.concat(ek)
                                            })
                                          : eI.Z.Messages.NOTICE_DISPATCH_INSTALL_SCRIPT_PROGRESS.format({
                                                progress: ''.concat(eB),
                                                total: ''.concat(ek)
                                            }),
                                      (0, i.jsx)(c.Spinner, {
                                          type: c.Spinner.Type.PULSING_ELLIPSIS,
                                          className: em.ellipsis
                                      })
                                  ]
                              })
                          ]
                      });
                  case eu.kVF.APPLICATION_TEST_MODE:
                      if (null == ec.metadata) return null;
                      if (null != ei.Z.testModeEmbeddedApplicationId)
                          return (0, i.jsx)(c.Notice, {
                              color: c.NoticeColors.WARNING,
                              children: (0, i.jsxs)(M.Z, {
                                  justify: M.Z.Justify.CENTER,
                                  align: M.Z.Align.CENTER,
                                  children: [
                                      (0, i.jsx)('div', { children: eI.Z.Messages.NOTICE_EMBEDDED_APPLICATION_TEST_MODE.format({ applicationName: ec.metadata.applicationName }) }),
                                      (0, i.jsx)(c.NoticeCloseButton, {
                                          onClick: p.mc,
                                          noticeType: eu.kVF.APPLICATION_TEST_MODE
                                      })
                                  ]
                              })
                          });
                      return (0, i.jsx)(c.Notice, {
                          color: c.NoticeColors.WARNING,
                          children: (0, i.jsxs)(M.Z, {
                              justify: M.Z.Justify.CENTER,
                              align: M.Z.Align.CENTER,
                              children: [
                                  (0, i.jsx)('div', { children: eI.Z.Messages.NOTICE_APPLICATION_TEST_MODE.format({ applicationName: ec.metadata.applicationName }) }),
                                  (0, i.jsx)(eo.Z, {
                                      dropdownSize: eo.E.DropdownSizes.SMALL,
                                      className: em.testModeSKUSelector,
                                      color: eo.E.Colors.WHITE,
                                      look: eo.E.Looks.OUTLINED,
                                      size: eo.E.Sizes.MIN,
                                      onSKUSelect: (e) =>
                                          N.yt(e.id, {
                                              analyticsSource: {
                                                  page: null,
                                                  section: eu.jXE.NOTIFICATION_BAR,
                                                  object: eu.qAy.NAVIGATION_LINK
                                              }
                                          }),
                                      applicationId: ec.metadata.applicationId,
                                      children: eI.Z.Messages.NOTICE_APPLICATION_TEST_MODE_GO_TO_LISTING
                                  }),
                                  (0, i.jsx)(c.NoticeCloseButton, {
                                      onClick: p.mc,
                                      noticeType: eu.kVF.APPLICATION_TEST_MODE
                                  })
                              ]
                          })
                      });
                  case eu.kVF.OUTBOUND_PROMOTION:
                      return (0, i.jsx)(Y.Z, {});
                  case eu.kVF.VIEWING_ROLES:
                      return (0, i.jsx)(F.Z, {});
                  case eu.kVF.PREMIUM_UNCANCEL:
                      return (0, i.jsxs)(c.Notice, {
                          color: eA === ed.p9.TIER_1 ? c.NoticeColors.PREMIUM_TIER_1 : eA === ed.p9.TIER_0 ? c.NoticeColors.PREMIUM_TIER_0 : c.NoticeColors.PREMIUM_TIER_2,
                          children: [
                              (0, i.jsx)(c.NoticeCloseButton, {
                                  noticeType: eu.kVF.PREMIUM_UNCANCEL,
                                  onClick: () => {
                                      var e, t;
                                      eN(null === (t = ec.metadata) || void 0 === t ? void 0 : null === (e = t.premiumSubscription) || void 0 === e ? void 0 : e.currentPeriodEnd);
                                  }
                              }),
                              (0, i.jsx)(c.NitroWheelIcon, {
                                  size: 'md',
                                  color: 'currentColor',
                                  className: em.premiumIcon
                              }),
                              eA === ed.p9.TIER_1 ? eI.Z.Messages.PREMIUM_SUBSCRIPTION_ENDING_TIER_1_NOTICE_TEXT.format({ daysLeft: ec.metadata.daysLeft }) : eA === ed.p9.TIER_0 ? eI.Z.Messages.PREMIUM_SUBSCRIPTION_ENDING_TIER_0_NOTICE_TEXT.format({ daysLeft: ec.metadata.daysLeft }) : eI.Z.Messages.PREMIUM_SUBSCRIPTION_ENDING_NOTICE_TEXT.format({ daysLeft: ec.metadata.daysLeft }),
                              (0, i.jsx)(c.PrimaryCTANoticeButton, {
                                  noticeType: eu.kVF.PREMIUM_UNCANCEL,
                                  onClick: () => {
                                      var e, t;
                                      eN(null === (t = ec.metadata) || void 0 === t ? void 0 : null === (e = t.premiumSubscription) || void 0 === e ? void 0 : e.currentPeriodEnd),
                                          (0, c.openModalLazy)(async () => {
                                              let { default: e } = await Promise.all([n.e('52249'), n.e('47006'), n.e('8016'), n.e('68136'), n.e('52362')]).then(n.bind(n, 561623));
                                              return (t) =>
                                                  (0, i.jsx)(e, {
                                                      ...t,
                                                      daysLeft: ec.metadata.daysLeft,
                                                      premiumType: eA,
                                                      analyticsSource: 'Nag Bar',
                                                      premiumSubscription: ec.metadata.premiumSubscription
                                                  });
                                          });
                                  },
                                  children: eA === ed.p9.TIER_1 ? eI.Z.Messages.PREMIUM_SUBSCRIPTION_ENDING_TIER_1_NOTICE_BUTTON_TEXT : eA === ed.p9.TIER_0 ? eI.Z.Messages.PREMIUM_SUBSCRIPTION_ENDING_TIER_0_NOTICE_BUTTON_TEXT : eI.Z.Messages.PREMIUM_SUBSCRIPTION_ENDING_NOTICE_BUTTON_TEXT
                              })
                          ]
                      });
                  case eu.kVF.PREMIUM_PAST_DUE_ONE_TIME_PAYMENT:
                      let { daysPastDue: eF, dismissUntil: ew } = ec.metadata;
                      return (0, i.jsxs)(c.Notice, {
                          color: c.NoticeColors.WARNING,
                          children: [
                              (0, i.jsx)(c.NoticeCloseButton, {
                                  noticeType: ep,
                                  onClick: () => {
                                      eN(ew);
                                  }
                              }),
                              eI.Z.Messages.PREMIUM_SUBSCRIPTION_ONE_TIME_PAYMENT_PAST_DUE_SUBSCRIPTION_TEXT_NO_ACTION.format({ daysPastDue: eF }),
                              (0, i.jsx)(c.PrimaryCTANoticeButton, {
                                  noticeType: eu.kVF.PREMIUM_PAST_DUE_ONE_TIME_PAYMENT,
                                  onClick: () => {
                                      eN(ew), g.Z.open(eu.oAB.SUBSCRIPTIONS);
                                  },
                                  children: eI.Z.Messages.PREMIUM_SUBSCRIPTION_PAST_DUE_RENEW_NOW_BUTTON_TEXT
                              })
                          ]
                      });
                  case eu.kVF.PREMIUM_PAST_DUE_INVALID_PAYMENT:
                      return (0, i.jsxs)(c.Notice, {
                          color: c.NoticeColors.DANGER,
                          children: [
                              (0, i.jsx)(c.NoticeCloseButton, {
                                  noticeType: eu.kVF.PREMIUM_PAST_DUE_INVALID_PAYMENT,
                                  onClick: () => {
                                      var e, t;
                                      eN(null === (t = ec.metadata) || void 0 === t ? void 0 : null === (e = t.premiumSubscription) || void 0 === e ? void 0 : e.currentPeriodEnd);
                                  }
                              }),
                              eI.Z.Messages.PREMIUM_SUBSCRIPTION_PAST_DUE_INVALID_PAYMENT_NOTICE_TEXT,
                              (0, i.jsx)(c.PrimaryCTANoticeButton, {
                                  noticeType: eu.kVF.PREMIUM_PAST_DUE_INVALID_PAYMENT,
                                  onClick: () => {
                                      var e, t;
                                      eN(null === (t = ec.metadata) || void 0 === t ? void 0 : null === (e = t.premiumSubscription) || void 0 === e ? void 0 : e.currentPeriodEnd), g.Z.open(eu.oAB.SUBSCRIPTIONS);
                                  },
                                  children: eI.Z.Messages.PREMIUM_SUBSCRIPTION_PAST_DUE_INVALID_PAYMENT_NOTICE_BUTTON_TEXT
                              })
                          ]
                      });
                  case eu.kVF.PREMIUM_PAST_DUE_MISSING_PAYMENT:
                      return (0, i.jsxs)(c.Notice, {
                          color: c.NoticeColors.WARNING,
                          children: [
                              (0, i.jsx)(c.NoticeCloseButton, {
                                  noticeType: eu.kVF.PREMIUM_PAST_DUE_MISSING_PAYMENT,
                                  onClick: () => {
                                      var e, t;
                                      eN(null === (t = ec.metadata) || void 0 === t ? void 0 : null === (e = t.premiumSubscription) || void 0 === e ? void 0 : e.currentPeriodEnd);
                                  }
                              }),
                              eI.Z.Messages.PREMIUM_SUBSCRIPTION_PAST_DUE_MISSING_PAYMENT_NOTICE_TEXT,
                              (0, i.jsx)(c.PrimaryCTANoticeButton, {
                                  noticeType: eu.kVF.PREMIUM_PAST_DUE_MISSING_PAYMENT,
                                  onClick: () => {
                                      var e, t;
                                      eN(null === (t = ec.metadata) || void 0 === t ? void 0 : null === (e = t.premiumSubscription) || void 0 === e ? void 0 : e.currentPeriodEnd), g.Z.open(eu.oAB.SUBSCRIPTIONS);
                                  },
                                  children: eI.Z.Messages.PREMIUM_SUBSCRIPTION_PAST_DUE_MISSING_PAYMENT_NOTICE_BUTTON_TEXT
                              })
                          ]
                      });
                  case eu.kVF.PREMIUM_MISSING_PAYMENT:
                      return (0, i.jsxs)(c.Notice, {
                          color: c.NoticeColors.WARNING,
                          children: [
                              (0, i.jsx)(c.NoticeCloseButton, {
                                  noticeType: eu.kVF.PREMIUM_MISSING_PAYMENT,
                                  onClick: () => {
                                      var e, t;
                                      eN(null === (t = ec.metadata) || void 0 === t ? void 0 : null === (e = t.premiumSubscription) || void 0 === e ? void 0 : e.currentPeriodEnd);
                                  }
                              }),
                              eA === ed.p9.TIER_1 ? eI.Z.Messages.PREMIUM_SUBSCRIPTION_ENDING_MISSING_PAYMENT_TIER_1_NOTICE_TEXT.format({ daysLeft: ec.metadata.daysLeft }) : eA === ed.p9.TIER_0 ? eI.Z.Messages.PREMIUM_SUBSCRIPTION_ENDING_MISSING_PAYMENT_TIER_0_NOTICE_TEXT.format({ daysLeft: ec.metadata.daysLeft }) : eI.Z.Messages.PREMIUM_SUBSCRIPTION_ENDING_MISSING_PAYMENT_NOTICE_TEXT.format({ daysLeft: ec.metadata.daysLeft }),
                              (0, i.jsx)(c.PrimaryCTANoticeButton, {
                                  noticeType: eu.kVF.PREMIUM_MISSING_PAYMENT,
                                  onClick: () => {
                                      var e, t;
                                      eN(null === (t = ec.metadata) || void 0 === t ? void 0 : null === (e = t.premiumSubscription) || void 0 === e ? void 0 : e.currentPeriodEnd), g.Z.open(eu.oAB.SUBSCRIPTIONS);
                                  },
                                  children: eA === ed.p9.TIER_1 ? eI.Z.Messages.PREMIUM_SUBSCRIPTION_ENDING_MISSING_PAYMENT_TIER_1_NOTICE_BUTTON_TEXT : eA === ed.p9.TIER_0 ? eI.Z.Messages.PREMIUM_SUBSCRIPTION_ENDING_MISSING_PAYMENT_TIER_0_NOTICE_BUTTON_TEXT : eI.Z.Messages.PREMIUM_SUBSCRIPTION_ENDING_MISSING_PAYMENT_NOTICE_BUTTON_TEXT
                              })
                          ]
                      });
                  case eu.kVF.BACK_TO_PREVIOUS_SCREEN:
                      return (0, i.jsx)(k.h, {
                          buttonText: null !== (s = ec.buttonText) && void 0 !== s ? s : eI.Z.Messages.GO_BACK,
                          onGoBack: ec.callback,
                          onDismiss: () => eN(),
                          showCloseButton: !0
                      });
                  case eu.kVF.AUTOMOD_QUARANTINED_USER_PROFILE: {
                      let e = { page: eu.ZY5.IN_APP };
                      return (0, i.jsx)(j.Z, {
                          guildId: A,
                          analyticsLocations: eC,
                          analyticsLocation: e
                      });
                  }
                  case eu.kVF.QUARANTINED:
                      return (0, i.jsxs)(c.Notice, {
                          color: c.NoticeColors.CUSTOM,
                          className: em.quarantineNotice,
                          children: [
                              eI.Z.Messages.LIMITED_ACCESS_NAG_BAR_NOTICE,
                              (0, i.jsx)(c.NoticeButtonAnchor, {
                                  href: e_.Z,
                                  target: '_blank',
                                  children: eI.Z.Messages.LIMITED_ACCESS_NAG_BAR_APPEAL
                              }),
                              (0, i.jsx)(c.Anchor, {
                                  href: er.Z.getArticleURL(eu.BhN.QUARANTINE),
                                  target: '_blank',
                                  className: em.quarantineLearnMoreLink,
                                  children: eI.Z.Messages.LEARN_MORE
                              })
                          ]
                      });
                  case eu.kVF.BLOCKED_BY_PROXY:
                      return (0, i.jsxs)(c.Notice, {
                          color: c.NoticeColors.WARNING,
                          children: [
                              eI.Z.Messages.BLOCKED_BY_PROXY_NOTICE,
                              (0, i.jsx)(c.NoticeButtonAnchor, {
                                  href: ''.concat(eu.yXt.STATUS),
                                  children: eI.Z.Messages.LEARN_MORE
                              }),
                              (0, i.jsx)(c.NoticeCloseButton, {
                                  onClick: () => eN(),
                                  noticeType: eu.kVF.BLOCKED_BY_PROXY
                              })
                          ]
                      });
                  case eu.kVF.DROPS_PROGRESS_INTERRUPTION:
                      return (0, i.jsxs)(c.Notice, {
                          color: c.NoticeColors.DANGER,
                          children: [
                              eI.Z.Messages.DROPS_PROGRESS_INTERRUPTION_WARNING.format({ gameTitle: ec.metadata.gameTitle }),
                              (0, i.jsx)(c.NoticeButton, {
                                  onClick: ec.metadata.reloadCallback,
                                  children: eI.Z.Messages.ERRORS_RESTART_APP
                              })
                          ]
                      });
                  case eu.kVF.AUTO_MODERATION_MENTION_RAID_DETECTION:
                      let { dismissUntil: eV, decisionId: eH } = ec.metadata;
                      return (0, i.jsxs)(c.Notice, {
                          color: c.NoticeColors.WARNING,
                          children: [
                              (0, i.jsx)(c.NoticeCloseButton, {
                                  noticeType: eu.kVF.AUTO_MODERATION_MENTION_RAID_DETECTION,
                                  onClick: () => {
                                      null != A && (0, D.T9)(A), eN(eV);
                                  }
                              }),
                              eI.Z.Messages.GUILD_AUTOMOD_MENTION_SPAM_NOTICE_MESSAGE,
                              (0, i.jsx)(c.NoticeButton, {
                                  onClick: () => {
                                      null != A &&
                                          (0, D.UE)(A, eH, () => {
                                              eN(eV), (0, D.T9)(A);
                                          });
                                  },
                                  children: eI.Z.Messages.GUILD_AUTOMOD_MENTION_SPAM_NOTICE_REMOVE_RESTRICTION
                              }),
                              null != A
                                  ? (0, i.jsx)(c.NoticeButton, {
                                        onClick: () => G.Z.open(A, eu.pNK.GUILD_AUTOMOD, void 0, eu.KsC.AUTOMOD_MENTION_SPAM),
                                        children: eI.Z.Messages.GUILD_AUTOMOD_MENTION_SPAM_NOTICE_CONFIGURE_SETTINGS
                                    })
                                  : null
                          ]
                      });
                  case eu.kVF.SAFETY_USER_SENTIMENT_NAGBAR:
                      return (0, i.jsxs)(c.Notice, {
                          color: c.NoticeColors.BRAND,
                          children: [
                              (0, i.jsx)(c.NoticeCloseButton, {
                                  noticeType: eu.kVF.SAFETY_USER_SENTIMENT_NAGBAR,
                                  onClick: () => {
                                      z.hZ(), eN();
                                  }
                              }),
                              eI.Z.Messages.SAFETY_USER_SENTIMENT_NOTICE,
                              (0, i.jsx)(c.PrimaryCTANoticeButton, {
                                  noticeType: eu.kVF.SAFETY_USER_SENTIMENT_NAGBAR,
                                  onClick: () => {
                                      (0, c.openModalLazy)(async () => {
                                          let { default: e } = await n.e('52432').then(n.bind(n, 349994));
                                          return (t) => (0, i.jsx)(e, { ...t });
                                      }),
                                          z.hZ(),
                                          eN();
                                  },
                                  children: eI.Z.Messages.SAFETY_USER_SENTIMENT_NOTICE_CTA
                              })
                          ]
                      });
                  case eu.kVF.PREMIUM_TIER_2_TRIAL_ENDING:
                      let eY = r()().add(5, 'days').toDate();
                      return (0, i.jsx)(W.Z, {
                          dismissCurrentNotice: () => {
                              (0, v.EW)(ea.m[eu.kVF.PREMIUM_TIER_2_TRIAL_ENDING]), eN(eY);
                          },
                          subscriptionTier: ed.Si.TIER_2
                      });
                  case eu.kVF.QUESTS_PROGRESS_INTERRUPTION:
                      return (0, i.jsxs)(c.Notice, {
                          color: c.NoticeColors.DANGER,
                          children: [
                              (0, i.jsx)(c.NoticeCloseButton, {
                                  noticeType: eu.kVF.QUESTS_PROGRESS_INTERRUPTION,
                                  onClick: () => {
                                      var e;
                                      (null === (e = ec.metadata) || void 0 === e ? void 0 : e.streamKey) != null && (0, K.nE)(ec.metadata.streamKey);
                                  }
                              }),
                              eI.Z.Messages.QUESTS_PROGRESS_TRACKING_FAILURE_NOTICE
                          ]
                      });
                  default:
                      return null;
              }
          })
        : null;
function eC() {
    let { analyticsLocations: e } = (0, R.ZP)(A.Z.NOTICE);
    return (0, i.jsx)(R.Gt, {
        value: e,
        children: (0, i.jsx)(ef, {})
    });
}
