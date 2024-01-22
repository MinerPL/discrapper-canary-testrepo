"use strict";
n.r(t), n.d(t, {
  default: function() {
    return eI
  }
}), n("222007");
var l = n("37983"),
  i = n("884691"),
  a = n("414456"),
  s = n.n(a),
  r = n("627445"),
  o = n.n(r),
  u = n("917351"),
  d = n.n(u),
  c = n("759843"),
  f = n("498574"),
  g = n("446674"),
  h = n("669491"),
  I = n("77078"),
  m = n("970728"),
  E = n("685073"),
  p = n("84339"),
  v = n("812204"),
  _ = n("685665"),
  T = n("442939"),
  N = n("656038"),
  C = n("419830"),
  S = n("262362"),
  x = n("582415"),
  A = n("385042"),
  M = n("87241"),
  w = n("155996"),
  L = n("834052"),
  R = n("373469"),
  y = n("19766"),
  U = n("42203"),
  O = n("923959"),
  V = n("330154"),
  j = n("705955"),
  b = n("957255"),
  D = n("824563"),
  F = n("18494"),
  G = n("697218"),
  P = n("316133"),
  k = n("941886"),
  H = n("145131"),
  B = n("810567"),
  K = n("474571"),
  W = n("423487"),
  Z = n("599110"),
  Y = n("568734"),
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
  ei = n("49111"),
  ea = n("724210"),
  es = n("782340"),
  er = n("435808"),
  eo = n("926622"),
  eu = n("486425"),
  ed = n("56585");
let {
  INVITE_OPTIONS_FOREVER: ec,
  INVITE_OPTIONS_7_DAYS: ef,
  INVITE_OPTIONS_UNLIMITED: eg
} = z.default;
class eh extends i.PureComponent {
  componentDidMount() {
    let {
      inviteChannel: e,
      code: t,
      guild: n,
      source: l,
      canCreateInvites: i,
      analyticsLocation: a,
      streamUserId: s,
      targetType: r,
      targetUserId: o,
      application: u,
      initialCounts: d,
      rows: c,
      showFriends: f,
      modalState: g,
      setModalState: h
    } = this.props, {
      maxAge: I,
      maxUses: E,
      temporary: p
    } = g;
    if (i) {
      let n = null == e ? void 0 : e.id;
      if (null == n) return;
      h({
        networkError: void 0
      }), m.default.createInvite(n, {
        validate: null != t ? t : null,
        max_age: I,
        max_uses: E,
        target_user_id: o,
        target_type: r,
        target_application_id: null == u ? void 0 : u.id,
        temporary: p
      }, l).catch(e => h({
        networkError: e
      }))
    }
    if (f && Z.default.track(ei.AnalyticEvents.INVITE_SUGGESTION_OPENED, {
        location: l,
        num_suggestions: c.length,
        num_friends: d.numFriends,
        num_dms: d.numDms,
        num_group_dms: d.numGroupDms,
        guild_id: n.id
      }), Q.default.trackExposure({
        guildId: null == n ? void 0 : n.id,
        location: "acc417_1"
      }), null != s) {
      let e = R.default.getStreamForUser(s, n.id),
        t = (0, x.getStreamerApplication)(e, D.default);
      Z.default.track(ei.AnalyticEvents.OPEN_MODAL, {
        type: "Send Stream Invite",
        source: l,
        location: a,
        other_user_id: s,
        application_id: null != t ? t.id : null,
        application_name: null != t ? t.name : null,
        game_id: null != t ? t.id : null
      })
    } else(null == u ? void 0 : u.id) != null || Z.default.track(ei.AnalyticEvents.OPEN_MODAL, {
      type: "Instant Invite Modal",
      source: l,
      location: a
    })
  }
  componentWillUnmount() {
    let {
      inviteChannel: e,
      inviteFlags: t,
      setInviteFlags: n
    } = this.props;
    (0, Y.hasFlag)(t, f.GuildInviteFlags.IS_GUEST_INVITE) && null != e && (n((0, Y.removeFlag)(t, f.GuildInviteFlags.IS_GUEST_INVITE)), m.default.clearInviteFromStore(e.id))
  }
  getInviteKey() {
    let {
      code: e,
      vanityURLCode: t,
      guildScheduledEvent: n,
      modalState: l
    } = this.props, {
      showVanityURL: i
    } = l, a = i ? t : null != e ? e : t;
    return null == a ? a : (0, q.generateInviteKeyFromExtraData)({
      baseCode: a,
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
        color: h.default.unsafe_rawColors.YELLOW_300.css,
        width: 12
      }), (0, l.jsx)(I.Text, {
        variant: "text-xs/normal",
        color: "header-secondary",
        children: es.default.Messages.INVITE_PRIVATE_CHANNEL_WARNING
      })]
    }) : null
  }
  renderHeader() {
    let e;
    let {
      guild: t,
      showFriends: n,
      guildScheduledEvent: i,
      streamUserId: a,
      application: r,
      welcomeToServer: o,
      inviteChannel: u,
      modalState: d,
      handleDone: c
    } = this.props, {
      query: f
    } = d, g = null, h = null;
    if (e = o ? null : null != a ? es.default.Messages.INVITE_STREAM_HEADER : null != r ? es.default.Messages.EMBEDDED_ACTIVITIES_INVITE_FRIENDS_TO_ACTIVITY_NAME.format({
        applicationName: r.name
      }) : null != i ? es.default.Messages.GUILD_EVENT_INVITE_MODAL_TITLE : (null == u ? void 0 : u.isGuildStageVoice()) ? es.default.Messages.STAGE_CHANNEL_INVITE_TO_STAGE_MODAL_HEADER : es.default.Messages.INVITE_TO_SERVER_NAME.format({
        name: t.toString()
      }), null != u) {
      let e = (0, C.getChannelIconComponent)(u, t);
      null != e && (h = (0, l.jsxs)("div", {
        className: er.headerChannelContainer,
        children: [(0, l.jsx)(e, {
          className: er.channelIcon
        }), (0, l.jsx)(I.Text, {
          color: "interactive-normal",
          variant: "text-md/normal",
          children: u.name
        })]
      }))
    }
    return g = t.hasFeature(ei.GuildFeatures.HUB) ? (0, l.jsxs)("div", {
      className: er.hubHeader,
      children: [(0, l.jsx)(I.Heading, {
        className: s(er.hubInviteTitle, er.headerCloseButtonSpacing),
        id: this._headerId,
        variant: "heading-xl/semibold",
        color: "header-primary",
        children: es.default.Messages.HUB_INVITE_HEADER
      }), (0, l.jsx)(I.Text, {
        color: "header-secondary",
        variant: "text-md/normal",
        children: es.default.Messages.HUB_INVITE_SUBHEADER
      }), n && (0, l.jsx)(B.default, {
        query: f,
        className: er.hubFriendSearch,
        onChange: this.handleQueryChange,
        placeholder: es.default.Messages.INVITE_SEARCH_FOR_FRIENDS,
        "aria-label": es.default.Messages.INVITE_SEARCH_FOR_FRIENDS,
        autoFocus: !0,
        onClear: this.handleClearSearch
      })]
    }) : n ? (0, l.jsxs)("div", {
      className: er.header,
      children: [(0, l.jsx)("div", {
        className: er.headerTopRow,
        children: (0, l.jsx)(I.FormTitle, {
          id: this._headerId,
          tag: "h2",
          className: s(eo.marginBottom4, er.headerCloseButtonSpacing, er.headerText),
          children: e
        })
      }), h, (0, l.jsx)(B.default, {
        query: f,
        className: er.searchBar,
        onChange: this.handleQueryChange,
        placeholder: es.default.Messages.INVITE_SEARCH_FOR_FRIENDS,
        autoFocus: !0,
        onClear: this.handleClearSearch
      }), (0, l.jsx)("div", {
        className: eo.marginTop8,
        children: this.renderChannelWarning()
      })]
    }) : (0, l.jsxs)(l.Fragment, {
      children: [(0, l.jsx)(I.FormTitle, {
        id: this._headerId,
        tag: "h2",
        className: s(eo.marginReset, er.headerCloseButtonSpacing, er.headerText),
        children: e
      }), h, this.renderChannelWarning()]
    }), (0, l.jsxs)(I.ModalHeader, {
      separator: n,
      children: [(0, l.jsx)(I.ModalCloseButton, {
        className: er.closeButton,
        onClick: c
      }), (0, l.jsxs)("div", {
        className: er.headerContainer,
        children: [o && (0, l.jsxs)(l.Fragment, {
          children: [(0, l.jsx)("img", {
            className: er.welcomeImage,
            src: ed,
            alt: ""
          }), (0, l.jsx)(I.H, {
            className: er.welcomeHeading,
            children: es.default.Messages.INVITE_WELCOME_HEADING
          }), (0, l.jsx)("p", {
            className: er.welcomeSubheading,
            children: es.default.Messages.INVITE_WELCOME_SUBHEADING
          })]
        }), null != a ? (0, l.jsx)(A.default, {}) : null, g]
      })]
    })
  }
  renderFriendsBody() {
    let {
      rows: e
    } = this.props, t = this.getInviteKey();
    return 0 === e.length ? (0, l.jsx)(I.ModalContent, {
      className: s(er.inviteRowEmptyState),
      children: (0, l.jsx)(k.EmptyStateText, {
        children: es.default.Messages.INVITE_FRIEND_MODAL_NO_RESULTS
      })
    }) : null == t ? (0, l.jsx)(I.ModalContent, {
      className: s(er.inviteRowEmptyState),
      children: (0, l.jsx)(k.EmptyStateText, {
        children: es.default.Messages.INVITE_FRIEND_MODAL_LOADING
      })
    }) : (0, l.jsx)(I.ModalListContent, {
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
      streamUserId: i,
      application: a
    } = this.props;
    if (n) return this.renderFriendsBody();
    let s = (0, J.default)(null !== (e = this.getInviteKey()) && void 0 !== e ? e : ""),
      r = G.default.getCurrentUser();
    o(null != r, "InstantInviteModal: user cannot be undefined");
    let u = t.isOwner(r),
      d = u ? es.default.Messages.INVITE_SHARE_LINK_OWN_SERVER : es.default.Messages.SHARE_INVITE_LINK_FOR_ACCESS;
    return null != i ? d = es.default.Messages.INVITE_SHARE_LINK_TO_STREAM : null != a && (d = es.default.Messages.EMBEDDED_ACTIVITIES_SHARE_LINK_TO_ACTIVITY), (0, l.jsx)(I.ModalContent, {
      className: er.noScroll,
      children: (0, l.jsxs)(H.default, {
        direction: H.default.Direction.VERTICAL,
        className: eo.marginBottom20,
        children: [(0, l.jsx)(I.Text, {
          className: er.subText,
          variant: "text-sm/normal",
          children: d
        }), (0, l.jsx)(et.InviteCopyInput, {
          ...this.props,
          copyValue: s
        })]
      })
    })
  }
  renderFooter() {
    var e;
    let {
      noInvitesAvailable: t,
      showFriends: n,
      guildScheduledEvent: i,
      streamUserId: a,
      application: r,
      inviteChannel: o,
      modalState: u
    } = this.props, {
      maxAge: d
    } = u, c = null, f = (0, J.default)(null !== (e = this.getInviteKey()) && void 0 !== e ? e : "");
    if (n) {
      let e = es.default.Messages.INVITE_FOOTER_LINK_HEADER;
      null != a ? e = es.default.Messages.INVITE_STREAM_FOOTER_LINK_HEADER : null != r ? e = es.default.Messages.EMBEDDED_ACTIVITIES_INVITE_ACTIVITY_FOOTER_LINK_HEADER : null != i ? e = es.default.Messages.GUILD_EVENT_INVITE_MODAL_FOOTER : (null == o ? void 0 : o.isGuildStageVoice()) && (e = es.default.Messages.STAGE_CHANNEL_INVITE_TO_STAGE_MODAL_FOOTER), c = (0, l.jsxs)(H.default, {
        direction: H.default.Direction.VERTICAL,
        className: er.content,
        children: [(0, l.jsx)(I.FormTitle, {
          tag: "h5",
          className: eo.marginBottom8,
          children: e
        }), (0, l.jsx)(et.InviteCopyInput, {
          ...this.props,
          copyValue: f
        })]
      })
    } else !t && (c = (0, l.jsxs)(H.default, {
      justify: H.default.Justify.BETWEEN,
      className: eo.marginTop20,
      children: [(0, l.jsx)(I.Checkbox, {
        size: 18,
        type: I.Checkbox.Types.INVERTED,
        value: d === ec.value,
        onChange: this.handleToggleMaxAge,
        children: (0, l.jsx)(I.Text, {
          className: er.checkBoxLabel,
          variant: "text-sm/normal",
          children: es.default.Messages.SET_INVITE_LINK_NEVER_EXPIRE
        })
      }), (0, l.jsx)(I.Tooltip, {
        text: es.default.Messages.LINK_SETTINGS,
        children: e => {
          let {
            onMouseEnter: t,
            onMouseLeave: n
          } = e;
          return (0, l.jsx)(I.Clickable, {
            onClick: this.openSettings,
            onMouseEnter: t,
            onMouseLeave: n,
            className: eu.cursorPointer,
            children: (0, l.jsx)(K.default, {
              width: 18,
              height: 18,
              color: h.default.unsafe_rawColors.PRIMARY_400.css
            })
          })
        }
      })]
    }));
    return null != c ? (0, l.jsx)(I.ModalFooter, {
      className: s({
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
        var i;
        let a = (0, J.default)(null !== (i = this.getInviteKey()) && void 0 !== i ? i : "");
        return (0, l.jsx)($.InstantInviteGuestPage, {
          ...this.props,
          headerId: this._headerId,
          handleDone: t,
          copyValue: a
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
      children: (0, l.jsx)(I.ModalRoot, {
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
      n((0, Y.setFlag)(t, f.GuildInviteFlags.IS_GUEST_INVITE, e))
    }, this.handleQueryChange = e => {
      var t;
      let {
        setModalState: n
      } = this.props;
      null === (t = this._scroller) || void 0 === t || t.scrollTo({
        to: 0
      }), (0, E.searchInviteSuggestions)(e), n({
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
        analyticsLocation: i
      } = this.props, a = this.getInviteKey(), s = this.props.rows[n], r = "".concat(s.type, "-").concat(s.item.id);
      switch (s.type) {
        case z.RowTypes.GROUP_DM:
        case z.RowTypes.CHANNEL:
          return (0, l.jsx)(en.InviteRow, {
            row: s,
            channel: s.item,
            inviteKey: a,
            location: i
          }, r);
        case z.RowTypes.DM:
        case z.RowTypes.FRIEND:
          return (0, l.jsx)(en.InviteRow, {
            row: s,
            user: s.item,
            inviteKey: a,
            location: i
          }, r);
        default:
          return null
      }
    }
  }
}
eh.defaultProps = {
  analyticsLocation: ei.AnalyticsLocations.GUILD_CREATE_INVITE_SUGGESTION,
  defaultMaxAge: ef.value
};
var eI = i.forwardRef(function(e, t) {
  var n, a, s, r;
  let {
    channel: o,
    guild: u,
    source: d,
    guildScheduledEvent: c,
    streamUserId: h,
    applicationId: I,
    transitionState: C,
    onClose: x,
    welcomeToServer: A,
    page: R,
    analyticsLocation: D
  } = e, [G, k] = i.useState(R === el.InstantInviteModalPages.GUEST ? f.GuildInviteFlags.IS_GUEST_INVITE : 0), {
    AnalyticsLocationProvider: H,
    analyticsLocations: B
  } = (0, _.default)(v.default.INSTANT_INVITE_MODAL), K = (0, g.useStateFromStores)([U.default, F.default], () => {
    let e = F.default.getVoiceChannelId();
    if (null == e) return null;
    let t = U.default.getChannel(e);
    return (null == t ? void 0 : t.guild_id) === u.id ? t : null
  }), W = null != K && !(0, N.default)(K) && [ei.InstantInviteSources.GUILD_CONTEXT_MENU, ei.InstantInviteSources.GUILD_HEADER].includes(d), Z = (0, w.default)(u.id), z = (0, g.useStateFromStores)([F.default, U.default, O.default], () => {
    if (W && ((0, Y.hasFlag)(G, f.GuildInviteFlags.IS_GUEST_INVITE) || R === el.InstantInviteModalPages.GUEST)) return K;
    if (R === el.InstantInviteModalPages.GUEST) return 1 === Z.length ? Z[0] : void 0;
    if (null != o) return o;
    let e = F.default.getChannelId(),
      t = null == e || (0, ea.isStaticChannelRoute)(e) ? void 0 : U.default.getChannel(e);
    return (null == t ? void 0 : t.isThread()) && (t = U.default.getChannel(t.parent_id)), null != t ? t : O.default.getDefaultChannel(u.id, !0, ei.Permissions.CREATE_INSTANT_INVITE)
  }, [W, G, R, o, u.id, K, Z]), [q, Q] = i.useState(null), J = null != q ? q : z, $ = null;
  null != h ? $ = el.InviteTargetTypes.STREAM : null != I && ($ = el.InviteTargetTypes.EMBEDDED_APPLICATION);
  let ee = null != o ? o.getGuildId() : null != u ? u.id : null,
    et = (0, g.useStateFromStores)([V.default], () => {
      let e = null != J ? J.id : null;
      return null == e ? null : V.default.getInvite(e, {
        targetType: $,
        targetUserId: h,
        targetApplicationId: I
      })
    }, [J, $, h, I]),
    [en, es, er, eo, eu] = (0, g.useStateFromStoresArray)([j.default, P.default, y.default], () => {
      let e = null != J ? J.id : null;
      return [j.default.getInviteSuggestionRows(), j.default.getTotalSuggestionsCount() >= 1, j.default.getInitialCounts(), null != o && null != J ? P.default.getVoiceStatesForChannel(J) : null, null != ee ? y.default.getProps(ee, e) : null]
    }, [J, o, ee]),
    ed = (0, g.useStateFromStores)([b.default], () => null != J && b.default.can(ei.Permissions.CREATE_INSTANT_INVITE, J), [J]),
    eI = null === et || !ed,
    [em] = i.useState(() => {
      let e = new Set;
      return null != h && null != eo ? eo.forEach(t => {
        let {
          user: n
        } = t;
        e.add(n.id)
      }) : null != ee && null != eu && $ !== el.InviteTargetTypes.EMBEDDED_APPLICATION && eu.rows.forEach(t => {
        t.type === y.MemberListRowTypes.MEMBER && e.add(t.userId)
      }), e
    }),
    eE = null == o ? void 0 : o.id,
    ep = (0, g.useStateFromStores)([L.default], () => L.default.getStageInstanceByChannel(eE), [eE]);
  i.useEffect(() => {
    (0, E.loadInviteSuggestions)({
      omitUserIds: em,
      guild: u,
      channel: o,
      applicationId: I,
      inviteTargetType: $
    }).catch(ei.NOOP_NULL)
  }, [em, o, u, I, $]);
  let [ev] = (0, T.default)(null != I ? [I] : []), e_ = (0, S.default)({
    guildId: ee
  }), eT = null != et ? et.code : void 0, eN = null == et ? void 0 : et.maxAge, eC = null == et ? void 0 : et.maxUses, eS = null == et ? void 0 : et.temporary, ex = u.vanityURLCode, eA = null != ex && ex.length > 0, {
    enabled: eM
  } = X.default.useExperiment({
    guildId: null !== (s = null !== (a = null !== (n = u.id) && void 0 !== n ? n : null == et ? void 0 : et.guild.id) && void 0 !== a ? a : ee) && void 0 !== s ? s : "",
    location: "acc417_2"
  }, {
    autoTrackExposure: eA
  }), ew = eM && !(null == J ? void 0 : J.isGuildVocal()) && eA, eL = (null == J ? void 0 : J.type) === ei.ChannelTypes.GUILD_VOICE, eR = (0, N.default)(J);
  !ed && (null == ep ? void 0 : ep.invite_code) != null && (eT = ep.invite_code);
  let [ey, eU] = i.useState({
    query: "",
    maxAge: null !== (r = null != eN ? eN : e_) && void 0 !== r ? r : ef.value,
    savedMaxAge: eN === ec.value ? null != e_ ? e_ : ef.value : ec.value,
    maxUses: null != eC && 0 !== eC ? eC : eg.value,
    temporary: null != eS && eS,
    networkError: void 0,
    showVanityURL: ew,
    currentPage: null != R ? R : el.InstantInviteModalPages.MAIN,
    lastPage: void 0
  }), eO = i.useCallback(e => {
    eU(t => ({
      ...t,
      ...e
    }))
  }, []), eV = i.useCallback(e => {
    eO({
      currentPage: e,
      lastPage: ey.currentPage
    })
  }, [ey.currentPage, eO]), ej = (eL || W) && R !== el.InstantInviteModalPages.GUEST && !ew && !eI && !eR, {
    enabled: eb
  } = M.GuestVoiceInvitesExperiment.useExperiment({
    guildId: null == u ? void 0 : u.id,
    location: "acc417_3"
  }, {
    autoTrackExposure: ej
  }), {
    maxAge: eD,
    maxUses: eF,
    temporary: eG,
    savedMaxAge: eP
  } = ey, ek = i.useCallback(() => {
    let {
      currentPage: e,
      lastPage: t
    } = ey;
    e === el.InstantInviteModalPages.SETTINGS && null != t ? eV(t) : x()
  }, [eV, ey, x]), eH = i.useCallback(() => {
    let e = null == J ? void 0 : J.id;
    0 === eF && 0 === eD && !eG && ew ? eO({
      networkError: void 0,
      showVanityURL: !0
    }) : null != e && (eO({
      networkError: void 0,
      showVanityURL: !1
    }), m.default.createInvite(e, {
      max_age: eD,
      max_uses: eF,
      target_type: $,
      target_user_id: h,
      target_application_id: null == ev ? void 0 : ev.id,
      temporary: eG,
      flags: G
    }, d).catch(e => eO({
      networkError: e,
      showVanityURL: ew
    }))), eD !== ec.value && eP !== ec.value && eO({
      savedMaxAge: ec.value
    })
  }, [ew, J, d, null == ev ? void 0 : ev.id, $, h, eD, eF, eG, G, eO, eP]), eB = (0, p.default)(J), eK = (0, p.default)(G), eW = eB !== J, eZ = eK !== G;
  return i.useEffect(() => {
    (eW || eZ) && eH()
  }, [eH, eW, eZ]), (0, l.jsx)(H, {
    children: (0, l.jsx)(eh, {
      ref: t,
      canCreateInvites: ed,
      noInvitesAvailable: eI,
      inviteChannel: J,
      guild: u,
      guildScheduledEvent: c,
      streamUserId: h,
      vanityURLCode: ex,
      targetType: $,
      targetUserId: h,
      application: ev,
      rows: en,
      showFriends: es,
      initialCounts: er,
      code: eT,
      source: d,
      welcomeToServer: A,
      analyticsLocations: B,
      analyticsLocation: D,
      transitionState: C,
      onClose: x,
      canShowVanityURL: ew,
      isGuestInviteCreationToggleEnabled: eb && ej,
      shouldHideTemporaryInviteToggle: eb && ej || R === el.InstantInviteModalPages.GUEST,
      modalState: ey,
      setModalState: eO,
      changePage: eV,
      onGenerateNewLink: eH,
      inviteFlags: G,
      setInviteFlags: k,
      showGuestInviteToggleForCurrentVoiceChannel: W,
      setInviteChannel: Q,
      handleDone: ek
    })
  })
})