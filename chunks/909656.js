"use strict";
s.r(t), s.d(t, {
  default: function() {
    return y
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
  c = s("207561"),
  E = s("215569"),
  _ = s("477690"),
  I = s("481060"),
  T = s("852860"),
  S = s("393238"),
  f = s("208567"),
  m = s("864293"),
  N = s("682864"),
  g = s("153124"),
  h = s("540086"),
  C = s("93879"),
  R = s("385950"),
  x = s("73346"),
  L = s("624138"),
  O = s("584825"),
  A = s("723047"),
  p = s("927954"),
  M = s("164000"),
  D = s("587431"),
  v = s("293810"),
  j = s("333866"),
  G = s("689938"),
  U = s("511252");
let P = (0, L.cssValueToNumber)(_.default.GUILD_SETTINGS_ROLE_SUBSCRIPTIONS_OVERVIEW_SETTINGS_MAX_WIDTH);

function b() {
  return [{
    name: G.default.Messages.GUILD_ROLE_SUBSCRIPTION_FORMAT_SOME_CHANNELS_NAME,
    desc: G.default.Messages.GUILD_ROLE_SUBSCRIPTION_FORMAT_SOME_CHANNELS_DESCRIPTION,
    value: v.GuildRoleSubscriptionFormat.SOME_CHANNELS,
    icon: C.default
  }, {
    name: G.default.Messages.GUILD_ROLE_SUBSCRIPTION_FORMAT_ALL_CHANNELS_NAME,
    desc: G.default.Messages.GUILD_ROLE_SUBSCRIPTION_FORMAT_ALL_CHANNELS_DESCRIPTION,
    value: v.GuildRoleSubscriptionFormat.ALL_CHANNELS,
    icon: R.default
  }]
}

function B(e) {
  let {
    value: t,
    "aria-labelledby": s,
    onChange: n,
    disabled: r = !1
  } = e, {
    ref: o,
    width: d
  } = (0, S.default)(), u = (0, c.useLazyValue)(b), E = l.useMemo(() => u.map(e => ({
    ...e,
    icon: function() {
      let {
        icon: t
      } = e;
      return (0, a.jsx)("div", {
        className: U.formatRadioIconWrapper,
        children: (0, a.jsx)(t, {
          className: U.formatRadioIcon
        })
      })
    },
    radioBarClassName: U.formatOptionRadioBar,
    radioItemIconClassName: U.formatOptionRadioItemIcon
  })), [u]), _ = null != d && d >= 400;
  return (0, a.jsx)("div", {
    ref: o,
    children: (0, a.jsx)(I.RadioGroup, {
      options: E,
      value: t,
      orientation: _ ? "horizontal" : "vertical",
      size: I.RadioGroup.Sizes.NONE,
      className: i()({
        [U.radioGroupHorizontal]: _
      }),
      radioItemClassName: U.formatOptionRadioItem,
      onChange: e => {
        let {
          value: t
        } = e;
        return n(t)
      },
      "aria-labelledby": s,
      disabled: r
    })
  })
}

function y(e) {
  var t;
  let {
    guild: s,
    isGuildProducts: n = !1
  } = e, {
    format: i
  } = (0, M.default)(s.id), r = (0, O.useSubscriptionsSettings)(s.id), d = l.useCallback(() => {
    var e;
    return (null == r ? void 0 : null === (e = r.cover_image_asset) || void 0 === e ? void 0 : e.application_id) == null ? null : (0, x.getAssetURL)(r.cover_image_asset.application_id, r.cover_image_asset, P)
  }, [r]), [c, _] = l.useState(i), [S, C] = l.useState(null !== (t = null == r ? void 0 : r.description) && void 0 !== t ? t : ""), [R, L] = l.useState(d), [b, y] = l.useState(null == r ? void 0 : r.store_page_guild_products_default_sort), [F, H] = l.useState(null == r ? void 0 : r.server_shop_tab_order), {
    loading: k,
    error: w,
    updateSubscriptionsSettings: V
  } = (0, O.useUpdateSubscriptionsSettings)(), {
    imageCTA: Y,
    imageAriaLabel: W,
    setFilename: z
  } = (0, p.default)(null == r ? void 0 : r.cover_image_asset), K = (0, g.useUID)(), Z = (0, g.useUID)(), X = (0, g.useUID)();

  function Q(e, t) {
    o()(null != e, "Null value not allowed"), null != t && z(t.name), L(e)
  }
  let J = l.useMemo(() => {
      var e;
      return null != S && S !== (null !== (e = null == r ? void 0 : r.description) && void 0 !== e ? e : "") || (null == R ? void 0 : R.startsWith("data:")) === !0 || c !== i || (null == r ? void 0 : r.store_page_guild_products_default_sort) !== b || (null == r ? void 0 : r.server_shop_tab_order) !== F
    }, [R, i, S, r, c, b, F]),
    q = null != S && "" !== S && null != R;
  l.useEffect(() => {
    var e;
    (null == r ? void 0 : null === (e = r.cover_image_asset) || void 0 === e ? void 0 : e.application_id) != null && L((0, x.getAssetURL)(r.cover_image_asset.application_id, r.cover_image_asset, P))
  }, [null == r ? void 0 : r.cover_image_asset]);
  let $ = (0, A.useRoleSubscriptionSettingsDisabled)(),
    ee = l.useMemo(() => j.DISPLAYED_SORT_OPTIONS.map(e => ({
      label: (0, j.getGuildProductSortOptionLabel)(e),
      value: e
    })), []),
    et = l.useMemo(() => [{
      label: G.default.Messages.GUILD_PRODUCTS_TITLE,
      value: j.ServerShopTabOrder.PRODUCTS_FIRST
    }, {
      label: G.default.Messages.GUILD_ROLE_SUBSCRIPTIONS_TITLE,
      value: j.ServerShopTabOrder.SUBS_FIRST
    }], []);
  return (0, a.jsxs)("div", {
    className: U.container,
    children: [null != w && (0, a.jsxs)(a.Fragment, {
      children: [(0, a.jsx)(D.default, {
        children: w.getAnyErrorMessage()
      }), (0, a.jsx)(N.default, {
        size: 16
      })]
    }), n ? null : (0, a.jsxs)(a.Fragment, {
      children: [(0, a.jsxs)(I.FormSection, {
        title: G.default.Messages.GUILD_ROLE_SUBSCRIPTION_FORMAT_TITLE,
        titleId: K,
        disabled: $,
        children: [(0, a.jsx)(I.FormText, {
          type: I.FormText.Types.DESCRIPTION,
          className: U.formDescription,
          disabled: $,
          children: G.default.Messages.GUILD_ROLE_SUBSCRIPTION_FORMAT_DESCRIPTION
        }), (0, a.jsx)(B, {
          value: c,
          onChange: e => {
            i !== e && e === v.GuildRoleSubscriptionFormat.ALL_CHANNELS && (0, I.openModal)(e => (0, a.jsx)(I.ConfirmModal, {
              ...e,
              header: G.default.Messages.GUILD_ROLE_SUBSCRIPTION_FORMAT_ALL_CHANNELS_DIALOG_TITLE,
              confirmText: G.default.Messages.GOT_IT,
              confirmButtonColor: I.Button.Colors.BRAND,
              children: (0, a.jsx)(I.Text, {
                variant: "text-md/normal",
                children: G.default.Messages.GUILD_ROLE_SUBSCRIPTION_FORMAT_ALL_CHANNELS_DIALOG_TEXT
              })
            })), _(e)
          },
          "aria-labelledby": K,
          disabled: $
        })]
      }), (0, a.jsx)(I.FormDivider, {
        className: U.divider
      })]
    }), (0, a.jsx)(I.FormSection, {
      title: G.default.Messages.GUILD_ROLE_SUBSCRIPTION_SETUP_INFO_DESCRIPTION_TITLE,
      titleId: Z,
      disabled: $,
      children: (0, a.jsx)(I.TextArea, {
        placeholder: n ? G.default.Messages.GUILD_PRODUCT_SETUP_INFO_DESCRIPTION_PLACEHOLDER : G.default.Messages.GUILD_ROLE_SUBSCRIPTION_SETUP_INFO_DESCRIPTION_PLACEHOLDER,
        maxLength: 1500,
        value: S,
        rows: 2,
        autosize: !0,
        onChange: C,
        "aria-labelledby": Z,
        disabled: $
      })
    }), (0, a.jsx)(I.FormDivider, {
      className: U.divider
    }), (0, a.jsxs)(I.FormSection, {
      title: G.default.Messages.GUILD_ROLE_SUBSCRIPTION_SETUP_INFO_COVER_IMAGE_TITLE,
      disabled: $,
      children: [(0, a.jsx)(I.FormText, {
        type: I.FormText.Types.DESCRIPTION,
        className: U.formDescription,
        disabled: $,
        children: G.default.Messages.GUILD_ROLE_SUBSCRIPTION_SETUP_INFO_COVER_IMAGE_DESCRIPTION
      }), (0, a.jsx)(f.default, {
        image: R,
        hint: Y,
        showIcon: !0,
        showRemoveButton: !1,
        hideSize: !0,
        className: U.coverImageUploader,
        iconWrapperClassName: U.coverImageUploaderIconWrapper,
        imageClassName: U.coverImageUploaderInner,
        iconClassName: U.coverImageUploaderIcon,
        onChange: Q,
        "aria-label": W,
        disabled: $
      }), (0, a.jsx)(N.default, {
        size: 16
      }), (0, a.jsx)(h.default, {
        onChange: Q,
        buttonCTA: Y,
        "aria-label": W,
        disabled: $,
        look: I.Button.Looks.OUTLINED,
        color: I.Button.Colors.PRIMARY
      })]
    }), n ? (0, a.jsxs)(a.Fragment, {
      children: [(0, a.jsx)(I.FormDivider, {
        className: U.divider
      }), (0, a.jsxs)(I.FormSection, {
        title: G.default.Messages.CREATOR_MONETIZATION_SETTINGS_GUILD_PRODUCT_SORT_OPTION_TITLE,
        titleId: X,
        disabled: $,
        children: [(0, a.jsx)(I.FormText, {
          type: I.FormText.Types.DESCRIPTION,
          className: U.formDescription,
          disabled: $,
          children: G.default.Messages.CREATOR_MONETIZATION_SETTINGS_GUILD_PRODUCT_SORT_OPTION_DESCRIPTION
        }), (0, a.jsx)(I.SingleSelect, {
          value: b,
          placeholder: G.default.Messages.SELECT,
          options: ee,
          onChange: e => y(e)
        })]
      })]
    }) : null, et.length > 0 && (0, a.jsxs)(a.Fragment, {
      children: [(0, a.jsx)(I.FormDivider, {
        className: U.divider
      }), (0, a.jsxs)(I.FormSection, {
        title: G.default.Messages.CREATOR_MONETIZATION_SETTINGS_SERVER_SHOP_DEFAULT_TAB_OPTION_TITLE,
        titleId: X,
        disabled: $,
        children: [(0, a.jsx)(I.FormText, {
          type: I.FormText.Types.DESCRIPTION,
          className: U.formDescription,
          disabled: $,
          children: G.default.Messages.CREATOR_MONETIZATION_SETTINGS_SERVER_SHOP_DEFAULT_TAB_OPTION_DESCRIPTION
        }), (0, a.jsx)(I.SingleSelect, {
          value: F,
          placeholder: G.default.Messages.SELECT,
          options: et,
          onChange: e => H(e)
        })]
      })]
    }), (0, a.jsx)(E.TransitionGroup, {
      component: "div",
      className: U.contentRegion,
      children: J && (0, a.jsx)(m.default, {
        children: (0, a.jsx)(T.default, {
          submitting: k,
          disabled: !q,
          onReset: () => {
            var e;
            _(i), C(null !== (e = null == r ? void 0 : r.description) && void 0 !== e ? e : ""), L(d), y(null == r ? void 0 : r.store_page_guild_products_default_sort), H(null == r ? void 0 : r.server_shop_tab_order)
          },
          onSave: () => {
            o()(null != r, "Settings must be defined");
            let e = {};
            S !== r.description && (e.description = S), null != R && R.startsWith("data:") && (e.cover_image = R), c !== i && (e.full_server_gate = c === v.GuildRoleSubscriptionFormat.ALL_CHANNELS), b !== r.store_page_guild_products_default_sort && (e.store_page_guild_products_default_sort = b), F !== r.server_shop_tab_order && (e.server_shop_tab_order = F), !u().isEmpty(e) && V(s.id, e)
          },
          saveButtonTooltip: q ? void 0 : G.default.Messages.GUILD_ROLE_SUBSCRIPTION_SETUP_INFO_FULL_OUT_ALL_INFO
        })
      })
    })]
  })
}