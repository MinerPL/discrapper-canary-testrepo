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
  f = l("622210"),
  E = l("72405"),
  p = l("110337"),
  _ = l("243338"),
  S = l("49111"),
  T = l("91140");

function C(e) {
  let {
    transitionState: t,
    initialSlide: l = _.CreateGuildSlideTypes.GUILD_TEMPLATES,
    onSuccess: s,
    onClose: C,
    onSlideChange: N,
    hasJoinButton: m
  } = e, [A, L] = r.useState(l), h = (0, u.default)(A), [g, R] = r.useState(null), [D, G] = r.useState(null), [U, M] = r.useState(null), [O, y] = r.useState(!1);
  r.useEffect(() => {
    L(l)
  }, [L, l]), r.useEffect(() => {
    A !== h && N(A)
  }, [N, A, h]);
  let v = r.useCallback(e => {
      L(_.CreateGuildSlideTypes.CREATION_INTENT), G(e), c.default.track(S.AnalyticEvents.GUILD_TEMPLATE_SELECTED, {
        template_name: e.id,
        template_code: e.code
      })
    }, []),
    x = r.useCallback(e => {
      y(e), L(_.CreateGuildSlideTypes.CUSTOMIZE_GUILD)
    }, []),
    w = r.useCallback(() => L(_.CreateGuildSlideTypes.JOIN_GUILD), [L]),
    b = r.useCallback(() => {
      if (A === _.CreateGuildSlideTypes.CUSTOMIZE_GUILD) {
        L(_.CreateGuildSlideTypes.CREATION_INTENT);
        return
      }
      L(_.CreateGuildSlideTypes.GUILD_TEMPLATES), G(null)
    }, [A]),
    P = r.useCallback(e => {
      M(e), s(e)
    }, [s, M]),
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
          activeSlide: A,
          width: 440,
          onSlideReady: e => R(e),
          children: [(0, n.jsx)(o.Slide, {
            id: _.CreateGuildSlideTypes.GUILD_TEMPLATES,
            impressionName: i.ImpressionNames.GUILD_ADD_LANDING,
            impressionProperties: k,
            children: (0, n.jsx)(E.default, {
              isNewUser: !1,
              onJoin: m ? w : void 0,
              onChooseTemplate: v,
              onClose: C
            })
          }), (0, n.jsx)(o.Slide, {
            id: _.CreateGuildSlideTypes.CREATION_INTENT,
            impressionName: i.ImpressionNames.GUILD_ADD_INTENT_SELECTION,
            impressionProperties: k,
            children: (0, n.jsx)(I.default, {
              onClose: C,
              onBack: b,
              onCreationIntentChosen: x
            })
          }), (0, n.jsx)(o.Slide, {
            id: _.CreateGuildSlideTypes.CUSTOMIZE_GUILD,
            impressionName: i.ImpressionNames.GUILD_ADD_CUSTOMIZE,
            impressionProperties: k,
            children: (0, n.jsx)(f.default, {
              guildTemplate: D,
              onGuildCreated: P,
              onClose: C,
              onBack: b,
              isSlideReady: g === _.CreateGuildSlideTypes.CUSTOMIZE_GUILD,
              isCommunity: O
            })
          }), (0, n.jsx)(o.Slide, {
            id: _.CreateGuildSlideTypes.CHANNEL_PROMPT,
            impressionName: i.ImpressionNames.GUILD_ADD_CHANNEL_PROMPT,
            impressionProperties: k,
            children: (0, n.jsx)(d.default, {
              createdGuildId: U,
              onClose: C,
              onChannelPromptCompleted: j,
              isSlideReady: g === _.CreateGuildSlideTypes.CHANNEL_PROMPT
            })
          }), (0, n.jsx)(o.Slide, {
            id: _.CreateGuildSlideTypes.JOIN_GUILD,
            impressionName: i.ImpressionNames.GUILD_ADD_JOIN,
            impressionProperties: k,
            children: (0, n.jsx)(p.default, {
              onBack: b,
              onClose: C,
              isSlideReady: g === _.CreateGuildSlideTypes.JOIN_GUILD
            })
          })]
        })
      })
    })
  })
}