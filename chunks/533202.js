"use strict";
s.r(t), s.d(t, {
  default: function() {
    return L
  }
}), s("47120");
var a = s("735250"),
  l = s("470079"),
  i = s("990547"),
  n = s("481060"),
  d = s("458879"),
  r = s("996453"),
  o = s("601964"),
  u = s("792125"),
  c = s("99325"),
  C = s("454432"),
  m = s("492749"),
  f = s("66626"),
  T = s("892322"),
  _ = s("404242"),
  E = s("486527"),
  x = s("981631"),
  I = s("20114");

function L(e) {
  let {
    directoryChannelId: t,
    transitionState: s,
    initialSlide: L = E.CreateOrAddGuildSlideTypes.CHOOSE_GUILD,
    onClose: h,
    directoryGuildName: g,
    directoryGuildId: N,
    currentCategoryId: S
  } = e, [M, p] = l.useState(L), [A, j] = l.useState(null), [U, B] = l.useState(null), [D, H] = l.useState(null), [O, G] = l.useState(null), [R, v] = l.useState(null), [y, b] = l.useState(""), [F, k] = l.useState(null != S ? S : E.DirectoryEntryCategories.UNCATEGORIZED), [Z, V] = l.useState(!1), {
    availableGuilds: w,
    addedGuilds: P,
    loading: z
  } = (0, C.default)(N, t);
  l.useEffect(() => {
    p(L)
  }, [p, L]);
  let Y = async () => {
    let e = R;
    if (!Z) {
      if (null == D || null == U) return;
      let t = await d.default.createGuildFromTemplate(D, O, U);
      v(e = new o.default(t))
    }
    null != e && (await c.addDirectoryGuildEntry(t, e.id, y, F), p(E.CreateOrAddGuildSlideTypes.CONFIRMATION))
  }, X = {
    impression_group: i.ImpressionGroups.DIRECTORY_GUILD_ADD_FLOW
  };
  return (0, a.jsx)("div", {
    className: (0, u.getThemeClass)(x.ThemeTypes.LIGHT),
    children: (0, a.jsx)(n.ModalRoot, {
      transitionState: s,
      disableTrack: !0,
      children: (0, a.jsx)("div", {
        className: I.container,
        children: (0, a.jsxs)(n.Slides, {
          activeSlide: M,
          width: 440,
          onSlideReady: e => j(e),
          children: [(0, a.jsx)(n.Slide, {
            id: E.CreateOrAddGuildSlideTypes.CHOOSE_GUILD,
            impressionName: i.ImpressionNames.HUB_EXISTING_GUILD_CHOOSE,
            impressionProperties: X,
            children: (0, a.jsx)(m.default, {
              directoryChannelId: t,
              directoryGuildName: g,
              onGuildChosen: e => {
                V(!0), p(E.CreateOrAddGuildSlideTypes.CUSTOMIZE_EXISTING_GUILD), v(e)
              },
              handleChooseCreate: () => {
                V(!1), p(E.CreateOrAddGuildSlideTypes.GUILD_TEMPLATES)
              },
              onClose: h,
              availableGuilds: w,
              addedGuilds: P,
              loading: z
            })
          }), (0, a.jsx)(n.Slide, {
            id: E.CreateOrAddGuildSlideTypes.GUILD_TEMPLATES,
            impressionName: i.ImpressionNames.HUB_CREATE_GUILD_TEMPLATE,
            impressionProperties: X,
            children: (0, a.jsx)(_.default, {
              directoryGuildName: g,
              onChooseTemplate: e => {
                V(!1), p(E.CreateOrAddGuildSlideTypes.CUSTOMIZE_NEW_GUILD), B(e)
              },
              onClose: h,
              onBack: () => p(E.CreateOrAddGuildSlideTypes.CHOOSE_GUILD)
            })
          }), (0, a.jsx)(n.Slide, {
            id: E.CreateOrAddGuildSlideTypes.CUSTOMIZE_NEW_GUILD,
            impressionName: i.ImpressionNames.HUB_CREATE_GUILD_CUSTOMIZE,
            impressionProperties: X,
            children: (0, a.jsx)(r.default, {
              guildTemplate: U,
              onHubGuildInfoSet: (e, t) => {
                H(e), G(t), p(E.CreateOrAddGuildSlideTypes.CUSTOMIZE_EXISTING_GUILD)
              },
              onClose: h,
              onBack: () => p(E.CreateOrAddGuildSlideTypes.GUILD_TEMPLATES),
              isSlideReady: A === E.CreateOrAddGuildSlideTypes.CUSTOMIZE_NEW_GUILD
            })
          }), (0, a.jsx)(n.Slide, {
            id: E.CreateOrAddGuildSlideTypes.CUSTOMIZE_EXISTING_GUILD,
            impressionName: i.ImpressionNames.HUB_EXISTING_GUILD_CUSTOMIZE,
            impressionProperties: X,
            children: (0, a.jsx)(f.default, {
              directoryChannelId: t,
              description: y,
              onDescriptionChange: b,
              categoryId: F,
              onCategoryIdChange: k,
              onSubmit: Y,
              onBack: () => p(Z ? E.CreateOrAddGuildSlideTypes.CHOOSE_GUILD : E.CreateOrAddGuildSlideTypes.CUSTOMIZE_NEW_GUILD),
              onClose: h
            })
          }), (0, a.jsx)(n.Slide, {
            id: E.CreateOrAddGuildSlideTypes.CONFIRMATION,
            impressionName: i.ImpressionNames.DIRECTORY_ADD_GUILD_CONFIRMATION,
            impressionProperties: X,
            children: (0, a.jsx)(T.default, {
              directoryGuildName: g,
              guildToAdd: R,
              isExistingGuildFlow: Z,
              onClose: h
            })
          })]
        })
      })
    })
  })
}