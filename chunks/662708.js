"use strict";
t.r(s), t("47120");
var a = t("735250"),
  l = t("470079"),
  o = t("481060"),
  r = t("153867"),
  i = t("663993"),
  n = t("771845"),
  d = t("981631"),
  h = t("689938"),
  u = t("548209");

function c(e, s, t) {
  return s in e ? Object.defineProperty(e, s, {
    value: t,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[s] = t, e
}
let m = (0, i.makeLazy)({
  createPromise: () => Promise.all([t.e("49237"), t.e("24267"), t.e("40035")]).then(t.bind(t, "336231")),
  webpackId: "336231"
});
class p extends l.PureComponent {
  render() {
    let {
      transitionState: e
    } = this.props, {
      name: s,
      color: t
    } = this.state;
    return (0, a.jsxs)(o.ModalRoot, {
      transitionState: e,
      "aria-label": h.default.Messages.SERVER_FOLDER_SETTINGS,
      size: o.ModalSize.DYNAMIC,
      children: [(0, a.jsxs)(o.ModalHeader, {
        className: u.header,
        separator: !1,
        children: [(0, a.jsx)(o.Heading, {
          variant: "heading-lg/semibold",
          children: h.default.Messages.SERVER_FOLDER_SETTINGS
        }), (0, a.jsx)(o.ModalCloseButton, {
          onClick: this.close
        })]
      }), (0, a.jsx)(o.ModalContent, {
        children: (0, a.jsxs)("form", {
          onSubmit: this.handleSubmit,
          children: [(0, a.jsx)(o.FormItem, {
            title: h.default.Messages.GUILD_FOLDER_NAME,
            className: u.formItem,
            children: (0, a.jsx)(o.TextInput, {
              maxLength: d.MAX_GUILD_FOLDER_NAME_LENGTH,
              value: s,
              onChange: this.handleNameChange,
              placeholder: h.default.Messages.SERVER_FOLDER_PLACEHOLDER,
              autoFocus: !0
            })
          }), (0, a.jsx)(o.FormItem, {
            title: h.default.Messages.GUILD_FOLDER_COLOR,
            className: u.formItem,
            children: (0, a.jsx)(m, {
              defaultColor: d.DEFAULT_FOLDER_COLOR,
              colors: d.ROLE_COLORS,
              value: null != t ? t : d.DEFAULT_FOLDER_COLOR,
              onChange: this.handleColorChange
            })
          })]
        })
      }), (0, a.jsx)(o.ModalFooter, {
        children: (0, a.jsx)(o.Button, {
          type: "submit",
          onClick: this.handleSubmit,
          children: h.default.Messages.DONE
        })
      })]
    })
  }
  constructor(...e) {
    var s;
    super(...e), c(this, "state", {
      name: null !== (s = this.props.folderName) && void 0 !== s ? s : "",
      color: this.props.folderColor
    }), c(this, "close", () => {
      this.props.onClose()
    }), c(this, "handleNameChange", e => {
      this.setState({
        name: e
      })
    }), c(this, "handleColorChange", e => {
      this.setState({
        color: e
      })
    }), c(this, "handleSubmit", e => {
      e.preventDefault();
      let {
        folderId: s
      } = this.props, {
        name: t,
        color: a
      } = this.state, l = n.default.getGuildFolders().map(e => e.folderId === s ? {
        ...e,
        folderName: t,
        folderColor: a
      } : e);
      (0, r.saveGuildFolders)(l), this.close()
    })
  }
}
s.default = p