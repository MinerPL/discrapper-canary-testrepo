n.d(t, {
    Z: function () {
        return r;
    }
});
var r = {};
r = {
    buttonLabel: `\u{663E}\u{793A}\u{5EFA}\u{8BAE}`,
    countAnnouncement: (e, t) =>
        `\u{6709} ${t.plural(e.optionCount, {
            one: () => `${t.number(e.optionCount)} \u{4E2A}\u{9009}\u{9879}`,
            other: () => `${t.number(e.optionCount)} \u{4E2A}\u{9009}\u{9879}`
        })}\u{53EF}\u{7528}\u{3002}`,
    focusAnnouncement: (e, t) =>
        `${t.select(
            {
                true: () =>
                    `\u{8FDB}\u{5165}\u{4E86} ${e.groupTitle} \u{7EC4}\u{FF0C}\u{5176}\u{4E2D}\u{6709} ${t.plural(e.groupCount, {
                        one: () => `${t.number(e.groupCount)} \u{4E2A}\u{9009}\u{9879}`,
                        other: () => `${t.number(e.groupCount)} \u{4E2A}\u{9009}\u{9879}`
                    })}. `,
                other: ''
            },
            e.isGroupChange
        )}${e.optionText}${t.select(
            {
                true: `, \u{5DF2}\u{9009}\u{62E9}`,
                other: ''
            },
            e.isSelected
        )}`,
    listboxLabel: `\u{5EFA}\u{8BAE}`,
    selectedAnnouncement: (e) => `${e.optionText}, \u{5DF2}\u{9009}\u{62E9}`
};
