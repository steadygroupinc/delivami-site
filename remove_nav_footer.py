import os
import re

base_dir = r"c:\Users\HP\Documents\delivami\landing-page\src\app\case-studies"

for root, dirs, files in os.walk(base_dir):
    for filename in files:
        if filename.endswith(".tsx"):
            file_path = os.path.join(root, filename)
            with open(file_path, "r", encoding="utf-8") as f:
                content = f.read()

            original = content

            # Remove imports
            content = re.sub(r'import\s+\{\s*Navbar\s*\}\s+from\s+"@/components/marketing/Navbar";?\n?', '', content)
            content = re.sub(r'import\s+\{\s*Footer\s*\}\s+from\s+"@/components/marketing/MarketingSections";?\n?', '', content)
            
            # Remove JSX tags
            content = re.sub(r'\s*<Navbar\s*/>\n?', '', content)
            content = re.sub(r'\s*<Footer\s*/>\n?', '', content)

            if content != original:
                with open(file_path, "w", encoding="utf-8") as f:
                    f.write(content)
                print(f"Updated {file_path}")

print("Done.")
