"use strict";
t.d(s, {
  T: function() {
    return v
  },
  Z: function() {
    return Z
  }
}), t(757143), t(47120);
var n = t(735250),
  i = t(470079),
  l = t(120356),
  a = t.n(l),
  r = t(442837),
  o = t(481060),
  c = t(497321),
  d = t(852860),
  u = t(100527),
  E = t(367907),
  _ = t(906732),
  I = t(807582),
  T = t(26323),
  N = t(366980),
  m = t(246946),
  S = t(379070),
  h = t(709586),
  g = t(267642),
  x = t(999382),
  C = t(621319),
  R = t(44550),
  L = t(770270),
  O = t(981631),
  A = t(30513),
  p = t(689938),
  M = t(292882);

function f(e, s, t) {
  return s in e ? Object.defineProperty(e, s, {
    value: t,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[s] = t, e
}
let v = r.ZP.connectStores([x.Z, R.Z], () => {
  let e = R.Z.vanityURLCode,
    s = x.Z.getGuildId();
  return {
    vanityURLCode: e,
    guildId: s,
    onReset() {
      (0, C.H7)()
    },
    onSave() {
      null != s && (0, C.en)(s, e)
    }
  }
})(d.Z);
class D extends i.PureComponent {
  componentWillUnmount() {
    (0, C.xv)()
  }
  renderEditCard() {
    let {
      isRemoving: e
    } = this.state, {
      hasError: s,
      originalVanityURLCode: t,
      vanityURLCode: i,
      vanityURLUses: l,
      guild: a
    } = this.props;
    if (null == i) return (0, n.jsx)(o.Spinner, {});
    let r = (null == a ? void 0 : a.hasFeature(O.oNc.VANITY_URL)) === !0;
    return (0, n.jsxs)(o.Card, {
      editable: !0,
      className: M.editVanityUrlCard,
      children: [(0, n.jsxs)(o.FormTitle, {
        className: M.__invalid_formTitle,
        children: [(0, n.jsx)("div", {
          className: M.formTitleField,
          children: p.Z.Messages.INVITE_URL
        }), i.length > 0 ? (0, n.jsx)("div", {
          children: p.Z.Messages.VANITY_URL_USES.format({
            uses: l
          })
        }) : null]
      }), (0, n.jsx)(S.Z, {
        prefix: "".concat("https://discord.gg", "/"),
        value: i,
        onChange: this.handleInviteCodeChange,
        maxLength: 25,
        autoFocus: !0,
        error: s,
        disabled: !r
      }), null != t && t.length > 0 ? (0, n.jsx)(o.Button, {
        className: M.removeVanityUrlButton,
        onClick: this.handleRemoveVanityURL,
        submitting: e,
        look: o.Button.Looks.LINK,
        size: o.Button.Sizes.MIN,
        color: o.Button.Colors.RED,
        children: p.Z.Messages.REMOVE_VANITY_URL
      }) : null]
    })
  }
  renderUpsellButton() {
    return (0, n.jsxs)(o.ShinyButton, {
      color: o.Button.Colors.GREEN,
      className: a()(M.marginTop16),
      innerClassName: M.upsellButton,
      onClick: this.handleVanityUrlUpsellButton,
      children: [(0, n.jsx)(h.Z, {
        height: 16,
        width: 16,
        className: M.premiumUpsellBadge
      }), " ", p.Z.Messages.PREMIUM_GUILD_UNLOCK_WTH_BOOSTING_CTA]
    })
  }
  renderInfo() {
    let {
      hasError: e,
      errorDetails: s,
      originalVanityURLCode: t
    } = this.props;
    if (e) return (0, n.jsx)(o.Text, {
      variant: "text-md/normal",
      color: "text-danger",
      className: M.__invalid_marginTop20,
      children: (0, L.i)(null == s ? void 0 : s.code)
    });
    if (null != t && t.length > 0) {
      let e = (0, N.Z)(t);
      return (0, n.jsx)(o.FormText, {
        className: M.__invalid_marginTop20,
        type: o.FormTextTypes.LABEL_DESCRIPTOR,
        children: p.Z.Messages.VANITY_URL_HELP_EXTENDED_LINK.format({
          urlText: e,
          urlValue: e
        })
      })
    }
  }
  handleRemoveVanityURL() {
    (0, C.Gy)("")
  }
  handleInviteCodeChange(e) {
    (0, C.Gy)(e.replace(/ /g, "-"))
  }
  render() {
    let {
      hide: e,
      guild: s
    } = this.props;
    return null == s ? null : e ? (0, n.jsx)(c.Z, {}) : (0, n.jsxs)(o.FormSection, {
      children: [(0, n.jsxs)(o.FormTitle, {
        tag: o.FormTitleTags.H1,
        className: M.flexFormTitle,
        children: [(0, n.jsx)("div", {
          children: p.Z.Messages.VANITY_URL
        }), (0, n.jsx)(I.Z, {
          guild: s,
          guildFeature: O.oNc.VANITY_URL,
          className: M.guildFeatureAvailabilityIndicator,
          onClick: this.handleVanityUrlUpsellIndicator
        })]
      }), (0, n.jsx)(o.FormText, {
        type: o.FormTextTypes.DESCRIPTION,
        className: M.__invalid_marginBottom8,
        children: p.Z.Messages.VANITY_URL_HELP
      }), (0, n.jsx)(o.FormText, {
        type: o.FormTextTypes.DESCRIPTION,
        className: M.__invalid_marginBottom20,
        children: p.Z.Messages.VANITY_URL_HELP_CONFLICT
      }), (0, n.jsx)(o.FormText, {
        type: o.FormTextTypes.DESCRIPTION,
        className: M.__invalid_marginBottom20,
        children: p.Z.Messages.VANITY_URL_DEFAULT_CHANNEL
      }), (0, L.p)(s) ? this.renderEditCard() : this.renderUpsellButton(), this.renderInfo()]
    })
  }
  constructor(...e) {
    super(...e), f(this, "state", {
      isRemoving: !1
    }), f(this, "handleShowModalUpsell", (e, s, t, n, i) => {
      e.preventDefault(), e.stopPropagation();
      let {
        guild: l,
        analyticsLocations: a
      } = this.props;
      null != l && ((0, E.yw)(O.rMx.PREMIUM_GUILD_PROMOTION_OPENED, {
        location: {
          section: t,
          object: O.qAy.LEARN_MORE,
          objectType: (0, g.ge)(s),
          location_stack: a
        },
        guild_id: null == l ? void 0 : l.id
      }), (0, T.Z)({
        analyticsLocations: a,
        analyticsSourceLocation: {
          section: t,
          object: n,
          page: O.ZY5.GUILD_SETTINGS
        },
        guild: l,
        perks: i
      }))
    }), f(this, "handleVanityUrlUpsellIndicator", e => {
      this.handleShowModalUpsell(e, O.Eu4.TIER_3, O.jXE.GUILD_SETTINGS_VANITY_URL, O.qAy.BADGE, (0, A.WW)())
    }), f(this, "handleVanityUrlUpsellButton", e => {
      this.handleShowModalUpsell(e, O.Eu4.TIER_3, O.jXE.GUILD_SETTINGS_VANITY_URL, O.qAy.BUTTON_CTA, (0, A.WW)())
    })
  }
}

function Z() {
  let e = (0, r.e7)([x.Z], () => x.Z.getGuild()),
    s = (0, r.cj)([R.Z], () => ({
      vanityURLCode: R.Z.vanityURLCode,
      vanityURLUses: R.Z.vanityURLUses,
      originalVanityURLCode: R.Z.originalVanityURLCode,
      hasError: R.Z.hasError(),
      errorDetails: R.Z.errorDetails
    })),
    t = (0, r.e7)([m.Z], () => m.Z.hideInstantInvites),
    {
      analyticsLocations: i
    } = (0, _.ZP)(u.Z.VANITY_URL);
  return (0, n.jsx)(_.Gt, {
    value: i,
    children: (0, n.jsx)(D, {
      guild: e,
      ...s,
      hide: t,
      analyticsLocations: i
    })
  })
}