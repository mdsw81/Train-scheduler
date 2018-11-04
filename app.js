  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyDiRMLFCTgjfhNmIyPDUCraC-WI1mVntwQ",
    authDomain: "train-schedule-6bc75.firebaseapp.com",
    databaseURL: "https://train-schedule-6bc75.firebaseio.com",
    projectId: "train-schedule-6bc75",
    storageBucket: "train-schedule-6bc75.appspot.com",
    messagingSenderId: "324897725068"
  };
  firebase.initializeApp(config);

var dataInput = firebase.database();

//Submit button for when after data is entered
$("#submit-button").on("click", function() {

  // Data entry
  var trainName = $("#input-train-name").val().trim();
  var destination = $("#input-destination").val().trim();
  var firstTrainTime = $("#input-first-train-time").val().trim();
  var frequency = $("#frequency-input").val().trim();

  var addTrain = {

    name: trainName,
    destination: destination,
    firstTrainTime: firstTrainTime,
    frequency: frequency
  };

  dataInput.ref().push(addTrain);

  console.log(addTrain.name);
  console.log(addTrain.destination);
  console.log(addTrain.firstTrainTime);
  console.log(addTrain.frequency);


  $("#input-train-name").val("");
  $("#input-destination").val("");
  $("#input-first-train-time").val("");
  $("#input-frequency").val("");

});

dataInput.ref().on("child_added", function(childSnapshot) {

  var trainName = childSnapshot.val().name;
  var trainDestination = childSnapshot.val().destination;
  var trainFrequency = childSnapshot.val().frequency;
  var trainFirstTrainTime = childSnapshot.val().firstTrainTime;

})
