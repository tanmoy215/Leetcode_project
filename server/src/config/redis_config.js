const redis = require("redis");
const RedisClient = redis.createClient({                                                
    username: 'default',
    password: process.env.REDIS_PASS,
    socket: {
        host: 'redis-10144.c212.ap-south-1-1.ec2.redns.redis-cloud.com',
        port: 10144
    }
});


module.exports = RedisClient;
