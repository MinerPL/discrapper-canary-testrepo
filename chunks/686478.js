var r, i;
function a(e) {
    return {
        channelId: e.channel_id,
        messageId: e.message_id,
        savedAt: new Date(e.saved_at),
        authorSummary: e.author_summary,
        channelSummary: e.channel_summary,
        messageSummary: e.message_summary,
        guildId: 0 === e.guild_id ? void 0 : e.guild_id,
        authorId: 0 === e.author_id ? void 0 : e.author_id,
        notes: e.notes,
        dueAt: null != e.due_at ? new Date(e.due_at) : void 0
    };
}
n.d(t, {
    _: function () {
        return r;
    },
    v: function () {
        return a;
    }
}),
    ((i = r || (r = {})).REMINDER = 'REMINDER'),
    (i.BOOKMARK = 'BOOKMARK');
