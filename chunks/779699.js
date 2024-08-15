var r = n(735250);
n(470079);
var i = n(120356),
	a = n.n(i),
	s = n(481060),
	o = n(457926),
	l = n(689938),
	u = n(772666);
t.Z = function (e) {
	let { iconType: t, children: n } = e,
		i = null;
	switch (t) {
		case 'voice':
			i = (0, r.jsx)(s.VoiceNormalIcon, {
				size: 'md',
				color: 'currentColor',
				className: u.icon,
				'aria-label': l.Z.Messages.VOICE_CHANNEL
			});
			break;
		case 'voice-locked':
			i = (0, r.jsx)(s.LockIcon, {
				size: 'md',
				color: 'currentColor',
				className: u.icon,
				'aria-label': l.Z.Messages.VOICE_CHANNEL_LOCKED
			});
			break;
		case 'stage':
			i = (0, r.jsx)(s.StageIcon, {
				size: 'lg',
				color: 'currentColor',
				className: u.icon,
				'aria-label': l.Z.Messages.STAGE_CHANNEL
			});
			break;
		case 'stage-locked':
			i = (0, r.jsx)(s.LockIcon, {
				size: 'md',
				color: 'currentColor',
				className: u.icon,
				'aria-label': l.Z.Messages.STAGE_CHANNEL_LOCKED
			});
			break;
		case 'thread':
			i = (0, r.jsx)(s.ThreadIcon, {
				size: 'md',
				color: 'currentColor',
				className: u.icon,
				'aria-label': l.Z.Messages.THREAD
			});
			break;
		case 'text':
			i = (0, r.jsx)(s.TextIcon, {
				size: 'md',
				color: 'currentColor',
				className: u.icon,
				'aria-label': l.Z.Messages.CHANNEL
			});
			break;
		case 'forum':
			i = (0, r.jsx)(s.ForumIcon, {
				size: 'md',
				color: 'currentColor',
				className: u.icon,
				'aria-label': l.Z.Messages.FORUM_CHANNEL
			});
			break;
		case 'post':
			i = (0, r.jsx)(s.ChatIcon, {
				size: 'md',
				color: 'currentColor',
				className: u.icon,
				'aria-label': l.Z.Messages.FORUM_POST
			});
			break;
		case 'home':
		case 'guide':
			i = (0, r.jsx)(s.SignPostIcon, {
				size: 'md',
				color: 'currentColor',
				className: u.icon,
				'aria-label': l.Z.Messages.SERVER_GUIDE
			});
			break;
		case 'browse':
		case 'customize':
			i = (0, r.jsx)(s.ChannelListMagnifyingGlassIcon, {
				size: 'md',
				color: 'currentColor',
				className: u.icon,
				'aria-label': l.Z.Messages.CHANNEL_BROWSER_TITLE
			});
			break;
		case 'message':
			i = (0, r.jsx)(s.ChatIcon, {
				size: 'md',
				color: 'currentColor',
				className: u.icon,
				'aria-label': l.Z.Messages.MESSAGE_A11Y_ROLE_DESCRIPTION
			});
			break;
		case 'locked':
			i = (0, r.jsx)(s.LockIcon, {
				size: 'md',
				color: 'currentColor',
				className: u.icon,
				'aria-label': l.Z.Messages.NO_ACCESS
			});
			break;
		case 'media':
			i = (0, r.jsx)(s.ImageIcon, {
				size: 'md',
				color: 'currentColor',
				className: u.icon,
				'aria-label': l.Z.Messages.MEDIA_CHANNEL
			});
	}
	return (0, r.jsxs)('span', {
		className: a()('channelWithIcon', { [u.iconMentionText]: 'text' === t }),
		children: [
			(0, r.jsx)(o.Z, { children: i }),
			null != n && '' !== n
				? (0, r.jsx)('span', {
						className: u.name,
						children: n
					})
				: null
		]
	});
};
