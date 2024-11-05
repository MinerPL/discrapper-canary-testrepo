n.d(t, {
    Z: function () {
        return ev;
    },
    c: function () {
        return eI;
    }
});
var i = n(200651),
    r = n(192379),
    l = n(913527),
    a = n.n(l),
    o = n(568611),
    s = n(442837),
    c = n(481060),
    d = n(668781),
    u = n(846027),
    m = n(893776),
    h = n(117266),
    f = n(37234),
    p = n(254854),
    g = n(195500),
    _ = n(287734),
    C = n(205355),
    E = n(558381),
    I = n(223245),
    x = n(491428),
    v = n(401430),
    N = n(230711),
    T = n(726542),
    S = n(100527),
    b = n(906732),
    A = n(812206),
    j = n(391650),
    Z = n(600164),
    R = n(605236),
    P = n(749277),
    y = n(492435),
    L = n(353926),
    O = n(506357),
    M = n(36459),
    k = n(236069),
    D = n(305325),
    B = n(281956),
    w = n(574650),
    U = n(665302),
    F = n(434404),
    G = n(918658),
    V = n(859428),
    H = n(963249),
    z = n(774276),
    W = n(14335),
    K = n(246965),
    Y = n(272008),
    X = n(523255),
    Q = n(496729),
    q = n(852923),
    J = n(592125),
    $ = n(430824),
    ee = n(131951),
    et = n(19780),
    en = n(914010),
    ei = n(594174),
    er = n(55563),
    el = n(695103),
    ea = n(933429),
    eo = n(626135),
    es = n(63063),
    ec = n(72924),
    ed = n(69499),
    eu = n(912193),
    em = n(981631),
    eh = n(474936),
    ef = n(610674),
    ep = n(65154),
    eg = n(388032),
    e_ = n(569252);
let eC = () =>
        (0, i.jsxs)(c.Notice, {
            color: c.NoticeColors.DANGER,
            children: [
                (0, i.jsx)(c.NoticeCloseButton, {
                    onClick: () => {
                        eI(), (0, eu.b)();
                    }
                }),
                eg.intl.string(eg.t.nCO9bG),
                (0, i.jsx)(c.NoticeButtonAnchor, {
                    href: es.Z.getArticleURL(em.BhN.NO_INPUT_DETECTED),
                    children: eg.intl.string(eg.t.RYKKo6)
                })
            ]
        }),
    eE = () =>
        (0, i.jsxs)(c.Notice, {
            color: c.NoticeColors.DANGER,
            children: [
                (0, i.jsx)(c.NoticeCloseButton, {
                    onClick: () => {
                        eI(), (0, eu.b)();
                    }
                }),
                eg.intl.string(eg.t.dNAJ19),
                (0, i.jsx)(c.NoticeButton, {
                    onClick: () => {
                        (0, f.jN)(em.S9g.USER_SETTINGS), N.Z.setSection(em.oAB.VOICE);
                    },
                    children: eg.intl.string(eg.t.I6YlBw)
                })
            ]
        });
function eI(e) {
    p.Z.dismiss(null != e ? { untilAtLeast: a()(e) } : void 0);
}
let ex =
    12633 == n.j
        ? r.memo(function () {
              var e, t, l;
              let p = (0, s.e7)([ei.default], () => ei.default.getCurrentUser()),
                  S = (0, s.e7)([en.Z], () => en.Z.getGuildId()),
                  eu = (0, s.e7)([ea.Z], () => ea.Z.getNotice()),
                  ex = (0, s.e7)([$.Z], () => $.Z.getGuild(S)),
                  { analyticsLocations: ev } = (0, b.ZP)(),
                  eN = null == eu ? void 0 : eu.type,
                  eT = (0, B.J)(S);
              r.useEffect(() => {
                  null != eN &&
                      !(function (e, t) {
                          let n = { notice_type: e };
                          null != t && (n.guild_id = t), eo.default.track(em.rMx.APP_NOTICE_VIEWED, n);
                      })(eN, S);
              }, [eN, S]),
                  r.useEffect(() => {
                      if (null != eu && eu.type === em.kVF.SURVEY && null != eu.metadata) {
                          let { metadata: e } = eu,
                              t = L.Z.getUserExperimentDescriptor(e.id);
                          null != t && (0, y.W9)(e.id, t),
                              (async () => {
                                  var e, t;
                                  (null === (e = eu.metadata) || void 0 === e ? void 0 : e.id) != null && (await (0, x.g8)(null === (t = eu.metadata) || void 0 === t ? void 0 : t.id));
                              })();
                      }
                  }, [eu]);
              let eS = (function (e) {
                  let { enabled: t } = (0, z.ZP)(!0, e !== em.kVF.PREMIUM_TIER_2_TRIAL_ENDING);
                  return t || null == e ? null : ea.m[e];
              })(eN);
              if (null == eu) return null;
              if (null != eS)
                  return (0, i.jsx)(P.A, {
                      dismissibleContent: eS,
                      noticeType: eu.type
                  });
              let eb = null === (e = eu.metadata) || void 0 === e ? void 0 : e.premiumType;
              switch (eu.type) {
                  case em.kVF.LURKING_GUILD:
                      return (0, i.jsx)(V.Z, {});
                  case em.kVF.PENDING_MEMBER:
                      return (0, i.jsx)(w.Z, {});
                  case em.kVF.INVITED_TO_SPEAK:
                      return (0, i.jsx)(q.Z, {});
                  case em.kVF.GUILD_RAID_NOTIFICATION:
                      let { dismissUntil: eA } = eu.metadata;
                      return (0, i.jsx)(O.Z, { onDismiss: () => eI(eA) });
                  case em.kVF.WIN32_DEPRECATED_MESSAGE:
                      let { dismissUntil: ej } = eu.metadata;
                      return (0, i.jsxs)(c.Notice, {
                          color: c.NoticeColors.WARNING,
                          children: [
                              (0, i.jsx)(c.NoticeCloseButton, {
                                  onClick: () => eI(ej),
                                  noticeType: em.kVF.WIN32_DEPRECATED_MESSAGE
                              }),
                              eg.intl.format(eg.t['08KQ1N'], { helpCenterLink: es.Z.getArticleURL(em.BhN.WIN32_DEPRECATE) })
                          ]
                      });
                  case em.kVF.WIN7_8_DEPRECATED_MESSAGE:
                      let { dismissUntil: eZ } = eu.metadata;
                      return (0, i.jsxs)(c.Notice, {
                          color: c.NoticeColors.WARNING,
                          children: [
                              (0, i.jsx)(c.NoticeCloseButton, {
                                  onClick: () => eI(eZ),
                                  noticeType: em.kVF.WIN7_8_DEPRECATED_MESSAGE
                              }),
                              eg.intl.format(eg.t['8Je+dX'], { helpCenterLink: es.Z.getArticleURL(em.BhN.WIN7_8_DEPRECATE) })
                          ]
                      });
                  case em.kVF.MACOS_17_18_DEPRECATED_MESSAGE:
                      let { dismissUntil: eR } = eu.metadata;
                      return (0, i.jsxs)(c.Notice, {
                          color: c.NoticeColors.WARNING,
                          children: [
                              (0, i.jsx)(c.NoticeCloseButton, {
                                  onClick: () => eI(eR),
                                  noticeType: em.kVF.MACOS_17_18_DEPRECATED_MESSAGE
                              }),
                              eg.intl.format(eg.t.q8VPLi, { helpCenterLink: es.Z.getArticleURL(em.BhN.MACOS_17_18_DEPRECATE) })
                          ]
                      });
                  case em.kVF.GENERIC:
                      return (0, i.jsxs)(c.Notice, {
                          color: c.NoticeColors.DEFAULT,
                          children: [
                              (0, i.jsx)(c.NoticeCloseButton, {
                                  onClick: () => eI(),
                                  noticeType: em.kVF.GENERIC
                              }),
                              eu.message,
                              null != eu.buttonText
                                  ? (0, i.jsx)(c.PrimaryCTANoticeButton, {
                                        onClick: eu.callback,
                                        noticeType: em.kVF.GENERIC,
                                        children: eu.buttonText
                                    })
                                  : null
                          ]
                      });
                  case em.kVF.LAUNCH_GAME_FAILURE:
                      return (0, i.jsxs)(c.Notice, {
                          color: c.NoticeColors.DANGER,
                          children: [
                              (0, i.jsx)(c.NoticeCloseButton, {
                                  onClick: () => eI(),
                                  noticeType: em.kVF.LAUNCH_GAME_FAILURE
                              }),
                              eu.message,
                              null != eu.buttonText
                                  ? (0, i.jsx)(c.PrimaryCTANoticeButton, {
                                        onClick: eu.callback,
                                        noticeType: em.kVF.LAUNCH_GAME_FAILURE,
                                        children: eu.buttonText
                                    })
                                  : null
                          ]
                      });
                  case em.kVF.VOICE_DISABLED:
                      return (0, i.jsxs)(c.Notice, {
                          color: c.NoticeColors.WARNING,
                          children: [
                              (0, i.jsx)(c.NoticeCloseButton, {
                                  onClick: () => {
                                      g.Z.clearRemoteDisconnectVoiceChannelId(), eI();
                                  },
                                  noticeType: em.kVF.VOICE_DISABLED
                              }),
                              eg.intl.string(eg.t.bOQ3jY),
                              (0, i.jsx)(c.PrimaryCTANoticeButton, {
                                  onClick: () => {
                                      let e = et.Z.getRemoteDisconnectVoiceChannelId();
                                      null != e && null != J.Z.getChannel(e) && _.default.selectVoiceChannel(e);
                                  },
                                  noticeType: em.kVF.VOICE_DISABLED,
                                  children: eg.intl.string(eg.t.vD60Pj)
                              })
                          ]
                      });
                  case em.kVF.VOICE_CONNECTED_LAST_SESSION:
                      return (0, i.jsxs)(c.Notice, {
                          color: c.NoticeColors.DEFAULT,
                          children: [
                              (0, i.jsx)(c.NoticeCloseButton, {
                                  onClick: () => {
                                      g.Z.clearLastSessionVoiceChannelId(), eI();
                                  },
                                  noticeType: em.kVF.VOICE_CONNECTED_LAST_SESSION
                              }),
                              eg.intl.string(eg.t.jY2lUF),
                              (0, i.jsx)(c.PrimaryCTANoticeButton, {
                                  onClick: () => {
                                      let e = et.Z.getLastSessionVoiceChannelId();
                                      null != e && null != J.Z.getChannel(e) && _.default.selectVoiceChannel(e);
                                  },
                                  noticeType: em.kVF.VOICE_CONNECTED_LAST_SESSION,
                                  children: eg.intl.string(eg.t.vD60Pj)
                              })
                          ]
                      });
                  case em.kVF.SPOTIFY_AUTO_PAUSED:
                      let eP = T.Z.get(em.ABu.SPOTIFY);
                      return (0, i.jsxs)(c.Notice, {
                          color: c.NoticeColors.DANGER,
                          children: [
                              (0, i.jsx)(c.NoticeCloseButton, {
                                  onClick: () => eI(),
                                  noticeType: em.kVF.SPOTIFY_AUTO_PAUSED
                              }),
                              (0, i.jsx)('img', {
                                  alt: '',
                                  className: e_.platformIcon,
                                  src: eP.icon.whiteSVG
                              }),
                              eg.intl.string(eg.t['D8Cp7+']),
                              (0, i.jsx)(c.PrimaryCTANoticeButton, {
                                  onClick: () => N.Z.open(em.oAB.VOICE),
                                  noticeType: em.kVF.SPOTIFY_AUTO_PAUSED,
                                  children: eg.intl.string(eg.t.NiTd0d)
                              }),
                              (0, i.jsx)(c.Anchor, {
                                  className: e_.textLinkSmall,
                                  href: es.Z.getArticleURL(em.BhN.SPOTIFY_AUTO_PAUSED),
                                  target: '_blank',
                                  children: eg.intl.string(eg.t.CiqAIS)
                              })
                          ]
                      });
                  case em.kVF.UNCLAIMED_ACCOUNT:
                      return (0, i.jsxs)(c.Notice, {
                          color: c.NoticeColors.DEFAULT,
                          children: [
                              eg.intl.string(eg.t['f+Zaoq']),
                              (0, i.jsx)(c.PrimaryCTANoticeButton, {
                                  noticeType: em.kVF.UNCLAIMED_ACCOUNT,
                                  onClick: () => (eT && null != S ? (0, D.hk)(S) : j.j()),
                                  children: eg.intl.string(eg.t.fiNVio)
                              })
                          ]
                      });
                  case em.kVF.UNVERIFIED_ACCOUNT:
                      return (0, i.jsxs)(c.Notice, {
                          color: c.NoticeColors.DEFAULT,
                          children: [
                              eg.intl.string(eg.t['3sWbf3']),
                              (0, i.jsx)(c.PrimaryCTANoticeButton, {
                                  noticeType: em.kVF.UNVERIFIED_ACCOUNT,
                                  onClick: () => {
                                      m.Z.verifyResend(),
                                          d.Z.show({
                                              title: eg.intl.string(eg.t.LykQYm),
                                              body: eg.intl.format(eg.t.azKEPz, { email: null == p ? void 0 : p.email }),
                                              secondaryConfirmText: eg.intl.string(eg.t.oP5zGB),
                                              onConfirmSecondary: j.j
                                          });
                                  },
                                  children: eg.intl.string(eg.t.WnX4Jy)
                              })
                          ]
                      });
                  case em.kVF.SCHEDULED_MAINTENANCE:
                      if (null == eu.metadata) return null;
                      return (0, i.jsxs)(c.Notice, {
                          color: c.NoticeColors.DEFAULT,
                          children: [
                              (0, i.jsx)(c.NoticeCloseButton, {
                                  onClick: () => C.Z.ackScheduledMaintenance(),
                                  noticeType: em.kVF.SCHEDULED_MAINTENANCE
                              }),
                              eg.intl.format(eg.t.yb96S0, eu.metadata),
                              (0, i.jsx)(c.NoticeButtonAnchor, {
                                  href: ''.concat(em.yXt.STATUS, '/incidents/').concat(eu.metadata.id),
                                  children: eg.intl.string(eg.t.hvVgAQ)
                              })
                          ]
                      });
                  case em.kVF.NO_INPUT_DETECTED:
                      if (!ee.Z.supports(ep.AN.LOOPBACK)) return (0, i.jsx)(eC, {});
                      return (0, i.jsx)(eE, {});
                  case em.kVF.HARDWARE_MUTE:
                      if (null == eu.metadata) return null;
                      let { vendor: ey, model: eL } = eu.metadata;
                      return (0, i.jsxs)(c.Notice, {
                          color: c.NoticeColors.DANGER,
                          children: [
                              eg.intl.format(eg.t.qoDex8, {
                                  vendorName: ey.name,
                                  modelName: eL.name
                              }),
                              (0, i.jsx)(c.NoticeCloseButton, {
                                  onClick: () => {
                                      u.Z.setEnableHardwareMuteNotice(!1), eI();
                                  }
                              }),
                              (0, i.jsx)(c.NoticeButtonAnchor, {
                                  href: eL.url,
                                  target: '_blank',
                                  rel: 'noreferrer noopener',
                                  children: eg.intl.string(eg.t['Yl/Rio'])
                              })
                          ]
                      });
                  case em.kVF.STREAMER_MODE:
                      return (0, i.jsxs)(c.Notice, {
                          color: c.NoticeColors.STREAMER_MODE,
                          children: [
                              (0, i.jsx)(c.NoticeCloseButton, {
                                  onClick: () => eI(),
                                  noticeType: em.kVF.STREAMER_MODE
                              }),
                              eg.intl.string(eg.t.iEgBXl),
                              (0, i.jsx)(c.PrimaryCTANoticeButton, {
                                  onClick: () => I.Z.setEnabled(!1),
                                  noticeType: em.kVF.STREAMER_MODE,
                                  children: eg.intl.string(eg.t.R9GHyc)
                              })
                          ]
                      });
                  case em.kVF.H264_DISABLED:
                      return (0, i.jsxs)(c.Notice, {
                          color: c.NoticeColors.DANGER,
                          children: [
                              (0, i.jsx)(c.NoticeCloseButton, {
                                  onClick: () => {
                                      eI();
                                  }
                              }),
                              eg.intl.string(eg.t.HcErZW),
                              (0, i.jsx)(c.NoticeButton, {
                                  onClick: () => {
                                      (0, f.jN)(em.S9g.USER_SETTINGS), N.Z.setSection(em.oAB.VOICE);
                                  },
                                  children: eg.intl.string(eg.t['51hI/v'])
                              })
                          ]
                      });
                  case em.kVF.DETECTED_OFF_PLATFORM_PREMIUM_PERK:
                      if (null == eu.metadata) return null;
                      let { skuId: eO, applicationId: eM } = eu.metadata,
                          ek = er.Z.get(eO),
                          eD = A.Z.getApplication(eM);
                      if (null == ek || null == eD) return null;
                      let eB = { page: em.ZY5.IN_APP };
                      return (0, i.jsxs)(c.Notice, {
                          color: c.NoticeColors.PREMIUM_TIER_1,
                          children: [
                              (0, i.jsx)(c.NoticeCloseButton, {
                                  onClick: () => h.Z(ek.id),
                                  noticeType: em.kVF.DETECTED_OFF_PLATFORM_PREMIUM_PERK
                              }),
                              (0, i.jsx)(c.NitroWheelIcon, {
                                  size: 'md',
                                  color: 'currentColor',
                                  className: e_.premiumIcon
                              }),
                              eg.intl.format(eg.t['g3MU//'], {
                                  applicationName: eD.name,
                                  skuName: ek.name
                              }),
                              (0, i.jsx)(c.PrimaryCTANoticeButton, {
                                  noticeType: em.kVF.DETECTED_OFF_PLATFORM_PREMIUM_PERK,
                                  onClick: () =>
                                      (0, ec.S)({
                                          applicationId: eD.id,
                                          skuId: ek.id,
                                          openPremiumPaymentModal: () => {
                                              (0, H.Z)({
                                                  initialPlanId: null,
                                                  subscriptionTier: eh.Si.TIER_2,
                                                  analyticsLocations: ev,
                                                  analyticsObject: eB
                                              });
                                          },
                                          analyticsLocations: ev,
                                          analyticsLocationObject: eB,
                                          context: __OVERLAY__ ? em.IlC.OVERLAY : em.IlC.APP
                                      }).then(() => h.Z(ek.id)),
                                  children: eg.intl.string(eg.t.KEwPY2)
                              })
                          ]
                      });
                  case em.kVF.DETECTED_OFF_PLATFORM_PREMIUM_PERK_UPSELL: {
                      if (null == eu.metadata) return null;
                      let { skuId: e, applicationId: t } = eu.metadata,
                          n = er.Z.get(e),
                          r = A.Z.getApplication(t);
                      if (null == n || null == r) return null;
                      return (0, i.jsxs)(c.Notice, {
                          color: c.NoticeColors.PREMIUM_TIER_1,
                          children: [
                              (0, i.jsx)(c.NoticeCloseButton, {
                                  onClick: () => eI(),
                                  noticeType: em.kVF.DETECTED_OFF_PLATFORM_PREMIUM_PERK_UPSELL
                              }),
                              (0, i.jsx)(c.NitroWheelIcon, {
                                  size: 'md',
                                  color: 'currentColor',
                                  className: e_.premiumIcon
                              }),
                              eg.intl.format(eg.t.LquIKC, {
                                  applicationName: r.name,
                                  skuName: n.name
                              }),
                              (0, i.jsx)(c.NoticeButton, {
                                  children: (0, i.jsx)(o.rU, {
                                      onClick: () => eI(),
                                      to: {
                                          pathname: em.Z5c.APPLICATION_STORE_LISTING_SKU(n.id),
                                          state: { scrollRestoration: !1 }
                                      },
                                      children: eg.intl.string(eg.t.hvVgAQ)
                                  })
                              })
                          ]
                      });
                  }
                  case em.kVF.SURVEY: {
                      let e = eu.metadata;
                      if (null == e) return null;
                      let { key: t, prompt: n, cta: r, url: l } = e;
                      return (0, i.jsxs)(c.Notice, {
                          color: c.NoticeColors.CUSTOM,
                          children: [
                              (0, i.jsx)(c.NoticeCloseButton, {
                                  noticeType: em.kVF.SURVEY,
                                  onClick: () => {
                                      (0, x.hZ)(t, !0);
                                  }
                              }),
                              n,
                              (0, i.jsx)(c.PrimaryCTANoticeButton, {
                                  noticeType: em.kVF.SURVEY,
                                  onClick: () => {
                                      window.open(l, '_blank'), (0, x.hZ)(t, !1);
                                  },
                                  children: r
                              })
                          ]
                      });
                  }
                  case em.kVF.SERVER_USAGE_SURVEY:
                      return (0, i.jsxs)(c.Notice, {
                          color: c.NoticeColors.CUSTOM,
                          children: [
                              (0, i.jsx)(c.NoticeCloseButton, {
                                  noticeType: em.kVF.SERVER_USAGE_SURVEY,
                                  onClick: () => {
                                      eI();
                                  }
                              }),
                              eg.intl.format(eg.t.RomvGB, { guildName: null !== (t = null == ex ? void 0 : ex.name) && void 0 !== t ? t : 'this server' }),
                              (0, i.jsx)(c.PrimaryCTANoticeButton, {
                                  noticeType: em.kVF.SERVER_USAGE_SURVEY,
                                  onClick: () => {
                                      window.open('https://discord.sjc1.qualtrics.com/jfe/form/SV_9AHPmGasQ0EvpdQ?user_id='.concat(null == p ? void 0 : p.id, '&guild_id=').concat(null == ex ? void 0 : ex.id), '_blank'), eI();
                                  },
                                  additionalTrackingProps: { guild_id: null == ex ? void 0 : ex.id },
                                  children: eg.intl.string(eg.t['4RQks7'])
                              })
                          ]
                      });
                  case em.kVF.CORRUPT_INSTALLATION:
                      return (0, i.jsxs)(c.Notice, {
                          color: c.NoticeColors.DANGER,
                          children: [
                              eg.intl.string(eg.t.ugxmk5),
                              (0, i.jsx)(c.NoticeButtonAnchor, {
                                  href: es.Z.getArticleURL(em.BhN.CORRUPT_INSTALLATION),
                                  target: '_blank',
                                  children: eg.intl.string(eg.t['6ik4Xl'])
                              })
                          ]
                      });
                  case em.kVF.VIDEO_UNSUPPORTED_BROWSER:
                      return (0, i.jsxs)(c.Notice, {
                          color: c.NoticeColors.WARNING,
                          children: [
                              (0, i.jsx)(c.NoticeCloseButton, {
                                  onClick: () => eI(),
                                  noticeType: em.kVF.VIDEO_UNSUPPORTED_BROWSER
                              }),
                              eg.intl.string(eg.t.wVjKGh),
                              (0, i.jsx)(c.PrimaryCTANoticeButton, {
                                  noticeType: em.kVF.VIDEO_UNSUPPORTED_BROWSER,
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
                                  children: eg.intl.string(eg.t['1WjMbG'])
                              })
                          ]
                      });
                  case em.kVF.DISPATCH_ERROR:
                      if (null == eu.metadata) return null;
                      let { error: ew } = eu.metadata;
                      return (0, i.jsxs)(c.Notice, {
                          color: c.NoticeColors.DANGER,
                          children: [
                              (0, i.jsx)(c.NoticeCloseButton, {
                                  onClick: () => eI(),
                                  noticeType: em.kVF.DISPATCH_ERROR
                              }),
                              null == ew ? void 0 : ew.displayMessage,
                              (0, i.jsx)(c.PrimaryCTANoticeButton, {
                                  noticeType: em.kVF.DISPATCH_ERROR,
                                  onClick: () =>
                                      (0, c.openModalLazy)(async () => {
                                          let { default: e } = await n.e('20212').then(n.bind(n, 915194));
                                          return (t) => (0, i.jsx)(e, { ...t });
                                      }),
                                  children: eg.intl.string(eg.t.hvVgAQ)
                              })
                          ]
                      });
                  case em.kVF.DISPATCH_INSTALL_SCRIPT_PROGRESS:
                      if (null == eu.metadata) return null;
                      let { progress: eU, total: eF, name: eG } = eu.metadata;
                      return (0, i.jsxs)(c.Notice, {
                          color: c.NoticeColors.DEFAULT,
                          children: [
                              (0, i.jsx)(c.NoticeCloseButton, {
                                  onClick: () => eI(),
                                  noticeType: em.kVF.DISPATCH_INSTALL_SCRIPT_PROGRESS
                              }),
                              (0, i.jsxs)(Z.Z, {
                                  justify: Z.Z.Justify.CENTER,
                                  children: [
                                      null != eG
                                          ? eg.intl.formatToPlainString(eg.t['pHj+z8'], {
                                                name: ''.concat(eG),
                                                progress: eU,
                                                total: eF
                                            })
                                          : eg.intl.formatToPlainString(eg.t['lHZn+P'], {
                                                progress: eU,
                                                total: eF
                                            }),
                                      (0, i.jsx)(c.Spinner, {
                                          type: c.Spinner.Type.PULSING_ELLIPSIS,
                                          className: e_.ellipsis
                                      })
                                  ]
                              })
                          ]
                      });
                  case em.kVF.APPLICATION_TEST_MODE:
                      if (null == eu.metadata) return null;
                      if (null != el.Z.testModeEmbeddedApplicationId)
                          return (0, i.jsx)(c.Notice, {
                              color: c.NoticeColors.WARNING,
                              children: (0, i.jsxs)(Z.Z, {
                                  justify: Z.Z.Justify.CENTER,
                                  align: Z.Z.Align.CENTER,
                                  children: [
                                      (0, i.jsx)('div', { children: eg.intl.format(eg.t['1qxVe3'], { applicationName: eu.metadata.applicationName }) }),
                                      (0, i.jsx)(c.NoticeCloseButton, {
                                          onClick: v.mc,
                                          noticeType: em.kVF.APPLICATION_TEST_MODE
                                      })
                                  ]
                              })
                          });
                      return (0, i.jsx)(c.Notice, {
                          color: c.NoticeColors.WARNING,
                          children: (0, i.jsxs)(Z.Z, {
                              justify: Z.Z.Justify.CENTER,
                              align: Z.Z.Align.CENTER,
                              children: [
                                  (0, i.jsx)('div', { children: eg.intl.format(eg.t.Fv5HrK, { applicationName: eu.metadata.applicationName }) }),
                                  (0, i.jsx)(ed.Z, {
                                      dropdownSize: ed.E.DropdownSizes.SMALL,
                                      className: e_.testModeSKUSelector,
                                      color: ed.E.Colors.WHITE,
                                      look: ed.E.Looks.OUTLINED,
                                      size: ed.E.Sizes.MIN,
                                      onSKUSelect: (e) =>
                                          E.yt(e.id, {
                                              analyticsSource: {
                                                  page: null,
                                                  section: em.jXE.NOTIFICATION_BAR,
                                                  object: em.qAy.NAVIGATION_LINK
                                              }
                                          }),
                                      applicationId: eu.metadata.applicationId,
                                      children: eg.intl.string(eg.t.Q5ZgpK)
                                  }),
                                  (0, i.jsx)(c.NoticeCloseButton, {
                                      onClick: v.mc,
                                      noticeType: em.kVF.APPLICATION_TEST_MODE
                                  })
                              ]
                          })
                      });
                  case em.kVF.OUTBOUND_PROMOTION:
                      return (0, i.jsx)(W.Z, {});
                  case em.kVF.VIEWING_ROLES:
                      return (0, i.jsx)(G.Z, {});
                  case em.kVF.PREMIUM_UNCANCEL:
                      return (0, i.jsxs)(c.Notice, {
                          color: eb === eh.p9.TIER_1 ? c.NoticeColors.PREMIUM_TIER_1 : eb === eh.p9.TIER_0 ? c.NoticeColors.PREMIUM_TIER_0 : c.NoticeColors.PREMIUM_TIER_2,
                          children: [
                              (0, i.jsx)(c.NoticeCloseButton, {
                                  noticeType: em.kVF.PREMIUM_UNCANCEL,
                                  onClick: () => {
                                      var e, t;
                                      eI(null === (t = eu.metadata) || void 0 === t ? void 0 : null === (e = t.premiumSubscription) || void 0 === e ? void 0 : e.currentPeriodEnd);
                                  }
                              }),
                              (0, i.jsx)(c.NitroWheelIcon, {
                                  size: 'md',
                                  color: 'currentColor',
                                  className: e_.premiumIcon
                              }),
                              eb === eh.p9.TIER_1 ? eg.intl.formatToPlainString(eg.t.fXv4ws, { daysLeft: eu.metadata.daysLeft }) : eb === eh.p9.TIER_0 ? eg.intl.formatToPlainString(eg.t.ZOHZMj, { daysLeft: eu.metadata.daysLeft }) : eg.intl.formatToPlainString(eg.t.outyHh, { daysLeft: eu.metadata.daysLeft }),
                              (0, i.jsx)(c.PrimaryCTANoticeButton, {
                                  noticeType: em.kVF.PREMIUM_UNCANCEL,
                                  onClick: () => {
                                      var e, t;
                                      eI(null === (t = eu.metadata) || void 0 === t ? void 0 : null === (e = t.premiumSubscription) || void 0 === e ? void 0 : e.currentPeriodEnd),
                                          (0, c.openModalLazy)(async () => {
                                              let { default: e } = await Promise.all([n.e('8016'), n.e('17938'), n.e('87446')]).then(n.bind(n, 561623));
                                              return (t) =>
                                                  (0, i.jsx)(e, {
                                                      ...t,
                                                      daysLeft: eu.metadata.daysLeft,
                                                      premiumType: eb,
                                                      analyticsSource: 'Nag Bar',
                                                      premiumSubscription: eu.metadata.premiumSubscription
                                                  });
                                          });
                                  },
                                  children: eb === eh.p9.TIER_1 ? eg.intl.string(eg.t.BkbUPD) : eb === eh.p9.TIER_0 ? eg.intl.string(eg.t.Px978f) : eg.intl.string(eg.t.LW5tCA)
                              })
                          ]
                      });
                  case em.kVF.PREMIUM_PAST_DUE_ONE_TIME_PAYMENT:
                      let { daysPastDue: eV, dismissUntil: eH } = eu.metadata;
                      return (0, i.jsxs)(c.Notice, {
                          color: c.NoticeColors.WARNING,
                          children: [
                              (0, i.jsx)(c.NoticeCloseButton, {
                                  noticeType: eN,
                                  onClick: () => {
                                      eI(eH);
                                  }
                              }),
                              eg.intl.format(eg.t.zxU0Ki, { daysPastDue: eV }),
                              (0, i.jsx)(c.PrimaryCTANoticeButton, {
                                  noticeType: em.kVF.PREMIUM_PAST_DUE_ONE_TIME_PAYMENT,
                                  onClick: () => {
                                      eI(eH), N.Z.open(em.oAB.SUBSCRIPTIONS);
                                  },
                                  children: eg.intl.string(eg.t.q8rxeX)
                              })
                          ]
                      });
                  case em.kVF.PREMIUM_PAST_DUE_INVALID_PAYMENT:
                      return (0, i.jsxs)(c.Notice, {
                          color: c.NoticeColors.DANGER,
                          children: [
                              (0, i.jsx)(c.NoticeCloseButton, {
                                  noticeType: em.kVF.PREMIUM_PAST_DUE_INVALID_PAYMENT,
                                  onClick: () => {
                                      var e, t;
                                      eI(null === (t = eu.metadata) || void 0 === t ? void 0 : null === (e = t.premiumSubscription) || void 0 === e ? void 0 : e.currentPeriodEnd);
                                  }
                              }),
                              eg.intl.string(eg.t.LlZaoa),
                              (0, i.jsx)(c.PrimaryCTANoticeButton, {
                                  noticeType: em.kVF.PREMIUM_PAST_DUE_INVALID_PAYMENT,
                                  onClick: () => {
                                      var e, t;
                                      eI(null === (t = eu.metadata) || void 0 === t ? void 0 : null === (e = t.premiumSubscription) || void 0 === e ? void 0 : e.currentPeriodEnd), N.Z.open(em.oAB.SUBSCRIPTIONS);
                                  },
                                  children: eg.intl.string(eg.t['Zpd+Ym'])
                              })
                          ]
                      });
                  case em.kVF.PREMIUM_PAST_DUE_MISSING_PAYMENT:
                      return (0, i.jsxs)(c.Notice, {
                          color: c.NoticeColors.WARNING,
                          children: [
                              (0, i.jsx)(c.NoticeCloseButton, {
                                  noticeType: em.kVF.PREMIUM_PAST_DUE_MISSING_PAYMENT,
                                  onClick: () => {
                                      var e, t;
                                      eI(null === (t = eu.metadata) || void 0 === t ? void 0 : null === (e = t.premiumSubscription) || void 0 === e ? void 0 : e.currentPeriodEnd);
                                  }
                              }),
                              eg.intl.string(eg.t['30YfCg']),
                              (0, i.jsx)(c.PrimaryCTANoticeButton, {
                                  noticeType: em.kVF.PREMIUM_PAST_DUE_MISSING_PAYMENT,
                                  onClick: () => {
                                      var e, t;
                                      eI(null === (t = eu.metadata) || void 0 === t ? void 0 : null === (e = t.premiumSubscription) || void 0 === e ? void 0 : e.currentPeriodEnd), N.Z.open(em.oAB.SUBSCRIPTIONS);
                                  },
                                  children: eg.intl.string(eg.t.U5pKWF)
                              })
                          ]
                      });
                  case em.kVF.PREMIUM_MISSING_PAYMENT:
                      return (0, i.jsxs)(c.Notice, {
                          color: c.NoticeColors.WARNING,
                          children: [
                              (0, i.jsx)(c.NoticeCloseButton, {
                                  noticeType: em.kVF.PREMIUM_MISSING_PAYMENT,
                                  onClick: () => {
                                      var e, t;
                                      eI(null === (t = eu.metadata) || void 0 === t ? void 0 : null === (e = t.premiumSubscription) || void 0 === e ? void 0 : e.currentPeriodEnd);
                                  }
                              }),
                              eb === eh.p9.TIER_1 ? eg.intl.formatToPlainString(eg.t.b6QUvb, { daysLeft: eu.metadata.daysLeft }) : eb === eh.p9.TIER_0 ? eg.intl.formatToPlainString(eg.t['tURZ/P'], { daysLeft: eu.metadata.daysLeft }) : eg.intl.formatToPlainString(eg.t.AyC74O, { daysLeft: eu.metadata.daysLeft }),
                              (0, i.jsx)(c.PrimaryCTANoticeButton, {
                                  noticeType: em.kVF.PREMIUM_MISSING_PAYMENT,
                                  onClick: () => {
                                      var e, t;
                                      eI(null === (t = eu.metadata) || void 0 === t ? void 0 : null === (e = t.premiumSubscription) || void 0 === e ? void 0 : e.currentPeriodEnd), N.Z.open(em.oAB.SUBSCRIPTIONS);
                                  },
                                  children: eb === eh.p9.TIER_1 ? eg.intl.string(eg.t.lboF5O) : eb === eh.p9.TIER_0 ? eg.intl.string(eg.t['4UPwOj']) : eg.intl.string(eg.t['P/VvGR'])
                              })
                          ]
                      });
                  case em.kVF.BACK_TO_PREVIOUS_SCREEN:
                      return (0, i.jsx)(U.h, {
                          buttonText: null !== (l = eu.buttonText) && void 0 !== l ? l : eg.intl.string(eg.t['/g10LC']),
                          onGoBack: eu.callback,
                          onDismiss: () => eI(),
                          showCloseButton: !0
                      });
                  case em.kVF.AUTOMOD_QUARANTINED_USER_PROFILE: {
                      let e = { page: em.ZY5.IN_APP };
                      return (0, i.jsx)(k.Z, {
                          guildId: S,
                          analyticsLocations: ev,
                          analyticsLocation: e
                      });
                  }
                  case em.kVF.QUARANTINED:
                      return (0, i.jsxs)(c.Notice, {
                          color: c.NoticeColors.CUSTOM,
                          className: e_.quarantineNotice,
                          children: [
                              eg.intl.string(eg.t.DVFJYW),
                              (0, i.jsx)(c.NoticeButtonAnchor, {
                                  href: ef.Z,
                                  target: '_blank',
                                  children: eg.intl.string(eg.t.kvHdFB)
                              }),
                              (0, i.jsx)(c.Anchor, {
                                  href: es.Z.getArticleURL(em.BhN.QUARANTINE),
                                  target: '_blank',
                                  className: e_.quarantineLearnMoreLink,
                                  children: eg.intl.string(eg.t.hvVgAQ)
                              })
                          ]
                      });
                  case em.kVF.BLOCKED_BY_PROXY:
                      return (0, i.jsxs)(c.Notice, {
                          color: c.NoticeColors.WARNING,
                          children: [
                              eg.intl.string(eg.t.Ugijzs),
                              (0, i.jsx)(c.NoticeButtonAnchor, {
                                  href: ''.concat(em.yXt.STATUS),
                                  children: eg.intl.string(eg.t.hvVgAQ)
                              }),
                              (0, i.jsx)(c.NoticeCloseButton, {
                                  onClick: () => eI(),
                                  noticeType: em.kVF.BLOCKED_BY_PROXY
                              })
                          ]
                      });
                  case em.kVF.AUTO_MODERATION_MENTION_RAID_DETECTION:
                      let { dismissUntil: ez, decisionId: eW } = eu.metadata;
                      return (0, i.jsxs)(c.Notice, {
                          color: c.NoticeColors.WARNING,
                          children: [
                              (0, i.jsx)(c.NoticeCloseButton, {
                                  noticeType: em.kVF.AUTO_MODERATION_MENTION_RAID_DETECTION,
                                  onClick: () => {
                                      null != S && (0, M.T9)(S), eI(ez);
                                  }
                              }),
                              eg.intl.string(eg.t.B8ruyc),
                              (0, i.jsx)(c.NoticeButton, {
                                  onClick: () => {
                                      null != S &&
                                          (0, M.UE)(S, eW, () => {
                                              eI(ez), (0, M.T9)(S);
                                          });
                                  },
                                  children: eg.intl.string(eg.t.oX14Eh)
                              }),
                              null != S
                                  ? (0, i.jsx)(c.NoticeButton, {
                                        onClick: () => F.Z.open(S, em.pNK.GUILD_AUTOMOD, void 0, em.KsC.AUTOMOD_MENTION_SPAM),
                                        children: eg.intl.string(eg.t['1R7QIy'])
                                    })
                                  : null
                          ]
                      });
                  case em.kVF.SAFETY_USER_SENTIMENT_NAGBAR:
                      return (0, i.jsxs)(c.Notice, {
                          color: c.NoticeColors.BRAND,
                          children: [
                              (0, i.jsx)(c.NoticeCloseButton, {
                                  noticeType: em.kVF.SAFETY_USER_SENTIMENT_NAGBAR,
                                  onClick: () => {
                                      X.hZ(), eI();
                                  }
                              }),
                              eg.intl.string(eg.t.I1nKfH),
                              (0, i.jsx)(c.PrimaryCTANoticeButton, {
                                  noticeType: em.kVF.SAFETY_USER_SENTIMENT_NAGBAR,
                                  onClick: () => {
                                      (0, c.openModalLazy)(async () => {
                                          let { default: e } = await n.e('52432').then(n.bind(n, 349994));
                                          return (t) => (0, i.jsx)(e, { ...t });
                                      }),
                                          X.hZ(),
                                          eI();
                                  },
                                  children: eg.intl.string(eg.t.l5xYnJ)
                              })
                          ]
                      });
                  case em.kVF.PREMIUM_TIER_2_TRIAL_ENDING:
                      let eK = a()().add(5, 'days').toDate();
                      return (0, i.jsx)(K.Z, {
                          dismissCurrentNotice: () => {
                              (0, R.EW)(ea.m[em.kVF.PREMIUM_TIER_2_TRIAL_ENDING]), eI(eK);
                          },
                          subscriptionTier: eh.Si.TIER_2
                      });
                  case em.kVF.QUESTS_PROGRESS_INTERRUPTION:
                      return (0, i.jsxs)(c.Notice, {
                          color: c.NoticeColors.DANGER,
                          children: [
                              (0, i.jsx)(c.NoticeCloseButton, {
                                  noticeType: em.kVF.QUESTS_PROGRESS_INTERRUPTION,
                                  onClick: () => {
                                      var e;
                                      (null === (e = eu.metadata) || void 0 === e ? void 0 : e.streamKey) != null && (0, Y.nE)(eu.metadata.streamKey);
                                  }
                              }),
                              eg.intl.string(eg.t.rOx44u)
                          ]
                      });
                  case em.kVF.BLOCK_USER_FEEDBACK_NAGBAR:
                      return (0, i.jsxs)(c.Notice, {
                          color: c.NoticeColors.BRAND,
                          children: [
                              (0, i.jsx)(c.NoticeCloseButton, {
                                  onClick: () => {
                                      var e;
                                      eI(null === (e = eu.metadata) || void 0 === e ? void 0 : e.dismissUntil);
                                  },
                                  noticeType: em.kVF.BLOCK_USER_FEEDBACK_NAGBAR
                              }),
                              eg.intl.string(eg.t['0klLS0']),
                              (0, i.jsx)(c.PrimaryCTANoticeButton, {
                                  onClick: () => {
                                      var e;
                                      (0, Q.Z)(), eI(null === (e = eu.metadata) || void 0 === e ? void 0 : e.dismissUntil);
                                  },
                                  noticeType: em.kVF.BLOCK_USER_FEEDBACK_NAGBAR,
                                  children: eg.intl.string(eg.t.e4y2VF)
                              })
                          ]
                      });
                  default:
                      return null;
              }
          })
        : null;
function ev() {
    let { analyticsLocations: e } = (0, b.ZP)(S.Z.NOTICE);
    return (0, i.jsx)(b.Gt, {
        value: e,
        children: (0, i.jsx)(ex, {})
    });
}
