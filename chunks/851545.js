"use strict";
s.r(t), s.d(t, {
  GuildSettingsDiscoveryLandingPageNotice: function() {
    return j
  },
  default: function() {
    return P
  }
}), s("222007"), s("511434"), s("313619"), s("654714"), s("287168"), s("956660"), s("686130"), s("781738");
var a = s("37983"),
  l = s("884691"),
  n = s("446674"),
  i = s("669491"),
  r = s("77078"),
  o = s("133403"),
  d = s("913801"),
  u = s("45299"),
  c = s("283167"),
  E = s("868246"),
  _ = s("298878"),
  I = s("407063"),
  T = s("694187"),
  S = s("608684"),
  f = s("957255"),
  m = s("93581"),
  N = s("414943"),
  g = s("578706"),
  h = s("381546"),
  C = s("315102"),
  R = s("701909"),
  x = s("592407"),
  L = s("900938"),
  O = s("26991"),
  A = s("744421"),
  p = s("49111"),
  M = s("447621"),
  D = s("782340"),
  v = s("629976");
let G = "https:" + window.GLOBAL_ENV.MARKETING_ENDPOINT + "/servers/",
  j = () => {
    let {
      guild: e,
      guildMetadata: t,
      submitting: s
    } = (0, n.useStateFromStoresObject)([L.default], () => ({
      submitting: L.default.isSubmitting(),
      guild: L.default.getGuild(),
      guildMetadata: L.default.getMetadata()
    }));
    return (0, a.jsx)(u.default, {
      submitting: s,
      onReset: () => {
        null != e && x.default.init(e.id)
      },
      onSave: () => {
        null != e && (x.default.saveGuild(e.id, {
          discoverySplash: e.discoverySplash,
          description: e.description
        }), c.saveGuildMetadata({
          guildId: e.id,
          primaryCategoryId: t.primaryCategoryId,
          keywords: t.keywords,
          emojiDiscoverabilityEnabled: t.emojiDiscoverabilityEnabled,
          partnerActionedTimestamp: t.partnerActionedTimestamp,
          partnerApplicationTimestamp: t.partnerApplicationTimestamp,
          isPublished: t.isPublished,
          reasonsToJoin: t.reasonsToJoin,
          socialLinks: t.socialLinks.filter(e => e),
          about: t.about
        }))
      }
    })
  },
  U = () => {
    var e;
    let t = l.useRef(null),
      s = (0, n.useStateFromStores)([L.default], () => L.default.getGuild()),
      [u, j] = l.useState(!1);
    l.useEffect(() => {
      !u && null != s && (c.maybeFetchGuildDiscoveryCategories(), c.fetchMetadataForGuild(s.id), c.fetchSlugForGuild(s.id), j(!0))
    }, [s, u]);
    let {
      canManageGuild: U
    } = (0, n.useStateFromStoresObject)([f.default], () => ({
      canManageGuild: f.default.can(p.Permissions.MANAGE_GUILD, s)
    })), P = (0, n.useStateFromStores)([L.default], () => L.default.isGuildMetadataLoaded()), b = (0, n.useStateFromStores)([L.default], () => null != s ? L.default.getMetadata() : null), B = (0, n.useStateFromStores)([L.default], () => null != s && (null == b ? void 0 : b.isPublished) ? L.default.getSlug() : null), [y, F] = l.useState([!0]), [H, k] = l.useState(!0), [w, V] = l.useState([!1]), [Y, W] = l.useState([""]), z = e => {
      let t = Object.entries(M.ALLOWED_SOCIAL_LINKS_DOMAINS).filter(e => !Y.includes(e[1].presentation)).map(e => ({
        label: e[1].presentation,
        value: e[0]
      }));
      return null == e || "" === e ? t : t.concat({
        label: e,
        value: e
      })
    }, K = e => {
      try {
        var t, s, a, l;
        let n = new URL(e).hostname.split(".");
        if (3 === n.length && "bandcamp" === n[1].toLowerCase()) return M.ALLOWED_SOCIAL_LINKS_DOMAINS.bandcamp.presentation;
        let i = null !== (s = null === (t = n.shift()) || void 0 === t ? void 0 : t.toLowerCase()) && void 0 !== s ? s : "";
        if ("www" === i && (i = null !== (l = null === (a = n.shift()) || void 0 === a ? void 0 : a.toLowerCase()) && void 0 !== l ? l : ""), i in M.ALLOWED_SOCIAL_LINKS_DOMAINS) return M.ALLOWED_SOCIAL_LINKS_DOMAINS[i].presentation;
        return null
      } catch {
        return null
      }
    };
    l.useEffect(() => {
      if (null !== b) {
        let e = [],
          t = [];
        b.socialLinks.forEach((s, a) => {
          if ("" !== s) {
            let l = K(s);
            null !== l ? (t[a] = l, e[a] = !0) : e[a] = !1
          } else e[a] = !0
        }), W(t), F(e), k(e.every(e => !0 === e))
      }
    }, [b]);
    let Z = (0, n.useStateFromStores)([L.default], () => null != s ? L.default.getErrors() : null),
      X = (0, n.useStateFromStores)([E.default], () => E.default.getPrimaryCategories(), [], E.areDiscoveryCategoriesEqual);
    if (null == s || null == b) return null;
    let Q = e => {
        x.default.updateGuild({
          discoverySplash: e
        })
      },
      J = e => {
        var t;
        (null == s ? void 0 : s.id) != null && c.updateGuildPrimaryCategory(null == s ? void 0 : s.id, null !== (t = null == e ? void 0 : e.value) && void 0 !== t ? t : M.DEFAULT_DISCOVERY_CATEGORY_ID)
      },
      q = e => {
        var t;
        x.default.updateGuild({
          description: null !== (t = null == e ? void 0 : e.replaceAll("\n", "")) && void 0 !== t ? t : ""
        })
      },
      $ = e => {
        c.updateGuildDiscoveryMetadataAbout(s.id, e)
      },
      ee = e => {
        c.updateGuildDiscoveryMetadataIsPublished(s.id, e), e ? c.saveGuildMetadata({
          guildId: s.id,
          primaryCategoryId: b.primaryCategoryId,
          keywords: b.keywords,
          emojiDiscoverabilityEnabled: b.emojiDiscoverabilityEnabled,
          partnerActionedTimestamp: b.partnerActionedTimestamp,
          partnerApplicationTimestamp: b.partnerApplicationTimestamp,
          isPublished: !0,
          reasonsToJoin: b.reasonsToJoin,
          socialLinks: b.socialLinks,
          about: b.about
        }) : c.saveGuildMetadata({
          guildId: s.id,
          primaryCategoryId: b.primaryCategoryId,
          keywords: b.keywords,
          emojiDiscoverabilityEnabled: b.emojiDiscoverabilityEnabled,
          partnerActionedTimestamp: b.partnerActionedTimestamp,
          partnerApplicationTimestamp: b.partnerApplicationTimestamp,
          isPublished: !1,
          reasonsToJoin: b.reasonsToJoin,
          socialLinks: b.socialLinks,
          about: b.about
        }), x.default.saveGuild(s.id, {
          discoverySplash: s.discoverySplash,
          description: s.description
        })
      },
      et = () => {
        if (b.socialLinks.length < 9) {
          let e = [...b.socialLinks];
          c.updateGuildDiscoveryMetadataSocialLinks(s.id, e.concat("")), W(Y.concat(""))
        }
      },
      es = (e, t) => {
        let a = [...b.socialLinks],
          l = [...Y],
          n = [...y];
        l[t] = e, a[t] = M.ALLOWED_SOCIAL_LINKS_DOMAINS[e].baseUrl, n[t] = !0, F(n), W(l), k(n.every(e => !0 === e)), c.updateGuildDiscoveryMetadataSocialLinks(s.id, a)
      },
      ea = (e, t) => {
        let a = [...b.socialLinks],
          l = a[t],
          n = e;
        if (0 === l.length && n.length > 1) {
          let e = RegExp("^https?:");
          !1 === e.test(n) && (n = "https://" + n)
        }
        a[t] = n, c.updateGuildDiscoveryMetadataSocialLinks(s.id, a)
      },
      el = e => {
        let t = [...w];
        t.splice(e, 1), V(t);
        let a = [...y];
        a.splice(e, 1), F(a);
        let l = [...Y];
        l.splice(e, 1), W(l);
        let n = [...b.socialLinks];
        n.splice(e, 1), c.updateGuildDiscoveryMetadataSocialLinks(s.id, n)
      },
      en = e => {
        let {
          reason: t = "",
          emoji_name: s = ""
        } = e;
        return null !== t && t.length >= 10 && t.length <= 128 && null !== s
      },
      ei = e => {
        let {
          reason: t = "",
          emoji_name: s = ""
        } = e;
        return (null === t || "" === t) && null === s
      },
      er = [{
        title: D.default.Messages.DISCOVERY_LANDING_PAGE_CHECKLIST_REQUIREMENTS,
        items: [{
          description: D.default.Messages.DISCOVERY_LANDING_PAGE_CHECKLIST_UPLOAD_COVER_IMAGE,
          completed: null !== s.discoverySplash && "" !== s.discoverySplash
        }, {
          description: D.default.Messages.DISCOVERY_LANDING_PAGE_CHECKLIST_SHORT_DESCRIPTION,
          completed: null !== s.description && "" !== s.description
        }, {
          description: D.default.Messages.DISCOVERY_LANDING_PAGE_CHECKLIST_ABOUT,
          completed: null !== b.about && b.about.length >= 300 && b.about.length <= 2400
        }, {
          description: D.default.Messages.DISCOVERY_LANDING_PAGE_CHECKLIST_REASONS,
          completed: null !== b.reasonsToJoin && b.reasonsToJoin.every(e => ei(e) || en(e)) && b.reasonsToJoin.filter(en).length >= 2
        }]
      }],
      eo = X.map(e => ({
        label: e.name,
        value: e.categoryId
      })),
      ed = (e, t) => {
        let s = [...w];
        s[e] = t, V(s)
      };
    return (0, a.jsx)("div", {
      className: v.settingsColumn,
      children: (0, a.jsx)("div", {
        className: v.settingsContainer,
        children: (0, a.jsx)(r.ScrollerAuto, {
          className: v.settingsScroller,
          children: (0, a.jsx)("main", {
            ref: t,
            className: v.settingsContent,
            children: (0, a.jsx)(r.FocusRingScope, {
              containerRef: t,
              children: (0, a.jsxs)("div", {
                className: v.container,
                children: [(0, a.jsxs)(r.FormSection, {
                  className: v.mainContent,
                  title: (0, a.jsxs)("div", {
                    children: [D.default.Messages.DISCOVERY_LANDING_PAGE, " ", (0, a.jsx)(_.default, {
                      className: v.betaTag
                    })]
                  }),
                  tag: r.FormTitleTags.H1,
                  children: [(0, a.jsxs)(r.FormText, {
                    className: v.tabMainDescription,
                    type: r.FormTextTypes.DESCRIPTION,
                    children: [D.default.Messages.DISCOVERY_LANDING_PAGE_DESCRIPTION.format({
                      discordURL: window.GLOBAL_ENV.MARKETING_ENDPOINT
                    }), " ", D.default.Messages.DISCOVERY_LANDING_PAGE_LEARN_MORE.format({
                      learnMoreURL: R.default.getArticleURL(p.HelpdeskArticles.SERVER_WEB_PAGES)
                    })]
                  }), (() => {
                    if (!b.isPublished || null == B) return;
                    let e = G + B;
                    return (0, a.jsx)(a.Fragment, {
                      children: (0, a.jsxs)(r.FormSection, {
                        className: v.noDividerFormSection,
                        children: [(0, a.jsx)(r.FormTitle, {
                          className: v.formTitle,
                          children: D.default.Messages.DISCOVERY_LANDING_PAGE_PUBLISHED_URL_TITLE
                        }), (0, a.jsx)(d.default, {
                          value: e
                        }), (0, a.jsx)(r.Button, {
                          className: v.viewPageButton,
                          size: r.Button.Sizes.SMALL,
                          color: r.Button.Colors.BRAND,
                          hover: r.Button.Colors.BRAND,
                          onClick: () => window.open(e),
                          children: D.default.Messages.DISCOVERY_LANDING_PAGE_PUBLISHED_URL_VIEW_PAGE_BUTTON
                        })]
                      })
                    })
                  })(), (0, a.jsx)(r.FormDivider, {
                    className: v.divider
                  }), (() => {
                    if (null != s) return (0, a.jsxs)(a.Fragment, {
                      children: [(0, a.jsxs)(r.FormSection, {
                        children: [(0, a.jsx)(r.FormTitle, {
                          className: v.formTitle,
                          children: D.default.Messages.DISCOVERY_LANDING_PAGE_CATEGORY_TITLE
                        }), (0, a.jsx)(r.FormText, {
                          type: r.FormTextTypes.DESCRIPTION,
                          className: v.description,
                          children: D.default.Messages.DISCOVERY_LANDING_PAGE_CATEGORY_DESCRIPTION
                        })]
                      }), (0, a.jsx)(N.default, {
                        value: b.primaryCategoryId === M.DEFAULT_DISCOVERY_CATEGORY_ID ? null : null == b ? void 0 : b.primaryCategoryId,
                        placeholder: D.default.Messages.SELECT,
                        options: eo,
                        onChange: J,
                        disabled: !U,
                        searchable: !0,
                        clearable: !0
                      }), (0, a.jsxs)(r.FormSection, {
                        className: v.noDividerFormSection,
                        children: [(0, a.jsx)(r.FormTitle, {
                          className: v.formTitle,
                          children: D.default.Messages.GUILD_SETTINGS_DISCOVERY_SUBCATEGORY_TITLE
                        }), (0, a.jsx)(O.default, {
                          guild: s,
                          guildMetadata: b,
                          disabled: !U
                        })]
                      }), (null == Z ? void 0 : Z.category) != null ? (0, a.jsx)(r.Text, {
                        color: "text-danger",
                        className: v.error,
                        variant: "text-sm/normal",
                        children: Z.category
                      }) : null]
                    })
                  })(), (0, a.jsx)(r.FormDivider, {
                    className: v.divider
                  }), (() => {
                    if (null != s) return (0, a.jsxs)(a.Fragment, {
                      children: [(0, a.jsxs)(r.FormSection, {
                        className: v.twoColumnFormSection,
                        children: [(0, a.jsxs)("div", {
                          children: [(0, a.jsx)(r.FormTitle, {
                            className: v.formTitle,
                            children: D.default.Messages.FORM_LABEL_DISCOVERY_COVER_IMAGE
                          }), (0, a.jsx)(r.FormText, {
                            type: r.FormTextTypes.DESCRIPTION,
                            className: v.formDescription,
                            children: D.default.Messages.DISCOVERY_LANDING_PAGE_COVER_IMAGE_DESCRIPTION
                          }), (0, a.jsxs)(r.Button, {
                            size: r.Button.Sizes.SMALL,
                            color: r.Button.Colors.PRIMARY,
                            hover: r.Button.Colors.PRIMARY,
                            children: [D.default.Messages.UPLOAD_BACKGROUND, (0, a.jsx)(T.default, {
                              disabled: !U,
                              onChange: Q
                            })]
                          })]
                        }), (0, a.jsx)(S.default, {
                          image: s.discoverySplash,
                          makeURL: e => C.default.getGuildDiscoverySplashURL({
                            id: s.id,
                            splash: e,
                            size: 512 * (0, I.getDevicePixelRatio)()
                          }),
                          disabled: !U,
                          onChange: Q,
                          hint: D.default.Messages.CHANGE_SPLASH,
                          imageClassName: v.imageUploaderInnerSquare,
                          hideSize: !0
                        })]
                      }), (null == Z ? void 0 : Z.discovery_splash) != null ? (0, a.jsx)(r.Text, {
                        color: "text-danger",
                        variant: "text-sm/normal",
                        children: Z.discovery_splash
                      }) : null]
                    })
                  })(), (0, a.jsx)(r.FormDivider, {
                    className: v.divider
                  }), (0, a.jsxs)(r.FormSection, {
                    children: [(0, a.jsx)(r.FormTitle, {
                      className: v.formTitle,
                      children: D.default.Messages.FORM_LABEL_SERVER_DESCRIPTION
                    }), (0, a.jsx)(r.FormText, {
                      className: v.description,
                      type: r.FormTextTypes.DESCRIPTION,
                      children: D.default.Messages.DISCOVERY_LANDING_PAGE_SERVER_DESCRIPTION
                    }), (0, a.jsx)(r.TextArea, {
                      value: null !== s.description ? s.description : "",
                      placeholder: D.default.Messages.DISCOVERY_LANDING_PAGE_SERVER_DESCRIPTION_HINT,
                      onChange: q,
                      maxLength: 120,
                      disabled: !U
                    })]
                  }), (0, a.jsx)(r.FormDivider, {
                    className: v.divider
                  }), (() => {
                    if (null == b) return null;
                    let e = 0 === b.reasonsToJoin.length ? [, , , , ].fill({
                      reason: "",
                      emoji_name: null
                    }) : b.reasonsToJoin;
                    return (0, a.jsxs)(r.FormSection, {
                      children: [(0, a.jsx)(r.FormTitle, {
                        className: v.formTitle,
                        children: D.default.Messages.DISCOVERY_LANDING_PAGE_REASONS_TO_JOIN_TITLE
                      }), (0, a.jsx)(r.FormText, {
                        type: r.FormTextTypes.DESCRIPTION,
                        className: v.description,
                        children: D.default.Messages.DISCOVERY_LANDING_PAGE_REASONS_TO_JOIN_DESCRIPTION
                      }), (0, a.jsx)("div", {
                        className: v.reasonToJoin,
                        children: (0, a.jsx)(A.default, {
                          reasonMinLength: 10,
                          reasonMaxLength: 128,
                          guildId: s.id,
                          reasons: e
                        })
                      }), (null == Z ? void 0 : Z.reasons_to_join) != null ? (0, a.jsx)(r.Text, {
                        color: "text-danger",
                        variant: "text-sm/normal",
                        children: Z.reasons_to_join
                      }) : null]
                    })
                  })(), (0, a.jsx)(r.FormDivider, {
                    className: v.divider
                  }), (0, a.jsxs)(a.Fragment, {
                    children: [(0, a.jsxs)(r.FormSection, {
                      children: [(0, a.jsx)(r.FormTitle, {
                        className: v.formTitle,
                        children: D.default.Messages.DISCOVERY_LANDING_PAGE_ABOUT_TITLE
                      }), (0, a.jsx)(r.FormText, {
                        className: v.description,
                        type: r.FormTextTypes.DESCRIPTION,
                        children: D.default.Messages.DISCOVERY_LANDING_PAGE_ABOUT_DESCRIPTION
                      }), (0, a.jsx)(r.TextArea, {
                        showCharacterCount: !0,
                        className: v.textArea,
                        value: b.about,
                        placeholder: D.default.Messages.DISCOVERY_LANDING_PAGE_ABOUT_HINT,
                        onChange: $,
                        minLength: 300,
                        maxLength: 2400,
                        disabled: !U,
                        defaultDirty: (null === (e = b.about) || void 0 === e ? void 0 : e.length) > 0
                      }, "text-area-".concat(P))]
                    }), (null == Z ? void 0 : Z.about) != null ? (0, a.jsx)(r.Text, {
                      color: "text-danger",
                      variant: "text-sm/normal",
                      children: Z.about
                    }) : null]
                  }), (0, a.jsx)(r.FormDivider, {
                    className: v.divider
                  }), (0, a.jsx)(a.Fragment, {
                    children: (0, a.jsxs)(r.FormSection, {
                      children: [(0, a.jsx)(r.FormTitle, {
                        className: v.formTitle,
                        children: D.default.Messages.DISCOVERY_LANDING_PAGE_SOCIAL_LINKS_TITLE
                      }), (0, a.jsx)(r.FormText, {
                        className: v.description,
                        type: r.FormTextTypes.DESCRIPTION,
                        children: D.default.Messages.DISCOVERY_LANDING_PAGE_SOCIAL_LINKS_DESCRIPTION
                      }), b.socialLinks.map((e, t) => (0, a.jsxs)("div", {
                        className: v.socialLinksContainer,
                        onMouseOver: () => ed(t, !0),
                        onFocus: () => ed(t, !0),
                        onMouseOut: () => ed(t, !1),
                        onBlur: () => ed(t, !1),
                        children: [(0, a.jsx)(r.SingleSelect, {
                          className: b.isPublished ? v.socialLinksDropdownMax : v.socialLinksDropdownMin,
                          options: z(Y[t]),
                          placeholder: D.default.Messages.DISCOVERY_LANDING_PAGE_SOCIAL_LINKS_DROPDOWN_PLACEHOLDER,
                          value: Y[t],
                          onChange: e => es(e, t),
                          isDisabled: !U
                        }, "dropdown-" + t), (0, a.jsx)(r.TextInput, {
                          value: e,
                          className: b.isPublished ? v.socialLinksMax : v.socialLinksMin,
                          onChange: e => ea(e, t),
                          placeholder: D.default.Messages.DISCOVERY_LANDING_PAGE_SOCIAL_LINKS_HINT,
                          maxLength: 150,
                          disabled: !U
                        }, "link-" + t), y[t] ? (0, a.jsx)(g.default, {
                          className: b.isPublished ? v.validationButtonMax : v.validationButtonMin,
                          color: i.default.unsafe_rawColors.GREEN_230.css,
                          width: 20,
                          height: 20
                        }, "validation-passed-" + t) : (0, a.jsx)(h.default, {
                          className: b.isPublished ? v.validationButtonMax : v.validationButtonMin,
                          color: i.default.unsafe_rawColors.RED_400.css,
                          width: 20,
                          height: 20
                        }, "validation-failed-" + t), U && (0, a.jsx)(o.default, {
                          className: w[t] ? b.isPublished ? v.deleteButtonMax : v.deleteButtonMin : b.isPublished ? v.deleteButtonHiddenMax : v.deleteButtonHiddenMin,
                          onClick: () => el(t)
                        }, "delete-button-" + t)]
                      }, "social-container-" + t)), (null == Z ? void 0 : Z.social_links) != null ? (0, a.jsx)(r.Text, {
                        color: "text-danger",
                        variant: "text-sm/normal",
                        children: Z.social_links
                      }) : null, (0, a.jsx)(r.Button, {
                        size: r.Button.Sizes.SMALL,
                        color: r.Button.Colors.PRIMARY,
                        hover: r.Button.Colors.PRIMARY,
                        onClick: et,
                        disabled: !U || b.socialLinks.length >= 9,
                        children: D.default.Messages.DISCOVERY_LANDING_PAGE_SOCIAL_LINKS_BUTTON_ADD_ANOTHER
                      })]
                    })
                  }), b.isPublished && (0, a.jsxs)(a.Fragment, {
                    children: [(0, a.jsx)(r.FormDivider, {
                      className: v.divider
                    }), (0, a.jsxs)(r.FormSection, {
                      children: [(0, a.jsx)(r.FormTitle, {
                        className: v.formTitle,
                        children: D.default.Messages.DISCOVERY_LANDING_PAGE_DISABLE_TITLE
                      }), (0, a.jsx)(r.FormText, {
                        className: v.description,
                        type: r.FormTextTypes.DESCRIPTION,
                        children: D.default.Messages.DISCOVERY_LANDING_PAGE_DISABLE_DESCRIPTION
                      }), (0, a.jsx)(r.Button, {
                        size: r.Button.Sizes.SMALL,
                        color: r.Button.Colors.RED,
                        hover: r.Button.Colors.RED,
                        onClick: () => ee(!1),
                        disabled: !U,
                        children: D.default.Messages.DISCOVERY_LANDING_PAGE_DISABLE_BUTTON
                      })]
                    })]
                  }), (null == Z ? void 0 : Z.is_published) != null ? (0, a.jsx)(r.Text, {
                    color: "text-danger",
                    variant: "text-sm/normal",
                    children: Z.is_published
                  }) : null]
                }), !b.isPublished && (0, a.jsx)("div", {
                  className: v.checklist,
                  children: (0, a.jsx)(m.default, {
                    title: D.default.Messages.DISCOVERY_LANDING_PAGE_CHECKLIST_TITLE,
                    children: er,
                    buttonLabel: D.default.Messages.DISCOVERY_LANDING_PAGE_CHECKLIST_PUBLISH,
                    buttonCallback: () => ee(!0),
                    disabled: !U || !H
                  })
                })]
              })
            })
          })
        })
      })
    })
  };
var P = () => {
  let e = (0, n.useStateFromStores)([L.default], () => L.default.getGuild());
  return null == e ? null : (0, a.jsx)(U, {})
}