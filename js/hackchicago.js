var hc = new tingle.modal({
    footer: true,
    stickyFooter: false,
    closeMethods: ['overlay', 'button', 'escape'],
    closeLabel: "Close",
    beforeClose: function() {
        return true; // close the modal
    }
});

// set content
hc.setContent('<div style="text-align: center"><img src="https://hackchicago.io/img/bluelogo.svg" style="width: 200px"><h1>Check out <strong>Hack Chicago</strong>!</h1><p>We are striving to improve the event by making it bigger and better. Through a partnership with Hack Club, we will be bringing Hack Chicago, an even larger event, to the Midwest. With more attendees, activities, prizes, and hackers, we expect this year to be a blast!</p></div>');

// add a button
hc.addFooterBtn('Join us now!', 'tingle-btn tingle-btn--primary', function() { window.location.href = "https://hackchicago.io"});

window.onload = function() {
    hc.open();
}