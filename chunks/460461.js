n.d(t, {
  J: function() {
return v;
  }
}), n(47120), n(315314), n(610138), n(216116), n(78328), n(815648), n(627494), n(757143);
var s = n(735250),
  a = n(470079),
  i = n(442837),
  r = n(692547),
  l = n(481060),
  o = n(225433),
  c = n(484614),
  d = n(852860),
  u = n(296386),
  _ = n(150192),
  I = n(688465),
  E = n(970061),
  T = n(285888),
  m = n(134432),
  N = n(813197),
  S = n(208567),
  h = n(496675),
  g = n(768581),
  C = n(63063),
  x = n(434404),
  p = n(999382),
  R = n(450474),
  f = n(190287),
  L = n(981631),
  O = n(731455),
  A = n(689938),
  M = n(455352);
let D = 'https:' + window.GLOBAL_ENV.MARKETING_ENDPOINT + '/servers/',
  v = () => {
let {
  guild: e,
  guildMetadata: t,
  submitting: n
} = (0, i.cj)([p.Z], () => ({
  submitting: p.Z.isSubmitting(),
  guild: p.Z.getGuild(),
  guildMetadata: p.Z.getMetadata()
}));
return (0, s.jsx)(d.Z, {
  submitting: n,
  onReset: () => {
    if (null != e)
      x.Z.init(e.id);
  },
  onSave: () => {
    if (null != e)
      x.Z.saveGuild(e.id, {
        discoverySplash: e.discoverySplash,
        description: e.description
      }), u.Vv({
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
      });
  }
});
  },
  j = () => {
var e;
let t = a.useRef(null),
  n = (0, i.e7)([p.Z], () => p.Z.getGuild()),
  [d, v] = a.useState(!1);
a.useEffect(() => {
  !d && null != n && (u.le(), u.aC(n.id), u.i3(n.id), v(!0));
}, [
  n,
  d
]);
let {
  canManageGuild: j
} = (0, i.cj)([h.Z], () => ({
  canManageGuild: h.Z.can(L.Plq.MANAGE_GUILD, n)
})), Z = (0, i.e7)([p.Z], () => p.Z.isGuildMetadataLoaded()), b = (0, i.e7)([p.Z], () => null != n ? p.Z.getMetadata() : null), U = (0, i.e7)([p.Z], () => null != n && (null == b ? void 0 : b.isPublished) ? p.Z.getSlug() : null), [G, P] = a.useState([!0]), [B, y] = a.useState(!0), [F, k] = a.useState([!1]), [w, H] = a.useState(['']), V = e => {
  let t = Object.entries(O.zo).filter(e => !w.includes(e[1].presentation)).map(e => ({
    label: e[1].presentation,
    value: e[0]
  }));
  return null == e || '' === e ? t : t.concat({
    label: e,
    value: e
  });
}, Y = e => {
  try {
    var t, n, s, a;
    let i = new URL(e).hostname.split('.');
    if (3 === i.length && 'bandcamp' === i[1].toLowerCase())
      return O.zo.bandcamp.presentation;
    let r = null !== (n = null === (t = i.shift()) || void 0 === t ? void 0 : t.toLowerCase()) && void 0 !== n ? n : '';
    if ('www' === r && (r = null !== (a = null === (s = i.shift()) || void 0 === s ? void 0 : s.toLowerCase()) && void 0 !== a ? a : ''), r in O.zo)
      return O.zo[r].presentation;
    return null;
  } catch {
    return null;
  }
};
a.useEffect(() => {
  if (null !== b) {
    let e = [],
      t = [];
    b.socialLinks.forEach((n, s) => {
      if ('' !== n) {
        let a = Y(n);
        null !== a ? (t[s] = a, e[s] = !0) : e[s] = !1;
      } else
        e[s] = !0;
    }), H(t), P(e), y(e.every(e => !0 === e));
  }
}, [b]);
let W = (0, i.e7)([p.Z], () => null != n ? p.Z.getErrors() : null),
  z = (0, i.e7)([_.Z], () => _.Z.getPrimaryCategories(), [], _.j);
if (null == n || null == b)
  return null;
let K = e => {
    x.Z.updateGuild({
      discoverySplash: e
    });
  },
  q = e => {
    var t;
    (null == n ? void 0 : n.id) != null && u.TA(null == n ? void 0 : n.id, null !== (t = null == e ? void 0 : e.value) && void 0 !== t ? t : O.o3);
  },
  X = e => {
    var t;
    x.Z.updateGuild({
      description: null !== (t = null == e ? void 0 : e.replaceAll('\n', '')) && void 0 !== t ? t : ''
    });
  },
  Q = e => {
    u.mA(n.id, e);
  },
  J = e => {
    u.W1(n.id, e), e ? u.Vv({
      guildId: n.id,
      primaryCategoryId: b.primaryCategoryId,
      keywords: b.keywords,
      emojiDiscoverabilityEnabled: b.emojiDiscoverabilityEnabled,
      partnerActionedTimestamp: b.partnerActionedTimestamp,
      partnerApplicationTimestamp: b.partnerApplicationTimestamp,
      isPublished: !0,
      reasonsToJoin: b.reasonsToJoin,
      socialLinks: b.socialLinks,
      about: b.about
    }) : u.Vv({
      guildId: n.id,
      primaryCategoryId: b.primaryCategoryId,
      keywords: b.keywords,
      emojiDiscoverabilityEnabled: b.emojiDiscoverabilityEnabled,
      partnerActionedTimestamp: b.partnerActionedTimestamp,
      partnerApplicationTimestamp: b.partnerApplicationTimestamp,
      isPublished: !1,
      reasonsToJoin: b.reasonsToJoin,
      socialLinks: b.socialLinks,
      about: b.about
    }), x.Z.saveGuild(n.id, {
      discoverySplash: n.discoverySplash,
      description: n.description
    });
  },
  $ = () => {
    if (b.socialLinks.length < 9) {
      let e = [...b.socialLinks];
      u.t$(n.id, e.concat('')), H(w.concat(''));
    }
  },
  ee = (e, t) => {
    let s = [...b.socialLinks],
      a = [...w],
      i = [...G];
    a[t] = e, s[t] = O.zo[e].baseUrl, i[t] = !0, P(i), H(a), y(i.every(e => !0 === e)), u.t$(n.id, s);
  },
  et = (e, t) => {
    let s = [...b.socialLinks],
      a = s[t],
      i = e;
    0 === a.length && i.length > 1 && !1 === RegExp('^https?:').test(i) && (i = 'https://' + i), s[t] = i, u.t$(n.id, s);
  },
  en = e => {
    let t = [...F];
    t.splice(e, 1), k(t);
    let s = [...G];
    s.splice(e, 1), P(s);
    let a = [...w];
    a.splice(e, 1), H(a);
    let i = [...b.socialLinks];
    i.splice(e, 1), u.t$(n.id, i);
  },
  es = e => {
    let {
      reason: t = '',
      emoji_name: n = ''
    } = e;
    return null !== t && t.length >= 10 && t.length <= 128 && null !== n;
  },
  ea = e => {
    let {
      reason: t = '',
      emoji_name: n = ''
    } = e;
    return (null === t || '' === t) && null === n;
  },
  ei = [{
    title: A.Z.Messages.DISCOVERY_LANDING_PAGE_CHECKLIST_REQUIREMENTS,
    items: [{
        description: A.Z.Messages.DISCOVERY_LANDING_PAGE_CHECKLIST_UPLOAD_COVER_IMAGE,
        completed: null !== n.discoverySplash && '' !== n.discoverySplash
      },
      {
        description: A.Z.Messages.DISCOVERY_LANDING_PAGE_CHECKLIST_SHORT_DESCRIPTION,
        completed: null !== n.description && '' !== n.description
      },
      {
        description: A.Z.Messages.DISCOVERY_LANDING_PAGE_CHECKLIST_ABOUT,
        completed: null !== b.about && b.about.length >= 300 && b.about.length <= 2400
      },
      {
        description: A.Z.Messages.DISCOVERY_LANDING_PAGE_CHECKLIST_REASONS,
        completed: null !== b.reasonsToJoin && b.reasonsToJoin.every(e => ea(e) || es(e)) && b.reasonsToJoin.filter(es).length >= 2
      }
    ]
  }],
  er = z.map(e => ({
    label: e.name,
    value: e.categoryId
  })),
  el = (e, t) => {
    let n = [...F];
    n[e] = t, k(n);
  };
return (0, s.jsx)('div', {
  className: M.settingsColumn,
  children: (0, s.jsx)('div', {
    className: M.settingsContainer,
    children: (0, s.jsx)(l.ScrollerAuto, {
      className: M.settingsScroller,
      children: (0, s.jsx)('main', {
        ref: t,
        className: M.settingsContent,
        children: (0, s.jsx)(l.FocusRingScope, {
          containerRef: t,
          children: (0, s.jsxs)('div', {
            className: M.container,
            children: [
              (0, s.jsxs)(l.FormSection, {
                className: M.mainContent,
                title: (0, s.jsxs)('div', {
                  children: [
                    A.Z.Messages.DISCOVERY_LANDING_PAGE,
                    ' ',
                    (0, s.jsx)(I.Z, {
                      className: M.betaTag
                    })
                  ]
                }),
                tag: l.FormTitleTags.H1,
                children: [
                  (0, s.jsxs)(l.FormText, {
                    className: M.tabMainDescription,
                    type: l.FormTextTypes.DESCRIPTION,
                    children: [
                      A.Z.Messages.DISCOVERY_LANDING_PAGE_DESCRIPTION.format({
                        discordURL: window.GLOBAL_ENV.MARKETING_ENDPOINT
                      }),
                      ' ',
                      A.Z.Messages.DISCOVERY_LANDING_PAGE_LEARN_MORE.format({
                        learnMoreURL: C.Z.getArticleURL(L.BhN.SERVER_WEB_PAGES)
                      })
                    ]
                  }),
                  (() => {
                    if (!b.isPublished || null == U)
                      return;
                    let e = D + U;
                    return (0, s.jsx)(s.Fragment, {
                      children: (0, s.jsxs)(l.FormSection, {
                        className: M.noDividerFormSection,
                        children: [
                          (0, s.jsx)(l.FormTitle, {
                            className: M.formTitle,
                            children: A.Z.Messages.DISCOVERY_LANDING_PAGE_PUBLISHED_URL_TITLE
                          }),
                          (0, s.jsx)(c.Z, {
                            value: e
                          }),
                          (0, s.jsx)(l.Button, {
                            className: M.viewPageButton,
                            size: l.Button.Sizes.SMALL,
                            color: l.Button.Colors.BRAND,
                            onClick: () => window.open(e),
                            children: A.Z.Messages.DISCOVERY_LANDING_PAGE_PUBLISHED_URL_VIEW_PAGE_BUTTON
                          })
                        ]
                      })
                    });
                  })(),
                  (0, s.jsx)(l.FormDivider, {
                    className: M.divider
                  }),
                  (() => {
                    if (null != n)
                      return (0, s.jsxs)(s.Fragment, {
                        children: [
                          (0, s.jsxs)(l.FormSection, {
                            children: [
                              (0, s.jsx)(l.FormTitle, {
                                className: M.formTitle,
                                children: A.Z.Messages.DISCOVERY_LANDING_PAGE_CATEGORY_TITLE
                              }),
                              (0, s.jsx)(l.FormText, {
                                type: l.FormTextTypes.DESCRIPTION,
                                className: M.description,
                                children: A.Z.Messages.DISCOVERY_LANDING_PAGE_CATEGORY_DESCRIPTION
                              })
                            ]
                          }),
                          (0, s.jsx)(T.Z, {
                            value: b.primaryCategoryId === O.o3 ? null : null == b ? void 0 : b.primaryCategoryId,
                            placeholder: A.Z.Messages.SELECT,
                            options: er,
                            onChange: q,
                            disabled: !j,
                            searchable: !0,
                            clearable: !0
                          }),
                          (0, s.jsxs)(l.FormSection, {
                            className: M.noDividerFormSection,
                            children: [
                              (0, s.jsx)(l.FormTitle, {
                                className: M.formTitle,
                                children: A.Z.Messages.GUILD_SETTINGS_DISCOVERY_SUBCATEGORY_TITLE
                              }),
                              (0, s.jsx)(R.Z, {
                                guild: n,
                                guildMetadata: b,
                                disabled: !j
                              })
                            ]
                          }),
                          (null == W ? void 0 : W.category) != null ? (0, s.jsx)(l.Text, {
                            color: 'text-danger',
                            className: M.error,
                            variant: 'text-sm/normal',
                            children: W.category
                          }) : null
                        ]
                      });
                  })(),
                  (0, s.jsx)(l.FormDivider, {
                    className: M.divider
                  }),
                  (() => {
                    if (null != n)
                      return (0, s.jsxs)(s.Fragment, {
                        children: [
                          (0, s.jsxs)(l.FormSection, {
                            className: M.twoColumnFormSection,
                            children: [
                              (0, s.jsxs)('div', {
                                children: [
                                  (0, s.jsx)(l.FormTitle, {
                                    className: M.formTitle,
                                    children: A.Z.Messages.FORM_LABEL_DISCOVERY_COVER_IMAGE
                                  }),
                                  (0, s.jsx)(l.FormText, {
                                    type: l.FormTextTypes.DESCRIPTION,
                                    className: M.formDescription,
                                    children: A.Z.Messages.DISCOVERY_LANDING_PAGE_COVER_IMAGE_DESCRIPTION
                                  }),
                                  (0, s.jsxs)(l.Button, {
                                    size: l.Button.Sizes.SMALL,
                                    color: l.Button.Colors.PRIMARY,
                                    children: [
                                      A.Z.Messages.UPLOAD_BACKGROUND,
                                      (0, s.jsx)(N.ZP, {
                                        disabled: !j,
                                        onChange: K
                                      })
                                    ]
                                  })
                                ]
                              }),
                              (0, s.jsx)(S.Z, {
                                image: n.discoverySplash,
                                makeURL: e => g.ZP.getGuildDiscoverySplashURL({
                                  id: n.id,
                                  splash: e,
                                  size: 512 * (0, m.x_)()
                                }),
                                disabled: !j,
                                onChange: K,
                                hint: A.Z.Messages.CHANGE_SPLASH,
                                imageClassName: M.imageUploaderInnerSquare,
                                hideSize: !0
                              })
                            ]
                          }),
                          (null == W ? void 0 : W.discovery_splash) != null ? (0, s.jsx)(l.Text, {
                            color: 'text-danger',
                            variant: 'text-sm/normal',
                            children: W.discovery_splash
                          }) : null
                        ]
                      });
                  })(),
                  (0, s.jsx)(l.FormDivider, {
                    className: M.divider
                  }),
                  (0, s.jsxs)(l.FormSection, {
                    children: [
                      (0, s.jsx)(l.FormTitle, {
                        className: M.formTitle,
                        children: A.Z.Messages.FORM_LABEL_SERVER_DESCRIPTION
                      }),
                      (0, s.jsx)(l.FormText, {
                        className: M.description,
                        type: l.FormTextTypes.DESCRIPTION,
                        children: A.Z.Messages.DISCOVERY_LANDING_PAGE_SERVER_DESCRIPTION
                      }),
                      (0, s.jsx)(l.TextArea, {
                        value: null !== n.description ? n.description : '',
                        placeholder: A.Z.Messages.DISCOVERY_LANDING_PAGE_SERVER_DESCRIPTION_HINT,
                        onChange: X,
                        maxLength: 120,
                        disabled: !j
                      })
                    ]
                  }),
                  (0, s.jsx)(l.FormDivider, {
                    className: M.divider
                  }),
                  (() => {
                    if (null == b)
                      return null;
                    let e = 0 === b.reasonsToJoin.length ? [, , , , ].fill({
                      reason: '',
                      emoji_name: null
                    }) : b.reasonsToJoin;
                    return (0, s.jsxs)(l.FormSection, {
                      children: [
                        (0, s.jsx)(l.FormTitle, {
                          className: M.formTitle,
                          children: A.Z.Messages.DISCOVERY_LANDING_PAGE_REASONS_TO_JOIN_TITLE
                        }),
                        (0, s.jsx)(l.FormText, {
                          type: l.FormTextTypes.DESCRIPTION,
                          className: M.description,
                          children: A.Z.Messages.DISCOVERY_LANDING_PAGE_REASONS_TO_JOIN_DESCRIPTION
                        }),
                        (0, s.jsx)('div', {
                          className: M.reasonToJoin,
                          children: (0, s.jsx)(f.Z, {
                            reasonMinLength: 10,
                            reasonMaxLength: 128,
                            guildId: n.id,
                            reasons: e
                          })
                        }),
                        (null == W ? void 0 : W.reasons_to_join) != null ? (0, s.jsx)(l.Text, {
                          color: 'text-danger',
                          variant: 'text-sm/normal',
                          children: W.reasons_to_join
                        }) : null
                      ]
                    });
                  })(),
                  (0, s.jsx)(l.FormDivider, {
                    className: M.divider
                  }),
                  (0, s.jsxs)(s.Fragment, {
                    children: [
                      (0, s.jsxs)(l.FormSection, {
                        children: [
                          (0, s.jsx)(l.FormTitle, {
                            className: M.formTitle,
                            children: A.Z.Messages.DISCOVERY_LANDING_PAGE_ABOUT_TITLE
                          }),
                          (0, s.jsx)(l.FormText, {
                            className: M.description,
                            type: l.FormTextTypes.DESCRIPTION,
                            children: A.Z.Messages.DISCOVERY_LANDING_PAGE_ABOUT_DESCRIPTION
                          }),
                          (0, s.jsx)(l.TextArea, {
                            showCharacterCount: !0,
                            className: M.textArea,
                            value: b.about,
                            placeholder: A.Z.Messages.DISCOVERY_LANDING_PAGE_ABOUT_HINT,
                            onChange: Q,
                            minLength: 300,
                            maxLength: 2400,
                            disabled: !j,
                            defaultDirty: (null === (e = b.about) || void 0 === e ? void 0 : e.length) > 0
                          }, 'text-area-'.concat(Z))
                        ]
                      }),
                      (null == W ? void 0 : W.about) != null ? (0, s.jsx)(l.Text, {
                        color: 'text-danger',
                        variant: 'text-sm/normal',
                        children: W.about
                      }) : null
                    ]
                  }),
                  (0, s.jsx)(l.FormDivider, {
                    className: M.divider
                  }),
                  (0, s.jsx)(s.Fragment, {
                    children: (0, s.jsxs)(l.FormSection, {
                      children: [
                        (0, s.jsx)(l.FormTitle, {
                          className: M.formTitle,
                          children: A.Z.Messages.DISCOVERY_LANDING_PAGE_SOCIAL_LINKS_TITLE
                        }),
                        (0, s.jsx)(l.FormText, {
                          className: M.description,
                          type: l.FormTextTypes.DESCRIPTION,
                          children: A.Z.Messages.DISCOVERY_LANDING_PAGE_SOCIAL_LINKS_DESCRIPTION
                        }),
                        b.socialLinks.map((e, t) => (0, s.jsxs)('div', {
                          className: M.socialLinksContainer,
                          onMouseOver: () => el(t, !0),
                          onFocus: () => el(t, !0),
                          onMouseOut: () => el(t, !1),
                          onBlur: () => el(t, !1),
                          children: [
                            (0, s.jsx)(l.SingleSelect, {
                              className: b.isPublished ? M.socialLinksDropdownMax : M.socialLinksDropdownMin,
                              options: V(w[t]),
                              placeholder: A.Z.Messages.DISCOVERY_LANDING_PAGE_SOCIAL_LINKS_DROPDOWN_PLACEHOLDER,
                              value: w[t],
                              onChange: e => ee(e, t),
                              isDisabled: !j
                            }, 'dropdown-' + t),
                            (0, s.jsx)(l.TextInput, {
                              value: e,
                              className: b.isPublished ? M.socialLinksMax : M.socialLinksMin,
                              onChange: e => et(e, t),
                              placeholder: A.Z.Messages.DISCOVERY_LANDING_PAGE_SOCIAL_LINKS_HINT,
                              maxLength: 150,
                              disabled: !j
                            }, 'link-' + t),
                            G[t] ? (0, s.jsx)(l.CircleCheckIcon, {
                              size: 'custom',
                              className: b.isPublished ? M.validationButtonMax : M.validationButtonMin,
                              color: r.Z.unsafe_rawColors.GREEN_230.css,
                              width: 20,
                              height: 20
                            }, 'validation-passed-' + t) : (0, s.jsx)(l.CircleXIcon, {
                              size: 'custom',
                              className: b.isPublished ? M.validationButtonMax : M.validationButtonMin,
                              color: r.Z.unsafe_rawColors.RED_400.css,
                              width: 20,
                              height: 20
                            }, 'validation-failed-' + t),
                            j && (0, s.jsx)(o.Z, {
                              className: F[t] ? b.isPublished ? M.deleteButtonMax : M.deleteButtonMin : b.isPublished ? M.deleteButtonHiddenMax : M.deleteButtonHiddenMin,
                              onClick: () => en(t)
                            }, 'delete-button-' + t)
                          ]
                        }, 'social-container-' + t)),
                        (null == W ? void 0 : W.social_links) != null ? (0, s.jsx)(l.Text, {
                          color: 'text-danger',
                          variant: 'text-sm/normal',
                          children: W.social_links
                        }) : null,
                        (0, s.jsx)(l.Button, {
                          size: l.Button.Sizes.SMALL,
                          color: l.Button.Colors.PRIMARY,
                          onClick: $,
                          disabled: !j || b.socialLinks.length >= 9,
                          children: A.Z.Messages.DISCOVERY_LANDING_PAGE_SOCIAL_LINKS_BUTTON_ADD_ANOTHER
                        })
                      ]
                    })
                  }),
                  b.isPublished && (0, s.jsxs)(s.Fragment, {
                    children: [
                      (0, s.jsx)(l.FormDivider, {
                        className: M.divider
                      }),
                      (0, s.jsxs)(l.FormSection, {
                        children: [
                          (0, s.jsx)(l.FormTitle, {
                            className: M.formTitle,
                            children: A.Z.Messages.DISCOVERY_LANDING_PAGE_DISABLE_TITLE
                          }),
                          (0, s.jsx)(l.FormText, {
                            className: M.description,
                            type: l.FormTextTypes.DESCRIPTION,
                            children: A.Z.Messages.DISCOVERY_LANDING_PAGE_DISABLE_DESCRIPTION
                          }),
                          (0, s.jsx)(l.Button, {
                            size: l.Button.Sizes.SMALL,
                            color: l.Button.Colors.RED,
                            onClick: () => J(!1),
                            disabled: !j,
                            children: A.Z.Messages.DISCOVERY_LANDING_PAGE_DISABLE_BUTTON
                          })
                        ]
                      })
                    ]
                  }),
                  (null == W ? void 0 : W.is_published) != null ? (0, s.jsx)(l.Text, {
                    color: 'text-danger',
                    variant: 'text-sm/normal',
                    children: W.is_published
                  }) : null
                ]
              }),
              !b.isPublished && (0, s.jsx)('div', {
                className: M.checklist,
                children: (0, s.jsx)(E.Z, {
                  title: A.Z.Messages.DISCOVERY_LANDING_PAGE_CHECKLIST_TITLE,
                  children: ei,
                  buttonLabel: A.Z.Messages.DISCOVERY_LANDING_PAGE_CHECKLIST_PUBLISH,
                  buttonCallback: () => J(!0),
                  disabled: !j || !B
                })
              })
            ]
          })
        })
      })
    })
  })
});
  };
t.Z = () => null == (0, i.e7)([p.Z], () => p.Z.getGuild()) ? null : (0, s.jsx)(j, {});