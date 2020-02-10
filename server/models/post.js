module.exports = (sequelize, DataTypes) => {
  return sequelize.define('post', {
    title: {
      type: DataTypes.STRING(30),
      allowNull: false
    },
    content: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    images: {
      type: DataTypes.STRING(301),
      get: function() {
        return JSON.parse(this.getDataValue('images'));
      }, 
      set: function(val) {
          return this.setDataValue('images', JSON.stringify(val));
      },
      allowNull: true
    }
  }, {
    timestamps: true,
    paranoid: true
  })
};
