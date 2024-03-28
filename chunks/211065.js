"use strict";
s.r(t), s("47120");
var a = s("735250"),
  l = s("470079"),
  n = s("512722"),
  u = s.n(n),
  r = s("442837"),
  i = s("481060"),
  o = s("596454"),
  S = s("410575"),
  d = s("907040"),
  h = s("246133"),
  c = s("695346"),
  m = s("293273"),
  T = s("594174"),
  f = s("401227"),
  p = s("696202"),
  C = s("626135"),
  A = s("51144"),
  g = s("720449"),
  M = s("875425"),
  N = s("981631"),
  _ = s("185923"),
  j = s("689938"),
  O = s("445142");

function U(e, t, s) {
  return t in e ? Object.defineProperty(e, t, {
    value: s,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = s, e
}
let x = Object.values(M.ClearAfterValues).filter(e => "number" == typeof e).sort((e, t) => e - t);

function v(e) {
  return (0, a.jsxs)("div", {
    className: O.statusOptionItem,
    children: [(0, a.jsx)(i.Status, {
      status: e.value,
      size: 10,
      className: O.statusIcon
    }), e.label]
  })
}
let E = [{
  key: 1,
  value: i.StatusTypes.ONLINE,
  label: (0, A.humanizeStatus)(i.StatusTypes.ONLINE)
}, {
  key: 2,
  value: i.StatusTypes.IDLE,
  label: (0, A.humanizeStatus)(i.StatusTypes.IDLE)
}, {
  key: 3,
  value: i.StatusTypes.DND,
  label: (0, A.humanizeStatus)(i.StatusTypes.DND)
}, {
  key: 4,
  value: i.StatusTypes.INVISIBLE,
  label: (0, A.humanizeStatus)(i.StatusTypes.INVISIBLE)
}];
class y extends l.PureComponent {
  componentDidMount() {
    let {
      sourceAnalyticsContext: e
    } = this.props;
    C.default.track(N.AnalyticEvents.OPEN_MODAL, {
      source: e.location,
      type: N.AnalyticsSections.CUSTOM_STATUS_MODAL,
      load_id: e.loadId
    })
  }
  get clearAfterOptions() {
    return [{
      key: 1,
      value: M.ClearAfterValues.TODAY,
      label: j.default.Messages.CUSTOM_STATUS_TODAY
    }, {
      key: 2,
      value: M.ClearAfterValues.HOURS_4,
      label: j.default.Messages.CUSTOM_STATUS_HOURS.format({
        hours: 4
      })
    }, {
      key: 3,
      value: M.ClearAfterValues.HOURS_1,
      label: j.default.Messages.CUSTOM_STATUS_HOURS.format({
        hours: 1
      })
    }, {
      key: 4,
      value: M.ClearAfterValues.MINUTES_30,
      label: j.default.Messages.CUSTOM_STATUS_MINUTES.format({
        minutes: 30
      })
    }, {
      key: 5,
      value: null,
      label: j.default.Messages.CUSTOM_STATUS_DONT_CLEAR
    }]
  }
  get analyticsLocation() {
    return {
      page: N.AnalyticsPages.CUSTOM_STATUS_MODAL
    }
  }
  getEmojiButtonRenderer() {
    let {
      emojiInfo: e
    } = this.state;
    return null == e ? null : () => (0, a.jsx)(o.default, {
      className: O.emoji,
      emojiId: e.id,
      emojiName: e.name,
      animated: !!e.animated
    })
  }
  renderCustomStatusInput() {
    let {
      user: e
    } = this.props, {
      text: t,
      emojiInfo: s
    } = this.state;
    return (0, a.jsx)(i.FormSection, {
      className: O.formGroup,
      title: j.default.Messages.CUSTOM_STATUS_MODAL_BODY.format({
        username: e.username
      }),
      children: (0, a.jsxs)("div", {
        className: O.inputContainer,
        children: [(0, a.jsx)("div", {
          className: O.emojiButtonContainer,
          children: (0, a.jsx)(i.Popout, {
            renderPopout: this.renderEmojiPicker,
            position: "left",
            animation: i.Popout.Animation.NONE,
            align: "top",
            children: (e, t) => {
              let {
                isShown: s
              } = t;
              return (0, a.jsx)(f.default, {
                ...e,
                active: s,
                className: O.emojiButton,
                tabIndex: 0,
                renderButtonContents: this.getEmojiButtonRenderer()
              })
            }
          })
        }), (0, a.jsx)(i.TextInput, {
          maxLength: M.STATUS_MAX_LENGTH,
          value: t,
          inputClassName: O.input,
          placeholder: j.default.Messages.CUSTOM_STATUS_MODAL_PLACEHOLDER,
          onChange: this.handleStatusChange,
          onKeyPress: this.handleKeyPress,
          autoFocus: !0
        }), t.length > 0 || null != s ? (0, a.jsx)(i.Button, {
          focusProps: {
            offset: {
              top: 8,
              bottom: 8,
              left: -2,
              right: -2
            }
          },
          className: O.clearButton,
          onClick: this.handleClearStatus,
          look: i.Button.Looks.BLANK,
          size: i.Button.Sizes.NONE,
          children: (0, a.jsx)(p.default, {
            className: O.clearIcon
          })
        }) : null]
      })
    })
  }
  renderClearAfter() {
    let {
      clearAfter: e
    } = this.state;
    return (0, a.jsx)(i.FormSection, {
      className: O.formGroup,
      title: j.default.Messages.CUSTOM_STATUS_CLEAR_AFTER,
      children: (0, a.jsx)(i.SingleSelect, {
        placeholder: j.default.Messages.CUSTOM_STATUS_CLEAR_AFTER,
        maxVisibleItems: 5,
        value: e,
        options: this.clearAfterOptions,
        onChange: this.handleChangeClearAfter
      })
    })
  }
  renderStatusInput() {
    let {
      status: e
    } = this.state;
    return (0, a.jsx)(i.FormSection, {
      className: O.formGroup,
      title: j.default.Messages.CUSTOM_STATUS_STATUS_TITLE,
      children: (0, a.jsx)(i.SingleSelect, {
        maxVisibleItems: 4,
        value: e,
        options: E,
        onChange: this.handleChangeStatus,
        renderOptionLabel: v
      })
    })
  }
  render() {
    let {
      transitionState: e,
      onClose: t
    } = this.props;
    return (0, a.jsx)(S.default, {
      ...this.analyticsLocation,
      children: (0, a.jsxs)(i.ModalRoot, {
        transitionState: e,
        className: O.modalRoot,
        "aria-label": j.default.Messages.CUSTOM_STATUS_SET_CUSTOM_STATUS,
        children: [(0, a.jsxs)(i.ModalHeader, {
          separator: !1,
          className: O.headerContainer,
          children: [(0, a.jsx)("div", {
            className: O.art
          }), (0, a.jsx)("div", {
            className: O.header,
            children: (0, a.jsx)(i.H, {
              className: O.headerText,
              children: j.default.Messages.CUSTOM_STATUS_SET_CUSTOM_STATUS
            })
          }), (0, a.jsx)(i.ModalCloseButton, {
            onClick: t,
            className: O.modalCloseButton
          })]
        }), (0, a.jsxs)(i.ModalContent, {
          children: [this.renderCustomStatusInput(), this.renderClearAfter(), (0, a.jsx)(i.FormDivider, {
            className: O.formDivider
          }), this.renderStatusInput()]
        }), (0, a.jsxs)(i.ModalFooter, {
          children: [(0, a.jsx)(i.Button, {
            onClick: this.handleSubmit,
            children: j.default.Messages.SAVE
          }), (0, a.jsx)(i.Button, {
            onClick: t,
            look: i.Button.Looks.LINK,
            color: O.cancelButton,
            children: j.default.Messages.CANCEL
          })]
        })]
      })
    })
  }
  constructor(...e) {
    super(...e), U(this, "state", {
      emojiInfo: null != this.props.customStatus ? this.props.customStatus.emoji : null,
      text: null != this.props.customStatus && null != this.props.customStatus.state ? this.props.customStatus.state : "",
      clearAfter: function() {
        var e, t, s;
        let a = c.CustomStatusSetting.getSetting();
        if (null == a || "" === a.expiresAtMs) return M.ClearAfterValues.TODAY;
        let l = Number(a.expiresAtMs);
        if (isNaN(l)) return M.ClearAfterValues.TODAY;
        let n = new Date,
          u = new Date(l);
        if (t = n, s = u, t.getFullYear() !== s.getFullYear() || t.getMonth() !== s.getMonth() || t.getDate() !== s.getDate()) return M.ClearAfterValues.TODAY;
        let r = Number(l) - Date.now();
        return null !== (e = x.find(e => r <= e)) && void 0 !== e ? e : M.ClearAfterValues.TODAY
      }(),
      status: function() {
        let e = c.StatusSetting.getSetting();
        return E.some(t => t.value === e) ? e : i.StatusTypes.ONLINE
      }()
    }), U(this, "handleClearStatus", () => {
      this.setState({
        emojiInfo: null,
        text: ""
      })
    }), U(this, "handleSubmit", e => {
      e.preventDefault(), this.handleSaveStatus()
    }), U(this, "handleStatusChange", e => {
      this.setState({
        text: e
      })
    }), U(this, "handleEmojiChange", e => {
      if (null == e) return;
      let t = null != e.id ? {
        id: e.id,
        name: e.name,
        animated: e.animated
      } : {
        id: null,
        name: e.optionallyDiverseSequence,
        animated: !1
      };
      this.setState({
        emojiInfo: t
      })
    }), U(this, "handleChangeClearAfter", e => {
      this.setState({
        clearAfter: e
      })
    }), U(this, "handleChangeStatus", e => {
      this.setState({
        status: e
      })
    }), U(this, "handleSaveStatus", () => {
      let {
        sourceAnalyticsContext: e,
        onClose: t
      } = this.props, {
        emojiInfo: s,
        text: a,
        clearAfter: l,
        status: n
      } = this.state, u = c.StatusSetting.getSetting();
      u !== n && (0, h.default)(n, u, e), (0, g.default)(a, s, l, e), t()
    }), U(this, "handleKeyPress", e => {
      e.which === N.KeyboardKeys.ENTER && this.handleSaveStatus()
    }), U(this, "renderEmojiPicker", e => {
      let {
        closePopout: t
      } = e, {
        onClose: s
      } = this.props;
      return (0, a.jsx)(d.default, {
        closePopout: t,
        onSelectEmoji: (e, s) => {
          this.handleEmojiChange(e), s && t()
        },
        pickerIntention: _.EmojiIntention.STATUS,
        onNavigateAway: s
      })
    })
  }
}
t.default = r.default.connectStores([m.default, T.default], () => {
  let e = T.default.getCurrentUser();
  return u()(null != e, "CustomStatusModal: user cannot be null"), {
    customStatus: m.default.getCustomStatusActivity(),
    user: e
  }
}, {
  forwardRef: !0
})(y)