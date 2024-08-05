n.d(t, {
  s: function() {
return H;
  }
}), n(47120), n(653041);
var s = n(735250),
  a = n(470079),
  i = n(772848),
  r = n(442837),
  l = n(481060),
  o = n(852860),
  c = n(558324),
  d = n(933557),
  u = n(719879),
  _ = n(59970),
  I = n(946314),
  E = n(938502),
  T = n(1259),
  m = n(296386),
  N = n(150192),
  S = n(816817),
  h = n(339085),
  g = n(231053),
  C = n(134432),
  x = n(813197),
  p = n(208567),
  R = n(183023),
  f = n(984933),
  L = n(496675),
  O = n(699516),
  A = n(594174),
  M = n(987134),
  D = n(768581),
  v = n(900849),
  j = n(434404),
  Z = n(999382),
  b = n(450474),
  U = n(354051),
  G = n(347604),
  P = n(203377),
  B = n(981631),
  y = n(731455),
  F = n(689938),
  w = n(305156);

function k(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
value: n,
enumerable: !0,
configurable: !0,
writable: !0
  }) : e[t] = n, e;
}
let H = r.ZP.connectStores([Z.Z], () => {
  let {
guild: e,
originalGuild: t,
submitting: n,
guildMetadata: s
  } = Z.Z.getProps();
  return {
guild: e,
submitting: n,
onReset() {
  if (null != e)
    j.Z.init(e.id);
},
onSave() {
  if (null != e)
    (0, E.UA)(e, t), j.Z.saveGuild(e.id, {
      features: e.features,
      discoverySplash: e.discoverySplash,
      description: e.description,
      safetyAlertsChannelId: e.safetyAlertsChannelId,
      rulesChannelId: e.rulesChannelId,
      preferredLocale: e.preferredLocale
    }), m.Vv({
      guildId: e.id,
      primaryCategoryId: s.primaryCategoryId,
      keywords: s.keywords,
      emojiDiscoverabilityEnabled: s.emojiDiscoverabilityEnabled,
      partnerActionedTimestamp: s.partnerActionedTimestamp,
      partnerApplicationTimestamp: s.partnerApplicationTimestamp,
      isPublished: s.isPublished,
      reasonsToJoin: s.reasonsToJoin,
      socialLinks: s.socialLinks,
      about: s.about
    });
}
  };
})(o.Z);
class V extends a.PureComponent {
  async componentDidMount() {
let {
  guild: e
} = this.props;
if (null != e) {
  (0, _.k)(e.id).then(() => {
    (0, u.VP)(e.id);
  }), m.le(), m.aC(e.id);
  let t = await (0, v.Eg)(e.id);
  null != t && this.setState({
    discoverableGuild: t
  }), this.checkForLowerMemberCountReqEnabled(e) && T.t.trackExposure({
    guildId: e.id,
    location: '006266_1'
  });
}
  }
  renderDiscoverableSection() {
let {
  guild: e,
  isGuildAdmin: t
} = this.props;
if (null == e)
  return;
let n = e.hasFeature(B.oNc.DISCOVERABLE);
return (0, s.jsxs)(l.FormSection, {
  className: w.twoColumnFormSection,
  children: [
    (0, s.jsxs)('div', {
      children: [
        (0, s.jsx)(l.FormTitle, {
          className: w.formTitle,
          children: F.Z.Messages.GUILD_SETTINGS_ENABLE_DISCOVERABLE
        }),
        (0, s.jsx)(l.FormText, {
          type: l.FormTextTypes.DESCRIPTION,
          className: w.formDescription,
          children: F.Z.Messages.FORM_HELP_ENABLE_DISCOVERABLE
        }),
        (0, s.jsx)(l.FormText, {
          type: l.FormTextTypes.DESCRIPTION,
          className: w.formDescription,
          children: F.Z.Messages.FORM_HELP_DISCOVERABLE_CHANGE_TIME
        }),
        (0, s.jsx)(l.Tooltip, {
          text: t ? null : F.Z.Messages.GUILD_SETTINGS_DISCOVERY_ADMIN_ONLY,
          children: e => (0, s.jsx)(l.Button, {
            size: l.Button.Sizes.SMALL,
            onClick: this.handleToggleDiscovery,
            color: n ? l.Button.Colors.PRIMARY : l.Button.Colors.GREEN,
            disabled: !t,
            ...e,
            children: n ? F.Z.Messages.GUILD_SETTINGS_DISABLE_DISCOVERABLE : F.Z.Messages.GUILD_SETTINGS_ENABLE_DISCOVERABLE
          })
        })
      ]
    }),
    (0, s.jsx)(S.Z, {
      className: w.guildCard,
      loading: null == e,
      guild: e
    })
  ]
});
  }
  renderCoverImageSection() {
let {
  guild: e,
  errors: t,
  canManageGuild: n
} = this.props;
if (null != e)
  return (0, s.jsxs)(s.Fragment, {
    children: [
      (0, s.jsxs)(l.FormSection, {
        className: w.twoColumnFormSection,
        children: [
          (0, s.jsxs)('div', {
            children: [
              (0, s.jsx)(l.FormTitle, {
                className: w.formTitle,
                children: F.Z.Messages.FORM_LABEL_DISCOVERY_COVER_IMAGE
              }),
              (0, s.jsx)(l.FormText, {
                type: l.FormTextTypes.DESCRIPTION,
                className: w.formDescription,
                children: F.Z.Messages.FORM_HELP_DISCOVERY_COVER_IMAGE
              }),
              (0, s.jsxs)(l.Button, {
                size: l.Button.Sizes.SMALL,
                color: l.Button.Colors.PRIMARY,
                children: [
                  F.Z.Messages.UPLOAD_BACKGROUND,
                  (0, s.jsx)(x.ZP, {
                    disabled: !n,
                    onChange: this.handleSplashChange
                  })
                ]
              })
            ]
          }),
          (0, s.jsx)('div', {
            className: w.imageUploaderWrapper,
            children: (0, s.jsx)(p.Z, {
              image: e.discoverySplash,
              makeURL: t => D.ZP.getGuildDiscoverySplashURL({
                id: e.id,
                splash: t,
                size: 512 * (0, C.x_)()
              }),
              disabled: !n,
              onChange: this.handleSplashChange,
              hint: F.Z.Messages.CHANGE_SPLASH,
              imageClassName: w.imageUploaderInnerSquare,
              hideSize: !0
            })
          })
        ]
      }),
      (null == t ? void 0 : t.discovery_splash) != null ? (0, s.jsx)(l.Text, {
        color: 'text-danger',
        variant: 'text-sm/normal',
        children: t.discovery_splash
      }) : null
    ]
  });
  }
  renderEmojiDiscoverabilitySection() {
var e;
let {
  canManageGuild: t,
  guildMetadata: n,
  guild: a
} = this.props, {
  discoverableGuild: r
} = this.state, {
  emojiDiscoverabilityEnabled: o
} = n, c = r;
if (null == c && null != a) {
  let e = h.Z.getGuildEmoji(a.id);
  c = {
    ...a,
    premiumSubscriptionCount: null == a ? void 0 : a.premiumSubscriberCount,
    emojis: e,
    emojiCount: e.length,
    presenceCount: 1234,
    memberCount: 1234
  };
}
let d = null != c ? g.JO.createFromDiscoverableGuild(c) : null,
  u = null == c ? void 0 : null === (e = c.emojis) || void 0 === e ? void 0 : e[0],
  _ = null != u ? {
    name: u.require_colons ? ':'.concat(u.name, ':') : u.name,
    emojiId: u.id,
    animated: u.animated,
    jumboable: !0
  } : {};
return (0, s.jsxs)(l.FormSection, {
  className: w.twoColumnFormSection,
  children: [
    (0, s.jsxs)('div', {
      className: w.formColumnLeft,
      children: [
        (0, s.jsx)(l.FormTitle, {
          className: w.formTitle,
          children: F.Z.Messages.GUILD_SETTINGS_DISCOVERY_EMOJI_DISCOVERABILITY_TITLE
        }),
        (0, s.jsx)(l.FormText, {
          className: w.description,
          type: l.FormTextTypes.DESCRIPTION,
          children: F.Z.Messages.GUILD_SETTINGS_DISCOVERY_EMOJI_DISCOVERABILITY_DESCRIPTION
        }),
        (0, s.jsx)(l.Button, {
          size: l.Button.Sizes.SMALL,
          color: o ? l.Button.Colors.PRIMARY : l.Button.Colors.GREEN,
          disabled: !t,
          onClick: this.handleToggleEmojiDiscoverability,
          children: o ? F.Z.Messages.GUILD_SETTINGS_DISCOVERY_EMOJI_DISCOVERABILITY_DISABLE : F.Z.Messages.GUILD_SETTINGS_DISCOVERY_EMOJI_DISCOVERABILITY_ENABLE
        })
      ]
    }),
    null != d && d.isDiscoverable() && (0, s.jsx)(R.UA, {
      sourceType: g.w6.GUILD,
      expressionSourceApplication: null,
      expressionSourceGuild: d,
      node: _,
      closePopout: B.dG4,
      nonce: (0, i.Z)(),
      demoMode: !0
    })
  ]
});
  }
  renderLocaleSelector() {
let {
  guild: e,
  canManageGuild: t,
  localeOptions: n
} = this.props;
if (null != e)
  return (0, s.jsxs)(l.FormSection, {
    className: w.twoColumnFormSection,
    children: [
      (0, s.jsxs)('div', {
        children: [
          (0, s.jsx)(l.FormTitle, {
            className: w.formTitle,
            children: F.Z.Messages.FORM_LABEL_SERVER_LANGUAGE
          }),
          (0, s.jsx)(l.FormText, {
            type: l.FormTextTypes.DESCRIPTION,
            className: w.formDescription,
            children: F.Z.Messages.GUILD_SETTINGS_DISCOVERY_LOCALE_HELP
          })
        ]
      }),
      (0, s.jsx)('div', {
        className: w.formSelect,
        children: (0, s.jsx)(l.SingleSelect, {
          value: e.preferredLocale,
          options: n,
          onChange: this.handleLocaleChange,
          isDisabled: !t
        })
      })
    ]
  });
  }
  renderCategoriesSection() {
let {
  canManageGuild: e,
  guildMetadata: t,
  primaryCategoryOptions: n,
  errors: a,
  guild: i
} = this.props;
if (null != i)
  return (0, s.jsxs)(s.Fragment, {
    children: [
      (0, s.jsxs)(l.FormSection, {
        children: [
          (0, s.jsx)(l.FormTitle, {
            className: w.formTitle,
            children: F.Z.Messages.GUILD_SETTINGS_DISCOVERY_PRIMARY_CATEGORY_TITLE
          }),
          (0, s.jsx)(l.FormText, {
            type: l.FormTextTypes.DESCRIPTION,
            className: w.description,
            children: F.Z.Messages.GUILD_SETTINGS_DISCOVERY_PRIMARY_CATEGORY_DESCRIPTION
          })
        ]
      }),
      (0, s.jsx)(M.Z, {
        value: t.primaryCategoryId === y.o3 ? null : t.primaryCategoryId,
        placeholder: F.Z.Messages.SELECT,
        options: n,
        onChange: this.handlePrimaryCategoryChange,
        disabled: !e,
        searchable: !0,
        clearable: !0
      }),
      (0, s.jsxs)(l.FormSection, {
        className: w.noDividerFormSection,
        children: [
          (0, s.jsx)(l.FormTitle, {
            className: w.formTitle,
            children: F.Z.Messages.GUILD_SETTINGS_DISCOVERY_SUBCATEGORY_TITLE
          }),
          (0, s.jsx)(b.Z, {
            guild: i,
            guildMetadata: t
          })
        ]
      }),
      (null == a ? void 0 : a.category) != null ? (0, s.jsx)(l.Text, {
        color: 'text-danger',
        className: w.error,
        variant: 'text-sm/normal',
        children: a.category
      }) : null
    ]
  });
  }
  renderKeywordsSection() {
let {
  canManageGuild: e,
  guildMetadata: t,
  errors: n
} = this.props;
return (0, s.jsxs)(l.FormSection, {
  children: [
    (0, s.jsx)(l.FormTitle, {
      className: w.formTitle,
      children: F.Z.Messages.GUILD_SETTINGS_DISCOVERY_SEARCH_KEYWORDS_TITLE
    }),
    (0, s.jsx)(l.FormText, {
      className: w.description,
      type: l.FormTextTypes.DESCRIPTION,
      children: F.Z.Messages.GUILD_SETTINGS_DISCOVERY_SEARCH_KEYWORDS_DESCRIPTION.format()
    }),
    (0, s.jsx)(c.Z, {
      tags: t.keywords,
      onRemoveTag: this.handleRemoveKeyword,
      onAddTag: this.handleAddKeyword,
      maxTags: P.G7,
      maxTaxLength: P._0,
      disabled: !e
    }),
    (null == n ? void 0 : n.keywords) != null ? (0, s.jsx)(l.Text, {
      color: 'text-danger',
      className: w.error,
      variant: 'text-sm/normal',
      children: n.keywords
    }) : null
  ]
});
  }
  render() {
let {
  guild: e,
  discoveryChecklist: t,
  isGuildAdmin: n
} = this.props;
if (null == e || null == t)
  return null;
switch ((0, E.TJ)(e, t)) {
  case E.d5.INTRO:
    return (0, s.jsx)(G.Z, {
      guild: e,
      onEnableDiscovery: this.handleEnableDiscovery,
      isGuildAdmin: n
    });
  case E.d5.DISQUALIFIED:
    return (0, s.jsx)(U.Z, {
      guild: e
    });
  case E.d5.SETTINGS:
    return (0, s.jsxs)(l.FormSection, {
      className: w.__invalid_discoverySettings,
      title: F.Z.Messages.DISCOVERY,
      tag: l.FormTitleTags.H1,
      children: [
        this.renderDiscoverableSection(),
        (0, s.jsx)(l.FormDivider, {
          className: w.divider
        }),
        this.renderCoverImageSection(),
        (0, s.jsx)(l.FormDivider, {
          className: w.divider
        }),
        this.renderEmojiDiscoverabilitySection(),
        (0, s.jsx)(l.FormDivider, {
          className: w.divider
        }),
        this.renderCategoriesSection(),
        (0, s.jsx)(l.FormDivider, {
          className: w.divider
        }),
        this.renderKeywordsSection(),
        (0, s.jsx)(l.FormDivider, {
          className: w.divider
        }),
        this.renderLocaleSelector()
      ]
    });
  default:
    return null;
}
  }
  constructor(...e) {
super(...e), k(this, 'state', {
  discoverableGuild: null
}), k(this, 'checkForLowerMemberCountReqEnabled', e => {
  let {
    isGuildAdmin: t
  } = this.props, n = e.hasFeature(B.oNc.COMMUNITY), {
    enableLowerMemberCountReq: s
  } = T.t.getCurrentConfig({
    guildId: e.id,
    location: '006266_2'
  }, {
    disable: !(t && n),
    autoTrackExposure: !1
  });
  return s;
}), k(this, 'handleToggleDiscovery', () => {
  let {
    guild: e
  } = this.props;
  if (null == e)
    return;
  let t = new Set(e.features);
  e.hasFeature(B.oNc.DISCOVERABLE) ? t.delete(B.oNc.DISCOVERABLE) : t.add(B.oNc.DISCOVERABLE), j.Z.updateGuild({
    features: t
  });
}), k(this, 'handleEnableDiscovery', async () => {
  let e = await (0, l.openModalLazy)(async () => {
    let {
      default: e
    } = await n.e('18634').then(n.bind(n, 993382));
    return t => {
      let {
        ...n
      } = t;
      return (0, s.jsx)(e, {
        ...n
      });
    };
  }, {
    onCloseRequest: () => {
      null != e && (0, l.closeModal)(e);
    }
  });
}), k(this, 'handleSplashChange', e => {
  j.Z.updateGuild({
    discoverySplash: e
  });
}), k(this, 'handleLocaleChange', e => {
  j.Z.updateGuild({
    preferredLocale: e
  });
}), k(this, 'handlePrimaryCategoryChange', e => {
  var t;
  let {
    guild: n
  } = this.props;
  (null == n ? void 0 : n.id) != null && m.TA(null == n ? void 0 : n.id, null !== (t = null == e ? void 0 : e.value) && void 0 !== t ? t : y.o3);
}), k(this, 'handleRemoveKeyword', e => {
  let {
    guild: t,
    guildMetadata: n
  } = this.props;
  if ((null == t ? void 0 : t.id) == null)
    return;
  let s = [...n.keywords];
  s.splice(e, 1), m.zH(t.id, s);
}), k(this, 'handleAddKeyword', e => {
  let {
    guild: t,
    guildMetadata: n
  } = this.props, {
    keywords: s
  } = n;
  if ((null == t ? void 0 : t.id) != null)
    !(s.length >= P.G7) && m.zH(t.id, [
      ...s,
      e
    ]);
}), k(this, 'handleToggleEmojiDiscoverability', () => {
  let {
    guild: e,
    guildMetadata: t
  } = this.props, {
    emojiDiscoverabilityEnabled: n
  } = t;
  (null == e ? void 0 : e.id) != null && m.J9(e.id, !n);
});
  }
}
t.Z = r.ZP.connectStores([
  Z.Z,
  L.Z,
  I.ZP,
  f.ZP,
  N.Z,
  A.default,
  O.Z
], () => {
  let {
guild: e,
errors: t,
submitting: n,
guildMetadata: s
  } = Z.Z.getProps(), a = L.Z.can(B.Plq.MANAGE_GUILD, e), i = L.Z.can(B.Plq.ADMINISTRATOR, e), r = null != e ? I.ZP.getDiscoveryChecklist(e.id) : null, l = null != e ? f.ZP.getChannels(e.id) : null, o = [];
  null != l && l[f.sH].forEach(e => {
let {
  channel: t
} = e;
t.type === B.d4z.GUILD_TEXT && o.push({
  value: t.id,
  label: (0, d.F6)(t, A.default, O.Z, !0)
});
  });
  let c = N.Z.getPrimaryCategories().map(e => {
let {
  categoryId: t,
  name: n
} = e;
return {
  value: t,
  label: n
};
  });
  return {
guild: e,
errors: t,
submitting: n,
discoveryChecklist: r,
selectableChannels: o,
canManageGuild: a,
isGuildAdmin: i,
guildMetadata: s,
primaryCategoryOptions: c,
localeOptions: (0, y.jb)()
  };
})(V);