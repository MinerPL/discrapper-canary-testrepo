"use strict";
n.r(t), n.d(t, {
  default: function() {
    return ev
  }
}), n("222007");
var l = n("37983"),
  a = n("884691"),
  s = n("414456"),
  i = n.n(s),
  r = n("627445"),
  o = n.n(r),
  u = n("446674"),
  d = n("151426"),
  c = n("669491"),
  f = n("77078"),
  h = n("636974"),
  C = n("255397"),
  p = n("406189"),
  m = n("990766"),
  E = n("832627"),
  g = n("86621"),
  I = n("206230"),
  S = n("550766"),
  _ = n("191225"),
  N = n("871388"),
  T = n("442939"),
  A = n("713726"),
  L = n("705565"),
  v = n("858944"),
  x = n("679653"),
  R = n("228854"),
  M = n("243632"),
  O = n("180273"),
  y = n("579565"),
  D = n("917973"),
  b = n("48683"),
  j = n("161454"),
  G = n("374014"),
  U = n("223913"),
  P = n("479788"),
  w = n("560367"),
  F = n("293383"),
  B = n("375202"),
  V = n("16916"),
  H = n("233069"),
  k = n("373469"),
  Y = n("271938"),
  K = n("42203"),
  W = n("923959"),
  Z = n("305961"),
  z = n("42887"),
  X = n("957255"),
  Q = n("824563"),
  q = n("27618"),
  J = n("18494"),
  $ = n("101125"),
  ee = n("697218"),
  et = n("703370"),
  en = n("953109"),
  el = n("37785"),
  ea = n("491605"),
  es = n("437825"),
  ei = n("893011"),
  er = n("76539"),
  eo = n("985622"),
  eu = n("619911"),
  ed = n("962541"),
  ec = n("762489"),
  ef = n("329858"),
  eh = n("956089"),
  eC = n("980423"),
  ep = n("599110"),
  em = n("773336"),
  eE = n("974165"),
  eg = n("733335"),
  eI = n("49111"),
  eS = n("272505"),
  e_ = n("411511"),
  eN = n("782340"),
  eT = n("588432");
let eA = (0, E.default)(function(e) {
  let {
    message: t
  } = e;
  return (0, l.jsx)(ec.default, {
    children: t
  })
});
class eL extends a.PureComponent {
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
    return null != e && (null != n ? n.applicationId === e.id : null != t && t.application_id === e.id && t.type === eI.ActivityTypes.PLAYING && (0, N.default)(t, eI.ActivityFlags.JOIN))
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
    return (null != d || null == c) && (r || s && null != d) ? (r ? (e = !1, t = this.handleClickStopStreamingButton, n = eo.default, a = eN.default.Messages.STOP_STREAMING) : u ? (e = !1, t = this.handleClickGoLiveButton, n = eu.default, a = null != d ? eN.default.Messages.ACTIVITY_PANEL_GO_LIVE_STREAM_GAME.format({
      game: d.name
    }) : eN.default.Messages.ACTIVITY_PANEL_GO_LIVE) : (e = !0, t = null, n = eu.default, a = null != o && (0, H.isVoiceChannel)(o.type) ? eN.default.Messages.ACTIVITY_PANEL_GO_LIVE_TOOLTIP_NO_PERMISSION_IN_VOICE : null != i ? eN.default.Messages.ACTIVITY_PANEL_GO_LIVE_TOOLTIP_NO_PERMISSION_IN_GUILD : eN.default.Messages.ACTIVITY_PANEL_GO_LIVE_TOOLTIP_NOT_IN_GUILD), (0, l.jsx)("div", {
      className: eT.panelButtonContainer,
      children: (0, l.jsx)(ed.default, {
        tooltipText: a,
        disabled: e,
        onClick: t,
        icon: n,
        iconForeground: eT.actionIcon
      })
    })) : null
  }
  renderInviteButton() {
    let {
      embeddedActivity: e
    } = this.props;
    return this.isJoinableActivity() && null == e ? (0, l.jsx)(ed.default, {
      tooltipText: eN.default.Messages.INVITE_EMBED_INVITE_TO_JOIN,
      onClick: this.handleClickInviteButton,
      icon: er.default,
      iconForeground: eT.actionIcon
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
        children: [this.state.showDropsSparkles && this.renderSparkles(), (0, l.jsx)(ed.default, {
          "aria-label": eN.default.Messages.DROPS_ENABLED,
          tooltipText: n ? null : eN.default.Messages.DROPS_ENABLED,
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
    return null == e || null == t ? null : (0, l.jsx)(ed.default, {
      tooltipText: eN.default.Messages.EMBEDDED_ACTIVITIES_LEAVE_ACTIVITY,
      onClick: this.handleClickLeaveEmbeddedActivityButton(e.applicationId, t),
      icon: ei.default,
      iconForeground: eT.actionIcon
    })
  }
  renderBroadcastButton() {
    let {
      channel: e
    } = this.props;
    return null != e && (0, H.isVoiceChannel)(e.type) ? null : (0, l.jsx)(eE.default, {})
  }
  renderBroadcastSettingsButton() {
    let {
      broadcast: e
    } = this.props;
    return null == e ? null : (0, l.jsx)(eg.default, {})
  }
  renderSparkles() {
    let {
      useReducedMotion: e
    } = this.props;
    async function t() {
      let {
        default: e
      } = await n.el("922510").then(n.t.bind(n, "922510", 19));
      return e
    }
    return (0, l.jsx)("div", {
      className: eT.sparkleContainer,
      children: (0, l.jsx)(ea.default, {
        importData: t,
        shouldAnimate: !e,
        className: eT.sparkles
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
      className: eT.actions,
      children: [i, e, r, n, null == e ? a : s, t]
    })
  }
  getGameName() {
    let {
      runningGame: e,
      application: t
    } = this.props;
    return null != t ? t.name : null != e ? e.name : eN.default.Messages.STATUS_UNKNOWN
  }
  renderGame() {
    let {
      isStreaming: e,
      dropsPartnerGame: t,
      application: n,
      runningGame: a
    } = this.props, s = this.getGameName();
    return (0, l.jsxs)("div", {
      className: i(eT.gameWrapper, {
        [eT.clickableGameWrapper]: null != n
      }),
      children: [(0, l.jsxs)("div", {
        className: eT.gameIconWrapper,
        children: [(0, l.jsx)(en.default, {
          className: eT.gameIcon,
          game: n,
          pid: null == a ? void 0 : a.pid
        }), e ? (0, l.jsx)(es.default, {
          className: eT.liveBadge
        }) : null]
      }), (0, l.jsx)("div", {
        className: i(eT.info, {
          [eT.infoWithDrops]: null != t
        }),
        children: null != s ? (0, l.jsxs)(l.Fragment, {
          children: [(0, l.jsx)(ef.default, {
            children: s
          }), null != t && (0, l.jsx)("div", {
            className: eT.dropsBadgeWrapper,
            children: (0, l.jsx)(eh.TextBadge, {
              text: eN.default.Messages.DROPS_AVAILABLE,
              color: c.default.unsafe_rawColors.BRAND_500.css,
              className: eT.dropsBadge
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
      streamMetadata: n
    } = this.props, {
      title: a,
      sanitizedTitle: s
    } = (0, w.default)(n);
    return (0, l.jsxs)("div", {
      className: eT.gameWrapper,
      children: [e ? (0, l.jsx)(F.default, {
        title: s
      }) : (0, l.jsx)(eC.default, {
        look: eC.default.Looks.GRAY,
        size: eC.default.Sizes.SMALL,
        className: eT.liveIndicator
      }), (0, l.jsxs)("div", {
        className: i(eT.info, {
          [eT.infoWithDrops]: null != t
        }),
        children: [(0, l.jsx)(ef.default, {
          children: a
        }), null != t && (0, l.jsx)("div", {
          className: eT.dropsBadgeWrapper,
          children: (0, l.jsx)(eh.TextBadge, {
            text: eN.default.Messages.DROPS_AVAILABLE,
            color: c.default.unsafe_rawColors.BRAND_500.css,
            className: eT.dropsBadge
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
      guild: i
    } = this.props;
    if (null == n || null == a || null == t) return null;
    let r = {
        start: n.connectedSince
      },
      o = s;
    null != i ? (e = eI.Routes.CHANNEL(i.id, a.id), o = "".concat(o, " / ").concat(i.name)) : e = eI.Routes.CHANNEL(eI.ME, a.id);
    let u = (0, l.jsx)(el.default, {
      href: e,
      onClick: this.handleApplicationLinkClick,
      children: (0, l.jsx)(ec.default, {
        className: eT.channel,
        children: o
      })
    });
    return (0, l.jsxs)("div", {
      className: eT.gameWrapper,
      children: [(0, l.jsx)(en.default, {
        className: eT.gameIcon,
        game: t
      }), (0, l.jsxs)("div", {
        className: eT.info,
        children: [(0, l.jsx)(el.default, {
          href: e,
          onClick: this.handleApplicationLinkClick,
          children: (0, l.jsx)(ef.default, {
            className: eT.activityName,
            children: t.name
          })
        }), (0, H.isTextChannel)(a.type) ? u : (0, l.jsx)(eA, {
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
      className: i(eT.panel, r),
      children: (0, l.jsxs)("div", {
        className: eT.body,
        children: [(() => null == n || a && (null == s ? void 0 : s.pid) == null ? null != t ? this.renderEmbeddedActivity() : this.renderScreenshare() : this.renderGame())(), this.renderActions()]
      })
    }) : null
  }
  constructor(...e) {
    super(...e), this.state = {
      isDropsActivityPanelTooltipOpen: !1,
      showDropsSparkles: this.props.showDropsSparkles
    }, this.startBroadcast = () => {
      let {
        stream: e,
        channel: t,
        runningGame: n
      } = this.props, l = null != t && (0, H.isVoiceChannel)(t.type) ? t : null;
      null != l && null != n && (null == e ? (0, m.createBroadcastChannelOrStartStream)({
        channelId: l.id,
        pid: n.pid
      }) : (0, A.startBroadcastForStream)((0, G.encodeStreamKey)(e), n.pid))
    }, this.handleClickGoLiveButton = () => {
      let {
        guildId: e,
        channel: t,
        canStartBroadcast: a
      } = this.props, s = null != t && (0, H.isVoiceChannel)(t.type) ? t : null, i = null != s ? s.getGuildId() : e;
      if ((null == s ? void 0 : s.isBroadcastChannel()) && a) {
        (0, v.openStartBroadcastConfirmModal)(this.startBroadcast);
        return
      }(0, f.openModalLazy)(async () => {
        let {
          default: e
        } = await n.el("451863").then(n.bind(n, "451863"));
        return t => (0, l.jsx)(e, {
          ...t,
          selectSource: !1,
          guildId: i,
          analyticsLocation: eI.AnalyticsLocations.ACTIVITY_PANEL
        })
      }).then(e => {
        null != e && (this.modalKey = e)
      })
    }, this.handleClickStopStreamingButton = () => {
      let {
        stream: e,
        channel: t,
        userId: n
      } = this.props, l = null != t && (0, H.isVoiceChannel)(t.type) ? t : null;
      if ((null == l ? void 0 : l.isBroadcastChannel()) && (null == l ? void 0 : l.isOwner(n))) {
        (0, v.openStopBroadcastConfirmModal)(() => (0, V.default)(e));
        return
      }(0, V.default)(e)
    }, this.handleClickInviteButton = () => {
      let {
        activity: e,
        analyticsContext: t
      } = this.props;
      o(null != e, "Received null activity"), ep.default.track(eI.AnalyticEvents.OPEN_MODAL, {
        type: "Send Join Invite",
        application_id: e.application_id,
        location: t.location
      }), (0, h.openModal)(e, !1)
    }, this.handleClickDropsButton = () => {
      let {
        dropsPartnerGame: e,
        dropsTooltipAction: t,
        userId: n
      } = this.props;
      if (null == e) return;
      let l = (0, y.getDrop)(e);
      null != l && (ep.default.track(eI.AnalyticEvents.DROPS_ACTIVITY_PANEL_BUTTON_CLICK, {
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
    }, this.handleClickLeaveEmbeddedActivityButton = (e, t) => () => {
      (0, S.stopEmbeddedActivity)({
        channelId: t.id,
        applicationId: e
      })
    }, this.renderClipsButton = () => {
      let {
        stream: e
      } = this.props;
      return null == e ? null : (0, l.jsx)(R.default, {})
    }, this.handleApplicationLinkClick = () => {
      var e;
      let {
        channel: t,
        embeddedActivity: n
      } = this.props;
      o(null != t, "Channel is null during navigation click"), o(null != n, "Activity null during navigation click"), (0, H.isVoiceChannel)(t.type) && C.default.selectParticipant(t.id, n.applicationId), p.default.channelListScrollTo(null !== (e = t.guild_id) && void 0 !== e ? e : eI.ME, t.id), (0, H.isTextChannel)(t.type) && (0, S.updateActivityPanelMode)(eS.ActivityPanelModes.PANEL)
    }
  }
}
var ev = (0, g.default)(function(e) {
  var t;
  let {
    guildId: n,
    ...a
  } = e, s = (0, u.useStateFromStores)([Y.default], () => Y.default.getId()), i = (0, u.useStateFromStores)([j.default, et.default], () => (0, B.default)(j.default, et.default)), r = (0, u.useStateFromStores)([J.default, K.default], () => K.default.getChannel(J.default.getVoiceChannelId())), o = (0, u.useStateFromStores)([_.default], () => _.default.getConnectedActivityChannelId()), c = (0, u.useStateFromStores)([K.default], () => K.default.getChannel(o)), [f, h] = (0, u.useStateFromStoresArray)([k.default], () => [k.default.getCurrentUserActiveStream(), k.default.getStreamerActiveStreamMetadata()]), C = (0, u.useStateFromStores)([I.default], () => I.default.useReducedMotion), p = (0, u.useStateFromStores)([O.default], () => O.default.getActivityPanelTooltipAction()), {
    partnerGame: m,
    dropsActivityPanelExperienceBlocked: E,
    showDropsSparkles: g
  } = (0, M.useActivityPanelDrop)(e_.PartnerGame.FORTNITE, i, d.DismissibleContent.QUEST_2_ENROLLMENT_TOOLTIP, d.DismissibleContent.QUEST_2_COMPLETION_TOOLTIP), S = (0, u.useStateFromStores)([_.default], () => null != c ? _.default.getSelfEmbeddedActivityForChannel(c.id) : null), N = (0, u.useStateFromStores)([Z.default, X.default, W.default], () => {
    if (null != r) return U.canStreamInChannel(r, Z.default, X.default, !1);
    if (null != n) {
      let e = U.getStreamEligibleChannels(W.default.getChannels(n), Z.default, X.default);
      return e.length > 0
    }
    return !1
  }), [A] = (0, T.default)([null !== (t = function() {
    if (null != h && null != h.id) return h.id;
    if (null != i && null != i.id) return i.id;
    if (null != S) return S.applicationId
  }()) && void 0 !== t ? t : ""]), v = (0, u.useStateFromStores)([z.default], () => (0, P.default)(z.default) && (0, em.isWindows)()), R = (0, u.useStateFromStores)([Q.default], () => null != s ? Q.default.findActivity(s, e => e.type === eI.ActivityTypes.PLAYING) : null), y = null != f && f.ownerId === s && f.state !== eI.ApplicationStreamStates.ENDED, D = (0, u.useStateFromStores)([$.default], () => $.default.getBroadcast()), b = (0, L.default)() && null != i, G = (0, u.useStateFromStores)([ee.default, q.default], () => null != c ? (0, x.computeChannelName)(c, ee.default, q.default) : void 0), w = (0, u.useStateFromStores)([Z.default], () => Z.default.getGuild(n));
  return (0, l.jsx)(eL, {
    ...a,
    guildId: n,
    canGoLive: v,
    activity: R,
    embeddedActivity: S,
    showDropsSparkles: g,
    dropsPartnerGame: m,
    dropsActivityPanelExperienceBlocked: E,
    userId: s,
    runningGame: i,
    application: A,
    useReducedMotion: C,
    isStreaming: y,
    channel: c,
    canStream: N,
    dropsTooltipAction: p,
    stream: f,
    streamMetadata: h,
    broadcast: D,
    canStartBroadcast: b,
    channelName: G,
    guild: w
  })
})