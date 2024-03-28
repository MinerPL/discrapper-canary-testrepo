"use strict";
n.r(t), n.d(t, {
  ContentRowBadges: function() {
    return _
  },
  useGamingContentData: function() {
    return S
  }
});
var a = n("735250"),
  l = n("470079"),
  s = n("803997"),
  i = n.n(s),
  r = n("442837"),
  o = n("149020"),
  u = n("420166"),
  d = n("481060"),
  c = n("835473"),
  f = n("594174"),
  h = n("561308"),
  m = n("443487"),
  p = n("43205"),
  E = n("371991"),
  C = n("689938"),
  g = n("138317");
let S = e => {
    let t = (0, c.useGetOrFetchApplication)(e.extra.application_id),
      n = null == t ? void 0 : t.getIconURL(128);
    return {
      applicationImageSrc: n,
      user: (0, r.useStateFromStores)([f.default], () => f.default.getUser(e.author_id))
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
      className: i()(g.badgeRow, s),
      children: [(() => {
        let e = (0, h.isEntryActive)(t);
        return (0, a.jsxs)("div", {
          className: g.badgeContainer,
          children: [(0, a.jsx)(o.GameControllerIcon, {
            width: 12,
            height: 12,
            color: null != l ? l : e ? d.tokens.colors.REDESIGN_BUTTON_PRIMARY_ON_BLURPLE_PRESSED_TEXT : void 0
          }), (0, a.jsx)(E.default, {
            entry: t,
            textColor: n
          })]
        })
      })(), (0, h.isEntryNew)(t) ? (0, a.jsxs)("div", {
        className: g.badgeContainer,
        children: [(0, a.jsx)(u.NewUserIcon, {
          width: 12,
          height: 12,
          color: null != l ? l : d.tokens.colors.STATUS_POSITIVE
        }), (0, a.jsx)(d.Text, {
          variant: "text-xs/normal",
          color: n,
          children: C.default.Messages.MEMBER_LIST_CONTENT_FEED_FIRST_TIME
        })]
      }) : null]
    })
  };
t.default = l.memo(e => {
  let {
    entry: t,
    channel: n,
    selected: l
  } = e, {
    applicationImageSrc: s
  } = S(t);
  return (0, a.jsxs)(m.Card, {
    selected: l,
    children: [(0, a.jsxs)(m.CardInfoSection, {
      children: [(0, a.jsx)(m.CardUser, {
        userId: t.author_id,
        channelId: n.id,
        guildId: n.guild_id
      }), (0, a.jsx)(m.CardTitle, {
        children: function(e) {
          return (0, h.isEntryActive)(e) ? C.default.Messages.MEMBER_LIST_CONTENT_FEED_PLAYING_GAME.format({
            gameName: e.extra.game_name
          }) : C.default.Messages.MEMBER_LIST_CONTENT_FEED_PLAYED_GAME.format({
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