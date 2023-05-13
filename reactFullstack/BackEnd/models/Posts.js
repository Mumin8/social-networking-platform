module.exports = (sequelize, DataTypes) =>{
  const Posts = sequelize.define("Posts", {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    postText: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
    },
})

  Posts.associate = (models) =>{
    Posts.hasMany(models.Comments, {
      foreignKey: "PostId",
      onDelete: "cascade"
    })
    models.Comments.belongsTo(models.Posts)
  }
  return Posts
}
