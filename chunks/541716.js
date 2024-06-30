n.d(t, {
    I: function () {
        return S;
    },
    O: function () {
        return i;
    }
});
var r, i, a = n(873546), o = n(703558);
(r = i || (i = {}))[r.TOOLTIP = 0] = 'TOOLTIP', r[r.STATIC = 1] = 'STATIC', r[r.NONE = 2] = 'NONE';
let s = {
        analyticsName: 'normal',
        attachments: !0,
        autocomplete: {
            addReactionShortcut: !0,
            forceChatLayer: !0,
            reactions: !0
        },
        commands: { enabled: !0 },
        drafts: {
            type: o.d.ChannelMessage,
            commandType: o.d.SlashCommand,
            autoSave: !0
        },
        emojis: { button: !0 },
        gifs: {
            button: !0,
            allowSending: !0
        },
        gifts: { button: !0 },
        permissions: { requireSendMessages: !0 },
        showThreadPromptOnReply: !0,
        stickers: {
            button: !0,
            allowSending: !0,
            autoSuggest: !0
        },
        users: { allowMentioning: !0 },
        submit: {
            button: !0,
            ignorePreference: a.tq,
            disableEnterToSubmit: a.tq,
            clearOnSubmit: !0,
            useDisabledStylesOnSubmit: !0
        },
        uploadLongMessages: !0,
        upsellLongMessages: { iconOnly: !1 },
        showCharacterCount: !0,
        sedReplace: !0
    }, l = {
        analyticsName: 'overlay',
        autocomplete: {
            addReactionShortcut: !0,
            forceChatLayer: !0
        },
        drafts: {
            type: o.d.ChannelMessage,
            autoSave: !0
        },
        emojis: { button: !0 },
        gifs: { button: !0 },
        gifts: { button: !0 },
        permissions: { requireSendMessages: !0 },
        showThreadPromptOnReply: !0,
        stickers: {
            button: !0,
            allowSending: !0
        },
        users: { allowMentioning: !0 },
        submit: {
            button: !0,
            ignorePreference: a.tq,
            disableEnterToSubmit: a.tq,
            clearOnSubmit: !0,
            useDisabledStylesOnSubmit: !0
        },
        upsellLongMessages: { iconOnly: !1 },
        showCharacterCount: !0
    }, u = {
        analyticsName: 'sidebar',
        attachments: !0,
        autocomplete: { addReactionShortcut: !0 },
        commands: { enabled: !0 },
        disableAutoFocus: !0,
        drafts: {
            type: o.d.ChannelMessage,
            commandType: o.d.SlashCommand
        },
        emojis: { button: !0 },
        gifs: { allowSending: !0 },
        permissions: { requireSendMessages: !0 },
        stickers: {
            allowSending: !0,
            autoSuggest: !0
        },
        users: { allowMentioning: !0 },
        submit: {
            button: !0,
            ignorePreference: a.tq,
            disableEnterToSubmit: a.tq,
            clearOnSubmit: !0,
            useDisabledStylesOnSubmit: !0
        },
        uploadLongMessages: !0,
        showCharacterCount: !0,
        upsellLongMessages: { iconOnly: !0 }
    }, c = {
        analyticsName: 'edit',
        drafts: { type: o.d.ChannelMessage },
        emojis: { button: !0 },
        users: { allowMentioning: !0 },
        expressionPicker: { onlyEmojis: !0 },
        permissions: { requireSendMessages: !0 },
        submit: { useDisabledStylesOnSubmit: !0 },
        showCharacterCount: !0
    }, d = {
        analyticsName: 'forum',
        drafts: { type: o.d.ChannelMessage },
        emojis: { button: !0 },
        gifs: { allowSending: !0 },
        permissions: { requireSendMessages: !0 },
        submit: {
            useDisabledStylesOnSubmit: !0,
            allowEmptyMessage: !0
        },
        autocomplete: {
            alwaysUseLayer: !0,
            small: !0
        },
        showCharacterCount: !0
    }, _ = {
        analyticsName: 'voice_channel_status',
        drafts: { type: o.d.ChannelMessage },
        emojis: { button: !0 },
        expressionPicker: { onlyEmojis: !0 },
        permissions: { requireSendMessages: !1 },
        submit: {
            useDisabledStylesOnSubmit: !0,
            allowEmptyMessage: !0
        },
        autocomplete: {
            alwaysUseLayer: !0,
            small: !0
        },
        markdown: {
            disableCodeBlocks: !0,
            disableBlockQuotes: !0
        },
        showCharacterCount: !0
    }, E = {
        analyticsName: 'thread_creation',
        attachments: !0,
        drafts: { type: o.d.FirstThreadMessage },
        emojis: { button: !0 },
        gifs: { allowSending: !0 },
        stickers: { allowSending: !0 },
        users: { allowMentioning: !0 },
        permissions: { requireCreateTherads: !0 },
        submit: {
            useDisabledStylesOnSubmit: !0,
            button: !0
        },
        disableAutoFocus: !0,
        showCharacterCount: !0,
        hideAttachmentArea: !0,
        upsellLongMessages: { iconOnly: !0 }
    }, f = {
        analyticsName: 'create_forum_post',
        attachments: !0,
        drafts: { type: o.d.FirstThreadMessage },
        gifs: { allowSending: !0 },
        stickers: { allowSending: !0 },
        users: { allowMentioning: !0 },
        permissions: { requireSendMessages: !0 },
        submit: {
            useDisabledStylesOnSubmit: !0,
            disableEnterToSubmit: !0
        },
        disableAutoFocus: !0,
        hideAttachmentArea: !0,
        uploadLongMessages: !0
    }, h = {
        analyticsName: 'create_poll',
        attachments: !0,
        drafts: { type: o.d.ChannelMessage },
        emojis: { button: !0 },
        gifs: { allowSending: !0 },
        permissions: { requireSendMessages: !0 },
        submit: {
            useDisabledStylesOnSubmit: !0,
            disableEnterToSubmit: !0
        }
    }, p = {
        analyticsName: 'user_profile',
        drafts: { type: o.d.ChannelMessage },
        emojis: { button: !0 },
        permissions: { requireSendMessages: !1 },
        users: { allowMentioning: !0 },
        autocomplete: {
            alwaysUseLayer: !0,
            small: !0
        },
        submit: {
            useDisabledStylesOnSubmit: !0,
            clearOnSubmit: !0
        },
        toolbarType: 2
    }, m = {
        analyticsName: 'profile_bio_input',
        drafts: { type: o.d.ChannelMessage },
        emojis: { button: !0 },
        permissions: { requireSendMessages: !0 },
        submit: {
            useDisabledStylesOnSubmit: !0,
            disableEnterToSubmit: !0
        },
        disableAutoFocus: !0,
        showCharacterCount: !0
    }, I = {
        analyticsName: 'custom_gift_type',
        drafts: { type: o.d.ChannelMessage },
        emojis: {},
        permissions: { requireSendMessages: !0 },
        submit: {
            useDisabledStylesOnSubmit: !0,
            disableEnterToSubmit: !0
        },
        disableAutoFocus: !0,
        showCharacterCount: !0
    }, T = {
        analyticsName: 'rules_input',
        drafts: { type: o.d.ChannelMessage },
        permissions: { requireSendMessages: !0 },
        autocomplete: {
            alwaysUseLayer: !0,
            small: !0
        },
        showCharacterCount: !0
    }, g = {
        analyticsName: 'forum_channel_guidelines',
        drafts: { type: o.d.ChannelMessage },
        permissions: { requireSendMessages: !1 },
        submit: {
            useDisabledStylesOnSubmit: !0,
            disableEnterToSubmit: !0
        },
        autocomplete: {
            alwaysUseLayer: !0,
            small: !0
        },
        showCharacterCount: !0,
        toolbarType: 1
    }, S = {
        NORMAL: s,
        OVERLAY: l,
        SIDEBAR: u,
        EDIT: c,
        FORM: d,
        VOICE_CHANNEL_STATUS: _,
        THREAD_CREATION: E,
        USER_PROFILE: p,
        PROFILE_BIO_INPUT: m,
        CUSTOM_GIFT: I,
        RULES_INPUT: T,
        CREATE_FORUM_POST: f,
        CREATE_POLL: h,
        FORUM_CHANNEL_GUIDELINES: g,
        ATOMIC_REACTOR_REPLY_INPUT: {
            analyticsName: 'atomic_reator_reply_input',
            drafts: { type: o.d.ChannelMessage },
            permissions: { requireSendMessages: !0 },
            users: { allowMentioning: !0 },
            submit: {
                useDisabledStylesOnSubmit: !0,
                disableEnterToSubmit: !0
            },
            disableAutoFocus: !0,
            showCharacterCount: !0
        }
    };
