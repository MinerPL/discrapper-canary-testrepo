"use strict";
t.d(s, {
  d: function() {
    return i
  }
});
var n, i, l = t(735250);
t(470079);
var a = t(692547),
  r = t(481060),
  o = t(809309),
  c = t(769993),
  d = t(507893),
  u = t(752657),
  E = t(17557),
  _ = t(759231),
  I = t(689938),
  T = t(738714);
(n = i || (i = {}))[n.TOO_BIG = 0] = "TOO_BIG", n[n.RATE_LIMIT = 1] = "RATE_LIMIT", n[n.TOO_MANY_EMOJI = 2] = "TOO_MANY_EMOJI", n[n.TOO_MANY_ANIMATED_EMOJI = 3] = "TOO_MANY_ANIMATED_EMOJI", n[n.WRONG_TYPE = 4] = "WRONG_TYPE", n[n.RESIZE_GIF = 5] = "RESIZE_GIF";
s.Z = e => {
  let {
    error: s
  } = e, {
    type: t,
    filename: n
  } = s, {
    icon: i,
    description: N,
    color: m,
    tooltip: S
  } = {
    0: {
      icon: o.Z,
      description: I.Z.Messages.UPLOAD_ERROR_TOO_LARGE,
      color: a.Z.unsafe_rawColors.RED_400.css,
      tooltip: I.Z.Messages.UPLOAD_ERROR_TITLE
    },
    4: {
      icon: c.Z,
      description: I.Z.Messages.UPLOAD_ERROR_WRONG_TYPE,
      color: a.Z.unsafe_rawColors.RED_400.css,
      tooltip: I.Z.Messages.UPLOAD_ERROR_TITLE
    },
    5: {
      icon: u.Z,
      description: I.Z.Messages.UPLOAD_ERROR_RESIZE_GIF,
      color: a.Z.unsafe_rawColors.RED_400.css,
      tooltip: I.Z.Messages.UPLOAD_ERROR_TITLE
    },
    1: {
      icon: E.Z,
      description: I.Z.Messages.UPLOAD_ERROR_RATE_LIMIT,
      color: a.Z.unsafe_rawColors.ORANGE_345.css,
      tooltip: I.Z.Messages.UPLOAD_ERROR_RETRY
    },
    2: {
      icon: d.Z,
      description: I.Z.Messages.UPLOAD_ERROR_TOO_MANY_EMOJI,
      color: a.Z.unsafe_rawColors.RED_400.css,
      tooltip: I.Z.Messages.UPLOAD_ERROR_TITLE
    },
    3: {
      icon: d.Z,
      description: I.Z.Messages.UPLOAD_ERROR_TOO_MANY_ANIMATED_EMOJI,
      color: a.Z.unsafe_rawColors.RED_400.css,
      tooltip: I.Z.Messages.UPLOAD_ERROR_TITLE
    }
  } [t];
  return (0, l.jsxs)("div", {
    className: T.emojiErrorItem,
    children: [(0, l.jsx)(i, {
      className: T.fileIcon,
      color: a.Z.unsafe_rawColors.PRIMARY_300.css
    }), (0, l.jsxs)(r.FormSection, {
      className: T.fileInfo,
      children: [(0, l.jsx)(r.FormTitle, {
        className: T.fileName,
        children: n
      }), (0, l.jsx)(r.FormText, {
        type: r.FormTextTypes.DESCRIPTION,
        children: N
      })]
    }), (0, l.jsx)(r.TooltipContainer, {
      position: "right",
      text: S,
      children: (0, l.jsx)(_.Z, {
        color: m
      })
    })]
  })
}