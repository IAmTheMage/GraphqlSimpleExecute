import {Model, DataTypes} from 'sequelize';

class Twitter extends Model {
    static init(sequelize) {
        super.init({
            tweet: DataTypes.TEXT
        }, {
            sequelize,
            tableName: 'tweets'
        })
    }

    static associate(models) {
        this.belongsTo(models.User, {
            foreignKey: 'user_id',
            as: 'user'
        })
    }
}

export default Twitter;