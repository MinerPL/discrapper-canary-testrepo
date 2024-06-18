"use strict";
n.d(t, {
  Z: function() {
    return w
  }
}), n(47120);
var i = n(735250),
  s = n(470079),
  l = n(120356),
  a = n.n(l),
  o = n(613828),
  r = n(442837),
  d = n(481060),
  c = n(846027),
  u = n(925549),
  h = n(287734),
  p = n(324315),
  f = n(933557),
  E = n(873596),
  Z = n(430824),
  g = n(131951),
  m = n(699516),
  _ = n(594174),
  I = n(979651),
  S = n(362446),
  v = n(285952),
  C = n(389320),
  x = n(242315),
  N = n(381238),
  T = n(357727),
  O = n(779863),
  A = n(547881),
  y = n(976401),
  R = n(333454),
  M = n(981631),
  L = n(689938),
  D = n(405572),
  P = n(726271);

function j(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
class b extends s.PureComponent {
  handleDisconnect() {
    h.default.selectVoiceChannel(null)
  }
  renderChannelLink(e) {
    let {
      guild: t
    } = this.props, n = (0, f.F6)(e, _.default, m.Z), s = null != t ? "".concat(n, " / ").concat(t.name) : n, l = null != t ? t.id : M.ME;
    return (0, i.jsx)(o.rU, {
      to: M.Z5c.CHANNEL(l),
      onClick: t => {
        t.stopPropagation(), u.Z.channelListScrollTo(l, e.id)
      },
      children: (0, i.jsx)(R.Z, {
        className: P.channel,
        children: s
      })
    })
  }
  render() {
    let {
      className: e,
      contentClassName: t,
      pinned: n,
      lobbyId: s,
      channel: l,
      quality: o,
      lastPing: r,
      hasVideo: c,
      connectionState: u,
      deaf: h,
      mute: f
    } = this.props;
    return null == l ? null : (0, i.jsx)(A.ZP.Bar, {
      className: a()(e, D.controls, {
        [D.unpinned]: !n
      }),
      children: (0, i.jsxs)(A.ZP.Content, {
        className: a()(t, D.content),
        dynamicSize: !0,
        children: [(0, i.jsx)("div", {
          className: P.inner,
          children: (0, i.jsx)(d.Popout, {
            renderPopout: () => this.renderPopout(l.id),
            position: "top",
            children: e => (0, i.jsx)(d.Clickable, {
              ...e,
              children: (0, i.jsx)(p.Z, {
                channelId: l.id,
                statusTextClassName: P.statusWithPopout,
                quality: o,
                lastPing: r,
                hasVideo: c,
                state: u,
                children: this.renderChannelLink(l)
              })
            })
          })
        }), (0, i.jsxs)(v.Z, {
          grow: 0,
          children: [(0, i.jsx)(y.Z, {
            tooltipText: f ? L.Z.Messages.UNMUTE : L.Z.Messages.MUTE,
            icon: f ? O.Z : T.Z,
            iconForeground: f ? D.strikethrough : null,
            onClick: this.handleToggleSelfMute
          }), (0, i.jsx)(y.Z, {
            tooltipText: h ? L.Z.Messages.UNDEAFEN : L.Z.Messages.DEAFEN,
            icon: h ? N.Z : x.Z,
            onClick: this.handleToggleSelfDeaf,
            iconForeground: h ? D.strikethrough : null
          }), null == s && (0, i.jsx)(y.Z, {
            tooltipText: L.Z.Messages.DISCONNECT_SELF,
            onClick: this.handleDisconnect,
            icon: C.Z
          })]
        })]
      })
    })
  }
  constructor(...e) {
    super(...e), j(this, "handleToggleSelfMute", () => {
      let {
        context: e
      } = this.props;
      c.Z.toggleSelfMute({
        context: e
      })
    }), j(this, "handleToggleSelfDeaf", () => {
      let {
        context: e
      } = this.props;
      c.Z.toggleSelfDeaf({
        context: e
      })
    }), j(this, "renderPopout", e => {
      let {
        lobbyId: t
      } = this.props;
      return (0, i.jsx)(E.Z, {
        channelId: e,
        lobbyId: t,
        isOverlay: !0
      })
    })
  }
}

function w(e) {
  let {
    context: t,
    lobbyId: n,
    channel: s,
    ...l
  } = e, a = (0, r.e7)([Z.Z], () => Z.Z.getGuild(null == s ? void 0 : s.getGuildId())), o = (0, r.e7)([I.Z], () => null != s && I.Z.hasVideo(s.id)), [d, c] = (0, r.Wu)([g.Z], () => [g.Z.isSelfMute(t) || g.Z.isSelfMutedTemporarily(t), g.Z.isSelfDeaf(t)]), [u, h, p] = (0, r.Wu)([S.Z], () => [S.Z.getConnectionState(n), S.Z.getLastPing(n), S.Z.getQuality(n)]);
  return (0, i.jsx)(b, {
    ...l,
    context: t,
    lobbyId: n,
    channel: s,
    guild: a,
    hasVideo: o,
    mute: d,
    deaf: c,
    connectionState: u,
    lastPing: h,
    quality: p
  })
}