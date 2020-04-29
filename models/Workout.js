const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
  day: {
    type: Date,
    default: Date.now
  },

  exercises: [
    {
      type: {
        type: String,
        required: "Exercise type is required"
      },
      name: {
        type: String,
        required: "Exercise name is required"
      },
      duration: {
        type: Number,
        required: "Exercise duration is required"
      },
      weight: Number,
      reps: Number,
      sets: Number,
      distance: Number
    }
  ]
});

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;
