"use strict";
n.r(t), n("47120");
var l = n("735250"),
  a = n("470079"),
  s = n("120356"),
  i = n.n(s),
  r = n("512722"),
  o = n.n(r),
  u = n("442837"),
  d = n("524437"),
  c = n("692547"),
  f = n("481060"),
  h = n("24124"),
  p = n("475179"),
  m = n("925549"),
  C = n("872810"),
  g = n("438139"),
  E = n("730749"),
  _ = n("607070"),
  S = n("566620"),
  I = n("317381"),
  N = n("620662"),
  T = n("835473"),
  A = n("67212"),
  L = n("757454"),
  v = n("552740"),
  x = n("933557"),
  R = n("311352"),
  M = n("730417"),
  O = n("524347"),
  y = n("853197"),
  D = n("616360"),
  b = n("858064"),
  j = n("594190"),
  P = n("569545"),
  G = n("102172"),
  U = n("74299"),
  w = n("914923"),
  F = n("165393"),
  B = n("989941"),
  V = n("803647"),
  H = n("231664"),
  k = n("759198"),
  Y = n("131704"),
  K = n("199902"),
  W = n("314897"),
  z = n("592125"),
  Z = n("984933"),
  X = n("430824"),
  Q = n("131951"),
  q = n("496675"),
  J = n("158776"),
  $ = n("699516"),
  ee = n("944486"),
  et = n("885110"),
  en = n("594174"),
  el = n("449224"),
  ea = n("366695"),
  es = n("672752"),
  ei = n("499150"),
  er = n("301822"),
  eo = n("119828"),
  eu = n("87086"),
  ed = n("466111"),
  ec = n("782089"),
  ef = n("990138"),
  eh = n("761374"),
  ep = n("976401"),
  em = n("333454"),
  eC = n("864441"),
  eg = n("26290"),
  eE = n("368666"),
  e_ = n("626135"),
  eS = n("358085"),
  eI = n("793224"),
  eN = n("978769"),
  eT = n("981631"),
  eA = n("918559"),
  eL = n("702512"),
  ev = n("689938"),
  ex = n("699045");

function eR(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
let eM = (0, g.default)(function(e) {
  let {
    message: t
  } = e;
  return (0, l.jsx)(em.default, {
    children: t
  })
});
class eO extends a.PureComponent {
  componentDidUpdate(e) {
    !e.dropsActivityPanelExperienceBlocked && this.props.dropsActivityPanelExperienceBlocked && this.setState({
      isDropsActivityPanelTooltipOpen: !1
    })
  }
  isJoinableActivity() {
    let {
      application: e,
      activity: t,
      embeddedActivity: n
    } = this.props;
    return null != e && (null != n ? n.applicationId === e.id : null != t && t.application_id === e.id && t.type === eT.ActivityTypes.PLAYING && (0, N.default)(t, eT.ActivityFlags.JOIN))
  }
  renderGoLiveButton() {
    let e, t, n, a;
    let {
      canGoLive: s,
      guildId: i,
      isStreaming: r,
      channel: o,
      canStream: u,
      runningGame: d,
      embeddedActivity: c
    } = this.props;
    return (null != d || null == c) && (r || s && null != d) ? (r ? (e = !1, t = this.handleClickStopStreamingButton, n = ef.default, a = ev.default.Messages.STOP_STREAMING) : u ? (e = !1, t = this.handleClickGoLiveButton, n = eh.default, a = null != d ? ev.default.Messages.ACTIVITY_PANEL_GO_LIVE_STREAM_GAME.format({
      game: d.name
    }) : ev.default.Messages.ACTIVITY_PANEL_GO_LIVE) : (e = !0, t = null, n = eh.default, a = null != o && (0, Y.isVoiceChannel)(o.type) ? ev.default.Messages.ACTIVITY_PANEL_GO_LIVE_TOOLTIP_NO_PERMISSION_IN_VOICE : null != i ? ev.default.Messages.ACTIVITY_PANEL_GO_LIVE_TOOLTIP_NO_PERMISSION_IN_GUILD : ev.default.Messages.ACTIVITY_PANEL_GO_LIVE_TOOLTIP_NOT_IN_GUILD), (0, l.jsx)("div", {
      className: ex.panelButtonContainer,
      children: (0, l.jsx)(ep.default, {
        tooltipText: a,
        disabled: e,
        onClick: t,
        icon: n,
        iconForeground: ex.__invalid_actionIcon
      })
    })) : null
  }
  renderInviteButton() {
    let {
      embeddedActivity: e
    } = this.props;
    return this.isJoinableActivity() && null == e ? (0, l.jsx)(ep.default, {
      tooltipText: ev.default.Messages.INVITE_EMBED_INVITE_TO_JOIN,
      onClick: this.handleClickInviteButton,
      icon: ec.default,
      iconForeground: ex.__invalid_actionIcon
    }) : null
  }
  renderDropsButton() {
    let {
      dropsTooltipAction: e,
      dropsPartnerGame: t
    } = this.props;
    if (null == t) return null;
    let n = this.state.isDropsActivityPanelTooltipOpen,
      a = () => this.setState({
        isDropsActivityPanelTooltipOpen: !1
      });
    return (0, l.jsx)(f.Popout, {
      shouldShow: n,
      position: "top",
      align: "center",
      onRequestClose: a,
      renderPopout: () => (0, l.jsx)(b.default, {
        partnerGame: t,
        tooltipAction: e,
        onClose: a
      }),
      children: () => (0, l.jsxs)(l.Fragment, {
        children: [this.state.showDropsSparkles && this.renderSparkles(), (0, l.jsx)(ep.default, {
          "aria-label": ev.default.Messages.DROPS_ENABLED,
          tooltipText: n ? null : ev.default.Messages.DROPS_ENABLED,
          onClick: this.handleClickDropsButton,
          icon: D.default
        })]
      })
    })
  }
  renderLeaveEmbeddedActivityButton() {
    let {
      embeddedActivity: e,
      channel: t
    } = this.props;
    return null == e || null == t ? null : (0, l.jsx)(ep.default, {
      tooltipText: ev.default.Messages.EMBEDDED_ACTIVITIES_LEAVE_ACTIVITY,
      onClick: this.handleClickLeaveEmbeddedActivityButton(e.applicationId, t),
      icon: eu.default,
      iconForeground: ex.__invalid_actionIcon
    })
  }
  renderBroadcastButton() {
    let {
      channel: e
    } = this.props;
    return null != e && (0, Y.isVoiceChannel)(e.type) ? null : (0, l.jsx)(eI.default, {})
  }
  renderBroadcastSettingsButton() {
    let {
      broadcast: e
    } = this.props;
    return null == e ? null : (0, l.jsx)(eN.default, {})
  }
  renderSparkles() {
    let {
      useReducedMotion: e
    } = this.props;
    async function t() {
      let {
        default: e
      } = await n.e("5217").then(n.t.bind(n, "801048", 19));
      return e
    }
    return (0, l.jsx)("div", {
      className: ex.sparkleContainer,
      children: (0, l.jsx)(er.default, {
        importData: t,
        shouldAnimate: !e,
        className: ex.sparkles
      })
    })
  }
  renderActions() {
    let e = this.renderGoLiveButton(),
      t = this.renderDropsButton(),
      n = this.renderInviteButton(),
      a = this.renderLeaveEmbeddedActivityButton(),
      s = this.renderClipsButton(),
      i = this.renderBroadcastButton(),
      r = this.renderBroadcastSettingsButton();
    return null == e && null == n && null == a ? null : (0, l.jsxs)("div", {
      className: ex.actions,
      children: [i, e, r, n, null == e ? a : s, t]
    })
  }
  getGameName() {
    let {
      runningGame: e,
      application: t
    } = this.props;
    return null != t ? t.name : null != e ? e.name : ev.default.Messages.STATUS_UNKNOWN
  }
  renderGame() {
    let {
      isStreaming: e,
      dropsPartnerGame: t,
      application: n,
      runningGame: a
    } = this.props, s = this.getGameName();
    return (0, l.jsxs)("div", {
      className: i()(ex.gameWrapper, {
        [ex.clickableGameWrapper]: null != n
      }),
      children: [(0, l.jsxs)("div", {
        className: ex.gameIconWrapper,
        children: [(0, l.jsx)(ea.default, {
          className: ex.gameIcon,
          game: n,
          pid: null == a ? void 0 : a.pid
        }), e ? (0, l.jsx)(eo.default, {
          className: ex.liveBadge
        }) : null]
      }), (0, l.jsx)("div", {
        className: i()(ex.info, {
          [ex.infoWithDrops]: null != t
        }),
        children: null != s ? (0, l.jsxs)(l.Fragment, {
          children: [(0, l.jsx)(eC.default, {
            children: s
          }), null != t && (0, l.jsx)("div", {
            className: ex.dropsBadgeWrapper,
            children: (0, l.jsx)(eg.TextBadge, {
              text: ev.default.Messages.DROPS_AVAILABLE,
              color: c.default.unsafe_rawColors.BRAND_500.css,
              className: ex.dropsBadge
            })
          })]
        }) : null
      })]
    })
  }
  renderScreenshare() {
    let {
      isStreaming: e,
      dropsPartnerGame: t,
      streamMetadata: n,
      streamQualityIndicator: a
    } = this.props, {
      title: s,
      sanitizedTitle: r
    } = (0, w.default)(n);
    return (0, l.jsxs)("div", {
      className: ex.gameWrapper,
      children: [e ? (0, l.jsx)(F.default, {
        title: r
      }) : (0, l.jsx)(eE.default, {
        look: eE.default.Looks.GRAY,
        size: eE.default.Sizes.SMALL,
        className: ex.liveIndicator
      }), (0, l.jsxs)("div", {
        className: i()(ex.info, {
          [ex.infoWithDrops]: null != t
        }),
        children: [(0, l.jsx)(eC.default, {
          children: s
        }), null != a && (0, l.jsxs)("div", {
          className: ex.perksDemoContainer,
          children: [(0, l.jsx)(ed.default, {
            color: es.GradientCssUrls.PREMIUM_TIER_2,
            width: 12,
            height: 12
          }), (0, l.jsx)(k.default, {
            className: ex.perksDemoText,
            variant: "text-xxs/semibold",
            children: a
          })]
        }), null != t && (0, l.jsx)("div", {
          className: ex.dropsBadgeWrapper,
          children: (0, l.jsx)(eg.TextBadge, {
            text: ev.default.Messages.DROPS_AVAILABLE,
            color: c.default.unsafe_rawColors.BRAND_500.css,
            className: ex.dropsBadge
          })
        })]
      })]
    })
  }
  renderEmbeddedActivity() {
    let e;
    let {
      application: t,
      embeddedActivity: n,
      channel: a,
      channelName: s,
      guildForConnectedChannel: i
    } = this.props;
    if (null == n || null == a || null == t) return null;
    let r = {
        start: n.connectedSince
      },
      o = s;
    null != i ? (e = eT.Routes.CHANNEL(i.id, a.id), o = "".concat(o, " / ").concat(i.name)) : e = eT.Routes.CHANNEL(eT.ME, a.id);
    let u = (0, l.jsx)(ei.default, {
      href: e,
      onClick: this.handleApplicationLinkClick,
      children: (0, l.jsx)(em.default, {
        className: ex.channel,
        children: o
      })
    });
    return (0, l.jsxs)("div", {
      className: ex.gameWrapper,
      children: [(0, l.jsx)(ea.default, {
        className: ex.gameIcon,
        game: t
      }), (0, l.jsxs)("div", {
        className: ex.info,
        children: [(0, l.jsx)(ei.default, {
          href: e,
          onClick: this.handleApplicationLinkClick,
          children: (0, l.jsx)(eC.default, {
            className: ex.activityName,
            children: t.name
          })
        }), (0, Y.isTextChannel)(a.type) ? u : (0, l.jsx)(eM, {
          timestamps: r
        })]
      })]
    })
  }
  render() {
    let {
      canGoLive: e,
      embeddedActivity: t,
      runningGame: n,
      isStreaming: a,
      streamMetadata: s,
      className: r
    } = this.props;
    return a || (this.isJoinableActivity() || e) && (null != n || null != t) ? (0, l.jsx)("div", {
      className: i()(ex.panel, r),
      children: (0, l.jsxs)("div", {
        className: ex.body,
        children: [(() => null == n || a && (null == s ? void 0 : s.pid) == null ? null != t ? this.renderEmbeddedActivity() : this.renderScreenshare() : this.renderGame())(), this.renderActions()]
      })
    }) : null
  }
  constructor(...e) {
    super(...e), eR(this, "modalKey", void 0), eR(this, "state", {
      isDropsActivityPanelTooltipOpen: !1,
      showDropsSparkles: this.props.showDropsSparkles
    }), eR(this, "startBroadcast", () => {
      let {
        stream: e,
        channel: t,
        runningGame: n
      } = this.props, l = null != t && (0, Y.isVoiceChannel)(t.type) ? t : null;
      null != l && null != n && (null == e ? (0, C.createBroadcastChannelOrStartStream)({
        channelId: l.id,
        pid: n.pid
      }) : (0, A.startBroadcastForStream)((0, P.encodeStreamKey)(e), n.pid))
    }), eR(this, "handleClickGoLiveButton", () => {
      let {
        guildId: e,
        channel: t,
        canStartBroadcast: a
      } = this.props, s = null != t && (0, Y.isVoiceChannel)(t.type) ? t : null, i = null != s ? s.getGuildId() : e;
      if ((null == s ? void 0 : s.isBroadcastChannel()) && a) {
        (0, v.openStartBroadcastConfirmModal)(this.startBroadcast);
        return
      }(0, f.openModalLazy)(async () => {
        let {
          default: e
        } = await Promise.all([n.e("49237"), n.e("99387"), n.e("79477"), n.e("33641")]).then(n.bind(n, "60594"));
        return t => (0, l.jsx)(e, {
          ...t,
          selectSource: !1,
          guildId: i,
          analyticsLocation: eT.AnalyticsLocations.ACTIVITY_PANEL
        })
      }).then(e => {
        null != e && (this.modalKey = e)
      })
    }), eR(this, "handleClickStopStreamingButton", () => {
      let {
        stream: e,
        channel: t,
        userId: n
      } = this.props, l = null != t && (0, Y.isVoiceChannel)(t.type) ? t : null;
      if ((null == l ? void 0 : l.isBroadcastChannel()) && (null == l ? void 0 : l.isOwner(n))) {
        (0, v.openStopBroadcastConfirmModal)(() => (0, V.default)(e));
        return
      }(0, V.default)(e)
    }), eR(this, "handleClickInviteButton", () => {
      let {
        activity: e,
        analyticsContext: t
      } = this.props;
      o()(null != e, "Received null activity"), e_.default.track(eT.AnalyticEvents.OPEN_MODAL, {
        type: "Send Join Invite",
        application_id: e.application_id,
        location: t.location
      }), (0, h.openModal)(e, !1)
    }), eR(this, "handleClickDropsButton", () => {
      let {
        dropsPartnerGame: e,
        dropsTooltipAction: t,
        userId: n
      } = this.props;
      if (null == e) return;
      let l = (0, y.getDrop)(e);
      null != l && (e_.default.track(eT.AnalyticEvents.DROPS_ACTIVITY_PANEL_BUTTON_CLICK, {
        user_id: n,
        drops_quest_id: l.dropsQuestId,
        game_id: l.dropsGameId,
        game_name: l.title.toLowerCase(),
        show_sparkles: this.state.showDropsSparkles,
        tooltip_action: t
      }), this.setState({
        isDropsActivityPanelTooltipOpen: !this.state.isDropsActivityPanelTooltipOpen,
        showDropsSparkles: !1
      }))
    }), eR(this, "handleClickLeaveEmbeddedActivityButton", (e, t) => () => {
      (0, S.stopEmbeddedActivity)({
        channelId: t.id,
        applicationId: e
      })
    }), eR(this, "renderClipsButton", () => {
      let {
        stream: e
      } = this.props;
      return null == e ? null : (0, l.jsx)(R.default, {})
    }), eR(this, "handleApplicationLinkClick", () => {
      var e;
      let {
        channel: t,
        embeddedActivity: n
      } = this.props;
      o()(null != t, "Channel is null during navigation click"), o()(null != n, "Activity null during navigation click"), (0, Y.isVoiceChannel)(t.type) && p.default.selectParticipant(t.id, n.applicationId), m.default.channelListScrollTo(null !== (e = t.guild_id) && void 0 !== e ? e : eT.ME, t.id), (0, Y.isTextChannel)(t.type) && (0, S.updateActivityPanelMode)(eA.ActivityPanelModes.PANEL)
    })
  }
}
t.default = (0, E.default)(function(e) {
  var t;
  let {
    guildId: n,
    ...a
  } = e, s = (0, u.useStateFromStores)([W.default], () => W.default.getId()), i = (0, u.useStateFromStores)([j.default, el.default], () => (0, B.default)(j.default, el.default)), r = (0, u.useStateFromStores)([ee.default, z.default], () => z.default.getChannel(ee.default.getVoiceChannelId())), o = (0, u.useStateFromStores)([I.default], () => I.default.getConnectedActivityChannelId()), c = (0, u.useStateFromStores)([z.default], () => z.default.getChannel(o)), f = (0, u.useStateFromStores)([X.default], () => X.default.getGuild(null == c ? void 0 : c.guild_id)), [h, p] = (0, u.useStateFromStoresArray)([K.default], () => [K.default.getCurrentUserActiveStream(), K.default.getStreamerActiveStreamMetadata()]), m = (0, u.useStateFromStores)([_.default], () => _.default.useReducedMotion), C = (0, u.useStateFromStores)([O.default], () => O.default.getActivityPanelTooltipAction()), {
    partnerGame: g,
    dropsActivityPanelExperienceBlocked: E,
    showDropsSparkles: S
  } = (0, M.useActivityPanelDrop)(eL.PartnerGame.FORTNITE, i, d.DismissibleContent.QUEST_2_ENROLLMENT_TOOLTIP, d.DismissibleContent.QUEST_2_COMPLETION_TOOLTIP), N = (0, u.useStateFromStores)([I.default], () => null != c ? I.default.getSelfEmbeddedActivityForChannel(c.id) : null), A = (0, u.useStateFromStores)([X.default, q.default, Z.default], () => null != r ? G.canStreamInChannel(r, X.default, q.default, !1) : null != n && G.getStreamEligibleChannels(Z.default.getChannels(n), X.default, q.default).length > 0), [v] = (0, T.default)([null !== (t = function() {
    if (null != p && null != p.id) return p.id;
    if (null != i && null != i.id) return i.id;
    if (null != N) return N.applicationId
  }()) && void 0 !== t ? t : ""]), R = (0, u.useStateFromStores)([Q.default], () => (0, U.default)(Q.default) && (0, eS.isWindows)()), y = (0, u.useStateFromStores)([J.default], () => null != s ? J.default.findActivity(s, e => e.type === eT.ActivityTypes.PLAYING) : null), D = null != h && h.ownerId === s && h.state !== eT.ApplicationStreamStates.ENDED, b = (0, u.useStateFromStores)([et.default], () => et.default.getBroadcast()), P = (0, L.default)() && null != i, w = (0, u.useStateFromStores)([en.default, $.default], () => null != c ? (0, x.computeChannelName)(c, en.default, $.default) : void 0), F = (0, H.default)(null == r ? void 0 : r.id, s);
  return (0, l.jsx)(eO, {
    ...a,
    guildId: n,
    canGoLive: R,
    activity: y,
    embeddedActivity: N,
    showDropsSparkles: S,
    dropsPartnerGame: g,
    dropsActivityPanelExperienceBlocked: E,
    userId: s,
    runningGame: i,
    application: v,
    useReducedMotion: m,
    isStreaming: D,
    channel: c,
    canStream: A,
    dropsTooltipAction: C,
    stream: h,
    streamMetadata: p,
    broadcast: b,
    canStartBroadcast: P,
    channelName: w,
    guildForConnectedChannel: f,
    streamQualityIndicator: F
  })
})