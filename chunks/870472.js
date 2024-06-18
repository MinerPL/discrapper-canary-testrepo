"use strict";
t.d(s, {
  Q: function() {
    return c
  },
  V: function() {
    return o
  }
}), t(47120), t(653041), t(177593);
var n = t(470079),
  i = t(348327),
  l = t.n(i),
  a = t(699581),
  r = t(596390);

function o(e) {
  let [s, t] = n.useState([e]), [i, a] = n.useState(0), r = n.useMemo(() => s[i], [s, i]), o = n.useCallback(e => {
    let n = e(r);
    if (l()(r, n)) return;
    let o = s.slice(0, i + 1);
    o.push(n), t(o), a(o.length - 1)
  }, [i, r, s]), c = n.useCallback(function() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
      t = Math.max(0, i - e);
    return a(t), s[t]
  }, [i, s]);
  return {
    state: r,
    setState: o,
    goBack: c,
    goForward: n.useCallback(function() {
      let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
        t = Math.min(s.length - 1, i + e);
      return a(t), s[t]
    }, [i, s])
  }
}

function c(e, s) {
  let {
    scrollerRef: t,
    mainInputRef: i,
    mainContainerRef: l
  } = s, {
    state: {
      value: o,
      tags: c,
      selections: d
    },
    setState: u,
    goBack: E,
    goForward: _
  } = e;
  n.useLayoutEffect(() => {
    let e = e => s => {
        ("Meta" === s.key || "Control" === s.key) && u(s => ({
          ...s,
          isSelecting: e
        }))
      },
      s = e(!0),
      t = e(!1);
    return document.addEventListener("keydown", s), document.addEventListener("keyup", t), () => {
      document.removeEventListener("keydown", s), document.removeEventListener("keyup", t)
    }
  }, [u]);
  let I = n.useCallback(e => {
      var s, n;
      let i = (null !== (n = e.clipboardData.getData("text")) && void 0 !== n ? n : "").split(r.uz).map(e => e.trim()).filter(e => e.length > 0);
      if (!(i.length <= 1))(0, a.flushSync)(() => {
        u(e => {
          let {
            tags: s,
            value: t
          } = e;
          return {
            value: t,
            tags: [...s, ...i],
            selections: [],
            isSelecting: !1
          }
        })
      }), e.preventDefault(), e.stopPropagation(), null === (s = t.current) || void 0 === s || s.scrollToBottom()
    }, [u, t]),
    T = n.useCallback(e => {
      u(s => {
        let {
          tags: t,
          value: n
        } = s;
        return {
          value: n,
          tags: [...t.filter((s, t) => t !== e)],
          selections: [],
          isSelecting: !1
        }
      })
    }, [u]),
    N = n.useCallback(e => s => {
      u(t => {
        let {
          tags: n,
          value: i
        } = t, l = [...n];
        return l[e] = s, {
          value: i,
          tags: l,
          selections: [],
          isSelecting: !1
        }
      })
    }, [u]),
    m = n.useCallback(e => {
      u(s => {
        let {
          tags: t,
          value: n,
          selections: i,
          isSelecting: l
        } = s;
        return {
          value: n,
          tags: t,
          selections: [...i, t[e]],
          isSelecting: l
        }
      })
    }, [u]),
    S = n.useCallback(function(e) {
      let s = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
      u(t => {
        let {
          tags: n,
          value: i,
          selections: l,
          isSelecting: a
        } = t;
        return {
          value: i,
          tags: n,
          selections: s ? [] : l.filter(s => s !== n[e]),
          isSelecting: a
        }
      })
    }, [u]),
    h = n.useCallback(e => {
      var s;
      u(e => {
        let {
          tags: s,
          value: t
        } = e;
        return {
          value: t,
          tags: s,
          selections: [],
          isSelecting: !1
        }
      }), null != e && (e.preventDefault(), e.stopPropagation()), null === (s = i.current) || void 0 === s || s.focus()
    }, [i, u]),
    g = n.useCallback(e => {
      u(s => {
        let {
          tags: t
        } = s;
        return {
          value: e.target.value,
          tags: t,
          selections: [],
          isSelecting: !1
        }
      })
    }, [u]),
    x = n.useCallback(function(e) {
      let s = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
        n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2];
      if (!(o.trim().length <= 0))(0, a.flushSync)(() => {
        u(e => {
          let {
            tags: s
          } = e;
          return {
            value: "",
            tags: [...s, o],
            selections: [],
            isSelecting: !1
          }
        })
      }), n && null != t.current && t.current.scrollToBottom(), s && (e.preventDefault(), e.stopPropagation())
    }, [t, u, o]),
    C = n.useCallback(e => {
      let s = o.trim().length <= 0;
      if (d.length > 0) {
        var t;
        (0, a.flushSync)(() => {
          u(e => {
            let {
              tags: s,
              value: t,
              selections: n
            } = e;
            return {
              value: t,
              tags: s.filter(e => !n.includes(e)),
              selections: [],
              isSelecting: !1
            }
          })
        }), null === (t = i.current) || void 0 === t || t.focus(), e.preventDefault(), e.stopPropagation()
      } else s && ((0, a.flushSync)(() => {
        u(e => {
          let {
            tags: s
          } = e, t = [...s], n = t.pop();
          return {
            value: null != n ? n : "",
            tags: [...t],
            selections: [],
            isSelecting: !1
          }
        })
      }), e.preventDefault(), e.stopPropagation())
    }, [i, d.length, u, o]),
    R = n.useCallback(e => {
      var s, t, n, l;
      let a = e.metaKey || e.ctrlKey;
      "z" === e.key && a ? (E().selections.length > 0 ? null === (s = i.current) || void 0 === s || s.blur() : null === (t = i.current) || void 0 === t || t.focus(), e.preventDefault(), e.stopPropagation()) : "y" === e.key && a && (_().selections.length > 0 ? null === (n = i.current) || void 0 === n || n.blur() : null === (l = i.current) || void 0 === l || l.focus(), e.preventDefault(), e.stopPropagation())
    }, [E, _, i]),
    L = n.useCallback(e => {
      var s;
      let t = o.trim().length > 0,
        {
          selectionStart: n = 0,
          selectionEnd: r = 0
        } = null !== (s = i.current) && void 0 !== s ? s : {};
      if (0 !== c.length && (!t || !!(n !== r)))(0, a.flushSync)(() => {
        u(e => {
          let {
            tags: s,
            value: t
          } = e;
          return {
            value: t,
            tags: s,
            selections: [...s],
            isSelecting: !1
          }
        })
      }), setImmediate(() => {
        var e;
        null === (e = i.current) || void 0 === e || e.blur(), setTimeout(() => {
          var e;
          null === (e = l.current) || void 0 === e || e.focus()
        }, 16)
      }), e.preventDefault(), e.stopPropagation()
    }, [l, i, u, c.length, o]),
    O = n.useCallback(e => {
      e.relatedTarget !== e.currentTarget && x(e, !1, !1)
    }, [x]),
    A = n.useCallback(e => {
      let s = e.metaKey || e.ctrlKey;
      if ("Meta" !== e.key) r.ye.has(e.key) ? x(e) : "Backspace" === e.key ? C(e) : "Escape" === e.key ? h(e) : "a" === e.key && s ? L(e) : r.Bd.has(e.key) && s && R(e)
    }, [x, C, h, L, R]);
  return {
    handlePasteEvent: I,
    handleInputChange: g,
    handleKeyDown: A,
    handleContainerKeyUp: n.useCallback(e => {
      if (document.activeElement !== l.current) return;
      let s = e.metaKey || e.ctrlKey;
      "Backspace" === e.key ? C(e) : "a" === e.key && s ? L(e) : "Escape" === e.key ? h(e) : r.Bd.has(e.key) && s ? R(e) : "Meta" !== e.key && h(e)
    }, [R, C, L, h, l]),
    handleRemoveTag: T,
    handleTagChangeEvent: N,
    handleSelectTag: m,
    handleUnselectTag: S,
    handleResetTagSelections: h,
    handleInputBlurEvent: O
  }
}