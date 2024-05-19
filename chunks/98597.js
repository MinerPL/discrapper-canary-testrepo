"use strict";
n.r(t), n.d(t, {
  ChannelItemEditButton: function() {
    return j
  },
  ChannelItemInviteButton: function() {
    return P
  },
  default: function() {
    return w
  },
  getChannelItemClassName: function() {
    return b
  },
  isChannelItemDisabled: function() {
    return D
  }
});
var l, a, s, i, r = n("735250"),
  o = n("470079"),
  u = n("120356"),
  d = n.n(u),
  c = n("442837"),
  f = n("115850"),
  h = n("481060"),
  m = n("787014"),
  C = n("924301"),
  p = n("159300"),
  g = n("152376"),
  E = n("427679"),
  _ = n("155409"),
  S = n("131704"),
  I = n("199902"),
  N = n("430824"),
  T = n("496675"),
  A = n("914010"),
  L = n("263704"),
  v = n("465670"),
  x = n("937482"),
  R = n("281029"),
  M = n("981631"),
  y = n("689938"),
  O = n("513285");

function D(e, t, n) {
  return null != t && !!t && !(0, R.areTypesInSameSection)(n, e.type)
}

function b(e, t) {
  return null == t ? O.containerDefault : e > t ? O.containerDragAfter : O.containerDragBefore
}

function j(e) {
  let {
    channel: t,
    disableManageChannels: n,
    tabIndex: l,
    forceShowButtons: a,
    hasChannelInfo: s = !1
  } = e;
  if ((0, c.useStateFromStores)([T.default, A.default], () => n || A.default.getGuildId() === M.FAVORITES || !T.default.can(M.Permissions.MANAGE_CHANNELS, t) && !T.default.can(M.Permissions.MANAGE_ROLES, t) && !T.default.can(M.Permissions.MANAGE_WEBHOOKS, t) || (0, S.isGuildSelectableChannelType)(t.type) && !T.default.can(M.Permissions.VIEW_CHANNEL, t) || t.isGuildVocal() && !T.default.can(M.Permissions.CONNECT, t) || !S.EDITABLE_CHANNEL_TYPES.has(t.type))) return null;

  function i() {
    m.default.open(t.id)
  }
  return (0, r.jsx)(h.Tooltip, {
    text: y.default.Messages.EDIT_CHANNEL,
    children: e => {
      let {
        onMouseEnter: t,
        onMouseLeave: n,
        onFocus: o,
        onBlur: u
      } = e;
      return (0, r.jsx)(h.Clickable, {
        className: d()(O.iconItem, a ? O.alwaysShown : void 0, s ? O.iconWithChannelInfo : O.iconNoChannelInfo),
        onClick: i,
        tabIndex: l,
        "aria-label": y.default.Messages.EDIT_CHANNEL,
        onMouseEnter: t,
        onMouseLeave: n,
        onFocus: o,
        onBlur: u,
        children: (0, r.jsx)(x.default, {
          width: 16,
          height: 16,
          className: O.actionIcon
        })
      })
    }
  })
}

function P(e) {
  let {
    channel: t,
    isDefaultChannel: l = !1,
    locked: a,
    tabIndex: s,
    forceShowButtons: i,
    hasChannelInfo: o = !1
  } = e, u = (0, c.useStateFromStores)([N.default], () => N.default.getGuild(t.getGuildId())), m = (0, c.useStateFromStores)([E.default], () => E.default.getStageInstanceByChannel(t.id), [t.id]), g = (0, c.useStateFromStores)([C.default], () => C.default.getActiveEventByChannel(t.id), [t.id]), S = (0, c.useStateFromStores)([T.default], () => (0, p.canViewInviteModal)(T.default, u, t, m)), A = (0, c.useStateFromStores)([T.default], () => T.default.can(M.Permissions.CREATE_INSTANT_INVITE, t) ? y.default.Messages.CREATE_INSTANT_INVITE : y.default.Messages.INVITE_TO_SERVER);
  if (a || !S) return null;

  function L() {
    if (null != u) {
      let e = I.default.getAllActiveStreams().filter(e => e.state !== M.ApplicationStreamStates.ENDED && e.channelId === t.id);
      (0, h.openModalLazy)(async () => {
        let {
          default: l
        } = await Promise.all([n.e("99387"), n.e("7654"), n.e("92893")]).then(n.bind(n, "560114"));
        return n => (0, r.jsx)(l, {
          ...n,
          guild: u,
          channel: t,
          streamUserId: 1 === e.length ? e[0].ownerId : null,
          source: M.InstantInviteSources.GUILD_CHANNELS,
          guildScheduledEvent: g
        })
      })
    }
  }
  let v = (0, r.jsx)(f.GroupPlusIcon, {
    width: 16,
    height: 16,
    className: O.actionIcon,
    "aria-hidden": !0
  });
  return l && (v = (0, r.jsx)(_.default, {
    tutorialId: "instant-invite",
    position: "left",
    children: (0, r.jsx)("div", {
      children: v
    })
  })), (0, r.jsx)(h.Tooltip, {
    text: A,
    children: e => (0, r.jsx)(h.Clickable, {
      className: d()(O.iconItem, i ? O.alwaysShown : void 0, o ? O.iconWithChannelInfo : O.iconNoChannelInfo),
      ...e,
      onClick: L,
      tabIndex: s,
      "aria-label": A,
      children: v
    })
  })
}

function G(e) {
  let {
    channel: t
  } = e, n = () => {
    (0, g.dimissFavoriteSuggestion)(t.guild_id, t.id)
  };
  return (0, r.jsx)(h.Tooltip, {
    text: y.default.Messages.REMOVE_FAVORITE_SUGGESTION,
    children: e => (0, r.jsx)(h.Clickable, {
      className: O.iconItem,
      ...e,
      onClick: n,
      "aria-label": y.default.Messages.REMOVE_FAVORITE_SUGGESTION,
      children: (0, r.jsx)(v.default, {
        width: 16,
        height: 16,
        className: O.actionIcon
      })
    })
  })
}

function U(e) {
  let {
    channel: t
  } = e, n = () => {
    (0, g.setIsFavorite)(t.guild_id, t.id, !0, {
      section: M.AnalyticsSections.CHANNEL_LIST
    })
  };
  return (0, r.jsx)(h.Tooltip, {
    text: y.default.Messages.ADD_FAVORITE,
    children: e => (0, r.jsx)(h.Clickable, {
      className: O.iconItem,
      ...e,
      onClick: n,
      "aria-label": y.default.Messages.ADD_FAVORITE,
      children: (0, r.jsx)(L.default, {
        width: 16,
        height: 16,
        className: O.actionIcon
      })
    })
  })
}
class w extends(i = o.PureComponent) {
  renderEditButton() {
    return (0, r.jsx)(j, {
      ...this.props
    })
  }
  renderInviteButton() {
    return (0, r.jsx)(P, {
      ...this.props
    })
  }
  renderRemoveSuggestionButton() {
    return (0, r.jsx)(G, {
      ...this.props
    })
  }
  renderAcceptSuggestionButton() {
    return (0, r.jsx)(U, {
      ...this.props
    })
  }
  getClassName() {
    let {
      position: e,
      sortingPosition: t
    } = this.props;
    return b(e, t)
  }
  isDisabled() {
    let {
      channel: e,
      sorting: t,
      sortingType: n
    } = this.props;
    return D(e, t, n)
  }
}
s = {
  isDefaultChannel: !1
}, (a = "defaultProps") in(l = w) ? Object.defineProperty(l, a, {
  value: s,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : l[a] = s