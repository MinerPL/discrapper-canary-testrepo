"use strict";
t.r(r), t.d(r, {
  default: function() {
    return R
  }
}), t("47120"), t("724458"), t("757143"), t("390547"), t("653041");
var a = t("735250"),
  n = t("470079"),
  i = t("688619"),
  o = t.n(i),
  l = t("221762"),
  s = t.n(l),
  c = t("392711"),
  d = t.n(c),
  u = t("445131"),
  h = t("433517"),
  p = t("640971"),
  m = t("544342"),
  g = t("203165"),
  f = t("559760"),
  b = t("481060"),
  y = t("410030"),
  x = t("6048"),
  k = t("465670"),
  v = t("246992"),
  C = t("779869");

function S(e, r) {
  return !r && (r = e.slice(0)), Object.freeze(Object.defineProperties(e, {
    raw: {
      value: Object.freeze(r)
    }
  }))
}

function j() {
  let e = S(["\n    import {defineColorTokens, themedToken} from '../tools/define';\n\n    const semanticTokenValues = {\n      ", "\n    };\n\n    export const semanticTokens = defineColorTokens(() => semanticTokenValues);\n    export type SemanticTokenValue = typeof semanticTokenValues;\n  "]);
  return j = function() {
    return e
  }, e
}

function T() {
  let e = S(["\n      export const rawPalette = {\n        ", "\n      } as const;\n    "]);
  return T = function() {
    return e
  }, e
}
let w = {
    ...f.semanticColorTokens,
    ...p.componentColorTokens,
    ...m.gradients
  },
  N = {
    ...A(f.semanticColorTokens),
    ...A(p.componentColorTokens)
  },
  E = ["100", "130", "160", "200", "230", "260", "300", "330", "345", "360", "400", "430", "460", "500", "530", "560", "600", "630", "645", "660", "700", "730", "760", "800", "830", "860", "900"];

function L(e) {
  var r;
  let t = "string" == typeof e ? 1 : null !== (r = e.opacity) && void 0 !== r ? r : 1;
  return {
    color: "string" == typeof e ? e : e.color,
    opacity: t
  }
}

function _(e) {
  return "name" in e
}

function A(e) {
  let r = {};
  return Object.keys(e).forEach(t => {
    let a = e[t];
    if ("name" in a) a = function e(r) {
      let t = w[r.name];
      return "name" in t ? e(t) : t
    }(a);
    r[t] = {
      light: L(a.light),
      dark: L(a.dark),
      darker: L(null != a.darker ? a.darker : a.dark),
      midnight: L(null != a.midnight ? a.midnight : a.dark)
    }
  }), r
}

function P(e, r) {
  let [t, a] = n.useState(() => {
    let t = h.Storage.get(e);
    return null != t ? t : r
  });
  return n.useEffect(() => {
    h.Storage.set(e, t)
  }, [e, t]), [t, a]
}

function R() {
  let e = (0, y.useTheme)(),
    [{
      rawPalette: r,
      semanticTokens: t
    }, i, l, c, h, p] = function(e, r) {
      let [t, a] = P("".concat(e, "-states"), [r]), [i, o] = P("".concat(e, "-index"), 0), l = t[i], s = n.useCallback(e => {
        a([e, ...t].slice(0, 20)), o(0)
      }, [o, a, t]), c = n.useCallback(() => {
        o(Math.min(t.length - 1, i + 1))
      }, [i, o, t.length]), d = n.useCallback(() => {
        o(Math.max(0, i - 1))
      }, [i, o]), u = i < t.length - 1;
      return [l, s, c, d, u, i > 0]
    }("color-override-03-03-23", {
      rawPalette: g.rawPalette,
      semanticTokens: N
    }),
    [m, f] = n.useState(""),
    [S, w] = n.useState({}),
    [L, _] = n.useState({}),
    A = n.useMemo(() => Object.keys(r).reduce((e, r) => [...e, {
      value: r,
      label: r
    }], []), [r]),
    R = n.useCallback((e, a, n, o) => {
      let l = d().cloneDeep(t);
      l[e][a] = {
        color: n,
        opacity: o
      }, i({
        rawPalette: r,
        semanticTokens: l
      })
    }, [t, r, i]),
    O = n.useMemo(() => {
      let a = Object.keys(t).map(r => {
          let {
            color: a,
            opacity: n
          } = t[r][e];
          return "--".concat(r, ": hsl(var(--").concat(a.replace(".", "-"), "-hsl) / ").concat(n, ");")
        }),
        n = Object.keys(r).flatMap(e => {
          let {
            hex: t
          } = r[e], {
            h: a,
            s: n,
            l: i
          } = function(e) {
            let [r, t, a] = "transparent" === e ? [0, 0, 0] : o()(e).hsl(), n = isNaN(r) ? 0 : d().round(r, 1), i = d().round(100 * a, 1);
            return {
              h: n,
              s: d().round(100 * t, 1),
              l: i
            }
          }(t), l = d().kebabCase(e);
          return ["--".concat(l, "-hsl: ").concat(a, " calc(var(--saturation-factor, 1) * ").concat(n, "%) ").concat(i, "% !important;"), "--".concat(l, ": hsl(var(--").concat(l, "-hsl)) !important;")]
        });
      return "\n      .theme-".concat(e, " {\n        ").concat(a.join("\n"), "\n\n        ").concat(Object.keys(S).filter(e => S[e]).map(e => "--".concat(e, ": magenta !important;")).join("\n"), "\n\n        ").concat(Object.keys(L).filter(e => L[e]).map(e => "--".concat(e, ": magenta !important;")).join("\n"), "\n      }\n\n      html {\n        ").concat(n.join("\n"), "\n      }\n    ")
    }, [e, t, r, S, L]),
    M = n.useCallback(e => {
      let r = "",
        t = "",
        a = !1;
      return s()(j(), Object.keys(e).map(n => {
        (t = n.split("-")[0]) !== r ? (r = t, a = !0) : a = !1;
        let i = e[n],
          o = i.light,
          l = i.dark,
          s = i.midnight,
          c = [
            ["dark", l],
            ["light", o]
          ];
        (s.opacity !== l.opacity || s.color !== l.color) && c.push(["midnight", s]);
        let d = c.map(e => {
            let [r, {
              color: t,
              opacity: a
            }] = e;
            return 1 === a ? "".concat(r, ': "').concat(t, '"') : "".concat(r, ': { color: "').concat(t, '", opacity: ').concat(a, " }")
          }).join(",\n"),
          u = '"'.concat(n, '": themedToken({ ').concat(d, " })");
        return "".concat(a ? "\n" : "").concat(u)
      }).join(",\n"))
    }, []),
    I = n.useCallback(e => s()(T(), Object.keys(e).map(r => '"'.concat(r, '": {hex: "').concat(e[r].hex, '"}'))), []),
    B = n.useCallback(e => {
      let r = {};
      Object.keys(e).forEach(t => {
        Object.keys(e[t]).map(a => {
          let n = [...E];
          "primary" !== t && (n = n.filter(e => "645" !== e)), r["".concat(t, ".").concat(n[+a])] = {
            hex: e[t][a]
          }
        })
      }), i({
        rawPalette: r,
        semanticTokens: t
      })
    }, [t, i]);
  return (0, a.jsxs)("div", {
    className: C.panel,
    style: {
      display: "flex",
      flexDirection: "column"
    },
    children: [(0, a.jsxs)("div", {
      className: C.toolbar,
      style: {
        flex: "0 0 34px",
        padding: "0 4px"
      },
      children: [(0, a.jsxs)("div", {
        className: C.toolbarGroup,
        children: [(0, a.jsx)(b.Button, {
          onClick: l,
          disabled: !h,
          size: b.Button.Sizes.MIN,
          children: "Undo"
        }), (0, a.jsx)(b.Button, {
          onClick: c,
          disabled: !p,
          size: b.Button.Sizes.MIN,
          children: "Redo"
        })]
      }), (0, a.jsx)("div", {
        className: C.toolbarDivider
      }), (0, a.jsxs)("div", {
        className: C.toolbarGroup,
        children: [(0, a.jsx)("span", {
          className: C.toolbarGroupLabel,
          children: "Raw"
        }), (0, a.jsx)(b.Button, {
          size: b.Button.Sizes.MIN,
          onClick: () => {
            navigator.clipboard.readText().then(e => {
              B(JSON.parse(e))
            })
          },
          children: "Import"
        }), (0, a.jsx)(b.Button, {
          size: b.Button.Sizes.MIN,
          onClick: () => {
            navigator.clipboard.writeText(I(r))
          },
          children: "Export"
        })]
      }), (0, a.jsx)("div", {
        className: C.toolbarDivider
      }), (0, a.jsxs)("div", {
        className: C.toolbarGroup,
        children: [(0, a.jsx)("span", {
          className: C.toolbarGroupLabel,
          children: "Semantic"
        }), (0, a.jsx)(b.Button, {
          size: b.Button.Sizes.MIN,
          onClick: () => {
            navigator.clipboard.writeText(M(t))
          },
          children: "Export"
        })]
      }), (0, a.jsx)("div", {
        className: C.toolbarDivider
      }), (0, a.jsx)("div", {
        className: C.toolbarGroup,
        children: (0, a.jsx)(b.Button, {
          size: b.Button.Sizes.MIN,
          type: "reset",
          color: b.Button.Colors.RED,
          onClick: () => {
            i({
              rawPalette: g.rawPalette,
              semanticTokens: N
            })
          },
          children: "Reset all"
        })
      }), (0, a.jsx)("div", {
        className: C.toolbarDivider
      }), (0, a.jsxs)("div", {
        className: C.toolbarGroup,
        style: {
          flexGrow: 1
        },
        children: [(0, a.jsx)(x.default, {
          size: x.default.Sizes.SMALL,
          query: m,
          onChange: f,
          onClear: () => f(""),
          placeholder: "Search tokens",
          "aria-label": "Search tokens"
        }), " "]
      })]
    }), (0, a.jsx)(b.ScrollerThin, {
      children: (0, a.jsx)("div", {
        style: {
          display: "grid",
          gridTemplateColumns: "min-content 1fr 1fr min-content min-content",
          gap: 8,
          margin: 8,
          alignItems: "center"
        },
        children: Object.keys(N).filter(e => "" === m || e.toLowerCase().includes(m)).map(r => {
          var i;
          let o = N[r][e],
            l = null == t[r] ? {
              ...o
            } : t[r][e],
            s = l.color !== o.color || l.opacity !== o.opacity;
          return (0, a.jsxs)(n.Fragment, {
            children: [(0, a.jsx)("div", {
              onMouseEnter: () => {
                _(e => ({
                  ...e,
                  [r]: !0
                }))
              },
              onMouseLeave: () => {
                _(e => ({
                  ...e,
                  [r]: !1
                }))
              },
              children: (0, a.jsx)(b.Checkbox, {
                value: S[r],
                onChange: () => {
                  w(e => ({
                    ...e,
                    [r]: !e[r]
                  }))
                }
              })
            }), (0, a.jsx)("span", {
              children: r
            }), (0, a.jsx)(b.SearchableSelect, {
              value: l.color,
              options: A,
              onChange: t => {
                R(r, e, t, l.opacity)
              },
              renderOptionPrefix: r => null == r ? null : (0, a.jsx)("div", {
                style: {
                  width: 16,
                  height: 16,
                  borderRadius: "50%",
                  backgroundColor: "var(--".concat(r.value.replace(".", "-"), ")"),
                  border: "1px solid ".concat("dark" === e ? "white" : "black")
                }
              }),
              popoutLayerContext: v.devToolsLayerContext
            }), (0, a.jsx)(b.TextInput, {
              type: "number",
              style: {
                width: "4em"
              },
              value: null === (i = l.opacity) || void 0 === i ? void 0 : i.toString(),
              onChange: t => {
                "" !== t && R(r, e, l.color, parseFloat(t))
              }
            }), (0, a.jsx)(b.Clickable, {
              style: s ? {} : {
                opacity: 0,
                pointerEvents: "none"
              },
              onClick: () => {
                var t;
                s && R(r, e, o.color, null !== (t = o.opacity) && void 0 !== t ? t : 1)
              },
              children: (0, a.jsx)(k.default, {
                width: 16,
                height: 16
              })
            })]
          }, r)
        })
      })
    }), (0, a.jsx)(u.Helmet, {
      children: (0, a.jsx)("style", {
        id: "devtools-color-overrides",
        children: O
      })
    })]
  })
}