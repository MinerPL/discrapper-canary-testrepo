"use strict";
s.r(t), s.d(t, {
  GuildSettingsVanityURLNotice: function() {
    return v
  },
  default: function() {
    return G
  }
}), s("757143"), s("47120");
var a = s("735250"),
  l = s("470079"),
  n = s("803997"),
  i = s.n(n),
  r = s("442837"),
  o = s("481060"),
  d = s("497321"),
  u = s("852860"),
  c = s("100527"),
  E = s("367907"),
  _ = s("906732"),
  I = s("807582"),
  T = s("26323"),
  S = s("366980"),
  f = s("246946"),
  m = s("379070"),
  N = s("976644"),
  g = s("709586"),
  h = s("267642"),
  C = s("999382"),
  R = s("621319"),
  x = s("44550"),
  L = s("770270"),
  O = s("981631"),
  A = s("30513"),
  p = s("689938"),
  M = s("372221");

function D(e, t, s) {
  return t in e ? Object.defineProperty(e, t, {
    value: s,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = s, e
}
let v = r.default.connectStores([C.default, x.default], () => {
  let e = x.default.vanityURLCode,
    t = C.default.getGuildId();
  return {
    vanityURLCode: e,
    guildId: t,
    onReset() {
      (0, R.resetCode)()
    },
    onSave() {
      null != t && (0, R.saveCode)(t, e)
    }
  }
})(u.default);
class j extends l.PureComponent {
  componentWillUnmount() {
    (0, R.close)()
  }
  renderEditCard() {
    let {
      isRemoving: e
    } = this.state, {
      hasError: t,
      originalVanityURLCode: s,
      vanityURLCode: l,
      vanityURLUses: n,
      guild: i
    } = this.props;
    if (null == l) return (0, a.jsx)(o.Spinner, {});
    let r = (null == i ? void 0 : i.hasFeature(O.GuildFeatures.VANITY_URL)) === !0;
    return (0, a.jsxs)(o.Card, {
      editable: !0,
      className: M.editVanityUrlCard,
      children: [(0, a.jsxs)(o.FormTitle, {
        className: M.__invalid_formTitle,
        children: [(0, a.jsx)("div", {
          className: M.formTitleField,
          children: p.default.Messages.INVITE_URL
        }), l.length > 0 ? (0, a.jsx)("div", {
          children: p.default.Messages.VANITY_URL_USES.format({
            uses: n
          })
        }) : null]
      }), (0, a.jsx)(m.default, {
        prefix: "".concat("https://discord.gg", "/"),
        value: l,
        onChange: this.handleInviteCodeChange,
        maxLength: 25,
        autoFocus: !0,
        error: t,
        disabled: !r
      }), null != s && s.length > 0 ? (0, a.jsx)(o.Button, {
        className: M.removeVanityUrlButton,
        onClick: this.handleRemoveVanityURL,
        submitting: e,
        look: o.Button.Looks.LINK,
        size: o.Button.Sizes.MIN,
        color: o.Button.Colors.RED,
        children: p.default.Messages.REMOVE_VANITY_URL
      }) : null]
    })
  }
  renderUpsellButton() {
    return (0, a.jsxs)(N.default, {
      color: o.Button.Colors.GREEN,
      className: i()(M.marginTop16),
      innerClassName: M.upsellButton,
      onClick: this.handleVanityUrlUpsellButton,
      children: [(0, a.jsx)(g.default, {
        height: 16,
        width: 16,
        className: M.premiumUpsellBadge
      }), " ", p.default.Messages.PREMIUM_GUILD_UNLOCK_WTH_BOOSTING_CTA]
    })
  }
  renderInfo() {
    let {
      hasError: e,
      errorDetails: t,
      originalVanityURLCode: s
    } = this.props;
    if (e) return (0, a.jsx)(o.Text, {
      variant: "text-md/normal",
      color: "text-danger",
      className: M.__invalid_marginTop20,
      children: (0, L.getErrorMessageFromErrorCode)(null == t ? void 0 : t.code)
    });
    if (null != s && s.length > 0) {
      let e = (0, S.default)(s);
      return (0, a.jsx)(o.FormText, {
        className: M.__invalid_marginTop20,
        type: o.FormTextTypes.LABEL_DESCRIPTOR,
        children: p.default.Messages.VANITY_URL_HELP_EXTENDED_LINK.format({
          urlText: e,
          urlValue: e
        })
      })
    }
  }
  handleRemoveVanityURL() {
    (0, R.setCode)("")
  }
  handleInviteCodeChange(e) {
    (0, R.setCode)(e.replace(/ /g, "-"))
  }
  render() {
    let {
      hide: e,
      guild: t
    } = this.props;
    return null == t ? null : e ? (0, a.jsx)(d.default, {}) : (0, a.jsxs)(o.FormSection, {
      children: [(0, a.jsxs)(o.FormTitle, {
        tag: o.FormTitleTags.H1,
        className: M.flexFormTitle,
        children: [(0, a.jsx)("div", {
          children: p.default.Messages.VANITY_URL
        }), (0, a.jsx)(I.default, {
          guild: t,
          guildFeature: O.GuildFeatures.VANITY_URL,
          className: M.guildFeatureAvailabilityIndicator,
          onClick: this.handleVanityUrlUpsellIndicator
        })]
      }), (0, a.jsx)(o.FormText, {
        type: o.FormTextTypes.DESCRIPTION,
        className: M.__invalid_marginBottom8,
        children: p.default.Messages.VANITY_URL_HELP
      }), (0, a.jsx)(o.FormText, {
        type: o.FormTextTypes.DESCRIPTION,
        className: M.__invalid_marginBottom20,
        children: p.default.Messages.VANITY_URL_HELP_CONFLICT
      }), (0, a.jsx)(o.FormText, {
        type: o.FormTextTypes.DESCRIPTION,
        className: M.__invalid_marginBottom20,
        children: p.default.Messages.VANITY_URL_DEFAULT_CHANNEL
      }), (0, L.canSeeVanityUrlSettings)(t) ? this.renderEditCard() : this.renderUpsellButton(), this.renderInfo()]
    })
  }
  constructor(...e) {
    super(...e), D(this, "state", {
      isRemoving: !1
    }), D(this, "handleShowModalUpsell", (e, t, s, a, l) => {
      e.preventDefault(), e.stopPropagation();
      let {
        guild: n,
        analyticsLocations: i
      } = this.props;
      null != n && ((0, E.trackWithMetadata)(O.AnalyticEvents.PREMIUM_GUILD_PROMOTION_OPENED, {
        location: {
          section: s,
          object: O.AnalyticsObjects.LEARN_MORE,
          objectType: (0, h.boostedGuildTierToAnalyticsObjectType)(t),
          location_stack: i
        },
        guild_id: null == n ? void 0 : n.id
      }), (0, T.default)({
        analyticsLocations: i,
        analyticsSourceLocation: {
          section: s,
          object: a,
          page: O.AnalyticsPages.GUILD_SETTINGS
        },
        guild: n,
        perks: l
      }))
    }), D(this, "handleVanityUrlUpsellIndicator", e => {
      this.handleShowModalUpsell(e, O.BoostedGuildTiers.TIER_3, O.AnalyticsSections.GUILD_SETTINGS_VANITY_URL, O.AnalyticsObjects.BADGE, (0, A.vanityUrlUpsellPerks)())
    }), D(this, "handleVanityUrlUpsellButton", e => {
      this.handleShowModalUpsell(e, O.BoostedGuildTiers.TIER_3, O.AnalyticsSections.GUILD_SETTINGS_VANITY_URL, O.AnalyticsObjects.BUTTON_CTA, (0, A.vanityUrlUpsellPerks)())
    })
  }
}

function G() {
  let e = (0, r.useStateFromStores)([C.default], () => C.default.getGuild()),
    t = (0, r.useStateFromStoresObject)([x.default], () => ({
      vanityURLCode: x.default.vanityURLCode,
      vanityURLUses: x.default.vanityURLUses,
      originalVanityURLCode: x.default.originalVanityURLCode,
      hasError: x.default.hasError(),
      errorDetails: x.default.errorDetails
    })),
    s = (0, r.useStateFromStores)([f.default], () => f.default.hideInstantInvites),
    {
      analyticsLocations: l
    } = (0, _.default)(c.default.VANITY_URL);
  return (0, a.jsx)(_.AnalyticsLocationProvider, {
    value: l,
    children: (0, a.jsx)(j, {
      guild: e,
      ...t,
      hide: s,
      analyticsLocations: l
    })
  })
}