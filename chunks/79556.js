"use strict";
n.r(t), n.d(t, {
  default: function() {
    return P
  }
}), n("47120");
var l = n("735250");
n("470079");
var a = n("120356"),
  s = n.n(a),
  i = n("442837"),
  r = n("481060"),
  o = n("493683"),
  u = n("239091"),
  d = n("146773"),
  c = n("867176"),
  f = n("619915"),
  h = n("201895"),
  p = n("873696"),
  m = n("66999"),
  C = n("22082"),
  g = n("665906"),
  E = n("592125"),
  _ = n("430824"),
  S = n("496675"),
  I = n("306680"),
  N = n("9156"),
  T = n("594174"),
  A = n("109446"),
  L = n("98597"),
  v = n("648501"),
  x = n("473403"),
  R = n("304471"),
  M = n("981631"),
  O = n("647086"),
  y = n("809164");

function D(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
class b extends L.default {
  componentWillUnmount() {
    this.resetTextChannelPopoutTimers()
  }
  resetTextChannelPopoutTimers() {
    clearTimeout(this.enterTimer), clearTimeout(this.exitTimer)
  }
  renderChannelInfo() {
    let {
      channelInfo: e
    } = this.props;
    return null == e ? null : (0, l.jsx)("div", {
      className: y.channelInfo,
      children: e
    })
  }
  render() {
    let {
      channel: e,
      guild: t,
      selected: n,
      muted: a,
      unread: i,
      hasActiveThreads: o,
      hasMoreActiveThreads: u,
      mentionCount: d,
      connectChannelDropTarget: c,
      connectChannelDragSource: f,
      connectDragPreview: m,
      canReorderChannel: C,
      isSubscriptionGated: g,
      isFavoriteSuggestion: E,
      subtitle: _,
      forceTopLevelThread: S,
      embeddedApps: I,
      resolvedUnreadSetting: N,
      withGuildIcon: T,
      enableActivities: A
    } = this.props, L = A && null != I && I.length > 0, v = (0, p.getChannelSubtitle)(_), R = (0, l.jsx)("li", {
      className: s()(this.getClassName(), {
        [y.disabled]: this.isDisabled(),
        [y.selected]: n
      }),
      "data-dnd-name": e.name,
      onMouseEnter: u || L ? this.handleMouseEnter : void 0,
      onMouseLeave: u || L ? this.handleMouseLeave : void 0,
      children: (0, l.jsx)(r.Popout, {
        position: "right",
        renderPopout: this.renderPopout,
        spacing: 0,
        onRequestClose: this.handleClosePopout,
        shouldShow: u && this.state.shouldShowThreadsPopout || L && this.state.shouldShowActivities,
        children: () => (0, l.jsxs)(x.default, {
          className: y.iconVisibility,
          channel: e,
          guild: t,
          selected: !E && n,
          muted: a,
          unread: i,
          mentionCount: d,
          hasActiveThreads: o,
          subtitle: null == v ? void 0 : v.subtitle,
          subtitleColor: null == v ? void 0 : v.color,
          onMouseDown: this.handleMouseDown,
          onContextMenu: this.handleContextMenu,
          connectDragPreview: C ? m : null,
          isFavoriteSuggestion: E,
          channelTypeOverride: S ? M.ChannelTypes.GUILD_TEXT : void 0,
          resolvedUnreadSetting: N,
          withGuildIcon: T,
          "aria-label": (0, h.default)({
            channel: e,
            unread: i,
            mentionCount: d,
            isSubscriptionGated: g
          }),
          children: [E && this.renderAcceptSuggestionButton(), E && this.renderRemoveSuggestionButton(), !E && this.renderInviteButton(), !E && this.renderEditButton(), !E && this.renderChannelInfo()]
        })
      })
    });
    return C ? c(f(R)) : R
  }
  constructor(...e) {
    super(...e), D(this, "state", {
      shouldShowThreadsPopout: !1,
      shouldShowActivities: !1
    }), D(this, "enterTimer", 0), D(this, "exitTimer", 0), D(this, "handleMouseEnter", () => {
      (this.props.canShowThreadPreviewForUser || null != this.props.embeddedApps) && (this.resetTextChannelPopoutTimers(), this.enterTimer = setTimeout(() => {
        null != this.props.embeddedApps && this.props.embeddedApps.length > 0 ? this.setState({
          shouldShowActivities: !0
        }) : this.props.canShowThreadPreviewForUser && this.setState({
          shouldShowThreadsPopout: !0
        })
      }, 200))
    }), D(this, "handleMouseLeave", () => {
      this.resetTextChannelPopoutTimers(), this.exitTimer = setTimeout(() => {
        this.state.shouldShowActivities && this.setState({
          shouldShowActivities: !1
        }), this.state.shouldShowThreadsPopout && this.setState({
          shouldShowThreadsPopout: !1
        })
      }, 250)
    }), D(this, "handleThreadsPopoutClose", () => {
      this.resetTextChannelPopoutTimers(), this.setState({
        shouldShowThreadsPopout: !1
      })
    }), D(this, "handleActivitiesPopoutClose", () => {
      this.resetTextChannelPopoutTimers(), this.setState({
        shouldShowActivities: !1
      })
    }), D(this, "handleClosePopout", () => {
      this.state.shouldShowActivities && this.handleActivitiesPopoutClose(), this.state.shouldShowThreadsPopout && this.handleThreadsPopoutClose()
    }), D(this, "handleMouseDown", () => {
      this.handleActivitiesPopoutClose(), this.handleThreadsPopoutClose();
      let {
        channel: e
      } = this.props, t = e.getGuildId();
      o.default.preload(null != t ? t : M.ME, e.id)
    }), D(this, "renderPopout", e => {
      let {
        channel: t,
        sorting: n,
        embeddedApps: a
      } = this.props, {
        shouldShowActivities: s
      } = this.state;
      return null != a && a.length > 0 && s && !n ? (0, l.jsx)(R.default, {
        onAction: this.handleActivitiesPopoutClose,
        channel: t
      }) : (0, l.jsx)(A.default, {
        ...e,
        channel: this.props.channel
      })
    }), D(this, "handleContextMenu", e => {
      let {
        channel: t
      } = this.props;
      if (t.type === M.ChannelTypes.GROUP_DM) {
        (0, u.openContextMenuLazy)(e, async () => {
          let {
            default: e
          } = await Promise.all([n.e("99387"), n.e("79695"), n.e("25421")]).then(n.bind(n, "354741"));
          return n => (0, l.jsx)(e, {
            ...n,
            channel: t,
            selected: !0
          })
        });
        return
      }
      if (t.type === M.ChannelTypes.DM) {
        let a = T.default.getUser(t.getRecipientId());
        null != a && (0, u.openContextMenuLazy)(e, async () => {
          let {
            default: e
          } = await Promise.all([n.e("99387"), n.e("79695"), n.e("1502"), n.e("56826")]).then(n.bind(n, "131404"));
          return n => (0, l.jsx)(e, {
            ...n,
            user: a,
            channel: t,
            showModalItems: !1
          })
        });
        return
      }
      let a = _.default.getGuild(t.getGuildId());
      null != a && (0, u.openContextMenuLazy)(e, async () => {
        let {
          default: e
        } = await Promise.all([n.e("99387"), n.e("79695"), n.e("18320"), n.e("54310")]).then(n.bind(n, "373651"));
        return n => (0, l.jsx)(e, {
          ...n,
          channel: t,
          guild: a
        })
      })
    })
  }
}
let j = (0, d.makeChannelSortable)(b);

function P(e) {
  let {
    channel: t,
    guild: n,
    disableSorting: a,
    isFavoriteCategory: s,
    muted: r,
    selected: o
  } = e, {
    hasActiveThreads: u,
    hasMoreActiveThreads: d
  } = (0, g.useHasActiveThreads)(t), h = (0, i.useStateFromStoresObject)([I.default], () => ({
    unread: I.default.hasUnread(t.id),
    ackMessageId: I.default.ackMessageId(t.id),
    mentionCount: I.default.getMentionCount(t.id)
  })), p = (0, i.useStateFromStores)([N.default], () => N.default.resolveUnreadSetting(t)), _ = (0, i.useStateFromStoresObject)([E.default, S.default], () => {
    let e = E.default.getChannel(t.parent_id);
    return {
      canManageChannel: S.default.can(M.Permissions.MANAGE_CHANNELS, t),
      canReorderChannel: !0 !== a && (n.id === O.FAVORITES_RAW_GUILD_ID || (null != e ? S.default.can(M.Permissions.MANAGE_CHANNELS, e) : S.default.can(M.Permissions.MANAGE_CHANNELS, n)))
    }
  }), A = (0, i.useStateFromStores)([C.default], () => C.default.shouldIndicateNewChannel(n.id, t.id)), {
    needSubscriptionToAccess: L,
    isSubscriptionGated: x
  } = (0, m.default)(t.id), R = (0, i.useStateFromStores)([N.default], () => N.default.isFavorite(n.id, t.id)), y = (0, i.useStateFromStores)([T.default], () => {
    let e = T.default.getCurrentUser();
    return null != e && (!t.isNSFW() || e.nsfwAllowed)
  }, [t]), D = (0, c.useIsActivitiesInTextEnabled)(t.id, !1, "webGuildTextChannel"), b = (0, v.default)({
    channel: t,
    isChannelCollapsed: !1,
    isChannelSelected: o,
    isSubscriptionGated: x,
    needSubscriptionToAccess: L,
    isNewChannel: A,
    muted: r,
    enableActivities: D,
    resolvedUnreadSetting: p
  }), P = (0, f.default)(t);
  return (0, l.jsx)(j, {
    ...h,
    ..._,
    ...e,
    hasActiveThreads: u,
    hasMoreActiveThreads: d,
    isSubscriptionGated: x,
    needSubscriptionToAccess: L,
    isNewChannel: A && e.canBeNewChannel,
    isFavoriteSuggestion: s && !R,
    canShowThreadPreviewForUser: y,
    channelInfo: b,
    embeddedApps: P,
    resolvedUnreadSetting: p,
    hasChannelInfo: null != b,
    enableActivities: D
  })
}