n(411104), n(47120);
var i, l = n(735250),
  r = n(470079),
  a = n(338545),
  s = n(91192),
  o = n(442837),
  c = n(481060),
  u = n(239091),
  d = n(358221),
  h = n(43267),
  p = n(933557),
  _ = n(93687),
  f = n(266076),
  m = n(199902),
  g = n(19780),
  C = n(306680),
  I = n(944486),
  E = n(594174),
  N = n(451478),
  x = n(276952),
  S = n(682662),
  v = n(662146),
  Z = n(674552),
  T = n(981631),
  L = n(453528);

function A(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
value: n,
enumerable: !0,
configurable: !0,
writable: !0
  }) : e[t] = n, e;
}
let b = {
  friction: 28,
  tension: 600
};

function M(e) {
  switch (e) {
case 'height':
case 'opacity':
  return {
    duration: 150,
      ...b
  };
case 'scale':
  return {
    ...b
  };
default:
  throw Error('DirectMessage: getSpringConfigs() - Invalid spring '.concat(String(e)));
  }
}
class R extends(i = r.PureComponent) {
  componentWillEnter(e) {
let {
  controller: t
} = this.state;
e(), t.update({
  immediate: !N.Z.isFocused(),
  height: 1,
  opacity: 1,
  scale: 1,
  config: M
}).start().then(() => this.setState({
  animating: !1
}));
  }
  componentWillAppear(e) {
let {
  controller: t
} = this.state;
t.update({
  immediate: !0,
  scale: 1,
  opacity: 1,
  height: 1,
  config: M
}).start().then(e);
  }
  componentWillLeave(e) {
let {
  controller: t
} = this.state;
this.setState({
  animating: !0
}, () => t.update({
  immediate: !N.Z.isFocused(),
  height: 0,
  opacity: 0,
  scale: 0,
  config: M
}).start().then(e));
  }
  componentWillUnmount() {
this.state.controller.dispose();
  }
  getAnimatedStyle() {
let {
  controller: e
} = this.state, {
  opacity: t,
  height: n,
  scale: i
} = e.springs;
return {
  opacity: t,
  height: n.to([
    0,
    1
  ], [
    0,
    56
  ]),
  transform: i.to([
    0,
    1
  ], [
    0.5,
    1
  ]).to(e => 'scale('.concat(e, ')'))
};
  }
  getChannelIcon() {
let {
  channel: e
} = this.props, t = e.type === T.d4z.DM ? E.default.getUser(e.getRecipientId()) : null;
return null != t ? t.getAvatarURL(void 0, 48, !1) : (0, h.x)(e);
  }
  render() {
let {
  channel: e,
  channelName: t,
  selected: n,
  badge: i,
  audio: r,
  video: o,
  stream: u,
  isCurrentUserInThisDMCall: d,
  unread: h,
  isGDMFacepileEnabled: p
} = this.props, {
  hovered: _,
  animating: m
} = this.state, g = e.isMultiUserDM() && null == e.icon && p;
return (0, l.jsx)(a.animated.div, {
  style: this.getAnimatedStyle(),
  children: (0, l.jsxs)(S.H, {
    children: [
      (0, l.jsx)(x.Z, {
        hovered: !m && _,
        selected: !m && n,
        unread: !m && h,
        className: L.pill
      }),
      (0, l.jsx)(v.Z, {
        text: null != t ? t : '',
        selected: n,
        children: (0, l.jsx)(c.BlobMask, {
          selected: n || _,
          lowerBadge: i > 0 ? (0, Z.Ne)(i) : null,
          upperBadge: (0, Z.Or)({
            audio: r,
            video: o,
            screenshare: u,
            isCurrentUserConnected: d
          }),
          lowerBadgeSize: {
            width: (0, c.getBadgeWidthForValue)(i)
          },
          children: (0, l.jsx)(s.mh, {
            id: e.id,
            children: i => (0, l.jsx)(c.NavItem, {
              to: T.Z5c.CHANNEL(T.ME, e.id),
              onMouseEnter: () => this.setState({
                hovered: !0
              }),
              onMouseLeave: () => this.setState({
                hovered: !1
              }),
              selected: n || _,
              ariaLabel: null != t ? t : '',
              onContextMenu: this.handleContextMenu,
              icon: g ? void 0 : this.getChannelIcon(),
              backgroundStyle: g ? 'on-hover' : 'always',
              children: g ? (0, l.jsx)(f.Z, {
                channel: e,
                size: c.AvatarSizes.SIZE_48,
                facepileSizeOverride: c.AvatarSizes.SIZE_32,
                experimentLocation: 'unread_gdm',
                'aria-hidden': !0
              }) : void 0,
              ...i
            })
          })
        })
      })
    ]
  })
});
  }
  constructor(...e) {
super(...e), A(this, 'state', {
  hovered: !1,
  animating: !0,
  controller: new a.Controller({
    scale: 0,
    height: 0,
    opacity: 0,
    config: M
  })
}), A(this, 'handleContextMenu', e => {
  let {
    channel: t
  } = this.props, i = t.type === T.d4z.DM ? E.default.getUser(t.getRecipientId()) : null;
  null != i ? (0, u.jW)(e, async () => {
    let {
      default: e
    } = await Promise.all([
      n.e('79695'),
      n.e('17400'),
      n.e('56826'),
      n.e('80991')
    ]).then(n.bind(n, 131404));
    return n => (0, l.jsx)(e, {
      ...n,
      channel: t,
      user: i
    });
  }) : (0, u.jW)(e, async () => {
    let {
      default: e
    } = await Promise.all([
      n.e('79695'),
      n.e('25421')
    ]).then(n.bind(n, 354741));
    return n => (0, l.jsx)(e, {
      ...n,
      channel: t,
      selected: !1
    });
  });
});
  }
}
A(R, 'defaultProps', {
  badge: 0,
  audio: !1,
  video: !1,
  isCurrentUserInThisDMCall: !1
}), t.Z = r.forwardRef(function(e, t) {
  let n = e.channel.id,
i = (0, p.ZP)(e.channel),
r = (0, o.e7)([g.Z], () => g.Z.getChannelId(), []),
a = (0, o.e7)([d.Z], () => null != r ? d.Z.getMode(r) : T.WtW.VOICE, [r]),
s = (0, o.e7)([m.Z], () => m.Z.getAllApplicationStreamsForChannel(n).length > 0),
c = (0, o.e7)([I.Z], () => I.Z.getChannelId(), []),
u = (0, o.e7)([C.ZP], () => C.ZP.getMentionCount(n), [n]),
{
  isFacepileEnabled: h
} = _.Z.useExperiment({
  location: 'unread_direct_message'
}, {
  autoTrackExposure: !1
}),
f = r === n,
E = !1,
N = !1;
  return f && (E = a === T.WtW.VOICE, N = a === T.WtW.VIDEO), (0, l.jsx)(R, {
...e,
ref: t,
channelName: i,
unread: u > 0,
selected: c === n,
badge: u,
audio: E,
video: N,
stream: s,
isCurrentUserInThisDMCall: f,
isGDMFacepileEnabled: h
  });
});