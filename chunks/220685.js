"use strict";
s.r(t), s.d(t, {
  default: function() {
    return b
  }
}), s("47120");
var a = s("735250"),
  l = s("470079"),
  n = s("803997"),
  i = s.n(n),
  r = s("512722"),
  o = s.n(r),
  d = s("392711"),
  u = s.n(d),
  c = s("442837"),
  E = s("692547"),
  _ = s("215569"),
  I = s("481060"),
  T = s("484614"),
  S = s("852860"),
  f = s("782568"),
  m = s("367907"),
  N = s("674180"),
  g = s("999382"),
  h = s("703685"),
  C = s("864293"),
  R = s("441674"),
  x = s("964309"),
  L = s("626135"),
  O = s("730647"),
  A = s("584825"),
  p = s("981631"),
  M = s("689938"),
  D = s("600352");
let v = [14361481, 12200937, 8804082, 6576370, 5335282, 2652110, 2128781, 2196594, 4752414, 13064760, 13058360, 12401e3, 12933021, 5659039, 4092591, 5868359, 6586142, 8876063, 8484432, 9979976, 5269106, 3421236],
  j = /^(https?:\/\/)?(?:m\.|www\.)?(youtu\.be|youtube\.com)\/(embed\/|v\/|watch\?v=|watch\?.+&v=)?((\w|-){11})(?:\S+)?$/,
  G = v[4],
  U = e => {
    var t, s;
    let {
      guild: n,
      canEnable: r
    } = e, d = (0, A.useSubscriptionsSettings)(n.id), {
      loading: c,
      updateSubscriptionsSettings: g
    } = (0, A.useUpdateSubscriptionsSettings)(), [O, U] = l.useState(n.hasFeature(p.GuildFeatures.CREATOR_STORE_PAGE)), [P, b] = l.useState(null !== (t = null == d ? void 0 : d.store_page_primary_color) && void 0 !== t ? t : G), [B, y] = l.useState(null == d ? void 0 : d.store_page_trailer_url), F = null == B || null != B.match(j), [H, k] = l.useState(null !== (s = null == d ? void 0 : d.store_page_show_subscriber_count) && void 0 !== s && s), w = l.useRef(null == d ? void 0 : d.store_page_slug).current, V = O !== n.hasFeature(p.GuildFeatures.CREATOR_STORE_PAGE) || (null == d ? void 0 : d.store_page_primary_color) == null && P !== G || (null == d ? void 0 : d.store_page_primary_color) != null && P !== (null == d ? void 0 : d.store_page_primary_color) || B !== (null == d ? void 0 : d.store_page_trailer_url) || null != H && H !== (null == d ? void 0 : d.store_page_show_subscriber_count), Y = async () => {
      o()(null != d, "Settings must be defined");
      let e = {};
      O !== n.hasFeature(p.GuildFeatures.CREATOR_STORE_PAGE) && (e.store_page_enabled = O), ((null == d ? void 0 : d.store_page_primary_color) == null && P !== G || (null == d ? void 0 : d.store_page_primary_color) != null && P !== (null == d ? void 0 : d.store_page_primary_color)) && (e.store_page_primary_color = P), B !== (null == d ? void 0 : d.store_page_trailer_url) && (e.store_page_trailer_url = B), H !== (null == d ? void 0 : d.store_page_show_subscriber_count) && (e.store_page_show_subscriber_count = H), !u().isEmpty(e) && (await g(n.id, e), "store_page_enabled" in e && L.default.track(p.AnalyticEvents.GUILD_ROLE_SUBSCRIPTION_STORE_PAGE_TOGGLED, {
        enabled: O,
        ...(0, m.collectGuildAnalyticsMetadata)(n.id)
      }))
    }, W = p.MarketingURLs.ROLE_SUBSCRIPTION_STORE_PAGE(w), z = null != B && B === (null == d ? void 0 : d.store_page_trailer_url), {
      shouldRestrictUpdatingCreatorMonetizationSettings: K
    } = (0, N.useShouldRestrictUpdatingCreatorMonetizationSettings)(n.id), Z = K || !F;
    return (0, a.jsxs)("div", {
      children: [(0, a.jsx)(I.FormTitle, {
        tag: "h1",
        children: M.default.Messages.GUILD_ROLE_SUBSCRIPTION_STORE_PAGE_SETTINGS_TITLE
      }), (0, a.jsx)(I.FormText, {
        type: I.FormText.Types.DESCRIPTION,
        children: M.default.Messages.GUILD_ROLE_SUBSCRIPTION_STORE_PAGE_SETTINGS_DESCRIPTION
      }), (0, a.jsx)(I.FormSwitch, {
        className: D.enableSwitch,
        value: O,
        disabled: K || !O && !r,
        tooltipNote: O || r ? void 0 : M.default.Messages.GUILD_ROLE_SUBSCRIPTION_STORE_PAGE_SETTINGS_PRIMARY_TOGGLE_DISABLED_TOOLTIP,
        hideBorder: !0,
        onChange: e => U(e),
        children: (0, a.jsx)(I.Text, {
          variant: "text-md/semibold",
          color: "header-primary",
          children: M.default.Messages.GUILD_ROLE_SUBSCRIPTION_STORE_PAGE_SETTINGS_ENABLE
        })
      }), (0, a.jsxs)(I.FormItem, {
        title: M.default.Messages.GUILD_ROLE_SUBSCRIPTION_STORE_PAGE_SETTINGS_PROMO_URL,
        disabled: K,
        children: [(0, a.jsx)(T.default, {
          value: W,
          className: i()({
            [D.disabled]: K
          })
        }), (0, a.jsx)(I.Button, {
          onClick: () => (0, f.default)(W),
          className: D.openPageButton,
          disabled: K,
          children: M.default.Messages.GUILD_ROLE_SUBSCRIPTION_STORE_PAGE_SETTINGS_GO_TO_PAGE
        })]
      }), (0, a.jsx)(I.FormDivider, {
        className: D.divider
      }), (0, a.jsxs)(I.FormItem, {
        title: M.default.Messages.GUILD_ROLE_SUBSCRIPTION_STORE_PAGE_SETTINGS_ACCENT_COLOR_TITLE,
        disabled: K,
        children: [(0, a.jsx)(I.FormText, {
          disabled: K,
          children: M.default.Messages.GUILD_ROLE_SUBSCRIPTION_STORE_PAGE_SETTINGS_ACCENT_COLOR_DESCRIPTION
        }), (0, a.jsxs)("div", {
          className: D.accentColorContainer,
          children: [(0, a.jsx)(I.Button, {
            onClick: () => null,
            color: I.Button.Colors.CUSTOM,
            style: {
              backgroundColor: "#".concat(P.toString(16).padStart(6, "0"))
            },
            className: D.buttonPreview,
            disabled: K,
            children: M.default.Messages.GUILD_ROLE_SUBSCRIPTION_STORE_PAGE_SETTINGS_ACCENT_COLOR_BUTTON_PREVIEW
          }), (0, a.jsx)(h.default, {
            colors: v,
            customColor: null,
            defaultColor: G,
            value: P,
            onChange: e => b(e),
            renderDefaultButton: () => null,
            renderCustomButton: () => null,
            colorContainerClassName: D.hideColorButtons,
            disabled: K
          })]
        })]
      }), (0, a.jsx)(I.FormDivider, {
        className: D.divider
      }), (0, a.jsxs)(I.FormItem, {
        title: M.default.Messages.GUILD_ROLE_SUBSCRIPTION_STORE_PAGE_SETTINGS_TRAILER_TITLE,
        disabled: K,
        children: [(0, a.jsx)(I.FormText, {
          disabled: K,
          children: M.default.Messages.GUILD_ROLE_SUBSCRIPTION_STORE_PAGE_SETTINGS_TRAILER_DESCRIPTION
        }), (0, a.jsx)(I.TextInput, {
          value: null != B ? B : void 0,
          onChange: e => y("" === e ? null : e),
          error: F ? null : M.default.Messages.GUILD_ROLE_SUBSCRIPTION_STORE_PAGE_SETTINGS_TRAILER_BAD_LINK,
          placeholder: M.default.Messages.GUILD_ROLE_SUBSCRIPTION_STORE_PAGE_SETTINGS_TRAILER_PLACEHOLDER,
          className: D.trailerInputWrapper,
          inputClassName: i()(D.trailerInput, {
            [D.error]: !F,
            [D.trailerInputWithCheckmark]: z || !F
          }),
          prefixElement: F && z && (0, a.jsx)(R.default, {
            color: E.default.unsafe_rawColors.BRAND_500.css,
            backgroundColor: E.default.unsafe_rawColors.WHITE_500.css,
            className: D.inputCheckmark
          }),
          disabled: K
        })]
      }), (0, a.jsx)(I.FormDivider, {
        className: D.divider
      }), (0, a.jsxs)(I.FormItem, {
        title: M.default.Messages.GUILD_ROLE_SUBSCRIPTION_STORE_PAGE_SETTINGS_DISPLAY_OPTIONS_TITLE,
        disabled: K,
        children: [(0, a.jsx)(I.FormText, {
          disabled: K,
          children: M.default.Messages.GUILD_ROLE_SUBSCRIPTION_STORE_PAGE_SETTINGS_DISPLAY_OPTIONS_DESCRIPTION
        }), (0, a.jsx)(I.FormSwitch, {
          className: D.premiumMemberCountSwitchContainer,
          value: H,
          hideBorder: !0,
          onChange: e => k(e),
          disabled: K,
          children: (0, a.jsxs)("div", {
            className: D.iconSwitchLabel,
            children: [(0, a.jsx)("div", {
              className: D.iconContainer,
              children: (0, a.jsx)(x.default, {
                width: 28,
                height: 28,
                className: D.premiumMemberCountIcon
              })
            }), (0, a.jsxs)("div", {
              children: [(0, a.jsx)(I.Text, {
                variant: "text-md/medium",
                color: "header-primary",
                children: M.default.Messages.GUILD_ROLE_SUBSCRIPTION_STORE_PAGE_SETTINGS_DISPLAY_OPTIONS_PREMIUM_MEMBER_COUNT
              }), (0, a.jsx)(I.Text, {
                variant: "text-sm/normal",
                color: "header-secondary",
                children: M.default.Messages.GUILD_ROLE_SUBSCRIPTION_STORE_PAGE_SETTINGS_DISPLAY_OPTIONS_PREMIUM_MEMBER_COUNT_DESCRIPTION
              })]
            })]
          })
        })]
      }), (0, a.jsx)(_.TransitionGroup, {
        component: "div",
        className: D.contentRegion,
        children: V && (0, a.jsx)(C.default, {
          children: (0, a.jsx)(S.default, {
            submitting: c,
            onReset: () => {
              var e, t;
              U(n.hasFeature(p.GuildFeatures.CREATOR_STORE_PAGE)), b(null !== (e = null == d ? void 0 : d.store_page_primary_color) && void 0 !== e ? e : G), y(null == d ? void 0 : d.store_page_trailer_url), k(null !== (t = null == d ? void 0 : d.store_page_show_subscriber_count) && void 0 !== t && t)
            },
            onSave: Y,
            disabled: Z
          })
        })
      })]
    })
  };

function P() {
  let e = (0, c.useStateFromStores)([g.default], () => g.default.getGuild()),
    t = (0, O.useGroupListingsFetchContext)(),
    s = (0, A.useSubscriptionListingsForGuild)(null == e ? void 0 : e.id).some(e => e.published);
  return null != e && t ? (0, a.jsx)(U, {
    guild: e,
    canEnable: s
  }) : (0, a.jsx)(I.Spinner, {})
}

function b() {
  let e = (0, c.useStateFromStores)([g.default], () => g.default.getGuild());
  return (0, a.jsxs)(O.GroupListingsFetchContextProvider, {
    guildId: null == e ? void 0 : e.id,
    refetchOnMount: !0,
    children: [(0, a.jsx)(P, {}), ";"]
  })
}