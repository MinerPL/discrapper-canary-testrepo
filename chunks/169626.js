"use strict";
l.r(t), l.d(t, {
  default: function() {
    return C
  }
}), l("222007");
var n = l("37983"),
  r = l("884691"),
  s = l("627445"),
  a = l.n(s),
  i = l("759843"),
  o = l("77078"),
  u = l("84339"),
  c = l("599110"),
  d = l("818351"),
  I = l("21214"),
  p = l("622210"),
  _ = l("72405"),
  E = l("110337"),
  f = l("243338"),
  S = l("49111"),
  T = l("784505");

function C(e) {
  let {
    transitionState: t,
    initialSlide: l = f.CreateGuildSlideTypes.GUILD_TEMPLATES,
    onSuccess: s,
    onClose: C,
    onSlideChange: N,
    hasJoinButton: A
  } = e, [L, m] = r.useState(l), h = (0, u.default)(L), [g, D] = r.useState(null), [R, G] = r.useState(null), [U, O] = r.useState(null), [M, v] = r.useState(!1);
  r.useEffect(() => {
    m(l)
  }, [m, l]), r.useEffect(() => {
    L !== h && N(L)
  }, [N, L, h]);
  let y = r.useCallback(e => {
      m(f.CreateGuildSlideTypes.CREATION_INTENT), G(e), c.default.track(S.AnalyticEvents.GUILD_TEMPLATE_SELECTED, {
        template_name: e.id,
        template_code: e.code
      })
    }, []),
    x = r.useCallback(e => {
      v(e), m(f.CreateGuildSlideTypes.CUSTOMIZE_GUILD)
    }, []),
    w = r.useCallback(() => m(f.CreateGuildSlideTypes.JOIN_GUILD), [m]),
    P = r.useCallback(() => {
      if (L === f.CreateGuildSlideTypes.CUSTOMIZE_GUILD) {
        m(f.CreateGuildSlideTypes.CREATION_INTENT);
        return
      }
      m(f.CreateGuildSlideTypes.GUILD_TEMPLATES), G(null)
    }, [L]),
    b = r.useCallback(e => {
      O(e), s(e)
    }, [s, O]),
    j = r.useCallback(() => {
      a(null != U, "handleSuccess called before onGuildCreated"), s(U)
    }, [s, U]),
    k = {
      impression_group: i.ImpressionGroups.GUILD_ADD_FLOW
    };
  return (0, n.jsx)("div", {
    children: (0, n.jsx)(o.ModalRoot, {
      transitionState: t,
      disableTrack: !0,
      children: (0, n.jsx)("div", {
        className: T.container,
        children: (0, n.jsxs)(o.Slides, {
          activeSlide: L,
          width: 440,
          onSlideReady: e => D(e),
          children: [(0, n.jsx)(o.Slide, {
            id: f.CreateGuildSlideTypes.GUILD_TEMPLATES,
            impressionName: i.ImpressionNames.GUILD_ADD_LANDING,
            impressionProperties: k,
            children: (0, n.jsx)(_.default, {
              isNewUser: !1,
              onJoin: A ? w : void 0,
              onChooseTemplate: y,
              onClose: C
            })
          }), (0, n.jsx)(o.Slide, {
            id: f.CreateGuildSlideTypes.CREATION_INTENT,
            impressionName: i.ImpressionNames.GUILD_ADD_INTENT_SELECTION,
            impressionProperties: k,
            children: (0, n.jsx)(I.default, {
              onClose: C,
              onBack: P,
              onCreationIntentChosen: x
            })
          }), (0, n.jsx)(o.Slide, {
            id: f.CreateGuildSlideTypes.CUSTOMIZE_GUILD,
            impressionName: i.ImpressionNames.GUILD_ADD_CUSTOMIZE,
            impressionProperties: k,
            children: (0, n.jsx)(p.default, {
              guildTemplate: R,
              onGuildCreated: b,
              onClose: C,
              onBack: P,
              isSlideReady: g === f.CreateGuildSlideTypes.CUSTOMIZE_GUILD,
              isCommunity: M
            })
          }), (0, n.jsx)(o.Slide, {
            id: f.CreateGuildSlideTypes.CHANNEL_PROMPT,
            impressionName: i.ImpressionNames.GUILD_ADD_CHANNEL_PROMPT,
            impressionProperties: k,
            children: (0, n.jsx)(d.default, {
              createdGuildId: U,
              onClose: C,
              onChannelPromptCompleted: j,
              isSlideReady: g === f.CreateGuildSlideTypes.CHANNEL_PROMPT
            })
          }), (0, n.jsx)(o.Slide, {
            id: f.CreateGuildSlideTypes.JOIN_GUILD,
            impressionName: i.ImpressionNames.GUILD_ADD_JOIN,
            impressionProperties: k,
            children: (0, n.jsx)(E.default, {
              onBack: P,
              onClose: C,
              isSlideReady: g === f.CreateGuildSlideTypes.JOIN_GUILD
            })
          })]
        })
      })
    })
  })
}