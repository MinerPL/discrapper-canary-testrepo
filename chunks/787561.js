"use strict";
t.d(s, {
  X: function() {
    return D
  }
}), t(47120), t(653041);
var n = t(735250),
  i = t(470079),
  l = t(120356),
  a = t.n(l),
  r = t(442837),
  o = t(544891),
  c = t(433517),
  d = t(481060),
  u = t(852860),
  E = t(933557),
  _ = t(655006),
  I = t(769654),
  T = t(984933),
  N = t(650774),
  m = t(430824),
  S = t(496675),
  h = t(699516),
  g = t(594174),
  x = t(465670),
  C = t(434404),
  R = t(999382),
  L = t(54842),
  O = t(981631),
  A = t(731455),
  p = t(689938),
  M = t(592218),
  f = t(922905);
let v = "dismissedCommunityFeaturesUpsell",
  D = () => {
    let e;
    let {
      guild: s,
      submitting: t,
      errors: i
    } = (0, r.cj)([R.Z], () => ({
      submitting: R.Z.isSubmitting(),
      guild: R.Z.getGuild(),
      errors: R.Z.getErrors()
    })), l = Object.keys(i), a = l.length > 0 ? l[0] : null;
    if ("rules_channel_id" === a) e = p.Z.Messages.GUILD_RULES_INVALID_CHANNEL;
    else e = null != a ? i[a] : void 0;
    return (0, n.jsx)(u.Z, {
      submitting: t,
      onReset: () => {
        if (null != s) C.Z.init(s.id)
      },
      onSave: () => {
        if (null != s) C.Z.saveGuild(s.id, {
          rulesChannelId: s.rulesChannelId,
          preferredLocale: s.preferredLocale,
          safetyAlertsChannelId: s.safetyAlertsChannelId,
          publicUpdatesChannelId: s.publicUpdatesChannelId,
          description: s.description,
          features: s.features
        })
      },
      errorMessage: e
    })
  },
  Z = e => {
    let {
      discoveryEnabled: s,
      onboardingEnabled: t,
      guild: l
    } = e, [a, u] = i.useState(!0 === c.K.get(v)), E = (0, r.e7)([N.Z], () => {
      var e;
      return null !== (e = N.Z.getMemberCount(l.id)) && void 0 !== e ? e : 0
    }), [_, T] = i.useState(!1);
    i.useEffect(() => {
      o.tn.get(O.ANM.GUILD_ADMIN_SERVER_ELIGIBILITY(l.id)).then(e => {
        T(e.body.eligible_for_admin_server)
      }).catch(() => T(!1))
    }, []);
    let S = (0, r.e7)([m.Z], () => m.Z.getGuild("942897714956472401")),
      h = l.isCommunity() && E >= 1e3 && _ && !(null != S);
    if (s && t && !h) return null;
    let g = async () => {
      try {
        let e = await o.tn.post({
          url: O.ANM.JOIN_ADMIN_SERVER(l.id),
          oldFormErrors: !0
        });
        C.Z.close(), (0, I.X)(e.body.id)
      } catch {}
    };
    return a && !h ? null : (0, n.jsxs)("div", {
      className: M.upsellContainer,
      children: [(0, n.jsxs)("div", {
        className: M.upsellContent,
        children: [(0, n.jsx)("img", {
          src: f,
          alt: "",
          width: 60,
          className: M.upsellImage
        }), (0, n.jsxs)("div", {
          children: [(0, n.jsx)(d.Heading, {
            variant: "heading-md/semibold",
            className: M.upsellHeader,
            children: p.Z.Messages.GUILD_SETTINGS_COMMUNITY_UPSELL_HEADER
          }), (0, n.jsx)(d.Text, {
            variant: "text-sm/normal",
            children: p.Z.Messages.GUILD_SETTINGS_COMMUNITY_UPSELL_BODY
          })]
        })]
      }), (0, n.jsx)(d.Button, {
        "aria-label": p.Z.Messages.CLOSE,
        look: d.Button.Looks.BLANK,
        size: d.Button.Sizes.NONE,
        className: M.upsellClose,
        onClick: () => {
          c.K.set(v, !0), u(!0)
        },
        children: (0, n.jsx)(x.Z, {
          width: 24,
          height: 24
        })
      }), (0, n.jsxs)("div", {
        className: M.upsellFooter,
        children: [h && (0, n.jsx)(d.Button, {
          size: d.Button.Sizes.SMALL,
          onClick: g,
          className: M.upsellButton,
          children: p.Z.Messages.GUILD_SETTINGS_COMMUNITY_UPSELL_BUTTON_ADMIN_SERVER
        }), t ? null : (0, n.jsx)(d.Button, {
          size: d.Button.Sizes.SMALL,
          onClick: () => {
            C.Z.setSection(O.pNK.ONBOARDING)
          },
          className: M.upsellButton,
          children: p.Z.Messages.GUILD_SETTINGS_COMMUNITY_UPSELL_BUTTON_ONBOARDING
        }), s ? null : (0, n.jsx)(d.Button, {
          size: d.Button.Sizes.SMALL,
          onClick: () => {
            C.Z.setSection(O.pNK.DISCOVERY)
          },
          className: M.upsellButton,
          color: d.Button.Colors.PRIMARY,
          children: p.Z.Messages.GUILD_SETTINGS_COMMUNITY_UPSELL_BUTTON_DISCOVERY
        }), (0, n.jsx)(d.Button, {
          size: d.Button.Sizes.SMALL,
          onClick: () => {
            C.Z.setSection(O.pNK.ANALYTICS)
          },
          className: M.upsellButton,
          color: d.Button.Colors.PRIMARY,
          children: p.Z.Messages.GUILD_SETTINGS_COMMUNITY_UPSELL_BUTTON_ANALYTICS
        })]
      })]
    })
  },
  j = () => {
    var e;
    let s = (0, r.e7)([R.Z], () => R.Z.getGuild()),
      {
        canManageGuild: t,
        isGuildAdmin: l
      } = (0, r.cj)([S.Z], () => ({
        canManageGuild: S.Z.can(O.Plq.MANAGE_GUILD, s),
        isGuildAdmin: S.Z.can(O.Plq.ADMINISTRATOR, s)
      })),
      o = (0, r.e7)([T.ZP], () => null != s ? T.ZP.getChannels(s.id) : null),
      u = i.useMemo(A.jb, []),
      I = !0 !== c.K.get(v),
      {
        enableRaidAlerts: N
      } = _.l.useExperiment({
        guildId: null !== (e = null == s ? void 0 : s.id) && void 0 !== e ? e : O.lds,
        location: "c1af51_2"
      }, {
        autoTrackExposure: t
      });
    if (null == s) return null;
    let m = [];
    null != o && o[T.sH].forEach(e => {
      let {
        channel: s
      } = e;
      s.type === O.d4z.GUILD_TEXT && m.push({
        value: s.id,
        label: (0, E.F6)(s, g.default, h.Z, !0)
      })
    });
    let x = () => {
        C.Z.init(s.id), C.Z.open(s.id, O.pNK.MEMBER_VERIFICATION)
      },
      L = () => {
        if (null == s) return;
        let e = new Set(s.features);
        e.delete(O.oNc.COMMUNITY), e.delete(O.oNc.DISCOVERABLE), !s.hasFeature(O.oNc.CLAN) && e.delete(O.oNc.MEMBER_VERIFICATION_GATE_ENABLED), e.delete(O.oNc.PREVIEW_ENABLED), C.Z.updateGuild({
          features: e,
          rulesChannelId: null,
          publicUpdatesChannelId: null
        })
      },
      f = e => {
        C.Z.updateGuild({
          rulesChannelId: e
        })
      },
      D = e => {
        C.Z.updateGuild({
          safetyAlertsChannelId: e
        })
      },
      j = e => {
        C.Z.updateGuild({
          publicUpdatesChannelId: e
        })
      },
      U = e => {
        C.Z.updateGuild({
          preferredLocale: e
        })
      },
      G = e => {
        C.Z.updateGuild({
          description: e
        })
      },
      P = () => {
        s.features.has(O.oNc.DISCOVERABLE) && s.features.has(O.oNc.PARTNERED) ? (0, d.openModal)(e => (0, n.jsx)(d.ConfirmModal, {
          ...e,
          header: p.Z.Messages.GUILD_SETTINGS_COMMUNITY_DISABLE_PUBLIC_CONFIRM_DEFAULT_TITLE,
          confirmText: p.Z.Messages.CONFIRM,
          cancelText: p.Z.Messages.NEVERMIND,
          onConfirm: L,
          children: (0, n.jsx)(d.Text, {
            variant: "text-sm/normal",
            children: p.Z.Messages.GUILD_SETTINGS_PARTNER_AND_DISCOVERY_DISABLE_PUBLIC_CONFIRM_TEXT
          })
        })) : s.features.has(O.oNc.DISCOVERABLE) ? (0, d.openModal)(e => (0, n.jsx)(d.ConfirmModal, {
          ...e,
          header: p.Z.Messages.GUILD_SETTINGS_COMMUNITY_DISABLE_PUBLIC_CONFIRM_DEFAULT_TITLE,
          confirmText: p.Z.Messages.CONFIRM,
          cancelText: p.Z.Messages.NEVERMIND,
          onConfirm: L,
          children: (0, n.jsx)(d.Text, {
            variant: "text-sm/normal",
            children: p.Z.Messages.GUILD_SETTINGS_DISCOVERY_DISABLE_PUBLIC_CONFIRM_TEXT
          })
        })) : s.features.has(O.oNc.PARTNERED) ? (0, d.openModal)(e => (0, n.jsx)(d.ConfirmModal, {
          ...e,
          header: p.Z.Messages.GUILD_SETTINGS_COMMUNITY_DISABLE_PUBLIC_CONFIRM_DEFAULT_TITLE,
          confirmText: p.Z.Messages.CONFIRM,
          cancelText: p.Z.Messages.NEVERMIND,
          onConfirm: L,
          children: (0, n.jsx)(d.Text, {
            variant: "text-sm/normal",
            children: p.Z.Messages.GUILD_SETTINGS_PARTNER_DISABLE_PUBLIC_CONFIRM_TEXT
          })
        })) : s.features.has(O.oNc.MEMBER_VERIFICATION_GATE_ENABLED) && !s.features.has(O.oNc.CLAN) ? (0, d.openModal)(e => (0, n.jsx)(d.ConfirmModal, {
          ...e,
          header: p.Z.Messages.GUILD_SETTINGS_COMMUNITY_DISABLE_PUBLIC_CONFIRM_DEFAULT_TITLE,
          confirmButtonColor: d.Button.Colors.BRAND,
          confirmText: p.Z.Messages.GUILD_SETTINGS_COMMUNITY_DISABLE_MEMBER_VERIFICATION_CONFIRM,
          cancelText: p.Z.Messages.NEVERMIND,
          onConfirm: x,
          children: (0, n.jsx)(d.Text, {
            variant: "text-sm/normal",
            children: p.Z.Messages.GUILD_SETTINGS_COMMUNITY_DISABLE_MEMBER_VERIFICATION
          })
        })) : L()
      };
    return (0, n.jsxs)(d.FormSection, {
      title: p.Z.Messages.GUILD_SETTINGS_COMMUNITY,
      tag: d.FormTitleTags.H1,
      children: [I ? (0, n.jsx)(Z, {
        discoveryEnabled: s.features.has(O.oNc.DISCOVERABLE),
        onboardingEnabled: s.features.has(O.oNc.GUILD_ONBOARDING),
        guild: s
      }) : null, (0, n.jsxs)(d.FormSection, {
        className: a()(M.twoColumnFormSection, M.firstSection),
        children: [(0, n.jsxs)("div", {
          className: M.descriptionColumn,
          children: [(0, n.jsx)(d.FormTitle, {
            className: M.formTitle,
            children: p.Z.Messages.FORM_LABEL_DISCOVERY_RULES_CHANNEL
          }), (0, n.jsx)(d.FormText, {
            type: d.FormTextTypes.DESCRIPTION,
            className: M.__invalid_formDescription,
            children: p.Z.Messages.GUILD_SETTINGS_COMMUNITY_RULES_CHANNEL_HELP
          })]
        }), (0, n.jsx)("div", {
          className: M.selectColumn,
          children: (0, n.jsx)(d.SearchableSelect, {
            value: s.rulesChannelId,
            options: m,
            onChange: f,
            isDisabled: !t
          })
        })]
      }), (0, n.jsx)(d.FormDivider, {
        className: M.divider
      }), (0, n.jsxs)(d.FormSection, {
        className: a()(M.twoColumnFormSection, M.firstSection),
        children: [(0, n.jsxs)("div", {
          className: M.descriptionColumn,
          children: [(0, n.jsx)(d.FormTitle, {
            className: M.formTitle,
            children: p.Z.Messages.GUILD_SETTINGS_COMMUNITY_MOD_CHANNEL_TITLE
          }), (0, n.jsx)(d.FormText, {
            type: d.FormTextTypes.DESCRIPTION,
            className: M.__invalid_formDescription,
            children: p.Z.Messages.GUILD_SETTINGS_COMMUNITY_MOD_CHANNEL_HELP
          })]
        }), (0, n.jsx)("div", {
          className: M.selectColumn,
          children: (0, n.jsx)(d.SearchableSelect, {
            value: s.publicUpdatesChannelId,
            options: m,
            onChange: j,
            isDisabled: !t
          })
        })]
      }), (0, n.jsx)(d.FormDivider, {
        className: M.divider
      }), N && (0, n.jsxs)(n.Fragment, {
        children: [(0, n.jsxs)(d.FormSection, {
          className: a()(M.twoColumnFormSection, M.firstSection),
          children: [(0, n.jsxs)("div", {
            className: M.descriptionColumn,
            children: [(0, n.jsx)(d.FormTitle, {
              className: M.formTitle,
              children: p.Z.Messages.GUILD_ANTIRAID_SAFETY_CHANNEL_TITLE
            }), (0, n.jsx)(d.FormText, {
              type: d.FormTextTypes.DESCRIPTION,
              className: M.__invalid_formDescription,
              children: p.Z.Messages.GUILD_ANTIRAID_SAFETY_CHANNEL_DESCRIPTION
            })]
          }), (0, n.jsx)("div", {
            className: M.selectColumn,
            children: (0, n.jsx)(d.SearchableSelect, {
              value: s.safetyAlertsChannelId,
              options: m,
              onChange: D,
              isDisabled: !t
            })
          })]
        }), (0, n.jsx)(d.FormDivider, {
          className: M.divider
        })]
      }), (0, n.jsxs)(d.FormSection, {
        className: M.twoColumnFormSection,
        children: [(0, n.jsxs)("div", {
          className: M.descriptionColumn,
          children: [(0, n.jsx)(d.FormTitle, {
            className: M.formTitle,
            children: p.Z.Messages.FORM_LABEL_SERVER_LANGUAGE
          }), (0, n.jsx)(d.FormText, {
            type: d.FormTextTypes.DESCRIPTION,
            className: M.__invalid_formDescription,
            children: p.Z.Messages.GUILD_SETTINGS_COMMUNITY_LOCALE_HELP
          })]
        }), (0, n.jsx)("div", {
          className: M.selectColumn,
          children: (0, n.jsx)(d.SearchableSelect, {
            value: s.preferredLocale,
            options: u,
            onChange: U,
            isDisabled: !t
          })
        })]
      }), (0, n.jsx)(d.FormDivider, {
        className: M.divider
      }), (() => {
        var e;
        if (null != s) return (0, n.jsxs)(d.FormSection, {
          children: [(0, n.jsx)(d.FormTitle, {
            className: M.formTitle,
            children: p.Z.Messages.FORM_LABEL_SERVER_DESCRIPTION
          }), (0, n.jsx)(d.FormText, {
            className: M.description,
            type: d.FormTextTypes.DESCRIPTION,
            children: p.Z.Messages.FORM_HELP_SERVER_DESCRIPTION
          }), (0, n.jsx)(d.TextArea, {
            value: null !== (e = s.description) && void 0 !== e ? e : "",
            placeholder: p.Z.Messages.SERVER_DESCIPTION_EMPTY,
            onChange: G,
            maxLength: 120,
            disabled: !t
          })]
        })
      })(), (0, n.jsx)(d.FormDivider, {
        className: M.divider
      }), (0, n.jsxs)(d.FormSection, {
        className: M.twoColumnFormSection,
        children: [(0, n.jsxs)("div", {
          className: M.descriptionColumn,
          children: [(0, n.jsx)(d.FormTitle, {
            className: M.formTitle,
            children: p.Z.Messages.GUILD_SETTINGS_COMMUNITY_DISABLE_COMMUNITY
          }), (0, n.jsx)(d.FormText, {
            type: d.FormTextTypes.DESCRIPTION,
            className: M.__invalid_formDescription,
            children: p.Z.Messages.GUILD_SETTINGS_COMMUNITY_DISABLE_COMMUNITY_DESCRIPTION
          })]
        }), (0, n.jsx)(d.Tooltip, {
          text: l ? null : p.Z.Messages.GUILD_SETTINGS_COMMUNITY_ADMINISTRATOR_ONLY,
          "aria-label": l ? void 0 : p.Z.Messages.GUILD_SETTINGS_COMMUNITY_ADMINISTRATOR_ONLY,
          children: e => (0, n.jsx)(d.Button, {
            size: d.Button.Sizes.SMALL,
            onClick: P,
            color: d.Button.Colors.RED,
            disabled: !l,
            ...e,
            children: p.Z.Messages.GUILD_SETTINGS_COMMUNITY_DISABLE_COMMUNITY
          })
        })]
      })]
    })
  };
s.Z = () => {
  let e = (0, r.e7)([R.Z], () => R.Z.getGuild());
  return null == e ? null : e.features.has(O.oNc.COMMUNITY) ? (0, n.jsx)(j, {}) : (0, n.jsx)(L.Z, {
    guild: e
  })
}