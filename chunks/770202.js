n(411104), n(47120);
var i = n(735250),
  l = n(470079),
  r = n(120356),
  a = n.n(r),
  s = n(442837),
  o = n(493683),
  c = n(239091),
  u = n(146773),
  d = n(201895),
  h = n(703656),
  p = n(592125),
  _ = n(430824),
  f = n(496675),
  g = n(98597),
  m = n(473403),
  C = n(981631),
  I = n(490897),
  E = n(391463);

function N(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
value: n,
enumerable: !0,
configurable: !0,
writable: !0
  }) : e[t] = n, e;
}

function x(e, t) {
  let n = t.getGuildId();
  if (null == n)
throw Error('TextChannel, preloadChannel: Channel does not have a guildId');
  o.Z.preload(n, t.id);
}
class S extends g.ZP {
  render() {
let {
  channel: e,
  selected: t,
  connectChannelDropTarget: n,
  connectChannelDragSource: l,
  connectDragPreview: r,
  canReorderChannel: s
} = this.props, o = (0, i.jsx)('li', {
  className: a()(this.getClassName(), {
    [E.disabled]: this.isDisabled()
  }),
  'data-dnd-name': e.name,
  children: (0, i.jsxs)(m.Z, {
    className: E.iconVisibility,
    channel: e,
    selected: t,
    onClick: this.handleClick,
    onMouseDown: x,
    onContextMenu: this.handleContextMenu,
    connectDragPreview: s ? r : null,
    'aria-label': (0, d.ZP)({
      channel: e
    }),
    resolvedUnreadSetting: I.i.ONLY_MENTIONS,
    children: [
      this.renderInviteButton(),
      this.renderEditButton()
    ]
  })
});
return s ? n(l(o)) : o;
  }
  constructor(...e) {
super(...e), N(this, 'handleContextMenu', e => {
  let {
    channel: t
  } = this.props, l = _.Z.getGuild(t.getGuildId());
  null != l && (0, c.jW)(e, async () => {
    let {
      default: e
    } = await n.e('99905').then(n.bind(n, 649400));
    return n => (0, i.jsx)(e, {
      ...n,
      channel: t,
      guild: l
    });
  });
}), N(this, 'handleClick', e => {
  ! function(e) {
    let t = e.getGuildId();
    if (null == t)
      throw Error('TextChannel, transitionTo: Channel does not have a guildId');
    (0, h.uL)(C.Z5c.CHANNEL(t, e.id), {
      state: {
        analyticsSource: {
          page: C.ZY5.GUILD_CHANNEL,
          section: C.jXE.CHANNEL_LIST,
          object: C.qAy.CHANNEL
        }
      }
    });
  }(e);
});
  }
}
let Z = (0, u.B)(S);
t.Z = l.memo(function(e) {
  let {
channel: t,
guild: n,
disableSorting: l
  } = e, r = (0, s.cj)([
p.Z,
f.Z
  ], () => {
let e = p.Z.getChannel(t.parent_id);
return {
  canManageChannel: f.Z.can(C.Plq.MANAGE_CHANNELS, t),
  canReorderChannel: !0 !== l && null != e ? f.Z.can(C.Plq.MANAGE_CHANNELS, e) : f.Z.can(C.Plq.MANAGE_CHANNELS, n)
};
  });
  return (0, i.jsx)(Z, {
...r,
...e
  });
});