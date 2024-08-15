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
  m = n(358221),
  p = n(70097),
  _ = n(605236),
  f = n(243778),
  E = n(590293),
  g = n(970731),
  C = n(560688),
  I = n(173507),
  x = n(523746),
  T = n(819640),
  N = n(131951),
  v = n(699516),
  S = n(594174),
  Z = n(979651),
  A = n(585483),
  M = n(63063),
  b = n(665149),
  R = n(981631),
  j = n(921944),
  L = n(65154),
  P = n(689938),
  O = n(517759);

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
return N.Z.supports(L.AN.VIDEO) ? l ? (d = P.Z.Messages.CALL_UNAVAILABLE_BLOCKED_USERS, e = r.Tooltip.Colors.RED, h = !0) : a && c === R.WtW.VIDEO ? (t = this.handleJoinVideoCall, d = u ? P.Z.Messages.CONNECT : P.Z.Messages.JOIN_VIDEO_CALL) : (t = this.handleStartVideoCall, d = u ? P.Z.Messages.CONNECT : P.Z.Messages.START_VIDEO_CALL) : (h = !0, t = this.handleBrowserNotSupported, d = P.Z.Messages.BROWSER_NOT_SUPPORTED), (0, i.jsx)(b.ZP.Icon, {
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
let m = c.isManaged(),
  _ = '',
  E = !1;
s ? (_ = m ? P.Z.Messages.VOICE_UNAVAILABLE : P.Z.Messages.CALL_UNAVAILABLE, e = r.Tooltip.Colors.RED, E = !0) : o ? (_ = P.Z.Messages.CALL_UNAVAILABLE_BLOCKED_USERS, e = r.Tooltip.Colors.RED, E = !0) : _ = a ? m ? P.Z.Messages.CONNECT : P.Z.Messages.JOIN_VOICE_CALL : m ? P.Z.Messages.CONNECT : P.Z.Messages.START_VOICE_CALL;
let C = (0, i.jsx)(b.ZP.Icon, {
  icon: r.PhoneCallIcon,
  onClick: this.handleVoiceClick,
  disabled: E,
  tooltip: _,
  tooltipColor: e
});
return (0, i.jsx)(f.ZP, {
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
          return (0, i.jsx)(g.ZP, {
            header: (0, i.jsxs)('div', {
              children: [
                (0, i.jsx)(p.Z, {
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
        children: () => C
      });
    return C;
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
  t ? (0, I.Z)(l, a) : l();
}), y(this, 'handleJoinCall', e => {
  c.default.selectVoiceChannel(this.props.channel.id, e);
}), y(this, 'handleVoiceClick', e => {
  let {
    callUnavailable: t,
    callActive: n,
    canShowActivityGdmTooltip: i
  } = this.props;
  if (i && (0, _.EW)(l.z.ACTIVITY_GDM_CALL_TOOLTIP, {
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
  (0, I.Z)(() => this.handleJoinCall(!0), e);
}), y(this, 'handleBrowserNotSupported', () => {
  (0, C.Z)();
});
  }
}

function k(e) {
  let {
channel: t
  } = e, n = (0, E.Z)(), r = (0, s.e7)([m.Z], () => m.Z.getMode(t.id)), o = (0, s.e7)([Z.Z], () => Z.Z.isInChannel(t.id)), c = (0, s.e7)([d.Z], () => d.Z.useReducedMotion), {
callActive: p,
callUnavailable: _
  } = (0, s.cj)([x.Z], () => ({
callActive: x.Z.isCallActive(t.id),
callUnavailable: x.Z.isCallUnavailable(t.id)
  })), f = t.getRecipientId(), {
notFriend: g,
isBlocked: C
  } = (0, s.cj)([v.Z], () => ({
notFriend: t.type === R.d4z.DM && null != f && !v.Z.isFriend(f),
isBlocked: t.type === R.d4z.DM && null != f && v.Z.isBlocked(f)
  })), I = (0, s.e7)([S.default], () => S.default.getUser(f)), N = (0, u.bp)(), A = [], M = (0, h.Z)(t.id), b = (0, s.e7)([T.Z], () => T.Z.hasLayers());
  M && !b && A.push(l.z.ACTIVITY_GDM_CALL_TOOLTIP);
  let [j, L] = a.useState(!1);
  return (a.useEffect(() => {
let e = setTimeout(() => {
  L(!0);
}, 250);
return () => clearTimeout(e);
  }, []), n || (null == I ? void 0 : I.bot)) ? null : (0, i.jsx)(D, {
channel: t,
mode: r,
inCall: o,
callActive: p,
callUnavailable: _,
notFriend: g,
isBlocked: C,
appContext: N,
canShowTooltip: j,
canShowActivityGdmTooltip: M,
dismissibleContentTypes: A,
useReducedMotion: c
  });
}