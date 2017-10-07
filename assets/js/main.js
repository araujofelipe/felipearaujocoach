function subscribeEbook() {
    $.post(
        'http://felipearaujocoach.us8.list-manage.com/subscribe/post?u=88bb4dc8da583a13281753680&amp;id=2b6e86cf62',
        {'EMAIL' : $('#mce-EMAIL').val()},
        (result) => {
            console.log('ok!');
        }
    );
}