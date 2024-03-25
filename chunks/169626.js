"use strict";
n.r(t), n.d(t, {
  default: function() {
    return C
  }
}), n("222007");
var l = n("37983"),
  r = n("884691"),
  s = n("627445"),
  a = n.n(s),
  i = n("759843"),
  o = n("77078"),
  u = n("84339"),
  c = n("599110"),
  d = n("818351"),
  I = n("21214"),
  p = n("622210"),
  E = n("72405"),
  _ = n("110337"),
  S = n("243338"),
  f = n("49111"),
  T = n("784505");

function C(e) {
  let {
    transitionState: t,
    initialSlide: n = S.CreateGuildSlideTypes.GUILD_TEMPLATES,
    onSuccess: s,
    onClose: C,
    onSlideChange: N,
    hasJoinButton: L
  } = e, [A, m] = r.useState(n), h = (0, u.default)(A), [g, D] = r.useState(null), [R, G] = r.useState(null), [U, M] = r.useState(null), [O, y] = r.useState(!1);
  r.useEffect(() => {
    m(n)
  }, [m, n]), r.useEffect(() => {
    A !== h && N(A)
  }, [N, A, h]);
  let v = r.useCallback(e => {
      m(S.CreateGuildSlideTypes.CREATION_INTENT), G(e), c.default.track(f.AnalyticEvents.GUILD_TEMPLATE_SELECTED, {
        template_name: e.id,
        template_code: e.code
      })
    }, []),
    x = r.useCallback(e => {
      y(e === S.GuildCreationIntents.COMMUNITY), m(S.CreateGuildSlideTypes.CUSTOMIZE_GUILD)
    }, []),
    w = r.useCallback(() => m(S.CreateGuildSlideTypes.JOIN_GUILD), [m]),
    P = r.useCallback(() => {
      if (A === S.CreateGuildSlideTypes.CUSTOMIZE_GUILD) {
        m(S.CreateGuildSlideTypes.CREATION_INTENT);
        return
      }
      m(S.CreateGuildSlideTypes.GUILD_TEMPLATES), G(null)
    }, [A]),
    b = r.useCallback(e => {
      M(e), s(e)
    }, [s, M]),
    j = r.useCallback(() => {
      a(null != U, "handleSuccess called before onGuildCreated"), s(U)
    }, [s, U]),
    k = {
      impression_group: i.ImpressionGroups.GUILD_ADD_FLOW
    };
  return (0, l.jsx)("div", {
    children: (0, l.jsx)(o.ModalRoot, {
      transitionState: t,
      disableTrack: !0,
      children: (0, l.jsx)("div", {
        className: T.container,
        children: (0, l.jsxs)(o.Slides, {
          activeSlide: A,
          width: 440,
          onSlideReady: e => D(e),
          children: [(0, l.jsx)(o.Slide, {
            id: S.CreateGuildSlideTypes.GUILD_TEMPLATES,
            impressionName: i.ImpressionNames.GUILD_ADD_LANDING,
            impressionProperties: k,
            children: (0, l.jsx)(E.default, {
              isNewUser: !1,
              onJoin: L ? w : void 0,
              onChooseTemplate: v,
              onClose: C
            })
          }), (0, l.jsx)(o.Slide, {
            id: S.CreateGuildSlideTypes.CREATION_INTENT,
            impressionName: i.ImpressionNames.GUILD_ADD_INTENT_SELECTION,
            impressionProperties: k,
            children: (0, l.jsx)(I.default, {
              onClose: C,
              onBack: P,
              onCreationIntentChosen: x
            })
          }), (0, l.jsx)(o.Slide, {
            id: S.CreateGuildSlideTypes.CUSTOMIZE_GUILD,
            impressionName: i.ImpressionNames.GUILD_ADD_CUSTOMIZE,
            impressionProperties: k,
            children: (0, l.jsx)(p.default, {
              guildTemplate: R,
              onGuildCreated: b,
              onClose: C,
              onBack: P,
              isSlideReady: g === S.CreateGuildSlideTypes.CUSTOMIZE_GUILD,
              isCommunity: O
            })
          }), (0, l.jsx)(o.Slide, {
            id: S.CreateGuildSlideTypes.CHANNEL_PROMPT,
            impressionName: i.ImpressionNames.GUILD_ADD_CHANNEL_PROMPT,
            impressionProperties: k,
            children: (0, l.jsx)(d.default, {
              createdGuildId: U,
              onClose: C,
              onChannelPromptCompleted: j,
              isSlideReady: g === S.CreateGuildSlideTypes.CHANNEL_PROMPT
            })
          }), (0, l.jsx)(o.Slide, {
            id: S.CreateGuildSlideTypes.JOIN_GUILD,
            impressionName: i.ImpressionNames.GUILD_ADD_JOIN,
            impressionProperties: k,
            children: (0, l.jsx)(_.default, {
              onBack: P,
              onClose: C,
              isSlideReady: g === S.CreateGuildSlideTypes.JOIN_GUILD
            })
          })]
        })
      })
    })
  })
}