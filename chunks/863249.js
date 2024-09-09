n.d(t, {
    q0: function () {
        return O;
    },
    xo: function () {
        return v;
    }
});
var r = n(544891),
    i = n(570140),
    a = n(668781),
    s = n(239091),
    o = n(881052),
    l = n(970606),
    u = n(962086),
    c = n(160404),
    d = n(264229),
    _ = n(271383),
    E = n(701190),
    f = n(594174),
    h = n(626135),
    p = n(246364),
    I = n(981631),
    m = n(976757),
    T = n(689938);
let S = async (e, t) => {
        let n = null != t ? t : E.Z.getInviteKeyForGuildId(e),
            a = f.default.getCurrentUser(),
            s = !_.ZP.isMember(e, null == a ? void 0 : a.id);
        try {
            let t = await r.tn.get({
                url: I.ANM.GUILD_MEMBER_VERIFICATION(e),
                query: {
                    with_guild: s,
                    invite_code: null != n ? (0, d.jX)(n) : void 0
                },
                oldFormErrors: !0
            });
            if (null == t.body) throw t;
            let { body: a } = t;
            return (
                i.Z.dispatch({
                    type: 'MEMBER_VERIFICATION_FORM_UPDATE',
                    guildId: e,
                    form: {
                        version: a.version,
                        description: a.description,
                        formFields: a.form_fields,
                        guild: a.guild
                    }
                }),
                a
            );
        } catch (t) {
            i.Z.dispatch({
                type: 'MEMBER_VERIFICATION_FORM_FETCH_FAIL',
                guildId: e
            });
        }
    },
    g = async (e, t) => {
        let { body: n } = await r.tn.patch({
            url: I.ANM.GUILD_MEMBER_VERIFICATION(e),
            body: { form_fields: t },
            oldFormErrors: !0
        });
        i.Z.dispatch({
            type: 'MEMBER_VERIFICATION_FORM_UPDATE',
            guildId: e,
            form: {
                version: n.version,
                description: n.description,
                formFields: n.form_fields
            }
        });
    },
    A = async (e, t) => {
        let { body: n } = await r.tn.patch({
            url: I.ANM.GUILD_MEMBER_VERIFICATION(e),
            body: { description: t },
            oldFormErrors: !0
        });
        i.Z.dispatch({
            type: 'MEMBER_VERIFICATION_FORM_UPDATE',
            guildId: e,
            form: {
                version: n.version,
                description: n.description,
                formFields: n.form_fields
            }
        });
    },
    N = async (e, t) => {
        await r.tn.patch({
            url: I.ANM.GUILD_MEMBER_VERIFICATION(e),
            body: { enabled: t },
            oldFormErrors: !0
        });
    },
    O = -1,
    R = async function (e, t) {
        let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 200;
        if (c.Z.isFullServerPreview(e)) {
            (0, u.aq)(e, { memberOptions: { isPending: !1 } });
            return;
        }
        try {
            let { body: a } = await r.tn.put({
                url: I.ANM.GUILD_MEMBER_REQUEST_TO_JOIN(e),
                body: {
                    ...(0, l.jK)({ outcome: m.qz.UNKNOWN }),
                    version: t.version,
                    form_fields: t.formFields
                }
            });
            return (
                i.Z.dispatch({
                    type: 'USER_GUILD_JOIN_REQUEST_UPDATE',
                    guildId: e,
                    request: a
                }),
                (0, p.YG)(t.formFields) && n !== O && setTimeout(v, n),
                a
            );
        } catch (t) {
            let { status: e } = t;
            switch (e) {
                case 429:
                    throw (
                        ((0, s.Zy)(),
                        a.Z.show({
                            title: T.Z.Messages.CLAN_APPLICATION_RATE_LIMITED_HEADER,
                            body: T.Z.Messages.CLAN_APPLICATION_RATE_LIMITED_BODY,
                            confirmText: T.Z.Messages.CLAN_APPLICATION_RATE_LIMITED_BUTTON
                        }),
                        {
                            ...t,
                            message: T.Z.Messages.CLAN_APPLICATION_RATE_LIMITED_BODY
                        })
                    );
                case 403:
                    throw {
                        ...t,
                        message: T.Z.Messages.CLAN_APPLICATION_MISSING_PERMISSION
                    };
                default:
                    var d, _;
                    throw {
                        ...t,
                        message: null !== (_ = ((d = new o.Hx(t)), d.getAnyErrorMessage())) && void 0 !== _ ? _ : T.Z.Messages.ERROR_GENERIC_TITLE
                    };
            }
        }
    };
function v() {
    i.Z.dispatch({ type: 'USER_GUILD_JOIN_REQUEST_COACHMARK_SHOW' });
}
t.ZP = {
    fetchVerificationForm: S,
    updateVerificationForm: g,
    updateVerificationFormFieldsLocal: (e, t) => {
        i.Z.dispatch({
            type: 'MEMBER_VERIFICATION_FORM_UPDATE',
            guildId: e,
            form: { formFields: t },
            isLocalUpdate: !0
        });
    },
    updateVerificationFormDescription: A,
    updateVerificationFormDescriptionLocal: (e, t) => {
        i.Z.dispatch({
            type: 'MEMBER_VERIFICATION_FORM_UPDATE',
            guildId: e,
            form: { description: t },
            isLocalUpdate: !0
        });
    },
    enableVerificationForm: N,
    submitVerificationForm: R,
    clearCoachmark: function () {
        i.Z.dispatch({ type: 'USER_GUILD_JOIN_REQUEST_COACHMARK_CLEAR' });
    },
    reportApplication: function (e) {
        let { guild: t, guildJoinRequest: n, guildJoinRequestUser: r, reason: i, reasonOther: a, responses: s } = e;
        h.default.track(I.rMx.GUILD_MEMBER_APPLICATION_REPORTED, {
            application_id: n.joinRequestId,
            applicant_id: r.id,
            guild_id: t.id,
            reason: i,
            reason_other: a,
            responses: s
        });
    }
};
