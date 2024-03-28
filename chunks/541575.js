"use strict";
s.r(t);
var a = s("735250");
s("470079");
var l = s("780384"),
  n = s("481060"),
  i = s("410030"),
  r = s("367907"),
  o = s("906732"),
  d = s("807582"),
  u = s("518738"),
  c = s("26323"),
  E = s("54264"),
  _ = s("176278"),
  I = s("764260"),
  T = s("981631"),
  S = s("30513"),
  f = s("689938"),
  m = s("866871");
t.default = function(e) {
  let {
    guild: t,
    disabled: N,
    role: g
  } = e, h = (0, i.default)(), C = (0, u.useRoleIconForPreview)(t.id, g), {
    analyticsLocations: R
  } = (0, o.default)(), x = () => {
    (0, n.openModalLazy)(async () => {
      let {
        default: e
      } = await Promise.all([s.e("99387"), s.e("22942")]).then(s.bind(s, "660727"));
      return s => (0, a.jsx)(e, {
        ...s,
        guildId: t.id,
        onUploadIcon: e => (0, I.updateRoleIcon)(g.id, e, null),
        onSelectUnicodeEmoji: e => (0, I.updateRoleIcon)(g.id, null, e)
      })
    })
  }, L = t.features.has(T.GuildFeatures.ROLE_ICONS), O = e => {
    !L && ((0, r.trackWithMetadata)(T.AnalyticEvents.PREMIUM_GUILD_PROMOTION_OPENED, {
      location: {
        ...e,
        section: T.AnalyticsSections.CUSTOM_ROLE_ICONS_TOOLTIP
      },
      guild_id: null == t ? void 0 : t.id,
      location_stack: R
    }), (0, c.default)({
      analyticsLocations: R,
      analyticsSourceLocation: {
        page: T.AnalyticsPages.GUILD_SETTINGS,
        section: T.AnalyticsSections.GUILD_ROLE_EDIT_UPSELL_MODAL,
        object: T.AnalyticsObjects.BADGE
      },
      guild: t,
      perks: (0, S.customRoleIconUpsellPerks)()
    }))
  }, A = (0, a.jsx)(d.default, {
    className: m.availabilityIndicator,
    guild: t,
    guildFeature: T.GuildFeatures.ROLE_ICONS,
    tooltipPosition: "top",
    hideTooltip: L,
    onClick: () => O({
      object: T.AnalyticsObjects.LEARN_MORE,
      objectType: T.AnalyticsObjectTypes.TIER_2
    })
  });
  return (0, a.jsxs)(n.FormItem, {
    className: m.container,
    children: [(0, a.jsxs)(n.FormTitle, {
      className: m.formTitle,
      children: [(0, a.jsx)("div", {
        children: f.default.Messages.FORM_LABEL_ROLE_ICON
      }), A]
    }), (0, a.jsx)(n.FormText, {
      className: m.description,
      children: f.default.Messages.ROLE_ICON_HELP
    }), (0, a.jsxs)("div", {
      className: m.rolePreviewArea,
      children: [(0, a.jsx)("div", {
        className: m.previewContainer,
        children: null != C ? (0, a.jsx)(_.default, {
          ...C,
          className: m.roleIconPreview,
          enableTooltip: !1
        }) : (0, a.jsx)(E.default, {
          width: 24,
          height: 24,
          className: m.preview
        })
      }), (0, a.jsx)(n.Button, {
        className: m.button,
        color: (0, l.isThemeLight)(h) ? n.Button.Colors.PRIMARY : n.Button.Colors.WHITE,
        look: n.Button.Looks.OUTLINED,
        onClick: () => t.hasFeature(T.GuildFeatures.ROLE_ICONS) ? x() : O({
          object: T.AnalyticsObjects.UPLOAD_IMAGE
        }),
        disabled: N,
        children: f.default.Messages.ROLE_ICON_CHOOSE_IMAGE
      }), null != C ? (0, a.jsx)(n.Button, {
        className: m.button,
        color: (0, l.isThemeLight)(h) ? n.Button.Colors.PRIMARY : n.Button.Colors.TRANSPARENT,
        look: n.Button.Looks.BLANK,
        onClick: () => {
          (0, I.updateRoleIcon)(g.id, null, null)
        },
        disabled: N,
        children: f.default.Messages.REMOVE_ICON
      }) : null]
    })]
  })
}