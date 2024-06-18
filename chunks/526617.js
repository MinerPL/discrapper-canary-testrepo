"use strict";
n.d(t, {
  Z: function() {
    return W
  }
}), n(47120);
var i = n(735250),
  r = n(470079),
  s = n(120356),
  o = n.n(s),
  a = n(442837),
  l = n(552075),
  u = n(481060),
  _ = n(239091),
  d = n(788911),
  c = n(906732),
  E = n(880949),
  I = n(806966),
  T = n(28546),
  h = n(468954),
  S = n(695346),
  f = n(594174),
  N = n(979651),
  A = n(153124),
  m = n(259580),
  O = n(855693),
  R = n(68972),
  C = n(887208),
  p = n(664800),
  g = n(632184),
  L = n(74538),
  v = n(697426),
  D = n(242291),
  M = n(421673),
  P = n(663215),
  y = n(409673),
  U = n(347072),
  b = n(835648),
  G = n(650743),
  w = n(394740),
  k = n(343747),
  B = n(981631),
  x = n(689938),
  V = n(819245);
let Z = [8, 0, 8, 8];

function H(e) {
  return 0 === e ? 16 : 32
}

function F(e) {
  let {
    categoryInfo: t,
    collapsed: n,
    toggleCollapsed: r,
    index: s
  } = e;
  return (0, i.jsx)("div", {
    className: V.sectionContainer,
    children: (0, i.jsx)(u.Clickable, {
      className: o()(V.sectionHeader, {
        [V.notFirstSectionHeader]: 0 !== s
      }),
      onClick: r,
      "aria-expanded": !n,
      children: (0, i.jsxs)("div", {
        className: V.sectionHeaderContent,
        children: [function() {
          switch (t.type) {
            case v.bg.FAVORITES:
              return (0, i.jsx)(C.Z, {
                className: V.headerIcon
              });
            case v.bg.RECENTLY_HEARD:
              return (0, i.jsx)(O.Z, {
                className: V.headerIcon
              });
            case v.bg.FREQUENTLY_USED:
              return (0, i.jsx)(l.I, {
                className: V.headerIcon
              });
            case v.bg.GUILD:
              return (0, i.jsx)(E.Z, {
                guild: t.guild,
                height: 16,
                width: 16
              });
            case v.bg.DEFAULTS:
              return (0, i.jsx)(R.Z, {
                className: V.headerIcon
              });
            case v.bg.SEARCH:
              return (0, i.jsx)(p.Z, {
                className: V.headerIcon
              })
          }
        }(), (0, i.jsx)(u.Heading, {
          variant: "eyebrow",
          color: "none",
          className: V.sectionTitle,
          children: function() {
            switch (t.type) {
              case v.bg.FAVORITES:
                return x.Z.Messages.FAVORITES;
              case v.bg.RECENTLY_HEARD:
                return x.Z.Messages.RECENTLY_HEARD;
              case v.bg.FREQUENTLY_USED:
                return x.Z.Messages.FREQUENTLY_USED;
              case v.bg.GUILD:
                return t.guild.name;
              case v.bg.DEFAULTS:
                return x.Z.Messages.SOUNDBOARD_SOUND_SECTION_DEFAULTS;
              case v.bg.SEARCH:
                return x.Z.Messages.SEARCH_RESULTS_SECTION_LABEL
            }
          }()
        }), (0, i.jsx)(m.Z, {
          className: V.headerIcon,
          direction: n ? m.Z.Directions.RIGHT : m.Z.Directions.DOWN
        })]
      })
    })
  })
}

function Y() {
  return (0, i.jsx)(d.Z, {
    message: x.Z.Messages.SOUNDBOARD_SEARCH_EMPTY_STATE_BODY
  })
}

function j(e) {
  let {
    descriptors: t,
    soundButtonProps: n,
    rowIndex: s,
    isUsingKeyboardNavigation: o,
    suppressPlaySound: a,
    gridRowProps: l,
    getItemProps: u,
    onSelectItem: _,
    onItemMouseEnter: d,
    buttonOverlay: c
  } = e, E = I.Wq.useStore(e => e.inspectedExpressionPosition);
  return (0, i.jsx)("ul", {
    ...l,
    className: V.soundRow,
    children: t.map((e, t) => {
      let i = "item-".concat(t),
        l = o && E.rowIndex === s && E.columnIndex === t;
      switch (e.item.type) {
        case v.vB.SOUND:
          return (0, r.createElement)(y.ZP, {
            ...u(t),
            ...n,
            key: "".concat(i, "-").concat(e.item.sound.soundId),
            sound: e.item.sound,
            suppressPlaySound: a,
            focused: l,
            onMouseEnter: () => d(t),
            onSelectItem: () => _(e),
            enableSecondaryActions: !0,
            buttonOverlay: c
          });
        case v.vB.ADD_SOUND:
          return (0, r.createElement)(U.Z, {
            ...u(t),
            key: i,
            guild: e.item.guild,
            focused: l
          })
      }
    })
  })
}

function W(e) {
  let {
    guildId: t,
    channel: s,
    containerWidth: o,
    onClose: l,
    onSelect: d,
    suppressPlaySound: E = !1,
    shouldShowUpsell: m = !0,
    gridNotice: O,
    soundButtonOverlay: R,
    listPadding: C,
    renderHeader: p,
    defaultSoundsOnly: y = !1
  } = e, {
    analyticsLocations: U
  } = (0, c.ZP)(), [W, K] = r.useState(null), z = (0, a.e7)([f.default], () => f.default.getCurrentUser()), q = (0, a.e7)([N.Z], () => {
    var e;
    return N.Z.getVoiceState(t, null !== (e = null == z ? void 0 : z.id) && void 0 !== e ? e : B.lds)
  }), X = (null == q ? void 0 : q.selfDeaf) || (null == q ? void 0 : q.mute) || (null == q ? void 0 : q.suppress), Q = (0, T.Iu)(e => e.searchQuery), J = (0, A.Dt)(), {
    categories: $
  } = (0, P.ZP)(s, void 0, y), [ee, et] = r.useState([]), en = (0, P.FS)($, ee, Q), ei = S.T4.useSetting(), er = r.useMemo(() => new Set(ei), [ei]), es = null == s, eo = L.ZP.canUseCustomCallSounds(z), ea = r.useCallback(e => {
    er.has(e) ? er.delete(e) : er.add(e), S.T4.updateSetting(Array.from(er))
  }, [er]), el = r.useCallback((e, t) => {
    if (!E && (0, D.Nq)(z, e, s, !1)) {
      var n;
      (0, D.GN)(e, null !== (n = null == s ? void 0 : s.id) && void 0 !== n ? n : B.lds, t)
    } else {
      if ((0, D.Nq)(z, e, s)) return;
      m && K(e)
    }
  }, [E, z, s, m]), eu = r.useCallback(e => {
    switch (e.item.type) {
      case v.vB.SOUND:
        return null == d || d(e.item.sound), el(e.item.sound, U);
      case v.vB.ADD_SOUND:
        return (0, k.Z)(e.item.guild.id)
    }
  }, [U, el, d]), e_ = r.useCallback((e, t, n, r, o) => (0, i.jsx)(j, {
    descriptors: e,
    rowIndex: n.rowIndex,
    isUsingKeyboardNavigation: n.isUsingKeyboardNavigation,
    gridRowProps: t,
    getItemProps: r,
    onItemMouseEnter: o,
    suppressPlaySound: E,
    onSelectItem: eu,
    soundButtonProps: {
      channel: s,
      interactive: es ? eo : !X,
      forceSecondaryActions: es,
      analyticsLocations: U
    },
    buttonOverlay: R
  }, "row-".concat(t["aria-rowindex"])), [eu, s, X, E, U, es, eo, R]), ed = r.useCallback((e, t) => {
    let n = "".concat(e.key);
    return (0, i.jsx)(F, {
      categoryInfo: e.categoryInfo,
      toggleCollapsed: () => ea(n),
      collapsed: er.has(n),
      index: t
    }, "header-".concat(n))
  }, [er, ea]), ec = r.useCallback(e => et((0, M.Z)(e, $, z, s)), [s, z, $]), eE = r.useCallback(e => {
    (0, _.jW)(e, async () => {
      let {
        default: e
      } = await n.e("56049").then(n.bind(n, 338991));
      return t => (0, i.jsx)(e, {
        ...t
      })
    })
  }, []), eI = r.useCallback(() => (0, i.jsx)(u.Clickable, {
    tabIndex: 0,
    className: V.settingsClickArea,
    onClick: eE,
    "aria-label": x.Z.Messages.USER_SETTINGS_SOUNDBOARD_VOLUME,
    children: (0, i.jsx)(g.Z, {
      className: V.settingsIcon
    })
  }), [eE]), eT = r.useCallback(e => (0, i.jsx)(b.Z, {
    soundboardListRef: e,
    categories: $,
    listPadding: C
  }), [$, C]), eh = r.useCallback(e => {
    if ((null == e ? void 0 : e.item.type) === v.vB.SOUND) {
      var t;
      return (0, i.jsx)(G.Z, {
        closePicker: l,
        soundboardSound: null !== (t = null == e ? void 0 : e.item.sound) && void 0 !== t ? t : null
      })
    }
    return null
  }, [l]);
  return (0, i.jsxs)(i.Fragment, {
    children: [null != W && (0, i.jsx)(w.Z, {
      onClose: () => K(null),
      closePopout: l,
      sound: W,
      channel: s
    }), (0, i.jsx)(h.Z, {
      categories: en,
      collapsedCategories: er,
      containerWidth: o,
      store: I.Wq,
      onSelectItem: eu,
      onSearchExpressions: ec,
      hasSearchResults: ee.length > 0,
      defaultSearchPlaceholder: x.Z.Messages.SOUNDBOARD_SEARCH_PLACEHOLDER,
      renderRow: e_,
      renderSectionHeader: ed,
      renderCategoryList: eT,
      renderHeaderAccessories: eI,
      rowHeight: 48,
      sectionHeaderHeight: H,
      listPadding: Z,
      itemNodeWidth: 150,
      gridNavigatorId: J,
      renderEmptySearchState: Y,
      renderInspector: eh,
      gridNotice: O,
      renderHeader: p
    })]
  })
}