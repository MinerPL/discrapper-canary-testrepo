"use strict";
t.d(s, {
  FT: function() {
    return V
  },
  L3: function() {
    return H
  }
}), t(47120);
var n = t(735250),
  i = t(470079),
  l = t(120356),
  a = t.n(l),
  r = t(512722),
  o = t.n(r),
  c = t(392711),
  d = t.n(c),
  u = t(772848),
  E = t(442837),
  _ = t(481060),
  I = t(668781),
  T = t(80932),
  N = t(225433),
  m = t(327802),
  S = t(110924),
  h = t(200876),
  g = t(730089),
  x = t(372444),
  C = t(889564),
  R = t(372129),
  L = t(889161),
  O = t(210887),
  A = t(185403),
  p = t(626135),
  M = t(768581),
  f = t(176354),
  v = t(267642),
  D = t(434404),
  Z = t(471613),
  j = t(999382),
  U = t(981631),
  G = t(185923),
  P = t(689938),
  b = t(138716),
  B = t(164149);
let y = d().throttle(T.OQ, 1e3),
  F = e => {
    let {
      currentTarget: s,
      which: t
    } = e;
    13 === t && s.blur()
  },
  w = e => {
    let {
      guildId: s,
      emoji: t,
      onEdit: l,
      editingDisabled: r = !1
    } = e, [o, c] = i.useState(t.name), d = M.ZP.getEmojiURL({
      id: t.id,
      animated: t.animated,
      size: 32
    });
    return (0, n.jsxs)("div", {
      className: a()(b.emojiRow, B.card),
      children: [(0, n.jsx)("div", {
        className: b.emojiColumn,
        children: (0, n.jsx)(_.Tooltip, {
          text: t.available ? null : P.Z.Messages.EMOJI_DISABLED_PREMIUM_TIER_LOST,
          children: e => (0, n.jsx)("div", {
            ...e,
            className: a()(b.emojiImage, {
              [b.emojiDisabled]: !t.available
            }),
            style: {
              backgroundImage: "url(".concat(d, ")")
            }
          })
        })
      }), (0, n.jsxs)("div", {
        className: b.column,
        children: [(0, n.jsx)(_.TextInput, {
          className: a()(b.emojiAliasInput, {
            [b.emojiAliasInputDisabled]: r
          }),
          inputClassName: b.emojiInput,
          placeholder: P.Z.Messages.GUILD_SETTINGS_EMOJI_ALIAS_PLACEHOLDER,
          onKeyPress: F,
          onChange: c,
          onBlur: () => {
            o !== t.name && (0, T.dv)({
              guildId: s,
              emojiId: t.id,
              name: f.ZP.sanitizeEmojiName(o)
            })
          },
          size: _.TextInput.Sizes.MINI,
          value: o,
          maxLength: G.Yc,
          disabled: r
        }), (0, n.jsx)("div", {
          className: b.emojiAliasPlaceholder,
          children: (0, n.jsx)("div", {
            className: b.emojiAliasPlaceholderContent,
            children: o.length > 0 ? o : P.Z.Messages.GUILD_SETTINGS_EMOJI_ALIAS_PLACEHOLDER
          })
        })]
      }), (0, n.jsxs)("div", {
        className: b.column,
        children: [(0, n.jsx)(_.Avatar, {
          src: t.user.getAvatarURL(s, 24),
          "aria-label": t.user.username,
          size: _.AvatarSizes.SIZE_24,
          className: b.avatar
        }), (0, n.jsx)(_.FormText, {
          className: a()(b.emojiRowText),
          children: t.user.username
        })]
      }), null != l && !r && (0, n.jsx)(_.Clickable, {
        "aria-label": P.Z.Messages.EDIT,
        className: b.editEmojiRolesButton,
        onClick: () => l(t, s),
        children: (0, n.jsx)(A.Z, {
          width: 24,
          height: 24,
          className: b.editEmojiRolesIcon
        })
      }), !r && (0, n.jsx)(N.Z, {
        className: b.emojiRemove,
        onClick: () => {
          (0, T.RE)(s, t.id).catch(e => {
            let {
              status: s
            } = e;
            429 === s && I.Z.show({
              title: P.Z.Messages.GENERIC_ERROR_TITLE,
              body: P.Z.Messages.RATE_LIMITED
            })
          })
        }
      })]
    })
  },
  k = e => {
    let {
      isLoading: s,
      staticEmojis: i,
      animatedEmojis: l,
      theme: a,
      guild: r
    } = e;
    return s ? (0, n.jsx)(_.Spinner, {
      className: b.spinner,
      type: _.Spinner.Type.SPINNING_CIRCLE
    }) : 0 === i.length && 0 === l.length ? (0, n.jsxs)(_.EmptyState, {
      theme: a,
      className: b.empty,
      children: [(0, n.jsx)(_.EmptyStateImage, {
        darkSrc: t(458601),
        lightSrc: t(673557),
        width: 272,
        height: 212
      }), (0, n.jsx)(_.EmptyStateText, {
        note: P.Z.Messages.NO_EMOJI,
        children: P.Z.Messages.NO_EMOJI_TITLE
      })]
    }) : (0, n.jsxs)("div", {
      children: [(0, n.jsx)(H, {
        title: P.Z.Messages.EMOJI,
        maxSlots: r.getMaxEmojiSlots(),
        emojiCount: i.length
      }), (0, n.jsx)(V, {
        emojis: i,
        guild: r
      }), (0, n.jsx)(H, {
        title: P.Z.Messages.ANIMATED_EMOJI,
        maxSlots: r.getMaxEmojiSlots(),
        emojiCount: l.length
      }), (0, n.jsx)(V, {
        emojis: l,
        guild: r
      })]
    })
  },
  H = e => {
    let {
      title: s,
      maxSlots: t,
      emojiCount: i
    } = e;
    return (0, n.jsxs)(_.FormTitle, {
      tag: _.FormTitleTags.H2,
      className: b.title,
      children: [s, (0, n.jsxs)("span", {
        children: [" — ", P.Z.Messages.EMOJI_SLOTS_AVAILABLE.format({
          count: t - i
        })]
      })]
    })
  },
  V = e => {
    let {
      emojis: s,
      guild: t,
      onEdit: l,
      editingDisabled: a = !1
    } = e, r = i.useMemo(() => [...s].reverse(), [s]), {
      canManageGuildExpression: o
    } = (0, L.Gw)(t);
    return 0 === s.length ? (0, n.jsx)(_.FormText, {
      type: _.FormTextTypes.DESCRIPTION,
      className: b.content,
      children: P.Z.Messages.NO_EMOJI_BODY
    }) : (0, n.jsxs)(_.FormSection, {
      className: b.content,
      children: [(0, n.jsxs)("div", {
        className: b.emojiTable,
        children: [(0, n.jsx)(_.FormText, {
          type: _.FormTextTypes.DESCRIPTION,
          className: b.emojiColumn,
          children: P.Z.Messages.GUILD_SETTINGS_EMOJI_IMAGE
        }), (0, n.jsx)(_.FormText, {
          type: _.FormTextTypes.DESCRIPTION,
          className: b.columnLabel,
          children: P.Z.Messages.GUILD_SETTINGS_EMOJI_NAME
        }), (0, n.jsx)(_.FormText, {
          type: _.FormTextTypes.DESCRIPTION,
          className: b.columnLabel,
          children: P.Z.Messages.UPLOADED_BY
        })]
      }), r.map(e => (0, n.jsx)(w, {
        guildId: t.id,
        emoji: e,
        onEdit: l,
        editingDisabled: a || !o(e)
      }, e.id))]
    })
  },
  Y = e => {
    let s, t, i, {
        staticEmojiCount: l,
        animatedEmojiCount: a,
        guild: r
      } = e,
      o = r.getMaxEmojiSlots(),
      c = Math.min(o - l, o - a),
      d = r.premiumTier,
      u = (0, v.FZ)(d, r.id);
    return null == u || d === U.Eu4.TIER_3 || c > 0 ? null : (c > o ? (s = P.Z.Messages.GUILD_SETTINGS_EMOJIS_UPSELL_BANNER_TOO_MANY_EMOJIS_HEADER.format({
      level: u
    }), t = P.Z.Messages.GUILD_SETTINGS_EMOJIS_UPSELL_BANNER_TOO_MANY_EMOJIS_TEXT.format({
      level: u
    }), i = U.qAy.BOOST_UPSELL_BANNER_LOST_LEVEL) : (s = P.Z.Messages.PREMIUM_GUILD_SUBSCRIPTION_UPSELL_BANNER_HEADER, t = P.Z.Messages.GUILD_SETTINGS_EMOJIS_UPSELL_BANNER_TEXT.format({
      level: u
    }), i = U.qAy.BOOST_UPSELL_BANNER_SLOTS_FULL), (0, n.jsx)(x.Z, {
      header: s,
      text: t,
      guild: r,
      analyticsLocation: {
        page: U.ZY5.GUILD_SETTINGS,
        section: U.jXE.GUILD_SETTINGS_STICKERS,
        object: i,
        objectType: (0, v.ge)(u)
      }
    }))
  };
s.ZP = () => {
  let e = (0, E.e7)([j.Z], () => j.Z.getGuild()),
    [s, l] = i.useState("");
  o()(null != e, "ConnectedGuildSettingsEmoji must be rendered within a guild context");
  let a = (0, E.e7)([O.Z], () => O.Z.theme),
    {
      canCreateExpressions: r
    } = (0, L.XJ)(e),
    {
      revision: c,
      emojis: I
    } = (0, E.cj)([Z.Z], () => ({
      revision: Z.Z.getEmojiRevision(e.id),
      emojis: Z.Z.getEmojis(e.id)
    })),
    T = (0, S.Z)(c),
    [N, x] = i.useState(!1),
    [A, M] = i.useState(!1),
    f = i.useRef(null);
  i.useEffect(() => {
    N && W()
  }, [N]), i.useEffect(() => {
    y(e.id)
  }, [e.id]), i.useEffect(() => {
    null != T && T < c && y(e.id)
  }, [c, T, e.id]);
  let [v, B] = i.useMemo(() => {
    let s = null == I ? void 0 : I.filter(s => !(0, C.Kt)(s, e.id)),
      [t, n] = d().partition(s, e => !e.animated);
    return [t, n]
  }, [I, e.id]), F = e.getMaxEmojiSlots(), w = Math.max(F - v.length, F - B.length), H = (t, n, i) => (0, g.G)({
    data: t,
    file: n,
    image: i,
    guildId: e.id,
    uploadId: s,
    hideErrorModal: !0
  }), V = async t => {
    l((0, u.Z)()), p.default.track(U.rMx.EMOJI_UPLOAD_STARTED, {
      guild_id: e.id,
      upload_id: s
    }), await (0, R._)(t, H), x(!0)
  }, W = () => {
    null !== f.current && ((0, _.closeModal)(f.current), f.current = null)
  }, K = async e => {
    f.current = await (0, _.openModalLazy)(async () => {
      let {
        default: s
      } = await Promise.all([t.e("99387"), t.e("16169")]).then(t.bind(t, 935333));
      return t => (0, n.jsx)(s, {
        processFiles: () => V(e),
        ...t
      })
    })
  }, z = (0, h.l)(e);
  return (0, n.jsxs)("div", {
    className: b.emojiSettings,
    children: [0 === w ? null : (0, n.jsx)(m.Z, {
      className: b.emojiUploadContainer,
      onDrop: K
    }), (0, n.jsxs)(_.FormSection, {
      tag: _.FormTitleTags.H1,
      title: P.Z.Messages.EMOJI,
      children: [(0, n.jsx)(Y, {
        guild: e,
        staticEmojiCount: v.length,
        animatedEmojiCount: B.length
      }), (0, n.jsxs)(_.FormSection, {
        className: b.uploader,
        children: [(0, n.jsx)(_.FormText, {
          type: _.FormTextTypes.DESCRIPTION,
          children: P.Z.Messages.GUILD_SETTINGS_EMOJI_UPLOAD_TO_SERVER_DESCRIPTION.format({
            count: F
          })
        }), z && (0, n.jsx)(_.FormText, {
          type: _.FormTextTypes.DESCRIPTION,
          children: P.Z.Messages.GUILD_ROLE_SUBSCRIPTION_EMOJI_SETTINGS_MANAGE_PREMIUM_TEXT.format({
            onClick: () => D.Z.open(e.id, U.pNK.ROLE_SUBSCRIPTIONS, void 0, U.KsC.ROLE_SUBSCRIPTION_EMOJI)
          })
        }), (0, n.jsxs)("div", {
          children: [(0, n.jsx)(_.FormTitle, {
            tag: _.FormTitleTags.H2,
            className: b.emojiUploadUploadRequirementsHeading,
            children: P.Z.Messages.GUILD_SETTINGS_EMOJI_UPLOAD_HEADING
          }), (0, n.jsxs)("ul", {
            className: b.emojiUploadUploadRequirementsList,
            children: [(0, n.jsx)("li", {
              children: (0, n.jsx)(_.FormText, {
                type: _.FormTextTypes.DESCRIPTION,
                children: P.Z.Messages.GUILD_SETTINGS_EMOJI_UPLOAD_REQUIREMENTS_1
              })
            }), (0, n.jsx)("li", {
              children: (0, n.jsx)(_.FormText, {
                type: _.FormTextTypes.DESCRIPTION,
                children: P.Z.Messages.GUILD_SETTINGS_EMOJI_UPLOAD_REQUIREMENTS_2.format({
                  maxSize: G.xG
                })
              })
            }), (0, n.jsx)("li", {
              children: (0, n.jsx)(_.FormText, {
                type: _.FormTextTypes.DESCRIPTION,
                children: P.Z.Messages.GUILD_SETTINGS_EMOJI_UPLOAD_REQUIREMENTS_3
              })
            }), (0, n.jsx)("li", {
              children: (0, n.jsx)(_.FormText, {
                type: _.FormTextTypes.DESCRIPTION,
                children: P.Z.Messages.GUILD_SETTINGS_EMOJI_UPLOAD_REQUIREMENTS_4
              })
            })]
          })]
        }), (0, n.jsxs)(_.Button, {
          tabIndex: -1,
          size: _.Button.Sizes.MEDIUM,
          onClick: () => {
            let s = (0, u.Z)();
            l(s), p.default.track(U.rMx.EMOJI_UPLOAD_STARTED, {
              guild_id: e.id,
              upload_id: s
            })
          },
          disabled: A || 0 === w || !r,
          submitting: A,
          focusProps: {
            within: !0
          },
          children: [P.Z.Messages.UPLOAD_EMOJI, w > 0 ? (0, n.jsx)(R.Z, {
            disabled: A || 0 === w || !r,
            tabIndex: 0,
            onChange: H,
            setLoading: M,
            multiple: !0
          }) : null]
        })]
      }), (0, n.jsx)(k, {
        isLoading: null == I,
        staticEmojis: v,
        animatedEmojis: B,
        guild: e,
        theme: a
      })]
    })]
  })
}