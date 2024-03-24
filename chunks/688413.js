"use strict";
s.r(t), s.d(t, {
  default: function() {
    return V
  }
}), s("222007");
var a = s("37983"),
  n = s("884691"),
  l = s("414456"),
  i = s.n(l),
  r = s("446674"),
  o = s("669491"),
  d = s("77078"),
  u = s("823411"),
  c = s("133403"),
  S = s("161454"),
  E = s("810549"),
  T = s("546463"),
  f = s("686470"),
  _ = s("941886"),
  m = s("931138"),
  g = s("398288"),
  h = s("462579"),
  N = s("867544"),
  I = s("907566"),
  p = s("267675"),
  C = s("688342"),
  A = s("486952"),
  O = s("599110"),
  x = s("117362"),
  R = s("773336"),
  M = s("161778"),
  D = s("49111"),
  v = s("782340"),
  L = s("148277"),
  P = s("678016"),
  j = s("125047"),
  b = s("685691"),
  U = s("890957");
let y = r.default.connectStores([M.default], () => ({
    theme: M.default.theme
  }))(_.default),
  B = (0, R.isWindows)();

function F(e) {
  let {
    onClose: t
  } = e, s = (0, r.useStateFromStores)([S.default], () => S.default.getCandidateGames()), [l, o] = n.useState(null), c = s.map(e => ({
    value: e.pid,
    label: null != e.name ? e.name : ""
  }));
  return (0, a.jsxs)(d.Dialog, {
    className: i(L.addGamePopout, P.elevationBorderHigh),
    "aria-label": v.default.Messages.SETTINGS_GAMES_ADD_NEW_GAME,
    children: [(0, a.jsx)(d.SearchableSelect, {
      placeholder: v.default.Messages.SELECT,
      value: l,
      options: c,
      onChange: function(e) {
        o(e)
      }
    }), (0, a.jsx)(d.FormDivider, {
      className: i(U.marginTop8, U.marginBottom8)
    }), (0, a.jsxs)("div", {
      className: i(L.actions, j.horizontal),
      children: [(0, a.jsx)(d.Button, {
        className: L.cancelButton,
        look: d.ButtonLooks.LINK,
        color: d.ButtonColors.PRIMARY,
        onClick: t,
        children: v.default.Messages.CANCEL
      }), (0, a.jsx)(d.Button, {
        disabled: null == l,
        onClick: function() {
          null != l && (u.default.addGame(l), t())
        },
        children: v.default.Messages.SETTINGS_GAMES_ADD_NEW_GAME
      })]
    })]
  })
}

function G(e) {
  var t;
  let {
    rawGame: s,
    nowPlaying: l = !1,
    isOverride: E
  } = e, _ = (0, r.useStateFromStoresObject)([T.default, S.default, f.default], () => (0, S.transformForGameSettings)(s)), [x, R] = n.useState(!1), [M, P] = n.useState(null !== (t = _.name) && void 0 !== t ? t : "???"), U = i(j.flexCenter, {
    [L.game]: !l,
    [L.activeGame]: l,
    [b.card]: !l,
    [L.nowPlaying]: null != _ && l
  });

  function y() {
    u.default.deleteEntry(_)
  }

  function F() {
    _.name !== M && u.default.editName(_, M)
  }

  function G(e) {
    13 === e.keyCode && (e.currentTarget.blur(), e.preventDefault())
  }

  function k() {
    u.default.toggleDetection(_)
  }

  function H() {
    if (x) return;
    let e = null != _.id ? T.default.getDetectableGame(_.id) : null;
    O.default.track(D.AnalyticEvents.USER_SETTINGS_REPORT_INCORRECT_GAME_DETECTION, {
      application_id: null == e ? void 0 : e.id,
      game_name: _.name
    }), (0, d.showToast)((0, d.createToast)(v.default.Messages.SETTINGS_GAMES_REPORT_INCORRECT_DETECTION_CONFIRMATION.format({
      gameName: _.name
    }), d.ToastType.SUCCESS)), R(!0)
  }
  return (0, a.jsxs)("div", {
    className: U,
    children: [(0, a.jsxs)("div", {
      className: i(L.gameNameLastPlayed, j.vertical),
      children: [_.verified && !E ? (0, a.jsxs)("div", {
        className: L.detectedApplication,
        children: [(0, a.jsx)("div", {
          className: L.gameName,
          children: _.name
        }), (0, a.jsx)(d.Tooltip, {
          text: v.default.Messages.SETTINGS_GAMES_VERIFIED_ICON,
          children: e => (0, a.jsx)(m.default, {
            className: L.gameVerifiedIcon,
            size: 18,
            color: o.default.unsafe_rawColors.BRAND_500.css,
            ...e,
            children: (0, a.jsx)(A.default, {
              width: 18,
              height: 18,
              color: o.default.unsafe_rawColors.WHITE_500.css
            })
          })
        })]
      }) : (0, a.jsx)("input", {
        className: i(L.gameName, L.gameNameInput),
        type: "text",
        maxLength: 128,
        value: M,
        onBlur: F,
        onKeyDown: G,
        onChange: e => P(e.target.value)
      }), function() {
        let e;
        let {
          played: t,
          exePath: s
        } = _;
        return l ? e = v.default.Messages.SETTINGS_GAMES_NOW_PLAYING_STATE : null != t && "" !== t && (e = v.default.Messages.SETTINGS_GAMES_LAST_PLAYED.format({
          when: t
        })), (0, a.jsx)("div", {
          className: L.lastPlayed,
          children: (0, a.jsx)(g.default, {
            hoverText: null != s && "" !== s ? s.toUpperCase() : "",
            children: e
          })
        })
      }()]
    }), E ? null : x ? null : (0, a.jsx)("div", {
      className: i(j.flexCenter, j.noWrap, j.justifyBetween, L.toggleContainer),
      children: (0, a.jsx)(d.Tooltip, {
        text: v.default.Messages.SETTINGS_GAMES_REPORT_INCORRECT_DETECTION,
        children: e => {
          let {
            onMouseEnter: t,
            onMouseLeave: s
          } = e;
          return (0, a.jsx)(d.Clickable, {
            "aria-label": v.default.Messages.SETTINGS_GAMES_REPORT_INCORRECT_DETECTION,
            className: L.toggleIcon,
            onClick: H,
            onMouseEnter: t,
            onMouseLeave: s,
            children: (0, a.jsx)(I.default, {
              className: L.toggleIconOn,
              foreground: L.fill,
              width: 24,
              height: 24
            })
          })
        }
      })
    }), function() {
      let {
        detectable: e
      } = _, t = e ? (0, a.jsx)(h.default, {
        className: L.toggleIconOn,
        foreground: L.fill,
        width: 24,
        height: 24
      }) : (0, a.jsx)(N.default, {
        className: L.toggleIconOff,
        background: L.fill,
        foreground: L.fill,
        width: 24,
        height: 24
      });
      return (0, a.jsx)("div", {
        className: i(j.flexCenter, j.noWrap, j.justifyBetween, L.toggleContainer),
        children: (0, a.jsx)(d.Tooltip, {
          text: v.default.Messages.SETTINGS_GAMES_TOGGLE_DETECTION,
          children: e => {
            let {
              onMouseEnter: s,
              onMouseLeave: n
            } = e;
            return (0, a.jsx)(d.Clickable, {
              "aria-label": v.default.Messages.SETTINGS_GAMES_TOGGLE_DETECTION,
              className: L.toggleIcon,
              onClick: k,
              onMouseEnter: s,
              onMouseLeave: n,
              children: t
            })
          }
        })
      })
    }(), function() {
      if (!B) return null;
      let {
        overlay: e,
        overlayWarn: t
      } = _, s = e ? (0, a.jsx)(p.default, {
        className: L.toggleIconOn,
        foreground: L.fill
      }) : (0, a.jsx)(C.default, {
        className: L.toggleIconOff,
        foreground: L.fill
      }), n = t ? (0, a.jsx)(d.Tooltip, {
        text: v.default.Messages.SETTINGS_GAMES_OVERLAY_WARNING,
        children: e => (0, a.jsx)("i", {
          className: L.overlayWarningIcon,
          ...e
        })
      }) : null;
      return (0, a.jsxs)("div", {
        className: i(j.flexCenter, j.noWrap, j.justifyBetween, L.toggleContainer),
        children: [n, (0, a.jsx)(d.Tooltip, {
          text: v.default.Messages.SETTINGS_GAMES_TOGGLE_OVERLAY,
          children: t => {
            let {
              onMouseEnter: n,
              onMouseLeave: l
            } = t;
            return (0, a.jsx)(d.Clickable, {
              "aria-label": v.default.Messages.SETTINGS_GAMES_TOGGLE_OVERLAY,
              className: L.toggleIcon,
              onClick: () => {
                var t;
                return t = !e, void u.default.toggleOverlay(_, t)
              },
              onMouseEnter: n,
              onMouseLeave: l,
              children: s
            })
          }
        })]
      })
    }(), !l || E ? (0, a.jsx)(c.default, {
      className: L.removeGame,
      onClick: y
    }) : null]
  })
}

function k() {
  return (0, a.jsx)("div", {
    className: i(j.flexCenter, L.notDetected, L.activeGame),
    children: (0, a.jsxs)("div", {
      className: i(L.gameNameLastPlayed, j.vertical),
      children: [(0, a.jsx)("div", {
        className: L.gameName,
        children: v.default.Messages.SETTINGS_GAMES_NO_GAME_DETECTED
      }), (0, a.jsx)("div", {
        className: L.lastPlayed,
        children: v.default.Messages.SETTINGS_GAMES_NOT_PLAYING
      })]
    })
  })
}

function H(e) {
  let {
    children: t
  } = e;
  return (0, a.jsxs)(y, {
    className: U.marginTop40,
    children: [(0, a.jsx)(_.EmptyStateImage, {
      darkSrc: s("867369"),
      lightSrc: s("200324"),
      width: 430,
      height: 250
    }), t]
  })
}
let w = (0, x.cachedFunction)(function() {
  for (var e = arguments.length, t = Array(e), s = 0; s < e; s++) t[s] = arguments[s];
  return new Set(t.map(e => e.exePath))
});
var V = function() {
  let e = (0, r.useStateFromStoresArray)([S.default], () => S.default.getGamesSeen(!0)),
    {
      runningGame: t,
      overrideExePaths: s
    } = (0, r.useStateFromStoresObject)([S.default], () => ({
      runningGame: S.default.getVisibleGame(),
      overrideExePaths: w(...S.default.getOverrides())
    }));
  return n.useEffect(() => ((0, E.watchCandidateGames)(), E.stopWatchingCandidateGames), []), (0, a.jsxs)(d.FormSection, {
    tag: "h1",
    title: v.default.Messages.REGISTERED_GAMES,
    children: [null != t ? (0, a.jsx)(G, {
      rawGame: t,
      isOverride: s.has(t.exePath),
      nowPlaying: !0
    }, (0, S.gameKey)(t)) : (0, a.jsx)(k, {}), (0, a.jsxs)("div", {
      className: i(L.nowPlayingAdd, U.marginReset, U.marginTop8, U.marginBottom20),
      children: [(0, a.jsx)("span", {
        children: v.default.Messages.SETTINGS_GAMES_NOT_SEEING_GAME
      }), (0, a.jsx)(d.Popout, {
        renderPopout: e => {
          let {
            closePopout: t
          } = e;
          return (0, a.jsx)(F, {
            onClose: t
          })
        },
        align: "center",
        position: "bottom",
        children: e => (0, a.jsx)(d.Button, {
          ...e,
          look: d.ButtonLooks.LINK,
          size: d.ButtonSizes.MIN,
          color: d.ButtonColors.LINK,
          children: v.default.Messages.SETTINGS_GAMES_ADD_GAME
        })
      })]
    }), 0 === e.length ? (0, a.jsx)(H, {
      children: (0, a.jsx)(_.EmptyStateText, {
        children: v.default.Messages.SETTINGS_GAMES_NO_GAMES_HEADER
      })
    }) : (0, a.jsxs)(d.FormSection, {
      className: U.marginTop40,
      children: [(0, a.jsx)(d.FormTitle, {
        className: U.marginBottom4,
        children: v.default.Messages.SETTINGS_GAMES_ADDED_GAMES_LABEL
      }), e.map(e => (0, a.jsx)(G, {
        rawGame: e,
        isOverride: s.has(e.exePath)
      }, (0, S.gameKey)(e)))]
    })]
  })
}