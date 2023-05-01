module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    title: {
      type: DataTypes.STRING,
      allowNull: false
    },
    postText: {
      type: DataTypes.STRING,
      allowNull: false
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false
    },
  });
  User.associate = (models) =>{
    User.hasMany(models.Comments, {
      onDelete: "cascade",
    });
  }

  return User;
};
