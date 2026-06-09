import re
from skills_db import skills

def extract_jd_skills(jd_text):

    jd_text = jd_text.lower()

    words = re.findall(r'\b[\w.+#-]+\b', jd_text)

    found_skills = []

    for skill in skills:

        if " " in skill:

            if skill in jd_text:
                found_skills.append(skill)

        else:

            if skill.lower() in words:
                found_skills.append(skill)

    return found_skills


# Testing
if __name__ == "__main__":

    jd = """
    Looking for a Python Developer with experience in
    MongoDB, React, REST API and Node.js.
    """

    skills_found = extract_jd_skills(jd)

    print("JD Skills Found:")
    print(skills_found)