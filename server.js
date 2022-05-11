const Sequelize = require('sequelize');
const { STRING, TEXT } = Sequelize;
const conn = new Sequelize(process.env.DATABASE_URL || 'postgres://postgres:JerryPine@localhost/acme_db');

const User = conn.define('user', {
    name: STRING,
    bio: TEXT
});

User.createWithName = (name)=> User.create({ name });

const syncAndSeed = async()=> {
    await conn.sync({ force: true });
    const [moe, lucy, curly] = await Promise.all(
        ['moe', 'lucy', 'curly'].map(User.createWithName)
    );

    console.log(lucy.get());
};

syncAndSeed();
