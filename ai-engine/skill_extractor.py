from skills_db import skills

def extract_skills(resume_text):

    resume_text = resume_text.lower()

    found_skills = []

    for skill in skills:
        if skill in resume_text:
            found_skills.append(skill)

    return found_skills