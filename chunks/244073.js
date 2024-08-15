n.d(t, {
  Z: function() {
return b;
  }
}), n(47120);
var i = n(735250),
  s = n(470079),
  a = n(120356),
  o = n.n(a),
  r = n(613828),
  l = n(442837),
  c = n(481060),
  d = n(846027),
  u = n(925549),
  h = n(287734),
  p = n(933557),
  f = n(600164),
  _ = n(870569),
  g = n(345243),
  m = n(873596),
  E = n(917405),
  Z = n(430824),
  I = n(131951),
  S = n(699516),
  C = n(594174),
  v = n(979651),
  x = n(362446),
  T = n(518084),
  N = n(981631),
  O = n(689938),
  A = n(713199),
  y = n(532140);

function R(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
value: n,
enumerable: !0,
configurable: !0,
writable: !0
  }) : e[t] = n, e;
}
class M extends s.PureComponent {
  handleDisconnect() {
h.default.selectVoiceChannel(null);
  }
  renderChannelLink(e) {
let {
  guild: t
} = this.props, n = (0, p.F6)(e, C.default, S.Z), s = null != t ? ''.concat(n, ' / ').concat(t.name) : n, a = null != t ? t.id : N.ME;
return (0, i.jsx)(r.rU, {
  to: N.Z5c.CHANNEL(a),
  onClick: t => {
    t.stopPropagation(), u.Z.channelListScrollTo(a, e.id);
  },
  children: (0, i.jsx)(g.Z, {
    className: y.channel,
    children: s
  })
});
  }
  render() {
let {
  className: e,
  contentClassName: t,
  pinned: n,
  lobbyId: s,
  channel: a,
  quality: r,
  lastPing: l,
  hasVideo: d,
  connectionState: u,
  deaf: h,
  mute: p
} = this.props;
return null == a ? null : (0, i.jsx)(T.ZP.Bar, {
  className: o()(e, A.controls, {
    [A.unpinned]: !n
  }),
  children: (0, i.jsxs)(T.ZP.Content, {
    className: o()(t, A.content),
    dynamicSize: !0,
    children: [
      (0, i.jsx)('div', {
        className: y.inner,
        children: (0, i.jsx)(c.Popout, {
          renderPopout: () => this.renderPopout(a.id),
          position: 'top',
          children: e => (0, i.jsx)(c.Clickable, {
            ...e,
            children: (0, i.jsx)(E.Z, {
              channelId: a.id,
              quality: r,
              lastPing: l,
              hasVideo: d,
              state: u,
              children: this.renderChannelLink(a)
            })
          })
        })
      }),
      (0, i.jsxs)(f.Z, {
        grow: 0,
        children: [
          (0, i.jsx)(_.Z, {
            tooltipText: p ? O.Z.Messages.UNMUTE : O.Z.Messages.MUTE,
            icon: p ? c.MicrophoneSlashIcon : c.MicrophoneIcon,
            iconForeground: p ? A.strikethrough : null,
            onClick: this.handleToggleSelfMute
          }),
          (0, i.jsx)(_.Z, {
            tooltipText: h ? O.Z.Messages.UNDEAFEN : O.Z.Messages.DEAFEN,
            icon: h ? c.HeadphonesSlashIcon : c.HeadphonesIcon,
            onClick: this.handleToggleSelfDeaf,
            iconForeground: h ? A.strikethrough : null
          }),
          null == s && (0, i.jsx)(_.Z, {
            tooltipText: O.Z.Messages.DISCONNECT_SELF,
            onClick: this.handleDisconnect,
            icon: c.PhoneHangUpIcon
          })
        ]
      })
    ]
  })
});
  }
  constructor(...e) {
super(...e), R(this, 'handleToggleSelfMute', () => {
  let {
    context: e
  } = this.props;
  d.Z.toggleSelfMute({
    context: e
  });
}), R(this, 'handleToggleSelfDeaf', () => {
  let {
    context: e
  } = this.props;
  d.Z.toggleSelfDeaf({
    context: e
  });
}), R(this, 'renderPopout', e => {
  let {
    lobbyId: t
  } = this.props;
  return (0, i.jsx)(m.Z, {
    channelId: e,
    lobbyId: t,
    isOverlay: !0
  });
});
  }
}

function b(e) {
  let {
context: t,
lobbyId: n,
channel: s,
...a
  } = e, o = (0, l.e7)([Z.Z], () => Z.Z.getGuild(null == s ? void 0 : s.getGuildId())), r = (0, l.e7)([v.Z], () => null != s && v.Z.hasVideo(s.id)), [c, d] = (0, l.Wu)([I.Z], () => [
I.Z.isSelfMute(t) || I.Z.isSelfMutedTemporarily(t),
I.Z.isSelfDeaf(t)
  ]), [u, h, p] = (0, l.Wu)([x.Z], () => [
x.Z.getConnectionState(n),
x.Z.getLastPing(n),
x.Z.getQuality(n)
  ]);
  return (0, i.jsx)(M, {
...a,
context: t,
lobbyId: n,
channel: s,
guild: o,
hasVideo: r,
mute: c,
deaf: d,
connectionState: u,
lastPing: h,
quality: p
  });
}