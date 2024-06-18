"use strict";
t.d(s, {
  s: function() {
    return H
  }
}), t(47120), t(653041);
var n = t(735250),
  i = t(470079),
  l = t(772848),
  a = t(442837),
  r = t(481060),
  o = t(852860),
  c = t(558324),
  d = t(933557),
  u = t(719879),
  E = t(59970),
  _ = t(946314),
  I = t(938502),
  T = t(1259),
  N = t(296386),
  m = t(150192),
  S = t(816817),
  h = t(339085),
  g = t(400106),
  x = t(134432),
  C = t(813197),
  R = t(208567),
  L = t(183023),
  O = t(984933),
  A = t(496675),
  p = t(699516),
  M = t(594174),
  f = t(987134),
  v = t(768581),
  D = t(900849),
  Z = t(434404),
  j = t(999382),
  U = t(450474),
  G = t(354051),
  P = t(347604),
  b = t(203377),
  B = t(981631),
  y = t(731455),
  F = t(689938),
  w = t(612247);

function k(e, s, t) {
  return s in e ? Object.defineProperty(e, s, {
    value: t,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[s] = t, e
}
let H = a.ZP.connectStores([j.Z], () => {
  let {
    guild: e,
    originalGuild: s,
    submitting: t,
    guildMetadata: n
  } = j.Z.getProps();
  return {
    guild: e,
    submitting: t,
    onReset() {
      if (null != e) Z.Z.init(e.id)
    },
    onSave() {
      if (null != e)(0, I.UA)(e, s), Z.Z.saveGuild(e.id, {
        features: e.features,
        discoverySplash: e.discoverySplash,
        description: e.description,
        safetyAlertsChannelId: e.safetyAlertsChannelId,
        rulesChannelId: e.rulesChannelId,
        preferredLocale: e.preferredLocale
      }), N.Vv({
        guildId: e.id,
        primaryCategoryId: n.primaryCategoryId,
        keywords: n.keywords,
        emojiDiscoverabilityEnabled: n.emojiDiscoverabilityEnabled,
        partnerActionedTimestamp: n.partnerActionedTimestamp,
        partnerApplicationTimestamp: n.partnerApplicationTimestamp,
        isPublished: n.isPublished,
        reasonsToJoin: n.reasonsToJoin,
        socialLinks: n.socialLinks,
        about: n.about
      })
    }
  }
})(o.Z);
class V extends i.PureComponent {
  async componentDidMount() {
    let {
      guild: e
    } = this.props;
    if (null != e) {
      (0, E.k)(e.id).then(() => {
        (0, u.VP)(e.id)
      }), N.le(), N.aC(e.id);
      let s = await (0, D.Eg)(e.id);
      null != s && this.setState({
        discoverableGuild: s
      }), this.checkForLowerMemberCountReqEnabled(e) && T.t.trackExposure({
        guildId: e.id,
        location: "006266_1"
      })
    }
  }
  renderDiscoverableSection() {
    let {
      guild: e,
      isGuildAdmin: s
    } = this.props;
    if (null == e) return;
    let t = e.hasFeature(B.oNc.DISCOVERABLE);
    return (0, n.jsxs)(r.FormSection, {
      className: w.twoColumnFormSection,
      children: [(0, n.jsxs)("div", {
        children: [(0, n.jsx)(r.FormTitle, {
          className: w.formTitle,
          children: F.Z.Messages.GUILD_SETTINGS_ENABLE_DISCOVERABLE
        }), (0, n.jsx)(r.FormText, {
          type: r.FormTextTypes.DESCRIPTION,
          className: w.formDescription,
          children: F.Z.Messages.FORM_HELP_ENABLE_DISCOVERABLE
        }), (0, n.jsx)(r.FormText, {
          type: r.FormTextTypes.DESCRIPTION,
          className: w.formDescription,
          children: F.Z.Messages.FORM_HELP_DISCOVERABLE_CHANGE_TIME
        }), (0, n.jsx)(r.Tooltip, {
          text: s ? null : F.Z.Messages.GUILD_SETTINGS_DISCOVERY_ADMIN_ONLY,
          children: e => (0, n.jsx)(r.Button, {
            size: r.Button.Sizes.SMALL,
            onClick: this.handleToggleDiscovery,
            color: t ? r.Button.Colors.PRIMARY : r.Button.Colors.GREEN,
            disabled: !s,
            ...e,
            children: t ? F.Z.Messages.GUILD_SETTINGS_DISABLE_DISCOVERABLE : F.Z.Messages.GUILD_SETTINGS_ENABLE_DISCOVERABLE
          })
        })]
      }), (0, n.jsx)(S.Z, {
        className: w.guildCard,
        loading: null == e,
        guild: e
      })]
    })
  }
  renderCoverImageSection() {
    let {
      guild: e,
      errors: s,
      canManageGuild: t
    } = this.props;
    if (null != e) return (0, n.jsxs)(n.Fragment, {
      children: [(0, n.jsxs)(r.FormSection, {
        className: w.twoColumnFormSection,
        children: [(0, n.jsxs)("div", {
          children: [(0, n.jsx)(r.FormTitle, {
            className: w.formTitle,
            children: F.Z.Messages.FORM_LABEL_DISCOVERY_COVER_IMAGE
          }), (0, n.jsx)(r.FormText, {
            type: r.FormTextTypes.DESCRIPTION,
            className: w.formDescription,
            children: F.Z.Messages.FORM_HELP_DISCOVERY_COVER_IMAGE
          }), (0, n.jsxs)(r.Button, {
            size: r.Button.Sizes.SMALL,
            color: r.Button.Colors.PRIMARY,
            children: [F.Z.Messages.UPLOAD_BACKGROUND, (0, n.jsx)(C.ZP, {
              disabled: !t,
              onChange: this.handleSplashChange
            })]
          })]
        }), (0, n.jsx)("div", {
          className: w.imageUploaderWrapper,
          children: (0, n.jsx)(R.Z, {
            image: e.discoverySplash,
            makeURL: s => v.ZP.getGuildDiscoverySplashURL({
              id: e.id,
              splash: s,
              size: 512 * (0, x.x_)()
            }),
            disabled: !t,
            onChange: this.handleSplashChange,
            hint: F.Z.Messages.CHANGE_SPLASH,
            imageClassName: w.imageUploaderInnerSquare,
            hideSize: !0
          })
        })]
      }), (null == s ? void 0 : s.discovery_splash) != null ? (0, n.jsx)(r.Text, {
        color: "text-danger",
        variant: "text-sm/normal",
        children: s.discovery_splash
      }) : null]
    })
  }
  renderEmojiDiscoverabilitySection() {
    var e;
    let {
      canManageGuild: s,
      guildMetadata: t,
      guild: i
    } = this.props, {
      discoverableGuild: a
    } = this.state, {
      emojiDiscoverabilityEnabled: o
    } = t, c = a;
    if (null == c && null != i) {
      let e = h.Z.getGuildEmoji(i.id);
      c = {
        ...i,
        premiumSubscriptionCount: null == i ? void 0 : i.premiumSubscriberCount,
        emojis: e,
        emojiCount: e.length,
        presenceCount: 1234,
        memberCount: 1234
      }
    }
    let d = null != c ? g.Z.createFromDiscoverableGuild(c) : null,
      u = null == c ? void 0 : null === (e = c.emojis) || void 0 === e ? void 0 : e[0],
      E = null != u ? {
        name: u.require_colons ? ":".concat(u.name, ":") : u.name,
        emojiId: u.id,
        animated: u.animated,
        jumboable: !0
      } : {};
    return (0, n.jsxs)(r.FormSection, {
      className: w.twoColumnFormSection,
      children: [(0, n.jsxs)("div", {
        className: w.formColumnLeft,
        children: [(0, n.jsx)(r.FormTitle, {
          className: w.formTitle,
          children: F.Z.Messages.GUILD_SETTINGS_DISCOVERY_EMOJI_DISCOVERABILITY_TITLE
        }), (0, n.jsx)(r.FormText, {
          className: w.description,
          type: r.FormTextTypes.DESCRIPTION,
          children: F.Z.Messages.GUILD_SETTINGS_DISCOVERY_EMOJI_DISCOVERABILITY_DESCRIPTION
        }), (0, n.jsx)(r.Button, {
          size: r.Button.Sizes.SMALL,
          color: o ? r.Button.Colors.PRIMARY : r.Button.Colors.GREEN,
          disabled: !s,
          onClick: this.handleToggleEmojiDiscoverability,
          children: o ? F.Z.Messages.GUILD_SETTINGS_DISCOVERY_EMOJI_DISCOVERABILITY_DISABLE : F.Z.Messages.GUILD_SETTINGS_DISCOVERY_EMOJI_DISCOVERABILITY_ENABLE
        })]
      }), null != d && d.isDiscoverable() && (0, n.jsx)(L.UA, {
        expressionSourceGuild: d,
        node: E,
        closePopout: B.dG4,
        nonce: (0, l.Z)(),
        demoMode: !0
      })]
    })
  }
  renderLocaleSelector() {
    let {
      guild: e,
      canManageGuild: s,
      localeOptions: t
    } = this.props;
    if (null != e) return (0, n.jsxs)(r.FormSection, {
      className: w.twoColumnFormSection,
      children: [(0, n.jsxs)("div", {
        children: [(0, n.jsx)(r.FormTitle, {
          className: w.formTitle,
          children: F.Z.Messages.FORM_LABEL_SERVER_LANGUAGE
        }), (0, n.jsx)(r.FormText, {
          type: r.FormTextTypes.DESCRIPTION,
          className: w.formDescription,
          children: F.Z.Messages.GUILD_SETTINGS_DISCOVERY_LOCALE_HELP
        })]
      }), (0, n.jsx)("div", {
        className: w.formSelect,
        children: (0, n.jsx)(r.SingleSelect, {
          value: e.preferredLocale,
          options: t,
          onChange: this.handleLocaleChange,
          isDisabled: !s
        })
      })]
    })
  }
  renderCategoriesSection() {
    let {
      canManageGuild: e,
      guildMetadata: s,
      primaryCategoryOptions: t,
      errors: i,
      guild: l
    } = this.props;
    if (null != l) return (0, n.jsxs)(n.Fragment, {
      children: [(0, n.jsxs)(r.FormSection, {
        children: [(0, n.jsx)(r.FormTitle, {
          className: w.formTitle,
          children: F.Z.Messages.GUILD_SETTINGS_DISCOVERY_PRIMARY_CATEGORY_TITLE
        }), (0, n.jsx)(r.FormText, {
          type: r.FormTextTypes.DESCRIPTION,
          className: w.description,
          children: F.Z.Messages.GUILD_SETTINGS_DISCOVERY_PRIMARY_CATEGORY_DESCRIPTION
        })]
      }), (0, n.jsx)(f.Z, {
        value: s.primaryCategoryId === y.o3 ? null : s.primaryCategoryId,
        placeholder: F.Z.Messages.SELECT,
        options: t,
        onChange: this.handlePrimaryCategoryChange,
        disabled: !e,
        searchable: !0,
        clearable: !0
      }), (0, n.jsxs)(r.FormSection, {
        className: w.noDividerFormSection,
        children: [(0, n.jsx)(r.FormTitle, {
          className: w.formTitle,
          children: F.Z.Messages.GUILD_SETTINGS_DISCOVERY_SUBCATEGORY_TITLE
        }), (0, n.jsx)(U.Z, {
          guild: l,
          guildMetadata: s
        })]
      }), (null == i ? void 0 : i.category) != null ? (0, n.jsx)(r.Text, {
        color: "text-danger",
        className: w.error,
        variant: "text-sm/normal",
        children: i.category
      }) : null]
    })
  }
  renderKeywordsSection() {
    let {
      canManageGuild: e,
      guildMetadata: s,
      errors: t
    } = this.props;
    return (0, n.jsxs)(r.FormSection, {
      children: [(0, n.jsx)(r.FormTitle, {
        className: w.formTitle,
        children: F.Z.Messages.GUILD_SETTINGS_DISCOVERY_SEARCH_KEYWORDS_TITLE
      }), (0, n.jsx)(r.FormText, {
        className: w.description,
        type: r.FormTextTypes.DESCRIPTION,
        children: F.Z.Messages.GUILD_SETTINGS_DISCOVERY_SEARCH_KEYWORDS_DESCRIPTION.format()
      }), (0, n.jsx)(c.Z, {
        tags: s.keywords,
        onRemoveTag: this.handleRemoveKeyword,
        onAddTag: this.handleAddKeyword,
        maxTags: b.G7,
        maxTaxLength: b._0,
        disabled: !e
      }), (null == t ? void 0 : t.keywords) != null ? (0, n.jsx)(r.Text, {
        color: "text-danger",
        className: w.error,
        variant: "text-sm/normal",
        children: t.keywords
      }) : null]
    })
  }
  render() {
    let {
      guild: e,
      discoveryChecklist: s,
      isGuildAdmin: t
    } = this.props;
    if (null == e || null == s) return null;
    switch ((0, I.TJ)(e, s)) {
      case I.d5.INTRO:
        return (0, n.jsx)(P.Z, {
          guild: e,
          onEnableDiscovery: this.handleEnableDiscovery,
          isGuildAdmin: t
        });
      case I.d5.DISQUALIFIED:
        return (0, n.jsx)(G.Z, {
          guild: e
        });
      case I.d5.SETTINGS:
        return (0, n.jsxs)(r.FormSection, {
          className: w.__invalid_discoverySettings,
          title: F.Z.Messages.DISCOVERY,
          tag: r.FormTitleTags.H1,
          children: [this.renderDiscoverableSection(), (0, n.jsx)(r.FormDivider, {
            className: w.divider
          }), this.renderCoverImageSection(), (0, n.jsx)(r.FormDivider, {
            className: w.divider
          }), this.renderEmojiDiscoverabilitySection(), (0, n.jsx)(r.FormDivider, {
            className: w.divider
          }), this.renderCategoriesSection(), (0, n.jsx)(r.FormDivider, {
            className: w.divider
          }), this.renderKeywordsSection(), (0, n.jsx)(r.FormDivider, {
            className: w.divider
          }), this.renderLocaleSelector()]
        });
      default:
        return null
    }
  }
  constructor(...e) {
    super(...e), k(this, "state", {
      discoverableGuild: null
    }), k(this, "checkForLowerMemberCountReqEnabled", e => {
      let {
        isGuildAdmin: s
      } = this.props, t = e.hasFeature(B.oNc.COMMUNITY), {
        enableLowerMemberCountReq: n
      } = T.t.getCurrentConfig({
        guildId: e.id,
        location: "006266_2"
      }, {
        disable: !(s && t),
        autoTrackExposure: !1
      });
      return n
    }), k(this, "handleToggleDiscovery", () => {
      let {
        guild: e
      } = this.props;
      if (null == e) return;
      let s = new Set(e.features);
      e.hasFeature(B.oNc.DISCOVERABLE) ? s.delete(B.oNc.DISCOVERABLE) : s.add(B.oNc.DISCOVERABLE), Z.Z.updateGuild({
        features: s
      })
    }), k(this, "handleEnableDiscovery", async () => {
      let e = await (0, r.openModalLazy)(async () => {
        let {
          default: e
        } = await Promise.all([t.e("99387"), t.e("6957")]).then(t.bind(t, 993382));
        return s => {
          let {
            ...t
          } = s;
          return (0, n.jsx)(e, {
            ...t
          })
        }
      }, {
        onCloseRequest: () => {
          null != e && (0, r.closeModal)(e)
        }
      })
    }), k(this, "handleSplashChange", e => {
      Z.Z.updateGuild({
        discoverySplash: e
      })
    }), k(this, "handleLocaleChange", e => {
      Z.Z.updateGuild({
        preferredLocale: e
      })
    }), k(this, "handlePrimaryCategoryChange", e => {
      var s;
      let {
        guild: t
      } = this.props;
      (null == t ? void 0 : t.id) != null && N.TA(null == t ? void 0 : t.id, null !== (s = null == e ? void 0 : e.value) && void 0 !== s ? s : y.o3)
    }), k(this, "handleRemoveKeyword", e => {
      let {
        guild: s,
        guildMetadata: t
      } = this.props;
      if ((null == s ? void 0 : s.id) == null) return;
      let n = [...t.keywords];
      n.splice(e, 1), N.zH(s.id, n)
    }), k(this, "handleAddKeyword", e => {
      let {
        guild: s,
        guildMetadata: t
      } = this.props, {
        keywords: n
      } = t;
      if ((null == s ? void 0 : s.id) != null) !(n.length >= b.G7) && N.zH(s.id, [...n, e])
    }), k(this, "handleToggleEmojiDiscoverability", () => {
      let {
        guild: e,
        guildMetadata: s
      } = this.props, {
        emojiDiscoverabilityEnabled: t
      } = s;
      (null == e ? void 0 : e.id) != null && N.J9(e.id, !t)
    })
  }
}
s.Z = a.ZP.connectStores([j.Z, A.Z, _.ZP, O.ZP, m.Z, M.default, p.Z], () => {
  let {
    guild: e,
    errors: s,
    submitting: t,
    guildMetadata: n
  } = j.Z.getProps(), i = A.Z.can(B.Plq.MANAGE_GUILD, e), l = A.Z.can(B.Plq.ADMINISTRATOR, e), a = null != e ? _.ZP.getDiscoveryChecklist(e.id) : null, r = null != e ? O.ZP.getChannels(e.id) : null, o = [];
  null != r && r[O.sH].forEach(e => {
    let {
      channel: s
    } = e;
    s.type === B.d4z.GUILD_TEXT && o.push({
      value: s.id,
      label: (0, d.F6)(s, M.default, p.Z, !0)
    })
  });
  let c = m.Z.getPrimaryCategories().map(e => {
    let {
      categoryId: s,
      name: t
    } = e;
    return {
      value: s,
      label: t
    }
  });
  return {
    guild: e,
    errors: s,
    submitting: t,
    discoveryChecklist: a,
    selectableChannels: o,
    canManageGuild: i,
    isGuildAdmin: l,
    guildMetadata: n,
    primaryCategoryOptions: c,
    localeOptions: (0, y.jb)()
  }
})(V)