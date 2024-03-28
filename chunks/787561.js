"use strict";
s.r(t), s.d(t, {
  GuildSettingsCommunityOverviewNotice: function() {
    return v
  }
}), s("47120"), s("653041");
var a = s("735250"),
  l = s("470079"),
  n = s("803997"),
  i = s.n(n),
  r = s("442837"),
  o = s("544891"),
  d = s("433517"),
  u = s("481060"),
  c = s("852860"),
  E = s("933557"),
  _ = s("655006"),
  I = s("920440"),
  T = s("984933"),
  S = s("650774"),
  f = s("430824"),
  m = s("496675"),
  N = s("699516"),
  g = s("594174"),
  h = s("465670"),
  C = s("434404"),
  R = s("999382"),
  x = s("54842"),
  L = s("981631"),
  O = s("731455"),
  A = s("689938"),
  p = s("346393"),
  M = s("922905");
let D = "dismissedCommunityFeaturesUpsell",
  v = () => {
    let e;
    let {
      guild: t,
      submitting: s,
      errors: l
    } = (0, r.useStateFromStoresObject)([R.default], () => ({
      submitting: R.default.isSubmitting(),
      guild: R.default.getGuild(),
      errors: R.default.getErrors()
    })), n = Object.keys(l), i = n.length > 0 ? n[0] : null;
    if ("rules_channel_id" === i) e = A.default.Messages.GUILD_RULES_INVALID_CHANNEL;
    else e = null != i ? l[i] : void 0;
    return (0, a.jsx)(c.default, {
      submitting: s,
      onReset: () => {
        null != t && C.default.init(t.id)
      },
      onSave: () => {
        null != t && C.default.saveGuild(t.id, {
          rulesChannelId: t.rulesChannelId,
          preferredLocale: t.preferredLocale,
          safetyAlertsChannelId: t.safetyAlertsChannelId,
          publicUpdatesChannelId: t.publicUpdatesChannelId,
          description: t.description,
          features: t.features
        })
      },
      errorMessage: e
    })
  },
  j = e => {
    let {
      discoveryEnabled: t,
      onboardingEnabled: s,
      guild: n
    } = e, [i, c] = l.useState(!0 === d.Storage.get(D)), E = (0, r.useStateFromStores)([S.default], () => {
      var e;
      return null !== (e = S.default.getMemberCount(n.id)) && void 0 !== e ? e : 0
    }), [_, T] = l.useState(!1);
    l.useEffect(() => {
      o.HTTP.get(L.Endpoints.GUILD_ADMIN_SERVER_ELIGIBILITY(n.id)).then(e => {
        T(e.body.eligible_for_admin_server)
      }).catch(() => T(!1))
    }, []);
    let m = (0, r.useStateFromStores)([f.default], () => f.default.getGuild("942897714956472401")),
      N = n.isCommunity() && E >= 1e3 && _ && !(null != m);
    if (t && s && !N) return null;
    let g = async () => {
      try {
        let e = await o.HTTP.post({
          url: L.Endpoints.JOIN_ADMIN_SERVER(n.id),
          oldFormErrors: !0
        });
        C.default.close(), (0, I.transitionToGuild)(e.body.id)
      } catch {}
    };
    return i && !N ? null : (0, a.jsxs)("div", {
      className: p.upsellContainer,
      children: [(0, a.jsxs)("div", {
        className: p.upsellContent,
        children: [(0, a.jsx)("img", {
          src: M,
          alt: "",
          width: 60,
          className: p.upsellImage
        }), (0, a.jsxs)("div", {
          children: [(0, a.jsx)(u.Heading, {
            variant: "heading-md/semibold",
            className: p.upsellHeader,
            children: A.default.Messages.GUILD_SETTINGS_COMMUNITY_UPSELL_HEADER
          }), (0, a.jsx)(u.Text, {
            variant: "text-sm/normal",
            children: A.default.Messages.GUILD_SETTINGS_COMMUNITY_UPSELL_BODY
          })]
        })]
      }), (0, a.jsx)(u.Button, {
        "aria-label": A.default.Messages.CLOSE,
        look: u.Button.Looks.BLANK,
        size: u.Button.Sizes.NONE,
        className: p.upsellClose,
        onClick: () => {
          d.Storage.set(D, !0), c(!0)
        },
        children: (0, a.jsx)(h.default, {
          width: 24,
          height: 24
        })
      }), (0, a.jsxs)("div", {
        className: p.upsellFooter,
        children: [N && (0, a.jsx)(u.Button, {
          size: u.Button.Sizes.SMALL,
          onClick: g,
          className: p.upsellButton,
          children: A.default.Messages.GUILD_SETTINGS_COMMUNITY_UPSELL_BUTTON_ADMIN_SERVER
        }), s ? null : (0, a.jsx)(u.Button, {
          size: u.Button.Sizes.SMALL,
          onClick: () => {
            C.default.setSection(L.GuildSettingsSections.ONBOARDING)
          },
          className: p.upsellButton,
          children: A.default.Messages.GUILD_SETTINGS_COMMUNITY_UPSELL_BUTTON_ONBOARDING
        }), t ? null : (0, a.jsx)(u.Button, {
          size: u.Button.Sizes.SMALL,
          onClick: () => {
            C.default.setSection(L.GuildSettingsSections.DISCOVERY)
          },
          className: p.upsellButton,
          color: u.Button.Colors.PRIMARY,
          children: A.default.Messages.GUILD_SETTINGS_COMMUNITY_UPSELL_BUTTON_DISCOVERY
        }), (0, a.jsx)(u.Button, {
          size: u.Button.Sizes.SMALL,
          onClick: () => {
            C.default.setSection(L.GuildSettingsSections.ANALYTICS)
          },
          className: p.upsellButton,
          color: u.Button.Colors.PRIMARY,
          children: A.default.Messages.GUILD_SETTINGS_COMMUNITY_UPSELL_BUTTON_ANALYTICS
        })]
      })]
    })
  },
  G = () => {
    var e;
    let t = (0, r.useStateFromStores)([R.default], () => R.default.getGuild()),
      {
        canManageGuild: s,
        isGuildAdmin: n
      } = (0, r.useStateFromStoresObject)([m.default], () => ({
        canManageGuild: m.default.can(L.Permissions.MANAGE_GUILD, t),
        isGuildAdmin: m.default.can(L.Permissions.ADMINISTRATOR, t)
      })),
      o = (0, r.useStateFromStores)([T.default], () => null != t ? T.default.getChannels(t.id) : null),
      c = l.useMemo(O.calculateLocaleOptions, []),
      I = !0 !== d.Storage.get(D),
      {
        enableRaidAlerts: S
      } = _.RaidAlertExperiment.useExperiment({
        guildId: null !== (e = null == t ? void 0 : t.id) && void 0 !== e ? e : L.EMPTY_STRING_SNOWFLAKE_ID,
        location: "c1af51_2"
      }, {
        autoTrackExposure: s
      });
    if (null == t) return null;
    let f = [];
    null != o && o[0, T.GUILD_SELECTABLE_CHANNELS_KEY].forEach(e => {
      let {
        channel: t
      } = e;
      t.type === L.ChannelTypes.GUILD_TEXT && f.push({
        value: t.id,
        label: (0, E.computeChannelName)(t, g.default, N.default, !0)
      })
    });
    let h = () => {
        C.default.init(t.id), C.default.open(t.id, L.GuildSettingsSections.MEMBER_VERIFICATION)
      },
      x = () => {
        if (null == t) return;
        let e = new Set(t.features);
        e.delete(L.GuildFeatures.COMMUNITY), e.delete(L.GuildFeatures.DISCOVERABLE), e.delete(L.GuildFeatures.MEMBER_VERIFICATION_GATE_ENABLED), e.delete(L.GuildFeatures.PREVIEW_ENABLED), C.default.updateGuild({
          features: e,
          rulesChannelId: null,
          publicUpdatesChannelId: null
        })
      },
      M = e => {
        C.default.updateGuild({
          rulesChannelId: e
        })
      },
      v = e => {
        C.default.updateGuild({
          safetyAlertsChannelId: e
        })
      },
      G = e => {
        C.default.updateGuild({
          publicUpdatesChannelId: e
        })
      },
      U = e => {
        C.default.updateGuild({
          preferredLocale: e
        })
      },
      P = e => {
        C.default.updateGuild({
          description: e
        })
      },
      b = () => {
        t.features.has(L.GuildFeatures.DISCOVERABLE) && t.features.has(L.GuildFeatures.PARTNERED) ? (0, u.openModal)(e => (0, a.jsx)(u.ConfirmModal, {
          ...e,
          header: A.default.Messages.GUILD_SETTINGS_COMMUNITY_DISABLE_PUBLIC_CONFIRM_DEFAULT_TITLE,
          confirmText: A.default.Messages.CONFIRM,
          cancelText: A.default.Messages.NEVERMIND,
          onConfirm: x,
          children: (0, a.jsx)(u.Text, {
            variant: "text-sm/normal",
            children: A.default.Messages.GUILD_SETTINGS_PARTNER_AND_DISCOVERY_DISABLE_PUBLIC_CONFIRM_TEXT
          })
        })) : t.features.has(L.GuildFeatures.DISCOVERABLE) ? (0, u.openModal)(e => (0, a.jsx)(u.ConfirmModal, {
          ...e,
          header: A.default.Messages.GUILD_SETTINGS_COMMUNITY_DISABLE_PUBLIC_CONFIRM_DEFAULT_TITLE,
          confirmText: A.default.Messages.CONFIRM,
          cancelText: A.default.Messages.NEVERMIND,
          onConfirm: x,
          children: (0, a.jsx)(u.Text, {
            variant: "text-sm/normal",
            children: A.default.Messages.GUILD_SETTINGS_DISCOVERY_DISABLE_PUBLIC_CONFIRM_TEXT
          })
        })) : t.features.has(L.GuildFeatures.PARTNERED) ? (0, u.openModal)(e => (0, a.jsx)(u.ConfirmModal, {
          ...e,
          header: A.default.Messages.GUILD_SETTINGS_COMMUNITY_DISABLE_PUBLIC_CONFIRM_DEFAULT_TITLE,
          confirmText: A.default.Messages.CONFIRM,
          cancelText: A.default.Messages.NEVERMIND,
          onConfirm: x,
          children: (0, a.jsx)(u.Text, {
            variant: "text-sm/normal",
            children: A.default.Messages.GUILD_SETTINGS_PARTNER_DISABLE_PUBLIC_CONFIRM_TEXT
          })
        })) : t.features.has(L.GuildFeatures.MEMBER_VERIFICATION_GATE_ENABLED) ? (0, u.openModal)(e => (0, a.jsx)(u.ConfirmModal, {
          ...e,
          header: A.default.Messages.GUILD_SETTINGS_COMMUNITY_DISABLE_PUBLIC_CONFIRM_DEFAULT_TITLE,
          confirmButtonColor: u.Button.Colors.BRAND,
          confirmText: A.default.Messages.GUILD_SETTINGS_COMMUNITY_DISABLE_MEMBER_VERIFICATION_CONFIRM,
          cancelText: A.default.Messages.NEVERMIND,
          onConfirm: h,
          children: (0, a.jsx)(u.Text, {
            variant: "text-sm/normal",
            children: A.default.Messages.GUILD_SETTINGS_COMMUNITY_DISABLE_MEMBER_VERIFICATION
          })
        })) : x()
      };
    return (0, a.jsxs)(u.FormSection, {
      title: A.default.Messages.GUILD_SETTINGS_COMMUNITY,
      tag: u.FormTitleTags.H1,
      children: [I ? (0, a.jsx)(j, {
        discoveryEnabled: t.features.has(L.GuildFeatures.DISCOVERABLE),
        onboardingEnabled: t.features.has(L.GuildFeatures.GUILD_ONBOARDING),
        guild: t
      }) : null, (0, a.jsxs)(u.FormSection, {
        className: i()(p.twoColumnFormSection, p.firstSection),
        children: [(0, a.jsxs)("div", {
          className: p.descriptionColumn,
          children: [(0, a.jsx)(u.FormTitle, {
            className: p.formTitle,
            children: A.default.Messages.FORM_LABEL_DISCOVERY_RULES_CHANNEL
          }), (0, a.jsx)(u.FormText, {
            type: u.FormTextTypes.DESCRIPTION,
            className: p.__invalid_formDescription,
            children: A.default.Messages.GUILD_SETTINGS_COMMUNITY_RULES_CHANNEL_HELP
          })]
        }), (0, a.jsx)("div", {
          className: p.selectColumn,
          children: (0, a.jsx)(u.SearchableSelect, {
            value: t.rulesChannelId,
            options: f,
            onChange: M,
            isDisabled: !s
          })
        })]
      }), (0, a.jsx)(u.FormDivider, {
        className: p.divider
      }), (0, a.jsxs)(u.FormSection, {
        className: i()(p.twoColumnFormSection, p.firstSection),
        children: [(0, a.jsxs)("div", {
          className: p.descriptionColumn,
          children: [(0, a.jsx)(u.FormTitle, {
            className: p.formTitle,
            children: A.default.Messages.GUILD_SETTINGS_COMMUNITY_MOD_CHANNEL_TITLE
          }), (0, a.jsx)(u.FormText, {
            type: u.FormTextTypes.DESCRIPTION,
            className: p.__invalid_formDescription,
            children: A.default.Messages.GUILD_SETTINGS_COMMUNITY_MOD_CHANNEL_HELP
          })]
        }), (0, a.jsx)("div", {
          className: p.selectColumn,
          children: (0, a.jsx)(u.SearchableSelect, {
            value: t.publicUpdatesChannelId,
            options: f,
            onChange: G,
            isDisabled: !s
          })
        })]
      }), (0, a.jsx)(u.FormDivider, {
        className: p.divider
      }), S && (0, a.jsxs)(a.Fragment, {
        children: [(0, a.jsxs)(u.FormSection, {
          className: i()(p.twoColumnFormSection, p.firstSection),
          children: [(0, a.jsxs)("div", {
            className: p.descriptionColumn,
            children: [(0, a.jsx)(u.FormTitle, {
              className: p.formTitle,
              children: A.default.Messages.GUILD_ANTIRAID_SAFETY_CHANNEL_TITLE
            }), (0, a.jsx)(u.FormText, {
              type: u.FormTextTypes.DESCRIPTION,
              className: p.__invalid_formDescription,
              children: A.default.Messages.GUILD_ANTIRAID_SAFETY_CHANNEL_DESCRIPTION
            })]
          }), (0, a.jsx)("div", {
            className: p.selectColumn,
            children: (0, a.jsx)(u.SearchableSelect, {
              value: t.safetyAlertsChannelId,
              options: f,
              onChange: v,
              isDisabled: !s
            })
          })]
        }), (0, a.jsx)(u.FormDivider, {
          className: p.divider
        })]
      }), (0, a.jsxs)(u.FormSection, {
        className: p.twoColumnFormSection,
        children: [(0, a.jsxs)("div", {
          className: p.descriptionColumn,
          children: [(0, a.jsx)(u.FormTitle, {
            className: p.formTitle,
            children: A.default.Messages.FORM_LABEL_SERVER_LANGUAGE
          }), (0, a.jsx)(u.FormText, {
            type: u.FormTextTypes.DESCRIPTION,
            className: p.__invalid_formDescription,
            children: A.default.Messages.GUILD_SETTINGS_COMMUNITY_LOCALE_HELP
          })]
        }), (0, a.jsx)("div", {
          className: p.selectColumn,
          children: (0, a.jsx)(u.SearchableSelect, {
            value: t.preferredLocale,
            options: c,
            onChange: U,
            isDisabled: !s
          })
        })]
      }), (0, a.jsx)(u.FormDivider, {
        className: p.divider
      }), (() => {
        var e;
        if (null != t) return (0, a.jsxs)(u.FormSection, {
          children: [(0, a.jsx)(u.FormTitle, {
            className: p.formTitle,
            children: A.default.Messages.FORM_LABEL_SERVER_DESCRIPTION
          }), (0, a.jsx)(u.FormText, {
            className: p.description,
            type: u.FormTextTypes.DESCRIPTION,
            children: A.default.Messages.FORM_HELP_SERVER_DESCRIPTION
          }), (0, a.jsx)(u.TextArea, {
            value: null !== (e = t.description) && void 0 !== e ? e : "",
            placeholder: A.default.Messages.SERVER_DESCIPTION_EMPTY,
            onChange: P,
            maxLength: 120,
            disabled: !s
          })]
        })
      })(), (0, a.jsx)(u.FormDivider, {
        className: p.divider
      }), (0, a.jsxs)(u.FormSection, {
        className: p.twoColumnFormSection,
        children: [(0, a.jsxs)("div", {
          className: p.descriptionColumn,
          children: [(0, a.jsx)(u.FormTitle, {
            className: p.formTitle,
            children: A.default.Messages.GUILD_SETTINGS_COMMUNITY_DISABLE_COMMUNITY
          }), (0, a.jsx)(u.FormText, {
            type: u.FormTextTypes.DESCRIPTION,
            className: p.__invalid_formDescription,
            children: A.default.Messages.GUILD_SETTINGS_COMMUNITY_DISABLE_COMMUNITY_DESCRIPTION
          })]
        }), (0, a.jsx)(u.Tooltip, {
          text: n ? null : A.default.Messages.GUILD_SETTINGS_COMMUNITY_ADMINISTRATOR_ONLY,
          "aria-label": n ? void 0 : A.default.Messages.GUILD_SETTINGS_COMMUNITY_ADMINISTRATOR_ONLY,
          children: e => (0, a.jsx)(u.Button, {
            size: u.Button.Sizes.SMALL,
            onClick: b,
            color: u.Button.Colors.RED,
            disabled: !n,
            ...e,
            children: A.default.Messages.GUILD_SETTINGS_COMMUNITY_DISABLE_COMMUNITY
          })
        })]
      })]
    })
  };
t.default = () => {
  let e = (0, r.useStateFromStores)([R.default], () => R.default.getGuild());
  return null == e ? null : e.features.has(L.GuildFeatures.COMMUNITY) ? (0, a.jsx)(G, {}) : (0, a.jsx)(x.default, {
    guild: e
  })
}