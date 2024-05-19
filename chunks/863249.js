"use strict";
n.r(t);
var i = n("544891"),
  r = n("570140"),
  a = n("668781"),
  s = n("239091"),
  o = n("962086"),
  l = n("160404"),
  u = n("264229"),
  d = n("271383"),
  _ = n("701190"),
  c = n("594174"),
  E = n("981631"),
  I = n("689938");
let T = async (e, t) => {
  let n = null != t ? t : _.default.getInviteKeyForGuildId(e),
    a = c.default.getCurrentUser(),
    s = !d.default.isMember(e, null == a ? void 0 : a.id);
  try {
    let t = await i.HTTP.get({
      url: E.Endpoints.GUILD_MEMBER_VERIFICATION(e),
      query: {
        with_guild: s,
        invite_code: null != n ? (0, u.parseInviteCodeFromInviteKey)(n) : void 0
      },
      oldFormErrors: !0
    });
    if (null == t.body) throw t;
    let {
      body: a
    } = t;
    return r.default.dispatch({
      type: "MEMBER_VERIFICATION_FORM_UPDATE",
      guildId: e,
      form: {
        version: a.version,
        description: a.description,
        formFields: a.form_fields,
        guild: a.guild
      }
    }), a
  } catch (t) {
    r.default.dispatch({
      type: "MEMBER_VERIFICATION_FORM_FETCH_FAIL",
      guildId: e
    })
  }
}, f = async (e, t) => {
  let {
    body: n
  } = await i.HTTP.patch({
    url: E.Endpoints.GUILD_MEMBER_VERIFICATION(e),
    body: {
      form_fields: t
    },
    oldFormErrors: !0
  });
  r.default.dispatch({
    type: "MEMBER_VERIFICATION_FORM_UPDATE",
    guildId: e,
    form: {
      version: n.version,
      description: n.description,
      formFields: n.form_fields
    }
  })
}, S = async (e, t) => {
  let {
    body: n
  } = await i.HTTP.patch({
    url: E.Endpoints.GUILD_MEMBER_VERIFICATION(e),
    body: {
      description: t
    },
    oldFormErrors: !0
  });
  r.default.dispatch({
    type: "MEMBER_VERIFICATION_FORM_UPDATE",
    guildId: e,
    form: {
      version: n.version,
      description: n.description,
      formFields: n.form_fields
    }
  })
}, h = async (e, t) => {
  await i.HTTP.patch({
    url: E.Endpoints.GUILD_MEMBER_VERIFICATION(e),
    body: {
      enabled: t
    },
    oldFormErrors: !0
  })
}, A = async (e, t) => {
  if (l.default.isFullServerPreview(e)) {
    (0, o.updateImpersonatedData)(e, {
      memberOptions: {
        isPending: !1
      }
    });
    return
  }
  try {
    let {
      body: n
    } = await i.HTTP.put({
      url: E.Endpoints.GUILD_MEMBER_REQUEST_TO_JOIN(e),
      body: {
        version: t.version,
        form_fields: t.formFields
      }
    });
    return r.default.dispatch({
      type: "USER_GUILD_JOIN_REQUEST_UPDATE",
      guildId: e,
      request: n
    }), n
  } catch (t) {
    let {
      status: e
    } = t;
    if (429 === e)(0, s.closeContextMenu)(), a.default.show({
      title: I.default.Messages.CLAN_APPLICATION_RATE_LIMITED_HEADER,
      body: I.default.Messages.CLAN_APPLICATION_RATE_LIMITED_BODY,
      confirmText: I.default.Messages.CLAN_APPLICATION_RATE_LIMITED_BUTTON
    });
    else throw t
  }
};
t.default = {
  fetchVerificationForm: T,
  updateVerificationForm: f,
  updateVerificationFormFieldsLocal: (e, t) => {
    r.default.dispatch({
      type: "MEMBER_VERIFICATION_FORM_UPDATE",
      guildId: e,
      form: {
        formFields: t
      },
      isLocalUpdate: !0
    })
  },
  updateVerificationFormDescription: S,
  updateVerificationFormDescriptionLocal: (e, t) => {
    r.default.dispatch({
      type: "MEMBER_VERIFICATION_FORM_UPDATE",
      guildId: e,
      form: {
        description: t
      },
      isLocalUpdate: !0
    })
  },
  enableVerificationForm: h,
  submitVerificationForm: A
}