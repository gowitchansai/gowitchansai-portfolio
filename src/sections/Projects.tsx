import ComingSoonCard from "../components/cards/ComingSoonCard";
import ProjectCard from "../components/cards/ProjectCard";
import Photo_ML from "../assets/image/ML.png";

const ML_REPO =
  "https://github.com/gowitchansai/Machine-Learning-Risk-Prediction";

const ProjectsSection = () => {
  return (
    <section className="py-12 bg-white" id="Projects">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-6 gap-4">
          <h2 className="text-2xl md:text-3xl font-black text-slate-900 tracking-tight">
            My Projects
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          
          <ProjectCard
            title="Machine Learning Risk Prediction"
            image={Photo_ML}
            description="โปรเจกต์จบด้าน Machine Learning สำหรับทำนายระดับความเสี่ยงของเครื่องจักรจากข้อมูล Sensor"
            tags={[
              "Final Project",
              "Machine Learning",
              "MATLAB",
              "SVM",
              "Predictive Maintenance",
            ]}
            github={ML_REPO}
          />

          <ProjectCard
            title="Task Master ตัวอย่าง "
            image="/projects/task-master.png"
            description="Collaborative project management tool inspired by Trello"
            tags={["Next.js", "Prisma", "Postgres"]}
            github="https://github.com/xxx/task-master"
            liveDemo="https://task-master.vercel.app"
          />

          <ProjectCard
            title="Task Master"
            image="https://lh3.googleusercontent.com/aida-public/AB6AXuAdkNJdYlT_89rnBlowinTHNunfCmB9u6183AkAWj0JUSablHst9dcRLRSudawHvjbn5wkL6VJKnd8NsdMcKjvPeDdbyiDf4xZSCfhiBwAf55puPa8uMluiELC8Mrhi-NmQ_CinsogHF8vwekng_HLDKS1Fcxqg3noP-r9XH_VN8IGw-LwbCatYI2GFnzYSwDveQwXfG6MdLTCHYfcdLHugPJzJ5ELiUkoz-kNKv1yvEU8HObEjYoCbDZXtLUCknKg8Kin8tMuVJNzE"
            description="A collaborative project management tool inspired by Trello. Users can create boards, drag and drop tasks, and assign team members in real-time."
            tags={["Next.js", "Prisma", "Postgres"]}
          />

          <ComingSoonCard />
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
