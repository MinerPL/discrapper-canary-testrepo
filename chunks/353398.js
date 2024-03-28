"use strict";
s.r(t), s.d(t, {
  GuildSettingsTemplateMetadataStore: function() {
    return M
  },
  GuildSettingsTemplateNotice: function() {
    return D
  },
  default: function() {
    return v
  }
}), s("47120");
var a, l = s("735250"),
  n = s("470079"),
  i = s("803997"),
  r = s.n(i),
  o = s("512722"),
  d = s.n(o),
  u = s("442837"),
  c = s("692547"),
  E = s("481060"),
  _ = s("570140"),
  I = s("484614"),
  T = s("852860"),
  S = s("881052"),
  f = s("751189"),
  m = s("409059"),
  N = s("518936"),
  g = s("441674"),
  h = s("696202"),
  C = s("999382"),
  R = s("58346"),
  x = s("689938"),
  L = s("255254"),
  O = s("794711");

function A(e, t, s) {
  return t in e ? Object.defineProperty(e, t, {
    value: s,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = s, e
}
class p extends(a = u.default.Store) {
  getTemplate() {
    let e = C.default.getProps().guild;
    if (null == e) return null;
    let t = m.default.getForGuild(e.id);
    return null != t && t.state !== R.GuildTemplateStates.RESOLVING ? t : null
  }
  showNotice() {
    let e = this.getTemplate();
    return null != e && null != this.name && "" !== this.name && (this.name.trim() !== e.name || this.description.trim() !== e.description)
  }
  constructor(...e) {
    super(...e), A(this, "name", ""), A(this, "description", ""), A(this, "error", null), A(this, "reset", () => {
      let e = this.getTemplate();
      if (null != e) {
        var t, s;
        this.name = null !== (t = e.name) && void 0 !== t ? t : this.name, this.description = null !== (s = e.description) && void 0 !== s ? s : this.description
      } else this.name = "", this.description = "";
      this.emitChange()
    }), A(this, "setName", e => {
      this.name = e, this.emitChange()
    }), A(this, "setDescription", e => {
      this.description = e, this.emitChange()
    }), A(this, "setError", e => {
      this.error = e, this.emitChange()
    }), A(this, "save", async () => {
      await f.default.updateGuildTemplate(C.default.getProps().guild.id, this.getTemplate().code, this.name, this.description), this.emitChange()
    })
  }
}
A(p, "displayName", "GuildSettingsTemplateMetadataStore_");
let M = new p(_.default);

function D() {
  let [e, t] = n.useState(!1), s = async () => {
    t(!0), await M.save(), t(!1)
  };
  return (0, l.jsx)(T.default, {
    submitting: e,
    onReset: M.reset,
    onSave: s
  })
}

function v() {
  return (0, l.jsx)(E.FormSection, {
    className: O.marginBottom4,
    children: (0, l.jsxs)(E.HeadingLevel, {
      component: (0, l.jsx)(E.FormTitle, {
        tag: E.FormTitleTags.H1,
        children: x.default.Messages.GUILD_TEMPLATES
      }),
      children: [(0, l.jsx)(E.FormText, {
        className: O.marginBottom20,
        type: E.FormTextTypes.DESCRIPTION,
        children: x.default.Messages.GUILD_TEMPLATE_SETTINGS_DESCRIPTION.format()
      }), (0, l.jsx)(G, {}), (0, l.jsx)(E.FormDivider, {
        className: L.divider
      }), (0, l.jsx)(j, {})]
    })
  })
}

function j() {
  let {
    guild: e
  } = C.default.getProps();
  d()(null != e, "guild cannot be null");
  let t = (0, u.useStateFromStores)([M], () => M.error),
    [s, a] = n.useState(!0),
    {
      loading: i,
      guildTemplate: r
    } = function(e) {
      let [t, s] = n.useState(!0);
      return n.useEffect(() => {
        (async function t() {
          s(!0);
          try {
            await f.default.loadTemplatesForGuild(e), s(!1)
          } catch (e) {
            M.setError(new S.APIError(e))
          }
        })()
      }, [e]), {
        loading: t,
        guildTemplate: (0, u.useStateFromStores)([m.default], () => m.default.getForGuild(e), [e])
      }
    }(e.id);
  if (n.useEffect(() => {
      if (s && !i) {
        if (null != r) {
          var e, t;
          M.setName(null !== (e = r.name) && void 0 !== e ? e : ""), M.setDescription(null !== (t = r.description) && void 0 !== t ? t : "")
        }
        a(!1)
      }
    }, [s, r, i]), n.useEffect(() => () => {
      M.reset(), M.setError(null)
    }, []), s) return null != t ? (0, l.jsx)(E.Text, {
    color: "text-danger",
    variant: "text-sm/normal",
    children: t.message
  }) : (0, l.jsx)(E.Spinner, {
    className: O.marginTop40
  });
  let o = null != t && null == t.getFirstFieldErrorMessage("name") && null == t.getFirstFieldErrorMessage("description");
  return (0, l.jsxs)(l.Fragment, {
    children: [(0, l.jsx)(P, {}), (0, l.jsx)(b, {
      guild: e,
      guildTemplate: r
    }), o ? (0, l.jsx)(E.Text, {
      className: O.marginTop8,
      color: "text-danger",
      variant: "text-sm/normal",
      children: t.getAnyErrorMessage()
    }) : null]
  })
}

function G() {
  return (0, l.jsxs)("div", {
    className: L.descriptionBox,
    children: [(0, l.jsxs)("div", {
      className: L.descriptionSection,
      children: [(0, l.jsx)(E.Heading, {
        variant: "eyebrow",
        children: x.default.Messages.GUILD_TEMPLATES_FORM_DESCRIPTION_WILL_COPY
      }), (0, l.jsxs)("div", {
        className: L.descriptionRow,
        children: [(0, l.jsx)(g.default, {
          className: L.descriptionIcon,
          color: c.default.unsafe_rawColors.GREEN_360.css,
          backgroundColor: c.default.unsafe_rawColors.WHITE_500.css
        }), x.default.Messages.GUILD_TEMPLATES_FORM_DESCRIPTION_CHANNELS]
      }), (0, l.jsxs)("div", {
        className: L.descriptionRow,
        children: [(0, l.jsx)(g.default, {
          className: L.descriptionIcon,
          color: c.default.unsafe_rawColors.GREEN_360.css,
          backgroundColor: c.default.unsafe_rawColors.WHITE_500.css
        }), x.default.Messages.GUILD_TEMPLATES_FORM_DESCRIPTION_ROLES]
      }), (0, l.jsxs)("div", {
        className: L.descriptionRow,
        children: [(0, l.jsx)(g.default, {
          className: L.descriptionIcon,
          color: c.default.unsafe_rawColors.GREEN_360.css,
          backgroundColor: c.default.unsafe_rawColors.WHITE_500.css
        }), x.default.Messages.GUILD_TEMPLATES_FORM_DESCRIPTION_SETTINGS]
      })]
    }), (0, l.jsxs)("div", {
      className: L.descriptionSection,
      children: [(0, l.jsx)(E.Heading, {
        variant: "eyebrow",
        children: x.default.Messages.GUILD_TEMPLATES_FORM_DESCRIPTION_WONT_COPY
      }), (0, l.jsxs)("div", {
        className: L.descriptionRow,
        children: [(0, l.jsx)(h.default, {
          className: L.descriptionIcon,
          color: c.default.unsafe_rawColors.RED_400.css,
          backgroundColor: c.default.unsafe_rawColors.WHITE_500.css
        }), x.default.Messages.GUILD_TEMPLATES_FORM_DESCRIPTION_MESSAGES]
      }), (0, l.jsxs)("div", {
        className: L.descriptionRow,
        children: [(0, l.jsx)(h.default, {
          className: L.descriptionIcon,
          color: c.default.unsafe_rawColors.RED_400.css,
          backgroundColor: c.default.unsafe_rawColors.WHITE_500.css
        }), x.default.Messages.GUILD_TEMPLATES_FORM_DESCRIPTION_MEMBERS]
      }), (0, l.jsxs)("div", {
        className: L.descriptionRow,
        children: [(0, l.jsx)(h.default, {
          className: L.descriptionIcon,
          color: c.default.unsafe_rawColors.RED_400.css,
          backgroundColor: c.default.unsafe_rawColors.WHITE_500.css
        }), x.default.Messages.GUILD_TEMPLATES_FORM_DESCRIPTION_PERKS]
      })]
    })]
  })
}

function U(e) {
  let {
    cancel: t,
    confirm: s
  } = e;
  return (0, l.jsx)(E.DeclarativeConfirmModal, {
    dismissable: !0,
    header: x.default.Messages.GUILD_TEMPLATES_DELETE_TEMPLATE,
    confirmText: x.default.Messages.GUILD_TEMPLATES_DELETE_TEMPLATE,
    cancelText: x.default.Messages.CANCEL,
    onCancel: t,
    onConfirm: s,
    children: (0, l.jsx)(E.Text, {
      variant: "text-md/normal",
      color: "text-normal",
      children: x.default.Messages.GUILD_TEMPLATES_DELETE_DESCRIPTION
    })
  })
}

function P() {
  let e = (0, u.useStateFromStores)([M], () => M.name),
    t = (0, u.useStateFromStores)([M], () => M.description),
    s = (0, u.useStateFromStores)([M], () => M.error);
  return (0, l.jsxs)(l.Fragment, {
    children: [(0, l.jsx)(E.FormItem, {
      className: O.marginBottom20,
      title: x.default.Messages.GUILD_TEMPLATES_FORM_LABEL_NAME,
      error: null == s ? void 0 : s.getFirstFieldErrorMessage("name"),
      children: (0, l.jsx)(E.TextInput, {
        value: e,
        onChange: e => M.setName(e),
        placeholder: x.default.Messages.GUILD_TEMPLATES_FORM_PLACEHOLDER_NAME,
        maxLength: 100
      })
    }), (0, l.jsx)(E.FormItem, {
      className: O.marginBottom20,
      title: x.default.Messages.GUILD_TEMPLATES_FORM_LABEL_DESCRIPTION,
      error: null == s ? void 0 : s.getFirstFieldErrorMessage("description"),
      children: (0, l.jsx)(E.TextArea, {
        value: t,
        onChange: e => M.setDescription(e),
        placeholder: x.default.Messages.GUILD_TEMPLATES_FORM_PLACEHOLDER_DESCRIPTION,
        maxLength: 120
      })
    })]
  })
}

function b(e) {
  let {
    guild: t,
    guildTemplate: s
  } = e;
  return null == s ? (0, l.jsx)(B, {
    guild: t
  }) : (0, l.jsxs)(l.Fragment, {
    children: [(0, l.jsx)(E.FormItem, {
      title: x.default.Messages.GUILD_TEMPLATES_FORM_LABEL_LINK,
      children: (0, l.jsx)(I.default, {
        buttonLook: E.Button.Looks.FILLED,
        buttonColor: E.Button.Colors.BRAND,
        value: (0, N.default)(s.code)
      })
    }), s.isDirty && (0, l.jsx)(E.Text, {
      color: "text-warning",
      className: O.marginTop8,
      variant: "text-sm/normal",
      children: x.default.Messages.GUILD_TEMPLATES_UNSYNCED_WARNING
    }), (0, l.jsxs)("div", {
      className: r()(O.marginTop20, L.buttonContainer),
      children: [s.isDirty && (0, l.jsx)(y, {
        guild: t,
        guildTemplate: s
      }), (0, l.jsxs)("div", {
        className: L.rightButtonContainer,
        children: [(0, l.jsx)(F, {
          guild: t,
          guildTemplate: s
        }), (0, l.jsx)(H, {
          guildTemplate: s
        })]
      })]
    }), s.isDirty && (0, l.jsx)("div", {
      className: L.lastSync,
      children: x.default.Messages.GUILD_TEMPLATES_LAST_SYNC.format({
        timestamp: new Date(s.updatedAt)
      })
    })]
  })
}

function B(e) {
  var t;
  let {
    guild: s
  } = e, a = (0, u.useStateFromStores)([M], () => M.name), [i, r] = n.useState(!1), o = async () => {
    M.setError(null), r(!0);
    try {
      await f.default.createGuildTemplate(s.id, M.name, M.description)
    } catch (e) {
      M.setError(new S.APIError(e))
    }
    r(!1)
  };
  return (0, l.jsx)(E.Button, {
    submitting: i,
    disabled: !(null != (t = a) && t.trim().length >= 2),
    color: E.Button.Colors.BRAND,
    onClick: o,
    children: x.default.Messages.GUILD_TEMPLATES_CREATE_LINK
  })
}

function y(e) {
  let {
    guild: t,
    guildTemplate: s
  } = e, [a, i] = n.useState(!1), r = async () => {
    M.setError(null), i(!0);
    try {
      await f.default.syncGuildTemplate(t.id, s.code)
    } catch (e) {
      M.setError(new S.APIError(e))
    }
    i(!1)
  };
  return (0, l.jsx)(E.Button, {
    submitting: a,
    className: L.button,
    onClick: r,
    children: x.default.Messages.GUILD_TEMPLATES_SYNC_TEMPLATE
  })
}

function F(e) {
  let {
    guild: t,
    guildTemplate: s
  } = e, [a, i] = n.useState(!1), r = async () => {
    M.setError(null);
    try {
      await f.default.deleteGuildTemplate(t.id, s.code), M.setName(""), M.setDescription("")
    } catch (e) {
      M.setError(new S.APIError(e))
    }
    i(!1)
  };
  return (0, l.jsxs)(l.Fragment, {
    children: [(0, l.jsx)(E.Button, {
      look: E.Button.Looks.OUTLINED,
      className: L.button,
      color: E.Button.Colors.RED,
      onClick: () => i(!0),
      children: x.default.Messages.GUILD_TEMPLATES_DELETE_TEMPLATE
    }), a ? (0, l.jsx)(U, {
      confirm: r,
      cancel: () => i(!1)
    }) : null]
  })
}

function H(e) {
  let {
    guildTemplate: t
  } = e;
  return (0, l.jsx)(E.Button, {
    color: E.Button.Colors.PRIMARY,
    className: L.button,
    onClick: () => (0, E.openModalLazy)(async () => {
      let {
        default: e
      } = await Promise.all([s.e("49237"), s.e("99387"), s.e("10778"), s.e("81352")]).then(s.bind(s, "766775"));
      return s => (0, l.jsx)(e, {
        ...s,
        guildTemplate: t
      })
    }),
    children: x.default.Messages.GUILD_TEMPLATES_PREVIEW_TEMPLATE
  })
}