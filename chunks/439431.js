"use strict";
s.r(t), s.d(t, {
  default: function() {
    return R
  }
}), s("222007");
var a = s("37983"),
  l = s("884691"),
  n = s("414456"),
  r = s.n(n),
  o = s("759843"),
  i = s("446674"),
  c = s("77078"),
  u = s("731898"),
  d = s("818351"),
  f = s("21214"),
  E = s("622210"),
  p = s("72405"),
  h = s("697218"),
  m = s("145131"),
  N = s("476765"),
  _ = s("599110"),
  T = s("439932"),
  A = s("527441"),
  v = s("207354"),
  S = s("377052"),
  x = s("344491"),
  I = s("134760"),
  g = s("56235"),
  C = s("218971"),
  O = s("49111"),
  b = s("47212"),
  M = s("243338"),
  U = s("782340"),
  G = s("102166");

function R(e) {
  let t;
  let s = (0, N.useUID)(),
    {
      onSlideChange: n,
      ...R
    } = e,
    {
      onClose: y
    } = R,
    [j, D] = l.useState(!1),
    F = (0, i.useStateFromStores)([h.default], () => h.default.getCurrentUser()),
    L = null != F && null == F.nsfwAllowed,
    [k, P] = l.useState(L ? C.NUFSlides.AGE_GATE : C.NUFSlides.CHOOSE_TEMPLATE),
    [w, B] = l.useState(null);
  l.useEffect(() => {
    n(j ? C.NUFSlides.COMPLETE : k)
  }, [n, k, j]);
  let [H, V] = l.useState(null), [Y, z] = l.useState(null), [J, W] = l.useState(!1), K = (0, i.useStateFromStores)([A.default], () => A.default.getType() === g.NewUserTypes.INVITE_UNCLAIMED), Z = l.useCallback(e => {
    z(e), P(C.NUFSlides.CREATION_INTENT), _.default.track(O.AnalyticEvents.GUILD_TEMPLATE_SELECTED, {
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
      V(e), (null == Y ? void 0 : Y.id) === b.GuildTemplateId.CREATE ? P(C.NUFSlides.CHANNEL_PROMPT) : D(!0)
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
    ref: el,
    width: en
  } = (0, u.default)();
  if (j) return (0, a.jsx)(c.ModalRoot, {
    ...R,
    size: c.ModalSize.MEDIUM,
    className: r(G.modal, G.completed),
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
      className: r(G.content, (0, T.getThemeClass)(O.ThemeTypes.LIGHT)),
      ref: el,
      children: [(0, a.jsx)("div", {
        className: G.slidesContainer,
        children: (0, a.jsxs)(c.Slides, {
          activeSlide: k,
          onSlideReady: e => B(e),
          centered: !1,
          width: en,
          children: [(0, a.jsx)(c.Slide, {
            id: C.NUFSlides.AGE_GATE,
            children: (0, a.jsx)("div", {
              className: G.container,
              children: (0, a.jsx)(v.default, {
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
              className: r(G.container, G.shortFooter),
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
              className: r(G.container, G.standardFooter),
              children: X
            })
          }), (0, a.jsx)(c.Slide, {
            id: C.NUFSlides.CUSTOMIZE_GUILD,
            impressionName: o.ImpressionNames.GUILD_ADD_CUSTOMIZE,
            impressionProperties: er,
            children: (0, a.jsx)("div", {
              className: r(G.container, G.standardFooter),
              children: Q
            })
          }), (0, a.jsx)(c.Slide, {
            id: C.NUFSlides.CHANNEL_PROMPT,
            impressionName: o.ImpressionNames.GUILD_ADD_CHANNEL_PROMPT,
            impressionProperties: er,
            children: (0, a.jsx)("div", {
              className: r(G.container, G.standardFooter),
              children: ee
            })
          }), (0, a.jsx)(c.Slide, {
            id: C.NUFSlides.JOIN_GUILD,
            impressionName: o.ImpressionNames.GUILD_ADD_JOIN,
            impressionProperties: er,
            children: (0, a.jsx)("div", {
              className: r(G.container, G.standardFooter),
              children: es
            })
          })]
        })
      }), k !== C.NUFSlides.AGE_GATE ? (0, a.jsx)(c.ModalCloseButton, {
        onClick: y,
        className: G.closeButton
      }) : null, k === C.NUFSlides.CHOOSE_TEMPLATE ? (0, a.jsx)(c.ModalFooter, {
        justify: m.default.Justify.BETWEEN,
        className: r(G.footer, G.join),
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
        justify: m.default.Justify.BETWEEN,
        className: G.footer,
        children: t
      }) : null]
    })]
  })
}