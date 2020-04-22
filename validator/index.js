exports.userSingupValidator = (request, response, next) => {
    request.check('name', 'Please enter your name.').notEmpty()
    request.check('email', 'Please enter a valid email address.')
        .matches(/.+\@.+\..+/)
        .withMessage('Please enter a valid email address.')
        .isLength({
            min: 4,
            max: 32
        });
    request.check('password', 'Please enter a valid password.').notEmpty()
    request.check('password')
        .isLength({min: 8})
        .withMessage('Password must contain at least 8 characters.')
        .matches(/\d/)
        .withMessage('Password must contain a number.')

    const errors = request.validationErrors()

    if(errors) {
        const firstError =  errors.map(error => error.msg)[0];
        return response.status(400).json({ error: firstError });
    }

    next();

}