"use strict";
t.d(s, {
  Q5: function() {
    return v
  },
  Sf: function() {
    return f
  },
  ZP: function() {
    return D
  }
}), t(47120);
var n, i = t(735250),
  l = t(470079),
  a = t(120356),
  r = t.n(a),
  o = t(512722),
  c = t.n(o),
  d = t(442837),
  u = t(692547),
  E = t(481060),
  _ = t(570140),
  I = t(484614),
  T = t(852860),
  N = t(881052),
  m = t(751189),
  S = t(409059),
  h = t(518936),
  g = t(441674),
  x = t(696202),
  C = t(999382),
  R = t(58346),
  L = t(689938),
  O = t(657478),
  A = t(611273);

function p(e, s, t) {
  return s in e ? Object.defineProperty(e, s, {
    value: t,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[s] = t, e
}
class M extends(n = d.ZP.Store) {
  getTemplate() {
    let e = C.Z.getProps().guild;
    if (null == e) return null;
    let s = S.Z.getForGuild(e.id);
    return null != s && s.state !== R.Rj.RESOLVING ? s : null
  }
  showNotice() {
    let e = this.getTemplate();
    return null != e && null != this.name && "" !== this.name && (this.name.trim() !== e.name || this.description.trim() !== e.description)
  }
  constructor(...e) {
    super(...e), p(this, "name", ""), p(this, "description", ""), p(this, "error", null), p(this, "reset", () => {
      let e = this.getTemplate();
      if (null != e) {
        var s, t;
        this.name = null !== (s = e.name) && void 0 !== s ? s : this.name, this.description = null !== (t = e.description) && void 0 !== t ? t : this.description
      } else this.name = "", this.description = "";
      this.emitChange()
    }), p(this, "setName", e => {
      this.name = e, this.emitChange()
    }), p(this, "setDescription", e => {
      this.description = e, this.emitChange()
    }), p(this, "setError", e => {
      this.error = e, this.emitChange()
    }), p(this, "save", async () => {
      await m.Z.updateGuildTemplate(C.Z.getProps().guild.id, this.getTemplate().code, this.name, this.description), this.emitChange()
    })
  }
}
p(M, "displayName", "GuildSettingsTemplateMetadataStore_");
let f = new M(_.Z);

function v() {
  let [e, s] = l.useState(!1), t = async () => {
    s(!0), await f.save(), s(!1)
  };
  return (0, i.jsx)(T.Z, {
    submitting: e,
    onReset: f.reset,
    onSave: t
  })
}

function D() {
  return (0, i.jsx)(E.FormSection, {
    className: A.marginBottom4,
    children: (0, i.jsxs)(E.HeadingLevel, {
      component: (0, i.jsx)(E.FormTitle, {
        tag: E.FormTitleTags.H1,
        children: L.Z.Messages.GUILD_TEMPLATES
      }),
      children: [(0, i.jsx)(E.FormText, {
        className: A.marginBottom20,
        type: E.FormTextTypes.DESCRIPTION,
        children: L.Z.Messages.GUILD_TEMPLATE_SETTINGS_DESCRIPTION.format()
      }), (0, i.jsx)(j, {}), (0, i.jsx)(E.FormDivider, {
        className: O.divider
      }), (0, i.jsx)(Z, {})]
    })
  })
}

function Z() {
  let {
    guild: e
  } = C.Z.getProps();
  c()(null != e, "guild cannot be null");
  let s = (0, d.e7)([f], () => f.error),
    [t, n] = l.useState(!0),
    {
      loading: a,
      guildTemplate: r
    } = function(e) {
      let [s, t] = l.useState(!0);
      return l.useEffect(() => {
        (async function s() {
          t(!0);
          try {
            await m.Z.loadTemplatesForGuild(e), t(!1)
          } catch (e) {
            f.setError(new N.Hx(e))
          }
        })()
      }, [e]), {
        loading: s,
        guildTemplate: (0, d.e7)([S.Z], () => S.Z.getForGuild(e), [e])
      }
    }(e.id);
  if (l.useEffect(() => {
      if (!!t && !a) {
        if (null != r) {
          var e, s;
          f.setName(null !== (e = r.name) && void 0 !== e ? e : ""), f.setDescription(null !== (s = r.description) && void 0 !== s ? s : "")
        }
        n(!1)
      }
    }, [t, r, a]), l.useEffect(() => () => {
      f.reset(), f.setError(null)
    }, []), t) return null != s ? (0, i.jsx)(E.Text, {
    color: "text-danger",
    variant: "text-sm/normal",
    children: s.message
  }) : (0, i.jsx)(E.Spinner, {
    className: A.marginTop40
  });
  let o = null != s && null == s.getFirstFieldErrorMessage("name") && null == s.getFirstFieldErrorMessage("description");
  return (0, i.jsxs)(i.Fragment, {
    children: [(0, i.jsx)(G, {}), (0, i.jsx)(P, {
      guild: e,
      guildTemplate: r
    }), o ? (0, i.jsx)(E.Text, {
      className: A.marginTop8,
      color: "text-danger",
      variant: "text-sm/normal",
      children: s.getAnyErrorMessage()
    }) : null]
  })
}

function j() {
  return (0, i.jsxs)("div", {
    className: O.descriptionBox,
    children: [(0, i.jsxs)("div", {
      className: O.descriptionSection,
      children: [(0, i.jsx)(E.Heading, {
        variant: "eyebrow",
        children: L.Z.Messages.GUILD_TEMPLATES_FORM_DESCRIPTION_WILL_COPY
      }), (0, i.jsxs)("div", {
        className: O.descriptionRow,
        children: [(0, i.jsx)(g.Z, {
          className: O.descriptionIcon,
          color: u.Z.unsafe_rawColors.GREEN_360.css,
          backgroundColor: u.Z.unsafe_rawColors.WHITE_500.css
        }), L.Z.Messages.GUILD_TEMPLATES_FORM_DESCRIPTION_CHANNELS]
      }), (0, i.jsxs)("div", {
        className: O.descriptionRow,
        children: [(0, i.jsx)(g.Z, {
          className: O.descriptionIcon,
          color: u.Z.unsafe_rawColors.GREEN_360.css,
          backgroundColor: u.Z.unsafe_rawColors.WHITE_500.css
        }), L.Z.Messages.GUILD_TEMPLATES_FORM_DESCRIPTION_ROLES]
      }), (0, i.jsxs)("div", {
        className: O.descriptionRow,
        children: [(0, i.jsx)(g.Z, {
          className: O.descriptionIcon,
          color: u.Z.unsafe_rawColors.GREEN_360.css,
          backgroundColor: u.Z.unsafe_rawColors.WHITE_500.css
        }), L.Z.Messages.GUILD_TEMPLATES_FORM_DESCRIPTION_SETTINGS]
      })]
    }), (0, i.jsxs)("div", {
      className: O.descriptionSection,
      children: [(0, i.jsx)(E.Heading, {
        variant: "eyebrow",
        children: L.Z.Messages.GUILD_TEMPLATES_FORM_DESCRIPTION_WONT_COPY
      }), (0, i.jsxs)("div", {
        className: O.descriptionRow,
        children: [(0, i.jsx)(x.Z, {
          className: O.descriptionIcon,
          color: u.Z.unsafe_rawColors.RED_400.css,
          backgroundColor: u.Z.unsafe_rawColors.WHITE_500.css
        }), L.Z.Messages.GUILD_TEMPLATES_FORM_DESCRIPTION_MESSAGES]
      }), (0, i.jsxs)("div", {
        className: O.descriptionRow,
        children: [(0, i.jsx)(x.Z, {
          className: O.descriptionIcon,
          color: u.Z.unsafe_rawColors.RED_400.css,
          backgroundColor: u.Z.unsafe_rawColors.WHITE_500.css
        }), L.Z.Messages.GUILD_TEMPLATES_FORM_DESCRIPTION_MEMBERS]
      }), (0, i.jsxs)("div", {
        className: O.descriptionRow,
        children: [(0, i.jsx)(x.Z, {
          className: O.descriptionIcon,
          color: u.Z.unsafe_rawColors.RED_400.css,
          backgroundColor: u.Z.unsafe_rawColors.WHITE_500.css
        }), L.Z.Messages.GUILD_TEMPLATES_FORM_DESCRIPTION_PERKS]
      })]
    })]
  })
}

function U(e) {
  let {
    cancel: s,
    confirm: t
  } = e;
  return (0, i.jsx)(E.DeclarativeConfirmModal, {
    dismissable: !0,
    header: L.Z.Messages.GUILD_TEMPLATES_DELETE_TEMPLATE,
    confirmText: L.Z.Messages.GUILD_TEMPLATES_DELETE_TEMPLATE,
    cancelText: L.Z.Messages.CANCEL,
    onCancel: s,
    onConfirm: t,
    children: (0, i.jsx)(E.Text, {
      variant: "text-md/normal",
      color: "text-normal",
      children: L.Z.Messages.GUILD_TEMPLATES_DELETE_DESCRIPTION
    })
  })
}

function G() {
  let e = (0, d.e7)([f], () => f.name),
    s = (0, d.e7)([f], () => f.description),
    t = (0, d.e7)([f], () => f.error);
  return (0, i.jsxs)(i.Fragment, {
    children: [(0, i.jsx)(E.FormItem, {
      className: A.marginBottom20,
      title: L.Z.Messages.GUILD_TEMPLATES_FORM_LABEL_NAME,
      error: null == t ? void 0 : t.getFirstFieldErrorMessage("name"),
      children: (0, i.jsx)(E.TextInput, {
        value: e,
        onChange: e => f.setName(e),
        placeholder: L.Z.Messages.GUILD_TEMPLATES_FORM_PLACEHOLDER_NAME,
        maxLength: 100
      })
    }), (0, i.jsx)(E.FormItem, {
      className: A.marginBottom20,
      title: L.Z.Messages.GUILD_TEMPLATES_FORM_LABEL_DESCRIPTION,
      error: null == t ? void 0 : t.getFirstFieldErrorMessage("description"),
      children: (0, i.jsx)(E.TextArea, {
        value: s,
        onChange: e => f.setDescription(e),
        placeholder: L.Z.Messages.GUILD_TEMPLATES_FORM_PLACEHOLDER_DESCRIPTION,
        maxLength: 120
      })
    })]
  })
}

function P(e) {
  let {
    guild: s,
    guildTemplate: t
  } = e;
  return null == t ? (0, i.jsx)(b, {
    guild: s
  }) : (0, i.jsxs)(i.Fragment, {
    children: [(0, i.jsx)(E.FormItem, {
      title: L.Z.Messages.GUILD_TEMPLATES_FORM_LABEL_LINK,
      children: (0, i.jsx)(I.Z, {
        buttonLook: E.Button.Looks.FILLED,
        buttonColor: E.Button.Colors.BRAND,
        value: (0, h.Z)(t.code)
      })
    }), t.isDirty && (0, i.jsx)(E.Text, {
      color: "text-warning",
      className: A.marginTop8,
      variant: "text-sm/normal",
      children: L.Z.Messages.GUILD_TEMPLATES_UNSYNCED_WARNING
    }), (0, i.jsxs)("div", {
      className: r()(A.marginTop20, O.buttonContainer),
      children: [t.isDirty && (0, i.jsx)(B, {
        guild: s,
        guildTemplate: t
      }), (0, i.jsxs)("div", {
        className: O.rightButtonContainer,
        children: [(0, i.jsx)(y, {
          guild: s,
          guildTemplate: t
        }), (0, i.jsx)(F, {
          guildTemplate: t
        })]
      })]
    }), t.isDirty && (0, i.jsx)("div", {
      className: O.lastSync,
      children: L.Z.Messages.GUILD_TEMPLATES_LAST_SYNC.format({
        timestamp: new Date(t.updatedAt)
      })
    })]
  })
}

function b(e) {
  var s;
  let {
    guild: t
  } = e, n = (0, d.e7)([f], () => f.name), [a, r] = l.useState(!1), o = async () => {
    f.setError(null), r(!0);
    try {
      await m.Z.createGuildTemplate(t.id, f.name, f.description)
    } catch (e) {
      f.setError(new N.Hx(e))
    }
    r(!1)
  };
  return (0, i.jsx)(E.Button, {
    submitting: a,
    disabled: !(null != (s = n) && s.trim().length >= 2),
    color: E.Button.Colors.BRAND,
    onClick: o,
    children: L.Z.Messages.GUILD_TEMPLATES_CREATE_LINK
  })
}

function B(e) {
  let {
    guild: s,
    guildTemplate: t
  } = e, [n, a] = l.useState(!1), r = async () => {
    f.setError(null), a(!0);
    try {
      await m.Z.syncGuildTemplate(s.id, t.code)
    } catch (e) {
      f.setError(new N.Hx(e))
    }
    a(!1)
  };
  return (0, i.jsx)(E.Button, {
    submitting: n,
    className: O.button,
    onClick: r,
    children: L.Z.Messages.GUILD_TEMPLATES_SYNC_TEMPLATE
  })
}

function y(e) {
  let {
    guild: s,
    guildTemplate: t
  } = e, [n, a] = l.useState(!1), r = async () => {
    f.setError(null);
    try {
      await m.Z.deleteGuildTemplate(s.id, t.code), f.setName(""), f.setDescription("")
    } catch (e) {
      f.setError(new N.Hx(e))
    }
    a(!1)
  };
  return (0, i.jsxs)(i.Fragment, {
    children: [(0, i.jsx)(E.Button, {
      look: E.Button.Looks.OUTLINED,
      className: O.button,
      color: E.Button.Colors.RED,
      onClick: () => a(!0),
      children: L.Z.Messages.GUILD_TEMPLATES_DELETE_TEMPLATE
    }), n ? (0, i.jsx)(U, {
      confirm: r,
      cancel: () => a(!1)
    }) : null]
  })
}

function F(e) {
  let {
    guildTemplate: s
  } = e;
  return (0, i.jsx)(E.Button, {
    color: E.Button.Colors.PRIMARY,
    className: O.button,
    onClick: () => (0, E.openModalLazy)(async () => {
      let {
        default: e
      } = await Promise.all([t.e("49237"), t.e("99387"), t.e("10778"), t.e("81352")]).then(t.bind(t, 766775));
      return t => (0, i.jsx)(e, {
        ...t,
        guildTemplate: s
      })
    }),
    children: L.Z.Messages.GUILD_TEMPLATES_PREVIEW_TEMPLATE
  })
}