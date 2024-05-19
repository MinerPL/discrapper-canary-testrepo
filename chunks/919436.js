"use strict";
n.r(t), n("411104"), n("47120");
var l, a = n("735250"),
  s = n("470079"),
  i = n("920906"),
  r = n("924826"),
  o = n("442837"),
  u = n("481060"),
  d = n("239091"),
  c = n("358221"),
  f = n("43267"),
  h = n("933557"),
  m = n("93687"),
  C = n("266076"),
  p = n("199902"),
  g = n("19780"),
  E = n("306680"),
  _ = n("944486"),
  S = n("594174"),
  I = n("451478"),
  N = n("880080"),
  T = n("26290"),
  A = n("15434"),
  L = n("682662"),
  v = n("662146"),
  x = n("674552"),
  R = n("981631"),
  M = n("134751");

function y(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
let O = {
  friction: 28,
  tension: 600
};

function D(e) {
  switch (e) {
    case "height":
    case "opacity":
      return {
        duration: 150, ...O
      };
    case "scale":
      return {
        ...O
      };
    default:
      throw Error("DirectMessage: getSpringConfigs() - Invalid spring ".concat(String(e)))
  }
}
class b extends(l = s.PureComponent) {
  componentWillEnter(e) {
    let {
      controller: t
    } = this.state;
    e(), t.update({
      immediate: !I.default.isFocused(),
      height: 1,
      opacity: 1,
      scale: 1,
      config: D
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
      config: D
    }).start().then(e)
  }
  componentWillLeave(e) {
    let {
      controller: t
    } = this.state;
    this.setState({
      animating: !0
    }, () => t.update({
      immediate: !I.default.isFocused(),
      height: 0,
      opacity: 0,
      scale: 0,
      config: D
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
    } = this.props, t = e.type === R.ChannelTypes.DM ? S.default.getUser(e.getRecipientId()) : null;
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
      unread: f,
      isGDMFacepileEnabled: h
    } = this.props, {
      hovered: m,
      animating: p
    } = this.state, g = e.isMultiUserDM() && null == e.icon && h;
    return (0, a.jsx)(i.animated.div, {
      style: this.getAnimatedStyle(),
      children: (0, a.jsxs)(L.ListItem, {
        children: [(0, a.jsx)(N.default, {
          hovered: !p && m,
          selected: !p && n,
          unread: !p && f,
          className: M.pill
        }), (0, a.jsx)(v.default, {
          text: null != t ? t : "",
          selected: n,
          children: (0, a.jsx)(u.BlobMask, {
            selected: n || m,
            lowerBadge: l > 0 ? (0, x.renderMentionBadge)(l) : null,
            upperBadge: (0, x.renderMediaBadge)({
              audio: s,
              video: o,
              screenshare: d,
              isCurrentUserConnected: c
            }),
            lowerBadgeWidth: (0, T.getBadgeWidthForValue)(l),
            children: (0, a.jsx)(r.ListNavigatorItem, {
              id: e.id,
              children: l => (0, a.jsx)(A.default, {
                to: R.Routes.CHANNEL(R.ME, e.id),
                onMouseEnter: () => this.setState({
                  hovered: !0
                }),
                onMouseLeave: () => this.setState({
                  hovered: !1
                }),
                selected: n || m,
                ariaLabel: null != t ? t : "",
                onContextMenu: this.handleContextMenu,
                icon: g ? void 0 : this.getChannelIcon(),
                backgroundStyle: g ? "on-hover" : "always",
                children: g ? (0, a.jsx)(C.default, {
                  channel: e,
                  size: u.AvatarSizes.SIZE_48,
                  facepileSizeOverride: u.AvatarSizes.SIZE_32,
                  experimentLocation: "unread_gdm",
                  "aria-hidden": !0
                }) : void 0,
                ...l
              })
            })
          })
        })]
      })
    })
  }
  constructor(...e) {
    super(...e), y(this, "state", {
      hovered: !1,
      animating: !0,
      controller: new i.Controller({
        scale: 0,
        height: 0,
        opacity: 0,
        config: D
      })
    }), y(this, "handleContextMenu", e => {
      let {
        channel: t
      } = this.props, l = t.type === R.ChannelTypes.DM ? S.default.getUser(t.getRecipientId()) : null;
      null != l ? (0, d.openContextMenuLazy)(e, async () => {
        let {
          default: e
        } = await Promise.all([n.e("99387"), n.e("36441"), n.e("56826")]).then(n.bind(n, "131404"));
        return n => (0, a.jsx)(e, {
          ...n,
          channel: t,
          user: l
        })
      }) : (0, d.openContextMenuLazy)(e, async () => {
        let {
          default: e
        } = await Promise.all([n.e("99387"), n.e("25421")]).then(n.bind(n, "354741"));
        return n => (0, a.jsx)(e, {
          ...n,
          channel: t,
          selected: !1
        })
      })
    })
  }
}
y(b, "defaultProps", {
  badge: 0,
  audio: !1,
  video: !1,
  isCurrentUserInThisDMCall: !1
}), t.default = s.forwardRef(function(e, t) {
  let n = e.channel.id,
    l = (0, h.default)(e.channel),
    s = (0, o.useStateFromStores)([g.default], () => g.default.getChannelId(), []),
    i = (0, o.useStateFromStores)([c.default], () => null != s ? c.default.getMode(s) : R.ChannelModes.VOICE, [s]),
    r = (0, o.useStateFromStores)([p.default], () => p.default.getAllApplicationStreamsForChannel(n).length > 0),
    u = (0, o.useStateFromStores)([_.default], () => _.default.getChannelId(), []),
    d = (0, o.useStateFromStores)([E.default], () => E.default.getMentionCount(n), [n]),
    {
      isFacepileEnabled: f
    } = m.default.useExperiment({
      location: "unread_direct_message"
    }, {
      autoTrackExposure: !1
    }),
    C = s === n,
    S = !1,
    I = !1;
  return C && (S = i === R.ChannelModes.VOICE, I = i === R.ChannelModes.VIDEO), (0, a.jsx)(b, {
    ...e,
    ref: t,
    channelName: l,
    unread: d > 0,
    selected: u === n,
    badge: d,
    audio: S,
    video: I,
    stream: r,
    isCurrentUserInThisDMCall: C,
    isGDMFacepileEnabled: f
  })
})