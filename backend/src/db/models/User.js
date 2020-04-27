import {Model, DataTypes} from 'sequelize';
import bcrypt from 'bcryptjs';
import crypto from 'crypto';


class User extends Model {
    static init(sequelize) {
        super.init({
            name: DataTypes.STRING,
            email: DataTypes.STRING,
            password: DataTypes.STRING,
            link: DataTypes.STRING
        }, {
            sequelize,
            tableName: 'users'
        })

        this.addHook('beforeCreate', async (user, options) => {
            user.password = await bcrypt.hash(user.password, 12);
            user.link = crypto.randomBytes(12).toString('HEX');
        })
    }

    async comparePassword(password) {
        const compare = await bcrypt.compare(password,this.password);
        return compare;
    }
}

export default User;