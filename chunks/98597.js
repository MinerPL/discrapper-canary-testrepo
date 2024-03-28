"use strict";
n.r(t), n.d(t, {
  ChannelItemEditButton: function() {
    return j
  },
  ChannelItemInviteButton: function() {
    return G
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
  u = n("803997"),
  d = n.n(u),
  c = n("442837"),
  f = n("481060"),
  h = n("787014"),
  C = n("924301"),
  p = n("159300"),
  m = n("152376"),
  g = n("427679"),
  E = n("155409"),
  S = n("131704"),
  _ = n("199902"),
  I = n("430824"),
  N = n("496675"),
  T = n("914010"),
  A = n("263704"),
  L = n("465670"),
  v = n("937482"),
  x = n("782089"),
  R = n("281029"),
  M = n("981631"),
  O = n("689938"),
  y = n("294639");

function D(e, t, n) {
  return null != t && !!t && !(0, R.areTypesInSameSection)(n, e.type)
}

function b(e, t) {
  return null == t ? y.containerDefault : e > t ? y.containerDragAfter : y.containerDragBefore
}

function j(e) {
  let {
    channel: t,
    disableManageChannels: n,
    tabIndex: l,
    forceShowButtons: a,
    hasChannelInfo: s = !1
  } = e;
  if ((0, c.useStateFromStores)([N.default, T.default], () => n || T.default.getGuildId() === M.FAVORITES || !N.default.can(M.Permissions.MANAGE_CHANNELS, t) && !N.default.can(M.Permissions.MANAGE_ROLES, t) && !N.default.can(M.Permissions.MANAGE_WEBHOOKS, t) || (0, S.isGuildSelectableChannelType)(t.type) && !N.default.can(M.Permissions.VIEW_CHANNEL, t) || t.isGuildVocal() && !N.default.can(M.Permissions.CONNECT, t) || !S.EDITABLE_CHANNEL_TYPES.has(t.type))) return null;

  function i() {
    h.default.open(t.id)
  }
  return (0, r.jsx)(f.Tooltip, {
    text: O.default.Messages.EDIT_CHANNEL,
    children: e => {
      let {
        onMouseEnter: t,
        onMouseLeave: n,
        onFocus: o,
        onBlur: u
      } = e;
      return (0, r.jsx)(f.Clickable, {
        className: d()(y.iconItem, a ? y.alwaysShown : void 0, s ? y.iconWithChannelInfo : y.iconNoChannelInfo),
        onClick: i,
        tabIndex: l,
        "aria-label": O.default.Messages.EDIT_CHANNEL,
        onMouseEnter: t,
        onMouseLeave: n,
        onFocus: o,
        onBlur: u,
        children: (0, r.jsx)(v.default, {
          width: 16,
          height: 16,
          className: y.actionIcon
        })
      })
    }
  })
}

function G(e) {
  let {
    channel: t,
    isDefaultChannel: l = !1,
    locked: a,
    tabIndex: s,
    forceShowButtons: i,
    hasChannelInfo: o = !1
  } = e, u = (0, c.useStateFromStores)([I.default], () => I.default.getGuild(t.getGuildId())), h = (0, c.useStateFromStores)([g.default], () => g.default.getStageInstanceByChannel(t.id), [t.id]), m = (0, c.useStateFromStores)([C.default], () => C.default.getActiveEventByChannel(t.id), [t.id]), S = (0, c.useStateFromStores)([N.default], () => (0, p.canViewInviteModal)(N.default, u, t, h)), T = (0, c.useStateFromStores)([N.default], () => N.default.can(M.Permissions.CREATE_INSTANT_INVITE, t) ? O.default.Messages.CREATE_INSTANT_INVITE : O.default.Messages.INVITE_TO_SERVER);
  if (a || !S) return null;

  function A() {
    if (null != u) {
      let e = _.default.getAllActiveStreams().filter(e => e.state !== M.ApplicationStreamStates.ENDED && e.channelId === t.id);
      (0, f.openModalLazy)(async () => {
        let {
          default: l
        } = await Promise.all([n.e("99387"), n.e("7654"), n.e("92893")]).then(n.bind(n, "560114"));
        return n => (0, r.jsx)(l, {
          ...n,
          guild: u,
          channel: t,
          streamUserId: 1 === e.length ? e[0].ownerId : null,
          source: M.InstantInviteSources.GUILD_CHANNELS,
          guildScheduledEvent: m
        })
      })
    }
  }
  let L = (0, r.jsx)(x.default, {
    width: 16,
    height: 16,
    className: y.actionIcon,
    "aria-hidden": !0
  });
  return l && (L = (0, r.jsx)(E.default, {
    tutorialId: "instant-invite",
    position: "left",
    children: (0, r.jsx)("div", {
      children: L
    })
  })), (0, r.jsx)(f.Tooltip, {
    text: T,
    children: e => (0, r.jsx)(f.Clickable, {
      className: d()(y.iconItem, i ? y.alwaysShown : void 0, o ? y.iconWithChannelInfo : y.iconNoChannelInfo),
      ...e,
      onClick: A,
      tabIndex: s,
      "aria-label": T,
      children: L
    })
  })
}

function U(e) {
  let {
    channel: t
  } = e, n = () => {
    (0, m.dimissFavoriteSuggestion)(t.guild_id, t.id)
  };
  return (0, r.jsx)(f.Tooltip, {
    text: O.default.Messages.REMOVE_FAVORITE_SUGGESTION,
    children: e => (0, r.jsx)(f.Clickable, {
      className: y.iconItem,
      ...e,
      onClick: n,
      "aria-label": O.default.Messages.REMOVE_FAVORITE_SUGGESTION,
      children: (0, r.jsx)(L.default, {
        width: 16,
        height: 16,
        className: y.actionIcon
      })
    })
  })
}

function P(e) {
  let {
    channel: t
  } = e, n = () => {
    (0, m.setIsFavorite)(t.guild_id, t.id, !0, {
      section: M.AnalyticsSections.CHANNEL_LIST
    })
  };
  return (0, r.jsx)(f.Tooltip, {
    text: O.default.Messages.ADD_FAVORITE,
    children: e => (0, r.jsx)(f.Clickable, {
      className: y.iconItem,
      ...e,
      onClick: n,
      "aria-label": O.default.Messages.ADD_FAVORITE,
      children: (0, r.jsx)(A.default, {
        width: 16,
        height: 16,
        className: y.actionIcon
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
    return (0, r.jsx)(G, {
      ...this.props
    })
  }
  renderRemoveSuggestionButton() {
    return (0, r.jsx)(U, {
      ...this.props
    })
  }
  renderAcceptSuggestionButton() {
    return (0, r.jsx)(P, {
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