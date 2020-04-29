const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const WorkoutSchema = new Schema(
  {
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
  },
  {
    toJSON: {
      virtuals: true
    }
  }
);

WorkoutSchema.virtual("totalDuration").get(function () {
  return this.exercises.reduce((acc, curr) => {
    acc = acc + curr.duration;
    return acc;
  }, 0);
});

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;
