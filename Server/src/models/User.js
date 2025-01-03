import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  projects: [
    {
      project_id: { type: mongoose.Schema.Types.ObjectId },
      role: {
        type: String,
        enum: ["admin", "manager", "member"],
      },
    },
  ],
});

export default mongoose.model("User", userSchema);
