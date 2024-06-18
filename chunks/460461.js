"use strict";
t.d(s, {
  J: function() {
    return j
  }
}), t(47120), t(315314), t(610138), t(216116), t(78328), t(815648), t(627494), t(757143);
var n = t(735250),
  i = t(470079),
  l = t(442837),
  a = t(692547),
  r = t(481060),
  o = t(225433),
  c = t(484614),
  d = t(852860),
  u = t(296386),
  E = t(150192),
  _ = t(688465),
  I = t(134432),
  T = t(813197),
  N = t(208567),
  m = t(496675),
  S = t(315507),
  h = t(987134),
  g = t(441674),
  x = t(696202),
  C = t(768581),
  R = t(63063),
  L = t(434404),
  O = t(999382),
  A = t(450474),
  p = t(190287),
  M = t(981631),
  f = t(731455),
  v = t(689938),
  D = t(845978);
let Z = "https:" + window.GLOBAL_ENV.MARKETING_ENDPOINT + "/servers/",
  j = () => {
    let {
      guild: e,
      guildMetadata: s,
      submitting: t
    } = (0, l.cj)([O.Z], () => ({
      submitting: O.Z.isSubmitting(),
      guild: O.Z.getGuild(),
      guildMetadata: O.Z.getMetadata()
    }));
    return (0, n.jsx)(d.Z, {
      submitting: t,
      onReset: () => {
        if (null != e) L.Z.init(e.id)
      },
      onSave: () => {
        if (null != e) L.Z.saveGuild(e.id, {
          discoverySplash: e.discoverySplash,
          description: e.description
        }), u.Vv({
          guildId: e.id,
          primaryCategoryId: s.primaryCategoryId,
          keywords: s.keywords,
          emojiDiscoverabilityEnabled: s.emojiDiscoverabilityEnabled,
          partnerActionedTimestamp: s.partnerActionedTimestamp,
          partnerApplicationTimestamp: s.partnerApplicationTimestamp,
          isPublished: s.isPublished,
          reasonsToJoin: s.reasonsToJoin,
          socialLinks: s.socialLinks.filter(e => e),
          about: s.about
        })
      }
    })
  },
  U = () => {
    var e;
    let s = i.useRef(null),
      t = (0, l.e7)([O.Z], () => O.Z.getGuild()),
      [d, j] = i.useState(!1);
    i.useEffect(() => {
      !d && null != t && (u.le(), u.aC(t.id), u.i3(t.id), j(!0))
    }, [t, d]);
    let {
      canManageGuild: U
    } = (0, l.cj)([m.Z], () => ({
      canManageGuild: m.Z.can(M.Plq.MANAGE_GUILD, t)
    })), G = (0, l.e7)([O.Z], () => O.Z.isGuildMetadataLoaded()), P = (0, l.e7)([O.Z], () => null != t ? O.Z.getMetadata() : null), b = (0, l.e7)([O.Z], () => null != t && (null == P ? void 0 : P.isPublished) ? O.Z.getSlug() : null), [B, y] = i.useState([!0]), [F, w] = i.useState(!0), [k, H] = i.useState([!1]), [V, Y] = i.useState([""]), W = e => {
      let s = Object.entries(f.zo).filter(e => !V.includes(e[1].presentation)).map(e => ({
        label: e[1].presentation,
        value: e[0]
      }));
      return null == e || "" === e ? s : s.concat({
        label: e,
        value: e
      })
    }, K = e => {
      try {
        var s, t, n, i;
        let l = new URL(e).hostname.split(".");
        if (3 === l.length && "bandcamp" === l[1].toLowerCase()) return f.zo.bandcamp.presentation;
        let a = null !== (t = null === (s = l.shift()) || void 0 === s ? void 0 : s.toLowerCase()) && void 0 !== t ? t : "";
        if ("www" === a && (a = null !== (i = null === (n = l.shift()) || void 0 === n ? void 0 : n.toLowerCase()) && void 0 !== i ? i : ""), a in f.zo) return f.zo[a].presentation;
        return null
      } catch {
        return null
      }
    };
    i.useEffect(() => {
      if (null !== P) {
        let e = [],
          s = [];
        P.socialLinks.forEach((t, n) => {
          if ("" !== t) {
            let i = K(t);
            null !== i ? (s[n] = i, e[n] = !0) : e[n] = !1
          } else e[n] = !0
        }), Y(s), y(e), w(e.every(e => !0 === e))
      }
    }, [P]);
    let z = (0, l.e7)([O.Z], () => null != t ? O.Z.getErrors() : null),
      q = (0, l.e7)([E.Z], () => E.Z.getPrimaryCategories(), [], E.j);
    if (null == t || null == P) return null;
    let X = e => {
        L.Z.updateGuild({
          discoverySplash: e
        })
      },
      Q = e => {
        var s;
        (null == t ? void 0 : t.id) != null && u.TA(null == t ? void 0 : t.id, null !== (s = null == e ? void 0 : e.value) && void 0 !== s ? s : f.o3)
      },
      J = e => {
        var s;
        L.Z.updateGuild({
          description: null !== (s = null == e ? void 0 : e.replaceAll("\n", "")) && void 0 !== s ? s : ""
        })
      },
      $ = e => {
        u.mA(t.id, e)
      },
      ee = e => {
        u.W1(t.id, e), e ? u.Vv({
          guildId: t.id,
          primaryCategoryId: P.primaryCategoryId,
          keywords: P.keywords,
          emojiDiscoverabilityEnabled: P.emojiDiscoverabilityEnabled,
          partnerActionedTimestamp: P.partnerActionedTimestamp,
          partnerApplicationTimestamp: P.partnerApplicationTimestamp,
          isPublished: !0,
          reasonsToJoin: P.reasonsToJoin,
          socialLinks: P.socialLinks,
          about: P.about
        }) : u.Vv({
          guildId: t.id,
          primaryCategoryId: P.primaryCategoryId,
          keywords: P.keywords,
          emojiDiscoverabilityEnabled: P.emojiDiscoverabilityEnabled,
          partnerActionedTimestamp: P.partnerActionedTimestamp,
          partnerApplicationTimestamp: P.partnerApplicationTimestamp,
          isPublished: !1,
          reasonsToJoin: P.reasonsToJoin,
          socialLinks: P.socialLinks,
          about: P.about
        }), L.Z.saveGuild(t.id, {
          discoverySplash: t.discoverySplash,
          description: t.description
        })
      },
      es = () => {
        if (P.socialLinks.length < 9) {
          let e = [...P.socialLinks];
          u.t$(t.id, e.concat("")), Y(V.concat(""))
        }
      },
      et = (e, s) => {
        let n = [...P.socialLinks],
          i = [...V],
          l = [...B];
        i[s] = e, n[s] = f.zo[e].baseUrl, l[s] = !0, y(l), Y(i), w(l.every(e => !0 === e)), u.t$(t.id, n)
      },
      en = (e, s) => {
        let n = [...P.socialLinks],
          i = n[s],
          l = e;
        0 === i.length && l.length > 1 && !1 === RegExp("^https?:").test(l) && (l = "https://" + l), n[s] = l, u.t$(t.id, n)
      },
      ei = e => {
        let s = [...k];
        s.splice(e, 1), H(s);
        let n = [...B];
        n.splice(e, 1), y(n);
        let i = [...V];
        i.splice(e, 1), Y(i);
        let l = [...P.socialLinks];
        l.splice(e, 1), u.t$(t.id, l)
      },
      el = e => {
        let {
          reason: s = "",
          emoji_name: t = ""
        } = e;
        return null !== s && s.length >= 10 && s.length <= 128 && null !== t
      },
      ea = e => {
        let {
          reason: s = "",
          emoji_name: t = ""
        } = e;
        return (null === s || "" === s) && null === t
      },
      er = [{
        title: v.Z.Messages.DISCOVERY_LANDING_PAGE_CHECKLIST_REQUIREMENTS,
        items: [{
          description: v.Z.Messages.DISCOVERY_LANDING_PAGE_CHECKLIST_UPLOAD_COVER_IMAGE,
          completed: null !== t.discoverySplash && "" !== t.discoverySplash
        }, {
          description: v.Z.Messages.DISCOVERY_LANDING_PAGE_CHECKLIST_SHORT_DESCRIPTION,
          completed: null !== t.description && "" !== t.description
        }, {
          description: v.Z.Messages.DISCOVERY_LANDING_PAGE_CHECKLIST_ABOUT,
          completed: null !== P.about && P.about.length >= 300 && P.about.length <= 2400
        }, {
          description: v.Z.Messages.DISCOVERY_LANDING_PAGE_CHECKLIST_REASONS,
          completed: null !== P.reasonsToJoin && P.reasonsToJoin.every(e => ea(e) || el(e)) && P.reasonsToJoin.filter(el).length >= 2
        }]
      }],
      eo = q.map(e => ({
        label: e.name,
        value: e.categoryId
      })),
      ec = (e, s) => {
        let t = [...k];
        t[e] = s, H(t)
      };
    return (0, n.jsx)("div", {
      className: D.settingsColumn,
      children: (0, n.jsx)("div", {
        className: D.settingsContainer,
        children: (0, n.jsx)(r.ScrollerAuto, {
          className: D.settingsScroller,
          children: (0, n.jsx)("main", {
            ref: s,
            className: D.settingsContent,
            children: (0, n.jsx)(r.FocusRingScope, {
              containerRef: s,
              children: (0, n.jsxs)("div", {
                className: D.container,
                children: [(0, n.jsxs)(r.FormSection, {
                  className: D.mainContent,
                  title: (0, n.jsxs)("div", {
                    children: [v.Z.Messages.DISCOVERY_LANDING_PAGE, " ", (0, n.jsx)(_.Z, {
                      className: D.betaTag
                    })]
                  }),
                  tag: r.FormTitleTags.H1,
                  children: [(0, n.jsxs)(r.FormText, {
                    className: D.tabMainDescription,
                    type: r.FormTextTypes.DESCRIPTION,
                    children: [v.Z.Messages.DISCOVERY_LANDING_PAGE_DESCRIPTION.format({
                      discordURL: window.GLOBAL_ENV.MARKETING_ENDPOINT
                    }), " ", v.Z.Messages.DISCOVERY_LANDING_PAGE_LEARN_MORE.format({
                      learnMoreURL: R.Z.getArticleURL(M.BhN.SERVER_WEB_PAGES)
                    })]
                  }), (() => {
                    if (!P.isPublished || null == b) return;
                    let e = Z + b;
                    return (0, n.jsx)(n.Fragment, {
                      children: (0, n.jsxs)(r.FormSection, {
                        className: D.noDividerFormSection,
                        children: [(0, n.jsx)(r.FormTitle, {
                          className: D.formTitle,
                          children: v.Z.Messages.DISCOVERY_LANDING_PAGE_PUBLISHED_URL_TITLE
                        }), (0, n.jsx)(c.Z, {
                          value: e
                        }), (0, n.jsx)(r.Button, {
                          className: D.viewPageButton,
                          size: r.Button.Sizes.SMALL,
                          color: r.Button.Colors.BRAND,
                          onClick: () => window.open(e),
                          children: v.Z.Messages.DISCOVERY_LANDING_PAGE_PUBLISHED_URL_VIEW_PAGE_BUTTON
                        })]
                      })
                    })
                  })(), (0, n.jsx)(r.FormDivider, {
                    className: D.divider
                  }), (() => {
                    if (null != t) return (0, n.jsxs)(n.Fragment, {
                      children: [(0, n.jsxs)(r.FormSection, {
                        children: [(0, n.jsx)(r.FormTitle, {
                          className: D.formTitle,
                          children: v.Z.Messages.DISCOVERY_LANDING_PAGE_CATEGORY_TITLE
                        }), (0, n.jsx)(r.FormText, {
                          type: r.FormTextTypes.DESCRIPTION,
                          className: D.description,
                          children: v.Z.Messages.DISCOVERY_LANDING_PAGE_CATEGORY_DESCRIPTION
                        })]
                      }), (0, n.jsx)(h.Z, {
                        value: P.primaryCategoryId === f.o3 ? null : null == P ? void 0 : P.primaryCategoryId,
                        placeholder: v.Z.Messages.SELECT,
                        options: eo,
                        onChange: Q,
                        disabled: !U,
                        searchable: !0,
                        clearable: !0
                      }), (0, n.jsxs)(r.FormSection, {
                        className: D.noDividerFormSection,
                        children: [(0, n.jsx)(r.FormTitle, {
                          className: D.formTitle,
                          children: v.Z.Messages.GUILD_SETTINGS_DISCOVERY_SUBCATEGORY_TITLE
                        }), (0, n.jsx)(A.Z, {
                          guild: t,
                          guildMetadata: P,
                          disabled: !U
                        })]
                      }), (null == z ? void 0 : z.category) != null ? (0, n.jsx)(r.Text, {
                        color: "text-danger",
                        className: D.error,
                        variant: "text-sm/normal",
                        children: z.category
                      }) : null]
                    })
                  })(), (0, n.jsx)(r.FormDivider, {
                    className: D.divider
                  }), (() => {
                    if (null != t) return (0, n.jsxs)(n.Fragment, {
                      children: [(0, n.jsxs)(r.FormSection, {
                        className: D.twoColumnFormSection,
                        children: [(0, n.jsxs)("div", {
                          children: [(0, n.jsx)(r.FormTitle, {
                            className: D.formTitle,
                            children: v.Z.Messages.FORM_LABEL_DISCOVERY_COVER_IMAGE
                          }), (0, n.jsx)(r.FormText, {
                            type: r.FormTextTypes.DESCRIPTION,
                            className: D.formDescription,
                            children: v.Z.Messages.DISCOVERY_LANDING_PAGE_COVER_IMAGE_DESCRIPTION
                          }), (0, n.jsxs)(r.Button, {
                            size: r.Button.Sizes.SMALL,
                            color: r.Button.Colors.PRIMARY,
                            children: [v.Z.Messages.UPLOAD_BACKGROUND, (0, n.jsx)(T.ZP, {
                              disabled: !U,
                              onChange: X
                            })]
                          })]
                        }), (0, n.jsx)(N.Z, {
                          image: t.discoverySplash,
                          makeURL: e => C.ZP.getGuildDiscoverySplashURL({
                            id: t.id,
                            splash: e,
                            size: 512 * (0, I.x_)()
                          }),
                          disabled: !U,
                          onChange: X,
                          hint: v.Z.Messages.CHANGE_SPLASH,
                          imageClassName: D.imageUploaderInnerSquare,
                          hideSize: !0
                        })]
                      }), (null == z ? void 0 : z.discovery_splash) != null ? (0, n.jsx)(r.Text, {
                        color: "text-danger",
                        variant: "text-sm/normal",
                        children: z.discovery_splash
                      }) : null]
                    })
                  })(), (0, n.jsx)(r.FormDivider, {
                    className: D.divider
                  }), (0, n.jsxs)(r.FormSection, {
                    children: [(0, n.jsx)(r.FormTitle, {
                      className: D.formTitle,
                      children: v.Z.Messages.FORM_LABEL_SERVER_DESCRIPTION
                    }), (0, n.jsx)(r.FormText, {
                      className: D.description,
                      type: r.FormTextTypes.DESCRIPTION,
                      children: v.Z.Messages.DISCOVERY_LANDING_PAGE_SERVER_DESCRIPTION
                    }), (0, n.jsx)(r.TextArea, {
                      value: null !== t.description ? t.description : "",
                      placeholder: v.Z.Messages.DISCOVERY_LANDING_PAGE_SERVER_DESCRIPTION_HINT,
                      onChange: J,
                      maxLength: 120,
                      disabled: !U
                    })]
                  }), (0, n.jsx)(r.FormDivider, {
                    className: D.divider
                  }), (() => {
                    if (null == P) return null;
                    let e = 0 === P.reasonsToJoin.length ? [, , , , ].fill({
                      reason: "",
                      emoji_name: null
                    }) : P.reasonsToJoin;
                    return (0, n.jsxs)(r.FormSection, {
                      children: [(0, n.jsx)(r.FormTitle, {
                        className: D.formTitle,
                        children: v.Z.Messages.DISCOVERY_LANDING_PAGE_REASONS_TO_JOIN_TITLE
                      }), (0, n.jsx)(r.FormText, {
                        type: r.FormTextTypes.DESCRIPTION,
                        className: D.description,
                        children: v.Z.Messages.DISCOVERY_LANDING_PAGE_REASONS_TO_JOIN_DESCRIPTION
                      }), (0, n.jsx)("div", {
                        className: D.reasonToJoin,
                        children: (0, n.jsx)(p.Z, {
                          reasonMinLength: 10,
                          reasonMaxLength: 128,
                          guildId: t.id,
                          reasons: e
                        })
                      }), (null == z ? void 0 : z.reasons_to_join) != null ? (0, n.jsx)(r.Text, {
                        color: "text-danger",
                        variant: "text-sm/normal",
                        children: z.reasons_to_join
                      }) : null]
                    })
                  })(), (0, n.jsx)(r.FormDivider, {
                    className: D.divider
                  }), (0, n.jsxs)(n.Fragment, {
                    children: [(0, n.jsxs)(r.FormSection, {
                      children: [(0, n.jsx)(r.FormTitle, {
                        className: D.formTitle,
                        children: v.Z.Messages.DISCOVERY_LANDING_PAGE_ABOUT_TITLE
                      }), (0, n.jsx)(r.FormText, {
                        className: D.description,
                        type: r.FormTextTypes.DESCRIPTION,
                        children: v.Z.Messages.DISCOVERY_LANDING_PAGE_ABOUT_DESCRIPTION
                      }), (0, n.jsx)(r.TextArea, {
                        showCharacterCount: !0,
                        className: D.textArea,
                        value: P.about,
                        placeholder: v.Z.Messages.DISCOVERY_LANDING_PAGE_ABOUT_HINT,
                        onChange: $,
                        minLength: 300,
                        maxLength: 2400,
                        disabled: !U,
                        defaultDirty: (null === (e = P.about) || void 0 === e ? void 0 : e.length) > 0
                      }, "text-area-".concat(G))]
                    }), (null == z ? void 0 : z.about) != null ? (0, n.jsx)(r.Text, {
                      color: "text-danger",
                      variant: "text-sm/normal",
                      children: z.about
                    }) : null]
                  }), (0, n.jsx)(r.FormDivider, {
                    className: D.divider
                  }), (0, n.jsx)(n.Fragment, {
                    children: (0, n.jsxs)(r.FormSection, {
                      children: [(0, n.jsx)(r.FormTitle, {
                        className: D.formTitle,
                        children: v.Z.Messages.DISCOVERY_LANDING_PAGE_SOCIAL_LINKS_TITLE
                      }), (0, n.jsx)(r.FormText, {
                        className: D.description,
                        type: r.FormTextTypes.DESCRIPTION,
                        children: v.Z.Messages.DISCOVERY_LANDING_PAGE_SOCIAL_LINKS_DESCRIPTION
                      }), P.socialLinks.map((e, s) => (0, n.jsxs)("div", {
                        className: D.socialLinksContainer,
                        onMouseOver: () => ec(s, !0),
                        onFocus: () => ec(s, !0),
                        onMouseOut: () => ec(s, !1),
                        onBlur: () => ec(s, !1),
                        children: [(0, n.jsx)(r.SingleSelect, {
                          className: P.isPublished ? D.socialLinksDropdownMax : D.socialLinksDropdownMin,
                          options: W(V[s]),
                          placeholder: v.Z.Messages.DISCOVERY_LANDING_PAGE_SOCIAL_LINKS_DROPDOWN_PLACEHOLDER,
                          value: V[s],
                          onChange: e => et(e, s),
                          isDisabled: !U
                        }, "dropdown-" + s), (0, n.jsx)(r.TextInput, {
                          value: e,
                          className: P.isPublished ? D.socialLinksMax : D.socialLinksMin,
                          onChange: e => en(e, s),
                          placeholder: v.Z.Messages.DISCOVERY_LANDING_PAGE_SOCIAL_LINKS_HINT,
                          maxLength: 150,
                          disabled: !U
                        }, "link-" + s), B[s] ? (0, n.jsx)(g.Z, {
                          className: P.isPublished ? D.validationButtonMax : D.validationButtonMin,
                          color: a.Z.unsafe_rawColors.GREEN_230.css,
                          width: 20,
                          height: 20
                        }, "validation-passed-" + s) : (0, n.jsx)(x.Z, {
                          className: P.isPublished ? D.validationButtonMax : D.validationButtonMin,
                          color: a.Z.unsafe_rawColors.RED_400.css,
                          width: 20,
                          height: 20
                        }, "validation-failed-" + s), U && (0, n.jsx)(o.Z, {
                          className: k[s] ? P.isPublished ? D.deleteButtonMax : D.deleteButtonMin : P.isPublished ? D.deleteButtonHiddenMax : D.deleteButtonHiddenMin,
                          onClick: () => ei(s)
                        }, "delete-button-" + s)]
                      }, "social-container-" + s)), (null == z ? void 0 : z.social_links) != null ? (0, n.jsx)(r.Text, {
                        color: "text-danger",
                        variant: "text-sm/normal",
                        children: z.social_links
                      }) : null, (0, n.jsx)(r.Button, {
                        size: r.Button.Sizes.SMALL,
                        color: r.Button.Colors.PRIMARY,
                        onClick: es,
                        disabled: !U || P.socialLinks.length >= 9,
                        children: v.Z.Messages.DISCOVERY_LANDING_PAGE_SOCIAL_LINKS_BUTTON_ADD_ANOTHER
                      })]
                    })
                  }), P.isPublished && (0, n.jsxs)(n.Fragment, {
                    children: [(0, n.jsx)(r.FormDivider, {
                      className: D.divider
                    }), (0, n.jsxs)(r.FormSection, {
                      children: [(0, n.jsx)(r.FormTitle, {
                        className: D.formTitle,
                        children: v.Z.Messages.DISCOVERY_LANDING_PAGE_DISABLE_TITLE
                      }), (0, n.jsx)(r.FormText, {
                        className: D.description,
                        type: r.FormTextTypes.DESCRIPTION,
                        children: v.Z.Messages.DISCOVERY_LANDING_PAGE_DISABLE_DESCRIPTION
                      }), (0, n.jsx)(r.Button, {
                        size: r.Button.Sizes.SMALL,
                        color: r.Button.Colors.RED,
                        onClick: () => ee(!1),
                        disabled: !U,
                        children: v.Z.Messages.DISCOVERY_LANDING_PAGE_DISABLE_BUTTON
                      })]
                    })]
                  }), (null == z ? void 0 : z.is_published) != null ? (0, n.jsx)(r.Text, {
                    color: "text-danger",
                    variant: "text-sm/normal",
                    children: z.is_published
                  }) : null]
                }), !P.isPublished && (0, n.jsx)("div", {
                  className: D.checklist,
                  children: (0, n.jsx)(S.Z, {
                    title: v.Z.Messages.DISCOVERY_LANDING_PAGE_CHECKLIST_TITLE,
                    children: er,
                    buttonLabel: v.Z.Messages.DISCOVERY_LANDING_PAGE_CHECKLIST_PUBLISH,
                    buttonCallback: () => ee(!0),
                    disabled: !U || !F
                  })
                })]
              })
            })
          })
        })
      })
    })
  };
s.Z = () => null == (0, l.e7)([O.Z], () => O.Z.getGuild()) ? null : (0, n.jsx)(U, {})