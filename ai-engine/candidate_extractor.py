import re
import pdfplumber
import sys

pdf_path = sys.argv[1]

text = ""

with pdfplumber.open(pdf_path) as pdf:
    for page in pdf.pages:
        text += page.extract_text() + "\n"

# Email
email_match = re.search(
    r"[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}",
    text
)

email = email_match.group() if email_match else "Not Found"

# Name (first non-empty line)
lines = text.split("\n")

name = "Unknown"

for line in lines:
    line = line.strip()

    if len(line) > 2:
        name = line
        break

import json

print(json.dumps({
    "name": name,
    "email": email
}))