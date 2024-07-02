// We export a function that defines the model.
// This function will automatically receive as parameter the Sequelize connection object.
module.exports = (sequelize, DataTypes) => {
	// sequelize.drop({ force: true });
	const Roles = sequelize.define('roles', {
		// The following specification of the 'id' attribute could be omitted
		// since it is the default.
		id: {
			allowNull: false,
			autoIncrement: true,
			primaryKey: true,
			type: DataTypes.INTEGER
		},
		role_name: {
			allowNull: false,
			type: DataTypes.STRING
		},
	}, {
        freezeTableName: true,
		timestamps: false
    });

	// Roles.sync({ alter: true }).then(() => {
	// 	const role = Roles.build({role_name: 'ADMIN'});
	// 	role.save();
	// 	const role1 = Roles.build({role_name: 'JUDGE'});
	// 	role1.save();
	// 	const role2 = Roles.build({role_name: 'LAWYER'});
	// 	role2.save();
	// 	const role3 = Roles.build({role_name: 'CLIENT'});
	// 	return role3.save();
	// 	// return Roles.findAll({ attribute: ['role_name'] });
	// }).then((data) => {
	// 	// data.array.forEach(element => {
	// 	// 	console.log(element.toJSON());
	// 	// });
	// 	console.log("Role added to database")
	// }).catch((error) => {
	// 	console.log("Error in Roles model.", error);
	// });

	return Roles;
};