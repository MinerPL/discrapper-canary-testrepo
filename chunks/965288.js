"use strict";
n.r(t), n.d(t, {
  AudienceEmptyTile: function() {
    return v
  }
});
var a = n("735250"),
  l = n("470079"),
  s = n("120356"),
  i = n.n(s),
  r = n("512722"),
  o = n.n(r),
  u = n("442837"),
  d = n("692547"),
  c = n("481060"),
  f = n("239091"),
  h = n("40851"),
  m = n("484459"),
  p = n("103575"),
  E = n("271383"),
  C = n("83097"),
  g = n("709586"),
  S = n("740624"),
  _ = n("5192"),
  T = n("590415"),
  I = n("862536");
let A = l.memo(function(e) {
    let {
      guildId: t,
      channelId: n,
      user: l,
      isPremium: s,
      isBlocked: i
    } = e;
    return (0, a.jsxs)("div", {
      className: I.textContainer,
      children: [i ? (0, a.jsx)(C.default, {
        className: I.blockedIcon,
        color: d.default.unsafe_rawColors.RED_400.css
      }) : null, (0, a.jsx)(c.Text, {
        className: I.text,
        variant: "text-sm/normal",
        color: "header-primary",
        children: _.default.getName(t, n, l)
      }), s ? (0, a.jsx)(g.default, {
        className: I.boost,
        color: d.default.unsafe_rawColors.GUILD_BOOSTING_PINK.css
      }) : null]
    })
  }),
  N = l.memo(function(e) {
    var t;
    let {
      participant: n,
      guildId: l,
      channel: s,
      isPremium: r
    } = e, {
      user: o,
      blocked: u,
      rtsState: d
    } = n, c = d === T.RequestToSpeakStates.REQUESTED_TO_SPEAK_AND_AWAITING_USER_ACK, f = d === T.RequestToSpeakStates.REQUESTED_TO_SPEAK || c;
    return (0, a.jsxs)(a.Fragment, {
      children: [(0, a.jsxs)("div", {
        className: I.avatarContainer,
        children: [f && (0, a.jsx)(S.default, {
          className: i()(I.icon, {
            [I.invited]: c
          })
        }), (0, a.jsx)("img", {
          src: null !== (t = o.getAvatarURL(s.guild_id, 56, !1)) && void 0 !== t ? t : void 0,
          alt: o.username,
          "aria-label": o.username,
          className: i()(I.avatar, {
            [I.faded]: u
          })
        })]
      }), (0, a.jsx)(A, {
        guildId: l,
        channelId: s.id,
        user: o,
        isPremium: r,
        isBlocked: u
      })]
    })
  }),
  v = () => (0, a.jsx)("div", {
    className: I.tileBaseContainer
  });
t.default = l.memo(function(e) {
  let {
    participant: t,
    channel: s
  } = e, {
    user: r,
    blocked: d
  } = t, C = s.getGuildId(), g = (0, h.useAppContext)(), S = (0, u.useStateFromStores)([E.default], () => {
    var e;
    return null != C && (null === (e = E.default.getMember(C, r.id)) || void 0 === e ? void 0 : e.premiumSince) != null
  }, [C, r.id]);
  o()(null != C, "Channel cannot be guildless");
  let _ = l.useCallback(e => {
      (0, f.openContextMenuLazy)(e, async () => {
        let {
          default: e
        } = await Promise.all([n.e("99387"), n.e("79695"), n.e("1502"), n.e("12435"), n.e("7717")]).then(n.bind(n, "757387"));
        return t => (0, a.jsx)(e, {
          ...t,
          user: r,
          guildId: C,
          channel: s,
          showMediaItems: !0,
          showStageChannelItems: !0,
          showChatItems: !1
        })
      }, {
        context: g
      })
    }, [r, C, s, g]),
    T = l.useCallback(e => (0, a.jsx)(p.default, {
      ...e,
      location: "AudienceTile",
      guildId: C,
      channelId: s.id,
      userId: r.id
    }), [s.id, C, r.id]);
  return (0, a.jsx)(c.Popout, {
    preload: () => (0, m.maybeFetchUserProfileForPopout)(r, {
      guildId: s.guild_id,
      channelId: s.id
    }),
    renderPopout: T,
    position: "right",
    spacing: 8,
    children: e => (0, a.jsx)(c.Clickable, {
      className: i()(I.tileContainer, {
        [I.singleIcon]: S || d,
        [I.doubleIcon]: S && d
      }),
      onContextMenu: _,
      ...e,
      children: (0, a.jsx)(N, {
        participant: t,
        guildId: C,
        channel: s,
        isPremium: S
      })
    })
  })
})