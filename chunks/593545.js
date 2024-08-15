n(47120);
var r = n(735250),
  i = n(470079),
  a = n(120356),
  s = n.n(a),
  o = n(608787),
  l = n(481060),
  u = n(858644),
  c = n(571989),
  d = n(65838),
  _ = n(259580),
  E = n(424218),
  f = n(689938),
  h = n(48182),
  p = n(594402);

function m(e) {
  let {
text: t,
language: i
  } = e, a = () => (0, r.jsx)('pre', {
children: (0, r.jsx)('code', {
  className: s()(p.scrollbarGhostHairline, h.codeView, 'hljs'),
  children: t
})
  });
  return (0, r.jsx)(o.GI, {
createPromise: () => Promise.resolve().then(n.bind(n, 364964)),
webpackId: 364964,
render: e => {
  if (!e.hasLanguage(i))
    return a();
  let n = e.highlight(i, t, !0);
  return null == n ? a() : (0, r.jsx)('pre', {
    children: (0, r.jsx)('code', {
      className: s()(p.scrollbarGhostHairline, h.codeView, 'hljs', n.language),
      dangerouslySetInnerHTML: {
        __html: n.value
      }
    })
  });
},
renderFallback: () => a()
  });
}

function I(e) {
  let {
expanded: t,
setExpanded: n,
isWholeFile: i,
numLines: a
  } = e, s = (i ? f.Z.Messages.PREVIEW_NUM_LINES : f.Z.Messages.PREVIEW_NUM_LINES_AT_LEAST).format({
lines: a
  });
  return (0, r.jsx)(l.Tooltip, {
text: ''.concat(t ? f.Z.Messages.COLLAPSE : f.Z.Messages.EXPAND, ' (').concat(s, ')'),
children: e => (0, r.jsxs)(l.Clickable, {
  ...e,
  className: h.toggleExpandSection,
  onClick: () => {
    n(!t);
  },
  children: [
    (0, r.jsx)(_.Z, {
      direction: t ? _.Z.Directions.UP : _.Z.Directions.DOWN
    }),
    t ? f.Z.Messages.COLLAPSE : f.Z.Messages.EXPAND
  ]
})
  });
}

function T(e) {
  let {
url: t,
fileName: n,
fileSize: i
  } = e, a = ''.concat(n, ' (').concat((0, E.IC)(i), ')');
  return (0, r.jsxs)(r.Fragment, {
children: [
  (0, r.jsx)(l.Tooltip, {
    text: a,
    children: e => (0, r.jsx)('span', {
      ...e,
      className: s()(h.downloadSection, h.attachmentName),
      children: n
    })
  }),
  (0, r.jsx)(l.Tooltip, {
    text: a,
    children: e => (0, r.jsx)('span', {
      ...e,
      className: s()(h.downloadSection, h.formattedSize),
      children: (0, E.IC)(i)
    })
  }),
  (0, r.jsx)(l.Tooltip, {
    text: ''.concat(f.Z.Messages.DOWNLOAD, ' ').concat(a),
    children: e => (0, r.jsx)(l.Anchor, {
      ...e,
      className: h.downloadSection,
      href: t,
      target: '_blank',
      rel: 'noreferrer noopener',
      children: (0, r.jsx)(l.DownloadIcon, {
        size: 'md',
        color: 'currentColor',
        className: h.downloadButton
      })
    })
  })
]
  });
}

function g(e) {
  let {
language: t,
setLanguage: n
  } = e;
  return (0, r.jsx)(l.Popout, {
position: 'left',
renderPopout: e => {
  let {
    closePopout: i
  } = e;
  return (0, r.jsx)(l.Dialog, {
    'aria-label': f.Z.Messages.PREVIEW_CHANGE_LANGUAGE,
    children: (0, r.jsx)(l.Combobox, {
      className: h.languageSelector,
      multiSelect: !1,
      placeholder: f.Z.Messages.PREVIEW_SEARCH_LANGUAGE_PLACEHOLDER,
      value: new Set([t]),
      autoFocus: !0,
      onChange: e => {
        n(e), i();
      },
      children: e => Array.from(d.u).filter(t => t.toLowerCase().includes(e.toLowerCase())).map(e => (0, r.jsx)(l.ComboboxItem, {
        value: e,
        children: (0, r.jsx)(l.ComboboxItem.Label, {
          children: e
        })
      }, e))
    })
  });
},
children: e => (0, r.jsx)(l.Tooltip, {
  text: f.Z.Messages.PREVIEW_CHANGE_LANGUAGE,
  children: t => (0, r.jsx)(l.AngleBracketsIcon, {
    size: 'md',
    color: 'currentColor',
    ...t,
    ...e,
    className: h.codeIcon
  })
})
  });
}

function S(e) {
  return (0, r.jsx)(l.Tooltip, {
text: f.Z.Messages.PREVIEW_WHOLE_FILE,
children: t => (0, r.jsx)(l.Clickable, {
  ...t,
  className: h.openFullPreviewSection,
  onClick: () => {
    (0, l.openModal)(t => (0, r.jsx)(N, {
      ...e,
      ...t
    }));
  },
  children: (0, r.jsx)(l.MaximizeIcon, {
    size: 'xs',
    color: 'currentColor'
  })
})
  });
}

function A(e) {
  var t;
  let {
url: n,
fileName: i,
fileSize: a,
fileContents: o,
expanded: u,
setExpanded: d,
language: _,
setLanguage: p,
bytesLeft: A,
className: N
  } = e, v = null == o ? void 0 : o.split('\n'), O = null !== (t = null == v ? void 0 : v.length) && void 0 !== t ? t : 0, R = u ? 100 : 6, C = 0 === A, y = '';
  C && u && O > R ? y = '\n...' : !C && (y = '...'), '' !== y && (C ? y += ' ' + f.Z.Messages.PREVIEW_LINES_LEFT.format({
lines: O - R
  }) : y += ' ' + f.Z.Messages.PREVIEW_BYTES_LEFT.format({
formattedBytes: (0, E.IC)(A)
  }));
  let D = (null == v ? void 0 : v.slice(0, R).join('\n')) + y,
L = (0, c.yx)(D),
b = u || R < O;
  return (0, r.jsxs)('div', {
className: s()(N, h.container),
children: [
  (0, r.jsx)('div', {
    className: s()(h.textContainer, {
      [h.expanded]: u
    }),
    children: null == o ? (0, r.jsx)(l.Spinner, {
      className: h.spinner
    }) : (0, r.jsx)(m, {
      text: L,
      language: _
    })
  }),
  (0, r.jsxs)(l.Text, {
    color: 'header-secondary',
    className: h.footer,
    variant: 'text-sm/normal',
    children: [
      b ? (0, r.jsxs)(r.Fragment, {
        children: [
          (0, r.jsx)(I, {
            expanded: u,
            setExpanded: d,
            isWholeFile: C,
            numLines: O
          }),
          (0, r.jsx)(S, {
            url: n,
            fileName: i,
            fileSize: a,
            language: _,
            fileContents: o,
            bytesLeft: A
          })
        ]
      }) : null,
      (0, r.jsx)('div', {
        className: h.footerGap
      }),
      (0, r.jsx)(T, {
        url: n,
        fileName: i,
        fileSize: a
      }),
      (0, r.jsx)(g, {
        language: _,
        setLanguage: p
      })
    ]
  })
]
  });
}

function N(e) {
  let {
url: t,
fileName: n,
fileSize: a,
transitionState: s,
language: o,
fileContents: u,
bytesLeft: c
  } = e, [d, _] = i.useState(o), p = null != u ? u : '';
  return 0 !== c && (p += '... '.concat(f.Z.Messages.PREVIEW_BYTES_LEFT.format({
formattedBytes: (0, E.IC)(c)
  }))), (0, r.jsx)(l.ModalRoot, {
transitionState: s,
'aria-label': f.Z.Messages.PREVIEW_MODAL_LABEL,
size: l.ModalSize.LARGE,
className: h.modalRoot,
children: (0, r.jsxs)('div', {
  className: h.modalContent,
  children: [
    (0, r.jsx)(l.ScrollerThin, {
      className: h.modalTextContainer,
      children: null == u ? (0, r.jsx)(l.Spinner, {
        className: h.spinner
      }) : (0, r.jsx)(m, {
        text: p,
        language: d
      })
    }),
    (0, r.jsxs)(l.Text, {
      color: 'header-secondary',
      className: h.footer,
      variant: 'text-sm/normal',
      children: [
        (0, r.jsx)('div', {
          className: h.footerGap
        }),
        (0, r.jsx)(T, {
          url: t,
          fileName: n,
          fileSize: a
        }),
        (0, r.jsx)(g, {
          language: d,
          setLanguage: _
        })
      ]
    })
  ]
})
  });
}
t.Z = i.memo(function(e) {
  let {
url: t,
fileName: n,
fileSize: a,
contentType: o,
className: l,
onClick: c,
onContextMenu: d
  } = e, [_, E] = i.useState(!1), [f, p] = i.useState(n.split('.').slice(-1)[0]), {
fileContents: m,
bytesLeft: I,
hadError: T
  } = function(e, t) {
let [n, r] = i.useState(!1), [a, s] = i.useState(null), [o, l] = i.useState(1);
return i.useEffect(() => {
  (async function n() {
    try {
      var n, i;
      let a = await fetch(e, {
          headers: {
            Range: 'bytes=0-'.concat(50000),
            Accept: 'text/plain'
          }
        }),
        o = function(e) {
          var t;
          let n = 'utf-8',
            r = null !== (t = null == e ? void 0 : e.split('charset=').slice(-1)[0]) && void 0 !== t ? t : n;
          try {
            return new TextDecoder(r);
          } catch (t) {
            if ((null == e ? void 0 : e.startsWith('text')) || r.toLowerCase().includes('utf'))
              return new TextDecoder(n);
            throw t;
          }
        }(t).decode(await a.arrayBuffer()),
        u = null !== (n = a.headers.get('content-range')) && void 0 !== n ? n : '0',
        c = null !== (i = a.headers.get('content-length')) && void 0 !== i ? i : '1',
        d = parseInt(u.split('/')[1]) - parseInt(c);
      s(0 === d ? o : o.slice(0, -1)), l(d), r(!1);
    } catch (e) {
      l(0), r(!0);
    }
  }());
}, [
  e,
  t
]), {
  fileContents: a,
  bytesLeft: o,
  hadError: n
};
  }(t, o);
  return T ? (0, r.jsx)(u.Z, {
url: t,
fileName: n,
fileSize: a,
onClick: c,
onContextMenu: d,
className: l
  }) : (0, r.jsx)(A, {
url: t,
fileName: n,
fileSize: a,
fileContents: m,
bytesLeft: I,
expanded: _,
setExpanded: E,
language: f,
setLanguage: p,
className: s()(h.newMosaicStyle, l)
  });
}, (e, t) => e.url === t.url && e.className === t.className);