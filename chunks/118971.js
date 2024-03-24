"use strict";
n.r(t), n.d(t, {
  default: function() {
    return eS
  }
}), n("222007"), n("424973");
var a = n("37983"),
  s = n("884691"),
  l = n("917351"),
  i = n.n(l),
  r = n("146606"),
  o = n("446674"),
  u = n("151426"),
  d = n("862337"),
  c = n("77078"),
  f = n("913144"),
  E = n("272030"),
  h = n("366634"),
  _ = n("241845"),
  C = n("84339"),
  S = n("812204"),
  I = n("685665"),
  m = n("619935"),
  p = n("731681"),
  T = n("947783"),
  g = n("303791"),
  A = n("453910"),
  N = n("862853"),
  R = n("10641"),
  O = n("384997"),
  v = n("149362"),
  L = n("145067"),
  M = n("754707"),
  P = n("93877"),
  y = n("167790"),
  D = n("81732"),
  x = n("518953"),
  b = n("341563"),
  U = n("240239"),
  G = n("6895"),
  j = n("1501"),
  w = n("689275"),
  k = n("12896"),
  F = n("612246"),
  B = n("5667"),
  H = n("161778"),
  V = n("42203"),
  Y = n("162805"),
  W = n("341542"),
  K = n("923959"),
  z = n("525065"),
  q = n("305961"),
  Q = n("778588"),
  Z = n("957255"),
  X = n("945956"),
  J = n("697218"),
  $ = n("719923"),
  ee = n("197881"),
  et = n("120817"),
  en = n("951568"),
  ea = n("637667"),
  es = n("828931"),
  el = n("89956"),
  ei = n("421595"),
  er = n("49111"),
  eo = n("427474"),
  eu = n("994428"),
  ed = n("695838"),
  ec = n("782340"),
  ef = n("271765");
let eE = 64,
  eh = "server-settings",
  e_ = {
    origin: {
      x: -8,
      y: -48
    },
    targetWidth: 40,
    targetHeight: 40,
    offset: {
      x: 0,
      y: 0
    }
  };
class eC extends s.PureComponent {
  static getDerivedStateFromProps(e) {
    let {
      guild: t,
      hasChannelNotice: n
    } = e;
    return null == t || null == t.banner || n ? {
      renderBanner: !1,
      bannerVisible: !1
    } : null
  }
  componentDidMount() {
    var e;
    this.setAnimatedValue(0), f.default.subscribe("LAYER_PUSH", this.closeAllHeaderNotices), this.historyUnlisten = j.default.addRouteChangeListener(this.handleHistoryChange);
    let {
      location: t
    } = j.default.getHistory();
    (null === (e = t.state) || void 0 === e ? void 0 : e.shouldShowSubscribeTooltip) && this.showTimeout.start(1e3, () => this.setState({
      shouldShowSubscribeTooltip: !0
    }))
  }
  componentWillUnmount() {
    this.showTimeout.stop(), this.state.controller.dispose(), this.historyUnlisten(), f.default.unsubscribe("LAYER_PUSH", this.closeAllHeaderNotices)
  }
  getGuildBannerHash() {
    let {
      guild: e,
      hasChannelNotice: t
    } = this.props;
    return null == e || t ? null : e.banner
  }
  renderGuildHeaderNotices(e) {
    let {
      showGuildTemplateDirtyTooltip: t,
      showGuildHeaderTutorial: n,
      anyLayerOpen: s
    } = this.props, {
      shouldShowSubscribeTooltip: l
    } = this.state;
    if (n) return (0, a.jsx)("div", {
      onClick: t => e ? null : t.stopPropagation(),
      children: (0, a.jsx)(k.default, {
        tutorialId: eh,
        position: "bottom",
        inlineSpecs: e_,
        children: this.renderGuildHeaderDropdownButton(e)
      })
    });
    if (t) return (0, a.jsx)(c.Tooltip, {
      forceOpen: !0,
      color: c.TooltipColors.BRAND,
      position: "bottom",
      shouldShow: !e && !s,
      text: ec.default.Messages.GUILD_TEMPLATES_UNSYNCED_TOOLTIP,
      "aria-label": ec.default.Messages.GUILD_TEMPLATES_UNSYNCED_TOOLTIP,
      children: () => this.renderGuildHeaderDropdownButton(e)
    });
    if (!s && !e) return l ? (0, a.jsx)(c.Popout, {
      renderPopout: () => (0, a.jsx)("div", {
        onClick: e => e.stopPropagation(),
        children: (0, a.jsx)(B.default, {
          header: ec.default.Messages.PREMIUM_GUILD_SUBSCRIPTION_HEADER_SUBSCRIBE_TOOLTIP_HEADER,
          content: ec.default.Messages.PREMIUM_GUILD_SUBSCRIPTION_HEADER_SUBSCRIBE_TOOLTIP_TEXT,
          buttonCTA: ec.default.Messages.PREMIUM_GUILD_SUBSCRIPTION_HEADER_SUBSCRIBE_TOOLTIP_CLOSE,
          onClick: this.handleCloseSubscribeTooltip
        })
      }),
      position: "bottom",
      align: "center",
      animation: c.Popout.Animation.TRANSLATE,
      shouldShow: !0,
      children: () => this.renderGuildHeaderDropdownButton(e)
    }) : this.renderGuildHeaderUpsellPopout(e);
    return this.renderGuildHeaderDropdownButton(e)
  }
  renderGuildHeader(e) {
    let {
      guild: t,
      isHeaderPopoutOpen: n,
      showGuildHeaderTutorial: s,
      showGuildTemplateDirtyTooltip: l,
      isGuildHeaderDismissibleTooltipShown: i,
      HeaderAnalyticsLocationProvider: r
    } = this.props, {
      controller: o,
      renderBanner: u,
      bannerVisible: d,
      bannerVisibleHeight: f,
      communityInfoVisible: E
    } = this.state, h = s || l || i;
    return null == t ? null : (0, a.jsx)(r, {
      children: (0, a.jsx)(c.LazyPopout, {
        renderPopout: this.renderMenuPopout,
        position: "bottom",
        align: "center",
        animation: c.Popout.Animation.SCALE,
        shouldShow: n,
        onRequestClose: () => {
          (0, L.showGuildHeaderPopout)(!1)
        },
        children: s => {
          let {
            onClick: l,
            ...i
          } = s;
          return (0, a.jsx)(ea.default, {
            guild: t,
            controller: o,
            renderBanner: u,
            hasSubheader: e,
            bannerVisible: d,
            communityInfoVisible: E,
            guildBanner: this.getGuildBannerHash(),
            onClick: this.handleHeaderMenuToggle,
            onContextMenu: this.handleHeaderContextMenu,
            disableBannerAnimation: h,
            animationOverlayHeight: f,
            ...i,
            children: this.renderGuildHeaderNotices(n)
          })
        }
      })
    })
  }
  setAnimatedValue(e) {
    let {
      guild: t
    } = this.props, n = null != this.getGuildBannerHash(), a = null == t ? void 0 : t.hasCommunityInfoSubheader();
    null != t && (n || a) && (n ? this.setAnimatedValueForBanner(e) : this.setAnimatedValueForGuildInfo(e))
  }
  setAnimatedValueForBanner(e) {
    let {
      renderBanner: t,
      communityInfoVisible: n,
      bannerVisible: a,
      bannerVisibleHeight: s,
      controller: l
    } = this.state;
    (e >= eE && a || e < eE && !a) && (a = !a), (e >= 88 && !t || e < 88 && t) && (t = !t), s = Math.max(88 - e, 0), n = a, (t !== this.state.renderBanner || a !== this.state.bannerVisible || s !== this.state.bannerVisibleHeight || n !== this.state.communityInfoVisible) && this.setState({
      renderBanner: t,
      bannerVisible: a,
      bannerVisibleHeight: s,
      communityInfoVisible: n
    }), l.update({
      value: Math.min(1, Math.max(0, 1 - e / 88)),
      immediate: !0
    }).start()
  }
  setAnimatedValueForGuildInfo(e) {
    let {
      communityInfoVisible: t,
      controller: n
    } = this.state;
    (e >= 20 && t || e < 20 && !t) && (t = !t), t !== this.state.communityInfoVisible && this.setState({
      communityInfoVisible: t
    }), n.update({
      value: Math.min(1, Math.max(0, 1 - e / 20)),
      immediate: !0
    }).start()
  }
  renderChannelList() {
    let {
      isUnavailable: e,
      guild: t,
      selectedChannel: n,
      enableStudyGroup: s,
      ...l
    } = this.props;
    if (e || null == t) return (0, a.jsx)(ei.default, {
      withBannerPadding: null != t && null != this.getGuildBannerHash()
    });
    {
      if (t.hasFeature(er.GuildFeatures.HUB) && !s) return (0, a.jsx)("div", {
        className: ef.hubContainer,
        children: (0, a.jsx)(U.default, {
          guild: t,
          channel: null != n ? n : K.default.getDefaultChannel(t.id)
        })
      });
      let e = t.id === ed.FAVORITES_RAW_GUILD_ID ? et.FavoritesChannelList : et.GuildChannelList;
      return (0, a.jsx)(e, {
        guild: t,
        ...l,
        guildBanner: this.getGuildBannerHash(),
        hasGuildSubheader: this.state.hasGuildSubheader,
        onScroll: null != t && (null != this.getGuildBannerHash() || t.hasCommunityInfoSubheader()) ? this.pinBannerOrGuildInfo : null
      })
    }
  }
  renderFooter() {
    let {
      selectedChannelId: e,
      shouldRenderClipsEducation: t
    } = this.props;
    return (0, a.jsx)(O.default, {
      contentTypes: [],
      children: n => {
        let {
          visibleContent: s,
          markAsDismissed: l
        } = n;
        switch (s) {
          case u.DismissibleContent.BASH_OUT_COACH_MARK:
            return (0, a.jsx)(en.EmbeddedActivityTutorial, {
              channelId: null != e ? e : void 0,
              markAsDismissed: l,
              tutorialType: en.TutorialType.BASH_OUT
            });
          case u.DismissibleContent.ACTIVITIES_COACH_MARK_GAME_NIGHT:
            return (0, a.jsx)(en.EmbeddedActivityTutorial, {
              channelId: null != e ? e : void 0,
              markAsDismissed: l,
              tutorialType: en.TutorialType.GAME_NIGHT
            });
          default:
            if (t) return (0, a.jsx)(T.default, {});
            return (0, a.jsx)(a.Fragment, {})
        }
      }
    })
  }
  render() {
    let {
      guild: e,
      FooterAnalyticsLocationProvider: t
    } = this.props;
    return (0, a.jsxs)("nav", {
      className: ef.container,
      onContextMenu: this.handleContextMenu,
      "aria-label": ec.default.Messages.GUILD_SIDEBAR_A11Y_LABEL.format({
        guildName: null != e ? e.toString() : ""
      }),
      children: [null != e && this.renderGuildHeader(this.state.hasGuildSubheader), null != e && (0, a.jsx)(el.default, {
        guild: e,
        setHasSubheader: e => this.setState({
          hasGuildSubheader: e
        })
      }), this.renderChannelList(), (0, a.jsx)(t, {
        children: this.renderFooter()
      })]
    })
  }
  constructor(...e) {
    super(...e), this.historyUnlisten = () => {}, this.showTimeout = new d.Timeout, this.state = {
      controller: new r.Controller({
        value: 1,
        immediate: !0
      }),
      renderBanner: !1,
      bannerVisible: !1,
      communityInfoVisible: !1,
      shouldShowSubscribeTooltip: !1,
      bannerVisibleHeight: 88,
      hasGuildSubheader: !1
    }, this.handleHistoryChange = e => {
      null != e.state && e.state.shouldShowSubscribeTooltip && this.showTimeout.start(1e3, () => this.setState({
        shouldShowSubscribeTooltip: !0
      }))
    }, this.handleHeaderMenuToggle = e => {
      let {
        isHeaderPopoutOpen: t
      } = this.props;
      e.stopPropagation(), (0, L.showGuildHeaderPopout)(!t), this.closeAllHeaderNotices()
    }, this.handleContextMenu = e => {
      let {
        guild: t
      } = this.props;
      null != t && (0, E.openContextMenuLazy)(e, async () => {
        let {
          default: e
        } = await n.el("358060").then(n.bind(n, "358060"));
        return n => (0, a.jsx)(e, {
          ...n,
          guild: t
        })
      })
    }, this.handleHeaderContextMenu = e => {
      let {
        guild: t
      } = this.props;
      null != t && (0, E.openContextMenuLazy)(e, async () => {
        let {
          default: e
        } = await n.el("374705").then(n.bind(n, "374705"));
        return n => (0, a.jsx)(e, {
          ...n,
          guild: t
        })
      })
    }, this.closeAllHeaderNotices = () => {
      this.handleCloseSubscribeTooltip(), this.handleCloseTemplateDirtyTooltip(), this.handleCloseStudentHubPrivacySettingsTooltip()
    }, this.handleCloseStudentHubPrivacySettingsTooltip = () => {
      var e;
      let t = (0, R.isDismissibleContentDismissed)(u.DismissibleContent.STUDENT_HUB_PRIVACY_SETTINGS_TOOLTIP),
        n = null === (e = this.props.guild) || void 0 === e ? void 0 : e.hasFeature(er.GuildFeatures.HUB);
      !t && n && (0, R.markDismissibleContentAsDismissed)(u.DismissibleContent.STUDENT_HUB_PRIVACY_SETTINGS_TOOLTIP, {
        dismissAction: eu.ContentDismissActionType.AUTO
      })
    }, this.handleCloseSubscribeTooltip = () => {
      this.showTimeout.stop(), this.state.shouldShowSubscribeTooltip && this.setState({
        shouldShowSubscribeTooltip: !1
      })
    }, this.handleCloseTemplateDirtyTooltip = () => {
      let {
        guild: e,
        showGuildTemplateDirtyTooltip: t
      } = this.props;
      null != e && t && D.default.hideGuildTemplateDirtyTooltip(e.id)
    }, this.renderMenuPopout = async () => {
      let {
        default: e
      } = await n.el("992996").then(n.bind(n, "992996"));
      return t => {
        let {
          closePopout: n
        } = t, {
          guild: s
        } = this.props;
        return null != s && (0, a.jsx)(e, {
          onClose: n,
          guild: s
        })
      }
    }, this.renderGuildHeaderUpsellPopout = e => {
      let {
        showGuildBoostingProgressBarUpsell: t,
        showGuildBoostingProgressBarSizeUpsell: n,
        showRoleSubscriptionUpsell: s,
        showDiscoveryTooltip: l,
        showInviteSplashUpsell: i,
        showDiscoveryLandingPageSettingsUpsell: r,
        showHubPrivacySettingsTooltip: o,
        showActiveThreadsNotice: d,
        showGuildSoundboardPermissionUpsell: c,
        showMediaChannelUpsell: f,
        showTierTemplatesUpsell: E,
        guild: h,
        theme: _
      } = this.props;
      if (null == h) return this.renderGuildHeaderDropdownButton(e);
      let C = [];
      return (o && C.push(u.DismissibleContent.STUDENT_HUB_PRIVACY_SETTINGS_TOOLTIP), d && C.push(u.DismissibleContent.GUILD_HEADER_ACTIVE_THREADS_NOTICE), t && C.push(u.DismissibleContent.GUILD_HEADER_PREMIUM_GUILD_PROGRESS), n && C.push(u.DismissibleContent.GUILD_HEADER_PROGRESS_BAR_SIZE_COACH_MARK), s && C.push(u.DismissibleContent.GUILD_HEADER_ROLE_SUBSCRIPTION_UPSELL), c && C.push(u.DismissibleContent.GUILD_HEADER_SOUNDBOARD_PERMISSION), i && C.push(u.DismissibleContent.GUILD_HEADER_INVITE_SPLASH), l && C.push(u.DismissibleContent.GUILD_HEADER_SERVER_DISCOVERY_TOOLTIP), r && C.push(u.DismissibleContent.GUILD_DISCOVERY_LANDING_PAGE_SETTINGS_UPSELL), 0 === C.length) ? this.renderGuildHeaderDropdownButton(e) : (f && C.push(u.DismissibleContent.MEDIA_CHANNEL_UPSELL), E && C.push(u.DismissibleContent.SERVER_SUBSCRIPTION_TIER_TEMPLATE_UPSELL), (0, a.jsx)(es.default, {
        contentTypes: C,
        theme: _,
        guild: h,
        renderGuildHeaderDropdownButton: () => this.renderGuildHeaderDropdownButton(e)
      }))
    }, this.renderGuildHeaderDropdownButton = e => (0, a.jsx)(h.default, {
      open: e,
      className: ef.dropdownButton
    }), this.pinBannerOrGuildInfo = e => {
      let {
        scrollTop: t
      } = e;
      this.setAnimatedValue(t)
    }
  }
}

function eS(e) {
  var t;
  let {
    guildId: n,
    hideSelectedChannel: l,
    selectedChannelId: r
  } = e, d = (0, o.useStateFromStores)([q.default], () => q.default.getGuild(n));
  (0, _.useGlobalTriggerDebugging)(n);
  let f = (0, v.default)(n),
    E = (0, o.useStateFromStores)([Y.default], () => Y.default.getGuildDimensions(n).scrollTo),
    h = (0, o.useStateFromStores)([X.default], () => X.default.getChannelId()),
    [T, O, D] = (0, o.useStateFromStoresArray)([Z.default], () => [Z.default.can(er.Permissions.MANAGE_GUILD, d), Z.default.can(er.Permissions.MANAGE_ROLES, d), Z.default.can(er.Permissions.MANAGE_THREADS, d)]),
    U = (0, o.useStateFromStores)([W.default], () => W.default.isUnavailable(n)),
    j = (0, o.useStateFromStores)([J.default], () => J.default.getCurrentUser()),
    k = (0, o.useStateFromStores)([H.default], () => H.default.darkSidebar ? er.ThemeTypes.DARK : H.default.theme),
    {
      enableStudyGroup: B
    } = (0, b.useHubStudyGroupExperiment)(d),
    K = (0, N.default)(e => e.currentlyShown.has(u.DismissibleContent.NAGBAR_NOTICE_CONNECT_PLAYSTATION)),
    [et, en] = s.useState(!K),
    ea = (0, C.default)(n),
    {
      AnalyticsLocationProvider: es
    } = (0, I.default)(S.default.GUILD_HEADER),
    {
      AnalyticsLocationProvider: el
    } = (0, I.default)(S.default.GUILD_CHANNEL_LIST_FOOTER);
  s.useEffect(() => {
    n !== ea && en(!K)
  }, [n, ea, K]);
  let [ei, ed] = (0, N.default)(e => [eo.CHANNEL_NOTICES.some(t => e.currentlyShown.has(t.dismissibleContentType)), e.currentlyShownGroup.has(eu.DismissibleContentGroupName.GUILD_HEADER_TOOLTIPS)]), ec = (0, p.default)(d), ef = (0, c.useModalsStore)(c.hasAnyModalOpenSelector), eE = (0, o.useStateFromStores)([Q.default], () => Q.default.hasLayers()), e_ = (0, o.useStateFromStores)([F.default], () => F.default.shouldShow(eh)), eS = T && (null == d ? void 0 : d.premiumProgressBarEnabled) === !1 && !ee.ProcessArgs.isDisallowPopupsSet(), eI = (0, o.useStateFromStores)([z.default], () => z.default.getMemberCount(n)), em = T && null != eI && eI >= 30 && (null == d ? void 0 : d.premiumProgressBarEnabled) === !1 && !ee.ProcessArgs.isDisallowPopupsSet(), ep = O && null != d && (d.hasFeature(er.GuildFeatures.COMMUNITY) || null != eI && eI > 50), eT = (0, y.default)(n), eg = (0, A.useLowerMemberCountRequirements)(n), eA = (null == d ? void 0 : d.hasFeature(er.GuildFeatures.HUB)) === !0, eN = T && (null == d ? void 0 : d.hasFeature(er.GuildFeatures.DISCOVERABLE)) === !0, eR = (0, m.useBlockedPaymentsConfig)(), eO = (T || (null == d ? void 0 : d.premiumTier) === er.BoostedGuildTiers.NONE) && !ee.ProcessArgs.isDisallowPopupsSet() && !eR, ev = (0, o.useStateFromStores)([x.default, Q.default], () => null != d && null != j && T && !Q.default.hasLayers() && x.default.shouldShowGuildTemplateDirtyTooltip(n)), eL = (0, o.useStateFromStores)([V.default], () => V.default.getChannel(r)), {
    isPopoutOpen: eM
  } = (0, L.useGuildHeaderPopoutStore)(), eP = null !== (t = null == d ? void 0 : d.hasFeature(er.GuildFeatures.COMMUNITY)) && void 0 !== t && t, ey = (0, o.useStateFromStores)([w.default], () => !i.isEmpty(w.default.getThreadsForGuild(n))), eD = $.default.isNewUser(j), ex = et && !eD, eb = (0, g.default)(j);
  (0, M.default)(d);
  let eU = (0, R.useIsDismissibleContentDismissed)(u.DismissibleContent.PREMIUM_TUTORIAL_SERVER_MENU_TOOLTIP),
    eG = (0, G.default)(n),
    ej = (0, P.default)(n);
  return (0, a.jsx)(eC, {
    guildId: n,
    hideSelectedChannel: l,
    guild: d,
    scrollToChannel: E,
    selectedChannelId: l ? null : r,
    selectedChannel: eL,
    selectedVoiceChannelId: h,
    voiceStates: f,
    isUnavailable: U,
    theme: k,
    user: j,
    hasChannelNotice: null != ec || ei,
    anyLayerOpen: ef || eE,
    showGuildBoostingProgressBarUpsell: eS,
    showGuildBoostingProgressBarSizeUpsell: em,
    showInviteSplashUpsell: eO,
    showDiscoveryLandingPageSettingsUpsell: eN,
    showGuildHeaderTutorial: e_,
    showGuildTemplateDirtyTooltip: ev,
    showRoleSubscriptionUpsell: eT,
    showDiscoveryTooltip: eg,
    showHubPrivacySettingsTooltip: eA,
    showNewUnreadsBar: eP,
    showActiveThreadsNotice: D && null != eI && eI >= 200 && ey,
    showGuildSoundboardPermissionUpsell: ep,
    showMediaChannelUpsell: eG,
    showTierTemplatesUpsell: ej,
    isHeaderPopoutOpen: eM,
    enableStudyGroup: B,
    isGuildHeaderDismissibleTooltipShown: ed,
    canShowCoachMarkAtBottom: et,
    HeaderAnalyticsLocationProvider: es,
    FooterAnalyticsLocationProvider: el,
    shouldRenderClipsEducation: eb,
    isTutorialHighlightDismissed: eU,
    shouldRenderBurstCoachmark: ex
  })
}