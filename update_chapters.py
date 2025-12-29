import os
import re

def update_chapter(md_file, image_dir, mapping):
    if not os.path.exists(md_file):
        print(f"File not found: {md_file}")
        return

    with open(md_file, 'r', encoding='utf-8') as f:
        content = f.read()

    # Updated regex to handle parentheses and spaces in URLs more reliably
    matches = re.findall(r'!\[.*?\]\((https://s3-us-west-2\.amazonaws\.com/secure\.notion-static\.com/([a-f0-9-]+)/[^\)]+)\)', content)
    
    updated_content = content
    for full_url, url_id in matches:
        if url_id in mapping:
            local_name = mapping[url_id]
            # Replace the entire ![]() with the local path
            # But wait, we want it relative to the MD file or absolute for the webapp?
            # The webapp expects /whitepaper/{chapter}/images/{name}
            chapter_name = os.path.basename(image_dir.rstrip('/\\'))
            local_path = f"/whitepaper/{chapter_name}/images/{local_name}"
            
            # Escape the URL for regex replace or use simple replace
            updated_content = updated_content.replace(full_url, local_path)
            print(f"Updated {url_id} -> {local_name}")
        else:
            print(f"No mapping for URL ID: {url_id}")

    with open(md_file, 'w', encoding='utf-8') as f:
        f.write(updated_content)

def main():
    community_md = "u:/TheGrandeNarrative/tuc-template/community-factions.md"
    admin_md = "u:/TheGrandeNarrative/tuc-template/admin-factions.md"
    
    community_map = {
        "fb734696": "dystopian_landscape_main.png",
        "2b1a3f92": "intro_hero.png",
        "1525b20f": "intro_landscape.png",
        "4a0b0a9c": "yard_social.png",
        "9077d85d": "commissary.png",
        "f4a376da": "visiting.png",
        "6df5ba25": "intake.png",
        "68380a54": "factions_unity.png",
        "8f96cc22": "community_factions_crest.png",
        "3f014a4b": "guards_action.png",
        "f34109f3": "warden_portrait.png",
        "96c0aa76": "warden_official_standing.png",
        "92ccd26f": "copper_facility.png",
        "6752a423": "features_overview.png",
        "0dafb47f": "pot_lab.png",
        "74b0fd16": "conclusion_hero.png",
        "86b4d03a": "bootleggers_hq.png"
    }

    admin_map = {
        "c87e9346": "admin_hero.png",
        "c178e129": "web3_architecture.png",
        "e8a1a408": "army_enforcement.png",
        "c178aa7e": "ciu_ops.png",
        "4cb36c45": "sheriff_office.png",
        "1a283232": "code_conduct.png",
        "7fa6de9e": "elections_process.png",
        "dedf5e4c": "stability_vision.png",
        "1bec74ea": "department_badge.png",
        "d5d886a4": "sheriff_portrait.png",
        "2702bc5b-bd66-4d92-92ce-cf42b9c2eca7": "elections_meeting.png"
    }

    update_chapter(community_md, "public/whitepaper/community", community_map)
    update_chapter(admin_md, "public/whitepaper/admin", admin_map)

if __name__ == "__main__":
    main()
