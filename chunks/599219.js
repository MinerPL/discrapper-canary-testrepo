"use strict";
s.r(t), s.d(t, {
  default: function() {
    return R
  }
}), s("47120");
var a = s("735250"),
  n = s("470079"),
  l = s("803997"),
  r = s.n(l),
  o = s("990547"),
  i = s("442837"),
  c = s("481060"),
  u = s("393238"),
  d = s("215292"),
  f = s("382086"),
  E = s("996453"),
  p = s("446706"),
  m = s("594174"),
  h = s("285952"),
  N = s("153124"),
  _ = s("626135"),
  T = s("792125"),
  v = s("179645"),
  A = s("436046"),
  S = s("963209"),
  x = s("436457"),
  I = s("877758"),
  g = s("701476"),
  C = s("785997"),
  b = s("981631"),
  O = s("834891"),
  M = s("675999"),
  U = s("689938"),
  G = s("226569");

function R(e) {
  let t;
  let s = (0, N.useUID)(),
    {
      onSlideChange: l,
      ...R
    } = e,
    {
      onClose: y
    } = R,
    [j, D] = n.useState(!1),
    F = (0, i.useStateFromStores)([m.default], () => m.default.getCurrentUser()),
    L = null != F && null == F.nsfwAllowed,
    [k, P] = n.useState(L ? C.NUFSlides.AGE_GATE : C.NUFSlides.CHOOSE_TEMPLATE),
    [w, B] = n.useState(null);
  n.useEffect(() => {
    l(j ? C.NUFSlides.COMPLETE : k)
  }, [l, k, j]);
  let [H, V] = n.useState(null), [Y, z] = n.useState(null), [J, W] = n.useState(!1), K = (0, i.useStateFromStores)([v.default], () => v.default.getType() === g.NewUserTypes.INVITE_UNCLAIMED), Z = n.useCallback(e => {
    z(e), P(C.NUFSlides.CREATION_INTENT), _.default.track(b.AnalyticEvents.GUILD_TEMPLATE_SELECTED, {
      template_name: e.label,
      template_code: e.code
    })
  }, [z, P]), {
    content: X,
    footer: q
  } = (0, f.useCreationIntentSlide)({
    hasFooter: !1,
    onBack: () => {
      z(null), P(C.NUFSlides.CHOOSE_TEMPLATE)
    },
    onCreationIntentChosen: e => {
      W(e === M.GuildCreationIntents.COMMUNITY), P(C.NUFSlides.CUSTOMIZE_GUILD)
    }
  }), {
    content: Q,
    footer: $
  } = (0, E.useCustomizeGuildSlide)({
    guildTemplate: Y,
    titleClassName: G.customizeGuildTitle,
    hasFooter: !1,
    onGuildCreated: e => {
      V(e), (null == Y ? void 0 : Y.id) === O.GuildTemplateId.CREATE ? P(C.NUFSlides.CHANNEL_PROMPT) : D(!0)
    },
    onBack: () => {
      P(C.NUFSlides.CREATION_INTENT)
    },
    isSlideReady: w === C.NUFSlides.CUSTOMIZE_GUILD,
    isCommunity: J
  }), {
    content: ee,
    footer: et
  } = (0, d.useChannelPromptSlide)({
    createdGuildId: H,
    hasFooter: !1,
    onChannelPromptCompleted: () => {
      D(!0)
    },
    isSlideReady: w === C.NUFSlides.CHANNEL_PROMPT
  }), {
    content: es,
    footer: ea
  } = (0, x.default)({
    onBack: () => P(C.NUFSlides.CHOOSE_TEMPLATE),
    onComplete: () => {
      y()
    },
    onConnect: y,
    isSlideReady: w === C.NUFSlides.JOIN_GUILD
  });
  switch (k) {
    case C.NUFSlides.CUSTOMIZE_GUILD:
      t = $;
      break;
    case C.NUFSlides.CHANNEL_PROMPT:
      t = et;
      break;
    case C.NUFSlides.JOIN_GUILD:
      t = ea;
      break;
    case C.NUFSlides.CREATION_INTENT:
      t = q
  }
  let {
    ref: en,
    width: el
  } = (0, u.default)();
  if (j) return (0, a.jsx)(c.ModalRoot, {
    ...R,
    size: c.ModalSize.MEDIUM,
    className: r()(G.modal, G.completed),
    "aria-labelledby": s,
    children: (0, a.jsx)(S.default, {
      onComplete: y
    })
  });
  let er = {
    impression_group: o.ImpressionGroups.GUILD_ADD_NUF
  };
  return (0, a.jsxs)(c.ModalRoot, {
    ...R,
    size: c.ModalSize.MEDIUM,
    className: G.modal,
    "aria-labelledby": s,
    children: [(0, a.jsx)("div", {
      className: G.sidebar,
      children: (0, a.jsx)(I.default, {
        step: k
      })
    }), (0, a.jsxs)("div", {
      className: r()(G.content, (0, T.getThemeClass)(b.ThemeTypes.LIGHT)),
      ref: en,
      children: [(0, a.jsx)("div", {
        className: G.slidesContainer,
        children: (0, a.jsxs)(c.Slides, {
          activeSlide: k,
          onSlideReady: e => B(e),
          centered: !1,
          width: el,
          children: [(0, a.jsx)(c.Slide, {
            id: C.NUFSlides.AGE_GATE,
            children: (0, a.jsx)("div", {
              className: G.container,
              children: (0, a.jsx)(A.default, {
                onComplete: () => {
                  K ? y() : P(C.NUFSlides.CHOOSE_TEMPLATE)
                },
                onClose: y
              })
            })
          }), (0, a.jsx)(c.Slide, {
            id: C.NUFSlides.CHOOSE_TEMPLATE,
            impressionName: o.ImpressionNames.GUILD_ADD_LANDING,
            impressionProperties: er,
            children: (0, a.jsx)("div", {
              className: r()(G.container, G.shortFooter),
              children: (0, a.jsx)(p.default, {
                className: G.templates,
                onChooseTemplate: Z,
                isNewUser: !0
              })
            })
          }), (0, a.jsx)(c.Slide, {
            id: C.NUFSlides.CREATION_INTENT,
            impressionName: o.ImpressionNames.GUILD_ADD_INTENT_SELECTION,
            impressionProperties: er,
            children: (0, a.jsx)("div", {
              className: r()(G.container, G.standardFooter),
              children: X
            })
          }), (0, a.jsx)(c.Slide, {
            id: C.NUFSlides.CUSTOMIZE_GUILD,
            impressionName: o.ImpressionNames.GUILD_ADD_CUSTOMIZE,
            impressionProperties: er,
            children: (0, a.jsx)("div", {
              className: r()(G.container, G.standardFooter),
              children: Q
            })
          }), (0, a.jsx)(c.Slide, {
            id: C.NUFSlides.CHANNEL_PROMPT,
            impressionName: o.ImpressionNames.GUILD_ADD_CHANNEL_PROMPT,
            impressionProperties: er,
            children: (0, a.jsx)("div", {
              className: r()(G.container, G.standardFooter),
              children: ee
            })
          }), (0, a.jsx)(c.Slide, {
            id: C.NUFSlides.JOIN_GUILD,
            impressionName: o.ImpressionNames.GUILD_ADD_JOIN,
            impressionProperties: er,
            children: (0, a.jsx)("div", {
              className: r()(G.container, G.standardFooter),
              children: es
            })
          })]
        })
      }), k !== C.NUFSlides.AGE_GATE ? (0, a.jsx)(c.ModalCloseButton, {
        onClick: y,
        className: G.closeButton
      }) : null, k === C.NUFSlides.CHOOSE_TEMPLATE ? (0, a.jsx)(c.ModalFooter, {
        justify: h.default.Justify.BETWEEN,
        className: r()(G.footer, G.join),
        children: (0, a.jsx)(c.Anchor, {
          className: G.joinCTA,
          onClick: () => {
            P(C.NUFSlides.JOIN_GUILD)
          },
          children: (0, a.jsxs)(c.Text, {
            variant: "text-sm/medium",
            className: G.joinCTA,
            children: [U.default.Messages.NUF_HAVE_AN_INVITE_ALREADY, " ", U.default.Messages.JOIN_SERVER_BUTTON_CTA]
          })
        })
      }) : null, null != t ? (0, a.jsx)(c.ModalFooter, {
        justify: h.default.Justify.BETWEEN,
        className: G.footer,
        children: t
      }) : null]
    })]
  })
}