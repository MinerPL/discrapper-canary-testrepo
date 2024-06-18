"use strict";
t.d(s, {
  Z: function() {
    return y
  }
}), t(47120), t(724458);
var n = t(735250),
  i = t(470079),
  l = t(120356),
  a = t.n(l),
  r = t(525654),
  o = t.n(r),
  c = t(442837),
  d = t(846519),
  u = t(481060),
  E = t(232567),
  _ = t(596454),
  I = t(410030),
  T = t(623624),
  N = t(889161),
  m = t(208049),
  S = t(763296),
  h = t(22382),
  g = t(747071),
  x = t(171368),
  C = t(430824),
  R = t(594174),
  L = t(15385),
  O = t(465670),
  A = t(84017),
  p = t(185403),
  M = t(632184),
  f = t(768581),
  v = t(267642),
  D = t(358085),
  Z = t(999382),
  j = t(70409),
  U = t(981631),
  G = t(710111),
  P = t(689938),
  b = t(438927);
let B = D.isPlatformEmbedded || "Safari" !== o().name && "Firefox" !== o().name;

function y() {
  let e = (0, c.e7)([Z.Z], () => Z.Z.getProps().guild);
  return null == e ? null : (0, n.jsx)(u.FormSection, {
    tag: u.FormTitleTags.H1,
    title: P.Z.Messages.GUILD_SETTINGS_SOUNDBOARD,
    children: (0, n.jsx)(V, {
      guild: e
    })
  })
}

function F(e) {
  let {
    children: s
  } = e;
  return (0, n.jsx)(u.Heading, {
    className: b.tableHeader,
    variant: "heading-sm/semibold",
    color: "header-secondary",
    children: s
  })
}

function w(e) {
  let {
    currentTier: s,
    availableSounds: t,
    guildId: i
  } = e, l = C.Z.getGuild(i), a = (0, v.U2)(s, l);
  return 0 === s ? (0, n.jsx)(n.Fragment, {
    children: P.Z.Messages.GUILD_SETTINGS_SOUND_LIST_SOUNDS_AVAILABLE.format({
      slots: t,
      totalSlots: a
    })
  }) : (0, n.jsxs)(n.Fragment, {
    children: [(0, n.jsx)(u.Tooltip, {
      text: P.Z.Messages.GUILD_SETTINGS_SOUNDBOARD_BOOST_LEVEL.format({
        currentBoostLevel: s
      }),
      children: e => (0, n.jsx)(u.Clickable, {
        className: b.boostingIconWrapper,
        onClick: () => {
          var e;
          return e = i, void(0, T.f)({
            guildId: e,
            location: {
              section: U.jXE.GUILD_SETTINGS_SOUNDBOARD,
              object: U.qAy.BOOST_GEM_ICON
            }
          })
        },
        tabIndex: -1,
        children: (0, n.jsx)(L.Z, {
          ...e
        })
      })
    }), P.Z.Messages.GUILD_SETTINGS_SOUND_LIST_SOUNDS_AVAILABLE_BOOST_LEVEL.format({
      slots: t,
      totalSlots: a,
      boostLevel: s
    })]
  })
}
let k = e => {
    let {
      renderPopoutBody: s,
      renderPopoutChildren: t,
      ...l
    } = e, [a, r] = i.useState(!1), o = i.useMemo(() => new d.V7, []), c = i.useCallback(() => {
      o.stop(), r(!0)
    }, [o]), E = i.useCallback(() => {
      o.start(200, () => r(!1))
    }, [o]);
    return (0, n.jsx)(u.Popout, {
      shouldShow: a,
      renderPopout: e => (0, n.jsx)(u.Dialog, {
        className: b.browserUnsupportedDialog,
        onMouseEnter: c,
        onMouseLeave: E,
        children: s(e)
      }),
      ...l,
      children: e => t(e)
    })
  },
  H = () => (0, n.jsx)(k, {
    renderPopoutBody: () => (0, n.jsx)(u.Text, {
      variant: "text-sm/normal",
      color: "header-secondary",
      children: P.Z.Messages.GUILD_SETTINGS_SOUNDBOARD_UPLOAD_SOUND_NOT_SUPPORTED.format()
    }),
    renderPopoutChildren: e => (0, n.jsx)(u.Button, {
      ...e,
      disabled: !0,
      children: P.Z.Messages.GUILD_SETTINGS_SOUNDBOARD_UPLOAD_SOUND
    })
  });

function V(e) {
  let {
    guild: s
  } = e, [l, a] = (0, c.Wu)([S.Z], () => {
    var e;
    return [null !== (e = S.Z.getSoundsForGuild(s.id)) && void 0 !== e ? e : G.Hy, S.Z.isFetchingSounds() || S.Z.isFetchingDefaultSounds()]
  }), {
    canCreateExpressions: r
  } = (0, N.XJ)(s), o = i.useRef(null), d = (0, I.ZP)(), E = s.premiumTier, _ = (0, v.yw)(s, l, E);
  i.useEffect(() => {
    (0, m.w)()
  }, []);
  let T = i.useMemo(() => l.reduce((e, s) => (e[s.soundId] = new Audio((0, h.Z)(s.soundId)), e), {}), [l]),
    x = 0 === l.length && !a;

  function C(e) {
    var s;
    null === (s = o.current) || void 0 === s || s.pause();
    let t = T[e.soundId];
    null != t && (o.current = t, t.currentTime = 0, t.volume = (0, g.Z)(e.volume), t.play())
  }
  i.useEffect(() => () => {
    var e;
    null === (e = o.current) || void 0 === e || e.pause()
  }, []);
  if (a) return (0, n.jsx)(u.Spinner, {});
  let R = B ? (0, n.jsx)(u.Button, {
    onClick: function() {
      (0, u.openModalLazy)(async () => {
        let {
          default: e
        } = await Promise.all([t.e("49237"), t.e("99387"), t.e("56035")]).then(t.bind(t, 758961));
        return t => (0, n.jsx)(e, {
          ...t,
          guildId: s.id
        })
      })
    },
    disabled: _ <= 0 || !r,
    children: P.Z.Messages.GUILD_SETTINGS_SOUNDBOARD_UPLOAD_SOUND
  }) : (0, n.jsx)(H, {});
  return (0, n.jsxs)(n.Fragment, {
    children: [(0, n.jsxs)("div", {
      children: [(0, n.jsx)(u.Text, {
        className: b.helpText,
        variant: "text-sm/normal",
        color: "header-secondary",
        children: P.Z.Messages.GUILD_SETTINGS_SOUNDBOARD_DESCRIPTION
      }), (0, n.jsx)("div", {
        className: b.buttons,
        children: !x && R
      })]
    }), x ? (0, n.jsxs)(u.EmptyState, {
      theme: d,
      className: b.empty,
      children: [(0, n.jsx)(u.EmptyStateImage, {
        darkSrc: t(458601),
        lightSrc: t(673557),
        width: 272,
        height: 212
      }), (0, n.jsx)(u.EmptyStateText, {
        note: P.Z.Messages.NO_SOUNDS,
        noteClassName: b.emptyText,
        children: P.Z.Messages.NO_SOUNDS_TITLE
      }), R]
    }) : (0, n.jsxs)(n.Fragment, {
      children: [(0, n.jsx)(u.FormDivider, {
        className: b.divider
      }), (0, n.jsx)(u.Heading, {
        className: b.tableTitle,
        variant: "heading-md/bold",
        color: "header-primary",
        children: (0, n.jsx)(w, {
          guildId: s.id,
          currentTier: E,
          availableSounds: _
        })
      }), (0, n.jsx)(j.Z, {
        guild: s,
        numSounds: l.length,
        isOutOfSlots: 0 === _
      }), (0, n.jsxs)("div", {
        className: b.soundTable,
        children: [(0, n.jsxs)("div", {
          className: b.tableHeaders,
          children: [(0, n.jsx)(F, {
            children: P.Z.Messages.EMOJI
          }), (0, n.jsx)(F, {
            children: P.Z.Messages.GUILD_SETTINGS_SOUND_NAME_COLUMN
          }), (0, n.jsx)(F, {
            children: P.Z.Messages.GUILD_SETTINGS_SOUND_UPLOADER_COLUMN
          })]
        }), l.map(e => (0, n.jsx)(Y, {
          sound: e,
          isPlaying: !1,
          guild: s,
          onPlaySound: C
        }, e.soundId))]
      })]
    })]
  })
}

function Y(e) {
  let {
    sound: s,
    isPlaying: l,
    onPlaySound: r,
    guild: o
  } = e, {
    soundId: d,
    name: I,
    user: T,
    userId: S,
    emojiId: h,
    emojiName: g
  } = s, C = (0, c.e7)([R.default], () => null != T ? T : R.default.getUser(S), [S, T]), {
    canManageGuildExpression: L
  } = (0, N.XJ)(o), v = i.useMemo(() => L(s), [s, L]), D = null != h || null != g, [Z, j] = i.useState(!1);
  async function G() {
    if (!Z) {
      j(!0);
      try {
        await (0, m.AA)(o.id, d)
      } catch {
        j(!1)
      }
    }
  }
  i.useEffect(() => {
    null == C && e();
    async function e() {
      await (0, E.PR)(S)
    }
  }, [C, S]);
  let B = i.useCallback(() => {
    null != C && (0, x.openUserProfileModal)({
      userId: C.id,
      guildId: o.id,
      analyticsLocation: {
        section: U.jXE.GUILD_SETTINGS_SOUNDBOARD
      }
    })
  }, [C, o.id]);
  return (0, n.jsxs)("div", {
    className: a()(b.row, {
      [b.active]: l
    }),
    children: [D ? (0, n.jsx)(_.Z, {
      emojiId: h,
      emojiName: g,
      className: b.emoji
    }) : (0, n.jsx)(A.Z, {
      className: b.emoji
    }), (0, n.jsx)(u.Clickable, {
      onClick: () => {
        !Z && r(s)
      },
      className: b.soundName,
      children: (0, n.jsxs)(u.Text, {
        variant: "text-sm/normal",
        className: b.soundName,
        children: [I, " ", (0, n.jsx)(M.Z, {
          className: b.soundPreviewIcon
        })]
      })
    }), null != C && (0, n.jsxs)(u.Clickable, {
      className: b.uploader,
      onClick: B,
      children: [(0, n.jsx)(u.Avatar, {
        "aria-label": null == C ? void 0 : C.username,
        size: u.AvatarSizes.SIZE_24,
        className: b.uploaderAvatar,
        src: (0, f.ov)(C, !1, 24)
      }), (0, n.jsx)(u.Text, {
        variant: "text-sm/normal",
        lineClamp: 1,
        children: null == C ? void 0 : C.username
      })]
    }), v ? (0, n.jsxs)("div", {
      className: b.soundEditContainer,
      children: [(0, n.jsx)(u.Clickable, {
        className: b.soundUpdate,
        onClick: function(e) {
          e.stopPropagation(), (0, u.openModalLazy)(async () => {
            let {
              default: e
            } = await Promise.all([t.e("49237"), t.e("99387"), t.e("56035")]).then(t.bind(t, 758961));
            return t => (0, n.jsx)(e, {
              ...t,
              guildId: o.id,
              existingSound: s
            })
          })
        },
        "aria-label": P.Z.Messages.EDIT,
        children: (0, n.jsx)(p.Z, {
          className: b.soundEditIcon
        })
      }), (0, n.jsx)(u.Clickable, {
        className: b.soundRemove,
        onClick: function(e) {
          e.stopPropagation(), (0, u.openModal)(e => (0, n.jsx)(u.ConfirmModal, {
            header: P.Z.Messages.GUILD_SETTINGS_SOUNDBOARD_DELETE_SOUND_TITLE.format({
              soundName: I
            }),
            confirmText: P.Z.Messages.DELETE,
            cancelText: P.Z.Messages.CANCEL,
            onConfirm: G,
            ...e,
            children: (0, n.jsx)(u.Text, {
              variant: "text-md/normal",
              children: P.Z.Messages.GUILD_SETTINGS_SOUNDBOARD_DELETE_SOUND_BODY.format({
                soundName: I
              })
            })
          }))
        },
        "aria-label": P.Z.Messages.REMOVE,
        children: (0, n.jsx)(O.Z, {
          className: b.soundEditIcon
        })
      })]
    }) : null]
  })
}