"use strict";
s.r(t), s.d(t, {
  GuildSettingsTemplateMetadataStore: function() {
    return A
  },
  GuildSettingsTemplateNotice: function() {
    return p
  },
  default: function() {
    return M
  }
}), s("222007");
var a = s("37983"),
  l = s("884691"),
  n = s("414456"),
  i = s.n(n),
  r = s("627445"),
  o = s.n(r),
  d = s("446674"),
  u = s("669491"),
  c = s("77078"),
  E = s("913144"),
  _ = s("913801"),
  I = s("45299"),
  T = s("448993"),
  S = s("883069"),
  f = s("569808"),
  m = s("658329"),
  N = s("578706"),
  g = s("381546"),
  h = s("900938"),
  C = s("579033"),
  R = s("782340"),
  x = s("987107"),
  L = s("890957");
class O extends d.default.Store {
  getTemplate() {
    let e = h.default.getProps().guild;
    if (null == e) return null;
    let t = f.default.getForGuild(e.id);
    return null != t && t.state !== C.GuildTemplateStates.RESOLVING ? t : null
  }
  showNotice() {
    let e = this.getTemplate();
    return null != e && null != this.name && "" !== this.name && (this.name.trim() !== e.name || this.description.trim() !== e.description)
  }
  constructor(...e) {
    super(...e), this.name = "", this.description = "", this.error = null, this.reset = () => {
      let e = this.getTemplate();
      if (null != e) {
        var t, s;
        this.name = null !== (t = e.name) && void 0 !== t ? t : this.name, this.description = null !== (s = e.description) && void 0 !== s ? s : this.description
      } else this.name = "", this.description = "";
      this.emitChange()
    }, this.setName = e => {
      this.name = e, this.emitChange()
    }, this.setDescription = e => {
      this.description = e, this.emitChange()
    }, this.setError = e => {
      this.error = e, this.emitChange()
    }, this.save = async () => {
      await S.default.updateGuildTemplate(h.default.getProps().guild.id, this.getTemplate().code, this.name, this.description), this.emitChange()
    }
  }
}
O.displayName = "GuildSettingsTemplateMetadataStore_";
let A = new O(E.default);

function p() {
  let [e, t] = l.useState(!1), s = async () => {
    t(!0), await A.save(), t(!1)
  };
  return (0, a.jsx)(I.default, {
    submitting: e,
    onReset: A.reset,
    onSave: s
  })
}

function M() {
  return (0, a.jsx)(c.FormSection, {
    className: L.marginBottom4,
    children: (0, a.jsxs)(c.HeadingLevel, {
      component: (0, a.jsx)(c.FormTitle, {
        tag: c.FormTitleTags.H1,
        children: R.default.Messages.GUILD_TEMPLATES
      }),
      children: [(0, a.jsx)(c.FormText, {
        className: L.marginBottom20,
        type: c.FormTextTypes.DESCRIPTION,
        children: R.default.Messages.GUILD_TEMPLATE_SETTINGS_DESCRIPTION.format()
      }), (0, a.jsx)(v, {}), (0, a.jsx)(c.FormDivider, {
        className: x.divider
      }), (0, a.jsx)(D, {})]
    })
  })
}

function D() {
  let {
    guild: e
  } = h.default.getProps();
  o(null != e, "guild cannot be null");
  let t = (0, d.useStateFromStores)([A], () => A.error),
    [s, n] = l.useState(!0),
    {
      loading: i,
      guildTemplate: r
    } = function(e) {
      let [t, s] = l.useState(!0);
      l.useEffect(() => {
        (async function t() {
          s(!0);
          try {
            await S.default.loadTemplatesForGuild(e), s(!1)
          } catch (e) {
            A.setError(new T.APIError(e))
          }
        })()
      }, [e]);
      let a = (0, d.useStateFromStores)([f.default], () => f.default.getForGuild(e), [e]);
      return {
        loading: t,
        guildTemplate: a
      }
    }(e.id);
  if (l.useEffect(() => {
      if (s && !i) {
        if (null != r) {
          var e, t;
          A.setName(null !== (e = r.name) && void 0 !== e ? e : ""), A.setDescription(null !== (t = r.description) && void 0 !== t ? t : "")
        }
        n(!1)
      }
    }, [s, r, i]), l.useEffect(() => () => {
      A.reset(), A.setError(null)
    }, []), s) return null != t ? (0, a.jsx)(c.Text, {
    color: "text-danger",
    variant: "text-sm/normal",
    children: t.message
  }) : (0, a.jsx)(c.Spinner, {
    className: L.marginTop40
  });
  let u = null != t && null == t.getFirstFieldErrorMessage("name") && null == t.getFirstFieldErrorMessage("description");
  return (0, a.jsxs)(a.Fragment, {
    children: [(0, a.jsx)(j, {}), (0, a.jsx)(U, {
      guild: e,
      guildTemplate: r
    }), u ? (0, a.jsx)(c.Text, {
      className: L.marginTop8,
      color: "text-danger",
      variant: "text-sm/normal",
      children: t.getAnyErrorMessage()
    }) : null]
  })
}

function v() {
  return (0, a.jsxs)("div", {
    className: x.descriptionBox,
    children: [(0, a.jsxs)("div", {
      className: x.descriptionSection,
      children: [(0, a.jsx)(c.Heading, {
        variant: "eyebrow",
        children: R.default.Messages.GUILD_TEMPLATES_FORM_DESCRIPTION_WILL_COPY
      }), (0, a.jsxs)("div", {
        className: x.descriptionRow,
        children: [(0, a.jsx)(N.default, {
          className: x.descriptionIcon,
          color: u.default.unsafe_rawColors.GREEN_360.css,
          backgroundColor: u.default.unsafe_rawColors.WHITE_500.css
        }), R.default.Messages.GUILD_TEMPLATES_FORM_DESCRIPTION_CHANNELS]
      }), (0, a.jsxs)("div", {
        className: x.descriptionRow,
        children: [(0, a.jsx)(N.default, {
          className: x.descriptionIcon,
          color: u.default.unsafe_rawColors.GREEN_360.css,
          backgroundColor: u.default.unsafe_rawColors.WHITE_500.css
        }), R.default.Messages.GUILD_TEMPLATES_FORM_DESCRIPTION_ROLES]
      }), (0, a.jsxs)("div", {
        className: x.descriptionRow,
        children: [(0, a.jsx)(N.default, {
          className: x.descriptionIcon,
          color: u.default.unsafe_rawColors.GREEN_360.css,
          backgroundColor: u.default.unsafe_rawColors.WHITE_500.css
        }), R.default.Messages.GUILD_TEMPLATES_FORM_DESCRIPTION_SETTINGS]
      })]
    }), (0, a.jsxs)("div", {
      className: x.descriptionSection,
      children: [(0, a.jsx)(c.Heading, {
        variant: "eyebrow",
        children: R.default.Messages.GUILD_TEMPLATES_FORM_DESCRIPTION_WONT_COPY
      }), (0, a.jsxs)("div", {
        className: x.descriptionRow,
        children: [(0, a.jsx)(g.default, {
          className: x.descriptionIcon,
          color: u.default.unsafe_rawColors.RED_400.css,
          backgroundColor: u.default.unsafe_rawColors.WHITE_500.css
        }), R.default.Messages.GUILD_TEMPLATES_FORM_DESCRIPTION_MESSAGES]
      }), (0, a.jsxs)("div", {
        className: x.descriptionRow,
        children: [(0, a.jsx)(g.default, {
          className: x.descriptionIcon,
          color: u.default.unsafe_rawColors.RED_400.css,
          backgroundColor: u.default.unsafe_rawColors.WHITE_500.css
        }), R.default.Messages.GUILD_TEMPLATES_FORM_DESCRIPTION_MEMBERS]
      }), (0, a.jsxs)("div", {
        className: x.descriptionRow,
        children: [(0, a.jsx)(g.default, {
          className: x.descriptionIcon,
          color: u.default.unsafe_rawColors.RED_400.css,
          backgroundColor: u.default.unsafe_rawColors.WHITE_500.css
        }), R.default.Messages.GUILD_TEMPLATES_FORM_DESCRIPTION_PERKS]
      })]
    })]
  })
}

function G(e) {
  let {
    cancel: t,
    confirm: s
  } = e;
  return (0, a.jsx)(c.DeclarativeConfirmModal, {
    dismissable: !0,
    header: R.default.Messages.GUILD_TEMPLATES_DELETE_TEMPLATE,
    confirmText: R.default.Messages.GUILD_TEMPLATES_DELETE_TEMPLATE,
    cancelText: R.default.Messages.CANCEL,
    onCancel: t,
    onConfirm: s,
    children: (0, a.jsx)(c.Text, {
      variant: "text-md/normal",
      color: "text-normal",
      children: R.default.Messages.GUILD_TEMPLATES_DELETE_DESCRIPTION
    })
  })
}

function j() {
  let e = (0, d.useStateFromStores)([A], () => A.name),
    t = (0, d.useStateFromStores)([A], () => A.description),
    s = (0, d.useStateFromStores)([A], () => A.error);
  return (0, a.jsxs)(a.Fragment, {
    children: [(0, a.jsx)(c.FormItem, {
      className: L.marginBottom20,
      title: R.default.Messages.GUILD_TEMPLATES_FORM_LABEL_NAME,
      error: null == s ? void 0 : s.getFirstFieldErrorMessage("name"),
      children: (0, a.jsx)(c.TextInput, {
        value: e,
        onChange: e => A.setName(e),
        placeholder: R.default.Messages.GUILD_TEMPLATES_FORM_PLACEHOLDER_NAME,
        maxLength: 100
      })
    }), (0, a.jsx)(c.FormItem, {
      className: L.marginBottom20,
      title: R.default.Messages.GUILD_TEMPLATES_FORM_LABEL_DESCRIPTION,
      error: null == s ? void 0 : s.getFirstFieldErrorMessage("description"),
      children: (0, a.jsx)(c.TextArea, {
        value: t,
        onChange: e => A.setDescription(e),
        placeholder: R.default.Messages.GUILD_TEMPLATES_FORM_PLACEHOLDER_DESCRIPTION,
        maxLength: 120
      })
    })]
  })
}

function U(e) {
  let {
    guild: t,
    guildTemplate: s
  } = e;
  return null == s ? (0, a.jsx)(P, {
    guild: t
  }) : (0, a.jsxs)(a.Fragment, {
    children: [(0, a.jsx)(c.FormItem, {
      title: R.default.Messages.GUILD_TEMPLATES_FORM_LABEL_LINK,
      children: (0, a.jsx)(_.default, {
        buttonLook: c.Button.Looks.FILLED,
        buttonColor: c.Button.Colors.BRAND,
        value: (0, m.default)(s.code)
      })
    }), s.isDirty && (0, a.jsx)(c.Text, {
      color: "text-warning",
      className: L.marginTop8,
      variant: "text-sm/normal",
      children: R.default.Messages.GUILD_TEMPLATES_UNSYNCED_WARNING
    }), (0, a.jsxs)("div", {
      className: i(L.marginTop20, x.buttonContainer),
      children: [s.isDirty && (0, a.jsx)(b, {
        guild: t,
        guildTemplate: s
      }), (0, a.jsxs)("div", {
        className: x.rightButtonContainer,
        children: [(0, a.jsx)(B, {
          guild: t,
          guildTemplate: s
        }), (0, a.jsx)(y, {
          guildTemplate: s
        })]
      })]
    }), s.isDirty && (0, a.jsx)("div", {
      className: x.lastSync,
      children: R.default.Messages.GUILD_TEMPLATES_LAST_SYNC.format({
        timestamp: new Date(s.updatedAt)
      })
    })]
  })
}

function P(e) {
  var t;
  let {
    guild: s
  } = e, n = (0, d.useStateFromStores)([A], () => A.name), [i, r] = l.useState(!1), o = async () => {
    A.setError(null), r(!0);
    try {
      await S.default.createGuildTemplate(s.id, A.name, A.description)
    } catch (e) {
      A.setError(new T.APIError(e))
    }
    r(!1)
  };
  return (0, a.jsx)(c.Button, {
    submitting: i,
    disabled: !(null != (t = n) && t.trim().length >= 2),
    color: c.Button.Colors.BRAND,
    onClick: o,
    children: R.default.Messages.GUILD_TEMPLATES_CREATE_LINK
  })
}

function b(e) {
  let {
    guild: t,
    guildTemplate: s
  } = e, [n, i] = l.useState(!1), r = async () => {
    A.setError(null), i(!0);
    try {
      await S.default.syncGuildTemplate(t.id, s.code)
    } catch (e) {
      A.setError(new T.APIError(e))
    }
    i(!1)
  };
  return (0, a.jsx)(c.Button, {
    submitting: n,
    className: x.button,
    onClick: r,
    children: R.default.Messages.GUILD_TEMPLATES_SYNC_TEMPLATE
  })
}

function B(e) {
  let {
    guild: t,
    guildTemplate: s
  } = e, [n, i] = l.useState(!1), r = async () => {
    A.setError(null);
    try {
      await S.default.deleteGuildTemplate(t.id, s.code), A.setName(""), A.setDescription("")
    } catch (e) {
      A.setError(new T.APIError(e))
    }
    i(!1)
  };
  return (0, a.jsxs)(a.Fragment, {
    children: [(0, a.jsx)(c.Button, {
      look: c.Button.Looks.OUTLINED,
      className: x.button,
      color: c.Button.Colors.RED,
      onClick: () => i(!0),
      children: R.default.Messages.GUILD_TEMPLATES_DELETE_TEMPLATE
    }), n ? (0, a.jsx)(G, {
      confirm: r,
      cancel: () => i(!1)
    }) : null]
  })
}

function y(e) {
  let {
    guildTemplate: t
  } = e;
  return (0, a.jsx)(c.Button, {
    color: c.Button.Colors.PRIMARY,
    className: x.button,
    onClick: () => (0, c.openModalLazy)(async () => {
      let {
        default: e
      } = await s.el("843456").then(s.bind(s, "843456"));
      return s => (0, a.jsx)(e, {
        ...s,
        guildTemplate: t
      })
    }),
    children: R.default.Messages.GUILD_TEMPLATES_PREVIEW_TEMPLATE
  })
}