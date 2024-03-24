"use strict";
n.r(t), n.d(t, {
  default: function() {
    return eg
  }
}), n("222007");
var l = n("37983"),
  a = n("884691"),
  s = n("414456"),
  i = n.n(s),
  r = n("627445"),
  u = n.n(r),
  o = n("917351"),
  d = n.n(o),
  c = n("759843"),
  h = n("498574"),
  f = n("446674"),
  I = n("669491"),
  g = n("77078"),
  E = n("970728"),
  v = n("685073"),
  T = n("84339"),
  m = n("812204"),
  p = n("685665"),
  _ = n("442939"),
  N = n("656038"),
  C = n("419830"),
  S = n("262362"),
  x = n("582415"),
  M = n("385042"),
  A = n("87241"),
  y = n("155996"),
  R = n("834052"),
  L = n("373469"),
  j = n("19766"),
  V = n("42203"),
  O = n("923959"),
  D = n("330154"),
  w = n("705955"),
  U = n("957255"),
  G = n("824563"),
  P = n("18494"),
  F = n("697218"),
  H = n("316133"),
  b = n("941886"),
  B = n("145131"),
  k = n("810567"),
  K = n("474571"),
  W = n("423487"),
  Y = n("599110"),
  Z = n("568734"),
  z = n("354023"),
  q = n("9294"),
  X = n("512027"),
  Q = n("234919"),
  J = n("52393"),
  $ = n("216463"),
  ee = n("474592"),
  et = n("652453"),
  en = n("470259"),
  el = n("91366"),
  ea = n("49111"),
  es = n("724210"),
  ei = n("782340"),
  er = n("696862"),
  eu = n("890957"),
  eo = n("633827"),
  ed = n("56585");
let {
  INVITE_OPTIONS_FOREVER: ec,
  INVITE_OPTIONS_7_DAYS: eh,
  INVITE_OPTIONS_UNLIMITED: ef
} = z.default;
class eI extends a.PureComponent {
  componentDidMount() {
    let {
      inviteChannel: e,
      code: t,
      guild: n,
      source: l,
      canCreateInvites: a,
      analyticsLocation: s,
      streamUserId: i,
      targetType: r,
      targetUserId: u,
      application: o,
      initialCounts: d,
      rows: c,
      showFriends: h,
      modalState: f,
      setModalState: I
    } = this.props, {
      maxAge: g,
      maxUses: v,
      temporary: T
    } = f;
    if (a) {
      let n = null == e ? void 0 : e.id;
      if (null == n) return;
      I({
        networkError: void 0
      }), E.default.createInvite(n, {
        validate: null != t ? t : null,
        max_age: g,
        max_uses: v,
        target_user_id: u,
        target_type: r,
        target_application_id: null == o ? void 0 : o.id,
        temporary: T
      }, l).catch(e => I({
        networkError: e
      }))
    }
    if (h && Y.default.track(ea.AnalyticEvents.INVITE_SUGGESTION_OPENED, {
        location: l,
        num_suggestions: c.length,
        num_friends: d.numFriends,
        num_dms: d.numDms,
        num_group_dms: d.numGroupDms,
        guild_id: n.id
      }), Q.default.trackExposure({
        guildId: null == n ? void 0 : n.id,
        location: "acc417_1"
      }), null != i) {
      let e = L.default.getStreamForUser(i, n.id),
        t = (0, x.getStreamerApplication)(e, G.default);
      Y.default.track(ea.AnalyticEvents.OPEN_MODAL, {
        type: "Send Stream Invite",
        source: l,
        location: s,
        other_user_id: i,
        application_id: null != t ? t.id : null,
        application_name: null != t ? t.name : null,
        game_id: null != t ? t.id : null
      })
    } else(null == o ? void 0 : o.id) != null || Y.default.track(ea.AnalyticEvents.OPEN_MODAL, {
      type: "Instant Invite Modal",
      source: l,
      location: s
    })
  }
  componentWillUnmount() {
    let {
      inviteChannel: e,
      inviteFlags: t,
      setInviteFlags: n
    } = this.props;
    (0, Z.hasFlag)(t, h.GuildInviteFlags.IS_GUEST_INVITE) && null != e && (n((0, Z.removeFlag)(t, h.GuildInviteFlags.IS_GUEST_INVITE)), E.default.clearInviteFromStore(e.id))
  }
  getInviteKey() {
    let {
      code: e,
      vanityURLCode: t,
      guildScheduledEvent: n,
      modalState: l
    } = this.props, {
      showVanityURL: a
    } = l, s = a ? t : null != e ? e : t;
    return null == s ? s : (0, q.generateInviteKeyFromExtraData)({
      baseCode: s,
      guildScheduledEventId: null == n ? void 0 : n.id
    })
  }
  renderChannelWarning() {
    let {
      inviteChannel: e
    } = this.props;
    return (0, N.default)(e) ? (0, l.jsxs)("div", {
      className: er.warningContainer,
      children: [(0, l.jsx)(W.default, {
        className: er.warningIcon,
        color: I.default.unsafe_rawColors.YELLOW_300.css,
        width: 12
      }), (0, l.jsx)(g.Text, {
        variant: "text-xs/normal",
        color: "header-secondary",
        children: ei.default.Messages.INVITE_PRIVATE_CHANNEL_WARNING
      })]
    }) : null
  }
  renderHeader() {
    let e;
    let {
      guild: t,
      showFriends: n,
      guildScheduledEvent: a,
      streamUserId: s,
      application: r,
      welcomeToServer: u,
      inviteChannel: o,
      modalState: d,
      handleDone: c
    } = this.props, {
      query: h
    } = d, f = null, I = null;
    if (e = u ? null : null != s ? ei.default.Messages.INVITE_STREAM_HEADER : null != r ? ei.default.Messages.EMBEDDED_ACTIVITIES_INVITE_FRIENDS_TO_ACTIVITY_NAME.format({
        applicationName: r.name
      }) : null != a ? ei.default.Messages.GUILD_EVENT_INVITE_MODAL_TITLE : (null == o ? void 0 : o.isGuildStageVoice()) ? ei.default.Messages.STAGE_CHANNEL_INVITE_TO_STAGE_MODAL_HEADER : ei.default.Messages.INVITE_TO_SERVER_NAME.format({
        name: t.toString()
      }), null != o) {
      let e = (0, C.getChannelIconComponent)(o, t);
      null != e && (I = (0, l.jsxs)("div", {
        className: er.headerChannelContainer,
        children: [(0, l.jsx)(e, {
          className: er.channelIcon
        }), (0, l.jsx)(g.Text, {
          color: "interactive-normal",
          variant: "text-md/normal",
          children: o.name
        })]
      }))
    }
    return f = t.hasFeature(ea.GuildFeatures.HUB) ? (0, l.jsxs)("div", {
      className: er.hubHeader,
      children: [(0, l.jsx)(g.Heading, {
        className: i(er.hubInviteTitle, er.headerCloseButtonSpacing),
        id: this._headerId,
        variant: "heading-xl/semibold",
        color: "header-primary",
        children: ei.default.Messages.HUB_INVITE_HEADER
      }), (0, l.jsx)(g.Text, {
        color: "header-secondary",
        variant: "text-md/normal",
        children: ei.default.Messages.HUB_INVITE_SUBHEADER
      }), n && (0, l.jsx)(k.default, {
        query: h,
        className: er.hubFriendSearch,
        onChange: this.handleQueryChange,
        placeholder: ei.default.Messages.INVITE_SEARCH_FOR_FRIENDS,
        "aria-label": ei.default.Messages.INVITE_SEARCH_FOR_FRIENDS,
        autoFocus: !0,
        onClear: this.handleClearSearch
      })]
    }) : n ? (0, l.jsxs)("div", {
      className: er.header,
      children: [(0, l.jsx)("div", {
        className: er.headerTopRow,
        children: (0, l.jsx)(g.FormTitle, {
          id: this._headerId,
          tag: "h2",
          className: i(eu.marginBottom4, er.headerCloseButtonSpacing, er.headerText),
          children: e
        })
      }), I, (0, l.jsx)(k.default, {
        query: h,
        className: er.searchBar,
        onChange: this.handleQueryChange,
        placeholder: ei.default.Messages.INVITE_SEARCH_FOR_FRIENDS,
        autoFocus: !0,
        onClear: this.handleClearSearch
      }), (0, l.jsx)("div", {
        className: eu.marginTop8,
        children: this.renderChannelWarning()
      })]
    }) : (0, l.jsxs)(l.Fragment, {
      children: [(0, l.jsx)(g.FormTitle, {
        id: this._headerId,
        tag: "h2",
        className: i(eu.marginReset, er.headerCloseButtonSpacing, er.headerText),
        children: e
      }), I, this.renderChannelWarning()]
    }), (0, l.jsxs)(g.ModalHeader, {
      separator: n,
      children: [(0, l.jsx)(g.ModalCloseButton, {
        className: er.closeButton,
        onClick: c
      }), (0, l.jsxs)("div", {
        className: er.headerContainer,
        children: [u && (0, l.jsxs)(l.Fragment, {
          children: [(0, l.jsx)("img", {
            className: er.welcomeImage,
            src: ed,
            alt: ""
          }), (0, l.jsx)(g.H, {
            className: er.welcomeHeading,
            children: ei.default.Messages.INVITE_WELCOME_HEADING
          }), (0, l.jsx)("p", {
            className: er.welcomeSubheading,
            children: ei.default.Messages.INVITE_WELCOME_SUBHEADING
          })]
        }), null != s ? (0, l.jsx)(M.default, {}) : null, f]
      })]
    })
  }
  renderFriendsBody() {
    let {
      rows: e
    } = this.props, t = this.getInviteKey();
    return 0 === e.length ? (0, l.jsx)(g.ModalContent, {
      className: i(er.inviteRowEmptyState),
      children: (0, l.jsx)(b.EmptyStateText, {
        children: ei.default.Messages.INVITE_FRIEND_MODAL_NO_RESULTS
      })
    }) : null == t ? (0, l.jsx)(g.ModalContent, {
      className: i(er.inviteRowEmptyState),
      children: (0, l.jsx)(b.EmptyStateText, {
        children: ei.default.Messages.INVITE_FRIEND_MODAL_LOADING
      })
    }) : (0, l.jsx)(g.ModalListContent, {
      className: er.scroller,
      sections: [e.length],
      renderSection: this.renderSection,
      sectionHeight: 0,
      renderRow: this.renderRow,
      rowHeight: this.getRowHeight,
      paddingBottom: 16
    })
  }
  renderSection() {
    return null
  }
  renderBody() {
    var e;
    let {
      guild: t,
      showFriends: n,
      streamUserId: a,
      application: s
    } = this.props;
    if (n) return this.renderFriendsBody();
    let i = (0, J.default)(null !== (e = this.getInviteKey()) && void 0 !== e ? e : ""),
      r = F.default.getCurrentUser();
    u(null != r, "InstantInviteModal: user cannot be undefined");
    let o = t.isOwner(r),
      d = o ? ei.default.Messages.INVITE_SHARE_LINK_OWN_SERVER : ei.default.Messages.SHARE_INVITE_LINK_FOR_ACCESS;
    return null != a ? d = ei.default.Messages.INVITE_SHARE_LINK_TO_STREAM : null != s && (d = ei.default.Messages.EMBEDDED_ACTIVITIES_SHARE_LINK_TO_ACTIVITY), (0, l.jsx)(g.ModalContent, {
      className: er.noScroll,
      children: (0, l.jsxs)(B.default, {
        direction: B.default.Direction.VERTICAL,
        className: eu.marginBottom20,
        children: [(0, l.jsx)(g.Text, {
          className: er.subText,
          variant: "text-sm/normal",
          children: d
        }), (0, l.jsx)(et.InviteCopyInput, {
          ...this.props,
          copyValue: i
        })]
      })
    })
  }
  renderFooter() {
    var e;
    let {
      noInvitesAvailable: t,
      showFriends: n,
      guildScheduledEvent: a,
      streamUserId: s,
      application: r,
      inviteChannel: u,
      modalState: o
    } = this.props, {
      maxAge: d
    } = o, c = null, h = (0, J.default)(null !== (e = this.getInviteKey()) && void 0 !== e ? e : "");
    if (n) {
      let e = ei.default.Messages.INVITE_FOOTER_LINK_HEADER;
      null != s ? e = ei.default.Messages.INVITE_STREAM_FOOTER_LINK_HEADER : null != r ? e = ei.default.Messages.EMBEDDED_ACTIVITIES_INVITE_ACTIVITY_FOOTER_LINK_HEADER : null != a ? e = ei.default.Messages.GUILD_EVENT_INVITE_MODAL_FOOTER : (null == u ? void 0 : u.isGuildStageVoice()) && (e = ei.default.Messages.STAGE_CHANNEL_INVITE_TO_STAGE_MODAL_FOOTER), c = (0, l.jsxs)(B.default, {
        direction: B.default.Direction.VERTICAL,
        className: er.content,
        children: [(0, l.jsx)(g.FormTitle, {
          tag: "h5",
          className: eu.marginBottom8,
          children: e
        }), (0, l.jsx)(et.InviteCopyInput, {
          ...this.props,
          copyValue: h
        })]
      })
    } else !t && (c = (0, l.jsxs)(B.default, {
      justify: B.default.Justify.BETWEEN,
      className: eu.marginTop20,
      children: [(0, l.jsx)(g.Checkbox, {
        size: 18,
        type: g.Checkbox.Types.INVERTED,
        value: d === ec.value,
        onChange: this.handleToggleMaxAge,
        children: (0, l.jsx)(g.Text, {
          className: er.checkBoxLabel,
          variant: "text-sm/normal",
          children: ei.default.Messages.SET_INVITE_LINK_NEVER_EXPIRE
        })
      }), (0, l.jsx)(g.Tooltip, {
        text: ei.default.Messages.LINK_SETTINGS,
        children: e => {
          let {
            onMouseEnter: t,
            onMouseLeave: n
          } = e;
          return (0, l.jsx)(g.Clickable, {
            onClick: this.openSettings,
            onMouseEnter: t,
            onMouseLeave: n,
            className: eo.cursorPointer,
            children: (0, l.jsx)(K.default, {
              width: 18,
              height: 18,
              color: I.default.unsafe_rawColors.PRIMARY_400.css
            })
          })
        }
      })]
    }));
    return null != c ? (0, l.jsx)(g.ModalFooter, {
      className: i({
        [er.noPadding]: !n,
        [er.footer]: n
      }),
      children: c
    }) : null
  }
  getModalContent() {
    let {
      modalState: e,
      handleDone: t
    } = this.props, {
      currentPage: n
    } = e;
    switch (n) {
      case el.InstantInviteModalPages.MAIN:
        return (0, l.jsxs)(l.Fragment, {
          children: [this.renderHeader(), this.renderBody(), this.renderFooter()]
        });
      case el.InstantInviteModalPages.SETTINGS:
        return (0, l.jsx)(ee.InstantInviteSettingsPage, {
          ...this.props,
          headerId: this._headerId,
          onSelectMaxAge: this.handleSelectMaxAge,
          onSelectMaxUses: this.handleSelectMaxUses,
          onToggleTemporary: this.handleToggleTemporary,
          handleDone: t
        });
      case el.InstantInviteModalPages.GUEST:
        var a;
        let s = (0, J.default)(null !== (a = this.getInviteKey()) && void 0 !== a ? a : "");
        return (0, l.jsx)($.InstantInviteGuestPage, {
          ...this.props,
          headerId: this._headerId,
          handleDone: t,
          copyValue: s
        });
      default:
        return null
    }
  }
  render() {
    let {
      transitionState: e,
      inviteChannel: t,
      guild: n
    } = this.props;
    return (0, l.jsx)("div", {
      className: this.props.showFriends ? er.wrapper : void 0,
      children: (0, l.jsx)(g.ModalRoot, {
        impression: {
          impressionName: c.ImpressionNames.GUILD_INVITE,
          impressionProperties: {
            invite_channel_id: null == t ? void 0 : t.id,
            invite_guild_id: n.id
          }
        },
        "aria-labelledby": this._headerId,
        transitionState: e,
        className: er.modal,
        children: this.getModalContent()
      })
    })
  }
  constructor(...e) {
    super(...e), this._scroller = null, this._headerId = d.uniqueId(), this.openSettings = () => {
      let {
        changePage: e
      } = this.props;
      e(el.InstantInviteModalPages.SETTINGS)
    }, this.handleSelectMaxAge = e => {
      let {
        modalState: t,
        setModalState: n
      } = this.props;
      n({
        maxAge: e,
        savedMaxAge: t.maxAge
      })
    }, this.handleSelectMaxUses = e => {
      let {
        setModalState: t
      } = this.props;
      t({
        maxUses: e
      })
    }, this.handleToggleTemporary = e => {
      let {
        setModalState: t
      } = this.props;
      t({
        temporary: e
      })
    }, this.handleToggleGuest = e => {
      let {
        inviteFlags: t,
        setInviteFlags: n
      } = this.props;
      n((0, Z.setFlag)(t, h.GuildInviteFlags.IS_GUEST_INVITE, e))
    }, this.handleQueryChange = e => {
      var t;
      let {
        setModalState: n
      } = this.props;
      null === (t = this._scroller) || void 0 === t || t.scrollTo({
        to: 0
      }), (0, v.searchInviteSuggestions)(e), n({
        query: e
      })
    }, this.handleClearSearch = () => {
      this.handleQueryChange("")
    }, this.handleToggleMaxAge = () => {
      let {
        modalState: e,
        setModalState: t
      } = this.props, {
        maxAge: n,
        savedMaxAge: l
      } = e;
      t({
        maxAge: l,
        savedMaxAge: n
      })
    }, this.getRowHeight = (e, t) => {
      if (e > 0) return 0;
      let n = this.props.rows[t];
      switch (n.type) {
        case z.RowTypes.CHANNEL:
        case z.RowTypes.GROUP_DM:
        case z.RowTypes.DM:
        case z.RowTypes.FRIEND:
          return en.INVITE_ROW_HEIGHT;
        default:
          return 0
      }
    }, this.renderRow = e => {
      let {
        section: t,
        row: n
      } = e;
      if (t > 0) return null;
      let {
        analyticsLocation: a
      } = this.props, s = this.getInviteKey(), i = this.props.rows[n], r = "".concat(i.type, "-").concat(i.item.id);
      switch (i.type) {
        case z.RowTypes.GROUP_DM:
        case z.RowTypes.CHANNEL:
          return (0, l.jsx)(en.InviteRow, {
            row: i,
            channel: i.item,
            inviteKey: s,
            location: a
          }, r);
        case z.RowTypes.DM:
        case z.RowTypes.FRIEND:
          return (0, l.jsx)(en.InviteRow, {
            row: i,
            user: i.item,
            inviteKey: s,
            location: a
          }, r);
        default:
          return null
      }
    }
  }
}
eI.defaultProps = {
  analyticsLocation: ea.AnalyticsLocations.GUILD_CREATE_INVITE_SUGGESTION,
  defaultMaxAge: eh.value
};
var eg = a.forwardRef(function(e, t) {
  var n, s, i, r;
  let {
    channel: u,
    guild: o,
    source: d,
    guildScheduledEvent: c,
    streamUserId: I,
    applicationId: g,
    transitionState: C,
    onClose: x,
    welcomeToServer: M,
    page: L,
    analyticsLocation: G
  } = e, [F, b] = a.useState(L === el.InstantInviteModalPages.GUEST ? h.GuildInviteFlags.IS_GUEST_INVITE : 0), {
    AnalyticsLocationProvider: B,
    analyticsLocations: k
  } = (0, p.default)(m.default.INSTANT_INVITE_MODAL), K = (0, f.useStateFromStores)([V.default, P.default], () => {
    let e = P.default.getVoiceChannelId();
    if (null == e) return null;
    let t = V.default.getChannel(e);
    return (null == t ? void 0 : t.guild_id) === o.id ? t : null
  }), W = null != K && !(0, N.default)(K) && [ea.InstantInviteSources.GUILD_CONTEXT_MENU, ea.InstantInviteSources.GUILD_HEADER].includes(d), Y = (0, y.default)(o.id), z = (0, f.useStateFromStores)([P.default, V.default, O.default], () => {
    if (W && ((0, Z.hasFlag)(F, h.GuildInviteFlags.IS_GUEST_INVITE) || L === el.InstantInviteModalPages.GUEST)) return K;
    if (L === el.InstantInviteModalPages.GUEST) return 1 === Y.length ? Y[0] : void 0;
    if (null != u) return u;
    let e = P.default.getChannelId(),
      t = null == e || (0, es.isStaticChannelRoute)(e) ? void 0 : V.default.getChannel(e);
    return (null == t ? void 0 : t.isThread()) && (t = V.default.getChannel(t.parent_id)), null != t ? t : O.default.getDefaultChannel(o.id, !0, ea.Permissions.CREATE_INSTANT_INVITE)
  }, [W, F, L, u, o.id, K, Y]), [q, Q] = a.useState(null), J = null != q ? q : z, $ = null;
  null != I ? $ = el.InviteTargetTypes.STREAM : null != g && ($ = el.InviteTargetTypes.EMBEDDED_APPLICATION);
  let ee = null != u ? u.getGuildId() : null != o ? o.id : null,
    et = (0, f.useStateFromStores)([D.default], () => {
      let e = null != J ? J.id : null;
      return null == e ? null : D.default.getInvite(e, {
        targetType: $,
        targetUserId: I,
        targetApplicationId: g
      })
    }, [J, $, I, g]),
    [en, ei, er, eu, eo] = (0, f.useStateFromStoresArray)([w.default, H.default, j.default], () => {
      let e = null != J ? J.id : null;
      return [w.default.getInviteSuggestionRows(), w.default.getTotalSuggestionsCount() >= 1, w.default.getInitialCounts(), null != u && null != J ? H.default.getVoiceStatesForChannel(J) : null, null != ee ? j.default.getProps(ee, e) : null]
    }, [J, u, ee]),
    ed = (0, f.useStateFromStores)([U.default], () => null != J && U.default.can(ea.Permissions.CREATE_INSTANT_INVITE, J), [J]),
    eg = null === et || !ed,
    [eE] = a.useState(() => {
      let e = new Set;
      return null != I && null != eu ? eu.forEach(t => {
        let {
          user: n
        } = t;
        e.add(n.id)
      }) : null != ee && null != eo && $ !== el.InviteTargetTypes.EMBEDDED_APPLICATION && eo.rows.forEach(t => {
        t.type === j.MemberListRowTypes.MEMBER && e.add(t.userId)
      }), e
    }),
    ev = null == u ? void 0 : u.id,
    eT = (0, f.useStateFromStores)([R.default], () => R.default.getStageInstanceByChannel(ev), [ev]);
  a.useEffect(() => {
    (0, v.loadInviteSuggestions)({
      omitUserIds: eE,
      guild: o,
      channel: u,
      applicationId: g,
      inviteTargetType: $
    }).catch(ea.NOOP_NULL)
  }, [eE, u, o, g, $]);
  let [em] = (0, _.default)(null != g ? [g] : []), ep = (0, S.default)({
    guildId: ee
  }), e_ = null != et ? et.code : void 0, eN = null == et ? void 0 : et.maxAge, eC = null == et ? void 0 : et.maxUses, eS = null == et ? void 0 : et.temporary, ex = o.vanityURLCode, eM = null != ex && ex.length > 0, {
    enabled: eA
  } = X.default.useExperiment({
    guildId: null !== (i = null !== (s = null !== (n = o.id) && void 0 !== n ? n : null == et ? void 0 : et.guild.id) && void 0 !== s ? s : ee) && void 0 !== i ? i : ea.EMPTY_STRING_SNOWFLAKE_ID,
    location: "acc417_2"
  }, {
    autoTrackExposure: eM
  }), ey = eA && !(null == J ? void 0 : J.isGuildVocal()) && eM, eR = (null == J ? void 0 : J.type) === ea.ChannelTypes.GUILD_VOICE, eL = (0, N.default)(J);
  !ed && (null == eT ? void 0 : eT.invite_code) != null && (e_ = eT.invite_code);
  let [ej, eV] = a.useState({
    query: "",
    maxAge: null !== (r = null != eN ? eN : ep) && void 0 !== r ? r : eh.value,
    savedMaxAge: eN === ec.value ? null != ep ? ep : eh.value : ec.value,
    maxUses: null != eC && 0 !== eC ? eC : ef.value,
    temporary: null != eS && eS,
    networkError: void 0,
    showVanityURL: ey,
    currentPage: null != L ? L : el.InstantInviteModalPages.MAIN,
    lastPage: void 0
  }), eO = a.useCallback(e => {
    eV(t => ({
      ...t,
      ...e
    }))
  }, []), eD = a.useCallback(e => {
    eO({
      currentPage: e,
      lastPage: ej.currentPage
    })
  }, [ej.currentPage, eO]), ew = (eR || W) && L !== el.InstantInviteModalPages.GUEST && !ey && !eg && !eL, {
    enabled: eU
  } = A.GuestVoiceInvitesExperiment.useExperiment({
    guildId: null == o ? void 0 : o.id,
    location: "acc417_3"
  }, {
    autoTrackExposure: ew
  }), {
    maxAge: eG,
    maxUses: eP,
    temporary: eF,
    savedMaxAge: eH
  } = ej, eb = a.useCallback(() => {
    let {
      currentPage: e,
      lastPage: t
    } = ej;
    e === el.InstantInviteModalPages.SETTINGS && null != t ? eD(t) : x()
  }, [eD, ej, x]), eB = a.useCallback(() => {
    let e = null == J ? void 0 : J.id;
    0 === eP && 0 === eG && !eF && ey ? eO({
      networkError: void 0,
      showVanityURL: !0
    }) : null != e && (eO({
      networkError: void 0,
      showVanityURL: !1
    }), E.default.createInvite(e, {
      max_age: eG,
      max_uses: eP,
      target_type: $,
      target_user_id: I,
      target_application_id: null == em ? void 0 : em.id,
      temporary: eF,
      flags: F
    }, d).catch(e => eO({
      networkError: e,
      showVanityURL: ey
    }))), eG !== ec.value && eH !== ec.value && eO({
      savedMaxAge: ec.value
    })
  }, [ey, J, d, null == em ? void 0 : em.id, $, I, eG, eP, eF, F, eO, eH]), ek = (0, T.default)(J), eK = (0, T.default)(F), eW = ek !== J, eY = eK !== F;
  return a.useEffect(() => {
    (eW || eY) && eB()
  }, [eB, eW, eY]), (0, l.jsx)(B, {
    children: (0, l.jsx)(eI, {
      ref: t,
      canCreateInvites: ed,
      noInvitesAvailable: eg,
      inviteChannel: J,
      guild: o,
      guildScheduledEvent: c,
      streamUserId: I,
      vanityURLCode: ex,
      targetType: $,
      targetUserId: I,
      application: em,
      rows: en,
      showFriends: ei,
      initialCounts: er,
      code: e_,
      source: d,
      welcomeToServer: M,
      analyticsLocations: k,
      analyticsLocation: G,
      transitionState: C,
      onClose: x,
      canShowVanityURL: ey,
      isGuestInviteCreationToggleEnabled: eU && ew,
      shouldHideTemporaryInviteToggle: eU && ew || L === el.InstantInviteModalPages.GUEST,
      modalState: ej,
      setModalState: eO,
      changePage: eD,
      onGenerateNewLink: eB,
      inviteFlags: F,
      setInviteFlags: b,
      showGuestInviteToggleForCurrentVoiceChannel: W,
      setInviteChannel: Q,
      handleDone: eb
    })
  })
})