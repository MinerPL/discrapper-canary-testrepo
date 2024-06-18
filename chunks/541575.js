"use strict";
var n = t(735250);
t(470079);
var i = t(780384),
  l = t(481060),
  a = t(410030),
  r = t(367907),
  o = t(906732),
  c = t(807582),
  d = t(518738),
  u = t(26323),
  E = t(54264),
  _ = t(176278),
  I = t(764260),
  T = t(981631),
  N = t(30513),
  m = t(689938),
  S = t(311180);
s.Z = function(e) {
  let {
    guild: s,
    disabled: h,
    role: g
  } = e, x = (0, a.ZP)(), C = (0, d.oC)(s.id, g), {
    analyticsLocations: R
  } = (0, o.ZP)(), L = () => {
    (0, l.openModalLazy)(async () => {
      let {
        default: e
      } = await Promise.all([t.e("99387"), t.e("22942")]).then(t.bind(t, 660727));
      return t => (0, n.jsx)(e, {
        ...t,
        guildId: s.id,
        onUploadIcon: e => (0, I._l)(g.id, e, null),
        onSelectUnicodeEmoji: e => (0, I._l)(g.id, null, e)
      })
    })
  }, O = s.features.has(T.oNc.ROLE_ICONS), A = e => {
    !O && ((0, r.yw)(T.rMx.PREMIUM_GUILD_PROMOTION_OPENED, {
      location: {
        ...e,
        section: T.jXE.CUSTOM_ROLE_ICONS_TOOLTIP
      },
      guild_id: null == s ? void 0 : s.id,
      location_stack: R
    }), (0, u.Z)({
      analyticsLocations: R,
      analyticsSourceLocation: {
        page: T.ZY5.GUILD_SETTINGS,
        section: T.jXE.GUILD_ROLE_EDIT_UPSELL_MODAL,
        object: T.qAy.BADGE
      },
      guild: s,
      perks: (0, N.Yp)()
    }))
  }, p = (0, n.jsx)(c.Z, {
    className: S.availabilityIndicator,
    guild: s,
    guildFeature: T.oNc.ROLE_ICONS,
    tooltipPosition: "top",
    hideTooltip: O,
    onClick: () => A({
      object: T.qAy.LEARN_MORE,
      objectType: T.Qqv.TIER_2
    })
  });
  return (0, n.jsxs)(l.FormItem, {
    className: S.container,
    children: [(0, n.jsxs)(l.FormTitle, {
      className: S.formTitle,
      children: [(0, n.jsx)("div", {
        children: m.Z.Messages.FORM_LABEL_ROLE_ICON
      }), p]
    }), (0, n.jsx)(l.FormText, {
      className: S.description,
      children: m.Z.Messages.ROLE_ICON_HELP
    }), (0, n.jsxs)("div", {
      className: S.rolePreviewArea,
      children: [(0, n.jsx)("div", {
        className: S.previewContainer,
        children: null != C ? (0, n.jsx)(_.Z, {
          ...C,
          className: S.roleIconPreview,
          enableTooltip: !1
        }) : (0, n.jsx)(E.Z, {
          width: 24,
          height: 24,
          className: S.preview
        })
      }), (0, n.jsx)(l.Button, {
        className: S.button,
        color: (0, i.ap)(x) ? l.Button.Colors.PRIMARY : l.Button.Colors.WHITE,
        look: l.Button.Looks.OUTLINED,
        onClick: () => s.hasFeature(T.oNc.ROLE_ICONS) ? L() : A({
          object: T.qAy.UPLOAD_IMAGE
        }),
        disabled: h,
        children: m.Z.Messages.ROLE_ICON_CHOOSE_IMAGE
      }), null != C ? (0, n.jsx)(l.Button, {
        className: S.button,
        color: (0, i.ap)(x) ? l.Button.Colors.PRIMARY : l.Button.Colors.TRANSPARENT,
        look: l.Button.Looks.BLANK,
        onClick: () => {
          (0, I._l)(g.id, null, null)
        },
        disabled: h,
        children: m.Z.Messages.REMOVE_ICON
      }) : null]
    })]
  })
}