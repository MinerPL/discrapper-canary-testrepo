var i = n(818083);
t.Z = (0, i.B)({
	kind: 'user',
	id: '2021-12_inferno_spam_redaction',
	label: 'Inferno Spam Redaction',
	defaultConfig: { enabled: !1 },
	treatments: [
		{
			id: 1,
			label: 'Allow guild channel messages from spammers to be collapsed',
			config: { enabled: !0 }
		}
	]
});
