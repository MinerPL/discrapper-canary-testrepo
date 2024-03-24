"use strict";
n.r(t), n.d(t, {
  useGamingContentData: function() {
    return C
  },
  ContentRowBadges: function() {
    return _
  },
  default: function() {
    return I
  }
});
var a = n("37983"),
  l = n("884691"),
  s = n("414456"),
  i = n.n(s),
  r = n("446674"),
  u = n("823527"),
  o = n("114770"),
  d = n("77078"),
  c = n("442939"),
  f = n("697218"),
  h = n("476774"),
  m = n("816260"),
  p = n("911589"),
  E = n("36035"),
  g = n("782340"),
  S = n("753482");
let C = e => {
    let t = (0, c.useGetOrFetchApplication)(e.extra.application_id),
      n = null == t ? void 0 : t.getIconURL(128),
      a = (0, r.useStateFromStores)([f.default], () => f.default.getUser(e.author_id));
    return {
      applicationImageSrc: n,
      user: a
    }
  },
  _ = e => {
    let {
      entry: t,
      textColor: n = "text-secondary",
      iconColor: l,
      className: s
    } = e;
    return (0, a.jsxs)("div", {
      className: i(S.badgeRow, s),
      children: [(() => {
        let e = (0, h.isEntryActive)(t);
        return (0, a.jsxs)("div", {
          className: S.badgeContainer,
          children: [(0, a.jsx)(u.GameControllerIcon, {
            width: 12,
            height: 12,
            color: null != l ? l : e ? d.tokens.colors.REDESIGN_BUTTON_PRIMARY_ON_BLURPLE_PRESSED_TEXT : void 0
          }), (0, a.jsx)(E.default, {
            entry: t,
            textColor: n
          })]
        })
      })(), (0, h.isEntryNew)(t) ? (0, a.jsxs)("div", {
        className: S.badgeContainer,
        children: [(0, a.jsx)(o.NewUserIcon, {
          width: 12,
          height: 12,
          color: null != l ? l : d.tokens.colors.STATUS_POSITIVE
        }), (0, a.jsx)(d.Text, {
          variant: "text-xs/normal",
          color: n,
          children: g.default.Messages.MEMBER_LIST_CONTENT_FEED_FIRST_TIME
        })]
      }) : null]
    })
  };
var I = l.memo(e => {
  let {
    entry: t,
    channel: n,
    selected: l
  } = e, {
    applicationImageSrc: s
  } = C(t);
  return (0, a.jsxs)(m.Card, {
    selected: l,
    children: [(0, a.jsxs)(m.CardInfoSection, {
      children: [(0, a.jsx)(m.CardUser, {
        userId: t.author_id,
        channelId: n.id,
        guildId: n.guild_id
      }), (0, a.jsx)(m.CardTitle, {
        children: function(e) {
          let t = (0, h.isEntryActive)(e);
          return t ? g.default.Messages.MEMBER_LIST_CONTENT_FEED_PLAYING_GAME.format({
            gameName: e.extra.game_name
          }) : g.default.Messages.MEMBER_LIST_CONTENT_FEED_PLAYED_GAME.format({
            gameName: e.extra.game_name
          })
        }(t)
      }), (0, a.jsx)(_, {
        entry: t
      })]
    }), (0, a.jsx)(p.ContentImage, {
      src: s,
      size: 48
    })]
  })
})