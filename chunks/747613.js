"use strict";
n(47120), n(733860);
var i = n(735250),
  r = n(470079),
  s = n(120356),
  o = n.n(s),
  a = n(392711),
  l = n.n(a),
  u = n(920906),
  _ = n(91192),
  d = n(946188),
  c = n(477690),
  E = n(481060),
  I = n(80932),
  T = n(351773),
  h = n(209613),
  S = n(633302),
  f = n(153124),
  N = n(176354),
  A = n(624138),
  m = n(981631),
  O = n(689938),
  R = n(809605);
let C = (0, f.hQ)(),
  p = d.Z.convert.fromCodePoint("1f44f"),
  g = (0, A.Mg)(c.Z.EMOJI_PICKER_CONSTANTS_EMOJI_CONTAINER_PADDING_VERTICAL),
  L = (0, A.Mg)(c.Z.EMOJI_PICKER_CONSTANTS_DIVERSITY_EMOJI_SIZE),
  v = e => {
    let {
      fade: t,
      surrogate: n,
      onClick: r,
      delay: s,
      index: o
    } = e, a = (0, _.JA)("item-".concat(o)), l = N.ZP.getURL(p + n), c = (0, u.useSpring)({
      opacity: 1,
      from: {
        opacity: t ? 0 : 1
      },
      delay: s
    });
    return (0, i.jsx)(E.Clickable, {
      ...a,
      role: "option",
      "aria-selected": 0 === o,
      onClick: () => r(n),
      className: R.diversityEmojiItem,
      children: (0, i.jsx)(u.animated.div, {
        "aria-label": function(e) {
          switch (d.Z.convert.toCodePoint(e)) {
            case "1f3fb":
              return O.Z.Messages.EMOJI_MODIFIER_LIGHT_SKIN_TONE;
            case "1f3fc":
              return O.Z.Messages.EMOJI_MODIFIER_MEDIUM_LIGHT_SKIN_TONE;
            case "1f3fd":
              return O.Z.Messages.EMOJI_MODIFIER_MEDIUM_SKIN_TONE;
            case "1f3fe":
              return O.Z.Messages.EMOJI_MODIFIER_MEDIUM_DARK_SKIN_TONE;
            case "1f3ff":
              return O.Z.Messages.EMOJI_MODIFIER_DARK_SKIN_TONE;
            default:
              return O.Z.Messages.EMOJI_MODIFIER_NONE
          }
        }(n),
        className: R.diversityEmojiItemImage,
        style: {
          backgroundImage: 'url("'.concat(l, '")'),
          ...c
        }
      })
    })
  },
  D = e => {
    let {
      id: t,
      selectedSurrogate: n,
      onClick: s,
      hasTabWrapper: a
    } = e, d = (0, h.Z)("diversity"), c = (0, u.useSpring)({
      height: (L + 2 * g) * (S.gw.length + 1),
      from: {
        height: L
      },
      config: {
        duration: 125
      }
    });
    r.useEffect(() => {
      d.focusFirstVisibleItem()
    }, [d]);
    let E = ["", ...S.gw];
    return l().remove(E, e => e === n), E.unshift(n), (0, i.jsx)(_.bG, {
      navigator: d,
      children: (0, i.jsx)(_.SJ, {
        children: e => {
          let {
            ref: n,
            ...r
          } = e;
          return (0, i.jsx)(u.animated.div, {
            ...r,
            id: t,
            ref: n,
            className: o()(R.diversitySelectorOptions, {
              [R.diversitySelectorOptionsHasTabWrapper]: a
            }),
            style: c,
            role: "listbox",
            children: E.map((e, t) => (0, i.jsx)(v, {
              index: t,
              fade: 0 !== t,
              delay: 20 * t,
              surrogate: e,
              onClick: s
            }, t))
          })
        }
      })
    })
  };
t.Z = e => {
  let {
    searchBarRef: t,
    selectedSurrogate: n,
    className: s,
    hasTabWrapper: o
  } = e, a = N.ZP.getURL(p + n), [l, u] = r.useState(!1), _ = (0, T.Z)(null, () => u(!1)), d = r.useRef(null);
  return (0, i.jsxs)("div", {
    ref: _,
    className: s,
    children: [(0, i.jsx)(E.Clickable, {
      innerRef: d,
      className: R.diversitySelectorButton,
      onClick: () => {
        u(!0)
      },
      "aria-label": O.Z.Messages.EMOJI_MODIFIER_MENU_BUTTON,
      "aria-haspopup": !0,
      "aria-expanded": l,
      "aria-controls": C,
      tabIndex: l ? -1 : 0,
      children: (0, i.jsx)("div", {
        className: R.diversityEmojiItemImage,
        style: {
          backgroundImage: 'url("'.concat(a, '")')
        }
      })
    }), l ? (0, i.jsx)("div", {
      onKeyDown: e => {
        e.keyCode === m.yXg.ESCAPE && (e.stopPropagation(), u(!1), null != d.current && d.current.focus())
      },
      children: (0, i.jsx)(D, {
        id: C,
        hasTabWrapper: o,
        selectedSurrogate: n,
        onClick: e => {
          var n;
          (0, I.t0)(e), u(!1), null === (n = t.current) || void 0 === n || n.focus()
        }
      })
    }) : null]
  })
}