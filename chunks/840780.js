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
  f = n("115850"),
  h = n("481060"),
  m = n("988298"),
  C = n("475179"),
  p = n("925549"),
  g = n("872810"),
  E = n("438139"),
  _ = n("730749"),
  S = n("607070"),
  I = n("566620"),
  N = n("317381"),
  T = n("620662"),
  A = n("835473"),
  L = n("67212"),
  v = n("757454"),
  x = n("552740"),
  R = n("933557"),
  M = n("311352"),
  y = n("730417"),
  O = n("524347"),
  D = n("853197"),
  b = n("616360"),
  j = n("858064"),
  P = n("594190"),
  G = n("569545"),
  U = n("102172"),
  w = n("74299"),
  B = n("914923"),
  F = n("165393"),
  H = n("989941"),
  V = n("803647"),
  k = n("231664"),
  Y = n("759198"),
  W = n("131704"),
  K = n("199902"),
  z = n("314897"),
  Z = n("592125"),
  X = n("984933"),
  Q = n("430824"),
  J = n("131951"),
  q = n("496675"),
  $ = n("158776"),
  ee = n("699516"),
  et = n("944486"),
  en = n("885110"),
  el = n("594174"),
  ea = n("449224"),
  es = n("366695"),
  ei = n("672752"),
  er = n("499150"),
  eo = n("301822"),
  eu = n("119828"),
  ed = n("87086"),
  ec = n("466111"),
  ef = n("990138"),
  eh = n("761374"),
  em = n("976401"),
  eC = n("333454"),
  ep = n("864441"),
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
  ex = n("497727");

function eR(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
let eM = (0, E.default)(function(e) {
  let {
    message: t
  } = e;
  return (0, l.jsx)(eC.default, {
    children: t
  })
});
class ey extends a.PureComponent {
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
    return null != e && (null != n ? n.applicationId === e.id : null != t && t.application_id === e.id && t.type === eT.ActivityTypes.PLAYING && (0, T.default)(t, eT.ActivityFlags.JOIN))
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
    }) : ev.default.Messages.ACTIVITY_PANEL_GO_LIVE) : (e = !0, t = null, n = eh.default, a = null != o && (0, W.isVoiceChannel)(o.type) ? ev.default.Messages.ACTIVITY_PANEL_GO_LIVE_TOOLTIP_NO_PERMISSION_IN_VOICE : null != i ? ev.default.Messages.ACTIVITY_PANEL_GO_LIVE_TOOLTIP_NO_PERMISSION_IN_GUILD : ev.default.Messages.ACTIVITY_PANEL_GO_LIVE_TOOLTIP_NOT_IN_GUILD), (0, l.jsx)("div", {
      className: ex.panelButtonContainer,
      children: (0, l.jsx)(em.default, {
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
    return this.isJoinableActivity() && null == e ? (0, l.jsx)(em.default, {
      tooltipText: ev.default.Messages.INVITE_EMBED_INVITE_TO_JOIN,
      onClick: this.handleClickInviteButton,
      icon: f.GroupPlusIcon,
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
    return (0, l.jsx)(h.Popout, {
      shouldShow: n,
      position: "top",
      align: "center",
      onRequestClose: a,
      renderPopout: () => (0, l.jsx)(j.default, {
        partnerGame: t,
        tooltipAction: e,
        onClose: a
      }),
      children: () => (0, l.jsxs)(l.Fragment, {
        children: [this.state.showDropsSparkles && this.renderSparkles(), (0, l.jsx)(em.default, {
          "aria-label": ev.default.Messages.DROPS_ENABLED,
          tooltipText: n ? null : ev.default.Messages.DROPS_ENABLED,
          onClick: this.handleClickDropsButton,
          icon: b.default
        })]
      })
    })
  }
  renderLeaveEmbeddedActivityButton() {
    let {
      embeddedActivity: e,
      channel: t
    } = this.props;
    return null == e || null == t ? null : (0, l.jsx)(em.default, {
      tooltipText: ev.default.Messages.EMBEDDED_ACTIVITIES_LEAVE_ACTIVITY,
      onClick: this.handleClickLeaveEmbeddedActivityButton(e.applicationId, t),
      icon: ed.default,
      iconForeground: ex.__invalid_actionIcon
    })
  }
  renderBroadcastButton() {
    let {
      channel: e
    } = this.props;
    return null != e && (0, W.isVoiceChannel)(e.type) ? null : (0, l.jsx)(eI.default, {})
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
      children: (0, l.jsx)(eo.default, {
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
        children: [(0, l.jsx)(es.default, {
          className: ex.gameIcon,
          game: n,
          pid: null == a ? void 0 : a.pid
        }), e ? (0, l.jsx)(eu.default, {
          className: ex.liveBadge
        }) : null]
      }), (0, l.jsx)("div", {
        className: i()(ex.info, {
          [ex.infoWithDrops]: null != t
        }),
        children: null != s ? (0, l.jsxs)(l.Fragment, {
          children: [(0, l.jsx)(ep.default, {
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
    } = (0, B.default)(n);
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
        children: [(0, l.jsx)(ep.default, {
          children: s
        }), null != a && (0, l.jsxs)("div", {
          className: ex.perksDemoContainer,
          children: [(0, l.jsx)(ec.default, {
            color: ei.GradientCssUrls.PREMIUM_TIER_2,
            width: 12,
            height: 12
          }), (0, l.jsx)(Y.default, {
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
    let u = (0, l.jsx)(er.default, {
      href: e,
      onClick: this.handleApplicationLinkClick,
      children: (0, l.jsx)(eC.default, {
        className: ex.channel,
        children: o
      })
    });
    return (0, l.jsxs)("div", {
      className: ex.gameWrapper,
      children: [(0, l.jsx)(es.default, {
        className: ex.gameIcon,
        game: t
      }), (0, l.jsxs)("div", {
        className: ex.info,
        children: [(0, l.jsx)(er.default, {
          href: e,
          onClick: this.handleApplicationLinkClick,
          children: (0, l.jsx)(ep.default, {
            className: ex.activityName,
            children: t.name
          })
        }), (0, W.isTextChannel)(a.type) ? u : (0, l.jsx)(eM, {
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
      } = this.props, l = null != t && (0, W.isVoiceChannel)(t.type) ? t : null;
      null != l && null != n && (null == e ? (0, g.createBroadcastChannelOrStartStream)({
        channelId: l.id,
        pid: n.pid
      }) : (0, L.startBroadcastForStream)((0, G.encodeStreamKey)(e), n.pid))
    }), eR(this, "handleClickGoLiveButton", () => {
      let {
        guildId: e,
        channel: t,
        canStartBroadcast: a
      } = this.props, s = null != t && (0, W.isVoiceChannel)(t.type) ? t : null, i = null != s ? s.getGuildId() : e;
      if ((null == s ? void 0 : s.isBroadcastChannel()) && a) {
        (0, x.openStartBroadcastConfirmModal)(this.startBroadcast);
        return
      }(0, h.openModalLazy)(async () => {
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
      } = this.props, l = null != t && (0, W.isVoiceChannel)(t.type) ? t : null;
      if ((null == l ? void 0 : l.isBroadcastChannel()) && (null == l ? void 0 : l.isOwner(n))) {
        (0, x.openStopBroadcastConfirmModal)(() => (0, V.default)(e));
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
      }), (0, m.openModal)(e, !1)
    }), eR(this, "handleClickDropsButton", () => {
      let {
        dropsPartnerGame: e,
        dropsTooltipAction: t,
        userId: n
      } = this.props;
      if (null == e) return;
      let l = (0, D.getDrop)(e);
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
      (0, I.stopEmbeddedActivity)({
        channelId: t.id,
        applicationId: e
      })
    }), eR(this, "renderClipsButton", () => {
      let {
        stream: e
      } = this.props;
      return null == e ? null : (0, l.jsx)(M.default, {})
    }), eR(this, "handleApplicationLinkClick", () => {
      var e;
      let {
        channel: t,
        embeddedActivity: n
      } = this.props;
      o()(null != t, "Channel is null during navigation click"), o()(null != n, "Activity null during navigation click"), (0, W.isVoiceChannel)(t.type) && C.default.selectParticipant(t.id, n.applicationId), p.default.channelListScrollTo(null !== (e = t.guild_id) && void 0 !== e ? e : eT.ME, t.id), (0, W.isTextChannel)(t.type) && (0, I.updateActivityPanelMode)(eA.ActivityPanelModes.PANEL)
    })
  }
}
t.default = (0, _.default)(function(e) {
  var t;
  let {
    guildId: n,
    ...a
  } = e, s = (0, u.useStateFromStores)([z.default], () => z.default.getId()), i = (0, u.useStateFromStores)([P.default, ea.default], () => (0, H.default)(P.default, ea.default)), r = (0, u.useStateFromStores)([et.default, Z.default], () => Z.default.getChannel(et.default.getVoiceChannelId())), o = (0, u.useStateFromStores)([N.default], () => N.default.getConnectedActivityChannelId()), c = (0, u.useStateFromStores)([Z.default], () => Z.default.getChannel(o)), f = (0, u.useStateFromStores)([Q.default], () => Q.default.getGuild(null == c ? void 0 : c.guild_id)), [h, m] = (0, u.useStateFromStoresArray)([K.default], () => [K.default.getCurrentUserActiveStream(), K.default.getStreamerActiveStreamMetadata()]), C = (0, u.useStateFromStores)([S.default], () => S.default.useReducedMotion), p = (0, u.useStateFromStores)([O.default], () => O.default.getActivityPanelTooltipAction()), {
    partnerGame: g,
    dropsActivityPanelExperienceBlocked: E,
    showDropsSparkles: _
  } = (0, y.useActivityPanelDrop)(eL.PartnerGame.FORTNITE, i, d.DismissibleContent.QUEST_2_ENROLLMENT_TOOLTIP, d.DismissibleContent.QUEST_2_COMPLETION_TOOLTIP), I = (0, u.useStateFromStores)([N.default], () => null != c ? N.default.getSelfEmbeddedActivityForChannel(c.id) : null), T = (0, u.useStateFromStores)([Q.default, q.default, X.default], () => null != r ? U.canStreamInChannel(r, Q.default, q.default, !1) : null != n && U.getStreamEligibleChannels(X.default.getChannels(n), Q.default, q.default).length > 0), [L] = (0, A.default)([null !== (t = function() {
    if (null != m && null != m.id) return m.id;
    if (null != i && null != i.id) return i.id;
    if (null != I) return I.applicationId
  }()) && void 0 !== t ? t : ""]), x = (0, u.useStateFromStores)([J.default], () => (0, w.default)(J.default) && (0, eS.isWindows)()), M = (0, u.useStateFromStores)([$.default], () => null != s ? $.default.findActivity(s, e => e.type === eT.ActivityTypes.PLAYING) : null), D = null != h && h.ownerId === s && h.state !== eT.ApplicationStreamStates.ENDED, b = (0, u.useStateFromStores)([en.default], () => en.default.getBroadcast()), j = (0, v.default)() && null != i, G = (0, u.useStateFromStores)([el.default, ee.default], () => null != c ? (0, R.computeChannelName)(c, el.default, ee.default) : void 0), B = (0, k.default)(null == r ? void 0 : r.id, s);
  return (0, l.jsx)(ey, {
    ...a,
    guildId: n,
    canGoLive: x,
    activity: M,
    embeddedActivity: I,
    showDropsSparkles: _,
    dropsPartnerGame: g,
    dropsActivityPanelExperienceBlocked: E,
    userId: s,
    runningGame: i,
    application: L,
    useReducedMotion: C,
    isStreaming: D,
    channel: c,
    canStream: T,
    dropsTooltipAction: p,
    stream: h,
    streamMetadata: m,
    broadcast: b,
    canStartBroadcast: j,
    channelName: G,
    guildForConnectedChannel: f,
    streamQualityIndicator: B
  })
})