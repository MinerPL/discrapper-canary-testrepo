"use strict";
n.r(t), n.d(t, {
  default: function() {
    return V
  }
}), n("47120");
var i = n("735250"),
  a = n("470079"),
  l = n("120356"),
  s = n.n(l),
  o = n("613828"),
  r = n("442837"),
  d = n("481060"),
  u = n("846027"),
  c = n("925549"),
  f = n("287734"),
  h = n("324315"),
  p = n("236756"),
  g = n("933557"),
  m = n("430824"),
  E = n("131951"),
  S = n("699516"),
  v = n("594174"),
  y = n("979651"),
  O = n("362446"),
  T = n("285952"),
  C = n("389320"),
  N = n("242315"),
  I = n("381238"),
  _ = n("357727"),
  A = n("255439"),
  x = n("547881"),
  R = n("976401"),
  L = n("333454"),
  M = n("981631"),
  D = n("689938"),
  b = n("430678"),
  j = n("594078");

function P(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}

function k(e) {
  let {
    lobbyId: t
  } = e, n = (0, r.useStateFromStoresObject)([O.default], () => ({
    connectionState: O.default.getConnectionState(t),
    hostname: O.default.getHostname(t),
    averagePing: O.default.getAveragePing(t),
    lastPing: O.default.getLastPing(t),
    pings: O.default.getPings(),
    outboundLossRate: O.default.getOutboundLossRate(t)
  }));
  return (0, i.jsx)(p.default, {
    ...n
  })
}
class w extends a.PureComponent {
  handleDisconnect() {
    f.default.selectVoiceChannel(null)
  }
  renderChannelLink(e) {
    let {
      guild: t
    } = this.props, n = (0, g.computeChannelName)(e, v.default, S.default), a = null != t ? "".concat(n, " / ").concat(t.name) : n, l = null != t ? t.id : M.ME;
    return (0, i.jsx)(o.Link, {
      to: M.Routes.CHANNEL(l),
      onClick: t => {
        t.stopPropagation(), c.default.channelListScrollTo(l, e.id)
      },
      children: (0, i.jsx)(L.default, {
        className: j.channel,
        children: a
      })
    })
  }
  render() {
    let {
      className: e,
      contentClassName: t,
      pinned: n,
      lobbyId: a,
      channel: l,
      quality: o,
      lastPing: r,
      hasVideo: u,
      connectionState: c,
      deaf: f,
      mute: p
    } = this.props;
    return null == l ? null : (0, i.jsx)(x.default.Bar, {
      className: s()(e, b.controls, {
        [b.unpinned]: !n
      }),
      children: (0, i.jsxs)(x.default.Content, {
        className: s()(t, b.content),
        dynamicSize: !0,
        children: [(0, i.jsx)("div", {
          className: j.inner,
          children: (0, i.jsx)(d.Popout, {
            renderPopout: this.renderPopout,
            position: "top",
            children: e => (0, i.jsx)(d.Clickable, {
              ...e,
              children: (0, i.jsx)(h.default, {
                statusTextClassName: j.statusWithPopout,
                quality: o,
                lastPing: r,
                hasVideo: u,
                state: c,
                children: this.renderChannelLink(l)
              })
            })
          })
        }), (0, i.jsxs)(T.default, {
          grow: 0,
          children: [(0, i.jsx)(R.default, {
            tooltipText: p ? D.default.Messages.UNMUTE : D.default.Messages.MUTE,
            icon: p ? A.default : _.default,
            iconForeground: p ? b.strikethrough : null,
            onClick: this.handleToggleSelfMute
          }), (0, i.jsx)(R.default, {
            tooltipText: f ? D.default.Messages.UNDEAFEN : D.default.Messages.DEAFEN,
            icon: f ? I.default : N.default,
            onClick: this.handleToggleSelfDeaf,
            iconForeground: f ? b.strikethrough : null
          }), null == a && (0, i.jsx)(R.default, {
            tooltipText: D.default.Messages.DISCONNECT_SELF,
            onClick: this.handleDisconnect,
            icon: C.default
          })]
        })]
      })
    })
  }
  constructor(...e) {
    super(...e), P(this, "handleToggleSelfMute", () => {
      let {
        context: e
      } = this.props;
      u.default.toggleSelfMute({
        context: e
      })
    }), P(this, "handleToggleSelfDeaf", () => {
      let {
        context: e
      } = this.props;
      u.default.toggleSelfDeaf({
        context: e
      })
    }), P(this, "renderPopout", () => {
      let {
        lobbyId: e
      } = this.props;
      return (0, i.jsx)(k, {
        lobbyId: e
      })
    })
  }
}

function V(e) {
  let {
    context: t,
    lobbyId: n,
    channel: a,
    ...l
  } = e, s = (0, r.useStateFromStores)([m.default], () => m.default.getGuild(null == a ? void 0 : a.getGuildId())), o = (0, r.useStateFromStores)([y.default], () => null != a && y.default.hasVideo(a.id)), [d, u] = (0, r.useStateFromStoresArray)([E.default], () => [E.default.isSelfMute(t) || E.default.isSelfMutedTemporarily(t), E.default.isSelfDeaf(t)]), [c, f, h] = (0, r.useStateFromStoresArray)([O.default], () => [O.default.getConnectionState(n), O.default.getLastPing(n), O.default.getQuality(n)]);
  return (0, i.jsx)(w, {
    ...l,
    context: t,
    lobbyId: n,
    channel: a,
    guild: s,
    hasVideo: o,
    mute: d,
    deaf: u,
    connectionState: c,
    lastPing: f,
    quality: h
  })
}