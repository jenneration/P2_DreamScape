module.exports = (sequelize, DataTypes) => {

  const Dreams = sequelize.define("Dreams", {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        //len: [1],
      },
    },
    description: {
      type: DataTypes.TEXT
    },
    tags: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    createdAt: {
      type: DataTypes.DATEONLY,
      get() {
        return moment(this.getDataValue('createdAt')).format('DD.MM.YYYY');
      }
    },
    updatedAt: {
      type: DataTypes.DATEONLY,
      get() {
        return moment(this.getDataValue('updatedAt')).format('DD.MM.YYYY');
      }
    }
  });
  return Dreams;
};
