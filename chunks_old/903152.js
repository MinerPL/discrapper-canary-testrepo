"use strict";
s.r(t), s.d(t, {
  default: function() {
    return C
  }
}), s("222007");
var a = s("37983"),
  l = s("884691"),
  n = s("446674"),
  i = s("77078"),
  r = s("608684"),
  o = s("191814"),
  d = s("476765"),
  u = s("950603"),
  c = s("153160"),
  E = s("648825"),
  _ = s("757715"),
  I = s("406876"),
  T = s("167109"),
  S = s("620199"),
  f = s("561205"),
  m = s("49111"),
  N = s("782340"),
  g = s("325224"),
  h = s("570625");

function C(e) {
  let {
    priceTiers: t
  } = e, {
    editStateId: s
  } = (0, I.useEditStateContext)(), C = (0, n.useStateFromStores)([E.default], () => {
    var e;
    return null === (e = E.default.getSubscriptionListing(s)) || void 0 === e ? void 0 : e.image_asset
  }), [R, x] = T.useName(s), [L, O] = T.usePriceTier(s), [A, p] = T.useDescription(s), [M, D] = T.useImage(s, 1024), {
    imageCTA: v,
    imageAriaLabel: G,
    setFilename: j
  } = (0, S.default)(C), U = l.useMemo(() => {
    var e;
    return null !== (e = null == t ? void 0 : t.map(e => ({
      value: e,
      label: (0, c.formatPrice)(e, m.CurrencyCodes.USD)
    }))) && void 0 !== e ? e : []
  }, [t]);

  function P(e, t) {
    null != t && j(t.name), D(e)
  }
  let b = (0, _.useRoleSubscriptionSettingsDisabled)(),
    B = (0, d.useUID)(),
    y = (0, d.useUID)(),
    F = (0, d.useUID)();
  return (0, a.jsxs)(f.default, {
    title: N.default.Messages.GUILD_ROLE_SUBSCRIPTION_SETUP_TIER_BASIC_INFO_SECTION_TITLE,
    intiallyExpanded: !0,
    children: [(0, a.jsxs)("div", {
      className: h.formSplit,
      children: [(0, a.jsx)("div", {
        className: h.formSplitHalf,
        children: (0, a.jsx)(i.FormSection, {
          title: N.default.Messages.GUILD_ROLE_SUBSCRIPTION_SETUP_TIER_NAME_TITLE,
          titleId: B,
          disabled: b,
          children: (0, a.jsx)(i.TextInput, {
            placeholder: N.default.Messages.GUILD_ROLE_SUBSCRIPTION_SETUP_TIER_NAME_PLACEHOLDER,
            value: R,
            inputClassName: g.formInput,
            onChange: x,
            "aria-labelledby": B,
            disabled: b
          })
        })
      }), (0, a.jsx)("div", {
        className: h.formSplitHalf,
        children: (0, a.jsx)(i.FormSection, {
          title: N.default.Messages.GUILD_ROLE_SUBSCRIPTION_SETUP_TIER_PRICE_TITLE,
          titleId: y,
          disabled: b,
          children: (0, a.jsx)(i.SingleSelect, {
            options: U,
            className: g.formInput,
            isDisabled: b || null == t,
            placeholder: N.default.Messages.GUILD_ROLE_SUBSCRIPTION_SETUP_TIER_PRICE_PLACEHOLDER,
            value: L,
            onChange: O,
            maxVisibleItems: 5,
            look: i.SelectLooks.CUSTOM,
            "aria-labelledby": y
          })
        })
      })]
    }), (0, a.jsx)(o.default, {
      size: 24
    }), (0, a.jsx)(i.FormSection, {
      title: N.default.Messages.GUILD_ROLE_SUBSCRIPTION_SETUP_TIER_DESCRIPTION_TITLE,
      titleId: F,
      disabled: b,
      children: (0, a.jsx)(i.TextArea, {
        placeholder: N.default.Messages.GUILD_ROLE_SUBSCRIPTION_SETUP_TIER_DESCRIPTION_PLACEHOLDER,
        value: A,
        rows: 2,
        autosize: !0,
        className: g.formInput,
        onChange: p,
        "aria-labelledby": F,
        disabled: b
      })
    }), (0, a.jsx)(o.default, {
      size: 24
    }), (0, a.jsxs)("div", {
      className: h.iconSection,
      children: [(0, a.jsxs)(i.FormSection, {
        title: N.default.Messages.GUILD_ROLE_SUBSCRIPTION_SETUP_TIER_SYMBOL_TITLE,
        className: h.iconSectionDescription,
        disabled: b,
        children: [(0, a.jsx)(i.FormText, {
          type: i.FormText.Types.DESCRIPTION,
          className: g.formDescription,
          disabled: b,
          children: N.default.Messages.GUILD_ROLE_SUBSCRIPTION_SETUP_TIER_SYMBOL_DESCRIPTION
        }), (0, a.jsx)(u.default, {
          onChange: P,
          buttonCTA: v,
          "aria-label": G,
          disabled: b,
          look: i.Button.Looks.OUTLINED,
          color: i.Button.Colors.PRIMARY
        })]
      }), (0, a.jsx)(r.default, {
        image: M,
        hint: v,
        showIcon: !0,
        showRemoveButton: !1,
        hideSize: !0,
        className: h.iconUploader,
        imageClassName: h.tierSymbolUploaderInner,
        onChange: P,
        "aria-label": G,
        disabled: b
      })]
    })]
  })
}