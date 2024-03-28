"use strict";
n.r(t), n.d(t, {
  default: function() {
    return L
  }
}), n("47120");
var a = n("735250"),
  l = n("470079"),
  s = n("392711"),
  i = n.n(s),
  r = n("442837"),
  o = n("481060"),
  u = n("100527"),
  d = n("906732"),
  c = n("150039"),
  f = n("171368"),
  h = n("271383"),
  m = n("430824"),
  p = n("594174"),
  E = n("514342"),
  C = n("151785"),
  g = n("26290"),
  S = n("502568"),
  _ = n("602623"),
  T = n("251625"),
  I = n("823379"),
  A = n("981631"),
  v = n("228168"),
  N = n("689938"),
  x = n("992514");

function M(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
class R {
  updateData(e) {
    let {
      userId: t,
      user: n,
      channelId: a,
      analyticsLocations: l
    } = e;
    this.userId = t, this.user = n, this.channelId = a, this.analyticsLocations = l
  }
  getNicknameGuildPairs() {
    return this.generateNicknameGuildPairs(this.user)
  }
  renderNicknamePairs() {
    return this.getNicknameGuildPairs().map((e, t) => {
      let [n, s] = e, i = (0, a.jsx)(o.Clickable, {
        tag: "span",
        onClick: this.handleClick,
        children: n
      });
      return s.length > 0 && (i = (0, a.jsx)(o.TooltipContainer, {
        className: x.tooltip,
        text: s.join(", "),
        position: "bottom",
        children: i
      })), (0, a.jsxs)(l.Fragment, {
        children: [0 !== t ? ", " : null, i]
      }, t)
    })
  }
  constructor({
    userId: e,
    user: t,
    channelId: n,
    analyticsLocations: l
  }) {
    M(this, "userId", void 0), M(this, "user", void 0), M(this, "channelId", void 0), M(this, "analyticsLocations", void 0), M(this, "generateNicknameGuildPairs", (0, T.cachedFunction)(e => {
      var t;
      return i()(h.default.getNicknameGuildsMapping(null !== (t = null == e ? void 0 : e.id) && void 0 !== t ? t : this.userId)).toPairs().map(e => {
        let [t, n] = e;
        return [t, n.map(e => {
          var t;
          return null === (t = m.default.getGuild(e)) || void 0 === t ? void 0 : t.name
        }).filter(I.isNotNullish)]
      }).value()
    })), M(this, "renderMoreAvatars", () => (0, a.jsx)(o.TooltipContainer, {
      text: N.default.Messages.AKA_MORE_AVATARS_OVERFLOW,
      position: "bottom",
      children: (0, a.jsx)(o.Clickable, {
        className: x.moreAvatars,
        onClick: this.handleClick,
        children: (0, a.jsx)(C.default, {
          className: x.plusIcon
        })
      })
    }, "more-avatars")), M(this, "handleClick", () => {
      (0, f.openUserProfileModal)({
        userId: this.userId,
        channelId: this.channelId,
        sourceAnalyticsLocations: this.analyticsLocations,
        section: v.UserProfileSections.MUTUAL_GUILDS,
        analyticsLocation: {
          section: A.AnalyticsSections.CHANNEL_HEADER
        }
      })
    }), this.userId = e, this.user = t, this.channelId = n, this.analyticsLocations = l
  }
}

function L(e) {
  let {
    channel: t
  } = e, n = t.getRecipientId(), s = (0, c.useAvatarsWithGuilds)(n), i = Array(s.length).fill(null), {
    analyticsLocations: f
  } = (0, d.default)(u.default.AKA), h = function(e) {
    let {
      userId: t,
      channelId: n,
      analyticsLocations: a
    } = e, s = (0, r.useStateFromStores)([p.default], () => p.default.getUser(t), [t]), [i] = l.useState(() => new R({
      user: s,
      userId: t,
      channelId: n,
      analyticsLocations: a
    }));
    return i.updateData({
      userId: t,
      user: s,
      channelId: n,
      analyticsLocations: a
    }), i
  }({
    userId: n,
    analyticsLocations: f,
    channelId: t.id
  });
  return 0 === h.getNicknameGuildPairs().length && 0 === s.length ? (0, a.jsx)("div", {
    className: x.spacer
  }) : (0, a.jsxs)(d.AnalyticsLocationProvider, {
    value: f,
    children: [(0, a.jsx)(S.Divider, {}), (0, a.jsx)(g.TextBadge, {
      text: N.default.Messages.AKA,
      disableColor: !0,
      className: x.akaBadge
    }), s.length > 0 ? (0, a.jsx)(_.default, {
      size: 16,
      users: i,
      showUserPopout: !1,
      renderUser: (e, t, n) => {
        var l;
        let i = h.user,
          r = s[n];
        return null == r || null == i ? null : (0, a.jsx)(o.TooltipContainer, {
          text: null === (l = m.default.getGuild(r)) || void 0 === l ? void 0 : l.name,
          position: "bottom",
          children: (0, a.jsx)("img", {
            alt: "",
            className: x.avatar,
            onClick: h.handleClick,
            src: i.getAvatarURL(r, 16),
            "aria-hidden": !0
          })
        }, r[1])
      },
      renderMoreUsers: h.renderMoreAvatars,
      guildId: void 0,
      max: 3,
      className: x.avatars
    }) : null, h.getNicknameGuildPairs().length > 0 ? (0, a.jsx)(E.default, {
      position: "bottom",
      className: x.nicknames,
      children: h.renderNicknamePairs()
    }) : null]
  })
}