import { useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

export default function Careers() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    experience: "",
    resume: null as File | null,
    resumeLink: "",
  });

  const [message, setMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (
      file.type !==
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document"
    ) {
      setMessage("Invalid file type. Only DOCX files are allowed.");
      return;
    }

    const uploadData = new FormData();
    uploadData.append("file", file);
    uploadData.append("upload_preset", "demo_thiru");

    try {
      const response = await fetch(
        "https://api.cloudinary.com/v1_1/dqgfk61lv/upload?resource_type=auto",
        {
          method: "POST",
          body: uploadData,
        }
      );

      if (!response.ok) {
        throw new Error(
          `Cloudinary upload failed with status ${response.status}`
        );
      }

      const data = await response.json();
      if (data.secure_url) {
        const directResumeLink = `${data.secure_url}?response-content-disposition=attachment`;
        setFormData((prev) => ({
          ...prev,
          resume: file,
          resumeLink: directResumeLink,
        }));
        setMessage("Resume uploaded successfully!");
      } else {
        setMessage("Failed to upload resume. Please try again.");
      }
    } catch (error) {
      console.error("Cloudinary upload error:", error);
      setMessage("Error uploading resume.");
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (
      !formData.firstName ||
      !formData.lastName ||
      !formData.phone ||
      !formData.resumeLink
    ) {
      setMessage("Please fill in all required fields.");
      return;
    }

    const emailParams = {
      to_name: "Recruiter",
      from_name: `${formData.firstName} ${formData.lastName}`,
      firstName: formData.firstName,
      lastName: formData.lastName,
      phone: formData.phone,
      experience: formData.experience || "No experience provided",
      resumeLink: encodeURI(formData.resumeLink),
    };

    try {
      await emailjs.send(
        "service_7heoxck",
        "template_nyjyagh",
        emailParams,
        "G9fSdPsjxsDadawnX"
      );
      setMessage("Application submitted successfully!");

      setFormData({
        firstName: "",
        lastName: "",
        phone: "",
        experience: "",
        resume: null,
        resumeLink: "",
      });

      const fileInput =
        document.querySelector<HTMLInputElement>('input[type="file"]');
      if (fileInput) {
        fileInput.value = "";
      }

      setTimeout(() => setMessage(""), 3000);
    } catch (error) {
      console.error("Error sending email:", error);
      setMessage("Failed to submit application. Please try again.");
    }
  };

  return (
    <div className="pt-16 bg-white flex flex-col justify-center">
      <div className="mt-20 w-full mb-20">
        <h2 className="text-3xl font-bold mb-6 text-center text-navy-600">
          Experience the Best at D&N Craft
        </h2>
        <p className=" mb-10 text-center text-gray-600">
          Be a part of our dynamic team and grow with us
        </p>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6 px-10 max-w-7xl mx-auto mb-20">
          {/*
            // 🔥 Growth Opportunities
            // 👥 Leadership Roles
            // 🎨 Creative Freedom
            // 🚀 Career Growth
            // 🏡 Work-Life Balance
          */}
          {[
            "🔥 Growth Opportunities",
            "👥 Leadership Roles",
            "🎨 Creative Freedom",
            "🚀 Career Growth",
            "🏡 Work-Life Balance",
          ].map((item, index) => (
            <div
              key={index}
              className="text-center transform transition-all duration-300 hover:scale-105"
            >
              <motion.div
                whileHover={{ rotate: 10, scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="border border-orange-500 p-6 rounded-full inline-block shadow-md bg-white"
              >
                <div className="text-2xl animate-pulse">
                  {item.split(" ")[0]}
                </div>
              </motion.div>
              <h3 className="mt-4 text-gray-700">{item.slice(2)}</h3>
            </div>
          ))}
        </div>

        <div className="max-w-4xl mx-auto px-6 sm:px-10 lg:px-16 py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-10"
          >
            <h1 className="text-4xl font-bold">
              Apply for a Career at D&N CRAFT 🚀
            </h1>
            <p className="text-lg mt-4">
              Fill in your details below, attach your resume, and submit your
              application.
            </p>
          </motion.div>

          <form
            onSubmit={handleSubmit}
            className="backdrop-blur-xl border border-white/20 p-8 rounded-2xl shadow-xl"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block mb-2 font-medium">First Name *</label>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-white bg-white/20 placeholder-white/70"
                  required
                />
              </div>
              <div>
                <label className="block mb-2 font-medium">Last Name *</label>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-white bg-white/20 placeholder-white/70"
                  required
                />
              </div>
              <div>
                <label className="block mb-2 font-medium">Phone Number *</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-white bg-white/20 placeholder-white/70"
                  required
                />
              </div>
              <div>
                <label className="block mb-2 font-medium">
                  Experience (if any)
                </label>
                <textarea
                  name="experience"
                  value={formData.experience}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-white bg-white/20 placeholder-white/70"
                />
              </div>
              <div className="col-span-2">
                <label className="block mb-2 font-medium">
                  Upload Resume (DOCX only) *
                </label>
                <input
                  type="file"
                  name="resume"
                  accept=".docx"
                  onChange={handleFileChange}
                  className="w-full p-3 rounded-lg"
                  required
                />
              </div>
            </div>

            <div className="text-center mt-6">
              <button
                type="submit"
                className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:scale-105 transition-all duration-300"
              >
                Submit Application
              </button>
            </div>

            {message && (
              <p className="text-center mt-4 text-lg font-medium text-green-500">
                {message}
              </p>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}
