"use strict";
s.r(t), s.d(t, {
  default: function() {
    return y
  }
}), s("222007"), s("808653");
var a = s("37983"),
  l = s("884691"),
  n = s("414456"),
  i = s.n(n),
  r = s("597755"),
  o = s.n(r),
  d = s("446674"),
  u = s("862337"),
  c = s("77078"),
  E = s("327037"),
  _ = s("430568"),
  I = s("841098"),
  T = s("95039"),
  S = s("817963"),
  f = s("305122"),
  m = s("235004"),
  N = s("520497"),
  g = s("812809"),
  h = s("697218"),
  C = s("941886"),
  R = s("245307"),
  x = s("945330"),
  L = s("95689"),
  O = s("987772"),
  A = s("368121"),
  p = s("315102"),
  M = s("427459"),
  D = s("773336"),
  v = s("900938"),
  G = s("826485"),
  j = s("49111"),
  U = s("846325"),
  P = s("782340"),
  b = s("6516");
let B = D.isPlatformEmbedded || "Safari" !== o.name && "Firefox" !== o.name;

function y() {
  let e = (0, d.useStateFromStores)([v.default], () => v.default.getProps().guild);
  return null == e ? null : (0, a.jsx)(c.FormSection, {
    tag: c.FormTitleTags.H1,
    title: P.default.Messages.GUILD_SETTINGS_SOUNDBOARD,
    children: (0, a.jsx)(V, {
      guild: e
    })
  })
}

function F(e) {
  let {
    children: t
  } = e;
  return (0, a.jsx)(c.Heading, {
    className: b.tableHeader,
    variant: "heading-sm/semibold",
    color: "header-secondary",
    children: t
  })
}

function H(e) {
  let {
    currentTier: t,
    availableSounds: s,
    guildId: l
  } = e, n = (0, M.getTotalSoundboardSoundCountForTier)(t);
  return 0 === t ? (0, a.jsx)(a.Fragment, {
    children: P.default.Messages.GUILD_SETTINGS_SOUND_LIST_SOUNDS_AVAILABLE.format({
      slots: s,
      totalSlots: n
    })
  }) : (0, a.jsxs)(a.Fragment, {
    children: [(0, a.jsx)(c.Tooltip, {
      text: P.default.Messages.GUILD_SETTINGS_SOUNDBOARD_BOOST_LEVEL.format({
        currentBoostLevel: t
      }),
      children: e => (0, a.jsx)(c.Clickable, {
        className: b.boostingIconWrapper,
        onClick: () => {
          var e;
          return e = l, void(0, T.openGuildBoostingMarketingModal)({
            guildId: e,
            location: {
              section: j.AnalyticsSections.GUILD_SETTINGS_SOUNDBOARD,
              object: j.AnalyticsObjects.BOOST_GEM_ICON
            }
          })
        },
        tabIndex: -1,
        children: (0, a.jsx)(R.default, {
          ...e
        })
      })
    }), P.default.Messages.GUILD_SETTINGS_SOUND_LIST_SOUNDS_AVAILABLE_BOOST_LEVEL.format({
      slots: s,
      totalSlots: n,
      boostLevel: t
    })]
  })
}
let k = e => {
    let {
      renderPopoutBody: t,
      renderPopoutChildren: s,
      ...n
    } = e, [i, r] = l.useState(!1), o = l.useMemo(() => new u.Timeout, []), d = l.useCallback(() => {
      o.stop(), r(!0)
    }, [o]), E = l.useCallback(() => {
      o.start(200, () => r(!1))
    }, [o]);
    return (0, a.jsx)(c.Popout, {
      shouldShow: i,
      renderPopout: e => (0, a.jsx)(c.Dialog, {
        className: b.browserUnsupportedDialog,
        onMouseEnter: d,
        onMouseLeave: E,
        children: t(e)
      }),
      ...n,
      children: e => s(e)
    })
  },
  w = () => (0, a.jsx)(k, {
    renderPopoutBody: () => (0, a.jsx)(c.Text, {
      variant: "text-sm/normal",
      color: "header-secondary",
      children: P.default.Messages.GUILD_SETTINGS_SOUNDBOARD_UPLOAD_SOUND_NOT_SUPPORTED.format()
    }),
    renderPopoutChildren: e => (0, a.jsx)(c.Button, {
      ...e,
      disabled: !0,
      children: P.default.Messages.GUILD_SETTINGS_SOUNDBOARD_UPLOAD_SOUND
    })
  });

function V(e) {
  let {
    guild: t
  } = e, [n, i] = (0, d.useStateFromStoresArray)([m.default], () => {
    var e;
    return [null !== (e = m.default.getSoundsForGuild(t.id)) && void 0 !== e ? e : U.EMPTY_SOUND_LIST, m.default.isFetchingSounds() || m.default.isFetchingDefaultSounds()]
  }), {
    canCreateExpressions: r
  } = (0, S.useManageResourcePermissions)(t), o = l.useRef(null), u = (0, I.default)(), E = t.premiumTier, _ = (0, M.getAvailableSoundboardSoundCount)(n, E);
  l.useEffect(() => {
    (0, f.maybeFetchSoundboardSounds)()
  }, []);
  let T = l.useMemo(() => n.reduce((e, t) => (e[t.soundId] = new Audio((0, N.default)(t.soundId)), e), {}), [n]),
    h = 0 === n.length && !i;

  function R(e) {
    var t;
    null === (t = o.current) || void 0 === t || t.pause();
    let s = T[e.soundId];
    null != s && (o.current = s, s.currentTime = 0, s.volume = (0, g.default)(e.volume), s.play())
  }
  l.useEffect(() => () => {
    var e;
    null === (e = o.current) || void 0 === e || e.pause()
  }, []);
  if (i) return (0, a.jsx)(c.Spinner, {});
  let x = B ? (0, a.jsx)(c.Button, {
    onClick: function() {
      (0, c.openModalLazy)(async () => {
        let {
          default: e
        } = await s.el("823749").then(s.bind(s, "823749"));
        return s => (0, a.jsx)(e, {
          ...s,
          guildId: t.id
        })
      })
    },
    disabled: _ <= 0 || !r,
    children: P.default.Messages.GUILD_SETTINGS_SOUNDBOARD_UPLOAD_SOUND
  }) : (0, a.jsx)(w, {});
  return (0, a.jsxs)(a.Fragment, {
    children: [(0, a.jsxs)("div", {
      children: [(0, a.jsx)(c.Text, {
        className: b.helpText,
        variant: "text-sm/normal",
        color: "header-secondary",
        children: P.default.Messages.GUILD_SETTINGS_SOUNDBOARD_DESCRIPTION
      }), (0, a.jsx)("div", {
        className: b.buttons,
        children: !h && x
      })]
    }), h ? (0, a.jsxs)(C.default, {
      theme: u,
      className: b.empty,
      children: [(0, a.jsx)(C.EmptyStateImage, {
        darkSrc: s("404807"),
        lightSrc: s("124495"),
        width: 272,
        height: 212
      }), (0, a.jsx)(C.EmptyStateText, {
        note: P.default.Messages.NO_SOUNDS,
        noteClassName: b.emptyText,
        children: P.default.Messages.NO_SOUNDS_TITLE
      }), x]
    }) : (0, a.jsxs)(a.Fragment, {
      children: [(0, a.jsx)(c.FormDivider, {
        className: b.divider
      }), (0, a.jsx)(c.Heading, {
        className: b.tableTitle,
        variant: "heading-md/bold",
        color: "header-primary",
        children: (0, a.jsx)(H, {
          guildId: t.id,
          currentTier: E,
          availableSounds: _
        })
      }), (0, a.jsx)(G.default, {
        guild: t,
        numSounds: n.length,
        isOutOfSlots: 0 === _
      }), (0, a.jsxs)("div", {
        className: b.soundTable,
        children: [(0, a.jsxs)("div", {
          className: b.tableHeaders,
          children: [(0, a.jsx)(F, {
            children: P.default.Messages.EMOJI
          }), (0, a.jsx)(F, {
            children: P.default.Messages.GUILD_SETTINGS_SOUND_NAME_COLUMN
          }), (0, a.jsx)(F, {
            children: P.default.Messages.GUILD_SETTINGS_SOUND_UPLOADER_COLUMN
          })]
        }), n.map(e => (0, a.jsx)(Y, {
          sound: e,
          isPlaying: !1,
          guild: t,
          onPlaySound: R
        }, e.soundId))]
      })]
    })]
  })
}

function Y(e) {
  let {
    sound: t,
    isPlaying: n,
    onPlaySound: r,
    guild: o
  } = e, {
    soundId: u,
    name: I,
    user: T,
    userId: m,
    emojiId: N,
    emojiName: g
  } = t, C = (0, d.useStateFromStores)([h.default], () => null != T ? T : h.default.getUser(m), [m, T]), {
    canManageGuildExpression: R
  } = (0, S.useManageResourcePermissions)(o), M = l.useMemo(() => R(t), [t, R]), D = null != N || null != g, [v, G] = l.useState(!1);
  async function j() {
    if (!v) {
      G(!0);
      try {
        await (0, f.deleteSound)(o.id, u)
      } catch {
        G(!1)
      }
    }
  }
  return l.useEffect(() => {
    null == C && e();
    async function e() {
      await (0, E.getUser)(m)
    }
  }, [C, m]), (0, a.jsxs)("div", {
    className: i(b.row, {
      [b.active]: n
    }),
    children: [D ? (0, a.jsx)(_.default, {
      emojiId: N,
      emojiName: g,
      className: b.emoji
    }) : (0, a.jsx)(L.default, {
      className: b.emoji
    }), (0, a.jsx)(c.Clickable, {
      onClick: () => {
        !v && r(t)
      },
      className: b.soundName,
      children: (0, a.jsxs)(c.Text, {
        variant: "text-sm/normal",
        className: b.soundName,
        children: [I, " ", (0, a.jsx)(A.default, {
          className: b.soundPreviewIcon
        })]
      })
    }), null != C && (0, a.jsxs)(c.Text, {
      className: b.uploaderName,
      variant: "text-sm/normal",
      children: [(0, a.jsx)(c.Avatar, {
        "aria-label": null == C ? void 0 : C.username,
        size: c.AvatarSizes.SIZE_24,
        className: b.uploaderAvatar,
        src: (0, p.getUserAvatarURL)(C, !1, 24)
      }), null == C ? void 0 : C.username]
    }), M ? (0, a.jsxs)("div", {
      className: b.soundEditContainer,
      children: [(0, a.jsx)(c.Clickable, {
        className: b.soundUpdate,
        onClick: function(e) {
          e.stopPropagation(), (0, c.openModalLazy)(async () => {
            let {
              default: e
            } = await s.el("823749").then(s.bind(s, "823749"));
            return s => (0, a.jsx)(e, {
              ...s,
              guildId: o.id,
              existingSound: t
            })
          })
        },
        "aria-label": P.default.Messages.EDIT,
        children: (0, a.jsx)(O.default, {
          className: b.soundEditIcon
        })
      }), (0, a.jsx)(c.Clickable, {
        className: b.soundRemove,
        onClick: function(e) {
          e.stopPropagation(), (0, c.openModal)(e => (0, a.jsx)(c.ConfirmModal, {
            header: P.default.Messages.GUILD_SETTINGS_SOUNDBOARD_DELETE_SOUND_TITLE.format({
              soundName: I
            }),
            confirmText: P.default.Messages.DELETE,
            cancelText: P.default.Messages.CANCEL,
            onConfirm: j,
            ...e,
            children: (0, a.jsx)(c.Text, {
              variant: "text-md/normal",
              children: P.default.Messages.GUILD_SETTINGS_SOUNDBOARD_DELETE_SOUND_BODY.format({
                soundName: I
              })
            })
          }))
        },
        "aria-label": P.default.Messages.REMOVE,
        children: (0, a.jsx)(x.default, {
          className: b.soundEditIcon
        })
      })]
    }) : null]
  })
}