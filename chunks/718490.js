"use strict";
n.r(t), n.d(t, {
  default: function() {
    return L
  }
}), n("222007");
var s = n("37983"),
  a = n("884691"),
  l = n("917351"),
  i = n.n(l),
  r = n("446674"),
  o = n("77078"),
  u = n("812204"),
  d = n("685665"),
  c = n("906932"),
  f = n("401642"),
  h = n("26989"),
  C = n("305961"),
  p = n("697218"),
  m = n("98292"),
  E = n("351825"),
  g = n("956089"),
  S = n("664336"),
  T = n("811305"),
  A = n("117362"),
  _ = n("449008"),
  M = n("49111"),
  I = n("590456"),
  N = n("782340"),
  v = n("724539");
class x {
  updateData(e) {
    let {
      userId: t,
      user: n,
      channelId: s,
      analyticsLocations: a
    } = e;
    this.userId = t, this.user = n, this.channelId = s, this.analyticsLocations = a
  }
  getNicknameGuildPairs() {
    return this.generateNicknameGuildPairs(this.user)
  }
  renderNicknamePairs() {
    return this.getNicknameGuildPairs().map((e, t) => {
      let [n, l] = e, i = (0, s.jsx)(o.Clickable, {
        tag: "span",
        onClick: this.handleClick,
        children: n
      });
      return l.length > 0 && (i = (0, s.jsx)(o.TooltipContainer, {
        className: v.tooltip,
        text: l.join(", "),
        position: "bottom",
        children: i
      })), (0, s.jsxs)(a.Fragment, {
        children: [0 !== t ? ", " : null, i]
      }, t)
    })
  }
  constructor({
    userId: e,
    user: t,
    channelId: n,
    analyticsLocations: a
  }) {
    this.generateNicknameGuildPairs = (0, A.cachedFunction)(e => {
      var t;
      let n = i(h.default.getNicknameGuildsMapping(null !== (t = null == e ? void 0 : e.id) && void 0 !== t ? t : this.userId)).toPairs().map(e => {
        let [t, n] = e;
        return [t, n.map(e => {
          var t;
          return null === (t = C.default.getGuild(e)) || void 0 === t ? void 0 : t.name
        }).filter(_.isNotNullish)]
      }).value();
      return n
    }), this.renderMoreAvatars = () => (0, s.jsx)(o.TooltipContainer, {
      text: N.default.Messages.AKA_MORE_AVATARS_OVERFLOW,
      position: "bottom",
      children: (0, s.jsx)(o.Clickable, {
        className: v.moreAvatars,
        onClick: this.handleClick,
        children: (0, s.jsx)(E.default, {
          className: v.plusIcon
        })
      })
    }, "more-avatars"), this.handleClick = () => {
      (0, f.openUserProfileModal)({
        userId: this.userId,
        channelId: this.channelId,
        sourceAnalyticsLocations: this.analyticsLocations,
        section: I.UserProfileSections.MUTUAL_GUILDS,
        analyticsLocation: {
          section: M.AnalyticsSections.CHANNEL_HEADER
        }
      })
    }, this.userId = e, this.user = t, this.channelId = n, this.analyticsLocations = a
  }
}

function L(e) {
  let {
    channel: t
  } = e, n = t.getRecipientId(), l = (0, c.useAvatarsWithGuilds)(n), i = Array(l.length).fill(null), {
    analyticsLocations: f
  } = (0, d.default)(u.default.AKA), h = function(e) {
    let {
      userId: t,
      channelId: n,
      analyticsLocations: s
    } = e, l = (0, r.useStateFromStores)([p.default], () => p.default.getUser(t), [t]), [i] = a.useState(() => new x({
      user: l,
      userId: t,
      channelId: n,
      analyticsLocations: s
    }));
    return i.updateData({
      userId: t,
      user: l,
      channelId: n,
      analyticsLocations: s
    }), i
  }({
    userId: n,
    analyticsLocations: f,
    channelId: t.id
  });
  return 0 === h.getNicknameGuildPairs().length && 0 === l.length ? (0, s.jsx)("div", {
    className: v.spacer
  }) : (0, s.jsxs)(d.AnalyticsLocationProvider, {
    value: f,
    children: [(0, s.jsx)(S.Divider, {}), (0, s.jsx)(g.TextBadge, {
      text: N.default.Messages.AKA,
      disableColor: !0,
      className: v.akaBadge
    }), l.length > 0 ? (0, s.jsx)(T.default, {
      size: 16,
      users: i,
      showUserPopout: !1,
      renderUser: (e, t, n) => {
        var a;
        let i = h.user,
          r = l[n];
        return null == r || null == i ? null : (0, s.jsx)(o.TooltipContainer, {
          text: null === (a = C.default.getGuild(r)) || void 0 === a ? void 0 : a.name,
          position: "bottom",
          children: (0, s.jsx)("img", {
            alt: "",
            className: v.avatar,
            onClick: h.handleClick,
            src: i.getAvatarURL(r, 16),
            "aria-hidden": !0
          })
        }, r[1])
      },
      renderMoreUsers: h.renderMoreAvatars,
      guildId: void 0,
      max: 3,
      className: v.avatars
    }) : null, h.getNicknameGuildPairs().length > 0 ? (0, s.jsx)(m.default, {
      position: "bottom",
      className: v.nicknames,
      children: h.renderNicknamePairs()
    }) : null]
  })
}