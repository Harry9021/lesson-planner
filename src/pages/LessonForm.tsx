import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import generateLessonPlan from "../api/geminiApi";
import PDFGenerator from "../components/PDFGenerator";

const lessonSchema = z.object({
  topic: z.string().min(2),
  gradeLevel: z.string(),
  mainConcept: z.string().min(5),
  subTopics: z.string().min(5),
  materials: z.string().min(5),
  learningObjectives: z.string().min(10),
});

interface LessonPlanData {
  topic: string;
  gradeLevel: string;
  mainConcept: string;
  subTopics: string;
  materials: string;
  learningObjectives: string;
}

const LessonForm = () => {
  const { register, handleSubmit } = useForm({
    resolver: zodResolver(lessonSchema),
  });
  const [lessonPlan, setLessonPlan] = useState<LessonPlanData | null>(null);

  const onSubmit = async (data: LessonPlanData) => {
    if (!data.topic || !data.gradeLevel || !data.mainConcept) {
      alert(
        "Please fill out all required fields: Topic, Grade Level, and Main Concept."
      );
      return;
    }

    const aiGeneratedPlan = await generateLessonPlan({
      prompt: `Generate a structured lesson plan with the following details:
      - Subject: ${data.topic || "Not Provided"}
      - Grade Level: ${data.gradeLevel || "Not Provided"}
      - Main Concept: ${data.mainConcept || "Not Provided"}
      - Subtopics: ${data.subTopics || "Not Provided"}
      - Materials Needed: ${data.materials || "Not Provided"}
      - Learning Objectives: ${data.learningObjectives || "Not Provided"}
      Ensure the response is well-structured for lesson planning.`,
    });

    if (!aiGeneratedPlan) {
      alert("Failed to generate a lesson plan. Please try again.");
      return;
    }

    const formattedPlan: LessonPlanData = {
      topic: data.topic,
      gradeLevel: data.gradeLevel,
      mainConcept: aiGeneratedPlan,
      subTopics: data.subTopics,
      materials: data.materials,
      learningObjectives: data.learningObjectives,
    };

    setLessonPlan(formattedPlan);
  };

  return (
    <div className="container">
      <h2>Create Lesson Plan</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-group">
          <input
            {...register("topic")}
            placeholder="Lesson Topic"
            className="form-control"
            required
          />
        </div>

        <div className="form-group">
          <input
            {...register("gradeLevel")}
            placeholder="Grade Level"
            className="form-control"
            required
          />
        </div>

        <div className="form-group">
          <textarea
            {...register("mainConcept")}
            placeholder="Main Concept"
            className="form-control"
            rows={3}
            required
          />
        </div>

        <div className="form-group">
          <textarea
            {...register("subTopics")}
            placeholder="Sub Topics (one per line)"
            className="form-control"
            rows={3}
            required
          />
        </div>

        <div className="form-group">
          <textarea
            {...register("materials")}
            placeholder="Materials Needed (one per line)"
            className="form-control"
            rows={3}
            required
          />
        </div>

        <div className="form-group">
          <textarea
            {...register("learningObjectives")}
            placeholder="Learning Objectives"
            className="form-control"
            rows={4}
            required
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Generate Lesson Plan
        </button>
      </form>

      {lessonPlan && <PDFGenerator content={lessonPlan} />}
    </div>
  );
};

export default LessonForm;
