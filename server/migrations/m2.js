module.exports.up = (queryInterface, DataTypes) => {
  return queryInterface.createTable('post', {
    title: {
      type: DataTypes.STRING(30),
      allowNull: false
    },
    content: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    image: {
      type: DataTypes.STRING(200),
      allowNull: true
    }
  }, {
    timestamps: true,
    paranoid: true
  })
}

module.exports.down = queryInterface => {
  return queryInterface.dropTable('post')
}