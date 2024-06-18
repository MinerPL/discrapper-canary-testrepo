"use strict";
n.d(t, {
  g: function() {
    return T
  }
});
var i = n(735250),
  r = n(470079),
  s = n(120356),
  o = n.n(s),
  a = n(112456),
  l = n.n(a),
  u = n(481060),
  _ = n(403182),
  d = n(465670),
  c = n(689938),
  E = n(242206);
let I = e => {
    let {
      filename: t
    } = e, r = (0, _.uV)(t), s = n(148660)("./icon-file-".concat(r, ".svg"));
    return (0, i.jsx)("img", {
      className: E.icon,
      src: s,
      alt: c.Z.Messages.IMG_ALT_ATTACHMENT_FILE_TYPE.format({
        fileType: r
      }),
      title: r
    })
  },
  T = e => {
    let {
      className: t,
      filename: n,
      size: r,
      progress: s,
      onCancelUpload: a,
      onClick: _,
      onContextMenu: T
    } = e, h = 100 === s, S = !h && r > 0;
    return (0, i.jsxs)("div", {
      className: o()(E.attachment, t),
      children: [(0, i.jsx)(I, {
        filename: n
      }), (0, i.jsxs)("div", {
        className: E.attachmentInner,
        children: [(0, i.jsxs)("div", {
          className: E.filenameWrapper,
          children: [(0, i.jsx)(u.Clickable, {
            className: E.filename,
            onClick: _,
            onContextMenu: T,
            children: n
          }), S ? (0, i.jsx)("div", {
            className: E.size,
            children: "— ".concat(l().filesize(r))
          }) : null]
        }), (0, i.jsx)("div", {
          className: E.progressContainer,
          children: h ? c.Z.Messages.ATTACHMENT_PROCESSING : (0, i.jsx)(u.Progress, {
            className: E.progress,
            percent: s
          })
        })]
      }), h ? null : (0, i.jsx)(u.Clickable, {
        onClick: a,
        children: (0, i.jsx)(d.Z, {
          className: E.cancelButton,
          width: 24,
          height: 24
        })
      })]
    })
  };
t.Z = e => {
  let {
    className: t,
    url: n,
    fileName: s,
    fileSize: a,
    onClick: _,
    onContextMenu: d,
    renderAdjacentContent: c
  } = e;
  return (0, i.jsxs)(r.Fragment, {
    children: [(0, i.jsxs)("div", {
      className: o()(E.attachment, E.newMosaicStyle, t),
      children: [(0, i.jsx)(I, {
        filename: s
      }), (0, i.jsxs)("div", {
        className: E.attachmentInner,
        children: [(0, i.jsx)("div", {
          className: E.filenameLinkWrapper,
          children: (0, i.jsx)(u.Anchor, {
            className: E.fileNameLink,
            href: n,
            onClick: _,
            onContextMenu: d,
            children: s
          })
        }), (0, i.jsx)("div", {
          className: E.metadata,
          children: l().filesize(a)
        })]
      })]
    }), null != c && c()]
  })
}