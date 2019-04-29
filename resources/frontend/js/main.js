const MENU_TEMPLATE = `
    <div>
    </div>
`

$(document).ready(function() {
    console.log("Ready");
    $.getJSON("/menu", function(data, status, xhs) {
        data.forEach(item => {
            $("body").append
        });
    });
});

