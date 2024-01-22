"use strict";
l.r(t), l.d(t, {
  default: function() {
    return N
  }
}), l("222007");
var n = l("37983"),
  r = l("884691"),
  a = l("627445"),
  s = l.n(a),
  i = l("759843"),
  o = l("77078"),
  u = l("84339"),
  c = l("599110"),
  d = l("439932"),
  f = l("519374"),
  I = l("818351"),
  E = l("21214"),
  _ = l("622210"),
  p = l("72405"),
  T = l("110337"),
  S = l("243338"),
  C = l("49111"),
  m = l("91140");

function N(e) {
  let {
    transitionState: t,
    initialSlide: l = S.CreateGuildSlideTypes.GUILD_TEMPLATES,
    onSuccess: a,
    onClose: N,
    onSlideChange: A,
    hasJoinButton: L
  } = e, [h, g] = r.useState(l), R = (0, u.default)(h), [D, G] = r.useState(null), [U, M] = r.useState(null), [O, v] = r.useState(null), [y, x] = r.useState(!1), {
    forceLightTheme: w
  } = (0, f.default)({
    location: "CreateGuildModal"
  });
  r.useEffect(() => {
    g(l)
  }, [g, l]), r.useEffect(() => {
    h !== R && A(h)
  }, [A, h, R]);
  let b = r.useCallback(e => {
      g(S.CreateGuildSlideTypes.CREATION_INTENT), M(e), c.default.track(C.AnalyticEvents.GUILD_TEMPLATE_SELECTED, {
        template_name: e.id,
        template_code: e.code
      })
    }, []),
    P = r.useCallback(e => {
      x(e), g(S.CreateGuildSlideTypes.CUSTOMIZE_GUILD)
    }, []),
    j = r.useCallback(() => g(S.CreateGuildSlideTypes.JOIN_GUILD), [g]),
    k = r.useCallback(() => {
      if (h === S.CreateGuildSlideTypes.CUSTOMIZE_GUILD) {
        g(S.CreateGuildSlideTypes.CREATION_INTENT);
        return
      }
      g(S.CreateGuildSlideTypes.GUILD_TEMPLATES), M(null)
    }, [h]),
    F = r.useCallback(e => {
      v(e), a(e)
    }, [a, v]),
    V = r.useCallback(() => {
      s(null != O, "handleSuccess called before onGuildCreated"), a(O)
    }, [a, O]),
    B = {
      impression_group: i.ImpressionGroups.GUILD_ADD_FLOW
    };
  return (0, n.jsx)("div", {
    className: w ? (0, d.getThemeClass)(C.ThemeTypes.LIGHT) : void 0,
    children: (0, n.jsx)(o.ModalRoot, {
      transitionState: t,
      disableTrack: !0,
      children: (0, n.jsx)("div", {
        className: m.container,
        children: (0, n.jsxs)(o.Slides, {
          activeSlide: h,
          width: 440,
          onSlideReady: e => G(e),
          children: [(0, n.jsx)(o.Slide, {
            id: S.CreateGuildSlideTypes.GUILD_TEMPLATES,
            impressionName: i.ImpressionNames.GUILD_ADD_LANDING,
            impressionProperties: B,
            children: (0, n.jsx)(p.default, {
              isNewUser: !1,
              onJoin: L ? j : void 0,
              onChooseTemplate: b,
              onClose: N
            })
          }), (0, n.jsx)(o.Slide, {
            id: S.CreateGuildSlideTypes.CREATION_INTENT,
            impressionName: i.ImpressionNames.GUILD_ADD_INTENT_SELECTION,
            impressionProperties: B,
            children: (0, n.jsx)(E.default, {
              onClose: N,
              onBack: k,
              onCreationIntentChosen: P
            })
          }), (0, n.jsx)(o.Slide, {
            id: S.CreateGuildSlideTypes.CUSTOMIZE_GUILD,
            impressionName: i.ImpressionNames.GUILD_ADD_CUSTOMIZE,
            impressionProperties: B,
            children: (0, n.jsx)(_.default, {
              guildTemplate: U,
              onGuildCreated: F,
              onClose: N,
              onBack: k,
              isSlideReady: D === S.CreateGuildSlideTypes.CUSTOMIZE_GUILD,
              isCommunity: y
            })
          }), (0, n.jsx)(o.Slide, {
            id: S.CreateGuildSlideTypes.CHANNEL_PROMPT,
            impressionName: i.ImpressionNames.GUILD_ADD_CHANNEL_PROMPT,
            impressionProperties: B,
            children: (0, n.jsx)(I.default, {
              createdGuildId: O,
              onClose: N,
              onChannelPromptCompleted: V,
              isSlideReady: D === S.CreateGuildSlideTypes.CHANNEL_PROMPT
            })
          }), (0, n.jsx)(o.Slide, {
            id: S.CreateGuildSlideTypes.JOIN_GUILD,
            impressionName: i.ImpressionNames.GUILD_ADD_JOIN,
            impressionProperties: B,
            children: (0, n.jsx)(T.default, {
              onBack: k,
              onClose: N,
              isSlideReady: D === S.CreateGuildSlideTypes.JOIN_GUILD
            })
          })]
        })
      })
    })
  })
}