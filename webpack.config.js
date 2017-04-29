module.exports = function(environment) {
    environment = environment || process.env.NODE_ENV || 'production';
    console.log(`Loading ${environment} config...`);
    return require(`./webpack.config.${environment}.js`)
};