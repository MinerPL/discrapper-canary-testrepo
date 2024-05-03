"use strict";
a.r(s), a.d(s, {
  default: function() {
    return M
  }
}), a("47120");
var t, l, o = a("735250"),
  n = a("470079"),
  u = a("481060"),
  r = a("749210"),
  c = a("910693"),
  d = a("692437"),
  i = a("810090"),
  E = a("70956"),
  _ = a("5192"),
  N = a("981631"),
  O = a("689938"),
  S = a("113088");
(l = t || (t = {}))[l.INITIAL = 0] = "INITIAL", l[l.OTHER_REASON = 1] = "OTHER_REASON";

function A() {
  return [{
    value: 0,
    label: O.default.Messages.DELETE_MESSAGE_HISTORY_OPTION_NONE
  }, {
    value: 1 * E.default.Seconds.HOUR,
    label: O.default.Messages.DELETE_MESSAGE_HISTORY_OPTION_1HR
  }, {
    value: 6 * E.default.Seconds.HOUR,
    label: O.default.Messages.DELETE_MESSAGE_HISTORY_OPTION_6HR
  }, {
    value: 12 * E.default.Seconds.HOUR,
    label: O.default.Messages.DELETE_MESSAGE_HISTORY_OPTION_12HR
  }, {
    value: 1 * E.default.Seconds.DAY,
    label: O.default.Messages.DELETE_MESSAGE_HISTORY_OPTION_24HR
  }, {
    value: 3 * E.default.Seconds.DAY,
    label: O.default.Messages.DELETE_MESSAGE_HISTORY_OPTION_3D
  }, {
    value: 7 * E.default.Seconds.DAY,
    label: O.default.Messages.DELETE_MESSAGE_HISTORY_OPTION_7D
  }]
}
let f = A()[1].value;

function M(e) {
  let {
    guildId: s,
    user: t,
    location: l,
    userIds: E,
    onBanMultiple: M,
    transitionState: R,
    onClose: T,
    canBulkBan: I = !1
  } = e, [m, C] = n.useState(f), [g, h] = n.useState(""), [p, L] = n.useState(0), [x, B] = n.useState(!1), b = (0, c.useTrackModerationAction)(s, {
    location: l,
    targetUserId: null == t ? void 0 : t.id,
    targets: E
  }), j = n.useCallback(() => {
    if (null != M) {
      if (!(null != E && (null == E ? void 0 : E.size) > 0 && I) || x) return;
      if ("" === g.trim() && !x) {
        B(!0);
        return
      }
      M(s, [...E], m, g)
    } else {
      if (null == t) return;
      r.default.banUser(s, null == t ? void 0 : t.id, m, g)
    }
    b(c.ModerationActionType.BAN), T()
  }, [M, b, T, E, I, x, g, s, m, t]), v = n.useCallback(e => {
    C(e)
  }, []), k = n.useCallback(e => {
    let {
      value: s
    } = e;
    h(s), B(!1)
  }, []), H = n.useCallback(e => {
    h(e), x && B(!1)
  }, [x]), P = n.useCallback(() => {
    h(""), L(1)
  }, []), D = n.useCallback(() => {
    L(0)
  }, []), U = [{
    name: O.default.Messages.BAN_REASON_OPTION_SPAM_ACCOUNT,
    value: O.default.Messages.BAN_REASON_OPTION_SPAM_ACCOUNT
  }, {
    name: O.default.Messages.BAN_REASON_OPTION_HACKED_ACCOUNT,
    value: O.default.Messages.BAN_REASON_OPTION_HACKED_ACCOUNT
  }, {
    name: O.default.Messages.BAN_REASON_OPTION_BREAKING_RULES,
    value: O.default.Messages.BAN_REASON_OPTION_BREAKING_RULES
  }], Y = null != M && null != E ? O.default.Messages.BAN_MULTIPLE_CONFIRM_TITLE.format({
    count: null == E ? void 0 : E.size
  }) : null == t ? "" : O.default.Messages.BAN_CONFIRM_TITLE.format({
    username: "@".concat(_.default.getName(s, null, t))
  });
  return (0, o.jsxs)(u.ModalRoot, {
    transitionState: R,
    children: [(0, o.jsx)(u.ModalHeader, {
      separator: !1,
      children: (0, o.jsx)(u.Heading, {
        variant: "heading-md/semibold",
        children: Y
      })
    }), (0, o.jsxs)(u.ModalContent, {
      className: S.modalContent,
      children: [(0, o.jsxs)(i.default, {
        autoPlay: !0,
        loop: !0,
        className: S.spacing,
        width: 400,
        children: [(0, o.jsx)("source", {
          src: a("942314"),
          type: "video/webm"
        }), (0, o.jsx)("source", {
          src: a("888322"),
          type: "video/mp4"
        }), (0, o.jsx)("img", {
          alt: "",
          src: a("860724")
        })]
      }), (0, o.jsxs)(u.FormItem, {
        title: O.default.Messages.FORM_LABEL_REASON_BAN,
        className: S.spacing,
        children: [x && (0, o.jsx)(u.FormErrorBlock, {
          className: S.error,
          children: O.default.Messages.BAN_REASON_REQUIRED_ERROR
        }), (0, o.jsx)(u.Sequencer, {
          steps: [0, 1],
          step: p,
          children: (e => {
            switch (p) {
              case 0:
                return (0, o.jsxs)(o.Fragment, {
                  children: [(0, o.jsx)(u.RadioGroup, {
                    value: g,
                    options: e,
                    onChange: k,
                    radioItemClassName: S.radioItemStyles
                  }), (0, o.jsxs)(u.Clickable, {
                    onClick: P,
                    className: S.banReasonOtherClickable,
                    children: [(0, o.jsx)(u.Text, {
                      variant: "text-md/medium",
                      color: "none",
                      children: O.default.Messages.OTHER
                    }), (0, o.jsx)(d.default, {
                      width: "16",
                      height: "16"
                    })]
                  })]
                });
              case 1:
                return (0, o.jsx)(u.TextArea, {
                  maxLength: N.MAX_REASON_LENGTH,
                  onChange: H,
                  value: g,
                  rows: 5,
                  autoFocus: !0
                })
            }
          })(U)
        })]
      }), (0, o.jsx)(u.FormItem, {
        title: O.default.Messages.FORM_LABEL_DELETE_MESSAGE_HISTORY,
        className: S.spacing,
        children: (0, o.jsx)(u.SingleSelect, {
          options: A(),
          value: m,
          onChange: v
        })
      })]
    }), (() => {
      switch (p) {
        case 0:
          return (0, o.jsxs)(u.ModalFooter, {
            className: S.footer,
            children: [(0, o.jsx)(u.Button, {
              type: "button",
              look: u.Button.Looks.LINK,
              color: u.Button.Colors.PRIMARY,
              onClick: T,
              children: O.default.Messages.CANCEL
            }), (0, o.jsx)(u.Button, {
              type: "submit",
              color: u.Button.Colors.RED,
              size: u.Button.Sizes.SMALL,
              onClick: j,
              children: O.default.Messages.BAN
            })]
          });
        case 1:
          return (0, o.jsxs)(u.ModalFooter, {
            className: S.footerStepped,
            children: [(0, o.jsx)(u.Button, {
              className: S.cancel,
              innerClassName: S.cancel,
              type: "button",
              look: u.Button.Looks.LINK,
              color: u.Button.Colors.PRIMARY,
              size: u.Button.Sizes.SMALL,
              onClick: D,
              children: O.default.Messages.BACK
            }), (0, o.jsx)(u.Button, {
              type: "submit",
              color: u.Button.Colors.RED,
              size: u.Button.Sizes.SMALL,
              onClick: j,
              children: O.default.Messages.BAN
            })]
          })
      }
    })()]
  })
}