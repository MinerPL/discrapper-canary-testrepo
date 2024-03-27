"use strict";
n.r(t), n.d(t, {
  default: function() {
    return F
  }
}), n("222007"), n("424973");
var a = n("37983"),
  l = n("884691"),
  s = n("446674"),
  i = n("151426"),
  r = n("77078"),
  u = n("561288"),
  o = n("987317"),
  d = n("244201"),
  c = n("206230"),
  f = n("702173"),
  h = n("191145"),
  m = n("10641"),
  p = n("384997"),
  E = n("889014"),
  g = n("5667"),
  S = n("19065"),
  C = n("727284"),
  _ = n("950104"),
  I = n("778588"),
  T = n("42887"),
  v = n("27618"),
  x = n("697218"),
  N = n("800762"),
  A = n("887657"),
  M = n("437825"),
  R = n("664336"),
  j = n("58608"),
  L = n("659500"),
  y = n("701909"),
  O = n("49111"),
  P = n("994428"),
  D = n("353927"),
  b = n("782340"),
  U = n("319373");
class w extends l.PureComponent {
  componentDidMount() {
    L.ComponentDispatch.subscribe(O.ComponentActions.CALL_START, this.handleVoiceClick)
  }
  componentWillUnmount() {
    L.ComponentDispatch.unsubscribe(O.ComponentActions.CALL_START, this.handleVoiceClick)
  }
  renderVideoCallButton() {
    let e, t;
    let {
      inCall: n,
      callActive: l,
      callUnavailable: s,
      isBlocked: i,
      channel: u,
      mode: o
    } = this.props;
    if (n || l && o === O.ChannelModes.VOICE) return null;
    let d = u.isManaged(),
      c = null,
      f = !1;
    return T.default.supports(D.Features.VIDEO) ? i ? (c = b.default.Messages.CALL_UNAVAILABLE_BLOCKED_USERS, e = r.Tooltip.Colors.RED, f = !0) : l && o === O.ChannelModes.VIDEO ? (t = this.handleJoinVideoCall, c = d ? b.default.Messages.CONNECT : b.default.Messages.JOIN_VIDEO_CALL) : (t = this.handleStartVideoCall, c = d ? b.default.Messages.CONNECT : b.default.Messages.START_VIDEO_CALL) : (f = !0, t = this.handleBrowserNotSupported, c = b.default.Messages.BROWSER_NOT_SUPPORTED), (0, a.jsx)(R.default.Icon, {
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
      isBlocked: u,
      channel: o,
      canShowActivityGdmTooltip: d,
      dismissibleContentTypes: c,
      useReducedMotion: f
    } = this.props;
    if (t) return null;
    let h = o.isManaged(),
      m = "",
      E = !1;
    s ? (m = h ? b.default.Messages.VOICE_UNAVAILABLE : b.default.Messages.CALL_UNAVAILABLE, e = r.Tooltip.Colors.RED, E = !0) : u ? (m = b.default.Messages.CALL_UNAVAILABLE_BLOCKED_USERS, e = r.Tooltip.Colors.RED, E = !0) : m = l ? h ? b.default.Messages.CONNECT : b.default.Messages.JOIN_VOICE_CALL : h ? b.default.Messages.CONNECT : b.default.Messages.START_VOICE_CALL;
    let S = (0, a.jsx)(R.default.Icon, {
      icon: A.default,
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
            return (0, a.jsx)(g.default, {
              header: (0, a.jsxs)("div", {
                children: [(0, a.jsx)(j.default, {
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
                  href: y.default.getArticleURL(O.HelpdeskArticles.ACTIVITIES),
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
          children: () => S
        });
        return S
      }
    })
  }
  render() {
    return (0, a.jsxs)(l.Fragment, {
      children: [this.renderVoiceCallButton(), this.renderVideoCallButton()]
    })
  }
  constructor(...e) {
    super(...e), this.handleStartCall = (e, t) => {
      let {
        channel: n,
        notFriend: a,
        appContext: l
      } = this.props, s = a ? n.getRecipientId() : null, i = () => u.default.call(n.id, t, !a && !n.isManaged() && !(null == e ? void 0 : e.shiftKey), s);
      t ? (0, C.default)(i, l) : i()
    }, this.handleJoinCall = e => {
      o.default.selectVoiceChannel(this.props.channel.id, e)
    }, this.handleVoiceClick = e => {
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
    }, this.handleStartVideoCall = e => {
      this.handleStartCall(e, !0)
    }, this.handleJoinVideoCall = () => {
      let {
        appContext: e
      } = this.props;
      (0, C.default)(() => this.handleJoinCall(!0), e)
    }, this.handleBrowserNotSupported = () => {
      (0, S.default)()
    }
  }
}

function F(e) {
  let {
    channel: t
  } = e, n = (0, E.default)(), r = (0, s.useStateFromStores)([h.default], () => h.default.getMode(t.id)), u = (0, s.useStateFromStores)([N.default], () => N.default.isInChannel(t.id)), o = (0, s.useStateFromStores)([c.default], () => c.default.useReducedMotion), {
    callActive: m,
    callUnavailable: p
  } = (0, s.useStateFromStoresObject)([_.default], () => ({
    callActive: _.default.isCallActive(t.id),
    callUnavailable: _.default.isCallUnavailable(t.id)
  })), g = t.getRecipientId(), {
    notFriend: S,
    isBlocked: C
  } = (0, s.useStateFromStoresObject)([v.default], () => ({
    notFriend: t.type === O.ChannelTypes.DM && null != g && !v.default.isFriend(g),
    isBlocked: t.type === O.ChannelTypes.DM && null != g && v.default.isBlocked(g)
  })), T = (0, s.useStateFromStores)([x.default], () => x.default.getUser(g)), A = (0, d.useAppContext)(), M = [], R = (0, f.default)(t.id), j = (0, s.useStateFromStores)([I.default], () => I.default.hasLayers());
  R && !j && M.push(i.DismissibleContent.ACTIVITY_GDM_CALL_TOOLTIP);
  let [L, y] = l.useState(!1);
  return (l.useEffect(() => {
    let e = setTimeout(() => {
      y(!0)
    }, 250);
    return () => clearTimeout(e)
  }, []), n || (null == T ? void 0 : T.bot)) ? null : (0, a.jsx)(w, {
    channel: t,
    mode: r,
    inCall: u,
    callActive: m,
    callUnavailable: p,
    notFriend: S,
    isBlocked: C,
    appContext: A,
    canShowTooltip: L,
    canShowActivityGdmTooltip: R,
    dismissibleContentTypes: M,
    useReducedMotion: o
  })
}