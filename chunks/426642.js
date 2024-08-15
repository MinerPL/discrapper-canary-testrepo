n.d(t, {
	d: function () {
		return a;
	}
});
var s,
	a,
	i = n(735250);
n(470079);
var r = n(692547),
	l = n(481060),
	o = n(752657),
	c = n(689938),
	d = n(18239);
((s = a || (a = {}))[(s.TOO_BIG = 0)] = 'TOO_BIG'),
	(s[(s.RATE_LIMIT = 1)] = 'RATE_LIMIT'),
	(s[(s.TOO_MANY_EMOJI = 2)] = 'TOO_MANY_EMOJI'),
	(s[(s.TOO_MANY_ANIMATED_EMOJI = 3)] = 'TOO_MANY_ANIMATED_EMOJI'),
	(s[(s.WRONG_TYPE = 4)] = 'WRONG_TYPE'),
	(s[(s.RESIZE_GIF = 5)] = 'RESIZE_GIF');
t.Z = (e) => {
	let { error: t } = e,
		{ type: n, filename: s } = t,
		{
			icon: a,
			description: u,
			color: _,
			tooltip: I
		} = {
			0: {
				icon: l.FileWarningIcon,
				description: c.Z.Messages.UPLOAD_ERROR_TOO_LARGE,
				color: r.Z.unsafe_rawColors.RED_400.css,
				tooltip: c.Z.Messages.UPLOAD_ERROR_TITLE
			},
			4: {
				icon: l.FileDenyIcon,
				description: c.Z.Messages.UPLOAD_ERROR_WRONG_TYPE,
				color: r.Z.unsafe_rawColors.RED_400.css,
				tooltip: c.Z.Messages.UPLOAD_ERROR_TITLE
			},
			5: {
				icon: o.Z,
				description: c.Z.Messages.UPLOAD_ERROR_RESIZE_GIF,
				color: r.Z.unsafe_rawColors.RED_400.css,
				tooltip: c.Z.Messages.UPLOAD_ERROR_TITLE
			},
			1: {
				icon: l.SpeedometerIcon,
				description: c.Z.Messages.UPLOAD_ERROR_RATE_LIMIT,
				color: r.Z.unsafe_rawColors.ORANGE_345.css,
				tooltip: c.Z.Messages.UPLOAD_ERROR_RETRY
			},
			2: {
				icon: l.CircleInformationIcon,
				description: c.Z.Messages.UPLOAD_ERROR_TOO_MANY_EMOJI,
				color: r.Z.unsafe_rawColors.RED_400.css,
				tooltip: c.Z.Messages.UPLOAD_ERROR_TITLE
			},
			3: {
				icon: l.CircleInformationIcon,
				description: c.Z.Messages.UPLOAD_ERROR_TOO_MANY_ANIMATED_EMOJI,
				color: r.Z.unsafe_rawColors.RED_400.css,
				tooltip: c.Z.Messages.UPLOAD_ERROR_TITLE
			}
		}[n];
	return (0, i.jsxs)('div', {
		className: d.emojiErrorItem,
		children: [
			(0, i.jsx)(a, {
				className: d.fileIcon,
				color: r.Z.unsafe_rawColors.PRIMARY_300.css
			}),
			(0, i.jsxs)(l.FormSection, {
				className: d.fileInfo,
				children: [
					(0, i.jsx)(l.FormTitle, {
						className: d.fileName,
						children: s
					}),
					(0, i.jsx)(l.FormText, {
						type: l.FormTextTypes.DESCRIPTION,
						children: u
					})
				]
			}),
			(0, i.jsx)(l.TooltipContainer, {
				position: 'right',
				text: I,
				children: (0, i.jsx)(l.CircleWarningIcon, {
					size: 'custom',
					width: 20,
					height: 20,
					color: _
				})
			})
		]
	});
};
