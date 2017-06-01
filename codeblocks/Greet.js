function invoke(arrow, params, cb) {
    const salutation = arrow.config.helloworld.salutation;

    if (!params.username) {
        return cb(null, {
            error: 'Invalid name'
        });
    }

    const body = salutation + ' ' + params.username;
    cb(null, body);
}

exports = module.exports = invoke
