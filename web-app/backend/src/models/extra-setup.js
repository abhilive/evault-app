function applyExtraSetup(sequelize) {
	const { user, roles } = sequelize.models;

	roles.hasMany(user);
	user.belongsTo(roles);
}

module.exports = { applyExtraSetup };