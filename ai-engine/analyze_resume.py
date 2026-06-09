from extract_resume import extract_text
from skill_extractor import extract_skills
from jd_skill_extractor import extract_jd_skills
from matcher import calculate_match_score

import sys
import json

pdf_path = sys.argv[1]
job_description = sys.argv[2]

resume_text = extract_text(pdf_path)

resume_skills = extract_skills(resume_text)

jd_skills = extract_jd_skills(job_description)

result = calculate_match_score(
    resume_skills,
    jd_skills
)

print(json.dumps(result))