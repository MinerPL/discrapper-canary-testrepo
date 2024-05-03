"use strict";
a.r(t), a.d(t, {
  default: function() {
    return g
  }
}), a("47120");
var n = a("735250"),
  s = a("470079"),
  l = a("286379"),
  i = a("442837"),
  r = a("481060"),
  u = a("797614"),
  d = a("769654"),
  o = a("695346"),
  c = a("430824"),
  S = a("346656"),
  T = a("88658"),
  _ = a("401416"),
  N = a("920133"),
  E = a("689938"),
  I = a("759456"),
  f = a("444812");

function g(e) {
  let {
    transitionState: t,
    guildId: g,
    onClose: m
  } = e, G = (0, i.useStateFromStores)([c.default], () => c.default.getGuild(g));
  return (s.useEffect(() => {
    (0, _.acknowledgeDmSettingsUpsell)(g), (0, N.trackEvent)(N.DmUpsellActionTypes.MODAL_VIEWED, g), u.default.increment({
      name: l.MetricEvents.DM_SETTINGS_UPSELL_VIEW
    })
  }, [g]), null == G) ? null : (0, n.jsx)(r.ModalRoot, {
    transitionState: t,
    className: I.modal,
    children: (0, n.jsxs)("form", {
      onSubmit: e => {
        e.preventDefault();
        let t = new Set((0, T.getSanitizedRestrictedGuilds)());
        t.add(g), o.RestrictedGuildIds.updateSetting(Array.from(t)).then(() => (0, r.showToast)((0, r.createToast)(E.default.Messages.DM_SETTINGS_UPSELL_SUCCESS_TOAST, r.ToastType.SUCCESS))), m(), (0, N.trackEvent)(N.DmUpsellActionTypes.MODAL_DISABLED_DMS, g)
      },
      children: [(0, n.jsx)("img", {
        alt: "",
        className: I.headerImage,
        src: f
      }), (0, n.jsxs)(r.ModalHeader, {
        separator: !1,
        className: I.header,
        children: [(0, n.jsx)(r.Heading, {
          variant: "heading-lg/bold",
          className: I.title,
          children: E.default.Messages.DM_SETTINGS_UPSELL_TITLE
        }), (0, n.jsx)(r.Text, {
          variant: "text-md/normal",
          color: "header-secondary",
          className: I.body,
          children: E.default.Messages.DM_SETTINGS_UPSELL_BODY.format({
            guild_name: G.name
          })
        })]
      }), (0, n.jsxs)(r.ModalContent, {
        children: [(0, n.jsx)(r.Text, {
          variant: "eyebrow",
          color: "header-secondary",
          className: I.subtitle,
          children: E.default.Messages.DM_SETTINGS_UPSELL_SUBTITLE
        }), (0, n.jsx)("div", {
          className: I.guildContainer,
          children: (0, n.jsxs)("div", {
            className: I.guildInfo,
            children: [(0, n.jsx)(S.default, {
              guild: G,
              size: S.default.Sizes.SMALL
            }), (0, n.jsx)(r.Text, {
              className: I.guildName,
              variant: "text-md/semibold",
              children: G.name
            })]
          })
        }), (0, n.jsxs)("div", {
          className: I.content,
          children: [(0, n.jsx)(r.Button, {
            className: I.button,
            type: "submit",
            color: r.Button.Colors.BRAND,
            size: r.Button.Sizes.MEDIUM,
            children: E.default.Messages.DM_SETTINGS_UPSELL_YES_BUTTON
          }), (0, n.jsx)(r.Button, {
            className: I.button,
            color: r.Button.Colors.PRIMARY,
            onClick: () => {
              m(), (0, N.trackEvent)(N.DmUpsellActionTypes.MODAL_DISMISSED, g)
            },
            children: E.default.Messages.DM_SETTINGS_UPSELL_NO_BUTTON
          }), (0, n.jsx)(r.Text, {
            variant: "text-xs/normal",
            color: "header-secondary",
            className: I.footer,
            children: E.default.Messages.DM_SETTINGS_UPSELL_FOOTER.format({
              onClick: () => {
                m(), (0, d.transitionToGuild)(g), (0, r.openModalLazy)(async () => {
                  let {
                    default: e
                  } = await Promise.all([a.e("99387"), a.e("59500")]).then(a.bind(a, "241420"));
                  return t => (0, n.jsx)(e, {
                    ...t,
                    guild: G
                  })
                }), (0, N.trackEvent)(N.DmUpsellActionTypes.MODAL_GUILD_SETTINGS_CLICKED, g)
              }
            })
          })]
        })]
      })]
    })
  })
}