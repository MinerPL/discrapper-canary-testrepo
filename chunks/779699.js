var r = n(735250);
n(470079);
var i = n(120356), a = n.n(i), o = n(481060), s = n(457926), l = n(689938), u = n(157451);
t.Z = function (e) {
    let {
            iconType: t,
            children: n
        } = e, i = null;
    switch (t) {
    case 'voice':
        i = (0, r.jsx)(o.VoiceNormalIcon, {
            size: 'md',
            color: 'currentColor',
            className: u.icon,
            'aria-label': l.Z.Messages.VOICE_CHANNEL
        });
        break;
    case 'voice-locked':
        i = (0, r.jsx)(o.LockIcon, {
            size: 'md',
            color: 'currentColor',
            className: u.icon,
            'aria-label': l.Z.Messages.VOICE_CHANNEL_LOCKED
        });
        break;
    case 'stage':
        i = (0, r.jsx)(o.StageIcon, {
            size: 'lg',
            color: 'currentColor',
            className: u.icon,
            'aria-label': l.Z.Messages.STAGE_CHANNEL
        });
        break;
    case 'stage-locked':
        i = (0, r.jsx)(o.LockIcon, {
            size: 'md',
            color: 'currentColor',
            className: u.icon,
            'aria-label': l.Z.Messages.STAGE_CHANNEL_LOCKED
        });
        break;
    case 'thread':
        i = (0, r.jsx)(o.ThreadIcon, {
            size: 'md',
            color: 'currentColor',
            className: u.icon,
            'aria-label': l.Z.Messages.THREAD
        });
        break;
    case 'text':
        i = (0, r.jsx)(o.TextIcon, {
            size: 'md',
            color: 'currentColor',
            className: u.icon,
            'aria-label': l.Z.Messages.CHANNEL
        });
        break;
    case 'forum':
        i = (0, r.jsx)(o.ForumIcon, {
            size: 'md',
            color: 'currentColor',
            className: u.icon,
            'aria-label': l.Z.Messages.FORUM_CHANNEL
        });
        break;
    case 'post':
        i = (0, r.jsx)(o.ChatIcon, {
            size: 'md',
            color: 'currentColor',
            className: u.icon,
            'aria-label': l.Z.Messages.FORUM_POST
        });
        break;
    case 'home':
    case 'guide':
        i = (0, r.jsx)(o.SignPostIcon, {
            size: 'md',
            color: 'currentColor',
            className: u.icon,
            'aria-label': l.Z.Messages.SERVER_GUIDE
        });
        break;
    case 'browse':
    case 'customize':
        i = (0, r.jsx)(o.ChannelListMagnifyingGlassIcon, {
            size: 'md',
            color: 'currentColor',
            className: u.icon,
            'aria-label': l.Z.Messages.CHANNEL_BROWSER_TITLE
        });
        break;
    case 'message':
        i = (0, r.jsx)(o.ChatIcon, {
            size: 'md',
            color: 'currentColor',
            className: u.icon,
            'aria-label': l.Z.Messages.MESSAGE_A11Y_ROLE_DESCRIPTION
        });
        break;
    case 'locked':
        i = (0, r.jsx)(o.LockIcon, {
            size: 'md',
            color: 'currentColor',
            className: u.icon,
            'aria-label': l.Z.Messages.NO_ACCESS
        });
        break;
    case 'media':
        i = (0, r.jsx)(o.ImageIcon, {
            size: 'md',
            color: 'currentColor',
            className: u.icon,
            'aria-label': l.Z.Messages.MEDIA_CHANNEL
        });
    }
    return (0, r.jsxs)('span', {
        className: a()('channelWithIcon', { [u.iconMentionText]: 'text' === t }),
        children: [
            (0, r.jsx)(s.Z, { children: i }),
            null != n && '' !== n ? (0, r.jsx)('span', {
                className: u.name,
                children: n
            }) : null
        ]
    });
};
