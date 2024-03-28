"use strict";
l.r(t), l("47120");
var s = l("735250"),
  n = l("470079"),
  a = l("481060"),
  o = l("923928"),
  i = l("594190"),
  d = l("285952"),
  r = l("626135"),
  u = l("981631"),
  E = l("689938"),
  c = l("794711");

function h(e, t, l) {
  return t in e ? Object.defineProperty(e, t, {
    value: l,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = l, e
}
class S extends n.Component {
  componentDidMount() {
    let {
      pid: e
    } = this.props, t = null != e ? i.default.getGameForPID(e) : null;
    r.default.track(u.AnalyticEvents.OPEN_MODAL, {
      type: "Elevated Permissions Sound",
      application_id: null != t ? t.id : null,
      application_name: null != t ? t.name : null,
      game_id: null != t ? t.id : null
    })
  }
  render() {
    return (0, s.jsxs)(a.ModalRoot, {
      transitionState: this.props.transitionState,
      "aria-label": E.default.Messages.ELEVATED_PERMISSIONS_SOUND_TITLE,
      children: [(0, s.jsxs)(a.ModalHeader, {
        justify: d.default.Justify.BETWEEN,
        separator: !1,
        children: [(0, s.jsx)(a.Heading, {
          variant: "heading-lg/semibold",
          children: E.default.Messages.ELEVATED_PERMISSIONS_SOUND_TITLE
        }), (0, s.jsx)(a.ModalCloseButton, {
          onClick: this.handleClose
        })]
      }), (0, s.jsx)(a.ModalContent, {
        children: (0, s.jsx)(a.Text, {
          tag: "strong",
          variant: "text-md/normal",
          className: c.marginBottom20,
          children: E.default.Messages.ELEVATED_PERMISSIONS_SOUND_BODY
        })
      }), (0, s.jsxs)(a.ModalFooter, {
        children: [(0, s.jsx)(a.Button, {
          onClick: this.handleRequestElevated,
          children: E.default.Messages.ELEVATED_PERMISSIONS_SOUND_REQUEST_ACCESS_BUTTON
        }), (0, s.jsx)(a.Button, {
          look: a.Button.Looks.LINK,
          color: a.Button.Colors.PRIMARY,
          onClick: this.handleStreamWithoutSound,
          children: E.default.Messages.ELEVATED_PERMISSIONS_SOUND_NO_SOUND_BUTTON
        })]
      })]
    })
  }
  constructor(...e) {
    super(...e), h(this, "handleClose", () => {
      let {
        onClose: e
      } = this.props;
      null == e || e()
    }), h(this, "handleStreamWithoutSound", () => {
      let {
        handleStream: e,
        onClose: t,
        pid: l
      } = this.props;
      o.default.continueNonelevatedProcess(l), e(), t()
    }), h(this, "handleRequestElevated", () => {
      let {
        handleStream: e,
        onClose: t,
        pid: l
      } = this.props;
      o.default.requestElevatedProcess(l), e(), t()
    })
  }
}
t.default = S