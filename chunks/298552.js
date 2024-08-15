var r = n(302454),
	i = n.n(r),
	a = n(818083);
let s =
		/^https:\/\/(?:(?:media|images)\.discordapp\.net|(?:cdn\.discordapp\.com))\/(?:attachments|ephemeral-attachments)\/\d+\/\d+\/([A-Za-z0-9._-]*[A-Za-z0-9_-])(?:[?][a-zA-Z0-9?&=_-]*)?/,
	o = (0, a.B)({
		kind: 'user',
		id: '2023-11_attachment_link_markup',
		label: 'Attachment Link Config User Experiment',
		defaultConfig: { enabled: !1 },
		treatments: [
			{
				id: 1,
				label: 'Shows links to attachments as regular links',
				config: { enabled: !1 }
			},
			{
				id: 2,
				label: 'Shows links to attachments as "mentions" of the filename',
				config: { enabled: !0 }
			}
		]
	}),
	l = {
		order: i().defaultRules.url.order - 0.5,
		requiredFirstCharacters: ['h'],
		match(e) {
			let t = s.exec(e);
			if (null !== t) {
				let { enabled: e } = o.getCurrentConfig({ location: 'markup' });
				if (!e) return null;
			}
			return t;
		},
		parse(e, t, n) {
			var r;
			let i = e[0];
			return {
				type: 'attachmentLink',
				content: [
					{
						type: 'text',
						content: (r = e[1])
					}
				],
				attachmentUrl: i,
				attachmentName: r
			};
		}
	};
t.Z = { attachmentLink: l };
