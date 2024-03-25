"use strict";
s.r(t), s.d(t, {
  ImageInputUploadErrors: function() {
    return l
  },
  default: function() {
    return S
  }
});
var a, l, n = s("37983");
s("884691");
var i = s("669491"),
  r = s("77078"),
  o = s("447353"),
  d = s("40119"),
  u = s("266926"),
  c = s("235692"),
  E = s("444456"),
  _ = s("423487"),
  I = s("782340"),
  T = s("555043");
(a = l || (l = {}))[a.TOO_BIG = 0] = "TOO_BIG", a[a.RATE_LIMIT = 1] = "RATE_LIMIT", a[a.TOO_MANY_EMOJI = 2] = "TOO_MANY_EMOJI", a[a.TOO_MANY_ANIMATED_EMOJI = 3] = "TOO_MANY_ANIMATED_EMOJI", a[a.WRONG_TYPE = 4] = "WRONG_TYPE", a[a.RESIZE_GIF = 5] = "RESIZE_GIF";
var S = e => {
  let {
    error: t
  } = e, {
    type: s,
    filename: a
  } = t, l = {
    0: {
      icon: o.default,
      description: I.default.Messages.UPLOAD_ERROR_TOO_LARGE,
      color: i.default.unsafe_rawColors.RED_400.css,
      tooltip: I.default.Messages.UPLOAD_ERROR_TITLE
    },
    4: {
      icon: d.default,
      description: I.default.Messages.UPLOAD_ERROR_WRONG_TYPE,
      color: i.default.unsafe_rawColors.RED_400.css,
      tooltip: I.default.Messages.UPLOAD_ERROR_TITLE
    },
    5: {
      icon: c.default,
      description: I.default.Messages.UPLOAD_ERROR_RESIZE_GIF,
      color: i.default.unsafe_rawColors.RED_400.css,
      tooltip: I.default.Messages.UPLOAD_ERROR_TITLE
    },
    1: {
      icon: E.default,
      description: I.default.Messages.UPLOAD_ERROR_RATE_LIMIT,
      color: i.default.unsafe_rawColors.ORANGE_345.css,
      tooltip: I.default.Messages.UPLOAD_ERROR_RETRY
    },
    2: {
      icon: u.default,
      description: I.default.Messages.UPLOAD_ERROR_TOO_MANY_EMOJI,
      color: i.default.unsafe_rawColors.RED_400.css,
      tooltip: I.default.Messages.UPLOAD_ERROR_TITLE
    },
    3: {
      icon: u.default,
      description: I.default.Messages.UPLOAD_ERROR_TOO_MANY_ANIMATED_EMOJI,
      color: i.default.unsafe_rawColors.RED_400.css,
      tooltip: I.default.Messages.UPLOAD_ERROR_TITLE
    }
  }, {
    icon: S,
    description: f,
    color: m,
    tooltip: N
  } = l[s];
  return (0, n.jsxs)("div", {
    className: T.emojiErrorItem,
    children: [(0, n.jsx)(S, {
      className: T.fileIcon,
      color: i.default.unsafe_rawColors.PRIMARY_300.css
    }), (0, n.jsxs)(r.FormSection, {
      className: T.fileInfo,
      children: [(0, n.jsx)(r.FormTitle, {
        className: T.fileName,
        children: a
      }), (0, n.jsx)(r.FormText, {
        type: r.FormTextTypes.DESCRIPTION,
        children: f
      })]
    }), (0, n.jsx)(r.TooltipContainer, {
      position: "right",
      text: N,
      children: (0, n.jsx)(_.default, {
        color: m
      })
    })]
  })
}