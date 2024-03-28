"use strict";
l.r(t), l.d(t, {
  default: function() {
    return p
  }
}), l("47120");
var n = l("735250"),
  s = l("470079"),
  a = l("512722"),
  r = l.n(a),
  i = l("990547"),
  o = l("481060"),
  u = l("110924"),
  c = l("626135"),
  d = l("215292"),
  _ = l("382086"),
  I = l("996453"),
  E = l("446706"),
  T = l("867581"),
  S = l("675999"),
  N = l("981631"),
  C = l("813540");

function p(e) {
  let {
    transitionState: t,
    initialSlide: l = S.CreateGuildSlideTypes.GUILD_TEMPLATES,
    onSuccess: a,
    onClose: p,
    onSlideChange: f,
    hasJoinButton: A
  } = e, [L, D] = s.useState(l), m = (0, u.default)(L), [G, O] = s.useState(null), [U, R] = s.useState(null), [M, g] = s.useState(null), [v, y] = s.useState(!1);
  s.useEffect(() => {
    D(l)
  }, [D, l]), s.useEffect(() => {
    L !== m && f(L)
  }, [f, L, m]);
  let h = s.useCallback(e => {
      D(S.CreateGuildSlideTypes.CREATION_INTENT), R(e), c.default.track(N.AnalyticEvents.GUILD_TEMPLATE_SELECTED, {
        template_name: e.id,
        template_code: e.code
      })
    }, []),
    w = s.useCallback(e => {
      y(e === S.GuildCreationIntents.COMMUNITY), D(S.CreateGuildSlideTypes.CUSTOMIZE_GUILD)
    }, []),
    x = s.useCallback(() => D(S.CreateGuildSlideTypes.JOIN_GUILD), [D]),
    P = s.useCallback(() => {
      if (L === S.CreateGuildSlideTypes.CUSTOMIZE_GUILD) {
        D(S.CreateGuildSlideTypes.CREATION_INTENT);
        return
      }
      D(S.CreateGuildSlideTypes.GUILD_TEMPLATES), R(null)
    }, [L]),
    F = s.useCallback(e => {
      g(e), a(e)
    }, [a, g]),
    k = s.useCallback(() => {
      r()(null != M, "handleSuccess called before onGuildCreated"), a(M)
    }, [a, M]),
    j = {
      impression_group: i.ImpressionGroups.GUILD_ADD_FLOW
    };
  return (0, n.jsx)("div", {
    children: (0, n.jsx)(o.ModalRoot, {
      transitionState: t,
      disableTrack: !0,
      children: (0, n.jsx)("div", {
        className: C.container,
        children: (0, n.jsxs)(o.Slides, {
          activeSlide: L,
          width: 440,
          onSlideReady: e => O(e),
          children: [(0, n.jsx)(o.Slide, {
            id: S.CreateGuildSlideTypes.GUILD_TEMPLATES,
            impressionName: i.ImpressionNames.GUILD_ADD_LANDING,
            impressionProperties: j,
            children: (0, n.jsx)(E.default, {
              isNewUser: !1,
              onJoin: A ? x : void 0,
              onChooseTemplate: h,
              onClose: p
            })
          }), (0, n.jsx)(o.Slide, {
            id: S.CreateGuildSlideTypes.CREATION_INTENT,
            impressionName: i.ImpressionNames.GUILD_ADD_INTENT_SELECTION,
            impressionProperties: j,
            children: (0, n.jsx)(_.default, {
              onClose: p,
              onBack: P,
              onCreationIntentChosen: w
            })
          }), (0, n.jsx)(o.Slide, {
            id: S.CreateGuildSlideTypes.CUSTOMIZE_GUILD,
            impressionName: i.ImpressionNames.GUILD_ADD_CUSTOMIZE,
            impressionProperties: j,
            children: (0, n.jsx)(I.default, {
              guildTemplate: U,
              onGuildCreated: F,
              onClose: p,
              onBack: P,
              isSlideReady: G === S.CreateGuildSlideTypes.CUSTOMIZE_GUILD,
              isCommunity: v
            })
          }), (0, n.jsx)(o.Slide, {
            id: S.CreateGuildSlideTypes.CHANNEL_PROMPT,
            impressionName: i.ImpressionNames.GUILD_ADD_CHANNEL_PROMPT,
            impressionProperties: j,
            children: (0, n.jsx)(d.default, {
              createdGuildId: M,
              onClose: p,
              onChannelPromptCompleted: k,
              isSlideReady: G === S.CreateGuildSlideTypes.CHANNEL_PROMPT
            })
          }), (0, n.jsx)(o.Slide, {
            id: S.CreateGuildSlideTypes.JOIN_GUILD,
            impressionName: i.ImpressionNames.GUILD_ADD_JOIN,
            impressionProperties: j,
            children: (0, n.jsx)(T.default, {
              onBack: P,
              onClose: p,
              isSlideReady: G === S.CreateGuildSlideTypes.JOIN_GUILD
            })
          })]
        })
      })
    })
  })
}