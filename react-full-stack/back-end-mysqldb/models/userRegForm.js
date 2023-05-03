module.exports = (sequelize, DataTypes) => {
  const userRegForm = sequelize.define('userRegForm', {

    username: {
      type: DataTypes.STRING,
      allowNull: false
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    }
  });
  userRegForm.associate = (models) =>{
  userRegForm.hasMany(models.User, {
   onDelete: "cascade",
   });
  }

  return userRegForm;
};
