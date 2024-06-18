"use strict";
n.d(t, {
  K_: function() {
    return P
  },
  hU: function() {
    return M
  }
});
var i = n(735250),
  r = n(470079),
  s = n(120356),
  o = n.n(s),
  a = n(91192),
  l = n(442837),
  u = n(846519),
  _ = n(692547),
  d = n(481060),
  c = n(596454),
  E = n(607070),
  I = n(745510),
  T = n(594174),
  h = n(225196),
  S = n(887208),
  f = n(897353),
  N = n(729285),
  A = n(632184),
  m = n(208049),
  O = n(763296),
  R = n(697426),
  C = n(242291),
  p = n(706667),
  g = n(286654),
  L = n(675654),
  v = n(689938),
  D = n(375513);

function M(e) {
  let {
    disabled: t = !1,
    onClick: n,
    text: r,
    children: s,
    tooltipPosition: a = "top"
  } = e;
  return (0, i.jsx)(d.Tooltip, {
    text: r,
    position: a,
    children: e => (0, i.jsx)(d.Clickable, {
      ...e,
      "aria-label": r,
      className: o()(D.secondaryButton, {
        [D.buttonDisabled]: t
      }),
      onClick: n,
      children: s
    })
  })
}

function P(e) {
  let {
    sound: t,
    previewSound: n,
    disabled: r = !1,
    tooltipPosition: s = "top"
  } = e;
  return (0, i.jsx)(M, {
    tooltipPosition: s,
    disabled: r,
    onClick: function(e) {
      e.stopPropagation(), e.currentTarget.blur(), n()
    },
    text: v.Z.Messages.SOUNDBOARD_SOUND_PREVIEW_SOUND.format({
      emojiName: t.emojiName,
      soundName: t.name
    }),
    children: (0, i.jsx)(A.Z, {
      className: D.secondaryIcon
    })
  })
}
t.ZP = r.forwardRef(function(e, t) {
  var n, s, A;
  let {
    sound: y,
    channel: U,
    className: b,
    focused: G,
    forceSecondaryActions: w = !1,
    interactive: k = !0,
    enableSecondaryActions: B = !1,
    suppressPlaySound: x,
    onMouseEnter: V,
    onSelectItem: Z,
    analyticsLocations: H,
    buttonOverlay: F = R.Pb.PLAY,
    ...Y
  } = e, {
    soundId: j,
    name: W,
    emojiId: K,
    emojiName: z
  } = y, q = (0, l.e7)([T.default], () => T.default.getCurrentUser()), X = (0, g.z)(y, null == U ? void 0 : U.guild_id), {
    playSoundboardSound: Q,
    previewSound: J,
    isPlayingSound: $
  } = (0, p.Z)(y, null !== (n = null == U ? void 0 : U.id) && void 0 !== n ? n : null), {
    createMultipleConfettiAt: ee
  } = r.useContext(I.h), et = r.useRef(null);
  let en = (s = y.soundId, A = et.current, r.useMemo(() => {
      if (null == A || "1" !== s) return {
        x: 0,
        y: 0
      };
      let e = A.getBoundingClientRect();
      return {
        x: e.left + e.width / 2,
        y: e.top + e.height / 2
      }
    }, [A, s])),
    ei = (0, l.e7)([E.Z], () => E.Z.useReducedMotion),
    er = r.useRef(.01),
    es = r.useRef(new u.Xp),
    eo = "1" === y.soundId,
    ea = (0, l.e7)([O.Z], () => O.Z.isFavoriteSound(j), [j]),
    el = "sound-".concat(y.soundId),
    eu = (0, a.JA)(el),
    e_ = null != K || null != z,
    ed = !(0, C.Nq)(q, y, U),
    ec = w || B && !ed;

  function eE(e) {
    e.stopPropagation(), e.currentTarget.blur(), ea ? (0, m.hs)(j) : (0, m.TB)(j)
  }

  function eI() {
    return (0, i.jsx)(M, {
      disabled: !k && !w,
      onClick: eE,
      text: v.Z.Messages.SOUNDBOARD_SOUND_FAVORITE_SOUND.format({
        emojiName: y.emojiName,
        soundName: y.name
      }),
      children: ea ? (0, i.jsx)(S.Z, {
        className: o()(D.secondaryIcon, D.favoriteIconFavorite),
        color: _.Z.unsafe_rawColors.GOLD.css
      }) : (0, i.jsx)(h.Z, {
        className: D.secondaryIcon
      })
    })
  }
  let eT = P({
      sound: y,
      previewSound: J,
      disabled: ed
    }),
    eh = () => (0, i.jsxs)("div", {
      className: D.buttonOverlay,
      children: [(0, i.jsx)("div", {
        className: o()({
          [D.buttonOverlayBackground]: !x
        })
      }), (0, i.jsxs)("div", {
        className: D.buttonOverlayActions,
        children: [ec && eT, !x && !ed && (0, i.jsx)(f.Z, {
          className: D.playIcon
        }), ec && eI()]
      })]
    });
  return r.useEffect(() => {
    let e = es.current;
    return eo && e.start(1e3, () => {
      er.current = Math.max(er.current - .01, .01)
    }), () => e.stop()
  }, [eo]), (0, i.jsxs)("li", {
    ref: t,
    className: D.soundButtonWrapper,
    onMouseEnter: V,
    children: [(0, i.jsxs)(d.ClickableContainer, {
      ...Y,
      buttonProps: {
        ...eu,
        id: el,
        role: "button"
      },
      "aria-label": v.Z.Messages.SOUNDBOARD_PLAY_SOUND.format({
        emojiName: y.emojiName,
        soundName: y.name
      }),
      className: o()(b, D.soundButton, {
        [D.playing]: $,
        [D.hoverActiveBackground]: x,
        [D.soundButtonInteractive]: k,
        [D.buttonDisabled]: !k && !w,
        [D.premiumDisabled]: ed && !w,
        [D.buttonDisabledSecondaryActionsEnabled]: !k && w,
        [D.focused]: k && G
      }),
      onClick: function() {
        if (eo && !ei && (er.current = Math.min(er.current + .01, .1), Math.random() < er.current && ee(en.x, en.y, void 0, void 0, {
            sprite: L.vv
          })), null != Z) {
          Z();
          return
        }
        x || Q(H)
      },
      onContextMenu: B && !ed ? X : void 0,
      children: [(0, i.jsxs)("div", {
        className: D.soundInfo,
        "aria-hidden": !0,
        ref: et,
        children: [e_ && (0, i.jsx)(c.Z, {
          emojiId: K,
          emojiName: z,
          className: D.emoji
        }), (0, i.jsx)(d.Text, {
          variant: "text-xs/medium",
          color: k ? "header-primary" : "text-muted",
          className: o()(D.soundName, {
            [D.hasEmoji]: e_
          }),
          children: W
        })]
      }), function() {
        switch (F) {
          case R.Pb.ADD:
            return (0, i.jsxs)("div", {
              className: D.addButtonOverlay,
              children: [(0, i.jsx)("div", {
                className: D.buttonOverlayBackground
              }), (0, i.jsxs)("div", {
                className: D.buttonOverlayActions,
                children: [eT, (0, i.jsxs)("div", {
                  className: D.addButton,
                  children: [(0, i.jsx)(N.Z, {
                    className: D.plusSign
                  }), (0, i.jsx)(d.Text, {
                    variant: "text-xs/medium",
                    color: "header-primary",
                    children: v.Z.Messages.GIFT_SELECT_SOUNDBOARD_ADD
                  })]
                }), ec && eI()]
              })]
            });
          case R.Pb.PLAY:
          default:
            return eh()
        }
      }()]
    }), !y.available && (0, i.jsx)(d.Tooltip, {
      text: v.Z.Messages.SOUNDBOARD_SOUND_DISABLED_PREMIUM_TIER_LOST,
      children: e => (0, i.jsx)("div", {
        className: D.unavailableTooltip,
        ...e
      })
    })]
  })
})