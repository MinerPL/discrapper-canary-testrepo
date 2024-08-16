var i = n(570140);
t.Z = {
    viewPrompt: function (e, t) {
        i.Z.wait(() => {
            i.Z.dispatch({
                type: 'GUILD_PROMPT_VIEWED',
                prompt: e,
                guildId: t
            });
        });
    }
};
