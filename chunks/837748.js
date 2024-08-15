a.d(s, {
	Z: function () {
		return t;
	}
});
var E = a(58346),
	_ = a(689938);
function t(e) {
	switch (e) {
		case E.HQ.CLASSROOM:
			return {
				header: _.Z.Messages.GUILD_TEMPLATE_MODAL_TITLE_CLASSROOM,
				description: _.Z.Messages.GUILD_TEMPLATE_MODAL_DESCRIPTION_CLASSROOM,
				nameLabel: _.Z.Messages.GUILD_TEMPLATES_FORM_LABEL_SERVER_NAME_CLASSROOM,
				terms: _.Z.Messages.CREATE_SERVER_GUIDELINES,
				defaultName: _.Z.Messages.GUILD_TEMPLATE_DEFAULT_SERVER_NAME_CLASSROOM,
				author: _.Z.Messages.DISCORD_NAME
			};
		case E.HQ.LOCAL_COMMUNITIES:
			return {
				header: _.Z.Messages.GUILD_TEMPLATE_MODAL_TITLE_LOCAL_COMMUNITIES,
				description: _.Z.Messages.GUILD_TEMPLATE_MODAL_DESCRIPTION_LOCAL_COMMUNITIES,
				nameLabel: _.Z.Messages.GUILD_TEMPLATES_FORM_LABEL_SERVER_NAME_LOCAL_COMMUNITIES,
				terms: _.Z.Messages.CREATE_SERVER_GUIDELINES,
				defaultName: _.Z.Messages.GUILD_TEMPLATE_DEFAULT_SERVER_NAME_LOCAL_COMMUNITIES,
				author: _.Z.Messages.DISCORD_NAME
			};
		case E.HQ.CREATORS_HOBBIES:
			return {
				header: _.Z.Messages.GUILD_TEMPLATE_MODAL_TITLE_CREATORS_HOBBIES,
				description: _.Z.Messages.GUILD_TEMPLATE_MODAL_DESCRIPTION_CREATORS_HOBBIES,
				nameLabel: _.Z.Messages.GUILD_TEMPLATES_FORM_LABEL_SERVER_NAME_CREATORS_HOBBIES,
				terms: _.Z.Messages.CREATE_SERVER_GUIDELINES,
				defaultName: _.Z.Messages.GUILD_TEMPLATE_DEFAULT_SERVER_NAME_CREATORS_HOBBIES,
				author: _.Z.Messages.DISCORD_NAME
			};
		case E.HQ.GLOBAL_COMMUNITIES:
			return {
				header: _.Z.Messages.GUILD_TEMPLATE_MODAL_TITLE_GLOBAL_COMMUNITIES,
				description: _.Z.Messages.GUILD_TEMPLATE_MODAL_DESCRIPTION_GLOBAL_COMMUNITIES,
				nameLabel: _.Z.Messages.GUILD_TEMPLATES_FORM_LABEL_SERVER_NAME_GLOBAL_COMMUNITIES,
				terms: _.Z.Messages.CREATE_SERVER_GUIDELINES,
				defaultName: _.Z.Messages.GUILD_TEMPLATE_DEFAULT_SERVER_NAME_GLOBAL_COMMUNITIES,
				author: _.Z.Messages.DISCORD_NAME
			};
		case E.HQ.FRIENDS_FAMILY:
			return {
				header: _.Z.Messages.GUILD_TEMPLATE_MODAL_TITLE_FRIENDS_FAMILY,
				description: _.Z.Messages.GUILD_TEMPLATE_MODAL_DESCRIPTION_FRIENDS_FAMILY,
				nameLabel: _.Z.Messages.GUILD_TEMPLATES_FORM_LABEL_SERVER_NAME_FRIENDS_FAMILY,
				terms: _.Z.Messages.CREATE_SERVER_GUIDELINES,
				defaultName: _.Z.Messages.GUILD_TEMPLATE_DEFAULT_SERVER_NAME_FRIENDS_FAMILY,
				author: _.Z.Messages.DISCORD_NAME
			};
		case E.HQ.STUDY_GROUPS:
			return {
				header: _.Z.Messages.GUILD_TEMPLATE_MODAL_TITLE_STUDY_GROUPS,
				description: _.Z.Messages.GUILD_TEMPLATE_MODAL_DESCRIPTION_STUDY_GROUPS,
				nameLabel: _.Z.Messages.GUILD_TEMPLATES_FORM_LABEL_SERVER_NAME_STUDY_GROUPS,
				terms: _.Z.Messages.CREATE_SERVER_GUIDELINES,
				defaultName: _.Z.Messages.GUILD_TEMPLATE_DEFAULT_SERVER_NAME_STUDY_GROUPS,
				author: _.Z.Messages.DISCORD_NAME
			};
		case E.HQ.CREATE_FROM_SCRATCH:
			return {
				header: _.Z.Messages.GUILD_TEMPLATE_MODAL_TITLE_CREATE_FROM_SCRATCH,
				description: _.Z.Messages.GUILD_TEMPLATE_MODAL_DESCRIPTION_CREATE_FROM_SCRATCH,
				nameLabel: _.Z.Messages.GUILD_TEMPLATES_FORM_LABEL_SERVER_NAME_CREATE_FROM_SCRATCH,
				terms: _.Z.Messages.CREATE_SERVER_GUIDELINES,
				defaultName: _.Z.Messages.GUILD_TEMPLATE_DEFAULT_SERVER_NAME_CREATE_FROM_SCRATCH,
				author: _.Z.Messages.DISCORD_NAME
			};
		case E.HQ.CAMPUS_CLUBS:
			return {
				header: _.Z.Messages.GUILD_TEMPLATE_MODAL_TITLE_CAMPUS_CLUBS,
				description: _.Z.Messages.GUILD_TEMPLATE_MODAL_DESCRIPTION_CAMPUS_CLUBS,
				nameLabel: _.Z.Messages.FORM_LABEL_SERVER_NAME,
				terms: _.Z.Messages.CREATE_SERVER_GUIDELINES,
				defaultName: _.Z.Messages.GUILD_TEMPLATE_DEFAULT_SERVER_NAME_CAMPUS_CLUBS,
				author: _.Z.Messages.DISCORD_NAME
			};
		case E.HQ.LEAGUE_CLUBS:
			return {
				header: _.Z.Messages.GUILD_TEMPLATE_MODAL_TITLE_LEAGUE_CLUBS,
				description: _.Z.Messages.GUILD_TEMPLATE_MODAL_DESCRIPTION_LEAGUE_CLUBS,
				nameLabel: _.Z.Messages.FORM_LABEL_SERVER_NAME,
				terms: _.Z.Messages.CREATE_SERVER_GUIDELINES,
				defaultName: _.Z.Messages.CREATE_SERVER_DEFAULT_SERVER_NAME_FORMAT,
				author: _.Z.Messages.DISCORD_NAME
			};
		case E.HQ.GITHUB_HACKATHON:
			return {
				header: _.Z.Messages.GUILD_TEMPLATE_MODAL_TITLE_GITHUB_HACKATHON,
				description: _.Z.Messages.GUILD_TEMPLATE_MODAL_DESCRIPTION_GITHUB_HACKATHON,
				nameLabel: _.Z.Messages.FORM_LABEL_SERVER_NAME,
				terms: _.Z.Messages.CREATE_SERVER_GUIDELINES,
				defaultName: _.Z.Messages.CREATE_SERVER_DEFAULT_SERVER_NAME_FORMAT,
				author: 'GitHub Education'
			};
		default:
			return {
				header: _.Z.Messages.GUILD_TEMPLATE_CREATE_DISCORD,
				nameLabel: _.Z.Messages.FORM_LABEL_SERVER_NAME,
				terms: _.Z.Messages.CREATE_SERVER_GUIDELINES,
				defaultName: _.Z.Messages.CREATE_SERVER_DEFAULT_SERVER_NAME_FORMAT
			};
	}
}
