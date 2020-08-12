$(document).ready(function () {


    $('.selection.dropdown')
        .dropdown();

    $('.ui.form')
        .form({
            fields: {
                lastname: 'empty',
                firstname: 'empty',
                gender: 'empty',
                email: 'empty',
                password: ['minLength[6]', 'empty'],
                terms: 'checked',
                terms2: 'empty'
            }
        })
        ;

});

console.log('test')
