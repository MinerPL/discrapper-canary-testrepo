"use strict";
s.r(t), s.d(t, {
  useChipletState: function() {
    return o
  },
  useChipletStateHandlers: function() {
    return d
  }
}), s("222007"), s("424973"), s("860677");
var a = s("884691"),
  l = s("714617"),
  n = s.n(l),
  i = s("817736"),
  r = s("673122");

function o(e) {
  let [t, s] = a.useState([e]), [l, i] = a.useState(0), r = a.useMemo(() => t[l], [t, l]), o = a.useCallback(e => {
    let a = e(r);
    if (n(r, a)) return;
    let o = t.slice(0, l + 1);
    o.push(a), s(o), i(o.length - 1)
  }, [l, r, t]), d = a.useCallback(function() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
      s = Math.max(0, l - e);
    return i(s), t[s]
  }, [l, t]), u = a.useCallback(function() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
      s = Math.min(t.length - 1, l + e);
    return i(s), t[s]
  }, [l, t]);
  return {
    state: r,
    setState: o,
    goBack: d,
    goForward: u
  }
}

function d(e, t) {
  let {
    scrollerRef: s,
    mainInputRef: l,
    mainContainerRef: n
  } = t, {
    state: {
      value: o,
      tags: d,
      selections: u
    },
    setState: c,
    goBack: E,
    goForward: _
  } = e;
  a.useLayoutEffect(() => {
    let e = e => t => {
        let s = "Meta" === t.key || "Control" === t.key;
        s && c(t => ({
          ...t,
          isSelecting: e
        }))
      },
      t = e(!0),
      s = e(!1);
    return document.addEventListener("keydown", t), document.addEventListener("keyup", s), () => {
      document.removeEventListener("keydown", t), document.removeEventListener("keyup", s)
    }
  }, [c]);
  let I = a.useCallback(e => {
      var t, a;
      let l = null !== (a = e.clipboardData.getData("text")) && void 0 !== a ? a : "",
        n = l.split(r.CHIPLET_PASTE_SEPERATOR).map(e => e.trim()).filter(e => e.length > 0);
      !(n.length <= 1) && ((0, i.flushSync)(() => {
        c(e => {
          let {
            tags: t,
            value: s
          } = e;
          return {
            value: s,
            tags: [...t, ...n],
            selections: [],
            isSelecting: !1
          }
        })
      }), e.preventDefault(), e.stopPropagation(), null === (t = s.current) || void 0 === t || t.scrollToBottom())
    }, [c, s]),
    T = a.useCallback(e => {
      c(t => {
        let {
          tags: s,
          value: a
        } = t;
        return {
          value: a,
          tags: [...s.filter((t, s) => s !== e)],
          selections: [],
          isSelecting: !1
        }
      })
    }, [c]),
    S = a.useCallback(e => t => {
      c(s => {
        let {
          tags: a,
          value: l
        } = s, n = [...a];
        return n[e] = t, {
          value: l,
          tags: n,
          selections: [],
          isSelecting: !1
        }
      })
    }, [c]),
    f = a.useCallback(e => {
      c(t => {
        let {
          tags: s,
          value: a,
          selections: l,
          isSelecting: n
        } = t;
        return {
          value: a,
          tags: s,
          selections: [...l, s[e]],
          isSelecting: n
        }
      })
    }, [c]),
    m = a.useCallback(function(e) {
      let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
      c(s => {
        let {
          tags: a,
          value: l,
          selections: n,
          isSelecting: i
        } = s;
        return {
          value: l,
          tags: a,
          selections: t ? [] : n.filter(t => t !== a[e]),
          isSelecting: i
        }
      })
    }, [c]),
    N = a.useCallback(e => {
      var t;
      c(e => {
        let {
          tags: t,
          value: s
        } = e;
        return {
          value: s,
          tags: t,
          selections: [],
          isSelecting: !1
        }
      }), null != e && (e.preventDefault(), e.stopPropagation()), null === (t = l.current) || void 0 === t || t.focus()
    }, [l, c]),
    g = a.useCallback(e => {
      c(t => {
        let {
          tags: s
        } = t;
        return {
          value: e.target.value,
          tags: s,
          selections: [],
          isSelecting: !1
        }
      })
    }, [c]),
    h = a.useCallback(function(e) {
      let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
        a = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
        l = o.trim().length <= 0;
      !l && ((0, i.flushSync)(() => {
        c(e => {
          let {
            tags: t
          } = e;
          return {
            value: "",
            tags: [...t, o],
            selections: [],
            isSelecting: !1
          }
        })
      }), a && null != s.current && s.current.scrollToBottom(), t && (e.preventDefault(), e.stopPropagation()))
    }, [s, c, o]),
    C = a.useCallback(e => {
      let t = o.trim().length <= 0;
      if (u.length > 0) {
        var s;
        (0, i.flushSync)(() => {
          c(e => {
            let {
              tags: t,
              value: s,
              selections: a
            } = e;
            return {
              value: s,
              tags: t.filter(e => !a.includes(e)),
              selections: [],
              isSelecting: !1
            }
          })
        }), null === (s = l.current) || void 0 === s || s.focus(), e.preventDefault(), e.stopPropagation()
      } else t && ((0, i.flushSync)(() => {
        c(e => {
          let {
            tags: t
          } = e, s = [...t], a = s.pop();
          return {
            value: null != a ? a : "",
            tags: [...s],
            selections: [],
            isSelecting: !1
          }
        })
      }), e.preventDefault(), e.stopPropagation())
    }, [l, u.length, c, o]),
    R = a.useCallback(e => {
      var t, s, a, n;
      let i = e.metaKey || e.ctrlKey;
      if ("z" === e.key && i) {
        let a = E();
        a.selections.length > 0 ? null === (t = l.current) || void 0 === t || t.blur() : null === (s = l.current) || void 0 === s || s.focus(), e.preventDefault(), e.stopPropagation()
      } else if ("y" === e.key && i) {
        let t = _();
        t.selections.length > 0 ? null === (a = l.current) || void 0 === a || a.blur() : null === (n = l.current) || void 0 === n || n.focus(), e.preventDefault(), e.stopPropagation()
      }
    }, [E, _, l]),
    x = a.useCallback(e => {
      var t;
      let s = o.trim().length > 0,
        {
          selectionStart: a = 0,
          selectionEnd: r = 0
        } = null !== (t = l.current) && void 0 !== t ? t : {};
      0 !== d.length && (!s || a !== r) && ((0, i.flushSync)(() => {
        c(e => {
          let {
            tags: t,
            value: s
          } = e;
          return {
            value: s,
            tags: t,
            selections: [...t],
            isSelecting: !1
          }
        })
      }), setImmediate(() => {
        var e;
        null === (e = l.current) || void 0 === e || e.blur(), setTimeout(() => {
          var e;
          null === (e = n.current) || void 0 === e || e.focus()
        }, 16)
      }), e.preventDefault(), e.stopPropagation())
    }, [n, l, c, d.length, o]),
    L = a.useCallback(e => {
      e.relatedTarget !== e.currentTarget && h(e, !1, !1)
    }, [h]),
    O = a.useCallback(e => {
      let t = e.metaKey || e.ctrlKey;
      "Meta" !== e.key && (r.NEXT_CHIP_INPUT_KEY.has(e.key) ? h(e) : "Backspace" === e.key ? C(e) : "Escape" === e.key ? N(e) : "a" === e.key && t ? x(e) : r.CHIPLET_STATE_HISTORY_KEYS.has(e.key) && t && R(e))
    }, [h, C, N, x, R]),
    A = a.useCallback(e => {
      if (document.activeElement !== n.current) return;
      let t = e.metaKey || e.ctrlKey;
      "Backspace" === e.key ? C(e) : "a" === e.key && t ? x(e) : "Escape" === e.key ? N(e) : r.CHIPLET_STATE_HISTORY_KEYS.has(e.key) && t ? R(e) : "Meta" !== e.key && N(e)
    }, [R, C, x, N, n]);
  return {
    handlePasteEvent: I,
    handleInputChange: g,
    handleKeyDown: O,
    handleContainerKeyUp: A,
    handleRemoveTag: T,
    handleTagChangeEvent: S,
    handleSelectTag: f,
    handleUnselectTag: m,
    handleResetTagSelections: N,
    handleInputBlurEvent: L
  }
}