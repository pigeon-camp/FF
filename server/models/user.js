module.exports = (sequelize, DataTypes) => {
  return sequelize.define('user', {
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
      type: DataTypes.BOOLEAN,
      allowNull: false
    }
  }, {
    timestamps: true,
    paranoid: true
  })
};
