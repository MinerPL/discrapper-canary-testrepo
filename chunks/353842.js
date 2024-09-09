let r = (0, n(818083).B)({
    kind: 'user',
    id: '2024-04_emoji_suggestions',
    label: 'Emoji Suggestions Experiment',
    defaultConfig: {
        isEmojiSuggestionsEnabled: !1,
        isEmojiTextMatchSuggestionsEnabled: !1
    },
    treatments: [
        {
            id: 1,
            label: 'Enables static emoji suggestions',
            config: {
                isEmojiSuggestionsEnabled: !0,
                isEmojiTextMatchSuggestionsEnabled: !1
            }
        },
        {
            id: 2,
            label: 'Enables Emoji Suggestions using text content and emoji captions',
            config: {
                isEmojiSuggestionsEnabled: !0,
                isEmojiTextMatchSuggestionsEnabled: !0
            }
        }
    ]
});
t.Z = r;
