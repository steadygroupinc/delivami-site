import os
import re

base_dir = r"c:\Users\HP\Documents\delivami\landing-page\src\app\case-studies"
long_text = "Funds are typically settled to your Mobile Money or Bank account within 24-48 hours of a successful client payment through our secure payout gateway."

for root, dirs, files in os.walk(base_dir):
    for filename in files:
        if filename.endswith(".tsx"):
            file_path = os.path.join(root, filename)
            with open(file_path, "r", encoding="utf-8") as f:
                content = f.read()

            original = content

            # Terminology
            content = content.replace("Same-Day Payment", "Payment within 24-48 Hours")
            content = content.replace("Same-day payment replaces the invoice wait", "Payment within 24-48 hours replaces the invoice wait")
            content = content.replace("Same-day payment replaces the invoice PDF", "Payment within 24-48 hours replaces the invoice PDF")
            content = content.replace("same-day Mobile Money/Bank", "Mobile Money/Bank within 24-48 hours")
            content = content.replace("Same-day payment", "Payment within 24-48 hours")
            content = content.replace("same-day payment", "payment within 24-48 hours")
            content = content.replace("Same day pay", "Pay within 24-48 hours")
            content = content.replace("same-day pay", "pay within 24-48 hours")
            content = content.replace("Same day", "Within 24-48 hours")
            content = content.replace("same day", "within 24-48 hours")
            
            # The long explanation replace
            content = re.sub(r"Funds are typically settled to your Mobile Money or Bank account within 24-48 hours\.", long_text, content)
            content = re.sub(r"Funds are typically settled to your Mobile Money or Bank account within 24-48 hours of a successful client payment through our secure payout gateway\.", long_text, content)
            content = content.replace("Funds arise within 24-48 hours.", long_text)
            content = content.replace("Funds arrive within 24-48 hours.", long_text)
            content = content.replace("Payment via Mobile Money or Bank account within 24-48 hours.", long_text)
            content = content.replace("Funds are typically settled to your Mobile Money or Bank account same day.", long_text)
            content = content.replace("Payment via Mobile Money or Bank account same day.", long_text)
            content = content.replace("Funds arrive same day.", long_text)

            # Safely remove free buttons - maximum 250 characters inside, no '<div' to prevent huge matches 
            content = re.sub(r'<button[^>]*>(?:(?!</button>).)*Start your free account(?:(?!</button>).)*</button>', '', content, flags=re.DOTALL)
            content = re.sub(r'<button[^>]*>(?:(?!</button>).)*Start free(?:(?!</button>).)*</button>', '', content, flags=re.DOTALL)
            content = re.sub(r'<button[^>]*>(?:(?!</button>).)*Start Free Trial(?:(?!</button>).)*</button>', '', content, flags=re.DOTALL)
            
            # Remove naked anchors that had Start Free inside (if any)
            content = re.sub(r'<Link[^>]*>(?:(?!</Link>).)*(?:Start free|Start your free account|Start Free Trial)(?:(?!</Link>).)*</Link>', '', content, flags=re.DOTALL)

            # Free copy
            content = content.replace("Start free. Your first gallery is live in under two minutes. No credit card required.", "Your first gallery is live in under two minutes.")
            content = content.replace("Start free. Your first delivery link takes thirty seconds to create. No credit card required.", "Your first delivery link takes thirty seconds to create.")
            content = content.replace("Start free. Your first branded delivery page takes thirty seconds to create.", "Your first branded delivery page takes thirty seconds to create.")
            content = content.replace("Start free. Your first branded delivery link takes thirty seconds. No credit card. No team required.", "Your first branded delivery link takes thirty seconds. No team required.")
            content = content.replace("Start free — your first delivery link takes thirty seconds to create.", "Your first delivery link takes thirty seconds to create.")
            content = content.replace("Preview 4 free", "Preview 4 images")
                        
            # Specific updates for the main case studies page
            if filename == "page.tsx" and root == base_dir:
                content = content.replace('            {/* Card 1 */}\n            <Link className="cs-card" href="#">', '            {/* Card 1 */}\n            <Link className="cs-card" href="/case-studies/photographers">')
                content = content.replace('            {/* Card 2 */}\n            <Link className="cs-card" href="#">', '            {/* Card 2 */}\n            <Link className="cs-card" href="/case-studies/video-editors">')
                content = content.replace('            {/* Card 3 */}\n            <Link className="cs-card" href="#">', '            {/* Card 3 */}\n            <Link className="cs-card" href="/case-studies/designers">')
                content = content.replace('            {/* Card 4 */}\n            <Link className="cs-card" href="#">', '            {/* Card 4 */}\n            <Link className="cs-card" href="/case-studies/motion-graphics">')
                
                content = content.replace('<Link className="role-card" href="#" style={{ \'--rc-accent\': \'#5BA4F5\' } as any}>', '<Link className="role-card" href="/case-studies/video-editors" style={{ \'--rc-accent\': \'#5BA4F5\' } as any}>')
                content = content.replace('<Link className="role-card" href="#" style={{ \'--rc-accent\': \'#35D073\' } as any}>', '<Link className="role-card" href="/case-studies/photographers" style={{ \'--rc-accent\': \'#35D073\' } as any}>')
                content = content.replace('<Link className="role-card" href="#" style={{ \'--rc-accent\': \'#A78BFA\' } as any}>', '<Link className="role-card" href="/case-studies/designers" style={{ \'--rc-accent\': \'#A78BFA\' } as any}>')
                content = content.replace('<Link className="role-card" href="#" style={{ \'--rc-accent\': \'#FBBF24\' } as any}>', '<Link className="role-card" href="/case-studies/motion-graphics" style={{ \'--rc-accent\': \'#FBBF24\' } as any}>')
                
                content = content.replace('              {/* Solopreneurs */}\n              <Link className="scale-card" href="#" id="solopreneurs-card">', '              {/* Solopreneurs */}\n              <Link className="scale-card" href="/case-studies/solopreneurs" id="solopreneurs-card">')

                content = content.replace('<button className="btn-g">Browse all case studies</button>', '<button className="btn-g">Get Early Access</button>')

            if content != original:
                with open(file_path, "w", encoding="utf-8") as f:
                    f.write(content)
                print(f"Updated {file_path}")

print("Done.")
