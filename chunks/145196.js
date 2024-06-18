"use strict";
n(47120);
var i = n(735250),
  r = n(470079),
  s = n(120356),
  o = n.n(s),
  a = n(608787),
  l = n(481060),
  u = n(571989),
  _ = n(65838),
  d = n(424218),
  c = n(130208),
  E = n(259580),
  I = n(943461),
  T = n(330379),
  h = n(672108),
  S = n(689938),
  f = n(619481),
  N = n(842648);

function A(e) {
  let {
    text: t,
    language: r
  } = e, s = () => (0, i.jsx)("pre", {
    children: (0, i.jsx)("code", {
      className: o()(N.scrollbarGhostHairline, f.codeView, "hljs"),
      children: t
    })
  });
  return (0, i.jsx)(a.GI, {
    createPromise: () => Promise.resolve().then(n.bind(n, 364964)),
    webpackId: 364964,
    render: e => {
      if (!e.hasLanguage(r)) return s();
      let n = e.highlight(r, t, !0);
      return null == n ? s() : (0, i.jsx)("pre", {
        children: (0, i.jsx)("code", {
          className: o()(N.scrollbarGhostHairline, f.codeView, "hljs", n.language),
          dangerouslySetInnerHTML: {
            __html: n.value
          }
        })
      })
    },
    renderFallback: () => s()
  })
}

function m(e) {
  let {
    expanded: t,
    setExpanded: n,
    isWholeFile: r,
    numLines: s
  } = e, o = (r ? S.Z.Messages.PREVIEW_NUM_LINES : S.Z.Messages.PREVIEW_NUM_LINES_AT_LEAST).format({
    lines: s
  });
  return (0, i.jsx)(l.Tooltip, {
    text: "".concat(t ? S.Z.Messages.COLLAPSE : S.Z.Messages.EXPAND, " (").concat(o, ")"),
    children: e => (0, i.jsxs)(l.Clickable, {
      ...e,
      className: f.toggleExpandSection,
      onClick: () => {
        n(!t)
      },
      children: [(0, i.jsx)(E.Z, {
        direction: t ? E.Z.Directions.UP : E.Z.Directions.DOWN
      }), t ? S.Z.Messages.COLLAPSE : S.Z.Messages.EXPAND]
    })
  })
}

function O(e) {
  let {
    url: t,
    fileName: n,
    fileSize: r
  } = e, s = "".concat(n, " (").concat((0, d.IC)(r), ")");
  return (0, i.jsxs)(i.Fragment, {
    children: [(0, i.jsx)(l.Tooltip, {
      text: s,
      children: e => (0, i.jsx)("span", {
        ...e,
        className: o()(f.downloadSection, f.attachmentName),
        children: n
      })
    }), (0, i.jsx)(l.Tooltip, {
      text: s,
      children: e => (0, i.jsx)("span", {
        ...e,
        className: o()(f.downloadSection, f.formattedSize),
        children: (0, d.IC)(r)
      })
    }), (0, i.jsx)(l.Tooltip, {
      text: "".concat(S.Z.Messages.DOWNLOAD, " ").concat(s),
      children: e => (0, i.jsx)(l.Anchor, {
        ...e,
        className: f.downloadSection,
        href: t,
        target: "_blank",
        rel: "noreferrer noopener",
        children: (0, i.jsx)(I.Z, {
          className: f.downloadButton,
          width: 24,
          height: 24
        })
      })
    })]
  })
}

function R(e) {
  let {
    language: t,
    setLanguage: n
  } = e;
  return (0, i.jsx)(l.Popout, {
    position: "left",
    renderPopout: e => {
      let {
        closePopout: r
      } = e;
      return (0, i.jsx)(l.Dialog, {
        "aria-label": S.Z.Messages.PREVIEW_CHANGE_LANGUAGE,
        children: (0, i.jsx)(l.Combobox, {
          className: f.languageSelector,
          multiSelect: !1,
          placeholder: S.Z.Messages.PREVIEW_SEARCH_LANGUAGE_PLACEHOLDER,
          value: new Set([t]),
          autoFocus: !0,
          onChange: e => {
            n(e), r()
          },
          children: e => Array.from(_.u).filter(t => t.toLowerCase().includes(e.toLowerCase())).map(e => (0, i.jsx)(l.ComboboxItem, {
            value: e,
            children: (0, i.jsx)(l.ComboboxItem.Label, {
              children: e
            })
          }, e))
        })
      })
    },
    children: e => (0, i.jsx)(l.Tooltip, {
      text: S.Z.Messages.PREVIEW_CHANGE_LANGUAGE,
      children: t => (0, i.jsx)(h.Z, {
        width: 24,
        height: 24,
        ...t,
        ...e,
        className: f.codeIcon
      })
    })
  })
}

function C(e) {
  return (0, i.jsx)(l.Tooltip, {
    text: S.Z.Messages.PREVIEW_WHOLE_FILE,
    children: t => (0, i.jsx)(l.Clickable, {
      ...t,
      className: f.openFullPreviewSection,
      onClick: () => {
        (0, l.openModal)(t => (0, i.jsx)(g, {
          ...e,
          ...t
        }))
      },
      children: (0, i.jsx)(T.Z, {})
    })
  })
}

function p(e) {
  var t;
  let {
    url: n,
    fileName: r,
    fileSize: s,
    fileContents: a,
    expanded: _,
    setExpanded: c,
    language: E,
    setLanguage: I,
    bytesLeft: T,
    className: h
  } = e, N = null == a ? void 0 : a.split("\n"), p = null !== (t = null == N ? void 0 : N.length) && void 0 !== t ? t : 0, g = _ ? 100 : 6, L = 0 === T, v = "";
  L && _ && p > g ? v = "\n..." : !L && (v = "..."), "" !== v && (L ? v += " " + S.Z.Messages.PREVIEW_LINES_LEFT.format({
    lines: p - g
  }) : v += " " + S.Z.Messages.PREVIEW_BYTES_LEFT.format({
    formattedBytes: (0, d.IC)(T)
  }));
  let D = (null == N ? void 0 : N.slice(0, g).join("\n")) + v,
    M = (0, u.yx)(D),
    P = _ || g < p;
  return (0, i.jsxs)("div", {
    className: o()(h, f.container),
    children: [(0, i.jsx)("div", {
      className: o()(f.textContainer, {
        [f.expanded]: _
      }),
      children: null == a ? (0, i.jsx)(l.Spinner, {
        className: f.spinner
      }) : (0, i.jsx)(A, {
        text: M,
        language: E
      })
    }), (0, i.jsxs)(l.Text, {
      color: "header-secondary",
      className: f.footer,
      variant: "text-sm/normal",
      children: [P ? (0, i.jsxs)(i.Fragment, {
        children: [(0, i.jsx)(m, {
          expanded: _,
          setExpanded: c,
          isWholeFile: L,
          numLines: p
        }), (0, i.jsx)(C, {
          url: n,
          fileName: r,
          fileSize: s,
          language: E,
          fileContents: a,
          bytesLeft: T
        })]
      }) : null, (0, i.jsx)("div", {
        className: f.footerGap
      }), (0, i.jsx)(O, {
        url: n,
        fileName: r,
        fileSize: s
      }), (0, i.jsx)(R, {
        language: E,
        setLanguage: I
      })]
    })]
  })
}

function g(e) {
  let {
    url: t,
    fileName: n,
    fileSize: s,
    transitionState: o,
    language: a,
    fileContents: u,
    bytesLeft: _
  } = e, [c, E] = r.useState(a), I = null != u ? u : "";
  return 0 !== _ && (I += "... ".concat(S.Z.Messages.PREVIEW_BYTES_LEFT.format({
    formattedBytes: (0, d.IC)(_)
  }))), (0, i.jsx)(l.ModalRoot, {
    transitionState: o,
    "aria-label": S.Z.Messages.PREVIEW_MODAL_LABEL,
    size: l.ModalSize.LARGE,
    className: f.modalRoot,
    children: (0, i.jsxs)("div", {
      className: f.modalContent,
      children: [(0, i.jsx)(l.ScrollerThin, {
        className: f.modalTextContainer,
        children: null == u ? (0, i.jsx)(l.Spinner, {
          className: f.spinner
        }) : (0, i.jsx)(A, {
          text: I,
          language: c
        })
      }), (0, i.jsxs)(l.Text, {
        color: "header-secondary",
        className: f.footer,
        variant: "text-sm/normal",
        children: [(0, i.jsx)("div", {
          className: f.footerGap
        }), (0, i.jsx)(O, {
          url: t,
          fileName: n,
          fileSize: s
        }), (0, i.jsx)(R, {
          language: c,
          setLanguage: E
        })]
      })]
    })
  })
}
t.Z = r.memo(function(e) {
  let {
    url: t,
    fileName: n,
    fileSize: s,
    contentType: a,
    className: l,
    onClick: u,
    onContextMenu: _
  } = e, [d, E] = r.useState(!1), [I, T] = r.useState(n.split(".").slice(-1)[0]), {
    fileContents: h,
    bytesLeft: S,
    hadError: N
  } = function(e, t) {
    let [n, i] = r.useState(!1), [s, o] = r.useState(null), [a, l] = r.useState(1);
    return r.useEffect(() => {
      (async function n() {
        try {
          var n, r;
          let s = await fetch(e, {
              headers: {
                Range: "bytes=0-".concat(5e4),
                Accept: "text/plain"
              }
            }),
            a = (function(e) {
              var t;
              let n = "utf-8",
                i = null !== (t = null == e ? void 0 : e.split("charset=").slice(-1)[0]) && void 0 !== t ? t : n;
              try {
                return new TextDecoder(i)
              } catch (t) {
                if ((null == e ? void 0 : e.startsWith("text")) || i.toLowerCase().includes("utf")) return new TextDecoder(n);
                throw t
              }
            })(t).decode(await s.arrayBuffer()),
            u = null !== (n = s.headers.get("content-range")) && void 0 !== n ? n : "0",
            _ = null !== (r = s.headers.get("content-length")) && void 0 !== r ? r : "1",
            d = parseInt(u.split("/")[1]) - parseInt(_);
          o(0 === d ? a : a.slice(0, -1)), l(d), i(!1)
        } catch (e) {
          l(0), i(!0)
        }
      })()
    }, [e, t]), {
      fileContents: s,
      bytesLeft: a,
      hadError: n
    }
  }(t, a);
  return N ? (0, i.jsx)(c.Z, {
    url: t,
    fileName: n,
    fileSize: s,
    onClick: u,
    onContextMenu: _,
    className: l
  }) : (0, i.jsx)(p, {
    url: t,
    fileName: n,
    fileSize: s,
    fileContents: h,
    bytesLeft: S,
    expanded: d,
    setExpanded: E,
    language: I,
    setLanguage: T,
    className: o()(f.newMosaicStyle, l)
  })
}, (e, t) => e.url === t.url && e.className === t.className)