"use strict";
t.d(s, {
  Z: function() {
    return x
  }
}), t(47120);
var n = t(735250),
  i = t(470079),
  l = t(442837),
  a = t(481060),
  r = t(345861),
  o = t(208567),
  c = t(153124),
  d = t(937615),
  u = t(289393),
  E = t(723047),
  _ = t(727843),
  I = t(290348),
  T = t(927954),
  N = t(783454),
  m = t(981631),
  S = t(689938),
  h = t(169769),
  g = t(881744);

function x(e) {
  let {
    priceTiers: s
  } = e, {
    editStateId: t
  } = (0, _.N)(), x = (0, l.e7)([u.Z], () => {
    var e;
    return null === (e = u.Z.getSubscriptionListing(t)) || void 0 === e ? void 0 : e.image_asset
  }), [C, R] = I._T(t), [L, O] = I.mR(t), [A, p] = I.PK(t), [M, f] = I.d9(t, 1024), {
    imageCTA: v,
    imageAriaLabel: D,
    setFilename: Z
  } = (0, T.Z)(x), j = i.useMemo(() => {
    var e;
    return null !== (e = null == s ? void 0 : s.map(e => ({
      value: e,
      label: (0, d.T4)(e, m.pKx.USD)
    }))) && void 0 !== e ? e : []
  }, [s]);

  function U(e, s) {
    null != s && Z(s.name), f(e)
  }
  let G = (0, E.mY)(),
    P = (0, c.Dt)(),
    b = (0, c.Dt)(),
    B = (0, c.Dt)();
  return (0, n.jsxs)(N.Z, {
    title: S.Z.Messages.GUILD_ROLE_SUBSCRIPTION_SETUP_TIER_BASIC_INFO_SECTION_TITLE,
    intiallyExpanded: !0,
    children: [(0, n.jsxs)("div", {
      className: g.formSplit,
      children: [(0, n.jsx)("div", {
        className: g.formSplitHalf,
        children: (0, n.jsx)(a.FormSection, {
          title: S.Z.Messages.GUILD_ROLE_SUBSCRIPTION_SETUP_TIER_NAME_TITLE,
          titleId: P,
          disabled: G,
          children: (0, n.jsx)(a.TextInput, {
            placeholder: S.Z.Messages.GUILD_ROLE_SUBSCRIPTION_SETUP_TIER_NAME_PLACEHOLDER,
            value: C,
            inputClassName: h.formInput,
            onChange: R,
            "aria-labelledby": P,
            disabled: G
          })
        })
      }), (0, n.jsx)("div", {
        className: g.formSplitHalf,
        children: (0, n.jsx)(a.FormSection, {
          title: S.Z.Messages.GUILD_ROLE_SUBSCRIPTION_SETUP_TIER_PRICE_TITLE,
          titleId: b,
          disabled: G,
          children: (0, n.jsx)(a.SingleSelect, {
            options: j,
            className: h.formInput,
            isDisabled: G || null == s,
            placeholder: S.Z.Messages.GUILD_ROLE_SUBSCRIPTION_SETUP_TIER_PRICE_PLACEHOLDER,
            value: L,
            onChange: O,
            maxVisibleItems: 5,
            look: a.SelectLooks.CUSTOM,
            "aria-labelledby": b
          })
        })
      })]
    }), (0, n.jsx)(a.Spacer, {
      size: 24
    }), (0, n.jsx)(a.FormSection, {
      title: S.Z.Messages.GUILD_ROLE_SUBSCRIPTION_SETUP_TIER_DESCRIPTION_TITLE,
      titleId: B,
      disabled: G,
      children: (0, n.jsx)(a.TextArea, {
        placeholder: S.Z.Messages.GUILD_ROLE_SUBSCRIPTION_SETUP_TIER_DESCRIPTION_PLACEHOLDER,
        value: A,
        rows: 2,
        autosize: !0,
        className: h.formInput,
        onChange: p,
        "aria-labelledby": B,
        disabled: G
      })
    }), (0, n.jsx)(a.Spacer, {
      size: 24
    }), (0, n.jsxs)("div", {
      className: g.iconSection,
      children: [(0, n.jsxs)(a.FormSection, {
        title: S.Z.Messages.GUILD_ROLE_SUBSCRIPTION_SETUP_TIER_SYMBOL_TITLE,
        className: g.iconSectionDescription,
        disabled: G,
        children: [(0, n.jsx)(a.FormText, {
          type: a.FormText.Types.DESCRIPTION,
          className: h.formDescription,
          disabled: G,
          children: S.Z.Messages.GUILD_ROLE_SUBSCRIPTION_SETUP_TIER_SYMBOL_DESCRIPTION
        }), (0, n.jsx)(r.Z, {
          onChange: U,
          buttonCTA: v,
          "aria-label": D,
          disabled: G,
          look: a.Button.Looks.OUTLINED,
          color: a.Button.Colors.PRIMARY
        })]
      }), (0, n.jsx)(o.Z, {
        image: M,
        hint: v,
        showIcon: !0,
        showRemoveButton: !1,
        hideSize: !0,
        className: g.iconUploader,
        imageClassName: g.tierSymbolUploaderInner,
        onChange: U,
        "aria-label": D,
        disabled: G
      })]
    })]
  })
}