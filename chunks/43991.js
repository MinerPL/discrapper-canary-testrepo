"use strict";
n.r(t), n.d(t, {
  default: function() {
    return C
  }
});
var a, s, i = n("735250"),
  d = n("470079"),
  o = n("481060"),
  c = n("841613"),
  r = n("285952"),
  l = n("626135"),
  E = n("981631"),
  D = n("689938"),
  T = n("43058");

function N(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}(a = s || (s = {})).CERTIFIED = "New Audio Device Detected - Certified", a.NOT_CERTIFIED = "New Audio Device Detected - Not Certified";
class C extends d.Component {
  track() {
    let {
      certifiedDeviceMetadata: e,
      device: t
    } = this.props;
    l.default.track(E.AnalyticEvents.OPEN_MODAL, {
      type: null != e ? "New Audio Device Detected - Certified" : "New Audio Device Detected - Not Certified",
      device_name: null != e ? "".concat(e.vendor.name, " ").concat(e.model.name) : t.displayName
    })
  }
  componentDidMount() {
    this.track()
  }
  componentDidUpdate(e) {
    let {
      device: t
    } = this.props;
    t.displayName !== e.device.displayName && this.track()
  }
  renderBody() {
    let e;
    let {
      device: t,
      certifiedDeviceMetadata: n
    } = this.props, {
      devicePreference: a
    } = this.state;
    switch (t.type) {
      case E.ConnectedDeviceType.INPUT:
        e = null != n ? D.default.Messages.CERTIFIED_DEVICE_RECOMMENDATION_AUDIO_INPUT_BODY.format({
          vendorName: n.vendor.name,
          modelName: n.model.name
        }) : D.default.Messages.CONNECTED_DEVICE_DETECTED_INPUT_BODY.format({
          name: t.displayName
        });
        break;
      case E.ConnectedDeviceType.OUTPUT:
        e = null != n ? D.default.Messages.CERTIFIED_DEVICE_RECOMMENDATION_AUDIO_OUTPUT_BODY.format({
          vendorName: n.vendor.name,
          modelName: n.model.name
        }) : D.default.Messages.CONNECTED_DEVICE_DETECTED_OUTPUT_BODY.format({
          name: t.displayName
        });
        break;
      default:
        e = (0, i.jsxs)(d.Fragment, {
          children: [null != n ? D.default.Messages.CERTIFIED_DEVICE_RECOMMENDATION_AUDIO_INPUT_AND_OUTPUT_BODY.format({
            vendorName: n.vendor.name,
            modelName: n.model.name
          }) : D.default.Messages.CONNECTED_DEVICE_DETECTED_INPUT_AND_OUTPUT_BODY.format({
            name: t.displayName
          }), (0, i.jsx)(o.RadioGroup, {
            value: a,
            className: T.options,
            onChange: this.handleConnectedDeviceType,
            options: [{
              name: D.default.Messages.CONNECTED_DEVICE_DETECTED_OPTION_INPUT_AND_OUTPUT,
              value: E.ConnectedDeviceType.INPUT_AND_OUTPUT
            }, {
              name: D.default.Messages.CONNECTED_DEVICE_DETECTED_OPTION_INPUT,
              value: E.ConnectedDeviceType.INPUT
            }, {
              name: D.default.Messages.CONNECTED_DEVICE_DETECTED_OPTION_OUTPUT,
              value: E.ConnectedDeviceType.OUTPUT
            }]
          })]
        })
    }
    return (0, i.jsxs)(d.Fragment, {
      children: [e, (0, i.jsx)(o.Button, {
        className: T.neverShow,
        look: o.Button.Looks.LINK,
        color: o.Button.Colors.LINK,
        onClick: this.neverShow,
        children: D.default.Messages.DONT_SHOW_AGAIN
      })]
    }, t.displayName)
  }
  render() {
    let {
      certifiedDeviceMetadata: e,
      transitionState: t
    } = this.props, n = null != e ? D.default.Messages.CERTIFIED_DEVICE_RECOMMENDATION_TITLE : D.default.Messages.CONNECTED_DEVICE_DETECTED_TITLE;
    return (0, i.jsxs)(o.ModalRoot, {
      transitionState: t,
      "aria-label": n,
      children: [(0, i.jsx)(o.ModalHeader, {
        separator: !1,
        children: (0, i.jsx)(o.Heading, {
          variant: "heading-lg/semibold",
          children: n
        })
      }), (0, i.jsx)(o.ModalContent, {
        children: (0, i.jsx)(o.Text, {
          variant: "text-md/normal",
          children: this.renderBody()
        })
      }), (0, i.jsx)(o.ModalFooter, {
        children: (0, i.jsxs)(r.default, {
          justify: r.default.Justify.END,
          children: [(0, i.jsx)(o.Button, {
            color: o.Button.Colors.PRIMARY,
            onClick: this.cancel,
            className: T.cancelButton,
            children: D.default.Messages.CONNECTED_DEVICE_DETECTED_CANCEL_BUTTON
          }), (0, i.jsx)(o.Button, {
            onClick: this.confirm,
            children: D.default.Messages.CONNECTED_DEVICE_DETECTED_CONFIRM_BUTTON
          })]
        })
      })]
    })
  }
  constructor(e) {
    super(e), N(this, "confirm", () => {
      let {
        device: e,
        onClose: t
      } = this.props, {
        devicePreference: n
      } = this.state;
      null != n && (c.setDevice(e.displayName, n, "New Audio Device Detected Modal"), t())
    }), N(this, "cancel", () => {
      let {
        device: e,
        onClose: t
      } = this.props;
      c.ignoreDevice(e.displayName), t()
    }), N(this, "neverShow", () => {
      let {
        certifiedDeviceMetadata: e,
        onClose: t
      } = this.props;
      c.neverShowModal(), t(), l.default.track(E.AnalyticEvents.MODAL_DISMISSED, {
        type: null != e ? "New Audio Device Detected - Certified" : "New Audio Device Detected - Not Certified",
        dismiss_type: "permanent"
      })
    }), N(this, "handleConnectedDeviceType", e => {
      let {
        value: t
      } = e;
      this.setState({
        devicePreference: t
      })
    }), this.state = {
      devicePreference: null != e.device ? function(e) {
        switch (e) {
          case E.ConnectedDeviceType.INPUT:
            return E.ConnectedDevicePreference.INPUT;
          case E.ConnectedDeviceType.OUTPUT:
            return E.ConnectedDevicePreference.OUTPUT;
          case E.ConnectedDeviceType.INPUT_AND_OUTPUT:
            return E.ConnectedDevicePreference.INPUT_AND_OUTPUT;
          default:
            return null
        }
      }(e.device.type) : null
    }
  }
}