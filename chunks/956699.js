"use strict";
s.r(t), s("47120"), s("411104");
var a = s("735250"),
  n = s("470079"),
  l = s("120356"),
  i = s.n(l),
  r = s("392711"),
  o = s.n(r),
  d = s("268146"),
  u = s("442837"),
  c = s("692547"),
  S = s("481060"),
  E = s("570140"),
  T = s("661111"),
  f = s("179658"),
  m = s("491428"),
  _ = s("225433"),
  g = s("484614"),
  h = s("386506"),
  I = s("865427"),
  N = s("758182"),
  p = s("802098"),
  C = s("663993"),
  A = s("38618"),
  O = s("906467"),
  x = s("857192"),
  R = s("558724"),
  M = s("594174"),
  v = s("808506"),
  D = s("186095"),
  L = s("285952"),
  P = s("154921"),
  j = s("998502"),
  b = s("210887"),
  U = s("601948"),
  y = s("981631"),
  B = s("908442"),
  F = s("649976"),
  G = s("199100"),
  k = s("949086"),
  w = s("819041");

function H(e, t, s) {
  return t in e ? Object.defineProperty(e, t, {
    value: s,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = s, e
}
let V = ["discord_web", "discord_marketing", "discord_developers", "discord_ios", "discord_android"],
  Y = [{
    value: "branch",
    label: "Branch Name"
  }, {
    value: "id",
    label: "Build ID"
  }];

function W(e) {
  return "discord_ios" in e || "discord_android" in e
}
class K extends n.Component {
  render() {
    let {
      project: e,
      overrideType: t,
      overrideId: s,
      disabled: n,
      error: l
    } = this.props;
    return (0, a.jsxs)(L.default, {
      direction: L.default.Direction.VERTICAL,
      className: i()(F.buildOverrideGroup, k.marginBottom20, G.card, F.row),
      children: [(0, a.jsx)(_.default, {
        className: i()(F.removeBuildOverride, {
          [F.removeBuildOverrideDisabled]: n
        }),
        onClick: n ? void 0 : this.handleRemoveBuildOverride
      }), (0, a.jsxs)(L.default, {
        className: k.marginBottom8,
        children: [(0, a.jsx)(L.default.Child, {
          basis: "50%",
          children: (0, a.jsx)(S.FormItem, {
            title: "Override Type",
            className: F.item,
            children: (0, a.jsx)(S.SingleSelect, {
              options: Y,
              onChange: this.handleOverrideTypeChanged,
              value: t,
              isDisabled: n
            })
          })
        }), (0, a.jsx)(L.default.Child, {
          basis: "50%",
          children: (0, a.jsx)(S.FormItem, {
            title: "branch" === t ? "Branch Name" : "Build ID",
            className: F.item,
            children: (0, a.jsx)(S.TextInput, {
              value: s,
              onChange: this.handleOverrideIdChanged,
              disabled: n
            })
          })
        })]
      }), (0, a.jsxs)(L.default.Child, {
        children: [null != l && "" !== l && (0, a.jsx)(S.FormText, {
          className: F.item,
          style: {
            color: c.default.unsafe_rawColors.RED_400.css
          },
          type: S.FormText.Types.DESCRIPTION,
          children: l
        }), (0, a.jsxs)(S.FormText, {
          className: F.item,
          type: S.FormText.Types.DESCRIPTION,
          children: ["This controls the build that will be served for the ", (0, a.jsx)("code", {
            children: e
          }), " project."]
        })]
      })]
    })
  }
  constructor(...e) {
    super(...e), H(this, "handleRemoveBuildOverride", () => {
      this.props.onBuildOverrideRemoved(this.props.project)
    }), H(this, "handleOverrideIdChanged", e => {
      this.props.onBuildOverrideUpdated(this.props.project, {
        id: e
      })
    }), H(this, "handleOverrideTypeChanged", e => {
      this.props.onBuildOverrideUpdated(this.props.project, {
        type: e,
        id: ""
      })
    })
  }
}
class z extends n.Component {
  async refreshBuildOverrides() {
    this.setState({
      loading: !0
    });
    let e = await (0, I.getBuildOverride)();
    this.setState({
      loading: !1,
      buildOverrides: e,
      loadedBuildOverrides: o().cloneDeep(e),
      errors: {}
    })
  }
  isDirty() {
    let {
      buildOverrides: e,
      loadedBuildOverrides: t
    } = this.state;
    return !o().isEqual(e, t)
  }
  componentDidMount() {
    this.refreshBuildOverrides()
  }
  getAvailableProjects() {
    let {
      buildOverrides: e
    } = this.state;
    if (null == e) return [];
    let t = Object.keys(e);
    return o().without(V, ...t)
  }
  renderEmpty() {
    return (0, a.jsxs)(D.default, {
      theme: b.default.theme,
      className: i()(k.marginTop40, k.marginBottom20),
      children: [(0, a.jsx)(D.EmptyStateImage, {
        darkSrc: s("770227"),
        lightSrc: s("398684"),
        width: 294,
        height: 192
      }), (0, a.jsx)(D.EmptyStateText, {
        children: "You have no build overrides configured."
      })]
    })
  }
  renderItems() {
    let {
      buildOverrides: e,
      saving: t,
      errors: s
    } = this.state;
    return null == e ? null : o().map(e, (e, n) => (0, a.jsx)(K, {
      project: n,
      overrideType: e.type,
      overrideId: e.id,
      disabled: t,
      error: s[n],
      onBuildOverrideUpdated: this.handleBuildOverrideUpdated,
      onBuildOverrideRemoved: this.handleBuildOverrideRemoved
    }, n))
  }
  renderRefreshButton() {
    return !this.state.didSave || this.isDirty() ? null : (0, a.jsx)(L.default, {
      grow: 0,
      direction: L.default.Direction.HORIZONTAL_REVERSE,
      children: (0, a.jsx)(L.default.Child, {
        grow: 0,
        children: (0, a.jsx)(S.Button, {
          onClick: () => location.reload(),
          color: S.Button.Colors.PRIMARY,
          children: "Reload App"
        })
      })
    })
  }
  renderLinkButton() {
    let {
      buildOverrides: e
    } = this.state;
    return null == e || 0 === Object.keys(e).length ? null : (0, a.jsx)(L.default, {
      grow: 0,
      direction: L.default.Direction.HORIZONTAL_REVERSE,
      children: (0, a.jsx)(L.default.Child, {
        grow: 0,
        children: (0, a.jsx)(S.Button, {
          onClick: this.handleLinkGeneration,
          color: S.Button.Colors.BRAND,
          children: "Generate Public Link"
        })
      })
    })
  }
  renderSaveButton() {
    if (!this.isDirty()) return null;
    let {
      saving: e,
      buildOverrides: t
    } = this.state;
    return (0, a.jsxs)(L.default, {
      grow: 0,
      direction: L.default.Direction.HORIZONTAL_REVERSE,
      children: [(0, a.jsx)(L.default.Child, {
        grow: 0,
        children: (0, a.jsx)(S.Button, {
          disabled: W(null != t ? t : {}),
          onClick: this.handleSaveChanges,
          submitting: e,
          color: S.Button.Colors.GREEN,
          children: "Save Build Overrides"
        })
      }), (0, a.jsx)(L.default.Child, {
        grow: 0,
        children: (0, a.jsx)(S.Button, {
          onClick: this.handleDiscardChanges,
          disabled: e,
          color: S.Button.Colors.RED,
          children: "Discard Changes"
        })
      })]
    })
  }
  render() {
    let e;
    let {
      loading: t,
      saving: s,
      buildOverrides: n
    } = this.state;
    e = t ? (0, a.jsx)(S.Spinner, {
      className: k.marginTop20
    }) : null != n && 0 === Object.keys(n).length ? this.renderEmpty() : this.renderItems();
    let l = !s && !t && this.getAvailableProjects().length > 0,
      i = W(null != n ? n : {}) && "stable" !== window.GLOBAL_ENV.RELEASE_CHANNEL ? (0, a.jsx)(S.Text, {
        color: "text-danger",
        variant: "text-md/normal",
        children: "Mobile build overrides must be generated using the desktop/web stable client for now!"
      }) : null;
    return (0, a.jsxs)(S.FormSection, {
      className: k.marginTop60,
      children: [(0, a.jsxs)(L.default, {
        className: k.marginBottom20,
        children: [(0, a.jsx)(L.default.Child, {
          children: (0, a.jsx)(S.FormTitle, {
            tag: S.FormTitleTags.H1,
            children: "Build Overrides"
          })
        }), (0, a.jsx)(L.default.Child, {
          grow: 0,
          children: (0, a.jsx)(S.Button, {
            size: S.ButtonSizes.SMALL,
            onClick: this.handleAddBuildOverride,
            disabled: !l,
            children: "Add Build Override"
          })
        })]
      }), (0, a.jsx)(S.FormDivider, {}), (0, a.jsxs)(L.default, {
        direction: L.default.Direction.VERTICAL,
        children: [i, e, (0, a.jsxs)(L.default, {
          grow: 0,
          direction: L.default.Direction.HORIZONTAL_REVERSE,
          children: [this.renderRefreshButton(), this.renderSaveButton(), this.renderLinkButton()]
        })]
      })]
    })
  }
  constructor(...e) {
    super(...e), H(this, "state", {
      loading: !0,
      buildOverrides: {},
      loadedBuildOverrides: {},
      errors: {},
      saving: !1,
      didSave: !1
    }), H(this, "handleAddBuildOverride", async () => {
      var e;
      let t = await (e = this.getAvailableProjects(), new Promise(t => {
        (0, S.openModal)(s => {
          let n = e => {
            s.onClose(), t(e)
          };
          return (0, a.jsxs)(S.ModalRoot, {
            ...s,
            "aria-label": "Choose A Project to Override",
            children: [(0, a.jsx)(S.ModalHeader, {
              separator: !1,
              children: (0, a.jsx)(S.Heading, {
                variant: "heading-lg/semibold",
                children: "Choose A Project to Override"
              })
            }), (0, a.jsx)(S.ModalContent, {
              children: (0, a.jsx)("div", {
                className: F.buildOverrideList,
                children: e.map(e => (0, a.jsx)(S.Button, {
                  value: e,
                  color: S.Button.Colors.GREEN,
                  onClick: () => n(e),
                  children: e
                }, e))
              })
            }), (0, a.jsx)(S.ModalFooter, {
              children: (0, a.jsx)(S.Button, {
                color: S.Button.Colors.PRIMARY,
                look: S.Button.Looks.LINK,
                onClick: () => n(null),
                children: "Nevermind"
              })
            })]
          })
        })
      }));
      if (null == t) return;
      let s = {
        ...this.state.buildOverrides,
        [t]: {
          type: "branch",
          id: ""
        }
      };
      this.setState({
        buildOverrides: s
      })
    }), H(this, "handleBuildOverrideUpdated", (e, t) => {
      let {
        buildOverrides: s
      } = this.state, a = {
        ...null != s ? s[e] : {},
        ...t
      }, n = {
        ...this.state.buildOverrides,
        [e]: a
      };
      this.setState({
        buildOverrides: n
      })
    }), H(this, "handleBuildOverrideRemoved", e => {
      let t = {
        ...this.state.buildOverrides
      };
      delete t[e], this.setState({
        buildOverrides: t
      })
    }), H(this, "handleDiscardChanges", () => {
      this.setState({
        buildOverrides: o().cloneDeep(this.state.loadedBuildOverrides),
        errors: {},
        didSave: !1
      })
    }), H(this, "handleSaveChanges", async () => {
      let {
        buildOverrides: e
      } = this.state;
      if (null == e) return;
      this.setState({
        saving: !0
      });
      let t = await (0, h.applyStaffBuildOverride)(e);
      if (200 === t.status) {
        let e = t.body;
        this.setState({
          buildOverrides: e,
          loadedBuildOverrides: o().cloneDeep(e),
          errors: {},
          didSave: !0,
          saving: !1
        })
      } else if (400 === t.status) {
        let e = t.body;
        this.setState({
          errors: e,
          saving: !1,
          didSave: !1
        })
      } else this.setState({
        saving: !1,
        didSave: !1
      })
    }), H(this, "handleLinkGeneration", () => {
      let {
        buildOverrides: e
      } = this.state;
      (0, S.openModal)(t => (0, a.jsx)(Q, {
        ...t,
        buildOverrides: e
      }))
    })
  }
}
class Q extends n.Component {
  isMobile() {
    var e;
    return W(null !== (e = this.props.buildOverrides) && void 0 !== e ? e : {})
  }
  renderSettingsForm() {
    let {
      ttlSeconds: e,
      releaseChannel: t,
      userIdEntry: s,
      userIdEntryError: n,
      allowedVersions: l,
      allowedVersionEntry: i,
      allowedVersionEntryError: r,
      allowLoggedOut: o,
      experiments: d,
      experimentsError: u
    } = this.state, c = B.BUILD_OVERRIDE_EXPIRATION_OPTIONS.find(t => t.value === e), E = l.map(e => ({
      label: e,
      value: e
    }));
    return (0, a.jsxs)(L.default.Child, {
      basis: "70%",
      children: [(0, a.jsx)(S.FormItem, {
        title: "Expire After",
        className: k.marginBottom20,
        children: (0, a.jsx)(S.SingleSelect, {
          value: null != c ? c.value : null,
          options: B.BUILD_OVERRIDE_EXPIRATION_OPTIONS,
          onChange: this.handleExpirationChange
        })
      }), this.isMobile() ? null : (0, a.jsx)(S.FormItem, {
        title: "Release Channel",
        className: k.marginBottom20,
        children: (0, a.jsx)(S.SingleSelect, {
          value: t,
          options: B.BUILD_OVERRIDE_RELEASE_CHANNEL_OPTIONS,
          onChange: this.handleReleaseChannelChange
        })
      }), this.isMobile() ? (0, a.jsxs)(a.Fragment, {
        children: [(0, a.jsx)(S.FormItem, {
          title: "Add allowed app version (required)",
          className: k.marginBottom20,
          children: (0, a.jsxs)(L.default, {
            direction: L.default.Direction.HORIZONTAL,
            children: [(0, a.jsx)(L.default.Child, {
              wrap: !0,
              basis: "90%",
              children: (0, a.jsx)(S.TextInput, {
                autoFocus: !0,
                value: i,
                onKeyPress: this.handleAllowedVersionEnter,
                error: r,
                onChange: this.handleAllowedVersionEntry,
                placeholder: "Example: 34"
              })
            }), (0, a.jsx)(S.Button, {
              onClick: this.handleAddAllowedVersion,
              children: "Add"
            })]
          })
        }), (0, a.jsx)(S.FormItem, {
          title: "Remove allowed app version",
          className: k.marginBottom20,
          children: (0, a.jsx)(S.SingleSelect, {
            value: null,
            options: E,
            onChange: this.handleRemoveAllowedVersion,
            isDisabled: 0 === l.length
          })
        })]
      }) : null, this.isMobile() ? null : (0, a.jsx)(a.Fragment, {
        children: (0, a.jsxs)(S.FormItem, {
          title: "Limit to User IDs (optional)",
          className: k.marginBottom20,
          children: [(0, a.jsx)(L.default, {
            direction: L.default.Direction.HORIZONTAL,
            children: (0, a.jsx)(L.default.Child, {
              wrap: !0,
              basis: "90%",
              children: (0, a.jsx)(S.TextArea, {
                value: s,
                error: n,
                onBlur: () => this.setUserEntryError(""),
                onChange: this.handleUserIDEntry
              })
            })
          }), (0, a.jsx)(S.Text, {
            variant: "text-sm/normal",
            color: "text-muted",
            className: k.marginTop8,
            children: "User IDs can be separated by whitespace or commas."
          })]
        })
      }), (0, a.jsxs)(S.FormItem, {
        title: "Client Experiment Override",
        className: k.marginBottom20,
        children: [(0, a.jsx)(L.default, {
          direction: L.default.Direction.HORIZONTAL,
          children: (0, a.jsx)(L.default.Child, {
            wrap: !0,
            basis: "90%",
            children: (0, a.jsx)(S.TextArea, {
              value: d,
              error: u,
              onChange: this.handleExperiments,
              placeholder: '{"2022-01_threads":1}'
            })
          })
        }), (0, a.jsx)(S.Text, {
          variant: "text-sm/normal",
          color: "text-muted",
          className: k.marginTop8,
          children: "Locally override the given experiments to the given bucket. This ONLY applies locally and WILL NOT affect the server. When the user clears build override, the experiment override is removed as well."
        })]
      }), (0, a.jsx)(S.FormSwitch, {
        onChange: this.handleAllowLoggedOut,
        value: o,
        children: "Allow logged out users"
      })]
    })
  }
  renderPayloadBlock() {
    let e = JSON.stringify(this.generatePayload(), null, 2),
      t = () => e,
      n = (0, a.jsx)(C.LazyLibrary, {
        createPromise: () => Promise.resolve().then(s.bind(s, "364964")),
        webpackId: "364964",
        renderFallback: t,
        render: s => {
          let n = s.highlight("json", e, !0);
          return null == n ? t() : (0, a.jsx)("code", {
            className: "hljs scroller ".concat(n.language, " ").concat(w.scrollbarGhost, " ").concat(F.codebox),
            dangerouslySetInnerHTML: {
              __html: n.value
            }
          })
        }
      });
    return (0, a.jsx)(L.default.Child, {
      children: (0, a.jsx)(S.Card, {
        children: (0, a.jsx)("pre", {
          children: n
        })
      })
    })
  }
  renderLinkForm() {
    let {
      statusTextColor: e,
      statusText: t,
      publicLink: s
    } = this.state;
    return (0, a.jsxs)("div", {
      children: [(0, a.jsx)(S.FormItem, {
        title: "Signed Link",
        children: (0, a.jsxs)(L.default, {
          children: [(0, a.jsx)(L.default.Child, {
            wrap: !0,
            basis: "75%",
            children: (0, a.jsx)(g.default, {
              value: s
            })
          }), (0, a.jsx)(S.Button, {
            onClick: this.handleGenerateLink,
            children: "Generate Link"
          })]
        })
      }), (0, a.jsx)(P.default, {
        color: e,
        className: "".concat(k.marginBottom8, " ").concat(k.marginTop8),
        children: t
      })]
    })
  }
  render() {
    let {
      onClose: e,
      transitionState: t
    } = this.props;
    return (0, a.jsxs)(S.ModalRoot, {
      size: S.ModalSize.LARGE,
      transitionState: t,
      "aria-label": "Generate Public Build Override Link",
      children: [(0, a.jsxs)(S.ModalHeader, {
        justify: L.default.Justify.BETWEEN,
        separator: !1,
        children: [(0, a.jsx)(S.Heading, {
          variant: "heading-lg/semibold",
          children: "Generate Public Build Override Link"
        }), (0, a.jsx)(S.ModalCloseButton, {
          onClick: e
        })]
      }), (0, a.jsxs)(S.ModalContent, {
        children: [(0, a.jsxs)(L.default, {
          children: [this.renderSettingsForm(), this.renderPayloadBlock()]
        }), this.renderLinkForm()]
      })]
    })
  }
  constructor(...e) {
    super(...e), H(this, "state", {
      ttlSeconds: 3600,
      releaseChannel: "all",
      userIds: new Set,
      userIdEntry: "",
      userIdEntryError: null,
      allowedVersions: [],
      allowedVersionEntry: "",
      allowedVersionEntryError: null,
      publicLink: " ",
      statusText: null,
      statusTextColor: P.default.Colors.STATUS_RED,
      allowLoggedOut: !1
    }), H(this, "setUserEntryError", e => {
      this.setState({
        userIdEntryError: e
      })
    }), H(this, "setStatusMessage", (e, t) => {
      this.setState({
        statusText: e,
        statusTextColor: null != t ? t : P.default.Colors.STATUS_RED
      })
    }), H(this, "handleUserIDEntry", e => {
      if (!/^[\d\s,]*$/.test(e)) return this.setUserEntryError("User IDs are numbers!");
      let t = new Set(e.split(/[,\s]+/).filter(Boolean));
      this.setState({
        userIdEntry: e,
        userIds: t
      })
    }), H(this, "setAllowedVersionError", e => {
      this.setState({
        allowedVersionEntryError: e
      })
    }), H(this, "handleAllowedVersionEntry", e => {
      this.setState({
        allowedVersionEntry: e
      })
    }), H(this, "handleAllowedVersionEnter", e => {
      e.charCode === y.KeyboardKeys.ENTER && this.handleAddAllowedVersion()
    }), H(this, "handleAddAllowedVersion", () => {
      let {
        allowedVersions: e,
        allowedVersionEntry: t
      } = this.state;
      return 0 === (t = t.trim()).length ? this.setAllowedVersionError("Enter a valid version number!") : e.indexOf(t) >= 0 ? this.setAllowedVersionError("You already added that version!") : void this.setState({
        allowedVersions: [...e, t],
        allowedVersionEntry: "",
        allowedVersionEntryError: ""
      })
    }), H(this, "handleRemoveAllowedVersion", e => {
      let {
        allowedVersions: t
      } = this.state;
      t = t.filter(t => t !== e), this.setState({
        allowedVersions: t
      })
    }), H(this, "handleAllowLoggedOut", e => {
      this.setState({
        allowLoggedOut: e
      })
    }), H(this, "handleExpirationChange", e => {
      this.setState({
        ttlSeconds: e
      })
    }), H(this, "handleReleaseChannelChange", e => {
      this.setState({
        releaseChannel: e
      })
    }), H(this, "handleExperiments", e => {
      if (0 === e.trim().length) {
        this.setState({
          experimentsError: void 0
        });
        return
      }
      try {
        let t = JSON.parse(e);
        for (let e in t) {
          if (null == e.match(/^[0-9]{4}\-[0-9]{2}_[a-z0-9_]+$/)) {
            this.setState({
              experimentsError: "".concat(e, " is an invalid experiment name")
            });
            return
          }
          if ("number" != typeof t[e]) {
            this.setState({
              experimentsError: "".concat(e, " has an invalid bucket override")
            });
            return
          }
        }
      } catch (e) {
        this.setState({
          experimentsError: "Unable to parse experiments ".concat(e.message)
        });
        return
      }
      this.setState({
        experiments: e,
        experimentsError: void 0
      })
    }), H(this, "generatePayload", () => ({
      overrides: this.props.buildOverrides,
      meta: {
        release_channel: "all" === this.state.releaseChannel ? null : this.state.releaseChannel,
        ttl_seconds: this.state.ttlSeconds,
        user_ids: Array.from(this.state.userIds),
        allowed_versions: this.isMobile() ? this.state.allowedVersions : void 0,
        allow_logged_out: this.state.allowLoggedOut,
        experiments: null == this.state.experiments ? null : JSON.parse(this.state.experiments)
      }
    })), H(this, "handleGenerateLink", async () => {
      if (this.isMobile() && 0 === this.state.allowedVersions.length) {
        this.setAllowedVersionError("You must add at least one allowed version for iOS");
        return
      }
      this.setStatusMessage(null);
      let e = this.generatePayload(),
        t = await (0, h.getPublicBuildOverrideLink)(e);
      !1 !== t.error ? this.setStatusMessage(JSON.stringify(t.error), P.default.Colors.STATUS_RED) : (this.setState({
        publicLink: t.url.toString()
      }), 0 === e.meta.user_ids.length && this.setStatusMessage("Warning! No users added to the whitelist! This link could be used by anyone to override their build.", P.default.Colors.STATUS_YELLOW))
    })
  }
}

function q() {
  throw Error("Send help")
}

function Z() {
  let [e, t] = n.useState(!1), [s, l] = n.useState("");
  return (n.useEffect(() => {
    (async () => {
      l(await (0, v.getOverlayURL)())
    })()
  }, []), e) ? {} : (0, a.jsxs)(a.Fragment, {
    children: [(0, a.jsxs)("div", {
      className: [F.buttonsContainer, k.marginBottom20].join(" "),
      children: [(0, a.jsx)(S.Button, {
        onClick: () => window.open(s, "_blank"),
        disabled: "" === s,
        children: "Open Overlay"
      }), (0, a.jsx)(S.Button, {
        onClick: () => {
          A.default.getSocket().close(), A.default.getSocket().connect()
        },
        children: "Reset Socket"
      }), N.ENABLE_CACHE_STORE && (0, a.jsx)(S.Button, {
        onClick: () => {
          E.default.dispatch({
            type: "CLEAR_CACHES",
            reason: "Requested by user",
            preventWritingCachesAgainThisSession: !0,
            resetSocket: !0
          })
        },
        children: "Clear Caches"
      })]
    }), (0, a.jsx)(S.FormSection, {
      title: "Crashes",
      tag: S.FormTitleTags.H1,
      children: (0, a.jsxs)("div", {
        className: F.buttonsContainer,
        children: [(0, a.jsx)(S.SingleSelect, {
          value: void 0,
          options: [{
            value: void 0,
            label: "Native libdiscord crash"
          }, {
            value: 0,
            label: "Abort()"
          }, {
            value: 1,
            label: "SIGSEGV()"
          }, {
            value: 2,
            label: "EXCEPTION_ACCESS_VIOLATION"
          }, {
            value: 3,
            label: "RaiseFailFastException"
          }, {
            value: 4,
            label: "Out of Memory"
          }],
          onChange: e => null != e && j.default.crash(e)
        }), (0, a.jsx)(S.SingleSelect, {
          value: void 0,
          options: [{
            value: void 0,
            label: "Native JS crash"
          }, {
            value: d.JSExceptionLocation.RendererProcessDelayed,
            label: "Delayed exception in renderer process"
          }, {
            value: d.JSExceptionLocation.RendererProcess,
            label: "Exception in renderer process"
          }, {
            value: d.JSExceptionLocation.MainProcess,
            label: "Exception in main process"
          }],
          onChange: e => {
            var t;
            return null != e ? (t = e, void j.default.triggerJSException(t)) : void 0
          }
        }), (0, a.jsx)(S.Button, {
          onClick: () => t(!0),
          children: "React Crash"
        }), (0, a.jsx)(S.Button, {
          onClick: q,
          children: "onClick Throw"
        })]
      })
    })]
  })
}
let X = u.default.connectStores([x.default], () => ({
  isTracingRequests: x.default.isTracingRequests,
  isForcedCanary: x.default.isForcedCanary,
  isLoggingGatewayEvents: x.default.isLoggingGatewayEvents,
  isLoggingOverlayEvents: x.default.isLoggingOverlayEvents,
  isLoggingAnalyticsEvents: x.default.isLoggingAnalyticsEvents,
  isAxeEnabled: x.default.isAxeEnabled,
  isSourceMapsEnabled: x.default.sourceMapsEnabled,
  isAnalyticsDebuggerEnabled: x.default.isAnalyticsDebuggerEnabled,
  isIdleStatusIndicatorEnabled: x.default.isIdleStatusIndicatorEnabled,
  appDirectoryIncludesInactiveCollections: x.default.appDirectoryIncludesInactiveCollections
}))(e => {
  let {
    isTracingRequests: t,
    isForcedCanary: s,
    isLoggingGatewayEvents: n,
    isLoggingOverlayEvents: l,
    isLoggingAnalyticsEvents: i,
    isAxeEnabled: r,
    isSourceMapsEnabled: o,
    isAnalyticsDebuggerEnabled: d,
    isIdleStatusIndicatorEnabled: c,
    appDirectoryIncludesInactiveCollections: E
  } = e, T = (0, u.useStateFromStores)([M.default], () => M.default.getCurrentUser());
  return (0, a.jsxs)(S.FormSection, {
    title: "Developer Flags",
    tag: S.FormTitleTags.H1,
    children: [(0, a.jsx)(S.FormSwitch, {
      value: t,
      note: "Force trace all client requests with APM",
      onChange: e => (0, f.setDeveloperOptionSettings)({
        trace: e
      }),
      children: "Enable Tracing Requests"
    }), (0, a.jsx)(S.FormSwitch, {
      value: s,
      note: "Force all API requests to canary instances",
      onChange: e => (0, f.setDeveloperOptionSettings)({
        canary: e
      }),
      children: "Enable Forced Canary"
    }), (0, a.jsx)(S.FormSwitch, {
      value: n,
      note: "Logs all incoming and outgoing gateway events to the developer console, enable verbose logging in the developer console to see! This includes all message content.",
      onChange: e => (0, f.setDeveloperOptionSettings)({
        logGatewayEvents: e
      }),
      children: "Enable Logging of Gateway Events to Console"
    }), (0, a.jsx)(S.FormSwitch, {
      value: l,
      note: "Logs all overlay related RPC events. Super noisy if an overlay is connected",
      onChange: e => (0, f.setDeveloperOptionSettings)({
        logOverlayEvents: e
      }),
      children: "Enable Logging of Overlay RPC Events & Commands"
    }), (0, a.jsx)(S.FormSwitch, {
      value: i,
      note: "Logs all analytics events to the developer console",
      onChange: e => (0, f.setDeveloperOptionSettings)({
        logAnalyticsEvents: e
      }),
      children: "Enable Logging of Analytics Events"
    }), (0, a.jsx)(S.FormSwitch, {
      value: o,
      note: "Only enable on devices you trust.",
      onChange: e => (0, f.setDeveloperOptionSettings)({
        sourceMapsEnabled: e
      }),
      children: "Enable source maps to be loaded on this client"
    }), (0, a.jsx)(S.FormSwitch, {
      value: d,
      note: "Displays a floating debugger with viewed impressions",
      onChange: e => (0, f.setDeveloperOptionSettings)({
        analyticsDebuggerEnabled: e
      }),
      children: "Enable standard analytics debugger view"
    }), (null == T ? void 0 : T.isStaff()) ? (0, a.jsx)(S.FormSwitch, {
      value: c,
      note: "Displays a floating idle status indicator",
      onChange: e => (0, f.setDeveloperOptionSettings)({
        idleStatusIndicatorEnabled: e
      }),
      children: "Enable idle status indicator"
    }) : null, null, (null == T ? void 0 : T.isStaff()) ? (0, a.jsx)(S.FormSwitch, {
      value: E,
      note: "In App Directory, include inactive collections on the homepage. Use this to preview changes to collections before publishing them.",
      onChange: e => (0, f.setDeveloperOptionSettings)({
        appDirectoryIncludesInactiveCollections: e
      }),
      children: "Preview Unpublished Collections on App Directory Homepage"
    }) : null, O.default.isDeveloper ? (0, a.jsxs)(a.Fragment, {
      children: [(0, a.jsx)("div", {
        className: [F.buttonsContainer, k.marginBottom20].join(" "),
        children: (0, a.jsx)(U.OverridePremiumTypeDropDown, {})
      }), (0, a.jsx)(S.FormDivider, {
        className: F.divider
      })]
    }) : null]
  })
});

function J() {
  let e = (0, u.useStateFromStores)([R.default], () => R.default.getSurveyOverride()),
    [t, s] = n.useState(null != e ? e : "");
  return (0, a.jsxs)(S.FormSection, {
    tag: S.FormTitleTags.H1,
    title: "Survey Override",
    className: k.marginTop60,
    children: [(0, a.jsx)(S.FormTitle, {
      children: "Copy the ID of the Survey you want to test:"
    }), (0, a.jsxs)("form", {
      className: F.surveyOverride,
      onSubmit: e => {
        e.preventDefault(), t.length > 0 ? m.overrideSurvey(t) : m.overrideSurvey(null)
      },
      children: [(0, a.jsx)(S.TextInput, {
        className: F.surveyOverrideInput,
        value: t,
        onChange: s
      }), (0, a.jsx)(S.Button, {
        type: "submit",
        children: "Save Override"
      })]
    })]
  })
}

function $() {
  var e;
  let t = (0, u.useStateFromStores)([p.default], () => p.default.overrideId()),
    [s, l] = n.useState(null !== (e = p.default.overrideId()) && void 0 !== e ? e : "");
  return (0, a.jsxs)(S.FormSection, {
    tag: S.FormTitleTags.H1,
    title: "Changelog Override",
    className: k.marginTop60,
    children: [(0, a.jsx)(S.FormTitle, {
      children: "Enter the ID of the changelog you want to test"
    }), (0, a.jsxs)("div", {
      className: F.surveyOverride,
      children: [(0, a.jsx)(S.TextInput, {
        className: F.surveyOverrideInput,
        value: s,
        onChange: l
      }), (0, a.jsx)(S.Button, {
        onClick: () => {
          "" === s ? T.default.setChangelogOverride(null) : T.default.setChangelogOverride(s)
        },
        disabled: t === s,
        children: "Update Changelog"
      })]
    })]
  })
}
class ee extends n.PureComponent {
  render() {
    return (0, a.jsxs)(n.Fragment, {
      children: [(0, a.jsx)(X, {}), (0, a.jsx)(Z, {}), (0, a.jsx)(J, {}), (0, a.jsx)($, {}), (0, a.jsx)(z, {})]
    })
  }
}
t.default = ee