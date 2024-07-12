t.d(n, {
  d: function() {
return p;
  },
  k: function() {
return S;
  }
}), t(47120);
var l = t(735250),
  s = t(470079),
  a = t(780384),
  i = t(481060),
  r = t(630810),
  o = t(43267),
  d = t(933557),
  u = t(210887),
  c = t(430824),
  h = t(751771),
  I = t(699516),
  g = t(594174),
  E = t(768581),
  _ = t(624138),
  m = t(51144),
  T = t(689938),
  N = t(352563);

function v(e, n, t) {
  return n in e ? Object.defineProperty(e, n, {
value: t,
enumerable: !0,
configurable: !0,
writable: !0
  }) : e[n] = t, e;
}
let S = 44;
class p extends s.Component {
  shouldComponentUpdate(e, n) {
return this.state.sending !== n.sending || this.state.invited !== n.invited || this.state.hovered !== n.hovered || this.props.user !== e.user || this.props.channel !== e.channel;
  }
  renderUserOrChannel() {
let e, n, t;
let {
  user: s,
  channel: a
} = this.props;
if (null != s)
  n = s.getAvatarURL(null == a ? void 0 : a.guild_id, 32), t = m.ZP.getName(s);
else if (null != a && (n = (0, o.x)(a), t = (0, d.F6)(a, g.default, I.Z), null == n && null != a.guild_id)) {
  let t = c.Z.getGuild(a.guild_id);
  null != t && (null != t.icon ? n = E.ZP.getGuildIconURL({
    id: a.guild_id,
    icon: t.icon,
    size: 32
  }) : e = (0, _.Zg)(t.name));
}
if (null == n || null == t)
  return null != e ? (0, l.jsx)(i.Text, {
    variant: 'text-md/medium',
    className: N.acronym,
    'aria-hidden': !0,
    children: e
  }) : null;
return (0, l.jsx)(i.Avatar, {
  src: n,
  'aria-label': t,
  size: i.AvatarSizes.SIZE_32,
  className: N.inviteRowAvatar
});
  }
  render() {
let e;
let {
  user: n,
  channel: t
} = this.props, {
  sending: s,
  invited: r,
  hovered: o
} = this.state;
return e = r ? (0, l.jsx)(i.Button, {
  look: i.Button.Looks.LINK,
  size: i.Button.Sizes.SMALL,
  disabled: !0,
  color: (0, a.wj)(u.Z.theme) ? i.Button.Colors.WHITE : i.Button.Colors.BRAND,
  children: T.Z.Messages.INVITE_FRIEND_MODAL_SENT
}) : (0, l.jsx)(i.Button, {
  color: i.Button.Colors.GREEN,
  look: o ? i.Button.Looks.FILLED : i.Button.Looks.OUTLINED,
  className: N.inviteRowButton,
  size: i.Button.Sizes.SMALL,
  submitting: s,
  onClick: this.handleClickInvite,
  children: T.Z.Messages.INVITE_FRIEND_MODAL_INVITE
}), (0, l.jsxs)('div', {
  className: N.inviteRow,
  onMouseEnter: this.handleMouseEnter,
  onMouseLeave: this.handleMouseLeave,
  children: [
    (0, l.jsxs)('div', {
      className: N.inviteRowInfo,
      children: [
        this.renderUserOrChannel(),
        (0, l.jsxs)('div', {
          className: N.inviteRowName,
          children: [
            m.ZP.getName(n),
            null != t ? (0, d.F6)(t, g.default, I.Z, !0) : null
          ]
        })
      ]
    }),
    e
  ]
});
  }
  constructor(...e) {
super(...e), v(this, 'state', {
  sending: !1,
  invited: !1,
  hovered: !1
}), v(this, 'handleMouseEnter', () => {
  this.setState({
    hovered: !0
  });
}), v(this, 'handleMouseLeave', () => {
  this.setState({
    hovered: !1
  });
}), v(this, 'getSuggestedProps', () => {
  var e;
  let {
    row: n
  } = this.props;
  return null !== (e = null != n ? h.Z.getSelectedInviteMetadata(n) : null) && void 0 !== e ? e : null;
}), v(this, 'handleClickInvite', () => {
  let {
    user: e,
    channel: n,
    inviteKey: t,
    location: l
  } = this.props;
  if (null != t)
    null != n ? (this.setState({
      sending: !0
    }), r.Z.enqueue({
      type: r.m.GROUP_DM,
      channel: n,
      inviteKey: t,
      location: l,
      suggested: this.getSuggestedProps()
    }, e => {
      this.setState({
        sending: !1,
        invited: e
      });
    })) : null != e && (this.setState({
      sending: !0
    }), r.Z.enqueue({
      type: r.m.USER,
      user: e,
      inviteKey: t,
      location: l,
      suggested: this.getSuggestedProps()
    }, e => {
      this.setState({
        sending: !1,
        invited: e
      });
    }));
});
  }
}