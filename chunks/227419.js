n(47120);
var r = n(735250);
n(470079);
var i = n(392711),
	a = n.n(i),
	s = n(481060),
	o = n(493683),
	l = n(904245),
	u = n(911969),
	c = n(933557),
	d = n(699516),
	_ = n(594174),
	E = n(895924),
	f = n(689079),
	h = n(981631),
	p = n(689938);
function I(e) {
	switch (e) {
		case h.nkL.GIF.title:
		case h.nkL.TENOR.title:
			return p.Z.Messages.COMMAND_GIPHY_DESCRIPTION;
		default:
			return '';
	}
}
let m = [
	...a()(h.nkL)
		.values()
		.map((e) => ({
			id: e.commandId,
			name: e.command,
			displayName: e.command,
			type: u.yU.CHAT,
			inputType: E.iw.BUILT_IN_INTEGRATION,
			applicationId: f.bi.BUILT_IN,
			get description() {
				return I(e.title);
			},
			get displayDescription() {
				return I(e.title);
			},
			options:
				e.type === h.q9n.GIF
					? [
							{
								name: 'query',
								displayName: 'query',
								type: u.jw.STRING,
								get description() {
									return p.Z.Messages.COMMAND_GIPHY_QUERY_DESCRIPTION;
								},
								get displayDescription() {
									return p.Z.Messages.COMMAND_GIPHY_QUERY_DESCRIPTION;
								},
								required: !0
							}
						]
					: [],
			integrationType: e.type,
			integrationTitle: e.title
		}))
		.value(),
	{
		id: '-15',
		name: 'leave',
		displayName: 'leave',
		type: u.yU.CHAT,
		inputType: E.iw.BUILT_IN,
		applicationId: f.bi.BUILT_IN,
		get description() {
			return p.Z.Messages.LEAVE_GROUP_DM;
		},
		get displayDescription() {
			return p.Z.Messages.LEAVE_GROUP_DM;
		},
		options: [
			{
				name: 'silent',
				displayName: 'silent',
				type: u.jw.BOOLEAN,
				get description() {
					return p.Z.Messages.LEAVE_GROUP_DM_SILENTLY_COMMAND_OPTION;
				},
				get displayDescription() {
					return p.Z.Messages.LEAVE_GROUP_DM_SILENTLY;
				},
				required: !1
			}
		],
		predicate: (e) => {
			let { channel: t } = e;
			return t.isGroupDM();
		},
		execute: (e, t) => {
			var n, i;
			let { channel: a } = t,
				u = (0, c.F6)(a, _.default, d.Z),
				E = p.Z.Messages.LEAVE_GROUP_DM_TITLE.format({ name: u }),
				f = p.Z.Messages.LEAVE_GROUP_DM_BODY.format({ name: u }),
				h =
					null !== (i = null === (n = e.find((e) => 'silent' === e.name)) || void 0 === n ? void 0 : n.value) &&
					void 0 !== i &&
					i;
			async function I() {
				try {
					await o.Z.closePrivateChannel(a.id, void 0, h);
				} catch (e) {
					l.Z.sendBotMessage(a.id, p.Z.Messages.LEAVE_GROUP_DM_ERROR);
				}
			}
			a.isManaged() &&
				((E = p.Z.Messages.LEAVE_GROUP_DM_MANAGED_TITLE.format({ name: u })),
				(f = p.Z.Messages.LEAVE_GROUP_DM_MANAGED_BODY.format({ name: u }))),
				(0, s.openModal)((e) =>
					(0, r.jsx)(s.ConfirmModal, {
						header: E,
						confirmText: p.Z.Messages.LEAVE_GROUP_DM,
						cancelText: p.Z.Messages.CANCEL,
						onConfirm: I,
						...e,
						children: (0, r.jsx)(s.Text, {
							variant: 'text-md/normal',
							children: f
						})
					})
				);
		}
	},
	{
		id: '-17',
		name: 'sticker',
		displayName: 'sticker',
		type: u.yU.CHAT,
		inputType: E.iw.BUILT_IN_INTEGRATION,
		applicationId: f.bi.BUILT_IN,
		get description() {
			return p.Z.Messages.COMMAND_STICKER_DESCRIPTION;
		},
		get displayDescription() {
			return p.Z.Messages.COMMAND_STICKER_DESCRIPTION;
		},
		options: [
			{
				name: 'query',
				displayName: 'query',
				type: u.jw.STRING,
				get description() {
					return p.Z.Messages.COMMAND_STICKER_QUERY_DESCRIPTION;
				},
				get displayDescription() {
					return p.Z.Messages.COMMAND_STICKER_QUERY_DESCRIPTION;
				},
				required: !0
			}
		],
		integrationType: h.q9n.STICKER,
		integrationTitle: 'sticker'
	}
];
t.Z = m;
