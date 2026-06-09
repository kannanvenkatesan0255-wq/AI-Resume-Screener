def calculate_match_score(resume_skills, jd_skills):

    matched = []

    missing = []

    for skill in jd_skills:

        if skill.lower() in resume_skills:
            matched.append(skill)

        else:
            missing.append(skill)

    if len(jd_skills) == 0:
        score = 0

    else:
        score = (len(matched) / len(jd_skills)) * 100

    return {
        "score": round(score, 2),
        "matched": matched,
        "missing": missing
    }