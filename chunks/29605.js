"use strict";
s.r(t), s.d(t, {
  EmojiTable: function() {
    return W
  },
  EmojiTableTitle: function() {
    return Y
  }
}), s("47120");
var a = s("735250"),
  l = s("470079"),
  n = s("803997"),
  i = s.n(n),
  r = s("512722"),
  o = s.n(r),
  d = s("392711"),
  u = s.n(d),
  c = s("153832"),
  E = s("442837"),
  _ = s("481060"),
  I = s("668781"),
  T = s("80932"),
  S = s("225433"),
  f = s("327802"),
  m = s("110924"),
  N = s("200876"),
  g = s("730089"),
  h = s("372444"),
  C = s("889564"),
  R = s("372129"),
  x = s("889161"),
  L = s("210887"),
  O = s("186095"),
  A = s("185403"),
  p = s("626135"),
  M = s("768581"),
  D = s("176354"),
  v = s("267642"),
  j = s("434404"),
  G = s("471613"),
  U = s("999382"),
  P = s("981631"),
  b = s("185923"),
  B = s("689938"),
  y = s("398706"),
  F = s("850169");
let H = u().throttle(T.fetchEmoji, 1e3),
  k = e => {
    let {
      currentTarget: t,
      which: s
    } = e;
    13 === s && t.blur()
  },
  w = e => {
    let {
      guildId: t,
      emoji: s,
      onEdit: n,
      editingDisabled: r = !1
    } = e, [o, d] = l.useState(s.name), u = M.default.getEmojiURL({
      id: s.id,
      animated: s.animated,
      size: 32
    });
    return (0, a.jsxs)("div", {
      className: i()(y.emojiRow, F.card),
      children: [(0, a.jsx)("div", {
        className: y.emojiColumn,
        children: (0, a.jsx)(_.Tooltip, {
          text: s.available ? null : B.default.Messages.EMOJI_DISABLED_PREMIUM_TIER_LOST,
          children: e => (0, a.jsx)("div", {
            ...e,
            className: i()(y.emojiImage, {
              [y.emojiDisabled]: !s.available
            }),
            style: {
              backgroundImage: "url(".concat(u, ")")
            }
          })
        })
      }), (0, a.jsxs)("div", {
        className: y.column,
        children: [(0, a.jsx)(_.TextInput, {
          className: i()(y.emojiAliasInput, {
            [y.emojiAliasInputDisabled]: r
          }),
          inputClassName: y.emojiInput,
          placeholder: B.default.Messages.GUILD_SETTINGS_EMOJI_ALIAS_PLACEHOLDER,
          onKeyPress: k,
          onChange: d,
          onBlur: () => {
            o !== s.name && (0, T.updateEmoji)({
              guildId: t,
              emojiId: s.id,
              name: D.default.sanitizeEmojiName(o)
            })
          },
          size: _.TextInput.Sizes.MINI,
          value: o,
          maxLength: b.EMOJI_MAX_LENGTH,
          disabled: r
        }), (0, a.jsx)("div", {
          className: y.emojiAliasPlaceholder,
          children: (0, a.jsx)("div", {
            className: y.emojiAliasPlaceholderContent,
            children: o.length > 0 ? o : B.default.Messages.GUILD_SETTINGS_EMOJI_ALIAS_PLACEHOLDER
          })
        })]
      }), (0, a.jsxs)("div", {
        className: y.column,
        children: [(0, a.jsx)(_.Avatar, {
          src: s.user.getAvatarURL(t, 24),
          "aria-label": s.user.username,
          size: _.AvatarSizes.SIZE_24,
          className: y.avatar
        }), (0, a.jsx)(_.FormText, {
          className: i()(y.emojiRowText),
          children: s.user.username
        })]
      }), null != n && !r && (0, a.jsx)(_.Clickable, {
        "aria-label": B.default.Messages.EDIT,
        className: y.editEmojiRolesButton,
        onClick: () => n(s, t),
        children: (0, a.jsx)(A.default, {
          width: 24,
          height: 24,
          className: y.editEmojiRolesIcon
        })
      }), !r && (0, a.jsx)(S.default, {
        className: y.emojiRemove,
        onClick: () => {
          (0, T.deleteEmoji)(t, s.id).catch(e => {
            let {
              status: t
            } = e;
            429 === t && I.default.show({
              title: B.default.Messages.GENERIC_ERROR_TITLE,
              body: B.default.Messages.RATE_LIMITED
            })
          })
        }
      })]
    })
  },
  V = e => {
    let {
      isLoading: t,
      staticEmojis: l,
      animatedEmojis: n,
      theme: i,
      guild: r
    } = e;
    return t ? (0, a.jsx)(_.Spinner, {
      className: y.spinner,
      type: _.Spinner.Type.SPINNING_CIRCLE
    }) : 0 === l.length && 0 === n.length ? (0, a.jsxs)(O.default, {
      theme: i,
      className: y.empty,
      children: [(0, a.jsx)(O.EmptyStateImage, {
        darkSrc: s("458601"),
        lightSrc: s("673557"),
        width: 272,
        height: 212
      }), (0, a.jsx)(O.EmptyStateText, {
        note: B.default.Messages.NO_EMOJI,
        children: B.default.Messages.NO_EMOJI_TITLE
      })]
    }) : (0, a.jsxs)("div", {
      children: [(0, a.jsx)(Y, {
        title: B.default.Messages.EMOJI,
        maxSlots: r.getMaxEmojiSlots(),
        emojiCount: l.length
      }), (0, a.jsx)(W, {
        emojis: l,
        guild: r
      }), (0, a.jsx)(Y, {
        title: B.default.Messages.ANIMATED_EMOJI,
        maxSlots: r.getMaxEmojiSlots(),
        emojiCount: n.length
      }), (0, a.jsx)(W, {
        emojis: n,
        guild: r
      })]
    })
  },
  Y = e => {
    let {
      title: t,
      maxSlots: s,
      emojiCount: l
    } = e;
    return (0, a.jsxs)(_.FormTitle, {
      tag: _.FormTitleTags.H2,
      className: y.title,
      children: [t, (0, a.jsxs)("span", {
        children: [" — ", B.default.Messages.EMOJI_SLOTS_AVAILABLE.format({
          count: s - l
        })]
      })]
    })
  },
  W = e => {
    let {
      emojis: t,
      guild: s,
      onEdit: n,
      editingDisabled: i = !1
    } = e, r = l.useMemo(() => [...t].reverse(), [t]), {
      canManageGuildExpression: o
    } = (0, x.getManageResourcePermissions)(s);
    return 0 === t.length ? (0, a.jsx)(_.FormText, {
      type: _.FormTextTypes.DESCRIPTION,
      className: y.content,
      children: B.default.Messages.NO_EMOJI_BODY
    }) : (0, a.jsxs)(_.FormSection, {
      className: y.content,
      children: [(0, a.jsxs)("div", {
        className: y.emojiTable,
        children: [(0, a.jsx)(_.FormText, {
          type: _.FormTextTypes.DESCRIPTION,
          className: y.emojiColumn,
          children: B.default.Messages.GUILD_SETTINGS_EMOJI_IMAGE
        }), (0, a.jsx)(_.FormText, {
          type: _.FormTextTypes.DESCRIPTION,
          className: y.columnLabel,
          children: B.default.Messages.GUILD_SETTINGS_EMOJI_NAME
        }), (0, a.jsx)(_.FormText, {
          type: _.FormTextTypes.DESCRIPTION,
          className: y.columnLabel,
          children: B.default.Messages.UPLOADED_BY
        })]
      }), r.map(e => (0, a.jsx)(w, {
        guildId: s.id,
        emoji: e,
        onEdit: n,
        editingDisabled: i || !o(e)
      }, e.id))]
    })
  },
  z = e => {
    let t, s, l, {
        staticEmojiCount: n,
        animatedEmojiCount: i,
        guild: r
      } = e,
      o = r.getMaxEmojiSlots(),
      d = Math.min(o - n, o - i),
      u = r.premiumTier,
      c = (0, v.getNextTier)(u, r.id);
    return null == c || u === P.BoostedGuildTiers.TIER_3 || d > 0 ? null : (d > o ? (t = B.default.Messages.GUILD_SETTINGS_EMOJIS_UPSELL_BANNER_TOO_MANY_EMOJIS_HEADER.format({
      level: c
    }), s = B.default.Messages.GUILD_SETTINGS_EMOJIS_UPSELL_BANNER_TOO_MANY_EMOJIS_TEXT.format({
      level: c
    }), l = P.AnalyticsObjects.BOOST_UPSELL_BANNER_LOST_LEVEL) : (t = B.default.Messages.PREMIUM_GUILD_SUBSCRIPTION_UPSELL_BANNER_HEADER, s = B.default.Messages.GUILD_SETTINGS_EMOJIS_UPSELL_BANNER_TEXT.format({
      level: c
    }), l = P.AnalyticsObjects.BOOST_UPSELL_BANNER_SLOTS_FULL), (0, a.jsx)(h.default, {
      header: t,
      text: s,
      guild: r,
      analyticsLocation: {
        page: P.AnalyticsPages.GUILD_SETTINGS,
        section: P.AnalyticsSections.GUILD_SETTINGS_STICKERS,
        object: l,
        objectType: (0, v.boostedGuildTierToAnalyticsObjectType)(c)
      }
    }))
  };
t.default = () => {
  let e = (0, E.useStateFromStores)([U.default], () => U.default.getGuild()),
    [t, n] = l.useState("");
  o()(null != e, "ConnectedGuildSettingsEmoji must be rendered within a guild context");
  let i = (0, E.useStateFromStores)([L.default], () => L.default.theme),
    {
      canCreateExpressions: r
    } = (0, x.useManageResourcePermissions)(e),
    {
      revision: d,
      emojis: I
    } = (0, E.useStateFromStoresObject)([G.default], () => ({
      revision: G.default.getEmojiRevision(e.id),
      emojis: G.default.getEmojis(e.id)
    })),
    T = (0, m.default)(d),
    [S, h] = l.useState(!1),
    [O, A] = l.useState(!1),
    M = l.useRef(null);
  l.useEffect(() => {
    S && W()
  }, [S]), l.useEffect(() => {
    H(e.id)
  }, [e.id]), l.useEffect(() => {
    null != T && T < d && H(e.id)
  }, [d, T, e.id]);
  let [D, v] = l.useMemo(() => {
    let t = null == I ? void 0 : I.filter(t => !(0, C.isRoleSubscriptionEmoji)(t, e.id)),
      [s, a] = u().partition(t, e => !e.animated);
    return [s, a]
  }, [I, e.id]), F = e.getMaxEmojiSlots(), k = Math.max(F - D.length, F - v.length), w = (s, a, l) => (0, g.uploadEmojiFile)({
    data: s,
    file: a,
    image: l,
    guildId: e.id,
    uploadId: t,
    hideErrorModal: !0
  }), Y = async s => {
    n((0, c.v4)()), p.default.track(P.AnalyticEvents.EMOJI_UPLOAD_STARTED, {
      guild_id: e.id,
      upload_id: t
    }), await (0, R.processImages)(s, w), h(!0)
  }, W = () => {
    null !== M.current && ((0, _.closeModal)(M.current), M.current = null)
  }, K = async e => {
    M.current = await (0, _.openModalLazy)(async () => {
      let {
        default: t
      } = await Promise.all([s.e("99387"), s.e("16169")]).then(s.bind(s, "935333"));
      return s => (0, a.jsx)(t, {
        processFiles: () => Y(e),
        ...s
      })
    })
  }, Z = (0, N.isCreatorMonetizationEnabledGuild)(e);
  return (0, a.jsxs)("div", {
    className: y.emojiSettings,
    children: [0 === k ? null : (0, a.jsx)(f.default, {
      className: y.emojiUploadContainer,
      onDrop: K
    }), (0, a.jsxs)(_.FormSection, {
      tag: _.FormTitleTags.H1,
      title: B.default.Messages.EMOJI,
      children: [(0, a.jsx)(z, {
        guild: e,
        staticEmojiCount: D.length,
        animatedEmojiCount: v.length
      }), (0, a.jsxs)(_.FormSection, {
        className: y.uploader,
        children: [(0, a.jsx)(_.FormText, {
          type: _.FormTextTypes.DESCRIPTION,
          children: B.default.Messages.GUILD_SETTINGS_EMOJI_UPLOAD_TO_SERVER_DESCRIPTION.format({
            count: F
          })
        }), Z && (0, a.jsx)(_.FormText, {
          type: _.FormTextTypes.DESCRIPTION,
          children: B.default.Messages.GUILD_ROLE_SUBSCRIPTION_EMOJI_SETTINGS_MANAGE_PREMIUM_TEXT.format({
            onClick: () => j.default.open(e.id, P.GuildSettingsSections.ROLE_SUBSCRIPTIONS, void 0, P.GuildSettingsSubsections.ROLE_SUBSCRIPTION_EMOJI)
          })
        }), (0, a.jsxs)("div", {
          children: [(0, a.jsx)(_.FormTitle, {
            tag: _.FormTitleTags.H2,
            className: y.emojiUploadUploadRequirementsHeading,
            children: B.default.Messages.GUILD_SETTINGS_EMOJI_UPLOAD_HEADING
          }), (0, a.jsxs)("ul", {
            className: y.emojiUploadUploadRequirementsList,
            children: [(0, a.jsx)("li", {
              children: (0, a.jsx)(_.FormText, {
                type: _.FormTextTypes.DESCRIPTION,
                children: B.default.Messages.GUILD_SETTINGS_EMOJI_UPLOAD_REQUIREMENTS_1
              })
            }), (0, a.jsx)("li", {
              children: (0, a.jsx)(_.FormText, {
                type: _.FormTextTypes.DESCRIPTION,
                children: B.default.Messages.GUILD_SETTINGS_EMOJI_UPLOAD_REQUIREMENTS_2.format({
                  maxSize: b.EMOJI_MAX_FILESIZE_KB
                })
              })
            }), (0, a.jsx)("li", {
              children: (0, a.jsx)(_.FormText, {
                type: _.FormTextTypes.DESCRIPTION,
                children: B.default.Messages.GUILD_SETTINGS_EMOJI_UPLOAD_REQUIREMENTS_3
              })
            }), (0, a.jsx)("li", {
              children: (0, a.jsx)(_.FormText, {
                type: _.FormTextTypes.DESCRIPTION,
                children: B.default.Messages.GUILD_SETTINGS_EMOJI_UPLOAD_REQUIREMENTS_4
              })
            })]
          })]
        }), (0, a.jsxs)(_.Button, {
          tabIndex: -1,
          size: _.Button.Sizes.MEDIUM,
          onClick: () => {
            let t = (0, c.v4)();
            n(t), p.default.track(P.AnalyticEvents.EMOJI_UPLOAD_STARTED, {
              guild_id: e.id,
              upload_id: t
            })
          },
          disabled: O || 0 === k || !r,
          submitting: O,
          focusProps: {
            within: !0
          },
          children: [B.default.Messages.UPLOAD_EMOJI, k > 0 ? (0, a.jsx)(R.default, {
            disabled: O || 0 === k || !r,
            tabIndex: 0,
            onChange: w,
            setLoading: A,
            multiple: !0
          }) : null]
        })]
      }), (0, a.jsx)(V, {
        isLoading: null == I,
        staticEmojis: D,
        animatedEmojis: v,
        guild: e,
        theme: i
      })]
    })]
  })
}