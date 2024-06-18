"use strict";
n.d(t, {
  V: function() {
    return G
  }
}), n(47120);
var i = n(735250),
  r = n(470079),
  s = n(120356),
  o = n.n(s),
  a = n(423802),
  l = n(372817),
  u = n(924826),
  _ = n(91192),
  d = n(260866),
  c = n(693789),
  E = n(1561),
  I = n(84735),
  T = n(15127),
  h = n(766646),
  S = n(742746),
  f = n(235874),
  N = n(922770),
  A = n(993365),
  m = n(393238),
  O = n(434650),
  R = n(98650),
  C = n(863840),
  p = n(86813),
  g = n(826026),
  L = n(263704),
  v = n(441674),
  D = n(465670),
  M = n(748585),
  P = n(689938),
  y = n(46257);
let U = {
  keys: ["label"]
};

function b(e) {
  return e.label
}
let G = r.forwardRef(function(e, t) {
  let {
    options: n,
    value: s,
    onChange: l,
    clearable: d = !1,
    multi: c = !1,
    closeOnSelect: h = !0,
    onOpen: S,
    onClose: N,
    placeholder: A = P.Z.Messages.SELECT,
    wrapperClassName: R,
    className: L,
    isDisabled: v = !1,
    maxVisibleItems: G = 7,
    look: k = M.q.FILLED,
    autoFocus: V = !1,
    popoutPosition: Z = "bottom",
    filter: Y = !0,
    debounceTime: j,
    renderOptionLabel: W = b,
    onSearchChange: K,
    renderOptionPrefix: z = () => null,
    renderOptionSuffix: q = () => null,
    "aria-describedby": X,
    "aria-invalid": Q,
    "aria-labelledby": J,
    "aria-required": $,
    inputClassNames: ee,
    centerCaret: et = !1,
    onBlur: en,
    matchSorterOptions: ei,
    clearQueryOnSelect: er = !1,
    hidePills: es,
    renderCustomPill: eo,
    customPillContainerClassName: ea,
    ...el
  } = e, {
    ref: eu,
    width: e_
  } = (0, m.Z)(), {
    titleId: ed,
    errorId: ec,
    error: eE
  } = (0, T.Gc)(), {
    ref: eI,
    width: eT
  } = (0, m.Z)(), eh = r.useRef(null), [eS, ef] = r.useState(null), [eN, eA] = r.useState(!1), [em, eO] = r.useState(null), [eR, eC] = r.useState(!1), ep = r.useRef(null), eg = r.useRef(null), {
    options: eL,
    loading: ev,
    onQueryChange: eD
  } = function(e) {
    let {
      active: t,
      loadableOptions: n,
      debounceTime: i
    } = e, s = "function" == typeof n, [o, a] = r.useState({
      options: s ? [] : n,
      query: "",
      debouncedQuery: "",
      loading: !1
    }), {
      options: l,
      loading: u,
      query: _,
      debouncedQuery: d
    } = o, c = r.useCallback(e => a(t => ({
      ...t,
      loading: s,
      query: e,
      debouncedQuery: e
    })), [s]);
    return r.useEffect(() => {
      t && c("")
    }, [t, c]), r.useEffect(() => {
      let e;
      return s ? (a(e => ({
        ...e,
        loading: !0,
        debouncedQuery: null
      })), e = setTimeout(() => {
        c(_)
      }, null != i ? i : 500)) : c(_), () => {
        clearTimeout(e)
      }
    }, [s, _, i, c]), r.useEffect(() => {
      let e = !1;
      return t && null !== d && ("function" == typeof n ? n(d) : Promise.resolve(n)).then(t => {
        !e && a(e => ({
          ...e,
          options: t,
          loading: !1
        }))
      }), () => {
        e = !0
      }
    }, [t, n, d]), {
      options: l,
      loading: u,
      onQueryChange: r.useCallback(e => {
        a(t => ({
          ...t,
          query: e
        }))
      }, [])
    }
  }({
    active: eN,
    loadableOptions: n,
    debounceTime: j
  }), eM = r.useMemo(() => {
    var e, t;
    return e = eL, null == (t = s) ? [] : (Array.isArray(t) ? t : [t]).map(t => "object" == typeof t && (null == t || "value" in t) ? t : e.find(e => e.value === t)).filter(Boolean)
  }, [eL, s]), eP = r.useMemo(() => eM.map(e => e.value), [eM]), ey = eM[eM.length - 1], eU = (0, C.Z)(ey), eb = r.useId(), eG = r.useId(), ew = r.useId(), ek = r.useCallback(e => {
    eN !== e && !v && (eA(e), e ? null == S || S() : null == N || N())
  }, [v, N, S, eN]), eB = r.useCallback(e => {
    eN && !e && ek(!1)
  }, [ek, eN]), ex = (0, O.O)(eB);
  r.useImperativeHandle(t, () => ({
    close() {
      ek(!1)
    }
  }));
  let eV = r.useCallback((e, t) => {
      let n = document.querySelector(e),
        i = ep.current;
      ef(t), null != i && null != n && i.scrollIntoViewNode({
        node: n
      })
    }, []),
    eZ = r.useCallback(() => new Promise(e => {
      let t = ep.current;
      if (null == t) return e();
      t.scrollToTop({
        callback: () => requestAnimationFrame(() => e())
      })
    }), []),
    eH = r.useCallback(() => new Promise(e => {
      let t = ep.current;
      if (null == t) return e();
      t.scrollToBottom({
        callback: () => requestAnimationFrame(() => e())
      })
    }), []),
    eF = (0, u.ZP)({
      id: eG,
      defaultFocused: null != ey ? String(ey.value) : void 0,
      scrollToStart: eZ,
      scrollToEnd: eH,
      isEnabled: eN,
      wrap: !0,
      useVirtualFocus: !0,
      setFocus: eV,
      disableClickOnSpace: !0
    }),
    eY = (0, C.Z)(eF),
    ej = (0, C.Z)(eL);
  r.useEffect(() => {
    let e = ej.current,
      t = eU.current;
    eN && null != t && !ev && requestAnimationFrame(() => {
      let n = ep.current,
        i = e.indexOf(t);
      null == n || n.scrollToIndex({
        section: 0,
        row: i
      })
    })
  }, [eN, ev]), r.useEffect(() => {
    let e = eY.current;
    if (eN && !ev) {
      var t;
      let n = eh.current;
      if (null != n) {
        n.focus();
        let {
          value: e
        } = n;
        n.value = " ", n.value = e
      }
      ef(null !== (t = e.focusedItemId()) && void 0 !== t ? t : null)
    } else {
      let t = eU.current,
        n = null != t ? String(t.value) : null;
      e.setFocus(n), ef(null)
    }
  }, [eN, ev]), r.useLayoutEffect(() => {
    !eN && (c ? eO("") : null != ey && eO(ey.label))
  }, [c, ey, eN]), r.useLayoutEffect(() => {
    c && eO("")
  }, [c, eM.length]);
  let eW = r.useCallback(function(e) {
    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
    if (null == e) {
      l(c ? [] : void 0);
      return
    }
    let i = "function" == typeof n,
      r = i ? eL.find(t => t.value === e) : e;
    if (c) {
      let n = null != s ? s : [];
      if (n.some(t => (i ? t.value : t) === e) ? l(n.filter(t => (i ? t.value : t) !== e)) : l([...n, r]), t) {
        var o;
        null === (o = eh.current) || void 0 === o || o.focus()
      }
    } else l(r);
    ef(null), (!c || h) && ek(!1), eC(!1), er && eO("")
  }, [n, eL, c, h, er, l, s, ek]);
  r.useLayoutEffect(() => {
    if (V) {
      var e;
      null === (e = eh.current) || void 0 === e || e.focus()
    }
  }, [V]);
  let eK = r.useCallback(() => {
      eO(""), eW(null), ek(!0)
    }, [eW, ek]),
    ez = r.useCallback(e => {
      switch (e.key) {
        case "Escape":
          eN && (e.stopPropagation(), ek(!1));
          break;
        case "ArrowDown":
        case "ArrowUp":
          ek(!0)
      }
    }, [ek, eN]),
    eq = eL;
  eR && null != em && !1 !== Y && (eq = "function" == typeof Y ? Y(eL, em) : (0, a.Lu)(eL, em, null != ei ? ei : U)), r.useEffect(() => {
    let e = ep.current;
    null == e || e.scrollToTop()
  }, [em]), r.useEffect(() => {
    !ev && eR && null !== em && requestAnimationFrame(() => eF.focusFirstVisibleItem())
  }, [ev, eR, em]);
  let eX = c ? F : H,
    eQ = r.useRef(null),
    {
      focusPreviousItem: eJ,
      focusNextItem: e$
    } = B(eQ, eh, eM);
  return (0, i.jsxs)(_.bG, {
    navigator: eF,
    children: [(0, i.jsx)(f.y, {
      spacing: 0,
      animation: f.y.Animation.NONE,
      shouldShow: eN,
      onRequestClose: () => ek(!1),
      layerContext: el.popoutLayerContext,
      renderPopout: e => {
        let {
          closePopout: t,
          position: n,
          updatePosition: r
        } = e;
        return (0, i.jsx)(w, {
          loading: ev,
          multi: !!c,
          listRef: ep,
          listId: eb,
          maxVisibleItems: G,
          width: eT,
          selectedValues: eP,
          closePopout: t,
          onSelect: eW,
          closeOnSelect: h,
          options: eq,
          activeDescendant: eS,
          renderOptionLabel: W,
          updatePosition: r,
          popoutPosition: n,
          renderOptionPrefix: z,
          renderOptionSuffix: q
        })
      },
      position: Z,
      children: (e, t) => {
        let {
          "aria-expanded": n,
          "aria-controls": r
        } = e, {
          isShown: s,
          position: a
        } = t, l = s ? g.Z : p.Z, {
          ref: u,
          onKeyDown: _
        } = eF.containerProps;
        return (0, i.jsxs)("div", {
          ref: eg,
          className: o()(R, y.wrapper),
          style: {
            "--icons-width": "".concat(e_, "px")
          },
          onBlur: e => {
            var t, n, i;
            if (!((null === (t = eg.current) || void 0 === t ? void 0 : t.contains(e.relatedTarget)) || (null === (i = ep.current) || void 0 === i ? void 0 : null === (n = i.getScrollerNode()) || void 0 === n ? void 0 : n.contains(e.relatedTarget)))) !c && null != ey && eO(ey.label), eC(!1), ek(!1), null == en || en(e)
          },
          children: [(0, i.jsx)(I.t, {
            ringTarget: eI,
            focusTarget: eh,
            offset: 4,
            children: (0, i.jsx)("div", {
              onClick: v ? void 0 : e => {
                e.stopPropagation(), e.preventDefault(), eO(""), ek(!0)
              },
              onMouseDown: e => {
                e.preventDefault()
              },
              ref: e => {
                eI.current = e, ex.current = e
              },
              className: o()(y.select, y.searchable, L, {
                [y.open]: s,
                [y.lookFilled]: k === M.q.FILLED,
                [y.disabled]: v,
                [y.multi]: c,
                [y.selectPositionTop]: "top" === a
              }),
              children: (0, i.jsx)("div", {
                className: o()(y.value, {
                  [y.multi]: c
                }),
                children: (0, i.jsx)(eX, {
                  query: em,
                  selectedOptions: eM,
                  loading: ev,
                  renderOptionPrefix: z,
                  renderOptionSuffix: q,
                  isDisabled: v,
                  isEditing: eR,
                  inputRef: eh,
                  "aria-describedby": null != X ? X : ec,
                  "aria-required": $,
                  "aria-invalid": null != Q ? Q : null != eE,
                  "aria-labelledby": null != J ? J : ed,
                  "aria-expanded": n,
                  setInputRef: e => {
                    u.current = e, eh.current = e
                  },
                  onFocus: () => {
                    var e, t;
                    null === (e = eh.current) || void 0 === e || e.setSelectionRange(0, null !== (t = null == em ? void 0 : em.length) && void 0 !== t ? t : 0)
                  },
                  onChange: e => {
                    eD(e), null == K || K(e), eO(e), ek(!0), eC(!0)
                  },
                  onKeyDown: e => {
                    var t;
                    null === (t = el.onKeyDown) || void 0 === t || t.call(el, e), _(e), ez(e)
                  },
                  activeDescendant: eS,
                  placeholder: A,
                  inputId: ew,
                  listboxId: eb,
                  navigatorId: eG,
                  selectValue: function(e) {
                    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
                    eW(e, t)
                  },
                  inputClassNames: ee,
                  hidePills: es
                })
              })
            })
          }), (0, i.jsxs)("div", {
            className: o()(y.icons, {
              [y.multi]: c,
              [y.iconsContainer]: !et
            }),
            ref: eu,
            children: [d && (null != em && "" !== em || eM.length > 0) ? (0, i.jsx)(E.P, {
              "aria-label": P.Z.Messages.CLEAR,
              "aria-controls": ew,
              onClick: eK,
              children: (0, i.jsx)(D.Z, {
                width: 16,
                height: 16,
                className: y.clear
              })
            }) : null, (0, i.jsx)(E.P, {
              className: o()({
                [y.iconsCenter]: et
              }),
              "aria-label": eN ? P.Z.Messages.CLOSE : P.Z.Messages.OPEN,
              "aria-controls": ew,
              onClick: () => {
                ek(!eN)
              },
              children: (0, i.jsx)(l, {
                className: y.dropdownIcon
              })
            })]
          })]
        })
      }
    }), eM.length > 0 && null != eo && (0, i.jsx)("div", {
      children: (0, i.jsx)(x, {
        listRef: eQ,
        selectedOptions: eM,
        selectValue: function(e) {
          let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
          eW(e, t)
        },
        focusNextItem: e$,
        focusPreviousItem: eJ,
        renderCustomPill: eo,
        customPillContainerClassName: ea
      })
    })]
  })
});

function w(e) {
  let {
    onSelect: t,
    closePopout: n,
    selectedValues: s,
    options: a,
    width: l,
    maxVisibleItems: u,
    activeDescendant: d,
    listRef: c,
    listId: E,
    renderOptionLabel: I,
    updatePosition: T,
    loading: h = !1,
    multi: f,
    popoutPosition: m,
    closeOnSelect: O,
    renderOptionPrefix: C = () => null,
    renderOptionSuffix: p = () => null
  } = e, g = r.useRef(null), L = r.useCallback(e => {
    t(e), O && n()
  }, [O, n, t]);
  return ((0, R.Z)(T), h) ? (0, i.jsx)("div", {
    "aria-busy": !0,
    className: o()(y.popout, y.loading, {
      [y.popoutPositionTop]: "top" === m
    }),
    style: {
      width: l
    },
    children: (0, i.jsx)(N.$, {
      itemClassName: y.loadingSpinner,
      type: N.R.PULSING_ELLIPSIS
    })
  }) : 0 === a.length ? (0, i.jsx)("div", {
    className: o()(y.popout, y.noResults, {
      [y.popoutPositionTop]: "top" === m
    }),
    style: {
      width: l
    },
    children: (0, i.jsx)(A.x, {
      color: "text-muted",
      variant: "text-md/normal",
      children: P.Z.Messages.NO_RESULTS_FOUND
    })
  }) : (0, i.jsx)(_.SJ, {
    children: e => {
      let {
        ref: t,
        onKeyDown: n,
        ...r
      } = e;
      return (0, i.jsx)(S._2, {
        className: o()(y.popout, y.searchableSelect, {
          [y.noScrollbar]: a.length <= u,
          [y.popoutPositionTop]: "top" === m
        }),
        style: {
          width: l,
          maxHeight: 44 * u
        },
        ref: e => {
          var n;
          c.current = e;
          let i = null !== (n = null == e ? void 0 : e.getScrollerNode()) && void 0 !== n ? n : null;
          g.current = i, t.current = i
        },
        ...r,
        role: void 0,
        innerRole: "listbox",
        innerAriaMultiselectable: f,
        innerId: E,
        rowHeight: 44,
        sections: [a.length],
        sectionHeight: 0,
        renderRow: e => {
          var t;
          let {
            row: n
          } = e, r = a[n], o = I(r);
          return (0, i.jsx)(V, {
            multi: f,
            "aria-posinset": n,
            "aria-setsize": a.length,
            isSelected: s.includes(r.value),
            isFocused: d === String(r.value),
            value: r.value,
            label: o,
            onSelect: L,
            prefix: C(r, {
              inPill: !1,
              inDropdown: !0
            }),
            suffix: p(r, {
              inPill: !1,
              inDropdown: !0
            })
          }, null !== (t = r.key) && void 0 !== t ? t : n)
        },
        renderSection: () => null
      })
    }
  })
}

function k(e, t) {
  if (null == e || null == t) return !1;
  let n = Node.DOCUMENT_POSITION_CONTAINED_BY | Node.DOCUMENT_POSITION_FOLLOWING;
  return (e.compareDocumentPosition(t) & n) === n
}

function B(e, t, n) {
  let i = r.useMemo(() => (0, l.E)({
      getFocusableElements() {
        let t = e.current;
        return null != t ? Array.from(t.querySelectorAll("[data-option-pill-value]")) : []
      },
      getActiveElement() {
        var t, n;
        return null == e ? void 0 : null === (n = e.current) || void 0 === n ? void 0 : null === (t = n.ownerDocument) || void 0 === t ? void 0 : t.activeElement
      }
    }), [n]),
    s = r.useCallback(t => {
      var n, i;
      return t === (null === (i = e.current) || void 0 === i ? void 0 : null === (n = i.ownerDocument) || void 0 === n ? void 0 : n.activeElement)
    }, [e]),
    o = r.useCallback(async function() {
      let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
        n = await i.getPreviousFocusableElement({
          wrap: !e
        });
      if (e && ((null == n || s(n)) && (n = await i.getNextFocusableElement()), null == n || s(n))) {
        var r;
        return null === (r = t.current) || void 0 === r ? void 0 : r.focus()
      }
      return null == n ? void 0 : n.focus()
    }, [i, s, t]),
    a = r.useCallback(async function() {
      let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
        n = await i.getNextFocusableElement({
          wrap: !e
        });
      if (e && ((null == n || s(n)) && (n = await i.getPreviousFocusableElement()), null == n || s(n))) {
        var r;
        return null === (r = t.current) || void 0 === r ? void 0 : r.focus()
      }
      return null == n ? void 0 : n.focus()
    }, [i, s, t]);
  return {
    focusPreviousItem: o,
    focusNextItem: a,
    focusLastItem: r.useCallback(async () => {
      let e = await i.getLastFocusableElement();
      return null == e ? void 0 : e.focus()
    }, [i])
  }
}

function x(e) {
  let {
    selectedOptions: t,
    selectValue: n,
    listRef: s,
    focusPreviousItem: o,
    focusNextItem: a,
    renderOptionSuffix: l,
    renderOptionPrefix: u,
    renderCustomPill: _,
    customPillContainerClassName: d
  } = e, c = null != _, E = r.useCallback(e => {
    if (null != s.current) switch (e.key) {
      case "ArrowRight":
        return e.stopPropagation(), e.preventDefault(), a();
      case "ArrowLeft":
        return e.stopPropagation(), e.preventDefault(), o()
    }
  }, [s, o, a]), [I, T] = r.useState(null);
  return (0, i.jsx)("ul", {
    className: c ? d : y.optionPillContainer,
    ref: s,
    onKeyDown: E,
    onFocus: e => {
      let t = e.target;
      null != s.current && k(s.current, t) && T(t.getAttribute("data-option-pill-value"))
    },
    onBlur: e => {
      let t = e.relatedTarget;
      !k(s.current, t) && T(null)
    },
    children: t.map((e, t) => {
      var r;
      return (0, i.jsx)("li", {
        className: c ? void 0 : y.optionPillItem,
        children: (0, i.jsx)(j, {
          isCustomPill: c,
          option: e,
          focused: null == I ? 0 === t : I === String(e.value),
          onClick: () => n(e.value),
          renderOptionPrefix: u,
          renderOptionSuffix: l,
          onKeyDown: async t => {
            "Backspace" === t.key ? (await o(!0), n(e.value, !1)) : "Delete" === t.key && (await a(!0), n(e.value, !1))
          },
          children: c ? _(e) : (0, i.jsx)("div", {
            className: y.content,
            children: e.label
          })
        })
      }, null !== (r = e.key) && void 0 !== r ? r : "".concat(e.label, "-").concat(e.value))
    })
  })
}

function V(e) {
  let {
    value: t,
    label: n,
    prefix: r,
    suffix: s,
    onSelect: a,
    isSelected: l,
    isFocused: u,
    multi: d,
    ...c
  } = e, I = (0, _.JA)(String(t));
  return (0, i.jsxs)(E.P, {
    tag: "li",
    style: {
      height: 44
    },
    focusProps: {
      enabled: !1
    },
    className: o()(y.option, {
      [y.focused]: u,
      [y.multi]: d
    }),
    onClick: () => a(t),
    ...I,
    ...c,
    "aria-selected": l,
    id: I["data-list-item-id"],
    role: "option",
    children: [(0, i.jsxs)("div", {
      className: y.content,
      children: [n, "\xa0"]
    }), null != r && (0, i.jsx)("div", {
      className: y.prefix,
      children: r
    }), " ", null != s && (0, i.jsx)("div", {
      className: y.suffix,
      children: s
    }), " ", (0, i.jsx)(Z, {
      isSelected: l,
      multi: d
    })]
  })
}

function Z(e) {
  let {
    isSelected: t,
    multi: n
  } = e;
  return n ? (0, i.jsx)("div", {
    className: o()(y.multiSelectCheckbox, {
      [y.checked]: t,
      [y.unchecked]: !t
    }),
    children: t && (0, i.jsx)(L.Z, {
      foreground: y.multiSelectCheck
    })
  }) : t ? (0, i.jsx)(v.Z, {
    "aria-hidden": !0,
    backgroundColor: "white",
    className: y.selectedIcon,
    width: 20,
    height: 20
  }) : null
}

function H(e) {
  let {
    selectedOptions: t,
    renderOptionPrefix: n,
    renderOptionSuffix: r,
    ...s
  } = e, o = t[0], a = null == n ? void 0 : n(null != o ? o : null, {
    inPill: !1,
    inDropdown: !1
  }), l = null == r ? void 0 : r(null != o ? o : null, {
    inPill: !1,
    inDropdown: !1
  });
  return (0, i.jsxs)(i.Fragment, {
    children: [null != a ? (0, i.jsx)("div", {
      "aria-hidden": !0,
      children: a
    }) : null, (0, i.jsx)(Y, {
      selectedOptions: t,
      ...s
    }), null != l ? (0, i.jsx)("div", {
      "aria-hidden": !0,
      children: l
    }) : null]
  })
}

function F(e) {
  let {
    query: t,
    placeholder: n,
    selectedOptions: s,
    selectValue: a,
    onKeyDown: l,
    isEditing: u,
    isDisabled: _,
    inputRef: d,
    renderOptionPrefix: c,
    renderOptionSuffix: E,
    inputClassNames: I,
    hidePills: T,
    ...h
  } = e, S = Math.max(n.length, (null != t ? t : "").length), f = r.useRef(null), {
    focusPreviousItem: N,
    focusNextItem: A,
    focusLastItem: m
  } = B(f, d, s);
  return (0, i.jsxs)(i.Fragment, {
    children: [s.length > 0 && !T && (0, i.jsx)(x, {
      listRef: f,
      selectedOptions: s,
      renderOptionPrefix: c,
      renderOptionSuffix: E,
      selectValue: a,
      focusNextItem: A,
      focusPreviousItem: N
    }), (0, i.jsx)(Y, {
      style: {
        minWidth: "".concat(S, "ch")
      },
      className: o()(y.multi, I),
      query: t,
      placeholder: n,
      selectValue: a,
      selectedOptions: s,
      isEditing: u,
      isDisabled: _,
      inputRef: d,
      onKeyDown: e => {
        ["ArrowLeft", "Backspace"].includes(e.key) && ("" === t || null == t) && s.length > 0 ? m() : l(e)
      },
      ...h
    })]
  })
}

function Y(e) {
  let {
    query: t,
    inputId: n,
    "aria-describedby": r,
    "aria-invalid": s,
    "aria-required": a,
    "aria-labelledby": l,
    "aria-expanded": u,
    isDisabled: _,
    listboxId: c,
    activeDescendant: E,
    navigatorId: I,
    onChange: T,
    onFocus: h,
    setInputRef: S,
    isEditing: f,
    onKeyDown: N,
    placeholder: A,
    loading: m,
    style: O,
    className: R
  } = e;
  return (0, i.jsx)("input", {
    role: "combobox",
    id: n,
    "aria-haspopup": "listbox",
    "aria-invalid": s,
    "aria-labelledby": l,
    "aria-autocomplete": "list",
    "aria-expanded": u,
    "aria-describedby": r,
    "aria-disabled": _,
    "aria-controls": c,
    "aria-required": a,
    "aria-busy": m,
    style: null != O ? O : {},
    "aria-activedescendant": null != E ? (0, d.jb)(I, E) : "",
    disabled: _,
    value: null != t ? t : "",
    onChange: e => {
      T(e.target.value)
    },
    onFocus: h,
    className: o()(y.searchInput, R, {
      [y.editing]: f,
      [y.disabled]: _
    }),
    onKeyDown: N,
    placeholder: "" !== (null != t ? t : "").trim() ? void 0 : A,
    ref: S
  })
}

function j(e) {
  let {
    option: t,
    focused: n,
    onClick: r,
    onKeyDown: s,
    renderOptionPrefix: o,
    renderOptionSuffix: a,
    children: l,
    isCustomPill: u
  } = e, _ = !u && (null == o ? void 0 : o(t, {
    inPill: !0,
    inDropdown: !1
  })), d = !u && (null == a ? void 0 : a(t, {
    inPill: !0,
    inDropdown: !1
  }));
  return (0, i.jsx)(I.t, {
    offset: 3,
    children: (0, i.jsxs)(c.zx, {
      look: c.zx.Looks.BLANK,
      tabIndex: n ? 0 : -1,
      "data-option-pill-value": t.value,
      className: y.optionPillBtn,
      innerClassName: u ? null : y.optionPill,
      onClick: () => null == r ? void 0 : r(t.value),
      onKeyDown: s,
      children: [l, null != _ && (0, i.jsx)("div", {
        className: y.prefix,
        children: _
      }), " ", null != d && (0, i.jsx)("div", {
        className: y.suffix,
        children: d
      }), (0, i.jsx)(h.n, {
        children: P.Z.Messages.REMOVE
      }), !u && (0, i.jsx)(D.Z, {
        className: y.deleteOptionIcon,
        width: 14,
        height: 14
      })]
    })
  })
}