"use strict";
t.r(r), t.d(r, {
  default: function() {
    return P
  }
});
var a = t("926607");
t("222007"), t("808653"), t("781738"), t("881410"), t("424973");
var n = t("37983"),
  i = t("884691"),
  o = t("10371"),
  l = t.n(o),
  s = t("675576"),
  c = t.n(s),
  d = t("917351"),
  u = t.n(d),
  h = t("703809"),
  p = t("95410"),
  m = t("497991"),
  g = t("928114"),
  f = t("111940"),
  y = t("133198"),
  b = t("77078"),
  x = t("841098"),
  k = t("810567"),
  v = t("945330"),
  C = t("811199"),
  S = t("699412");

function j() {
  let e = (0, a._)(["\n    import {defineColorTokens, themedToken} from '../tools/define';\n\n    const semanticTokenValues = {\n      ", "\n    };\n\n    export const semanticTokens = defineColorTokens(() => semanticTokenValues);\n    export type SemanticTokenValue = typeof semanticTokenValues;\n  "]);
  return j = function() {
    return e
  }, e
}

function T() {
  let e = (0, a._)(["\n      export const rawPalette = {\n        ", "\n      } as const;\n    "]);
  return T = function() {
    return e
  }, e
}
let w = {
    ...y.semanticColorTokens,
    ...m.componentColorTokens,
    ...g.gradients
  },
  N = {
    ...A(y.semanticColorTokens),
    ...A(m.componentColorTokens)
  },
  E = ["100", "130", "160", "200", "230", "260", "300", "330", "345", "360", "400", "430", "460", "500", "530", "560", "600", "630", "645", "660", "700", "730", "760", "800", "830", "860", "900"];

function L(e) {
  var r;
  let t = "string" == typeof e ? 1 : null !== (r = e.opacity) && void 0 !== r ? r : 1,
    a = "string" == typeof e ? e : e.color;
  return {
    color: a,
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

function R(e, r) {
  let [t, a] = i.useState(() => {
    let t = p.Storage.get(e);
    return null != t ? t : r
  });
  return i.useEffect(() => {
    p.Storage.set(e, t)
  }, [e, t]), [t, a]
}

function P() {
  let e = (0, x.useTheme)(),
    [{
      rawPalette: r,
      semanticTokens: t
    }, a, o, s, d, p] = function(e, r) {
      let [t, a] = R("".concat(e, "-states"), [r]), [n, o] = R("".concat(e, "-index"), 0), l = t[n], s = i.useCallback(e => {
        let r = [e, ...t].slice(0, 20);
        a(r), o(0)
      }, [o, a, t]), c = i.useCallback(() => {
        o(Math.min(t.length - 1, n + 1))
      }, [n, o, t.length]), d = i.useCallback(() => {
        o(Math.max(0, n - 1))
      }, [n, o]), u = n < t.length - 1, h = n > 0;
      return [l, s, c, d, u, h]
    }("color-override-03-03-23", {
      rawPalette: f.rawPalette,
      semanticTokens: N
    }),
    [m, g] = i.useState(""),
    [y, w] = i.useState({}),
    [L, _] = i.useState({}),
    A = i.useMemo(() => {
      let e = Object.keys(r);
      return e.reduce((e, r) => [...e, {
        value: r,
        label: r
      }], [])
    }, [r]),
    P = i.useCallback((e, n, i, o) => {
      let l = u.cloneDeep(t);
      l[e][n] = {
        color: i,
        opacity: o
      }, a({
        rawPalette: r,
        semanticTokens: l
      })
    }, [t, r, a]),
    M = i.useMemo(() => {
      let a = Object.keys(t).map(r => {
          let a = t[r],
            {
              color: n,
              opacity: i
            } = a[e];
          return "--".concat(r, ": hsl(var(--").concat(n.replace(".", "-"), "-hsl) / ").concat(i, ");")
        }),
        n = Object.keys(r).flatMap(e => {
          let {
            hex: t
          } = r[e], {
            h: a,
            s: n,
            l: i
          } = function(e) {
            let [r, t, a] = "transparent" === e ? [0, 0, 0] : l(e).hsl(), n = isNaN(r) ? 0 : u.round(r, 1), i = u.round(100 * a, 1), o = u.round(100 * t, 1);
            return {
              h: n,
              s: o,
              l: i
            }
          }(t), o = u.kebabCase(e);
          return ["--".concat(o, "-hsl: ").concat(a, " calc(var(--saturation-factor, 1) * ").concat(n, "%) ").concat(i, "% !important;"), "--".concat(o, ": hsl(var(--").concat(o, "-hsl)) !important;")]
        });
      return "\n      .theme-".concat(e, " {\n        ").concat(a.join("\n"), "\n\n        ").concat(Object.keys(y).filter(e => y[e]).map(e => "--".concat(e, ": magenta !important;")).join("\n"), "\n\n        ").concat(Object.keys(L).filter(e => L[e]).map(e => "--".concat(e, ": magenta !important;")).join("\n"), "\n      }\n\n      html {\n        ").concat(n.join("\n"), "\n      }\n    ")
    }, [e, t, r, y, L]),
    O = i.useCallback(e => {
      let r = "",
        t = "",
        a = !1;
      return c(j(), Object.keys(e).map(n => {
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
    I = i.useCallback(e => c(T(), Object.keys(e).map(r => '"'.concat(r, '": {hex: "').concat(e[r].hex, '"}'))), []),
    B = i.useCallback(e => {
      let r = {};
      Object.keys(e).forEach(t => {
        Object.keys(e[t]).map(a => {
          let n = [...E];
          "primary" !== t && (n = n.filter(e => "645" !== e)), r["".concat(t, ".").concat(n[+a])] = {
            hex: e[t][a]
          }
        })
      }), a({
        rawPalette: r,
        semanticTokens: t
      })
    }, [t, a]);
  return (0, n.jsxs)("div", {
    className: S.panel,
    style: {
      display: "flex",
      flexDirection: "column"
    },
    children: [(0, n.jsxs)("div", {
      className: S.toolbar,
      style: {
        flex: "0 0 34px",
        padding: "0 4px"
      },
      children: [(0, n.jsxs)("div", {
        className: S.toolbarGroup,
        children: [(0, n.jsx)(b.Button, {
          onClick: o,
          disabled: !d,
          size: b.Button.Sizes.MIN,
          children: "Undo"
        }), (0, n.jsx)(b.Button, {
          onClick: s,
          disabled: !p,
          size: b.Button.Sizes.MIN,
          children: "Redo"
        })]
      }), (0, n.jsx)("div", {
        className: S.toolbarDivider
      }), (0, n.jsxs)("div", {
        className: S.toolbarGroup,
        children: [(0, n.jsx)("span", {
          className: S.toolbarGroupLabel,
          children: "Raw"
        }), (0, n.jsx)(b.Button, {
          size: b.Button.Sizes.MIN,
          onClick: () => {
            navigator.clipboard.readText().then(e => {
              B(JSON.parse(e))
            })
          },
          children: "Import"
        }), (0, n.jsx)(b.Button, {
          size: b.Button.Sizes.MIN,
          onClick: () => {
            navigator.clipboard.writeText(I(r))
          },
          children: "Export"
        })]
      }), (0, n.jsx)("div", {
        className: S.toolbarDivider
      }), (0, n.jsxs)("div", {
        className: S.toolbarGroup,
        children: [(0, n.jsx)("span", {
          className: S.toolbarGroupLabel,
          children: "Semantic"
        }), (0, n.jsx)(b.Button, {
          size: b.Button.Sizes.MIN,
          onClick: () => {
            navigator.clipboard.writeText(O(t))
          },
          children: "Export"
        })]
      }), (0, n.jsx)("div", {
        className: S.toolbarDivider
      }), (0, n.jsx)("div", {
        className: S.toolbarGroup,
        children: (0, n.jsx)(b.Button, {
          size: b.Button.Sizes.MIN,
          type: "reset",
          color: b.Button.Colors.RED,
          onClick: () => {
            a({
              rawPalette: f.rawPalette,
              semanticTokens: N
            })
          },
          children: "Reset all"
        })
      }), (0, n.jsx)("div", {
        className: S.toolbarDivider
      }), (0, n.jsxs)("div", {
        className: S.toolbarGroup,
        style: {
          flexGrow: 1
        },
        children: [(0, n.jsx)(k.default, {
          size: k.default.Sizes.SMALL,
          query: m,
          onChange: g,
          onClear: () => g(""),
          placeholder: "Search tokens",
          "aria-label": "Search tokens"
        }), " "]
      })]
    }), (0, n.jsx)(b.ScrollerThin, {
      children: (0, n.jsx)("div", {
        style: {
          display: "grid",
          gridTemplateColumns: "min-content 1fr 1fr min-content min-content",
          gap: 8,
          margin: 8,
          alignItems: "center"
        },
        children: Object.keys(N).filter(e => "" === m || e.toLowerCase().includes(m)).map(r => {
          var a;
          let o = N[r][e],
            l = null == t[r] ? {
              ...o
            } : t[r][e],
            s = l.color !== o.color || l.opacity !== o.opacity;
          return (0, n.jsxs)(i.Fragment, {
            children: [(0, n.jsx)("div", {
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
              children: (0, n.jsx)(b.Checkbox, {
                value: y[r],
                onChange: () => {
                  w(e => ({
                    ...e,
                    [r]: !e[r]
                  }))
                }
              })
            }), (0, n.jsx)("span", {
              children: r
            }), (0, n.jsx)(b.SearchableSelect, {
              value: l.color,
              options: A,
              onChange: t => {
                P(r, e, t, l.opacity)
              },
              renderOptionPrefix: r => null == r ? null : (0, n.jsx)("div", {
                style: {
                  width: 16,
                  height: 16,
                  borderRadius: "50%",
                  backgroundColor: "var(--".concat(r.value.replace(".", "-"), ")"),
                  border: "1px solid ".concat("dark" === e ? "white" : "black")
                }
              }),
              popoutLayerContext: C.devToolsLayerContext
            }), (0, n.jsx)(b.TextInput, {
              type: "number",
              style: {
                width: "4em"
              },
              value: null === (a = l.opacity) || void 0 === a ? void 0 : a.toString(),
              onChange: t => {
                "" !== t && P(r, e, l.color, parseFloat(t))
              }
            }), (0, n.jsx)(b.Clickable, {
              style: s ? {} : {
                opacity: 0,
                pointerEvents: "none"
              },
              onClick: () => {
                var t;
                s && P(r, e, o.color, null !== (t = o.opacity) && void 0 !== t ? t : 1)
              },
              children: (0, n.jsx)(v.default, {
                width: 16,
                height: 16
              })
            })]
          }, r)
        })
      })
    }), (0, n.jsx)(h.Helmet, {
      children: (0, n.jsx)("style", {
        id: "devtools-color-overrides",
        children: M
      })
    })]
  })
}