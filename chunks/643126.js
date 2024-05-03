"use strict";
n.r(t), n("47120");
var a = n("735250"),
  s = n("470079"),
  l = n("120356"),
  i = n.n(l),
  r = n("512722"),
  o = n.n(r),
  u = n("481060"),
  d = n("100527"),
  c = n("484459"),
  f = n("103575"),
  E = n("285952"),
  h = n("409216"),
  _ = n("465670"),
  C = n("87888"),
  S = n("63063"),
  m = n("976401"),
  p = n("333454"),
  I = n("864441"),
  T = n("981631"),
  g = n("689938"),
  A = n("846267");

function N(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
let v = {
  HOST: 5,
  LISTENER: 4
};
class R extends s.PureComponent {
  isHost() {
    let {
      currentUser: e,
      host: t
    } = this.props;
    return e.id === (null == t ? void 0 : t.id)
  }
  renderTitle() {
    return (0, a.jsxs)("div", {
      children: [(0, a.jsx)(I.default, {
        children: this.isHost() ? g.default.Messages.SPOTIFY_LISTEN_ALONG_TITLE_HOST.format({
          count: this.props.party.length
        }) : g.default.Messages.SPOTIFY_LISTEN_ALONG_TITLE_LISTENER
      }), (0, a.jsx)(p.default, {
        children: g.default.Messages.SPOTIFY_LISTEN_ALONG_SUBTITLE_LISTENER
      })]
    })
  }
  renderStopListeningButton() {
    let {
      onStopListening: e
    } = this.props;
    return this.isHost() ? null : (0, a.jsx)(m.default, {
      tooltipText: g.default.Messages.SPOTIFY_LISTEN_ALONG_STOP,
      onClick: e,
      icon: _.default
    })
  }
  renderHelpIcon() {
    return this.isHost() ? (0, a.jsx)(m.default, {
      tooltipText: g.default.Messages.SPOTIFY_LISTEN_ALONG_INFO,
      onClick: () => {
        window.open(S.default.getArticleURL(T.HelpdeskArticles.SPOTIFY_CONNECTION), "_blank")
      },
      icon: C.default
    }) : null
  }
  render() {
    return (0, a.jsxs)("div", {
      className: A.listeningAlong,
      children: [this.renderTitle(), (0, a.jsx)(E.default, {
        justify: E.default.Justify.END,
        className: A.party,
        children: (0, a.jsx)(h.default, {
          users: this.props.party,
          max: this.isHost() ? v.HOST : v.LISTENER,
          renderUser: this.renderPartyMember,
          renderMoreUsers: this.renderPartyMemberOverflow
        })
      }), (0, a.jsxs)("div", {
        className: A.icons,
        children: [this.renderHelpIcon(), this.renderStopListeningButton()]
      })]
    })
  }
  constructor(...e) {
    super(...e), N(this, "renderPartyMember", (e, t) => {
      let n;
      if (null == e) return null;
      let {
        host: l,
        onUserContextMenu: r
      } = this.props;
      return n = (null == l ? void 0 : l.id) === e.id ? g.default.Messages.SPOTIFY_LISTEN_ALONG_HOST : g.default.Messages.SPOTIFY_LISTEN_ALONG_LISTENER, (0, a.jsx)(u.Popout, {
        preload: () => (0, c.maybeFetchUserProfileForPopout)(e.id, e.getAvatarURL(void 0, 80)),
        renderPopout: t => (o()(null != e, ""), (0, a.jsx)(f.default, {
          ...t,
          location: "ListeningAlong",
          userId: e.id,
          newAnalyticsLocations: [d.default.AVATAR]
        })),
        position: "top",
        align: "center",
        children: l => (0, a.jsx)(u.Tooltip, {
          text: n,
          children: n => {
            let {
              onMouseEnter: a,
              onMouseLeave: o
            } = n;
            return (0, s.createElement)(u.Avatar, {
              ...l,
              key: e.id,
              src: e.getAvatarURL(void 0, 24),
              size: u.AvatarSizes.SIZE_24,
              className: i()(A.avatar, t),
              "aria-label": e.username,
              onMouseEnter: a,
              onMouseLeave: o,
              onContextMenu: t => void(null != e && (null == r || r(t, e)))
            })
          }
        })
      }, e.id)
    }), N(this, "renderPartyMemberOverflow", (e, t, n) => {
      let {
        renderOverflowPopout: s
      } = this.props;
      return (0, a.jsx)(u.Popout, {
        renderPopout: s,
        children: n => (0, a.jsx)(u.Tooltip, {
          text: g.default.Messages.SPOTIFY_LISTEN_ALONG_LISTENERS,
          children: s => (0, a.jsx)("div", {
            className: i()(A.overflow, t),
            ...s,
            ...n,
            children: e
          })
        })
      }, n)
    })
  }
}
t.default = R