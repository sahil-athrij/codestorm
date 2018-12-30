
function pay() {
    firebase.auth().onAuthStateChanged(function (user) {

        branch = "cs" ;//when making full website makse sure to get this from the branch tab
        event = "CodeStorm"; //when making full website make sure to get this from the event card
        if (user) {
            firebase.database().ref('/events/' + branch + '/' + event).once('value').then(function (snapshot) {
                eve = snapshot.val();
                insta_link = eve.instamojo;
                insta_link += "?data_name=";
                uuid = user.uid;
                insta_link += uuid;
                insta_link += "&data_readonly=data_name";
                document.location = insta_link;


            });
        }
        else {
            document.location = "index.html"
        }
    });
}