from extract_resume import extract_text
from skill_extractor import extract_skills
from matcher import calculate_match_score
from interview_generator import generate_questions

pdf_path = "sample_resume.pdf"

resume_text = extract_text(pdf_path)

print("===== RESUME TEXT =====")
print(resume_text)

resume_skills = extract_skills(resume_text)

print("\n===== SKILLS FOUND =====")
print(resume_skills)

job_description_skills = [
    "python",
    "mongodb",
    "react",
    "rest api"
]

result = calculate_match_score(
    resume_skills,
    job_description_skills
)

print("\n===== MATCH RESULT =====")
print(result)

questions = generate_questions(resume_skills)

print("\n===== INTERVIEW QUESTIONS =====")

for q in questions:
    print("-", q)