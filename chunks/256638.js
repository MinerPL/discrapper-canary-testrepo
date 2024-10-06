n.d(t, {
    Z: function () {
        return ef;
    },
    c: function () {
        return eC;
    }
});
var i = n(735250),
    a = n(470079),
    s = n(913527),
    l = n.n(s),
    r = n(613828),
    o = n(442837),
    c = n(481060),
    d = n(668781),
    u = n(846027),
    _ = n(893776),
    E = n(117266),
    I = n(37234),
    m = n(254854),
    T = n(195500),
    N = n(287734),
    h = n(205355),
    C = n(558381),
    p = n(223245),
    f = n(491428),
    g = n(401430),
    A = n(230711),
    S = n(726542),
    M = n(100527),
    x = n(906732),
    O = n(812206),
    R = n(391650),
    v = n(600164),
    L = n(605236),
    Z = n(749277),
    P = n(492435),
    D = n(353926),
    b = n(506357),
    j = n(36459),
    U = n(236069),
    y = n(305325),
    B = n(281956),
    k = n(574650),
    G = n(665302),
    F = n(434404),
    w = n(918658),
    V = n(859428),
    H = n(963249),
    Y = n(774276),
    W = n(14335),
    K = n(246965),
    z = n(272008),
    X = n(523255),
    Q = n(852923),
    J = n(592125),
    q = n(430824),
    $ = n(131951),
    ee = n(19780),
    et = n(914010),
    en = n(594174),
    ei = n(55563),
    ea = n(695103),
    es = n(933429),
    el = n(626135),
    er = n(63063),
    eo = n(72924),
    ec = n(69499),
    ed = n(912193),
    eu = n(981631),
    e_ = n(474936),
    eE = n(610674),
    eI = n(65154),
    em = n(689938),
    eT = n(569252);
let eN = () =>
        (0, i.jsxs)(c.Notice, {
            color: c.NoticeColors.DANGER,
            children: [
                (0, i.jsx)(c.NoticeCloseButton, {
                    onClick: () => {
                        eC(), (0, ed.b)();
                    }
                }),
                em.Z.Messages.NOTICE_NO_INPUT_DETECTED,
                (0, i.jsx)(c.NoticeButtonAnchor, {
                    href: er.Z.getArticleURL(eu.BhN.NO_INPUT_DETECTED),
                    children: em.Z.Messages.NOTICE_NO_INPUT_DETECTED_HELP_LINK_TEXT
                })
            ]
        }),
    eh = () =>
        (0, i.jsxs)(c.Notice, {
            color: c.NoticeColors.DANGER,
            children: [
                (0, i.jsx)(c.NoticeCloseButton, {
                    onClick: () => {
                        eC(), (0, ed.b)();
                    }
                }),
                em.Z.Messages.NOTICE_NO_INPUT_DETECTED_SETTINGS,
                (0, i.jsx)(c.NoticeButton, {
                    onClick: () => {
                        (0, I.jN)(eu.S9g.USER_SETTINGS), A.Z.setSection(eu.oAB.VOICE);
                    },
                    children: em.Z.Messages.NOTICE_NO_INPUT_DETECTED_SETTINGS_LINK_TEXT
                })
            ]
        });
function eC(e) {
    m.Z.dismiss(null != e ? { untilAtLeast: l()(e) } : void 0);
}
let ep =
    12633 == n.j
        ? a.memo(function () {
              var e, t, s;
              let m = (0, o.e7)([en.default], () => en.default.getCurrentUser()),
                  M = (0, o.e7)([et.Z], () => et.Z.getGuildId()),
                  ed = (0, o.e7)([es.Z], () => es.Z.getNotice()),
                  ep = (0, o.e7)([q.Z], () => q.Z.getGuild(M)),
                  { analyticsLocations: ef } = (0, x.ZP)(),
                  eg = null == ed ? void 0 : ed.type,
                  eA = (0, B.J)(M);
              a.useEffect(() => {
                  null != eg &&
                      !(function (e, t) {
                          let n = { notice_type: e };
                          null != t && (n.guild_id = t), el.default.track(eu.rMx.APP_NOTICE_VIEWED, n);
                      })(eg, M);
              }, [eg, M]),
                  a.useEffect(() => {
                      if (null != ed && ed.type === eu.kVF.SURVEY && null != ed.metadata) {
                          let { metadata: e } = ed,
                              t = D.Z.getUserExperimentDescriptor(e.id);
                          null != t && (0, P.W9)(e.id, t),
                              (async () => {
                                  var e, t;
                                  (null === (e = ed.metadata) || void 0 === e ? void 0 : e.id) != null && (await (0, f.g8)(null === (t = ed.metadata) || void 0 === t ? void 0 : t.id));
                              })();
                      }
                  }, [ed]);
              let eS = (function (e) {
                  let { enabled: t } = (0, Y.ZP)(!0, e !== eu.kVF.PREMIUM_TIER_2_TRIAL_ENDING);
                  return t || null == e ? null : es.m[e];
              })(eg);
              if (null == ed) return null;
              if (null != eS)
                  return (0, i.jsx)(Z.A, {
                      dismissibleContent: eS,
                      noticeType: ed.type
                  });
              let eM = null === (e = ed.metadata) || void 0 === e ? void 0 : e.premiumType;
              switch (ed.type) {
                  case eu.kVF.LURKING_GUILD:
                      return (0, i.jsx)(V.Z, {});
                  case eu.kVF.PENDING_MEMBER:
                      return (0, i.jsx)(k.Z, {});
                  case eu.kVF.INVITED_TO_SPEAK:
                      return (0, i.jsx)(Q.Z, {});
                  case eu.kVF.GUILD_RAID_NOTIFICATION:
                      let { dismissUntil: ex } = ed.metadata;
                      return (0, i.jsx)(b.Z, { onDismiss: () => eC(ex) });
                  case eu.kVF.WIN32_DEPRECATED_MESSAGE:
                      let { dismissUntil: eO } = ed.metadata;
                      return (0, i.jsxs)(c.Notice, {
                          color: c.NoticeColors.WARNING,
                          children: [
                              (0, i.jsx)(c.NoticeCloseButton, {
                                  onClick: () => eC(eO),
                                  noticeType: eu.kVF.WIN32_DEPRECATED_MESSAGE
                              }),
                              em.Z.Messages.WINDOWS_32_BIT_DEPRECATED_WARNING.format({ helpCenterLink: er.Z.getArticleURL(eu.BhN.WIN32_DEPRECATE) })
                          ]
                      });
                  case eu.kVF.WIN7_8_DEPRECATED_MESSAGE:
                      let { dismissUntil: eR } = ed.metadata;
                      return (0, i.jsxs)(c.Notice, {
                          color: c.NoticeColors.WARNING,
                          children: [
                              (0, i.jsx)(c.NoticeCloseButton, {
                                  onClick: () => eC(eR),
                                  noticeType: eu.kVF.WIN7_8_DEPRECATED_MESSAGE
                              }),
                              em.Z.Messages.WINDOWS_7_8_DEPRECATED_WARNING.format({ helpCenterLink: er.Z.getArticleURL(eu.BhN.WIN7_8_DEPRECATE) })
                          ]
                      });
                  case eu.kVF.MACOS_17_18_DEPRECATED_MESSAGE:
                      let { dismissUntil: ev } = ed.metadata;
                      return (0, i.jsxs)(c.Notice, {
                          color: c.NoticeColors.WARNING,
                          children: [
                              (0, i.jsx)(c.NoticeCloseButton, {
                                  onClick: () => eC(ev),
                                  noticeType: eu.kVF.MACOS_17_18_DEPRECATED_MESSAGE
                              }),
                              em.Z.Messages.MACOS_DEPRECATED_WARNING.format({ helpCenterLink: er.Z.getArticleURL(eu.BhN.MACOS_17_18_DEPRECATE) })
                          ]
                      });
                  case eu.kVF.GENERIC:
                      return (0, i.jsxs)(c.Notice, {
                          color: c.NoticeColors.DEFAULT,
                          children: [
                              (0, i.jsx)(c.NoticeCloseButton, {
                                  onClick: () => eC(),
                                  noticeType: eu.kVF.GENERIC
                              }),
                              ed.message,
                              null != ed.buttonText
                                  ? (0, i.jsx)(c.PrimaryCTANoticeButton, {
                                        onClick: ed.callback,
                                        noticeType: eu.kVF.GENERIC,
                                        children: ed.buttonText
                                    })
                                  : null
                          ]
                      });
                  case eu.kVF.LAUNCH_GAME_FAILURE:
                      return (0, i.jsxs)(c.Notice, {
                          color: c.NoticeColors.DANGER,
                          children: [
                              (0, i.jsx)(c.NoticeCloseButton, {
                                  onClick: () => eC(),
                                  noticeType: eu.kVF.LAUNCH_GAME_FAILURE
                              }),
                              ed.message,
                              null != ed.buttonText
                                  ? (0, i.jsx)(c.PrimaryCTANoticeButton, {
                                        onClick: ed.callback,
                                        noticeType: eu.kVF.LAUNCH_GAME_FAILURE,
                                        children: ed.buttonText
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
                                      T.Z.clearRemoteDisconnectVoiceChannelId(), eC();
                                  },
                                  noticeType: eu.kVF.VOICE_DISABLED
                              }),
                              em.Z.Messages.NOTICE_CONNECTION_CONFLICT,
                              (0, i.jsx)(c.PrimaryCTANoticeButton, {
                                  onClick: () => {
                                      let e = ee.Z.getRemoteDisconnectVoiceChannelId();
                                      null != e && null != J.Z.getChannel(e) && N.default.selectVoiceChannel(e);
                                  },
                                  noticeType: eu.kVF.VOICE_DISABLED,
                                  children: em.Z.Messages.RECONNECT
                              })
                          ]
                      });
                  case eu.kVF.VOICE_CONNECTED_LAST_SESSION:
                      return (0, i.jsxs)(c.Notice, {
                          color: c.NoticeColors.DEFAULT,
                          children: [
                              (0, i.jsx)(c.NoticeCloseButton, {
                                  onClick: () => {
                                      T.Z.clearLastSessionVoiceChannelId(), eC();
                                  },
                                  noticeType: eu.kVF.VOICE_CONNECTED_LAST_SESSION
                              }),
                              em.Z.Messages.NOTICE_VOICE_CONNECTED_LAST_SESSION,
                              (0, i.jsx)(c.PrimaryCTANoticeButton, {
                                  onClick: () => {
                                      let e = ee.Z.getLastSessionVoiceChannelId();
                                      null != e && null != J.Z.getChannel(e) && N.default.selectVoiceChannel(e);
                                  },
                                  noticeType: eu.kVF.VOICE_CONNECTED_LAST_SESSION,
                                  children: em.Z.Messages.RECONNECT
                              })
                          ]
                      });
                  case eu.kVF.SPOTIFY_AUTO_PAUSED:
                      let eL = S.Z.get(eu.ABu.SPOTIFY);
                      return (0, i.jsxs)(c.Notice, {
                          color: c.NoticeColors.DANGER,
                          children: [
                              (0, i.jsx)(c.NoticeCloseButton, {
                                  onClick: () => eC(),
                                  noticeType: eu.kVF.SPOTIFY_AUTO_PAUSED
                              }),
                              (0, i.jsx)('img', {
                                  alt: '',
                                  className: eT.platformIcon,
                                  src: eL.icon.whiteSVG
                              }),
                              em.Z.Messages.NOTICE_SPOTIFY_AUTO_PAUSED,
                              (0, i.jsx)(c.PrimaryCTANoticeButton, {
                                  onClick: () => A.Z.open(eu.oAB.VOICE),
                                  noticeType: eu.kVF.SPOTIFY_AUTO_PAUSED,
                                  children: em.Z.Messages.VOICE_SETTINGS
                              }),
                              (0, i.jsx)(c.Anchor, {
                                  className: eT.textLinkSmall,
                                  href: er.Z.getArticleURL(eu.BhN.SPOTIFY_AUTO_PAUSED),
                                  target: '_blank',
                                  children: em.Z.Messages.NOTICE_WHATS_THIS
                              })
                          ]
                      });
                  case eu.kVF.UNCLAIMED_ACCOUNT:
                      return (0, i.jsxs)(c.Notice, {
                          color: c.NoticeColors.DEFAULT,
                          children: [
                              em.Z.Messages.NOTICE_UNCLAIMED_ACCOUNT,
                              (0, i.jsx)(c.PrimaryCTANoticeButton, {
                                  noticeType: eu.kVF.UNCLAIMED_ACCOUNT,
                                  onClick: () => (eA && null != M ? (0, y.hk)(M) : R.j()),
                                  children: em.Z.Messages.CLAIM_ACCOUNT
                              })
                          ]
                      });
                  case eu.kVF.UNVERIFIED_ACCOUNT:
                      return (0, i.jsxs)(c.Notice, {
                          color: c.NoticeColors.DEFAULT,
                          children: [
                              em.Z.Messages.NOTICE_UNVERIFIED_ACCOUNT_UU,
                              (0, i.jsx)(c.PrimaryCTANoticeButton, {
                                  noticeType: eu.kVF.UNVERIFIED_ACCOUNT,
                                  onClick: () => {
                                      _.Z.verifyResend(),
                                          d.Z.show({
                                              title: em.Z.Messages.VERIFICATION_EMAIL_TITLE,
                                              body: em.Z.Messages.VERIFICATION_EMAIL_BODY.format({ email: null == m ? void 0 : m.email }),
                                              secondaryConfirmText: em.Z.Messages.CHANGE_EMAIL,
                                              onConfirmSecondary: R.j
                                          });
                                  },
                                  children: em.Z.Messages.RESEND_EMAIL_SHORT
                              })
                          ]
                      });
                  case eu.kVF.SCHEDULED_MAINTENANCE:
                      if (null == ed.metadata) return null;
                      return (0, i.jsxs)(c.Notice, {
                          color: c.NoticeColors.DEFAULT,
                          children: [
                              (0, i.jsx)(c.NoticeCloseButton, {
                                  onClick: () => h.Z.ackScheduledMaintenance(),
                                  noticeType: eu.kVF.SCHEDULED_MAINTENANCE
                              }),
                              em.Z.Messages.NOTICE_SCHEDULED_MAINTENANCE.format(ed.metadata),
                              (0, i.jsx)(c.NoticeButtonAnchor, {
                                  href: ''.concat(eu.yXt.STATUS, '/incidents/').concat(ed.metadata.id),
                                  children: em.Z.Messages.LEARN_MORE
                              })
                          ]
                      });
                  case eu.kVF.NO_INPUT_DETECTED:
                      if (!$.Z.supports(eI.AN.LOOPBACK)) return (0, i.jsx)(eN, {});
                      return (0, i.jsx)(eh, {});
                  case eu.kVF.HARDWARE_MUTE:
                      if (null == ed.metadata) return null;
                      let { vendor: eZ, model: eP } = ed.metadata;
                      return (0, i.jsxs)(c.Notice, {
                          color: c.NoticeColors.DANGER,
                          children: [
                              em.Z.Messages.NOTICE_HARDWARE_MUTE.format({
                                  vendorName: eZ.name,
                                  modelName: eP.name
                              }),
                              (0, i.jsx)(c.NoticeCloseButton, {
                                  onClick: () => {
                                      u.Z.setEnableHardwareMuteNotice(!1), eC();
                                  }
                              }),
                              (0, i.jsx)(c.NoticeButtonAnchor, {
                                  href: eP.url,
                                  target: '_blank',
                                  rel: 'noreferrer noopener',
                                  children: em.Z.Messages.SUPPORT
                              })
                          ]
                      });
                  case eu.kVF.STREAMER_MODE:
                      return (0, i.jsxs)(c.Notice, {
                          color: c.NoticeColors.STREAMER_MODE,
                          children: [
                              (0, i.jsx)(c.NoticeCloseButton, {
                                  onClick: () => eC(),
                                  noticeType: eu.kVF.STREAMER_MODE
                              }),
                              em.Z.Messages.NOTICE_STREAMER_MODE_TEXT,
                              (0, i.jsx)(c.PrimaryCTANoticeButton, {
                                  onClick: () => p.Z.setEnabled(!1),
                                  noticeType: eu.kVF.STREAMER_MODE,
                                  children: em.Z.Messages.DISABLE
                              })
                          ]
                      });
                  case eu.kVF.H264_DISABLED:
                      return (0, i.jsxs)(c.Notice, {
                          color: c.NoticeColors.DANGER,
                          children: [
                              (0, i.jsx)(c.NoticeCloseButton, {
                                  onClick: () => {
                                      eC();
                                  }
                              }),
                              em.Z.Messages.NOTICE_H264_DISABLED_SETTINGS,
                              (0, i.jsx)(c.NoticeButton, {
                                  onClick: () => {
                                      (0, I.jN)(eu.S9g.USER_SETTINGS), A.Z.setSection(eu.oAB.VOICE);
                                  },
                                  children: em.Z.Messages.NOTICE_H264_DISABLED_SETTINGS_LINK_TEXT
                              })
                          ]
                      });
                  case eu.kVF.DETECTED_OFF_PLATFORM_PREMIUM_PERK:
                      if (null == ed.metadata) return null;
                      let { skuId: eD, applicationId: eb } = ed.metadata,
                          ej = ei.Z.get(eD),
                          eU = O.Z.getApplication(eb);
                      if (null == ej || null == eU) return null;
                      let ey = { page: eu.ZY5.IN_APP };
                      return (0, i.jsxs)(c.Notice, {
                          color: c.NoticeColors.PREMIUM_TIER_1,
                          children: [
                              (0, i.jsx)(c.NoticeCloseButton, {
                                  onClick: () => E.Z(ej.id),
                                  noticeType: eu.kVF.DETECTED_OFF_PLATFORM_PREMIUM_PERK
                              }),
                              (0, i.jsx)(c.NitroWheelIcon, {
                                  size: 'md',
                                  color: 'currentColor',
                                  className: eT.premiumIcon
                              }),
                              em.Z.Messages.NOTICE_DETECTED_OFF_PLATFORM_PREMIUM_PERK_MESSAGE.format({
                                  applicationName: eU.name,
                                  skuName: ej.name
                              }),
                              (0, i.jsx)(c.PrimaryCTANoticeButton, {
                                  noticeType: eu.kVF.DETECTED_OFF_PLATFORM_PREMIUM_PERK,
                                  onClick: () =>
                                      (0, eo.S)({
                                          applicationId: eU.id,
                                          skuId: ej.id,
                                          openPremiumPaymentModal: () => {
                                              (0, H.Z)({
                                                  initialPlanId: null,
                                                  subscriptionTier: e_.Si.TIER_2,
                                                  analyticsLocations: ef,
                                                  analyticsObject: ey
                                              });
                                          },
                                          analyticsLocations: ef,
                                          analyticsLocationObject: ey,
                                          context: __OVERLAY__ ? eu.IlC.OVERLAY : eu.IlC.APP
                                      }).then(() => E.Z(ej.id)),
                                  children: em.Z.Messages.NOTICE_DETECTED_OFF_PLATFORM_PREMIUM_PERK_BUTTON
                              })
                          ]
                      });
                  case eu.kVF.DETECTED_OFF_PLATFORM_PREMIUM_PERK_UPSELL: {
                      if (null == ed.metadata) return null;
                      let { skuId: e, applicationId: t } = ed.metadata,
                          n = ei.Z.get(e),
                          a = O.Z.getApplication(t);
                      if (null == n || null == a) return null;
                      return (0, i.jsxs)(c.Notice, {
                          color: c.NoticeColors.PREMIUM_TIER_1,
                          children: [
                              (0, i.jsx)(c.NoticeCloseButton, {
                                  onClick: () => eC(),
                                  noticeType: eu.kVF.DETECTED_OFF_PLATFORM_PREMIUM_PERK_UPSELL
                              }),
                              (0, i.jsx)(c.NitroWheelIcon, {
                                  size: 'md',
                                  color: 'currentColor',
                                  className: eT.premiumIcon
                              }),
                              em.Z.Messages.NOTICE_DETECTED_OFF_PLATFORM_NO_PREMIUM_PERK_MESSAGE.format({
                                  applicationName: a.name,
                                  skuName: n.name
                              }),
                              (0, i.jsx)(c.NoticeButton, {
                                  children: (0, i.jsx)(r.rU, {
                                      onClick: () => eC(),
                                      to: {
                                          pathname: eu.Z5c.APPLICATION_STORE_LISTING_SKU(n.id),
                                          state: { scrollRestoration: !1 }
                                      },
                                      children: em.Z.Messages.LEARN_MORE
                                  })
                              })
                          ]
                      });
                  }
                  case eu.kVF.SURVEY: {
                      let e = ed.metadata;
                      if (null == e) return null;
                      let { key: t, prompt: n, cta: a, url: s } = e;
                      return (0, i.jsxs)(c.Notice, {
                          color: c.NoticeColors.CUSTOM,
                          children: [
                              (0, i.jsx)(c.NoticeCloseButton, {
                                  noticeType: eu.kVF.SURVEY,
                                  onClick: () => {
                                      (0, f.hZ)(t, !0);
                                  }
                              }),
                              n,
                              (0, i.jsx)(c.PrimaryCTANoticeButton, {
                                  noticeType: eu.kVF.SURVEY,
                                  onClick: () => {
                                      window.open(s, '_blank'), (0, f.hZ)(t, !1);
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
                                      eC();
                                  }
                              }),
                              em.Z.Messages.SERVER_USAGE_SURVEY_BODY.format({ guildName: null !== (t = null == ep ? void 0 : ep.name) && void 0 !== t ? t : 'this server' }),
                              (0, i.jsx)(c.PrimaryCTANoticeButton, {
                                  noticeType: eu.kVF.SERVER_USAGE_SURVEY,
                                  onClick: () => {
                                      window.open('https://discord.sjc1.qualtrics.com/jfe/form/SV_9AHPmGasQ0EvpdQ?user_id='.concat(null == m ? void 0 : m.id, '&guild_id=').concat(null == ep ? void 0 : ep.id), '_blank'), eC();
                                  },
                                  additionalTrackingProps: { guild_id: null == ep ? void 0 : ep.id },
                                  children: em.Z.Messages.SERVER_USAGE_SURVEY_CTA
                              })
                          ]
                      });
                  case eu.kVF.CORRUPT_INSTALLATION:
                      return (0, i.jsxs)(c.Notice, {
                          color: c.NoticeColors.DANGER,
                          children: [
                              em.Z.Messages.NOTICE_CORRUPT_INSTALLATION,
                              (0, i.jsx)(c.NoticeButtonAnchor, {
                                  href: er.Z.getArticleURL(eu.BhN.CORRUPT_INSTALLATION),
                                  target: '_blank',
                                  children: em.Z.Messages.NOTICE_CORRUPT_INSTALLATION_HELP_LINK_TEXT
                              })
                          ]
                      });
                  case eu.kVF.VIDEO_UNSUPPORTED_BROWSER:
                      return (0, i.jsxs)(c.Notice, {
                          color: c.NoticeColors.WARNING,
                          children: [
                              (0, i.jsx)(c.NoticeCloseButton, {
                                  onClick: () => eC(),
                                  noticeType: eu.kVF.VIDEO_UNSUPPORTED_BROWSER
                              }),
                              em.Z.Messages.VIDEO_UNSUPPORTED_BROWSER_BODY,
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
                                  children: em.Z.Messages.DOWNLOAD
                              })
                          ]
                      });
                  case eu.kVF.DISPATCH_ERROR:
                      if (null == ed.metadata) return null;
                      let { error: eB } = ed.metadata;
                      return (0, i.jsxs)(c.Notice, {
                          color: c.NoticeColors.DANGER,
                          children: [
                              (0, i.jsx)(c.NoticeCloseButton, {
                                  onClick: () => eC(),
                                  noticeType: eu.kVF.DISPATCH_ERROR
                              }),
                              null == eB ? void 0 : eB.displayMessage,
                              (0, i.jsx)(c.PrimaryCTANoticeButton, {
                                  noticeType: eu.kVF.DISPATCH_ERROR,
                                  onClick: () =>
                                      (0, c.openModalLazy)(async () => {
                                          let { default: e } = await n.e('20212').then(n.bind(n, 915194));
                                          return (t) => (0, i.jsx)(e, { ...t });
                                      }),
                                  children: em.Z.Messages.LEARN_MORE
                              })
                          ]
                      });
                  case eu.kVF.DISPATCH_INSTALL_SCRIPT_PROGRESS:
                      if (null == ed.metadata) return null;
                      let { progress: ek, total: eG, name: eF } = ed.metadata;
                      return (0, i.jsxs)(c.Notice, {
                          color: c.NoticeColors.DEFAULT,
                          children: [
                              (0, i.jsx)(c.NoticeCloseButton, {
                                  onClick: () => eC(),
                                  noticeType: eu.kVF.DISPATCH_INSTALL_SCRIPT_PROGRESS
                              }),
                              (0, i.jsxs)(v.Z, {
                                  justify: v.Z.Justify.CENTER,
                                  children: [
                                      null != eF
                                          ? em.Z.Messages.NOTICE_DISPATCH_INSTALL_SCRIPT_PROGRESS_WITH_NAME.format({
                                                name: ''.concat(eF),
                                                progress: ek,
                                                total: eG
                                            })
                                          : em.Z.Messages.NOTICE_DISPATCH_INSTALL_SCRIPT_PROGRESS.format({
                                                progress: ek,
                                                total: eG
                                            }),
                                      (0, i.jsx)(c.Spinner, {
                                          type: c.Spinner.Type.PULSING_ELLIPSIS,
                                          className: eT.ellipsis
                                      })
                                  ]
                              })
                          ]
                      });
                  case eu.kVF.APPLICATION_TEST_MODE:
                      if (null == ed.metadata) return null;
                      if (null != ea.Z.testModeEmbeddedApplicationId)
                          return (0, i.jsx)(c.Notice, {
                              color: c.NoticeColors.WARNING,
                              children: (0, i.jsxs)(v.Z, {
                                  justify: v.Z.Justify.CENTER,
                                  align: v.Z.Align.CENTER,
                                  children: [
                                      (0, i.jsx)('div', { children: em.Z.Messages.NOTICE_EMBEDDED_APPLICATION_TEST_MODE.format({ applicationName: ed.metadata.applicationName }) }),
                                      (0, i.jsx)(c.NoticeCloseButton, {
                                          onClick: g.mc,
                                          noticeType: eu.kVF.APPLICATION_TEST_MODE
                                      })
                                  ]
                              })
                          });
                      return (0, i.jsx)(c.Notice, {
                          color: c.NoticeColors.WARNING,
                          children: (0, i.jsxs)(v.Z, {
                              justify: v.Z.Justify.CENTER,
                              align: v.Z.Align.CENTER,
                              children: [
                                  (0, i.jsx)('div', { children: em.Z.Messages.NOTICE_APPLICATION_TEST_MODE.format({ applicationName: ed.metadata.applicationName }) }),
                                  (0, i.jsx)(ec.Z, {
                                      dropdownSize: ec.E.DropdownSizes.SMALL,
                                      className: eT.testModeSKUSelector,
                                      color: ec.E.Colors.WHITE,
                                      look: ec.E.Looks.OUTLINED,
                                      size: ec.E.Sizes.MIN,
                                      onSKUSelect: (e) =>
                                          C.yt(e.id, {
                                              analyticsSource: {
                                                  page: null,
                                                  section: eu.jXE.NOTIFICATION_BAR,
                                                  object: eu.qAy.NAVIGATION_LINK
                                              }
                                          }),
                                      applicationId: ed.metadata.applicationId,
                                      children: em.Z.Messages.NOTICE_APPLICATION_TEST_MODE_GO_TO_LISTING
                                  }),
                                  (0, i.jsx)(c.NoticeCloseButton, {
                                      onClick: g.mc,
                                      noticeType: eu.kVF.APPLICATION_TEST_MODE
                                  })
                              ]
                          })
                      });
                  case eu.kVF.OUTBOUND_PROMOTION:
                      return (0, i.jsx)(W.Z, {});
                  case eu.kVF.VIEWING_ROLES:
                      return (0, i.jsx)(w.Z, {});
                  case eu.kVF.PREMIUM_UNCANCEL:
                      return (0, i.jsxs)(c.Notice, {
                          color: eM === e_.p9.TIER_1 ? c.NoticeColors.PREMIUM_TIER_1 : eM === e_.p9.TIER_0 ? c.NoticeColors.PREMIUM_TIER_0 : c.NoticeColors.PREMIUM_TIER_2,
                          children: [
                              (0, i.jsx)(c.NoticeCloseButton, {
                                  noticeType: eu.kVF.PREMIUM_UNCANCEL,
                                  onClick: () => {
                                      var e, t;
                                      eC(null === (t = ed.metadata) || void 0 === t ? void 0 : null === (e = t.premiumSubscription) || void 0 === e ? void 0 : e.currentPeriodEnd);
                                  }
                              }),
                              (0, i.jsx)(c.NitroWheelIcon, {
                                  size: 'md',
                                  color: 'currentColor',
                                  className: eT.premiumIcon
                              }),
                              eM === e_.p9.TIER_1 ? em.Z.Messages.PREMIUM_SUBSCRIPTION_ENDING_TIER_1_NOTICE_TEXT.format({ daysLeft: ed.metadata.daysLeft }) : eM === e_.p9.TIER_0 ? em.Z.Messages.PREMIUM_SUBSCRIPTION_ENDING_TIER_0_NOTICE_TEXT.format({ daysLeft: ed.metadata.daysLeft }) : em.Z.Messages.PREMIUM_SUBSCRIPTION_ENDING_NOTICE_TEXT.format({ daysLeft: ed.metadata.daysLeft }),
                              (0, i.jsx)(c.PrimaryCTANoticeButton, {
                                  noticeType: eu.kVF.PREMIUM_UNCANCEL,
                                  onClick: () => {
                                      var e, t;
                                      eC(null === (t = ed.metadata) || void 0 === t ? void 0 : null === (e = t.premiumSubscription) || void 0 === e ? void 0 : e.currentPeriodEnd),
                                          (0, c.openModalLazy)(async () => {
                                              let { default: e } = await Promise.all([n.e('52249'), n.e('72652'), n.e('8016'), n.e('68136'), n.e('27129')]).then(n.bind(n, 561623));
                                              return (t) =>
                                                  (0, i.jsx)(e, {
                                                      ...t,
                                                      daysLeft: ed.metadata.daysLeft,
                                                      premiumType: eM,
                                                      analyticsSource: 'Nag Bar',
                                                      premiumSubscription: ed.metadata.premiumSubscription
                                                  });
                                          });
                                  },
                                  children: eM === e_.p9.TIER_1 ? em.Z.Messages.PREMIUM_SUBSCRIPTION_ENDING_TIER_1_NOTICE_BUTTON_TEXT : eM === e_.p9.TIER_0 ? em.Z.Messages.PREMIUM_SUBSCRIPTION_ENDING_TIER_0_NOTICE_BUTTON_TEXT : em.Z.Messages.PREMIUM_SUBSCRIPTION_ENDING_NOTICE_BUTTON_TEXT
                              })
                          ]
                      });
                  case eu.kVF.PREMIUM_PAST_DUE_ONE_TIME_PAYMENT:
                      let { daysPastDue: ew, dismissUntil: eV } = ed.metadata;
                      return (0, i.jsxs)(c.Notice, {
                          color: c.NoticeColors.WARNING,
                          children: [
                              (0, i.jsx)(c.NoticeCloseButton, {
                                  noticeType: eg,
                                  onClick: () => {
                                      eC(eV);
                                  }
                              }),
                              em.Z.Messages.PREMIUM_SUBSCRIPTION_ONE_TIME_PAYMENT_PAST_DUE_SUBSCRIPTION_TEXT_NO_ACTION.format({ daysPastDue: ew }),
                              (0, i.jsx)(c.PrimaryCTANoticeButton, {
                                  noticeType: eu.kVF.PREMIUM_PAST_DUE_ONE_TIME_PAYMENT,
                                  onClick: () => {
                                      eC(eV), A.Z.open(eu.oAB.SUBSCRIPTIONS);
                                  },
                                  children: em.Z.Messages.PREMIUM_SUBSCRIPTION_PAST_DUE_RENEW_NOW_BUTTON_TEXT
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
                                      eC(null === (t = ed.metadata) || void 0 === t ? void 0 : null === (e = t.premiumSubscription) || void 0 === e ? void 0 : e.currentPeriodEnd);
                                  }
                              }),
                              em.Z.Messages.PREMIUM_SUBSCRIPTION_PAST_DUE_INVALID_PAYMENT_NOTICE_TEXT,
                              (0, i.jsx)(c.PrimaryCTANoticeButton, {
                                  noticeType: eu.kVF.PREMIUM_PAST_DUE_INVALID_PAYMENT,
                                  onClick: () => {
                                      var e, t;
                                      eC(null === (t = ed.metadata) || void 0 === t ? void 0 : null === (e = t.premiumSubscription) || void 0 === e ? void 0 : e.currentPeriodEnd), A.Z.open(eu.oAB.SUBSCRIPTIONS);
                                  },
                                  children: em.Z.Messages.PREMIUM_SUBSCRIPTION_PAST_DUE_INVALID_PAYMENT_NOTICE_BUTTON_TEXT
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
                                      eC(null === (t = ed.metadata) || void 0 === t ? void 0 : null === (e = t.premiumSubscription) || void 0 === e ? void 0 : e.currentPeriodEnd);
                                  }
                              }),
                              em.Z.Messages.PREMIUM_SUBSCRIPTION_PAST_DUE_MISSING_PAYMENT_NOTICE_TEXT,
                              (0, i.jsx)(c.PrimaryCTANoticeButton, {
                                  noticeType: eu.kVF.PREMIUM_PAST_DUE_MISSING_PAYMENT,
                                  onClick: () => {
                                      var e, t;
                                      eC(null === (t = ed.metadata) || void 0 === t ? void 0 : null === (e = t.premiumSubscription) || void 0 === e ? void 0 : e.currentPeriodEnd), A.Z.open(eu.oAB.SUBSCRIPTIONS);
                                  },
                                  children: em.Z.Messages.PREMIUM_SUBSCRIPTION_PAST_DUE_MISSING_PAYMENT_NOTICE_BUTTON_TEXT
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
                                      eC(null === (t = ed.metadata) || void 0 === t ? void 0 : null === (e = t.premiumSubscription) || void 0 === e ? void 0 : e.currentPeriodEnd);
                                  }
                              }),
                              eM === e_.p9.TIER_1 ? em.Z.Messages.PREMIUM_SUBSCRIPTION_ENDING_MISSING_PAYMENT_TIER_1_NOTICE_TEXT.format({ daysLeft: ed.metadata.daysLeft }) : eM === e_.p9.TIER_0 ? em.Z.Messages.PREMIUM_SUBSCRIPTION_ENDING_MISSING_PAYMENT_TIER_0_NOTICE_TEXT.format({ daysLeft: ed.metadata.daysLeft }) : em.Z.Messages.PREMIUM_SUBSCRIPTION_ENDING_MISSING_PAYMENT_NOTICE_TEXT.format({ daysLeft: ed.metadata.daysLeft }),
                              (0, i.jsx)(c.PrimaryCTANoticeButton, {
                                  noticeType: eu.kVF.PREMIUM_MISSING_PAYMENT,
                                  onClick: () => {
                                      var e, t;
                                      eC(null === (t = ed.metadata) || void 0 === t ? void 0 : null === (e = t.premiumSubscription) || void 0 === e ? void 0 : e.currentPeriodEnd), A.Z.open(eu.oAB.SUBSCRIPTIONS);
                                  },
                                  children: eM === e_.p9.TIER_1 ? em.Z.Messages.PREMIUM_SUBSCRIPTION_ENDING_MISSING_PAYMENT_TIER_1_NOTICE_BUTTON_TEXT : eM === e_.p9.TIER_0 ? em.Z.Messages.PREMIUM_SUBSCRIPTION_ENDING_MISSING_PAYMENT_TIER_0_NOTICE_BUTTON_TEXT : em.Z.Messages.PREMIUM_SUBSCRIPTION_ENDING_MISSING_PAYMENT_NOTICE_BUTTON_TEXT
                              })
                          ]
                      });
                  case eu.kVF.BACK_TO_PREVIOUS_SCREEN:
                      return (0, i.jsx)(G.h, {
                          buttonText: null !== (s = ed.buttonText) && void 0 !== s ? s : em.Z.Messages.GO_BACK,
                          onGoBack: ed.callback,
                          onDismiss: () => eC(),
                          showCloseButton: !0
                      });
                  case eu.kVF.AUTOMOD_QUARANTINED_USER_PROFILE: {
                      let e = { page: eu.ZY5.IN_APP };
                      return (0, i.jsx)(U.Z, {
                          guildId: M,
                          analyticsLocations: ef,
                          analyticsLocation: e
                      });
                  }
                  case eu.kVF.QUARANTINED:
                      return (0, i.jsxs)(c.Notice, {
                          color: c.NoticeColors.CUSTOM,
                          className: eT.quarantineNotice,
                          children: [
                              em.Z.Messages.LIMITED_ACCESS_NAG_BAR_NOTICE,
                              (0, i.jsx)(c.NoticeButtonAnchor, {
                                  href: eE.Z,
                                  target: '_blank',
                                  children: em.Z.Messages.LIMITED_ACCESS_NAG_BAR_APPEAL
                              }),
                              (0, i.jsx)(c.Anchor, {
                                  href: er.Z.getArticleURL(eu.BhN.QUARANTINE),
                                  target: '_blank',
                                  className: eT.quarantineLearnMoreLink,
                                  children: em.Z.Messages.LEARN_MORE
                              })
                          ]
                      });
                  case eu.kVF.BLOCKED_BY_PROXY:
                      return (0, i.jsxs)(c.Notice, {
                          color: c.NoticeColors.WARNING,
                          children: [
                              em.Z.Messages.BLOCKED_BY_PROXY_NOTICE,
                              (0, i.jsx)(c.NoticeButtonAnchor, {
                                  href: ''.concat(eu.yXt.STATUS),
                                  children: em.Z.Messages.LEARN_MORE
                              }),
                              (0, i.jsx)(c.NoticeCloseButton, {
                                  onClick: () => eC(),
                                  noticeType: eu.kVF.BLOCKED_BY_PROXY
                              })
                          ]
                      });
                  case eu.kVF.AUTO_MODERATION_MENTION_RAID_DETECTION:
                      let { dismissUntil: eH, decisionId: eY } = ed.metadata;
                      return (0, i.jsxs)(c.Notice, {
                          color: c.NoticeColors.WARNING,
                          children: [
                              (0, i.jsx)(c.NoticeCloseButton, {
                                  noticeType: eu.kVF.AUTO_MODERATION_MENTION_RAID_DETECTION,
                                  onClick: () => {
                                      null != M && (0, j.T9)(M), eC(eH);
                                  }
                              }),
                              em.Z.Messages.GUILD_AUTOMOD_MENTION_SPAM_NOTICE_MESSAGE,
                              (0, i.jsx)(c.NoticeButton, {
                                  onClick: () => {
                                      null != M &&
                                          (0, j.UE)(M, eY, () => {
                                              eC(eH), (0, j.T9)(M);
                                          });
                                  },
                                  children: em.Z.Messages.GUILD_AUTOMOD_MENTION_SPAM_NOTICE_REMOVE_RESTRICTION
                              }),
                              null != M
                                  ? (0, i.jsx)(c.NoticeButton, {
                                        onClick: () => F.Z.open(M, eu.pNK.GUILD_AUTOMOD, void 0, eu.KsC.AUTOMOD_MENTION_SPAM),
                                        children: em.Z.Messages.GUILD_AUTOMOD_MENTION_SPAM_NOTICE_CONFIGURE_SETTINGS
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
                                      X.hZ(), eC();
                                  }
                              }),
                              em.Z.Messages.SAFETY_USER_SENTIMENT_NOTICE,
                              (0, i.jsx)(c.PrimaryCTANoticeButton, {
                                  noticeType: eu.kVF.SAFETY_USER_SENTIMENT_NAGBAR,
                                  onClick: () => {
                                      (0, c.openModalLazy)(async () => {
                                          let { default: e } = await n.e('52432').then(n.bind(n, 349994));
                                          return (t) => (0, i.jsx)(e, { ...t });
                                      }),
                                          X.hZ(),
                                          eC();
                                  },
                                  children: em.Z.Messages.SAFETY_USER_SENTIMENT_NOTICE_CTA
                              })
                          ]
                      });
                  case eu.kVF.PREMIUM_TIER_2_TRIAL_ENDING:
                      let eW = l()().add(5, 'days').toDate();
                      return (0, i.jsx)(K.Z, {
                          dismissCurrentNotice: () => {
                              (0, L.EW)(es.m[eu.kVF.PREMIUM_TIER_2_TRIAL_ENDING]), eC(eW);
                          },
                          subscriptionTier: e_.Si.TIER_2
                      });
                  case eu.kVF.QUESTS_PROGRESS_INTERRUPTION:
                      return (0, i.jsxs)(c.Notice, {
                          color: c.NoticeColors.DANGER,
                          children: [
                              (0, i.jsx)(c.NoticeCloseButton, {
                                  noticeType: eu.kVF.QUESTS_PROGRESS_INTERRUPTION,
                                  onClick: () => {
                                      var e;
                                      (null === (e = ed.metadata) || void 0 === e ? void 0 : e.streamKey) != null && (0, z.nE)(ed.metadata.streamKey);
                                  }
                              }),
                              em.Z.Messages.QUESTS_PROGRESS_TRACKING_FAILURE_NOTICE
                          ]
                      });
                  default:
                      return null;
              }
          })
        : null;
function ef() {
    let { analyticsLocations: e } = (0, x.ZP)(M.Z.NOTICE);
    return (0, i.jsx)(x.Gt, {
        value: e,
        children: (0, i.jsx)(ep, {})
    });
}
