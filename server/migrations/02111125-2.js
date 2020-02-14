module.exports.up = (queryInterface, DataTypes) => {
  return queryInterface.createTable('user', {
    userId: {
      type: DataTypes.STRING(15),
      allowNull: false,
      unique: true
    },
    password: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    name: {
      type: DataTypes.STRING(15),
      allowNull: false
    },
    provider: {
      type: DataTypes.STRING(20),
      allowNull: false,
      defaultValue: 'local'
    },
    snsId: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    admin: {
      type: DataTypes.BOOLEAN
    },
    image: {
      type: DataTypes.STRING(100),
      allowNull: true
    }
  }, {
    timestamps: true,
    paranoid: true
  })
}

module.exports.down = queryInterface => {
  return queryInterface.dropTable('user')
}