n.d(t, {
  CN: function() {
return A;
  },
  ZP: function() {
return P;
  },
  eP: function() {
return R;
  },
  hR: function() {
return M;
  },
  jo: function() {
return b;
  }
});
var i, l, r, a, s = n(735250),
  o = n(470079),
  c = n(120356),
  u = n.n(c),
  d = n(442837),
  h = n(481060),
  p = n(787014),
  _ = n(924301),
  f = n(159300),
  m = n(152376),
  g = n(427679),
  C = n(557494),
  I = n(131704),
  E = n(199902),
  N = n(430824),
  x = n(496675),
  S = n(914010),
  v = n(281029),
  Z = n(981631),
  T = n(689938),
  L = n(704672);

function A(e, t, n) {
  return null != t && !!t && !(0, v.ig)(n, e.type);
}

function b(e, t) {
  return null == t ? L.containerDefault : e > t ? L.containerDragAfter : L.containerDragBefore;
}

function M(e) {
  let {
channel: t,
disableManageChannels: n,
tabIndex: i,
forceShowButtons: l,
hasChannelInfo: r = !1
  } = e;
  if ((0, d.e7)([
  x.Z,
  S.Z
], () => n || S.Z.getGuildId() === Z.I_8 || !x.Z.can(Z.Plq.MANAGE_CHANNELS, t) && !x.Z.can(Z.Plq.MANAGE_ROLES, t) && !x.Z.can(Z.Plq.MANAGE_WEBHOOKS, t) || (0, I.r8)(t.type) && !x.Z.can(Z.Plq.VIEW_CHANNEL, t) || t.isGuildVocal() && !x.Z.can(Z.Plq.CONNECT, t) || !I.dF.has(t.type)))
return null;

  function a() {
p.ZP.open(t.id);
  }
  return (0, s.jsx)(h.Tooltip, {
text: T.Z.Messages.EDIT_CHANNEL,
children: e => {
  let {
    onMouseEnter: t,
    onMouseLeave: n,
    onFocus: o,
    onBlur: c
  } = e;
  return (0, s.jsx)(h.Clickable, {
    className: u()(L.iconItem, l ? L.alwaysShown : void 0, r ? L.iconWithChannelInfo : L.iconNoChannelInfo),
    onClick: a,
    tabIndex: i,
    'aria-label': T.Z.Messages.EDIT_CHANNEL,
    onMouseEnter: t,
    onMouseLeave: n,
    onFocus: o,
    onBlur: c,
    children: (0, s.jsx)(h.SettingsIcon, {
      size: 'xs',
      color: 'currentColor',
      className: L.actionIcon
    })
  });
}
  });
}

function R(e) {
  let {
channel: t,
isDefaultChannel: i = !1,
locked: l,
tabIndex: r,
forceShowButtons: a,
hasChannelInfo: o = !1
  } = e, c = (0, d.e7)([N.Z], () => N.Z.getGuild(t.getGuildId())), p = (0, d.e7)([g.Z], () => g.Z.getStageInstanceByChannel(t.id), [t.id]), m = (0, d.e7)([_.ZP], () => _.ZP.getActiveEventByChannel(t.id), [t.id]), I = (0, d.e7)([x.Z], () => (0, f.b)(x.Z, c, t, p)), S = (0, d.e7)([x.Z], () => x.Z.can(Z.Plq.CREATE_INSTANT_INVITE, t) ? T.Z.Messages.CREATE_INSTANT_INVITE : T.Z.Messages.INVITE_TO_SERVER);
  if (l || !I)
return null;

  function v() {
if (null != c) {
  let e = E.Z.getAllActiveStreams().filter(e => e.state !== Z.jm8.ENDED && e.channelId === t.id);
  (0, h.openModalLazy)(async () => {
    let {
      default: i
    } = await Promise.all([
      n.e('7654'),
      n.e('21026')
    ]).then(n.bind(n, 560114));
    return n => (0, s.jsx)(i, {
      ...n,
      guild: c,
      channel: t,
      streamUserId: 1 === e.length ? e[0].ownerId : null,
      source: Z.t4x.GUILD_CHANNELS,
      guildScheduledEvent: m
    });
  });
}
  }
  let A = (0, s.jsx)(h.GroupPlusIcon, {
size: 'xs',
className: L.actionIcon,
'aria-hidden': !0
  });
  return i && (A = (0, s.jsx)(C.Z, {
tutorialId: 'instant-invite',
position: 'left',
children: (0, s.jsx)('div', {
  children: A
})
  })), (0, s.jsx)(h.Tooltip, {
text: S,
children: e => (0, s.jsx)(h.Clickable, {
  className: u()(L.iconItem, a ? L.alwaysShown : void 0, o ? L.iconWithChannelInfo : L.iconNoChannelInfo),
  ...e,
  onClick: v,
  tabIndex: r,
  'aria-label': S,
  children: A
})
  });
}

function O(e) {
  let {
channel: t
  } = e, n = () => {
(0, m._U)(t.guild_id, t.id);
  };
  return (0, s.jsx)(h.Tooltip, {
text: T.Z.Messages.REMOVE_FAVORITE_SUGGESTION,
children: e => (0, s.jsx)(h.Clickable, {
  className: L.iconItem,
  ...e,
  onClick: n,
  'aria-label': T.Z.Messages.REMOVE_FAVORITE_SUGGESTION,
  children: (0, s.jsx)(h.CloseSmallIcon, {
    size: 'xs',
    color: 'currentColor',
    className: L.actionIcon
  })
})
  });
}

function y(e) {
  let {
channel: t
  } = e, n = () => {
(0, m.dM)(t.guild_id, t.id, !0, {
  section: Z.jXE.CHANNEL_LIST
});
  };
  return (0, s.jsx)(h.Tooltip, {
text: T.Z.Messages.ADD_FAVORITE,
children: e => (0, s.jsx)(h.Clickable, {
  className: L.iconItem,
  ...e,
  onClick: n,
  'aria-label': T.Z.Messages.ADD_FAVORITE,
  children: (0, s.jsx)(h.CheckmarkLargeIcon, {
    size: 'xs',
    color: 'currentColor',
    className: L.actionIcon
  })
})
  });
}
class P extends(a = o.PureComponent) {
  renderEditButton() {
return (0, s.jsx)(M, {
  ...this.props
});
  }
  renderInviteButton() {
return (0, s.jsx)(R, {
  ...this.props
});
  }
  renderRemoveSuggestionButton() {
return (0, s.jsx)(O, {
  ...this.props
});
  }
  renderAcceptSuggestionButton() {
return (0, s.jsx)(y, {
  ...this.props
});
  }
  getClassName() {
let {
  position: e,
  sortingPosition: t
} = this.props;
return b(e, t);
  }
  isDisabled() {
let {
  channel: e,
  sorting: t,
  sortingType: n
} = this.props;
return A(e, t, n);
  }
}
r = {
  isDefaultChannel: !1
}, (l = 'defaultProps') in(i = P) ? Object.defineProperty(i, l, {
  value: r,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : i[l] = r;