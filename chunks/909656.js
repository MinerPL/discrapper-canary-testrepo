"use strict";
t.d(s, {
  Z: function() {
    return P
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
  u = t(77866),
  E = t(215569),
  _ = t(477690),
  I = t(481060),
  T = t(852860),
  N = t(393238),
  m = t(345861),
  S = t(208567),
  h = t(153124),
  g = t(93879),
  x = t(385950),
  C = t(73346),
  R = t(624138),
  L = t(584825),
  O = t(723047),
  A = t(927954),
  p = t(164e3),
  M = t(587431),
  f = t(293810),
  v = t(333866),
  D = t(689938),
  Z = t(738961);
let j = (0, R.Mg)(_.Z.GUILD_SETTINGS_ROLE_SUBSCRIPTIONS_OVERVIEW_SETTINGS_MAX_WIDTH);

function U() {
  return [{
    name: D.Z.Messages.GUILD_ROLE_SUBSCRIPTION_FORMAT_SOME_CHANNELS_NAME,
    desc: D.Z.Messages.GUILD_ROLE_SUBSCRIPTION_FORMAT_SOME_CHANNELS_DESCRIPTION,
    value: f.e3.SOME_CHANNELS,
    icon: g.Z
  }, {
    name: D.Z.Messages.GUILD_ROLE_SUBSCRIPTION_FORMAT_ALL_CHANNELS_NAME,
    desc: D.Z.Messages.GUILD_ROLE_SUBSCRIPTION_FORMAT_ALL_CHANNELS_DESCRIPTION,
    value: f.e3.ALL_CHANNELS,
    icon: x.Z
  }]
}

function G(e) {
  let {
    value: s,
    "aria-labelledby": t,
    onChange: l,
    disabled: r = !1
  } = e, {
    ref: o,
    width: c
  } = (0, N.Z)(), d = (0, u.Z)(U), E = i.useMemo(() => d.map(e => ({
    ...e,
    icon: function() {
      let {
        icon: s
      } = e;
      return (0, n.jsx)("div", {
        className: Z.formatRadioIconWrapper,
        children: (0, n.jsx)(s, {
          className: Z.formatRadioIcon
        })
      })
    },
    radioBarClassName: Z.formatOptionRadioBar,
    radioItemIconClassName: Z.formatOptionRadioItemIcon
  })), [d]), _ = null != c && c >= 400;
  return (0, n.jsx)("div", {
    ref: o,
    children: (0, n.jsx)(I.RadioGroup, {
      options: E,
      value: s,
      orientation: _ ? "horizontal" : "vertical",
      size: I.RadioGroup.Sizes.NONE,
      className: a()({
        [Z.radioGroupHorizontal]: _
      }),
      radioItemClassName: Z.formatOptionRadioItem,
      onChange: e => {
        let {
          value: s
        } = e;
        return l(s)
      },
      "aria-labelledby": t,
      disabled: r
    })
  })
}

function P(e) {
  var s;
  let {
    guild: t,
    isGuildProducts: l = !1
  } = e, {
    format: a
  } = (0, p.Z)(t.id), r = (0, L.YB)(t.id), c = i.useCallback(() => {
    var e;
    return (null == r ? void 0 : null === (e = r.cover_image_asset) || void 0 === e ? void 0 : e.application_id) == null ? null : (0, C._W)(r.cover_image_asset.application_id, r.cover_image_asset, j)
  }, [r]), [u, _] = i.useState(a), [N, g] = i.useState(null !== (s = null == r ? void 0 : r.description) && void 0 !== s ? s : ""), [x, R] = i.useState(c), [U, P] = i.useState(null == r ? void 0 : r.store_page_guild_products_default_sort), [b, B] = i.useState(null == r ? void 0 : r.server_shop_tab_order), {
    loading: y,
    error: F,
    updateSubscriptionsSettings: w
  } = (0, L.QV)(), {
    imageCTA: k,
    imageAriaLabel: H,
    setFilename: V
  } = (0, A.Z)(null == r ? void 0 : r.cover_image_asset), Y = (0, h.Dt)(), W = (0, h.Dt)(), K = (0, h.Dt)();

  function z(e, s) {
    o()(null != e, "Null value not allowed"), null != s && V(s.name), R(e)
  }
  let q = i.useMemo(() => {
      var e;
      return null != N && N !== (null !== (e = null == r ? void 0 : r.description) && void 0 !== e ? e : "") || (null == x ? void 0 : x.startsWith("data:")) === !0 || u !== a || (null == r ? void 0 : r.store_page_guild_products_default_sort) !== U || (null == r ? void 0 : r.server_shop_tab_order) !== b
    }, [x, a, N, r, u, U, b]),
    X = null != N && "" !== N && null != x;
  i.useEffect(() => {
    var e;
    (null == r ? void 0 : null === (e = r.cover_image_asset) || void 0 === e ? void 0 : e.application_id) != null && R((0, C._W)(r.cover_image_asset.application_id, r.cover_image_asset, j))
  }, [null == r ? void 0 : r.cover_image_asset]);
  let Q = (0, O.mY)(),
    J = i.useMemo(() => v.kL.map(e => ({
      label: (0, v.eJ)(e),
      value: e
    })), []),
    $ = i.useMemo(() => [{
      label: D.Z.Messages.GUILD_PRODUCTS_TITLE,
      value: v.a3.PRODUCTS_FIRST
    }, {
      label: D.Z.Messages.GUILD_ROLE_SUBSCRIPTIONS_TITLE,
      value: v.a3.SUBS_FIRST
    }], []);
  return (0, n.jsxs)("div", {
    className: Z.container,
    children: [null != F && (0, n.jsxs)(n.Fragment, {
      children: [(0, n.jsx)(M.Z, {
        children: F.getAnyErrorMessage()
      }), (0, n.jsx)(I.Spacer, {
        size: 16
      })]
    }), l ? null : (0, n.jsxs)(n.Fragment, {
      children: [(0, n.jsxs)(I.FormSection, {
        title: D.Z.Messages.GUILD_ROLE_SUBSCRIPTION_FORMAT_TITLE,
        titleId: Y,
        disabled: Q,
        children: [(0, n.jsx)(I.FormText, {
          type: I.FormText.Types.DESCRIPTION,
          className: Z.formDescription,
          disabled: Q,
          children: D.Z.Messages.GUILD_ROLE_SUBSCRIPTION_FORMAT_DESCRIPTION
        }), (0, n.jsx)(G, {
          value: u,
          onChange: e => {
            a !== e && e === f.e3.ALL_CHANNELS && (0, I.openModal)(e => (0, n.jsx)(I.ConfirmModal, {
              ...e,
              header: D.Z.Messages.GUILD_ROLE_SUBSCRIPTION_FORMAT_ALL_CHANNELS_DIALOG_TITLE,
              confirmText: D.Z.Messages.GOT_IT,
              confirmButtonColor: I.Button.Colors.BRAND,
              children: (0, n.jsx)(I.Text, {
                variant: "text-md/normal",
                children: D.Z.Messages.GUILD_ROLE_SUBSCRIPTION_FORMAT_ALL_CHANNELS_DIALOG_TEXT
              })
            })), _(e)
          },
          "aria-labelledby": Y,
          disabled: Q
        })]
      }), (0, n.jsx)(I.FormDivider, {
        className: Z.divider
      })]
    }), (0, n.jsx)(I.FormSection, {
      title: D.Z.Messages.GUILD_ROLE_SUBSCRIPTION_SETUP_INFO_DESCRIPTION_TITLE,
      titleId: W,
      disabled: Q,
      children: (0, n.jsx)(I.TextArea, {
        placeholder: l ? D.Z.Messages.GUILD_PRODUCT_SETUP_INFO_DESCRIPTION_PLACEHOLDER : D.Z.Messages.GUILD_ROLE_SUBSCRIPTION_SETUP_INFO_DESCRIPTION_PLACEHOLDER,
        maxLength: 1500,
        value: N,
        rows: 2,
        autosize: !0,
        onChange: g,
        "aria-labelledby": W,
        disabled: Q
      })
    }), (0, n.jsx)(I.FormDivider, {
      className: Z.divider
    }), (0, n.jsxs)(I.FormSection, {
      title: D.Z.Messages.GUILD_ROLE_SUBSCRIPTION_SETUP_INFO_COVER_IMAGE_TITLE,
      disabled: Q,
      children: [(0, n.jsx)(I.FormText, {
        type: I.FormText.Types.DESCRIPTION,
        className: Z.formDescription,
        disabled: Q,
        children: D.Z.Messages.GUILD_ROLE_SUBSCRIPTION_SETUP_INFO_COVER_IMAGE_DESCRIPTION
      }), (0, n.jsx)(S.Z, {
        image: x,
        hint: k,
        showIcon: !0,
        showRemoveButton: !1,
        hideSize: !0,
        className: Z.coverImageUploader,
        iconWrapperClassName: Z.coverImageUploaderIconWrapper,
        imageClassName: Z.coverImageUploaderInner,
        iconClassName: Z.coverImageUploaderIcon,
        onChange: z,
        "aria-label": H,
        disabled: Q
      }), (0, n.jsx)(I.Spacer, {
        size: 16
      }), (0, n.jsx)(m.Z, {
        onChange: z,
        buttonCTA: k,
        "aria-label": H,
        disabled: Q,
        look: I.Button.Looks.OUTLINED,
        color: I.Button.Colors.PRIMARY
      })]
    }), l ? (0, n.jsxs)(n.Fragment, {
      children: [(0, n.jsx)(I.FormDivider, {
        className: Z.divider
      }), (0, n.jsxs)(I.FormSection, {
        title: D.Z.Messages.CREATOR_MONETIZATION_SETTINGS_GUILD_PRODUCT_SORT_OPTION_TITLE,
        titleId: K,
        disabled: Q,
        children: [(0, n.jsx)(I.FormText, {
          type: I.FormText.Types.DESCRIPTION,
          className: Z.formDescription,
          disabled: Q,
          children: D.Z.Messages.CREATOR_MONETIZATION_SETTINGS_GUILD_PRODUCT_SORT_OPTION_DESCRIPTION
        }), (0, n.jsx)(I.SingleSelect, {
          value: U,
          placeholder: D.Z.Messages.SELECT,
          options: J,
          onChange: e => P(e)
        })]
      })]
    }) : null, $.length > 0 && (0, n.jsxs)(n.Fragment, {
      children: [(0, n.jsx)(I.FormDivider, {
        className: Z.divider
      }), (0, n.jsxs)(I.FormSection, {
        title: D.Z.Messages.CREATOR_MONETIZATION_SETTINGS_SERVER_SHOP_DEFAULT_TAB_OPTION_TITLE,
        titleId: K,
        disabled: Q,
        children: [(0, n.jsx)(I.FormText, {
          type: I.FormText.Types.DESCRIPTION,
          className: Z.formDescription,
          disabled: Q,
          children: D.Z.Messages.CREATOR_MONETIZATION_SETTINGS_SERVER_SHOP_DEFAULT_TAB_OPTION_DESCRIPTION
        }), (0, n.jsx)(I.SingleSelect, {
          value: b,
          placeholder: D.Z.Messages.SELECT,
          options: $,
          onChange: e => B(e)
        })]
      })]
    }), (0, n.jsx)(E.W, {
      component: "div",
      className: Z.contentRegion,
      children: q && (0, n.jsx)(I.SlideIn, {
        children: (0, n.jsx)(T.Z, {
          submitting: y,
          disabled: !X,
          onReset: () => {
            var e;
            _(a), g(null !== (e = null == r ? void 0 : r.description) && void 0 !== e ? e : ""), R(c), P(null == r ? void 0 : r.store_page_guild_products_default_sort), B(null == r ? void 0 : r.server_shop_tab_order)
          },
          onSave: () => {
            o()(null != r, "Settings must be defined");
            let e = {};
            N !== r.description && (e.description = N), null != x && x.startsWith("data:") && (e.cover_image = x), u !== a && (e.full_server_gate = u === f.e3.ALL_CHANNELS), U !== r.store_page_guild_products_default_sort && (e.store_page_guild_products_default_sort = U), b !== r.server_shop_tab_order && (e.server_shop_tab_order = b), !d().isEmpty(e) && w(t.id, e)
          },
          saveButtonTooltip: X ? void 0 : D.Z.Messages.GUILD_ROLE_SUBSCRIPTION_SETUP_INFO_FULL_OUT_ALL_INFO
        })
      })
    })]
  })
}