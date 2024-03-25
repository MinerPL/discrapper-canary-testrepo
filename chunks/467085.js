"use strict";
s.r(t), s.d(t, {
  default: function() {
    return L
  }
}), s("222007");
var a = s("37983"),
  l = s("884691"),
  i = s("759843"),
  n = s("77078"),
  r = s("326678"),
  d = s("622210"),
  o = s("813006"),
  u = s("439932"),
  c = s("71102"),
  C = s("694410"),
  m = s("426253"),
  f = s("640952"),
  E = s("351531"),
  T = s("926818"),
  x = s("730647"),
  _ = s("49111"),
  I = s("578783");

function L(e) {
  let {
    directoryChannelId: t,
    transitionState: s,
    initialSlide: L = x.CreateOrAddGuildSlideTypes.CHOOSE_GUILD,
    onClose: h,
    directoryGuildName: g,
    directoryGuildId: S,
    currentCategoryId: N
  } = e, [p, M] = l.useState(L), [j, A] = l.useState(null), [U, B] = l.useState(null), [D, H] = l.useState(null), [O, G] = l.useState(null), [R, b] = l.useState(null), [v, y] = l.useState(""), [F, k] = l.useState(null != N ? N : x.DirectoryEntryCategories.UNCATEGORIZED), [Z, V] = l.useState(!1), {
    availableGuilds: w,
    addedGuilds: P,
    loading: z
  } = (0, C.default)(S, t);
  l.useEffect(() => {
    M(L)
  }, [M, L]);
  let Y = async () => {
    let e = R;
    if (!Z) {
      if (null == D || null == U) return;
      let t = await r.default.createGuildFromTemplate(D, O, U);
      b(e = new o.default(t))
    }
    null != e && (await c.addDirectoryGuildEntry(t, e.id, v, F), M(x.CreateOrAddGuildSlideTypes.CONFIRMATION))
  }, X = {
    impression_group: i.ImpressionGroups.DIRECTORY_GUILD_ADD_FLOW
  };
  return (0, a.jsx)("div", {
    className: (0, u.getThemeClass)(_.ThemeTypes.LIGHT),
    children: (0, a.jsx)(n.ModalRoot, {
      transitionState: s,
      disableTrack: !0,
      children: (0, a.jsx)("div", {
        className: I.container,
        children: (0, a.jsxs)(n.Slides, {
          activeSlide: p,
          width: 440,
          onSlideReady: e => A(e),
          children: [(0, a.jsx)(n.Slide, {
            id: x.CreateOrAddGuildSlideTypes.CHOOSE_GUILD,
            impressionName: i.ImpressionNames.HUB_EXISTING_GUILD_CHOOSE,
            impressionProperties: X,
            children: (0, a.jsx)(m.default, {
              directoryChannelId: t,
              directoryGuildName: g,
              onGuildChosen: e => {
                V(!0), M(x.CreateOrAddGuildSlideTypes.CUSTOMIZE_EXISTING_GUILD), b(e)
              },
              handleChooseCreate: () => {
                V(!1), M(x.CreateOrAddGuildSlideTypes.GUILD_TEMPLATES)
              },
              onClose: h,
              availableGuilds: w,
              addedGuilds: P,
              loading: z
            })
          }), (0, a.jsx)(n.Slide, {
            id: x.CreateOrAddGuildSlideTypes.GUILD_TEMPLATES,
            impressionName: i.ImpressionNames.HUB_CREATE_GUILD_TEMPLATE,
            impressionProperties: X,
            children: (0, a.jsx)(T.default, {
              directoryGuildName: g,
              onChooseTemplate: e => {
                V(!1), M(x.CreateOrAddGuildSlideTypes.CUSTOMIZE_NEW_GUILD), B(e)
              },
              onClose: h,
              onBack: () => M(x.CreateOrAddGuildSlideTypes.CHOOSE_GUILD)
            })
          }), (0, a.jsx)(n.Slide, {
            id: x.CreateOrAddGuildSlideTypes.CUSTOMIZE_NEW_GUILD,
            impressionName: i.ImpressionNames.HUB_CREATE_GUILD_CUSTOMIZE,
            impressionProperties: X,
            children: (0, a.jsx)(d.default, {
              guildTemplate: U,
              onHubGuildInfoSet: (e, t) => {
                H(e), G(t), M(x.CreateOrAddGuildSlideTypes.CUSTOMIZE_EXISTING_GUILD)
              },
              onClose: h,
              onBack: () => M(x.CreateOrAddGuildSlideTypes.GUILD_TEMPLATES),
              isSlideReady: j === x.CreateOrAddGuildSlideTypes.CUSTOMIZE_NEW_GUILD
            })
          }), (0, a.jsx)(n.Slide, {
            id: x.CreateOrAddGuildSlideTypes.CUSTOMIZE_EXISTING_GUILD,
            impressionName: i.ImpressionNames.HUB_EXISTING_GUILD_CUSTOMIZE,
            impressionProperties: X,
            children: (0, a.jsx)(f.default, {
              directoryChannelId: t,
              description: v,
              onDescriptionChange: y,
              categoryId: F,
              onCategoryIdChange: k,
              onSubmit: Y,
              onBack: () => M(Z ? x.CreateOrAddGuildSlideTypes.CHOOSE_GUILD : x.CreateOrAddGuildSlideTypes.CUSTOMIZE_NEW_GUILD),
              onClose: h
            })
          }), (0, a.jsx)(n.Slide, {
            id: x.CreateOrAddGuildSlideTypes.CONFIRMATION,
            impressionName: i.ImpressionNames.DIRECTORY_ADD_GUILD_CONFIRMATION,
            impressionProperties: X,
            children: (0, a.jsx)(E.default, {
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