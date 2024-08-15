var r = n(544891),
	i = n(570140),
	a = n(668781),
	s = n(239091),
	o = n(881052),
	l = n(962086),
	u = n(160404),
	c = n(264229),
	d = n(271383),
	_ = n(701190),
	E = n(594174),
	f = n(626135),
	h = n(981631),
	p = n(689938);
let m = async (e, t) => {
		let n = null != t ? t : _.Z.getInviteKeyForGuildId(e),
			a = E.default.getCurrentUser(),
			s = !d.ZP.isMember(e, null == a ? void 0 : a.id);
		try {
			let t = await r.tn.get({
				url: h.ANM.GUILD_MEMBER_VERIFICATION(e),
				query: {
					with_guild: s,
					invite_code: null != n ? (0, c.jX)(n) : void 0
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
	I = async (e, t) => {
		let { body: n } = await r.tn.patch({
			url: h.ANM.GUILD_MEMBER_VERIFICATION(e),
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
	T = async (e, t) => {
		let { body: n } = await r.tn.patch({
			url: h.ANM.GUILD_MEMBER_VERIFICATION(e),
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
	g = async (e, t) => {
		await r.tn.patch({
			url: h.ANM.GUILD_MEMBER_VERIFICATION(e),
			body: { enabled: t },
			oldFormErrors: !0
		});
	},
	S = async (e, t) => {
		if (u.Z.isFullServerPreview(e)) {
			(0, l.aq)(e, { memberOptions: { isPending: !1 } });
			return;
		}
		try {
			let { body: n } = await r.tn.put({
				url: h.ANM.GUILD_MEMBER_REQUEST_TO_JOIN(e),
				body: {
					version: t.version,
					form_fields: t.formFields
				}
			});
			return (
				i.Z.dispatch({
					type: 'USER_GUILD_JOIN_REQUEST_UPDATE',
					guildId: e,
					request: n
				}),
				setTimeout(A, 200),
				n
			);
		} catch (t) {
			let { status: e } = t;
			switch (e) {
				case 429:
					throw (
						((0, s.Zy)(),
						a.Z.show({
							title: p.Z.Messages.CLAN_APPLICATION_RATE_LIMITED_HEADER,
							body: p.Z.Messages.CLAN_APPLICATION_RATE_LIMITED_BODY,
							confirmText: p.Z.Messages.CLAN_APPLICATION_RATE_LIMITED_BUTTON
						}),
						{
							...t,
							message: p.Z.Messages.CLAN_APPLICATION_RATE_LIMITED_BODY
						})
					);
				case 403:
					throw {
						...t,
						message: p.Z.Messages.CLAN_APPLICATION_MISSING_PERMISSION
					};
				default:
					var n, c;
					throw {
						...t,
						message: null !== (c = ((n = new o.Hx(t)), n.getAnyErrorMessage())) && void 0 !== c ? c : p.Z.Messages.ERROR_GENERIC_TITLE
					};
			}
		}
	};
function A() {
	i.Z.dispatch({ type: 'USER_GUILD_JOIN_REQUEST_COACHMARK_SHOW' });
}
t.Z = {
	fetchVerificationForm: m,
	updateVerificationForm: I,
	updateVerificationFormFieldsLocal: (e, t) => {
		i.Z.dispatch({
			type: 'MEMBER_VERIFICATION_FORM_UPDATE',
			guildId: e,
			form: { formFields: t },
			isLocalUpdate: !0
		});
	},
	updateVerificationFormDescription: T,
	updateVerificationFormDescriptionLocal: (e, t) => {
		i.Z.dispatch({
			type: 'MEMBER_VERIFICATION_FORM_UPDATE',
			guildId: e,
			form: { description: t },
			isLocalUpdate: !0
		});
	},
	enableVerificationForm: g,
	submitVerificationForm: S,
	clearCoachmark: function () {
		i.Z.dispatch({ type: 'USER_GUILD_JOIN_REQUEST_COACHMARK_CLEAR' });
	},
	reportApplication: function (e) {
		let { guild: t, guildJoinRequest: n, guildJoinRequestUser: r, reason: i, reasonOther: a, responses: s } = e;
		f.default.track(h.rMx.GUILD_MEMBER_APPLICATION_REPORTED, {
			application_id: n.joinRequestId,
			applicant_id: r.id,
			guild_id: t.id,
			reason: i,
			reason_other: a,
			responses: s
		});
	}
};
