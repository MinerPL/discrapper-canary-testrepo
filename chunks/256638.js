n.d(t, {
    Z: function () {
        return ep;
    },
    c: function () {
        return eC;
    }
});
var i = n(735250),
    s = n(470079),
    a = n(913527),
    r = n.n(a),
    l = n(613828),
    o = n(442837),
    c = n(481060),
    u = n(668781),
    d = n(846027),
    _ = n(893776),
    E = n(117266),
    I = n(37234),
    m = n(254854),
    T = n(195500),
    h = n(287734),
    N = n(205355),
    C = n(558381),
    f = n(223245),
    p = n(491428),
    g = n(401430),
    S = n(230711),
    A = n(726542),
    R = n(100527),
    O = n(906732),
    x = n(812206),
    M = n(391650),
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
    Q = n(523255),
    q = n(852923),
    X = n(592125),
    J = n(430824),
    $ = n(131951),
    ee = n(19780),
    et = n(914010),
    en = n(594174),
    ei = n(55563),
    es = n(695103),
    ea = n(933429),
    er = n(626135),
    el = n(63063),
    eo = n(72924),
    ec = n(69499),
    eu = n(912193),
    ed = n(981631),
    e_ = n(474936),
    eE = n(610674),
    eI = n(65154),
    em = n(689938),
    eT = n(66740);
let eh = () =>
        (0, i.jsxs)(c.Notice, {
            color: c.NoticeColors.DANGER,
            children: [
                (0, i.jsx)(c.NoticeCloseButton, {
                    onClick: () => {
                        eC(), (0, eu.b)();
                    }
                }),
                em.Z.Messages.NOTICE_NO_INPUT_DETECTED,
                (0, i.jsx)(c.NoticeButtonAnchor, {
                    href: el.Z.getArticleURL(ed.BhN.NO_INPUT_DETECTED),
                    children: em.Z.Messages.NOTICE_NO_INPUT_DETECTED_HELP_LINK_TEXT
                })
            ]
        }),
    eN = () =>
        (0, i.jsxs)(c.Notice, {
            color: c.NoticeColors.DANGER,
            children: [
                (0, i.jsx)(c.NoticeCloseButton, {
                    onClick: () => {
                        eC(), (0, eu.b)();
                    }
                }),
                em.Z.Messages.NOTICE_NO_INPUT_DETECTED_SETTINGS,
                (0, i.jsx)(c.NoticeButton, {
                    onClick: () => {
                        (0, I.jN)(ed.S9g.USER_SETTINGS), S.Z.setSection(ed.oAB.VOICE);
                    },
                    children: em.Z.Messages.NOTICE_NO_INPUT_DETECTED_SETTINGS_LINK_TEXT
                })
            ]
        });
function eC(e) {
    m.Z.dismiss(null != e ? { untilAtLeast: r()(e) } : void 0);
}
let ef =
    12633 == n.j
        ? s.memo(function () {
              var e, t, a;
              let m = (0, o.e7)([en.default], () => en.default.getCurrentUser()),
                  R = (0, o.e7)([et.Z], () => et.Z.getGuildId()),
                  eu = (0, o.e7)([ea.Z], () => ea.Z.getNotice()),
                  ef = (0, o.e7)([J.Z], () => J.Z.getGuild(R)),
                  { analyticsLocations: ep } = (0, O.ZP)(),
                  eg = null == eu ? void 0 : eu.type,
                  eS = (0, B.J)(R);
              s.useEffect(() => {
                  null != eg &&
                      !(function (e, t) {
                          let n = { notice_type: e };
                          null != t && (n.guild_id = t), er.default.track(ed.rMx.APP_NOTICE_VIEWED, n);
                      })(eg, R);
              }, [eg, R]),
                  s.useEffect(() => {
                      if (null != eu && eu.type === ed.kVF.SURVEY && null != eu.metadata) {
                          let { metadata: e } = eu,
                              t = D.Z.getUserExperimentDescriptor(e.id);
                          null != t && (0, P.W9)(e.id, t),
                              (async () => {
                                  var e, t;
                                  (null === (e = eu.metadata) || void 0 === e ? void 0 : e.id) != null && (await (0, p.g8)(null === (t = eu.metadata) || void 0 === t ? void 0 : t.id));
                              })();
                      }
                  }, [eu]);
              let eA = (function (e) {
                  let { enabled: t } = (0, Y.ZP)(!0, e !== ed.kVF.PREMIUM_TIER_2_TRIAL_ENDING);
                  return t || null == e ? null : ea.m[e];
              })(eg);
              if (null == eu) return null;
              if (null != eA)
                  return (0, i.jsx)(Z.A, {
                      dismissibleContent: eA,
                      noticeType: eu.type
                  });
              let eR = null === (e = eu.metadata) || void 0 === e ? void 0 : e.premiumType;
              switch (eu.type) {
                  case ed.kVF.LURKING_GUILD:
                      return (0, i.jsx)(V.Z, {});
                  case ed.kVF.PENDING_MEMBER:
                      return (0, i.jsx)(k.Z, {});
                  case ed.kVF.INVITED_TO_SPEAK:
                      return (0, i.jsx)(q.Z, {});
                  case ed.kVF.GUILD_RAID_NOTIFICATION:
                      let { dismissUntil: eO } = eu.metadata;
                      return (0, i.jsx)(b.Z, { onDismiss: () => eC(eO) });
                  case ed.kVF.WIN32_DEPRECATED_MESSAGE:
                      let { dismissUntil: ex } = eu.metadata;
                      return (0, i.jsxs)(c.Notice, {
                          color: c.NoticeColors.WARNING,
                          children: [
                              (0, i.jsx)(c.NoticeCloseButton, {
                                  onClick: () => eC(ex),
                                  noticeType: ed.kVF.WIN32_DEPRECATED_MESSAGE
                              }),
                              em.Z.Messages.WINDOWS_32_BIT_DEPRECATED_WARNING.format({ helpCenterLink: el.Z.getArticleURL(ed.BhN.WIN32_DEPRECATE) })
                          ]
                      });
                  case ed.kVF.WIN7_8_DEPRECATED_MESSAGE:
                      let { dismissUntil: eM } = eu.metadata;
                      return (0, i.jsxs)(c.Notice, {
                          color: c.NoticeColors.WARNING,
                          children: [
                              (0, i.jsx)(c.NoticeCloseButton, {
                                  onClick: () => eC(eM),
                                  noticeType: ed.kVF.WIN7_8_DEPRECATED_MESSAGE
                              }),
                              em.Z.Messages.WINDOWS_7_8_DEPRECATED_WARNING.format({ helpCenterLink: el.Z.getArticleURL(ed.BhN.WIN7_8_DEPRECATE) })
                          ]
                      });
                  case ed.kVF.MACOS_17_18_DEPRECATED_MESSAGE:
                      let { dismissUntil: ev } = eu.metadata;
                      return (0, i.jsxs)(c.Notice, {
                          color: c.NoticeColors.WARNING,
                          children: [
                              (0, i.jsx)(c.NoticeCloseButton, {
                                  onClick: () => eC(ev),
                                  noticeType: ed.kVF.MACOS_17_18_DEPRECATED_MESSAGE
                              }),
                              em.Z.Messages.MACOS_DEPRECATED_WARNING.format({ helpCenterLink: el.Z.getArticleURL(ed.BhN.MACOS_17_18_DEPRECATE) })
                          ]
                      });
                  case ed.kVF.GENERIC:
                      return (0, i.jsxs)(c.Notice, {
                          color: c.NoticeColors.DEFAULT,
                          children: [
                              (0, i.jsx)(c.NoticeCloseButton, {
                                  onClick: () => eC(),
                                  noticeType: ed.kVF.GENERIC
                              }),
                              eu.message,
                              null != eu.buttonText
                                  ? (0, i.jsx)(c.PrimaryCTANoticeButton, {
                                        onClick: eu.callback,
                                        noticeType: ed.kVF.GENERIC,
                                        children: eu.buttonText
                                    })
                                  : null
                          ]
                      });
                  case ed.kVF.LAUNCH_GAME_FAILURE:
                      return (0, i.jsxs)(c.Notice, {
                          color: c.NoticeColors.DANGER,
                          children: [
                              (0, i.jsx)(c.NoticeCloseButton, {
                                  onClick: () => eC(),
                                  noticeType: ed.kVF.LAUNCH_GAME_FAILURE
                              }),
                              eu.message,
                              null != eu.buttonText
                                  ? (0, i.jsx)(c.PrimaryCTANoticeButton, {
                                        onClick: eu.callback,
                                        noticeType: ed.kVF.LAUNCH_GAME_FAILURE,
                                        children: eu.buttonText
                                    })
                                  : null
                          ]
                      });
                  case ed.kVF.VOICE_DISABLED:
                      return (0, i.jsxs)(c.Notice, {
                          color: c.NoticeColors.WARNING,
                          children: [
                              (0, i.jsx)(c.NoticeCloseButton, {
                                  onClick: () => {
                                      T.Z.clearRemoteDisconnectVoiceChannelId(), eC();
                                  },
                                  noticeType: ed.kVF.VOICE_DISABLED
                              }),
                              em.Z.Messages.NOTICE_CONNECTION_CONFLICT,
                              (0, i.jsx)(c.PrimaryCTANoticeButton, {
                                  onClick: () => {
                                      let e = ee.Z.getRemoteDisconnectVoiceChannelId();
                                      null != e && null != X.Z.getChannel(e) && h.default.selectVoiceChannel(e);
                                  },
                                  noticeType: ed.kVF.VOICE_DISABLED,
                                  children: em.Z.Messages.RECONNECT
                              })
                          ]
                      });
                  case ed.kVF.VOICE_CONNECTED_LAST_SESSION:
                      return (0, i.jsxs)(c.Notice, {
                          color: c.NoticeColors.DEFAULT,
                          children: [
                              (0, i.jsx)(c.NoticeCloseButton, {
                                  onClick: () => {
                                      T.Z.clearLastSessionVoiceChannelId(), eC();
                                  },
                                  noticeType: ed.kVF.VOICE_CONNECTED_LAST_SESSION
                              }),
                              em.Z.Messages.NOTICE_VOICE_CONNECTED_LAST_SESSION,
                              (0, i.jsx)(c.PrimaryCTANoticeButton, {
                                  onClick: () => {
                                      let e = ee.Z.getLastSessionVoiceChannelId();
                                      null != e && null != X.Z.getChannel(e) && h.default.selectVoiceChannel(e);
                                  },
                                  noticeType: ed.kVF.VOICE_CONNECTED_LAST_SESSION,
                                  children: em.Z.Messages.RECONNECT
                              })
                          ]
                      });
                  case ed.kVF.SPOTIFY_AUTO_PAUSED:
                      let eL = A.Z.get(ed.ABu.SPOTIFY);
                      return (0, i.jsxs)(c.Notice, {
                          color: c.NoticeColors.DANGER,
                          children: [
                              (0, i.jsx)(c.NoticeCloseButton, {
                                  onClick: () => eC(),
                                  noticeType: ed.kVF.SPOTIFY_AUTO_PAUSED
                              }),
                              (0, i.jsx)('img', {
                                  alt: '',
                                  className: eT.platformIcon,
                                  src: eL.icon.whiteSVG
                              }),
                              em.Z.Messages.NOTICE_SPOTIFY_AUTO_PAUSED,
                              (0, i.jsx)(c.PrimaryCTANoticeButton, {
                                  onClick: () => S.Z.open(ed.oAB.VOICE),
                                  noticeType: ed.kVF.SPOTIFY_AUTO_PAUSED,
                                  children: em.Z.Messages.VOICE_SETTINGS
                              }),
                              (0, i.jsx)(c.Anchor, {
                                  className: eT.textLinkSmall,
                                  href: el.Z.getArticleURL(ed.BhN.SPOTIFY_AUTO_PAUSED),
                                  target: '_blank',
                                  children: em.Z.Messages.NOTICE_WHATS_THIS
                              })
                          ]
                      });
                  case ed.kVF.UNCLAIMED_ACCOUNT:
                      return (0, i.jsxs)(c.Notice, {
                          color: c.NoticeColors.DEFAULT,
                          children: [
                              em.Z.Messages.NOTICE_UNCLAIMED_ACCOUNT,
                              (0, i.jsx)(c.PrimaryCTANoticeButton, {
                                  noticeType: ed.kVF.UNCLAIMED_ACCOUNT,
                                  onClick: () => (eS && null != R ? (0, y.hk)(R) : M.j()),
                                  children: em.Z.Messages.CLAIM_ACCOUNT
                              })
                          ]
                      });
                  case ed.kVF.UNVERIFIED_ACCOUNT:
                      return (0, i.jsxs)(c.Notice, {
                          color: c.NoticeColors.DEFAULT,
                          children: [
                              em.Z.Messages.NOTICE_UNVERIFIED_ACCOUNT_UU,
                              (0, i.jsx)(c.PrimaryCTANoticeButton, {
                                  noticeType: ed.kVF.UNVERIFIED_ACCOUNT,
                                  onClick: () => {
                                      _.Z.verifyResend(),
                                          u.Z.show({
                                              title: em.Z.Messages.VERIFICATION_EMAIL_TITLE,
                                              body: em.Z.Messages.VERIFICATION_EMAIL_BODY.format({ email: null == m ? void 0 : m.email }),
                                              secondaryConfirmText: em.Z.Messages.CHANGE_EMAIL,
                                              onConfirmSecondary: M.j
                                          });
                                  },
                                  children: em.Z.Messages.RESEND_EMAIL_SHORT
                              })
                          ]
                      });
                  case ed.kVF.SCHEDULED_MAINTENANCE:
                      if (null == eu.metadata) return null;
                      return (0, i.jsxs)(c.Notice, {
                          color: c.NoticeColors.DEFAULT,
                          children: [
                              (0, i.jsx)(c.NoticeCloseButton, {
                                  onClick: () => N.Z.ackScheduledMaintenance(),
                                  noticeType: ed.kVF.SCHEDULED_MAINTENANCE
                              }),
                              em.Z.Messages.NOTICE_SCHEDULED_MAINTENANCE.format(eu.metadata),
                              (0, i.jsx)(c.NoticeButtonAnchor, {
                                  href: ''.concat(ed.yXt.STATUS, '/incidents/').concat(eu.metadata.id),
                                  children: em.Z.Messages.LEARN_MORE
                              })
                          ]
                      });
                  case ed.kVF.NO_INPUT_DETECTED:
                      if (!$.Z.supports(eI.AN.LOOPBACK)) return (0, i.jsx)(eh, {});
                      return (0, i.jsx)(eN, {});
                  case ed.kVF.HARDWARE_MUTE:
                      if (null == eu.metadata) return null;
                      let { vendor: eZ, model: eP } = eu.metadata;
                      return (0, i.jsxs)(c.Notice, {
                          color: c.NoticeColors.DANGER,
                          children: [
                              em.Z.Messages.NOTICE_HARDWARE_MUTE.format({
                                  vendorName: eZ.name,
                                  modelName: eP.name
                              }),
                              (0, i.jsx)(c.NoticeCloseButton, {
                                  onClick: () => {
                                      d.Z.setEnableHardwareMuteNotice(!1), eC();
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
                  case ed.kVF.STREAMER_MODE:
                      return (0, i.jsxs)(c.Notice, {
                          color: c.NoticeColors.STREAMER_MODE,
                          children: [
                              (0, i.jsx)(c.NoticeCloseButton, {
                                  onClick: () => eC(),
                                  noticeType: ed.kVF.STREAMER_MODE
                              }),
                              em.Z.Messages.NOTICE_STREAMER_MODE_TEXT,
                              (0, i.jsx)(c.PrimaryCTANoticeButton, {
                                  onClick: () => f.Z.setEnabled(!1),
                                  noticeType: ed.kVF.STREAMER_MODE,
                                  children: em.Z.Messages.DISABLE
                              })
                          ]
                      });
                  case ed.kVF.H264_DISABLED:
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
                                      (0, I.jN)(ed.S9g.USER_SETTINGS), S.Z.setSection(ed.oAB.VOICE);
                                  },
                                  children: em.Z.Messages.NOTICE_H264_DISABLED_SETTINGS_LINK_TEXT
                              })
                          ]
                      });
                  case ed.kVF.DETECTED_OFF_PLATFORM_PREMIUM_PERK:
                      if (null == eu.metadata) return null;
                      let { skuId: eD, applicationId: eb } = eu.metadata,
                          ej = ei.Z.get(eD),
                          eU = x.Z.getApplication(eb);
                      if (null == ej || null == eU) return null;
                      let ey = { page: ed.ZY5.IN_APP };
                      return (0, i.jsxs)(c.Notice, {
                          color: c.NoticeColors.PREMIUM_TIER_1,
                          children: [
                              (0, i.jsx)(c.NoticeCloseButton, {
                                  onClick: () => E.Z(ej.id),
                                  noticeType: ed.kVF.DETECTED_OFF_PLATFORM_PREMIUM_PERK
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
                                  noticeType: ed.kVF.DETECTED_OFF_PLATFORM_PREMIUM_PERK,
                                  onClick: () =>
                                      (0, eo.S)({
                                          applicationId: eU.id,
                                          skuId: ej.id,
                                          openPremiumPaymentModal: () => {
                                              (0, H.Z)({
                                                  initialPlanId: null,
                                                  subscriptionTier: e_.Si.TIER_2,
                                                  analyticsLocations: ep,
                                                  analyticsObject: ey
                                              });
                                          },
                                          analyticsLocations: ep,
                                          analyticsLocationObject: ey,
                                          context: __OVERLAY__ ? ed.IlC.OVERLAY : ed.IlC.APP
                                      }).then(() => E.Z(ej.id)),
                                  children: em.Z.Messages.NOTICE_DETECTED_OFF_PLATFORM_PREMIUM_PERK_BUTTON
                              })
                          ]
                      });
                  case ed.kVF.DETECTED_OFF_PLATFORM_PREMIUM_PERK_UPSELL: {
                      if (null == eu.metadata) return null;
                      let { skuId: e, applicationId: t } = eu.metadata,
                          n = ei.Z.get(e),
                          s = x.Z.getApplication(t);
                      if (null == n || null == s) return null;
                      return (0, i.jsxs)(c.Notice, {
                          color: c.NoticeColors.PREMIUM_TIER_1,
                          children: [
                              (0, i.jsx)(c.NoticeCloseButton, {
                                  onClick: () => eC(),
                                  noticeType: ed.kVF.DETECTED_OFF_PLATFORM_PREMIUM_PERK_UPSELL
                              }),
                              (0, i.jsx)(c.NitroWheelIcon, {
                                  size: 'md',
                                  color: 'currentColor',
                                  className: eT.premiumIcon
                              }),
                              em.Z.Messages.NOTICE_DETECTED_OFF_PLATFORM_NO_PREMIUM_PERK_MESSAGE.format({
                                  applicationName: s.name,
                                  skuName: n.name
                              }),
                              (0, i.jsx)(c.NoticeButton, {
                                  children: (0, i.jsx)(l.rU, {
                                      onClick: () => eC(),
                                      to: {
                                          pathname: ed.Z5c.APPLICATION_STORE_LISTING_SKU(n.id),
                                          state: { scrollRestoration: !1 }
                                      },
                                      children: em.Z.Messages.LEARN_MORE
                                  })
                              })
                          ]
                      });
                  }
                  case ed.kVF.SURVEY: {
                      let e = eu.metadata;
                      if (null == e) return null;
                      let { key: t, prompt: n, cta: s, url: a } = e;
                      return (0, i.jsxs)(c.Notice, {
                          color: c.NoticeColors.CUSTOM,
                          children: [
                              (0, i.jsx)(c.NoticeCloseButton, {
                                  noticeType: ed.kVF.SURVEY,
                                  onClick: () => {
                                      (0, p.hZ)(t, !0);
                                  }
                              }),
                              n,
                              (0, i.jsx)(c.PrimaryCTANoticeButton, {
                                  noticeType: ed.kVF.SURVEY,
                                  onClick: () => {
                                      window.open(a, '_blank'), (0, p.hZ)(t, !1);
                                  },
                                  children: s
                              })
                          ]
                      });
                  }
                  case ed.kVF.SERVER_USAGE_SURVEY:
                      return (0, i.jsxs)(c.Notice, {
                          color: c.NoticeColors.CUSTOM,
                          children: [
                              (0, i.jsx)(c.NoticeCloseButton, {
                                  noticeType: ed.kVF.SERVER_USAGE_SURVEY,
                                  onClick: () => {
                                      eC();
                                  }
                              }),
                              em.Z.Messages.SERVER_USAGE_SURVEY_BODY.format({ guildName: null !== (t = null == ef ? void 0 : ef.name) && void 0 !== t ? t : 'this server' }),
                              (0, i.jsx)(c.PrimaryCTANoticeButton, {
                                  noticeType: ed.kVF.SERVER_USAGE_SURVEY,
                                  onClick: () => {
                                      window.open('https://discord.sjc1.qualtrics.com/jfe/form/SV_9AHPmGasQ0EvpdQ?user_id='.concat(null == m ? void 0 : m.id, '&guild_id=').concat(null == ef ? void 0 : ef.id), '_blank'), eC();
                                  },
                                  additionalTrackingProps: { guild_id: null == ef ? void 0 : ef.id },
                                  children: em.Z.Messages.SERVER_USAGE_SURVEY_CTA
                              })
                          ]
                      });
                  case ed.kVF.CORRUPT_INSTALLATION:
                      return (0, i.jsxs)(c.Notice, {
                          color: c.NoticeColors.DANGER,
                          children: [
                              em.Z.Messages.NOTICE_CORRUPT_INSTALLATION,
                              (0, i.jsx)(c.NoticeButtonAnchor, {
                                  href: el.Z.getArticleURL(ed.BhN.CORRUPT_INSTALLATION),
                                  target: '_blank',
                                  children: em.Z.Messages.NOTICE_CORRUPT_INSTALLATION_HELP_LINK_TEXT
                              })
                          ]
                      });
                  case ed.kVF.VIDEO_UNSUPPORTED_BROWSER:
                      return (0, i.jsxs)(c.Notice, {
                          color: c.NoticeColors.WARNING,
                          children: [
                              (0, i.jsx)(c.NoticeCloseButton, {
                                  onClick: () => eC(),
                                  noticeType: ed.kVF.VIDEO_UNSUPPORTED_BROWSER
                              }),
                              em.Z.Messages.VIDEO_UNSUPPORTED_BROWSER_BODY,
                              (0, i.jsx)(c.PrimaryCTANoticeButton, {
                                  noticeType: ed.kVF.VIDEO_UNSUPPORTED_BROWSER,
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
                  case ed.kVF.DISPATCH_ERROR:
                      if (null == eu.metadata) return null;
                      let { error: eB } = eu.metadata;
                      return (0, i.jsxs)(c.Notice, {
                          color: c.NoticeColors.DANGER,
                          children: [
                              (0, i.jsx)(c.NoticeCloseButton, {
                                  onClick: () => eC(),
                                  noticeType: ed.kVF.DISPATCH_ERROR
                              }),
                              null == eB ? void 0 : eB.displayMessage,
                              (0, i.jsx)(c.PrimaryCTANoticeButton, {
                                  noticeType: ed.kVF.DISPATCH_ERROR,
                                  onClick: () =>
                                      (0, c.openModalLazy)(async () => {
                                          let { default: e } = await n.e('20212').then(n.bind(n, 915194));
                                          return (t) => (0, i.jsx)(e, { ...t });
                                      }),
                                  children: em.Z.Messages.LEARN_MORE
                              })
                          ]
                      });
                  case ed.kVF.DISPATCH_INSTALL_SCRIPT_PROGRESS:
                      if (null == eu.metadata) return null;
                      let { progress: ek, total: eG, name: eF } = eu.metadata;
                      return (0, i.jsxs)(c.Notice, {
                          color: c.NoticeColors.DEFAULT,
                          children: [
                              (0, i.jsx)(c.NoticeCloseButton, {
                                  onClick: () => eC(),
                                  noticeType: ed.kVF.DISPATCH_INSTALL_SCRIPT_PROGRESS
                              }),
                              (0, i.jsxs)(v.Z, {
                                  justify: v.Z.Justify.CENTER,
                                  children: [
                                      null != eF
                                          ? em.Z.Messages.NOTICE_DISPATCH_INSTALL_SCRIPT_PROGRESS_WITH_NAME.format({
                                                name: ''.concat(eF),
                                                progress: ''.concat(ek),
                                                total: ''.concat(eG)
                                            })
                                          : em.Z.Messages.NOTICE_DISPATCH_INSTALL_SCRIPT_PROGRESS.format({
                                                progress: ''.concat(ek),
                                                total: ''.concat(eG)
                                            }),
                                      (0, i.jsx)(c.Spinner, {
                                          type: c.Spinner.Type.PULSING_ELLIPSIS,
                                          className: eT.ellipsis
                                      })
                                  ]
                              })
                          ]
                      });
                  case ed.kVF.APPLICATION_TEST_MODE:
                      if (null == eu.metadata) return null;
                      if (null != es.Z.testModeEmbeddedApplicationId)
                          return (0, i.jsx)(c.Notice, {
                              color: c.NoticeColors.WARNING,
                              children: (0, i.jsxs)(v.Z, {
                                  justify: v.Z.Justify.CENTER,
                                  align: v.Z.Align.CENTER,
                                  children: [
                                      (0, i.jsx)('div', { children: em.Z.Messages.NOTICE_EMBEDDED_APPLICATION_TEST_MODE.format({ applicationName: eu.metadata.applicationName }) }),
                                      (0, i.jsx)(c.NoticeCloseButton, {
                                          onClick: g.mc,
                                          noticeType: ed.kVF.APPLICATION_TEST_MODE
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
                                  (0, i.jsx)('div', { children: em.Z.Messages.NOTICE_APPLICATION_TEST_MODE.format({ applicationName: eu.metadata.applicationName }) }),
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
                                                  section: ed.jXE.NOTIFICATION_BAR,
                                                  object: ed.qAy.NAVIGATION_LINK
                                              }
                                          }),
                                      applicationId: eu.metadata.applicationId,
                                      children: em.Z.Messages.NOTICE_APPLICATION_TEST_MODE_GO_TO_LISTING
                                  }),
                                  (0, i.jsx)(c.NoticeCloseButton, {
                                      onClick: g.mc,
                                      noticeType: ed.kVF.APPLICATION_TEST_MODE
                                  })
                              ]
                          })
                      });
                  case ed.kVF.OUTBOUND_PROMOTION:
                      return (0, i.jsx)(W.Z, {});
                  case ed.kVF.VIEWING_ROLES:
                      return (0, i.jsx)(w.Z, {});
                  case ed.kVF.PREMIUM_UNCANCEL:
                      return (0, i.jsxs)(c.Notice, {
                          color: eR === e_.p9.TIER_1 ? c.NoticeColors.PREMIUM_TIER_1 : eR === e_.p9.TIER_0 ? c.NoticeColors.PREMIUM_TIER_0 : c.NoticeColors.PREMIUM_TIER_2,
                          children: [
                              (0, i.jsx)(c.NoticeCloseButton, {
                                  noticeType: ed.kVF.PREMIUM_UNCANCEL,
                                  onClick: () => {
                                      var e, t;
                                      eC(null === (t = eu.metadata) || void 0 === t ? void 0 : null === (e = t.premiumSubscription) || void 0 === e ? void 0 : e.currentPeriodEnd);
                                  }
                              }),
                              (0, i.jsx)(c.NitroWheelIcon, {
                                  size: 'md',
                                  color: 'currentColor',
                                  className: eT.premiumIcon
                              }),
                              eR === e_.p9.TIER_1 ? em.Z.Messages.PREMIUM_SUBSCRIPTION_ENDING_TIER_1_NOTICE_TEXT.format({ daysLeft: eu.metadata.daysLeft }) : eR === e_.p9.TIER_0 ? em.Z.Messages.PREMIUM_SUBSCRIPTION_ENDING_TIER_0_NOTICE_TEXT.format({ daysLeft: eu.metadata.daysLeft }) : em.Z.Messages.PREMIUM_SUBSCRIPTION_ENDING_NOTICE_TEXT.format({ daysLeft: eu.metadata.daysLeft }),
                              (0, i.jsx)(c.PrimaryCTANoticeButton, {
                                  noticeType: ed.kVF.PREMIUM_UNCANCEL,
                                  onClick: () => {
                                      var e, t;
                                      eC(null === (t = eu.metadata) || void 0 === t ? void 0 : null === (e = t.premiumSubscription) || void 0 === e ? void 0 : e.currentPeriodEnd),
                                          (0, c.openModalLazy)(async () => {
                                              let { default: e } = await Promise.all([n.e('52249'), n.e('47006'), n.e('8016'), n.e('68136'), n.e('52362')]).then(n.bind(n, 561623));
                                              return (t) =>
                                                  (0, i.jsx)(e, {
                                                      ...t,
                                                      daysLeft: eu.metadata.daysLeft,
                                                      premiumType: eR,
                                                      analyticsSource: 'Nag Bar',
                                                      premiumSubscription: eu.metadata.premiumSubscription
                                                  });
                                          });
                                  },
                                  children: eR === e_.p9.TIER_1 ? em.Z.Messages.PREMIUM_SUBSCRIPTION_ENDING_TIER_1_NOTICE_BUTTON_TEXT : eR === e_.p9.TIER_0 ? em.Z.Messages.PREMIUM_SUBSCRIPTION_ENDING_TIER_0_NOTICE_BUTTON_TEXT : em.Z.Messages.PREMIUM_SUBSCRIPTION_ENDING_NOTICE_BUTTON_TEXT
                              })
                          ]
                      });
                  case ed.kVF.PREMIUM_PAST_DUE_ONE_TIME_PAYMENT:
                      let { daysPastDue: ew, dismissUntil: eV } = eu.metadata;
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
                                  noticeType: ed.kVF.PREMIUM_PAST_DUE_ONE_TIME_PAYMENT,
                                  onClick: () => {
                                      eC(eV), S.Z.open(ed.oAB.SUBSCRIPTIONS);
                                  },
                                  children: em.Z.Messages.PREMIUM_SUBSCRIPTION_PAST_DUE_RENEW_NOW_BUTTON_TEXT
                              })
                          ]
                      });
                  case ed.kVF.PREMIUM_PAST_DUE_INVALID_PAYMENT:
                      return (0, i.jsxs)(c.Notice, {
                          color: c.NoticeColors.DANGER,
                          children: [
                              (0, i.jsx)(c.NoticeCloseButton, {
                                  noticeType: ed.kVF.PREMIUM_PAST_DUE_INVALID_PAYMENT,
                                  onClick: () => {
                                      var e, t;
                                      eC(null === (t = eu.metadata) || void 0 === t ? void 0 : null === (e = t.premiumSubscription) || void 0 === e ? void 0 : e.currentPeriodEnd);
                                  }
                              }),
                              em.Z.Messages.PREMIUM_SUBSCRIPTION_PAST_DUE_INVALID_PAYMENT_NOTICE_TEXT,
                              (0, i.jsx)(c.PrimaryCTANoticeButton, {
                                  noticeType: ed.kVF.PREMIUM_PAST_DUE_INVALID_PAYMENT,
                                  onClick: () => {
                                      var e, t;
                                      eC(null === (t = eu.metadata) || void 0 === t ? void 0 : null === (e = t.premiumSubscription) || void 0 === e ? void 0 : e.currentPeriodEnd), S.Z.open(ed.oAB.SUBSCRIPTIONS);
                                  },
                                  children: em.Z.Messages.PREMIUM_SUBSCRIPTION_PAST_DUE_INVALID_PAYMENT_NOTICE_BUTTON_TEXT
                              })
                          ]
                      });
                  case ed.kVF.PREMIUM_PAST_DUE_MISSING_PAYMENT:
                      return (0, i.jsxs)(c.Notice, {
                          color: c.NoticeColors.WARNING,
                          children: [
                              (0, i.jsx)(c.NoticeCloseButton, {
                                  noticeType: ed.kVF.PREMIUM_PAST_DUE_MISSING_PAYMENT,
                                  onClick: () => {
                                      var e, t;
                                      eC(null === (t = eu.metadata) || void 0 === t ? void 0 : null === (e = t.premiumSubscription) || void 0 === e ? void 0 : e.currentPeriodEnd);
                                  }
                              }),
                              em.Z.Messages.PREMIUM_SUBSCRIPTION_PAST_DUE_MISSING_PAYMENT_NOTICE_TEXT,
                              (0, i.jsx)(c.PrimaryCTANoticeButton, {
                                  noticeType: ed.kVF.PREMIUM_PAST_DUE_MISSING_PAYMENT,
                                  onClick: () => {
                                      var e, t;
                                      eC(null === (t = eu.metadata) || void 0 === t ? void 0 : null === (e = t.premiumSubscription) || void 0 === e ? void 0 : e.currentPeriodEnd), S.Z.open(ed.oAB.SUBSCRIPTIONS);
                                  },
                                  children: em.Z.Messages.PREMIUM_SUBSCRIPTION_PAST_DUE_MISSING_PAYMENT_NOTICE_BUTTON_TEXT
                              })
                          ]
                      });
                  case ed.kVF.PREMIUM_MISSING_PAYMENT:
                      return (0, i.jsxs)(c.Notice, {
                          color: c.NoticeColors.WARNING,
                          children: [
                              (0, i.jsx)(c.NoticeCloseButton, {
                                  noticeType: ed.kVF.PREMIUM_MISSING_PAYMENT,
                                  onClick: () => {
                                      var e, t;
                                      eC(null === (t = eu.metadata) || void 0 === t ? void 0 : null === (e = t.premiumSubscription) || void 0 === e ? void 0 : e.currentPeriodEnd);
                                  }
                              }),
                              eR === e_.p9.TIER_1 ? em.Z.Messages.PREMIUM_SUBSCRIPTION_ENDING_MISSING_PAYMENT_TIER_1_NOTICE_TEXT.format({ daysLeft: eu.metadata.daysLeft }) : eR === e_.p9.TIER_0 ? em.Z.Messages.PREMIUM_SUBSCRIPTION_ENDING_MISSING_PAYMENT_TIER_0_NOTICE_TEXT.format({ daysLeft: eu.metadata.daysLeft }) : em.Z.Messages.PREMIUM_SUBSCRIPTION_ENDING_MISSING_PAYMENT_NOTICE_TEXT.format({ daysLeft: eu.metadata.daysLeft }),
                              (0, i.jsx)(c.PrimaryCTANoticeButton, {
                                  noticeType: ed.kVF.PREMIUM_MISSING_PAYMENT,
                                  onClick: () => {
                                      var e, t;
                                      eC(null === (t = eu.metadata) || void 0 === t ? void 0 : null === (e = t.premiumSubscription) || void 0 === e ? void 0 : e.currentPeriodEnd), S.Z.open(ed.oAB.SUBSCRIPTIONS);
                                  },
                                  children: eR === e_.p9.TIER_1 ? em.Z.Messages.PREMIUM_SUBSCRIPTION_ENDING_MISSING_PAYMENT_TIER_1_NOTICE_BUTTON_TEXT : eR === e_.p9.TIER_0 ? em.Z.Messages.PREMIUM_SUBSCRIPTION_ENDING_MISSING_PAYMENT_TIER_0_NOTICE_BUTTON_TEXT : em.Z.Messages.PREMIUM_SUBSCRIPTION_ENDING_MISSING_PAYMENT_NOTICE_BUTTON_TEXT
                              })
                          ]
                      });
                  case ed.kVF.BACK_TO_PREVIOUS_SCREEN:
                      return (0, i.jsx)(G.h, {
                          buttonText: null !== (a = eu.buttonText) && void 0 !== a ? a : em.Z.Messages.GO_BACK,
                          onGoBack: eu.callback,
                          onDismiss: () => eC(),
                          showCloseButton: !0
                      });
                  case ed.kVF.AUTOMOD_QUARANTINED_USER_PROFILE: {
                      let e = { page: ed.ZY5.IN_APP };
                      return (0, i.jsx)(U.Z, {
                          guildId: R,
                          analyticsLocations: ep,
                          analyticsLocation: e
                      });
                  }
                  case ed.kVF.QUARANTINED:
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
                                  href: el.Z.getArticleURL(ed.BhN.QUARANTINE),
                                  target: '_blank',
                                  className: eT.quarantineLearnMoreLink,
                                  children: em.Z.Messages.LEARN_MORE
                              })
                          ]
                      });
                  case ed.kVF.BLOCKED_BY_PROXY:
                      return (0, i.jsxs)(c.Notice, {
                          color: c.NoticeColors.WARNING,
                          children: [
                              em.Z.Messages.BLOCKED_BY_PROXY_NOTICE,
                              (0, i.jsx)(c.NoticeButtonAnchor, {
                                  href: ''.concat(ed.yXt.STATUS),
                                  children: em.Z.Messages.LEARN_MORE
                              }),
                              (0, i.jsx)(c.NoticeCloseButton, {
                                  onClick: () => eC(),
                                  noticeType: ed.kVF.BLOCKED_BY_PROXY
                              })
                          ]
                      });
                  case ed.kVF.DROPS_PROGRESS_INTERRUPTION:
                      return (0, i.jsxs)(c.Notice, {
                          color: c.NoticeColors.DANGER,
                          children: [
                              em.Z.Messages.DROPS_PROGRESS_INTERRUPTION_WARNING.format({ gameTitle: eu.metadata.gameTitle }),
                              (0, i.jsx)(c.NoticeButton, {
                                  onClick: eu.metadata.reloadCallback,
                                  children: em.Z.Messages.ERRORS_RESTART_APP
                              })
                          ]
                      });
                  case ed.kVF.AUTO_MODERATION_MENTION_RAID_DETECTION:
                      let { dismissUntil: eH, decisionId: eY } = eu.metadata;
                      return (0, i.jsxs)(c.Notice, {
                          color: c.NoticeColors.WARNING,
                          children: [
                              (0, i.jsx)(c.NoticeCloseButton, {
                                  noticeType: ed.kVF.AUTO_MODERATION_MENTION_RAID_DETECTION,
                                  onClick: () => {
                                      null != R && (0, j.T9)(R), eC(eH);
                                  }
                              }),
                              em.Z.Messages.GUILD_AUTOMOD_MENTION_SPAM_NOTICE_MESSAGE,
                              (0, i.jsx)(c.NoticeButton, {
                                  onClick: () => {
                                      null != R &&
                                          (0, j.UE)(R, eY, () => {
                                              eC(eH), (0, j.T9)(R);
                                          });
                                  },
                                  children: em.Z.Messages.GUILD_AUTOMOD_MENTION_SPAM_NOTICE_REMOVE_RESTRICTION
                              }),
                              null != R
                                  ? (0, i.jsx)(c.NoticeButton, {
                                        onClick: () => F.Z.open(R, ed.pNK.GUILD_AUTOMOD, void 0, ed.KsC.AUTOMOD_MENTION_SPAM),
                                        children: em.Z.Messages.GUILD_AUTOMOD_MENTION_SPAM_NOTICE_CONFIGURE_SETTINGS
                                    })
                                  : null
                          ]
                      });
                  case ed.kVF.SAFETY_USER_SENTIMENT_NAGBAR:
                      return (0, i.jsxs)(c.Notice, {
                          color: c.NoticeColors.BRAND,
                          children: [
                              (0, i.jsx)(c.NoticeCloseButton, {
                                  noticeType: ed.kVF.SAFETY_USER_SENTIMENT_NAGBAR,
                                  onClick: () => {
                                      Q.hZ(), eC();
                                  }
                              }),
                              em.Z.Messages.SAFETY_USER_SENTIMENT_NOTICE,
                              (0, i.jsx)(c.PrimaryCTANoticeButton, {
                                  noticeType: ed.kVF.SAFETY_USER_SENTIMENT_NAGBAR,
                                  onClick: () => {
                                      (0, c.openModalLazy)(async () => {
                                          let { default: e } = await n.e('52432').then(n.bind(n, 349994));
                                          return (t) => (0, i.jsx)(e, { ...t });
                                      }),
                                          Q.hZ(),
                                          eC();
                                  },
                                  children: em.Z.Messages.SAFETY_USER_SENTIMENT_NOTICE_CTA
                              })
                          ]
                      });
                  case ed.kVF.PREMIUM_TIER_2_TRIAL_ENDING:
                      let eW = r()().add(5, 'days').toDate();
                      return (0, i.jsx)(K.Z, {
                          dismissCurrentNotice: () => {
                              (0, L.EW)(ea.m[ed.kVF.PREMIUM_TIER_2_TRIAL_ENDING]), eC(eW);
                          },
                          subscriptionTier: e_.Si.TIER_2
                      });
                  case ed.kVF.QUESTS_PROGRESS_INTERRUPTION:
                      return (0, i.jsxs)(c.Notice, {
                          color: c.NoticeColors.DANGER,
                          children: [
                              (0, i.jsx)(c.NoticeCloseButton, {
                                  noticeType: ed.kVF.QUESTS_PROGRESS_INTERRUPTION,
                                  onClick: () => {
                                      var e;
                                      (null === (e = eu.metadata) || void 0 === e ? void 0 : e.streamKey) != null && (0, z.nE)(eu.metadata.streamKey);
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
function ep() {
    let { analyticsLocations: e } = (0, O.ZP)(R.Z.NOTICE);
    return (0, i.jsx)(O.Gt, {
        value: e,
        children: (0, i.jsx)(ef, {})
    });
}
