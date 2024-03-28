"use strict";
n.r(t), n.d(t, {
  default: function() {
    return eS
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
  m = n("100527"),
  S = n("906732"),
  I = n("211242"),
  p = n("536687"),
  T = n("745837"),
  g = n("13228"),
  A = n("1259"),
  N = n("211644"),
  v = n("605236"),
  O = n("243778"),
  R = n("492162"),
  L = n("818634"),
  P = n("596557"),
  M = n("817520"),
  y = n("999309"),
  D = n("408987"),
  b = n("130734"),
  x = n("499137"),
  U = n("258871"),
  j = n("972264"),
  G = n("304445"),
  w = n("344185"),
  k = n("155409"),
  F = n("10401"),
  B = n("970731"),
  H = n("210887"),
  V = n("592125"),
  Y = n("796974"),
  W = n("486472"),
  K = n("984933"),
  z = n("650774"),
  q = n("430824"),
  Q = n("819640"),
  Z = n("496675"),
  X = n("19780"),
  J = n("594174"),
  $ = n("74538"),
  ee = n("374023"),
  et = n("373274"),
  en = n("547042"),
  ea = n("315174"),
  es = n("577718"),
  el = n("156978"),
  ei = n("591190"),
  er = n("981631"),
  eo = n("652785"),
  eu = n("921944"),
  ed = n("647086"),
  ec = n("689938"),
  ef = n("54449");

function eE(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
let eh = 64,
  e_ = "server-settings",
  eC = {
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
    this.setAnimatedValue(0), f.default.subscribe("LAYER_PUSH", this.closeAllHeaderNotices), this.historyUnlisten = G.default.addRouteChangeListener(this.handleHistoryChange);
    let {
      location: t
    } = G.default.getHistory();
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
        tutorialId: e_,
        position: "bottom",
        inlineSpecs: eC,
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
      headerAnalyticsLocations: r
    } = this.props, {
      controller: o,
      renderBanner: u,
      bannerVisible: d,
      bannerVisibleHeight: f,
      communityInfoVisible: E
    } = this.state, h = s || l || i;
    return null == t ? null : (0, a.jsx)(S.AnalyticsLocationProvider, {
      value: r,
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
    (e >= eh && a || e < eh && !a) && (a = !a), (e >= 88 && !t || e < 88 && t) && (t = !t), s = Math.max(88 - e, 0), n = a, (t !== this.state.renderBanner || a !== this.state.bannerVisible || s !== this.state.bannerVisibleHeight || n !== this.state.communityInfoVisible) && this.setState({
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
      footerAnalyticsLocations: t
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
      }), this.renderChannelList(), (0, a.jsx)(S.AnalyticsLocationProvider, {
        value: t,
        children: this.renderFooter()
      })]
    })
  }
  constructor(...e) {
    super(...e), eE(this, "historyUnlisten", () => {}), eE(this, "showTimeout", new d.Timeout), eE(this, "state", {
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
    }), eE(this, "handleHistoryChange", e => {
      null != e.state && e.state.shouldShowSubscribeTooltip && this.showTimeout.start(1e3, () => this.setState({
        shouldShowSubscribeTooltip: !0
      }))
    }), eE(this, "handleHeaderMenuToggle", e => {
      let {
        isHeaderPopoutOpen: t
      } = this.props;
      e.stopPropagation(), (0, L.showGuildHeaderPopout)(!t), this.closeAllHeaderNotices()
    }), eE(this, "handleContextMenu", e => {
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
    }), eE(this, "handleHeaderContextMenu", e => {
      let {
        guild: t
      } = this.props;
      null != t && (0, E.openContextMenuLazy)(e, async () => {
        let {
          default: e
        } = await Promise.all([n.e("49237"), n.e("99387"), n.e("66635"), n.e("24267"), n.e("33053"), n.e("51238"), n.e("75475"), n.e("85093"), n.e("16114"), n.e("85552"), n.e("58227"), n.e("43502"), n.e("69760"), n.e("33213")]).then(n.bind(n, "545135"));
        return n => (0, a.jsx)(e, {
          ...n,
          guild: t
        })
      })
    }), eE(this, "closeAllHeaderNotices", () => {
      this.handleCloseSubscribeTooltip(), this.handleCloseTemplateDirtyTooltip(), this.handleCloseStudentHubPrivacySettingsTooltip()
    }), eE(this, "handleCloseStudentHubPrivacySettingsTooltip", () => {
      var e;
      let t = (0, v.isDismissibleContentDismissed)(u.DismissibleContent.STUDENT_HUB_PRIVACY_SETTINGS_TOOLTIP),
        n = null === (e = this.props.guild) || void 0 === e ? void 0 : e.hasFeature(er.GuildFeatures.HUB);
      !t && n && (0, v.markDismissibleContentAsDismissed)(u.DismissibleContent.STUDENT_HUB_PRIVACY_SETTINGS_TOOLTIP, {
        dismissAction: eu.ContentDismissActionType.AUTO
      })
    }), eE(this, "handleCloseSubscribeTooltip", () => {
      this.showTimeout.stop(), this.state.shouldShowSubscribeTooltip && this.setState({
        shouldShowSubscribeTooltip: !1
      })
    }), eE(this, "handleCloseTemplateDirtyTooltip", () => {
      let {
        guild: e,
        showGuildTemplateDirtyTooltip: t
      } = this.props;
      null != e && t && D.default.hideGuildTemplateDirtyTooltip(e.id)
    }), eE(this, "renderMenuPopout", async () => {
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
    }), eE(this, "renderGuildHeaderUpsellPopout", e => {
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
    }), eE(this, "renderGuildHeaderDropdownButton", e => (0, a.jsx)(h.default, {
      open: e,
      className: ef.dropdownButton
    })), eE(this, "pinBannerOrGuildInfo", e => {
      let {
        scrollTop: t
      } = e;
      this.setAnimatedValue(t)
    })
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
  let f = (0, R.default)(n),
    E = (0, o.useStateFromStores)([Y.default], () => Y.default.getGuildDimensions(n).scrollTo),
    h = (0, o.useStateFromStores)([X.default], () => X.default.getChannelId()),
    [T, O, D] = (0, o.useStateFromStoresArray)([Z.default], () => [Z.default.can(er.Permissions.MANAGE_GUILD, d), Z.default.can(er.Permissions.MANAGE_ROLES, d), Z.default.can(er.Permissions.MANAGE_THREADS, d)]),
    U = (0, o.useStateFromStores)([W.default], () => W.default.isUnavailable(n)),
    G = (0, o.useStateFromStores)([J.default], () => J.default.getCurrentUser()),
    k = (0, o.useStateFromStores)([H.default], () => H.default.darkSidebar ? er.ThemeTypes.DARK : H.default.theme),
    {
      enableStudyGroup: B
    } = (0, x.useHubStudyGroupExperiment)(d),
    K = (0, N.default)(e => e.currentlyShown.has(u.DismissibleContent.NAGBAR_NOTICE_CONNECT_PLAYSTATION)),
    [et, en] = s.useState(!K),
    ea = (0, C.default)(n),
    {
      analyticsLocations: es
    } = (0, S.default)(m.default.GUILD_HEADER),
    {
      analyticsLocations: el
    } = (0, S.default)(m.default.GUILD_CHANNEL_LIST_FOOTER);
  s.useEffect(() => {
    n !== ea && en(!K)
  }, [n, ea, K]);
  let [ei, ed] = (0, N.default)(e => [eo.CHANNEL_NOTICES.some(t => e.currentlyShown.has(t.dismissibleContentType)), e.currentlyShownGroup.has(eu.DismissibleContentGroupName.GUILD_HEADER_TOOLTIPS)]), ec = (0, p.default)(d), ef = (0, c.useModalsStore)(c.hasAnyModalOpenSelector), eE = (0, o.useStateFromStores)([Q.default], () => Q.default.hasLayers()), eh = (0, o.useStateFromStores)([F.default], () => F.default.shouldShow(e_)), eC = T && (null == d ? void 0 : d.premiumProgressBarEnabled) === !1 && !ee.ProcessArgs.isDisallowPopupsSet(), eS = (0, o.useStateFromStores)([z.default], () => z.default.getMemberCount(n)), eI = T && null != eS && eS >= 30 && (null == d ? void 0 : d.premiumProgressBarEnabled) === !1 && !ee.ProcessArgs.isDisallowPopupsSet(), ep = O && null != d && (d.hasFeature(er.GuildFeatures.COMMUNITY) || null != eS && eS > 50), eT = (0, y.default)(n), eg = (0, A.useLowerMemberCountRequirements)(n), eA = (null == d ? void 0 : d.hasFeature(er.GuildFeatures.HUB)) === !0, eN = T && (null == d ? void 0 : d.hasFeature(er.GuildFeatures.DISCOVERABLE)) === !0, ev = (0, I.useBlockedPaymentsConfig)(), eO = (T || (null == d ? void 0 : d.premiumTier) === er.BoostedGuildTiers.NONE) && !ee.ProcessArgs.isDisallowPopupsSet() && !ev, eR = (0, o.useStateFromStores)([b.default, Q.default], () => null != d && null != G && T && !Q.default.hasLayers() && b.default.shouldShowGuildTemplateDirtyTooltip(n)), eL = (0, o.useStateFromStores)([V.default], () => V.default.getChannel(r)), {
    isPopoutOpen: eP
  } = (0, L.useGuildHeaderPopoutStore)(), eM = null !== (t = null == d ? void 0 : d.hasFeature(er.GuildFeatures.COMMUNITY)) && void 0 !== t && t, ey = (0, o.useStateFromStores)([w.default], () => !i().isEmpty(w.default.getThreadsForGuild(n))), eD = $.default.isNewUser(G), eb = et && !eD, ex = (0, g.default)(G);
  (0, P.default)(d);
  let eU = (0, v.useIsDismissibleContentDismissed)(u.DismissibleContent.PREMIUM_TUTORIAL_SERVER_MENU_TOOLTIP),
    ej = (0, j.default)(n),
    eG = (0, M.default)(n);
  return (0, a.jsx)(em, {
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
    user: G,
    hasChannelNotice: null != ec || ei,
    anyLayerOpen: ef || eE,
    showGuildBoostingProgressBarUpsell: eC,
    showGuildBoostingProgressBarSizeUpsell: eI,
    showInviteSplashUpsell: eO,
    showDiscoveryLandingPageSettingsUpsell: eN,
    showGuildHeaderTutorial: eh,
    showGuildTemplateDirtyTooltip: eR,
    showRoleSubscriptionUpsell: eT,
    showDiscoveryTooltip: eg,
    showHubPrivacySettingsTooltip: eA,
    showNewUnreadsBar: eM,
    showActiveThreadsNotice: D && null != eS && eS >= 200 && ey,
    showGuildSoundboardPermissionUpsell: ep,
    showMediaChannelUpsell: ej,
    showTierTemplatesUpsell: eG,
    isHeaderPopoutOpen: eP,
    enableStudyGroup: B,
    isGuildHeaderDismissibleTooltipShown: ed,
    canShowCoachMarkAtBottom: et,
    headerAnalyticsLocations: es,
    footerAnalyticsLocations: el,
    shouldRenderClipsEducation: ex,
    isTutorialHighlightDismissed: eU,
    shouldRenderBurstCoachmark: eb
  })
}