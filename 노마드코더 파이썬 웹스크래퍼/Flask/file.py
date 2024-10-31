def save_to_file(file_name, jobs):
    with open(f"{file_name}.csv", "w", encoding="utf-8") as file:
        file.write("Position,Company,URL\n")

        for job in jobs:
            file.write(f"{job['position']},{job['company']},{job['link']}\n")

