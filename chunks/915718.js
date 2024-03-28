"use strict";
n.r(t), n.d(t, {
  default: function() {
    return k
  }
}), n("47120"), n("653041");
var a = n("735250"),
  l = n("470079"),
  s = n("442837"),
  i = n("524437"),
  r = n("481060"),
  o = n("26151"),
  u = n("287734"),
  d = n("40851"),
  c = n("607070"),
  f = n("451576"),
  h = n("358221"),
  m = n("605236"),
  p = n("243778"),
  E = n("590293"),
  C = n("970731"),
  g = n("560688"),
  S = n("173507"),
  _ = n("523746"),
  T = n("819640"),
  I = n("131951"),
  A = n("699516"),
  v = n("594174"),
  N = n("979651"),
  x = n("125015"),
  M = n("119828"),
  R = n("502568"),
  L = n("810090"),
  y = n("585483"),
  O = n("63063"),
  j = n("981631"),
  P = n("921944"),
  D = n("65154"),
  b = n("689938"),
  U = n("185392");

function F(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
class w extends l.PureComponent {
  componentDidMount() {
    y.ComponentDispatch.subscribe(j.ComponentActions.CALL_START, this.handleVoiceClick)
  }
  componentWillUnmount() {
    y.ComponentDispatch.unsubscribe(j.ComponentActions.CALL_START, this.handleVoiceClick)
  }
  renderVideoCallButton() {
    let e, t;
    let {
      inCall: n,
      callActive: l,
      callUnavailable: s,
      isBlocked: i,
      channel: o,
      mode: u
    } = this.props;
    if (n || l && u === j.ChannelModes.VOICE) return null;
    let d = o.isManaged(),
      c = null,
      f = !1;
    return I.default.supports(D.Features.VIDEO) ? i ? (c = b.default.Messages.CALL_UNAVAILABLE_BLOCKED_USERS, e = r.Tooltip.Colors.RED, f = !0) : l && u === j.ChannelModes.VIDEO ? (t = this.handleJoinVideoCall, c = d ? b.default.Messages.CONNECT : b.default.Messages.JOIN_VIDEO_CALL) : (t = this.handleStartVideoCall, c = d ? b.default.Messages.CONNECT : b.default.Messages.START_VIDEO_CALL) : (f = !0, t = this.handleBrowserNotSupported, c = b.default.Messages.BROWSER_NOT_SUPPORTED), (0, a.jsx)(R.default.Icon, {
      icon: M.default,
      onClick: t,
      disabled: f || s,
      tooltip: c,
      tooltipColor: e
    })
  }
  renderVoiceCallButton() {
    let e;
    let {
      inCall: t,
      canShowTooltip: n,
      callActive: l,
      callUnavailable: s,
      isBlocked: o,
      channel: u,
      canShowActivityGdmTooltip: d,
      dismissibleContentTypes: c,
      useReducedMotion: f
    } = this.props;
    if (t) return null;
    let h = u.isManaged(),
      m = "",
      E = !1;
    s ? (m = h ? b.default.Messages.VOICE_UNAVAILABLE : b.default.Messages.CALL_UNAVAILABLE, e = r.Tooltip.Colors.RED, E = !0) : o ? (m = b.default.Messages.CALL_UNAVAILABLE_BLOCKED_USERS, e = r.Tooltip.Colors.RED, E = !0) : m = l ? h ? b.default.Messages.CONNECT : b.default.Messages.JOIN_VOICE_CALL : h ? b.default.Messages.CONNECT : b.default.Messages.START_VOICE_CALL;
    let g = (0, a.jsx)(R.default.Icon, {
      icon: x.default,
      onClick: this.handleVoiceClick,
      disabled: E,
      tooltip: m,
      tooltipColor: e
    });
    return (0, a.jsx)(p.default, {
      contentTypes: c,
      children: e => {
        let {
          visibleContent: l,
          markAsDismissed: s
        } = e;
        if (l === i.DismissibleContent.ACTIVITY_GDM_CALL_TOOLTIP) return (0, a.jsx)(r.Popout, {
          position: "bottom",
          align: "center",
          animation: r.Popout.Animation.TRANSLATE,
          shouldShow: n && d && !t,
          renderPopout: e => {
            let {
              closePopout: t
            } = e;
            return (0, a.jsx)(C.default, {
              header: (0, a.jsxs)("div", {
                children: [(0, a.jsx)(L.default, {
                  className: U.tooltipImage,
                  autoPlay: !f,
                  src: "https://cdn.discordapp.com/attachments/860252504826445825/1078051428028924006/mobile_coachmark.mp4",
                  width: 248,
                  height: 139.5,
                  loop: !0,
                  muted: !0
                }), (0, a.jsx)(r.Heading, {
                  variant: "heading-md/bold",
                  color: "always-white",
                  children: b.default.Messages.EMBEDDED_ACTIVITIES_DM_TOOLTIP_HEADER
                })]
              }),
              content: (0, a.jsxs)("div", {
                children: [(0, a.jsx)(r.Text, {
                  variant: "text-sm/normal",
                  color: "always-white",
                  children: b.default.Messages.EMBEDDED_ACTIVITIES_DM_TOOLTIP_BODY
                }), (0, a.jsx)(r.Anchor, {
                  href: O.default.getArticleURL(j.HelpdeskArticles.ACTIVITIES),
                  children: b.default.Messages.LEARN_MORE
                })]
              }),
              buttonCTA: b.default.Messages.GOT_IT,
              onClick: () => {
                t(), s(P.ContentDismissActionType.UNKNOWN)
              },
              className: U.tooltip
            })
          },
          children: () => g
        });
        return g
      }
    })
  }
  render() {
    return (0, a.jsxs)(l.Fragment, {
      children: [this.renderVoiceCallButton(), this.renderVideoCallButton()]
    })
  }
  constructor(...e) {
    super(...e), F(this, "handleStartCall", (e, t) => {
      let {
        channel: n,
        notFriend: a,
        appContext: l
      } = this.props, s = a ? n.getRecipientId() : null, i = () => o.default.call(n.id, t, !a && !n.isManaged() && !(null == e ? void 0 : e.shiftKey), s);
      t ? (0, S.default)(i, l) : i()
    }), F(this, "handleJoinCall", e => {
      u.default.selectVoiceChannel(this.props.channel.id, e)
    }), F(this, "handleVoiceClick", e => {
      let {
        callUnavailable: t,
        callActive: n,
        canShowActivityGdmTooltip: a
      } = this.props;
      if (a && (0, m.markDismissibleContentAsDismissed)(i.DismissibleContent.ACTIVITY_GDM_CALL_TOOLTIP, {
          dismissAction: P.ContentDismissActionType.AUTO
        }), t);
      else if (n) return this.handleJoinCall(!1);
      else return this.handleStartCall(e, !1)
    }), F(this, "handleStartVideoCall", e => {
      this.handleStartCall(e, !0)
    }), F(this, "handleJoinVideoCall", () => {
      let {
        appContext: e
      } = this.props;
      (0, S.default)(() => this.handleJoinCall(!0), e)
    }), F(this, "handleBrowserNotSupported", () => {
      (0, g.default)()
    })
  }
}

function k(e) {
  let {
    channel: t
  } = e, n = (0, E.default)(), r = (0, s.useStateFromStores)([h.default], () => h.default.getMode(t.id)), o = (0, s.useStateFromStores)([N.default], () => N.default.isInChannel(t.id)), u = (0, s.useStateFromStores)([c.default], () => c.default.useReducedMotion), {
    callActive: m,
    callUnavailable: p
  } = (0, s.useStateFromStoresObject)([_.default], () => ({
    callActive: _.default.isCallActive(t.id),
    callUnavailable: _.default.isCallUnavailable(t.id)
  })), C = t.getRecipientId(), {
    notFriend: g,
    isBlocked: S
  } = (0, s.useStateFromStoresObject)([A.default], () => ({
    notFriend: t.type === j.ChannelTypes.DM && null != C && !A.default.isFriend(C),
    isBlocked: t.type === j.ChannelTypes.DM && null != C && A.default.isBlocked(C)
  })), I = (0, s.useStateFromStores)([v.default], () => v.default.getUser(C)), x = (0, d.useAppContext)(), M = [], R = (0, f.default)(t.id), L = (0, s.useStateFromStores)([T.default], () => T.default.hasLayers());
  R && !L && M.push(i.DismissibleContent.ACTIVITY_GDM_CALL_TOOLTIP);
  let [y, O] = l.useState(!1);
  return (l.useEffect(() => {
    let e = setTimeout(() => {
      O(!0)
    }, 250);
    return () => clearTimeout(e)
  }, []), n || (null == I ? void 0 : I.bot)) ? null : (0, a.jsx)(w, {
    channel: t,
    mode: r,
    inCall: o,
    callActive: m,
    callUnavailable: p,
    notFriend: g,
    isBlocked: S,
    appContext: x,
    canShowTooltip: y,
    canShowActivityGdmTooltip: R,
    dismissibleContentTypes: M,
    useReducedMotion: u
  })
}