"use strict";
n.r(t), n.d(t, {
  default: function() {
    return ep
  }
}), n("47120"), n("653041");
var a = n("735250"),
  s = n("470079"),
  l = n("392711"),
  i = n.n(l),
  r = n("718017"),
  o = n("442837"),
  u = n("524437"),
  d = n("846519"),
  c = n("481060"),
  f = n("570140"),
  E = n("239091"),
  h = n("269128"),
  _ = n("711237"),
  C = n("110924"),
  S = n("100527"),
  m = n("906732"),
  p = n("211242"),
  I = n("536687"),
  T = n("745837"),
  g = n("13228"),
  A = n("1259"),
  N = n("211644"),
  v = n("605236"),
  R = n("243778"),
  L = n("492162"),
  O = n("818634"),
  M = n("596557"),
  P = n("817520"),
  y = n("999309"),
  x = n("408987"),
  D = n("130734"),
  b = n("499137"),
  U = n("258871"),
  j = n("972264"),
  G = n("11352"),
  w = n("304445"),
  k = n("344185"),
  F = n("155409"),
  B = n("10401"),
  H = n("970731"),
  V = n("210887"),
  Y = n("592125"),
  W = n("796974"),
  K = n("486472"),
  z = n("984933"),
  q = n("650774"),
  Q = n("430824"),
  Z = n("819640"),
  X = n("496675"),
  J = n("19780"),
  $ = n("594174"),
  ee = n("74538"),
  et = n("374023"),
  en = n("373274"),
  ea = n("547042"),
  es = n("315174"),
  el = n("577718"),
  ei = n("156978"),
  er = n("591190"),
  eo = n("981631"),
  eu = n("652785"),
  ed = n("921944"),
  ec = n("647086"),
  ef = n("689938"),
  eE = n("957950");

function eh(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
let e_ = 64,
  eC = "server-settings",
  eS = {
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
class em extends s.PureComponent {
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
    this.setAnimatedValue(0), f.default.subscribe("LAYER_PUSH", this.closeAllHeaderNotices), this.historyUnlisten = w.default.addRouteChangeListener(this.handleHistoryChange);
    let {
      location: t
    } = w.default.getHistory();
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
      children: (0, a.jsx)(F.default, {
        tutorialId: eC,
        position: "bottom",
        inlineSpecs: eS,
        children: this.renderGuildHeaderDropdownButton(e)
      })
    });
    if (t) return (0, a.jsx)(c.Tooltip, {
      forceOpen: !0,
      color: c.TooltipColors.BRAND,
      position: "bottom",
      shouldShow: !e && !s,
      text: ef.default.Messages.GUILD_TEMPLATES_UNSYNCED_TOOLTIP,
      "aria-label": ef.default.Messages.GUILD_TEMPLATES_UNSYNCED_TOOLTIP,
      children: () => this.renderGuildHeaderDropdownButton(e)
    });
    if (!s && !e) return l ? (0, a.jsx)(c.Popout, {
      renderPopout: () => (0, a.jsx)("div", {
        onClick: e => e.stopPropagation(),
        children: (0, a.jsx)(H.default, {
          header: ef.default.Messages.PREMIUM_GUILD_SUBSCRIPTION_HEADER_SUBSCRIBE_TOOLTIP_HEADER,
          content: ef.default.Messages.PREMIUM_GUILD_SUBSCRIPTION_HEADER_SUBSCRIBE_TOOLTIP_TEXT,
          buttonCTA: ef.default.Messages.PREMIUM_GUILD_SUBSCRIPTION_HEADER_SUBSCRIBE_TOOLTIP_CLOSE,
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
      headerAnalyticsLocations: r
    } = this.props, {
      controller: o,
      renderBanner: u,
      bannerVisible: d,
      bannerVisibleHeight: f,
      communityInfoVisible: E
    } = this.state, h = s || l || i;
    return null == t ? null : (0, a.jsx)(m.AnalyticsLocationProvider, {
      value: r,
      children: (0, a.jsx)(c.LazyPopout, {
        renderPopout: this.renderMenuPopout,
        position: "bottom",
        align: "center",
        animation: c.Popout.Animation.SCALE,
        shouldShow: n,
        onRequestClose: () => {
          (0, O.showGuildHeaderPopout)(!1)
        },
        children: s => {
          let {
            onClick: l,
            ...i
          } = s;
          return (0, a.jsx)(es.default, {
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
    (e >= e_ && a || e < e_ && !a) && (a = !a), (e >= 88 && !t || e < 88 && t) && (t = !t), s = Math.max(88 - e, 0), n = a, (t !== this.state.renderBanner || a !== this.state.bannerVisible || s !== this.state.bannerVisibleHeight || n !== this.state.communityInfoVisible) && this.setState({
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
    if (e || null == t) return (0, a.jsx)(er.default, {
      withBannerPadding: null != t && null != this.getGuildBannerHash()
    });
    {
      if (t.hasFeature(eo.GuildFeatures.HUB) && !s) return (0, a.jsx)("div", {
        className: eE.hubContainer,
        children: (0, a.jsx)(U.default, {
          guild: t,
          channel: null != n ? n : z.default.getDefaultChannel(t.id)
        })
      });
      let e = t.id === ec.FAVORITES_RAW_GUILD_ID ? en.FavoritesChannelList : en.GuildChannelList;
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
    return (0, a.jsx)(R.default, {
      contentTypes: [],
      children: n => {
        let {
          visibleContent: s,
          markAsDismissed: l
        } = n;
        switch (s) {
          case u.DismissibleContent.BASH_OUT_COACH_MARK:
            return (0, a.jsx)(ea.EmbeddedActivityTutorial, {
              channelId: null != e ? e : void 0,
              markAsDismissed: l,
              tutorialType: ea.TutorialType.BASH_OUT
            });
          case u.DismissibleContent.ACTIVITIES_COACH_MARK_GAME_NIGHT:
            return (0, a.jsx)(ea.EmbeddedActivityTutorial, {
              channelId: null != e ? e : void 0,
              markAsDismissed: l,
              tutorialType: ea.TutorialType.GAME_NIGHT
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
      footerAnalyticsLocations: t
    } = this.props;
    return (0, a.jsxs)("nav", {
      className: eE.container,
      onContextMenu: this.handleContextMenu,
      "aria-label": ef.default.Messages.GUILD_SIDEBAR_A11Y_LABEL.format({
        guildName: null != e ? e.toString() : ""
      }),
      children: [null != e && this.renderGuildHeader(this.state.hasGuildSubheader), null != e && (0, a.jsx)(ei.default, {
        guild: e,
        setHasSubheader: e => this.setState({
          hasGuildSubheader: e
        })
      }), this.renderChannelList(), (0, a.jsx)(m.AnalyticsLocationProvider, {
        value: t,
        children: this.renderFooter()
      })]
    })
  }
  constructor(...e) {
    super(...e), eh(this, "historyUnlisten", () => {}), eh(this, "showTimeout", new d.Timeout), eh(this, "state", {
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
    }), eh(this, "handleHistoryChange", e => {
      null != e.state && e.state.shouldShowSubscribeTooltip && this.showTimeout.start(1e3, () => this.setState({
        shouldShowSubscribeTooltip: !0
      }))
    }), eh(this, "handleHeaderMenuToggle", e => {
      let {
        isHeaderPopoutOpen: t
      } = this.props;
      e.stopPropagation(), (0, O.showGuildHeaderPopout)(!t), this.closeAllHeaderNotices()
    }), eh(this, "handleContextMenu", e => {
      let {
        guild: t
      } = this.props;
      null != t && (0, E.openContextMenuLazy)(e, async () => {
        let {
          default: e
        } = await n.e("92795").then(n.bind(n, "652171"));
        return n => (0, a.jsx)(e, {
          ...n,
          guild: t
        })
      })
    }), eh(this, "handleHeaderContextMenu", e => {
      let {
        guild: t
      } = this.props;
      null != t && (0, E.openContextMenuLazy)(e, async () => {
        let {
          default: e
        } = await Promise.all([n.e("49237"), n.e("99387"), n.e("66635"), n.e("33053"), n.e("49146"), n.e("75475"), n.e("58227"), n.e("85093"), n.e("85552"), n.e("43502"), n.e("69760"), n.e("33213")]).then(n.bind(n, "545135"));
        return n => (0, a.jsx)(e, {
          ...n,
          guild: t
        })
      })
    }), eh(this, "closeAllHeaderNotices", () => {
      this.handleCloseSubscribeTooltip(), this.handleCloseTemplateDirtyTooltip(), this.handleCloseStudentHubPrivacySettingsTooltip()
    }), eh(this, "handleCloseStudentHubPrivacySettingsTooltip", () => {
      var e;
      let t = (0, v.isDismissibleContentDismissed)(u.DismissibleContent.STUDENT_HUB_PRIVACY_SETTINGS_TOOLTIP),
        n = null === (e = this.props.guild) || void 0 === e ? void 0 : e.hasFeature(eo.GuildFeatures.HUB);
      !t && n && (0, v.markDismissibleContentAsDismissed)(u.DismissibleContent.STUDENT_HUB_PRIVACY_SETTINGS_TOOLTIP, {
        dismissAction: ed.ContentDismissActionType.AUTO
      })
    }), eh(this, "handleCloseSubscribeTooltip", () => {
      this.showTimeout.stop(), this.state.shouldShowSubscribeTooltip && this.setState({
        shouldShowSubscribeTooltip: !1
      })
    }), eh(this, "handleCloseTemplateDirtyTooltip", () => {
      let {
        guild: e,
        showGuildTemplateDirtyTooltip: t
      } = this.props;
      null != e && t && x.default.hideGuildTemplateDirtyTooltip(e.id)
    }), eh(this, "renderMenuPopout", async () => {
      let {
        default: e
      } = await Promise.all([n.e("99387"), n.e("69760"), n.e("46826")]).then(n.bind(n, "859432"));
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
    }), eh(this, "renderGuildHeaderUpsellPopout", e => {
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
        shouldRenderCustomNotificationSoundsCoachmark: h,
        guild: _,
        theme: C
      } = this.props;
      if (null == _) return this.renderGuildHeaderDropdownButton(e);
      let S = [];
      return (o && S.push(u.DismissibleContent.STUDENT_HUB_PRIVACY_SETTINGS_TOOLTIP), d && S.push(u.DismissibleContent.GUILD_HEADER_ACTIVE_THREADS_NOTICE), t && S.push(u.DismissibleContent.GUILD_HEADER_PREMIUM_GUILD_PROGRESS), n && S.push(u.DismissibleContent.GUILD_HEADER_PROGRESS_BAR_SIZE_COACH_MARK), s && S.push(u.DismissibleContent.GUILD_HEADER_ROLE_SUBSCRIPTION_UPSELL), c && S.push(u.DismissibleContent.GUILD_HEADER_SOUNDBOARD_PERMISSION), i && S.push(u.DismissibleContent.GUILD_HEADER_INVITE_SPLASH), l && S.push(u.DismissibleContent.GUILD_HEADER_SERVER_DISCOVERY_TOOLTIP), r && S.push(u.DismissibleContent.GUILD_DISCOVERY_LANDING_PAGE_SETTINGS_UPSELL), 0 === S.length) ? this.renderGuildHeaderDropdownButton(e) : (f && S.push(u.DismissibleContent.MEDIA_CHANNEL_UPSELL), E && S.push(u.DismissibleContent.SERVER_SUBSCRIPTION_TIER_TEMPLATE_UPSELL), h && S.push(u.DismissibleContent.PREMIUM_CUSTOM_NOTIFICATION_SOUNDS_COACHMARK), (0, a.jsx)(el.default, {
        contentTypes: S,
        theme: C,
        guild: _,
        renderGuildHeaderDropdownButton: () => this.renderGuildHeaderDropdownButton(e)
      }))
    }), eh(this, "renderGuildHeaderDropdownButton", e => (0, a.jsx)(h.default, {
      open: e,
      className: eE.dropdownButton
    })), eh(this, "pinBannerOrGuildInfo", e => {
      let {
        scrollTop: t
      } = e;
      this.setAnimatedValue(t)
    })
  }
}

function ep(e) {
  var t;
  let {
    guildId: n,
    hideSelectedChannel: l,
    selectedChannelId: r
  } = e, d = (0, o.useStateFromStores)([Q.default], () => Q.default.getGuild(n));
  (0, _.useGlobalTriggerDebugging)(n);
  let f = (0, L.default)(n),
    E = (0, o.useStateFromStores)([W.default], () => W.default.getGuildDimensions(n).scrollTo),
    h = (0, o.useStateFromStores)([J.default], () => J.default.getChannelId()),
    [T, R, x] = (0, o.useStateFromStoresArray)([X.default], () => [X.default.can(eo.Permissions.MANAGE_GUILD, d), X.default.can(eo.Permissions.MANAGE_ROLES, d), X.default.can(eo.Permissions.MANAGE_THREADS, d)]),
    U = (0, o.useStateFromStores)([K.default], () => K.default.isUnavailable(n)),
    w = (0, o.useStateFromStores)([$.default], () => $.default.getCurrentUser()),
    F = (0, o.useStateFromStores)([V.default], () => V.default.darkSidebar ? eo.ThemeTypes.DARK : V.default.theme),
    {
      enableStudyGroup: H
    } = (0, b.useHubStudyGroupExperiment)(d),
    z = (0, N.default)(e => e.currentlyShown.has(u.DismissibleContent.NAGBAR_NOTICE_CONNECT_PLAYSTATION)),
    [en, ea] = s.useState(!z),
    es = (0, C.default)(n),
    {
      analyticsLocations: el
    } = (0, m.default)(S.default.GUILD_HEADER),
    {
      analyticsLocations: ei
    } = (0, m.default)(S.default.GUILD_CHANNEL_LIST_FOOTER);
  s.useEffect(() => {
    n !== es && ea(!z)
  }, [n, es, z]);
  let [er, ec] = (0, N.default)(e => [eu.CHANNEL_NOTICES.some(t => e.currentlyShown.has(t.dismissibleContentType)), e.currentlyShownGroup.has(ed.DismissibleContentGroupName.GUILD_HEADER_TOOLTIPS)]), ef = (0, I.default)(d), eE = (0, c.useModalsStore)(c.hasAnyModalOpenSelector), eh = (0, o.useStateFromStores)([Z.default], () => Z.default.hasLayers()), e_ = (0, o.useStateFromStores)([B.default], () => B.default.shouldShow(eC)), eS = T && (null == d ? void 0 : d.premiumProgressBarEnabled) === !1 && !et.ProcessArgs.isDisallowPopupsSet(), ep = (0, o.useStateFromStores)([q.default], () => q.default.getMemberCount(n)), eI = T && null != ep && ep >= 30 && (null == d ? void 0 : d.premiumProgressBarEnabled) === !1 && !et.ProcessArgs.isDisallowPopupsSet(), eT = R && null != d && (d.hasFeature(eo.GuildFeatures.COMMUNITY) || null != ep && ep > 50), eg = (0, y.default)(n), eA = (0, A.useLowerMemberCountRequirements)(n), eN = (null == d ? void 0 : d.hasFeature(eo.GuildFeatures.HUB)) === !0, ev = T && (null == d ? void 0 : d.hasFeature(eo.GuildFeatures.DISCOVERABLE)) === !0, eR = (0, p.useBlockedPaymentsConfig)(), eL = (T || (null == d ? void 0 : d.premiumTier) === eo.BoostedGuildTiers.NONE) && !et.ProcessArgs.isDisallowPopupsSet() && !eR, eO = (0, o.useStateFromStores)([D.default, Z.default], () => null != d && null != w && T && !Z.default.hasLayers() && D.default.shouldShowGuildTemplateDirtyTooltip(n)), eM = (0, o.useStateFromStores)([Y.default], () => Y.default.getChannel(r)), {
    isPopoutOpen: eP
  } = (0, O.useGuildHeaderPopoutStore)(), ey = null !== (t = null == d ? void 0 : d.hasFeature(eo.GuildFeatures.COMMUNITY)) && void 0 !== t && t, ex = (0, o.useStateFromStores)([k.default], () => !i().isEmpty(k.default.getThreadsForGuild(n))), eD = ee.default.isNewUser(w), eb = en && !eD, eU = (0, g.default)(w);
  (0, M.default)(d);
  let ej = (0, v.useIsDismissibleContentDismissed)(u.DismissibleContent.PREMIUM_TUTORIAL_SERVER_MENU_TOOLTIP),
    eG = (0, j.default)(n),
    ew = (0, P.default)(n),
    ek = G.CustomNotificationSoundExperiment.useExperiment({
      location: "GuildSidebar"
    }, {
      autoTrackExposure: !0
    }).enabled;
  return (0, a.jsx)(em, {
    guildId: n,
    hideSelectedChannel: l,
    guild: d,
    scrollToChannel: E,
    selectedChannelId: l ? null : r,
    selectedChannel: eM,
    selectedVoiceChannelId: h,
    voiceStates: f,
    isUnavailable: U,
    theme: F,
    user: w,
    hasChannelNotice: null != ef || er,
    anyLayerOpen: eE || eh,
    showGuildBoostingProgressBarUpsell: eS,
    showGuildBoostingProgressBarSizeUpsell: eI,
    showInviteSplashUpsell: eL,
    showDiscoveryLandingPageSettingsUpsell: ev,
    showGuildHeaderTutorial: e_,
    showGuildTemplateDirtyTooltip: eO,
    showRoleSubscriptionUpsell: eg,
    showDiscoveryTooltip: eA,
    showHubPrivacySettingsTooltip: eN,
    showNewUnreadsBar: ey,
    showActiveThreadsNotice: x && null != ep && ep >= 200 && ex,
    showGuildSoundboardPermissionUpsell: eT,
    showMediaChannelUpsell: eG,
    showTierTemplatesUpsell: ew,
    isHeaderPopoutOpen: eP,
    enableStudyGroup: H,
    isGuildHeaderDismissibleTooltipShown: ec,
    canShowCoachMarkAtBottom: en,
    headerAnalyticsLocations: el,
    footerAnalyticsLocations: ei,
    shouldRenderClipsEducation: eU,
    isTutorialHighlightDismissed: ej,
    shouldRenderBurstCoachmark: eb,
    shouldRenderCustomNotificationSoundsCoachmark: ek
  })
}