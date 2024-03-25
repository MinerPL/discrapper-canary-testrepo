"use strict";
a.r(t), a.d(t, {
  default: function() {
    return O
  }
}), a("222007");
var n = a("37983"),
  o = a("884691"),
  l = a("748820"),
  s = a("446674"),
  r = a("819855"),
  i = a("77078"),
  c = a("371642"),
  u = a("966724"),
  d = a("9560"),
  m = a("761354"),
  f = a("161778"),
  g = a("228220"),
  p = a("258078"),
  h = a("149279"),
  _ = a("315102"),
  v = a("773336"),
  E = a("367632"),
  R = a("374159"),
  T = a("782340"),
  x = a("521870"),
  I = a("741161"),
  S = a("687444");
let N = ["Android", "iOS", "Windows Mobile", "Windows", "Linux", "Mac OS X"].map(e => ({
  label: e,
  value: e
}));

function O(e) {
  var t, O, b, j, L;
  let {
    transitionState: C,
    onClose: P
  } = e, U = o.useRef(null), y = o.useRef(null), [B, M] = o.useState(""), [w, D] = o.useState(""), [F, G] = o.useState(), [A, V] = o.useState(""), [k, H] = o.useState([]), [Y, W] = o.useState(), [K, z] = o.useState(), [J, X] = o.useState(!1), [Q, q] = o.useState(""), [Z, $] = o.useState(function(e) {
    switch (e) {
      case "windows":
        return "Windows";
      case "macos":
        return "Mac OS X";
      case "linux":
        return "Linux"
    }
    return ""
  }((0, v.getOS)())), [ee, et] = o.useState(""), [ea, en] = o.useState(""), [eo, el] = o.useState(""), [es, er] = o.useState(""), [ei, ec] = o.useState(!1), [eu, ed] = o.useState(!1), [em, ef] = o.useState(!1), eg = () => {
    null == P || P()
  }, ep = e => {
    H(k.filter(t => t.id !== e))
  };
  async function eh() {
    var e;
    if (ef(!1), "" === B || null == F) {
      ec(!0);
      return
    }
    let t = null == Y ? void 0 : null === (e = Y.features) || void 0 === e ? void 0 : e.find(e => (0, E.getFeatureId)(e) === K);
    ed(!0), ec(!1);
    let o = (0, R.getAttachments)(k.map(e => {
        let {
          item: t
        } = e;
        return t
      })),
      l = !0 === J ? {
        overridePlatformInformation: J,
        device: Q,
        operatingSystem: Z,
        operatingSystemVersion: ee,
        clientVersion: ea,
        clientBuildNumber: eo,
        locale: es
      } : {
        overridePlatformInformation: J
      },
      s = await (0, E.submitReport)({
        name: B,
        description: w,
        priority: F,
        feature: t,
        url: A
      }, l, o).catch(() => ef(!0));
    ed(!1), null != s && s.ok ? (window.open(s.body.permalink_url, "_blank"), eg(), (0, i.openModalLazy)(async () => {
      let {
        default: e
      } = await a.el("223993").then(a.bind(a, "223993"));
      return t => (0, n.jsx)(e, {
        ...t,
        asanaTask: s.body
      })
    })) : ef(!0)
  }
  o.useEffect(() => {
    (async function e() {
      let e = await (0, E.fetchBugReportConfig)();
      W(e)
    })()
  }, []), o.useEffect(() => {
    if (k.length > 0) {
      var e;
      null === (e = y.current) || void 0 === e || e.scrollIntoView({
        behavior: "smooth",
        block: "end"
      })
    }
  }, [k]);
  let e_ = (0, s.useStateFromStores)([f.default], () => f.default.theme),
    ev = (0, r.isThemeDark)(e_) ? I : S;
  return (0, n.jsx)(i.ModalRoot, {
    className: x.modalRoot,
    transitionState: C,
    "aria-label": T.default.Messages.SUBMIT_BUG,
    children: (0, n.jsx)(i.ModalContent, {
      className: x.modalContent,
      paddingFix: !1,
      children: (0, n.jsx)("div", {
        className: x.container,
        children: (0, n.jsx)(i.HeadingLevel, {
          forceLevel: 1,
          component: (0, n.jsx)("div", {
            className: x.sidebarContainer,
            children: (0, n.jsx)(p.default, {
              strong: !0,
              color: p.default.Colors.HEADER_PRIMARY,
              size: p.default.Sizes.SIZE_24,
              children: (0, n.jsx)(i.H, {
                children: T.default.Messages.BUG_REPORT_TITLE
              })
            })
          }),
          children: (0, n.jsxs)("div", {
            className: x.contentContainer,
            children: [(0, n.jsx)("img", {
              className: x.contentIcon,
              alt: "",
              src: ev
            }), (0, n.jsxs)("form", {
              className: x.form,
              onSubmit: eh,
              children: [(0, n.jsx)(i.FormItem, {
                error: ei && "" === B ? T.default.Messages.REQUIRED : null,
                title: T.default.Messages.BUG_REPORT_NAME,
                className: x.formInput,
                children: (0, n.jsx)(i.TextInput, {
                  placeholder: "Something is broken on this screen.",
                  type: "text",
                  value: B,
                  maxLength: 100,
                  onChange: M
                })
              }), (0, n.jsxs)(i.FormItem, {
                title: T.default.Messages.BUG_REPORT_DESCRIPTION,
                className: x.formInput,
                children: [(0, n.jsx)(i.TextArea, {
                  placeholder: "What did you expect to see?",
                  value: w,
                  onChange: D
                }), (0, n.jsx)(i.Text, {
                  variant: "text-sm/normal",
                  color: "info-help-text",
                  children: "You can add additional information/media on the ticket after submitting"
                })]
              }), (0, n.jsx)(i.FormItem, {
                error: ei && void 0 === F ? T.default.Messages.REQUIRED : null,
                title: T.default.Messages.BUG_REPORT_PRIORITY,
                className: x.formInput,
                children: (0, n.jsx)(i.SingleSelect, {
                  renderOptionLabel: e => (function(e) {
                    let t = e.priority;
                    return (0, n.jsxs)("div", {
                      className: x.formPriorityImageContainer,
                      children: [(0, n.jsxs)("div", {
                        className: x.formPriorityTitleContainer,
                        children: [(0, n.jsx)("img", {
                          alt: "",
                          className: x.formPriorityImage,
                          src: (0, _.getEmojiURL)({
                            id: t.emoji,
                            animated: !0,
                            size: 48
                          })
                        }), (0, n.jsx)(i.Text, {
                          color: "header-primary",
                          variant: "text-sm/semibold",
                          className: x.formPriorityTitle,
                          children: t.title
                        })]
                      }), (0, n.jsx)(i.Text, {
                        color: "header-secondary",
                        variant: "text-xs/normal",
                        className: x.formPriorityDescription,
                        children: t.description
                      })]
                    })
                  })(e),
                  onChange: G,
                  options: (0, E.getPriorities)().map(e => ({
                    priority: e,
                    value: e.value,
                    label: e.title
                  })),
                  value: F,
                  maxVisibleItems: 3,
                  closeOnSelect: !0
                })
              }), (0, n.jsx)(i.FormItem, {
                title: T.default.Messages.BUG_REPORT_FEATURE_AREA,
                className: x.formInput,
                children: (0, n.jsx)(i.SearchableSelect, {
                  value: K,
                  options: null !== (L = null == (t = Y) ? void 0 : null === (j = t.features) || void 0 === j ? void 0 : null === (b = j.filter(e => "" !== (0, E.getFeatureId)(e))) || void 0 === b ? void 0 : null === (O = b.map(e => {
                    var t;
                    return {
                      label: null !== (t = e.name) && void 0 !== t ? t : "",
                      value: (0, E.getFeatureId)(e)
                    }
                  })) || void 0 === O ? void 0 : O.sort((e, t) => e.label.localeCompare(t.label))) && void 0 !== L ? L : [],
                  isDisabled: null == Y,
                  onChange: e => z(e)
                })
              }), (0, n.jsx)(i.FormItem, {
                title: T.default.Messages.BUG_REPORT_URL,
                className: x.formInput,
                children: (0, n.jsx)(i.TextInput, {
                  placeholder: T.default.Messages.BUG_REPORT_EXTERNAL_SOURCE,
                  type: "text",
                  value: A,
                  maxLength: 5e3,
                  onChange: V
                })
              }), (0, n.jsx)(i.FormItem, {
                className: x.formInput,
                children: (0, n.jsx)(i.Checkbox, {
                  value: J,
                  onChange: (e, t) => X(t),
                  children: (0, n.jsx)(i.Text, {
                    variant: "text-sm/normal",
                    color: "info-help-text",
                    children: T.default.Messages.BUG_REPORT_OVERRIDE_PLATFORM_INFORMATION
                  })
                })
              }), J ? (0, n.jsxs)(n.Fragment, {
                children: [(0, n.jsx)(i.FormItem, {
                  title: T.default.Messages.BUG_REPORT_DEVICE,
                  className: x.formInput,
                  children: (0, n.jsx)(i.TextInput, {
                    placeholder: "Device",
                    value: Q,
                    onChange: e => q(e)
                  })
                }), (0, n.jsx)(i.FormItem, {
                  title: T.default.Messages.BUG_REPORT_OS,
                  className: x.formInput,
                  children: (0, n.jsx)(i.SingleSelect, {
                    value: Z,
                    options: N,
                    onChange: e => $(e)
                  })
                }), (0, n.jsx)(i.FormItem, {
                  title: T.default.Messages.BUG_REPORT_OS_VERSION,
                  className: x.formInput,
                  children: (0, n.jsx)(i.TextInput, {
                    placeholder: "Operating System Version",
                    value: ee,
                    onChange: e => et(e)
                  })
                }), (0, n.jsx)(i.FormItem, {
                  title: T.default.Messages.BUG_REPORT_CLIENT_VERSION,
                  className: x.formInput,
                  children: (0, n.jsx)(i.TextInput, {
                    placeholder: "Client Version",
                    value: ea,
                    onChange: e => en(e)
                  })
                }), (0, n.jsx)(i.FormItem, {
                  title: T.default.Messages.BUG_REPORT_CLIENT_BUILD_NUMBER,
                  className: x.formInput,
                  children: (0, n.jsx)(i.TextInput, {
                    placeholder: "Client Build Number",
                    value: eo,
                    onChange: e => el(e)
                  })
                }), (0, n.jsx)(i.FormItem, {
                  title: T.default.Messages.BUG_REPORT_LOCALE,
                  className: x.formInput,
                  children: (0, n.jsx)(i.TextInput, {
                    placeholder: "Locale",
                    value: es,
                    onChange: e => er(e)
                  })
                })]
              }) : null, (0, n.jsxs)(i.Button, {
                className: x.uploadButton,
                children: [T.default.Messages.BUG_REPORT_ADD_ATTACHMENTS, (0, n.jsx)(c.default, {
                  ref: U,
                  onChange: e => {
                    var t, a;
                    if ((null === (a = e.currentTarget) || void 0 === a ? void 0 : null === (t = a.files) || void 0 === t ? void 0 : t[0]) != null) {
                      let t = Array.from(e.currentTarget.files).map(e => new u.default({
                        id: (0, l.v4)(),
                        file: e,
                        platform: u.UploadPlatform.WEB
                      }));
                      H([...k, ...t])
                    }
                  },
                  multiple: !0
                })]
              }), k.length > 0 ? (0, n.jsxs)(n.Fragment, {
                children: [(0, n.jsx)("div", {
                  className: x.imageOptionsContainer,
                  children: (0, n.jsx)(i.FormTitle, {
                    children: "Preview"
                  })
                }), (0, n.jsx)("div", {
                  ref: y,
                  className: x.attachmentsGrid,
                  children: k.length > 0 && k.map(e => (0, n.jsxs)("div", {
                    className: x.attachmentsGridItem,
                    children: [(0, n.jsx)(i.Text, {
                      variant: "text-sm/normal",
                      children: e.filename
                    }), (0, n.jsxs)("div", {
                      className: x.attachmentContainer,
                      children: [(0, n.jsx)(m.UploadIcon, {
                        upload: e
                      }), (0, n.jsx)("div", {
                        className: x.toolBar,
                        children: (0, n.jsx)(h.default, {
                          children: (0, n.jsx)(d.default, {
                            tooltip: T.default.Messages.ATTACHMENT_UTILITIES_REMOVE,
                            onClick: () => ep(e.id),
                            dangerous: !0,
                            children: (0, n.jsx)(g.default, {})
                          })
                        })
                      })]
                    })]
                  }, e.id))
                })]
              }) : null, em ? (0, n.jsx)(i.Text, {
                color: "text-danger",
                variant: "text-sm/normal",
                children: "Something went wrong, try again!"
              }) : null]
            }), (0, n.jsxs)(i.ModalFooter, {
              className: x.submitContainer,
              children: [(0, n.jsx)(i.Button, {
                className: x.formButton,
                look: i.ButtonLooks.BLANK,
                onClick: eg,
                children: (0, n.jsx)(i.Text, {
                  variant: "text-sm/normal",
                  children: T.default.Messages.CANCEL
                })
              }), (0, n.jsx)(i.Button, {
                submitting: eu,
                className: x.formButton,
                onClick: eh,
                children: "Submit and Open Report"
              })]
            })]
          })
        })
      })
    })
  })
}