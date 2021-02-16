module.exports = function(sequelize, DataTypes) {
    let User = sequelize.define("User", {
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: {
                args: true,
                msg: "Email address is already in use"
            },
            validate: {
                isEmail: true
            }
        },

        username: {
            type: DataTypes.STRING,
            allowNull: false
        },

        password: {
            type: DataTypes.STRING,
            allowNull: false
        },

        isMale: {
            type: DataTypes.BOOLEAN,
            allowNull: false
        },

        birthday: {
            type: DataTypes.STRING,
            allowNull: false
        },

        height: {
            type: DataTypes.NUMBER,
            allowNull: false
        },

        weight: {
            type: DataTypes.NUMBER,
            allowNull: false
        },

        religion: {
            type: DataTypes.STRING,
            allowNull: false
        },

        politics: {
            type: DataTypes.NUMBER,
            allowNull: false
        }
    });

    return User;
}