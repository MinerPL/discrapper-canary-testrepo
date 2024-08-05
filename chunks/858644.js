n.d(t, {
  g: function() {
return f;
  }
});
var r = n(735250),
  i = n(470079),
  a = n(120356),
  s = n.n(a),
  o = n(112456),
  l = n.n(o),
  u = n(481060),
  c = n(403182),
  d = n(689938),
  _ = n(488648);
let E = e => {
let {
  filename: t
} = e, i = (0, c.uV)(t), a = n(148660)('./icon-file-'.concat(i, '.svg'));
return (0, r.jsx)('img', {
  className: _.icon,
  src: a,
  alt: d.Z.Messages.IMG_ALT_ATTACHMENT_FILE_TYPE.format({
    fileType: i
  }),
  title: i
});
  },
  f = e => {
let {
  className: t,
  filename: n,
  size: i,
  progress: a,
  onCancelUpload: o,
  onClick: c,
  onContextMenu: f
} = e, h = 100 === a, p = !h && i > 0;
return (0, r.jsxs)('div', {
  className: s()(_.attachment, t),
  children: [
    (0, r.jsx)(E, {
      filename: n
    }),
    (0, r.jsxs)('div', {
      className: _.attachmentInner,
      children: [
        (0, r.jsxs)('div', {
          className: _.filenameWrapper,
          children: [
            (0, r.jsx)(u.Clickable, {
              className: _.filename,
              onClick: c,
              onContextMenu: f,
              children: n
            }),
            p ? (0, r.jsx)('div', {
              className: _.size,
              children: '\u2014 '.concat(l().filesize(i))
            }) : null
          ]
        }),
        (0, r.jsx)('div', {
          className: _.progressContainer,
          children: h ? d.Z.Messages.ATTACHMENT_PROCESSING : (0, r.jsx)(u.Progress, {
            className: _.progress,
            percent: a
          })
        })
      ]
    }),
    h ? null : (0, r.jsx)(u.Clickable, {
      onClick: o,
      children: (0, r.jsx)(u.CloseSmallIcon, {
        size: 'md',
        color: 'currentColor',
        className: _.cancelButton
      })
    })
  ]
});
  };
t.Z = e => {
  let {
className: t,
url: n,
fileName: a,
fileSize: o,
onClick: c,
onContextMenu: d,
renderAdjacentContent: f
  } = e;
  return (0, r.jsxs)(i.Fragment, {
children: [
  (0, r.jsxs)('div', {
    className: s()(_.attachment, _.newMosaicStyle, t),
    children: [
      (0, r.jsx)(E, {
        filename: a
      }),
      (0, r.jsxs)('div', {
        className: _.attachmentInner,
        children: [
          (0, r.jsx)('div', {
            className: _.filenameLinkWrapper,
            children: (0, r.jsx)(u.Anchor, {
              className: _.fileNameLink,
              href: n,
              onClick: c,
              onContextMenu: d,
              children: a
            })
          }),
          (0, r.jsx)('div', {
            className: _.metadata,
            children: l().filesize(o)
          })
        ]
      })
    ]
  }),
  null != f && f()
]
  });
};