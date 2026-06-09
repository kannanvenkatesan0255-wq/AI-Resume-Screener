def generate_questions(skills):

    questions = []

    for skill in skills:

        questions.append(
            f"Explain your experience with {skill}."
        )

        questions.append(
            f"What projects have you built using {skill}?"
        )

    return questions