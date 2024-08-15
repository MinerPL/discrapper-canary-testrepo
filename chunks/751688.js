n(47120);
var r, i = n(735250),
  a = n(470079),
  s = n(120356),
  o = n.n(s),
  l = n(481060),
  u = n(129861),
  c = n(730749),
  d = n(600164),
  _ = n(184301),
  E = n(103575),
  f = n(981631),
  h = n(468773);

function p(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
value: n,
enumerable: !0,
configurable: !0,
writable: !0
  }) : e[t] = n, e;
}
class m extends(r = a.Component) {
  render() {
let {
  popoutOpen: e
} = this.state, {
  user: t,
  analyticsContext: n,
  disablePopout: r,
  ignoreModalClicks: a,
  guildId: s,
  channelId: o
} = this.props, u = {
  location: {
    ...n.location,
    object: f.qAy.LIST_ITEM
  }
};
return (0, i.jsx)(l.Popout, {
  preload: () => (0, _.Z)(t.id, t.getAvatarURL(s, 80), {
    guildId: s,
    channelId: o
  }),
  renderPopout: e => (0, i.jsx)(E.Z, {
    ...e,
    location: 'UserListItem',
    userId: t.id,
    guildId: s,
    channelId: o,
    analyticsParams: u
  }),
  position: 'left',
  onRequestClose: this.handleUserPopoutClose,
  shouldShow: !r && e,
  ignoreModalClicks: a,
  children: e => this.renderUserPopout(e)
});
  }
  constructor(...e) {
super(...e), p(this, 'state', {
  popoutOpen: !1
}), p(this, 'handleClickUser', () => {
  let {
    onPopoutOpen: e
  } = this.props;
  this.setState({
    popoutOpen: !this.state.popoutOpen
  }), null == e || e();
}), p(this, 'handleUserPopoutClose', () => {
  let {
    onPopoutClose: e
  } = this.props;
  this.setState({
    popoutOpen: !1
  }), null == e || e();
}), p(this, 'renderUserPopout', e => {
  let {
    className: t,
    disablePopout: n,
    onContextMenu: r,
    user: a,
    status: s,
    textClassName: c,
    nick: _,
    guildId: E
  } = this.props;
  return (0, i.jsxs)(d.Z, {
    align: d.Z.Align.CENTER,
    className: o()(h.memberListItem, t, {
      [h.popoutDisabled]: n
    }),
    onContextMenu: r,
    onMouseDown: e.onMouseDown,
    onKeyDown: e.onKeyDown,
    onClick: this.handleClickUser,
    children: [
      (0, i.jsx)(l.Avatar, {
        src: a.getAvatarURL(E, 24),
        className: h.avatar,
        'aria-label': a.username,
        size: l.AvatarSizes.SIZE_24,
        status: s
      }),
      (0, i.jsx)(l.Text, {
        className: o()(h.memberListItemTag, c),
        variant: 'text-sm/normal',
        children: (0, i.jsx)(u.Z, {
          user: a,
          nick: _,
          usernameClass: h.username,
          hideDiscriminator: !0
        })
      })
    ]
  });
});
  }
}
p(m, 'defaultProps', {
  disablePopout: !1
}), t.Z = (0, c.Z)(m);