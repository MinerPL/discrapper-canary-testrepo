"use strict";
var i = n(544891),
  r = n(570140),
  s = n(668781),
  o = n(239091),
  a = n(881052),
  l = n(962086),
  u = n(160404),
  _ = n(264229),
  d = n(271383),
  c = n(701190),
  E = n(594174),
  I = n(626135),
  T = n(981631),
  h = n(689938);
let S = async (e, t) => {
  let n = null != t ? t : c.Z.getInviteKeyForGuildId(e),
    s = E.default.getCurrentUser(),
    o = !d.ZP.isMember(e, null == s ? void 0 : s.id);
  try {
    let t = await i.tn.get({
      url: T.ANM.GUILD_MEMBER_VERIFICATION(e),
      query: {
        with_guild: o,
        invite_code: null != n ? (0, _.jX)(n) : void 0
      },
      oldFormErrors: !0
    });
    if (null == t.body) throw t;
    let {
      body: s
    } = t;
    return r.Z.dispatch({
      type: "MEMBER_VERIFICATION_FORM_UPDATE",
      guildId: e,
      form: {
        version: s.version,
        description: s.description,
        formFields: s.form_fields,
        guild: s.guild
      }
    }), s
  } catch (t) {
    r.Z.dispatch({
      type: "MEMBER_VERIFICATION_FORM_FETCH_FAIL",
      guildId: e
    })
  }
}, f = async (e, t) => {
  let {
    body: n
  } = await i.tn.patch({
    url: T.ANM.GUILD_MEMBER_VERIFICATION(e),
    body: {
      form_fields: t
    },
    oldFormErrors: !0
  });
  r.Z.dispatch({
    type: "MEMBER_VERIFICATION_FORM_UPDATE",
    guildId: e,
    form: {
      version: n.version,
      description: n.description,
      formFields: n.form_fields
    }
  })
}, N = async (e, t) => {
  let {
    body: n
  } = await i.tn.patch({
    url: T.ANM.GUILD_MEMBER_VERIFICATION(e),
    body: {
      description: t
    },
    oldFormErrors: !0
  });
  r.Z.dispatch({
    type: "MEMBER_VERIFICATION_FORM_UPDATE",
    guildId: e,
    form: {
      version: n.version,
      description: n.description,
      formFields: n.form_fields
    }
  })
}, A = async (e, t) => {
  await i.tn.patch({
    url: T.ANM.GUILD_MEMBER_VERIFICATION(e),
    body: {
      enabled: t
    },
    oldFormErrors: !0
  })
}, m = async (e, t) => {
  if (u.Z.isFullServerPreview(e)) {
    (0, l.aq)(e, {
      memberOptions: {
        isPending: !1
      }
    });
    return
  }
  try {
    let {
      body: n
    } = await i.tn.put({
      url: T.ANM.GUILD_MEMBER_REQUEST_TO_JOIN(e),
      body: {
        version: t.version,
        form_fields: t.formFields
      }
    });
    return r.Z.dispatch({
      type: "USER_GUILD_JOIN_REQUEST_UPDATE",
      guildId: e,
      request: n
    }), setTimeout(O, 200), n
  } catch (t) {
    let {
      status: e
    } = t;
    switch (e) {
      case 429:
        throw (0, o.Zy)(), s.Z.show({
          title: h.Z.Messages.CLAN_APPLICATION_RATE_LIMITED_HEADER,
          body: h.Z.Messages.CLAN_APPLICATION_RATE_LIMITED_BODY,
          confirmText: h.Z.Messages.CLAN_APPLICATION_RATE_LIMITED_BUTTON
        }), {
          ...t,
          message: h.Z.Messages.CLAN_APPLICATION_RATE_LIMITED_BODY
        };
      case 403:
        throw {
          ...t, message: h.Z.Messages.CLAN_APPLICATION_MISSING_PERMISSION
        };
      default:
        var n, _;
        throw {
          ...t, message: null !== (_ = (n = new a.Hx(t), n.getAnyErrorMessage())) && void 0 !== _ ? _ : h.Z.Messages.ERROR_GENERIC_TITLE
        }
    }
  }
};

function O() {
  r.Z.dispatch({
    type: "USER_GUILD_JOIN_REQUEST_COACHMARK_SHOW"
  })
}
t.Z = {
  fetchVerificationForm: S,
  updateVerificationForm: f,
  updateVerificationFormFieldsLocal: (e, t) => {
    r.Z.dispatch({
      type: "MEMBER_VERIFICATION_FORM_UPDATE",
      guildId: e,
      form: {
        formFields: t
      },
      isLocalUpdate: !0
    })
  },
  updateVerificationFormDescription: N,
  updateVerificationFormDescriptionLocal: (e, t) => {
    r.Z.dispatch({
      type: "MEMBER_VERIFICATION_FORM_UPDATE",
      guildId: e,
      form: {
        description: t
      },
      isLocalUpdate: !0
    })
  },
  enableVerificationForm: A,
  submitVerificationForm: m,
  clearCoachmark: function() {
    r.Z.dispatch({
      type: "USER_GUILD_JOIN_REQUEST_COACHMARK_CLEAR"
    })
  },
  reportApplication: function(e) {
    let {
      guild: t,
      guildJoinRequest: n,
      guildJoinRequestUser: i,
      reason: r,
      reasonOther: s,
      responses: o
    } = e;
    I.default.track(T.rMx.GUILD_MEMBER_APPLICATION_REPORTED, {
      application_id: n.joinRequestId,
      applicant_id: i.id,
      guild_id: t.id,
      reason: r,
      reason_other: s,
      responses: o
    })
  }
}