from allure_combine import combine_allure

# 1) Create complete.html in allure-generated folder
combine_allure("./allure-report")

# 2) Create complete.html in specified folder
combine_allure("./allure-report", dest_folder="/tmp")

# 3) Make sure that dest folder exists, create if not
combine_allure(
    "./allure-report",
    dest_folder="/tmp/allure-2022-05-05_12-20-01/result",
    auto_create_folders=True
)

# 4) Remove sinon.js and server.js from allure folder after complete.html is generated:
combine_allure(
    "./allure-report",
    remove_temp_files=True
)

# 5) If html/json files what should be utf-8 is has broken encoding, ignore errors:
combine_allure(
    "./allure-report",
    ignore_utf8_errors=True
)

