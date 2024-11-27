import { Box, Typography, List, ListItem, Link } from "@mui/material";
import { Section } from "../../components/Section";
import { ExperienceItem } from "../../components/ExperienceItem";

export function CVPage() {
  return (
    <Box sx={{
      mt: { xs: "5vh", md: "5vh" },
      ml: { xs: "7vw", md: "22vw" },
      mr: { xs: "7vw", md: "22vw" },
      mb: 8
    }}>
      <Section title="EDUCATION">
        <ExperienceItem
          organization="Korea University"
          period="Mar. 2022 - Present"
          role="Undergraduate Student"
          details={[
            "Bachelor of Engineering in Computer Science and Engineering",
            "Total GPA of 4.16 / 4.5 (96.6 / 100),",
            "Major GPA of 4.19 / 4.5"
          ]}
        />
        <ExperienceItem
          organization="University of Toronto"
          period="Jan. 2025 - Apr. 2025 (Expected)"
          role="Exchange Student"
        />
      </Section>

      <Section title="HONORS AND AWARDS">
        <Typography variant="body1" color="#4FA3F0" sx={{ mb: 2 }}>
          * Click on the project names to view their GitHub repositories.
        </Typography>
        <ExperienceItem
          organization="InThon Datathon"
          link="https://github.com/readygetset/inthon2024"
          period="Nov. 2024"
          role="First-Place"
          details={[
            "Awarded by the Dean of the College of Information with a prize of 3,000,000 KRW for developing an image captioning model"
          ]}
        />
        <ExperienceItem
          organization="LG Aimers Online Hackathon"
          link="https://github.com/readygetset/lgaimers5"
          period="Aug. 2024"
          role="Top 2% (15th/740)"
          details={[
            "Led the team in developing a classification model to identify defective products by analyzing structured data from manufacturing processes"
          ]}
        />

        <Box mt={2}>
          <Typography>Academic Excellence Scholarship, Korea University, 2024</Typography>
          <Typography>KU Alumni Scholarships, Korea University, 2024</Typography>
          <Typography>Dean's List, Korea University 2024</Typography>
          <Typography>Semester High Honors, Korea University, 2024</Typography>
          <Typography>Semester High Honors, Korea University, 2023</Typography>
          <Typography>Semester High Honors, Korea University, 2022</Typography>
        </Box>
      </Section>

      <Section title="RESEARCH EXPERIENCE">
        <ExperienceItem
          organization="Data & Adaptive Intelligence Systems Lab, Korea University"
          link="https://dais.korea.ac.kr"
          period="Jul. 2023 - Present"
          role="Undergraduate Intern (Advisor: Professor Susik Yoon)"
          details={[
            "• Researching language modeling on tabular data"
          ]}
        />
      </Section>

      <Section title="INTERNSHIPS">
        <ExperienceItem
          organization="Softfreak"
          link="https://softfreak.kr/"
          period="Jan. 2023 - Feb. 2023, Jul. 2023 - Aug. 2023"
          role="Software Developer Intern"
          details={[
            "• Conducted testing of a software product in a Linux environment to ensure compatibility and performance",
            "• Contributed to modifying the Apache Camel Karavan VSCode plugin to better suit the company's product",
            "• Researched FIDO 2.0 (Passkeys) technology and delivered a seminar for team members"
          ]}
        />
      </Section>

      <Section title="PERSONAL PROJECTS">
        <Typography variant="body1" color="#4FA3F0" sx={{ mb: 2 }}>
          * Click on the project names to view their GitHub repositories.
        </Typography>
        <ExperienceItem
          organization="Fashion Sketch Based Image Retrieval"
          link="https://github.com/readygetset/fashion-sbir"
          period="Jul. 2024 - Aug. 2024"
          role="Team Member"
          details={[
            "• Built a fashion sketch dataset using Canny edge detection and various post-processing techniques",
            "• ine-tuned multimodal SBIR model on fashion dataset"
          ]}
        />
        <ExperienceItem
          organization="Medical Visual Question Answering"
          link="https://github.com/readygetset/medical-vqa"
          period="Jun. 2024 - Jun. 2024"
          role="Individual Project"
          details={[
            "• Term project for course Biomedical AI of 2024-Spring semester",
            "• Developed a VQA model for interpreting medical images",
            "• Compared performance of pretrained models on medical data with general-purpose models"
          ]}
        />
        <ExperienceItem
          organization="Korean Copywriting Generation Model"
          link="https://github.com/readygetset/korean-slm-copywriter"
          period="Apr. 2024 - Jun. 2024"
          role="Team Member"
          details={[
            "• Created a high-quality dataset of 10,000 entries using LLM",
            "• Fine-tuned sLLM models with the created data to develop a model optimized for copywriting generation"
          ]}
        />
        <ExperienceItem
          organization="Korean Chit-Chat Dialog Generation Model"
          link="https://github.com/readygetset/korean-chit-chat-dialog-generation-model"
          period="May. 2024 - May. 2024"
          role="Team Leader"
          details={[
            "• Term project for course Natural Language Processing of 2024-Spring semester",
            "• Applied preprocessing methods suitable for chit-chat dialog data characteristics",
            "• Fine-tuned the model to generate utterances based on the conversational context"
          ]}
        />
        <ExperienceItem
          organization="KLUB"
          link="https://klub.kr"
          period="Sep. 2023 - Feb. 2024"
          role="Frontend Developer"
          details={[
            "• Club management and promotion platform for Korea University"
          ]}
        />
      </Section>

      <Section title="COURSEWORKS">
        <Typography variant="body1" color="#4FA3F0" sx={{ mb: 2 }}>
          * Visit my <Link href="https://boom-zoo-bbe.notion.site/Study-b89e4b92f60448cfa31d442bd22679a4?pvs=74" target="_blank" rel="noopener noreferrer">Study Logs</Link> to see detailed notes and projects from these courses.
        </Typography>
        <List sx={{ p: 0 }}>
          {[
            "Data Structures, Algorithms, Theory of Computation",
            "Digital Logic Design, Computer Architecture, Computer Networks, Operating Systems",
            "Databases, Software Engineering",
            "Artificial Intelligence, Deep Learning, Natural Language Processing, Biomedical AI",
            "Data Science, Data Visualization",
            "Discrete Mathematics, Engineering Mathematics, Probability and Random Processes"
          ].map((course, index) => (
            <ListItem key={index} sx={{ display: 'list-item', p: 0 }}>
              <Typography>
                • {course}
              </Typography>
            </ListItem>
          ))}
        </List>
      </Section>

      <Section title="EXTRACURRICULAR ACTIVITIES">
        <ExperienceItem
          organization="Korea University SW Education Volunteer Group"
          period="Mar. 2024 - Present"
          role="Volunteer"
          details={[
            "• Participated in teaching and operations at SW/AI camps for K-12 students",
            "• Created online and offline lecture contents"
          ]}
        />
        <ExperienceItem
          organization="AIKU: Artificial Intelligence in Korea University"
          period="Jan. 2024 - Present"
          role="Executive Member"
          details={[
            "• Engaged in study groups covering foundational and advanced topics in deep learning",
            "• Mentored junior members in foundational paper study sessions",
            "• Developed problem sets for junior datathon",
            "• Contributed to projects involving practical applications of deep learning techniques"
          ]}
        />
        <ExperienceItem
          organization="KWEB: Korea University Web Master"
          period="Mar. 2023 - Present"
          role="Regular Member"
          details={[
            "• Participated in study groups focusing on both frontend and backend web development",
            "• Engaged in various collaborative projects to develop web services"
          ]}
        />
      </Section>

      <Section title="TECHNICAL SKILLS">
        <List sx={{ p: 0 }}>
          <ListItem sx={{ display: 'list-item', p: 0 }}>
            <Typography>
              <strong>Programming Languages:</strong> Python, C, HTML, CSS, JavaScript
            </Typography>
          </ListItem>
          <ListItem sx={{ display: 'list-item', p: 0 }}>
            <Typography>
              <strong>Frameworks & Tools:</strong> Pytorch, Tensorflow, React, Express.js
            </Typography>
          </ListItem>
        </List>
      </Section>

      <Section title="LANGUAGE PROFICIENCY">
        <Typography>Fluent in <strong>English</strong> and Native in <strong>Korean</strong></Typography>
        <List sx={{ p: 0 }}>
          <ListItem sx={{ display: 'list-item', p: 0 }}>
            <Typography>
              IBT TOEFL: 115 (Reading: 29, Listening: 29, Speaking: 28, Writing: 29)
            </Typography>
          </ListItem>
        </List>
      </Section>
    </Box>
  );
}

