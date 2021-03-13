module.exports = (sequelize, DataTypes) => {
  const Dream = sequelize.define("Dream", {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1],
      },
    },
    body: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
        len: [1],
      },
    },
    tags: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  });
  return Dream;
};
