"use strict";
n.r(t), n("411104"), n("47120");
var l, a = n("735250"),
  s = n("470079"),
  i = n("718017"),
  r = n("924826"),
  o = n("442837"),
  u = n("481060"),
  d = n("239091"),
  c = n("358221"),
  f = n("43267"),
  h = n("933557"),
  C = n("199902"),
  p = n("19780"),
  m = n("306680"),
  g = n("944486"),
  E = n("594174"),
  S = n("451478"),
  _ = n("880080"),
  I = n("26290"),
  N = n("15434"),
  T = n("682662"),
  A = n("662146"),
  L = n("674552"),
  v = n("981631"),
  x = n("538777");

function R(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
let M = {
  friction: 28,
  tension: 600
};

function O(e) {
  switch (e) {
    case "height":
    case "opacity":
      return {
        duration: 150, ...M
      };
    case "scale":
      return {
        ...M
      };
    default:
      throw Error("DirectMessage: getSpringConfigs() - Invalid spring ".concat(String(e)))
  }
}
class y extends(l = s.PureComponent) {
  componentWillEnter(e) {
    let {
      controller: t
    } = this.state;
    e(), t.update({
      immediate: !S.default.isFocused(),
      height: 1,
      opacity: 1,
      scale: 1,
      config: O
    }).start().then(() => this.setState({
      animating: !1
    }))
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
      config: O
    }).start().then(e)
  }
  componentWillLeave(e) {
    let {
      controller: t
    } = this.state;
    this.setState({
      animating: !0
    }, () => t.update({
      immediate: !S.default.isFocused(),
      height: 0,
      opacity: 0,
      scale: 0,
      config: O
    }).start().then(e))
  }
  componentWillUnmount() {
    this.state.controller.dispose()
  }
  getAnimatedStyle() {
    let {
      controller: e
    } = this.state, {
      opacity: t,
      height: n,
      scale: l
    } = e.springs;
    return {
      opacity: t,
      height: n.to([0, 1], [0, 56]),
      transform: l.to([0, 1], [.5, 1]).to(e => "scale(".concat(e, ")"))
    }
  }
  getChannelIcon() {
    let {
      channel: e
    } = this.props, t = e.type === v.ChannelTypes.DM ? E.default.getUser(e.getRecipientId()) : null;
    return null != t ? t.getAvatarURL(void 0, 48, !1) : (0, f.getChannelIconURL)(e)
  }
  render() {
    let {
      channel: e,
      channelName: t,
      selected: n,
      badge: l,
      audio: s,
      video: o,
      stream: d,
      isCurrentUserInThisDMCall: c,
      unread: f
    } = this.props, {
      hovered: h,
      animating: C
    } = this.state;
    return (0, a.jsx)(i.animated.div, {
      style: this.getAnimatedStyle(),
      children: (0, a.jsxs)(T.ListItem, {
        children: [(0, a.jsx)(_.default, {
          hovered: !C && h,
          selected: !C && n,
          unread: !C && f,
          className: x.pill
        }), (0, a.jsx)(A.default, {
          text: null != t ? t : "",
          selected: n,
          children: (0, a.jsx)(u.BlobMask, {
            selected: n || h,
            lowerBadge: l > 0 ? (0, L.renderMentionBadge)(l) : null,
            upperBadge: (0, L.renderMediaBadge)({
              audio: s,
              video: o,
              screenshare: d,
              isCurrentUserConnected: c
            }),
            lowerBadgeWidth: (0, I.getBadgeWidthForValue)(l),
            children: (0, a.jsx)(r.ListNavigatorItem, {
              id: e.id,
              children: l => (0, a.jsx)(N.default, {
                to: v.Routes.CHANNEL(v.ME, e.id),
                onMouseEnter: () => this.setState({
                  hovered: !0
                }),
                onMouseLeave: () => this.setState({
                  hovered: !1
                }),
                icon: this.getChannelIcon(),
                selected: n || h,
                ariaLabel: null != t ? t : "",
                onContextMenu: this.handleContextMenu,
                ...l
              })
            })
          })
        })]
      })
    })
  }
  constructor(...e) {
    super(...e), R(this, "state", {
      hovered: !1,
      animating: !0,
      controller: new i.Controller({
        scale: 0,
        height: 0,
        opacity: 0,
        config: O
      })
    }), R(this, "handleContextMenu", e => {
      let {
        channel: t
      } = this.props, l = t.type === v.ChannelTypes.DM ? E.default.getUser(t.getRecipientId()) : null;
      null != l ? (0, d.openContextMenuLazy)(e, async () => {
        let {
          default: e
        } = await Promise.all([n.e("99387"), n.e("79695"), n.e("85559"), n.e("56826")]).then(n.bind(n, "131404"));
        return n => (0, a.jsx)(e, {
          ...n,
          channel: t,
          user: l
        })
      }) : (0, d.openContextMenuLazy)(e, async () => {
        let {
          default: e
        } = await Promise.all([n.e("79695"), n.e("25421")]).then(n.bind(n, "354741"));
        return n => (0, a.jsx)(e, {
          ...n,
          channel: t,
          selected: !1
        })
      })
    })
  }
}
R(y, "defaultProps", {
  badge: 0,
  audio: !1,
  video: !1,
  isCurrentUserInThisDMCall: !1
}), t.default = s.forwardRef(function(e, t) {
  let n = e.channel.id,
    l = (0, h.default)(e.channel),
    s = (0, o.useStateFromStores)([p.default], () => p.default.getChannelId(), []),
    i = (0, o.useStateFromStores)([c.default], () => null != s ? c.default.getMode(s) : v.ChannelModes.VOICE, [s]),
    r = (0, o.useStateFromStores)([C.default], () => C.default.getAllApplicationStreamsForChannel(n).length > 0),
    u = (0, o.useStateFromStores)([g.default], () => g.default.getChannelId(), []),
    d = (0, o.useStateFromStores)([m.default], () => m.default.getMentionCount(n), [n]),
    f = s === n,
    E = !1,
    S = !1;
  return f && (E = i === v.ChannelModes.VOICE, S = i === v.ChannelModes.VIDEO), (0, a.jsx)(y, {
    ...e,
    ref: t,
    channelName: l,
    unread: d > 0,
    selected: u === n,
    badge: d,
    audio: E,
    video: S,
    stream: r,
    isCurrentUserInThisDMCall: f
  })
})