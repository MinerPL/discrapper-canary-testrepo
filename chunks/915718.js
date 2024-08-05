n.d(t, {
  Z: function() {
return k;
  }
}), n(47120), n(653041);
var i = n(735250),
  a = n(470079),
  s = n(442837),
  l = n(704215),
  r = n(481060),
  o = n(26151),
  c = n(287734),
  u = n(40851),
  d = n(607070),
  h = n(451576),
  p = n(358221),
  m = n(605236),
  _ = n(243778),
  f = n(590293),
  E = n(970731),
  g = n(560688),
  C = n(173507),
  I = n(523746),
  x = n(819640),
  T = n(131951),
  N = n(699516),
  v = n(594174),
  S = n(979651),
  Z = n(810090),
  A = n(585483),
  M = n(63063),
  b = n(665149),
  R = n(981631),
  j = n(921944),
  L = n(65154),
  P = n(689938),
  O = n(112912);

function y(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
value: n,
enumerable: !0,
configurable: !0,
writable: !0
  }) : e[t] = n, e;
}
class D extends a.PureComponent {
  componentDidMount() {
A.S.subscribe(R.CkL.CALL_START, this.handleVoiceClick);
  }
  componentWillUnmount() {
A.S.unsubscribe(R.CkL.CALL_START, this.handleVoiceClick);
  }
  renderVideoCallButton() {
let e, t;
let {
  inCall: n,
  callActive: a,
  callUnavailable: s,
  isBlocked: l,
  channel: o,
  mode: c
} = this.props;
if (n || a && c === R.WtW.VOICE)
  return null;
let u = o.isManaged(),
  d = null,
  h = !1;
return T.Z.supports(L.AN.VIDEO) ? l ? (d = P.Z.Messages.CALL_UNAVAILABLE_BLOCKED_USERS, e = r.Tooltip.Colors.RED, h = !0) : a && c === R.WtW.VIDEO ? (t = this.handleJoinVideoCall, d = u ? P.Z.Messages.CONNECT : P.Z.Messages.JOIN_VIDEO_CALL) : (t = this.handleStartVideoCall, d = u ? P.Z.Messages.CONNECT : P.Z.Messages.START_VIDEO_CALL) : (h = !0, t = this.handleBrowserNotSupported, d = P.Z.Messages.BROWSER_NOT_SUPPORTED), (0, i.jsx)(b.ZP.Icon, {
  icon: r.VideoIcon,
  onClick: t,
  disabled: h || s,
  tooltip: d,
  tooltipColor: e
});
  }
  renderVoiceCallButton() {
let e;
let {
  inCall: t,
  canShowTooltip: n,
  callActive: a,
  callUnavailable: s,
  isBlocked: o,
  channel: c,
  canShowActivityGdmTooltip: u,
  dismissibleContentTypes: d,
  useReducedMotion: h
} = this.props;
if (t)
  return null;
let p = c.isManaged(),
  m = '',
  f = !1;
s ? (m = p ? P.Z.Messages.VOICE_UNAVAILABLE : P.Z.Messages.CALL_UNAVAILABLE, e = r.Tooltip.Colors.RED, f = !0) : o ? (m = P.Z.Messages.CALL_UNAVAILABLE_BLOCKED_USERS, e = r.Tooltip.Colors.RED, f = !0) : m = a ? p ? P.Z.Messages.CONNECT : P.Z.Messages.JOIN_VOICE_CALL : p ? P.Z.Messages.CONNECT : P.Z.Messages.START_VOICE_CALL;
let g = (0, i.jsx)(b.ZP.Icon, {
  icon: r.PhoneCallIcon,
  onClick: this.handleVoiceClick,
  disabled: f,
  tooltip: m,
  tooltipColor: e
});
return (0, i.jsx)(_.Z, {
  contentTypes: d,
  children: e => {
    let {
      visibleContent: a,
      markAsDismissed: s
    } = e;
    if (a === l.z.ACTIVITY_GDM_CALL_TOOLTIP)
      return (0, i.jsx)(r.Popout, {
        position: 'bottom',
        align: 'center',
        animation: r.Popout.Animation.TRANSLATE,
        shouldShow: n && u && !t,
        renderPopout: e => {
          let {
            closePopout: t
          } = e;
          return (0, i.jsx)(E.ZP, {
            header: (0, i.jsxs)('div', {
              children: [
                (0, i.jsx)(Z.Z, {
                  className: O.tooltipImage,
                  autoPlay: !h,
                  src: 'https://cdn.discordapp.com/attachments/860252504826445825/1078051428028924006/mobile_coachmark.mp4',
                  width: 248,
                  height: 139.5,
                  loop: !0,
                  muted: !0
                }),
                (0, i.jsx)(r.Heading, {
                  variant: 'heading-md/bold',
                  color: 'always-white',
                  children: P.Z.Messages.EMBEDDED_ACTIVITIES_DM_TOOLTIP_HEADER
                })
              ]
            }),
            content: (0, i.jsxs)('div', {
              children: [
                (0, i.jsx)(r.Text, {
                  variant: 'text-sm/normal',
                  color: 'always-white',
                  children: P.Z.Messages.EMBEDDED_ACTIVITIES_DM_TOOLTIP_BODY
                }),
                (0, i.jsx)(r.Anchor, {
                  href: M.Z.getArticleURL(R.BhN.ACTIVITIES),
                  children: P.Z.Messages.LEARN_MORE
                })
              ]
            }),
            buttonCTA: P.Z.Messages.GOT_IT,
            onClick: () => {
              t(), s(j.L.UNKNOWN);
            },
            className: O.tooltip
          });
        },
        children: () => g
      });
    return g;
  }
});
  }
  render() {
return (0, i.jsxs)(a.Fragment, {
  children: [
    this.renderVoiceCallButton(),
    this.renderVideoCallButton()
  ]
});
  }
  constructor(...e) {
super(...e), y(this, 'handleStartCall', (e, t) => {
  let {
    channel: n,
    notFriend: i,
    appContext: a
  } = this.props, s = i ? n.getRecipientId() : null, l = () => o.Z.call(n.id, t, !i && !n.isManaged() && !(null == e ? void 0 : e.shiftKey), s);
  t ? (0, C.Z)(l, a) : l();
}), y(this, 'handleJoinCall', e => {
  c.default.selectVoiceChannel(this.props.channel.id, e);
}), y(this, 'handleVoiceClick', e => {
  let {
    callUnavailable: t,
    callActive: n,
    canShowActivityGdmTooltip: i
  } = this.props;
  if (i && (0, m.EW)(l.z.ACTIVITY_GDM_CALL_TOOLTIP, {
      dismissAction: j.L.AUTO
    }), t);
  else if (n)
    return this.handleJoinCall(!1);
  else
    return this.handleStartCall(e, !1);
}), y(this, 'handleStartVideoCall', e => {
  this.handleStartCall(e, !0);
}), y(this, 'handleJoinVideoCall', () => {
  let {
    appContext: e
  } = this.props;
  (0, C.Z)(() => this.handleJoinCall(!0), e);
}), y(this, 'handleBrowserNotSupported', () => {
  (0, g.Z)();
});
  }
}

function k(e) {
  let {
channel: t
  } = e, n = (0, f.Z)(), r = (0, s.e7)([p.Z], () => p.Z.getMode(t.id)), o = (0, s.e7)([S.Z], () => S.Z.isInChannel(t.id)), c = (0, s.e7)([d.Z], () => d.Z.useReducedMotion), {
callActive: m,
callUnavailable: _
  } = (0, s.cj)([I.Z], () => ({
callActive: I.Z.isCallActive(t.id),
callUnavailable: I.Z.isCallUnavailable(t.id)
  })), E = t.getRecipientId(), {
notFriend: g,
isBlocked: C
  } = (0, s.cj)([N.Z], () => ({
notFriend: t.type === R.d4z.DM && null != E && !N.Z.isFriend(E),
isBlocked: t.type === R.d4z.DM && null != E && N.Z.isBlocked(E)
  })), T = (0, s.e7)([v.default], () => v.default.getUser(E)), Z = (0, u.bp)(), A = [], M = (0, h.Z)(t.id), b = (0, s.e7)([x.Z], () => x.Z.hasLayers());
  M && !b && A.push(l.z.ACTIVITY_GDM_CALL_TOOLTIP);
  let [j, L] = a.useState(!1);
  return (a.useEffect(() => {
let e = setTimeout(() => {
  L(!0);
}, 250);
return () => clearTimeout(e);
  }, []), n || (null == T ? void 0 : T.bot)) ? null : (0, i.jsx)(D, {
channel: t,
mode: r,
inCall: o,
callActive: m,
callUnavailable: _,
notFriend: g,
isBlocked: C,
appContext: Z,
canShowTooltip: j,
canShowActivityGdmTooltip: M,
dismissibleContentTypes: A,
useReducedMotion: c
  });
}