"use strict";
t.d(s, {
  Z: function() {
    return U
  }
}), t(47120);
var n = t(735250),
  i = t(470079),
  l = t(120356),
  a = t.n(l),
  r = t(512722),
  o = t.n(r),
  c = t(392711),
  d = t.n(c),
  u = t(442837),
  E = t(692547),
  _ = t(215569),
  I = t(481060),
  T = t(484614),
  N = t(852860),
  m = t(782568),
  S = t(367907),
  h = t(674180),
  g = t(999382),
  x = t(441674),
  C = t(964309),
  R = t(626135),
  L = t(730647),
  O = t(584825),
  A = t(981631),
  p = t(689938),
  M = t(117770);
let f = [14361481, 12200937, 8804082, 6576370, 5335282, 2652110, 2128781, 2196594, 4752414, 13064760, 13058360, 12401e3, 12933021, 5659039, 4092591, 5868359, 6586142, 8876063, 8484432, 9979976, 5269106, 3421236],
  v = /^(https?:\/\/)?(?:m\.|www\.)?(youtu\.be|youtube\.com)\/(embed\/|v\/|watch\?v=|watch\?.+&v=)?((\w|-){11})(?:\S+)?$/,
  D = f[4],
  Z = e => {
    var s, t;
    let {
      guild: l,
      canEnable: r
    } = e, c = (0, O.YB)(l.id), {
      loading: u,
      updateSubscriptionsSettings: g
    } = (0, O.QV)(), [L, Z] = i.useState(l.hasFeature(A.oNc.CREATOR_STORE_PAGE)), [j, U] = i.useState(null !== (s = null == c ? void 0 : c.store_page_primary_color) && void 0 !== s ? s : D), [G, P] = i.useState(null == c ? void 0 : c.store_page_trailer_url), b = null == G || null != G.match(v), [B, y] = i.useState(null !== (t = null == c ? void 0 : c.store_page_show_subscriber_count) && void 0 !== t && t), F = i.useRef(null == c ? void 0 : c.store_page_slug).current, w = L !== l.hasFeature(A.oNc.CREATOR_STORE_PAGE) || (null == c ? void 0 : c.store_page_primary_color) == null && j !== D || (null == c ? void 0 : c.store_page_primary_color) != null && j !== (null == c ? void 0 : c.store_page_primary_color) || G !== (null == c ? void 0 : c.store_page_trailer_url) || null != B && B !== (null == c ? void 0 : c.store_page_show_subscriber_count), k = async () => {
      o()(null != c, "Settings must be defined");
      let e = {};
      L !== l.hasFeature(A.oNc.CREATOR_STORE_PAGE) && (e.store_page_enabled = L), ((null == c ? void 0 : c.store_page_primary_color) == null && j !== D || (null == c ? void 0 : c.store_page_primary_color) != null && j !== (null == c ? void 0 : c.store_page_primary_color)) && (e.store_page_primary_color = j), G !== (null == c ? void 0 : c.store_page_trailer_url) && (e.store_page_trailer_url = G), B !== (null == c ? void 0 : c.store_page_show_subscriber_count) && (e.store_page_show_subscriber_count = B), !d().isEmpty(e) && (await g(l.id, e), "store_page_enabled" in e && R.default.track(A.rMx.GUILD_ROLE_SUBSCRIPTION_STORE_PAGE_TOGGLED, {
        enabled: L,
        ...(0, S.hH)(l.id)
      }))
    }, H = A.EYA.ROLE_SUBSCRIPTION_STORE_PAGE(F), V = null != G && G === (null == c ? void 0 : c.store_page_trailer_url), {
      shouldRestrictUpdatingCreatorMonetizationSettings: Y
    } = (0, h.gX)(l.id), W = Y || !b;
    return (0, n.jsxs)("div", {
      children: [(0, n.jsx)(I.FormTitle, {
        tag: "h1",
        children: p.Z.Messages.GUILD_ROLE_SUBSCRIPTION_STORE_PAGE_SETTINGS_TITLE
      }), (0, n.jsx)(I.FormText, {
        type: I.FormText.Types.DESCRIPTION,
        children: p.Z.Messages.GUILD_ROLE_SUBSCRIPTION_STORE_PAGE_SETTINGS_DESCRIPTION
      }), (0, n.jsx)(I.FormSwitch, {
        className: M.enableSwitch,
        value: L,
        disabled: Y || !L && !r,
        tooltipNote: L || r ? void 0 : p.Z.Messages.GUILD_ROLE_SUBSCRIPTION_STORE_PAGE_SETTINGS_PRIMARY_TOGGLE_DISABLED_TOOLTIP,
        hideBorder: !0,
        onChange: e => Z(e),
        children: (0, n.jsx)(I.Text, {
          variant: "text-md/semibold",
          color: "header-primary",
          children: p.Z.Messages.GUILD_ROLE_SUBSCRIPTION_STORE_PAGE_SETTINGS_ENABLE
        })
      }), (0, n.jsxs)(I.FormItem, {
        title: p.Z.Messages.GUILD_ROLE_SUBSCRIPTION_STORE_PAGE_SETTINGS_PROMO_URL,
        disabled: Y,
        children: [(0, n.jsx)(T.Z, {
          value: H,
          className: a()({
            [M.disabled]: Y
          })
        }), (0, n.jsx)(I.Button, {
          onClick: () => (0, m.Z)(H),
          className: M.openPageButton,
          disabled: Y,
          children: p.Z.Messages.GUILD_ROLE_SUBSCRIPTION_STORE_PAGE_SETTINGS_GO_TO_PAGE
        })]
      }), (0, n.jsx)(I.FormDivider, {
        className: M.divider
      }), (0, n.jsxs)(I.FormItem, {
        title: p.Z.Messages.GUILD_ROLE_SUBSCRIPTION_STORE_PAGE_SETTINGS_ACCENT_COLOR_TITLE,
        disabled: Y,
        children: [(0, n.jsx)(I.FormText, {
          disabled: Y,
          children: p.Z.Messages.GUILD_ROLE_SUBSCRIPTION_STORE_PAGE_SETTINGS_ACCENT_COLOR_DESCRIPTION
        }), (0, n.jsxs)("div", {
          className: M.accentColorContainer,
          children: [(0, n.jsx)(I.Button, {
            onClick: () => null,
            color: I.Button.Colors.CUSTOM,
            style: {
              backgroundColor: "#".concat(j.toString(16).padStart(6, "0"))
            },
            className: M.buttonPreview,
            disabled: Y,
            children: p.Z.Messages.GUILD_ROLE_SUBSCRIPTION_STORE_PAGE_SETTINGS_ACCENT_COLOR_BUTTON_PREVIEW
          }), (0, n.jsx)(I.ColorPicker, {
            colors: f,
            customColor: null,
            defaultColor: D,
            value: j,
            onChange: e => U(e),
            renderDefaultButton: () => null,
            renderCustomButton: () => null,
            colorContainerClassName: M.hideColorButtons,
            disabled: Y
          })]
        })]
      }), (0, n.jsx)(I.FormDivider, {
        className: M.divider
      }), (0, n.jsxs)(I.FormItem, {
        title: p.Z.Messages.GUILD_ROLE_SUBSCRIPTION_STORE_PAGE_SETTINGS_TRAILER_TITLE,
        disabled: Y,
        children: [(0, n.jsx)(I.FormText, {
          disabled: Y,
          children: p.Z.Messages.GUILD_ROLE_SUBSCRIPTION_STORE_PAGE_SETTINGS_TRAILER_DESCRIPTION
        }), (0, n.jsx)(I.TextInput, {
          value: null != G ? G : void 0,
          onChange: e => P("" === e ? null : e),
          error: b ? null : p.Z.Messages.GUILD_ROLE_SUBSCRIPTION_STORE_PAGE_SETTINGS_TRAILER_BAD_LINK,
          placeholder: p.Z.Messages.GUILD_ROLE_SUBSCRIPTION_STORE_PAGE_SETTINGS_TRAILER_PLACEHOLDER,
          className: M.trailerInputWrapper,
          inputClassName: a()(M.trailerInput, {
            [M.error]: !b,
            [M.trailerInputWithCheckmark]: V || !b
          }),
          prefixElement: b && V && (0, n.jsx)(x.Z, {
            color: E.Z.unsafe_rawColors.BRAND_500.css,
            backgroundColor: E.Z.unsafe_rawColors.WHITE_500.css,
            className: M.inputCheckmark
          }),
          disabled: Y
        })]
      }), (0, n.jsx)(I.FormDivider, {
        className: M.divider
      }), (0, n.jsxs)(I.FormItem, {
        title: p.Z.Messages.GUILD_ROLE_SUBSCRIPTION_STORE_PAGE_SETTINGS_DISPLAY_OPTIONS_TITLE,
        disabled: Y,
        children: [(0, n.jsx)(I.FormText, {
          disabled: Y,
          children: p.Z.Messages.GUILD_ROLE_SUBSCRIPTION_STORE_PAGE_SETTINGS_DISPLAY_OPTIONS_DESCRIPTION
        }), (0, n.jsx)(I.FormSwitch, {
          className: M.premiumMemberCountSwitchContainer,
          value: B,
          hideBorder: !0,
          onChange: e => y(e),
          disabled: Y,
          children: (0, n.jsxs)("div", {
            className: M.iconSwitchLabel,
            children: [(0, n.jsx)("div", {
              className: M.iconContainer,
              children: (0, n.jsx)(C.Z, {
                width: 28,
                height: 28,
                className: M.premiumMemberCountIcon
              })
            }), (0, n.jsxs)("div", {
              children: [(0, n.jsx)(I.Text, {
                variant: "text-md/medium",
                color: "header-primary",
                children: p.Z.Messages.GUILD_ROLE_SUBSCRIPTION_STORE_PAGE_SETTINGS_DISPLAY_OPTIONS_PREMIUM_MEMBER_COUNT
              }), (0, n.jsx)(I.Text, {
                variant: "text-sm/normal",
                color: "header-secondary",
                children: p.Z.Messages.GUILD_ROLE_SUBSCRIPTION_STORE_PAGE_SETTINGS_DISPLAY_OPTIONS_PREMIUM_MEMBER_COUNT_DESCRIPTION
              })]
            })]
          })
        })]
      }), (0, n.jsx)(_.W, {
        component: "div",
        className: M.contentRegion,
        children: w && (0, n.jsx)(I.SlideIn, {
          children: (0, n.jsx)(N.Z, {
            submitting: u,
            onReset: () => {
              var e, s;
              Z(l.hasFeature(A.oNc.CREATOR_STORE_PAGE)), U(null !== (e = null == c ? void 0 : c.store_page_primary_color) && void 0 !== e ? e : D), P(null == c ? void 0 : c.store_page_trailer_url), y(null !== (s = null == c ? void 0 : c.store_page_show_subscriber_count) && void 0 !== s && s)
            },
            onSave: k,
            disabled: W
          })
        })
      })]
    })
  };

function j() {
  let e = (0, u.e7)([g.Z], () => g.Z.getGuild()),
    s = (0, L.f)(),
    t = (0, O.qi)(null == e ? void 0 : e.id).some(e => e.published);
  return null != e && s ? (0, n.jsx)(Z, {
    guild: e,
    canEnable: t
  }) : (0, n.jsx)(I.Spinner, {})
}

function U() {
  let e = (0, u.e7)([g.Z], () => g.Z.getGuild());
  return (0, n.jsxs)(L.l, {
    guildId: null == e ? void 0 : e.id,
    refetchOnMount: !0,
    children: [(0, n.jsx)(j, {}), ";"]
  })
}