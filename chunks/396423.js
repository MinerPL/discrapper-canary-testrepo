n.d(t, {
    Z: function () {
        return r;
    }
});
var r = {};
r = {
    buttonLabel: `Mostrar sugest\xf5es`,
    countAnnouncement: (e, t) =>
        `${t.plural(e.optionCount, {
            one: () => `${t.number(e.optionCount)} op\xe7\xe3o`,
            other: () => `${t.number(e.optionCount)} op\xe7\xf5es`
        })} dispon\xedvel.`,
    focusAnnouncement: (e, t) =>
        `${t.select(
            {
                true: () =>
                    `Grupo inserido ${e.groupTitle}, com ${t.plural(e.groupCount, {
                        one: () => `${t.number(e.groupCount)} op\xe7\xe3o`,
                        other: () => `${t.number(e.groupCount)} op\xe7\xf5es`
                    })}. `,
                other: ''
            },
            e.isGroupChange
        )}${e.optionText}${t.select(
            {
                true: ', selecionado',
                other: ''
            },
            e.isSelected
        )}`,
    listboxLabel: `Sugest\xf5es`,
    selectedAnnouncement: (e) => `${e.optionText}, selecionado`
};
